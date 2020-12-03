import React from "react";
import logoDark from "../../assets/logo-dark.svg";
import { PrimaryButton } from "../../utilities/GlobalStyles";
import { FaFacebook, FaTwitter, FaLinkedin, FaSkype } from "react-icons/fa";
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    Logo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from "./Footer.elements";

function Footer () {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <PrimaryButton stretch>Subscribe</PrimaryButton>
                </Form>
            </FooterSubscription>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <Logo src={`${logoDark}`} alt="PTS Schools" />PTS<span>SCHOOLS</span>
                    </SocialLogo>
                    <WebsiteRights>PTS Schools &copy; 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Skype">
                            <FaSkype />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
