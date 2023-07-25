import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material'

import type { IconButtonProps } from '@mui/material'

import { useTheme } from 'src/hooks/useTheme'

import { ThemeSwitcherWrapper } from 'src/components/ThemeSwitcher/styles'

interface Props extends IconButtonProps {}

export function ThemeSwitcher(props: Props): JSX.Element {
  const { mode, isDarkMode, toggleTheme } = useTheme()

  const handleToggle = (): void => {
    toggleTheme()
  }

  return (
    <ThemeSwitcherWrapper
      onClick={handleToggle}
      {...props}
      aria-label={`Switch between dark and light mode (currently ${mode} mode)`}
    >
      {isDarkMode ? <DarkModeOutlined /> : <LightModeOutlined />}
    </ThemeSwitcherWrapper>
  )
}
