import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/about_us.jsx';
import Team from'./pages/team.jsx'; // Import the CSS for About Us page
import HomePage from './HomePage.jsx';
import Wintercamp from './pages/wintercamp.jsx'; // Import the CSS for Winter Camp page
import './index.css'; // Import your global styles
import App from './App.jsx'
import './global.css'; // Import global styles


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Nested routes rendered inside <Outlet /> in App.jsx */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="team" element={<Team />} />
          <Route path="winter" element={<Wintercamp />} />
          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)