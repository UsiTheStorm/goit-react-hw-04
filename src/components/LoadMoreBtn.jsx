function LoadMoreBtn({ onBtnClick, loading }) {
  return (
    <div className="load-more-container">
      <button className="load-more-btn" disabled={loading} onClick={onBtnClick}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
