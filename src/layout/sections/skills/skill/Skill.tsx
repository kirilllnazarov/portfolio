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
			<IconWrapper>
				<Icon iconId={props.iconId} viewBox={"0 0 120 120"} />
			</IconWrapper>
			<TewtWrapper>
				<SkillTitle>{props.title}</SkillTitle>
				<SkillText>{props.description}</SkillText>
			</TewtWrapper>
		</StyledSkill>
	);
}

const StyledSkill = styled.div`
	width: 440px;
	height: 146px;
	/* outline: 1px solid red; */
	display: flex;
	align-items: center;
	
`;

const SkillTitle = styled.h2`
	width: 325px;
	height: 30px;
	font-size: 30px;
	font-weight: 300;
`;

const SkillText = styled.div`
	width: 325px;
	height: 110px;
	margin-bottom: 5px;
	font-size: 18px;
	font-style: normal;
	font-weight: 200;
	line-height: 123%;
`;

const IconWrapper = styled.div`
	width: 325px;
	height: 145px;
	padding-top: 17px;
`;

const TewtWrapper = styled.div`
	width: 325px;
	height: 145px;

`;
