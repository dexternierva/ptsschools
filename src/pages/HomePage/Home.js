import React, { Fragment } from "react";
import { Cards } from "../../utilities/GlobalStyles";
import { InfoCourses, InfoFacilities, InfoLocations, HomePageCards } from "./Data";
import { Hero, Buckets, InfoSection, InNumbers, SectionHeader, Card } from "../../components";

function Home() {
    return (
        <Fragment>
            <Hero />
            <Cards>
                {HomePageCards.map(card => (
                    <Card key={`${card.id}`}>
                        <Card.Image src={card.image} alt={card.title} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.desc}</Card.Text>
                            <Card.Button>{card.ctaText}</Card.Button>
                        </Card.Body>
                    </Card>
                ))}
            </Cards>
            <SectionHeader />
            <InfoSection {...InfoCourses} />
            <InfoSection {...InfoFacilities} />
            <InfoSection {...InfoLocations} />
            <InNumbers />
        </Fragment>
    )
}

export default Home;
