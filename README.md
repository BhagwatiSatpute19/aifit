# AiFitLook - AI-Powered Outfit Suggestions

AiFitLook is a modern web application that provides personalized outfit suggestions using AI technology. The platform helps users discover their perfect style based on their body type, skin tone, occasion, and personal preferences.

## 🌟 Features

- **Landing Page**: Modern, responsive homepage introducing the platform
- **User Authentication**: Secure login with Firebase Auth
- **Outfit Suggestions**: AI-powered recommendations based on user input
- **Personalization**: Considers body type, skin tone, occasion, and mood
- **Modern UI/UX**: Clean design, smooth animations, and responsive layouts

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Authentication**: Firebase Authentication
- **Styling**: Custom CSS (per-page styles)
- **Fonts**: Google Fonts (Poppins, others)

## 📁 Project Structure

```
aifit-main/
├── index.html         # Landing page
├── index.js           # Landing page JS (animations, navigation)
├── login.html         # Login page
├── login.css          # Login page styles
├── outfit.html        # Outfit suggestion page (main dashboard)
├── outfit.js          # Outfit suggestion logic (AI, API calls)
├── outfit.css         # Outfit page styles
├── default.webp       # Default image for outfit suggestions
├── img2.webp          # Additional image
├── images.jpg         # Additional image
├── satria-aditya-moHSPOxxnhI-unsplash.jpg # Background image
├── huy-nguyen-YhP-E5YwOGE-unsplash (1).jpg # Background image
├── firebase.json      # Firebase hosting config
├── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Firebase project setup (for authentication)

### Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Get your Firebase configuration and update it in the HTML files (see `login.html`)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The application will work immediately with the existing Firebase configuration

### Firebase Configuration
The application uses the following Firebase configuration (see `login.html`):
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
2. **Sign In**: Users log in to their account (or sign up if you add a signup page)
3. **Outfit Suggestion**: Authenticated users fill out their details and get AI-powered outfit recommendations

## 🎨 Design Features

- Responsive, mobile-first layouts
- Modern, clean UI with custom CSS for each page
- Interactive elements and smooth transitions

## 🔐 Security Features

- Firebase Authentication for secure user management
- Input validation on all forms
- Secure data handling in the browser

## 📊 Data Collection

The application collects the following user data (in the browser):
- **Personal Information**: Name, gender
- **Physical Measurements**: Height, weight, body shape, skin tone
- **Preferences**: Occasion, mood
- **Authentication**: Email and password (handled securely by Firebase)

## 🎯 AI Suggestion Algorithm

The outfit suggestion system considers:
- **Body Type**: Hourglass, Pear, Rectangle, Apple, Inverted Triangle, etc.
- **Occasion**: Casual, Formal, Party, Wedding, Interview, Vacation
- **Skin Tone**: Fair, Medium, Olive, Brown, Dark
- **Mood**: Happy, Calm, Bold, Lazy, Romantic

## 🚀 Deployment

The application can be deployed to any static hosting service. For Firebase Hosting, see `firebase.json`:
- Hosting is set to the project root (`public: "."`)
- All routes are rewritten to `index.html` for SPA support

## 🔧 Customization

- **Styling**: Edit `outfit.css` and `login.css` for custom styles
- **Landing Page**: Edit `index.html` and `index.js` for homepage content/animations
- **Outfit Logic**: Edit `outfit.js` for AI prompt logic or API integration

## 📈 Future Enhancements

- Add a signup page for new user registration
- Add user profile management
- Integrate more advanced AI or outfit image generation
- Add social sharing features

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

Email : rupaljivtode@gmail.com
        bhagwatisatpute19@gmail.com

**AiFitLook** - Discover Your Perfect Style with AI ✨ 

