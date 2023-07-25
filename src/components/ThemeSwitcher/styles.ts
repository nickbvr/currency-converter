import { IconButton, css, styled } from '@mui/material'

export const ThemeSwitcherWrapper = styled(IconButton)`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};

    svg {
      fill: ${theme.palette.text.primary};
    }
  `}
`
