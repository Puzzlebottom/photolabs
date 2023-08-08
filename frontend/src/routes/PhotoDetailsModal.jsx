import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { selected: { id, location, urls, user }, selectPhoto, closeModal } = props;
  console.log('ID: ', id);
  console.log('LOCATION: ', location);
  console.log('URLS: ', urls);
  console.log('USER: ', user);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
