import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FooterMenu } from "./footerMenu/FooterMenu";
import { Button } from "../../components/button/Button";
import { Icon } from "../../components/icon/Icon";

const footerItems = ["Projects", "About", "Digital Assets"];

export function Footer() {
	return (
		<StyledFooter>
			<div>
				<div>
					<Logo />
					<FooterMenu menuItems={footerItems} />
				</div>
				<div>
					<Text>Subscribe to my emailing list</Text>
					<Form placeholder='Enter your email'/>
					<Button btnTitle='Subscribe' btnLink="" iconId=""/>
					<Privacy>By subscribing you agree to with our Privacy Policy</Privacy>
				</div>
			</div>
			<div>
				<span>2024 Relume. All right reserved.</span>
				<Icon iconId=""/>
				<Icon iconId=""/>
				<Icon iconId=""/>
				<Icon iconId=""/>
			</div>
		</StyledFooter>
	);
}

const StyledFooter = styled.section`
	background-color: #6a726a;
`;

const Text = styled.span``;

const Form = styled.input``;

const Privacy = styled.p``;
