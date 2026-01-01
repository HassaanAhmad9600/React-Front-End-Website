// import React from 'react'
import styles from './ImageGallery.module.css'
import ProductHoverCard from './ProductHoverCard'

const ImageGallery = ({ Gallery }) => {
    return (


        <div className={styles.imageGallery}>

            {Gallery.map((product, index) => (
                <ProductHoverCard key={index} bandar={product} />






                // <div key={index} className="mapping">

                //     <div className="img">
                //         <img src={value.img} alt="IMAGE1" />

                //         <div className="menIGinfo">
                //             <h3>{value.description}</h3>

                //             <ul className="stars">
                //                 <li><i class="fa fa-star"></i></li>
                //                 <li><i class="fa fa-star"></i></li>
                //                 <li><i class="fa fa-star"></i></li>
                //                 <li><i class="fa fa-star"></i></li>
                //                 <li><i class="fa fa-star"></i></li>
                //             </ul>


                //         </div>

                //         <span>{value.price}</span>

                //     </div>

                // </div>






            ))}


        </div>


    )
}

export default ImageGallery
