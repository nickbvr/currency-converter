import { useContext } from 'react'

import type { ThemeContextData } from 'src/app/providers/ThemeProvider/types'

import { ThemeContext } from 'src/app/providers/ThemeProvider'

export const useTheme = (): ThemeContextData => {
  const data = useContext(ThemeContext)

  if (!data) {
    throw new Error('useTheme was used outside of its Provider')
  }

  return data
}
