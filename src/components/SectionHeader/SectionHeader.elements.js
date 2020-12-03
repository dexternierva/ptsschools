import styled from "styled-components";

export const InfoSectionTitle = styled.h2`
    margin-top: 3rem;
    font-family: 'Work Sans', sans-serif;
    font-size: 1.625em;
    font-weight: 600;
    line-height: 1.15384615;
    color: #4E8C1B;
    letter-spacing: -.02em;

    > span {
        color: #4F81BD;
    }

    @media screen and (min-width: 768px) {
        margin-top: 3.5rem;
        font-size: 2em;
        line-height: 1.25;
    }

    @media screen and (min-width: 991px) {
        margin-top: 4rem;
        font-size: 2.25em;
        line-height: 1.25;
    }
`;

export const InfoSectionSubTitle = styled.h4`
    margin-bottom: 2rem;
    color: #343C4F;
    font-weight: 400;
    font-size: 1.125em;
`;
