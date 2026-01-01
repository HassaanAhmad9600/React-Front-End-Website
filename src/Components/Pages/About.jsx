// import React from 'react'
// No CSS file exists for About
import Nav from '../Nav'
import { Footer } from '../Footer'
import Subscribe from '../Subscribe'
import AboutUs from '../AboutUs'
import Team from '../Team'
import ImageBanner from '../ImageBanner'
import Services from '../Services'
import AboutUsPageHeading from '../images/AboutUsPageHeading.jpg'

const About = () => {
    return (
        <div>
            <Nav />
            <ImageBanner ImageURL={AboutUsPageHeading} ImageHeading='About Us' ImageSpan='Image Span' />
            <AboutUs />
            <Team />
            <Services />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default About
