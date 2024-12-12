type LogoProps = {
	class?: string;
	href?: string;
	subtitle?: string;
};

export default function Logo(props: LogoProps) {
	const subtitle = props.subtitle ?? "Artisan Bakery";
	const rootClass = `group flex items-center gap-4 ${props.class ?? ""}`;

	const content = (
		<>
			<span class="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border border-[rgba(92,66,44,0.16)] bg-[linear-gradient(145deg,#fefaf4_0%,#f2dfc9_52%,#d9c0a5_100%)] text-[var(--color-espresso)] shadow-[0_18px_34px_rgba(59,36,23,0.15)] transition duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[-2deg]">
				<span class="absolute inset-[5px] rounded-[1rem] border border-white/65" />
				<span class="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-[var(--color-caramel)]/75" />
				<span class="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-[var(--color-caramel)]/75" />
				<span class="font-display text-[2.05rem] leading-none tracking-[0.08em]">
					LP
				</span>
			</span>
			<span class="min-w-0">
				<span class="block font-display text-[1.95rem] leading-none text-[var(--color-espresso)]">
					Le Petit Oven
				</span>
				<span class="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-caramel)]">
					{subtitle}
				</span>
			</span>
		</>
	);

	if (props.href) {
		return (
			<a class={rootClass} href={props.href}>
				{content}
			</a>
		);
	}

	return <div class={rootClass}>{content}</div>;
}
