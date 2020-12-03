import React from "react";
import { Container } from "../../utilities/GlobalStyles";
import { PageTitleSection, Title } from "./PageTitle.elements";

function PageTitle ({ text, img }) {
    return (
        <PageTitleSection bgImage={img}>
            <Container>
                <Title>{text}</Title>
            </Container>
        </PageTitleSection>
    )
}

export default PageTitle;
