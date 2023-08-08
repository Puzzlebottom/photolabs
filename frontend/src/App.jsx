import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import photos from 'mocks/photos';
import topics from 'mocks/topics';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [selected, setSelected] = useState('');

  const selectPhoto = (id) => setSelected(photos.find((photo) => photo.id === id));

  const closeModal = () => setSelected('');

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} selectPhoto={selectPhoto} />
      {selected && <PhotoDetailsModal selected={selected} selectPhoto={selectPhoto} closeModal={closeModal} />}
    </div>
  );
};

export default App;
