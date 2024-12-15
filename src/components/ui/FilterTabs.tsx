import { For } from "solid-js";

type FilterTabItem<T extends string> = {
	image?: string;
	imageAlt?: string;
	label: T;
};

type FilterTabsProps<T extends string> = {
	active: T;
	items: readonly FilterTabItem<T>[];
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
					const isActive = () => props.active === item.label;
					return (
						<button
							aria-selected={isActive()}
							class={`flex items-center gap-3 rounded-full border pr-5 pl-2 py-2 text-sm font-semibold transition duration-300 ${
								isActive()
									? "border-[var(--color-espresso)] bg-[var(--color-espresso)] text-[var(--color-cream)] shadow-[0_12px_28px_rgba(59,36,23,0.16)]"
									: "border-[var(--color-border)] bg-white/70 text-[var(--color-mocha)] hover:border-[var(--color-caramel)] hover:text-[var(--color-espresso)]"
							}`}
							role="tab"
							type="button"
							onClick={() => props.onChange(item.label)}
						>
							{item.image ? (
								<span class="overflow-hidden rounded-full border border-white/20">
									<img
										alt={item.imageAlt ?? item.label}
										class="h-10 w-10 object-cover"
										loading="eager"
										src={item.image}
									/>
								</span>
							) : null}
							<span>{item.label}</span>
						</button>
					);
				}}
			</For>
		</div>
	);
}
