import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
        <h1>asd</h1>
        <h1>asd</h1>
      </Routes>
    </div>
  );
}

export default App;