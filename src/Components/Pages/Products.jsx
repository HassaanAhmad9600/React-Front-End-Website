// import React from 'react'
import styles from './Products.module.css'
import Nav from '../Nav'
import { Footer } from '../Footer'
import ImageBanner from '../ImageBanner'
import MenIG from '../MenIG'
import WomenIG from '../WomenIG'
import KidsIG from '../KidsIG'
import NextPage from '../NextPage'
import ProductsPageHeading from '../images/ProductsPageHeading.jpg'

const Products = () => {
    return (
        <div>
            <Nav />
            <ImageBanner ImageURL={ProductsPageHeading} ImageHeading='Our Products' ImageSpan='Image Span' />

            <div className={styles.head}>
                <h1>When quality meets excellence</h1>
                <span><i>Result is Premium </i></span>
            </div>

            <MenIG />
            <WomenIG />
            <KidsIG />
            <NextPage />
            <Footer />

        </div>
    )
}

export default Products
