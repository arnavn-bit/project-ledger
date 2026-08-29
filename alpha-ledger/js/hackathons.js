// Hackathons — timeboxed, multi-checkpoint builds. Kept separate from PROJECTS
// so you can add/remove/edit these without touching the 391-entry ledger.
//
// To add a new hackathon: copy an object below, give it a new id (HK-0N),
// pick a category mix, and assign an exerciseTemplate id from js/exercises.js
// (see EXERCISES keys — e.g. "qf-a", "ml-b", "dl-a", "ds-b").

const HACKATHONS = [
  {
    id: "HK-01",
    title: "Weekend Alpha Sprint",
    theme: "Build and backtest a signal from scratch, in a weekend.",
    categories: ["quant-finance"],
    difficulty: "Intermediate",
    duration: "48 hours",
    teamSize: "1-3",
    brief: "Pick any liquid NSE/US ticker, engineer one signal (momentum, mean-reversion, or a volume-based idea), backtest it against a naive buy-and-hold baseline, and report Sharpe, max drawdown, and hit rate.",
    deliverables: [
      "A single notebook with data pull, signal logic, and backtest",
      "A results table comparing your signal vs buy-and-hold",
      "One paragraph on why the signal might stop working (regime change, crowding, etc.)"
    ],
    milestones: [
      { time: "Hr 0–6", task: "Pull data, define the signal in plain English before writing code" },
      { time: "Hr 6–24", task: "Implement signal + backtest engine, sanity-check on a small date range" },
      { time: "Hr 24–40", task: "Run full backtest, compute Sharpe / drawdown / hit rate" },
      { time: "Hr 40–48", task: "Write up results and failure modes, prep a 3-slide readout" }
    ],
    exerciseTemplate: "qf-a",
    leaderboard: [
      { team: "Overfit & Chill", score: 96 },
      { team: "Mean Reversion Crew", score: 96 },
      { team: "Signal to Noise", score: 89 },
      { team: "Long Volatility", score: 87 },
      { team: "Ctrl+Alt+Deploy", score: 81 },
      { team: "Bayesian Bandits", score: 64 }
    ]
  },
  {
    id: "HK-02",
    title: "Kaggle Speed Round",
    theme: "Go from raw CSV to a submitted model in one sitting.",
    categories: ["machine-learning", "data-science"],
    difficulty: "Beginner",
    duration: "6 hours",
    teamSize: "Solo or pair",
    brief: "Take any tabular Kaggle competition (active or a Getting Started one like Titanic/House Prices), do minimal-but-correct EDA, build a baseline model, then one improved model, and submit both.",
    deliverables: [
      "Baseline model score",
      "Improved model score + what changed",
      "A short note on the single highest-leverage feature you engineered"
    ],
    milestones: [
      { time: "Hr 0–1", task: "Load data, check target distribution, nulls, obvious leaks" },
      { time: "Hr 1–2", task: "Baseline model — simplest thing that could work" },
      { time: "Hr 2–5", task: "Feature engineering + one stronger model" },
      { time: "Hr 5–6", task: "Submit both, compare, write the takeaway" }
    ],
    exerciseTemplate: "ml-b",
    leaderboard: [
      { team: "The Overleveraged", score: 82 },
      { team: "Random Forest Rangers", score: 76 },
      { team: "Tail Risk Taken", score: 72 },
      { team: "Signal to Noise", score: 72 },
      { team: "The Backtest Bandits", score: 65 },
      { team: "Sharpe Shooters", score: 59 }
    ]
  },
  {
    id: "HK-03",
    title: "Factor Zoo Build-Off",
    theme: "Construct three classic factors and check their pairwise correlation.",
    categories: ["quant-finance", "data-science"],
    difficulty: "Advanced",
    duration: "72 hours",
    teamSize: "2-4",
    brief: "Build three factors from a common academic family (value, momentum, quality, low-vol — pick any three) on a mid-cap universe, rank stocks by each, and check overlap between the top deciles.",
    deliverables: [
      "Factor construction code for all three factors",
      "A correlation matrix between factor scores",
      "Overlap % between top-decile stocks across factor pairs"
    ],
    milestones: [
      { time: "Day 1", task: "Define universe, pull fundamentals/price data, build factor 1" },
      { time: "Day 2", task: "Build factors 2 and 3, rank and decile the universe" },
      { time: "Day 3", task: "Correlation + overlap analysis, write findings" }
    ],
    exerciseTemplate: "qf-b",
    leaderboard: [
      { team: "Rolling Window", score: 88 },
      { team: "The Overleveraged", score: 79 },
      { team: "Kernel Panic", score: 65 },
      { team: "Backprop & Circumstance", score: 62 },
      { team: "Gradient Descenders", score: 59 },
      { team: "Mean Reversion Crew", score: 58 }
    ]
  },
  {
    id: "HK-04",
    title: "From Scratch, No Frameworks",
    theme: "Implement a core DL building block using only NumPy.",
    categories: ["deep-learning"],
    difficulty: "Advanced",
    duration: "48 hours",
    teamSize: "1-2",
    brief: "Pick one: a 2-layer neural net with manual backprop, a from-scratch attention head, or a from-scratch convolution — implemented in raw NumPy, trained on a toy dataset, no PyTorch/TensorFlow.",
    deliverables: [
      "Working forward + backward pass with no autograd library",
      "A training curve on a toy dataset (XOR, MNIST subset, or similar)",
      "A short note on where the manual gradient math got hairiest"
    ],
    milestones: [
      { time: "Hr 0–8", task: "Forward pass, verify shapes and outputs by hand on tiny inputs" },
      { time: "Hr 8–30", task: "Derive and implement backward pass, gradient-check against numerical gradients" },
      { time: "Hr 30–48", task: "Train on toy data, plot loss curve, document" }
    ],
    exerciseTemplate: "dl-a",
    leaderboard: [
      { team: "Attention Is All We Need", score: 95 },
      { team: "Gradient Descenders", score: 92 },
      { team: "Late Night Notebooks", score: 91 },
      { team: "Overfit & Chill", score: 72 },
      { team: "The Convolutionaries", score: 67 },
      { team: "Feature Engineers Local 42", score: 60 }
    ]
  },
  {
    id: "HK-05",
    title: "Dashboard in a Day",
    theme: "Turn a messy public dataset into a decision-ready dashboard.",
    categories: ["data-science"],
    difficulty: "Beginner",
    duration: "8 hours",
    teamSize: "1-3",
    brief: "Find a messy public dataset (government open data, a Kaggle CSV, an API), clean it, and build an interactive dashboard answering 3 specific business questions you define upfront.",
    deliverables: [
      "The 3 questions you set out to answer, written before you touched the data",
      "A working interactive dashboard (Streamlit, Dash, or similar)",
      "One finding that surprised you"
    ],
    milestones: [
      { time: "Hr 0–1", task: "Pick dataset, write the 3 questions" },
      { time: "Hr 1–4", task: "Clean data, build core charts" },
      { time: "Hr 4–7", task: "Wire up interactivity (filters/dropdowns)" },
      { time: "Hr 7–8", task: "Polish + write up the surprising finding" }
    ],
    exerciseTemplate: "ds-a",
    leaderboard: [
      { team: "Stochastic Parrots", score: 97 },
      { team: "Gradient Descenders", score: 90 },
      { team: "The Overleveraged", score: 83 },
      { team: "Tail Risk Taken", score: 82 },
      { team: "Bayesian Bandits", score: 79 },
      { team: "The Convolutionaries", score: 74 }
    ]
  },
  {
    id: "HK-06",
    title: "Options Greeks Under Pressure",
    theme: "Build a Greeks calculator and stress-test it against a real chain.",
    categories: ["quant-finance"],
    difficulty: "Intermediate",
    duration: "24 hours",
    teamSize: "1-2",
    brief: "Implement Black-Scholes pricing plus all five Greeks from scratch, then pull a real (or recent) options chain and compare your model's implied Greeks against the market's quoted ones.",
    deliverables: [
      "Black-Scholes + Greeks implementation (no external pricing library)",
      "A comparison table: your Greeks vs a real chain's",
      "A note on where the model diverges most and why (skew, early exercise, etc.)"
    ],
    milestones: [
      { time: "Hr 0–8", task: "Implement pricing formula, validate against a known textbook example" },
      { time: "Hr 8–16", task: "Implement delta/gamma/theta/vega/rho" },
      { time: "Hr 16–24", task: "Pull real chain data, compare, write findings" }
    ],
    exerciseTemplate: "qf-a",
    leaderboard: [
      { team: "Tail Risk Taken", score: 90 },
      { team: "Two Sigma Wannabes", score: 85 },
      { team: "Ctrl+Alt+Deploy", score: 77 },
      { team: "Backprop & Circumstance", score: 70 },
      { team: "Signal to Noise", score: 68 },
      { team: "The Overparametrized", score: 67 }
    ]
  },
  {
    id: "HK-07",
    title: "Two-Team Model Duel",
    theme: "A collaborative, competitive build — two teams, one dataset, one metric.",
    categories: ["machine-learning"],
    difficulty: "Intermediate",
    duration: "24 hours",
    teamSize: "3-5 (2 teams)",
    brief: "Split into two teams on the same dataset and target metric. Each team works independently, then does a live cross-review of the other team's approach — code, feature choices, and failure analysis.",
    deliverables: [
      "Each team's model + a written approach summary",
      "A cross-review doc: what the other team did differently and why it mattered",
      "A merged 'best of both' idea list for a hypothetical round two"
    ],
    milestones: [
      { time: "Hr 0–2", task: "Teams split, agree on dataset split and evaluation protocol" },
      { time: "Hr 2–18", task: "Independent build time — no cross-talk" },
      { time: "Hr 18–22", task: "Swap code, cross-review" },
      { time: "Hr 22–24", task: "Joint readout + merged idea list" }
    ],
    exerciseTemplate: "ml-a",
    leaderboard: [
      { team: "Gradient Descenders", score: 93 },
      { team: "Stochastic Parrots", score: 90 },
      { team: "The Overleveraged", score: 75 },
      { team: "The Backtest Bandits", score: 67 },
      { team: "Two Sigma Wannabes", score: 61 },
      { team: "Long Volatility", score: 60 }
    ]
  },
  {
    id: "HK-08",
    title: "Regime Detector Jam",
    theme: "Label market regimes and see if your model agrees with history.",
    categories: ["deep-learning", "quant-finance"],
    difficulty: "Advanced",
    duration: "48 hours",
    teamSize: "2-4",
    brief: "Build an unsupervised or lightly-supervised regime detector (HMM, clustering on volatility/returns, or a small sequence model) on index data, then sanity-check its regime calls against known historical periods (2008, 2020, etc.).",
    deliverables: [
      "Regime detection code + method justification",
      "A timeline chart of detected regimes over the full history",
      "A written check: does 2008/2020 get flagged, and where does the model disagree with common sense?"
    ],
    milestones: [
      { time: "Day 1", task: "Pull long-history index data, engineer volatility/return features" },
      { time: "Day 2", task: "Fit regime model, plot regime timeline, compare against known crises" }
    ],
    exerciseTemplate: "dl-b",
    leaderboard: [
      { team: "Kernel Panic", score: 92 },
      { team: "Basis Points", score: 88 },
      { team: "Rolling Window", score: 79 },
      { team: "Stochastic Parrots", score: 78 },
      { team: "Zero Indexed", score: 72 },
      { team: "The P-Hackers (reformed)", score: 63 }
    ]
  }
];
