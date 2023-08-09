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

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favourites={favourites} selectPhoto={selectPhoto} toggleFavourite={toggleFavourite} />
      {selected && <PhotoDetailsModal selected={selected} favourites={favourites} selectPhoto={selectPhoto} closeModal={closeModal} toggleFavourite={toggleFavourite} />}
    </div>
  );
};

export default App;
