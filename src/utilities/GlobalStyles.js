import styled, { createGlobalStyle } from "styled-components";

const primaryBoxShadow = "2px 2px 4px rgba(0, 0, 0, 0.16), 2px 2px 4px 4px rgba(78, 199, 241, 0.3), inset 0px -3px 0px rgba(60, 179, 221, 0.64)";
const hoverPrimaryBoxShadow = "1px 1px 2px rgba(0, 0, 0, 0.16), 1px 1px 2px 2px rgba(78, 199, 241, 0.1), inset -1px -2px 0px rgba(60, 179, 221, 0.4)";
const secondaryBoxShadow = "inset 0px -3px 0px #B9F3FF";
const hoverSecondaryBoxShadow = "inset 0px -3px 0px #91ECFF";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 100%;
    }

    body {
        color: #343C4F;
        font-family: 'Work Sans', 'Helvetica Neue', sans-serif;
        font-size: 1em;
    }

    img {
        display: block;
        max-width: 100%;
    }

    ul, ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    ul li, ol li {
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 2rem;
    padding-left: 2rem;

    @media screen and (min-width: 991px) {
        padding-right: 3rem;
        padding-left: 3rem;
    }
`;

export const SliderGrid = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 991px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding-left: 3rem;
    }
`;

export const Cards = styled.div`
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 2rem;
    padding-left: 2rem;

    @media screen and (min-width: 991px) {
        display: flex;
        justify-content: space-between;
        padding-right: 3rem;
        padding-left: 3rem;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    white-space: nowrap;
    color: #0F2150;
    color: ${({primary}) => (primary ? "#FAFCFE" : "#868FA7")};
    border: 1px solid rgba(60, 179, 221, 0.50);
    border: ${({primary}) => (primary ? "1px solid #40B9E2" : "1px solid #B9F3FF")};
    cursor: pointer;
    outline: none;
    background: ${({primary}) => (primary ? '#4EC7F1' : '#DFF9FF')};
    box-shadow: ${({ primary }) => (primary ? `${primaryBoxShadow}` : `${secondaryBoxShadow}`)};
    padding: ${({big}) => (big ? '16px 24px' : '8px 16px')};
    font-family: 'Work Sans', sans-serif;
    font-size: ${({fontBig}) => (fontBig ? '1.25em' : '1em')};
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({primary}) => (primary ? 'rgba(78, 199, 241, 0.6)' : '#BFF4FF')};
        box-shadow: ${({ primary }) => (primary ? `${hoverPrimaryBoxShadow}` : `${hoverSecondaryBoxShadow}`)};
        border: ${({ primary}) => (primary ? "1px solid #64C9ED" : "1px solid #81EAFF")}
    }

    &:focus {
        outline: 4px solid #81EAFF;
        outline-offset: 2px;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const PrimaryButton = styled.button`
    border-radius: ${({big}) => (big ? '4px' : '2px')};
    box-shadow: inset 0px -3px 0px rgba(60, 179, 221, 0.64);
    white-space: nowrap;
    color: #FAFCFE;
    border: 1px solid #40B9E2;
    cursor: pointer;
    outline: none;
    background: #4EC7F1;
    padding: ${({big}) => (big ? '16px 24px' : '8px 16px')};
    font-family: 'Work Sans', sans-serif;
    font-size: 1em;
    font-weight: 600;
    text-transform: uppercase;
    width: ${({stretch}) => (stretch ? '100%' : 'auto')};

    &:hover {
        transition: all 0.3s ease-out;
        background: #7AD5F5;
        border: 1px solid #64C9ED;
        box-shadow: inset 0px -2px 0px rgba(60, 179, 221, 0.64);
    }

    &:focus {
        outline: 4px solid #81EAFF;
        outline-offset: 2px;
    }

    @media screen and (min-width: 960px) {
        width: auto;
    }
`;

export const TertiaryButton = styled.button`
    margin-top: ${({big}) => (big ? '2rem' : '1.5rem')};
    padding: ${({big}) => (big ? '16px 24px' : '8px 16px')};
    background: transparent;
    border: ${({ primary}) => (primary ? "1px solid #59AD15" : "1px solid #FAFCFE")};
    color: ${({primary}) => (primary ? "#59AD15" : "#FAFCFE")};
    border-radius: ${({big}) => (big ? '4px' : '2px')};
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    width: ${({stretch}) => (stretch ? "100%" : "auto")};

    &:hover {
        background: ${({ primary}) => (primary ? "#59AD15" : "#FAFCFE")};
        color: ${({primary}) => (primary ? "#FAFCFE" : "#59AD15")};
    }

    @media screen and (min-width: 768px) {
        width: auto;
    }
`;

export const MenuButton = styled.button`
    padding: 8px 16px;
    background: transparent;
    border: 1px solid #FAFCFE;
    color: #FAFCFE;
    font-family: 'Work Sans', sans-serif;
    font-size: 1em;
    font-weight: 600;
    border-radius: 4px;
    width: ${({stretch}) => (stretch ? "100%" : "auto")};
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        color: #FAFCFE;
        background: #0574FC;
    }

    @media screen and (min-width: 1200px) {
        color: #4F81BD;
        border: 1px solid #4F81BD;
    }
`;

export const Link = styled.a`
    color: #8BE83F;
    font-family: 'Work Sans', sans-serif;
    font-size: 1em;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export default GlobalStyle;
