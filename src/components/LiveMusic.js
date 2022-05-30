import React, { Component } from 'react';
import LiveMusicGallery from './LiveMusicGallery';
import Header from './Header'

class LiveMusic extends Component {
    render() {
        return(
            <div>
                <Header />
                <h1>Live music photos by Kate Griffin</h1>
                <LiveMusicGallery />   
            </div>
        )
    }
}

export default LiveMusic;
