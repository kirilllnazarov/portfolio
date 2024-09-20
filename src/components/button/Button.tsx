import styled from "styled-components";
import { Icon } from "../icon/Icon";

type ButtonType = {
	btnTitle: string;
	btnLink: string;
	iconId: string;
	width?: string;
	height?: string;
};

export function Button({
	btnTitle,
	btnLink,
	iconId,
	width,
	height,
}: ButtonType) {
	return (
		<StyledButton width={width} height={height}>
			<a href={btnLink}>
				{btnTitle}
				<Icon iconId={iconId} />
			</a>
		</StyledButton>

		// <StyledButton href={link}>{btnTitle}</StyledButton>
	);
}

type StyledButtonType = {
	width?: string;
	height?: string;
};

const StyledButton = styled.button<StyledButtonType>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border: 2px solid orange;
	background-color: transparent;
`;
