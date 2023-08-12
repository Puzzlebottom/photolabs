import React, { useState, useRef, useEffect } from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, favourites, selectPhoto, closeModal, toggleFavourite }) => {
  const { id, location, urls, user, similar_photos } = selectedPhoto;
  const photos = Object.values(similar_photos);

  const [showSimilar, setShowSimilar] = useState(false);
  const modalRef = useRef(null);

  const scrollTo = (position) => {
    const scrollingElement = modalRef.current;
    if (position === 'top') {
      scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (position === 'similar') {
      const target = scrollingElement.querySelector('button#similar-photos');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSimilar = () => setShowSimilar(!showSimilar);

  useEffect(() => {
    if (showSimilar) {
      scrollTo('similar');
    }
    if (!showSimilar) {
      scrollTo('top');
    }
  }, [showSimilar]);

  return (
    <div ref={modalRef} className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__selection">
        <PhotoFavButton {...{ id, favourites, toggleFavourite }} />
        <img src={urls.regular} className="photo-details-modal__image" />
      </div>
      <div className="photo-details-modal__photographer-details">
        <img src={user.profile} className="photo-details-modal__photographer-profile" />
        <div className="photo-details-modal__photographer-info">
          <div >{user.name}</div>
          <div className="photo-details-modal__photographer-location">{`${location.city}, ${location.country}`}</div>
        </div>
      </div>
      <button className="photo-details-modal__show-similar-button" id="similar-photos" onClick={toggleSimilar}>SIMILAR PHOTOS</button>
      {showSimilar && <PhotoList {...{ photos, favourites, selectPhoto, toggleFavourite, scrollTo }} />}
    </div>
  );
};

export default PhotoDetailsModal;
