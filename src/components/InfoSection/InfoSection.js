import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { 
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Description,
    Img,
    ImgWrapper
} from './InfoSection.elements';
import { Container, Button } from '../../globalStyles';


const InfoSection = ({
    lightBack, 
    imgStart, 
    lightTopLine, 
    lightHeading, 
    lightDescription, 
    buttonColor, 
    buttonLabel, 
    topLine, 
    heading, 
    description,
    img,
    alt,
    start
}) => {
  return (
    <>
        <InfoSec lightBack={lightBack}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightHeading={lightHeading}>{heading}</Heading>
                            <Description lightDescription={lightDescription}>{parse(description)}</Description>
                            <Link to='/contact-me'>
                                <Button big fontBig buttonColor={buttonColor}>{buttonLabel}</Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
    </>
  );
};

export default InfoSection