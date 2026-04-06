import { useState, useCallback, useEffect } from "react";

type Props = {
  onRoll: (value: number) => void;
  tableName: string;
  flavorText: string;
};

const DICE_FACES = [
  "\u2680", // 1
  "\u2681", // 2
  "\u2682", // 3
  "\u2683", // 4
  "\u2684", // 5
  "\u2685", // 6
];

export default function DiceRoller({ onRoll, tableName, flavorText }: Props) {
  const [rolling, setRolling] = useState(false);
  const [displayFace, setDisplayFace] = useState(0);
  const [finalValue, setFinalValue] = useState<number | null>(null);

  useEffect(() => {
    setFinalValue(null);
    setDisplayFace(0);
  }, [tableName]);

  const roll = useCallback(() => {
    if (rolling) return;
    setRolling(true);
    setFinalValue(null);

    const result = Math.floor(Math.random() * 6) + 1;
    let tick = 0;
    const totalTicks = 15;

    const interval = setInterval(() => {
      setDisplayFace(Math.floor(Math.random() * 6));
      tick++;
      if (tick >= totalTicks) {
        clearInterval(interval);
        setDisplayFace(result - 1);
        setFinalValue(result);
        setRolling(false);
        setTimeout(() => onRoll(result), 400);
      }
    }, 80);
  }, [rolling, onRoll]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-8">
      <div className="animate-fade-in-up max-w-md text-center">
        <h2 className="font-serif text-2xl font-bold text-leather dark:text-gold">
          {tableName}
        </h2>
        <p className="font-serif mt-2 text-sm italic text-ink/60 dark:text-ink-light/60">
          {flavorText}
        </p>

        <button
          onClick={roll}
          disabled={rolling}
          className="group mt-8 inline-block"
          aria-label="Roll the dice"
        >
          <div
            className={`text-8xl transition-transform select-none ${
              rolling ? "animate-dice-roll" : "group-hover:scale-110"
            } ${finalValue ? "text-gold" : "text-leather dark:text-ink-light"}`}
          >
            {DICE_FACES[displayFace]}
          </div>
        </button>

        {!finalValue && !rolling && (
          <p className="mt-4 text-sm text-ink/50 dark:text-ink-light/50">
            Tap the die to roll
          </p>
        )}

        {finalValue && (
          <p className="mt-4 font-serif text-lg font-semibold text-gold">
            You rolled a {finalValue}!
          </p>
        )}
      </div>
    </div>
  );
}
