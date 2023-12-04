import type { Metadata } from 'next'

import './globals.css'


export const metadata: Metadata = {
  title: 'Trellogold',
  description: 'Created by Realhavenn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#E1EBEE]">{children}</body>
    </html>
  )
}
