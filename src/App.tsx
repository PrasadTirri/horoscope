import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HoroscopePage from './pages/HoroscopePage';
import PersonalizedHoroscopePage from './pages/PersonalizedHoroscopePage';
import HoroscopeTablePage from './pages/HoroscopeTablePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/horoscope/:sign" element={<HoroscopePage />} />
          <Route path="/personalized-horoscope" element={<PersonalizedHoroscopePage />} />
          <Route path="/horoscope-table" element={<HoroscopeTablePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 