// Single source of truth for every fact shown on the site.
// Keep this in sync with public/K_S_Meghana_Resume.pdf.

export const profile = {
  name: 'K S Meghana',
  title: 'Aspiring Software Tester / QA Professional',
  headline: 'B.Tech CSE Student | Aspiring Software Tester',
  college: 'Sanskrithi School of Engineering',
  collegeCity: 'Puttaparthi',
  degree: 'B.Tech, Computer Science and Engineering',
  period: '2024–2028',
  year: 'Third Year',
  location: 'Andhra Pradesh, India',
  email: 'ksmegha2005@gmail.com',
  linkedin: 'https://www.linkedin.com/in/meghana-k-s-a1a4b42aa',
  github: 'https://github.com/KSMeghana-hub',
  githubUser: 'KSMeghana-hub',
  resume: 'K_S_Meghana_Resume.pdf',
  photo: { webp: 'meghana.webp', jpg: 'meghana.jpg', w: 760, h: 1009 },
};

export const roles = [
  'Aspiring Software Tester',
  'Quality Assurance (QA) Aspirant',
  'Manual Testing & STLC',
  'B.Tech CSE Student · 2024–2028',
];

export const heroTags = ['Manual Testing', 'STLC', 'Jira', 'SQL', 'Java'];

export const stats = [
  { value: 3, suffix: 'rd Year', label: 'B.Tech CSE · 2024–2028' },
  { value: 4, suffix: ' Projects', label: 'Testing, AI, Java & community' },
  { value: 2, suffix: ' Certificates', label: 'RISE Institute, Austria' },
  { value: 941, suffix: '/1000', label: 'Intermediate (MPC) score', small: true },
];

export const about = {
  lead: 'I am K S Meghana, a B.Tech Computer Science and Engineering student preparing for a career in Software Testing and Quality Assurance.',
  paragraphs: [
    'I am pursuing my degree at Sanskrithi School of Engineering from 2024 to 2028. I am interested in software testing, quality assurance, programming fundamentals and problem-solving.',
    'I am developing my technical skills through academic learning, practical projects and hands-on testing activities. I am eager to improve my knowledge, gain practical experience and prepare for a career in the software industry.',
  ],
  focus: 'Manual testing, test case preparation, defect reporting, SQL and programming fundamentals.',
  languages: ['Telugu', 'English', 'Kannada', 'Hindi (Basic)'],
  interests: [['🎧', 'Music'], ['⚽', 'Football'], ['🍳', 'Cooking'], ['🥋', 'Karate']],
};

export const education = [
  {
    period: '2024 – 2028', current: true,
    title: 'Bachelor of Technology (B.Tech)',
    org: 'Computer Science and Engineering (CSE)',
    place: 'Sanskrithi School of Engineering, Puttaparthi',
    tags: ['University: JNTUA', 'Regulation: R23', 'Autonomous', 'Currently: Third Year'],
  },
  { period: '2024', title: 'Intermediate (MPC)', org: 'L.R.G. Naidu Junior College', score: '941', outOf: '1000' },
  { period: '2022', title: 'Secondary School Certificate (SSC)', org: 'L.R.G. Vidyalayam, Tirikera, Hindupur' },
];

export const certificates = [
  {
    id: 'rise-module-1', module: 1, accent: '#0D9488',
    course: '2024–2025 Module 1',
    title: 'RISE Institute of Higher Technology',
    issuer: 'RISE (Research Industrial Systems Engineering), Austria',
    partner: 'Sanskrithi School of Engineering',
    date: 'May 7, 2025',
    topics: ['Programming concepts using Scratch', 'Self-learning using online resources', 'Open-source and open-participation'],
    code: 'NhgKdDMVCP',
  },
  {
    id: 'rise-module-2', module: 2, accent: '#E5486A',
    course: '2026 Module 2',
    title: 'RISE Institute of Higher Technology',
    issuer: 'RISE (Research Industrial Systems Engineering), Austria',
    partner: 'Sanskrithi School of Engineering',
    date: 'March 7, 2026',
    topics: ['Problem-Solving and Self-Learning', 'Programming Fundamentals in Java', 'Using the Command Line'],
    code: 'xiyrKVteyL',
  },
];

export const achievements = [
  { icon: '🎮', title: 'Gamified Learning on OOP', text: 'Participated in Gamified Learning on Object-Oriented Programming at Sanskrithi School of Engineering, Puttaparthi.' },
  { icon: '🤖', title: 'AI, ML & LLM Technical Events', text: 'Participated in technical events related to AI, ML and LLMs.' },
];

export const testingSkills = ['Manual Testing', 'Software Testing Life Cycle (STLC)', 'Test Scenarios', 'Test Cases', 'Bug Reporting', 'Smoke Testing', 'Sanity Testing', 'Regression Testing', 'Retesting'];
export const stlc = ['Requirement Analysis', 'Test Planning', 'Test Case Development', 'Environment Setup', 'Test Execution', 'Test Closure'];
export const programming = [
  { name: 'Java', level: 'Beyond basics', w: 68, tone: '' },
  { name: 'C', level: 'Fundamentals', w: 50, tone: 't2' },
  { name: 'Python', level: 'Basics', w: 34, tone: 't3' },
];
export const skillGroups = [
  { key: 'db', icon: '🗄️', tint: 'sk', title: 'Database', sub: 'Data & queries', items: ['SQL', 'MySQL', 'Basic SQL Queries', 'CRUD Operations'] },
  { key: 'web', icon: '🌐', tint: 'co', title: 'Web Technologies', sub: 'Foundations', items: ['HTML Basics', 'CSS Basics', 'JavaScript Basics'] },
  { key: 'tools', icon: '🛠️', tint: 'su', title: 'Tools', sub: 'Everyday kit', items: ['Jira', 'MS Excel', 'Eclipse IDE', 'VS Code', 'Command Line (Basics)'] },
];
export const strengths = ['Logical Thinking', 'Problem-Solving', 'Attention to Detail', 'Continuous Learning', 'Willingness to Improve Communication Skills'];

export const marqueeA = ['Manual Testing', 'STLC', 'Test Scenarios', 'Test Cases', 'Bug Reporting', 'Smoke Testing', 'Sanity Testing', 'Regression Testing', 'Retesting'];
export const marqueeB = ['Java', 'C', 'Python', 'SQL', 'MySQL', 'CRUD', 'HTML', 'CSS', 'JavaScript', 'Jira', 'MS Excel', 'Eclipse IDE', 'VS Code'];

export const projects = [
  {
    n: '01', cover: 'cv1', type: 'Tool: Lovable', title: 'AI Resume Builder',
    text: 'An AI-powered resume builder created using Lovable to help users create and organize professional resumes through a simple web interface.',
    tags: ['Lovable', 'AI-powered', 'Web Interface'],
  },
  {
    n: '02', cover: 'cv2', type: 'Tools: Jira, MS Excel', title: 'E-Commerce Testing',
    text: 'A manual testing project covering login, authentication, product search, wishlist, cart, checkout and payment-related scenarios. Includes test case preparation and defect tracking.',
    tags: ['Manual Testing', 'Test Cases', 'Defect Tracking', 'Jira', 'MS Excel'],
  },
  {
    n: '03', cover: 'cv3', type: 'Technology: Java', title: 'Java Practice',
    text: 'Practice programs covering variables, operators, conditional statements, loops, methods, classes, objects and object-oriented programming concepts.',
    tags: ['Java', 'OOP', 'Classes & Objects', 'Methods'],
  },
  {
    n: '04', cover: 'cv4', type: 'Community Service Project', title: 'Eco-Friendly Plant Disease Management',
    text: 'Field work and research focused on identifying plant diseases and exploring eco-friendly approaches to plant disease management.',
    tags: ['Field Work', 'Research', 'Eco-Friendly Methods'],
  },
];

export const journey = [
  { icon: '💻', title: 'Programming Fundamentals', text: 'Learning and practising Java, C and Python basics.' },
  { icon: '☕', title: 'Java and OOP', text: 'Strengthening knowledge of methods, classes, objects and object-oriented concepts.' },
  { icon: '🧪', title: 'Manual Testing', text: 'Learning STLC, test scenarios, test cases, test execution and defect reporting.' },
  { icon: '🛠️', title: 'Testing Tools', text: 'Practising Jira for defect tracking and Excel for test documentation.' },
  { icon: '🗄️', title: 'Database Skills', text: 'Improving SQL and MySQL knowledge.' },
  { icon: '🌐', title: 'Web Fundamentals', text: 'Learning HTML, CSS and JavaScript basics.' },
];

export const goal = {
  title: 'Aspiring Software Tester / QA Professional',
  text: 'My goal is to build a strong foundation in manual testing, improve my SQL and Java skills, gain practical experience through projects, and prepare for entry-level Software Testing and Quality Assurance opportunities.',
  pillars: [['Build', 'Manual Testing foundation'], ['Improve', 'SQL & Java skills'], ['Gain', 'Hands-on project experience'], ['Aim', 'Entry-level Software Testing & QA roles']],
  objective: 'To begin my career in Software Testing and Quality Assurance by developing strong skills in manual testing, test case preparation, defect reporting, SQL and programming fundamentals. I aim to continuously learn and contribute to improving software quality.',
};

export const nav = [
  ['home', 'Home'], ['about', 'About'], ['education', 'Education'], ['certifications', 'Certificates'],
  ['skills', 'Skills'], ['projects', 'Projects'], ['journey', 'Journey'], ['goal', 'Career Goal'], ['contact', 'Contact'],
];
