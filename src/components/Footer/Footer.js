import React from 'react'
import { 
    FooterTextWrapper, 
    FooterContainer, 
    FooterSubHeading, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLink,
    FooterLinksItems,
    FooterSubText,
    EmailIcon,
    FooterLinkText
} from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterTextWrapper>
            <FooterSubHeading>
            Drop me a line:
            </FooterSubHeading>
            <FooterSubText>
                <EmailIcon />elena.est.ici@gmail.com 
            </FooterSubText>
        </FooterTextWrapper>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkText>Also, check out my profiles:</FooterLinkText>
                <FooterLinksItems>
                    <FooterLink href={'https://www.linkedin.com/in/espressoinmyblood/'} target="_blank">LinkedIn</FooterLink>
                    <FooterLink href={'https://github.com/espressoinmyblood'} target="_blank">GitHub</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;