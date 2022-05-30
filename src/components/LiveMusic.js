import React, { Component } from 'react';
import LiveMusicGallery from './LiveMusicGallery';
import Header from './Header'

class LiveMusic extends Component {
    render() {
        return(
            <div>
            <Header />
            <LiveMusicGallery />   
            </div>
        )
    }
}

export default LiveMusic;
