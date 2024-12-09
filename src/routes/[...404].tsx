export default function NotFound() {
  return (
    <main class="grid min-h-screen place-items-center bg-[var(--color-ivory)] px-6 text-center text-[var(--color-ink)]">
      <div class="max-w-xl space-y-6 rounded-[2rem] border border-[var(--color-border)] bg-white/75 p-10 shadow-[0_20px_60px_rgba(76,55,38,0.12)] backdrop-blur">
        <p class="text-sm uppercase tracking-[0.35em] text-[var(--color-caramel)]">Le Petit Oven</p>
        <h1 class="font-display text-5xl text-[var(--color-espresso)] sm:text-6xl">Page not found</h1>
        <p class="text-base leading-7 text-[var(--color-mocha)]">
          The crumb trail ends here. Return to the bakery showcase to explore the menu, story,
          and signature creations.
        </p>
        <a class="btn-primary inline-flex" href="/">
          Back to Home
        </a>
      </div>
    </main>
  );
}
