import React from 'react'
import styles from './Explore.module.css'
import { useNavigate } from 'react-router-dom';

const Explore = React.forwardRef((_, ref) => {

    const navigation = useNavigate()

    const goToPage = () => {
        navigation('/Products');
        window.scrollTo(0, 0);
    };




    return (

        <div ref={ref}>

            <div className={styles.Explore}>

                <div className={styles.Details}>
                    <h2 className={styles.heading}>Explore</h2>

                    <p>Lorem iam teneturaliquid quo quibusdam neque. Libero  odio assumenda, minima et dignissimos tenetur, at repudiandae porro vel aperiam excepturi neque, ad voluptate minus vero consequatur animi ducimus quae. Quam, libero?</p>
                    <br /><p className={styles.black}> <i>excepturi neque, ad voluptate minus vero consequatur animi ducimus quae. Quam, libero?</i></p>
                    <br /><p>Lorem ipsum de quasi pariatur voluptas voluptate optio, aliquid quo quibusdam neque. Libero laudantium incidunt odio assumenda, minima et dignissimos tenetur, at repudiandae porro vel aperiam excepturi neque, ad voluptate minus vero consequatur animi ducimus quae. Quam, libero?</p>
                    <br /><p>Lorem ipsum  illum adipisci illo quasol uptate optio, <span> hassan is here </span> quo quibusdam neque. Libero laudantium incidunt odio assumenda, minima et dignissimos tenetur, at repudiandae porro vel aperiam excepturi neque, ad voluptate minus vero consequatur animi ducimus quae. Quam, libero?</p>
                    <button onClick={goToPage}>Discover More</button>


                </div>

                <div className={styles.Demonstrate}>
                    <div className={styles.container}><h3>Leather Bags</h3></div>
                    <div className={styles.container}></div>
                    <div className={styles.container}></div>
                    <div className={styles.container}><h3>Premium Bags </h3></div>
                </div>



            </div>
        </div>
    )
});

export default Explore
