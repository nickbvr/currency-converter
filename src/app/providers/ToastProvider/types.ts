import type { AlertColor } from '@mui/material'

export type ToastContextData = {
  [key in AlertColor]: (props: ToastHandlerParams) => void
}

export type ToastState = {
  isOpen: boolean
  status: AlertColor
  autoHideDuration: number
  message?: string
  title?: string
}

export type ToastHandlerParams = Pick<ToastState, 'message' | 'title'>
