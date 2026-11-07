import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        {/* Reserved for future CMS & Admin integration:
            e.g. <Route path="/admin" element={<AdminDashboard />} />
            e.g. <Route path="/login" element={<LoginPage />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
