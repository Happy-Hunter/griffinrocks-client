import React from 'react';
import '../css/gallery.css';
import { Link } from 'react-router-dom' 
import livePhotos from './LiveMusicDb';

const LiveMusicGallery = () => {

    const friendlyId = (p) => {
        return `${ p.id }-${ p.band }`.replace(/ /g, '-').toLowerCase() 
    };

    return (
        <>
        
        <div className="gallery">
            {livePhotos.map((photo, index) => {
                return(
                    
                    <div className="pics" key={ index }>
                    <Link to ={ `/live-music/${friendlyId(photo)}` }>
                        <img src={ photo.image } style={{ width: '100%' }} alt={ photo.band } />
                        <p className="details">{ photo.band }</p>
                    </Link>
                    </div>

                )
            })}       
        </div>

        </>
    )

}

export default LiveMusicGallery;
