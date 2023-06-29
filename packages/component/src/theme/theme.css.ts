import { darkCssVariables, lightCssVariables } from '@note/theme'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('body', {
  color: 'var(--note-text-primary-color)',
  fontFamily: 'var(--note-font-family)',
  fontSize: 'var(--note-font-base)',
  lineHeight: 'var(--note-font-height)'
})

globalStyle('html', {
  vars: lightCssVariables
})

globalStyle('html[data-theme="dark"]', {
  vars: darkCssVariables
})
