# HackKshetra 2.0 - Project Overview

## Purpose

HackKshetra 2.0 is a 24-hour national-level hackathon website designed to promote innovation in Artificial Intelligence and Machine Learning. The website serves as an informational and promotional platform for the hackathon event, providing details about tracks, timeline, prizes, sponsors, organizers, and registration information.

## Current Edition

- **Edition**: HackKshetra 2.0
- **Year**: 2025
- **Event Type**: 24-hour National Level Hackathon
- **Focus**: Artificial Intelligence and Machine Learning

## Technology Stack

### Frontend Framework
- **React**: 18.2.0
- **React Router DOM**: 6.22.1 (for navigation structure, though primarily single-page scrolling)

### Styling
- **Styled Components**: 6.1.8 (CSS-in-JS)
- **Custom theme system**: Located in `src/utils/Themes.js`

### Animations and Visual Effects
- **Framer Motion**: 11.0.5 (page animations, transitions)
- **Three.js**: 0.161.0 (3D graphics)
- **@react-three/fiber**: 8.15.16 (React renderer for Three.js)
- **@react-three/drei**: 9.99.0 (Three.js helpers and abstractions)
- **React Tilt**: 1.0.2 (3D tilt effect on cards)
- **Typewriter Effect**: 2.21.0 (animated text in hero section)
- **React Vertical Timeline Component**: 3.6.0 (timeline visualization)

### Icons and UI Components
- **Material UI Icons**: 5.15.10 (@mui/icons-material)
- **React Icons**: 5.0.1

### External Services
- **EmailJS**: 4.0.3 (contact form submissions)
- **Google Forms**: Registration platform (external redirect)

### Build Tools
- **React Scripts**: 5.0.1 (Create React App)
- **Package Manager**: npm

## Architecture Type

**Frontend-Only Single-Page Application (SPA)**

The website is a purely client-side application with:
- No backend server
- No database
- No API endpoints
- No server-side rendering
- No authentication system

All data is hardcoded in JavaScript files, primarily in `src/data/constants.js`.

## Current Functionality

### Implemented Features

1. **Hero Section**: Landing page with animated text, 3D star background, event description, and registration CTA
2. **Tracks Section**: Four AI-focused hackathon tracks (Agriculture, Education, Healthcare, IoT) with modal descriptions
3. **Timeline Section**: Vertical timeline showing event schedule from registration to hackathon conclusion
4. **Contributors Section**: Displays faculty coordinators, patron, convenor, and perks with toggle-based filtering
5. **Sponsors Section**: Logo display for event sponsors with links to their websites
6. **Association Section**: Display of partner organizations
7. **Prizes Section**: Prize pool information with amounts and included benefits
8. **Glimpses Section**: Expandable section showing photos from previous edition
9. **Contact Form**: Email submission form using EmailJS service
10. **Footer**: Social media links (LinkedIn, Instagram) and copyright information
11. **Navigation**: Sticky navbar with smooth-scroll links and mobile-responsive hamburger menu
12. **3D Visual Effects**: Animated star field background and rotating 3D Earth globe
13. **Responsive Design**: Mobile, tablet, and desktop layouts

### Data Management

All event data is stored in:
- **Primary location**: `src/data/constants.js`
- **Assets**: `src/images/` directory (44 image files)
- **3D Models**: `public/planet/` directory (Earth 3D model in .gltf format)

### Registration Workflow

**External Redirect Pattern**:
1. User clicks "Register Now" button in Hero section
2. Redirects to Google Forms URL: `https://forms.gle/KCSfSRTRjhxGANhV9`
3. Registration handled entirely by Google Forms (not part of this codebase)
4. No data stored in the website

### Contact Workflow

**EmailJS Integration**:
1. User fills contact form (email, name, subject, message)
2. Form submission handled by EmailJS service
3. Configuration in `src/components/sections/Contact.jsx`:
   - Service ID: `service_cku2fro`
   - Template ID: `template_fvozc75`
   - Public Key: `JsSFctxqulb_K6QQw`
4. Emails sent directly from browser to EmailJS servers
5. No backend involved

## Page Structure

The website uses a **single-page scrolling architecture**:

1. **Navbar** (sticky)
2. **Hero** (#About)
3. **Tracks** (#Skills)
4. **Timeline** (#Experience)
5. **Contributors** (#Projects)
6. **Prizes** (#Education)
7. **Contact** (#Contact)
8. **Footer**

## Design System

- **Primary Color**: Purple (#854CE6)
- **Background**: Dark (#090917)
- **Typography**: Poppins (Google Fonts)
- **Theme**: Dark mode only (light theme defined but not used)
- **Visual Style**: Modern, tech-focused with gradients and glass-morphism effects

## Key Dependencies and Their Purposes

| Library | Purpose | Usage Location |
|---------|---------|----------------|
| styled-components | CSS-in-JS styling | All components |
| framer-motion | Animations | Hero section, transitions |
| three.js | 3D graphics | Stars, Earth canvas |
| @react-three/fiber | React Three.js renderer | Canvas components |
| @react-three/drei | Three.js helpers | Preload, OrbitControls |
| emailjs | Contact form | Contact section |
| react-tilt | 3D card tilt effect | Skills, Education cards |
| typewriter-effect | Animated text | Hero section |
| react-vertical-timeline-component | Timeline display | Experience section |
| react-scroll | Smooth scrolling | Navigation links |

## Deployment Requirements

### Build Command
```bash
npm run build
```

### Development Command
```bash
npm start
```

### Output
- Production build generated in `build/` directory
- Static files ready for any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

### Environment Variables
No environment variables required for basic functionality.
EmailJS configuration is hardcoded in Contact.jsx (public key only).

## File Structure Summary

```
HackKshetra-2.0-main/
├── public/              # Static assets and HTML template
│   ├── index.html       # HTML entry point
│   ├── planet/          # 3D Earth model
│   └── *.jpg/.png       # Static images
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── sections/    # Page sections
│   │   ├── cards/       # Reusable cards
│   │   ├── canvas/      # 3D components
│   │   └── HeroBgAnimation/
│   ├── data/
│   │   └── constants.js # All event data
│   ├── images/          # Image assets (44 files)
│   ├── utils/           # Utilities
│   │   ├── Themes.js    # Color/theme definitions
│   │   └── motion.js    # Animation presets
│   ├── App.js           # Main app component
│   ├── index.js         # React entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies
└── README.md            # Setup instructions
```

## Major Architectural Decisions

1. **Frontend-Only Approach**: Simplified deployment, no server costs, easy maintenance
2. **Single-Page Design**: Smooth user experience, minimal page loads
3. **Hardcoded Data**: Simple updates without database changes
4. **External Registration**: Leverages Google Forms for registration handling
5. **EmailJS for Contact**: Avoids backend setup for simple contact functionality
6. **3D Visual Effects**: Enhanced visual appeal using Three.js
7. **Styled Components**: Component-scoped styling, theme support

## Current Limitations

1. **No Admin Dashboard**: No interface for organizers to manage content
2. **No Database**: All changes require code deployment
3. **No Authentication**: No user accounts or login system
4. **Hardcoded Dates**: Event dates embedded in code, require rebuild to change
5. **External Dependencies**: Registration and contact depend on third-party services
6. **No CMS**: Content updates require developer intervention
7. **No Analytics**: No built-in visitor tracking or metrics
8. **No SEO Optimization**: Basic meta tags only, limited SEO capabilities

## Security Considerations

- EmailJS public key is exposed (intended design, not a security issue)
- No sensitive data stored in codebase
- No server-side vulnerabilities (no server)
- Google Forms handles registration data securely
- Contact form submissions go through EmailJS (secure, rate-limited)

## Performance Considerations

- Large image assets (some > 1MB each)
- 3D rendering may impact performance on older devices
- No lazy loading implemented for images
- No code splitting (single bundle)
- Framer Motion animations may affect low-end devices

## Browser Compatibility

Modern browsers with WebGL support required for 3D effects:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers with WebGL support

## Development Environment

- **Node.js**: Recommended version 18 or newer
- **npm**: Default package manager
- **Git**: Not initialized in this repository (downloaded as ZIP)

## Notes

- Repository is not a Git repository (no .git folder)
- This appears to be a downloaded ZIP extraction
- No version control history available
- No CI/CD pipeline configured
- No testing infrastructure (tests defined in package.json but no test files found)
