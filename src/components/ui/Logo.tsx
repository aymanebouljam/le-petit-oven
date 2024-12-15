type LogoProps = {
	class?: string;
	href?: string;
	subtitle?: string;
};

export default function Logo(props: LogoProps) {
	const subtitle = props.subtitle ?? "Artisan Bakery";
	const rootClass = `group flex items-center ${props.class ?? ""}`;

	const content = (
		<>
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
