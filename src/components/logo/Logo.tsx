import styled from "styled-components";
import { Icon } from "../icon/Icon";

export function Logo() {
	return (
		<StyledLogo>
			<Icon iconId={"myLogo"} viewBox={'0 0 65 48'}/>
		</StyledLogo>
	);
}

const StyledLogo = styled.a`
`;
