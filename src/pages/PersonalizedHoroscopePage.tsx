import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchHoroscope, HoroscopeData } from '../data/horoscopeData';
import { UserDetails } from '../components/UserDetailsForm';
import './PersonalizedHoroscopePage.css';

const PersonalizedHoroscopePage: React.FC = () => {
  const location = useLocation();
  const userDetails = location.state?.userDetails as UserDetails;
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHoroscope = async () => {
      if (!userDetails?.zodiacSign) {
        setError('No zodiac sign provided');
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchHoroscope(userDetails.zodiacSign);
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
  }, [userDetails]);

  if (!userDetails) {
    return (
      <div className="personalized-horoscope-page">
        <div className="container">
          <div className="error-container">
            <h2 className="error-title">No User Details Found</h2>
            <p className="error-message">Please fill out the form to get your personalized horoscope.</p>
            <Link to="/" className="back-button">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="personalized-horoscope-page">
        <div className="container">
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Reading the stars for {userDetails.name}...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !horoscope) {
    return (
      <div className="personalized-horoscope-page">
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="personalized-horoscope-page">
      <div className="container">
        {/* Back Button */}
        <div className="back-section">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

        {/* Personalized Horoscope Content */}
        <div className="personalized-content fade-in">
          {/* User Details Header */}
          <div className="user-details-header">
            <div className="user-info">
              <div className="user-avatar">
                <span className="avatar-icon">👤</span>
              </div>
              <div className="user-details">
                <h1 className="user-name">{userDetails.name}</h1>
                <div className="user-birth-info">
                  <span className="birth-date">📅 {formatDate(userDetails.dateOfBirth)}</span>
                  <span className="birth-time">⏰ {formatTime(userDetails.birthTime)}</span>
                </div>
              </div>
            </div>
            <div className="zodiac-info">
              <div className="zodiac-symbol-large">{horoscope.symbol}</div>
              <div className="zodiac-details">
                <h2 className="zodiac-name">{horoscope.sign}</h2>
                <p className="zodiac-dates">{horoscope.dates}</p>
                <div className="zodiac-element">
                  <span className="element-label">Element:</span>
                  <span className="element-value">{horoscope.element}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personalized Horoscope */}
          <div className="horoscope-section">
            <h2 className="section-title">Your Personal Horoscope</h2>
            <div className="personalized-intro">
              <p className="intro-text">
                Dear <strong>{userDetails.name}</strong>, born under the sign of {horoscope.sign} on {formatDate(userDetails.dateOfBirth)} at {formatTime(userDetails.birthTime)}, 
                here's what the stars have aligned for you today:
              </p>
            </div>
            <div className="horoscope-text">
              {horoscope.today.horoscope}
            </div>
          </div>

          {/* Lucky Details */}
          <div className="lucky-details">
            <h2 className="section-title">Your Lucky Elements</h2>
            <div className="lucky-grid">
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
          </div>

          {/* Daily Tip */}
          <div className="tip-section">
            <h2 className="section-title">Cosmic Guidance for You</h2>
            <div className="tip-content">
              <div className="tip-icon">💡</div>
              <p className="tip-text">{horoscope.today.tip}</p>
            </div>
          </div>

          {/* Enhanced Cosmic Guidance */}
          <div className="cosmic-guidance-section">
            <h2 className="section-title">Detailed Cosmic Guidance</h2>
            <div className="guidance-grid">
              <div className="guidance-item">
                <div className="guidance-icon">💕</div>
                <div className="guidance-content">
                  <h3 className="guidance-title">Love & Relationships</h3>
                  <p className="guidance-text">{horoscope.today.cosmicGuidance.love}</p>
                </div>
              </div>
              
              <div className="guidance-item">
                <div className="guidance-icon">💼</div>
                <div className="guidance-content">
                  <h3 className="guidance-title">Career & Work</h3>
                  <p className="guidance-text">{horoscope.today.cosmicGuidance.career}</p>
                </div>
              </div>
              
              <div className="guidance-item">
                <div className="guidance-icon">🏃‍♀️</div>
                <div className="guidance-content">
                  <h3 className="guidance-title">Health & Wellness</h3>
                  <p className="guidance-text">{horoscope.today.cosmicGuidance.health}</p>
                </div>
              </div>
              
              <div className="guidance-item">
                <div className="guidance-icon">💰</div>
                <div className="guidance-content">
                  <h3 className="guidance-title">Finance & Wealth</h3>
                  <p className="guidance-text">{horoscope.today.cosmicGuidance.finance}</p>
                </div>
              </div>
              
              <div className="guidance-item">
                <div className="guidance-icon">✨</div>
                <div className="guidance-content">
                  <h3 className="guidance-title">Spirituality & Growth</h3>
                  <p className="guidance-text">{horoscope.today.cosmicGuidance.spirituality}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Planetary Influences */}
          <div className="planetary-section">
            <h2 className="section-title">Planetary Influences</h2>
            <div className="planetary-grid">
              <div className="planetary-item">
                <div className="planetary-icon">🪐</div>
                <div className="planetary-content">
                  <h3 className="planetary-title">Dominant Planet</h3>
                  <p className="planetary-text">{horoscope.today.planetaryInfluences.dominantPlanet}</p>
                </div>
              </div>
              
              <div className="planetary-item">
                <div className="planetary-icon">⭐</div>
                <div className="planetary-content">
                  <h3 className="planetary-title">Planetary Aspect</h3>
                  <p className="planetary-text">{horoscope.today.planetaryInfluences.planetaryAspect}</p>
                </div>
              </div>
              
              <div className="planetary-item">
                <div className="planetary-icon">🌙</div>
                <div className="planetary-content">
                  <h3 className="planetary-title">Moon Phase</h3>
                  <p className="planetary-text">{horoscope.today.planetaryInfluences.moonPhase}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Growth */}
          <div className="growth-section">
            <h2 className="section-title">Personal Growth Insights</h2>
            <div className="growth-grid">
              <div className="growth-item">
                <div className="growth-icon">💪</div>
                <div className="growth-content">
                  <h3 className="growth-title">Your Strength</h3>
                  <p className="growth-text">{horoscope.today.personalGrowth.strength}</p>
                </div>
              </div>
              
              <div className="growth-item">
                <div className="growth-icon">🎯</div>
                <div className="growth-content">
                  <h3 className="growth-title">Your Challenge</h3>
                  <p className="growth-text">{horoscope.today.personalGrowth.challenge}</p>
                </div>
              </div>
              
              <div className="growth-item">
                <div className="growth-icon">🚀</div>
                <div className="growth-content">
                  <h3 className="growth-title">Your Opportunity</h3>
                  <p className="growth-text">{horoscope.today.personalGrowth.opportunity}</p>
                </div>
              </div>
              
              <div className="growth-item">
                <div className="growth-icon">💭</div>
                <div className="growth-content">
                  <h3 className="growth-title">Cosmic Advice</h3>
                  <p className="growth-text">{horoscope.today.personalGrowth.advice}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compatibility */}
          <div className="compatibility-section">
            <h2 className="section-title">Relationship Compatibility</h2>
            <div className="compatibility-grid">
              <div className="compatibility-item">
                <div className="compatibility-icon">❤️</div>
                <div className="compatibility-content">
                  <h3 className="compatibility-title">Best Matches</h3>
                  <p className="compatibility-text">{horoscope.today.compatibility.bestMatch}</p>
                </div>
              </div>
              
              <div className="compatibility-item">
                <div className="compatibility-icon">⚡</div>
                <div className="compatibility-content">
                  <h3 className="compatibility-title">Challenging Matches</h3>
                  <p className="compatibility-text">{horoscope.today.compatibility.challengingMatch}</p>
                </div>
              </div>
              
              <div className="compatibility-item">
                <div className="compatibility-icon">💡</div>
                <div className="compatibility-content">
                  <h3 className="compatibility-title">Relationship Advice</h3>
                  <p className="compatibility-text">{horoscope.today.compatibility.advice}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Birth Chart Insights */}
          <div className="birth-chart-section">
            <h2 className="section-title">Birth Chart Insights</h2>
            <div className="chart-insights">
              <div className="insight-item">
                <div className="insight-icon">⭐</div>
                <div className="insight-content">
                  <h3 className="insight-title">Sun Sign</h3>
                  <p className="insight-text">{horoscope.sign} - Your core personality and life purpose</p>
                </div>
              </div>
              <div className="insight-item">
                <div className="insight-icon">🌙</div>
                <div className="insight-content">
                  <h3 className="insight-title">Birth Time Significance</h3>
                  <p className="insight-text">Your birth time of {formatTime(userDetails.birthTime)} influences your rising sign and planetary positions</p>
                </div>
              </div>
              <div className="insight-item">
                <div className="insight-icon">🔥</div>
                <div className="insight-content">
                  <h3 className="insight-title">Elemental Energy</h3>
                  <p className="insight-text">{horoscope.element} element brings {horoscope.element.toLowerCase()} energy to your personality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="share-section">
            <h3 className="share-title">Share Your Personalized Reading</h3>
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

          {/* Get Another Reading */}
          <div className="another-reading-section">
            <h3 className="another-reading-title">Want Another Reading?</h3>
            <p className="another-reading-text">
              Get a different perspective or check another zodiac sign's influence on your day.
            </p>
            <Link to="/" className="another-reading-button">
              <span className="button-icon">🔮</span>
              Get Another Reading
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedHoroscopePage; 