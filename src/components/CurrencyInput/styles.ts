import { TextField, css, styled } from '@mui/material'

export const StyledCurrencyInput = styled(TextField)`
  ${({ theme }) => css`
    .MuiInput-input {
      font-size: ${theme.spacing(2.5)};
      text-align: end;
    }
    .MuiInput-underline {
      ::before,
      ::after {
        content: unset;
      }
    }
  `}
`
