import cn from 'classnames';

interface Props {
    text: string,
    size?: string,
    maxWidth?: string,
    lineHeight?: number,
    fontWeight?: 'normal' | 'semibold' | 'bold',
}
const Paragraph = ({
  text, size = 'sm', maxWidth = 'full', lineHeight = 7, fontWeight = 'normal',
}: Props) => (
  <p className={cn(`max-w-${maxWidth}`, `text-${size}`, `leading-${lineHeight}`, `font-${fontWeight}`)}>{text}</p>
);

export default Paragraph;
