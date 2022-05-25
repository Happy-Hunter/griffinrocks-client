import React from 'react';
import '../css/gallery.css';

import photo1 from '../images/taylor-hawkins-7137-2.jpg';
import photo2 from '../images/D3J_6794.jpg';
import photo3 from '../images/james-mercer-the-shins.jpg';
import photo4 from '../images/kendrick-lamar-kate-griffin.jpg';
import photo5 from '../images/lorde-melbourne-festival-hall.JPG';
import photo6 from '../images/missy-higgins-2007-the-palais.JPG';
import photo7 from '../images/kings-of-leon-2008-rod-laver-arena.jpg';
import photo8 from '../images/ben-hazlewood-paint-me-black-128.jpg';

const Gallery = () => {
    let photos =[
        {
            id: 1,
            image: photo1,
        },
        {
            id: 2,
            image: photo2,
        },
        {
            id: 3,
            image: photo3,
        },
        {
            id: 4,
            image: photo4,
        },
        {
            id: 5,
            image: photo5,
        },
        {
            id: 6,
            image: photo6,
        },
        {
            id: 7,
            image: photo7,
        },
        {
            id: 7,
            image: photo8,
        },
    ]

    return(
        <>

        <div className="gallery">
            {photos.map((photo, index) => {
                return(
                    <div className="pics" key={ index }>
                        <img src={ photo.image } style={{ width: '100%' }} />
                    </div>
                )
            })}
        </div>

        </>
    )
};

export default Gallery