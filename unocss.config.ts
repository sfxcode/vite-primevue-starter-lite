import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    theme: {
      fontFamily: {
        sans: '\'Inter\', sans-serif',
        mono: '\'Fira Code\', monospace',
      },
    },
    presets: [
      presetAttributify({ strict }),
      presetUno(),
      presetIcons({
        collections: {
          mdi: () => import('@iconify/json/json/mdi.json').then(i => i.default as any),
          twemoji: () => import('@iconify/json/json/twemoji.json').then(i => i.default as any),
          prime: () => import('@iconify/json/json/prime.json').then(i => i.default as any),
        },
      }),
      presetTypography(),
    ],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
    ],
  })
}

export default createConfig()
