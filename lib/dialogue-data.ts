export type DialogueAction = 'open_portfolio' | 'open_demo' | 'exit' | 'redirect_external' | 'finish_intro'

export type DialogueOption = {
  label: string
  nextNodeId?: string
  action?: DialogueAction
}

export type DialogueNode = {
  id: string
  text: string
  options: DialogueOption[]
}

// Mapped by the category/project ID
export const DIALOGUE_TREES: Record<string, Record<string, DialogueNode>> = {
  about: {
    start: {
      id: 'start',
      text: "Hey there! Do you wanna know more about Mr. Nithilan?",
      options: [
        { label: 'Yes, tell me more!', action: 'open_portfolio' },
        { label: 'No thanks, just looking around.', action: 'exit' },
      ]
    }
  },
  experience: {
    start: {
      id: 'start',
      text: "Welcome! Are you interested in exploring Mr. Nithilan's professional journey and work experience?",
      options: [
        { label: 'Show me his experience.', action: 'open_portfolio' },
        { label: 'Not right now.', action: 'exit' },
      ]
    }
  },
  skills: {
    start: {
      id: 'start',
      text: "Hello! Want to see the tools, languages, and technologies Mr. Nithilan has mastered?",
      options: [
        { label: 'View his skills.', action: 'open_portfolio' },
        { label: 'Maybe later.', action: 'exit' },
      ]
    }
  },
  research: {
    start: {
      id: 'start',
      text: "Greetings! Would you like to read about Mr. Nithilan's research and academic publications?",
      options: [
        { label: 'Show me his publications.', action: 'open_portfolio' },
        { label: "I'll pass.", action: 'exit' },
      ]
    }
  },
  contact: {
    start: {
      id: 'start',
      text: "Hi there! Are you looking to get in touch with Mr. Nithilan or see his social links?",
      options: [
        { label: 'Yes, show me the contact info.', action: 'open_portfolio' },
        { label: 'No, just wandering around.', action: 'exit' },
      ]
    }
  },
  onboarding_intro: {
    start: {
      id: 'start',
      text: "Hey there! I'm Nithilan, the creator of this digital island. Welcome to my world!",
      options: [
        { label: 'Nice to meet you! How does this work?', nextNodeId: 'tutorial' },
        { label: 'Thanks, I will explore on my own.', action: 'finish_intro' },
      ]
    },
    tutorial: {
      id: 'tutorial',
      text: "You can walk using WASD or Arrow keys. Walk inside buildings to explore my portfolio. Also, if you press 'X' when your drone is nearby, you can instantly warp anywhere on the island!",
      options: [
        { label: 'Got it! Let\'s go.', action: 'finish_intro' }
      ]
    }
  },
  project_f1: {
    start: {
      id: 'start',
      text: "Welcome to the pit lane! I'm the lead engineer on the F1 Race Position Predictor. What do you want to know?",
      options: [
        { label: 'What tech stack did you use?', nextNodeId: 'tech' },
        { label: 'What was the hardest challenge?', nextNodeId: 'challenge' },
        { label: 'Take me to the live demo!', action: 'open_demo' },
        { label: 'I\'ll look around.', action: 'exit' },
      ]
    },
    tech: {
      id: 'tech',
      text: 'We built an XGBoost regressor trained on 10+ years of F1 historical data, served via a Django REST API on Render.',
      options: [
        { label: 'What was the hardest challenge?', nextNodeId: 'challenge' },
        { label: 'Take me to the live demo!', action: 'open_demo' },
        { label: 'Cool, bye!', action: 'exit' }
      ]
    },
    challenge: {
      id: 'challenge',
      text: 'Achieving a MAE of 2.3 positions was tough, but validating it end-to-end with 50+ real users during live public inference was the real test.',
      options: [
        { label: 'What tech stack did you use?', nextNodeId: 'tech' },
        { label: 'Take me to the live demo!', action: 'open_demo' },
        { label: 'Cool, bye!', action: 'exit' }
      ]
    }
  },
  project_cashdabba: {
    start: {
      id: 'start',
      text: "Welcome to the Vault. Here we store the CashDabba AI FinTech platform. How can I assist?",
      options: [
        { label: 'Tell me about the architecture.', nextNodeId: 'arch' },
        { label: 'Show me the project details.', action: 'open_portfolio' },
        { label: 'Nevermind.', action: 'exit' }
      ]
    },
    arch: {
      id: 'arch',
      text: 'It is a full-stack Next.js and FastAPI application featuring an algorithmic cash flow optimization engine, OCR invoice parsing, and an LLM-driven market intelligence pipeline.',
      options: [
        { label: 'Show me the project details.', action: 'open_portfolio' },
        { label: 'Thanks.', action: 'exit' }
      ]
    }
  },
  project_magicstory: {
    start: {
      id: 'start',
      text: "Shh... the books are sleeping. Welcome to the Magic Story library. What tale do you seek?",
      options: [
        { label: 'How does the magic work?', nextNodeId: 'magic' },
        { label: 'Read me a story.', action: 'open_portfolio' },
        { label: 'I\'ll be quiet and leave.', action: 'exit' }
      ]
    },
    magic: {
      id: 'magic',
      text: 'We use Gemini and Generative AI to weave the tales, generate beautiful visuals, and Text-to-Speech to read them aloud.',
      options: [
        { label: 'Read me a story.', action: 'open_portfolio' },
        { label: 'Fascinating.', action: 'exit' }
      ]
    }
  },
  project_rag: {
    start: {
      id: 'start',
      text: "Systems online. I am the AI Engineer for the Enterprise RAG system. Ready for your query.",
      options: [
        { label: 'How does the retrieval work?', nextNodeId: 'retrieval' },
        { label: 'Show me the project details.', action: 'open_portfolio' },
        { label: 'I will be on my way.', action: 'exit' }
      ]
    },
    retrieval: {
      id: 'retrieval',
      text: 'It is a fully air-gapped multimodal RAG system for 500+ enterprise PDFs, powered by a hybrid BM25 and FAISS dense-vector retrieval pipeline running local LLaMA-3.2 models.',
      options: [
        { label: 'Show me the project details.', action: 'open_portfolio' },
        { label: 'Impressive. Goodbye.', action: 'exit' }
      ]
    }
  }
}
