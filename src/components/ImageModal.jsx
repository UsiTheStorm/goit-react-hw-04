function ImageModal({ image }) {
  if (!image) return null;
  return <img src={image.url} alt={image.alt} />;
}

export default ImageModal;
