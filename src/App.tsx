import { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import RoundTracker from "./components/RoundTracker";
import RollSequence from "./components/RollSequence";
import encounterData from "./data/encounters";

type Screen = "landing" | "playing" | "complete";

export default function App() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [round, setRound] = useState(1);

  const handleBegin = () => {
    setScreen("playing");
    setRound(1);
  };

  const handleRoundComplete = () => {
    if (round >= encounterData.rounds) {
      setScreen("complete");
    } else {
      setRound(round + 1);
    }
  };

  const handleRestart = () => {
    setScreen("landing");
    setRound(1);
  };

  if (screen === "landing") {
    return <LandingScreen onBegin={handleBegin} />;
  }

  if (screen === "complete") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        <div className="animate-fade-in-up max-w-md">
          <div className="text-6xl">&#x1F3C6;</div>
          <h1 className="font-serif mt-6 text-3xl font-bold text-leather dark:text-gold">
            Quest Complete
          </h1>
          <p className="font-serif mt-3 text-lg italic text-ink/60 dark:text-ink-light/60">
            You survived three rounds of AI leadership chaos.
            <br />
            Your tales will be sung in stand-ups for generations.
          </p>

          <div className="mt-8 rounded-xl border border-border-light bg-card-light p-6 dark:border-border-dark dark:bg-card-dark">
            <p className="font-serif text-sm font-semibold text-gold-dim dark:text-gold">
              Report Back
            </p>
            <p className="mt-2 text-sm text-ink/70 dark:text-ink-light/70">
              Pick your most memorable scenario and share with the room:
              What surprised your table? What would you do differently
              than what your industry lens suggested?
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="mt-8 rounded-lg bg-leather px-8 py-3.5 font-serif text-base font-semibold text-parchment shadow transition-all hover:bg-leather/90 active:scale-95 dark:bg-gold dark:text-parchment-dark"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <RoundTracker currentRound={round} totalRounds={encounterData.rounds} />
      <RollSequence
        key={round}
        round={round}
        onRoundComplete={handleRoundComplete}
      />
    </div>
  );
}
