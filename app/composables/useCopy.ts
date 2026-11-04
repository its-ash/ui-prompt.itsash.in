export async function copyText(text: string): Promise<boolean> {
  if (!import.meta.client) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export async function copyFrom(get: () => Promise<string>): Promise<boolean> {
  if (!import.meta.client) return false;
  const once = get();
  if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
    try {
      const blob = once.then((t) => {
        if (!t) throw new Error('empty');
        return new Blob([t], { type: 'text/plain' });
      });
      await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]);
      return true;
    } catch {}
  }
  const text = await once.catch(() => '');
  return text ? copyText(text) : false;
}
