import React, { Fragment, useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MenuButton } from "../../utilities/GlobalStyles";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    Logo,
    Hamburger,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from "./Navbar.elements";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <Fragment>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <Logo src={`${logo}`} alt="PTS Schools" />PTS<span>SCHOOLS</span>
                        </NavLogo>
                        <Hamburger onClick={ handleClick }>
                            { click ?
                                <IconContext.Provider value={{ color: "#0574FC" }}>
                                    <FaTimes />
                                </IconContext.Provider> :
                                <IconContext.Provider value={{ color: "#4F81BD" }}>
                                    <FaBars />
                                </IconContext.Provider>
                            }
                        </Hamburger>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/courses">Courses</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/blog">News &amp; Events</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/courses">Careers</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contact">Contact</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/login">
                                        <MenuButton stretch>Login</MenuButton>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/login">
                                        <MenuButton stretch>Login</MenuButton>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </Fragment>
    )
}

export default Navbar;
