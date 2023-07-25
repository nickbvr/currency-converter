import { CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'

import { App } from 'src/app/App'
import { ThemeProvider } from 'src/app/providers/ThemeProvider'
import { ToastProvider } from 'src/app/providers/ToastProvider'

registerSW({ immediate: true })

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <ToastProvider>
      <CssBaseline />
      <App />
    </ToastProvider>
  </ThemeProvider>,
)
