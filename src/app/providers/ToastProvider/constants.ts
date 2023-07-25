import type { ToastState } from 'src/app/providers/ToastProvider/types'

const AUTO_HIDE_DURATION = 3000

export const INITIAL_PARAMS: ToastState = {
  status: 'success',
  autoHideDuration: AUTO_HIDE_DURATION,
  message: '',
  title: '',
  isOpen: false,
}
