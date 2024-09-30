import type { Metadata } from 'next'
import { poppins } from '../components/ui/fonts'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Page from '@/components/layout/Page'
import React from 'react'
import TemplateTransition from '@/components/layout/Transition'
import { Toaster } from '@/components/ui/toaster';
import { ModeToggle } from '@/components/toggle-theme';


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
      <head>
        <meta name="google-site-verification" content="YjUifNKUAPVJprTnU97kBfMVrHLQNiG87OigmKGLSHc" />
      </head>
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
              <Toaster />
            </TemplateTransition>
          </Page>
          <div className="relative float-right justify-end p-1">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
