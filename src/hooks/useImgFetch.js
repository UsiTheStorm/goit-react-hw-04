import { useState, useEffect } from 'react';
import axios from 'axios';

export function useImgFetch(query, page, setPage) {
  const [imageData, setImageData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const ACCESS_KEY = 'QEtPir7f0-J1NOkKsmt4w7InA5rtCUJN1GzC5F_yPZ8';

  useEffect(() => {
    if (!query) return;

    async function getData() {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: { query, page, per_page: 10 },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        });

        if (page === 1) {
          setImageData(response.data.results);
        } else {
          setImageData((prev) => [...prev, ...response.data.results]);
        }

        setTotalPages(response.data.total_pages);
        setError('');
      } catch (er) {
        setError(er.message || 'Something went wrong');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [query, page]);

  return { imageData, error, loading, totalPages };
}
