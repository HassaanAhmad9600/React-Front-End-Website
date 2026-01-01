// import React from 'react'
// No CSS file exists for ContactUs
import Nav from '../Nav'
import { Footer } from '../Footer'
import Subscribe from '../Subscribe'
import ImageBanner from '../ImageBanner'
import Contact from '../Contact'
import ProductsPageHeading from '../images/ProductsPageHeading.jpg'
const ContactUs = () => {
    return (
        <div>
            <Nav />
            <ImageBanner ImageURL={ProductsPageHeading} ImageHeading='Contact Us' ImageSpan='Image Span' />
            <Contact />
            <Subscribe />
            <Footer />

        </div>
    )
}

export default ContactUs
