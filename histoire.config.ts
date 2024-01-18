import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
  routerMode: 'hash',
  setupFile: '/src/histoire.setup.ts',
  theme: {
    title: 'tlevil-playground',
    logo: {
    },
    // logoHref: 'https://git.woa.com/vgfe/vg_common_ui',
    // favicon: './favicon.ico',
  },
  plugins: [
    HstSvelte(),
  ],
})