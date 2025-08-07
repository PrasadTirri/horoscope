import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchHoroscope, HoroscopeData } from '../data/horoscopeData';
import './HoroscopePage.css';

const HoroscopePage: React.FC = () => {
  const { sign } = useParams<{ sign: string }>();
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHoroscope = async () => {
      if (!sign) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchHoroscope(sign);
        if (data) {
          setHoroscope(data);
        } else {
          setError('Zodiac sign not found');
        }
      } catch (err) {
        setError('Failed to load horoscope');
      } finally {
        setLoading(false);
      }
    };

    loadHoroscope();
  }, [sign]);

  if (loading) {
    return (
      <div className="horoscope-page">
        <div className="container">
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Reading the stars for {sign}...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !horoscope) {
    return (
      <div className="horoscope-page">
        <div className="container">
          <div className="error-container">
            <h2 className="error-title">Oops! Something went wrong</h2>
            <p className="error-message">{error || 'Zodiac sign not found'}</p>
            <Link to="/" className="back-button">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="horoscope-page">
      <div className="container">
        {/* Back Button */}
        <div className="back-section">
          <Link to="/" className="back-link">
            ← Back to All Signs
          </Link>
        </div>

        {/* Horoscope Content */}
        <div className="horoscope-content fade-in">
          {/* Header */}
          <div className="horoscope-header">
            <div className="sign-info">
              <div className="sign-symbol">{horoscope.symbol}</div>
              <div className="sign-details">
                <h1 className="sign-name">{horoscope.sign}</h1>
                <p className="sign-dates">{horoscope.dates}</p>
                <div className="sign-element">
                  <span className="element-label">Element:</span>
                  <span className="element-value">{horoscope.element}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Horoscope */}
          <div className="horoscope-section">
            <h2 className="section-title">Today's Horoscope</h2>
            <div className="horoscope-text">
              {horoscope.today.horoscope}
            </div>
          </div>

          {/* Lucky Details */}
          <div className="lucky-details">
            <div className="lucky-item">
              <div className="lucky-icon">🎲</div>
              <div className="lucky-info">
                <h3 className="lucky-label">Lucky Number</h3>
                <p className="lucky-value">{horoscope.today.luckyNumber}</p>
              </div>
            </div>
            
            <div className="lucky-item">
              <div className="lucky-icon">🎨</div>
              <div className="lucky-info">
                <h3 className="lucky-label">Lucky Color</h3>
                <p className="lucky-value">{horoscope.today.luckyColor}</p>
              </div>
            </div>
          </div>

          {/* Daily Tip */}
          <div className="tip-section">
            <h2 className="section-title">Daily Tip</h2>
            <div className="tip-content">
              <div className="tip-icon">💡</div>
              <p className="tip-text">{horoscope.today.tip}</p>
            </div>
          </div>

          {/* Share Section */}
          <div className="share-section">
            <h3 className="share-title">Share Your Horoscope</h3>
            <div className="share-buttons">
              <button className="share-button whatsapp">
                <span className="share-icon">📱</span>
                WhatsApp
              </button>
              <button className="share-button twitter">
                <span className="share-icon">🐦</span>
                Twitter
              </button>
              <button className="share-button facebook">
                <span className="share-icon">📘</span>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoroscopePage; 