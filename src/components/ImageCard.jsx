function ImageCard({ img, alt }) {
  return (
    <div className="image">
      <img src={img} alt={alt} />
    </div>
  );
}

export default ImageCard;
