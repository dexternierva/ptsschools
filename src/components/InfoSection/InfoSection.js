import React from "react";
import { Container, TertiaryButton } from "../../utilities/GlobalStyles";
import {
    InfoSectionTitle,
    InfoSectionSubTitle,
    InfoWrapper,
    InfoContent,
    InfoContentHeader,
    InfoContentText
} from "./InfoSection.elements";

function InfoSection ({ headline, description, buttonLabel, img, imageStart, backgroundPosition }) {
    return (
        <Container>
            <InfoWrapper background={img} backgroundPosition={backgroundPosition} imageStart={imageStart}>
                <InfoContent>
                    <InfoContentHeader>{ headline }</InfoContentHeader>
                    <InfoContentText>{ description }</InfoContentText>
                    <TertiaryButton big stretch primary>{ buttonLabel }</TertiaryButton>
                </InfoContent>
            </InfoWrapper>
        </Container>
    )
}

export default InfoSection;
