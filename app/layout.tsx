import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from '../components/navigation/Nav'
import UrlBar from '../components/UrlBar/UrlBar'

import './globals.css'

export const metadata: Metadata = {
  title: 'The Gallery',
  description: 'Web app for browsing the Met Museum of Art public collection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="urlBar">
          <UrlBar baseURL="http://localhost:4001" />
        </div>
        <Nav />
        {children}
      </body>
    </html>
  )
}