import React, { Fragment } from "react";
import { PageTitle } from "../../components";
import img from "../../assets/about.jpg";

function About () {
    return (
        <Fragment>
            <PageTitle text="About PTS Shools" img={img} />
        </Fragment>
    )
}

export default About;
