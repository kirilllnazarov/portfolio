import styled from "styled-components";
import { Link } from "../link/Link";

type MenuType = {
	menuItems: Array<string>;
};

export function Menu(props: MenuType) {
	return (
		<StyledMenu>
			<UnodoredListitem>
				{props.menuItems.map((el) => (
					<ListItem>
						<Link href="">{el}</Link>
					</ListItem>
				))}
			</UnodoredListitem>
		</StyledMenu>
	);
}

const StyledMenu = styled.nav`
	display: flex;
`;
const UnodoredListitem = styled.ul`
	display: flex;
	gap: 32px;
	justify-content: center;
`;

const ListItem = styled.li``;
