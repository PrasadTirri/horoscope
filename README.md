# AstroVaani - Your Daily Horoscope Guide

A beautiful, responsive React web application that provides daily horoscopes, lucky numbers, colors, and cosmic insights for all 12 zodiac signs.

## ✨ Features

- **12 Zodiac Signs**: Complete coverage from Aries to Pisces
- **Daily Horoscopes**: Personalized daily readings for each sign
- **Lucky Numbers & Colors**: Daily lucky elements for each zodiac sign
- **Daily Tips**: Cosmic advice and guidance
- **Elegant UI**: Cosmic/spiritual theme with dark blue, gold, and white colors
- **Responsive Design**: Works perfectly on mobile and desktop
- **Smooth Animations**: Fade-in effects and hover animations
- **Loading States**: Beautiful spinner while horoscope loads
- **2025 eBook**: Promotional section with Razorpay UPI payment integration
- **Share Functionality**: Social media sharing options

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd astrovaani
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
# or
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── ZodiacCard.tsx  # Individual zodiac sign cards
│   └── EbookSection.tsx # 2025 eBook promotion section
├── pages/              # Page components
│   ├── HomePage.tsx    # Main homepage with zodiac grid
│   └── HoroscopePage.tsx # Individual horoscope details
├── data/               # Static data and API simulation
│   └── horoscopeData.ts # Horoscope data for all 12 signs
├── App.tsx             # Main app component with routing
├── main.tsx           # React entry point
└── index.css          # Global styles and CSS variables
```

## 🎨 Design Features

- **Cosmic Theme**: Dark blue gradients with gold accents
- **Glass Morphism**: Translucent cards with backdrop blur
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Custom Scrollbar**: Themed scrollbar matching the design
- **Hover Effects**: Interactive elements with smooth transitions

## 🔧 Technologies Used

- **React 18**: Modern React with functional components
- **TypeScript**: Type-safe development
- **React Router**: Client-side routing
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with CSS variables and animations

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌟 Key Components

### ZodiacCard
- Displays individual zodiac signs as interactive cards
- Shows symbol, name, dates, and element
- Hover animations and smooth transitions

### HoroscopePage
- Detailed view of individual horoscope
- Loading states with spinner
- Error handling for invalid signs
- Share functionality for social media

### EbookSection
- Promotional section for 2025 Horoscope eBook
- Razorpay UPI payment integration
- Feature highlights and pricing
- Interactive mockup design

## 🎯 Usage

1. **Homepage**: Browse all 12 zodiac signs
2. **Select Sign**: Click on any zodiac sign to view details
3. **Read Horoscope**: View today's horoscope, lucky numbers, and tips
4. **Share**: Share your horoscope on social media
5. **Buy eBook**: Purchase the 2025 Horoscope eBook

## 🔮 Horoscope Data

All horoscope data is static and stored locally in `src/data/horoscopeData.ts`. The app simulates API calls with a 1.5-second delay to demonstrate loading states.

## 💳 Payment Integration

The eBook section includes a placeholder for Razorpay UPI payment integration. In a production environment, you would:

1. Set up a Razorpay account
2. Configure the payment gateway
3. Replace the alert with actual payment processing
4. Handle payment callbacks and success/failure states

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel/Netlify

The app is ready for deployment on platforms like Vercel or Netlify. Simply connect your repository and the build process will be handled automatically.

## 🎨 Customization

### Colors
Modify the CSS variables in `src/index.css`:
```css
:root {
  --primary-dark: #0a0e27;
  --secondary-dark: #1a1f3a;
  --accent-gold: #ffd700;
  --accent-gold-light: #ffed4e;
  /* ... */
}
```

### Horoscope Data
Update the horoscope content in `src/data/horoscopeData.ts` to customize readings for each sign.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**AstroVaani** - Discover your cosmic destiny with the stars! ⭐ 