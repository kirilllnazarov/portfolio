import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FooterMenu } from "./footerMenu/FooterMenu";
import { Button } from "../../components/button/Button";
import { Icon } from "../../components/icon/Icon";
import { Link } from "../../components/link/Link";
import { theme } from "../../styles/Theme";

const footerItems = ["Projects", "About", "Digital Assets"];

export function Footer() {
	return (
		<StyledFooter>
			<Wrapper>
				<LeftBox>
					<Logo />
					<FooterMenu menuItems={footerItems} />
				</LeftBox>
				<RightBox>
					<Text>Subscribe to my emailing list</Text>
					<Form placeholder="Enter your email" />
					<Button type={"submit"}>Subscribe</Button>
					<Privacy>
						By subscribing you agree to with our
						<Link href=""> Privacy Policy</Link>
					</Privacy>
				</RightBox>
			</Wrapper>
			<BottomBox>
				<TextWrapper>2024 Relume. All right reserved.</TextWrapper>
				<IconWrapper>
					<Icon iconId="facebook" width="24" height="24" viewBox="0 0 24 24" />
					<Icon iconId="instagram" width="24" height="24" viewBox="0 0 24 24" />
					<Icon iconId="twitter" width="24" height="24" viewBox="0 0 24 24" />
					<Icon iconId="linkedin" width="24" height="24" viewBox="0 0 24 24" />
				</IconWrapper>
			</BottomBox>
		</StyledFooter>
	);
}

const StyledFooter = styled.section`
	background-color: ${theme.color.secondaryBg};
	width: 1440px;
	height: 434px;
`;

const Wrapper = styled.div`
	width: 1064px;
	height: 124px;
	margin: 80px;
	margin-left: 188px;
	display: flex;
	justify-content: space-between;
`;

const LeftBox = styled.div`
	display: flex;
	height: 94px;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	font-size: 16px;
	font-weight: 400;
	line-height: 150%;
`;

const RightBox = styled.div`
	width: 400px;
	height: 122px;
	display: flex;
	flex-wrap: wrap;

	& ${Button} {
		width: 80px;
		height: 24px;
		margin: 12px 24px;
		border: 1px solid ${theme.color.priamoryBg};
		font-size: 16px;
		font-weight: 400;
		line-height: 150%;
	}
`;

const Text = styled.span`
	font-size: 16px;
	font-weight: 700;
	line-height: 150%;
	width: 400px;
	height: 24px;
`;

const Form = styled.input`
	width: 234px;
	height: 24px;
	margin: 12px;
	font-size: 16px;
	font-weight: 400;
	line-height: 150%;
`;

const Privacy = styled.span`
	font-family: Roboto;
	font-size: 12px;
	font-weight: 400;
	line-height: 150%;
`;

const BottomBox = styled.div`
	width: 1280px;
	height: 24px;
	margin-top: 130px;
	margin-left: 80px;
	padding-left: 100px;
	display: flex;
	gap: 716px;
	align-items: center;

	position: relative;

	&::before {
		content: '';
		position: absolute;
		display: inline-block;
		width: 1280px;
		height: 1px;
		background-color: #000;
		top: -66px;
		left: -10px;
	}
`;

const TextWrapper = styled.div`
	width: 198px;
	height: 21px;
	font-family: Roboto;
	font-size: 14px;
	font-weight: 400;
	line-height: 150%;
`;

const IconWrapper = styled.div`
	display: flex;
	gap: 12px;
`;
