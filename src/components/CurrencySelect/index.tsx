import { MenuItem } from '@mui/material'

import type { SelectChangeEvent } from '@mui/material'

import { MOCK_CURRENCIES } from 'src/components/CurrencySelect/constants'

import {
  StyledCurrencySelect,
  menuStyles,
} from 'src/components/CurrencySelect/styles'

interface Props {
  value: string
  options: string[]
  onChange: (value: string) => void
}

export function CurrencySelect({
  value,
  onChange,
  options,
}: Props): JSX.Element {
  const handleChange = (e: SelectChangeEvent<unknown>): void => {
    onChange(e.target.value as string)
  }

  return (
    <StyledCurrencySelect
      value={value}
      onChange={handleChange}
      variant="standard"
      disableUnderline
      disabled={!options.length}
      MenuProps={{
        sx: menuStyles,
      }}
    >
      {(options.length ? options : MOCK_CURRENCIES).map(currency => (
        <MenuItem key={currency} value={currency}>
          {currency}
        </MenuItem>
      ))}
    </StyledCurrencySelect>
  )
}
