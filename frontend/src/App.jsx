import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

const App = () => {
  const {
    state: { photo_data, visible_photo_ids, topics, selectedPhoto, selectedTopic, favourites },
    closeModal,
    selectPhoto,
    selectTopic,
    toggleFavourite,
    showFavourites
  } = useApplicationData(); // custom hook keeps things neat and tidy

  // determines whether the modal is shown or not
  const isSelected = Object.keys(selectedPhoto).length > 0;

  // Nothing gets consumed here, these props are just passing through
  // The bucket brigade looks a little cleaner when we combine React's spread assignment for props with some object property shorthand.

  return (
    <div className="App">
      <HomeRoute {...{ photo_data, visible_photo_ids, topics, favourites, selectPhoto, selectTopic, selectedTopic, toggleFavourite, showFavourites }} />
      {isSelected && <PhotoDetailsModal {...{ selectedPhoto, favourites, selectPhoto, closeModal, toggleFavourite }} />}
    </div>
  );
};

export default App;
