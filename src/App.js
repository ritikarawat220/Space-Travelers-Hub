import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/head';
import Rockets from './Routes/rockets';
import Missions from './Routes/missions';
import Myprofile from './Routes/myprofile';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="categories" element={<Missions />} />
          <Route path="myprofile" element={<Myprofile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
