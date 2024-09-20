import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const headerItems = ["Projects", "About", "Digital Assets", "Let’s Talk"];

export function Header() {
	return (
		<StyledHeader>
			<Logo />
			<Menu menuItems={headerItems}/>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	background-color: #97c7e1;
	display: flex;
	justify-content: space-around;
`;
