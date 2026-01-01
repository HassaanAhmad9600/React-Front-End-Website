// import React from 'react'
import styles from './Subscribe.module.css'

const Subscribe = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }

    return (

        <div>

            <div className={styles.subscription}>

                <div className={styles.left}>
                    <h2>By Subscribing , U Get 50% Off On All Products! So Grab Now! </h2>
                    <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, laboriosam!</i></p>

                    <div className={styles.input}>
                        <input type="text" placeholder='Enter Name' />
                        <input type="tel" placeholder='Enter Number' />
                        <button type='submit' onClick={scrollToTop}>  <i className="fa fa-paper-plane"></i> </button>

                    </div>

                </div>




                <div className={styles.right}>

                    <div className={styles.right1}>
                        <ul>
                            <li>
                                <h3>Store Location:</h3>
                                <p>Sunny Isles Beach, FL 33160, United States</p>
                            </li>
                            <li>
                                <h3>Phone:</h3>
                                <p>010-020-0340</p>
                            </li>
                            <li>
                                <h3> Office Location:</h3>
                                <p>North Miami Beach</p>
                            </li>
                        </ul>

                    </div>


                    <div className={styles.right2}>

                        <ul>
                            <li>
                                <h3>Work Hours:</h3>
                                <p>07:30 AM - 9:30 PM Daily</p>
                            </li>


                            <li>
                                <h3>Email:</h3>
                                <p>info@company.com</p>
                            </li>


                            <li>
                                <h3>Social Media:</h3>
                                <p>Facebook, Instagram, Behance, Linkedin</p>
                            </li>


                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Subscribe
