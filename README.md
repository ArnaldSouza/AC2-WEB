# 🌍 Calculadora de Pegada Ecológica

An interactive web application for calculating personal carbon footprint, developed as an academic project aligned with **SDG 13: Climate Action** from the United Nations Sustainable Development Goals.

## 📌 About the Project

This project was developed as part of the Web Design course evaluation (AC2), presenting a website focused on one of the 17 Sustainable Development Goals (SDGs) established by the United Nations. The chosen theme addresses **SDG 13 - Climate Action**, through an educational tool that helps users understand and measure their environmental impact.

### 🎯 Purpose

The Carbon Footprint Calculator aims to:
- Raise awareness about individual environmental impact
- Educate users on the concept of ecological footprint
- Provide personalized metrics based on lifestyle habits
- Encourage sustainable practices and conscious consumption
- Support SDG 13 objectives for climate action

## ✨ Features

### 🏠 Home Page
- Visual introduction with environmental imagery
- Direct access to the carbon footprint calculator
- Link to educational content about ecological footprint
- SDG 13 identification

### 📚 Educational Section
- Comprehensive explanation of what ecological footprint is
- Information about carbon footprint measurement
- Environmental impact awareness
- Sustainability concepts and practices

### 🧮 Interactive Calculator
Multi-step questionnaire covering:
- **Transportation:** Car usage (km/month and efficiency)
- **Motorcycle:** Moto usage and fuel efficiency
- **Public Transport:** Monthly kilometers traveled
- **Household:** Number of residents
- **Diet:** Meat consumption patterns
- **Energy:** Renewable energy usage percentage

### 📊 Results Visualization
- Personalized carbon footprint calculation (kg/month)
- Interactive pie chart showing emission breakdown (Chart.js)
- Educational feedback based on results
- Actionable recommendations for reduction

## 🔧 Technologies Used

| Technology | Purpose | Percentage |
|------------|---------|------------|
| **HTML5** | Structure and content | 57.7% |
| **CSS3** | Styling and responsive design | 22.9% |
| **JavaScript** | Interactivity and calculations | 19.4% |
| **Chart.js** | Data visualization (pie charts) | - |
| **Bootstrap 5** | UI components (select menus) | - |

## 📁 Project Structure

```
AC2-WEB/
├── index.html              # Home page
├── sobre.html              # Educational page about ecological footprint
├── questionario. html       # Interactive calculator questionnaire
├── src/
│   ├── css/
│   │   ├── reset.css       # CSS reset
│   │   ├── style.css       # Main styles
│   │   └── Questionario.css # Calculator specific styles
│   ├── js/
│   │   └── questionario.js  # Calculator logic and Chart.js integration
│   ├── img/                # Images and icons
│   └── node_modules/       # Dependencies (Chart.js)
├── Documento - AC2.docx    # Project documentation
└── README.md
```

## 🚀 How to Use

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArnaldSouza/AC2-WEB.git
   cd AC2-WEB
   ```

2. **Open in browser:**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   
   # Or use a local server
   python -m http.server 8000
   # Access:  http://localhost:8000
   ```

3. **Navigate the application:**
   - Start at the home page (`index.html`)
   - Learn about ecological footprint (`sobre.html`)
   - Calculate your carbon footprint (`questionario.html`)

## 🌱 How the Calculator Works

### Calculation Methodology

The calculator uses the following formula considerations: 

```javascript
Carbon Footprint = 
  (Car emissions) + 
  (Motorcycle emissions) + 
  (Public transport impact) + 
  (Household energy consumption) - 
  (Renewable energy offset) + 
  (Dietary impact)
```

### Emission Factors Used: 
- **Gasoline:** ~2.3 kg CO₂/liter
- **Public Transport:** Average emission per km
- **Meat Consumption:** Impact factor per person
- **Renewable Energy:** Reduction percentage applied

### Result Interpretation

The final result shows:
- Total monthly carbon footprint (kg/month)
- Visual breakdown by category
- Personalized recommendations
- Comparison with sustainable thresholds

## 🎓 SDG 13 - Climate Action

### Why SDG 13? 

**Goal 13:** Take urgent action to combat climate change and its impacts. 

This project contributes to SDG 13 by:
- ✅ Raising awareness about personal carbon emissions
- ✅ Providing tools for measuring environmental impact
- ✅ Educating about climate change causes
- ✅ Encouraging behavior change towards sustainability
- ✅ Promoting renewable energy adoption

### Global Context

> "Climate change is a global challenge that affects everyone, everywhere.  Addressing it requires cooperation, innovation, and individual action."

## 🎨 Visual Design

- **Color Scheme:** Earth tones and green for environmental theme
- **Imagery:** Factory, bicycles, traffic, and green landscapes
- **Responsive Layout:** Adaptable to different screen sizes
- **Interactive Elements:** Sliders, select dropdowns, and dynamic content
- **Data Visualization:** Clear and intuitive pie charts

## 📊 Features Breakdown

| Feature | Description | Status |
|---------|-------------|--------|
| Home Page | Landing page with navigation | ✅ Complete |
| Educational Content | About ecological footprint | ✅ Complete |
| Multi-step Form | 8-question calculator | ✅ Complete |
| Dynamic Calculation | Real-time footprint calculation | ✅ Complete |
| Chart Visualization | Pie chart with Chart.js | ✅ Complete |
| Responsive Design | Mobile-friendly layout | ✅ Complete |
| Custom Feedback | Personalized recommendations | ✅ Complete |

## 🎓 Academic Context

- **Course:** Web Design
- **Assessment:** AC2 (Continuous Assessment 2)
- **Theme:** UN Sustainable Development Goals
- **Focus:** SDG 13 - Climate Action
- **Institution:** [Your Institution]
- **Year:** 2023

## 💡 Learning Outcomes

This project demonstrates:
- ✅ Semantic HTML structure
- ✅ CSS styling and layout techniques
- ✅ JavaScript DOM manipulation
- ✅ Multi-step form implementation
- ✅ External library integration (Chart.js)
- ✅ Responsive web design
- ✅ User experience (UX) considerations
- ✅ Environmental awareness integration
- ✅ Data visualization techniques

## 🌟 Future Improvements

Potential enhancements:
- [ ] Add more transportation types (airplane, train)
- [ ] Include water consumption calculations
- [ ] Add waste generation metrics
- [ ] Implement comparison with national/global averages
- [ ] Create user accounts to track progress over time
- [ ] Add social sharing features
- [ ] Multi-language support
- [ ] Expand to include all 17 SDGs
- [ ] Mobile app version
- [ ] API integration for real-time emission factors

## 📖 References

- [United Nations SDG 13](https://sdgs.un.org/goals/goal13)
- [Global Footprint Network](https://www.footprintnetwork.org/)
- [IPCC Climate Change Reports](https://www.ipcc.ch/)
- [Chart.js Documentation](https://www.chartjs.org/)

## 📄 License

This is an educational project developed for academic purposes. 

## 👤 Author

**Arnald Souza**
- GitHub: [@ArnaldSouza](https://github.com/ArnaldSouza)
- Repository: [AC2-WEB](https://github.com/ArnaldSouza/AC2-WEB)

## 🙏 Acknowledgments

- Web Design Course instructors
- United Nations for the SDG framework
- Chart.js community for the visualization library
- Bootstrap team for UI components

---

🌍 **Together for a sustainable future!  #ClimateAction #SDG13**

*Developed with 💚 for environmental awareness*
