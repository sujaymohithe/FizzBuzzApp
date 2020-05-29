import React from 'react';
import './App.css';
import FizzBuzzContainer from './components/FizzBuzzContainer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <FizzBuzzContainer />
    </div>
  );
}

export default App;
