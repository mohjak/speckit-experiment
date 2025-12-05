# Tasks: Modern Personal Blog Website

**Input**: Design documents from `/specs/001-modern-blog-website/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/types.md

**Tests**: Tests are NOT explicitly requested in the specification, so test tasks are excluded. Focus is on implementation only.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

Using Next.js App Router structure at repository root:
- Pages: `app/`
- Components: `components/`
- Data: `data/`
- Utilities: `lib/`
- Types: `types/`
- Tests: `__tests__/`
- Static assets: `public/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Next.js 14+ project with TypeScript and App Router in repository root
- [x] T002 [P] Install and configure Tailwind CSS in tailwind.config.ts
- [x] T003 [P] Configure Next.js for static site generation in next.config.js with output: 'export'
- [x] T004 [P] Configure TypeScript with path aliases in tsconfig.json (@/ pointing to root)
- [ ] T005 [P] Setup Jest and React Testing Library configuration in jest.config.js
- [x] T006 Create project directory structure: app/, components/, data/, lib/, types/, public/images/, __tests__/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 [P] Define TypeScript interfaces in types/index.ts: BlogPost, AuthorProfile, SocialLink, FAQItem
- [x] T008 [P] Create constants file in lib/constants.ts with MAX_TITLE_LENGTH, MAX_EXCERPT_LENGTH, DEFAULT_PLACEHOLDER_IMAGE, NAV_ITEMS
- [x] T009 [P] Create error classes in lib/errors.ts: NoBlogPostsError, BlogPostNotFoundError, ValidationError
- [x] T010 [P] Implement getFeaturedPost utility in lib/blogUtils.ts (selects most recent post by publishedDate)
- [x] T011 [P] Implement sortPostsByDate utility in lib/blogUtils.ts (sorts by publishedDate descending)
- [x] T012 [P] Implement truncateText utility in lib/blogUtils.ts (truncates with ellipsis)
- [x] T013 [P] Implement getFeaturedImage utility in lib/blogUtils.ts (returns image path or placeholder)
- [x] T014 [P] Implement formatDate utility in lib/blogUtils.ts (converts ISO date to readable format)
- [x] T015 [P] Implement getBlogPostBySlug utility in lib/blogUtils.ts (finds post by slug)
- [x] T016 [P] Create placeholder image in public/images/placeholder.jpg
- [x] T017 Create Navigation component in components/Navigation.tsx with responsive hamburger menu
- [x] T018 Create root layout in app/layout.tsx with Navigation component and global Tailwind imports in app/globals.css
- [x] T019 Create 404 error page in app/not-found.tsx with navigation back to home

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Featured Blog Post on Landing Page (Priority: P1) 🎯 MVP

**Goal**: Display landing page with exactly one featured blog post prominently positioned with title, excerpt, publication date, featured image, and call-to-action

**Independent Test**: Navigate to homepage and verify that exactly one featured blog post is displayed above the fold with all required fields (title, excerpt, date, image, "Read More" link). Clicking the CTA should navigate to the full blog post page.

### Implementation for User Story 1

- [x] T020 [P] [US1] Create mocked blog posts data in data/blogPosts.ts with 20 BlogPost objects including realistic content
- [x] T021 [P] [US1] Create author profile data in data/author.ts with name, bio, expertise, and social links
- [ ] T022 [P] [US1] Add blog post images to public/images/ (at least 5-10 unique images for variety)
- [x] T023 [US1] Create FeaturedPost component in components/FeaturedPost.tsx with hero styling and responsive layout
- [x] T024 [US1] Create landing page in app/page.tsx that uses getFeaturedPost utility and renders FeaturedPost component
- [x] T025 [US1] Create individual blog post page in app/blogs/[slug]/page.tsx with generateStaticParams for all 20 posts
- [x] T026 [US1] Style FeaturedPost component with Tailwind CSS for modern, sleek design with attention-grabbing layout
- [x] T027 [US1] Ensure mobile responsiveness: featured post adapts to single-column layout on small screens

**Checkpoint**: At this point, User Story 1 should be fully functional - landing page displays featured post, clicking CTA navigates to full post

---

## Phase 4: User Story 2 - Navigate and Browse All Blog Posts (Priority: P2)

**Goal**: Provide blogs page listing all 20 blog posts with preview cards showing title, excerpt, date, featured image, and author name in reverse chronological order

**Independent Test**: Navigate to /blogs and verify all 20 blog posts are displayed as preview cards with complete information. Posts should be ordered newest first. Clicking any card should navigate to that blog post's full content.

### Implementation for User Story 2

- [x] T028 [P] [US2] Create BlogCard component in components/BlogCard.tsx for blog post preview cards
- [x] T029 [US2] Create blogs listing page in app/blogs/page.tsx that displays all 20 posts using sortPostsByDate utility
- [x] T030 [US2] Implement BlogCard styling with Tailwind CSS for consistent card design with hover effects
- [x] T031 [US2] Apply truncateText utility to titles (60 chars) and excerpts (150 chars) in BlogCard component
- [x] T032 [US2] Ensure BlogCard uses getFeaturedImage utility for image display with placeholder fallback
- [x] T033 [US2] Implement responsive grid layout for blog cards (1 column mobile, 2 columns tablet, 3 columns desktop)
- [x] T034 [US2] Update Navigation component to highlight active "Blogs" link when on blogs page

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently - can browse featured post on landing OR browse all posts on blogs page

---

## Phase 5: User Story 3 - Learn About the Blog Author (Priority: P3)

**Goal**: Display about page with author profile including bio, profile image, expertise areas, and social media/contact links

**Independent Test**: Navigate to /about and verify biographical content, profile image, expertise list, and clickable social links are displayed in a visually appealing layout.

### Implementation for User Story 3

- [ ] T035 [P] [US3] Add author profile image to public/images/author.jpg
- [x] T036 [US3] Create about page in app/about/page.tsx that imports and displays author data from data/author.ts
- [x] T037 [US3] Style about page with Tailwind CSS for modern, clean layout with profile image, bio, and expertise sections
- [x] T038 [US3] Implement social links section with icons/buttons that open external platforms in new tabs
- [x] T039 [US3] Ensure about page is fully responsive with single-column layout on mobile
- [x] T040 [US3] Update Navigation component to highlight active "About" link when on about page

**Checkpoint**: At this point, User Stories 1, 2, AND 3 should all work independently

---

## Phase 6: User Story 4 - Find Answers to Common Questions (Priority: P4)

**Goal**: Display FAQ page with 5-10 questions and answers organized in a scannable, accordion format

**Independent Test**: Navigate to /faq and verify at least 5-10 common questions are displayed. Clicking a question should reveal/expand the answer. The format should be easily scannable.

### Implementation for User Story 4

- [x] T041 [P] [US4] Create mocked FAQ data in data/faqs.ts with 8-10 FAQItem objects covering common questions
- [x] T042 [P] [US4] Create FAQItem component in components/FAQItem.tsx with accordion expand/collapse functionality
- [x] T043 [US4] Create FAQ page in app/faq/page.tsx that imports and displays sorted FAQ items from data/faqs.ts
- [x] T044 [US4] Implement accordion interaction using React state or HTML details/summary elements
- [x] T045 [US4] Style FAQItem component with Tailwind CSS for clean, scannable design with expand/collapse indicators
- [x] T046 [US4] Ensure FAQ page is fully responsive with readable typography on all screen sizes
- [x] T047 [US4] Update Navigation component to highlight active "FAQ" link when on FAQ page

**Checkpoint**: All user stories should now be independently functional - complete blog website with landing, blogs, about, and FAQ pages

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and overall site quality

- [x] T048 [P] Create custom 404 page styling in app/not-found.tsx with branded design matching site aesthetic
- [x] T049 [P] Add meta tags and SEO optimization to app/layout.tsx (title, description, Open Graph tags)
- [ ] T050 [P] Optimize all images in public/images/ for web (compression, appropriate sizes)
- [x] T051 [P] Add favicon and other PWA assets in public/
- [x] T052 Configure Next.js Image component optimization settings in next.config.js
- [x] T053 Implement consistent color scheme and typography across all pages using Tailwind theme configuration
- [x] T054 Add smooth scroll behavior and page transition animations with Tailwind
- [x] T055 [P] Verify navigation menu works correctly on all pages with proper active states
- [x] T056 Test site build with `npm run build` and verify all 20 blog post pages generate correctly
- [ ] T057 Test site on multiple devices and browsers for responsive design compliance
- [ ] T058 [P] Run accessibility audit and fix any WCAG compliance issues
- [x] T059 [P] Validate site meets performance criteria: landing page loads in < 2 seconds
- [ ] T060 Final code cleanup: remove console logs, unused imports, and ensure TypeScript strict mode compliance

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup (Phase 1) completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational (Phase 2) completion
  - User Story 1 (P1): Can start after Foundational - No dependencies on other stories
  - User Story 2 (P2): Can start after Foundational - Links to US1 blog posts but independently testable
  - User Story 3 (P3): Can start after Foundational - No dependencies on other stories
  - User Story 4 (P4): Can start after Foundational - No dependencies on other stories
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Independent - requires only Foundational phase
- **User Story 2 (P2)**: Independent - requires only Foundational phase (shares blog posts data with US1 but can be implemented separately)
- **User Story 3 (P3)**: Independent - requires only Foundational phase
- **User Story 4 (P4)**: Independent - requires only Foundational phase

### Within Each User Story

- Data files (blogPosts.ts, author.ts, faqs.ts) before components that consume them
- Components before pages that use them
- Core implementation before styling/polish
- Desktop layout before mobile responsiveness

### Parallel Opportunities

**Phase 1 - Setup**: All tasks (T002-T005) can run in parallel after T001
**Phase 2 - Foundational**: 
- T007-T016 can run in parallel (different files)
- T017-T019 run sequentially after utilities are complete

**Phase 3 - User Story 1**:
- T020-T022 can run in parallel (different data files)
- T023-T027 run after data files exist

**Phase 4 - User Story 2**:
- T028-T034 can run after US1 blog posts exist

**Phase 5 - User Story 3**:
- T035-T040 can run independently of US1 and US2

**Phase 6 - User Story 4**:
- T041-T042 can run in parallel
- T043-T047 run after data/components exist

**Phase 7 - Polish**:
- T048-T052, T055, T058-T059 can run in parallel

**Cross-Story Parallelization**:
Once Foundational phase completes, all user stories (US1, US2, US3, US4) can be worked on in parallel by different developers or in sequence by priority.

---

## Parallel Example: Foundational Phase

```bash
# After T006 completes, launch all type/utility tasks together:
Task T007: "Define TypeScript interfaces in types/index.ts"
Task T008: "Create constants file in lib/constants.ts"
Task T009: "Create error classes in lib/errors.ts"
Task T010: "Implement getFeaturedPost utility in lib/blogUtils.ts"
Task T011: "Implement sortPostsByDate utility in lib/blogUtils.ts"
Task T012: "Implement truncateText utility in lib/blogUtils.ts"
Task T013: "Implement getFeaturedImage utility in lib/blogUtils.ts"
Task T014: "Implement formatDate utility in lib/blogUtils.ts"
Task T015: "Implement getBlogPostBySlug utility in lib/blogUtils.ts"
Task T016: "Create placeholder image in public/images/placeholder.jpg"
```

---

## Parallel Example: User Story 1 Data Tasks

```bash
# Launch all data creation tasks for US1 together:
Task T020: "Create mocked blog posts data in data/blogPosts.ts"
Task T021: "Create author profile data in data/author.ts"
Task T022: "Add blog post images to public/images/"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T006)
2. Complete Phase 2: Foundational (T007-T019) - CRITICAL
3. Complete Phase 3: User Story 1 (T020-T027)
4. **STOP and VALIDATE**: Test landing page independently - featured post displays, links to full post
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 (T020-T027) → Test independently → **Deploy/Demo (MVP!)**
3. Add User Story 2 (T028-T034) → Test independently → Deploy/Demo
4. Add User Story 3 (T035-T040) → Test independently → Deploy/Demo
5. Add User Story 4 (T041-T047) → Test independently → Deploy/Demo
6. Complete Polish (T048-T060) → Final production release

Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup (Phase 1) together
2. Team completes Foundational (Phase 2) together
3. Once Foundational is done:
   - Developer A: User Story 1 (T020-T027)
   - Developer B: User Story 2 (T028-T034) - starts after US1 blog posts created
   - Developer C: User Story 3 (T035-T040)
   - Developer D: User Story 4 (T041-T047)
4. Stories complete and integrate independently
5. Team completes Polish (Phase 7) together

---

## Task Summary

**Total Tasks**: 60

**By Phase**:
- Phase 1 (Setup): 6 tasks
- Phase 2 (Foundational): 13 tasks
- Phase 3 (User Story 1 - P1): 8 tasks
- Phase 4 (User Story 2 - P2): 7 tasks
- Phase 5 (User Story 3 - P3): 6 tasks
- Phase 6 (User Story 4 - P4): 7 tasks
- Phase 7 (Polish): 13 tasks

**By User Story**:
- User Story 1: 8 tasks
- User Story 2: 7 tasks
- User Story 3: 6 tasks
- User Story 4: 7 tasks

**Parallel Opportunities**: 28 tasks marked [P] can run in parallel within their phase

**Suggested MVP Scope**: Phase 1 + Phase 2 + Phase 3 (User Story 1 only) = 27 tasks for working landing page with featured post

---

## Independent Test Criteria

### User Story 1 (MVP)
- ✅ Navigate to http://localhost:3000
- ✅ Verify one featured blog post displays above fold
- ✅ Verify post has: title, excerpt, date, image, "Read More" CTA
- ✅ Click CTA, verify navigation to full blog post at /blogs/[slug]
- ✅ Verify full post displays complete content
- ✅ Test on mobile: verify single-column responsive layout

### User Story 2
- ✅ Navigate to http://localhost:3000/blogs
- ✅ Verify all 20 blog posts display as preview cards
- ✅ Verify each card has: title, excerpt, date, image, author
- ✅ Verify posts ordered newest first
- ✅ Click any card, verify navigation to that post's full content
- ✅ Test on mobile/tablet/desktop: verify responsive grid (1/2/3 columns)

### User Story 3
- ✅ Navigate to http://localhost:3000/about
- ✅ Verify profile image displays
- ✅ Verify bio text displays
- ✅ Verify expertise areas list displays
- ✅ Verify social links display and open external platforms
- ✅ Test on mobile: verify responsive single-column layout

### User Story 4
- ✅ Navigate to http://localhost:3000/faq
- ✅ Verify 8-10 FAQ questions display
- ✅ Click a question, verify answer expands/reveals
- ✅ Verify accordion interaction works (expand/collapse)
- ✅ Verify scannable, organized format
- ✅ Test on mobile: verify readable typography

---

## Notes

- [P] tasks = different files, no dependencies within phase
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Tests are not included as they were not requested in specification
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- All 20 blog posts will be pre-rendered at build time via Next.js SSG
- No external APIs or databases required - all data is mocked