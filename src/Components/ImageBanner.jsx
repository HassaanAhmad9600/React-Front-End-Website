// import React from 'react'
import styles from './ImageBanner.module.css'

const ImageBanner = ({ ImageURL, ImageHeading, ImageSpan }) => {

    return (

        <div>

            <div className={styles.ImageBanner} style={{ backgroundImage: `url(${ImageURL})` }}>

                <div className={styles.ImageContent}>
                    <h1>{ImageHeading}</h1>
                    <span><i>{ImageSpan}</i></span>
                </div>

            </div>



        </div>
    )
}

export default ImageBanner
