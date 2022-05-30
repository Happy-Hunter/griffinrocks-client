import React, { Component } from 'react';
import BandPhotosGallery from './BandPhotosGallery';
import Header from './Header'

class BandPhotos extends Component {
    render() {
        return(
            <div>
                <Header />
                <h1>Band photos by Kate Griffin</h1>
                <BandPhotosGallery />
            </div>
        );
    }
}

export default BandPhotos; 
