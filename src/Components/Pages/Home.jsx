import { useRef } from 'react'
// import React, { useRef } from 'react'
// No CSS file exists for Home
import Nav from '../Nav'
import Banner from '../Banner'
import Men from '../Men'
import Women from '../Women'
import Kids from '../Kids'
import Explore from '../Explore'
import Social from '../Social'
import Subscribe from '../Subscribe'
// import Footer from '../Footer'
import { Footer } from '../Footer'


const Home = () => {


    const menref = useRef()
    const womenref = useRef()
    const kidsref = useRef()
    const exploreref = useRef()


    // const scrollToSection = (section) => {
    //     switch (section) {
    //         case "Men":
    //             menref.current?.scrollIntoView({ behavior: "smooth" });
    //             break;
    //         case "Women":
    //             womenref.current?.scrollIntoView({ behavior: "smooth" });
    //             break;
    //         case "Kids":
    //             kidsref.current?.scrollIntoView({ behavior: "smooth" });
    //             break;
    //         case "Explore":
    //             exploreref.current?.scrollIntoView({ behavior: "smooth" });
    //             break;
    //         default:
    //             break;
    //     }

    // };

    const scrollToSection = (section) => {

        if (section === "Men") menref.current?.scrollIntoView({ behavior: "smooth" });
        if (section === "Women") womenref.current?.scrollIntoView({ behavior: "smooth" });
        if (section === "Kids") kidsref.current?.scrollIntoView({ behavior: "smooth" });
        if (section === "Explore") exploreref.current?.scrollIntoView({ behavior: "smooth" });

    }


    return (
        <div>

            <Nav scrollToSection={scrollToSection} />
            <Banner />
            <Men ref={menref} />
            <Women ref={womenref} />
            <Kids ref={kidsref} />
            <Explore ref={exploreref} />
            <Social />
            <Subscribe />
            <Footer />


        </div>
    )
}

export default Home
