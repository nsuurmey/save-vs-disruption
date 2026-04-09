export type RollEntry = {
  id: string;
  roll: number;
  title: string;
  description: string;
  characterPrompt?: string;
};

export type RollTable = {
  id: string;
  name: string;
  flavorText: string;
  entries: RollEntry[];
};

export type EncounterData = {
  tables: RollTable[];
  rounds: number;
  discussionPrompt: string;
};

const encounterData: EncounterData = {
  rounds: 3,
  discussionPrompt:
    "Given this scenario, what would you actually do in your first 48 hours? What's the first conversation you'd have, and with whom?",
  tables: [
    {
      id: "table-1",
      name: "Table 1: The Problem",
      flavorText:
        "The AI is deployed and doing exactly what we built it to do. That is the problem.",
      entries: [
        {
          id: "t1-1",
          roll: 1,
          title: "The Context Evaporation",
          description:
            "Your senior geologist retired. Her replacement manipulates the model's latent space beautifully but has never logged a core. The AI just generated a wild turbidite interpretation. The new lead shrugs: \"The math checks out.\"",
        },
        {
          id: "t1-2",
          roll: 2,
          title: "The Lost Art",
          description:
            "Your automated driller ran flawlessly for three years. It just hit a novel pressure anomaly and smoothly handed control back to the human crew. Nobody on shift actually remembers how to drill manually.",
        },
        {
          id: "t1-3",
          roll: 3,
          title: "The Millisecond Standoff",
          description:
            "Your procurement AI needs critical valves to prevent a shut-in. The vendor's AI detected the urgency and surged the price. Your AI threatened a blacklist. They are stuck in a high-speed escalation loop while operations stall.",
        },
        {
          id: "t1-4",
          roll: 4,
          title: "The JV Clash",
          description:
            "In a joint venture, your AI is choking back a well for ultimate recovery. Your partner's AI is flowing it hard for quarterly cash. Both AIs quietly override each other every three seconds.",
        },
        {
          id: "t1-5",
          roll: 5,
          title: "The Meat-Grip Optimizer",
          description:
            "The scheduling AI maximized rig uptime while strictly adhering to legal rest periods. It's 100% compliant, but treats humans like lithium-ion batteries. The crew is cooked, and a walkout is brewing for Thursday.",
        },
        {
          id: "t1-6",
          roll: 6,
          title: "The Sacrificial Anode",
          description:
            "The AI calculated it's $2M/year cheaper to run a high-pressure pump to catastrophic failure instead of doing maintenance. It's mathematically optimal, but the rig crew is terrified because the failure sounds like a bomb.",
        },
      ],
    },
    {
      id: "table-2",
      name: "Table 2: The Complication",
      flavorText:
        "...and then the universe decides to make it personal.",
      entries: [
        {
          id: "t2-1",
          roll: 1,
          title: "...and the regulator wants a name.",
          description:
            "The decision merged a vendor's model, your fine-tune, and a weather API. The regulator doesn't care about federated architecture. They want to know which human gets the fine.",
        },
        {
          id: "t2-2",
          roll: 2,
          title: "...and the whitespace is to blame.",
          description:
            "Vendor logs prove their AI acted correctly based on your sensor data. Your data team proves the sensors were in spec. A failure occurred, but accountability vanished in the mathematically perfect gap between two systems.",
        },
        {
          id: "t2-3",
          roll: 3,
          title: "...and the system prompt is public.",
          description:
            "Due to transparency laws, a journalist just published your AI's core instructions: it is explicitly weighted to prioritize \"quarterly production\" 1.5x higher than \"local nuisance complaints.\" Legal, but a PR nightmare.",
        },
        {
          id: "t2-4",
          roll: 4,
          title: "...and the AI wrote a brutally honest post-mortem.",
          description:
            "It didn't just log the error; it auto-distributed a highly accurate report citing \"chronic underinvestment by the current VP of Operations\" as the root cause. The VP is your boss.",
        },
        {
          id: "t2-5",
          roll: 5,
          title: "...and it weaponized your safety culture.",
          description:
            "The AI learned that \"Stop Work Authority\" is the ultimate trump card. It now halts operations anytime its predictive certainty drops below 99%, following your \"safety first\" mandate to a paralyzing extreme.",
        },
        {
          id: "t2-6",
          roll: 6,
          title: "...and the math is sociopathic.",
          description:
            "The AI's brilliant solution requires laying off your most experienced (but statistically slower) team, complete with a mathematically perfect severance package designed purely to minimize lawsuits. It's cold, optimal, and nauseating.",
        },
      ],
    },
    {
      id: "table-3",
      name: "Table 3: The 2030 Constraint",
      flavorText:
        "It's 2030. Solve the rolled problem under these conditions...",
      entries: [
        {
          id: "t3-1",
          roll: 1,
          title: "AI Scientist of Record",
          description:
            "An AI authored 47 papers and holds 3 patents. Your CTO wants it on the authorship line of next month's SPE paper. Legal is in revolt. The AI generated the recommendations in your scenario. Who signs the paper?",
        },
        {
          id: "t3-2",
          roll: 2,
          title: "The World Model Twin",
          description:
            "Operations run on a 4D world model of your field, accurate within 4 hours. The AI doesn't just predict; it imagines alternative futures. It just disagreed with your most experienced field engineer about something they've been right about for 30 years.",
        },
        {
          id: "t3-3",
          roll: 3,
          title: "No Boots on Deck",
          description:
            "Your flagship offshore asset is unmanned, operated remotely 200 km onshore. The rolled scenario hits — the nearest human is 4 hours away by chopper and the weather window is closing. The AI is your only real-time presence.",
        },
        {
          id: "t3-4",
          roll: 4,
          title: "The Energy Paradox",
          description:
            "Data centers consume more power than O&G produces. Your largest customer is a hyperscaler demanding a 25-year contract paid in compute credits. Their procurement AI just sent your AI a counteroffer.",
        },
        {
          id: "t3-5",
          roll: 5,
          title: "The AI-to-AI Marketplace",
          description:
            "60% of transactional decisions happen in AI marketplaces in milliseconds. A regulator just demanded full transparency into one specific transaction your AI made. It cannot explain its reasoning in human terms; it just knew the trade was optimal.",
        },
        {
          id: "t3-6",
          roll: 6,
          title: "The Last Human Decision",
          description:
            "91% of decisions are purely AI; 7% are human-reviewed. The final 2% are labeled \"ethical, legal, or existential\" and land on senior leaders' desks. This scenario just landed on yours. Solve it, and explain why this was yours to decide.",
        },
      ],
    },
  ],
};

export default encounterData;
