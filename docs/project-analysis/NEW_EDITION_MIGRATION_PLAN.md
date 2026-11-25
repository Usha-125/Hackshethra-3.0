# HackKshetra 2.0 - New Edition Migration Plan

## Overview

This document outlines the complete migration plan from HackKshetra 2.0 to the new edition. The plan is organized by priority, dependencies, and implementation order.

---

## Migration Categories

### CATEGORY A: Mandatory Event Information (CRITICAL)

**Items that MUST be updated before the website can launch for the new edition.**

#### A1. Edition and Year Updates

**Files to Modify**:
- `src/components/sections/Hero.jsx` (line 264)
- `src/components/sections/Footer.jsx` (lines 87, 99)
- `public/index.html` (meta description if year mentioned)

**Changes Required**:
1. Update edition number (e.g., "2.0" → "3.0")
2. Update year (e.g., "2025" → "2026")
3. Update copyright year in footer

**Dependencies**: None
**Risk**: LOW - Simple text changes
**Estimated Time**: 5 minutes

---

#### A2. Registration Information

**Files to Modify**:
- `src/data/constants.js` (Bio.resume, experiences array)

**Changes Required**:
1. Update Google Forms URL (Bio.resume)
2. Update registration opening date (experiences[0].company)
3. Update idea submission deadline (experiences[1].company)
4. Update shortlist announcement date (experiences[2].company)
5. Update hackathon start date and time (experiences[3].company, experiences[3].date)
6. Update hackathon end date and time (experiences[4].company, experiences[4].date)

**Dependencies**: Information from organizers
**Risk**: HIGH - Incorrect dates will mislead participants
**Estimated Time**: 10 minutes

**Verification Required**:
- Test Google Forms link is active
- Verify dates are correct
- Test date format consistency

---

#### A3. Prize Information

**Files to Modify**:
- `src/data/constants.js` (education array)

**Changes Required**:
1. Update 1st prize amount (education[0].amount)
2. Update 1st prize description (education[0].description)
3. Update 2nd prize amount (education[1].amount)
4. Update 2nd prize description (education[1].description)
5. Replace prize images if changed (1st.jpg, 2nd.jpg)

**Dependencies**: Information from organizers
**Risk**: HIGH - Incorrect amounts will mislead participants
**Estimated Time**: 10 minutes

---

#### A4. Event Description and Taglines

**Files to Modify**:
- `src/data/constants.js` (Bio object)
- `src/components/sections/Hero.jsx` (optional if edition number in title)

**Changes Required**:
1. Update event name (Bio.name)
2. Update event description (Bio.description)
3. Update taglines (Bio.roles array)
4. Update hero title if edition number hardcoded

**Dependencies**: Information from organizers
**Risk**: MEDIUM - Text changes only
**Estimated Time**: 15 minutes

---

#### A5. Contact Configuration

**Files to Modify**:
- `src/components/sections/Contact.jsx` (EmailJS configuration)

**Changes Required**:
1. Verify EmailJS service is active
2. Update service ID if changed
3. Update template ID if changed
4. Update public key if changed
5. Test email sending functionality

**Dependencies**: EmailJS account access
**Risk**: HIGH - Contact form will fail if incorrect
**Estimated Time**: 15 minutes

**Verification Required**:
- Test form submission
- Verify email received
- Check for quota limits

---

### CATEGORY B: Visual Updates (HIGH PRIORITY)

**Items that SHOULD be updated to maintain visual freshness and accuracy.**

#### B1. Hero Image

**Files to Modify**:
- `src/images/HeroImage.jpg`

**Changes Required**:
1. Replace with new edition hero image
2. Maintain aspect ratio (square or 4:3)
3. Optimize file size (< 500KB)

**Dependencies**: New hero image from organizers
**Risk**: MEDIUM - Image aspect ratio mismatch
**Estimated Time**: 5 minutes

---

#### B2. Track Images

**Files to Modify**:
- `src/images/AI_Agri.png`
- `src/images/AI_Education.png`
- `src/images/AI_Health.png`
- `src/images/AI_IOT.png`

**Changes Required**:
1. Replace with new track images if tracks changed
2. Maintain consistent sizing
3. Optimize file size (< 500KB each)

**Dependencies**: New track images from organizers
**Risk**: MEDIUM - Visual inconsistency if sizes differ
**Estimated Time**: 20 minutes

---

#### B3. Track Information

**Files to Modify**:
- `src/data/constants.js` (skills array)
- `src/components/sections/Skills.jsx` (trackDescriptions object)

**Changes Required**:
1. Update track titles if changed
2. Update track descriptions
3. Update track images in constants.js
4. Add/remove tracks if track count changed

**Dependencies**: Information from organizers
**Risk**: MEDIUM - UI may break if track count changes significantly
**Estimated Time**: 30 minutes

---

#### B4. Sponsor Images and Links

**Files to Modify**:
- `src/data/constants.js` (projects array with category "sponsors")
- `src/images/digitoad.png`
- `src/images/organic.png`
- `src/images/languify.png`
- `src/images/Sharp.png`
- `src/images/classify.jpg`

**Changes Required**:
1. Update sponsor names
2. Update sponsor images
3. Update sponsor links
4. Add/remove sponsors as needed

**Dependencies**: Sponsor information from organizers
**Risk**: MEDIUM - Broken links if URLs incorrect
**Estimated Time**: 30 minutes

**Verification Required**:
- Test all sponsor links
- Verify images load correctly

---

#### B5. Association Partners

**Files to Modify**:
- `src/data/constants.js` (projects array with category "association")
- `src/images/natya.jpg`
- `src/images/pixelhut.jpg`
- `src/images/swara.jpg`

**Changes Required**:
1. Update partner names
2. Update partner images
3. Add/remove partners as needed

**Dependencies**: Partner information from organizers
**Risk**: LOW - Visual only
**Estimated Time**: 15 minutes

---

#### B6. Coordinator Photos

**Files to Modify**:
- `src/data/constants.js` (projects array with category "web app")
- OR download and host locally (recommended)

**Changes Required**:
1. **CRITICAL**: Download all coordinator images locally
2. Update constants.js to use local imports
3. Remove external URL dependencies
4. Update coordinator names
5. Update coordinator images
6. Add/remove coordinators as needed

**Dependencies**: Coordinator photos from organizers
**Risk**: HIGH - External URLs may break
**Estimated Time**: 45 minutes

**Recommended Approach**:
1. Create `src/images/coordinators/` directory
2. Download all coordinator images
3. Rename consistently (e.g., coordinator-1.jpg, coordinator-2.jpg)
4. Update constants.js to import from local files
5. Remove all external VVCE URLs

---

#### B7. Patron and Convenor

**Files to Modify**:
- `src/data/constants.js` (projects array with category "patron" and "convenor")

**Changes Required**:
1. Update patron name and image
2. Update convenor name and image
3. Download images locally (recommended)

**Dependencies**: Patron and convenor information from organizers
**Risk**: MEDIUM - External URLs may break
**Estimated Time**: 15 minutes

---

#### B8. Glimpses Section

**Files to Modify**:
- `src/components/sections/Education.jsx`
- `src/images/glimpse.png`

**Changes Required**:
1. Replace glimpse image with new edition photos
2. Update glimpse description
3. Optimize image size (< 500KB)

**Dependencies**: Glimpse photo and description from organizers
**Risk**: MEDIUM - Image too large for mobile
**Estimated Time**: 15 minutes

---

#### B9. Social Media Links

**Files to Modify**:
- `src/data/constants.js` (Bio.linkedin, Bio.insta)

**Changes Required**:
1. Update LinkedIn URL if changed
2. Update Instagram URL if changed
3. Test links are active

**Dependencies**: Social media accounts from organizers
**Risk**: LOW - Links may be outdated
**Estimated Time**: 5 minutes

---

#### B10. Idea Template

**Files to Modify**:
- `public/idea_template.pptx`
- `src/data/constants.js` (Bio.github - verify path)

**Changes Required**:
1. Replace with new idea template
2. Verify download link works
3. Test file is accessible

**Dependencies**: New template from organizers
**Risk**: LOW - File may not download
**Estimated Time**: 5 minutes

---

### CATEGORY C: Functional Updates (MEDIUM PRIORITY)

**Items that MAY need updating based on event requirements.**

#### C1. Perks Section

**Files to Modify**:
- `src/data/constants.js` (projects array with category "Perks")

**Changes Required**:
1. Update perk text if changed
2. Add/remove perks as needed
3. Update perk count if changed

**Dependencies**: Perk information from organizers
**Risk**: LOW - Text changes only
**Estimated Time**: 10 minutes

---

#### C2. Timeline Icons

**Files to Modify**:
- `src/images/Reg_starts.jpeg`
- `src/images/idea_submission.png`
- `src/images/shortlist.png`
- `src/images/hack_begins.png`
- `src/images/hack_ends.png`

**Changes Required**:
1. Replace icons if visual refresh desired
2. Maintain consistent sizing
3. Optimize file size

**Dependencies**: Optional - visual preference
**Risk**: LOW - Visual only
**Estimated Time**: 15 minutes

---

#### C3. Section Titles and Descriptions

**Files to Modify**:
- `src/components/sections/Skills.jsx`
- `src/components/sections/Projects.jsx`
- `src/components/sections/Education.jsx`
- `src/components/sections/Contact.jsx`

**Changes Required**:
1. Update section titles if wording changed
2. Update section descriptions if changed
3. Review all text for consistency

**Dependencies**: Content review
**Risk**: LOW - Text changes only
**Estimated Time**: 20 minutes

---

#### C4. Navigation Labels

**Files to Modify**:
- `src/components/Navbar.jsx`

**Changes Required**:
1. Update navigation labels if section names changed
2. Update mobile menu labels
3. Update button text

**Dependencies**: Section name changes
**Risk**: LOW - Text changes only
**Estimated Time**: 5 minutes

---

#### C5. HTML Meta Tags

**Files to Modify**:
- `public/index.html`

**Changes Required**:
1. Update page title if needed
2. Update meta description with new edition info
3. Update favicon if changed

**Dependencies**: Branding changes
**Risk**: LOW - SEO impact
**Estimated Time**: 5 minutes

---

### CATEGORY D: Technical Improvements (MEDIUM PRIORITY)

**Items that SHOULD be improved for better maintainability and performance.**

#### D1. Image Optimization

**Files to Modify**:
- All images in `src/images/`

**Changes Required**:
1. Compress all images (target < 500KB)
2. Convert to WebP format
3. Remove unused images
4. Optimize hero image and glimpse image (currently > 1MB)

**Dependencies**: None
**Risk**: LOW - Performance improvement
**Estimated Time**: 1 hour

**Tools Recommended**:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (CLI tool)

---

#### D2. Remove External Image Dependencies

**Files to Modify**:
- `src/data/constants.js`

**Changes Required**:
1. Download all coordinator images locally
2. Update constants.js to use local imports
3. Remove all external VVCE URLs
4. Create organized image directory structure

**Dependencies**: None
**Risk**: MEDIUM - File organization
**Estimated Time**: 45 minutes

---

#### D3. Add Error Handling for 3D Models

**Files to Modify**:
- `src/components/canvas/Earth.jsx`
- `src/components/canvas/Stars.jsx`

**Changes Required**:
1. Add error boundary around 3D components
2. Add loading state while models load
3. Add fallback UI if models fail to load
4. Log errors for debugging

**Dependencies**: None
**Risk**: LOW - Code changes
**Estimated Time**: 30 minutes

---

#### D4. Add Loading States

**Files to Modify**:
- Multiple components

**Changes Required**:
1. Add loading spinners for 3D models
2. Add skeleton screens for images
3. Add progress indicators
4. Add fallback content

**Dependencies**: None
**Risk**: LOW - UX improvement
**Estimated Time**: 1 hour

---

#### D5. Centralize Event Configuration

**Files to Modify**:
- Create new file: `src/data/eventConfig.js`
- Update all components to use eventConfig

**Changes Required**:
1. Create centralized configuration file
2. Move edition, year, dates to eventConfig
3. Update components to import from eventConfig
4. Remove hardcoded values

**Dependencies**: None
**Risk**: MEDIUM - Refactoring
**Estimated Time**: 2 hours

**Benefits**:
- Easier future updates
- Single source of truth
- Better maintainability

---

#### D6. Fix Theme Color Issue

**Files to Modify**:
- `src/utils/Themes.js`
- `src/components/sections/Footer.jsx`

**Changes Required**:
1. Define soft2 color in Themes.js
2. Or use existing color (text_secondary)
3. Test footer rendering

**Dependencies**: None
**Risk**: LOW - Visual fix
**Estimated Time**: 5 minutes

---

#### D7. Remove Unused Code

**Files to Modify**:
- `src/components/cards/EducationCard.jsx` (delete if unused)
- `src/images/` (remove unused images)
- `public/index_demo.html` (delete if unused)

**Changes Required**:
1. Identify all unused files
2. Delete unused components
3. Delete unused images
4. Clean up imports

**Dependencies**: None
**Risk**: LOW - Code cleanup
**Estimated Time**: 30 minutes

---

### CATEGORY E: Optional New Features (LOW PRIORITY)

**Items that COULD be added to enhance the website.**

#### E1. FAQ Section

**Implementation Required**:
1. Create new FAQ component
2. Add FAQ section to App.js
3. Add FAQ link to Navbar
4. Style consistently with existing sections

**Dependencies**: FAQ content from organizers
**Risk**: LOW - New feature
**Estimated Time**: 3 hours

---

#### E2. Rules and Guidelines Section

**Implementation Required**:
1. Create new Rules component
2. Add Rules section to App.js
3. Add Rules link to Navbar
4. Style consistently

**Dependencies**: Rules content from organizers
**Risk**: LOW - New feature
**Estimated Time**: 3 hours

---

#### E3. Venue Information

**Implementation Required**:
1. Add venue details to constants.js
2. Display venue in appropriate section
3. Add map integration (optional)

**Dependencies**: Venue information from organizers
**Risk**: LOW - Content addition
**Estimated Time**: 2 hours

---

#### E4. Countdown Timer

**Implementation Required**:
1. Add countdown component
2. Display in Hero section
3. Calculate days/hours/minutes/seconds to hackathon
4. Style consistently

**Dependencies**: Hackathon start date
**Risk**: LOW - New feature
**Estimated Time**: 2 hours

---

#### E5. Lazy Loading Implementation

**Implementation Required**:
1. Implement Intersection Observer
2. Add lazy loading to images
3. Add lazy loading to 3D models
4. Test performance improvement

**Dependencies**: None
**Risk**: MEDIUM - Performance optimization
**Estimated Time**: 2 hours

---

#### E6. Accessibility Improvements

**Implementation Required**:
1. Add ARIA labels
2. Add keyboard navigation
3. Add focus indicators
4. Add skip links
5. Test with screen reader

**Dependencies**: None
**Risk**: LOW - Accessibility compliance
**Estimated Time**: 4 hours

---

#### E7. SEO Optimization

**Implementation Required**:
1. Add comprehensive meta tags
2. Add Open Graph tags
3. Add Twitter Card tags
4. Add structured data
5. Add sitemap.xml

**Dependencies**: None
**Risk**: LOW - SEO improvement
**Estimated Time**: 2 hours

---

#### E8. Analytics Integration

**Implementation Required**:
1. Add Google Analytics
2. Add event tracking
3. Add form submission tracking
4. Test tracking works

**Dependencies**: Google Analytics account
**Risk**: LOW - Analytics setup
**Estimated Time**: 1 hour

---

## Implementation Order

### Phase 1: Critical Updates (Day 1)

**Priority**: CRITICAL - Must complete before any other work

1. Download and organize all new images from organizers
2. Update edition number and year (A1)
3. Update registration information (A2)
4. Update prize information (A3)
5. Update event description and taglines (A4)
6. Verify and test EmailJS configuration (A5)
7. Download coordinator images locally (B6 - CRITICAL)
8. Update constants.js with local coordinator images

**Estimated Time**: 4 hours
**Dependencies**: Information from organizers

---

### Phase 2: Visual Updates (Day 2)

**Priority**: HIGH - Should complete before launch

9. Replace hero image (B1)
10. Update track information and images (B3)
11. Update sponsor information and images (B4)
12. Update association partners (B5)
13. Update patron and convenor (B7)
14. Update glimpses section (B8)
15. Update social media links (B9)
16. Replace idea template (B10)
17. Update perks section (C1)

**Estimated Time**: 3 hours
**Dependencies**: Visual assets from organizers

---

### Phase 3: Technical Improvements (Day 3)

**Priority**: MEDIUM - Should complete before launch

18. Optimize all images (D1)
19. Remove external image dependencies (D2)
20. Add error handling for 3D models (D3)
21. Add loading states (D4)
22. Fix theme color issue (D6)
23. Remove unused code (D7)

**Estimated Time**: 3 hours
**Dependencies**: None

---

### Phase 4: Testing and Verification (Day 4)

**Priority**: CRITICAL - Must complete before launch

24. Test all external links
25. Test Google Forms link
26. Test contact form with EmailJS
27. Test on multiple browsers
28. Test on mobile devices
29. Test 3D rendering
30. Verify all dates are correct
31. Verify all images load correctly
32. Verify responsive design

**Estimated Time**: 2 hours
**Dependencies**: All previous phases

---

### Phase 5: Optional Enhancements (Post-Launch)

**Priority**: LOW - Can be done after launch

33. Centralize event configuration (D5)
34. Add FAQ section (E1)
35. Add Rules section (E2)
36. Add venue information (E3)
37. Add countdown timer (E4)
38. Implement lazy loading (E5)
39. Accessibility improvements (E6)
40. SEO optimization (E7)
41. Analytics integration (E8)

**Estimated Time**: 17 hours (spread over multiple weeks)
**Dependencies**: None

---

## Risk Assessment

### High Risk Items

1. **External Image Dependencies** (B6)
   - Risk: Images will break if VVCE website changes
   - Mitigation: Download all images locally before launch
   - Verification: Test all images load correctly

2. **EmailJS Configuration** (A5)
   - Risk: Contact form will fail if credentials invalid
   - Mitigation: Test form submission before launch
   - Verification: Send test email

3. **Incorrect Dates** (A2)
   - Risk: Participants will be misinformed
   - Mitigation: Double-check all dates with organizers
   - Verification: Review timeline section

4. **Registration Link** (A2)
   - Risk: Participants cannot register
   - Mitigation: Test Google Forms link is active
   - Verification: Click "Register Now" button

### Medium Risk Items

1. **Image Optimization** (D1)
   - Risk: Large images slow page load
   - Mitigation: Compress all images before launch
   - Verification: Test page load speed

2. **3D Model Loading** (D3)
   - Risk: 3D components may fail
   - Mitigation: Add error handling
   - Verification: Test on multiple devices

3. **External Links** (B4, B9)
   - Risk: Links may be broken
   - Mitigation: Test all links before launch
   - Verification: Click all links

### Low Risk Items

1. **Text Changes** (C3, C4)
   - Risk: Typos or inconsistencies
   - Mitigation: Proofread all text
   - Verification: Review all sections

2. **Visual Changes** (B1, B2)
   - Risk: Visual inconsistency
   - Mitigation: Maintain design system
   - Verification: Visual review

---

## Rollback Plan

### If Critical Issues Arise

1. **Keep Backup**: Maintain backup of working version before changes
2. **Git Commit**: Commit working state before starting migration
3. **Staged Deployment**: Deploy to staging first
4. **Quick Revert**: Have rollback procedure ready

### Rollback Steps

1. Restore from Git backup
2. Revert to previous commit
3. Redeploy previous version
4. Communicate with stakeholders

---

## Information Required From Organizers

### Critical (Required Before Phase 1)

1. New edition number (e.g., 3.0)
2. Event year (e.g., 2026)
3. Registration Google Forms URL
4. Registration opening date
5. Idea submission deadline
6. Shortlist announcement date
7. Hackathon start date and time
8. Hackathon end date and time
9. Prize amounts
10. Prize descriptions
11. Event description
12. Event taglines
13. Coordinator photos
14. Patron photo
15. Convenor photo

### High Priority (Required Before Phase 2)

16. Hero image
17. Track images (4 tracks)
18. Track titles
19. Track descriptions
20. Sponsor logos
21. Sponsor names
22. Sponsor website URLs
23. Association partner logos
24. Association partner names
25. Glimpse photo
26. Glimpse description
27. Social media URLs
28. Idea template file
29. Perks list

### Medium Priority (Required for Optional Features)

30. FAQ content
31. Rules content
32. Venue information
33. Additional sections desired

---

## Success Criteria

### Phase 1 Success

- [ ] All dates updated and verified
- [ ] Edition number and year updated
- [ ] Registration link tested and working
- [ ] Prize information updated
- [ ] Coordinator images downloaded locally
- [ ] EmailJS tested and working

### Phase 2 Success

- [ ] All images replaced
- [ ] All sponsors updated
- [ ] All partners updated
- [ ] All visual content verified
- [ ] Social media links tested
- [ ] Idea template tested

### Phase 3 Success

- [ ] All images optimized
- [ ] No external image dependencies
- [ ] Error handling added
- [ ] Loading states added
- [ ] Unused code removed

### Phase 4 Success

- [ ] All links tested
- [ ] Contact form tested
- [ ] Multiple browsers tested
- [ ] Mobile devices tested
- [ ] 3D rendering tested
- [ ] Responsive design verified

### Overall Success

- [ ] Website ready for new edition
- [ ] All critical information updated
- [ ] No broken links
- [ ] No broken images
- [ ] Contact form working
- [ ] Registration link working
- [ ] Performance acceptable
- [ ] Mobile responsive

---

## Timeline Summary

| Phase | Duration | Dependencies | Start After |
|-------|----------|--------------|-------------|
| Phase 1: Critical Updates | 4 hours | Organizer info | Day 1 |
| Phase 2: Visual Updates | 3 hours | Visual assets | Phase 1 |
| Phase 3: Technical Improvements | 3 hours | None | Phase 2 |
| Phase 4: Testing | 2 hours | All phases | Phase 3 |
| Phase 5: Optional Enhancements | 17 hours | None | Post-launch |

**Total Critical Time**: 12 hours (spread over 2-3 days)
**Total Time with Optional**: 29 hours (spread over 2-3 weeks)

---

## Notes

1. **Centralized Configuration**: Consider implementing D5 (centralized event configuration) during Phase 1 if time permits. This will make future updates much easier.

2. **Image Management**: Create a systematic approach to image naming and organization before starting Phase 2.

3. **Testing**: Allocate sufficient time for Phase 4 testing. This is critical to catch issues before launch.

4. **Backup**: Always maintain a backup of the working version before making changes.

5. **Communication**: Keep organizers informed of progress and any issues that require their input.

6. **Documentation**: Update this document as changes are made to track progress.

7. **Version Control**: Use Git commits to track changes and enable easy rollback if needed.
