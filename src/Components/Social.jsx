// import React from 'react'
import styles from './Social.module.css'

const Social = () => {

    return (

        <div>

            <div className={styles.Social}>

                <div className={styles.headpara}>
                    <h2>Social Media</h2>
                    <p><i>Make Connections in Our Social Media Tycon</i></p>
                </div>


                <div className={styles.socialGallery}>

                    <div className={styles.pics}>

                        <div className={styles.overlayContent}>
                            <span>Fashion</span>
                            <i className=" fa-brands fa fa-instagram"></i>
                        </div>

                    </div>


                    <div className={styles.pics}>

                        <div className={styles.overlayContent}>
                            <span>New</span>
                            <i className=" fa-brands fa fa-instagram"></i>
                        </div>

                    </div>


                    <div className={styles.pics}>

                        <div className={styles.overlayContent}>
                            <span>Brand</span>
                            <i className=" fa-brands fa fa-instagram"></i>
                        </div>

                    </div>


                    <div className={styles.pics}>

                        <div className={styles.overlayContent}>
                            <span>Make Up</span>
                            <i className=" fa-brands fa fa-instagram"></i>
                        </div>

                    </div>


                    <div className={styles.pics}>

                        <div className={styles.overlayContent}>
                            <span>Leather</span>
                            <i className=" fa-brands fa fa-instagram"></i>
                        </div>

                    </div>


                    <div className={styles.pics}>

                        <div className={styles.overlayContent}>
                            <span>Bag</span>
                            <i className=" fa-brands fa fa-instagram"></i>
                        </div>

                    </div>


                </div>



            </div>

        </div>
    )
}

export default Social
