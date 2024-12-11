import { For } from "solid-js";

type FilterTabsProps<T extends string> = {
	active: T;
	items: readonly T[];
	onChange: (item: T) => void;
};

export default function FilterTabs<T extends string>(
	props: FilterTabsProps<T>,
) {
	return (
		<div
			class="flex flex-wrap gap-3"
			role="tablist"
			aria-label="Menu categories"
		>
			<For each={props.items}>
				{(item) => {
					const isActive = () => props.active === item;
					return (
						<button
							aria-selected={isActive()}
							class={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
								isActive()
									? "bg-[var(--color-espresso)] text-[var(--color-cream)] shadow-[0_12px_28px_rgba(59,36,23,0.16)]"
									: "border border-[var(--color-border)] bg-white/70 text-[var(--color-mocha)] hover:border-[var(--color-caramel)] hover:text-[var(--color-espresso)]"
							}`}
							role="tab"
							type="button"
							onClick={() => props.onChange(item)}
						>
							{item}
						</button>
					);
				}}
			</For>
		</div>
	);
}
