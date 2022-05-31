import React from 'react';
import cn from 'classnames';

interface Props {
  text: string;
  type: string;
  maxWidth?: string;
  variant: 'primary' | 'secondary' | 'subtle';
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button = ({
  text, type = 'button', variant = 'primary', onClick, maxWidth = 'w-full',
}: Props) => (
  <button onClick={onClick} type={type} className={cn('btn', `btn-${variant}`, maxWidth)}>{text}</button>
);

export default Button;
