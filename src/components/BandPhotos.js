import React, { Component } from 'react';
import BandPhotosGallery from './BandPhotosGallery';
import Header from './Header'

class BandPhotos extends Component {
    render() {
        return(
            <div>
            <Header />
            <BandPhotosGallery />
            </div>
        );
    }
}

export default BandPhotos; 
