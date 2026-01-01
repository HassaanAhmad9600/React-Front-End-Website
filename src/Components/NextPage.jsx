// import React from 'react'
import styles from './NextPage.module.css'

const NextPage = () => {


    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }


    return (
        <div>
            <div className={styles.nextpage}>
                <ul>
                    <li onClick={scrollToTop}>1</li>
                    <li onClick={scrollToTop}>2</li>
                    <li onClick={scrollToTop}>3</li>
                    <li onClick={scrollToTop}>4</li>
                    <li onClick={scrollToTop}>&gt;</li>
                </ul>
            </div>

        </div>
    )
}

export default NextPage
