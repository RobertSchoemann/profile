// @ts-check
import mdx from '@astrojs/mdx'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

import expressiveCode from 'astro-expressive-code'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  base: '/profile/',
  trailingSlash: "always",
  site: 'https://robertschoemann.github.io',
  integrations: [
    tailwind(),
    react(),
    icon(),
    sitemap(),
    expressiveCode(),
    mdx(),
  ],
})
