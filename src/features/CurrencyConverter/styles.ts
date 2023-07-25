import { CurrencyExchangeRounded } from '@mui/icons-material'
import {
  Container,
  IconButton,
  Paper,
  Typography,
  alpha,
  css,
  styled,
} from '@mui/material'

export const CurrencyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const CurrencyWrapper = styled(Paper)`
  ${({ theme }) => css`
    position: relative;
    border-radius: ${theme.spacing(2)};
    box-shadow: ${theme.shadows[10]};
  `}
`

export const CurrencyRow = styled(Paper)`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacing(2.5)};
    border-radius: ${theme.spacing(2)};
    box-shadow: none;
  `}
`

export const CurrencyIconButton = styled(IconButton)`
  ${({ theme }) => css`
    position: absolute;
    height: ${theme.spacing(4)};
    width: ${theme.spacing(4)};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: inherit;
    transition: unset;

    &.Mui-disabled {
      background: inherit;
    }

    &:hover {
      background: inherit;
    }
  `}
`

export const SwapIcon = styled(CurrencyExchangeRounded)`
  ${({ theme }) => css`
    position: absolute;
    width: inherit;
    height: inherit;
    padding: 3px;
    color: ${alpha(theme.palette.text.primary, 0.25)};
    background: transparent;
    transition: ${theme.transitions.create('color', {
      duration: theme.transitions.duration.short,
    })};
    cursor: pointer;

    &:hover {
      color: ${alpha(theme.palette.text.primary, 1)};
    }
  `}
`

export const CurrencyCapture = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    opacity: 0.7;
    position: absolute;
    left: 50%;
    white-space: nowrap;
    transform: translate(-50%, 50%);
  `}
`
