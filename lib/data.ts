export const profile = {
  name: "Bui Dinh Bao",
  tagline: "Computer Science Engineer",
  subtitle: "AI · Data Science · Full-Stack",
  email: "dinhbao.itech@gmail.com",
  phone: "+84 975 742 607",
  linkedin: "https://linkedin.com/in/fabyanbui",
  github: "https://github.com/fabyanbui",
  objective:
    "Computer Science graduate with a passion for building intelligent systems. Combining hands-on experience in AI/ML engineering, data science, and full-stack development to create technology that is reliable, impactful, and human-centred.",
};

export const education = {
  school: "University of Science, VNU-HCM",
  faculty: "Faculty of Information Technology",
  degree: "Bachelor of Computer Science",
  major: "Data Science",
  period: "Aug 2021 – Oct 2025",
  cgpa: "3.75 / 4.00",
};

export const skills = [
  {
    category: "Programming & Tools",
    icon: "Code2",
    items: ["Python", "R", "C/C++", "Java", "SQL", "Git & GitHub", "LaTeX", "Bash/Shell"],
  },
  {
    category: "Machine Learning & AI",
    icon: "Brain",
    items: ["Scikit-learn", "Transformers", "LLM", "Agentic AI", "MS Agent Framework", "Azure Function", "Prompt Engineering"],
  },
  {
    category: "Data Analysis & Visualization",
    icon: "BarChart3",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Streamlit", "Jupyter Notebook", "Statistics"],
  },
  {
    category: "Testing & Automation",
    icon: "TestTube2",
    items: ["Selenium", "Playwright", "Postman", "Manual Testing", "Test Planning"],
  },
  {
    category: "Data Engineering",
    icon: "Database",
    items: ["Data Pipelines", "Database Design", "Problem-solving", "Systematic Thinking"],
  },
];

export const experience = [
  {
    role: "Founding Engineer Intern / AI Engineer",
    company: "Parsie",
    type: "Full-time · On-site",
    period: "Oct 2025 – Present",
    bullets: [
      "Designed and evolved LLM-based document processing pipelines, transforming unstructured financial documents into structured, reviewable data for accounting workflows.",
      "Researched and applied techniques to improve LLM reliability: schema-constrained extraction, invariant-aware design, and structured output validation.",
      "Worked end-to-end across frontend, backend, and database layers to integrate AI outputs into real product workflows.",
      "Collaborated in a fast-paced startup environment, leveraging AI to accelerate full-stack development and product iteration.",
    ],
  },
];

export const projects = [
  {
    title: "Vietnamese Hallucination Benchmark (VietPS-Hallu)",
    subtitle: "Undergraduate Thesis",
    github: "https://github.com/fabyanbui",
    description:
      "Built the first large-scale Vietnamese hallucination detection dataset for LLMs in e-government services. Collected 3,717 samples from national portals with a 3-stage pipeline.",
    highlights: [
      "Constructed benchmark with 4 hallucination categories; thesis graded 9.6/10 presentation.",
      "Benchmarked state-of-the-art LLMs using accuracy, precision, recall, and F1.",
    ],
    tags: ["LLM", "NLP", "Python", "Data Pipeline", "Benchmarking"],
  },
  {
    title: "IT Job Market Analytics Platform",
    subtitle: "Data Engineering + Data Science",
    github: "https://github.com/fabyanbui",
    description:
      "Full data engineering and analytics application covering job data collection, EDA dashboard, LLM chatbot, and personalized recommendation system.",
    highlights: [
      "Deployed data app with real-time insights and interactive features.",
      "Improved user engagement through chatbot support and personalized recommendations.",
    ],
    tags: ["Python", "Streamlit", "LLM", "EDA", "Recommendation System"],
  },
  {
    title: "ShopPy E-commerce Application",
    subtitle: "QA & Test Automation",
    github: "https://github.com/fabyanbui",
    description:
      "Multi-layered test suite (manual, E2E, API, security, performance) for a Next.js + TypeScript e-commerce app. Automated flows with Playwright and validated APIs with Postman.",
    highlights: [
      "Discovered critical checkout stock-decrement defect and security vulnerability.",
      "Built reusable Playwright automation framework with multi-role test coverage.",
    ],
    tags: ["Playwright", "Postman", "Next.js", "TypeScript", "QA Automation"],
  },
  {
    title: "Driver Drowsiness Detection Model",
    subtitle: "Computer Vision / Deep Learning",
    github: "https://github.com/fabyanbui",
    description:
      "Collected, preprocessed, and augmented facial image data. Designed and trained a CNN model in TensorFlow/OpenCV to classify driver states (drowsy vs. alert).",
    highlights: [
      "Achieved reliable classification accuracy enabling automated driver state detection.",
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
  },
  {
    title: "Movie Data Pipeline and Insights",
    subtitle: "Data Science",
    github: "https://github.com/fabyanbui",
    description:
      "End-to-end data science workflow on a movie dataset: preprocessing, EDA, visualization, and ML modeling for trend and revenue prediction.",
    highlights: [
      "Produced analytical insights and baseline predictive models for movie trends and revenue.",
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "EDA"],
  },
  {
    title: "Football Tournament Management System",
    subtitle: "QA & Manual Testing",
    github: "https://github.com/fabyanbui",
    description:
      "Designed and executed manual black-box test cases for a full-stack Node.js/Express/PostgreSQL web app following RUP test planning methodology.",
    highlights: [
      "Uncovered critical input validation failures preventing data integrity issues before release.",
      "Delivered complete QA documentation suite covering all functional use cases.",
    ],
    tags: ["Manual Testing", "Black-box Testing", "PostgreSQL", "Node.js", "Bug Lifecycle"],
  },
];

export const certificates = [
  { name: "Google Advanced Data Analytics Specialization", issuer: "Google · Coursera" },
  { name: "Google Data Analytics Specialization", issuer: "Google · Coursera" },
  { name: "Google IT Automation with Python Specialization", issuer: "Google · Coursera" },
  { name: "Google IT Support Specialization", issuer: "Google · Coursera" },
  { name: "Google UX Design Specialization", issuer: "Google · Coursera" },
  { name: "Google AI Essentials", issuer: "Google · Coursera" },
  { name: "Google Prompting Essentials", issuer: "Google · Coursera" },
  { name: "TOEIC 780 (L:395 / R:385)", issuer: "ETS · IIG Vietnam" },
  { name: "TOEIC SW 300 (S:130 / W:170)", issuer: "ETS · IIG Vietnam" },
];
