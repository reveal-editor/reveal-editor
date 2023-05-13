import { ForgeConfig } from '@electron-forge/shared-types'
import { MakerSquirrel } from '@electron-forge/maker-squirrel'
import { MakerDMG } from '@electron-forge/maker-dmg'
import { MakerDeb } from '@electron-forge/maker-deb'
import { MakerRpm } from '@electron-forge/maker-rpm'
import { VitePlugin } from '@electron-forge/plugin-vite'
import { PublisherGitHubConfig } from '@electron-forge/publisher-github'
import packageJSON from './package.json'

const gitHubConfig: PublisherGitHubConfig = {
    repository: {
        owner: 'reveal-editor',
        name: 'reveal-editor',
    },
}

const config: ForgeConfig = {
    packagerConfig: {},
    rebuildConfig: {},
    makers: [
        new MakerSquirrel(arch => {
            return {
                name: `${packageJSON.name.replace(/-/g, '_')}-win32-${arch}`,
                setupExe: `${packageJSON.name}-win32-${arch} Setup.exe`,
                noMsi: true,
            }
        }),
        new MakerDMG({}),
        new MakerRpm({}),
        new MakerDeb({}),
    ],
    plugins: [
        new VitePlugin({
            // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
            // If you are familiar with Vite configuration, it will look really familiar.
            build: [
                {
                    // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
                    entry: 'src-main/main.ts',
                    config: 'vite.main.config.ts',
                },
                {
                    entry: 'src/preload.ts',
                    config: 'vite.preload.config.ts',
                },
            ],
            renderer: [
                {
                    name: 'main_window',
                    config: 'vite.renderer.config.ts',
                },
            ],
        }),
    ],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: gitHubConfig,
        },
    ],
}

export default config
