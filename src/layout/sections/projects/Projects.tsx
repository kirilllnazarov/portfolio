import styled from "styled-components";
import { Project } from "./project/Project";
import proj1 from "../../../assets/images/proj-1.webp";
import proj2 from "../../../assets/images/proj-2.webp";
import proj3 from "../../../assets/images/proj-3.webp";
import { theme } from "../../../styles/Theme";

export function Projects() {
	return (
		<StyledProjects>
			<SectionTitle>MY PROJECTS</SectionTitle>
			<ProjectWrapper>
				<Project
					bgcImage={proj1}
					projectTheme={"Mental Health"}
					title={"A Case Study_ Find Peace in Meditation"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
					}
				/>
				<Project
					bgcImage={proj2}
					projectTheme={"Fashion Show"}
					title={"A Case Study_ Enjoy Fashion Shows From Home"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
					}
				/>
				<Project
					bgcImage={proj3}
					projectTheme={"Barbeque"}
					title={"Branding_ Chicken Barbeque Never Goes Wrong"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
					}
				/>
			</ProjectWrapper>
		</StyledProjects>
	);
}

const StyledProjects = styled.section`
	max-height: 2130px;
	background-color: ${theme.color.secondaryBg};
	
`;

const SectionTitle = styled.h2`
	width: 772px;
	height: 224px;
	font-size: 120px;
	font-weight: 800;
	line-height: 93.5%;
	text-align: left;
	margin-top: 170px;
	margin-left: 200px;
`;

const ProjectWrapper = styled.div`
	width: 100%;
	height: 1498px;
	padding: 70px 200px 170px 200px;
display: flex;
flex-direction: column;
gap: 78px
`
