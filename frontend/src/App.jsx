import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { photos, topics, selected, favourites },
    closeModal,
    selectPhoto,
    toggleFavourite
  } = useApplicationData();

  const isSelected = Object.keys(selected).length > 0;

  return (
    <div className="App">
      <HomeRoute {...{ photos, topics, favourites, selectPhoto, toggleFavourite }} />
      {isSelected && <PhotoDetailsModal {...{ selected, favourites, selectPhoto, closeModal, toggleFavourite }} />}
    </div>
  );
};

export default App;
