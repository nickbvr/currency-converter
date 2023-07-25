import type { ExchangeRateData } from 'src/features/CurrencyConverter/types'

export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  exchangeData: ExchangeRateData,
): number {
  if (!amount) return 0

  if (
    exchangeData.success &&
    exchangeData.rates[fromCurrency] &&
    exchangeData.rates[toCurrency]
  ) {
    const rateFrom = exchangeData.rates[fromCurrency]
    const rateTo = exchangeData.rates[toCurrency]

    return (amount / rateFrom) * rateTo
  }

  return 0
}
