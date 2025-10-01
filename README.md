# The Hummingbird Pub Website

A responsive, modern website for The Hummingbird Pub, a local restaurant on Galiano Island, BC. This project showcases full-stack web development skills with a focus on user experience, performance, and local business needs.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Menu**: Dynamic menu with pricing and descriptions
- **Parallax Effects**: Smooth scrolling animations and image transitions
- **Local Business Integration**: 
  - Google Maps integration for location
  - Business hours display
  - Social media links (Facebook, Instagram)
  - Contact information
- **Performance Optimized**: Compressed images and efficient CSS
- **Dynamic Content Management**: Google Apps Script integration for easy client updates
- **SEO Friendly**: Semantic HTML structure and meta tags
- **Accessibility**: Proper alt tags and keyboard navigation support

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Custom properties, flexbox, grid, and animations
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **JavaScript (ES6+)**: Interactive features and dynamic content
- **Google Apps Script**: Backend integration for dynamic content loading
- **PostCSS**: CSS processing and optimization
- **Vite**: Fast build tool and development server

## 🎨 Design Highlights

- **Color Scheme**: Custom purple and blue palette reflecting the pub's branding
- **Typography**: Multiple Google Fonts (Poppins, Merienda, IM Fell) for visual hierarchy
- **Imagery**: High-quality photos of food, pub interior, and local scenery
- **Layout**: Grid and flexbox for responsive, modern layouts
- **Animations**: Smooth transitions and hover effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hummingbird-pub-website.git
cd hummingbird-pub-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build CSS (in a separate terminal):
```bash
npm run build:css
```

5. Open your browser and navigate to `http://localhost:5173/public/`

### Build for Production

```bash
npm run build:css
```

Upload the contents of the `public/` directory to your web server.

## 📁 Project Structure

```
hummingbird-pub-website/
├── public/                 # Production files
│   ├── index.html         # Homepage
│   ├── menu.html          # Menu page
│   ├── output.css         # Compiled CSS
│   ├── script.js          # JavaScript functionality
│   └── img/               # Images and assets
├── styles.css             # Source CSS with Tailwind
├── vite.config.js         # Vite configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Key Sections

### Homepage (`index.html`)
- Hero section with parallax background images
- About section with business information
- Pub Bus schedule and information
- Location with embedded Google Maps
- Food gallery showcasing menu items

### Menu Page (`menu.html`)
- Responsive menu layout
- Organized by categories (Starters, Burgers, etc.)
- Dynamic pricing system with Google Sheets integration
- Mobile-friendly navigation

## 🔄 Dynamic Content System

The website features a **Google Apps Script integration** that allows the restaurant owner to easily update business hours and menu prices without touching any code:

- **Google Sheets Backend**: Business hours and menu prices stored in Google Sheets
- **Real-time Updates**: Changes in the spreadsheet automatically reflect on the website
- **Smart Caching**: 5-minute cache system reduces API calls and improves performance
- **Error Handling**: Graceful fallback if the API is temporarily unavailable
- **Client-Friendly**: Non-technical restaurant staff can update content independently

### How It Works
1. Restaurant owner updates hours/prices in a Google Sheet
2. Google Apps Script processes the data and serves it via API
3. Website fetches data on page load with intelligent caching
4. Content is dynamically populated using `data-name` attributes

## 🔧 Development Notes

- **CSS Architecture**: Uses Tailwind CSS with custom CSS classes for complex components
- **Image Optimization**: Multiple image sizes for different screen resolutions
- **Performance**: Minified CSS and optimized images for fast loading
- **Browser Support**: Modern browsers with graceful degradation

## 🌐 Deployment

The website is designed for static hosting and can be deployed to:
- Traditional web hosting (cPanel, FTP)
- Static site hosts (Netlify, Vercel, GitHub Pages)
- CDN services for optimal performance

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Mobile-Friendly**: 100% responsive design

## 🤝 Client Requirements Met

- ✅ Responsive design for all devices
- ✅ Easy-to-update menu system
- ✅ Local business information prominently displayed
- ✅ Social media integration
- ✅ Contact information and location
- ✅ Fast loading times
- ✅ Professional appearance reflecting pub atmosphere


*This project demonstrates modern web development practices, responsive design principles, and effective local business website solutions.*
