// Export types for backward compatibility with game logic
export type CategoryIcon = 'info' | 'bag' | 'shoe' | 'shirt' | 'hoodie' | 'pants' | 'hat'

export function formatPrice(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100)
}

// Static, design-time metadata for each portfolio section building
export type CategoryMeta = {
  id: string
  handle: string
  name: string
  // Character that greets you inside the house.
  npcName: string
  greeting: string
  // Roof / sign color of the house in the world.
  color: string
  // lucide-react icon used in the UI (not on the canvas).
  icon: CategoryIcon
  // Position (back corner) of the house on the isometric grid.
  tile: { x: number; y: number }
  // Fallback swatch used for the pixel thumbnail when no image is present.
  swatch: string
}

// Backward compatibility type
export type Category = CategoryMeta

// Portfolio sections mapped to building positions
export const CATEGORY_META: CategoryMeta[] = [
  {
    id: 'hero',
    handle: 'hero',
    name: 'Hero',
    npcName: 'Welcome',
    greeting: 'Welcome to my portfolio',
    color: '#f4b740',
    icon: 'shoe',
    tile: { x: 7, y: 7 }, // Center
    swatch: '#f4b740',
  },
  {
    id: 'about',
    handle: 'about',
    name: 'About',
    npcName: 'About Me',
    greeting: 'Learn more about who I am',
    color: '#3e9bd6',
    icon: 'shirt',
    tile: { x: 2, y: 2 },
    swatch: '#3e9bd6',
  },
  {
    id: 'experience',
    handle: 'experience',
    name: 'Experience',
    npcName: 'My Journey',
    greeting: 'Check out my work experience',
    color: '#e0598b',
    icon: 'hoodie',
    tile: { x: 12, y: 2 },
    swatch: '#e0598b',
  },
  {
    id: 'projects',
    handle: 'projects',
    name: 'Projects',
    npcName: 'Portfolio',
    greeting: 'Explore my projects',
    color: '#9b6bd6',
    icon: 'info',
    tile: { x: 2, y: 12 },
    swatch: '#9b6bd6',
  },
  {
    id: 'research',
    handle: 'research',
    name: 'Research',
    npcName: 'Publications',
    greeting: 'My research & publications',
    color: '#315476',
    icon: 'pants',
    tile: { x: 12, y: 12 },
    swatch: '#315476',
  },
  {
    id: 'skills',
    handle: 'skills',
    name: 'Skills',
    npcName: 'Expertise',
    greeting: 'My technical skills',
    color: '#6ba876',
    icon: 'hat',
    tile: { x: 7, y: 2 },
    swatch: '#6ba876',
  },
  {
    id: 'contact',
    handle: 'contact',
    name: 'Contact',
    npcName: 'Get in Touch',
    greeting: 'Let&apos;s connect',
    color: '#e8a87c',
    icon: 'bag',
    tile: { x: 7, y: 12 },
    swatch: '#e8a87c',
  },
]
