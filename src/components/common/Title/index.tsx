interface Props {
    text: string;
}
const Title = ({ text }: Props) => (
  <h1 className="mb-4 text-xl font-bold uppercase text-separated">{text}</h1>
);

export default Title;
