import { Box, Stack, styled } from '@mui/material'

export const SpinnerContainer = styled(Stack)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledSpinner = styled(Box)`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;

  span {
    display: block;
    transform-origin: 16px 16px;
    animation: spin 1.2s linear infinite;
  }

  span:after {
    border-radius: 20%;
    background-color: grey;
    content: ' ';
    display: block;
    height: 8px;
    width: 2.5px;
    position: absolute;
    left: 15px;
    top: 2.5px;
  }

  span:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }

  span:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }

  span:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }

  span:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }

  span:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }

  span:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }

  span:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }

  span:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  span:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }

  span:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  span:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }

  span:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

  @keyframes spin {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
