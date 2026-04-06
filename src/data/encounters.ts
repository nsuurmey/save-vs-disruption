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
      id: "table-0",
      name: "Table 0: Industry Lens",
      flavorText:
        "You're no longer thinking from your own seat. Roll to discover whose shoes you're standing in.",
      entries: [
        {
          id: "t0-1",
          roll: 1,
          title: "Deep Space Mission Control",
          description:
            "You're leading AI integration at a space agency. Every decision has a 14-minute communication delay, zero margin for error, and a budget approval process that makes glaciers look hasty.",
          characterPrompt:
            "You haven't slept well since the last anomaly report. Failure isn't an option — it's a congressional hearing.",
        },
        {
          id: "t0-2",
          roll: 2,
          title: "High-Frequency Trading Desk",
          description:
            "You run AI strategy for a quantitative trading firm. Your time horizon is measured in microseconds. Last quarter's model is ancient history. Regulatory scrutiny is intense and getting worse.",
          characterPrompt:
            "You think in basis points. If a meeting takes longer than 7 minutes, someone is getting fired.",
        },
        {
          id: "t0-3",
          roll: 3,
          title: "AAA Video Game Studio",
          description:
            "You're the technical director at a major game studio. Your team of 400 artists and engineers ships one title every 3 years. Players will review-bomb you for a single bad AI interaction.",
          characterPrompt:
            "You just saw the subreddit. They've already found the bug you shipped at 2 AM. Stay calm.",
        },
        {
          id: "t0-4",
          roll: 4,
          title: "Military Logistics Command",
          description:
            "You oversee AI deployment for a NATO logistics division. Everything must work in contested, low-bandwidth environments. Your AI can't phone home, and your adversaries are actively trying to fool it.",
          characterPrompt:
            "Classification levels determine who you can even talk to about this. Your coffee is always cold.",
        },
        {
          id: "t0-5",
          roll: 5,
          title: "Precision Agriculture Co-op",
          description:
            "You lead technology for a farming cooperative spanning 200 operations. Your 'data scientists' are agronomists who learned Python last year. Your edge devices run on solar and spite.",
          characterPrompt:
            "You just explained 'training data' using a seed catalog analogy. It actually worked.",
        },
        {
          id: "t0-6",
          roll: 6,
          title: "National Opera Company",
          description:
            "You're the newly hired 'Chief Innovation Officer' at a 150-year-old opera company. The board hired you to 'do AI.' The artistic director thinks you're here to replace Puccini with a chatbot.",
          characterPrompt:
            "You have a PhD in computer science and you just learned what a coloratura soprano is. It's been a week.",
        },
      ],
    },
    {
      id: "table-1",
      name: "Table 1: The Problem",
      flavorText:
        "Every quest begins with a problem nobody asked you to solve — but here you are.",
      entries: [
        {
          id: "t1-1",
          roll: 1,
          title: "The Knowledge Exodus",
          description:
            "Your best ML engineer just resigned — effective immediately. They built 80% of your pipeline, documented approximately none of it, and their Slack history is your only architecture diagram.",
        },
        {
          id: "t1-2",
          roll: 2,
          title: "The Shiny Vendor Demo",
          description:
            "A vendor just gave your VP a dazzling demo. Now there's a mandate to buy their platform by Q3. You know it won't integrate with anything you have, but the purchase order is already circulating.",
        },
        {
          id: "t1-3",
          roll: 3,
          title: "The Pilot That Worked Too Well",
          description:
            "Your AI pilot project crushed it in the sandbox. Execs are thrilled. But the ops team won't touch it in production, your data team says the training data 'has issues,' and nobody owns the model in prod.",
        },
        {
          id: "t1-4",
          roll: 4,
          title: "The AI Strategy Mandate",
          description:
            "The CEO just announced at an all-hands that your company 'will be AI-first by next year.' You are now responsible for making that mean something. No additional budget has been allocated.",
        },
        {
          id: "t1-5",
          roll: 5,
          title: "The Data Quality Reckoning",
          description:
            "An audit just revealed that 40% of the data feeding your flagship model is stale, mislabeled, or from a source you no longer have a license for. The model is already in production. Customers depend on it.",
        },
        {
          id: "t1-6",
          roll: 6,
          title: "The Competing Fiefdoms",
          description:
            "Three different departments have each built their own AI solution for essentially the same problem. Each team thinks theirs is best. Your job is to consolidate them into one platform without anyone quitting.",
        },
      ],
    },
    {
      id: "table-2",
      name: "Table 2: The Complication",
      flavorText:
        "Just when you thought it couldn't get worse... roll.",
      entries: [
        {
          id: "t2-1",
          roll: 1,
          title: "The Press Call",
          description:
            "A journalist from a major outlet just emailed your comms team asking pointed questions about your AI safety practices. You have until 5 PM to respond. Your comms team just forwarded the email to you with '???'",
        },
        {
          id: "t2-2",
          roll: 2,
          title: "The Talent Spiral",
          description:
            "Your team is burned out. Two senior engineers just updated their LinkedIn to 'Open to Work.' The remaining team has started speaking in one-word Slack replies. Morale is not a number you can optimize.",
        },
        {
          id: "t2-3",
          roll: 3,
          title: "The Regulatory Surprise",
          description:
            "New regulations just dropped that apply to exactly what you're building. Your legal team is 'still reviewing,' which means nobody knows what's legal anymore. Compliance deadline: 90 days.",
        },
        {
          id: "t2-4",
          roll: 4,
          title: "The Bias Discovery",
          description:
            "An internal review found that your model performs measurably worse for a specific demographic group. It's not catastrophic yet, but if you ship the next release without fixing it, it will be. The release is in two weeks.",
        },
        {
          id: "t2-5",
          roll: 5,
          title: "The Budget Freeze",
          description:
            "Finance just announced a company-wide spending freeze. Your cloud compute bill is now 'under review.' Your model retraining pipeline costs $47,000 per run. You were planning to run it next Tuesday.",
        },
        {
          id: "t2-6",
          roll: 6,
          title: "The Executive Pivot",
          description:
            "Your executive sponsor — the one who championed this project through three budget cycles — just moved to a different division. Their replacement 'wants to understand the value proposition from scratch.'",
        },
      ],
    },
    {
      id: "table-3",
      name: "Table 3: The Tool / Constraint",
      flavorText:
        "The gods are generous — here's what you have to work with. Or against.",
      entries: [
        {
          id: "t3-1",
          roll: 1,
          title: "Open Source or Bust",
          description:
            "You can only use open-source tools and must publish your solution publicly. Your legal team is hyperventilating. Your community manager is thrilled. Your competitors are watching.",
        },
        {
          id: "t3-2",
          roll: 2,
          title: "The Skeptic's Room",
          description:
            "You must present your solution to a room of people who actively distrust AI. Half of them have 'AI is a bubble' articles bookmarked. One of them is your boss's boss. Convince them or lose funding.",
        },
        {
          id: "t3-3",
          roll: 3,
          title: "Constitutional AI Principles",
          description:
            "Anthropic's Constitutional AI principles must guide every decision — your AI must be helpful, harmless, and honest, with explicit reasoning about tradeoffs. Learn more at anthropic.com about how this framework shapes responsible AI development.",
        },
        {
          id: "t3-4",
          roll: 4,
          title: "Zero Budget, Maximum Interns",
          description:
            "You have a $0 discretionary budget but somehow have access to twelve enthusiastic interns. They're smart, fast, and have never seen a production system. What could go wrong?",
        },
        {
          id: "t3-5",
          roll: 5,
          title: "The 48-Hour Sprint",
          description:
            "You must deliver a working proof of concept in 48 hours using only tools your team already knows. No new vendors, no new frameworks, no 'let me quickly learn Kubernetes.' Ship with what you have.",
        },
        {
          id: "t3-6",
          roll: 6,
          title: "The Dual Audience",
          description:
            "Your solution must be explainable to both a 10-year-old and a regulatory auditor — in the same presentation. If the kid gets bored or the auditor gets suspicious, you've failed.",
        },
      ],
    },
  ],
};

export default encounterData;
