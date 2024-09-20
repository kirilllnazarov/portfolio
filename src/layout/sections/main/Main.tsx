import styled from "styled-components";
import myPhoto from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";

export function Main() {
	return (
		<StyledMain>
			<FlexWrapper display={"flex"} justify="space-around">
				<div>
					<Greeting>HELLO I’M Kirill Nazarov</Greeting>
					<MainTitle>A Frontend Developer.</MainTitle>
				</div>
				<Photo src={myPhoto} alt="Kirill Nazarov frontend developer" />
			</FlexWrapper>
		</StyledMain>
	);
}

const StyledMain = styled.div`
	min-height: 100vh;
	background-color: #609cc6;
`;

const Greeting = styled.h2``;

const MainTitle = styled.h1``;

const Photo = styled.img`
	width: 370px;
	height: 370px;
	object-fit: cover;
`;
