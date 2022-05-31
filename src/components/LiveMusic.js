import React, { Component } from 'react';
import LiveMusicGallery from './LiveMusicGallery';
import Header from './Header'
import Footer from './Footer';

class LiveMusic extends Component {
    render() {
        return(
            <div>
                <Header />
                <h1>Live music photos by Kate Griffin</h1>
                <LiveMusicGallery />
                <Footer />   
            </div>
        )
    }
}

export default LiveMusic;
