import React, { Fragment, useEffect } from "react";
import { Container, SliderGrid, Link } from "../../utilities/GlobalStyles";
import { SlideOne, SlideTwo, SlideThree, SlideTitle, SlideDescription, SliderNext, SliderPrev, SlideImage, SliderNavIcon, SlideContent } from "./Hero.elements";
import { IconContext } from "react-icons/lib";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);

function Hero () {

    return (
        <Fragment>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl:'.slider-next',
                    prevEl:'.slider-prev',
                }}
                loop
                pagination={{ type: 'progressbar' }}
            >
                <SwiperSlide>
                    <SlideOne>
                        <SliderGrid>
                            <SlideContent>
                                <SlideTitle>Who we are</SlideTitle>
                                <SlideDescription>A literary text is a piece of writing, such as a book or poem, that has the purpose of telling a story or entertaining, as in a fictional novel. Its primary function as a text is usually aesthetic, but it may also contain political messages or beliefs. American schoolchildren and their parents are taught that literary texts contrast with informational texts that have the purpose of providing information rather than entertainment are increasingly receiving.</SlideDescription>
                                <Link>Details +</Link>
                            </SlideContent>
                        </SliderGrid>
                    </SlideOne>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideTwo>
                        <SliderGrid>
                            <SlideContent>
                                <SlideTitle>What we do</SlideTitle>
                                <SlideDescription>American schoolchildren and their parents are taught that literary texts contrast with informational texts that have the purpose of providing information rather than entertainment. Informational texts, such as science briefs and history books, are increasingly receiving emphasis in public school curricula as part of the Common Core State Standards. As a result, many parents have challenged the idea that literary texts are of less pedagogical value.</SlideDescription>
                                <Link>Details +</Link>
                            </SlideContent>
                        </SliderGrid>
                    </SlideTwo>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideThree>
                    <SliderGrid>
                        <SlideContent>
                            <SlideTitle>How we do it</SlideTitle>
                            <SlideDescription>Its primary function as a text is usually aesthetic, but it may also contain political messages or beliefs. American schoolchildren and their parents are taught that literary texts contrast with informational texts that have the purpose of providing information rather than entertainment. Informational texts, such as science briefs and history books, are increasingly receiving emphasis in public school curricula as part of the Common Core State Standards.</SlideDescription>
                            <Link>Details +</Link>
                        </SlideContent>
                    </SliderGrid>
                    </SlideThree>
                </SwiperSlide>

                <SliderPrev>
                    <IconContext.Provider value={{ color: '#FAFCFE', size: '2em' }}>
                        <SliderNavIcon className="slider-prev"><AiOutlineLeft /></SliderNavIcon>
                    </IconContext.Provider>
                </SliderPrev>
                <SliderNext>
                    <IconContext.Provider value={{ color: '#0F1B28', size: '2em' }}>
                        <SliderNavIcon className="slider-next"><AiOutlineRight /></SliderNavIcon>
                    </IconContext.Provider>
                </SliderNext>
            </Swiper>
        </Fragment>
    )
}

export default Hero;
