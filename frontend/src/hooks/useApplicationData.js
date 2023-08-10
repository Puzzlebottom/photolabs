import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
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
    const selectedPhoto = action.value ? state.photos.find(photo => photo.id === action.value) : {};
    return { ...state, selectedPhoto };
  },
  SELECT_TOPIC(state, action) {
    const selectedTopic = action.value ? action.value : '';
    return { ...state, selectedTopic };
  },
  SET_PHOTO_DATA(state, action) {
    const photos = [...action.value];
    return { ...state, photos };
  },
  SET_TOPIC_DATA(state, action) {
    const topics = [...action.value];
    return { ...state, topics };
  }
};

const reducer = (state, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};

const useApplicationData = () => {

  const initialState = { favourites: {}, selectedPhoto: {}, selectedTopic: '', photos: [], topics: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { FAV_PHOTO_ADDED, FAV_PHOTO_REMOVED, SELECT_PHOTO, SELECT_TOPIC, SET_PHOTO_DATA, SET_TOPIC_DATA } = ACTIONS;

  useEffect(() => {
    const photosPromise = axios.get('/api/photos');
    const topicsPromise = axios.get('/api/topics');

    Promise.all([photosPromise, topicsPromise])
      .then((res) => {
        const [photos, topics] = res;
        dispatch({ type: SET_PHOTO_DATA, value: photos.data });
        dispatch({ type: SET_TOPIC_DATA, value: topics.data });
      });
  }, []);

  useEffect(() => {
    const topicId = state.selectedTopic;
    const url = topicId ? `/api/topics/photos/${topicId}` : '/api/photos';
    axios.get(url)
      .then((res) => {
        dispatch({ type: SET_PHOTO_DATA, value: res.data });
      });
  }, [state.selectedTopic]);

  const toggleFavourite = (id) => {
    if (state.favourites[id]) {
      dispatch({ type: FAV_PHOTO_REMOVED, value: id });
    } else {
      dispatch({ type: FAV_PHOTO_ADDED, value: id });
    }
  };

  const selectPhoto = (id) => dispatch({ type: SELECT_PHOTO, value: id });

  const selectTopic = (id) => dispatch({ type: SELECT_TOPIC, value: id });

  const closeModal = () => dispatch({ type: SELECT_PHOTO, value: null });

  return {
    state,
    toggleFavourite,
    selectPhoto,
    selectTopic,
    closeModal
  };
};

export default useApplicationData;

