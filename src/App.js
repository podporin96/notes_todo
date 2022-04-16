import React from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Bar from './components/Bar/Bar';

const App=()=> {
  return (
    <div className="App">
      <Header />
      <Bar />
    </div>
  );
}

export default App;
