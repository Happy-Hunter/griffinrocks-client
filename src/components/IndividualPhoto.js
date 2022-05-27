import React from 'react';
import { useParams } from 'react-router-dom';


const IndividualPhoto = (props) => {
  const params = useParams()
  const id = params.id.split('-')[0].toString();
  console.log(id)
    return(
        <div>
         <div className="pics"> 
          <img src={ livePhotos[id].image } style={{ width: '100%' }} />
            <p className="details">{ livePhotos[id].musician } / { livePhotos[id].band }</p>
          </div>
        </div>
    )
}


export default IndividualPhoto
