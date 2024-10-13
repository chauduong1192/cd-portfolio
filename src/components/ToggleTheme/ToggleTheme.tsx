import { useEffect, useState } from 'react';

import { cn } from '@/utils/classnames';

export const ToggleTheme = () => {
  const [activeTheme, setActiveTheme] = useState<string>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      applyTheme('light');
      setActiveTheme('light');
    } else if (savedTheme === 'system') {
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
      '(prefers-color-scheme: dark)',
    ).matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const isDarkTheme = activeTheme === 'dark';

  return (
    <button
      onClick={() => handleThemeChange(!isDarkTheme ? 'dark' : 'light')}
      className='rounded-md relative flex h-6 w-10 appearance-none items-center justify-center
        border-none bg-transparent p-0 opacity-65 transition-opacity outline-none
        hover:opacity-100'
    >
      <div
        className={cn(
          `relative size-6 scale-100 rounded-full border-none bg-transparent
          shadow-dark-mode transition-all duration-[.45s]`,
          {
            'border-4 scale-[.55] overflow-visible shadow-none bg-gray-200 border-gray-200':
              isDarkTheme,
          },
        )}
      >
        <span
          className={cn(
            `absolute w-2 h-2 rounded-full -mt-1 -ml-1 top-1/2 left-1/2 transform scale-0
            transition duration-[.35s]`,
            {
              'shadow-light-mode scale-100': isDarkTheme,
            },
          )}
        />
      </div>
    </button>
  );
};
