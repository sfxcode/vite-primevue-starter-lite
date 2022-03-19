import * as path from 'path'
import {defineConfig} from 'vite'
import Vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import Pages from "vite-plugin-pages"
import Restart from 'vite-plugin-restart'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from '@unocss/vite'

process.env.VITE_APP_BUILD_EPOCH = new Date().getTime()
process.env.VITE_APP_VERSION = pkg.version

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
    server: {
        hmr: {
            port: false,
            path: '/ws'
        }
    },

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    },
    test: {
        globals: true,
        include: ['test/**/*.test.ts'],
        environment: 'happy-dom',
    },

    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core',
        ],
        exclude: [
            'vue-demi',
        ],
    },
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
            template: {
                compilerOptions: {
                    directiveTransforms: {
                        styleclass: () => ({
                            props: [],
                            needRuntime: true,
                        }),
                        ripple: () => ({
                            props: [],
                            needRuntime: true,
                        }),
                    }
                }
            }
        }),
        Unocss(),
        Components({
            dts: 'src/components.d.ts',
            resolvers: [],
        }),
        // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),
        // https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'vue-i18n',
                '@vueuse/head',
            ],
            exclude: [
                '**/dist/**',
            ],
            dts: 'src/auto-import.d.ts',
        }),
        Pages({
            // pagesDir: ['src/pages', 'src/pages2'],
            pagesDir: [
                {dir: 'src/pages', baseRoute: ''},
            ],
            extensions: ['vue', 'md'],
            syncIndex: true,
            replaceSquareBrackets: true,
            extendRoute(route) {
                if (route.name === 'about')
                    route.props = route => ({query: route.query.q})

                if (route.name === 'components') {
                    return {
                        ...route,
                        beforeEnter: (route) => {
                            // eslint-disable-next-line no-console
                            // console.log(route)
                        },
                    }
                }
            },
        }),
        Restart({
            restart: ['../../dist/*.js'],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '~': path.resolve(__dirname, 'node_modules/'),
        },
    },

})
