interface Props {
    text: string;
}
function Title({ text }: Props) {
  return (
    <h1 className="font-bold uppercase tracking-[3px] text-xl mb-4">{text}</h1>
  );
}

export default Title;
