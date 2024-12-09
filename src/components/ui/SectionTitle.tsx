type SectionTitleProps = {
  align?: "center" | "left";
  description: string;
  eyebrow: string;
  tone?: "dark" | "light";
  title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  const alignment = props.align === "center" ? "mx-auto text-center" : "text-left";
  const isLight = props.tone === "light";

  return (
    <div class={`max-w-2xl space-y-4 ${alignment}`}>
      <p class={isLight ? "eyebrow text-[rgba(255,244,230,0.78)]" : "eyebrow"}>{props.eyebrow}</p>
      <h2
        class={`font-display text-4xl leading-tight sm:text-5xl ${
          isLight ? "text-[var(--color-cream)]" : "text-[var(--color-espresso)]"
        }`}
      >
        {props.title}
      </h2>
      <p class={isLight ? "body-copy text-[rgba(255,244,230,0.82)]" : "body-copy"}>
        {props.description}
      </p>
    </div>
  );
}
