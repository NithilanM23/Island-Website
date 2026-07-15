import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { GeistPixelSquare } from 'geist/font/pixel'
import './globals.css'

export const metadata: Metadata = {
  title: "Nithilan's Island",
  description:
    'A pixel isometric portfolio district where every building is a showcase. Walk, step inside, and explore.',
  generator: 'v0.app',
  icons: {
    icon: '/image.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} bg-background`}
    >
      <head>
        {/* Assets connect early. */}
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
