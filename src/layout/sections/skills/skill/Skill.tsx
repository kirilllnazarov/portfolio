import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillType = {
	iconId: string;
	title: string;
	description?: string;
};

export function Skill(props: SkillType) {
	return (
		<StyledSkill>
			<div>
				<Icon iconId={props.iconId} viewBox={"0 0 120 120"} />
			</div>
			<div>
				{" "}
				<SkillTitle>{props.title}</SkillTitle>
				<SkillText>{props.description}</SkillText>
			</div>
		</StyledSkill>
	);
}

const StyledSkill = styled.div`
	width: 30%;
	background-color: #ffffff;
	margin: 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 30px;
`;

const SkillTitle = styled.h2``;

const SkillText = styled.p``;
