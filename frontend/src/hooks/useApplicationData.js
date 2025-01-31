import { useReducer, useEffect } from "react";
import axios from "axios";


// Actions object helps with debugging by throwing ref errors if dispatches contain typos
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_VISIBLE_PHOTO_IDS: 'SET_VISIBLE_PHOTO_IDS',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SEARCH_LOCATIONS: 'SEARCH_LOCATIONS',
  SEARCH_PHOTOGRAPHERS: 'SEARCH_PHOTOGRAPHERS'
};

const reducers = {
  /**
   * Adds a photo id to the favourites object
   */
  FAV_PHOTO_ADDED(state, action) {
    const favourites = { ...state.favourites };
    favourites[action.value] = true;
    return { ...state, favourites };
  },

  /**
   * Removes a photo id from the favourites object
   */
  FAV_PHOTO_REMOVED(state, action) {
    const favourites = { ...state.favourites };
    delete favourites[action.value];
    return { ...state, favourites };
  },
  /**
   * Adds a photo object as the current selection when passed a valid id.
   * When passed a falsey value current selection becomes an empty object
   */

  SELECT_PHOTO(state, action) {
    const selectedPhoto = action.value ? state.photo_data.find(photo => photo.id === action.value) : {};
    return { ...state, selectedPhoto };
  },

  /**
   * Sets a topic id as the selected topic (indicating a selection) or an empty string (indication no selection) 
   */
  SELECT_TOPIC(state, action) {
    const selectedTopic = action.value ? action.value : '';
    return { ...state, selectedTopic };
  },

  /**
   * Populates app with data for all photos
   */
  SET_PHOTO_DATA(state, action) {
    const photo_data = [...action.value];
    return { ...state, photo_data };
  },

  /**
   * Takes an array of photo ids and converts its elements into object keys for faster lookups
   */
  SET_VISIBLE_PHOTO_IDS(state, action) {
    const visible_photo_ids = {};
    action.value.map(photoId => visible_photo_ids[photoId] = true);
    return { ...state, visible_photo_ids };
  },

  /**
   *  Populates app with data for all topics
   */
  SET_TOPIC_DATA(state, action) {
    const topics = [...action.value];
    return { ...state, topics };
  },

  /**
   *  Searches the full collection of photos for photographer names that include
   *  the provided search string.
   */
  SEARCH_PHOTOGRAPHERS(state, action) {
    const searchTerm = action.value.toLowerCase();
    const visible_photo_ids = {};
    state.photo_data.map((photo) => {
      const photographer = photo.user.name.toLowerCase();
      if (photographer.includes(searchTerm)) {
        visible_photo_ids[photo.id] = true;
      }
    });
    return { ...state, visible_photo_ids };
  },

  /**
   * Seaches the full collection of photos for city OR country names
   * that include the provided search string.
   */
  SEARCH_LOCATIONS(state, action) {
    const searchTerm = action.value.toLowerCase();
    const visible_photo_ids = {};
    state.photo_data.map((photo) => {
      const { city, country } = photo.location;
      if (city.toLowerCase().includes(searchTerm) || country.toLowerCase().includes(searchTerm)) {
        visible_photo_ids[photo.id] = true;
      }
    });
    return { ...state, visible_photo_ids };
  }
};


/**
 * Generalized reducer function that consumes reducers object for specific methods
 */
const reducer = (state, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};


/**
 * This hook is responsible for most of the app state. Particulars of the 
 * PhotoDetailsModal (visible, scroll behaviour) live in a separate hook.
 */
const useApplicationData = () => {

  const initialState = { favourites: {}, selectedPhoto: {}, selectedTopic: '', visible_photo_ids: {}, photo_data: [], topics: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { FAV_PHOTO_ADDED, FAV_PHOTO_REMOVED, SELECT_PHOTO, SELECT_TOPIC, SET_PHOTO_DATA, SET_VISIBLE_PHOTO_IDS, SET_TOPIC_DATA, SEARCH_LOCATIONS, SEARCH_PHOTOGRAPHERS } = ACTIONS;

  useEffect(() => {
    const photosPromise = axios.get('/api/photos');
    const topicsPromise = axios.get('/api/topics');

    Promise.all([photosPromise, topicsPromise])
      .then((res) => {
        const [photos, topics] = res;
        dispatch({ type: SET_PHOTO_DATA, value: photos.data });  // populates the global pool of photos
        dispatch({ type: SET_VISIBLE_PHOTO_IDS, value: photos.data.map(photo => photo.id) });  // set all photos => visible
        dispatch({ type: SET_TOPIC_DATA, value: topics.data });  // set topics 
      });
  }, []); // only runs once on App component render


  /**
   * I'm using an object to store favourites rather than an array because each photoListItem 
   * needs to check its photoId against a matching favourites value. An object makes this less 
   * expensive than iterating through an array for every displayed photoListItem. This function 
   * is consumed as an onClick by the PhotoFavButton components on each photoListItem 
   */
  const toggleFavourite = (id) => {
    if (state.favourites[id]) {
      dispatch({ type: FAV_PHOTO_REMOVED, value: id });
    } else {
      dispatch({ type: FAV_PHOTO_ADDED, value: id });
    }
  };

  /**
   * Filters * visible * photos based on their ids appearing in the favourites object
   * Consumed as an onClick by the FavBdage on the TopNavigationBar
   */
  const showFavourites = () => {
    const { visible_photo_ids, favourites } = state;
    const visibleIds = Object.keys(visible_photo_ids);
    const favouriteIds = Object.keys(favourites);
    const visibleFavourites = visibleIds.filter((id) => favouriteIds.includes(id));
    if (visibleFavourites.length) dispatch({ type: SET_VISIBLE_PHOTO_IDS, value: visibleFavourites });
  };

  /**
   * I'm not a huge fan of a separate API call for topical photos like this, I'd have built 
   * my query to return each photo with an array of related topic ids and then filter the 
   * photos clientside. C'est la vie. Consumed as an onClick by each TopicListItem
   */
  const selectTopic = (id) => {
    const url = id ? `/api/topics/photos/${id}` : '/api/photos';
    axios.get(url)
      .then((res) => {
        dispatch({ type: SET_VISIBLE_PHOTO_IDS, value: res.data.map(photo => photo.id) });
        dispatch({ type: SELECT_TOPIC, value: id });
      });
  };

  /**
   * The PhotoDetailsModal is visible while the selectedPhoto value is not falsey. 
   * Consumed as an onClick by each PhotoListItem
   */
  const selectPhoto = (id) => dispatch({ type: SELECT_PHOTO, value: id });

  /**
   * The PhotoDetailsModal isn't visible while the selectedPhoto state is falsey. 
   * I could have implemented this within selectPhoto(), but figured that a more explicit 
   * function would be easier to parse; attaching a selectPhoto function to a 
   * closeModal button might not have been clear.
   */
  const closeModal = () => dispatch({ type: SELECT_PHOTO, value: null });

  /**
   * Because of its involvement with filtering and assigning the app data,
   * this function (which actually dispatches the search actions) lives here.  
   * The state objects that are involved in the workings of the search bar live in a separate hook.  
   */
  const runSearch = (searchTerm, category) => {
    if (category === 'location') {
      dispatch({ type: SEARCH_LOCATIONS, value: searchTerm });
    }
    if (category === 'photographer') {
      dispatch({ type: SEARCH_PHOTOGRAPHERS, value: searchTerm });
    }
  };

  return {
    state,
    toggleFavourite,
    showFavourites,
    selectPhoto,
    selectTopic,
    closeModal,
    runSearch
  };
};

export default useApplicationData;

