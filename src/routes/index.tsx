import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
