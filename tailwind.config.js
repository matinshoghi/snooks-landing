/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      light: {
        "primary": "#2563eb",
        "secondary": "#4f46e5",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
        "base-200": "#f8fafc",
        "base-300": "#f1f5f9",
      }
    }],
  },
} 