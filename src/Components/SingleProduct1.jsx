import { useState } from 'react'
import styles from './SingleProduct1.module.css'
import singleProduct1 from './images/singleProduct1.jpg'

const SingleProduct1 = () => {

    const [count, setCount] = useState(0);

    return (

        <div>

            <div className={styles.SProduct1}>

                <div className={styles.left}>
                    <img src={singleProduct1} alt="SingleProduct" />
                </div>

                <div className={styles.right}>

                    <div className={styles.starsContainer}>

                        <h2> New Green Jacket</h2>
                        <ul className={styles.stars}>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>

                    </div>

                    <span>$75.00</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
                    <p className={styles.black}><i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</i></p>


                    <div className={styles.state}>
                        <h3>No. of Orders</h3>

                        <div className={styles.counter}>
                            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
                            <span>{count}</span>
                            <button onClick={() => setCount(count + 1)}>+</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default SingleProduct1
