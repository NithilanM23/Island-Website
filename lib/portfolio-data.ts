// Portfolio website data structure
// Each section represents a different aspect of the portfolio

export type PortfolioSection = 'hero' | 'about' | 'experience' | 'projects' | 'research' | 'skills' | 'contact'

export type SectionMeta = {
  id: PortfolioSection
  name: string
  npcName: string
  greeting: string
  color: string
  tile: { x: number; y: number }
  swatch: string
}

export type HeroContent = {
  title: string
  subtitle: string
  cta: string
  description: string
}

export type AboutContent = {
  bio: string
  location: string
  email: string
  social: { name: string; url: string }[]
}

export type Experience = {
  title: string
  company: string
  duration: string
  description: string
  technologies: string[]
}

export type Project = {
  title: string
  description: string
  technologies: string[]
  link?: string
  image?: string
}

export type Research = {
  title: string
  authors: string
  date: string
  description: string
  link?: string
  doi?: string
}

export type Skill = {
  category: string
  items: string[]
}

export type ContactContent = {
  email: string
  phone?: string
  social: { name: string; url: string }[]
  message: string
}

// Portfolio sections metadata (like buildings on the island)
export const SECTION_META: SectionMeta[] = [
  {
    id: 'hero',
    name: 'Hero',
    npcName: 'Welcome',
    greeting: 'Welcome to my portfolio',
    color: '#f4b740',
    tile: { x: 7, y: 7 }, // Center of the island
    swatch: '#f4b740',
  },
  {
    id: 'about',
    name: 'About',
    npcName: 'About Me',
    greeting: 'Learn more about who I am',
    color: '#3e9bd6',
    tile: { x: 2, y: 2 },
    swatch: '#3e9bd6',
  },
  {
    id: 'experience',
    name: 'Experience',
    npcName: 'My Journey',
    greeting: 'Check out my work experience',
    color: '#e0598b',
    tile: { x: 12, y: 2 },
    swatch: '#e0598b',
  },
  {
    id: 'projects',
    name: 'Projects',
    npcName: 'Portfolio',
    greeting: 'Explore my projects',
    color: '#9b6bd6',
    tile: { x: 2, y: 12 },
    swatch: '#9b6bd6',
  },
  {
    id: 'research',
    name: 'Research',
    npcName: 'Publications',
    greeting: 'My research & publications',
    color: '#315476',
    tile: { x: 12, y: 12 },
    swatch: '#315476',
  },
  {
    id: 'skills',
    name: 'Skills',
    npcName: 'Expertise',
    greeting: 'My technical skills',
    color: '#6ba876',
    tile: { x: 7, y: 2 },
    swatch: '#6ba876',
  },
  {
    id: 'contact',
    name: 'Contact',
    npcName: 'Get in Touch',
    greeting: 'Let&apos;s connect',
    color: '#e8a87c',
    tile: { x: 7, y: 12 },
    swatch: '#e8a87c',
  },
]

// Portfolio content - Replace with your actual information
export const portfolioContent = {
  hero: {
    title: 'Hi, I&apos;m Nithilan M',
    subtitle: 'AI/ML Developer & Data Scientist',
    cta: 'Explore my work',
    description: 'Architecting multimodal RAG systems and intelligent data solutions.',
  } as HeroContent,

  about: {
    bio: 'I&apos;m a B.Tech student in Artificial Intelligence & Data Science at Shiv Nadar University, Chennai. I specialize in building multimodal RAG systems, predictive ML models, and interactive data assistants. With experience in deploying locally-hosted LLMs and architecting hybrid retrieval pipelines, I love solving complex data privacy and retrieval challenges.',
    location: 'Chennai, India',
    email: 'am.nithilan@gmail.com',
    social: [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com' },
    ],
  } as AboutContent,

  experience: [
    {
      title: 'AI/ML Intern',
      company: 'Sopra Steria India',
      duration: 'Dec 2025 - March 2026',
      description: 'Architected a fully air-gapped multimodal RAG system ingesting 500+ enterprise PDFs. Engineered a hybrid BM25 + dense-vector retrieval pipeline using FAISS. Deployed and optimized a locally-hosted LLaMA-3.2 model using Ollama with 4-bit quantization.',
      technologies: ['Python', 'FAISS', 'Ollama', 'LLaMA-3.2', 'GGUF'],
    },
    {
      title: 'Data Science Intern',
      company: '8Queens Software Technologies Pvt. Ltd.',
      duration: 'June 2025 - July 2025',
      description: 'Built a RAG-powered internal knowledge chatbot reducing average employee lookup time by 40%. Performed EDA on 15K+ client records identifying key churn indicators, and implemented dashboards in Power BI.',
      technologies: ['Flowise', 'Pinecone', 'Pandas', 'Power BI', 'Cheerio'],
    },
  ] as Experience[],

  projects: [
    {
      title: 'F1 Race Position Predictor',
      description: 'Trained an XGBoost regressor on 10+ years of F1 historical data to predict race positions; served predictions via a Django REST API with <150ms response time.',
      technologies: ['Django', 'XGBoost', 'REST API', 'HTML/CSS', 'Render'],
      link: '#',
    },
    {
      title: 'Intelligent CSV Assistant',
      description: 'Developed an interactive Streamlit application enabling users to perform data exploration and obtain ML model insights via an LLM-driven assistant.',
      technologies: ['Streamlit', 'Pandas', 'Scikit-learn', 'PandasAI', 'Gemini 1.5 Pro'],
      link: '#',
    },
    {
      title: 'Airline Review Analysis - British Airways',
      description: 'Scraped airline reviews, cleaned data, and performed sentiment analysis with Logistic Regression to predict customer purchase intent.',
      technologies: ['BeautifulSoup', 'Pandas', 'Logistic Regression'],
      link: '#',
    },
  ] as Project[],

  research: [
    {
      title: 'RGAE-PNNR: Unsupervised Visual Anomaly Detection',
      authors: 'Nithilan M et al.',
      date: 'Aug 2025 - Jan 2026',
      description: 'Co-designed a novel hybrid anomaly detection architecture combining residual gated autoencoders with patch-level nearest-neighbor reconstruction. Achieved SOTA results on MVTec AD and VisA benchmarks.',
      link: '#',
      doi: 'Under review at Springer Nature',
    },
  ] as Research[],

  skills: [
    {
      category: 'Languages & DB',
      items: ['Python', 'SQL'],
    },
    {
      category: 'ML / AI Frameworks',
      items: ['PyTorch', 'scikit-learn', 'HuggingFace', 'LangChain', 'Flowise', 'N8N'],
    },
    {
      category: 'LLM & RAG Tooling',
      items: ['Ollama', 'FAISS', 'ChromaDB', 'Pinecone', 'Streamlit'],
    },
    {
      category: 'Data & Web',
      items: ['Pandas', 'NumPy', 'Power BI', 'Django REST', 'React'],
    },
  ] as Skill[],

  contact: {
    email: 'am.nithilan@gmail.com',
    phone: '+91 7305979173',
    social: [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com' },
    ],
    message: 'Feel free to reach out to me for AI/ML opportunities or collaborations!',
  } as ContactContent,
}
