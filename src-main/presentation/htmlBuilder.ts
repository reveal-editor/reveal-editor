import { SlideConfig } from '../../src-shared/entities/SlideConfig'
import {
    BASE_FILE_NAME,
    PRESENTATION_SCRIPT_FILENAME,
    PREVIEW_FULLSCREEN_SCRIPT_FILENAME,
    PREVIEW_SMALL_SCRIPT_FILENAME,
    loadAssetContent,
} from '../../src-main/helpers/assets'
import { Presentation } from '../../src-shared/entities/Presentation'
import { TemplateConfig, getThemeMatching } from './TemplateConfig'

// presentation
const STYLESHEETS_TOKEN = '@@stylesheets@@'
const TITLE_TOKEN = '@@title@@'
const AUTHOR_TOKEN = '@@author@@'
const PRESESENTATION_TOKEN = '@@presentation@@'
const REVEAL_TOKEN = '@@reveal@@'
const PLUGINS_TOKEN = '@@plugins@@'
const REVEAL_EDITOR_TOKEN = '@@reveal-editor@@'
const ENTRY_TOKEN = '@@entry@@'

// presentation content
const CONTENT_TOKEN = '@@content@@'

// layout
const LAYOUT_SLOT_TOKEN = '@@slot@@'

/*
 * ---------- Build Presentation ----------
 */

export type HTMLPresentationBulidConfig = {
    presentation: Presentation
    templateConfig: TemplateConfig
    type: HTMLPresentationBuildType
}

export type HTMLPresentationBuildType = 'export' | 'preview-small' | 'preview-fullscreen'

export async function buildHTMLPresentation(config: HTMLPresentationBulidConfig): Promise<string> {
    const { presentation, templateConfig } = config

    let buildingFile = await loadAssetContent(BASE_FILE_NAME)
    const replaceToken = (token: string, content?: string) => {
        buildingFile = buildingFile.replace(token, content ?? '')
    }

    replaceToken(TITLE_TOKEN, presentation.config.title)
    replaceToken(AUTHOR_TOKEN, presentation.config.author)
    replaceToken(PRESESENTATION_TOKEN, presentation.html)

    replaceToken(STYLESHEETS_TOKEN, generateStylesheets(config))
    replaceToken(REVEAL_TOKEN, scriptWithSource(templateConfig.reveal.entry))
    replaceToken(PLUGINS_TOKEN, generatePluginScripts(templateConfig.plugins))
    replaceToken(REVEAL_EDITOR_TOKEN, await getRevealEditorScriptContent(config.type))
    replaceToken(ENTRY_TOKEN, scriptWithSource(templateConfig.template.entry))

    return buildingFile
}

async function getRevealEditorScriptContent(type: HTMLPresentationBuildType): Promise<string> {
    let scriptName = ''
    if (type === 'export') scriptName = PRESENTATION_SCRIPT_FILENAME
    else if (type === 'preview-fullscreen') scriptName = PREVIEW_FULLSCREEN_SCRIPT_FILENAME
    else if (type === 'preview-small') scriptName = PREVIEW_SMALL_SCRIPT_FILENAME

    const scriptContent = await loadAssetContent(scriptName)
    return `<script>${scriptContent}</script>`
}

function generatePluginScripts(pluginsPaths?: string[]): string {
    if (!pluginsPaths || pluginsPaths.length == 0) return ''
    return pluginsPaths.map(scriptWithSource).reduce((prev, curr) => `${prev}\n${curr}`)
}

function scriptWithSource(src: string) {
    return `<script src="${src}"></script>`
}

function generateStylesheets({ presentation, templateConfig }: HTMLPresentationBulidConfig): string {
    const theme = getThemeMatching(templateConfig, presentation.config.theme)
    const styleSheetPaths = [
        ...templateConfig.reveal.stylesheets,
        ...(theme?.stylesheets ?? []),
        ...(templateConfig.template.stylesheets ?? []),
    ]

    if (styleSheetPaths.length == 0) return ''
    return styleSheetPaths
        .map(styleSheetPath => `<link rel="stylesheet" href="${styleSheetPath}">`)
        .reduce((prev, curr) => `${prev}\n${curr}`)
}

/*
 * ---------- Build Slides ----------
 */

export type HTMLPresentationContent = {
    slidesHtml: string[]
}

export function buildHTMLPresentationContent(
    presentationContentBaseHtml: string,
    content: HTMLPresentationContent
): string {
    const slides = content.slidesHtml.length === 0 ? '' : content.slidesHtml.reduce((prev, next) => `${prev}\n${next}`)
    return presentationContentBaseHtml.replace(CONTENT_TOKEN, slides)
}

/*
 * ---------- Build Layout ----------
 */

export type HTMLLayoutContent = {
    slots: string[]
    slideConfig: SlideConfig
}

export function buildHTMLLayout(layoutFileHtml: string | undefined, content: HTMLLayoutContent): string {
    let buildingFile = layoutFileHtml ?? LAYOUT_SLOT_TOKEN
    const occurences = (buildingFile.match(RegExp(LAYOUT_SLOT_TOKEN, 'g')) || []).length

    if (occurences >= content.slots.length) {
        for (let i = 0; i < occurences; i++) {
            buildingFile = buildingFile.replace(LAYOUT_SLOT_TOKEN, content.slots[i] || '')
        }
    } else {
        const slots = []
        for (let i = 0; i < occurences; i++) {
            if (i + 1 < occurences) slots.push(content.slots[i] ?? '')
            else {
                // merge rest of slots into last slot
                const rest = content.slots.slice(i)
                if (rest.length <= 1) slots.push(...rest)
                else slots.push(rest.reduce((prev, next) => `${prev}${next}`))
            }
        }

        slots.forEach(slot => {
            buildingFile = buildingFile.replace(LAYOUT_SLOT_TOKEN, slot)
        })
    }

    const classes = [...(content.slideConfig.class ?? [])]
    const stylesObject = { ...(content.slideConfig.style ?? {}) }
    const styles = Object.entries(stylesObject).map(([key, value]) => `${key}: ${value};`)
    const transition = content.slideConfig.transition
    const transitionSpeed = content.slideConfig['transition-speed']

    let sectionOpenTag = `<section`
    if (classes.length > 0) sectionOpenTag += ` class="${classes.reduce((prev, next) => `${prev} ${next}`)}"`
    if (styles.length > 0) sectionOpenTag += ` style="${styles.reduce((prev, next) => `${prev} ${next}`)}"`
    if (transition) sectionOpenTag += ` data-transition="${transition}"`
    if (transitionSpeed) sectionOpenTag += `data-transition-speed="${transitionSpeed}"`
    sectionOpenTag += '>'

    buildingFile = `${sectionOpenTag}${buildingFile}</section>`

    return buildingFile
}
