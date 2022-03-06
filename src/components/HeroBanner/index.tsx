import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import {
  HeroBannerContainer,
  HeroBannerBody,
  HeroBannerTitle,
  HeroBannerSubtitle,
} from './styles';

type Props = {
  img: string;
  title: string;
  subtitle: string;
  height: number;
};

const HeroBanner: FunctionComponent<Props> = ({ img, title, subtitle, height }) => {
  return (
    <HeroBannerContainer className="mb-6" height={height}>
      <Image src={img} layout="fill" />
      <HeroBannerBody>
        <HeroBannerTitle className="title">{title}</HeroBannerTitle>
        <HeroBannerSubtitle className="subtitle">{subtitle}</HeroBannerSubtitle>
      </HeroBannerBody>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
