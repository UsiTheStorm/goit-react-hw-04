import React from 'react';

import ImageCard from './ImageCard';

function ImageGallery({ images, onImageClick, onOpen }) {
  return (
    <div className="gallery-container">
      <ul className="gallery">
        {images.map(({ id, alt_description, urls: { small, regular } }) => (
          <li
            key={id}
            className="gallery-item"
            onClick={() => {
              onOpen(true);
              onImageClick({ url: regular, alt: alt_description || 'Image' });
            }}
          >
            <ImageCard img={small} alt={alt_description || 'Image'} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
