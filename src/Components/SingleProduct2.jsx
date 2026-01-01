// import React from 'react'
import styles from './SingleProduct2.module.css'
import singleProduct2 from './images/singleProduct2.jpg'


const SingleProduct2 = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }


    return (

        <div>

            <div className={styles.SProduct2}>

                <div className={styles.left}>
                    <img src={singleProduct2} alt="SingleProduct" />
                </div>

                <div className={styles.right}>

                    <h2>Total: $210.00</h2>
                    <button onClick={scrollToTop}>Add To Cart</button>

                </div>

            </div>


        </div>
    )
}

export default SingleProduct2
