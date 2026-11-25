# HackKshetra 2.0 - Developer Handover Guide

## Welcome to the HackKshetra Project

This guide will help you understand, navigate, and safely modify the HackKshetra hackathon website. This is a React-based single-page application with 3D visual effects and no backend.

---

## Quick Start

### Prerequisites

- Node.js 18 or newer
- npm (comes with Node.js)
- A code editor (VS Code recommended)

### Setup Instructions

1. **Navigate to project directory**:
   ```bash
   cd HackKshetra-2.0-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

4. **Open browser**:
   - The app will open automatically at http://localhost:3000
   - Or manually navigate to http://localhost:3000

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## Project Structure Overview

```
HackKshetra-2.0-main/
├── public/              # Static assets (HTML, images, 3D models)
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── sections/    # Page sections (Hero, Skills, etc.)
│   │   ├── cards/       # Reusable cards
│   │   ├── canvas/      # 3D components (Stars, Earth)
│   │   └── HeroBgAnimation/
│   ├── data/
│   │   └── constants.js # ALL event data lives here
│   ├── images/          # Image assets (44 files)
│   ├── utils/           # Utilities (Themes, motion)
│   ├── App.js           # Main app component
│   ├── index.js         # React entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies
└── README.md            # Basic setup instructions
```

---

## Key Files to Know

### Most Important Files

1. **`src/data/constants.js`** - This is where ALL event data lives
   - Edition information
   - Registration link
   - Track information
   - Timeline dates
   - Prize information
   - Sponsor information
   - Coordinator information
   - Social media links
   - **When updating for new edition, start here**

2. **`src/App.js`** - Main application structure
   - Defines page layout
   - Order of sections
   - Theme provider
   - Router setup

3. **`src/components/sections/Hero.jsx`** - Landing page
   - Edition number (line 264)
   - Registration button
   - Hero image

4. **`src/components/sections/Footer.jsx`** - Footer
   - Year and edition (lines 87, 99)
   - Social media links

5. **`src/utils/Themes.js`** - Color scheme
   - Primary color: #854CE6 (purple)
   - Background: #090917 (dark)
   - Text colors

### Component Files

- **`src/components/Navbar.jsx`** - Navigation bar
- **`src/components/sections/Skills.jsx`** - Tracks section
- **`src/components/sections/Experience.jsx`** - Timeline section
- **`src/components/sections/Projects.jsx`** - Contributors section
- **`src/components/sections/Education.jsx`** - Prizes section
- **`src/components/sections/Contact.jsx`** - Contact form

### 3D Components

- **`src/components/canvas/NetworkEnvironment.jsx`** - Cursor-responsive neural network, data pulses, and server structures
- **`src/components/canvas/DefenseShield.jsx`** - Interactive 3D shield simulation in the hero
- **`src/components/canvas/Earth.jsx`** - 3D Earth globe

---

## How to Make Common Changes

### Updating Event Information

**Location**: `src/data/constants.js`

**What to Change**:
```javascript
export const Bio = {
  name: "", // Event name
  roles: [
    "DREAM IN CODE",
    "LET INTELLIGENCE UNLOAD",
    "Hack. Learn. Lead.",
  ],
  description: "Event description here...",
  github: "/idea_template.pptx", // Idea template download
  resume: "https://forms.gle/YOUR_FORM_URL", // Registration link
  linkedin: "https://linkedin.com/...",
  insta: "https://instagram.com/...",
};
```

### Updating Timeline Dates

**Location**: `src/data/constants.js` (experiences array)

**What to Change**:
```javascript
export const experiences = [
  {
    id: 0,
    img: registration,
    role: "Registration Starts",
    company: "Oct 23, 2025", // Update this date
  },
  {
    id: 1,
    img: idea,
    role: "Idea Submission Deadline",
    company: "Nov 03, 2025", // Update this date
  },
  // ... more events
];
```

### Updating Prize Information

**Location**: `src/data/constants.js` (education array)

**What to Change**:
```javascript
export const education = [
  {
    id: 0,
    title: "1st Prize",
    amount: "₹10,000", // Update amount
    image: firstImage,
    description: "Cash Prize + T-shirts + Goodies + Participation Certificate",
  },
  // ... more prizes
];
```

### Updating Sponsors

**Location**: `src/data/constants.js` (projects array, category: "sponsors")

**What to Change**:
```javascript
export const projects = [
  {
    id: 1,
    image: digitoad,
    category: "sponsors",
    link: "https://www.example.com/", // Update link
  },
  // ... more sponsors
];
```

### Updating Coordinators

**Location**: `src/data/constants.js` (projects array, category: "web app")

**What to Change**:
```javascript
export const projects = [
  {
    id: 8,
    image: "https://example.com/photo.jpg", // OR local import
    title: "Dr. Name",
    category: "web app",
  },
  // ... more coordinators
];
```

**IMPORTANT**: Currently using external VVCE URLs. **Download images locally** and use local imports instead.

### Updating Edition Number and Year

**Location**: Multiple files

**Files to Update**:
1. `src/components/sections/Hero.jsx` (line 264) - Change "2.0" to new edition
2. `src/components/sections/Footer.jsx` (lines 87, 99) - Change year and edition

### Updating Contact Form Configuration

**Location**: `src/components/sections/Contact.jsx` (lines 134-138)

**What to Change**:
```javascript
emailjs.sendForm(
  "service_YOUR_SERVICE_ID",    // Update if changed
  "template_YOUR_TEMPLATE_ID",  // Update if changed
  form.current,
  "YOUR_PUBLIC_KEY"             // Update if changed
)
```

**IMPORTANT**: Test form submission after changing.

---

## Adding New Images

### Step 1: Add Image File

1. Place new image in `src/images/` directory
2. Use descriptive name (e.g., `new-sponsor.png`)
3. Optimize image size (< 500KB recommended)

### Step 2: Import in constants.js

```javascript
import newImage from "../images/new-sponsor.png";
```

### Step 3: Use in Data

```javascript
export const projects = [
  {
    id: 99,
    image: newImage,
    category: "sponsors",
    link: "https://example.com",
  },
];
```

---

## Understanding the Styling System

### Styled Components

This project uses styled-components for styling. Styles are defined within component files.

**Example**:
```javascript
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
`;
```

### Theme Access

Components access theme colors via props.theme:

```javascript
color: ${({ theme }) => theme.primary};  // #854CE6
background: ${({ theme }) => theme.bg};   // #090917
```

### Theme Colors

Available in `src/utils/Themes.js`:
- `theme.bg` - Main background (#090917)
- `theme.primary` - Primary accent (#854CE6)
- `theme.text_primary` - Primary text (#F2F3F4)
- `theme.text_secondary` - Secondary text (#b1b2b3)
- `theme.card` - Card background (#171721)

### Responsive Design

Media queries are used for responsive layouts:

```javascript
const Title = styled.div`
  font-size: 52px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
```

**Common Breakpoints**:
- Desktop: > 960px
- Tablet: 768px - 960px
- Mobile: < 768px

---

## Understanding 3D Components

### Neural Network Environment

**Location**: `src/components/canvas/NetworkEnvironment.jsx`

**What it does**: Renders a procedural 3D network with data pulses, server structures, and cursor-responsive lighting.

**How to modify**:
- Adjust desktop and mobile node counts in `NetworkScene`
- Tune edge density and connection lengths in `createNetwork`
- Tune pulse speed in `DataPulse`
- Keep reduced-motion and CSS fallback behavior intact

### Earth Component

**Location**: `src/components/canvas/Earth.jsx`

**What it does**: Renders 3D Earth model from `public/planet/scene.gltf`

**How to modify**:
- Change model: Replace `public/planet/scene.gltf`
- Change scale: Modify `scale={3}`
- Change camera position: Modify `position={[-4, 3, 6]}`

**IMPORTANT**: 3D models require WebGL support. Add error handling if models fail to load.

---

## Common Tasks

### Adding a New Section

1. Create new component in `src/components/sections/`
2. Import component in `src/App.js`
3. Add component to App.js render
4. Add navigation link in `src/components/Navbar.jsx`
5. Add anchor ID to section

### Modifying Text

**Simple text changes**: Edit directly in component files or constants.js

**Example**:
```javascript
// In Skills.jsx
<Title>Tracks</Title>  // Change to "Problem Statements"
```

### Changing Colors

**Location**: `src/utils/Themes.js`

**Example**:
```javascript
export const darkTheme = {
  primary: "#854CE6",  // Change this color
  // ...
};
```

**WARNING**: Changing primary color will affect entire site. Test thoroughly.

### Adding New Animation

**Location**: `src/utils/motion.js`

**Example**:
```javascript
export const myAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};
```

Use in component:
```javascript
import { myAnimation } from "../../utils/motion";

<motion.div {...myAnimation}>
  Content
</motion.div>
```

---

## Testing Your Changes

### Local Testing

1. **Start dev server**: `npm start`
2. **Open browser**: http://localhost:3000
3. **Test changes**:
   - Navigate to modified section
   - Test on different screen sizes (use browser dev tools)
   - Test on mobile if possible
4. **Check console** for errors

### Testing Specific Features

**Registration Link**:
- Click "Register Now" button
- Verify Google Forms opens
- Verify form is accessible

**Contact Form**:
- Fill out contact form
- Click "Send"
- Verify success alert
- Check email received

**External Links**:
- Click all sponsor links
- Verify they open correctly
- Verify URLs are correct

**Images**:
- Check all images load
- Check for broken images
- Check image sizes are appropriate

**3D Components**:
- Check neural network and hero shield render
- Check the shield simulation control with mouse and keyboard
- Check reduced-motion and WebGL fallback behavior
- Check Earth globe renders
- Check animations work
- Check on different devices

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (if available)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Build and Deployment

### Building for Production

```bash
npm run build
```

This creates a `build/` directory with optimized files.

### Testing Production Build

```bash
# Install serve (if not installed)
npm install -g serve

# Serve production build
serve -s build
```

Navigate to http://localhost:3000 to test production build.

### Deployment

The `build/` directory can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

**No server-side runtime required** - just upload the `build/` directory contents.

---

## Common Issues and Solutions

### Issue: Images Not Loading

**Possible Causes**:
- Wrong file path
- File not in `src/images/`
- Case sensitivity in file name

**Solution**:
- Check file path in import
- Verify file exists in correct location
- Check file name case (case-sensitive)

### Issue: 3D Model Not Loading

**Possible Causes**:
- WebGL not supported
- Model file missing
- Model file corrupted

**Solution**:
- Check browser supports WebGL
- Verify `public/planet/scene.gltf` exists
- Check console for errors
- Add error handling

### Issue: Contact Form Not Working

**Possible Causes**:
- EmailJS credentials incorrect
- EmailJS service inactive
- Network issues

**Solution**:
- Verify EmailJS configuration
- Test EmailJS service status
- Check console for errors
- Verify internet connection

### Issue: Styles Not Applying

**Possible Causes**:
- Theme not imported
- Styled component not used
- CSS not imported

**Solution**:
- Check theme imported in App.js
- Verify styled component used
- Check index.css imported in index.js

### Issue: Port Already in Use

**Error**: "Port 3000 is already in use"

**Solution**:
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use different port
PORT=3001 npm start
```

### Issue: Dependencies Not Installing

**Error**: "npm install fails"

**Solution**:
```bash
# Clear cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

## Best Practices

### When Making Changes

1. **Backup First**: Always backup before major changes
2. **Test Locally**: Test thoroughly before deploying
3. **Small Changes**: Make small, incremental changes
4. **Test After Each Change**: Verify each change works
5. **Check Mobile**: Test on mobile devices
6. **Check Console**: Look for errors in browser console

### Code Style

1. **Consistent Naming**: Use consistent naming conventions
2. **Descriptive Names**: Use descriptive variable and function names
3. **Comments**: Add comments for complex logic
4. **Clean Code**: Keep code clean and readable
5. **Remove Unused Code**: Remove unused imports and variables

### Performance

1. **Optimize Images**: Keep images under 500KB
2. **Lazy Loading**: Consider lazy loading for below-fold content
3. **Minimize Re-renders**: Avoid unnecessary component re-renders
4. **Test Performance**: Test on slow connections

### Security

1. **No Secrets**: Don't commit secrets or API keys
2. **Validate Inputs**: Validate form inputs
3. **External Links**: Verify external links are safe
4. **Update Dependencies**: Keep dependencies updated

---

## Important Notes

### External Dependencies

1. **EmailJS**: Contact form depends on EmailJS service
2. **Google Forms**: Registration handled by Google Forms
3. **VVCE Images**: Coordinator images are from VVCE website (should be downloaded locally)

### No Backend

This is a frontend-only application:
- No database
- No server
- No API endpoints
- All data is in constants.js

### No Version Control

This repository is not a Git repository (downloaded as ZIP):
- No git history
- No branches
- No pull requests
- Consider initializing Git if you want version control

### Performance Considerations

- Large images (some > 1MB) - should be optimized
- 3D libraries add to bundle size
- No lazy loading implemented
- Consider optimizing for production

---

## Getting Help

### Documentation

- `README.md` - Basic setup instructions
- `docs/project-analysis/` - Detailed analysis documents

### External Resources

- React: https://react.dev/
- Styled Components: https://styled-components.com/
- Three.js: https://threejs.org/
- Framer Motion: https://www.framer.com/motion/
- EmailJS: https://www.emailjs.com/

### Common Issues

Search for solutions:
- Stack Overflow
- GitHub Issues
- React documentation
- Library documentation

---

## Quick Reference

### File Locations

| Purpose | File |
|---------|------|
| Event Data | `src/data/constants.js` |
| Main App | `src/App.js` |
| Styling | `src/utils/Themes.js` |
| Global CSS | `src/index.css` |
| Hero Section | `src/components/sections/Hero.jsx` |
| Tracks | `src/components/sections/Skills.jsx` |
| Timeline | `src/components/sections/Experience.jsx` |
| Contributors | `src/components/sections/Projects.jsx` |
| Prizes | `src/components/sections/Education.jsx` |
| Contact | `src/components/sections/Contact.jsx` |
| Footer | `src/components/sections/Footer.jsx` |
| Navbar | `src/components/Navbar.jsx` |

### Common Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests (no tests configured) |
| `npm install` | Install dependencies |

### Key Colors

| Purpose | Color |
|---------|-------|
| Primary | #854CE6 (purple) |
| Background | #090917 (dark) |
| Text | #F2F3F4 (white) |
| Secondary Text | #b1b2b3 (gray) |

---

## Checklist for New Edition

Before launching the new edition:

- [ ] Update edition number and year
- [ ] Update registration link
- [ ] Update all timeline dates
- [ ] Update prize information
- [ ] Update track information
- [ ] Update sponsor information
- [ ] Update coordinator information
- [ ] Download coordinator images locally
- [ ] Update social media links
- [ ] Replace hero image
- [ ] Update glimpses section
- [ ] Test all external links
- [ ] Test contact form
- [ ] Test registration link
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Check for broken images
- [ ] Optimize images
- [ ] Build production version
- [ ] Test production build

---

## Conclusion

This project is a well-structured React application with clear separation of concerns. The most important file to understand is `src/data/constants.js` as it contains all event information. When making changes, always test locally first and backup before major changes.

Good luck with your development!
