import { useState } from 'react';
import './App.css';

import Modal from 'react-modal';

import LoadMoreBtn from './components/LoadMoreBtn';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import ImageModal from './components/ImageModal';

import { useImgFetch } from './hooks/useImgFetch';

Modal.setAppElement('#root');

function App() {
  const [query, setQuery] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const { imageData, error, loading } = useImgFetch('cat');

  // console.log(query);

  return (
    <>
      <SearchBar onSetQuery={setQuery} />
      {error && <ErrorMessage error={error} />}
      <ImageGallery images={imageData} onImageClick={setSelectedImg} onOpen={setIsOpen} />
      {loading && <Loader />}

      {!error && !loading && <LoadMoreBtn />}

      {selectedImg && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          className="modal"
          overlayClassName="overlay"
        >
          <ImageModal image={selectedImg} onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default App;
