import { Snackbar } from '@mui/material'
import { createContext, useCallback, useMemo, useState } from 'react'

import type { AlertColor } from '@mui/material'
import type { ReactNode } from 'react'
import type {
  ToastContextData,
  ToastHandlerParams,
  ToastState,
} from 'src/app/providers/ToastProvider/types'

import { INITIAL_PARAMS } from 'src/app/providers/ToastProvider/constants'

import {
  ToastAlert,
  ToastAlertTitle,
} from 'src/app/providers/ToastProvider/styles'

interface Props {
  children: ReactNode
}

export const ToastContext = createContext<ToastContextData | null>(null)

export function ToastProvider({ children }: Props): JSX.Element {
  const [toast, setToast] = useState<ToastState>(INITIAL_PARAMS)

  const handleClose = (): void => setToast(prev => ({ ...prev, isOpen: false }))

  const handleToast = useCallback(
    (status: AlertColor) =>
      (toastParams: ToastHandlerParams): void => {
        if (!toastParams.message && !toastParams.title) return

        setToast(prev => ({
          ...prev,
          ...toastParams,
          status,
          isOpen: true,
        }))
      },
    [],
  )

  const contextData = useMemo<ToastContextData>(
    () => ({
      error: handleToast('error'),
      warning: handleToast('warning'),
      success: handleToast('success'),
      info: handleToast('info'),
    }),
    [handleToast],
  )

  return (
    <ToastContext.Provider value={contextData}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={toast.isOpen}
        autoHideDuration={toast.autoHideDuration}
        onClose={handleClose}
      >
        <ToastAlert severity={toast.status} variant="filled">
          <ToastAlertTitle>{toast.title}</ToastAlertTitle>
          {toast.message}
        </ToastAlert>
      </Snackbar>
    </ToastContext.Provider>
  )
}
