import { useReducer } from "react";
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  // SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};

const reducers = {
  FAV_PHOTO_ADDED(state, action) {
    const favourites = { ...state.favourites };
    favourites[action.value] = true;
    return { ...state, favourites };
  },
  FAV_PHOTO_REMOVED(state, action) {
    const favourites = { ...state.favourites };
    delete favourites[action.value];
    return { ...state, favourites };
  },
  SELECT_PHOTO(state, action) {
    const selected = action.value ? state.photos.find(photo => photo.id === action.value) : null;
    return { ...state, selected };
  }
};

const reducer = (state, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, { favourites: {}, selected: null, photos, topics });

  const toggleFavourite = (id) => {
    if (state.favourites[id]) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, value: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: id });
    }
  };

  const selectPhoto = (id) => dispatch({ type: ACTIONS.SELECT_PHOTO, value: id });
  const closeModal = () => dispatch({ type: ACTIONS.SELECT_PHOTO, value: null });

  return {
    state,
    toggleFavourite,
    selectPhoto,
    closeModal
  };
};

export default useApplicationData;

