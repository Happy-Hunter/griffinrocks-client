import React from 'react';
import { useParams } from 'react-router-dom';
import bandPhotos from './dbBandPhotos';
import Header from './Header';
import Footer from './Footer';


const BandIndividualPhoto = (props) => {
  const params = useParams()
  const id = Number(params.id.split('-')[0]);

    return(
        <div>
          <Header />
            <div className="largeImage">
              <h1 className="details">{ bandPhotos[id].band }</h1>
              <h3> { bandPhotos[id].musician } </h3>
              <img src={ bandPhotos[id].image } style={{ width: '100%', padding: 35}} />
              <Footer />
            </div>
        </div>
    )
}

export default BandIndividualPhoto

