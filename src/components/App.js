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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
        Home
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
          <Route path="/band-photos" element={<BandPhotos />}/>
         </Routes>
      </div>
    </Router>
  );
}

