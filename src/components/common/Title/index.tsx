interface Props {
    text: string;
}
function Title({ text }: Props) {
  return (
    <h1 className="font-bold uppercase text-separated text-xl mb-4">{text}</h1>
  );
}

export default Title;
