import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { generate as id } from 'shortid';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: Helvetica, Arial , sans-serif
  }

  body{
      padding: 60px;
      background-color: #000;
      color: #fff;
  }
`;

const GifExpertApp = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default GifExpertApp;
