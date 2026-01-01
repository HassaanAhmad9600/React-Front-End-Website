// import React from 'react'
// import './KidsIG.css'
import ImageGallery from './ImageGallery'
import kid1 from './images/kid1.jpg'
import kid2 from './images/kid2.jpg'
import kid3 from './images/kid3.jpg'

const KidsIG = () => {

    const KidsGallerydata = [
        { img: kid1, price: '3200$', description: 'landa is topnotch' },
        { img: kid2, price: '2200$', description: 'landa is topnotch' },
        { img: kid3, price: '1200$', description: 'landa is topnotch' }
    ]

    return (

        <div>
            <ImageGallery Gallery={KidsGallerydata} />
        </div>

    )
}

export default KidsIG
