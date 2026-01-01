// import React from 'react'
import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <div>


            <div className={styles.preloader}>
                <div className={styles.jumper}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>


        </div>
    )
}

export default Spinner
