/* eslint-disable no-console */
import { useState } from 'react'

type StorageType = 'locale' | 'session'

export const useBrowserStorage = <T>(
  key: string,
  initialValue: T,
  storageType: StorageType = 'locale',
): readonly [T, (value: T | ((val: T) => T)) => void] => {
  const storage =
    storageType === 'locale' ? window.localStorage : window.sessionStorage

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue

    try {
      const item = storage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)

      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        storage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
