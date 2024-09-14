import { transform } from 'next/dist/build/swc'
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary_custom: {
          100: '#FF204E',
          200: '#FF5A75',
          300: '#FF859D',
          400: '#FFAFBC',
          500: '#FFD9DC',
        },
        secondary_custom: {
          100: '#A0153E',
          200: '#B5485F',
          300: '#C37B82',
          400: '#D0A5A3',
          500: '#DECFC5',
        },
        neutral_custom: {
          100: '#5D0E41',
          200: '#7A4067',
          300: '#96718C',
          400: '#B39FB1',
          500: '#D1CED7',
        },
        accent_custom: {
          100: '#00224D',
          200: '#335271',
          300: '#667F95',
          400: '#99ABBA',
          500: '#CCD7DE',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'increase-height': {
          '0%': { transform: 'translateY(0)' },
          '10%': { transform: 'translateY(23px)' },
          '40%': { transform: 'translateY(46px)' },
          '65%': { transform: 'translateY(69px)' },
          '85%': { transform: 'translateY(102px)' },
          '100%': { transform: 'translateY(125px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'increase-height': 'increase-height .9s alternate infinite',
      },
      spacing: {
        0.5: '0.5rem',
        1: '1rem',
        1.5: '1.5rem',
        2: '2rem',
        2.5: '2.5rem',
        3: '3rem',
        3.5: '3.5rem',
        4: '4rem',
        4.5: '4.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
