import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

type Props = {
  className: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  value: string;
};

const InputText: FunctionComponent<Props> = ({
  className,
  onChange,
  onSubmit,
  placeholder,
  value,
}) => {
  const handleTextChange = (evt) => onChange(evt?.target?.value);
  const handleTextKeypress = (evt) => {
    if (evt?.key === 'Enter') onSubmit();
  };

  return (
    <input
      type="text"
      className={classNames('input', className)}
      autoFocus
      autoComplete="off"
      placeholder={placeholder}
      value={value}
      onChange={handleTextChange}
      onKeyPress={handleTextKeypress}
    />
  );
};

export default InputText;
