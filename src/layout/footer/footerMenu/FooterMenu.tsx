import styled from "styled-components";

type FooterMenu = {
	menuItems: Array<string>;
};

export function FooterMenu(props: FooterMenu) {
	return (
		<StyledFooterMenu>
			<ul>
				{props.menuItems.map((el, i) => {
					return (
						<List key={i}>
							<Link href="#">{el}</Link>
						</List>
					);
				})}
			</ul>
		</StyledFooterMenu>
	);
}

const StyledFooterMenu = styled.nav``;

const List = styled.li`
	list-style: none;
`;

const Link = styled.a``;
