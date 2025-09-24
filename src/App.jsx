import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';

const App = () => {
  return(
    <div className="app">
          <Header/>
          <Products/>
    </div>
  )
}

export default App;