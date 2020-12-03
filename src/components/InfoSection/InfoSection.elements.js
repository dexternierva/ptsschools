import styled from "styled-components";

export const InfoWrapper = styled.div`
    margin-bottom: 2rem;
    padding-top: 10rem;
    background-image: url( ${props => props.background[0]} );
    background-position: ${props => props.backgroundPosition};
    box-shadow: 0 4px 6px -6px rgba(0, 0, 0, .4);

    @media screen and (min-width: 960px) {
        margin-bottom: 4rem;
        background-image: url( ${props => props.background[1]} );
        background-size: cover;
        padding: ${({imageStart}) => (imageStart ? '0 50% 0 0' : '0 0 0 50%')};
    }
`;

export const InfoContent = styled.div`
    padding: 2rem;
    background: rgba(255, 255, 255, 0.9);

    @media screen and (min-width: 960px) {
        padding: 4rem 2rem 4rem 4rem;
        padding: ${({imageStart}) => (imageStart ? '4rem 2rem 4rem 4rem' : '4rem 4rem 4rem 2rem')};
    }
`;

export const InfoContentHeader = styled.h3`
    color: #343C4F;
    border-bottom: 1px solid #59AD15;
    text-transform: uppercase;
    font-size: 1.375em;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        font-size: 1.5em;
    }

    @media screen and (min-width: 960px) {
        font-size: 1.75em;
    }
`;

export const InfoContentText = styled.p`
    margin-top: .5rem;
    color: #343C4F;

    @media screen and (min-width: 960px) {
        margin-top: 1rem;
    }
`;
