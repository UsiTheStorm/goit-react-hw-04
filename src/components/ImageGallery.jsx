import React from 'react';

import ImageCard from './ImageCard';

function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      {images.map(({ id, alt_description, urls: { small } }) => (
        <li key={id} className="gallery-item">
          <ImageCard img={small} alt={alt_description || 'Image'} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
