# HackKshetra 2.0 - Website Pages Analysis

## Navigation Structure

The website uses a **single-page scrolling architecture** with smooth-scroll navigation. All sections are on one page, accessible via anchor links.

### Navigation Links (Desktop & Mobile)

| Section | Anchor ID | Navigation Label | Mobile Label |
|---------|-----------|------------------|--------------|
| Hero | #About | About | About |
| Tracks | #Skills | Tracks | Tracks |
| Timeline | #Experience | Timeline | Timeline |
| Contributors | #Projects | Contributors | Coordinators |
| Prizes | #Education | Prizes | Prizes |

### Additional Navigation Elements

- **Navbar Logo**: "Hack Kshetra" (links to home)
- **Idea Template Button**: Downloads `idea_template.pptx`
- **Mobile Menu**: Hamburger icon toggles slide-down menu

---

## Page Sections

### 1. Hero Section

**File**: `src/components/sections/Hero.jsx`
**Anchor**: `#About`

#### A. Purpose
Landing page section to introduce the hackathon, attract participants, and provide registration entry point.

#### B. Implementation
- **Component**: Hero.jsx
- **Styled Components**: HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Title, TitleSpan, TextLoop, Span, SubTitle, ResumeButton, Img, HeroBg
- **Libraries**:
  - Framer Motion (entrance animations)
  - Typewriter Effect (animated text)
  - React Tilt (3D image effect)
  - StarCanvas (3D star background)
  - HeroBgAnimation (SVG animation)

#### C. Content

**Visual Elements**:
- Title: "HACK KSHETRA 2.0" (purple accent on "HACK", "2.0")
- Animated text cycling through:
  - "DREAM IN CODE"
  - "LET INTELLIGENCE UNLOAD"
  - "Hack. Learn. Lead."
- Description from Bio.description:
  > "HackKshetra 2.0 is not just a competition but a gateway to innovation and intelligence. It's an opportunity to dive into the world of Artificial Intelligence and Machine Learning, collaborate with passionate minds, and turn ideas into impactful solutions. Gain hands-on experience, expand your network, and showcase your skills on a national platform. So, gather your team, push your boundaries, and be part of this exciting journey of technology and creativity. Register now, and let's innovate the future together!"
- CTA Button: "Register Now!" (links to Google Forms)
- Hero Image: `src/images/HeroImage.jpg` (tilt effect)
- Background: Animated star field + SVG geometric animation

**Data Sources**:
- Title: Hardcoded in Hero.jsx
- Roles: `Bio.roles` from constants.js
- Description: `Bio.description` from constants.js
- Registration Link: `Bio.resume` from constants.js (Google Forms URL)
- Hero Image: `HeroImg` import from images

#### D. Styling
- **Background**: Dark with purple gradient accents
- **Typography**: Poppins font
- **Title Size**: 50px desktop, 40px tablet, 32px mobile
- **Button**: Purple gradient with hover scale effect, rounded (50px border-radius)
- **Layout**: Two-column on desktop (text left, image right), stacked on mobile
- **Responsive Breakpoints**: 960px, 640px
- **Animations**:
  - Text slides in from right (Framer Motion)
  - Content fades in from bottom
  - Container slides in from left
  - Image has 3D tilt on hover

#### E. Interactions
- **Typewriter Effect**: Auto-starts, loops through roles infinitely
- **Button Hover**: Scale up (1.05x), brightness increase
- **Image Tilt**: 3D perspective effect on mouse movement
- **Star Background**: Continuous slow rotation
- **SVG Animation**: Particles moving along paths (10s, 5s loops)
- **Smooth Scroll**: Enabled globally in index.css

#### F. Dependencies
- **Shared Components**: None
- **Libraries**: framer-motion, typewriter-effect, react-tilt, @react-three/fiber, @react-three/drei, maath/random
- **Services**: None
- **Data**: constants.js (Bio object)

#### G. Update Requirements for New Edition
**CRITICAL UPDATES NEEDED**:
1. Edition number: Change "2.0" to new edition number (line 264 in Hero.jsx)
2. Registration link: Update `Bio.resume` in constants.js
3. Event description: Update `Bio.description` in constants.js
4. Hero image: Replace `HeroImage.jpg` with new edition image
5. Roles: Update `Bio.roles` in constants.js if tagline changes

**MODERATE UPDATES**:
6. Button text if different wording desired
7. Color scheme if branding changes (Themes.js)

#### H. Risks
- **High Risk**: Registration link failure if Google Forms URL changes
- **Medium Risk**: Hero image aspect ratio mismatch if new image differs
- **Low Risk**: Text overflow on mobile if description is longer
- **Visual Risk**: Star field performance on low-end devices

---

### 2. Tracks Section

**File**: `src/components/sections/Skills.jsx`
**Anchor**: `#Skills`

#### A. Purpose
Display the four hackathon problem statement tracks with descriptions to help participants choose their focus area.

#### B. Implementation
- **Component**: Skills.jsx
- **Styled Components**: Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillImage, ModalBackground, ModalCard, ModalClose
- **Libraries**: React Tilt (card tilt effect)

#### C. Content

**Track Cards** (from `skills` array in constants.js):
1. **AI For Agriculture**
   - Image: `src/images/AI_Agri.png`
   - Description (modal): "Explore how artificial intelligence can revolutionize farming, crop management, and food supply chains. Tackle challenges in precision agriculture, pest prediction, and resource optimization."

2. **AI For Education**
   - Image: `src/images/AI_Education.png`
   - Description (modal): "Innovate in the education sector using AI for personalized learning, smart content delivery, and student engagement. Address issues like adaptive assessments and intelligent tutoring systems."

3. **AI For Healthcare**
   - Image: `src/images/AI_Health.png`
   - Description (modal): "Apply AI to healthcare for diagnostics, patient monitoring, and predictive analytics. Work on solutions for medical imaging, disease prediction, and healthcare accessibility."

4. **AI For IOT**
   - Image: `src/images/AI_IOT.png`
   - Description (modal): "Integrate AI with Internet of Things to enable smart devices, automation, and data-driven insights. Focus on smart cities, home automation, and industrial IoT applications."

**Section Title**: "Tracks"
**Section Description**: "Choose your own problem statements. Bring your own Creative Solutions."

**Data Sources**:
- Track data: `skills` array from constants.js
- Track descriptions: Hardcoded in Skills.jsx (trackDescriptions object)

#### D. Styling
- **Background**: Dark with gradient wrapper (purple/blue gradients)
- **Card Style**: Glass-morphism (rgba(17, 25, 40, 0.83)), border glow
- **Card Size**: 400px × 300px desktop, 280px × 380px mobile
- **Image Size**: 100% width, 200px height, object-fit: cover
- **Modal**: Dark background (#181c2b), centered, 90vw max-width
- **Typography**: Poppins, 52px title, 18px description
- **Responsive Breakpoints**: 768px, 500px

#### E. Interactions
- **Card Click**: Opens modal with track description
- **Modal Close**: Click background or close button
- **Card Tilt**: 3D tilt effect on hover (React Tilt)
- **Button Hover**: Gradient shift on close button
- **Modal Animation**: Fade in with background blur

#### F. Dependencies
- **Shared Components**: None
- **Libraries**: react-tilt
- **Services**: None
- **Data**: constants.js (skills array)

#### G. Update Requirements for New Edition
**CRITICAL UPDATES NEEDED**:
1. Track titles: Update `skills` array in constants.js if tracks change
2. Track images: Replace AI_* images with new track images
3. Track descriptions: Update trackDescriptions object in Skills.jsx

**MODERATE UPDATES**:
4. Section title/description if wording changes
5. Add/remove tracks if track count changes
6. Modal styling if descriptions are longer

#### H. Risks
- **Medium Risk**: Image aspect ratio mismatch if new images differ
- **Low Risk**: Text overflow in modal if descriptions are long
- **UX Risk**: Modal description text may be too long for mobile
- **Functional Risk**: If tracks are removed, need to adjust grid layout

---

### 3. Timeline Section

**File**: `src/components/sections/Experience.jsx`
**Anchor**: `#Experience`

#### A. Purpose
Display the event schedule from registration opening to hackathon conclusion with a visual timeline.

#### B. Implementation
- **Component**: Experience.jsx
- **Styled Components**: Container, Wrapper, Title, Desc, EarthContainer
- **Card Component**: ExperienceCard.jsx
- **Library**: react-vertical-timeline-component
- **3D Component**: EarthCanvas

#### C. Content

**Timeline Events** (from `experiences` array in constants.js):

1. **Registration Starts**
   - Date: Oct 23, 2025
   - Icon: `src/images/Reg_starts.jpeg`

2. **Idea Submission Deadline**
   - Date: Nov 03, 2025
   - Icon: `src/images/idea_submission.png`

3. **Shortlist Announcement**
   - Date: Nov 05, 2025
   - Icon: `src/images/shortlist.png`

4. **Hackathon Begins**
   - Date: Nov 14, 2025
   - Time: 9:00 AM
   - Icon: `src/images/hack_begins.png`

5. **Hackathon Ends**
   - Date: Nov 15, 2025
   - Time: 10:30 AM
   - Icon: `src/images/hack_ends.png`

**Section Title**: "Timeline"
**3D Element**: Rotating Earth globe at bottom

**Data Sources**:
- Timeline data: `experiences` array from constants.js
- Earth model: `public/planet/scene.gltf`

#### D. Styling
- **Background**: Dark
- **Timeline**: Vertical line with alternating left/right cards
- **Card Style**: Glass-morphism (rgba(17, 25, 40, 0.83)), border glow
- **Icon**: Circular, 50px height, object-fit: cover
- **Typography**: 52px title, 18px role, 14px company, 12px date
- **Earth Container**: 220px height desktop, 300px mobile
- **Responsive Breakpoints**: 768px

#### E. Interactions
- **Earth Rotation**: Auto-rotates continuously
- **Timeline Cards**: No interaction (display only)
- **Scroll**: Vertical timeline scrolls normally
- **Responsive**: Single column on mobile, alternating on desktop

#### F. Dependencies
- **Shared Components**: ExperienceCard.jsx
- **Libraries**: react-vertical-timeline-component, @react-three/fiber, @react-three/drei, three.js
- **Services**: None
- **Data**: constants.js (experiences array)

#### G. Update Requirements for New Edition
**CRITICAL UPDATES NEEDED**:
1. All dates: Update `experiences` array in constants.js with new schedule
2. All icons: Replace timeline icons if new edition uses different visuals
3. Add/remove events if schedule changes

**MODERATE UPDATES**:
4. Earth model if different visual desired
5. Timeline styling if event count changes significantly

#### H. Risks
- **High Risk**: Incorrect dates will mislead participants
- **Medium Risk**: Image loading if icon paths change
- **Low Risk**: Earth model loading failure if public/planet/ is removed
- **Performance Risk**: 3D Earth may affect page load time

---

### 4. Contributors Section

**File**: `src/components/sections/Projects.jsx`
**Anchor**: `#Projects`

#### A. Purpose
Display faculty coordinators, patron, convenor, and event perks with toggle-based filtering for organized presentation.

#### B. Implementation
- **Component**: Projects.jsx
- **Styled Components**: Container, Wrapper, Title, ToggleButtonGroup, ToggleButton, Divider, CardContainer
- **Card Component**: ProjectCard.jsx
- **State**: React useState for toggle filtering

#### C. Content

**Toggle Categories**:
1. **Faculty Coordinators** (category: "web app")
2. **Patron** (category: "patron")
3. **Convenor** (category: "convenor")
4. **Perks** (category: "Perks")

**Faculty Coordinators** (from `projects` array, category: "web app"):
- Dr. Paramesha K (external image URL)
- Dr. Janhavi V (external image URL)
- Dr. Arun Kumar N (external image URL)
- Shashank N (external image URL)
- Harshitha K (external image URL)
- Aishwarya M (external image URL)
- Harshitha Suresh (external image URL)
- Anilkumar B H (external image URL)
- Harsha K G (external image URL)

**Patron** (category: "patron"):
- Dr. B Sadashive Gowda, Principal, VVCE (external image URL)

**Convenor** (category: "convenor"):
- Dr. Pooja M R, Professor & Head, CSE (external image URL)

**Perks** (category: "Perks", text-only cards):
- Networking with Innovators Nationwide
- National-Level Recognition & Exposure
- Mentorship sessions From Industry Experts
- Participation Certificates
- Interaction with Experts
- Branded T-shirts
- Mini-games with swags
- Exclusive Sticker Collections

**Sponsors Section** (always displayed):
- Digitoad (with link to digitoadtech.com)
- TOCB Mysuru (with Instagram link)
- Languify (with link to languify.in)
- Sharp (no link)
- Classify (no link)

**Association Section** (always displayed):
- Natya
- Pixelhut
- Swara

**Section Title**: "Contributors"

**Data Sources**:
- All data: `projects` array in constants.js
- External images: vvce.ac.in URLs

#### D. Styling
- **Background**: Dark
- **Toggle Buttons**: Purple border, purple text, hover highlight
- **Active State**: Purple background (theme.primary + 20)
- **Card Size**: Max 200px width, centered
- **Image Size**: 150px × 120px (rectangular), 150px × 150px (square)
- **Sponsor Cards**: Square images
- **Typography**: 52px title, 16px button text
- **Responsive Breakpoints**: 960px, 768px

#### E. Interactions
- **Toggle Click**: Switches displayed category
- **Card Click**: Opens external link in new tab (if link exists)
- **Card Hover**: Lift effect (-4px Y translation), shadow increase
- **Divider**: Visual separator between toggle buttons

#### F. Dependencies
- **Shared Components**: ProjectCard.jsx
- **Libraries**: React (useState)
- **Services**: None
- **Data**: constants.js (projects array)

#### G. Update Requirements for New Edition
**CRITICAL UPDATES NEEDED**:
1. Faculty coordinators: Update images and names in constants.js
2. Patron: Update image and name in constants.js
3. Convenor: Update image and name in constants.js
4. Sponsors: Update all sponsor logos and links in constants.js
5. Association partners: Update images in constants.js
6. Perks: Update perk text if changed

**MODERATE UPDATES**:
7. Toggle labels if category names change
8. Section title if "Contributors" renamed
9. Add/remove categories if structure changes

#### H. Risks
- **High Risk**: External image URLs from vvce.ac.in may break
- **Medium Risk**: Sponsor links may become outdated
- **Low Risk**: Card layout issues if images have different aspect ratios
- **UX Risk**: Too many cards in one category may overwhelm

---

### 5. Prizes Section

**File**: `src/components/sections/Education.jsx`
**Anchor**: `#Education`

#### A. Purpose
Display prize pool information with amounts and included benefits to incentivize participation.

#### B. Implementation
- **Component**: Education.jsx
- **Styled Components**: Container, Wrapper, Title, Desc, PrizesContainer, Prize, PrizeTitle, PrizeAmount, PrizeImage, PrizeDescription, GlimpseButton, GlimpseBlock, GlimpseImage, GlimpseDesc
- **Library**: React Tilt (card tilt effect)

#### C. Content

**Prize Cards** (from `education` array in constants.js):

1. **1st Prize**
   - Amount: ₹10,000
   - Description: "Cash Prize + T-shirts + Goodies + Participation Certificate"
   - Image: `src/images/1st.jpg`

2. **2nd Prize**
   - Amount: ₹7,000
   - Description: "Cash Prize + T-shirts + Goodies + Participation Certificate"
   - Image: `src/images/2nd.jpg`

**Section Title**: "Prizes"
**Section Description**: "Each domain will be awarded with 2 prizes."

**Glimpses Section** (expandable):
- Button: "Click to see Glimpses of HackKshetra"
- Image: `src/images/glimpse.png`
- Description (hardcoded):
  > "Last year's HackKshetra was a whirlwind of innovation, collaboration, and excitement. Teams from across the country came together to tackle real-world problems, pushing the boundaries of technology and creativity. The event was filled with inspiring keynotes, hands-on workshops, and non-stop coding sessions that kept the energy high throughout the night.
  >
  > Participants not only built impressive solutions but also forged lasting friendships and professional connections. The vibrant atmosphere, combined with expert mentorship and a spirit of healthy competition, made HackKshetra a truly unforgettable experience for everyone involved. We can't wait to see what this year brings!"

**Data Sources**:
- Prize data: `education` array from constants.js
- Glimpse image: `glimpseImg` import from images
- Glimpse description: Hardcoded in Education.jsx

#### D. Styling
- **Background**: Dark with gradient wrapper
- **Prize Card**: Glass-morphism (rgba(17, 25, 40, 0.83)), border glow
- **Card Size**: 500px × 400px desktop, 350px × 380px tablet, 300px × 360px mobile
- **Prize Title**: 42px, purple color
- **Prize Amount**: 36px, primary text color
- **Prize Image**: 120px × 120px, object-fit: contain
- **Glimpse Button**: Purple gradient, rounded (50px), hover lift effect
- **Glimpse Block**: Dark background, centered, max 700px width
- **Typography**: Poppins, 52px title, 18px description
- **Responsive Breakpoints**: 768px, 500px

#### E. Interactions
- **Prize Card Tilt**: 3D tilt effect on hover (React Tilt)
- **Glimpse Button Click**: Toggles glimpse section visibility
- **Button Hover**: Lift (-2px Y), shadow increase, shimmer effect
- **Button Active**: Press down effect
- **Glimpse Animation**: Fade in/out on toggle

#### F. Dependencies
- **Shared Components**: None
- **Libraries**: React (useState), react-tilt
- **Services**: None
- **Data**: constants.js (education array)

#### G. Update Requirements for New Edition
**CRITICAL UPDATES NEEDED**:
1. Prize amounts: Update `education` array in constants.js
2. Prize descriptions: Update `education` array in constants.js
3. Prize images: Replace 1st.jpg and 2nd.jpg with new images
4. Glimpse image: Replace glimpse.png with new edition photos
5. Glimpse description: Update hardcoded text for new edition

**MODERATE UPDATES**:
6. Section description if prize structure changes
7. Add/remove prizes if prize count changes
8. Glimpse button text if different wording desired

#### H. Risks
- **High Risk**: Incorrect prize amounts will mislead participants
- **Medium Risk**: Glimpse image loading if file path changes
- **Low Risk**: Text overflow if descriptions are longer
- **UX Risk**: Glimpse image may be too large on mobile

---

### 6. Contact Section

**File**: `src/components/sections/Contact.jsx`
**Anchor**: `#Contact`

#### A. Purpose
Provide a contact form for queries and sponsorship inquiries with direct email delivery via EmailJS.

#### B. Implementation
- **Component**: Contact.jsx
- **Styled Components**: Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton
- **Library**: @emailjs/browser
- **Hook**: React useRef

#### C. Content

**Form Fields**:
1. **Email** (name: from_email) - Required
2. **Name** (name: from_name) - Required
3. **Subject** (name: subject) - Required
4. **Message** (name: message) - Required, 4 rows

**Section Title**: "Contact"
**Section Description**: "Feel free to reach out to us for any queries/ Want to sponsor us ?"
**Form Title**: "Email Us 🚀"
**Button Text**: "Send"

**EmailJS Configuration** (hardcoded):
- Service ID: `service_cku2fro`
- Template ID: `template_fvozc75`
- Public Key: `JsSFctxqulb_K6QQw`

**Form Behavior**:
- Combines name, email, subject into message body
- Sends via EmailJS on submit
- Success alert: "Message Sent Successfully!"
- Error alert: "Failed to send message. Please try again."
- Form reset after successful submission

**Data Sources**:
- None (all form data is user input)

#### D. Styling
- **Background**: Dark
- **Form**: Glass-morphism (rgba(17, 25, 40, 0.83)), border glow
- **Form Size**: 95% width, max 600px
- **Input Fields**: Transparent background, border on focus
- **Button**: Purple gradient, 12px border-radius
- **Typography**: 52px title, 18px description, 28px form title, 18px inputs
- **Responsive Breakpoints**: 960px, 768px

#### E. Interactions
- **Input Focus**: Border color changes to primary purple
- **Button Hover**: Color shift (hsla brightness change)
- **Form Submit**: Prevents default, sends via EmailJS
- **Success**: Alert + form reset
- **Error**: Alert with error message

#### F. Dependencies
- **Shared Components**: None
- **Libraries**: @emailjs/browser, React (useRef)
- **Services**: EmailJS (service_cku2fro)
- **Data**: None

#### G. Update Requirements for New Edition
**CRITICAL UPDATES NEEDED**:
1. EmailJS configuration if recipient email changes
2. Form labels if different fields needed
3. Section description if wording changes

**MODERATE UPDATES**:
4. Form styling if design refresh desired
5. Add/remove form fields if requirements change

#### H. Risks
- **High Risk**: EmailJS service failure if API key expires or service disabled
- **Medium Risk**: Form submission may fail if EmailJS quota exceeded
- **Low Risk**: Alert messages may need localization
- **Security Risk**: Public key exposure (intended, but monitor for abuse)

---

### 7. Footer

**File**: `src/components/sections/Footer.jsx`
**Anchor**: None (always visible at bottom)

#### A. Purpose
Display branding, social media links, and copyright information at the bottom of the page.

#### B. Implementation
- **Component**: Footer.jsx
- **Styled Components**: FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright
- **Icons**: @mui/icons-material (LinkedIn, Instagram)

#### C. Content

**Logo**: "Hack Kshetra 2.0 2025 !"
**Social Media Links**:
- LinkedIn: `Bio.linkedin` from constants.js (https://www.linkedin.com/in/hack-kshetra-775a73330/)
- Instagram: `Bio.insta` from constants.js (https://www.instagram.com/hack_kshetra)

**Copyright**: "© 2025 Hack Kshetra 2.0. All rights reserved."

**Data Sources**:
- Social links: Bio object from constants.js
- Year and edition: Hardcoded in Footer.jsx

#### D. Styling
- **Background**: Dark (inherits from parent)
- **Logo**: Purple color (#854CE6), 20px font size
- **Social Icons**: 1.5rem font size, hover color change to purple
- **Copyright**: 0.9rem, soft2 color (undefined in theme, defaults)
- **Layout**: Centered, column direction
- **Responsive Breakpoints**: 768px (nav wraps, 12px font size)

#### E. Interactions
- **Social Icon Hover**: Color changes to primary purple
- **No other interactions** (display only)

#### F. Dependencies
- **Shared Components**: None
- **Libraries**: @mui/icons-material
- **Services**: None
- **Data**: constants.js (Bio object)

#### G. Update Requirements for New Edition
**CRITICAL UPDATES NEEDED**:
1. Year: Change "2025" to new year (line 87 and 99 in Footer.jsx)
2. Edition number: Change "2.0" to new edition (line 87 and 99 in Footer.jsx)
3. Social links: Update Bio.linkedin and Bio.insta in constants.js if accounts change

**MODERATE UPDATES**:
4. Logo text if different naming convention
5. Add/remove social platforms if needed

#### H. Risks
- **Low Risk**: Social links may become outdated
- **Visual Risk**: Soft2 color undefined in theme may cause rendering issues
- **Low Risk**: Footer may overlap content on very short pages

---

## Missing Pages/Sections

The following common hackathon website sections are **NOT IMPLEMENTED**:

1. **FAQ Section** - No frequently asked questions
2. **Rules and Guidelines** - No detailed rules page
3. **Venue Information** - No location/map details
4. **Team Formation** - No team registration guidance
5. **Judging Criteria** - No judging process explanation
6. **Schedule Details** - No detailed hourly schedule
7. **Problem Statements** - No detailed problem statement documents
8. **Previous Winners** - No showcase of past winners
9. **Media/Press** - No press kit or media resources
10. **Volunteer Registration** - No volunteer signup form
11. **Mentor Profiles** - No detailed mentor information
12. **Sponsorship Tiers** - No sponsorship package details
13. **Code of Conduct** - No conduct guidelines
14. **Accessibility Statement** - No accessibility information
15. **Privacy Policy** - No privacy policy

---

## Routing Structure

**No Traditional Routing**: The website uses a single-page scrolling architecture with anchor links.

**BrowserRouter is installed but underutilized**:
- Used only for `<LinkR>` component in Navbar
- No actual route definitions
- All navigation is via anchor links (#About, #Skills, etc.)
- Single-page experience without page reloads

**Future Enhancement Opportunity**:
- Could add separate pages for Rules, FAQ, Problem Statements
- Would require route configuration in App.js
- Would maintain single-page feel with React Router

---

## Mobile Responsiveness Summary

| Section | Desktop Layout | Tablet Layout | Mobile Layout |
|---------|---------------|---------------|---------------|
| Hero | 2-column (text left, image right) | Stacked | Stacked, smaller fonts |
| Tracks | 4-column grid | 2-column grid | 1-column, taller cards |
| Timeline | Alternating left/right | Single column | Single column, smaller text |
| Contributors | Toggle + grid | Toggle + grid | Toggle + grid, smaller cards |
| Prizes | 2-column | 2-column | 1-column, smaller cards |
| Contact | Centered form | Centered form | Centered form, full width |
| Footer | Row layout | Row layout | Wrapped row |

**Common Breakpoints**:
- Desktop: > 960px
- Tablet: 768px - 960px
- Mobile: < 768px
- Small Mobile: < 640px (some sections)
- Very Small: < 500px (some sections)

---

## Scroll Behavior

**Global Smooth Scroll**: Enabled in `src/index.css` (line 7)
```css
scroll-behavior: smooth;
```

**Navbar Links**: Use anchor hrefs (e.g., `href="#About"`)
**No Custom Scroll Implementation**: Relies on browser native smooth scrolling

---

## Overall Page Flow

1. **Load**: User visits website → index.html loads → React mounts → App.js renders
2. **Hero**: User sees animated hero with registration CTA
3. **Scroll**: User scrolls down to Tracks, Timeline, Contributors, Prizes
4. **Interaction**: User clicks cards for modals, toggles for filtering, forms for contact
5. **CTA**: User clicks "Register Now" → redirects to Google Forms
6. **Contact**: User fills form → EmailJS sends email → success alert
7. **Footer**: User sees social links and copyright at bottom

**No Page Reloads**: Entire experience is single-page with smooth scrolling
