import React from 'react';
import { Link } from 'react-router-dom';
import { horoscopeData } from '../data/horoscopeData';
import './HoroscopeTablePage.css';

const HoroscopeTablePage: React.FC = () => {
  return (
    <div className="horoscope-table-page">
      <div className="container">
        {/* Back Button */}
        <div className="back-section">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Complete Horoscope Table</h1>
          <p className="page-subtitle">View all zodiac signs and their daily horoscopes at a glance</p>
        </div>

        {/* Horoscope Table */}
        <div className="table-container">
          <table className="horoscope-table">
            <thead>
              <tr>
                <th>Zodiac Sign</th>
                <th>Element</th>
                <th>Dates</th>
                <th>Lucky Number</th>
                <th>Lucky Color</th>
                <th>Daily Horoscope</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {horoscopeData.map((zodiac) => (
                <tr key={zodiac.sign} className="table-row">
                  <td className="sign-cell">
                    <div className="sign-info">
                      <span className="sign-symbol">{zodiac.symbol}</span>
                      <span className="sign-name">{zodiac.sign}</span>
                    </div>
                  </td>
                  <td className="element-cell">
                    <span className="element-badge">{zodiac.element}</span>
                  </td>
                  <td className="dates-cell">{zodiac.dates}</td>
                  <td className="lucky-number-cell">
                    <span className="lucky-number">{zodiac.today.luckyNumber}</span>
                  </td>
                  <td className="lucky-color-cell">
                    <span className="color-swatch" style={{ backgroundColor: getColorCode(zodiac.today.luckyColor) }}></span>
                    <span className="color-name">{zodiac.today.luckyColor}</span>
                  </td>
                  <td className="horoscope-cell">
                    <div className="horoscope-preview">
                      {zodiac.today.horoscope.substring(0, 100)}...
                    </div>
                  </td>
                  <td className="action-cell">
                    <Link to={`/horoscope/${zodiac.sign.toLowerCase()}`} className="view-button">
                      View Full
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Stats */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <h3 className="stat-number">{horoscopeData.length}</h3>
              <p className="stat-label">Zodiac Signs</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔮</div>
            <div className="stat-content">
              <h3 className="stat-number">Daily</h3>
              <p className="stat-label">Updated Horoscopes</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3 className="stat-number">Complete</h3>
              <p className="stat-label">Cosmic Insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get color codes for the color swatches
const getColorCode = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    'ఎరుపు': '#FF0000',
    'పచ్చ': '#00FF00',
    'పసుపు': '#FFFF00',
    'వెండి': '#C0C0C0',
    'బంగారం': '#FFD700',
    'గోధుమ': '#8B4513',
    'గులాబీ': '#FFC0CB',
    'లోతైన ఎరుపు': '#8B0000',
    'ఊదా': '#800080',
    'నలుపు': '#000000',
    'విద్యుత్ నీలం': '#00FFFF',
    'సముద్ర ఆకుపచ్చ': '#2E8B57'
  };
  return colorMap[colorName] || '#CCCCCC';
};

export default HoroscopeTablePage; 