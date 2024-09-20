import styled from "styled-components";
import { Button } from "../../../../components/button/Button";

type ProjectType = {
	bgcImage: string;
	projectTheme: string;
	title: string;
	text: string;
	btnLink: string;
	btnTitle: string;
};

export function Project(props: ProjectType) {
	return (
		<StyledProject bgcImage={props.bgcImage}>
			<ProjectTheme>{props.projectTheme}</ProjectTheme>
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>
			<Button btnTitle={props.btnTitle} btnLink={props.btnLink} iconId={"chewron"} width={'101'} height={'24'}/>
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
	max-width: 1040px;
	color: white;
	& {
		margin-bottom: 70px;
	}
display: flex;
flex-wrap: wrap;
gap: 80px
`;

const ProjectTheme = styled.h2`
width: 433px;
height: 24px;
`;

const Title = styled.h3`
width: 433px;
height: 162px;
`;

const Text = styled.p`
	width: 433px;
	height: 135px;
`;
