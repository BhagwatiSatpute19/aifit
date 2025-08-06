# AiFitLook - AI-Powered Outfit Suggestions

AiFitLook is a modern web application that provides personalized outfit suggestions using AI technology. The platform helps users discover their perfect style based on their body type, skin tone, occasion, and personal preferences.

## 🌟 Features

### Landing Page
- **Modern Design**: Beautiful, responsive landing page with smooth animations
- **Feature Showcase**: Highlights the platform's key benefits
- **How It Works**: Step-by-step guide for new users
- **About Section**: Information about the platform and statistics

### User Authentication
- **Firebase Integration**: Secure user authentication with Firebase Auth
- **Sign Up**: Easy account creation with email and password
- **Sign In**: Secure login with error handling
- **Session Management**: Automatic redirects based on authentication status

### Personalized Dashboard
- **User Profile**: Comprehensive form to collect user details
- **Body Measurements**: Height, weight, body shape, and skin tone
- **Style Preferences**: Occasion, style preference, and budget range
- **AI-Powered Suggestions**: Intelligent outfit recommendations

### Outfit Suggestions
- **Body Type Specific**: Recommendations tailored to different body shapes
- **Occasion-Based**: Suggestions for casual, business, formal, and special events
- **Color Coordination**: Skin tone-specific color recommendations
- **Style Integration**: Incorporates user's preferred style aesthetic
- **Detailed Explanations**: Reasoning behind each suggestion

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Styling**: Custom CSS with modern design principles
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Emoji icons for visual appeal

## 📁 Project Structure

```
public/
├── index.html          # Landing page
├── login.html          # Sign in page
├── signup.html         # Sign up page
├── dashboard.html      # User dashboard
├── style.css           # Main stylesheet
├── app.js              # Landing page functionality
├── 404.html            # Error page
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Firebase project setup (for authentication and database)

### Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Create a Firestore database
4. Get your Firebase configuration and update it in the HTML files

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The application will work immediately with the existing Firebase configuration

### Firebase Configuration
The application uses the following Firebase configuration:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyA1CXsH_2C8_F95ud4eE3KWN3IXpjuAeZE",
  authDomain: "aifitlook.firebaseapp.com",
  projectId: "aifitlook",
  storageBucket: "aifitlook.appspot.com",
  messagingSenderId: "243803127747",
  appId: "1:243803127747:web:014730a2905bb740210776",
  measurementId: "G-VVNQ7BK24E"
};
```

## 📱 User Flow

1. **Landing Page**: Users visit the homepage and learn about the platform
2. **Sign Up**: New users create an account with email and password
3. **Sign In**: Existing users log in to their account
4. **Dashboard**: Authenticated users fill out their profile details
5. **Suggestions**: AI generates personalized outfit recommendations
6. **Results**: Users receive detailed outfit suggestions with explanations

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Flexible navigation
- Touch-friendly interface

### Modern UI/UX
- Clean, minimalist design
- Smooth animations and transitions
- Consistent color scheme
- Professional typography

### Interactive Elements
- Hover effects on buttons and cards
- Smooth scrolling navigation
- Form validation with real-time feedback
- Loading states and success messages

## 🔐 Security Features

- Firebase Authentication for secure user management
- Input validation on all forms
- Secure data storage in Firestore
- Protected routes (dashboard requires authentication)
- Password strength requirements

## 📊 Data Collection

The application collects the following user data:
- **Personal Information**: Name, age, gender
- **Physical Measurements**: Height, weight, body shape, skin tone
- **Preferences**: Style preference, budget range, occasion
- **Authentication**: Email and password (stored securely by Firebase)

## 🎯 AI Suggestion Algorithm

The outfit suggestion system considers:
1. **Body Type**: Hourglass, Pear, Rectangle, Apple, Inverted Triangle
2. **Occasion**: Casual, Business, Formal, Party, Date, Wedding, Interview, Sports
3. **Skin Tone**: Fair, Light, Medium, Olive, Dark, Deep
4. **Style Preference**: Classic, Modern, Bohemian, Minimalist, Vintage, Streetwear, Elegant, Trendy
5. **Budget Range**: Budget-friendly, Moderate, Premium, Luxury

## 🚀 Deployment

The application can be deployed to any static hosting service:
- Firebase Hosting
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 🔧 Customization

### Adding New Body Types
Update the `occasionSuggestions` object in `dashboard.html` to include new body type recommendations.

### Adding New Occasions
Extend the occasion options in the form and update the suggestion logic accordingly.

### Styling Changes
Modify `style.css` to customize colors, fonts, and layout to match your brand.

## 📈 Future Enhancements

- **Image Integration**: Add outfit images and user photos
- **Social Features**: Share outfits and get feedback
- **Shopping Integration**: Direct links to purchase suggested items
- **Seasonal Recommendations**: Weather-based outfit suggestions
- **Advanced AI**: Machine learning for better recommendations
- **Mobile App**: Native mobile application
- **Virtual Try-On**: AR/VR integration for virtual fitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

**AiFitLook** - Discover Your Perfect Style with AI ✨ 