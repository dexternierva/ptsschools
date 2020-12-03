import React from "react";
import { Container  } from "../../utilities/GlobalStyles";
import { InfoSectionTitle, InfoSectionSubTitle } from "./SectionHeader.elements";

function SectionHeader () {
    return (
        <Container>
            <InfoSectionTitle>Language <span>School</span></InfoSectionTitle>
            <InfoSectionSubTitle>Work with us. Learn with us. Improve with us.</InfoSectionSubTitle>
        </Container>
    )
}

export default SectionHeader;
