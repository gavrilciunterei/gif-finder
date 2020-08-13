import React from 'react';
import './App.css';
import { Link, Route } from 'wouter';
import logo from './logo.png';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import SearchResults from './pages/SearchResults/SearchResults';

const GifExpertApp = () => {
  return (
    <div className="App">
      <section className="App-Content">
        <Link to="/">
          <img className="App-logo" alt="GifApp" src={logo} />
        </Link>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  );
};

export default GifExpertApp;
