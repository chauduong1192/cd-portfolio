'use client';

import clsx from 'clsx';
import {
  ArrowRight,
  CreditCard,
  Laptop,
  Phone,
  Plus,
  Shield,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import TextButton from '@/components/buttons/TextButton';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Skeleton from '@/components/Skeleton';

type Color = (typeof colorList)[number];

export default function ComponentPage() {
  const [activeTheme, setActiveTheme] = useState<string>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'system' || !savedTheme) {
      applySystemTheme();
      setActiveTheme('system');
    } else {
      applyTheme(savedTheme);
      setActiveTheme(savedTheme);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === 'system') {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'system') {
      applySystemTheme();
    } else {
      applyTheme(newTheme);
    }
  };

  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div>
      <div className='flex items-center'>
        <button
          onClick={() => handleThemeChange('light')}
          className={`flex justify-center items-center m-auto text-lg w-fit transition-color duration-200 ease-in-out py-3 px-10 rounded-lg font-semibold py-[10px] px-4 ${
            activeTheme === 'light'
              ? 'bg-cyan-800 text-gray-50 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-slate-600 text-gray-50'
              : 'bg-slate-500 dark:bg-slate-600 hover:bg-cyan-800 text-gray-100 dark:text-gray-400'
          }`}
        >
          Light Theme
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className={`flex justify-center items-center m-auto text-lg w-fit transition-color duration-200 ease-in-out py-3 px-10 rounded-lg font-semibold py-[10px] px-4 ${
            activeTheme === 'dark'
              ? 'bg-cyan-800 text-gray-50 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-slate-600 text-gray-50'
              : 'bg-slate-500 dark:bg-slate-600 hover:bg-cyan-800 text-gray-50 dark:text-gray-400'
          }`}
        >
          Dark Theme
        </button>
        <button
          onClick={() => handleThemeChange('system')}
          className={`flex justify-center items-center m-auto text-lg w-fit transition-color duration-200 ease-in-out py-3 px-10 rounded-lg font-semibold py-[10px] px-4 ${
            activeTheme === 'system'
              ? 'bg-cyan-800 text-gray-50 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-slate-600 text-gray-50'
              : 'bg-slate-500 dark:bg-slate-600 hover:bg-cyan-800 text-gray-50 dark:text-gray-400'
          }`}
        >
          Use System Theme
        </button>
      </div>
      <div className='text-neutral-700 dark:text-gray-200'>test color</div>
    </div>
  );
}

const colorList = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;
