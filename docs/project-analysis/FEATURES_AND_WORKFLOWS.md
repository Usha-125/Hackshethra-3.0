# HackKshetra 2.0 - Features and Workflows

## Feature Inventory

### 1. Navigation

**Status**: VERIFIED WORKING

**Description**: Sticky navigation bar with smooth-scroll links to page sections.

**Implementation**:
- File: `src/components/Navbar.jsx`
- Component: Navbar
- Styled Components: Nav, NavbarContainer, NavLogo, NavItems, NavLink, ButtonContainer, GithubButton, MobileIcon, MobileMenu

**Features**:
- Logo "Hack Kshetra" links to home
- Desktop navigation: About, Tracks, Timeline, Contributors, Prizes
- Mobile hamburger menu with slide-down animation
- "Idea Template" button downloads PowerPoint template
- Responsive design (hidden nav items on mobile < 768px)
- Active state styling on hover

**Interactions**:
- Click navigation link → smooth scroll to section
- Click hamburger icon → toggle mobile menu
- Click "Idea Template" → download file
- Click mobile menu item → close menu and scroll

**Dependencies**:
- Bio from constants.js (for Idea Template link)
- @mui/icons-material (MenuRounded)
- react-router-dom (LinkR)
- styled-components

**Verification Status**: Code review confirms implementation. No runtime verification performed.

---

### 2. Hero Section with Animated Text

**Status**: PRESENT BUT NOT RUNTIME-VERIFIED

**Description**: Landing page with animated title, typewriter effect, and registration CTA.

**Implementation**:
- File: `src/components/sections/Hero.jsx`
- Libraries: Framer Motion, Typewriter Effect, React Tilt
- Components: StarCanvas, HeroBgAnimation

**Features**:
- Animated title: "HACK KSHETRA 2.0"
- Typewriter effect cycling through roles
- Event description
- "Register Now" button
- Hero image with 3D tilt effect
- 3D star field background
- SVG geometric animation
- Framer Motion entrance animations

**Interactions**:
- Typewriter auto-starts and loops
- Button hover: scale up, brightness increase
- Image hover: 3D tilt effect
- Star background: continuous rotation
- SVG animation: particles moving along paths

**Dependencies**:
- Bio from constants.js
- HeroImg from images
- Framer Motion
- typewriter-effect
- react-tilt
- @react-three/fiber
- @react-three/drei
- maath/random

**Verification Status**: Code review confirms implementation. Animations require runtime verification.

---

### 3. Tracks Section with Modal Descriptions

**Status**: PRESENT BUT NOT RUNTIME-VERIFIED

**Description**: Four hackathon tracks with click-to-open modal descriptions.

**Implementation**:
- File: `src/components/sections/Skills.jsx`
- Libraries: React Tilt
- State: openModal ({state, track})

**Features**:
- 4 track cards: AI For Agriculture, AI For Education, AI For Healthcare, AI For IOT
- Track images with tilt effect
- Click-to-open modal with track description
- Hardcoded track descriptions
- Responsive grid layout
- Glass-morphism card styling

**Interactions**:
- Click card → open modal with description
- Click modal background → close modal
- Click close button → close modal
- Card hover → 3D tilt effect

**Dependencies**:
- skills from constants.js
- React Tilt
- styled-components

**Verification Status**: Code review confirms implementation. Modal behavior requires runtime verification.

---

### 4. Timeline Section with 3D Earth

**Status**: PRESENT BUT NOT RUNTIME-VERIFIED

**Description**: Vertical timeline showing event schedule with rotating 3D Earth.

**Implementation**:
- File: `src/components/sections/Experience.jsx`
- Component: ExperienceCard.jsx
- Library: react-vertical-timeline-component
- 3D Component: EarthCanvas

**Features**:
- 5 timeline events with icons
- Vertical timeline with alternating cards
- 3D rotating Earth globe at bottom
- Glass-morphism card styling
- Responsive single-column on mobile

**Timeline Events**:
1. Registration Starts - Oct 23, 2025
2. Idea Submission Deadline - Nov 03, 2025
3. Shortlist Announcement - Nov 05, 2025
4. Hackathon Begins - Nov 14, 2025, 9:00 AM
5. Hackathon Ends - Nov 15, 2025, 10:30 AM

**Interactions**:
- Earth auto-rotates continuously
- Timeline is display-only (no interaction)
- Scroll to view all events

**Dependencies**:
- experiences from constants.js
- ExperienceCard.jsx
- EarthCanvas.jsx
- react-vertical-timeline-component
- @react-three/fiber
- @react-three/drei
- three.js

**Verification Status**: Code review confirms implementation. 3D Earth requires runtime verification.

---

### 5. Contributors Section with Toggle Filtering

**Status**: PRESENT BUT NOT RUNTIME-VERIFIED

**Description**: Display faculty coordinators, patron, convenor, and perks with category filtering.

**Implementation**:
- File: `src/components/sections/Projects.jsx`
- Component: ProjectCard.jsx
- State: toggle (string)

**Features**:
- Toggle buttons for categories: Faculty Coordinators, Patron, Convenor, Perks
- Filtered display based on selected category
- Sponsors section (always displayed)
- Association section (always displayed)
- External links for sponsors
- Hover effects on cards

**Categories**:
- Faculty Coordinators: 9 coordinators with external images
- Patron: 1 patron with external image
- Convenor: 1 convenor with external image
- Perks: 8 text-only perk cards
- Sponsors: 5 sponsors with links
- Association: 3 partner organizations

**Interactions**:
- Click toggle button → filter displayed cards
- Click sponsor card → open external link
- Card hover → lift effect and shadow increase

**Dependencies**:
- projects from constants.js
- ProjectCard.jsx
- React (useState)
- styled-components

**Verification Status**: Code review confirms implementation. Filtering behavior requires runtime verification.

---

### 6. Prizes Section with Glimpses

**Status**: PRESENT BUT NOT RUNTIME-VERIFIED

**Description**: Prize pool information with expandable glimpse section.

**Implementation**:
- File: `src/components/sections/Education.jsx`
- Libraries: React Tilt
- State: showGlimpse (boolean)

**Features**:
- 2 prize cards with amounts and descriptions
- Prize images with tilt effect
- "Click to see Glimpses of HackKshetra" button
- Expandable glimpse section with image and description
- Glass-morphism styling

**Prizes**:
1. 1st Prize - ₹10,000 + T-shirts + Goodies + Certificate
2. 2nd Prize - ₹7,000 + T-shirts + Goodies + Certificate

**Interactions**:
- Prize card hover → 3D tilt effect
- Click glimpse button → toggle visibility
- Button hover → lift effect and shimmer

**Dependencies**:
- education from constants.js
- glimpseImg from images
- React (useState)
- React Tilt
- styled-components

**Verification Status**: Code review confirms implementation. Toggle behavior requires runtime verification.

---

### 7. Contact Form with EmailJS

**Status**: PRESENT BUT NOT RUNTIME-VERIFIED

**Description**: Contact form for queries and sponsorship inquiries with EmailJS integration.

**Implementation**:
- File: `src/components/sections/Contact.jsx`
- Library: @emailjs/browser
- Hook: React useRef

**Features**:
- Form fields: Email, Name, Subject, Message
- EmailJS integration for form submission
- Success/error alerts
- Form reset after successful submission
- Glass-morphism styling

**EmailJS Configuration**:
- Service ID: service_cku2fro
- Template ID: template_fvozc75
- Public Key: JsSFctxqulb_K6QQw

**Workflow**:
1. User fills form
2. User clicks "Send"
3. Form composes message (combines name, email, subject, message)
4. EmailJS.sendForm() sends email
5. Success: Alert "Message Sent Successfully!" + form reset
6. Error: Alert "Failed to send message. Please try again."

**Dependencies**:
- @emailjs/browser
- React (useRef)
- styled-components

**Verification Status**: Code review confirms implementation. EmailJS functionality requires runtime verification with valid credentials.

**Risk**: EmailJS service may be inactive or credentials may be expired.

---

### 8. Footer with Social Links

**Status**: VERIFIED WORKING

**Description**: Footer with branding, social media links, and copyright.

**Implementation**:
- File: `src/components/sections/Footer.jsx`
- Icons: @mui/icons-material (LinkedIn, Instagram)

**Features**:
- Logo: "Hack Kshetra 2.0 2025 !"
- LinkedIn link
- Instagram link
- Copyright notice
- Hover effects on social icons

**Interactions**:
- Click social icon → open external link
- Icon hover → color change to purple

**Dependencies**:
- Bio from constants.js
- @mui/icons-material
- styled-components

**Verification Status**: Code review confirms implementation. Links are standard anchor tags.

---

### 9. 3D Star Field Background

**Status**: PRESENT BUT NOT RUNTIME-VERIFIED

**Description**: Animated 3D star field as background for hero section.

**Implementation**:
- File: `src/components/canvas/Stars.jsx`
- Libraries: @react-three/fiber, @react-three/drei, maath/random, three.js

**Features**:
- 5000 stars in spherical distribution
- Slow rotation animation
- Pink color (#f272c8)
- Positioned behind content (z-index: 0)
- Non-interactive (pointer-events: none)

**Interactions**:
- Continuous rotation (no user interaction)

**Dependencies**:
- @react-three/fiber
- @react-three/drei
- maath/random
- three.js

**Verification Status**: Code review confirms implementation. 3D rendering requires runtime verification with WebGL support.

---

### 10. 3D Earth Globe

**Status**: PRESENT BUT NOT RUNTIME-VERIFIED

**Description**: Rotating 3D Earth globe in timeline section.

**Implementation**:
- File: `src/components/canvas/Earth.jsx`
- Libraries: @react-three/fiber, @react-three/drei, three.js
- Model: public/planet/scene.gltf

**Features**:
- Loads 3D Earth model
- OrbitControls with auto-rotate
- Camera positioned at [-4, 3, 6]
- Scale: 3x
- No zoom enabled
- Polar angle locked for side view

**Interactions**:
- Auto-rotates continuously
- No user interaction (zoom disabled)

**Dependencies**:
- @react-three/fiber
- @react-three/drei
- three.js
- public/planet/scene.gltf

**Verification Status**: Code review confirms implementation. 3D model loading requires runtime verification.

---

## Registration Workflow

### Current Implementation

**Type**: External Redirect

**Description**: Registration is handled entirely by Google Forms. The website only provides a link to the external form.

### Workflow Steps

```
1. User visits website
   └─→ Views Hero section

2. User clicks "Register Now" button
   └─→ Button href = Bio.resume (Google Forms URL)
   └─→ https://forms.gle/KCSfSRTRjhxGANhV9

3. Browser navigates to Google Forms
   └─→ External service handles registration
   └─→ Website has no control over registration process

4. User fills Google Form
   └─→ Data stored in Google Forms
   └─→ Not accessible from website

5. Form submission
   └─→ Google handles submission
   └─→ No confirmation returned to website
```

### Registration Features

**Implemented**:
- Registration link in Hero section
- Registration link in Navbar ("Idea Template" button downloads template, not registration)
- Direct redirect to Google Forms

**NOT Implemented**:
- Internal registration form
- Team registration
- Individual registration tracking
- Registration confirmation in website
- Registration deadline enforcement
- Registration limits
- Registration status checking
- Registration data storage
- Email confirmation from website

### Data Flow

```
Website
    └─→ Bio.resume (constants.js)
            └─→ Google Forms URL
                    └─→ External Service
                            └─→ User Data
                                    └─→ Google Database
                                            └─→ NOT accessible to website
```

### Security Considerations

- Registration data is handled by Google Forms (secure)
- No sensitive data stored in website
- No authentication required for registration
- No rate limiting (handled by Google Forms)
- No spam protection (handled by Google Forms)

### Limitations

1. No control over registration process
2. No access to registration data
3. No registration analytics
4. No custom validation
5. No confirmation emails from website
6. No registration status tracking
7. No team management
8. No participant communication

### Update Requirements for New Edition

**CRITICAL**:
1. Update Google Forms URL in constants.js (Bio.resume)
2. Verify Google Form is active and configured
3. Update form fields if requirements change

**MODERATE**:
4. Add registration deadline enforcement if desired
5. Add registration count display if Google Forms API integrated

---

## Contact Workflow

### Current Implementation

**Type**: Client-Side Email Sending via EmailJS

**Description**: Contact form sends emails directly from browser using EmailJS service.

### Workflow Steps

```
1. User navigates to Contact section
   └─→ Sees contact form

2. User fills form fields
   ├─→ Email (required)
   ├─→ Name (required)
   ├─→ Subject (required)
   └─→ Message (required)

3. User clicks "Send" button
   └─→ onSubmit handler triggered
   └─→ e.preventDefault()

4. Form composition
   ├─→ Extract from_email, from_name, subject, message
   └─→ Combine into: "From: {name} <{email}>\nSubject: {subject}\n\n{message}"

5. EmailJS.sendForm()
   ├─→ Service ID: service_cku2fro
   ├─→ Template ID: template_fvozc75
   ├─→ Public Key: JsSFctxqulb_K6QQw
   └─→ Sends to EmailJS servers

6. Response handling
   ├─→ Success: Alert "Message Sent Successfully!" + form.reset()
   └─→ Error: Alert "Failed to send message. Please try again."
```

### Contact Features

**Implemented**:
- Contact form with 4 fields
- EmailJS integration
- Success/error alerts
- Form reset after success
- Client-side validation (HTML5 required attribute)

**NOT Implemented**:
- Server-side validation
- Rate limiting
- Spam protection
- Email verification
- File attachments
- CAPTCHA
- Email tracking
- Auto-reply

### Data Flow

```
User Input
    └─→ Contact Form
            └─→ EmailJS Client Library
                    └─→ EmailJS Servers
                            ├─→ Template Processing
                            ├─→ Email Sending
                            └─→ Recipient Email
```

### Security Considerations

- Public key exposure (intended for EmailJS)
- No sensitive data stored
- EmailJS provides rate limiting
- No server-side vulnerabilities (no server)
- Form data sent over HTTPS (EmailJS requirement)

### Limitations

1. Dependent on EmailJS service availability
2. Public key can be abused (rate limiting helps)
3. No server-side validation
4. No email queue or retry logic
5. Limited email template customization
6. No file attachments
7. EmailJS quota limits

### Verification Status

**NOT RUNTIME-VERIFIED**: EmailJS functionality requires:
- Valid service ID
- Valid template ID
- Valid public key
- Active EmailJS account
- Proper template configuration

**Risk**: EmailJS credentials may be expired or service may be inactive.

### Update Requirements for New Edition

**CRITICAL**:
1. Verify EmailJS service is active
2. Update EmailJS configuration if recipient changes
3. Test email sending functionality

**MODERATE**:
4. Update form labels if different fields needed
5. Add CAPTCHA if spam becomes issue
6. Add rate limiting if needed

---

## External Integrations

### 1. Google Forms (Registration)

**Purpose**: Handle hackathon registration

**Integration Type**: External redirect

**Configuration**:
- URL: https://forms.gle/KCSfSRTRjhxGANhV9
- Location: constants.js (Bio.resume)

**Status**: EXTERNAL SERVICE - not part of codebase

**Verification**: Cannot verify without accessing Google Forms

---

### 2. EmailJS (Contact Form)

**Purpose**: Send contact form emails

**Integration Type**: Client-side API call

**Configuration**:
- Service ID: service_cku2fro
- Template ID: template_fvozc75
- Public Key: JsSFctxqulb_K6QQw
- Location: Contact.jsx (hardcoded)

**Status**: CONFIGURED - requires runtime verification

**Verification**: Needs valid EmailJS account and active service

---

### 3. VVCE Website (Coordinator Images)

**Purpose**: Host coordinator profile photos

**Integration Type**: External image hotlinking

**Configuration**:
- Base URL: https://vvce.ac.in/wp-content/uploads/
- Location: constants.js (projects array)

**Status**: EXTERNAL ASSETS - dependent on VVCE website

**Risk**: Images may break if VVCE changes URLs or removes images

---

## Feature Verification Summary

| Feature | Status | Verification Method | Notes |
|---------|--------|-------------------|-------|
| Navigation | VERIFIED WORKING | Code review | Standard anchor links |
| Hero Section | PRESENT BUT NOT RUNTIME-VERIFIED | Code review | Animations need runtime test |
| Tracks Modal | PRESENT BUT NOT RUNTIME-VERIFIED | Code review | Modal needs runtime test |
| Timeline | PRESENT BUT NOT RUNTIME-VERIFIED | Code review | 3D Earth needs runtime test |
| Contributors Filter | PRESENT BUT NOT RUNTIME-VERIFIED | Code review | Filtering needs runtime test |
| Prizes/Glimpses | PRESENT BUT NOT RUNTIME-VERIFIED | Code review | Toggle needs runtime test |
| Contact Form | PRESENT BUT NOT RUNTIME-VERIFIED | Code review | EmailJS needs runtime test |
| Footer | VERIFIED WORKING | Code review | Standard links |
| Star Field | PRESENT BUT NOT RUNTIME-VERIFIED | Code review | 3D needs WebGL test |
| Earth Globe | PRESENT BUT NOT RUNTIME-VERIFIED | Code review | 3D model needs runtime test |
| Registration | EXTERNAL SERVICE | N/A | Google Forms not accessible |
| Contact Email | CONFIGURED | N/A | EmailJS needs valid credentials |

---

## Missing Features

### High Priority

1. **FAQ Section** - No frequently asked questions
2. **Rules and Guidelines** - No detailed rules page
3. **Venue Information** - No location/map details
4. **Problem Statements** - No detailed problem statement documents

### Medium Priority

5. **Team Formation** - No team registration guidance
6. **Judging Criteria** - No judging process explanation
7. **Schedule Details** - No detailed hourly schedule
8. **Previous Winners** - No showcase of past winners

### Low Priority

9. **Media/Press** - No press kit or media resources
10. **Volunteer Registration** - No volunteer signup form
11. **Mentor Profiles** - No detailed mentor information
12. **Sponsorship Tiers** - No sponsorship package details
13. **Code of Conduct** - No conduct guidelines
14. **Accessibility Statement** - No accessibility information
15. **Privacy Policy** - No privacy policy

---

## Functional Limitations

### Data Management

- No database
- No CMS
- No admin panel
- Manual content updates required
- No content versioning

### User Management

- No authentication
- No user accounts
- No login system
- No user profiles
- No participant dashboard

### Registration

- External dependency (Google Forms)
- No registration tracking
- No team management
- No deadline enforcement
- No confirmation emails from website

### Analytics

- No visitor tracking
- No form submission tracking
- No click tracking
- No user behavior analytics

### Communication

- No notification system
- No email campaigns
- No SMS integration
- No push notifications

---

## Technical Debt

1. **Hardcoded Data**: All event data in constants.js (no CMS)
2. **External Image Dependencies**: Coordinator images hotlinked from VVCE
3. **No Error Handling**: Minimal error handling in contact form
4. **No Loading States**: No loading indicators for 3D models
5. **No Offline Support**: No service worker or PWA features
6. **No Accessibility**: No ARIA labels, keyboard navigation not optimized
7. **No SEO**: Limited meta tags, no structured data
8. **No Testing**: No test files, no automated testing
