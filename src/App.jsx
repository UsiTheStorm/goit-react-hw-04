import { useState } from 'react';
import './App.css';

import LoadMoreBtn from './components/LoadMoreBtn';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import ImageModal from './components/ImageModal';

function App() {
  return (
    <>
      <SearchBar />
      <ImageGallery />
    </>
  );
}

export default App;
