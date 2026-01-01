// import React from 'react'
import styles from './AboutUs.module.css'
import aboutLeftImage from './images/aboutLeftImage.jpg'

const AboutUs = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }

    return (
        <div>
            <div className={styles.AboutUs}>
                <div className={styles.left}><img src={aboutLeftImage} alt="About Us Left Image" /></div>

                <div className={styles.right}>
                    <h1>About Us & Our Skills</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt quidem vero, laudantium quod molestiae!</p>
                    <br /><p className={styles.black}><i> labore veritatis eligendi nostrum explicabo quo., dolor sit amet consectetur adipisicing elit. Eligendi, suscipit.</i></p>
                    <br /><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus sed quos libero, sint asperiores.</p>


                    <div className={styles.list}>
                        <ul>
                            <li onClick={scrollToTop}><i className=" fa-brands fa-facebook"></i></li>
                            <li onClick={scrollToTop}><i className=" fa-brands fa-twitter"></i></li>
                            <li onClick={scrollToTop}><i className=" fa-brands fa-linkedin"></i></li>
                            <li onClick={scrollToTop}><i className=" fa-brands fa-behance"></i></li>
                        </ul>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default AboutUs
