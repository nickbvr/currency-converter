import { useContext } from 'react'

import type { ToastContextData } from 'src/app/providers/ToastProvider/types'

import { ToastContext } from 'src/app/providers/ToastProvider'

export const useToast = (): ToastContextData => {
  const data = useContext(ToastContext)

  if (!data) {
    throw new Error('useToast was used outside of its Provider')
  }

  return data
}
