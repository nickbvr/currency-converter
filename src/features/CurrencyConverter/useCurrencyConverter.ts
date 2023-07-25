import { useEffect, useState, useCallback } from 'react'

import type { ExchangeRateData } from 'src/features/CurrencyConverter/types'

import {
  REGEX_AMOUNT,
  initialExchangeData,
} from 'src/features/CurrencyConverter/constants'
import { convertCurrency } from 'src/features/CurrencyConverter/utils'
import { useToast } from 'src/hooks/useToast'
import { ExchangeService } from 'src/services/ExchangeService'

interface UseCurrencyConverter {
  currencies: string[]
  currencyFrom: string
  currencyTo: string
  amountFrom: string
  amountTo: string
  updatedDate: string
  handleSelectFrom: (rate: string) => void
  handleSelectTo: (rate: string) => void
  handleInputFrom: (value: string) => void
  handleInputTo: (value: string) => void
  handleSwitch: () => void
}

export const useCurrencyConverter = (): UseCurrencyConverter => {
  const [exchangeData, setExchangeData] =
    useState<ExchangeRateData>(initialExchangeData)
  const [currencyFrom, setCurrencyFrom] = useState<string>('EUR')
  const [currencyTo, setCurrencyTo] = useState<string>('UAH')
  const [amountFrom, setAmountFrom] = useState<string>('')
  const [amountTo, setAmountTo] = useState<string>('')

  const toast = useToast()

  const getExchangeData = useCallback(async () => {
    try {
      const response = await ExchangeService.getLatest()
      setExchangeData(response.data)
    } catch (error) {
      if (error instanceof Error) {
        toast.error({ title: error.name, message: error.message })
      }
    }
  }, [toast])

  useEffect(() => {
    getExchangeData()
  }, [getExchangeData])

  const handleSelectFrom = (rate: string): void => {
    setCurrencyFrom(rate)

    if (!Number.isNaN(parseFloat(amountFrom))) {
      const convertedAmount = convertCurrency(
        parseFloat(amountFrom),
        rate,
        currencyTo,
        exchangeData,
      )
      setAmountTo(convertedAmount.toString())
    }
  }

  const handleSelectTo = (rate: string): void => {
    setCurrencyTo(rate)

    if (!Number.isNaN(parseFloat(amountFrom))) {
      const convertedAmount = convertCurrency(
        parseFloat(amountFrom),
        currencyFrom,
        rate,
        exchangeData,
      )
      setAmountTo(convertedAmount.toString())
    }
  }

  const handleInputFrom = (value: string): void => {
    const utilizedValue = value.replace(/,/g, '.')

    if (REGEX_AMOUNT.test(utilizedValue)) {
      setAmountFrom(utilizedValue)

      if (!Number.isNaN(parseFloat(utilizedValue))) {
        const convertedAmount = convertCurrency(
          parseFloat(utilizedValue),
          currencyFrom,
          currencyTo,
          exchangeData,
        )
        setAmountTo(convertedAmount.toString())
      } else {
        setAmountTo('')
      }
    }
  }

  const handleInputTo = (value: string): void => {
    const utilizedValue = value.replace(/,/g, '.')

    if (REGEX_AMOUNT.test(utilizedValue)) {
      setAmountTo(utilizedValue)

      if (!Number.isNaN(parseFloat(utilizedValue))) {
        const convertedAmount = convertCurrency(
          parseFloat(utilizedValue),
          currencyTo,
          currencyFrom,
          exchangeData,
        )
        setAmountFrom(convertedAmount.toString())
      } else {
        setAmountFrom('')
      }
    }
  }

  const handleSwitch = (): void => {
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)

    if (!Number.isNaN(parseFloat(amountFrom))) {
      const convertedAmount = convertCurrency(
        parseFloat(amountFrom),
        currencyTo,
        currencyFrom,
        exchangeData,
      )
      setAmountTo(convertedAmount.toString())
    } else {
      setAmountTo('')
    }
  }

  return {
    currencies: Object.keys(exchangeData.rates),
    currencyFrom,
    currencyTo,
    amountFrom,
    amountTo,
    updatedDate: exchangeData.date,
    handleSelectFrom,
    handleSelectTo,
    handleInputFrom,
    handleInputTo,
    handleSwitch,
  }
}
