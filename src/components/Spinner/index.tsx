import type { BoxProps } from '@mui/material'

import { SpinnerContainer, StyledSpinner } from 'src/components/Spinner/styles'

interface Props extends BoxProps {}

export function Spinner(props: Props): JSX.Element {
  return (
    <SpinnerContainer>
      <StyledSpinner {...props}>
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} />
        ))}
      </StyledSpinner>
    </SpinnerContainer>
  )
}
