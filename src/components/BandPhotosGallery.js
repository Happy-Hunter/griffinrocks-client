import React from 'react';
import '../css/gallery.css';
import { Link } from 'react-router-dom' 
import bandPhotos from './dbBandPhotos';

const BandPhotosGallery = () => {

    const friendlyId = (p) => {
        return `${ p.id }-${ p.band }`.replace(' ', '-').toLowerCase() 
    };

    return (
        <>
        
        <div className="gallery">
            {bandPhotos.map((photo, index) => {
                return(
                    
                    <div className="pics" key={ index }>
                    <Link to ={ `/band-photos/${friendlyId(photo)}` }>
                        <img src={photo.image} style={{ width: '100%'}} />
                        <p className="details">{ photo.band }</p>
                    </Link>
                    </div>

                )
            })}       
        </div>

        </>
    )

}

export default BandPhotosGallery;

