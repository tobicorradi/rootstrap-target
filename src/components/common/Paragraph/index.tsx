interface Props {
    text: string,
    size?: string,
    maxWidth?: string,
    lineHeight?: number,
}
function Paragraph({
  text, size = 'sm', maxWidth = 'full', lineHeight = 7,
}: Props) {
  return (
    <p className={`max-w-${maxWidth} text-${size} leading-${lineHeight}`}>{text}</p>
  );
}

export default Paragraph;
