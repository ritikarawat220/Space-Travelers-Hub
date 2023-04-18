import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/head';
import Rockets from './Routes/rockets';
import Missions from './Routes/missions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="categories" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
