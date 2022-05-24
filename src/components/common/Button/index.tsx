import React from 'react';

interface Props {
  text: string;
  type: string;
  variant: 'primary' | 'secondary' | 'subtle';
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
function Button({
  text, type = 'button', variant = 'primary', onClick,
}: Props) {
  return (
    <button onClick={onClick} type={type} className={`btn btn-${variant}`}>{text}</button>
  );
}

export default Button;
