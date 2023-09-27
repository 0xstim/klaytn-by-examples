interface ColoredTextProps {
  text: string;
  color: string;
}

export default function ColoredText(props: ColoredTextProps) {
  const { text, color } = props;
  
  return (
    <>
      <span style={{ color: color }}>{text}</span>
    </>
  )
}