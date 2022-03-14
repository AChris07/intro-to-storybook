import { ThemeProvider } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import * as NextImage from 'next/image'

import theme from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

// Theme decorator
addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
))

// De-optimize Next.js images:
// https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})
