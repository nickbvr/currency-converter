import { ThemeSwitcher } from 'src/components/ThemeSwitcher'
import { CurrencyConverter } from 'src/features/CurrencyConverter'

export function Home(): JSX.Element {
  return (
    <>
      <ThemeSwitcher />
      <CurrencyConverter />
    </>
  )
}
