
import React from 'react';
import Header from "./components/Header";
import './App.css'
import DatingCards from './components/DatingCards';
import SwipeButton from './components/SwipeButton';

function App() {
  return (
    <div className="app">
      <Header />
      <DatingCards />
      <SwipeButton />
    </div>
  );
}

export default App;

//install axios