// import React from 'react'
// import './MenIG.css'
import ImageGallery from './ImageGallery'
import men1 from './images/men1.jpg'
import men2 from './images/men2.jpg'
import men3 from './images/men3.jpg'

const MenIG = () => {
    const MenGallerydata = [
        { img: men1, price: '3200$', description: 'landa is topnotch' },
        { img: men2, price: '2200$', description: 'landa is topnotch' },
        { img: men3, price: '1200$', description: 'landa is topnotch' }
    ]


    return (

        <div>
            <ImageGallery Gallery={MenGallerydata} />
        </div>

    )
}

export default MenIG
