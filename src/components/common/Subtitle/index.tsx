interface Props {
    text: string;
}
function Subtitle({ text }: Props) {
  return (
    <h2 className="text-lg font-semibold">{text}</h2>
  );
}

export default Subtitle;
