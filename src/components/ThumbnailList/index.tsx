import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  ThumbnailListContainer,
  ThumbnailContainer,
  ThumbnailTitle,
  ThumbnailDescription,
  ThumbnailButton,
} from './styles';

type Thumbnail = {
  href: string;
  img: string;
  width: number;
  height: number;
  title: string;
  description: string;
};

type Props = {
  thumbnails: Thumbnail[];
};

const Thumbnail: FunctionComponent<Thumbnail> = ({
  href,
  img,
  width,
  height,
  title,
  description,
}) => {
  return (
    <ThumbnailContainer className="column content">
      <Image src={img} layout="fixed" width={width} height={height} />
      <ThumbnailTitle className="title">{title}</ThumbnailTitle>
      <ThumbnailDescription className="subtitle">{description}</ThumbnailDescription>
      <Link href={href}>
        <ThumbnailButton className="button is-primary">See more</ThumbnailButton>
      </Link>
    </ThumbnailContainer>
  );
};

const ThumbnailList: FunctionComponent<Props> = ({ thumbnails }) => {
  return (
    <ThumbnailListContainer className="columns mb-6">
      {thumbnails.map((thumbnail, idx) => (
        <Thumbnail key={idx} {...thumbnail} />
      ))}
    </ThumbnailListContainer>
  );
};

export default ThumbnailList;
