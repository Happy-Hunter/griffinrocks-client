import React from 'react';
import { useParams } from 'react-router-dom';
import bandPhotos from './dbBandPhotos';
import Header from './Header';


const BandIndividualPhoto = (props) => {
  const params = useParams()
  const id = Number(params.id.split('-')[0]);

    return(
        <div>
        <Header />
         <div className="pics">
          <img src={ bandPhotos[id].image } style={{ width: '50%', alignSelf: 'center' }} />
            <p className="details">{ bandPhotos[id].musician } / { bandPhotos[id].band }</p>
          </div>
        </div>
    )
}

export default BandIndividualPhoto

