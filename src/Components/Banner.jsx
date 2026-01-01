// import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }


    return (
        <div>

            <div className={styles.banner}>

                <div className={styles.mainPic}>
                    <h1>We Are HexaShop</h1>
                    <span>Awesome, clean & creative HTML5 Template</span>
                    <button onClick={scrollToTop}>Purchase Now!</button>
                </div>

                <div className={styles.sidePics}>

                    <div className={styles.picContainer}>

                        <div className={styles.defaultContent}>
                            <h2>Women</h2>
                            <span><i>Best Clothes For Women</i></span>

                        </div>


                        <div className={styles.hoverContent}>
                            <h2>Women</h2>
                            <span>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</span>
                            <button onClick={scrollToTop}>Discover More</button>
                        </div>


                    </div>



                    <div className={styles.picContainer}>

                        <div className={styles.defaultContent}>
                            <h2>Men</h2>
                            <span><i>Best Clothes For Men</i></span>
                        </div>


                        <div className={styles.hoverContent}>
                            <h2>Men</h2>
                            <span>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</span>
                            <button onClick={scrollToTop}>Discover More</button>
                        </div>

                    </div>


                    <div className={styles.picContainer}>

                        <div className={styles.defaultContent}>
                            <h2>Kids</h2>
                            <span><i>Best Clothes For Kid</i>s</span>
                        </div>

                        <div className={styles.hoverContent}>
                            <h2>Kids</h2>
                            <span>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</span>
                            <button onClick={scrollToTop}>Discover More</button>
                        </div>

                    </div>


                    <div className={styles.picContainer}>

                        <div className={styles.defaultContent}>
                            <h2>Accessories</h2>
                            <span><i>Best Trend Accessories</i></span>
                        </div>

                        <div className={styles.hoverContent}>
                            <h2>Accessories</h2>
                            <span>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</span>
                            <button onClick={scrollToTop}>Discover More</button>
                        </div>


                    </div>

                </div>

            </div>



        </div >
    )
}

export default Banner
