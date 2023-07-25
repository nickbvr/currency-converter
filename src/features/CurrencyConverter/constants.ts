import type { ExchangeRateData } from 'src/features/CurrencyConverter/types'

export const REGEX_AMOUNT = /^(0{0,1}(\.\d+)?|\d+(\.\d*)?)$/

export const initialExchangeData: ExchangeRateData = {
  success: false,
  base: '',
  date: '',
  rates: {},
}
