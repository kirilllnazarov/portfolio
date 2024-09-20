import styled from "styled-components";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import { Project } from "./project/Project";
import proj1 from "../../../assets/images/proj-1.webp";
import proj2 from "../../../assets/images/proj-2.webp";
import proj3 from "../../../assets/images/proj-3.webp";

export function Projects() {
	return (
		<StyledProjects>
			<SectionTitle>MY PROJECTS</SectionTitle>
			<FlexWrapper direction="column" align="center">
				<Project
					bgcImage={proj1}
					projectTheme={"Mental Health"}
					title={"A Case Study_ Find Peace in Meditation"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
					}
					btnTitle={"View More"}
					btnLink={"#"}
				/>
				<Project
					bgcImage={proj2}
					projectTheme={"Fashion Show"}
					title={"A Case Study_ Enjoy Fashion Shows From Home"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
					}
					btnTitle={"View More"}
					btnLink={"#"}
				/>
				<Project
					bgcImage={proj3}
					projectTheme={"Barbeque"}
					title={"Branding_ Chicken Barbeque Never Goes Wrong"}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
					}
					btnTitle={"View More"}
					btnLink={"#"}
				/>
			</FlexWrapper>
		</StyledProjects>
	);
}

const StyledProjects = styled.section`
max-width: 1440px;
max-height: 5585px;
	background-color: #df5c5c;
	
`;

const SectionTitle = styled.h2`
text-align: center;
`;
