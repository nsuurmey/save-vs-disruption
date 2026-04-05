type Props = {
  currentRound: number;
  totalRounds: number;
};

export default function RoundTracker({ currentRound, totalRounds }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 border-b border-border-light bg-card-light/80 px-4 py-3 backdrop-blur-sm dark:border-border-dark dark:bg-card-dark/80">
      <span className="font-serif text-sm font-semibold text-leather dark:text-gold">
        Round {currentRound} of {totalRounds}
      </span>
      <div className="flex gap-1.5">
        {Array.from({ length: totalRounds }, (_, i) => (
          <div
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i < currentRound
                ? "bg-gold"
                : "bg-border-light dark:bg-border-dark"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
