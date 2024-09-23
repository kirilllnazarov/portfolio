import styled from "styled-components";
import { Button } from "../../../../components/button/Button";
import { theme } from "../../../../styles/Theme";

type ProjectType = {
	bgcImage: string;
	projectTheme: string;
	title: string;
	text: string;
};

export function Project(props: ProjectType) {
	return (
		<StyledProject bgcImage={props.bgcImage}>
			<HeadersProject>
				<ProjectTheme>{props.projectTheme}</ProjectTheme>
				<Title>{props.title}</Title>
			</HeadersProject>
			<TextStyled>
				<Text>{props.text}</Text>
				<Button>View More</Button>
			</TextStyled>
		</StyledProject>
	);
}

type StyledProjectType = {
	bgcImage: string;
};

const StyledProject = styled.div<StyledProjectType>`
	background-image: url(${(props) => props.bgcImage});
	background-position: 100%;
	background-size: cover;
	width: 1040px;
	height: 447px;
	color: ${theme.color.secondaryBg};

	display: flex;
	flex-wrap: wrap;
	gap: 80px;
`;

const ProjectTheme = styled.h2`
	width: 433px;
	height: 24px;
	font-size: 16px;
	font-weight: 600;
	line-height: 150%;
`;

const Title = styled.h3`
	margin-top: 16px;
	width: 433px;
	height: 162px;
	font-size: 45px;
	font-weight: 200;
	line-height: 120%;
`;

const Text = styled.p`
	width: 433px;
	height: 135px;
	margin-bottom: 48px;
`;

const HeadersProject = styled.div`
	width: 433px;
	height: 202px;
	/* outline: 1px solid red; */
	margin-top: 92px;
	margin-left: 46px;
`;

const TextStyled = styled.div`
	width: 433px;
	height: 202px;
	/* outline: 1px solid red; */
	margin-right: 46px;
	margin-top: 132px;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
`;
