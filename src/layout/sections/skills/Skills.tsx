import styled from "styled-components";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import { Skill } from "./skill/Skill";

export function Skills() {
	return (
		<StyledSkills>
			<FlexWrapper wrap={"wrap"} justify="space-between">
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
			</FlexWrapper>
		</StyledSkills>
	);
}

const StyledSkills = styled.section`
	background-color: #2f75d7;
	min-height: 50vh;
`;
