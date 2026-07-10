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
  github?: string
  demo?: string
  image?: string
  images?: string[]
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
    title: 'Hi, I am Nithilan M',
    subtitle: 'AI Engineer & Data Scientist',
    cta: 'Explore my work',
    description: 'Architecting multimodal RAG systems, predictive ML models, and intelligent AI platforms.',
  } as HeroContent,

  about: {
    bio: 'I am a B.Tech student in Artificial Intelligence & Data Science at Shiv Nadar University, Chennai (CGPA: 9.04). I specialize in building local on-premise AI platforms, multimodal RAG systems, and predictive ML models. My achievements include securing All India Rank 5 in Large Language Models (NPTEL) and All India Rank 16 in Responsible and Safe AI Systems (NPTEL). I love solving complex data privacy and retrieval challenges.',
    location: 'Chennai, India',
    email: 'am.nithilan@gmail.com',
    social: [
      { name: 'GitHub', url: 'https://github.com/NithilanM23' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nithilanm23' },
    ],
  } as AboutContent,

  experience: [
    {
      title: 'AI Engineer Trainee',
      company: 'Daimler India Commercial Vehicles (DICV)',
      duration: 'May 2026 - July 2026',
      description: 'Built and deployed a fully on-premise GenAI platform using GGUF-quantized local LLMs with a toggle between general-purpose assistant mode and document-grounded RAG mode. Built a 3-agent pipeline with rule-based skill configuration for routing queries and augmenting responses with live web search.',
      technologies: ['GGUF', 'Local LLMs', 'RAG', 'Agentic Pipelines'],
    },
    {
      title: 'AI/ML Intern',
      company: 'Sopra Steria India',
      duration: 'Dec 2025 - March 2026',
      description: 'Built a multimodal RAG system for 500+ enterprise PDFs achieving <2s retrieval with zero external API calls. Engineered a Hybrid BM25 + FAISS retrieval pipeline, improving Top-5 retrieval precision by 18%. Deployed a quantized LLaMA-3.2 model using Ollama, reducing inference latency by 35%.',
      technologies: ['Python', 'FAISS', 'Ollama', 'LLaMA-3.2', 'BM25'],
    },
    {
      title: 'Data Science Intern',
      company: '8Queens Software Technologies Pvt. Ltd.',
      duration: 'June 2025 - July 2025',
      description: 'Built customer churn prediction models using Python and Pandas to identify high-risk customer segments. Built an automated EDA pipeline using YData Profiling and Pandas to generate statistical reports.',
      technologies: ['Python', 'Pandas', 'YData Profiling'],
    },
  ] as Experience[],

  projects: [
    {
      title: 'F1 Race Position Predictor',
      description: 'Trained an XGBoost regressor on 10+ years of F1 historical data to predict race positions (MAE: 2.3 positions); served predictions via a Django REST API with <150ms response time, deployed on Render.',
      technologies: ['Django', 'XGBoost', 'REST API', 'HTML/CSS', 'Render'],
      link: '#',
      github: 'https://github.com/NithilanM23/F1-Predictor',
      demo: 'https://f1predictor.onrender.com',
      images: ['/f1-predictor/homepage_f1.png', '/f1-predictor/mainpage_f1.png'],
    },
    {
      title: 'Multimodal RAG System',
      description: 'Architected a fully air-gapped multimodal RAG system ingesting 500+ enterprise PDFs. Engineered a hybrid BM25 + dense-vector retrieval pipeline using FAISS.',
      technologies: ['Python', 'FAISS', 'Ollama', 'LLaMA-3.2', 'GGUF'],
      github: 'https://github.com/NithilanM23/Enterprise_RAG',
      images: ['/multimodal_rag/ui_rag.png'],
    },
    {
      title: 'Magic Story',
      description: 'An interactive application that generates interesting stories using Gemini, creates great visuals for the story, and performs Text-to-Speech (TTS) to read them aloud.',
      technologies: ['Gemini', 'Generative AI', 'TTS', 'React'],
      github: 'https://github.com/NithilanM23/Magic_StoryBook',
      images: ['/Magic_story/Screenshot 2026-07-07 112812.png', '/Magic_story/Screenshot 2026-07-07 112824.png'],
    },
    {
      title: 'CashDabba: AI-Powered FinTech Platform',
      description: 'Architected a full-stack FinTech application to prevent operational capital shortages, featuring an algorithmic cash flow optimization engine, a multimodal OCR invoice parser, and an LLM-driven market intelligence pipeline.',
      technologies: ['Next.js', 'FastAPI', 'Python', 'SQLite', 'LLMs', 'OCR'],
      github: 'https://github.com/NithilanM23/CashDabba',
    },
    {
      title: 'Intelligent CSV Assistant',
      description: 'Developed an interactive Streamlit application enabling users to perform data exploration and obtain ML model insights via an LLM-driven assistant.',
      technologies: ['Streamlit', 'Pandas', 'Scikit-learn', 'PandasAI', 'Gemini 1.5 Pro'],
      link: '#',
      github: 'https://github.com/NithilanM23/Intelligent-CSV-Assistant-LLM-Powered',
      images: ['/csv_bot/ex1.png', '/csv_bot/ex2.png', '/csv_bot/ex3.png'],
    },
    {
      title: 'Internal Knowledge Chatbot',
      description: 'Built a RAG-powered internal knowledge chatbot using Flowise (no-code platform) reducing average employee lookup time by 40%.',
      technologies: ['Flowise', 'Pinecone', 'Pandas', 'Cheerio'],
      images: ['/chatbot/blocks.png', '/chatbot/chatbubble.png'],
    },
    {
      title: 'Airline Review Analysis - British Airways',
      description: 'Scraped airline reviews, cleaned data, and performed sentiment analysis with Logistic Regression to predict customer purchase intent.',
      technologies: ['BeautifulSoup', 'Pandas', 'Logistic Regression'],
      link: '#',
      github: 'https://github.com/NithilanM23/Airline-Review-System-BA-',
    },
  ] as Project[],

  research: [
    {
      title: 'RGAE-PNNR: Unsupervised Visual Anomaly Detection',
      authors: 'Nithilan M et al.',
      date: 'Aug 2025 - Jan 2026',
      description: 'Co-designed a hybrid deep learning model combining residual gated autoencoders with patch-level nearest-neighbor reconstruction for fine-grained industrial defect localization. Achieved SOTA results on MVTec AD (99.6% AUROC) and VisA benchmarks, optimizing the model to just 5.9M parameters.',
      link: 'https://github.com/NithilanM23/RGAE-PNNR',
      doi: 'Under review at Springer Nature',
    },
  ] as Research[],

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'SQL'],
    },
    {
      category: 'ML / AI Frameworks',
      items: ['PyTorch', 'scikit-learn', 'HuggingFace Transformers', 'LangChain', 'Flowise', 'N8N'],
    },
    {
      category: 'LLM & RAG Tooling',
      items: ['Ollama', 'FAISS', 'ChromaDB', 'Pinecone', 'PostgreSQL', 'PGvector'],
    },
    {
      category: 'Backend & Web',
      items: ['Django REST Framework', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'FastAPI'],
    },
    {
      category: 'Data & Visualization',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'],
    },
  ] as Skill[],

  contact: {
    email: 'am.nithilan@gmail.com',
    phone: '+91 7305979173',
    social: [
      { name: 'GitHub', url: 'https://github.com/NithilanM23' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nithilanm23' },
    ],
    message: 'Feel free to reach out to me for AI/ML opportunities or collaborations!',
  } as ContactContent,
}
