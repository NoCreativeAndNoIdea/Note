import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      assetsInclude: ['**/*.md'],
      plugins: [vanillaExtractPlugin()]
    })
  }
}
export default config
