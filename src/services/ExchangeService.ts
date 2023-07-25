import type { AxiosResponse } from 'axios'
import type { ExchangeRateData } from 'src/features/CurrencyConverter/types'

import { exchangeClient } from 'src/config/api'

export class ExchangeService {
  static async getLatest(): Promise<AxiosResponse<ExchangeRateData>> {
    return exchangeClient.get<ExchangeRateData>('/latest')
  }
}
