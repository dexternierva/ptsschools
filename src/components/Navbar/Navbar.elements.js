import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../utilities/GlobalStyles";

export const Nav = styled.nav`
    background: #FAFCFE;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (min-width: 1200px) {
        height: 80px;
    }
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;

    @media screen and (min-width: 1200px) {
        height: 80px;
    }
`;

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 700;
    color: #59AD15;

    > span {
        color:#4F81BD;
        font-weight: 400;
    }
`;

export const Logo = styled.img`
    display: block;
    margin-right: .5rem;
`;

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 1200px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 26px;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 64px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #4F81BD;
    }
`;

export const NavItem = styled.li`
    height: 64px;
    width: 100%;
    border: none;

    @media screen and (min-width: 1200px) {
        height: 80px;
        width: auto;
        border-bottom: 2px solid transparent;

        &:hover {
            border-bottom: 2px solid #0574FC;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #FAFCFE;
    display: table;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    height: 100%;
    text-align: center;
    padding: 2rem;
    width: 100%;

    @media screen and (min-width: 1200px) {
        display: flex;
        height: 100%;
        color: #4F81BD;
        padding: 1.5rem;

        &:hover {
            color: #0574FC;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 1200px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 2rem;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

    @media screen and (min-width: 1200px) {
        padding: 1.5rem;
    }
`;
