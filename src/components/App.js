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
import IndividualPhoto from './IndividualPhoto';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
      </div>
    )
  };

}

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/live-music">Live Music</Link>
        <Link to="/band-photos">Band Photos</Link>

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/live-music" element={<LiveMusic />}/>
          <Route path="/live-music/:id" element={<IndividualPhoto />}/>

          <Route path="/band-photos" element={<BandPhotos />}/>
          <Route path="/band-photos/:id" element={<IndividualPhoto />}/>

         </Routes>
      </div>
    </Router>
  );
}