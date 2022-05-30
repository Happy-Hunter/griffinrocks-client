import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import '../css/App.css';

import LiveMusic from './LiveMusic';
import BandPhotos from './BandPhotos';
import LiveIndividualPhoto from './LiveIndividualPhoto';
import BandIndividualPhoto from './BandIndividualPhoto';

import Header from './Header'
import FeatureGallery from './FeatureGallery';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
      <Header />
      <h1>An archive of music photography by Melbourne photographer Kate Griffin</h1>
      <FeatureGallery />
      </div>
    )
  };

}

export default function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/live-music" element={<LiveMusic />}/>
          <Route path="/live-music/:id" element={<LiveIndividualPhoto />}/>

          <Route path="/band-photos" element={<BandPhotos />}/>
          <Route path="/band-photos/:id" element={<BandIndividualPhoto />}/>

         </Routes>
      </div>
    </Router>
  );
}