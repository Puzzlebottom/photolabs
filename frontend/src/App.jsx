import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { FavouritesContext } from 'contexts/FavouritesContext';

import photos from 'mocks/photos';
import topics from 'mocks/topics';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [selected, setSelected] = useState('');
  const selectPhoto = (id) => setSelected(photos.find((photo) => photo.id === id));
  const closeModal = () => setSelected('');


  const [favourites, setFavourites] = useState({});

  const toggleFavourite = (id) => {
    const currentFavourites = { ...favourites };
    if (currentFavourites[id]) {
      delete currentFavourites[id];
    } else {
      currentFavourites[id] = true;
    }
    setFavourites(currentFavourites);
  };

  const favouritesContext = { favourites, toggleFavourite };

  return (
    <div className="App">
      <FavouritesContext.Provider value={favouritesContext}>
        <HomeRoute photos={photos} topics={topics} selectPhoto={selectPhoto} />
        {selected && <PhotoDetailsModal selected={selected} selectPhoto={selectPhoto} closeModal={closeModal} />}
      </FavouritesContext.Provider>

    </div>
  );
};

export default App;
