type Props = {
  onBegin: () => void;
};

export default function LandingScreen({ onBegin }: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="animate-fade-in-up max-w-lg">
        <div className="mb-6 text-6xl" role="img" aria-label="crossed swords">
          &#x2694;
        </div>

        <h1 className="font-serif text-4xl font-bold tracking-tight text-leather sm:text-5xl dark:text-gold">
          Encounters in
          <br />
          AI Leadership
        </h1>

        <p className="font-serif mt-4 text-lg italic text-leather/70 dark:text-ink-light/70">
          A sourcebook for the brave, the bold, and the slightly under-resourced
        </p>

        <div className="mt-8 rounded-xl border border-border-light bg-card-light p-6 text-left dark:border-border-dark dark:bg-card-dark">
          <p className="text-sm leading-relaxed text-ink/80 dark:text-ink-light/80">
            Welcome, adventurer. At your table, you'll face three rounds of
            AI leadership scenarios — each one stranger and more tangled than
            the last. Roll the dice, reveal your fate, and decide together:
            <strong> what would you actually do?</strong>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-ink-light/60">
            No wrong answers. No saving throws. Just the kind of messy,
            real-world problems that don't fit on a slide deck.
          </p>
        </div>

        <button
          onClick={onBegin}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-leather px-8 py-4 font-serif text-lg font-semibold text-parchment shadow-lg transition-all hover:scale-105 hover:bg-leather/90 active:scale-95 dark:bg-gold dark:text-parchment-dark"
        >
          Begin Encounter
          <span className="text-xl">&#x1F3B2;</span>
        </button>

        <p className="mt-6 text-xs text-ink/40 dark:text-ink-light/40">
          AI 2030 &middot; AI Leadership Session
        </p>
      </div>
    </div>
  );
}
