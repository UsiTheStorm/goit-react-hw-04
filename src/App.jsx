import { useState } from 'react';
import './App.css';

import LoadMoreBtn from './components/LoadMoreBtn';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import ImageModal from './components/ImageModal';

import { useImgFetch } from './hooks/useImgFetch';

function App() {
  const [query, setQuery] = useState('');

  const { imageData, error, loading } = useImgFetch('cat');

  console.log(query);

  return (
    <>
      <SearchBar onSetQuery={setQuery} />
      {error && <ErrorMessage error={error} />}
      <ImageGallery images={imageData} />
      {loading && <Loader />}

      {!error && !loading && <LoadMoreBtn />}
    </>
  );
}

export default App;
