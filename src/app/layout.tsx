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
import Head from 'next/head';

import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Portifolio - Antonio Flavio',
  description: 'Este portifolio busca mostrar um pouco das minhas habilidades de front-end e mostrar alguns dos meus projetos back-end.',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: 'https://portifolio-mocha-psi-72.vercel.app'
  },
  verification: {
    google: "YjUifNKUAPVJprTnU97kBfMVrHLQNiG87OigmKGLSHc"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <body className={`min-h-screen h-full ${poppins.className}`}>
          {/* Dados Estruturados para Pessoa */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "dateCreated": "2024-01-01T07:00:00-05:00",
                "dateModified": "2024-10-01T07:00:00-05:00",
                "mainEntity": {
                  "@type": "Person",
                  "name": "Antonio Flavio de Andrade Neto",
                  "alternateName": "Netinho",
                  "identifier": "99999999",
                  "description": "Web Developer fullstack & Analista SEO",
                  "image": "https://drive.google.com/file/d/1ySNiBYQfEYpALvqesW0hmknVCDnP_HXt/view?usp=drive_link",
                  "sameAs": [
                    "https://www.linkedin.com/in/antonioflavio",
                    "https://github.com/zNetinho"
                  ]
                }
              })
            }}
          />
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
            <div className="sticky bottom-0 float-right justify-end p-1">
              <ModeToggle />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
