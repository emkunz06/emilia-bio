import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PortfolioPage from './PortfolioPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
