import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color (purple/mauve)
        primary: {
          DEFAULT: '#6E4C6F',
          light: '#8a6a8b',
          dark: '#5a3d5b'
        },
        // Secondary brand color (mint green)
        secondary: {
          DEFAULT: '#CFE1D4',
          light: '#e5f0ea',
          dark: '#7a9d89'
        },
        // Accent color (peachy pink)
        accent: {
          DEFAULT: '#F7E6E1',
          light: '#fef5f2',
          dark: '#f0d5cc'
        },
        // Neutral colors
        neutral: {
          DEFAULT: '#2D2D2D',
          50: '#FDFBF9',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2D2D2D',
          900: '#1a1a1a'
        },
        // Dark mode specific colors
        dark: {
          bg: '#1a1420',
          surface: '#251c29',
          elevated: '#2d2534',
          accent: '#2a3432'
        }
      }
    }
  }
} satisfies Config
