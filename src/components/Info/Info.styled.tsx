import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Container from '../StyledMainComponents/Container';

const Opacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const InfoDiv = styled(Container)`
  color: #fff;
  animation: ${Opacity} 4s steps(140) 1s 1 normal both;
`