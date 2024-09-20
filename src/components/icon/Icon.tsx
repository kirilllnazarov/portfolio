import iconSprite from "../../assets/images/iconSprite.svg";

type IconType = {
	iconId: string;
	width?: string;
	height?: string;
	viewBox?: string;
};

export function Icon(props: IconType) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width || "50"}
			height={props.height || "50"}
			viewBox={props.viewBox || "0 0 50 50"}
			fill="none"
		>
			<use xlinkHref={`${iconSprite}#${props.iconId}`} />
		</svg>
	);
}
