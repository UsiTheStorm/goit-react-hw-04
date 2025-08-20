import React from 'react';

import ImageCard from './ImageCard';

function ImageGallery({ images }) {
  return (
    <div className="gallery-container">
      <ul className="gallery">
        {images.map(({ id, alt_description, urls: { small } }) => (
          <li key={id} className="gallery-item">
            <ImageCard img={small} alt={alt_description || 'Image'} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageGallery;
