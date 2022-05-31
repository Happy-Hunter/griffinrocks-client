import React from 'react';
import { useParams } from 'react-router-dom';
import livePhotos from './LiveMusicDb';
import Header from './Header';
import Footer from './Footer';


const LiveIndividualPhoto = (props) => {
  const params = useParams()
  const id = Number(params.id.split('-')[0]);

    return(
        <div>
          <Header />
          <div className="largeImage"> 
            <h1 className="details">{ livePhotos[id].musician } / { livePhotos[id].band } ({ livePhotos[id].year })</h1>
            <h3> { livePhotos[id].venue } </h3> 
            <img src={ livePhotos[id].image } style={{ width: '100%', padding: 35  }} />
            <Footer />
          </div>
        </div>
    )
}

export default LiveIndividualPhoto

