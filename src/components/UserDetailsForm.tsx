import React, { useState } from 'react';
import { horoscopeData } from '../data/horoscopeData';
import './UserDetailsForm.css';

export interface UserDetails {
  name: string;
  dateOfBirth: string;
  birthTime: string;
  zodiacSign: string;
}

interface UserDetailsFormProps {
  onSubmit: (details: UserDetails) => void;
  isLoading?: boolean;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<UserDetails>({
    name: '',
    dateOfBirth: '',
    birthTime: '',
    zodiacSign: ''
  });

  const [errors, setErrors] = useState<Partial<UserDetails>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<UserDetails> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!formData.birthTime) {
      newErrors.birthTime = 'Birth time is required';
    }

    if (!formData.zodiacSign) {
      newErrors.zodiacSign = 'Zodiac sign is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof UserDetails, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const getZodiacSignFromDate = (dateString: string): string => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // Zodiac sign determination logic
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    return 'Pisces';
  };

  const handleDateChange = (dateString: string) => {
    handleInputChange('dateOfBirth', dateString);
    
    // Auto-populate zodiac sign based on date
    const zodiacSign = getZodiacSignFromDate(dateString);
    if (zodiacSign) {
      setFormData(prev => ({ ...prev, zodiacSign }));
    }
  };

  return (
    <div className="user-details-form-container">
      <div className="form-header">
        <h2 className="form-title">🔮 Personal Horoscope Reading</h2>
        <p className="form-subtitle">
          Enter your details to receive a personalized cosmic reading tailored just for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="user-details-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            <span className="label-icon">👤</span>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Enter your full name"
            disabled={isLoading}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth" className="form-label">
            <span className="label-icon">📅</span>
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) => handleDateChange(e.target.value)}
            className={`form-input ${errors.dateOfBirth ? 'error' : ''}`}
            disabled={isLoading}
          />
          {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="birthTime" className="form-label">
            <span className="label-icon">⏰</span>
            Exact Birth Time
          </label>
          <input
            type="time"
            id="birthTime"
            value={formData.birthTime}
            onChange={(e) => handleInputChange('birthTime', e.target.value)}
            className={`form-input ${errors.birthTime ? 'error' : ''}`}
            disabled={isLoading}
          />
          <small className="form-hint">This helps determine your rising sign and planetary positions</small>
          {errors.birthTime && <span className="error-message">{errors.birthTime}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="zodiacSign" className="form-label">
            <span className="label-icon">⭐</span>
            Zodiac Sign
          </label>
          <select
            id="zodiacSign"
            value={formData.zodiacSign}
            onChange={(e) => handleInputChange('zodiacSign', e.target.value)}
            className={`form-select ${errors.zodiacSign ? 'error' : ''}`}
            disabled={isLoading}
          >
            <option value="">Select your zodiac sign</option>
            {horoscopeData.map((zodiac) => (
              <option key={zodiac.sign} value={zodiac.sign}>
                {zodiac.symbol} {zodiac.sign} ({zodiac.dates})
              </option>
            ))}
          </select>
          {errors.zodiacSign && <span className="error-message">{errors.zodiacSign}</span>}
        </div>

        <button 
          type="submit" 
          className={`submit-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="spinner-small"></div>
              <span>Reading the Stars...</span>
            </>
          ) : (
            <>
              <span className="button-icon">🔮</span>
              <span>Get My Horoscope</span>
            </>
          )}
        </button>
      </form>

      <div className="form-footer">
        <p className="privacy-note">
          🔒 Your personal information is used only for horoscope calculations and is never shared.
        </p>
      </div>
    </div>
  );
};

export default UserDetailsForm; 