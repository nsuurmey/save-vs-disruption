import type { RollEntry } from "../data/encounters";

type Props = {
  tableName: string;
  entry: RollEntry;
  onNext: () => void;
};

export default function ResultCard({ tableName, entry, onNext }: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-8">
      <div className="animate-card-reveal w-full max-w-md">
        <div className="overflow-hidden rounded-xl border border-border-light bg-card-light shadow-lg dark:border-border-dark dark:bg-card-dark">
          <div className="border-b border-border-light bg-leather/5 px-5 py-3 dark:border-border-dark dark:bg-gold/10">
            <p className="font-serif text-xs font-semibold tracking-wide text-leather/70 uppercase dark:text-gold/70">
              {tableName}
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-leather dark:text-gold">
                {entry.title}
              </span>
              <span className="text-sm text-ink/40 dark:text-ink-light/40">
                [{entry.roll}]
              </span>
            </div>
          </div>

          <div className="px-5 py-4">
            <p className="text-sm leading-relaxed text-ink/80 dark:text-ink-light/80">
              {entry.description}
            </p>

            {entry.characterPrompt && (
              <div className="mt-4 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3">
                <p className="font-serif text-xs font-semibold text-gold-dim dark:text-gold">
                  Get Into Character
                </p>
                <p className="mt-1 text-sm italic text-ink/70 dark:text-ink-light/70">
                  "{entry.characterPrompt}"
                </p>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={onNext}
          className="mt-6 w-full rounded-lg bg-leather px-6 py-3.5 font-serif text-base font-semibold text-parchment shadow transition-all hover:bg-leather/90 active:scale-[0.98] dark:bg-gold dark:text-parchment-dark"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
