import { styled, Select, css } from '@mui/material'

export const StyledCurrencySelect = styled(Select)`
  ${({ theme }) => css`
    font-size: ${theme.spacing(2.5)};

    .MuiSelect-select {
      &:focus {
        background-color: unset;
      }
    }
  `}
`

export const menuStyles = {
  '& .MuiMenu-paper': {
    borderRadius: 4,
  },
}
