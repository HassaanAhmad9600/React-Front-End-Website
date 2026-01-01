// import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ProductHoverCard.module.css'
import { useState } from 'react'

const ProductHoverCard = ({ bandar }) => {


    const [hoveringState, setHoveringState] = useState(false)
    const navigation = useNavigate()

    const goToPage = () => {
        navigation('/SingleProduct');
        window.scrollTo({ top: 0 });
    };


    return (

        <div>


            <div className={styles['slide-item']} >

                <div className={styles['image-wrapper']} onMouseEnter={() => setHoveringState(true)} onMouseLeave={() => setHoveringState(false)}>

                    <img
                        src={bandar.img}
                        alt={bandar.alt || `Product`}
                        // style={{ width: '100%' }}
                        className={styles['product-image']}
                    />



                    <div className={`${styles['icon-container']} ${hoveringState ? styles.show : ""}`}>
                        <div className={styles.icon} onClick={goToPage}><i className="fa fa-share"></i></div>
                        <div className={styles.icon} onClick={goToPage}><i className="fa fa-heart"></i></div>
                        <div className={styles.icon} onClick={goToPage}><i className="fa fa-shopping-cart"></i></div>
                    </div>


                </div>


                <div className={styles['product-info']}>

                    <div className={styles['stars-container']}>
                        <h3>{bandar.description}</h3>

                        <ul className={styles.stars}>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>

                    </div>

                    <p>{bandar.price}</p>

                </div>

            </div>

        </div >
    )
}

export default ProductHoverCard
