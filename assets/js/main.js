document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-search]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = form.querySelector('input')?.value?.trim();
      if (!q) return;
      alert('بحث تجريبي على GitHub Pages:\n\n' + q + '\n\n(هذه صفحة تسويقية ثابتة لمدونة تقنية معلومات)');
    });
  }
});
