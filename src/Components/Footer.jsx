// import React from 'react'
import styles from './Footer.module.css'
import whitelogo from "./images/whitelogo.png"

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }

    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.footContainer}>

                    <div>
                        <img src={whitelogo} alt="image not found" />

                        <ul>
                            <li onClick={scrollToTop}>16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</li>
                            <li onClick={scrollToTop}> hexashop@company.com</li>
                            <li onClick={scrollToTop}> 010-020-0340</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Shopping & Categories</h4>
                        <ul>
                            <li onClick={scrollToTop}>Men’s Shopping</li>
                            <li onClick={scrollToTop}>Women’s Shopping</li>
                            <li onClick={scrollToTop}>Kid's Shopping</li>
                        </ul>
                    </div>


                    <div>
                        <h4>Useful Links</h4>
                        <ul>
                            <li onClick={scrollToTop}>Homepage</li>
                            <li onClick={scrollToTop}>About Us</li>
                            <li onClick={scrollToTop}>Help</li>
                            <li onClick={scrollToTop}>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Help & Information</h4>
                        <ul>
                            <li onClick={scrollToTop}>Help</li>
                            <li onClick={scrollToTop}>FAQ's</li>
                            <li onClick={scrollToTop}>Shipping</li>
                            <li onClick={scrollToTop}>Tracking ID</li>
                        </ul>
                    </div>

                </div>

                <div className={styles.footPara}>
                    <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved. </p><br />
                    <span>Design : Made By Hassan</span><br /><br />


                    <ul>
                        <li onClick={scrollToTop}><i className="fa-brands fa-facebook"></i></li>
                        <li onClick={scrollToTop}><i className="fa-brands fa-twitter"></i></li>
                        <li onClick={scrollToTop}><i className="fa-brands fa-linkedin"></i></li>
                        <li onClick={scrollToTop}><i className="fa-brands fa-behance"></i></li>
                    </ul>

                </div>



            </footer>
        </div>
    )
}


