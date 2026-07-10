export type DialogueAction = 'open_portfolio' | 'open_demo' | 'exit'

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
  project_f1: {
    start: {
      id: 'start',
      text: "Welcome to the pit lane! I'm the lead engineer on the F1 Race Position Predictor. What do you want to know?",
      options: [
        { label: 'What tech stack did you use?', nextNodeId: 'tech' },
        { label: 'What was the hardest challenge?', nextNodeId: 'challenge' },
        { label: 'Take me to the live demo!', action: 'open_portfolio' },
        { label: 'I\'ll look around.', action: 'exit' },
      ]
    },
    tech: {
      id: 'tech',
      text: 'We built an XGBoost regressor trained on 10+ years of F1 historical data, served via a Django REST API on Render.',
      options: [
        { label: 'What was the hardest challenge?', nextNodeId: 'challenge' },
        { label: 'Take me to the live demo!', action: 'open_portfolio' },
        { label: 'Cool, bye!', action: 'exit' }
      ]
    },
    challenge: {
      id: 'challenge',
      text: 'Achieving a MAE of 2.3 positions was tough, but validating it end-to-end with 50+ real users during live public inference was the real test.',
      options: [
        { label: 'What tech stack did you use?', nextNodeId: 'tech' },
        { label: 'Take me to the live demo!', action: 'open_portfolio' },
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
  project_csv: {
    start: {
      id: 'start',
      text: "Data parsed and ready. I am the Intelligent CSV Assistant. Query?",
      options: [
        { label: 'What can you analyze?', nextNodeId: 'analyze' },
        { label: 'Show me the code.', action: 'open_portfolio' },
        { label: 'Cancel.', action: 'exit' }
      ]
    },
    analyze: {
      id: 'analyze',
      text: 'I use Streamlit, PandasAI, and Gemini 1.5 Pro to let users perform data exploration and extract ML insights seamlessly.',
      options: [
        { label: 'Show me the code.', action: 'open_portfolio' },
        { label: 'Cancel.', action: 'exit' }
      ]
    }
  }
}
