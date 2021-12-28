import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Opacity = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`

const Animation = styled.div`
  animation: ${Opacity} 5s ease-in-out;
`

export default Animation;