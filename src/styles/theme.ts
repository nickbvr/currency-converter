import { createTheme } from '@mui/material'

import type { PaletteMode, Theme } from '@mui/material'

export const getTheme = (mode: PaletteMode): Theme =>
  createTheme({
    palette: {
      mode,
    },
  })
