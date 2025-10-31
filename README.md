# Mings Chinese Restaurant Website

A React + TypeScript replica of the Mings Pleasant Hill restaurant website (https://mingspleasanthill.co).

## Features

- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Navigation**: Clean navigation between Home, Menu, and About Us pages
- **Component-Based Architecture**: Modular React components for easy maintenance
- **TypeScript**: Full type safety throughout the application
- **Modern Styling**: CSS modules matching the original website's design

## Color Scheme

- Primary: Dark gray/charcoal (#222222)
- Secondary: Forest green (#116821)
- Background: White (#FFFFFF)
- Accent: Light gray (#E0E0E0)

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx         # Welcome hero section
│   ├── About.tsx        # About section
│   ├── MenuPreview.tsx  # Sample menu items
│   └── Footer.tsx       # Footer with contact info
├── pages/
│   ├── Home.tsx         # Home page layout
│   ├── Menu.tsx         # Full menu page
│   └── AboutUs.tsx      # About us page
├── styles/
│   ├── Navigation.css
│   ├── Hero.css
│   ├── About.css
│   ├── MenuPreview.css
│   ├── Footer.css
│   ├── Menu.css
│   └── AboutUs.css
├── App.tsx              # Main app component with routing
├── App.css              # Global app styles
└── index.css            # Global base styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Restaurant Information

**Mings Chinese Restaurant**
- Address: 2653 Pleasant Hill Rd, Pleasant Hill, CA 94523
- Phone: (925) 934-9393
- Hours: Wednesday - Sunday, 11:30am - 3:00pm & 4pm - 9pm
- Closed: Monday - Tuesday

## Technology Stack

- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **CSS3**: Styling with modern CSS features

## Pages

1. **Home**: Welcome section with restaurant introduction and menu preview
2. **Menu**: Full menu with categorized dishes and prices
3. **About Us**: Restaurant story, philosophy, and contact information

## License

This is a replica project created for demonstration purposes.
