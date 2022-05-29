import React from 'react';

interface Props {
  text: string;
  type: string;
  maxWidth?: string;
  variant: 'primary' | 'secondary' | 'subtle';
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
function Button({
  text, type = 'button', variant = 'primary', onClick, maxWidth = 'w-full',
}: Props) {
  return (
    <button onClick={onClick} type={type} className={`btn btn-${variant} ${maxWidth}`}>{text}</button>
  );
}

export default Button;
