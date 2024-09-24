import styled from "styled-components";
import myPhoto from "../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import { theme } from "../../../styles/Theme";

export function Main() {
	return (
		<StyledMain>
			<FlexWrapper display={"flex"} justify="space-around">
				<div>
					<Greeting>HELLO I’M Kirill</Greeting>
					<MainTitle>A Frontend Developer.</MainTitle>
				</div>
				<PhotoWrapper>
					<Photo src={myPhoto} alt="Kirill Nazarov frontend developer" />
				</PhotoWrapper>
			</FlexWrapper>
		</StyledMain>
	);
}

const StyledMain = styled.div`
	height: 864px;
	max-width: 100vh;
	background-color: ${theme.color.secondaryBg};
`;

const Greeting = styled.h2`
	width: 650px;
	height: 350px;
	font-size: 150px;
	font-weight: 800;
	line-height: 117.5%;
	margin-top: 132px;
	margin-left: 190px;
`;

const MainTitle = styled.h1`
	width: 650px;
	height: 350px;
	margin-left: 190px;
	font-size: 52px;
	font-weight: 300;
`;

const PhotoWrapper = styled.div`
	position: relative;
	z-index: 0;
	&::before {
		content: "";
		display: inline-block;
		width: 570px;
		height: 570px;
		background-color: ${theme.color.shadow};
		transform: rotate(-8deg) translate(-5%, 20%);
		position: absolute;
		z-index: -1;
	}
`;

const Photo = styled.img`
	margin-top: 120px;
	margin-right: 106px;;
	width: 570px;
	height: 570px;
	object-fit: cover;
	transform: rotate(8deg);
`;

