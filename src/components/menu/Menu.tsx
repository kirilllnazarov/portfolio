import styled from "styled-components";

type MenuType = {
	menuItems: Array<string>;
};

export function Menu(props: MenuType) {
	return (
		<StyledMenu>
			<ul>
				{props.menuItems.map((el) => (
					<li><a href=''>{el}</a></li>
				))}
			</ul>
		</StyledMenu>
	);
}

const StyledMenu = styled.nav`
ul {
    display: flex;
    gap: 20px;
    list-style: none;
}
`;
