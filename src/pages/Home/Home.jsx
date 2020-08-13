import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';

import useGifs from '../../hooks/useGifs';

const POPULAR_GIFS = ['Matrix', 'Programming', 'Valorant', 'Spain'];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, push] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
      </form>
      <ListOfGifs gifs={gifs} />

      <ul>
        {POPULAR_GIFS.map((popularGifs) => (
          <li key={popularGifs}>
            <Link to={`/search/${popularGifs}`}>Gifs de {popularGifs}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
