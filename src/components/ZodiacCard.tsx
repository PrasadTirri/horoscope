import React from 'react';
import { Link } from 'react-router-dom';
import { HoroscopeData } from '../data/horoscopeData';
import './ZodiacCard.css';

interface ZodiacCardProps {
  zodiac: HoroscopeData;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ zodiac }) => {
  return (
    <Link to={`/horoscope/${zodiac.sign.toLowerCase()}`} className="zodiac-card">
      <div className="card-content">
        <div className="zodiac-symbol">{zodiac.symbol}</div>
        <h3 className="zodiac-name">{zodiac.sign}</h3>
        <p className="zodiac-dates">{zodiac.dates}</p>
        <div className="zodiac-element">
          <span className="element-label">Element:</span>
          <span className="element-value">{zodiac.element}</span>
        </div>
        <div className="card-hover-effect">
          <span className="hover-text">Read Horoscope</span>
        </div>
      </div>
    </Link>
  );
};

export default ZodiacCard; 