import { resolve, relative } from 'path'
import { readFile, writeFile, mkdir, rm, rmdir } from 'fs/promises'
import { parse } from 'yaml'
import { copy } from 'fs-extra'
import { app } from 'electron'
import { existsSync } from 'fs'
import { parseConfig } from '../helpers/config'

// base.html
const SLIDE_TOKEN = '@@slide@@'
const AUTHOR_TOKEN = '@@author@@'
const TITLE_TOKEN = '@@title@@'
const STYLESHEETS_TOKEN = '@@stylesheets@@'
const SCRIPTS_TOKEN = '@@scripts@@'

// template
const BASE_FILE_NAME = 'base.html'
const CONFIG_FILE_NAME = 'config.yml'
const CONTENT_TOKEN = '@@content@@'

export async function exportPresentation(
    presentationFilePath: string,
    templateFolderPath: string,
    outputFolderPath: string
): Promise<string> {
    const baseFilePath = resolve(templateFolderPath, BASE_FILE_NAME)

    console.log(`Using presentation file: '${relative(__dirname, presentationFilePath)}'.`)
    console.log(`Using template dir: '${relative(__dirname, templateFolderPath)}'.`)

    const configFilePath = resolve(templateFolderPath, CONFIG_FILE_NAME)
    const configFileContent = (await readFile(configFilePath)).toString()
    const parsedConfig = parseConfig(configFileContent)

    console.log(`Generating HTML Presentation...`)

    let htmlDoc = (await readFile(baseFilePath)).toString()
    htmlDoc = htmlDoc.replace(AUTHOR_TOKEN, parsedConfig.meta?.author ?? '')
    htmlDoc = htmlDoc.replace(TITLE_TOKEN, parsedConfig.meta?.title ?? '')

    const styleSheets = parsedConfig.stylesheets
        .map(styleSheetPath => `<link rel="stylesheet" href="${styleSheetPath}">`)
        .reduce((prev, curr) => `${prev}\n${curr}`)

    htmlDoc = htmlDoc.replace(STYLESHEETS_TOKEN, styleSheets)

    const presentationContent = (await readFile(presentationFilePath)).toString()

    const slidePath = resolve(configFilePath, '..', parsedConfig.slide)
    const slideFileContent = (await readFile(slidePath)).toString()
    const slide = slideFileContent.replace(CONTENT_TOKEN, presentationContent)

    htmlDoc = htmlDoc.replace(SLIDE_TOKEN, slide)

    const scripts = [...parsedConfig.plugins, parsedConfig.entry]
        .map(script => `<script src="${script}"></script>`)
        .reduce((prev, curr) => `${prev}\n${curr}`)

    htmlDoc = htmlDoc.replace(SCRIPTS_TOKEN, scripts)

    const presentationNumber = Math.floor(Math.random() * 100000)
    const presentationOutputPath = resolve(outputFolderPath, `presentation-${presentationNumber}`)

    console.log(`Creating output directory: '${relative(__dirname, presentationOutputPath)}'.`)
    await mkdir(presentationOutputPath)

    console.log(`Copying template files to output folder...`)
    await copy(templateFolderPath, presentationOutputPath)

    console.log(`Removing unneeded template files in output folder...`)
    await rm(resolve(presentationOutputPath, BASE_FILE_NAME))
    await rm(resolve(presentationOutputPath, CONFIG_FILE_NAME))
    await rm(resolve(presentationOutputPath, parsedConfig.slide))

    console.log(`Saving generated HTML presentation to output folder...`)
    const presentationOutFile = resolve(presentationOutputPath, 'presentation.html')
    await writeFile(presentationOutFile, htmlDoc)

    console.log(`Presentation export successful.`)
    return presentationOutFile
}

export async function preparePresentation(presentationContent: string, templateFolderPath: string): Promise<void> {
    const baseFilePath = resolve(templateFolderPath, BASE_FILE_NAME)

    console.log(`Using parsed HTML input to create presentation: ${presentationContent}`)
    console.log(`Using template dir: '${relative(__dirname, templateFolderPath)}'.`)

    const configFilePath = resolve(templateFolderPath, CONFIG_FILE_NAME)
    const configFileContent = (await readFile(configFilePath)).toString()
    const parsedConfig = parseConfig(configFileContent)

    console.log(`Generating HTML Presentation...`)

    let htmlDoc = (await readFile(baseFilePath)).toString()
    htmlDoc = htmlDoc.replace(AUTHOR_TOKEN, parsedConfig.meta?.author ?? '')
    htmlDoc = htmlDoc.replace(TITLE_TOKEN, parsedConfig.meta?.title ?? '')

    const styleSheets = parsedConfig['stylesheets']
        .map(styleSheetPath => `<link rel="stylesheet" href="${styleSheetPath}">`)
        .reduce((prev, curr) => `${prev}\n${curr}`)

    htmlDoc = htmlDoc.replace(STYLESHEETS_TOKEN, styleSheets)

    const slidePath = resolve(configFilePath, '..', parsedConfig.slide)
    const slideFileContent = (await readFile(slidePath)).toString()
    const slide = slideFileContent.replace(CONTENT_TOKEN, presentationContent)

    htmlDoc = htmlDoc.replace(SLIDE_TOKEN, slide)

    const scripts = [...parsedConfig.plugins, parsedConfig.entry]
        .map(script => `<script src="${script}"></script>`)
        .reduce((prev, curr) => `${prev}\n${curr}`)

    htmlDoc = htmlDoc.replace(SCRIPTS_TOKEN, scripts)

    const presentationOutputPath = resolve(app.getPath('userData'), 'presentation')

    console.log(`Creating output directory: '${presentationOutputPath}'.`)
    if (existsSync(presentationOutputPath)) {
        await rmdir(presentationOutputPath, { recursive: true })
    }
    await mkdir(presentationOutputPath)

    console.log(`Copying template files to output folder...`)
    await copy(templateFolderPath, presentationOutputPath)

    console.log(`Removing unneeded template files in output folder...`)
    await rm(resolve(presentationOutputPath, BASE_FILE_NAME))
    await rm(resolve(presentationOutputPath, CONFIG_FILE_NAME))
    await rm(resolve(presentationOutputPath, parsedConfig.slide))

    console.log(`Saving generated HTML presentation to output folder...`)
    const presentationOutFile = resolve(presentationOutputPath, 'presentation.html')
    await writeFile(presentationOutFile, htmlDoc)

    // TODO: Change
    const previewOutFile = resolve(presentationOutputPath, 'preview.html')
    await writeFile(previewOutFile, htmlDoc)

    console.log(`Presentation export successful.`)
}
