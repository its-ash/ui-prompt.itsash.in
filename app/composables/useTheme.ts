export function useTheme() {
  const theme = useState<'dark' | 'light'>('pd-theme', () => 'dark');

  const apply = (value: 'dark' | 'light') => {
    theme.value = value;
    if (import.meta.client) {
      document.documentElement.dataset.theme = value;
      localStorage.setItem('pd-theme', value);
    }
  };

  const toggle = () => apply(theme.value === 'dark' ? 'light' : 'dark');

  if (import.meta.client && !localStorage.getItem('pd-theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(prefersDark ? 'dark' : 'light');
  }

  return { theme, toggle };
}