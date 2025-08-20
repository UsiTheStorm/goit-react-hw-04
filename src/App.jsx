import { useState, useEffect } from 'react';
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
  const [page, setPage] = useState(1);

  const { imageData, error, loading, totalPages } = useImgFetch(query, page);

  function increasePage() {
    setPage((page) => page + 1);
  }

  useEffect(() => {
    setPage(1);
    setSelectedImg(null);
    setIsOpen(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [query]);

  return (
    <>
      <SearchBar onSetQuery={setQuery} />
      {error && <ErrorMessage error={error} />}
      <ImageGallery images={imageData} onImageClick={setSelectedImg} onOpen={setIsOpen} />
      {loading && <Loader />}

      {!error && !loading && page < totalPages && <LoadMoreBtn onBtnClick={increasePage} />}

      {/* Modal */}
      {selectedImg && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          className="modal"
          overlayClassName="overlay"
        >
          <ImageModal image={selectedImg || []} onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default App;
