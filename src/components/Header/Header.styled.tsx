import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`;

const Write = keyframes`
  from {
    width: 0;
  }
  to {
    width: 20rem;
  }
`;

export const Title = styled.h1`
	color: #ffffff;
	width: 16em;
	margin: 1rem;
	border-right: 1px solid rgba(255, 255, 255, 0.75);
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	transform: translateY(-50%);

	animation: ${Write} 2s steps(70) 1s 1 normal both, blinkTextCursor 500ms steps(70) infinite normal;
`;
