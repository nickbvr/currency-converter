import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import { createContext, useCallback, useMemo } from 'react'

import type { PaletteMode } from '@mui/material'
import type { ReactNode } from 'react'
import type { ThemeContextData } from 'src/app/providers/ThemeProvider/types'

import { getPreferredColorScheme } from 'src/app/providers/ThemeProvider/utils'
import { useBrowserStorage } from 'src/hooks/useBrowserStorage'

import { getTheme } from 'src/styles/theme'

interface Props {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextData | null>(null)

export function ThemeProvider({ children }: Props): JSX.Element {
  const [mode, setMode] = useBrowserStorage<PaletteMode>(
    'theme',
    getPreferredColorScheme(),
    'session',
  )

  const isDarkMode = useMemo(() => mode === 'dark', [mode])

  const theme = useMemo(() => getTheme(mode), [mode])

  const toggleTheme = useCallback((): void => {
    const switchedMode = mode === 'dark' ? 'light' : 'dark'

    setMode(switchedMode)
  }, [mode, setMode])

  const providerData = useMemo(
    () => ({
      theme,
      mode,
      isDarkMode,
      toggleTheme,
    }),
    [theme, mode, isDarkMode, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={providerData}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
