import type { Metadata } from 'next'
import { poppins } from '../components/ui/fonts'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Page from '@/components/layout/Page'
import React from 'react'
import TemplateTransition from '@/components/layout/Transition'


export const metadata: Metadata = {
  title: 'Portifolio - Antonio Flavio',
  description: 'Este portifolio busca mostrar um pouco das minhas habilidades de front-end e mostrar alguns dos meus projetos back-end.',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://www.antonioflavio.dev'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`min-h-screen h-full ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Page>
            <TemplateTransition>
              {children}
              <Analytics />
              <SpeedInsights />
            </TemplateTransition>
          </Page>
        </ThemeProvider>
      </body>
    </html>
  )
}
