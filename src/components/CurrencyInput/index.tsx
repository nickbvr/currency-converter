import type { ChangeEvent } from 'react'

import { StyledCurrencyInput } from 'src/components/CurrencyInput/styles'

interface Props {
  value: string
  disabled: boolean
  onChange: (value: string) => void
}

export function CurrencyInput({
  value,
  disabled,
  onChange,
}: Props): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value)
  }

  return (
    <StyledCurrencyInput
      placeholder="0"
      variant="standard"
      type="text"
      fullWidth
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  )
}
