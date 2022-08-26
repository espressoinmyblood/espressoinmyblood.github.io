import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

export const FooterContainer = styled.div`
background-color: #101522;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterTextWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: #fff;
`;

export const FooterSubHeading = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin-bottom: 24px;
font-size: 24px;
`;

export const FooterSubText = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const FooterLinksContainer = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: center;
text-align: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 820px) {
    flex-direction: column;
    
}
`;

export const FooterLinksItems = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;

export const FooterLink = styled.a`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;

&:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
}
`;

export const EmailIcon = styled(FaEnvelope)`
margin-right: 0.5rem;
`;

export const FooterLinkText = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin-bottom: 10px;
font-size: 24px;
color: #fff;
`;
