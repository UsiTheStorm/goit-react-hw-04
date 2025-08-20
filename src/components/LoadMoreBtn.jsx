import React from 'react';

function LoadMoreBtn({ onBtnClick }) {
  return (
    <div className="load-more-container">
      <button className="load-more-btn" onClick={onBtnClick}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
