import styled from "styled-components";

export const PageTitleSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 6rem 0;
    background: linear-gradient(0deg, rgba(5, 116, 252, 0.4), rgba(5, 116, 252, 0.4)), url( ${props => props.bgImage });
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 991px) {
        padding: 8rem 0;
    }

    @media screen and (min-width: 1200px) {
        padding: 10rem 0;
    }
`;

export const Title = styled.h2`
    font-size: 2em;
    letter-spacing: 0.02em;
    line-height: 1.25;
    color: #FAFCFE;
    text-transform: uppercase;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 2.5em;
        line-height: 1.125;
    }

    @media screen and (min-width: 991px) {
        font-size: 3em;
        line-height: 1.05;
    }
`;
