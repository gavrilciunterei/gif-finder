import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';

const useGifs = ({ keyword } = { keyword: null }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      const keywordToUse = keyword
        ? keyword
        : localStorage.getItem('lastKeyword');

      setLoading(true);
      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
    },
    [keyword]
  );
  return { gifs, loading };
};

export default useGifs;
