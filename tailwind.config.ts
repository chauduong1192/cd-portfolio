import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-rubik)', ...fontFamily.sans],
        'roboto-mono': ['var(--font-roboto-mono)', ...fontFamily.sans],
      },
      colors: {
        zinc: {
          500: 'rgb(var(--tw-color-zinc-500) / <alpha-value>)',
          900: 'rgb(var(--tw-color-zinc-900) / <alpha-value>)',
        },
        neutral: {
          300: 'rgb(var(--tw-color-neutral-300) / <alpha-value>)',
          700: 'rgb(var(--tw-color-neutral-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-neutral-800) / <alpha-value>)',
        },
        stone: {
          500: 'rgb(var(--tw-color-stone-500) / <alpha-value>)',
        },
        gray: {
          200: 'rgb(var(--tw-color-gray-200) / <alpha-value>)',
        },
      },
      boxShadow: {
        'inner-md': 'rgba(0, 0, 0, 0.07) 0px 5px 0px',
      },
    },
  },
  plugins: [],
} satisfies Config;
