interface Props {
  text: string;
  type: string;
  variant: string;
}
function Button({ text, type = 'button', variant = 'primary' }: Props) {
  return (
    <button type={type} className={`btn btn-${variant}`}>{text}</button>
  );
}

export default Button;
