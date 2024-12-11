import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

type SharedButtonProps = {
	children: JSX.Element;
	class?: string;
	variant?: "primary" | "secondary";
};

type AnchorButtonProps = SharedButtonProps & {
	as: "a";
	href?: string;
} & Omit<JSX.AnchorHTMLAttributes<HTMLAnchorElement>, "class" | "href">;

type NativeButtonProps = SharedButtonProps & {
	as?: "button";
} & Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "class">;

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
	const [local, rest] = splitProps(props, [
		"as",
		"children",
		"class",
		"href",
		"variant",
	]);
	const className = () =>
		`${local.variant === "secondary" ? "btn-secondary" : "btn-primary"} ${local.class ?? ""}`;

	if (local.as === "a") {
		return (
			<a class={className()} href={local.href} {...rest}>
				{local.children}
			</a>
		);
	}

	return (
		<button class={className()} type="button" {...rest}>
			{local.children}
		</button>
	);
}
