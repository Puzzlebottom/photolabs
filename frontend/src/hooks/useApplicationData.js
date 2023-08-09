import { useState } from "react";
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const useApplicationData = () => {
  const [favourites, setFavourites] = useState({});
  const [selected, setSelected] = useState(null);

  const state = { favourites, selected, photos, topics };

  const toggleFavourite = (id) => {
    const currentFavourites = { ...favourites };
    if (currentFavourites[id]) {
      delete currentFavourites[id];
    } else {
      currentFavourites[id] = true;
    }
    setFavourites(currentFavourites);
  };

  const selectPhoto = (id) => setSelected(photos.find((photo) => photo.id === id));
  const closeModal = () => setSelected(null);

  return {
    state,
    toggleFavourite,
    selectPhoto,
    closeModal
  };
};

export default useApplicationData;

