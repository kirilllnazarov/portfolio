import styled from "styled-components";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import { Skill } from "./skill/Skill";
import { theme } from "../../../styles/Theme";

export function Skills() {
	return (
		<ContainerSkill>
			<StyledSkills>
				<Skill
					iconId={"react"}
					title={"React"}
					description={
						"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
					}
				/>
				<Skill
					iconId={"styledSomponents"}
					title={"Styled Components"}
					description={
						"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
					}
				/>
				<Skill
					iconId={"figma"}
					title={"Figma "}
					description={
						"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
					}
				/>
				<Skill
					iconId={"html"}
					title={"HTML"}
					description={
						"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
					}
				/>
				<Skill
					iconId={"css"}
					title={"CSS"}
					description={
						"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
					}
				/>
				<Skill
					iconId={"js"}
					title={"JS"}
					description={
						"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
					}
				/>
			</StyledSkills>
		</ContainerSkill>
	);
}

const StyledSkills = styled.section`
	background-color: ${theme.color.priamoryBg};
	color: ${theme.color.secondaryBg};
	width: 1336px;
	height: 351px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const ContainerSkill = styled.div`
	width: 1440px;
	height: 600px;
	background-color: ${theme.color.priamoryBg};
	padding: 102px 52px 144px;
`