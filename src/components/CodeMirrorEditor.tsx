import { history, indentWithTab, redo, undo } from '@codemirror/commands'
import { StreamLanguage, LRLanguage, syntaxHighlighting, HighlightStyle } from '@codemirror/language'
import { tags } from '@lezer/highlight'
import { parser as mdParser, Strikethrough } from '@lezer/markdown'
import { parseMixed } from '@lezer/common'
import { yaml } from '@codemirror/legacy-modes/mode/yaml'
import { EditorSelection, EditorState, Line, SelectionRange, Text } from '@codemirror/state'
import { RegExpCursor } from '@codemirror/search'
import { EditorView, ViewPlugin, keymap, drawSelection, lineNumbers } from '@codemirror/view'
import { Ref, forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { useEditorStore } from '../store'
import { parser } from '../parser/slidesParser'

export type CodeMirrorEditorProps = {
    className?: string
}

const myHighlightStyle = HighlightStyle.define([
    { tag: tags.keyword, class: 'text-violet-700 font-bold' },
    { tag: tags.heading1, class: 'font-bold text-2xl' },
    { tag: tags.heading2, class: 'font-bold text-xl' },
    { tag: tags.heading3, class: 'font-bold text-lg' },
    { tag: tags.heading4, class: 'font-bold' },
    { tag: tags.heading5, class: 'font-bold' },
    { tag: tags.heading6, class: 'font-bold' },
    { tag: tags.url, class: 'text-violet-300' },
    { tag: tags.contentSeparator, class: 'font-bold text-violet-400' },
    { tag: tags.emphasis, class: 'italic' },
    { tag: tags.strong, class: 'font-bold' },
    { tag: tags.strikethrough, class: 'line-through' },
])

const myTheme = EditorView.baseTheme({
    '&': {
        fontSize: '12pt',
    },
})

const mixedParser = parser.configure({
    wrap: parseMixed(node => {
        if (node.name === 'YamlContent') return { parser: StreamLanguage.define(yaml).parser }
        else if (node.name === 'MarkdownContent') return { parser: mdParser.configure(Strikethrough) }
        else if (node.name === 'StartDelimiter') return { parser: mdParser }
        return null
    }),
})

const mixedPlugin = LRLanguage.define({ parser: mixedParser })

export type CodeMirrorEditorRef = {
    onAddSlide(layout?: string): void
    onAddFormat(prefix: string, suffix?: string): void
    onAddBlock(prefix: string): void
    onAddHeading(prefix: string): void
    onAddModifier(className: string): void
    onAddClass(className: string): void
    onAddDataTag(dataTag: string): void
    onAddMedia(path: string): void
}

export const CodeMirrorEditor = forwardRef((props?: CodeMirrorEditorProps, ref?: Ref<CodeMirrorEditorRef>) => {
    const editorView = useRef<EditorView | undefined>()

    const editingFilePath = useEditorStore(state => state.editingFilePath)
    const [content, updateContent] = useEditorStore(state => [state.content, state.updateContent])

    useImperativeHandle(ref, () => ({
        onAddSlide(layout) {
            if (editorView.current && layout) {
                editorView.current.dispatch(editorView.current.state.replaceSelection(layout))
            }
        },
        onAddFormat(prefix, suffix) {
            if (!editorView.current) return

            let unwrappedPrefix = prefix ?? ''
            let unwrappedSuffix = suffix ?? prefix ?? ''

            const currentMarkdown = markdownSelectionInSlide(editorView.current)
            const selection = changeInRange(editorView.current, currentMarkdown, (doc, oldValue) => {
                unwrappedPrefix = addSpace(doc, currentMarkdown.from, unwrappedPrefix, true, false)
                unwrappedSuffix = addSpace(doc, currentMarkdown.to, unwrappedSuffix, false, true)
                return `${unwrappedPrefix}${oldValue}${unwrappedSuffix}`
            })
            setCursorPosition(editorView.current, selection.to - unwrappedSuffix.length)
        },
        onAddBlock(prefix) {
            if (!editorView.current) return

            const line = currentMarkdownLineInSlide(editorView.current)
            const position = insertAtPosition(editorView.current, prefix, line.from)
            setCursorPosition(editorView.current, position)
        },
        onAddHeading(prefix) {
            if (!editorView.current) return

            let line = currentMarkdownLineInSlide(editorView.current)
            line = removeHeadingFromLine(editorView.current, line)
            const position = insertAtPosition(editorView.current, prefix, line.from)
            setCursorPosition(editorView.current, position)
        },
        onAddModifier(className) {
            if (editorView.current) {
                editorView.current.dispatch(editorView.current.state.replaceSelection(className))
            }
        },
        onAddClass(className) {
            if (!editorView.current) return
            const state = editorView.current.state
            const currentSlide = findCurrentSlide(state)

            if (currentSlide?.frontMatter) {
                let newCursorPosition: number

                const line = rangeHasLineStartingWith('class:', editorView.current.state, currentSlide.frontMatter)
                if (line) {
                    const yamlMultiline =
                        isYAMLArray(line, state, currentSlide.frontMatter) ??
                        isYAMLMultiline(line, state, currentSlide.frontMatter)
                    if (yamlMultiline) {
                        newCursorPosition = insertLineWithPrefix(
                            editorView.current,
                            className,
                            yamlMultiline.nextPosition,
                            yamlMultiline.prefix
                        )
                    } else {
                        newCursorPosition = insertAtEndOfLine(editorView.current, className, line)
                    }
                } else {
                    newCursorPosition = insertLine(
                        editorView.current,
                        `class: ${className}`,
                        currentSlide.frontMatter.to
                    )
                }

                setCursorPosition(editorView.current, newCursorPosition)
            }
        },
        onAddDataTag(dataTag) {
            if (!editorView.current) return
            const state = editorView.current.state
            const currentSlide = findCurrentSlide(state)

            if (currentSlide?.frontMatter) {
                const line = rangeHasLineStartingWith(`${dataTag}:`, editorView.current.state, currentSlide.frontMatter)
                if (line) {
                    setCursorPosition(editorView.current, line.to)
                } else {
                    const cursorPosition = insertLine(editorView.current, `${dataTag}: `, currentSlide.frontMatter.to)
                    setCursorPosition(editorView.current, cursorPosition)
                }
            }
        },
        onAddMedia(path) {
            if (editorView.current) {
                editorView.current.dispatch(editorView.current.state.replaceSelection(path))
            }
        },
    }))

    const editorDomNode = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const updatePlugin = ViewPlugin.define(() => ({
            update: viewUpdate => updateContent(viewUpdate.state.doc.sliceString(0)),
        }))

        const state = EditorState.create({
            doc: content,
            extensions: [
                myTheme,
                mixedPlugin,
                syntaxHighlighting(myHighlightStyle),
                updatePlugin,
                keymap.of([indentWithTab]),
                history(),
                EditorView.lineWrapping,
                drawSelection(),
                lineNumbers(),
            ],
        })

        const parent = editorDomNode.current

        if (parent && state) {
            editorView.current = new EditorView({ state, parent })
        }

        const view = editorView.current

        window.ipc.menu.onUndo(() => view && undo(view))
        window.ipc.menu.onRedo(() => view && redo(view))

        return () => view?.destroy()
    }, [editingFilePath])

    return <div ref={editorDomNode} className={`flex-grow overflow-y-auto ${props?.className}`}></div>
})

type SimpleRange = {
    from: number
    to: number
}

type SlideSelection = {
    index: number
    frontMatter: SelectionRange
    markdown: SelectionRange
}

/**
 * Get the selecton ranges for both front matter and markdown that
 * represent the slide in which the cursor is currently positioned.
 * @param state Editor state to search in
 * @returns Information about the current slide or `undefined` if no slide is found
 */
function findCurrentSlide(state: EditorState): SlideSelection | undefined {
    const regexQuery = '^---(.|\n)*?^---'

    const currentPosition = state.selection.main.from

    const cursor = new RegExpCursor(state.doc, regexQuery)

    let currentFrontMatter: SimpleRange | undefined
    let nextFrontMatter: SimpleRange | undefined

    let nextIndex = -1

    while (!cursor.done) {
        currentFrontMatter = nextFrontMatter
        nextFrontMatter = cursor.next().value
        nextIndex++
        if (nextFrontMatter && nextFrontMatter.from > currentPosition) break
    }

    if (cursor.done) nextFrontMatter = undefined // cursor was in last slide, there is no next
    if (!currentFrontMatter) return undefined

    const currentMarkdown = { from: currentFrontMatter.to + 1, to: (nextFrontMatter?.from ?? state.doc.length) - 1 }

    const frontMatterSecondLine = state.doc.lineAt(currentFrontMatter.from).number + 1
    const frontMatterSecondLastLine = state.doc.lineAt(currentFrontMatter.to).number - 1

    const trimmedFrontMatter: SimpleRange = {
        from: state.doc.line(frontMatterSecondLine).from,
        to: state.doc.line(frontMatterSecondLastLine).to,
    }

    return {
        index: nextIndex - 1,
        frontMatter: EditorSelection.range(trimmedFrontMatter.from, trimmedFrontMatter.to),
        markdown: EditorSelection.range(currentMarkdown.from, currentMarkdown.to),
    }
}

/**
 * Check whether there is a line that starts with the given prefix
 * inside the given range.
 * @param start The prefix of the line.
 * @param state The editor state to search in.
 * @param range The range in which search is performed.
 * @returns The line which starts with the given prefix or
 * `undefined` if no line is found.
 */
function rangeHasLineStartingWith(start: string, state: EditorState, range: SimpleRange): Line | undefined {
    const { doc } = state
    const startLine = doc.lineAt(range.from).number
    const endLine = doc.lineAt(range.to).number

    let currentLine = startLine - 1 // iterator.next starts at first line

    const it = doc.iterLines(startLine, endLine + 1)
    while (!it.done) {
        const line = it.next().value
        currentLine++
        if (line.startsWith(start)) return doc.line(currentLine)
    }

    return undefined
}

/**
 * Returns the position of the next line that follows 1-n lines
 * that match the given regex query + the first match of the query.
 * @param line The line after which the search should start.
 * @param state The state to search in.
 * @param range The range to search in.
 * @param regexQuery The query to match on.
 * @returns An object consisting of the position of the new
 * line and the result of the first match, or `undefined` if no
 * match was found.
 */
function nextLineAfterMatches(
    line: Line,
    state: EditorState,
    range: SimpleRange,
    regexQuery: string
): { nextPosition: number; firstMatch: string } | undefined {
    const { doc } = state

    const startLine = line.number + 1
    const endLine = doc.lineAt(range.to).number

    const regExp = new RegExp(regexQuery)

    let currentLine = startLine - 1 // iterator.next starts at first line
    let firstMatch: string | undefined

    const it = doc.iterLines(startLine, endLine)
    while (!it.done) {
        const line = it.next().value
        const match = regExp.exec(line)
        if (!match) break

        currentLine++
        if (firstMatch === undefined) firstMatch = match[0]
    }

    if (firstMatch === undefined) return undefined

    const nextLine = doc.line(currentLine + 1)
    return { nextPosition: nextLine.from, firstMatch }
}

/**
 * Check whether the given line is the start of a YAML array,
 * i.e., the next line is starting with at least 1 white space character
 * (excluding newline), followed by `- `.
 * @param line The line of the YAML element to check.
 * @param state The editor state to search in.
 * @param range The range in which search is performed.
 * @returns The searched prefix and the position to insert the
 * next value if it is an array, else `undefined`.
 */
function isYAMLArray(
    line: Line,
    state: EditorState,
    range: SimpleRange
): { nextPosition: number; prefix: string } | undefined {
    // Line starting with at least 1 white space character (excluding newline),
    // followed by a `- `, capture the match
    const regexQuery = '^[^\\S\\r\\n]+- '
    const match = nextLineAfterMatches(line, state, range, regexQuery)

    if (!match) return undefined
    return { nextPosition: match.nextPosition, prefix: match.firstMatch }
}

/**
 * Check whether the given line is the start of a YAML multiline object,
 * i.e., the next line is starting with at least 1 white space character
 * (excluding newline).
 * @param line The line of the YAML element to check.
 * @param state The editor state to search in.
 * @param range The range in which search is performed.
 * @returns The searched prefix and the position to insert the
 * next value if it is an array, else `undefined`.
 */
function isYAMLMultiline(
    line: Line,
    state: EditorState,
    range: SimpleRange
): { nextPosition: number; prefix: string } | undefined {
    // Line starting with at least 1 white space character (excluding newline),
    // capture the white space characters
    const regexQuery = '^[^\\S\\r\\n]+'
    const match = nextLineAfterMatches(line, state, range, regexQuery)

    if (!match) return undefined
    return { nextPosition: match.nextPosition, prefix: match.firstMatch }
}

function insertAtEndOfLine(editorView: EditorView, value: string, line: Line) {
    const { doc } = editorView.state
    const spacedValue = addSpace(doc, line.to, value, true, false)
    return insertAtPosition(editorView, spacedValue, line.to)
}

function insertLineWithPrefix(editorView: EditorView, entry: string, from: number, prefix: string) {
    return insertAtPosition(editorView, `${prefix}${entry}\n`, from) - 1
}

function insertLine(editorView: EditorView, value: string, from: number) {
    return insertAtPosition(editorView, `${value}\n`, from + 1) - 1
}

function insertAtPosition(editorView: EditorView, value: string, from: number) {
    editorView.dispatch(
        editorView.state.update({
            changes: {
                from,
                insert: value,
            },
        })
    )

    return from + value.length
}

function addSpace(doc: Text, position: number, value: string, leading: boolean, trailing: boolean): string {
    const spaceRegex = '\\s'

    const start = Math.max(0, position - 1)
    const docText = doc.sliceString(start, start + 1)

    const isSpace = docText.match(spaceRegex)

    let modified = value
    if (leading && !isSpace) modified = ` ${modified}`
    if (trailing && !isSpace) modified = `${modified} `

    return modified
}

function setCursorPosition(editorView: EditorView, position: number) {
    editorView.dispatch({ selection: { anchor: position, head: position } })
    editorView.focus()
}

function changeInRange(
    editorView: EditorView,
    range: SelectionRange,
    newValue: (doc: Text, oldValue: string) => string
) {
    const currentText = editorView.state.doc.sliceString(range.from, range.to)
    const newText = newValue(editorView.state.doc, currentText)

    editorView.dispatch(
        editorView.state.update({
            changes: {
                from: range.from,
                to: range.to,
                insert: newText,
            },
        })
    )

    return EditorSelection.range(range.from, range.from + newText.length)
}

function markdownSelectionInSlide(editorView: EditorView): SelectionRange {
    const { state } = editorView

    const currentSlide = findCurrentSlide(state)
    if (!currentSlide) {
        const documentEnd = state.doc.length
        return EditorSelection.range(documentEnd, documentEnd)
    }

    const currentSelection = state.selection.main
    const markdownRange = currentSlide.markdown

    const start = Math.max(markdownRange.from, Math.min(markdownRange.to, currentSelection.from))
    const end = Math.min(markdownRange.to, Math.max(markdownRange.from, currentSelection.to))

    return EditorSelection.range(start, end)
}

function currentMarkdownLineInSlide(editorView: EditorView): Line {
    const { state } = editorView
    const markdownSelection = markdownSelectionInSlide(editorView)

    return state.doc.lineAt(markdownSelection.from)
}

function removeHeadingFromLine(editorView: EditorView, line: Line): Line {
    const regexQuery = '^#+ *'
    const match = line.text.match(regexQuery)

    if (match) {
        console.log('found match', match[0])
        const to = line.from + match[0].length
        const newSelection = changeInRange(editorView, EditorSelection.range(line.from, to), () => '')
        return editorView.state.doc.lineAt(newSelection.from)
    } else {
        console.log('no match found')
    }

    return line
}
