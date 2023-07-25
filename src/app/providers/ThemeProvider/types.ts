import type { PaletteMode, Theme } from '@mui/material'

export interface ThemeContextData {
  theme: Theme
  mode: PaletteMode
  isDarkMode: boolean
  toggleTheme: () => void
}
