import React, { FunctionComponent, ReactNode } from 'react';

import { IconButtonContainer } from './styles';

type Props = {
  className?: string;
  icon?: string;
  text?: ReactNode;
  onClick?: (evt: React.MouseEvent) => void;
};

const IconButton: FunctionComponent<Props> = ({ icon, text, className, onClick }) => {
  const iconElement = icon && (
    <span className="icon">
      <i className={`fas ${icon}`} />
    </span>
  );
  const textElement = text && <span>{text}</span>;

  const classes = ['button', className].join(' ');

  return (
    <IconButtonContainer className={classes} type="button" onClick={onClick}>
      {iconElement}
      {textElement}
    </IconButtonContainer>
  );
};

export default IconButton;
