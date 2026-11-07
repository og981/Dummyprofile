// Student Portfolio & Content Management System - Data Store
// Designed to seamlessly map to future PostgreSQL schema and Express REST API endpoints
// e.g., GET /api/profile, GET /api/education, GET /api/skills, GET /api/projects, GET /api/experience, GET /api/certifications

export const portfolioData = {
  personalInfo: {
    name: "Alex Morgan",
    preferredName: "Alex",
    role: "Computer Science & Engineering Student",
    subRole: "Aspiring Full-Stack Software Developer",
    university: "State Institute of Science & Technology",
    graduationYear: "Class of 2027",
    statusBadge: "Open to Summer 2026 Internships",
    bio: "Passionate 3rd-year undergraduate focused on building scalable, reliable web applications and exploring modern software architecture. Enjoys turning complex system requirements into clean, performant code.",
    location: "Bengaluru, India",
    email: "alex.morgan.dev@example.com",
    resumeUrl: "#resume-modal",
    resumeFileName: "Alex_Morgan_Resume.pdf",
    stats: [
      { label: "Current CGPA", value: "8.85", detail: "Top 10% of cohort" },
      { label: "Completed Projects", value: "8+", detail: "Full-stack & systems" },
      { label: "Problems Solved", value: "250+", detail: "LeetCode & Codeforces" },
      { label: "Hackathons", value: "3", detail: "Finalist & participant" }
    ],
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com",
        username: "alexmorgan-dev",
        icon: "Github"
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        username: "alex-morgan-cs",
        icon: "Linkedin"
      },
      {
        platform: "Twitter",
        url: "https://x.com",
        username: "@alexmorgan_dev",
        icon: "Twitter"
      },
      {
        platform: "Email",
        url: "mailto:alex.morgan.dev@example.com",
        username: "alex.morgan.dev@example.com",
        icon: "Mail"
      },
      {
        platform: "LeetCode",
        url: "https://leetcode.com",
        username: "alex_coder",
        icon: "Code"
      }
    ]
  },

  about: {
    headline: "Engineering pragmatic digital solutions with curiosity and discipline.",
    paragraphs: [
      "I am currently in my third year pursuing a Bachelor of Technology in Computer Science & Engineering. My software journey began with algorithmic problem solving in C++ and has expanded into modern full-stack engineering with React, Node.js, and relational databases like PostgreSQL.",
      "I thrive in collaborative team environments where I can build impactful software, write maintainable code, and learn from experienced engineers. Outside regular coursework, I actively contribute to our college developer club and explore cloud architecture and database performance tuning."
    ],
    highlights: [
      {
        title: "Full-Stack Development",
        description: "Designing end-to-end web applications with modular frontend components and clean RESTful backend APIs.",
        icon: "Layers"
      },
      {
        title: "Relational Database Design",
        description: "Modeling normalized schemas, writing indexed SQL queries, and maintaining data integrity with PostgreSQL.",
        icon: "Database"
      },
      {
        title: "Core CS Fundamentals",
        description: "Strong theoretical grounding in Data Structures, Algorithms, Operating Systems, and Computer Networks.",
        icon: "Cpu"
      },
      {
        title: "Version Control & Teamwork",
        description: "Collaborative Git workflows, peer code reviews, and structured documentation practices.",
        icon: "GitBranch"
      }
    ],
    quickFacts: [
      { label: "Degree", value: "B.Tech in Computer Science" },
      { label: "Current Year", value: "3rd Year (Semester 5)" },
      { label: "Primary Stack", value: "React, Node.js, PostgreSQL" },
      { label: "Languages", value: "JavaScript, C++, SQL, Python" },
      { label: "Availability", value: "Summer Internships & Co-ops" },
      { label: "Interests", value: "Distributed Systems, Web APIs, UX" }
    ]
  },

  education: [
    {
      id: "edu-1",
      institution: "State Institute of Science & Technology",
      degree: "Bachelor of Technology (B.Tech)",
      fieldOfStudy: "Computer Science & Engineering",
      duration: "2023 - 2027 (Expected)",
      grade: "CGPA: 8.85 / 10.0",
      location: "Bengaluru, India",
      isCurrent: true,
      description: "Focused on core computing fundamentals, systems programming, and modern software design patterns.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Object-Oriented Programming (C++/Java)",
        "Software Engineering & Agile"
      ],
      academicDetails: [
        "Dean's List of Academic Excellence for 2 consecutive semesters.",
        "Technical Lead at Campus Open Source & Web Development Society.",
        "Secured Top 5 ranking in Departmental Coding Sprint 2024."
      ]
    },
    {
      id: "edu-2",
      institution: "St. Jude Senior Secondary School",
      degree: "Higher Secondary Certificate (Class XII)",
      fieldOfStudy: "Science (Physics, Chemistry, Mathematics & CS)",
      duration: "2021 - 2023",
      grade: "Aggregate: 93.4%",
      location: "Bengaluru, India",
      isCurrent: false,
      description: "Excelled in Mathematics and introductory Computer Science, building basic foundational programs in Python and C++.",
      coursework: [
        "Physics & Mathematics",
        "Computer Science (Python)",
        "Boolean Algebra & Logic",
        "Relational Algebra Basics"
      ],
      academicDetails: [
        "School Subject Topper in Computer Science.",
        "Active member of National Science Olympiad and Math Club."
      ]
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        icon: "Terminal",
        items: [
          { name: "JavaScript (ES6+)", level: "Advanced", proficiency: 88 },
          { name: "C++", level: "Proficient", proficiency: 82 },
          { name: "SQL (PostgreSQL)", level: "Proficient", proficiency: 80 },
          { name: "Python", level: "Intermediate", proficiency: 75 },
          { name: "TypeScript", level: "Intermediate", proficiency: 70 },
          { name: "HTML5 / CSS3", level: "Advanced", proficiency: 90 }
        ]
      },
      {
        id: "frontend",
        name: "Frontend Development",
        icon: "Layout",
        items: [
          { name: "React.js", level: "Advanced", proficiency: 86 },
          { name: "Vite", level: "Proficient", proficiency: 85 },
          { name: "React Router", level: "Advanced", proficiency: 85 },
          { name: "Tailwind CSS", level: "Proficient", proficiency: 80 },
          { name: "Responsive UI/UX", level: "Advanced", proficiency: 88 },
          { name: "State Management", level: "Intermediate", proficiency: 78 }
        ]
      },
      {
        id: "backend",
        name: "Backend & Databases",
        icon: "Database",
        items: [
          { name: "Node.js", level: "Proficient", proficiency: 80 },
          { name: "Express.js", level: "Proficient", proficiency: 82 },
          { name: "PostgreSQL", level: "Proficient", proficiency: 78 },
          { name: "RESTful API Design", level: "Advanced", proficiency: 85 },
          { name: "JWT Authentication", level: "Intermediate", proficiency: 76 },
          { name: "CRUD Architectures", level: "Advanced", proficiency: 86 }
        ]
      },
      {
        id: "tools",
        name: "Tools, Platforms & Practices",
        icon: "Wrench",
        items: [
          { name: "Git & GitHub", level: "Advanced", proficiency: 88 },
          { name: "Postman", level: "Proficient", proficiency: 84 },
          { name: "VS Code", level: "Advanced", proficiency: 92 },
          { name: "Docker Basics", level: "Beginner", proficiency: 60 },
          { name: "Linux / Bash", level: "Intermediate", proficiency: 72 },
          { name: "Vercel / Render", level: "Proficient", proficiency: 80 }
        ]
      }
    ]
  },

  projects: [
    {
      id: "proj-1",
      title: "CampusConnect - Student Resource Hub",
      category: "Full Stack",
      featured: true,
      description: "A centralized web platform for university students to exchange verified lecture notes, buy and sell academic textbooks, and schedule peer study sessions.",
      imagePlaceholder: "CampusConnect",
      technologies: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      highlights: [
        "Designed relational schema in PostgreSQL with tables for users, materials, tags, and reviews.",
        "Implemented JWT-based secure authentication with student email verification.",
        "Built dynamic search with filter pills for course code, professor, and resource type."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/demo/campusconnect",
      status: "Completed"
    },
    {
      id: "proj-2",
      title: "DevSprint - Agile Task & Backlog Tracker",
      category: "Frontend",
      featured: true,
      description: "A lightweight, collaborative project management web app crafted for student hackathon teams to track sprint milestones, task assignments, and progress metrics.",
      imagePlaceholder: "DevSprint",
      technologies: ["React.js", "Vite", "Lucide Icons", "CSS Modules", "Context API"],
      highlights: [
        "Interactive drag-and-drop Kanban board for backlog, doing, review, and done states.",
        "Visual sprint burndown widget and task priority indicators.",
        "Client-side local storage persistence with seamless export to structured JSON."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/demo/devsprint",
      status: "Completed"
    },
    {
      id: "proj-3",
      title: "AlgoVision - Interactive Algorithm Visualizer",
      category: "Systems & Algorithms",
      featured: false,
      description: "An interactive educational tool that visualizes sorting (QuickSort, MergeSort) and pathfinding algorithms (Dijkstra, BFS) step by step with speed controls.",
      imagePlaceholder: "AlgoVision",
      technologies: ["JavaScript (ES6+)", "React.js", "Canvas API", "CSS Grid"],
      highlights: [
        "Dynamic array generator with customizable sizes, execution delays, and pause/step controls.",
        "Side-by-side time and space complexity metric comparison cards.",
        "Helped 60+ junior peers understand sorting mechanics during DSA lab study sessions."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/demo/algovision",
      status: "Completed"
    },
    {
      id: "proj-4",
      title: "EcoTrack - Campus Carbon Footprint Calculator",
      category: "Full Stack",
      featured: false,
      description: "A student-led green campus initiative web app calculating estimated greenhouse gas emissions from daily transit and dining choices with practical reduction suggestions.",
      imagePlaceholder: "EcoTrack",
      technologies: ["React.js", "REST API", "Express.js", "Chart.js", "CSS3"],
      highlights: [
        "Interactive questionnaire estimating weekly CO2 kilograms based on transit mode.",
        "Data visualization displaying department-level trends and goal achievements.",
        "Submitted and showcased at the annual Inter-College Sustainability Showcase."
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com/demo/ecotrack",
      status: "In Active Review"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Software Engineering Intern",
      organization: "CloudPulse Infotech",
      period: "June 2025 - August 2025",
      type: "Summer Internship",
      location: "Hybrid (Bengaluru, India)",
      description: "Contributed to front-facing features and internal tooling for an enterprise customer portal.",
      responsibilities: [
        "Developed 6+ responsive UI components in React adhering to the company design system.",
        "Integrated backend REST endpoints using Axios with comprehensive error-handling states.",
        "Assisted in refactoring legacy CSS to modern modular stylesheets, improving responsiveness across mobile viewports.",
        "Participated in weekly agile standups, sprint retrospectives, and peer PR reviews."
      ],
      skillsUsed: ["React.js", "REST APIs", "Git", "CSS Modules", "Agile"]
    },
    {
      id: "exp-2",
      role: "Undergraduate Teaching Assistant (DSA)",
      organization: "Department of Computer Science & Engineering",
      period: "January 2025 - May 2025",
      type: "Academic Appointment",
      location: "On-Campus",
      description: "Assisted professors in guiding 2nd-year students through foundational algorithms and data structure labs.",
      responsibilities: [
        "Conducted weekly practical laboratory lab sessions for 45+ students in C++ and memory management.",
        "Guided students in resolving compilation errors, segmentation faults, and debugging recursion.",
        "Helped evaluate lab assignments and authored clear solution guides with complexity analysis."
      ],
      skillsUsed: ["C++", "Data Structures", "Algorithms", "Mentoring", "Code Review"]
    },
    {
      id: "exp-3",
      role: "Technical Lead & Web Coordinator",
      organization: "Campus Developer Society (Student Chapter)",
      period: "August 2024 - Present",
      type: "Student Leadership",
      location: "On-Campus",
      description: "Overseeing student technical initiatives, open-source workshops, and web portals for campus hackathons.",
      responsibilities: [
        "Co-led a student team to construct the annual symposium portal used by 1,400+ attendees for registration.",
        "Organized 3 hands-on weekend bootcamps on 'Git & GitHub Basics' and 'Introduction to React' for 120+ participants.",
        "Maintained club repositories and reviewed code submitted by first-year junior members."
      ],
      skillsUsed: ["React.js", "GitHub", "Team Leadership", "Event Coordination"]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "October 2025",
      expiryDate: "October 2028",
      credentialId: "AWS-CCP-982147",
      credentialUrl: "https://aws.amazon.com/verification",
      skills: ["Cloud Architecture", "AWS Core Services", "Security & IAM", "Cloud Economics"],
      verified: true
    },
    {
      id: "cert-2",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      issueDate: "July 2025",
      expiryDate: "No Expiration",
      credentialId: "COURSERA-MFE-781923",
      credentialUrl: "https://coursera.org/verify",
      skills: ["React.js", "Advanced JavaScript", "Responsive Design", "UI/UX Principles"],
      verified: true
    },
    {
      id: "cert-3",
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      issueDate: "March 2025",
      expiryDate: "No Expiration",
      credentialId: "POSTMAN-SE-449102",
      credentialUrl: "https://badgr.com",
      skills: ["REST APIs", "API Testing", "HTTP Methods", "Postman Collections"],
      verified: true
    },
    {
      id: "cert-4",
      title: "Relational Database Design & SQL Fundamentals",
      issuer: "freeCodeCamp / University Specialization",
      issueDate: "December 2024",
      expiryDate: "No Expiration",
      credentialId: "FCC-SQL-55109",
      credentialUrl: "https://freecodecamp.org",
      skills: ["PostgreSQL", "Schema Normalization", "Indexing", "Complex Joins"],
      verified: true
    }
  ]
};

