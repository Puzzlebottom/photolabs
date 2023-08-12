import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

const App = () => {
  const {
    state: { photos, topics, selectedPhoto, selectedTopic, favourites },
    closeModal,
    selectPhoto,
    selectTopic,
    toggleFavourite,
    showFavourites
  } = useApplicationData();

  const isSelected = Object.keys(selectedPhoto).length > 0;

  return (
    <div className="App">
      <HomeRoute {...{ photos, topics, favourites, selectPhoto, selectTopic, selectedTopic, toggleFavourite, showFavourites }} />
      {isSelected && <PhotoDetailsModal {...{ selectedPhoto, favourites, selectPhoto, closeModal, toggleFavourite }} />}
    </div>
  );
};

export default App;
