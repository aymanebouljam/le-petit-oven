import type { JSX } from "solid-js";

type CardProps = {
	children: JSX.Element;
	class?: string;
};

export default function Card(props: CardProps) {
	return (
		<div class={`texture-card rounded-[2rem] ${props.class ?? ""}`}>
			{props.children}
		</div>
	);
}
