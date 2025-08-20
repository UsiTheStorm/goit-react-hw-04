import React from 'react';

function ImageCard({ img, alt }) {
  return (
    <div className="image">
      <img src={img} alt={alt} />
    </div>
  );
}

export default ImageCard;
