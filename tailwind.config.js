/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0f172a',
          900: '#030712',
        },
        accent: {
          100: '#93c5fd',
          200: '#60a5fa',
          300: '#3b82f6',
          400: '#2563eb',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
} 