// import React from 'react'
// import './WomenIG.css'
import ImageGallery from './ImageGallery'
import women1 from './images/women-01.jpg'
import women2 from './images/women-02.jpg'
import women3 from './images/women-03.jpg'


const WomenIG = () => {

    const WomenGallerydata = [
        { img: women1, price: '3200$', description: 'landa is topnotch' },
        { img: women2, price: '2200$', description: 'landa is topnotch' },
        { img: women3, price: '1200$', description: 'landa is topnotch' }
    ]

    return (

        <div>

            <ImageGallery Gallery={WomenGallerydata} />

        </div>
    )
}

export default WomenIG
