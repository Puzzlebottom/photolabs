import React, { useRef } from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, favourites, selectPhoto, closeModal, toggleFavourite }) => {
  const { id, location, urls, user, similar_photos } = selectedPhoto;
  const photos = Object.values(similar_photos);

  const modalRef = useRef(null);
  const scrollToTop = () => {
    modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={modalRef} className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__selection">
        <PhotoFavButton {...{ id, favourites, toggleFavourite }} />
        <img src={urls.regular} className="photo-details-modal__image" onClick={() => selectPhoto(id)} />
      </div>
      <div className="photo-details-modal__photographer-details">
        <img src={user.profile} className="photo-details-modal__photographer-profile" />
        <div className="photo-details-modal__photographer-info">
          <div >{user.name}</div>
          <div className="photo-details-modal__photographer-location">{`${location.city}, ${location.country}`}</div>
        </div>
      </div>
      <PhotoList {...{ photos, favourites, selectPhoto, toggleFavourite, scrollToTop }} />
    </div>
  );
};

export default PhotoDetailsModal;
