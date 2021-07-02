import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import ContactMe from './components/ContactMe'
function App() {
  return (
    <div className="App">
          <Header />
    <Body />
    <Body2 />
    <Body3 />
    <ContactMe />
    </div>
  );
}

export default App;
