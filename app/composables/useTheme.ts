export type ThemeMode = 'dark' | 'light';

export function useTheme() {
  const theme = useState<ThemeMode>('pd-theme', () => 'dark');

  const toggle = () => {
    const next: ThemeMode = theme.value === 'dark' ? 'light' : 'dark';
    theme.value = next;
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('pd-theme', next);
    } catch {}
  };

  return { theme, toggle };
}
