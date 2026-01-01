import React from 'react'
// No CSS file exists for Men
import ImageSlider from './ImageSlider'
import men1 from './images/men1.jpg'
import men2 from './images/men2.jpg'
import men3 from './images/men3.jpg'

const menProducts = [
    { img: men1, alt: 'Men Product 1', price: '$29.99', description: 'Stylish and comfortable.' },
    { img: men2, alt: 'Men Product 2', price: '$39.99', description: 'Modern design with quality.' },
    { img: men3, alt: 'Men Product 3', price: '$49.99', description: 'Classic style reimagined.' },

];


const Men = React.forwardRef((_, ref) => {

    return (

        <div ref={ref}>

            <ImageSlider
                heading="Men's Collection"
                subheading="Discover our exclusive men's range."
                products={menProducts}
            />

        </div>
    )
});

export default Men
