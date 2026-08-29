// Showcase — a small set of "readymade" projects: instead of a checklist to
// build yourself, these show what the finished output actually looks like,
// with real (illustrative, hand-set) sample numbers, a short code excerpt,
// and the headline metrics. Good for "what am I even aiming for" before you
// start the real build in the catalog.
//
// Each entry can reference a real `linkId` from PROJECTS so "Open full
// project" jumps straight into that project's mini-tutorial + exercise room.
//
// chart.type: 'bar' | 'line' | 'scatter' | 'table' — see renderShowcaseChart()
// in app.js for how each is drawn. All charts are plain inline SVG, no
// external chart library, so this page works offline too.

const SHOWCASE = [
  {
    id: 'sc-titanic',
    linkId: 'DS-001',
    category: 'data-science',
    title: 'Titanic Survival EDA — finished output',
    summary: 'Survival rate broken out by passenger class and sex — the two features that turn out to matter most.',
    metrics: [
      { label: 'Overall survival', value: '38%' },
      { label: '1st class, female', value: '97%' },
      { label: '3rd class, male', value: '14%' },
    ],
    chart: {
      type: 'bar',
      xLabel: 'Class / Sex',
      yLabel: 'Survival rate',
      data: [
        { label: '1st·F', value: 0.97 },
        { label: '1st·M', value: 0.37 },
        { label: '2nd·F', value: 0.92 },
        { label: '2nd·M', value: 0.16 },
        { label: '3rd·F', value: 0.50 },
        { label: '3rd·M', value: 0.14 },
      ]
    },
    code: `survival = (df.groupby(['pclass','sex'])['survived']
              .mean().round(2))
print(survival)`,
    takeaway: 'Class and sex alone explain most of the variance here — a model that only used these two columns would already beat the "predict majority class" baseline by a wide margin, which is exactly the kind of thing EDA should surface before you write a single line of modeling code.'
  },
  {
    id: 'sc-netflix',
    linkId: 'DS-002',
    category: 'data-science',
    title: 'Netflix Content Trends — finished output',
    summary: 'Titles added per year, split by Movie vs TV Show — the acceleration point is visible immediately.',
    metrics: [
      { label: 'Peak year', value: '2019' },
      { label: 'TV share, 2021', value: '34%' },
      { label: 'CAGR 2015–19', value: '+41%' },
    ],
    chart: {
      type: 'line',
      xLabel: 'Year added',
      yLabel: 'Titles added',
      series: [
        { name: 'Movies', color: 'var(--gold)', points: [40, 90, 210, 420, 680, 900, 520, 380] },
        { name: 'TV Shows', color: 'var(--green)', points: [15, 30, 70, 150, 280, 400, 320, 260] },
      ],
      xTicks: ['14', '15', '16', '17', '18', '19', '20', '21']
    },
    code: `by_year = (df.assign(year=df.date_added.dt.year)
             .groupby(['year','type']).size()
             .unstack())
by_year.plot()`,
    takeaway: 'The 2019 peak followed by a drop lines up with well-known catalog and licensing shifts — a chart like this is the kind of thing that turns into the one paragraph of "3–5 key findings" the write-up actually needs.'
  },
  {
    id: 'sc-iris',
    linkId: 'ML-001',
    category: 'machine-learning',
    title: 'Iris Classification — finished output',
    summary: 'A confusion matrix for the classic 3-class problem — near-perfect except for one confusable pair of species.',
    metrics: [
      { label: 'Accuracy', value: '96.7%' },
      { label: 'Macro F1', value: '0.966' },
      { label: 'Misclassified', value: '1 / 30' },
    ],
    chart: {
      type: 'table',
      columns: ['', 'Pred: setosa', 'Pred: versicolor', 'Pred: virginica'],
      rows: [
        ['True: setosa', '10', '0', '0'],
        ['True: versicolor', '0', '9', '1'],
        ['True: virginica', '0', '0', '10'],
      ]
    },
    code: `from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, model.predict(X_test))
print(cm)`,
    takeaway: 'The single error is always the same pair (versicolor/virginica) — their petal measurements genuinely overlap in real data, so a "perfect" score here would actually be a red flag worth investigating, not a win.'
  },
  {
    id: 'sc-house-price',
    linkId: 'ML-003',
    category: 'machine-learning',
    title: 'House Price Regression — finished output',
    summary: 'Predicted vs. actual sale price on the held-out test set — points hugging the diagonal is the whole story.',
    metrics: [
      { label: 'R²', value: '0.89' },
      { label: 'RMSE', value: '$24,300' },
      { label: 'vs. mean-baseline RMSE', value: '−68%' },
    ],
    chart: {
      type: 'scatter',
      xLabel: 'Actual price ($k)',
      yLabel: 'Predicted price ($k)',
      points: [[120,128],[145,140],[160,168],[180,175],[210,205],[230,245],[260,250],[280,270],[310,300],[340,335],[365,380],[400,390]]
    },
    code: `preds = model.predict(X_test)
r2 = r2_score(y_test, preds)
rmse = mean_squared_error(y_test, preds, squared=False)`,
    takeaway: 'The slight fan-out at higher prices is normal and worth calling out explicitly in a write-up — the model is a little less confident on expensive homes, likely because they\'re rarer in the training data.'
  },
  {
    id: 'sc-digit-cnn',
    linkId: 'DL-001',
    category: 'deep-learning',
    title: 'Handwritten Digit CNN — finished output',
    summary: 'Training vs. validation loss over 10 epochs — the point where the curves start to diverge is the tell for when to stop.',
    metrics: [
      { label: 'Test accuracy', value: '99.1%' },
      { label: 'Params', value: '~93K' },
      { label: 'Best epoch', value: '7' },
    ],
    chart: {
      type: 'line',
      xLabel: 'Epoch',
      yLabel: 'Loss',
      series: [
        { name: 'Train loss', color: 'var(--gold)', points: [0.9, 0.42, 0.27, 0.19, 0.14, 0.11, 0.09, 0.07, 0.06, 0.05] },
        { name: 'Val loss', color: 'var(--red)', points: [0.6, 0.32, 0.22, 0.17, 0.14, 0.13, 0.125, 0.13, 0.14, 0.155] },
      ],
      xTicks: ['1','2','3','4','5','6','7','8','9','10']
    },
    code: `history = model.fit(X_train, y_train, epochs=10,
                     validation_data=(X_val, y_val))`,
    takeaway: 'Validation loss bottoms out around epoch 7 and creeps back up after — textbook overfitting starting. Early stopping at epoch 7 (not epoch 10) is the actual right call, even though train loss keeps improving.'
  },
  {
    id: 'sc-sentiment-lstm',
    linkId: 'DL-005',
    category: 'deep-learning',
    title: 'Sentiment LSTM — finished output',
    summary: 'Accuracy on held-out reviews by predicted-confidence bucket — a calibration view, not just one aggregate number.',
    metrics: [
      { label: 'Overall accuracy', value: '87.4%' },
      { label: 'High-confidence acc.', value: '96%' },
      { label: 'Low-confidence acc.', value: '61%' },
    ],
    chart: {
      type: 'bar',
      xLabel: 'Confidence bucket',
      yLabel: 'Accuracy',
      data: [
        { label: '50–60%', value: 0.61 },
        { label: '60–75%', value: 0.74 },
        { label: '75–90%', value: 0.88 },
        { label: '90–100%', value: 0.96 },
      ]
    },
    code: `probs = model.predict(X_test)
buckets = pd.cut(probs.max(axis=1), bins=[.5,.6,.75,.9,1.0])
acc_by_bucket = pd.Series(correct).groupby(buckets).mean()`,
    takeaway: 'The model is well-calibrated in the direction that matters: when it says it\'s unsure, it\'s actually more often wrong. That makes a "flag for human review below 60% confidence" policy genuinely useful in production, not just a number for the write-up.'
  },
  {
    id: 'sc-ma-crossover',
    linkId: 'QF-001',
    category: 'quant-finance',
    title: 'Moving Average Crossover — finished output',
    summary: 'Strategy equity curve vs. buy-and-hold over the backtest window — the comparison a strategy has to win, not just its own returns in isolation.',
    metrics: [
      { label: 'Strategy Sharpe', value: '0.81' },
      { label: 'Buy&hold Sharpe', value: '0.64' },
      { label: 'Max drawdown', value: '−18.2%' },
    ],
    chart: {
      type: 'line',
      xLabel: 'Month',
      yLabel: 'Equity (start = 100)',
      series: [
        { name: 'Strategy', color: 'var(--gold)', points: [100,104,108,106,115,121,118,129,135,131,142,150] },
        { name: 'Buy & hold', color: 'var(--ink-muted)', points: [100,102,99,105,110,108,116,114,122,119,126,133] },
      ],
      xTicks: ['J','F','M','A','M','J','J','A','S','O','N','D']
    },
    code: `signal = (fast_ma > slow_ma).astype(int)
strategy_returns = signal.shift(1) * daily_returns
equity = (1 + strategy_returns).cumprod() * 100`,
    takeaway: 'Beating buy-and-hold on raw return is easy to fake; beating it on Sharpe (return per unit of risk) while surviving realistic transaction costs is the actual bar — this is the comparison every backtest write-up in the ledger should lead with.'
  },
  {
    id: 'sc-black-scholes',
    linkId: 'QF-004',
    category: 'quant-finance',
    title: 'Black-Scholes Greeks — finished output',
    summary: 'A model vs. real options-chain comparison — where the two agree, and where skew makes them diverge.',
    metrics: [
      { label: 'Model IV (ATM)', value: '22.4%' },
      { label: 'Market IV (ATM)', value: '22.1%' },
      { label: 'Largest divergence', value: 'Deep OTM puts' },
    ],
    chart: {
      type: 'table',
      columns: ['Strike', 'Model Delta', 'Market Delta', 'Model Vega', 'Market Vega'],
      rows: [
        ['90% (OTM put)', '−0.18', '−0.24', '0.11', '0.15'],
        ['100% (ATM)', '0.51', '0.52', '0.19', '0.19'],
        ['110% (OTM call)', '0.19', '0.18', '0.12', '0.13'],
      ]
    },
    code: `from scipy.stats import norm
d1 = (log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*sqrt(T))
delta = norm.cdf(d1)   # for a call`,
    takeaway: 'The gap widens for deep out-of-the-money puts — classic volatility skew, which flat Black-Scholes doesn\'t model. Naming that gap explicitly (instead of quietly ignoring it) is the difference between a demo and a project that shows real understanding.'
  },
  {
    id: 'sc-fraud-detection',
    linkId: 'IP-001',
    category: 'industry-projects',
    title: 'Fraud Detection Pipeline — finished output',
    summary: 'Precision/recall at different decision thresholds — the actual lever a fraud team pulls, not the model itself.',
    metrics: [
      { label: 'PR-AUC', value: '0.91' },
      { label: 'Recall @ 90% precision', value: '78%' },
      { label: 'Scoring latency', value: '34ms p99' },
    ],
    chart: {
      type: 'line',
      xLabel: 'Recall',
      yLabel: 'Precision',
      series: [
        { name: 'Precision–Recall', color: 'var(--gold)', points: [0.99, 0.97, 0.94, 0.90, 0.83, 0.71, 0.55, 0.38, 0.24, 0.15] },
      ],
      xTicks: ['.1','.2','.3','.4','.5','.6','.7','.8','.9','1']
    },
    code: `thresholds = np.linspace(0, 1, 100)
precisions, recalls = [], []
for t in thresholds:
    preds = (probs > t).astype(int)
    precisions.append(precision_score(y, preds))
    recalls.append(recall_score(y, preds))`,
    takeaway: 'There is no single "best" threshold — it\'s a business decision about how many false alarms a review team can absorb per flagged fraud caught. Shipping the whole curve (not one cherry-picked point) is what makes this look like real fraud-ops work.'
  },
  {
    id: 'sc-credit-risk',
    linkId: 'IP-002',
    category: 'industry-projects',
    title: 'Credit Risk Scorecard — finished output',
    summary: 'Default rate by score band — the classic scorecard sanity check: risk should fall monotonically as score rises.',
    metrics: [
      { label: 'AUC', value: '0.79' },
      { label: 'KS statistic', value: '0.41' },
      { label: 'Bands', value: '10, monotonic' },
    ],
    chart: {
      type: 'bar',
      xLabel: 'Score decile (10 = best)',
      yLabel: 'Default rate',
      data: [
        { label: '1', value: 0.34 }, { label: '2', value: 0.24 }, { label: '3', value: 0.17 },
        { label: '4', value: 0.12 }, { label: '5', value: 0.09 }, { label: '6', value: 0.06 },
        { label: '7', value: 0.04 }, { label: '8', value: 0.025 }, { label: '9', value: 0.015 }, { label: '10', value: 0.008 },
      ]
    },
    code: `df['decile'] = pd.qcut(df['score'], 10, labels=False)
default_by_decile = df.groupby('decile')['defaulted'].mean()
assert default_by_decile.is_monotonic_decreasing`,
    takeaway: 'That monotonic drop from decile 1 to 10 is the actual acceptance test for a scorecard in industry — an AUC number alone doesn\'t tell a risk committee whether the score is safe to act on, this chart does.'
  },
];
