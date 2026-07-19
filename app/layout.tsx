import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Tandem AI Labs',
  description: 'Tandem AI Labs — Custom RAG systems, agentic AI, and workflow automation for businesses.',
  metadataBase: new URL('https://tandem-ai.tech'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Tandem AI Labs',
    description: 'Custom RAG systems, agentic AI, and workflow automation — built end-to-end.',
    url: 'https://tandem-ai.tech',
    siteName: 'Tandem AI Labs',
    type: 'website',
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tandem AI Labs',
    description: 'Custom RAG systems, agentic AI, and workflow automation — built end-to-end.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
