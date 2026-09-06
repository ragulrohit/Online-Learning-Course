# LearnSphere - Online Learning Platform

A complete, modern, and responsive online learning course website built with **HTML5**, **CSS3**, and **Vanilla JavaScript** (no frameworks, no backend).

## Features

- **Home Page** - Hero section, popular courses, categories, why choose us, statistics, top instructors, testimonials, CTA, and footer
- **Courses Page** - Search, category filter, level filter, 9+ realistic courses with dynamic filtering (no page reload)
- **Course Details** - Banner, description, curriculum (5 modules with lessons), requirements, learnings, instructor info, reviews, related courses, and working Enroll Now button
- **Login** - Email/password with validation, remember me, Google login UI
- **Register** - Full validation (required fields, email format, password, confirm match, terms)
- **Dashboard** - Sidebar navigation, enrolled courses, progress bars, continue learning, statistics, recent activity
- **Profile** - Editable profile, change password, learning statistics
- **Contact** - Contact info cards and validated contact form

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage for demo login/enrollment/profile data
- No React, Angular, Vue, or backend required

## Getting Started

Simply open `index.html` in any modern web browser. No installation or build steps required.

## Usage Demo

1. **Register** a new account (data is stored in browser LocalStorage)
2. **Login** with the created account
3. Browse **Courses**, search/filter, and open course details
4. Click **Enroll Now** on any course
5. Go to **Dashboard** to see your enrolled courses and simulate progress with the "Continue" button
6. Edit your **Profile** and change your password
7. Use the **Contact** page to send a message

## Folder Structure

```text
online-learning-platform/
│
├── index.html
├── courses.html
├── course-details.html
├── login.html
├── register.html
├── dashboard.html
├── profile.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── course1.jpg
│   ├── course2.jpg
│   ├── course3.jpg
│   └── instructor.jpg
│
└── README.md
```

## JavaScript Features

- Mobile hamburger navigation
- Course search and filtering
- Form validation (login, register, contact, profile)
- Password confirmation
- Course enrollment with success modal
- Success/error notifications
- Dashboard course progress simulation
- Profile editing
- Logout functionality
- Back-to-top button
- Smooth scrolling
- Animated counters
- LocalStorage for demo data (auth, enrollment, progress, profile)

## Design

- Clean, modern, professional e-learning design
- Custom CSS variables for consistent theming
- Reusable component classes (buttons, cards, forms)
- Responsive grid layouts
- Hover animations and smooth transitions
- Consistent header/navigation/footer on all pages
- Fully responsive (desktop, laptop, tablet, mobile)
- No horizontal scrolling on mobile

## License

This is a demo project for educational purposes.
