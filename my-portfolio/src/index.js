import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* maybe add dividers in between each section for nav bars */}
    <Body />
    <Body2 />
    <Body3 />
  </React.StrictMode>,
  document.getElementById('root')
);

