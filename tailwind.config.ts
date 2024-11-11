import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default withTV({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-rubik)', ...fontFamily.sans],
        'roboto-mono': ['var(--font-roboto-mono)', ...fontFamily.sans],
      },
      colors: {
        gray: {
          lighter: 'rgb(var(--tw-color-gray-lighter) / <alpha-value>)',
          light: 'rgb(var(--tw-color-gray-light) / <alpha-value>)',
          default: 'rgb(var(--tw-color-gray) / <alpha-value>)',
          medium: 'rgb(var(--tw-color-gray-medium) / <alpha-value>)',
          high: 'rgb(var(--tw-color-gray-high) / <alpha-value>)',
          slate: 'rgb(var(--tw-color-gray-slate) / <alpha-value>)',
          dark: 'rgb(var(--tw-color-gray-dark) / <alpha-value>)',
        },
        black: {
          light: 'rgb(var(--tw-color-black-light) / <alpha-value>)',
          medium: 'rgb(var(--tw-color-black-medium) / <alpha-value>)',
        },
      },
      boxShadow: {
        'dark-mode': 'inset 8px -8px 0px 0px rgb(var(--tw-color-gray-slate))',
        'light-mode':
          '0 -23px 0 rgb(var(--tw-color-gray-lighter)),0 23px 0 rgb(var( --tw-color-gray-lighter)),23px 0 0 rgb(var( --tw-color-gray-lighter)),-23px 0 0 rgb(var( --tw-color-gray-lighter)),15px 15px 0 rgb(var( --tw-color-gray-lighter)),-15px 15px 0 rgb(var( --tw-color-gray-lighter)),15px -15px 0 rgb(var( --tw-color-gray-lighter)),-15px -15px 0 rgb(var( --tw-color-gray-lighter))',
      },
      animation: {
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}) satisfies Config;
