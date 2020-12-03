import styled from "styled-components";

import imageOneSmall from "../../assets/libraryb-small.jpg";
import imageOne from "../../assets/libraryb-medium.jpg";
import imageTwo from "../../assets/facilities-medium.jpg";
import imageThree from "../../assets/location-medium.jpg";

export const SlideContent = styled.div`
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    background-color: rgba(15, 27, 40, 0.4);
    padding: 4rem 4rem 4rem 2rem;

    @media screen and (min-width: 991px) {
        grid-column: 1/2;
        padding: 4rem 2rem;
    }
`;

export const SlideOne = styled.div`
    margin-bottom: 2rem;
    background: url(${imageOneSmall});
    background-size: cover;

    @media screen and ( min-width: 960px) {
        background: url(${imageOne});
        background-position: center;
    }
`;

export const SlideTwo = styled.div`
    margin-bottom: 2rem;
    background: url(${imageTwo});
    background-size: cover;

    @media screen and ( min-width: 960px) {
        background: url(${imageTwo});
        background-position: center;
    }
`;

export const SlideThree = styled.div`
    margin-bottom: 2rem;
    background: url(${imageThree});
    background-size: cover;

    @media screen and ( min-width: 960px) {
        background: url(${imageThree});
        background-position: center;
    }
`;

export const SlideTitle = styled.h2`
    margin-bottom: 1rem;
    color: #FAFCFE;
    font-size: 1.5em;
    font-weight: 500;
    line-height: 1.13636364;

    @media screen and (min-width: 768px) {
        font-size: 1.5em;
        line-height: 1.25;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.75em;
        line-height: 1.25;
    }
`;

export const SlideDescription = styled.p`
    margin-bottom: 2rem;
    color: #ECF1F4;
    font-size: 0.875em;
    font-weight: 400;
    line-height: 1.5;
    max-width: 38em;

    @media screen and (min-width: 960px) {
        max-width: 35rem;
    }
`;

const NextPrevContainer = styled.div`
    position: absolute;
    width: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    cursor: pointer;

    @media screen and (min-width: 1200px) {
        width: 72px;
    }
`;

export const SliderNext = styled(NextPrevContainer)`
    justify-content: flex-end;
    right: 0;
    bottom: 2rem;
    background: rgba(251, 252, 254, .6);
    height: 100%;
    z-index: 999;
`;

export const SliderPrev = styled(NextPrevContainer)`
    background: #59AD15;
    bottom: 2rem;
    right: 56px;
    z-index: 999;

    @media screen and (min-width: 1200px) {
        right: 72px;
    }
`;

export const SliderNavIcon = styled.div`
    padding: 1rem .5rem;
`;
