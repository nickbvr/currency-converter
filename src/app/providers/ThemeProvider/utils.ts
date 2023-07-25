import type { PaletteMode } from '@mui/material'

export const getPreferredColorScheme = (): PaletteMode => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}
