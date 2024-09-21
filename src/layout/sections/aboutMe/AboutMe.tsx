import styled from "styled-components"
import photo from '../../../assets/images/photo.webp'


export function AboutMe() {
  return (
    <StyledAboutMe>
			<FooterText>
				<Title>About Me</Title>
				<Header>I look at usual things with my unsual eyes.</Header>
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
			</FooterText>
            <Image src={photo}/>
            <Image src={photo}/>
    </StyledAboutMe>
  )
}

const StyledAboutMe = styled.section``

const FooterText = styled.div``;

const Title = styled.span``;

const Header = styled.h2``;

const Text = styled.p``;

const Image = styled.img`
width: 100px;
height: 100px;
`;
