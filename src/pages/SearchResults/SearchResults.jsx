import React from 'react';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import useGifs from '../../hooks/useGifs';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { gifs, loading } = useGifs({ keyword });

  return <>{loading ? 'Cargando' : <ListOfGifs gifs={gifs} />}</>;
};

export default SearchResults;
