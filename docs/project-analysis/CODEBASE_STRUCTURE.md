# HackKshetra 2.0 - Codebase Structure

## Directory Tree

```
HackKshetra-2.0-main/
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Dependency lockfile
├── README.md                     # Setup instructions
├── public/                       # Static assets
│   ├── index.html               # HTML entry point
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # SEO robots file
│   ├── HK.jpg                   # Favicon/icon
│   ├── HK1.jpg                  # Additional icon
│   ├── idea_template.pptx       # Downloadable idea template
│   ├── index_demo.html          # Demo page (unused)
│   └── planet/                  # 3D Earth model
│       ├── scene.gltf           # 3D model file
│       ├── scene.bin            # Binary model data
│       ├── license.txt          # Model license
│       └── textures/            # Model textures
├── src/
│   ├── App.js                   # Main application component
│   ├── index.js                 # React entry point
│   ├── index.css                # Global CSS
│   ├── components/              # React components
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── HeroBgAnimation/     # Hero background animation
│   │   │   ├── index.js         # SVG animation component
│   │   │   └── HeroBgAnimationStyle.js
│   │   ├── canvas/              # 3D canvas components
│   │   │   ├── NetworkEnvironment.jsx # Interactive neural network background
│   │   │   ├── DefenseShield.jsx # Interactive 3D hero shield
│   │   │   └── Earth.jsx        # 3D Earth globe
│   │   ├── cards/               # Reusable card components
│   │   │   ├── EducationCard.jsx  # Prize/education card
│   │   │   ├── ExperienceCard.jsx # Timeline card
│   │   │   └── ProjectCard.jsx   # Sponsor/person card
│   │   └── sections/            # Page sections
│   │       ├── Hero.jsx         # Landing page section
│   │       ├── Skills.jsx       # Tracks section
│   │       ├── Experience.jsx   # Timeline section
│   │       ├── Projects.jsx     # Contributors/Sponsors section
│   │       ├── Education.jsx    # Prizes section
│   │       ├── Contact.jsx      # Contact form section
│   │       └── Footer.jsx       # Footer section
│   ├── data/                    # Data and constants
│   │   └── constants.js         # All event data
│   ├── images/                  # Image assets (44 files)
│   │   ├── HeroImage.jpg        # Hero section image
│   │   ├── AI_Agri.png          # Agriculture track image
│   │   ├── AI_Education.png     # Education track image
│   │   ├── AI_Health.png        # Healthcare track image
│   │   ├── AI_IOT.png           # IoT track image
│   │   ├── *.jpg/*.png          # Sponsor, coordinator, and UI images
│   │   └── README.md            # Image documentation
│   └── utils/                   # Utility functions
│       ├── Themes.js            # Theme definitions
│       └── motion.js            # Animation presets
└── docs/                        # Documentation (created during analysis)
    └── project-analysis/
        └── *.md                 # Analysis documents
```

## Important Files and Their Purposes

### Root Level

#### `package.json`
**Purpose**: Defines project dependencies, scripts, and metadata

**Key Information**:
- Project name: "3d-portfolio-website" (mismatched with actual purpose)
- React 18.2.0
- Build scripts: start, build, test, eject
- All dependencies listed in PROJECT_OVERVIEW.md

**Dependencies**:
- UI libraries: @mui/material, @mui/icons-material, @mui/lab
- 3D libraries: three.js, @react-three/fiber, @react-three/drei
- Animation: framer-motion, typewriter-effect
- Styling: styled-components, @emotion/react, @emotion/styled
- Utilities: react-scroll, react-tilt, react-vertical-timeline-component
- External services: @emailjs/browser, emailjs

**Used By**: npm for installation and build process

**Controls Content**: No - this is configuration only

**Update Required for New Edition**: Yes - dependency updates may be needed

#### `README.md`
**Purpose**: Setup and installation instructions

**Content**:
- Download instructions (Git clone or ZIP)
- Requirements (Node.js 18+, npm)
- Installation steps
- Development server startup
- Production build commands
- Basic project structure

**Used By**: Developers setting up the project

**Controls Content**: No - documentation only

**Update Required for New Edition**: No

#### `.gitignore`
**Purpose**: Specifies files to exclude from Git

**Excludes**:
- node_modules/
- build/
- .env files
- Coverage reports
- OS files (.DS_Store)
- Log files

**Used By**: Git version control

**Controls Content**: No

**Update Required for New Edition**: No

### Public Directory

#### `public/index.html`
**Purpose**: HTML entry point for React application

**Content**:
- Meta tags (viewport, theme-color, description)
- Favicon links (HK.jpg)
- PWA manifest link
- Title: "Hack Kshetra"
- Root div for React mounting
- Description: "24 hours National Level Hackathon"

**Used By**: React index.js as mounting point

**Controls Content**: Yes - page title, meta description, favicon

**Update Required for New Edition**: Yes - description, possibly title

#### `public/planet/`
**Purpose**: 3D Earth model for Timeline section

**Files**:
- scene.gltf: 3D model in GLTF format
- scene.bin: Binary geometry data
- textures/: Texture maps for the model
- license.txt: Model usage license

**Used By**: src/components/canvas/Earth.jsx

**Controls Content**: Yes - 3D globe visualization

**Update Required for New Edition**: No (unless different visual desired)

#### `public/idea_template.pptx`
**Purpose**: Downloadable idea submission template

**Used By**: Navbar "Idea Template" button and Hero section

**Controls Content**: Yes - downloadable resource

**Update Required for New Edition**: Yes - template content

### Source Directory

#### `src/index.js`
**Purpose**: React application entry point

**Content**:
- Imports React, ReactDOM
- Imports index.css
- Mounts App component to #root div
- Wraps in React.StrictMode

**Used By**: React build system

**Controls Content**: No - bootstrap only

**Update Required for New Edition**: No

#### `src/App.js`
**Purpose**: Main application component - defines page structure

**Content**:
- Imports all sections and components
- Sets up ThemeProvider with darkTheme
- Configures BrowserRouter
- Defines Body and Wrapper styled components with gradient backgrounds
- Renders components in order: Navbar, NetworkEnvironment, routed page, Footer

**Used By**: index.js as root component

**Controls Content**: Yes - overall page layout, section order, visual wrapper styles

**Update Required for New Edition**: Possibly - if new sections needed

**Dependencies**:
- Navbar, Hero, Skills, Experience, Projects, Education, Contact, Footer
- NetworkEnvironment (3D neural network)
- ThemeProvider, BrowserRouter
- All section components

#### `src/index.css`
**Purpose**: Global CSS styles

**Content**:
- Imports Poppins font from Google Fonts
- Global box-sizing, margin, padding reset
- Scroll behavior: smooth
- Font family: Poppins (global), Montserrat (body)
- Custom scrollbar styling (dark theme)
- Webkit backdrop filter

**Used By**: All components via React import

**Controls Content**: Yes - global typography, scroll behavior, scrollbar appearance

**Update Required for New Edition**: No (unless font changes desired)

#### `src/data/constants.js`
**Purpose**: Central data store for all event information

**Content**:
- Image imports (44 images)
- Bio object: event name, roles, description, social links, registration URL
- skills array: 4 hackathon tracks with images
- experiences array: 5 timeline events with dates and images
- education array: 2 prize entries with amounts and descriptions
- projects array: sponsors, associations, coordinators, patrons, perks

**Used By**: All sections that display event data

**Controls Content**: YES - ALL event-specific content lives here

**Update Required for New Edition**: HIGH PRIORITY - This is the primary file for edition updates

**Dependents**:
- Hero.jsx (Bio)
- Skills.jsx (skills)
- Experience.jsx (experiences)
- Projects.jsx (projects)
- Education.jsx (education)
- Navbar.jsx (Bio)
- Footer.jsx (Bio)
- Contact.jsx (none, but could use contact info)

### Components Directory

#### `src/components/Navbar.jsx`
**Purpose**: Navigation bar with smooth-scroll links

**Content**:
- Sticky navbar with logo "Hack Kshetra"
- Desktop navigation links: About, Tracks, Timeline, Contributors, Prizes
- Mobile hamburger menu with slide-down navigation
- "Idea Template" button linking to /idea_template.pptx
- Styled components for responsive design

**Used By**: App.js

**Controls Content**: Yes - navigation labels, link destinations, button text

**Update Required for New Edition**: Yes - section names, links

**Dependencies**:
- Bio from constants.js (for Idea Template link)
- @mui/icons-material (MenuRounded)
- react-router-dom (LinkR)
- styled-components

#### `src/components/sections/Hero.jsx`
**Purpose**: Landing page hero section

**Content**:
- Animated title: "HACK KSHETRA 2.0"
- Typewriter effect cycling through roles: "DREAM IN CODE", "LET INTELLIGENCE UNLOAD", "Hack. Learn. Lead."
- Event description from Bio.description
- "Register Now" button linking to Google Forms
- Hero image with tilt effect
- 3D star background canvas
- SVG background animation
- Framer Motion animations for entrance effects

**Used By**: App.js

**Controls Content**: Yes - hero title, description, CTA button, hero image

**Update Required for New Edition**: HIGH PRIORITY - edition number, description, registration link, hero image

**Dependencies**:
- Bio from constants.js
- HeroImg from images
- Typewriter effect
- Framer Motion (animations)
- React Tilt (image tilt)
- DefenseShield, HeroBgAnimation

#### `src/components/sections/Skills.jsx`
**Purpose**: Display hackathon tracks with modal descriptions

**Content**:
- 4 track cards: AI For Agriculture, AI For Education, AI For Healthcare, AI For IOT
- Track images with tilt effect
- Click-to-open modal with track description
- Hardcoded track descriptions in component
- Responsive grid layout

**Used By**: App.js

**Controls Content**: Yes - track titles, images, descriptions

**Update Required for New Edition**: Yes - track titles, images, descriptions

**Dependencies**:
- skills from constants.js
- React Tilt
- styled-components

#### `src/components/sections/Experience.jsx`
**Purpose**: Vertical timeline of event schedule

**Content**:
- Vertical timeline showing 5 events:
  1. Registration Starts - Oct 23, 2025
  2. Idea Submission Deadline - Nov 03, 2025
  3. Shortlist Announcement - Nov 05, 2025
  4. Hackathon Begins - Nov 14, 2025, 9:00 AM
  5. Hackathon Ends - Nov 15, 2025, 10:30 AM
- 3D rotating Earth canvas at bottom
- Uses react-vertical-timeline-component

**Used By**: App.js

**Controls Content**: No - data from constants.js

**Update Required for New Edition**: HIGH PRIORITY - all dates in constants.js

**Dependencies**:
- experiences from constants.js
- ExperienceCard component
- EarthCanvas component
- react-vertical-timeline-component

#### `src/components/sections/Projects.jsx`
**Purpose**: Display contributors, sponsors, and associations

**Content**:
- Toggle buttons for categories: Faculty Coordinators, Patron, Convenor, Perks
- Faculty coordinators (web app category)
- Patron section
- Convenor section
- Perks section (text-only cards)
- Sponsors section (with links)
- Association section (partner organizations)
- Filtered display based on toggle state

**Used By**: App.js

**Controls Content**: No - data from constants.js

**Update Required for New Edition**: HIGH PRIORITY - all coordinator images, names, sponsors, associations

**Dependencies**:
- projects from constants.js
- ProjectCard component
- styled-components

#### `src/components/sections/Education.jsx`
**Purpose**: Display prize information and event glimpses

**Content**:
- 2 prize cards:
  1. 1st Prize - ₹10,000 + T-shirts + Goodies + Certificate
  2. 2nd Prize - ₹7,000 + T-shirts + Goodies + Certificate
- Prize images with tilt effect
- "Click to see Glimpses of HackKshetra" button
- Expandable glimpse section with image and description of previous event

**Used By**: App.js

**Controls Content**: No - data from constants.js (except glimpse description is hardcoded)

**Update Required for New Edition**: HIGH PRIORITY - prize amounts, descriptions, images, glimpse content

**Dependencies**:
- education from constants.js
- glimpseImg from images
- React Tilt
- styled-components

#### `src/components/sections/Contact.jsx`
**Purpose**: Contact form for queries and sponsorship inquiries

**Content**:
- Contact form with fields: Email, Name, Subject, Message
- EmailJS integration for form submission
- Service ID: service_cku2fro
- Template ID: template_fvozc75
- Public Key: JsSFctxqulb_K6QQw
- Success/error alerts
- Form reset after submission

**Used By**: App.js

**Controls Content**: Yes - EmailJS configuration, form labels

**Update Required for New Edition**: Possibly - EmailJS configuration if recipient changes

**Dependencies**:
- @emailjs/browser
- styled-components

#### `src/components/sections/Footer.jsx`
**Purpose**: Footer with social links and copyright

**Content**:
- Logo: "Hack Kshetra 2.0 2025 !"
- Social media icons: LinkedIn, Instagram
- Links from Bio.linkedin and Bio.insta
- Copyright: "© 2025 Hack Kshetra 2.0. All rights reserved."

**Used By**: App.js

**Controls Content**: Yes - logo text, year, social links

**Update Required for New Edition**: Yes - year, social links

**Dependencies**:
- Bio from constants.js
- @mui/icons-material (LinkedIn, Instagram)
- styled-components

### Cards Directory

#### `src/components/cards/ExperienceCard.jsx`
**Purpose**: Individual timeline event card

**Content**:
- VerticalTimelineElement wrapper
- Event icon, image, role, company, date
- Description and skills display
- Styled for dark theme

**Used By**: Experience.jsx

**Controls Content**: No - data passed as props

**Update Required for New Edition**: No

**Dependencies**:
- react-vertical-timeline-component
- styled-components

#### `src/components/cards/ProjectCard.jsx`
**Purpose**: Generic card for sponsors, coordinators, perks

**Content**:
- Image display (square or rectangular)
- Title display
- Click handler to open external links
- Hover effects
- Responsive sizing

**Used By**: Projects.jsx

**Controls Content**: No - data passed as props

**Update Required for New Edition**: No

**Dependencies**:
- styled-components

#### `src/components/cards/EducationCard.jsx`
**Purpose**: Individual prize/education card

**Content**:
- VerticalTimelineElement wrapper
- School, degree, date, grade, description
- Currently unused (Education.jsx uses custom Prize component)

**Used By**: Not currently used

**Controls Content**: No

**Update Required for New Edition**: No

**Dependencies**:
- react-vertical-timeline-component
- styled-components

### Canvas Directory

#### `src/components/canvas/NetworkEnvironment.jsx`
**Purpose**: Full-screen interactive 3D neural-network environment

**Content**:
- Procedural network nodes, connected edges, and moving data pulses
- Cursor-responsive lighting and parallax rotation
- Low-power render settings and reduced-motion support
- Positioned behind route content, with a CSS fallback surface

**Used By**: App.js

#### `src/components/canvas/DefenseShield.jsx`
**Purpose**: Interactive 3D shield visualization in the home-page hero

**Content**:
- Procedural shield geometry and holographic orbital rings
- Responds to the hero's shield-simulation control

**Used By**: Hero.jsx

**Dependencies**:
- @react-three/fiber
- @react-three/drei
- maath/random
- three.js

#### `src/components/canvas/Earth.jsx`
**Purpose**: 3D rotating Earth globe

**Content**:
- Loads 3D model from ./planet/scene.gltf
- OrbitControls with auto-rotate
- Camera positioned at [-4, 3, 6]
- Scale: 3x
- No zoom enabled
- Polar angle locked for side view

**Used By**: Experience.jsx

**Controls Content**: Yes - model, scale, rotation speed

**Update Required for New Edition**: No

**Dependencies**:
- @react-three/fiber
- @react-three/drei
- three.js

### HeroBgAnimation Directory

#### `src/components/HeroBgAnimation/index.js`
**Purpose**: SVG background animation for hero section

**Content**:
- Large SVG with animated particles moving along paths
- Gradient paths with multiple colored dots
- 10s and 5s animation durations
- Colors: purple (#945DD6), orange (#F46737), cyan (#13ADC7)
- Radial gradients for depth

**Used By**: Hero.jsx

**Controls Content**: Yes - animation speed, colors, paths

**Update Required for New Edition**: No

**Dependencies**:
- HeroBgAnimationStyle.js

#### `src/components/HeroBgAnimation/HeroBgAnimationStyle.js`
**Purpose**: Styled component wrapper for SVG

**Content**:
- Div wrapper for SVG
- Positioning and sizing styles

**Used By**: index.js

**Controls Content**: No

**Update Required for New Edition**: No

### Utils Directory

#### `src/utils/Themes.js`
**Purpose**: Theme color definitions

**Content**:
- darkTheme: Primary theme (bg, primary, text colors, card colors)
- lightTheme: Alternate theme (defined but unused)

**Colors**:
- Background: #090917 (dark), #FFFFFF (light)
- Primary: #854CE6 (dark), #be1adb (light)
- Text: #F2F3F4 (dark), #111111 (light)
- Card: #171721 (dark), #FFFFFF (light)

**Used By**: App.js (ThemeProvider), all styled components

**Controls Content**: Yes - entire color scheme

**Update Required for New Edition**: Possibly - if branding changes

**Dependencies**:
- None

#### `src/utils/motion.js`
**Purpose**: Framer Motion animation presets

**Content**:
- transition: Spring animation config
- slideAnimation: Directional slide animations
- fadeAnimation: Fade in/out animations
- headTextAnimation: Hero text entrance
- headContentAnimation: Hero content entrance
- headContainerAnimation: Hero container entrance

**Used By**: Hero.jsx

**Controls Content**: Yes - animation timing, easing, delays

**Update Required for New Edition**: No

**Dependencies**:
- None (used by framer-motion)

### Images Directory

**44 image files** including:
- Hero section images
- Track images (4 AI domains)
- Prize images
- Sponsor logos
- Coordinator photos (external URLs from vvce.ac.in)
- UI icons and decorative images
- Timeline event icons

**Purpose**: Visual assets for all sections

**Used By**: constants.js (imports), components (direct imports)

**Controls Content**: Yes - all visual content

**Update Required for New Edition**: HIGH PRIORITY - new sponsors, coordinators, track images, prizes

## File Update Priority for New Edition

### Critical (Must Update)
1. `src/data/constants.js` - All event data
2. `src/images/` - New sponsor logos, coordinator photos, track images
3. `public/idea_template.pptx` - New template

### High Priority
4. `src/components/sections/Hero.jsx` - Edition number, registration link
5. `src/components/sections/Footer.jsx` - Year, social links
6. `public/index.html` - Meta description

### Medium Priority
7. `src/components/Navbar.jsx` - Section names if changed
8. `src/components/sections/Skills.jsx` - Track descriptions
9. `src/components/sections/Education.jsx` - Glimpse description

### Low Priority
10. `src/utils/Themes.js` - Only if branding changes
11. Animation components - Only if visual refresh desired

## Unused Files

- `src/components/cards/EducationCard.jsx` - Not used, Education.jsx has custom Prize component
- `public/index_demo.html` - Demo page, not referenced
- `public/HK1.jpg` - Additional icon, not referenced

## Generated Files (Not in Source Control)

- `node_modules/` - Dependencies
- `build/` - Production build output
- `.env.local`, `.env.*` - Environment files (not present)

## Configuration Files

- `package.json` - Dependencies and scripts
- `public/manifest.json` - PWA manifest
- `public/robots.txt` - SEO robots instructions
- `.gitignore` - Git ignore rules
