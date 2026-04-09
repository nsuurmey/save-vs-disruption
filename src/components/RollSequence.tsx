import { useState, useCallback } from "react";
import encounterData from "../data/encounters";
import type { RollEntry } from "../data/encounters";
import DiceRoller from "./DiceRoller";
import ResultCard from "./ResultCard";
import ScenarioSummary from "./ScenarioSummary";

type RolledResult = {
  tableName: string;
  entry: RollEntry;
};

type Props = {
  round: number;
  onRoundComplete: () => void;
};

type Phase = "rolling" | "result" | "summary";

export default function RollSequence({ round, onRoundComplete }: Props) {
  const tableSequence = encounterData.tables;

  const [tableIndex, setTableIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("rolling");
  const [results, setResults] = useState<RolledResult[]>([]);
  const [currentEntry, setCurrentEntry] = useState<RollEntry | null>(null);

  const currentTable = tableSequence[tableIndex];

  const handleRoll = useCallback(
    (value: number) => {
      const entry = currentTable.entries.find((e) => e.roll === value)!;
      setCurrentEntry(entry);
      setPhase("result");
    },
    [currentTable]
  );

  const handleNext = useCallback(() => {
    if (!currentEntry) return;

    const newResults = [
      ...results,
      { tableName: currentTable.name, entry: currentEntry },
    ];
    setResults(newResults);

    if (tableIndex < tableSequence.length - 1) {
      setTableIndex(tableIndex + 1);
      setCurrentEntry(null);
      setPhase("rolling");
    } else {
      setPhase("summary");
    }
  }, [currentEntry, results, currentTable, tableIndex, tableSequence.length]);

  if (phase === "summary") {
    return (
      <ScenarioSummary
        round={round}
        results={results}
        discussionPrompt={encounterData.discussionPrompt}
        onNextRound={onRoundComplete}
        isFinalRound={round === encounterData.rounds}
      />
    );
  }

  if (phase === "result" && currentEntry) {
    return (
      <ResultCard
        tableName={currentTable.name}
        entry={currentEntry}
        onNext={handleNext}
      />
    );
  }

  return (
    <DiceRoller
      key={currentTable.id}
      onRoll={handleRoll}
      tableName={currentTable.name}
      flavorText={currentTable.flavorText}
    />
  );
}
