# HackKshetra 2.0 - Design System Documentation

## Color Palette

### Primary Colors

**Dark Theme (Active)**

```javascript
darkTheme = {
  bg: "#090917",              // Main background
  bgLight: "#1C1E27",          // Light background
  primary: "#854CE6",          // Primary accent (purple)
  text_primary: "#F2F3F4",    // Primary text (white)
  text_secondary: "#b1b2b3",   // Secondary text (gray)
  card: "#171721",             // Card background
  card_light: "#191924",      // Light card background
  button: "#854CE6",          // Button background
  white: "#FFFFFF",            // Pure white
  black: "#000000",            // Pure black
}
```

**Light Theme (Defined but Unused)**

```javascript
lightTheme = {
  bg: "#FFFFFF",              // Main background
  bgLight: "#f0f0f0",          // Light background
  primary: "#be1adb",          // Primary accent (pink-purple)
  text_primary: "#111111",    // Primary text (black)
  text_secondary: "#48494a",   // Secondary text (gray)
  card: "#FFFFFF",             // Card background
  button: "#5c5b5b",          // Button background
}
```

### Accent Colors

**Gradients**:
- Hero Button: Linear gradient from hsla(271, 100%, 50%, 1) to hsla(294, 100%, 50%, 1)
- Wrapper Background: Purple and blue gradients (rgba(204, 0, 187, 0.15) to rgba(0, 70, 209, 0.15))
- Glimpse Button: Linear gradient from #854CE6 to #854CE6

**Special Colors**:
- Stars: #f272c8 (pink)
- Scrollbar track: #222a35
- Scrollbar thumb: #575c66
- Scrollbar thumb hover: #626970

### Color Usage Patterns

| Purpose | Color | Location |
|---------|-------|----------|
| Background | #090917 | Main page background |
| Primary Accent | #854CE6 | Buttons, links, highlights |
| Text | #F2F3F4 | Primary text |
| Secondary Text | #b1b2b3 | Descriptions, dates |
| Card Background | rgba(17, 25, 40, 0.83) | Glass-morphism cards |
| Border | rgba(255, 255, 255, 0.125) | Card borders |

---

## Typography

### Font Families

**Primary Font**: Poppins
- Source: Google Fonts
- Import: `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");`
- Usage: Global (index.css)

**Secondary Font**: Montserrat
- Usage: Body text (index.css, but not consistently used)

**Font Weights Available**:
- 100 (Thin)
- 200 (Extra Light)
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semi Bold)
- 700 (Bold)
- 800 (Extra Bold)
- 900 (Black)

### Typography Scale

| Element | Font Size | Font Weight | Line Height | Usage |
|---------|-----------|-------------|-------------|-------|
| Hero Title | 50px → 40px → 32px | 700 | 68px → 48px | Hero section |
| Typewriter Text | 32px → 22px | 600 | 68px → 48px | Hero roles |
| Hero Description | 20px → 16px | 400 | 32px | Hero text |
| Section Titles | 52px → 32px | 600 | - | All sections |
| Section Descriptions | 18px → 16px | 600 | - | All sections |
| Card Titles | 28px | 600 | - | Track cards |
| Prize Titles | 42px → 36px → 32px | 700 | - | Prize cards |
| Prize Amounts | 36px → 32px → 28px | 600 | - | Prize cards |
| Form Labels | 28px | 600 | - | Contact form |
| Input Fields | 18px | 400 | - | Contact form |
| Button Text | 20px → 18px | 600 | - | Buttons |
| Footer Text | 20px | 600 | - | Footer |
| Copyright | 0.9rem | 400 | - | Footer |

### Text Hierarchy

```
H1 (Hero Title)
    └─→ 50px desktop, 40px tablet, 32px mobile
    └─→ Font weight 700

H2 (Section Titles)
    └─→ 52px desktop, 32px mobile
    └─→ Font weight 600

H3 (Card Titles)
    └─→ 28px - 42px depending on context
    └─→ Font weight 600 - 700

Body Text
    └─→ 16px - 20px
    └─→ Font weight 400 - 600

Secondary Text
    └─→ 12px - 18px
    └─→ Font weight 400 - 500
```

---

## Layout System

### Container System

**Main Container**: `max-width: 1100px` (all sections)
**Card Container**: `max-width: 200px` (ProjectCard)
**Form Container**: `max-width: 600px` (Contact form)
**Navbar Container**: `max-width: 1200px`
**Footer Container**: `max-width: 1200px`

### Spacing System

**Padding**:
- Sections: 80px top/bottom (desktop), 66px (tablet), 32px (mobile)
- Cards: 18px - 40px depending on context
- Form: 32px
- Inputs: 12px - 16px

**Margins**:
- Section gaps: 12px - 50px
- Card gaps: 28px - 50px
- Button margins: 2px - 60px

**Gap System**:
- Navigation items: 32px
- Cards: 28px - 50px
- Toggle buttons: Divider width 1.5px

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Desktop | > 960px | Full layout, multi-column |
| Tablet | 768px - 960px | Stacked layout, reduced padding |
| Mobile | < 768px | Single column, hamburger menu |
| Small Mobile | < 640px | Smaller fonts, reduced spacing |
| Very Small | < 500px | Minimal spacing, compact layout |

---

## Component Styling

### Buttons

**Primary Button (Hero)**:
```css
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
border-radius: 50px;
font-size: 20px;
font-weight: 600;
padding: 16px 0;
width: 95%;
max-width: 300px;
box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
```

**Hover Effect**:
```css
transform: scale(1.05);
transition: all 0.4s ease-in-out;
filter: brightness(1);
```

**Secondary Button (Contact)**:
```css
background: hsla(271, 100%, 50%, 1);
border-radius: 12px;
font-size: 18px;
font-weight: 600;
padding: 13px 16px;
```

**Glimpse Button**:
```css
background: linear-gradient(135deg, #854CE6 0%, #854CE6 100%);
border-radius: 50px;
font-size: 1.15rem;
font-weight: 700;
padding: 14px 32px;
box-shadow: 0 4px 15px rgba(133, 76, 230, 0.4);
```

**Navbar Button**:
```css
border: 1px solid #854CE6;
color: #854CE6;
border-radius: 20px;
padding: 10px 20px;
font-size: 16px;
font-weight: 500;
```

### Cards

**Glass-morphism Card Style**:
```css
background-color: rgba(17, 25, 40, 0.83);
border: 1px solid rgba(255, 255, 255, 0.125);
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
border-radius: 16px;
```

**Track Card**:
- Size: 400px × 300px (desktop), 280px × 380px (mobile)
- Padding: 18px 36px
- Image: 100% width, 200px height

**Prize Card**:
- Size: 500px × 400px (desktop), 350px × 380px (tablet), 300px × 360px (mobile)
- Padding: 24px 40px
- Image: 120px × 120px

**Project Card**:
- Size: Max 200px width
- Image: 150px × 120px (rectangular), 150px × 150px (square)
- Padding: 16px

### Inputs

**Text Input**:
```css
background-color: transparent;
border: 1px solid rgba(177, 178, 179, 100);
border-radius: 12px;
padding: 12px 16px;
font-size: 18px;
color: #F2F3F4;
```

**Focus State**:
```css
border: 1px solid #854CE6;
```

**Textarea**:
```css
background-color: transparent;
border: 1px solid rgba(177, 178, 179, 100);
border-radius: 12px;
padding: 12px 16px;
font-size: 18px;
color: #F2F3F4;
rows: 4;
```

---

## Visual Effects

### Glass-morphism

**Card Background**:
```css
background-color: rgba(17, 25, 40, 0.83);
border: 1px solid rgba(255, 255, 255, 0.125);
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
```

**Mobile Menu**:
```css
background: rgba(25, 25, 36, 99);
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
```

### Gradients

**Hero Button**:
```css
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
```

**Wrapper Background**:
```css
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
            linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
```

### Shadows

**Hero Button**:
```css
box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
```

**Card Hover**:
```css
box-shadow: rgba(23, 92, 230, 0.3) 0px 6px 24px;
```

**Glimpse Button**:
```css
box-shadow: 0 4px 15px rgba(133, 76, 230, 0.4);
```

**Glimpse Button Hover**:
```css
box-shadow: 0 6px 20px rgba(133, 76, 230, 0.6);
```

---

## Animations

### Framer Motion Animations

**Head Text Animation**:
```javascript
{
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  }
}
```

**Head Content Animation**:
```javascript
{
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  }
}
```

**Head Container Animation**:
```javascript
{
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", duration: 0.8 }
}
```

### 3D Animations

**Star Field Rotation**:
```javascript
useFrame((state, delta) => {
  ref.current.rotation.x -= delta / 10;
  ref.current.rotation.y -= delta / 15;
});
```

**Earth Auto-Rotation**:
```javascript
<OrbitControls
  autoRotate
  enableZoom={false}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 2}
/>
```

### SVG Animations

**Hero Background Animation**:
- Particles moving along paths
- Durations: 10s, 5s, 12s
- Colors: purple (#945DD6), orange (#F46737), cyan (#13ADC7)
- Repeat: infinite

### Hover Effects

**Button Hover**:
```css
transform: scale(1.05);
transition: all 0.4s ease-in-out;
filter: brightness(1);
```

**Card Hover (ProjectCard)**:
```css
transform: translateY(-4px);
box-shadow: rgba(23, 92, 230, 0.3) 0px 6px 24px;
transition: transform 0.2s ease, box-shadow 0.2s ease;
```

**Glimpse Button Hover**:
```css
transform: translateY(-2px);
box-shadow: 0 6px 20px rgba(133, 76, 230, 0.6);
```

**Link Hover**:
```css
color: #854CE6;
transition: all 0.2s ease-in-out;
```

### Modal Animations

**No explicit animation** - instant show/hide
**Improvement Opportunity**: Add fade-in/scale animation for modals

---

## Responsive Design

### Mobile Navigation

**Desktop** (> 768px):
- Full navigation visible
- Horizontal links
- "Idea Template" button visible

**Mobile** (< 768px):
- Hamburger menu icon
- Navigation items hidden
- Slide-down menu on toggle
- "Idea Template" button in mobile menu

### Hero Section

**Desktop** (> 960px):
- Two-column layout
- Text left, image right
- Title: 50px
- Typewriter: 32px

**Tablet** (640px - 960px):
- Stacked layout
- Text centered
- Title: 40px
- Typewriter: 22px

**Mobile** (< 640px):
- Stacked layout
- Text centered
- Title: 32px
- Typewriter: 22px
- Reduced padding

### Tracks Section

**Desktop**:
- 4-column grid
- Card size: 400px × 300px

**Tablet** (768px):
- 2-column grid
- Card size: 280px × 380px

**Mobile** (< 500px):
- 1-column grid
- Card size: 240px × 340px

### Timeline Section

**Desktop**:
- Alternating left/right cards
- Earth height: 220px

**Mobile** (< 768px):
- Single column
- Earth height: 300px
- Smaller text

### Contributors Section

**Desktop**:
- Multi-column grid
- Card size: 200px width

**Mobile** (< 768px):
- Wrapped grid
- Smaller cards
- Smaller toggle buttons

### Prizes Section

**Desktop**:
- 2-column grid
- Card size: 500px × 400px
- Prize title: 42px
- Prize amount: 36px

**Tablet** (768px):
- 2-column grid
- Card size: 350px × 380px
- Prize title: 36px
- Prize amount: 32px

**Mobile** (< 500px):
- 1-column grid
- Card size: 300px × 360px
- Prize title: 32px
- Prize amount: 28px

### Contact Section

**Desktop**:
- Form width: 95%, max 600px
- Input font size: 18px

**Mobile** (< 768px):
- Form width: 95%, max 600px
- Input font size: 18px
- Full width on very small screens

### Footer

**Desktop**:
- Row layout
- Social icons: 1.5rem
- Nav links: 1.2rem

**Mobile** (< 768px):
- Wrapped row
- Social icons: 1.5rem
- Nav links: 1rem
- Font size: 12px

---

## Accessibility

### Current State

**Limited Accessibility Implementation**:
- No ARIA labels
- No keyboard navigation optimization
- No focus indicators (except default browser)
- No screen reader optimizations
- No skip links
- No alt text on all images (some missing)

### Identified Issues

1. **Missing Alt Text**: Some images may lack descriptive alt text
2. **No ARIA Labels**: Interactive elements lack ARIA attributes
3. **Focus Management**: No custom focus styles
4. **Color Contrast**: Not verified (likely sufficient due to high contrast)
5. **Keyboard Navigation**: Not optimized for keyboard-only users
6. **Screen Reader**: Not tested with screen readers

### Recommendations

1. Add ARIA labels to all interactive elements
2. Ensure all images have descriptive alt text
3. Add custom focus indicators
4. Implement keyboard navigation for modals
5. Add skip to main content link
6. Test with screen readers
7. Verify color contrast ratios
8. Add semantic HTML where appropriate

---

## Custom Scrollbar

**Scrollbar Styling** (index.css):
```css
::-webkit-scrollbar {
  width: 4px;
  height: 80px;
}

::-webkit-scrollbar-track {
  background: #222a35;
}

::-webkit-scrollbar-thumb {
  background: #575c66;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #626970;
}
```

---

## Design Tokens

### Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Small gaps |
| sm | 8px | Card padding |
| md | 12px | Input padding |
| lg | 16px | Section padding |
| xl | 24px | Card padding |
| 2xl | 32px | Form padding |
| 3xl | 40px | Large padding |
| 4xl | 50px | Section gaps |

### Border Radius Tokens

| Token | Value | Usage |
|-------|-------|-------|
| sm | 6px | Small elements |
| md | 12px | Inputs, buttons |
| lg | 16px | Cards |
| xl | 20px | Navbar button |
| 2xl | 50px | Hero button |

### Font Size Tokens

| Token | Value | Usage |
|-------|-------|-------|
| xs | 12px | Small text |
| sm | 14px | Secondary text |
| base | 16px | Body text |
| lg | 18px | Descriptions |
| xl | 20px | Buttons |
| 2xl | 28px | Card titles |
| 3xl | 32px | Section titles (mobile) |
| 4xl | 42px | Prize titles |
| 5xl | 52px | Section titles (desktop) |

---

## Image Guidelines

### Image Dimensions

| Image Type | Recommended Size | Current Size |
|------------|-----------------|--------------|
| Hero Image | 400 × 400px | 400 × 400px |
| Track Images | 400 × 300px | Varies (large) |
| Prize Images | 120 × 120px | 120 × 120px |
| Sponsor Logos | 150 × 150px | Varies |
| Coordinator Photos | 150 × 120px | External URLs |
| Timeline Icons | 50 × 50px | Varies |

### Image Optimization

**Current State**:
- No optimization
- Large file sizes (some > 1MB)
- No WebP format
- No lazy loading

**Recommendations**:
1. Compress images (use TinyPNG or similar)
2. Convert to WebP format
3. Implement lazy loading
4. Use responsive images (srcset)
5. Consider CDN for image delivery

---

## Animation Performance

### Performance Considerations

**3D Animations**:
- Stars: 5000 points, may impact low-end devices
- Earth: 3D model loading, may impact page load time
- Recommendation: Add loading states, consider LOD (Level of Detail)

**Framer Motion**:
- Spring animations are generally performant
- No complex layout thrashing
- Recommendation: Use will-change property for animated elements

**SVG Animations**:
- SVG paths are lightweight
- animateMotion is performant
- No performance issues identified

### Recommendations

1. Add loading states for 3D models
2. Implement intersection observer for lazy loading
3. Use will-change for animated elements
4. Consider reducing star count for mobile
5. Add performance monitoring

---

## Design System Summary

### Strengths

1. Consistent color palette
2. Responsive design across breakpoints
3. Modern glass-morphism effects
4. Smooth animations
5. Good visual hierarchy

### Weaknesses

1. Limited accessibility
2. No design tokens (hardcoded values)
3. Inconsistent spacing (mixed units)
4. No component library (styled components scattered)
5. No design documentation (until now)

### Improvement Opportunities

1. Create design token system
2. Implement comprehensive accessibility
3. Add component library documentation
4. Standardize spacing system
5. Add design system testing
6. Create Figma design system
7. Implement dark/light mode toggle
8. Add more animation variants

---

## Preserving Visual Identity

When making changes for the new edition:

### DO

1. Keep the purple primary color (#854CE6) unless rebranding
2. Maintain glass-morphism card style
3. Preserve gradient effects on buttons
4. Keep 3D visual effects (stars, Earth)
5. Maintain responsive breakpoints
6. Preserve animation timing and easing
7. Keep Poppins font family
8. Maintain dark theme aesthetic

### DON'T

1. Change the color scheme without approval
2. Remove 3D effects (they define the visual identity)
3. Break the glass-morphism style
4. Change typography drastically
5. Remove animations
6. Break responsive layouts
7. Remove gradient effects
8. Change the overall dark theme aesthetic

### IF CHANGING

1. Test color contrast ratios
2. Verify animations still perform well
3. Ensure responsive behavior is maintained
4. Test on multiple devices
5. Get stakeholder approval for major changes
6. Document any design system changes
7. Update this documentation
