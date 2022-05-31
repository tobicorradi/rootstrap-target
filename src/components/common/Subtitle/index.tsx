interface Props {
    text: string;
}
const Subtitle = ({ text }: Props) => (
  <h2 className="text-lg font-semibold">{text}</h2>
);

export default Subtitle;
