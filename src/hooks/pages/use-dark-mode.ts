import { useEffect, useMemo } from 'react';
import { useEffectOnce, useLocalStorage, useMediaQuery, useUpdateEffect } from 'usehooks-ts';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

export const useDarkMode = (defaultValue?: 'dark' | 'light'): UseDarkModeOutput => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>(
    'theme',
    defaultValue ? defaultValue : isDarkOS ? 'dark' : 'light'
  );

  const toggleValue = useMemo(() => (theme === 'dark' ? 'light' : 'dark'), [theme]);

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    setTheme(isDarkOS ? 'dark' : 'light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS]);

  useEffectOnce(() => {
    document.body.classList.add('dark-transition');
  });

  useEffect(() => {
    if (
      theme === 'dark' ||
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia(COLOR_SCHEME_QUERY).matches)
    ) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return {
    isDarkMode: theme === 'dark',
    toggle: () => setTheme(toggleValue),
    enable: () => setTheme('dark'),
    disable: () => setTheme('light'),
  };
};
