import { Divider } from '@mui/material'

import { CurrencyInput } from 'src/components/CurrencyInput'
import { CurrencySelect } from 'src/components/CurrencySelect'
import { Spinner } from 'src/components/Spinner'
import { useCurrencyConverter } from 'src/features/CurrencyConverter/useCurrencyConverter'

import {
  CurrencyContainer,
  CurrencyIconButton,
  CurrencyRow,
  SwapIcon,
  CurrencyWrapper,
  CurrencyCapture,
} from 'src/features/CurrencyConverter/styles'

export function CurrencyConverter(): JSX.Element {
  const {
    currencies,
    amountFrom,
    amountTo,
    currencyFrom,
    currencyTo,
    updatedDate,
    handleInputFrom,
    handleInputTo,
    handleSwitch,
    handleSelectFrom,
    handleSelectTo,
  } = useCurrencyConverter()

  return (
    <CurrencyContainer>
      <CurrencyWrapper>
        <CurrencyRow>
          <CurrencySelect
            value={currencyFrom}
            options={currencies}
            onChange={handleSelectFrom}
          />
          <CurrencyInput
            value={amountFrom}
            disabled={!currencies.length}
            onChange={handleInputFrom}
          />
        </CurrencyRow>
        <CurrencyIconButton
          disabled={!currencies.length}
          onClick={handleSwitch}
          aria-label={
            !currencies.length ? 'Loading data...' : 'Switch currencies'
          }
        >
          {!currencies.length ? <Spinner /> : <SwapIcon />}
        </CurrencyIconButton>
        <Divider />
        <CurrencyRow>
          <CurrencySelect
            value={currencyTo}
            options={currencies}
            onChange={handleSelectTo}
          />
          <CurrencyInput
            value={amountTo}
            disabled={!currencies.length}
            onChange={handleInputTo}
          />
        </CurrencyRow>
        {updatedDate && (
          <CurrencyCapture variant="caption">
            Last Update: {updatedDate}
          </CurrencyCapture>
        )}
      </CurrencyWrapper>
    </CurrencyContainer>
  )
}
