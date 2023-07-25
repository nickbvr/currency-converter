import { Alert, AlertTitle, css, styled } from '@mui/material'

export const ToastAlert = styled(Alert)`
  align-items: center;
`

export const ToastAlertTitle = styled(AlertTitle)(
  ({ theme }) => css`
    margin: 0;
    font-weight: ${theme.typography.fontWeightBold};
  `,
)
