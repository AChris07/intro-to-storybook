import styled from '@emotion/styled';

export const HeroBannerContainer = styled('section')`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
`;

export const HeroBannerBody = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroBannerTitle = styled('h1')``;
export const HeroBannerSubtitle = styled('h2')``;
