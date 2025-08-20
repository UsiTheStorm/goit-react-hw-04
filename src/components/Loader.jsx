import { RingLoader } from 'react-spinners';

function Loader() {
  return (
    <div className="loader-container">
      <RingLoader color="#3699d7ff" size={80} />{' '}
    </div>
  );
}

export default Loader;
