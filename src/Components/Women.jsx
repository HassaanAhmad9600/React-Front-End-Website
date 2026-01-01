import React from 'react'
// No CSS file exists for Women
import ImageSlider from './ImageSlider'
import women1 from './images/women-01.jpg'
import women2 from './images/women-02.jpg'
import women3 from './images/women-03.jpg'



const womenProducts = [
    { img: women1, alt: 'Women Product 1', price: '$49.99', description: 'Stylish and comfortable.' },
    { img: women2, alt: 'Women Product 2', price: '$59.99', description: 'Modern design with quality.' },
    { img: women3, alt: 'Women Product 3', price: '$69.99', description: 'Classic style reimagined.' },
];


const Women = React.forwardRef((_, ref) => {

    return (

        <div ref={ref}>

            <ImageSlider
                heading="Women's Collection"
                subheading="Discover our exclusive Women's range."
                products={womenProducts}

            />
        </div>
    )
});

export default Women
