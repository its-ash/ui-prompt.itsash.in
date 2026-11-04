import type { ThemeMode } from '~/composables/useTheme';

export default defineNuxtPlugin(() => {
  const theme = useState<ThemeMode>('pd-theme', () => 'dark');
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const read = () => {
    const set = document.documentElement.dataset.theme;
    theme.value = set === 'light' || set === 'dark' ? set : mq.matches ? 'dark' : 'light';
  };
  read();
  mq.addEventListener('change', read);
});
