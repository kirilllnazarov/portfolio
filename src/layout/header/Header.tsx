import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { theme } from "../../styles/Theme";

const headerItems = ["Projects", "About", "Digital Assets", "Let’s Talk"];

export function Header() {
	return (
		<StyledHeader>
			<Logo />
			<Menu menuItems={headerItems} />
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	width: 1040px;
	height: 50px;
	margin: 0 200px 0 200px;
	background-color: ${theme.color.secondaryBg};
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* outline: 1px solid red; */
`;
