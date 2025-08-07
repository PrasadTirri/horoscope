import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { horoscopeData } from '../data/horoscopeData';
import ZodiacCard from '../components/ZodiacCard';
import EbookSection from '../components/EbookSection';
import UserDetailsForm, { UserDetails } from '../components/UserDetailsForm';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check for showForm query parameter on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('showForm') === 'true') {
      setShowModal(true);
    }
  }, [location.search]);

  const handleFormSubmit = async (userDetails: UserDetails) => {
    setIsLoading(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(false);
      // Navigate to personalized horoscope page with user details
      navigate('/personalized-horoscope', { state: { userDetails } });
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGetHoroscope = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="home-page">
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">
                Discover Your <span className="highlight">Cosmic Destiny</span>
              </h1>
              <p className="hero-subtitle">
                Unlock the secrets of the stars with personalized daily horoscopes, lucky numbers, 
                and cosmic insights for all 12 zodiac signs.
              </p>
              
              {/* Personal Reading CTA */}
              <div className="personal-reading-cta">
                <button 
                  onClick={handleGetHoroscope} 
                  className="cta-button"
                >
                  <span className="cta-icon">🔮</span>
                  <span>Get Your Future Horoscope</span>
                </button>
                <p className="cta-subtitle">
                  Enter your details for a personalized cosmic reading
                </p>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Zodiac Signs</span>
                </div>
                <div className="stat">
                  <span className="stat-number">365</span>
                  <span className="stat-label">Daily Insights</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Possibilities</span>
                </div>
              </div>
            </div>
          </section>

          {/* Zodiac Signs Grid */}
          <section className="zodiac-section">
            <h2 className="section-title">Choose Your Zodiac Sign</h2>
            <div className="zodiac-grid">
              {horoscopeData.map((zodiac) => (
                <ZodiacCard key={zodiac.sign} zodiac={zodiac} />
              ))}
            </div>
          </section>

          {/* eBook Section */}
          <EbookSection />
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">🔮 Get Your Personal Horoscope Reading</h3>
              <button className="modal-close" onClick={handleCloseModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-subtitle">
                Fill in your details below to receive your personalized cosmic insights
              </p>
              <UserDetailsForm onSubmit={handleFormSubmit} isLoading={isLoading} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage; 