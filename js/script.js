/* ============================================
   LearnSphere - Online Learning Platform JS
   ============================================ */

// ========== Course Data ==========
const coursesData = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    image: "images/course-html.webp",
    slug: "html-css-fundamentals",
    category: "Web Development",
    level: "Beginner",
    instructor: "Sarah Johnson",
    rating: 4.8,
    reviews: 2340,
    students: 12500,
    duration: "6 weeks",
    price: 49.99,
    originalPrice: 89.99,
    color: "#e44d26",
    icon: "🌐",
    badge: "Bestseller",
    description: "Master the building blocks of the web. Learn HTML5 semantics and modern CSS3 layouts from scratch. Build responsive websites with Flexbox and Grid.",
    shortDesc: "Learn to build beautiful websites from scratch with modern HTML5 and CSS3.",
    requirements: ["Basic computer skills", "A text editor (VS Code recommended)", "Internet connection"],
    learnings: ["Build complete HTML pages with semantic markup", "Create responsive layouts with Flexbox and Grid", "Style websites with modern CSS3 features", "Understand the box model and positioning", "Deploy websites to the web"],
    modules: [
      { title: "Module 1 – Introduction to HTML", lessons: ["What is HTML?", "Setting Up Your Environment", "HTML Document Structure", "Working with Text Elements"] },
      { title: "Module 2 – HTML Elements & Forms", lessons: ["Links and Images", "Lists and Tables", "Building Forms", "Semantic HTML5 Elements"] },
      { title: "Module 3 – Introduction to CSS", lessons: ["CSS Selectors & Specificity", "The Box Model", "Colors and Typography", "Backgrounds and Borders"] },
      { title: "Module 4 – Layout with Flexbox & Grid", lessons: ["Flexbox Fundamentals", "Flexbox Alignment & Distribution", "CSS Grid Basics", "Building a Complete Layout"] },
      { title: "Module 5 – Responsive Design Project", lessons: ["Media Queries", "Mobile-First Design", "Complete Responsive Website", "Final Project & Review"] }
    ]
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    image: "images/course-javascript.webp",
    slug: "javascript-beginners",
    category: "Web Development",
    level: "Beginner",
    instructor: "Michael Chen",
    rating: 4.7,
    reviews: 3120,
    students: 15800,
    duration: "8 weeks",
    price: 59.99,
    originalPrice: 99.99,
    color: "#f7df1e",
    icon: "⚡",
    badge: "Popular",
    description: "Dive into the world of programming with JavaScript. Learn variables, functions, DOM manipulation, and modern ES6+ features to make websites interactive.",
    shortDesc: "Master JavaScript from fundamentals to modern ES6+ with hands-on projects.",
    requirements: ["Basic HTML & CSS knowledge", "A modern web browser", "Dedication to practice"],
    learnings: ["Write JavaScript from scratch", "Understand variables, data types, and operators", "Work with functions, arrays, and objects", "Manipulate the DOM to create interactive pages", "Use modern ES6+ syntax and features"],
    modules: [
      { title: "Module 1 – JavaScript Basics", lessons: ["What is JavaScript?", "Variables & Data Types", "Operators & Expressions", "Console and Debugging"] },
      { title: "Module 2 – Control Flow & Functions", lessons: ["Conditional Statements", "Loops", "Function Declarations", "Arrow Functions"] },
      { title: "Module 3 – Arrays & Objects", lessons: ["Working with Arrays", "Array Methods", "Objects & Properties", "Destructuring"] },
      { title: "Module 4 – DOM Manipulation", lessons: ["Selecting Elements", "Event Listeners", "Modifying the DOM", "Building an Interactive App"] },
      { title: "Module 5 – Final Project", lessons: ["Asynchronous JavaScript", "Fetch API", "Project Planning", "Building a Complete Application"] }
    ]
  },
  {
    id: 3,
    title: "Python Programming Masterclass",
    image: "images/course-python.webp",
    slug: "python-programming",
    category: "Programming",
    level: "Beginner",
    instructor: "Dr. Emily Rodriguez",
    rating: 4.9,
    reviews: 4560,
    students: 23400,
    duration: "10 weeks",
    price: 69.99,
    originalPrice: 119.99,
    color: "#3776ab",
    icon: "🐍",
    badge: "Top Rated",
    description: "From zero to Python hero. Master Python fundamentals, OOP, file handling, and build real-world projects. Perfect for beginners and career changers.",
    shortDesc: "Complete Python course from basics to advanced OOP and real projects.",
    requirements: ["No prior programming experience needed", "A computer with Python installed", "Willingness to learn"],
    learnings: ["Write clean Python code", "Understand OOP principles", "Work with files and data", "Build real-world applications", "Prepare for further specializations"],
    modules: [
      { title: "Module 1 – Python Foundations", lessons: ["Installing Python", "Variables & Data Types", "Input/Output", "Basic Operators"] },
      { title: "Module 2 – Control Structures", lessons: ["If/Else Statements", "For & While Loops", "Functions & Scope", "Error Handling"] },
      { title: "Module 3 – Data Structures", lessons: ["Lists & Tuples", "Dictionaries & Sets", "List Comprehensions", "Working with Strings"] },
      { title: "Module 4 – Object-Oriented Python", lessons: ["Classes & Objects", "Inheritance", "Polymorphism", "Special Methods"] },
      { title: "Module 5 – Real-World Project", lessons: ["File I/O", "Modules & Packages", "Building a CLI App", "Project Deployment"] }
    ]
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    image: "images/course-fullstack.webp",
    slug: "web-development",
    category: "Web Development",
    level: "Intermediate",
    instructor: "Alex Turner",
    rating: 4.6,
    reviews: 1890,
    students: 9800,
    duration: "14 weeks",
    price: 89.99,
    originalPrice: 149.99,
    color: "#61dafb",
    icon: "💻",
    badge: "Comprehensive",
    description: "Become a full-stack developer. Build complete web applications with HTML, CSS, JavaScript, Node.js, and databases. Portfolio-ready projects included.",
    shortDesc: "End-to-end web development with frontend, backend, and databases.",
    requirements: ["Basic HTML/CSS/JavaScript", "Basic command line knowledge", "Commitment of 10+ hours per week"],
    learnings: ["Build full-stack applications", "Create RESTful APIs with Node.js", "Work with SQL and NoSQL databases", "Deploy applications to the cloud", "Build a professional portfolio"],
    modules: [
      { title: "Module 1 – Advanced Frontend", lessons: ["Advanced CSS Techniques", "JavaScript Design Patterns", "Working with APIs", "Frontend Architecture"] },
      { title: "Module 2 – Backend with Node.js", lessons: ["Node.js Fundamentals", "Express.js Framework", "RESTful API Design", "Authentication & Security"] },
      { title: "Module 3 – Databases", lessons: ["SQL Fundamentals", "MongoDB Basics", "Data Modeling", "Database Design Patterns"] },
      { title: "Module 4 – Full Stack Integration", lessons: ["Connecting Frontend & Backend", "Real-time Applications", "Testing Strategies", "Performance Optimization"] },
      { title: "Module 5 – Capstone Project", lessons: ["Project Planning", "Building the Application", "Deployment", "Portfolio Presentation"] }
    ]
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    image: "images/course-uiux.webp",
    slug: "uiux-design",
    category: "Design",
    level: "Beginner",
    instructor: "Lisa Park",
    rating: 4.8,
    reviews: 1670,
    students: 8900,
    duration: "7 weeks",
    price: 54.99,
    originalPrice: 94.99,
    color: "#ff6b9d",
    icon: "🎨",
    badge: "New",
    description: "Learn to design beautiful, user-friendly interfaces. Master design thinking, wireframing, prototyping, and design systems used by top companies.",
    shortDesc: "Master UI/UX design principles, prototyping, and design systems.",
    requirements: ["Creative mindset", "Figma (free account)", "No design experience needed"],
    learnings: ["Apply design thinking methodology", "Create wireframes and prototypes", "Build design systems", "Conduct user research", "Design mobile and web interfaces"],
    modules: [
      { title: "Module 1 – Design Thinking", lessons: ["Introduction to UI/UX", "Design Thinking Process", "User Research Methods", "Personas & Journey Maps"] },
      { title: "Module 2 – Wireframing", lessons: ["Low-Fidelity Wireframes", "Information Architecture", "User Flows", "Working in Figma"] },
      { title: "Module 3 – Visual Design", lessons: ["Color Theory", "Typography Systems", "Layout & Spacing", "Design Principles"] },
      { title: "Module 4 – Prototyping", lessons: ["High-Fidelity Mockups", "Interactive Prototypes", "Design Handoff", "User Testing"] },
      { title: "Module 5 – Design Systems & Portfolio", lessons: ["Building a Design System", "Accessibility in Design", "Portfolio Project", "Presenting Your Work"] }
    ]
  },
  {
    id: 6,
    title: "Data Science with Python",
    image: "images/course-datascience.webp",
    slug: "data-science",
    category: "Data Science",
    level: "Intermediate",
    instructor: "Dr. James Wilson",
    rating: 4.7,
    reviews: 2890,
    students: 11200,
    duration: "12 weeks",
    price: 79.99,
    originalPrice: 139.99,
    color: "#10b981",
    icon: "📊",
    badge: "Trending",
    description: "Unlock the power of data. Learn data analysis, visualization, statistics, and machine learning basics using Python, Pandas, NumPy, and Matplotlib.",
    shortDesc: "Analyze and visualize data with Python, Pandas, and machine learning.",
    requirements: ["Basic Python knowledge", "Understanding of basic math/stats", "Python installed on your computer"],
    learnings: ["Analyze datasets with Pandas", "Create stunning visualizations", "Apply statistical methods", "Build predictive models", "Communicate data insights"],
    modules: [
      { title: "Module 1 – Data Science Foundations", lessons: ["What is Data Science?", "Setting Up Your Environment", "NumPy Fundamentals", "Introduction to Pandas"] },
      { title: "Module 2 – Data Wrangling", lessons: ["Loading & Exploring Data", "Cleaning Messy Data", "Transforming Data", "Working with Real Datasets"] },
      { title: "Module 3 – Data Visualization", lessons: ["Matplotlib Basics", "Advanced Charts with Seaborn", "Interactive Dashboards", "Storytelling with Data"] },
      { title: "Module 4 – Statistics for Data Science", lessons: ["Descriptive Statistics", "Probability Distributions", "Hypothesis Testing", "Correlation & Regression"] },
      { title: "Module 5 – Machine Learning Intro", lessons: ["Supervised Learning", "Model Evaluation", "Feature Engineering", "Capstone Project"] }
    ]
  },
  {
    id: 7,
    title: "Machine Learning A-Z",
    image: "images/course-machinelearning.webp",
    slug: "machine-learning",
    category: "Data Science",
    level: "Advanced",
    instructor: "Dr. Priya Sharma",
    rating: 4.8,
    reviews: 3210,
    students: 14600,
    duration: "16 weeks",
    price: 94.99,
    originalPrice: 169.99,
    color: "#8b5cf6",
    icon: "🤖",
    badge: "Advanced",
    description: "Master machine learning algorithms from linear regression to deep learning. Build real models, understand the math, and apply ML to real-world problems.",
    shortDesc: "Complete ML course covering algorithms, neural networks, and real projects.",
    requirements: ["Python programming", "Basic linear algebra & statistics", "Comfort with Jupyter notebooks"],
    learnings: ["Implement ML algorithms from scratch", "Use scikit-learn and TensorFlow", "Build and deploy ML models", "Understand deep learning fundamentals", "Solve real-world ML problems"],
    modules: [
      { title: "Module 1 – ML Foundations", lessons: ["What is Machine Learning?", "Types of Learning", "Linear Regression", "Model Evaluation Metrics"] },
      { title: "Module 2 – Classification Algorithms", lessons: ["Logistic Regression", "Decision Trees & Random Forests", "Support Vector Machines", "K-Nearest Neighbors"] },
      { title: "Module 3 – Unsupervised Learning", lessons: ["K-Means Clustering", "Hierarchical Clustering", "Principal Component Analysis", "Dimensionality Reduction"] },
      { title: "Module 4 – Deep Learning", lessons: ["Neural Network Basics", "Building Neural Networks", "Convolutional Neural Networks", "Transfer Learning"] },
      { title: "Module 5 – Real-World Projects", lessons: ["NLP Fundamentals", "Model Deployment", "End-to-End ML Pipeline", "Final Capstone Project"] }
    ]
  },
  {
    id: 8,
    title: "Digital Marketing Mastery",
    image: "images/course-marketing.webp",
    slug: "digital-marketing",
    category: "Marketing",
    level: "Beginner",
    instructor: "Rachel Kim",
    rating: 4.5,
    reviews: 1450,
    students: 7600,
    duration: "8 weeks",
    price: 44.99,
    originalPrice: 79.99,
    color: "#f97316",
    icon: "📱",
    badge: "Practical",
    description: "Learn digital marketing from the ground up. Master SEO, social media marketing, email campaigns, content strategy, and analytics to grow any business online.",
    shortDesc: "Master SEO, social media, email marketing, and analytics from scratch.",
    requirements: ["Basic computer and internet skills", "Social media accounts", "Willingness to experiment and learn"],
    learnings: ["Create effective marketing strategies", "Optimize for search engines (SEO)", "Run successful social media campaigns", "Analyze marketing data & ROI", "Build email marketing funnels"],
    modules: [
      { title: "Module 1 – Marketing Foundations", lessons: ["Digital Marketing Landscape", "Customer Personas", "Marketing Funnels", "Setting KPIs"] },
      { title: "Module 2 – SEO Fundamentals", lessons: ["How Search Engines Work", "Keyword Research", "On-Page SEO", "Technical SEO Basics"] },
      { title: "Module 3 – Social Media Marketing", lessons: ["Platform Strategy", "Content Creation", "Paid Social Advertising", "Community Management"] },
      { title: "Module 4 – Email & Content Marketing", lessons: ["Email Campaign Setup", "Content Strategy", "Copywriting Basics", "Marketing Automation"] },
      { title: "Module 5 – Analytics & Optimization", lessons: ["Google Analytics Setup", "A/B Testing", "Conversion Optimization", "Complete Marketing Plan"] }
    ]
  },
  {
    id: 9,
    title: "Database Fundamentals",
    image: "images/course-database.webp",
    slug: "database-fundamentals",
    category: "Programming",
    level: "Beginner",
    instructor: "David Park",
    rating: 4.6,
    reviews: 1120,
    students: 6500,
    duration: "6 weeks",
    price: 39.99,
    originalPrice: 69.99,
    color: "#06b6d4",
    icon: "🗄️",
    badge: "Essential",
    description: "Build a strong foundation in databases. Learn SQL, database design, normalization, and work with both relational and NoSQL databases.",
    shortDesc: "Master SQL, database design, and work with relational & NoSQL databases.",
    requirements: ["Basic computer skills", "Logical thinking", "No prior database knowledge needed"],
    learnings: ["Write complex SQL queries", "Design efficient database schemas", "Understand normalization principles", "Work with MySQL and MongoDB", "Optimize database performance"],
    modules: [
      { title: "Module 1 – Database Concepts", lessons: ["What is a Database?", "Types of Databases", "Relational Model", "ER Diagrams"] },
      { title: "Module 2 – SQL Basics", lessons: ["SELECT & Filtering", "Joins & Relationships", "Aggregation Functions", "Subqueries"] },
      { title: "Module 3 – Database Design", lessons: ["Normalization (1NF-3NF)", "Indexing Strategies", "Schema Design Patterns", "Migrations"] },
      { title: "Module 4 – Advanced SQL", lessons: ["Stored Procedures", "Views & Triggers", "Transaction Management", "Query Optimization"] },
      { title: "Module 5 – NoSQL & Projects", lessons: ["Introduction to MongoDB", "When to Use NoSQL", "Building a Database-Backed App", "Final Project"] }
    ]
  }
];

// ========== User State Management ==========
const Auth = {
  getCurrentUser() {
    const user = localStorage.getItem('ls_user');
    return user ? JSON.parse(user) : null;
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  login(email, password, role = 'student') {
    const users = JSON.parse(localStorage.getItem('ls_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('ls_user', JSON.stringify(user));
      return { success: true, user };
    }
    // Demo mode: allow any non-empty credentials to continue to the dashboard.
    const demoUser = {
      id: Date.now(),
      name: email.split('@')[0] || 'Learner',
      email,
      password,
      phone: '',
      role,
      bio: 'Passionate learner on LearnSphere',
      enrolledCourses: [],
      completedCourses: [],
      certificates: [],
      joinDate: new Date().toISOString()
    };
    localStorage.setItem('ls_user', JSON.stringify(demoUser));
    return { success: true, user: demoUser };
  },

  register(data) {
    const users = JSON.parse(localStorage.getItem('ls_users') || '[]');
    if (users.find(u => u.email === data.email)) {
      return { success: false, message: 'An account with this email already exists' };
    }
    const newUser = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone || '',
      role: data.role || 'student',
      bio: 'Passionate learner on LearnSphere',
      enrolledCourses: [],
      completedCourses: [],
      certificates: [],
      joinDate: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem('ls_users', JSON.stringify(users));
    return { success: true, user: newUser };
  },

  logout() {
    localStorage.removeItem('ls_user');
    window.location.href = 'index.html';
  },

  updateProfile(data) {
    const user = this.getCurrentUser();
    if (!user) return;
    const updated = { ...user, ...data };
    localStorage.setItem('ls_user', JSON.stringify(updated));
    const users = JSON.parse(localStorage.getItem('ls_users') || '[]');
    const idx = users.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      users[idx] = updated;
      localStorage.setItem('ls_users', JSON.stringify(users));
    }
    return updated;
  },

  enrollCourse(courseId) {
    const user = this.getCurrentUser();
    if (!user) return { success: false, message: 'Please login first' };
    if (user.enrolledCourses && user.enrolledCourses.includes(courseId)) {
      return { success: false, message: 'You are already enrolled in this course' };
    }
    const enrolled = user.enrolledCourses || [];
    enrolled.push(courseId);
    this.updateProfile({ enrolledCourses: enrolled });
    return { success: true };
  },

  isEnrolled(courseId) {
    const user = this.getCurrentUser();
    return user && user.enrolledCourses && user.enrolledCourses.includes(courseId);
  },

  getEnrolledCourses() {
    const user = this.getCurrentUser();
    if (!user || !user.enrolledCourses) return [];
    return user.enrolledCourses.map(id => coursesData.find(c => c.id === id)).filter(Boolean);
  },

  getProgress(courseId) {
    const user = this.getCurrentUser();
    if (!user) return 0;
    const progress = user.courseProgress || {};
    return progress[courseId] || 0;
  },

  updateProgress(courseId, value) {
    const user = this.getCurrentUser();
    if (!user) return;
    const progress = user.courseProgress || {};
    progress[courseId] = Math.min(100, Math.max(0, value));
    this.updateProfile({ courseProgress: progress });
  }
};

// ========== Notifications ==========
function showNotification(message, type = 'info') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  };

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `<span>${icons[type] || 'ℹ'}</span> ${message}`;
  document.body.appendChild(notification);

  requestAnimationFrame(() => {
    notification.classList.add('show');
  });

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// ========== Modal ==========
function showModal(title, message, type = 'success') {
  let overlay = document.querySelector('.modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }

  const icons = {
    success: '🎉',
    error: '😢',
    info: 'ℹ️',
    warning: '⚠️'
  };

  const iconBg = {
    success: 'background: #dcfce7; color: #16a34a;',
    error: 'background: #fee2e2; color: #dc2626;',
    info: 'background: #dbeafe; color: #2563eb;',
    warning: 'background: #fef3c7; color: #d97706;'
  };

  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-icon" style="${iconBg[type] || iconBg.success}">${icons[type] || '🎉'}</div>
      <h3>${title}</h3>
      <p>${message}</p>
      <button class="btn btn-primary" onclick="closeModal()">Got it!</button>
    </div>
  `;
  overlay.classList.add('active');

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
}

function closeModal() {
  const overlay = document.querySelector('.modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.innerHTML = '', 300);
  }
}

function showCertificatePreview(title, issued, certificateId) {
  let overlay = document.querySelector('.modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = `<div class="modal certificate-preview"><div class="certificate-preview-border"><div class="certificate-badge">🏆</div><span class="section-badge">LearnSphere Certificate</span><h2>Certificate of Achievement</h2><h3>${title}</h3><p>Successfully completed this course</p><strong>${issued}</strong><small>Certificate ID: ${certificateId}</small></div><button class="btn btn-primary" onclick="window.print()">Print / Save Certificate</button><button class="btn btn-outline" onclick="closeModal()">Close</button></div>`;
  overlay.classList.add('active');
}

function showLogoutConfirmation() {
  let overlay = document.querySelector('.modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = `<div class="modal"><div class="modal-icon" style="background:#fee2e2;color:var(--danger);">🚪</div><h3>Logout?</h3><p>Are you sure you want to logout from your dashboard?</p><button class="btn btn-danger" onclick="Auth.logout()">Confirm</button><button class="btn btn-outline" onclick="closeModal()">Cancel</button></div>`;
  overlay.classList.add('active');
}

// ========== Star Rating HTML ==========
function getStarsHTML(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '★';
    else if (i - rating < 1 && i - rating > 0) stars += '★';
    else stars += '☆';
  }
  return stars;
}

// ========== DOM Ready ==========
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initMobileMenu();
  initBackToTop();
  updateNavAuth();
  initCustomSelects();
  new MutationObserver(records => {
    const removedSelect = records.some(record => Array.from(record.removedNodes).some(node =>
      node.nodeType === Node.ELEMENT_NODE &&
      (node.matches('.custom-select') || node.querySelector('.custom-select'))
    ));
    if (removedSelect) closeCustomDropdowns();
    initCustomSelects();
  }).observe(document.body, {
    childList: true,
    subtree: true
  });
  initScrollHeader();
  document.addEventListener('click', function(event) {
    const courseLink = event.target.closest('.dashboard-courses-link');
    if (!courseLink) return;
    openDashboardCourses(event);
  });
});

// ========== Navigation ==========
function initNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function updateNavAuth() {
  const user = Auth.getCurrentUser();
  document.querySelectorAll('.auth-only').forEach(el => {
    el.style.display = user ? '' : 'none';
  });
  document.querySelectorAll('.guest-only').forEach(el => {
    el.style.display = user ? 'none' : '';
  });
  document.querySelectorAll('.user-name-display').forEach(el => {
    if (user) el.textContent = user.name.split(' ')[0];
  });
}

// ========== Custom dropdowns ==========
function initCustomSelects(root = document) {
  root.querySelectorAll('select:not([data-custom-select])').forEach(select => {
    select.dataset.customSelect = 'true';

    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select';
    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(select);

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'custom-select-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    wrapper.appendChild(trigger);

    const updateLabel = () => {
      const option = select.options[select.selectedIndex];
      trigger.textContent = option ? option.textContent : 'Choose an option';
      trigger.classList.toggle('placeholder', !option || !option.value);
    };
    updateLabel();
    select.addEventListener('change', () => {
      updateLabel();
      closeCustomDropdowns();
    });

    trigger.addEventListener('click', event => {
      event.stopPropagation();
      if (wrapper._customMenu) {
        closeCustomDropdowns();
        return;
      }
      closeCustomDropdowns();

      const menu = document.createElement('div');
      menu.className = 'custom-select-menu';
      menu.setAttribute('role', 'listbox');
      menu.addEventListener('click', event => event.stopPropagation());
      document.body.appendChild(menu);

      Array.from(select.options).forEach((option, index) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'custom-select-option';
        item.textContent = option.textContent;
        item.setAttribute('role', 'option');
        item.setAttribute('aria-selected', String(index === select.selectedIndex));
        item.addEventListener('click', () => {
          select.selectedIndex = index;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          updateLabel();
          closeCustomDropdowns();
        });
        menu.appendChild(item);
      });

      const rect = trigger.getBoundingClientRect();
      const width = Math.min(Math.max(rect.width, 180), window.innerWidth - 24);
      const spaceBelow = window.innerHeight - rect.bottom - 12;
      const spaceAbove = rect.top - 12;
      const openAbove = spaceBelow < 190 && spaceAbove > spaceBelow;
      menu.style.width = `${width}px`;
      menu.style.left = `${Math.min(Math.max(12, rect.left), window.innerWidth - width - 12)}px`;
      menu.style.maxHeight = `${Math.max(120, (openAbove ? spaceAbove : spaceBelow))}px`;
      menu.style.top = openAbove ? 'auto' : `${rect.bottom + 6}px`;
      menu.style.bottom = openAbove ? `${window.innerHeight - rect.top + 6}px` : 'auto';
      wrapper.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      wrapper._customMenu = menu;
    });
  });
}

function closeCustomDropdowns() {
  // Also remove menus left behind when dynamic page content is re-rendered.
  document.querySelectorAll('.custom-select-menu').forEach(menu => menu.remove());
  document.querySelectorAll('.custom-select.open').forEach(wrapper => {
    wrapper.classList.remove('open');
    wrapper.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded', 'false');
    wrapper._customMenu = null;
  });
}

document.addEventListener('click', () => closeCustomDropdowns());
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeCustomDropdowns();
});
window.addEventListener('resize', () => closeCustomDropdowns());
window.addEventListener('scroll', () => closeCustomDropdowns(), true);

// ========== Mobile Menu ==========
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ========== Scroll Header ==========
function initScrollHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ========== Back to Top ==========
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== Counter Animation ==========
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    if (counter.dataset.animated) return;
    const rect = counter.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;
    counter.dataset.animated = 'true';
    const target = parseInt(counter.dataset.count);
    const suffix = counter.dataset.suffix || '';
    const prefix = counter.dataset.prefix || '';
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
    }, 25);
  });
}

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

// ========== Courses Page ==========
function initCoursesPage() {
  const searchInput = document.getElementById('course-search');
  const categoryFilter = document.getElementById('category-filter');
  const levelFilter = document.getElementById('level-filter');
  const coursesContainer = document.getElementById('courses-grid');
  const resultsInfo = document.getElementById('results-info');

  if (!coursesContainer) return;

  function renderCourses(courses) {
    if (courses.length === 0) {
      coursesContainer.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1;">
          <h3>No courses found</h3>
          <p>Try adjusting your search or filters</p>
        </div>`;
      if (resultsInfo) resultsInfo.textContent = '0 courses found';
      return;
    }

    coursesContainer.innerHTML = courses.map(course => `
      <div class="course-card">
        <div class="course-card-image">
          <div class="course-image-placeholder" style="background: linear-gradient(135deg, ${course.color}, ${course.color}dd);">
            <img src="${course.image}" alt="${course.title}" class="course-learning-image" onerror="this.onerror=null;this.src='images/course-html.webp';">
          </div>
          <span class="course-badge">${course.badge}</span>
          <span class="course-price-badge">$${course.price}</span>
        </div>
        <div class="course-card-body">
          <h3><a href="course-details.html?id=${course.id}">${course.title}</a></h3>
          <div class="course-instructor">
            <div class="instructor-avatar">${course.instructor.split(' ').map(n=>n[0]).join('')}</div>
            <span>${course.instructor}</span>
          </div>
          <div class="course-meta">
            <div class="course-meta-item"><span class="course-rating"><span class="stars">${getStarsHTML(course.rating)}</span> ${course.rating}</span></div>
            <div class="course-meta-item">👥 ${course.students.toLocaleString()} students</div>
            <div class="course-meta-item">🕐 ${course.duration}</div>
          </div>
          <div class="course-rating">
            <span style="font-size:0.82rem; color: var(--text-muted);">(${course.reviews.toLocaleString()} reviews) · ${course.level}</span>
          </div>
        </div>
        <div class="course-card-footer">
          <div class="course-price">$${course.price} <span class="original">$${course.originalPrice}</span></div>
          <a href="course-details.html?id=${course.id}" class="btn btn-primary btn-sm">View Course</a>
        </div>
      </div>
    `).join('');

    if (resultsInfo) resultsInfo.textContent = `${courses.length} course${courses.length !== 1 ? 's' : ''} found`;
  }

  function filterCourses() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const category = categoryFilter ? categoryFilter.value : '';
    const level = levelFilter ? levelFilter.value : '';

    let filtered = coursesData.filter(course => {
      const matchesSearch = !query || course.title.toLowerCase().includes(query) || course.category.toLowerCase().includes(query) || course.instructor.toLowerCase().includes(query);
      const matchesCategory = !category || course.category === category;
      const matchesLevel = !level || course.level === level;
      return matchesSearch && matchesCategory && matchesLevel;
    });

    renderCourses(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterCourses);
  if (categoryFilter) categoryFilter.addEventListener('change', filterCourses);
  if (levelFilter) levelFilter.addEventListener('change', filterCourses);

  renderCourses(coursesData);
}

// ========== Course Details Page ==========
function initCourseDetailsPage() {
  const params = new URLSearchParams(window.location.search);
  const courseId = parseInt(params.get('id'));
  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    const container = document.querySelector('.course-details-content');
    if (container) container.innerHTML = '<div class="container"><h2>Course not found</h2><p><a href="courses.html">Browse all courses</a></p></div>';
    return;
  }

  document.title = `${course.title} - LearnSphere`;

  const heroEl = document.getElementById('course-hero-content');
  if (heroEl) {
    heroEl.innerHTML = `
      <div class="course-info">
        <h1>${course.title}</h1>
        <p class="course-tagline">${course.shortDesc}</p>
        <div class="course-details-meta">
          <div class="meta-item"><span class="stars" style="color: var(--accent);">${getStarsHTML(course.rating)}</span> <strong>${course.rating}</strong> (${course.reviews.toLocaleString()} reviews)</div>
          <div class="meta-item">👥 ${course.students.toLocaleString()} students</div>
          <div class="meta-item">🕐 ${course.duration}</div>
          <div class="meta-item">📊 ${course.level}</div>
        </div>
        <div class="course-details-instructor">
          <div class="avatar" style="background: ${course.color};">${course.instructor.split(' ').map(n=>n[0]).join('')}</div>
          <div class="info">
            <strong>${course.instructor}</strong>
            <span>Course Instructor</span>
          </div>
        </div>
      </div>`;
  }

  const cardEl = document.getElementById('enrollment-card');
  if (cardEl) {
    const enrolled = Auth.isEnrolled(course.id);
    cardEl.innerHTML = `
      <div class="price">$${course.price} <span class="original">$${course.originalPrice}</span></div>
      <button class="btn btn-primary btn-block btn-lg enroll-btn" data-course-id="${course.id}" ${enrolled ? 'disabled style="opacity:0.7;cursor:default;"' : ''}>
        ${enrolled ? '✓ Already Enrolled' : 'Enroll Now'}
      </button>
      ${!enrolled ? '<button class="btn btn-outline btn-block btn-sm" style="margin-top:0;">Add to Wishlist</button>' : ''}
      <p class="guarantee">🔒 30-day money-back guarantee</p>
      <ul>
        <li>🕐 ${course.duration} of content</li>
        <li>📱 Access on mobile and desktop</li>
        <li>📜 Certificate of completion</li>
        <li> lifetime access</li>
        <li>💬 Community support</li>
      </ul>`;

    const enrollBtn = cardEl.querySelector('.enroll-btn');
    if (enrollBtn && !enrolled) {
      enrollBtn.addEventListener('click', function() {
        if (!Auth.isLoggedIn()) {
          showNotification('Please login to enroll in this course', 'warning');
          setTimeout(() => window.location.href = 'login.html', 1500);
          return;
        }
        const result = Auth.enrollCourse(course.id);
        if (result.success) {
          showModal('Enrollment Successful!', `You have been enrolled in <strong>${course.title}</strong>. Start learning now!`, 'success');
          this.textContent = '✓ Already Enrolled';
          this.disabled = true;
          this.style.opacity = '0.7';
          this.style.cursor = 'default';
        } else {
          showNotification(result.message, 'warning');
        }
      });
    }
  }

  const contentEl = document.getElementById('course-content');
  if (contentEl) {
    contentEl.innerHTML = `
      <h2>About This Course</h2>
      <p>${course.description}</p>

      <h3>Requirements</h3>
      <ul>${course.requirements.map(r => `<li>${r}</li>`).join('')}</ul>

      <h3>What You'll Learn</h3>
      <ul>${course.learnings.map(l => `<li>${l}</li>`).join('')}</ul>

      <h2 style="margin-top:40px;">Course Curriculum</h2>
      <div class="curriculum-section">
        ${course.modules.map((mod, i) => `
          <div class="module${i === 0 ? ' open' : ''}">
            <div class="module-header" onclick="this.parentElement.classList.toggle('open')">
              <h4><span>📖</span> ${mod.title} <span style="font-weight:400;color:var(--text-muted);font-size:0.82rem;">(${mod.lessons.length} lessons)</span></h4>
              <span class="toggle">▼</span>
            </div>
            <div class="module-lessons">
              ${mod.lessons.map(lesson => `
                <div class="lesson">
                  <span class="lesson-title"><span class="lesson-icon">▶</span> ${lesson}</span>
                  <span class="lesson-duration">${Math.floor(Math.random() * 15 + 5)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>`;
  }

  const relatedEl = document.getElementById('related-courses');
  if (relatedEl) {
    const related = coursesData.filter(c => c.id !== course.id && c.category === course.category).slice(0, 3);
    if (related.length === 0) {
      const extra = coursesData.filter(c => c.id !== course.id).slice(0, 3);
      renderRelatedCourses(relatedEl, extra);
    } else {
      renderRelatedCourses(relatedEl, related);
    }
  }

  const reviewsEl = document.getElementById('course-reviews');
  if (reviewsEl) {
    const reviews = [
      { name: "Jennifer M.", rating: 5, text: "Excellent course! The instructor explains everything clearly and the projects are very practical. I learned so much.", color: "#6366f1", date: "2 weeks ago" },
      { name: "Robert T.", rating: 5, text: "This course exceeded my expectations. The curriculum is well-structured and the content is up-to-date with industry standards.", color: "#0ea5e9", date: "1 month ago" },
      { name: "Maria S.", rating: 4, text: "Great course overall. The modules build on each other nicely. I would recommend this to anyone starting out.", color: "#f59e0b", date: "3 weeks ago" }
    ];
    reviewsEl.innerHTML = reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar" style="background: ${r.color};">${r.name.split(' ').map(n=>n[0]).join('')}</div>
          <div class="review-info">
            <h5>${r.name}</h5>
            <span class="review-date">${r.date}</span>
          </div>
        </div>
        <div class="review-stars">${getStarsHTML(r.rating)}</div>
        <p>${r.text}</p>
      </div>
    `).join('');
  }
}

function renderRelatedCourses(container, courses) {
  container.innerHTML = courses.map(course => `
    <div class="course-card">
      <div class="course-card-image">
        <div class="course-image-placeholder" style="background: linear-gradient(135deg, ${course.color}, ${course.color}dd);">
          <img src="${course.image}" alt="${course.title}" class="course-learning-image" onerror="this.onerror=null;this.src='images/course-html.webp';">
        </div>
        <span class="course-price-badge">$${course.price}</span>
      </div>
      <div class="course-card-body">
        <h3><a href="course-details.html?id=${course.id}">${course.title}</a></h3>
        <div class="course-meta">
          <div class="course-meta-item"><span class="stars" style="color:var(--accent);">${getStarsHTML(course.rating)}</span> ${course.rating}</div>
          <div class="course-meta-item">🕐 ${course.duration}</div>
        </div>
      </div>
      <div class="course-card-footer">
        <div class="course-price">$${course.price}</div>
        <a href="course-details.html?id=${course.id}" class="btn btn-outline btn-sm">View</a>
      </div>
    </div>
  `).join('');
}

// ========== Home Page ==========
function initHomePage() {
  const container = document.getElementById('popular-courses');
  if (container) {
    // Keep the four existing featured cards first, then fill the second row with two more.
    const popular = [1, 2, 3, 6, 4, 5]
      .map(id => coursesData.find(course => course.id === id))
      .filter(Boolean);
    container.innerHTML = popular.map(course => `
      <div class="course-card">
        <div class="course-card-image">
          <div class="course-image-placeholder" style="background: linear-gradient(135deg, ${course.color}, ${course.color}dd);">
            <img src="${course.image}" alt="${course.title}" class="course-learning-image" onerror="this.onerror=null;this.src='images/course-html.webp';">
          </div>
          <span class="course-badge">${course.badge}</span>
          <span class="course-price-badge">$${course.price}</span>
        </div>
        <div class="course-card-body">
          <h3><a href="course-details.html?id=${course.id}">${course.title}</a></h3>
          <div class="course-instructor">
            <div class="instructor-avatar">${course.instructor.split(' ').map(n=>n[0]).join('')}</div>
            <span>${course.instructor}</span>
          </div>
          <div class="course-meta">
            <div class="course-meta-item"><span class="stars">${getStarsHTML(course.rating)}</span> ${course.rating}</div>
            <div class="course-meta-item">👥 ${course.students.toLocaleString()}</div>
            <div class="course-meta-item">🕐 ${course.duration}</div>
          </div>
        </div>
        <div class="course-card-footer">
          <div class="course-price">$${course.price} <span class="original">$${course.originalPrice}</span></div>
          <a href="course-details.html?id=${course.id}" class="btn btn-primary btn-sm">View Course</a>
        </div>
      </div>
    `).join('');
  }
}

// ========== Login Page ==========
function initLoginPage() {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');
    const role = document.getElementById('login-role');
    const emailErr = document.getElementById('email-error');
    const passErr = document.getElementById('password-error');
    const roleErr = document.getElementById('role-error');

    // Reset
    [email, password, role].forEach(el => el.classList.remove('error'));
    [emailErr, passErr, roleErr].forEach(el => el.classList.remove('visible'));

    // Validate email
    if (!email.value.trim()) {
      email.classList.add('error');
      emailErr.textContent = 'Email is required';
      emailErr.classList.add('visible');
      valid = false;
    }

    // Validate password
    if (!password.value) {
      password.classList.add('error');
      passErr.textContent = 'Password is required';
      passErr.classList.add('visible');
      valid = false;
    }

    if (!role.value) {
      role.classList.add('error');
      roleErr.textContent = 'Please select your role';
      roleErr.classList.add('visible');
      valid = false;
    }

    if (!valid) return;

    const result = Auth.login(email.value.trim(), password.value, role.value);
    if (result.success) {
      showNotification('Login successful! Redirecting...', 'success');
      setTimeout(() => window.location.href = 'dashboard.html', 1000);
    } else {
      showNotification(result.message, 'error');
    }
  });
}

// ========== Register Page ==========
function initRegisterPage() {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('reg-name');
    const email = document.getElementById('reg-email');
    const phone = document.getElementById('reg-phone');
    const role = document.getElementById('reg-role');
    const password = document.getElementById('reg-password');
    const confirm = document.getElementById('reg-confirm');
    const terms = document.getElementById('reg-terms');

    const fields = [name, email, phone, role, password, confirm];
    const errors = [
      document.getElementById('name-error'),
      document.getElementById('email-error'),
      document.getElementById('phone-error'),
      document.getElementById('role-error'),
      document.getElementById('password-error'),
      document.getElementById('confirm-error')
    ];

    // Reset
    fields.forEach(f => f.classList.remove('error'));
    errors.forEach(e => e.classList.remove('visible'));
    const termsError = document.getElementById('terms-error');
    if (termsError) termsError.classList.remove('visible');

    // Name
    if (!name.value.trim()) {
      name.classList.add('error');
      errors[0].textContent = 'Full name is required';
      errors[0].classList.add('visible');
      valid = false;
    }

    // Email
    if (!email.value.trim()) {
      email.classList.add('error');
      errors[1].textContent = 'Email is required';
      errors[1].classList.add('visible');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      errors[1].textContent = 'Please enter a valid email';
      errors[1].classList.add('visible');
      valid = false;
    }

    // Phone number
    if (!phone.value.trim()) {
      phone.classList.add('error');
      errors[2].textContent = 'Phone number is required';
      errors[2].classList.add('visible');
      valid = false;
    } else if (!/^[+\d][\d\s().-]{7,}$/.test(phone.value.trim())) {
      phone.classList.add('error');
      errors[2].textContent = 'Please enter a valid phone number';
      errors[2].classList.add('visible');
      valid = false;
    }

    // Role
    if (!role.value) {
      role.classList.add('error');
      errors[3].textContent = 'Please select your role';
      errors[3].classList.add('visible');
      valid = false;
    }

    // Password
    if (!password.value) {
      password.classList.add('error');
      errors[4].textContent = 'Password is required';
      errors[4].classList.add('visible');
      valid = false;
    } else if (password.value.length < 6) {
      password.classList.add('error');
      errors[4].textContent = 'Password must be at least 6 characters';
      errors[4].classList.add('visible');
      valid = false;
    }

    // Confirm password
    if (!confirm.value) {
      confirm.classList.add('error');
      errors[5].textContent = 'Please confirm your password';
      errors[5].classList.add('visible');
      valid = false;
    } else if (confirm.value !== password.value) {
      confirm.classList.add('error');
      errors[5].textContent = 'Passwords do not match';
      errors[5].classList.add('visible');
      valid = false;
    }

    // Terms
    if (!terms.checked) {
      if (termsError) {
        termsError.textContent = 'You must agree to the terms';
        termsError.classList.add('visible');
      }
      valid = false;
    }

    if (!valid) return;

    const result = Auth.register({
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      role: role.value,
      password: password.value
    });

    if (result.success) {
      showModal('Account Created!', 'Welcome to LearnSphere! Your account has been created successfully.', 'success');
      setTimeout(() => window.location.href = 'login.html', 1800);
    } else {
      showNotification(result.message, 'error');
    }
  });
}

// ========== Dashboard Page ==========
function initDashboardPage() {
  if (!Auth.isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }

  const user = Auth.getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  const topicNav = document.querySelector('.sidebar-nav');
  if (topicNav) {
    topicNav.innerHTML = `
      <a href="dashboard.html" class="active"><span class="nav-icon">🏠</span> Dashboard</a>
      <a href="my-courses.html"><span class="nav-icon">📚</span> My Courses</a>
      <a href="progress.html"><span class="nav-icon">📊</span> Progress</a>
      <a href="certificates.html"><span class="nav-icon">🏆</span> Certificates</a>
      <a href="assignments.html"><span class="nav-icon">✏️</span> Assignments</a>
      <a href="calendar.html"><span class="nav-icon">📅</span> Calendar</a>
      <a href="profile.html"><span class="nav-icon">👤</span> Profile</a>
      <a href="help.html"><span class="nav-icon">❓</span> Help Center</a>
      <a href="#" class="logout-btn" style="color: var(--danger);"><span class="nav-icon">🚪</span> Logout</a>`;
  }

  // Set welcome message
  const topicRoutes = ['dashboard', 'my-courses', 'progress', 'certificates', 'assignments', 'calendar', 'profile', 'help'];
  document.querySelectorAll('.sidebar-nav a').forEach((link, index) => {
    if (index >= topicRoutes.length) return;
    const topic = topicRoutes[index];
    link.href = `#${topic}`;
    link.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.hash = topic;
      document.querySelectorAll('.sidebar-nav a').forEach(item => item.classList.remove('active'));
      this.classList.add('active');
      renderDashboardTopic(topic);
    });
  });

  const welcomeEl = document.getElementById('dashboard-welcome-name');
  if (welcomeEl) welcomeEl.textContent = user.name.split(' ')[0];

  // Sidebar user
  const sidebarUser = document.querySelector('.sidebar-user-info');
  if (sidebarUser) {
    sidebarUser.querySelector('h4').textContent = user.name;
    sidebarUser.querySelector('span').textContent = user.email;
  }

  const sidebarAvatar = document.querySelector('.sidebar-user-avatar');
  if (sidebarAvatar) sidebarAvatar.textContent = user.name.split(' ').map(n => n[0]).join('');

  // Stats
  const enrolled = user.enrolledCourses || [];
  const statEnrolled = document.getElementById('stat-enrolled');
  const statCompleted = document.getElementById('stat-completed');
  const statHours = document.getElementById('stat-hours');
  const statCerts = document.getElementById('stat-certs');
  if (statEnrolled) statEnrolled.textContent = enrolled.length;
  if (statCompleted) statCompleted.textContent = (user.completedCourses || []).length;
  if (statHours) statHours.textContent = enrolled.length * 8;
  if (statCerts) statCerts.textContent = (user.certificates || []).length;

  // Enrolled courses
  const enrolledContainer = document.getElementById('enrolled-courses-list');
  const enrolledCourses = Auth.getEnrolledCourses();

  if (enrolledContainer) {
    if (enrolledCourses.length === 0) {
      enrolledContainer.innerHTML = `
        <div class="empty-state course-suggestions">
          <div class="empty-state-icon">📚</div>
          <h4>Popular Courses For You</h4>
          <p>Start learning with these popular courses selected for your goals.</p>
          <div class="course-suggestion-list">
            <div class="course-suggestion-item"><strong>Modern Web Development</strong><span>Beginner · 8 hours</span></div>
            <div class="course-suggestion-item"><strong>Python for Beginners</strong><span>Beginner · 10 hours</span></div>
            <div class="course-suggestion-item"><strong>UI/UX Design Fundamentals</strong><span>Intermediate · 6 hours</span></div>
          </div>
        </div>`;
    } else {
      enrolledContainer.innerHTML = enrolledCourses.map(course => {
        const progress = Auth.getProgress(course.id);
        const isComplete = progress >= 100;
        return `
          <div class="enrolled-course-card">
            <div class="enrolled-course-image">
              <div class="course-image-placeholder" style="background: linear-gradient(135deg, ${course.color}, ${course.color}dd);">
                <img src="${course.image}" alt="${course.title}" class="course-learning-image" onerror="this.onerror=null;this.src='images/course-html.webp';">
              </div>
            </div>
            <div class="enrolled-course-info">
              <h4>${course.title}</h4>
              <div class="instructor-name">${course.instructor}</div>
              <div class="progress-bar">
                <div class="progress-bar-fill ${isComplete ? 'complete' : ''}" style="width: ${progress}%;"></div>
              </div>
              <div class="progress-text">
                <span>${isComplete ? 'Completed' : `${progress}% complete`}</span>
                <span>${course.duration}</span>
              </div>
            </div>
            <div class="enrolled-course-actions">
              <button class="btn btn-primary btn-sm continue-btn" data-course-id="${course.id}" data-progress="${progress}">
                ${isComplete ? '✓ Done' : progress > 0 ? 'Continue' : 'Start'}
              </button>
              <a href="course-details.html?id=${course.id}" class="btn btn-outline btn-sm">Details</a>
            </div>
          </div>`;
      }).join('');

      enrolledContainer.querySelectorAll('.continue-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const cid = parseInt(this.dataset.courseId);
          const progress = parseInt(this.dataset.progress);
          if (progress >= 100) {
            showNotification('You have already completed this course!', 'info');
            return;
          }
          const newProgress = Math.min(100, progress + Math.floor(Math.random() * 20 + 10));
          Auth.updateProgress(cid, newProgress);
          showNotification(newProgress >= 100 ? 'Congratulations! Course completed!' : `Progress updated to ${newProgress}%`, newProgress >= 100 ? 'success' : 'info');
          initDashboardPage();
        });
      });
    }
  }

  // Activity
  const activityContainer = document.getElementById('activity-list');
  if (activityContainer) {
    const activities = enrolled.length > 0 ? [
      { icon: '📘', bg: '#dbeafe', text: `You enrolled in a new course`, time: 'Recently' },
      { icon: '⭐', bg: '#fef3c7', text: 'You completed a lesson', time: 'Today' },
      { icon: '📊', bg: '#dcfce7', text: 'Your progress was updated', time: 'Today' },
    ] : [
      { icon: '👋', bg: '#dbeafe', text: 'Welcome to LearnSphere!', time: 'Just now' },
    ];
    activityContainer.innerHTML = activities.map(a => `
      <div class="activity-item">
        <div class="activity-icon" style="background: ${a.bg};">${a.icon}</div>
        <div class="activity-text">
          <p>${a.text}</p>
          <span>${a.time}</span>
        </div>
      </div>
    `).join('');
  }

  // Sidebar nav active state
  const currentHash = window.location.hash || '#dashboard';
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === currentHash);
  });
  if (currentHash !== '#dashboard') renderDashboardTopic(currentHash.substring(1));
}

function renderDashboardTopic(topic) {
  const main = document.querySelector('.dashboard-main');
  if (!main || topic === 'dashboard') {
    if (topic === 'dashboard') window.location.reload();
    return;
  }

  const views = {
    'my-courses': `<div class="topic-heading"><span class="section-badge">Learning Library</span><h1>My Courses</h1><p>Review your enrolled courses and progress.</p></div><div class="topic-grid"><article class="topic-card wide"><h3>My Learning Progress</h3><div class="topic-list"><div class="topic-list-item"><div><strong>Modern Web Development</strong><div class="progress-track"><div class="progress-fill" style="width:72%"></div></div><small>72% complete · 4 lessons left</small></div></div><div class="topic-list-item"><div><strong>Python for Beginners</strong><div class="progress-track"><div class="progress-fill" style="width:38%"></div></div><small>38% complete · 9 lessons left</small></div></div></div></article><article class="topic-card"><h3>Filter Courses</h3><form class="topic-form"><label>Category<select><option>All categories</option><option>Development</option><option>Design</option></select></label><label>Search<input type="search" placeholder="Search enrolled courses"></label><button class="btn btn-primary" type="button">Apply Filter</button></form></article></div>`,
    progress: `<div class="topic-hero"><div><span class="section-badge">Your Analytics</span><h1>Learning Progress</h1><p>Track your time and course completion.</p></div><img class="topic-image" src="images/instructor.webp" alt="Instructor teaching students"></div><div class="topic-grid"><article class="topic-card"><h3>Completion Overview</h3><div class="pie-chart"></div><div class="chart-legend"><span>Completed · 62%</span><span>In progress · 20%</span><span>Not started · 18%</span></div></article><article class="topic-card"><h3>Weekly Goal</h3><form class="topic-form"><label>Hours this week<input type="number" value="8"></label><label>Focus area<select><option>Web Development</option><option>Python</option></select></label><button class="btn btn-primary" type="button">Update Goal</button></form></article></div>`,
    certificates: `<div class="topic-heading"><span class="section-badge">Achievements</span><h1>Certificates</h1><p>Your completed learning achievements.</p></div><div class="topic-grid"><article class="topic-card certificate-card"><div class="certificate-preview-border"><div class="certificate-badge">🏆</div><span class="section-badge">LearnSphere Certificate</span><h2>Certificate of Achievement</h2><h3>HTML & CSS Essentials</h3><p>Successfully completed this course</p><strong>Issued August 2026</strong><small>Certificate ID: LS-2048</small></div></article><article class="topic-card certificate-card"><div class="certificate-preview-border"><div class="certificate-badge">🎨</div><span class="section-badge">LearnSphere Certificate</span><h2>Certificate of Achievement</h2><h3>UI Design Foundations</h3><p>Successfully completed this course</p><strong>Issued July 2026</strong><small>Certificate ID: LS-1982</small></div></article></div>`,
    assignments: `<div class="topic-heading"><span class="section-badge">Practice Zone</span><h1>Assignments</h1><p>Manage your tasks and submissions here.</p></div><div class="topic-grid"><article class="topic-card wide"><h3>Upcoming Work</h3><div class="topic-list"><div class="topic-list-item"><div><strong>Build a Responsive Landing Page</strong><br><small>Web Development · Due tomorrow</small></div><span class="section-badge">In progress</span></div><div class="topic-list-item"><div><strong>Python Data Cleaning Exercise</strong><br><small>Python · Due Friday</small></div><span class="section-badge">Not started</span></div></div></article><article class="topic-card"><h3>Submit Assignment</h3><form class="topic-form"><label>Course<select><option>Modern Web Development</option><option>Python for Beginners</option></select></label><label>Title<input type="text" placeholder="Assignment title"></label><label>Upload file<input type="file"></label><button class="btn btn-primary" type="button">Save Draft</button></form></article></div>`,
    calendar: `<div class="topic-heading"><span class="section-badge">Plan Ahead</span><h1>Study Calendar</h1><p>Plan sessions and upcoming deadlines.</p></div><div class="topic-grid"><article class="topic-card wide"><h3>September 2026</h3><div class="calendar-grid"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>1</span><span class="has-event">2</span><span>3</span><span>4</span><span class="has-event">5</span><span>6</span><span>7</span><span>8</span><span>9</span><span class="has-event">10</span><span>11</span><span>12</span><span>13</span><span>14</span></div></article><article class="topic-card"><h3>Add Study Event</h3><form class="topic-form"><label>Event name<input type="text" placeholder="React practice"></label><label>Date<input type="date"></label><label>Reminder<select><option>15 minutes before</option><option>1 hour before</option></select></label><button class="btn btn-primary" type="button">Add Event</button></form></article></div>`,
    profile: `<div class="topic-hero"><div><span class="section-badge">Account</span><h1>My Profile</h1><p>Keep your learner information up to date.</p></div><div class="sidebar-user-avatar">LS</div></div><div class="topic-grid"><article class="topic-card"><h3>Personal Details</h3><form class="topic-form"><label>Full name<input type="text" value="Student"></label><label>Email<input type="email" value="student@email.com"></label><label>Learning goal<select><option>Build career skills</option><option>Explore a hobby</option></select></label><button class="btn btn-primary" type="button">Save Profile</button></form></article><article class="topic-card"><h3>Learning Snapshot</h3><p>Member since January 2026</p><div class="progress-track"><div class="progress-fill" style="width:68%"></div></div><p>68% profile completed</p></article></div>`,
    help: `<div class="topic-heading"><span class="section-badge">Support</span><h1>Help Center</h1><p>Find answers and contact the learning team.</p></div><div class="topic-grid"><article class="topic-card wide"><h3>Frequently Asked Questions</h3><div class="faq-item"><h4>How do I enroll in a course?</h4><p>Open Courses, choose a course, and select Enroll Now.</p></div><div class="faq-item"><h4>Where can I find my certificate?</h4><p>Completed certificates are available in the Certificates topic.</p></div><div class="faq-item"><h4>Can I change my profile details?</h4><p>Yes, use the Profile topic in this dashboard.</p></div></article><article class="topic-card"><h3>Contact Support</h3><form class="topic-form"><label>Your email<input type="email" placeholder="you@example.com"></label><label>Question<textarea placeholder="Describe your question"></textarea></label><button class="btn btn-primary" type="button">Send Message</button></form></article></div>`
  };
  views.courses = `<div class="topic-heading"><span class="section-badge">Course Catalog</span><h1>Explore Courses</h1><p>Choose your next course without leaving your dashboard.</p></div><div class="topic-grid"><article class="topic-card"><h3>Modern Web Development</h3><p>Build responsive websites with HTML, CSS and JavaScript.</p><span class="section-badge">Beginner · 8 hours</span><br><button class="btn btn-primary btn-sm" type="button">View Course</button></article><article class="topic-card"><h3>Python for Beginners</h3><p>Learn programming fundamentals through practical projects.</p><span class="section-badge">Beginner · 10 hours</span><br><button class="btn btn-primary btn-sm" type="button">View Course</button></article><article class="topic-card"><h3>UI/UX Design Fundamentals</h3><p>Create user-friendly interfaces and beautiful experiences.</p><span class="section-badge">Intermediate · 6 hours</span><br><button class="btn btn-primary btn-sm" type="button">View Course</button></article><article class="topic-card"><h3>Data Science Essentials</h3><p>Understand data, charts and insights using modern tools.</p><span class="section-badge">Intermediate · 12 hours</span><br><button class="btn btn-primary btn-sm" type="button">View Course</button></article></div>`;
  views['my-courses'] = `<div class="topic-heading"><span class="section-badge">Learning Library</span><h1>My Courses</h1><p>Your learning dashboard: review your enrolled courses and progress.</p></div><div class="topic-grid"><article class="topic-card wide"><div class="dashboard-section-header"><h3>My Learning Progress</h3><span class="section-badge">2 active</span></div><div class="course-suggestion-list"><div class="course-suggestion-item"><strong>Modern Web Development</strong><span>Web Development · 72% complete</span><div class="progress-track"><div class="progress-fill" style="width:72%"></div></div></div><div class="course-suggestion-item"><strong>Python for Beginners</strong><span>Programming · 38% complete</span><div class="progress-track"><div class="progress-fill" style="width:38%"></div></div></div></div></article><article class="topic-card"><h3>Find a Course</h3><form class="topic-form"><label>Search courses<input type="search" placeholder="Search by course name"></label><label>Category<select><option>All categories</option><option>Development</option><option>Design</option><option>Data Science</option></select></label><button class="btn btn-primary" type="button">Search Courses</button></form></article><article class="topic-card"><h3>Learning Summary</h3><p>Keep your momentum going this week.</p><div class="progress-track"><div class="progress-fill" style="width:64%"></div></div><strong>64% weekly goal completed</strong></article></div>`;
  if (views[topic]) main.innerHTML = views[topic];

  if (topic === 'my-courses') {
    const form = main.querySelector('.topic-card form');
    const searchInput = form?.querySelector('input[type="search"]');
    const categorySelect = form?.querySelector('select');
    const results = document.createElement('div');
    results.className = 'course-search-results';
    results.style.marginTop = '24px';
    main.querySelector('.topic-card.wide')?.appendChild(results);

    const loadCourses = () => {
      const query = (searchInput?.value || '').trim().toLowerCase();
      const category = categorySelect?.value || 'All categories';
      const matches = coursesData.filter(course => {
        const matchesQuery = !query || `${course.title} ${course.category} ${course.description}`.toLowerCase().includes(query);
        const matchesCategory = category === 'All categories' || course.category === category;
        return matchesQuery && matchesCategory;
      });

      results.innerHTML = matches.length
        ? `<h3>Search Results</h3><div class="course-suggestion-list">${matches.map(course => `<div class="course-suggestion-item"><strong>${course.title}</strong><span>${course.category} · ${course.level} · ${course.duration}</span></div>`).join('')}</div>`
        : '<p class="empty-state">No courses found. Try a different search or category.</p>';
    };

    form?.addEventListener('submit', event => {
      event.preventDefault();
      loadCourses();
    });
    searchInput?.addEventListener('input', loadCourses);
    categorySelect?.addEventListener('change', loadCourses);
  }

  if (topic === 'progress') {
    const user = Auth.getCurrentUser() || {};
    const enrolled = (user.enrolledCourses || []).map(courseId => coursesData.find(course => course.id === courseId)).filter(Boolean);
    const progressItems = enrolled.length
      ? enrolled.map(course => ({ course, value: Auth.getProgress(course.id) }))
      : coursesData.slice(0, 3).map((course, index) => ({ course, value: [72, 38, 18][index] }));
    const completed = progressItems.filter(item => item.value >= 100).length;
    const inProgress = progressItems.filter(item => item.value > 0 && item.value < 100).length;
    const notStarted = progressItems.filter(item => item.value === 0).length;
    const total = progressItems.length || 1;
    const completedPercent = Math.round(completed / total * 100);
    const inProgressPercent = Math.round(inProgress / total * 100);
    const notStartedPercent = 100 - completedPercent - inProgressPercent;

    const chart = main.querySelector('.pie-chart');
    if (chart) {
      chart.style.background = `conic-gradient(var(--primary) 0 ${completedPercent}%, var(--secondary) ${completedPercent}% ${completedPercent + inProgressPercent}%, var(--gray-200) ${completedPercent + inProgressPercent}% 100%)`;
    }
    const legend = main.querySelectorAll('.chart-legend span');
    if (legend[0]) legend[0].textContent = `Completed · ${completedPercent}%`;
    if (legend[1]) legend[1].textContent = `In progress · ${inProgressPercent}%`;
    if (legend[2]) legend[2].textContent = `Not started · ${notStartedPercent}%`;

    const heroImage = main.querySelector('.topic-hero .topic-image');
    if (heroImage) {
      heroImage.outerHTML = '<div class="progress-hero-visual" aria-label="Learning analytics illustration">📊<span>Learning Analytics</span></div>';
    }

    const goalForm = main.querySelector('.topic-card form');
    const goalInput = goalForm?.querySelector('input[type="number"]');
    const goalButton = goalForm?.querySelector('button');
    const savedGoal = localStorage.getItem('ls_weekly_goal');
    if (goalInput && savedGoal) goalInput.value = savedGoal;
    if (goalForm && goalInput && !goalForm.querySelector('.goal-status')) {
      const status = document.createElement('small');
      status.className = 'goal-status';
      status.style.color = 'var(--success)';
      goalForm.appendChild(status);
      if (savedGoal) status.textContent = `Weekly goal saved: ${savedGoal} hours`;
      goalButton?.addEventListener('click', () => {
        const hours = Number(goalInput.value);
        if (!Number.isFinite(hours) || hours < 0) {
          status.style.color = 'var(--danger)';
          status.textContent = 'Enter a valid number of hours.';
          return;
        }
        localStorage.setItem('ls_weekly_goal', String(hours));
        status.style.color = 'var(--success)';
        status.textContent = `Weekly goal updated to ${hours} hours.`;
        showNotification('Weekly goal updated successfully!', 'success');
      });
    }

    const grid = main.querySelector('.topic-grid');
    if (grid) {
      const card = document.createElement('article');
      card.className = 'topic-card wide';
      card.innerHTML = `<h3>Course Progress</h3>${progressItems.length ? `<div class="topic-list">${progressItems.map(({ course, value }) => `<div class="topic-list-item"><div><strong>${course.title}</strong><div class="progress-track"><div class="progress-fill" style="width:${value}%"></div></div><small>${value >= 100 ? 'Completed' : `${value}% complete`} · ${course.duration}</small></div><span class="section-badge">${value}%</span></div>`).join('')}</div>` : '<p class="empty-state">Enroll in a course to see your progress here.</p>'}`;
      grid.appendChild(card);
    }
  }

  if (topic === 'assignments') {
    const form = main.querySelector('.topic-card form');
    const courseSelect = form?.querySelector('select');
    const titleInput = form?.querySelector('input[type="text"]');
    const fileInput = form?.querySelector('input[type="file"]');
    const saveButton = form?.querySelector('button');
    if (form && saveButton) {
      const status = document.createElement('small');
      status.className = 'assignment-status';
      status.style.color = 'var(--success)';
      form.appendChild(status);
      saveButton.addEventListener('click', () => {
        const title = titleInput?.value.trim() || '';
        if (!title) {
          status.style.color = 'var(--danger)';
          status.textContent = 'Please enter an assignment title.';
          titleInput?.focus();
          return;
        }
        const draft = {
          course: courseSelect?.value || '',
          title,
          fileName: fileInput?.files?.[0]?.name || '',
          savedAt: new Date().toISOString()
        };
        localStorage.setItem('ls_assignment_draft', JSON.stringify(draft));
        status.style.color = 'var(--success)';
        status.textContent = `Draft saved for ${draft.course}.`;
        showNotification('Assignment draft saved successfully!', 'success');
      });
    }
  }

  if (topic === 'calendar') {
    const calendarGrid = main.querySelector('.calendar-grid');
    if (calendarGrid) {
      const monthStart = new Date(2026, 8, 1);
      const firstDay = (monthStart.getDay() + 6) % 7;
      const eventsForMonth = JSON.parse(localStorage.getItem('ls_study_events') || '[]')
        .filter(event => event.date?.startsWith('2026-09-'));
      const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const days = Array.from({ length: firstDay }, () => '<span class="calendar-day calendar-empty"></span>');
      for (let day = 1; day <= 30; day += 1) {
        const dayString = String(day).padStart(2, '0');
        const hasEvent = eventsForMonth.some(event => event.date.endsWith(`-${dayString}`));
        days.push(`<span class="calendar-day${hasEvent ? ' has-event' : ''}">${day}</span>`);
      }
      calendarGrid.innerHTML = weekdays.map(day => `<span class="calendar-weekday">${day}</span>`).join('') + days.join('');
    }
    const form = main.querySelector('.topic-card form');
    const eventName = form?.querySelector('input[type="text"]');
    const eventDate = form?.querySelector('input[type="date"]');
    const reminder = form?.querySelector('select');
    const addButton = form?.querySelector('button');
    const grid = main.querySelector('.topic-grid');
    const events = JSON.parse(localStorage.getItem('ls_study_events') || '[]');

    const eventsCard = document.createElement('article');
    eventsCard.className = 'topic-card wide';
    eventsCard.innerHTML = '<h3>Upcoming Study Events</h3><div class="topic-list calendar-events-list"></div>';
    grid?.appendChild(eventsCard);

    const eventsList = eventsCard.querySelector('.calendar-events-list');
    const renderEvents = () => {
      eventsList.innerHTML = events.length
        ? events.map(event => `<div class="topic-list-item"><div><strong>${event.name}</strong><br><small>${event.date} · Reminder: ${event.reminder}</small></div><span class="section-badge">Scheduled</span></div>`).join('')
        : '<p class="empty-state">No study events scheduled yet.</p>';
    };
    renderEvents();

    if (form && addButton) {
      const status = document.createElement('small');
      status.className = 'calendar-status';
      form.appendChild(status);
      addButton.addEventListener('click', () => {
        const name = eventName?.value.trim() || '';
        if (!name || !eventDate?.value) {
          status.style.color = 'var(--danger)';
          status.textContent = 'Enter an event name and date.';
          return;
        }
        events.push({ name, date: eventDate.value, reminder: reminder?.value || 'No reminder' });
        localStorage.setItem('ls_study_events', JSON.stringify(events));
        renderEvents();
        status.style.color = 'var(--success)';
        status.textContent = 'Study event added successfully.';
        showNotification('Study event added to your calendar!', 'success');
        form.reset();
      });
    }
  }

  if (topic === 'profile') {
    const form = main.querySelector('.topic-card form');
    const inputs = form?.querySelectorAll('input');
    const nameInput = inputs?.[0];
    const emailInput = inputs?.[1];
    const goalSelect = form?.querySelector('select');
    const saveButton = form?.querySelector('button');
    if (nameInput) {
      nameInput.value = '';
      nameInput.placeholder = 'Enter your full name';
    }
    if (emailInput) {
      emailInput.value = '';
      emailInput.placeholder = 'Enter your email';
    }
    if (goalSelect) goalSelect.selectedIndex = -1;
    if (form && saveButton) {
      const status = document.createElement('small');
      status.className = 'profile-save-status';
      form.appendChild(status);
      saveButton.addEventListener('click', () => {
        if (!nameInput.value.trim() || !emailInput.value.trim() || goalSelect.selectedIndex === -1) {
          status.style.color = 'var(--danger)';
          status.textContent = 'Please fill in all profile fields.';
          return;
        }
        status.style.color = 'var(--success)';
        status.textContent = `Profile saved for ${nameInput.value.trim()}.`;
        showNotification('Profile changes saved successfully!', 'success');
      });
    }
  }

  if (topic === 'help') {
    const form = main.querySelector('.topic-card form');
    const emailInput = form?.querySelector('input[type="email"]');
    const questionInput = form?.querySelector('textarea');
    const sendButton = form?.querySelector('button');
    if (form && sendButton) {
      const status = document.createElement('small');
      status.className = 'help-message-status';
      form.appendChild(status);
      sendButton.addEventListener('click', () => {
        const email = emailInput?.value.trim() || '';
        const question = questionInput?.value.trim() || '';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !question) {
          status.style.color = 'var(--danger)';
          status.textContent = 'Please enter a valid email and your question.';
          return;
        }
        status.style.color = 'var(--success)';
        status.textContent = 'Message sent successfully. Our team will reply soon.';
        showNotification('Your message has been sent!', 'success');
        form.reset();
      });
    }
  }
}

function openDashboardCourses(event) {
  event.preventDefault();
  event.stopPropagation();
  if (window.location.hash !== '#courses') {
    window.history.pushState({}, '', '#courses');
  }
  renderDashboardTopic('courses');
}

// ========== Profile Page ==========
function initProfilePage() {
  if (!Auth.isLoggedIn()) {
    window.location.href = 'login.html';
    return;
  }

  const user = Auth.getCurrentUser();
  if (!user) return;

  // Fill profile info
  const avatarEl = document.getElementById('profile-avatar');
  const nameEl = document.getElementById('profile-name');
  const emailEl = document.getElementById('profile-email');
  const bioEl = document.getElementById('profile-bio');

  if (avatarEl) avatarEl.textContent = user.name.split(' ').map(n => n[0]).join('');
  if (nameEl) nameEl.textContent = user.name;
  if (emailEl) emailEl.textContent = user.email;
  if (bioEl) bioEl.textContent = user.bio || 'Passionate learner on LearnSphere';

  // Stats
  const enrolled = user.enrolledCourses || [];
  const completed = user.completedCourses || [];
  const profileStats = document.querySelectorAll('.profile-stat .value');
  if (profileStats[0]) profileStats[0].textContent = enrolled.length;
  if (profileStats[1]) profileStats[1].textContent = completed.length;
  if (profileStats[2]) profileStats[2].textContent = enrolled.length * 8;

  // Edit form
  const editForm = document.getElementById('profile-edit-form');
  if (editForm) {
    const nameInput = document.getElementById('edit-name');
    const emailInput = document.getElementById('edit-email');
    const bioInput = document.getElementById('edit-bio');
    const saveButton = editForm.querySelector('button[type="submit"]');
    const saveStatus = document.createElement('small');
    saveStatus.className = 'profile-save-status';
    editForm.appendChild(saveStatus);
    if (nameInput) nameInput.value = user.name;
    if (emailInput) emailInput.value = user.email;
    if (bioInput) bioInput.value = user.bio || '';

    editForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        saveStatus.style.color = 'var(--danger)';
        saveStatus.textContent = !name ? 'Please enter your full name.' : 'Please enter a valid email address.';
        if (!name) nameInput.focus(); else emailInput.focus();
        return;
      }
      Auth.updateProfile({
        name,
        email,
        bio: bioInput.value.trim()
      });
      if (nameEl) nameEl.textContent = name;
      if (emailEl) emailEl.textContent = email;
      if (bioEl) bioEl.textContent = bioInput.value.trim();
      if (avatarEl) avatarEl.textContent = name.split(' ').map(n => n[0]).join('');
      saveStatus.style.color = 'var(--success)';
      saveStatus.textContent = 'Profile changes saved successfully.';
      if (saveButton) saveButton.blur();
      showNotification('Profile updated successfully!', 'success');
    });
  }

  // Password form
  const passForm = document.getElementById('password-form');
  if (passForm) {
    passForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const current = document.getElementById('current-password');
      const newPass = document.getElementById('new-password');
      const confirmPass = document.getElementById('confirm-new-password');

      let valid = true;
      [current, newPass, confirmPass].forEach(f => f.classList.remove('error'));

      if (!current.value) { current.classList.add('error'); valid = false; }
      if (!newPass.value || newPass.value.length < 6) {
        newPass.classList.add('error');
        valid = false;
      }
      if (newPass.value !== confirmPass.value) {
        confirmPass.classList.add('error');
        valid = false;
      }
      if (current.value !== user.password) {
        current.classList.add('error');
        showNotification('Current password is incorrect', 'error');
        valid = false;
      }

      if (valid) {
        Auth.updateProfile({ password: newPass.value });
        passForm.reset();
        showNotification('Password updated successfully!', 'success');
      }
    });
  }
}

// ========== Contact Page ==========
function initContactPage() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const subject = document.getElementById('contact-subject');
    const message = document.getElementById('contact-message');

    const nameErr = document.getElementById('contact-name-error');
    const emailErr = document.getElementById('contact-email-error');
    const subjectErr = document.getElementById('contact-subject-error');
    const messageErr = document.getElementById('contact-message-error');

    // Reset
    [name, email, subject, message].forEach(f => f.classList.remove('error'));
    [nameErr, emailErr, subjectErr, messageErr].forEach(e => { if(e) e.classList.remove('visible'); });

    if (!name.value.trim()) {
      name.classList.add('error');
      if (nameErr) { nameErr.textContent = 'Name is required'; nameErr.classList.add('visible'); }
      valid = false;
    }

    if (!email.value.trim()) {
      email.classList.add('error');
      if (emailErr) { emailErr.textContent = 'Email is required'; emailErr.classList.add('visible'); }
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      if (emailErr) { emailErr.textContent = 'Please enter a valid email'; emailErr.classList.add('visible'); }
      valid = false;
    }

    if (!subject.value.trim()) {
      subject.classList.add('error');
      if (subjectErr) { subjectErr.textContent = 'Subject is required'; subjectErr.classList.add('visible'); }
      valid = false;
    }

    if (!message.value.trim()) {
      message.classList.add('error');
      if (messageErr) { messageErr.textContent = 'Message is required'; messageErr.classList.add('visible'); }
      valid = false;
    }

    if (!valid) return;

    showModal('Message Sent!', 'Thank you for contacting us. We will get back to you within 24 hours.', 'success');
    form.reset();
  });
}

// ========== Init on each page ==========
(function() {
  const page = document.body.dataset.page;
  switch (page) {
    case 'home': initHomePage(); break;
    case 'courses': initCoursesPage(); break;
    case 'course-details': initCourseDetailsPage(); break;
    case 'login': initLoginPage(); break;
    case 'register': initRegisterPage(); break;
    case 'dashboard': initDashboardPage(); break;
    case 'profile': initProfilePage(); break;
    case 'contact': initContactPage(); break;
    default:
      if (document.getElementById('login-form')) initLoginPage();
      if (document.getElementById('register-form')) initRegisterPage();
      if (document.getElementById('contact-form')) initContactPage();
  }
})();

// ========== Logout button binding ==========
document.addEventListener('click', function(e) {
  const socialLink = e.target.closest('.footer-social a');
  if (socialLink) {
    e.preventDefault();
    window.location.href = '404.html';
    return;
  }

  const certificateButton = e.target.closest('.certificate-card button');
  if (certificateButton) {
    const card = certificateButton.closest('.certificate-card');
    const title = card?.querySelector('h3')?.textContent || 'LearnSphere Achievement';
    const details = card?.querySelector('p')?.textContent || '';
    const issued = details.split('·')[0].trim();
    const idMatch = details.match(/#?LS-\d+/);
    showCertificatePreview(title, issued, idMatch ? idMatch[0].replace('#', '') : 'LS-0000');
    return;
  }

  if (e.target.closest('.logout-btn, [data-action="logout"]')) {
    e.preventDefault();
    showLogoutConfirmation();
  }

  const toggle = e.target.closest('.password-toggle');
  if (toggle) {
    const input = document.getElementById(toggle.dataset.target);
    if (!input) return;
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    toggle.textContent = showing ? '👁' : '🙈';
    toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
  }
});

// ========== Dashboard sidebar mobile toggle ==========
document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      const isOpen = sidebar.classList.toggle('mobile-open');
      sidebarToggle.classList.toggle('active', isOpen);
      sidebarToggle.setAttribute('aria-expanded', String(isOpen));
      sidebarToggle.setAttribute('aria-label', isOpen ? 'Close topics menu' : 'Open topics menu');
    });

    sidebar.querySelectorAll('.sidebar-nav a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        sidebarToggle.classList.remove('active');
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarToggle.setAttribute('aria-label', 'Open topics menu');
      });
    });
  }
});
