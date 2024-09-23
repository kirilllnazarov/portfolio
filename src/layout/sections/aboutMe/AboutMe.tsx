import styled from "styled-components";
import photo from "../../../assets/images/photo.webp";
import { theme } from "../../../styles/Theme";

export function AboutMe() {
	return (
		<StyledAboutMe>
			<TextWrapper>
				<HeaderWrappep>
					<Title>About Me</Title>
					<Header>I look at usual things with my unsual eyes.</Header>
				</HeaderWrappep>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
					faucibus massa sollicitudin amet augue. Nibh metus a semper purus
					mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
					adipiscing velit non nulla in amet pellentesque. Sit turpis pretium
					eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
					Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.
					Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est
					sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu
					aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum
					cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla
					pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris
					cras molestie velit. Maecenas eget adipiscing quisque viverra lectus
					arcu, tincidunt ultrices pellentesque.
				</Text>
			</TextWrapper>

			<Image src={photo} id="photo1" />
			<Image src={photo} id="photo2" />
		</StyledAboutMe>
	);
}

const Image = styled.img`
	width: 540px;
	height: 500px;
	object-fit: cover;
	margin-bottom: 410px;
	margin-left: 210px;
`;

const StyledAboutMe = styled.section`
	background-color: ${theme.color.priamoryBg};
	color: ${theme.color.secondaryBg};
	width: 1440px;
	height: 1670px;
	padding-top: 110px;

	/* & ${Image}:first-child {
		width: 500px;
		height: 500px;
	} */

	& ${Image}:last-child {
		width: 440px;
		height: 410px;
		object-fit: cover;
		margin-bottom: 205px;
		margin-left: 63px;
	}
`;

const TextWrapper = styled.div`

	width: 1312px;
	height: 540px;
	display: flex;
	margin: 0 64px;
`;

const HeaderWrappep = styled.div`
	margin-left: 166px;
	min-height: 100%;
	width: 422px;
`;

const Title = styled.span`

	font-size: 16px;
	font-weight: 900;
	line-height: 150%;
	width: 422px;
	height: 24px;
`;

const Header = styled.h2`

	font-size: 48px;
	font-weight: 254;
	line-height: 120%;
	font-variant: all-small-caps;
	width: 422px;
	height: 174px;
	margin-top: 16px;

	& {
		white-space: pre-line;
	}
`;

const Text = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 18px;
	font-weight: 400;
	line-height: 150%;

	min-height: 100%;
	width: 440px;
	margin-left: 166px;
	display: flex;
	align-items: center;
`;
