import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import './GifApp.css';
import { Link, Route } from 'wouter';

const GifExpertApp = () => {
  return (
    <section className="App-Content">
      <Link to="/gif/panda">Panda</Link>
      <Link to="/gif/Programming">Programming</Link>
      <Route component={ListOfGifs} path="/gif/:keyword" />
    </section>
  );
};

export default GifExpertApp;
