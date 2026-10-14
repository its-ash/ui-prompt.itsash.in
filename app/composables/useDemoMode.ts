// 'light' during SSR and hydration, then follows the site theme.
export function useDemoMode() {
  const { theme } = useTheme();
  const mounted = useState('pd-mounted', () => false);
  if (import.meta.client && !mounted.value) onMounted(() => (mounted.value = true));
  return computed<'dark' | 'light'>(() => (mounted.value ? theme.value : 'light'));
}
