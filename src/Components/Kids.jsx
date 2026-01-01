import React from 'react'
// No CSS file exists for Kids
import ImageSlider from './ImageSlider'
import kid1 from './images/kid1.jpg'
import kid2 from './images/kid2.jpg'
import kid3 from './images/kid3.jpg'



const kidProducts = [
    { img: kid1, alt: 'Kids Product 1', price: '$9.99', description: 'Stylish and comfortable.' },
    { img: kid2, alt: 'Kids Product 2', price: '$99.99', description: 'Modern design with quality.' },
    { img: kid3, alt: 'Kids Product 3', price: '$119.99', description: 'Classic style reimagined.' },

];


const Kids = React.forwardRef((_, ref) => {
    return (

        <div ref={ref}>

            <ImageSlider
                heading="Kid's Collection"
                subheading="Discover our exclusive Kids' range."
                products={kidProducts}
            />

        </div>
    )
});

export default Kids
