import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    background-color: #0F1B28;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 4px solid #59AD15;
`;

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    color: #FAFCFE;
`;

export const FooterSubHeading = styled.p`
    font-family: 'Works Sans', sans-serif;
    margin-bottom: 1rem;
    font-size: 1.25em;
    line-height: 1.25;

    @media screen and (min-width: 991px) {
        font-size: 1.5em;
        line-height: 1.45833333;
    }
`;

export const FooterSubText = styled.p`
    margin-bottom: 1.5rem;
    font-size: 0.875em;
    font-style: italic;
    font-weight: 300;
    color: #ECF1F4;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    padding: .5rem 1rem;
    border-radius: 2px;
    margin-right: 0.625rem;
    outline: none;
    border: none;
    font-size: 1rem;
    border: 1px solid #FAFCFE;

    &::placeholder {
        color: #8C8CA1;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 1rem 0;
    }
`;

export const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
    flex-direction: column;

    @media screen and (min-width: 820px) {
        flex-direction: row;
    }
`;

export const SocialLogo = styled(Link)`
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 700;
    color: #59AD15;

    > span {
        color:#4EC7F1;
        font-weight: 400;
    }
`;

export const Logo = styled.img`
    display: block;
    margin-right: .5rem;
`;

export const WebsiteRights = styled.small`
    color: #4F81BD;
    margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
`

export const SocialIconLink = styled.a`
    color: #FAFCFE;
    font-size: 1.5rem;
`
