import { forwardRef } from 'react';
import styled from '@emotion/styled';

type LoaderContainerProps = {
  isVisible: boolean;
};

const LoaderContainer = styled.div<LoaderContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'inline-block' : 'none')};
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.theme.colors.tertiary} transparent transparent
      transparent;

    &:nth-of-type(1) {
      animation-delay: -0.45s;
    }

    &:nth-of-type(2) {
      animation-delay: -0.3s;
    }

    &:nth-of-type(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type Props = {
  isVisible: boolean;
};

export type Ref = HTMLDivElement;

const Loader = forwardRef<Ref, Props>(({ isVisible }, ref) => (
  <div ref={ref}>
    <LoaderContainer isVisible={isVisible}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderContainer>
  </div>
));

Loader.displayName = 'Loader';

export default Loader;
