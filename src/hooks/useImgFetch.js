import { useState, useEffect } from 'react';
import axios from 'axios';

export function useImgFetch(query) {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const ACCESS_KEY = 'QEtPir7f0-J1NOkKsmt4w7InA5rtCUJN1GzC5F_yPZ8';

  useEffect(() => {
    if (!query) return;

    async function getData() {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: { query },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        });

        setImageData(response.data.results);
        setError('');
      } catch (er) {
        setError(er.message || 'Something went wrong');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [query]);

  return { imageData, error, loading };
}
