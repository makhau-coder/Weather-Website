# 🌤️ Weather Website

A modern, responsive weather application that provides real-time weather information with an intuitive and visually appealing interface.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features in Detail](#features-in-detail)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions instantly
- **Location Search**: Search for weather by city name or coordinates
- **Detailed Forecasts**: View weather forecasts with temperature, humidity, wind speed, and more
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern, clean interface with smooth animations
- **Accurate Data**: Powered by reliable weather APIs
- **Temperature Units**: Toggle between Celsius and Fahrenheit
- **Local Storage**: Save your favorite locations for quick access

## 🛠️ Tech Stack

| Language | Percentage | Usage |
|----------|-----------|-------|
| **JavaScript** | 42.5% | Core application logic, API calls, and interactivity |
| **CSS** | 39.1% | Styling, animations, and responsive layout |
| **HTML** | 18.4% | Semantic markup and page structure |

**Additional Technologies:**
- REST API for weather data
- Local Storage API for data persistence
- Responsive CSS Grid & Flexbox

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Internet connection for API calls
- Weather API key (if using an external weather service)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/makhau-coder/Weather-Website.git
   cd Weather-Website
   ```

2. **Get an API Key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) or your preferred weather service
   - Copy your API key

3. **Configure the API Key:**
   - Open `js/config.js` or your main JavaScript file
   - Add your API key:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

### Running the Project

Simply open the `index.html` file in your web browser:
- **Option 1**: Double-click `index.html`
- **Option 2**: Use a local server
  ```bash
  # Using Python 3
  python -m http.server 8000
  
  # Using Python 2
  python -m SimpleHTTPServer 8000
  
  # Using Node.js http-server
  npx http-server
  ```
- Then navigate to `http://localhost:8000`

## 📖 Usage

1. **Enter a Location**: Type a city name in the search bar
2. **View Weather**: Current weather conditions display immediately
3. **Check Forecast**: Scroll to see weather predictions
4. **Toggle Units**: Click the temperature unit button to switch between °C and °F
5. **Save Favorites**: Click the heart icon to save your favorite locations
6. **View Saved Locations**: Access saved locations from the sidebar

## 📁 Project Structure

```
Weather-Website/
├── index.html          # Main HTML file
├── css/
│   ├── styles.css      # Main styling
│   └── responsive.css  # Mobile-responsive styles
├── js/
│   ├── main.js         # Application logic
│   ├── api.js          # Weather API integration
│   └── config.js       # Configuration settings
├── images/             # Weather icons and assets
├── README.md           # This file
└── LICENSE            # License information
```

## 🎯 Features in Detail

### 🔍 Location Search
- Search by city name
- Auto-complete suggestions
- Geographic coordinate support

### 📊 Weather Information
- Current temperature
- "Feels like" temperature
- Humidity levels
- Wind speed and direction
- UV index
- Atmospheric pressure
- Visibility

### 🌅 Visual Indicators
- Dynamic background based on weather conditions
- Weather icons for easy recognition
- Color-coded alerts for severe weather

### 💾 Persistent Data
- Save favorite locations locally
- Quick access to recently viewed areas
- User preferences (temperature unit, theme)

## 🤝 Contributing

Contributions are welcome! To get started:

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Weather-Website.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes** and test thoroughly

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**

### Code Style Guidelines
- Use meaningful variable names
- Add comments for complex logic
- Follow the existing code structure
- Ensure cross-browser compatibility

## 🐛 Reporting Issues

Found a bug? Please open an [Issue](https://github.com/makhau-coder/Weather-Website/issues) with:
- Clear title describing the bug
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots (if applicable)
- Browser and OS information

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

## 👤 Contact

**Developer**: [makhau-coder](https://github.com/makhau-coder)

- GitHub: [@makhau-coder](https://github.com/makhau-coder)
- Email: [your-email@example.com]

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [Font Awesome](https://fontawesome.com/) or [Weather Icons](https://erikflowers.github.io/weather-icons/)
- Inspired by modern weather applications

---

**⭐ If you find this project helpful, please consider giving it a star!**

### Future Enhancements
- [ ] Air quality index (AQI)
- [ ] Weather alerts and notifications
- [ ] Multiple language support
- [ ] Dark mode toggle
- [ ] Historical weather data
- [ ] Integration with map services
- [ ] PWA capabilities for offline access

---

*Last Updated: April 2026*
