export interface ExchangeRateData {
  success: boolean
  base: string
  date: string
  rates: Record<string, number>
}
