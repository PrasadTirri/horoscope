import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EbookSection.css';

const EbookSection: React.FC = () => {
  const navigate = useNavigate();

  const handleGetHoroscope = () => {
    // Navigate to home page with showForm parameter to trigger modal
    navigate('/?showForm=true');
  };

  return (
    <section id="ebook" className="ebook-section">
      <div className="container">
        <div className="ebook-content">
          <div className="ebook-info">
            <h2 className="ebook-title">
              <span className="highlight">2025 Horoscope</span> eBook
            </h2>
            <p className="ebook-description">
              Get your complete guide to 2025 with detailed monthly horoscopes, 
              planetary transits, and personalized insights for all zodiac signs. 
              This comprehensive eBook will be your cosmic companion throughout the year.
            </p>
            <div className="ebook-features">
              <div className="feature">
                <span className="feature-icon">📅</span>
                <span className="feature-text">Monthly Horoscopes</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⭐</span>
                <span className="feature-text">Planetary Transits</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🔮</span>
                <span className="feature-text">Personalized Insights</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📱</span>
                <span className="feature-text">Digital Format</span>
              </div>
            </div>
            <div className="ebook-price">
              <span className="price-amount">₹299</span>
              <span className="price-original">₹499</span>
              <span className="price-discount">40% OFF</span>
            </div>
            <button onClick={handleGetHoroscope} className="payment-button">
              <span className="button-icon">🔮</span>
              <span className="button-text">Get Your Future Horoscope</span>
            </button>
            <p className="payment-note">
              Secure payment via Razorpay • Instant download • 30-day money-back guarantee
            </p>
          </div>
          <div className="ebook-visual">
            <div className="ebook-mockup">
              <div className="mockup-cover">
                <span className="mockup-title">2025</span>
                <span className="mockup-subtitle">Horoscope Guide</span>
                <div className="mockup-stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookSection; 