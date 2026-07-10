'use client'

import { useState, useEffect, useRef } from 'react'
import { DIALOGUE_TREES, type DialogueNode } from '@/lib/dialogue-data'

type DialogueBoxProps = {
  projectId: string
  npcName: string
  onAction: (action: string) => void
  onClose: () => void
}

export function DialogueBox({ projectId, npcName, onAction, onClose }: DialogueBoxProps) {
  const tree = DIALOGUE_TREES[projectId]
  const [currentNodeId, setCurrentNodeId] = useState('start')
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const node = tree?.[currentNodeId]

  // Typewriter effect
  useEffect(() => {
    if (!node) return
    setDisplayedText('')
    setIsTyping(true)
    let i = 0
    const interval = setInterval(() => {
      if (i < node.text.length) {
        setDisplayedText(node.text.slice(0, i + 1))
        i++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 25) // Typing speed
    
    return () => clearInterval(interval)
  }, [node])

  // Keyboard navigation
  useEffect(() => {
    if (!node || isTyping) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 's') {
        setSelectedIndex((prev) => (prev + 1) % node.options.length)
      } else if (e.key === 'ArrowUp' || e.key === 'w') {
        setSelectedIndex((prev) => (prev - 1 + node.options.length) % node.options.length)
      } else if (e.key === 'Enter' || e.key === 'e' || e.key === ' ') {
        e.preventDefault() // prevent jumping etc
        const selectedOption = node.options[selectedIndex]
        if (selectedOption.action === 'exit') {
          onClose()
        } else if (selectedOption.action) {
          onAction(selectedOption.action)
        } else if (selectedOption.nextNodeId) {
          setCurrentNodeId(selectedOption.nextNodeId)
          setSelectedIndex(0)
        }
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [node, isTyping, selectedIndex, onAction, onClose])

  if (!node) return null

  return (
    <div className="absolute inset-x-0 bottom-4 z-50 flex justify-center px-4 md:bottom-8">
      <div 
        className="w-full max-w-2xl rounded-xl border-4 border-primary/80 bg-[#0a0f17]/95 p-4 shadow-2xl backdrop-blur-md"
        style={{
          boxShadow: '0 0 0 2px #000, inset 0 0 0 2px #000',
        }}
      >
        <div className="mb-2 inline-block rounded border border-primary/50 bg-[#1d273a] px-3 py-1 text-sm font-bold uppercase tracking-wider text-primary">
          {npcName}
        </div>
        
        <div className="mb-6 min-h-[60px] text-lg leading-relaxed text-foreground md:text-xl font-sans">
          {displayedText}
        </div>

        {!isTyping && (
          <div className="flex flex-col gap-2">
            {node.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  if (opt.action === 'exit') onClose()
                  else if (opt.action) onAction(opt.action)
                  else if (opt.nextNodeId) {
                    setCurrentNodeId(opt.nextNodeId)
                    setSelectedIndex(0)
                  }
                }}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`flex items-center gap-3 rounded-lg border px-4 py-2 text-left text-sm transition-colors md:text-base ${
                  selectedIndex === i
                    ? 'border-primary bg-primary/20 text-primary font-medium'
                    : 'border-transparent text-muted-foreground hover:bg-white/5'
                }`}
              >
                <span className="font-pixel text-lg">
                  {selectedIndex === i ? '▶' : <span className="opacity-0">▶</span>}
                </span>
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
