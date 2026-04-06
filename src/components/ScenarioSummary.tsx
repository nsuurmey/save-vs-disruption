import type { RollEntry } from "../data/encounters";

type RolledResult = {
  tableName: string;
  entry: RollEntry;
};

type Props = {
  round: number;
  results: RolledResult[];
  discussionPrompt: string;
  onNextRound: () => void;
  isFinalRound: boolean;
};

export default function ScenarioSummary({
  round,
  results,
  discussionPrompt,
  onNextRound,
  isFinalRound,
}: Props) {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-8">
      <div className="animate-fade-in-up w-full max-w-md">
        <h2 className="font-serif text-center text-2xl font-bold text-leather dark:text-gold">
          Round {round} Scenario
        </h2>
        <p className="font-serif mt-1 text-center text-sm italic text-ink/50 dark:text-ink-light/50">
          Your fate has been sealed. Now discuss.
        </p>

        <div className="mt-6 space-y-3">
          {results.map(({ tableName, entry }, i) => (
            <div
              key={entry.id}
              className="animate-card-reveal rounded-lg border border-border-light bg-card-light p-4 shadow-sm dark:border-border-dark dark:bg-card-dark"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="text-xs font-semibold tracking-wide text-ink/40 uppercase dark:text-ink-light/40">
                {tableName}
              </p>
              <p className="font-serif mt-1 text-lg font-bold text-leather dark:text-gold">
                {entry.title}
              </p>
              <p className="mt-1 text-sm text-ink/70 dark:text-ink-light/70">
                {entry.description}
              </p>
              {entry.characterPrompt && (
                <p className="mt-2 text-xs italic text-gold-dim dark:text-gold">
                  Character: "{entry.characterPrompt}"
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border-2 border-gold/40 bg-gold/10 p-5">
          <p className="font-serif text-sm font-semibold text-gold-dim dark:text-gold">
            &#x2694; Discuss This
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink/80 dark:text-ink-light/80">
            {discussionPrompt}
          </p>
        </div>

        <button
          onClick={onNextRound}
          className="mt-6 w-full rounded-lg bg-leather px-6 py-3.5 font-serif text-base font-semibold text-parchment shadow transition-all hover:bg-leather/90 active:scale-[0.98] dark:bg-gold dark:text-parchment-dark"
        >
          {isFinalRound ? "Complete Adventure" : `Begin Round ${round + 1}`}
        </button>
      </div>
    </div>
  );
}
