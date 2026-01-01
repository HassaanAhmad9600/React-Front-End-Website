// import React from 'react'
// No CSS file exists for SingleProduct
import Nav from '../Nav'
import ImageBanner from '../ImageBanner'
import SingleProduct1 from '../SingleProduct1'
import SingleProduct2 from '../SingleProduct2'
import { Footer } from '../Footer'

import singleProduct2 from '../images/singleProduct2.jpg'


const SingleProduct = () => {
    return (
        <div>
            <Nav />
            <ImageBanner ImageURL={singleProduct2} ImageHeading='Single Product Show Case ' ImageSpan='Image Span' />
            <SingleProduct1 />
            <SingleProduct2 />
            <Footer />

        </div>
    )
}

export default SingleProduct
