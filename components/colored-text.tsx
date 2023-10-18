interface ColoredTextProps {
  text: string;
  color: string;
  code?: boolean;
}

export default function ColoredText(props: ColoredTextProps) {
  const { text, color, code } = props;
  
  if (code) {
    return (
      <>
        <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"><span style={{ color: color }}>{text}</span></code>
      </>
    )
  }

  return (
    <>
      <span style={{ color: color }}>{text}</span>
    </>
  )
}