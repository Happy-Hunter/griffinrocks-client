import React from 'react';
import '../css/gallery.css';
import { Link } from 'react-router-dom' 
import featurePhotos from './FeatureGalleryDb';

const FeaturePhotosGallery = () => {

    const friendlyId = (p) => {
        return `${ p.id }-${ p.band }`.replace(/ /g, '-').toLowerCase() 
    };

    return (
        <>
        
        <div className="gallery">
            {featurePhotos.map((photo, index) => {
                return(                
                    <div className="pics" key={ index }>
                    <Link to ={ `/live-music/${friendlyId(photo)}` }>
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

export default FeaturePhotosGallery;