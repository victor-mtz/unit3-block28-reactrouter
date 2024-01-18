import { Routes, Route } from 'react-router-dom';
import Blue from './Blue';
import Red from './Red';
import Pink from './Pink';
import Purple from './Purple';
import Home from './Home';

export default function Main() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />}></Route>
        <Route path="/red" element={<Red />}></Route>
        <Route path="/pink" element={<Pink />}></Route>
        <Route path="/purple" element={<Purple />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
