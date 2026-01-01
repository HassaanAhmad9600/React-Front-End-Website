
// import React from 'react';
// import Slider from 'react-slick';
// import men1 from './images/men1.jpg'
// import men2 from './images/men2.jpg'
// import men3 from './images/men3.jpg'

// // Import slick-carousel CSS files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import "./ImageSlider.css"


// const NextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: 'block',
//                 background: '#ccc',
//                 borderRadius: '50%',
//                 right: '-30px',
//                 zIndex: 1,
//                 backgroundColor: 'black'

//             }}
//             onClick={onClick}
//         />
//     );
// };

// const PrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: 'block',
//                 background: '#ccc',
//                 borderRadius: '50%',
//                 left: '-30px',
//                 zIndex: 1,
//                 backgroundColor: 'black'
//             }}
//             onClick={onClick}
//         />
//     );
// };



// const ImageSlider = () => {
//     // Slider settings
//     const settings = {
//         // dots: true,               // Show navigation dots
//         infinite: true,           // Enable infinite scrolling
//         speed: 500,               // Transition speed in ms
//         slidesToShow: 3,          // Show 3 images at once
//         slidesToScroll: 1,        // Scroll one image at a time
//         nextArrow: <NextArrow />, // Optional custom arrow
//         prevArrow: <PrevArrow />, // Optional custom arrow
//         // You can adjust additional settings like autoplay, easing, etc.

//         responsive: [
//             {
//                 breakpoint: 768, // For screens smaller than 768px
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],


//     };

//     return (
//         <div style={{ margin: '0 auto', width: '85%' }}>

//             <div className="ImageSlider">


//                 <h1>MEN's SECTION</h1>
//                 <p> <i>Every bandar is not like you , so be you not us </i></p>


//                 <Slider {...settings}>
//                     <div className="slide-item">
//                         <img
//                             src={men1}
//                             alt="Image 1"
//                             style={{ width: '100%' }}
//                         />

//                         <div className="Content">
//                             <h2>Heavy Swag</h2>
//                             <p>120$</p>

//                         </div>


//                     </div>
//                     <div className="slide-item">
//                         <img
//                             src={men2}
//                             alt="Image 2"
//                             style={{ width: '100%' }}
//                         />

//                         <div className="Content">
//                             <h2>Chill</h2>
//                             <p>98$</p>
//                         </div>

//                     </div>
//                     <div className="slide-item">
//                         <img
//                             src={men3}
//                             alt="Image 3"
//                             style={{ width: '100%' }}
//                         />

//                         <div className="Content">
//                             <h2>Thand</h2>
//                             <p>56$</p>
//                         </div>

//                     </div>
//                     <div className="slide-item">
//                         <img
//                             src={men2}
//                             alt="Image 4"
//                             style={{ width: '100%' }}
//                         />

//                         <div className="Content">
//                             <h2>Nalaiq</h2>
//                             <p>1100$</p>
//                         </div>

//                     </div>
//                     <div className="slide-item">
//                         <img
//                             src={men1}
//                             alt="Image 5"
//                             style={{ width: '100%' }}
//                         />

//                         <div className="Content">
//                             <h2>Gadha</h2>
//                             <p>230$</p>
//                         </div>

//                     </div>

//                 </Slider>


//             </div>
//         </div>
//     );
// };

// export default ImageSlider;















// import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImageSlider.module.css';

import ProductHoverCard from './ProductHoverCard';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                width: '45px',
                height: '45px',
                border: '0.5px solid black',
                backgroundColor: 'transparent',
                color: 'black',
                fontSize: '28px',
                right: '-65px',
                cursor: 'pointer',
            }}
        >
            &#x3E;
        </div>
    );
};


const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                width: '45px',
                height: '45px',
                border: '0.5px solid black',
                backgroundColor: 'transparent',
                color: 'black',
                fontSize: '28px',
                left: '-65px',
                cursor: 'pointer',
            }}
        >
            &#x3C;
        </div>
    );
};



const ImageSlider = ({ heading, subheading, products, showArrows = false }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: showArrows ? <NextArrow /> : null,
        prevArrow: showArrows ? <PrevArrow /> : null,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],

    };

    return (


        <div className={styles.sliderWrapper}>

            <div className={`${styles.ImageSlider} ${showArrows ? styles.showArrows : ''}`}>

                {heading && <h2>{heading}</h2>}
                {subheading && <p>{subheading}</p>}

                <Slider {...settings}>

                    {products.map((product, index) => (

                        <ProductHoverCard key={index} bandar={product} />

                    ))}

                </Slider>

            </div>
        </div>
    );
};

export default ImageSlider;
