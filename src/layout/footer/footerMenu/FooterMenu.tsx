import styled from "styled-components";

type FooterMenu = {
	menuItems: Array<string>;
};

export function FooterMenu(props: FooterMenu) {
	return (
		<StyledFooterMenu>
			<UnodoredList>
				{props.menuItems.map((el, i) => {
					return (
						<List key={i}>
							<Link href="#">{el}</Link>
						</List>
					);
				})}
			</UnodoredList>
		</StyledFooterMenu>
	);
}

const StyledFooterMenu = styled.nav`
width: 285px;
height: 24px;
display: flex;
`;

const List = styled.li`
	list-style: none;
`;

const UnodoredList = styled.li`
display: flex;
gap: 32px;

`;

const Link = styled.a`
`;
