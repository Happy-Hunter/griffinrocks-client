import React from 'react';
import { useParams } from 'react-router-dom';
import livePhotos from './LiveMusicDb';
import Header from './Header';


const LiveIndividualPhoto = (props) => {
  const params = useParams()
  const id = Number(params.id.split('-')[0]);
    console.log(livePhotos);

    return(
        <div>
        <Header />
         <div className="pics"> 
          <img src={ livePhotos[id].image } style={{ width: '75%' }} />
            <p className="details">{ livePhotos[id].musician } / { livePhotos[id].band }</p>
          </div>
        </div>
    )
}

export default LiveIndividualPhoto

