// import React from 'react'
import styles from './Services.module.css'
import exploreImage1 from './images/exploreImage1.jpg'
import service1 from './images/service1.jpg'
import service2 from './images/service2.jpg'

const Services = () => {

    return (

        <div>

            <div className={styles.OurServices}>

                <div className={styles.top}>
                    <h2>Our Services</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                </div>


                <div className={styles.Services}>

                    <div className={styles.Service}>
                        <h3>Synther Vaporware</h3>
                        <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
                        </p>
                        <img src={exploreImage1} alt="hexashop image" />
                    </div>

                    <div className={styles.Service}>
                        <h3>Locavore Squidward</h3>
                        <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
                        </p>
                        <img src={service1} alt="hexashop image" />
                    </div>

                    <div className={styles.Service}>
                        <h3>Health Gothfam</h3>
                        <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
                        </p>
                        <img src={service2} alt="hexashop image" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services
