// Docs & Tutorials — a small, hand-written knowledge base of the topics,
// tricks, and techniques that come up over and over again while working
// through the project ledger. Pure content, no logic — rendered by app.js.
//
// To add an article: copy an object below, give it a unique id, pick a
// group from GROUPS, and write `body` as an HTML string (h4/p/ul/pre.code
// are all styled already — see css/styles.css ".doc-body").

const DOC_GROUPS = [
  { key: 'foundations', name: 'Foundations & Workflow' },
  { key: 'data-science', name: 'Data Science' },
  { key: 'machine-learning', name: 'Machine Learning' },
  { key: 'deep-learning', name: 'Deep Learning' },
  { key: 'quant-finance', name: 'Quant Finance' },
  { key: 'tricks', name: 'Tricks & Techniques' },
];

const TUTORIALS = [
  {
    id: 'doc-repro-notebooks',
    group: 'foundations',
    title: 'Writing notebooks other people (including future you) can trust',
    tags: ['reproducibility', 'notebooks'],
    body: `
      <p>A notebook that only runs top-to-bottom in your head is not reproducible — it just looks like code. The test is simple: restart the kernel, run all cells, and see what breaks.</p>
      <h4>The habits that actually matter</h4>
      <ul>
        <li>Restart-and-run-all before you consider anything "done", every time — not just before a demo.</li>
        <li>Pin your seeds (<code>numpy</code>, your framework's RNG, and the train/test split) so results don't drift between runs.</li>
        <li>Keep one cell near the top that declares versions: <code>python --version</code>, <code>pandas.__version__</code>, etc. It costs nothing and saves an hour later.</li>
        <li>Delete dead cells instead of commenting them out. A notebook full of commented-out attempts is a diary, not a deliverable.</li>
      </ul>
      <h4>A minimal reproducibility header</h4>
      <pre class="code">import random, numpy as np
SEED = 42
random.seed(SEED)
np.random.seed(SEED)
# if you're using a framework: torch.manual_seed(SEED) / tf.random.set_seed(SEED)</pre>
      <p>None of this is glamorous. It's also the difference between a project you can put your name on and one you have to quietly re-run three times before showing anyone.</p>
    `
  },
  {
    id: 'doc-git-solo',
    group: 'foundations',
    title: 'A git workflow for solo data projects (that you\'ll actually keep using)',
    tags: ['git', 'workflow'],
    body: `
      <p>Most git advice is written for teams shipping production software. Solo data work needs a lighter version — just enough structure that you can undo mistakes and show your work.</p>
      <h4>The four habits that cover 90% of it</h4>
      <ul>
        <li>Commit at "notebook states", not at random moments — after a working baseline, after a feature that helped, after a result you'd want to come back to.</li>
        <li>Write commit messages as if explaining to a teammate what changed and why, not just what: "swap mean imputation for KNN — mean was flattening the tails".</li>
        <li>Keep large data files out of git entirely (add a <code>data/</code> line to <code>.gitignore</code>); commit a small script or note on where to re-fetch them instead.</li>
        <li>Tag the commit that produced a result you're reporting (<code>git tag results-v1</code>) so "which version got that number" is never a mystery.</li>
      </ul>
      <p>You don't need branches or pull requests for a solo project — you need a timeline you can trust when something breaks two weeks from now.</p>
    `
  },
  {
    id: 'doc-portfolio-ready',
    group: 'foundations',
    title: 'Making a finished project actually readable by someone else',
    tags: ['portfolio', 'communication'],
    body: `
      <p>A project that only you can explain isn't finished — the write-up is part of the deliverable, not an afterthought bolted on at the end.</p>
      <h4>The shape that works almost every time</h4>
      <ul>
        <li><b>One sentence at the top</b> — what this is and why it exists, before any code or chart.</li>
        <li><b>The result first</b> — the headline number or chart, not buried after twelve setup cells. Readers decide in the first ten seconds whether to keep reading.</li>
        <li><b>One paragraph on what didn't work</b> — the dead ends you ruled out are often more informative than the thing that worked, and they signal you actually explored the problem.</li>
        <li><b>Limitations, stated plainly</b> — every real project has them; naming yours reads as competence, not weakness.</li>
      </ul>
      <p>This applies whether the output is a GitHub README, a notebook, or a slide deck for a hackathon readout — same shape, different packaging.</p>
    `
  },
  {
    id: 'doc-reading-papers',
    group: 'foundations',
    title: 'Reading a paper efficiently when you just need to build something',
    tags: ['papers', 'research'],
    body: `
      <p>You rarely need to read a paper front-to-back to use it. Most build-along projects only need three things out of a paper: what problem it solves, the core idea in one diagram or equation, and what the authors themselves flagged as limitations.</p>
      <h4>A pass order that saves hours</h4>
      <ol>
        <li>Abstract + conclusion first — this tells you if the paper is even relevant before you invest more time.</li>
        <li>Figures and their captions, in order — most papers are designed to be understandable from the figures alone.</li>
        <li>The method section, but only the part that maps to what you're building — skip proofs and ablations on your first pass.</li>
        <li>Related work, only if you need to know what alternatives exist.</li>
      </ol>
      <p>Come back for the full method + proofs only if the figure-level understanding isn't enough to implement the thing. Most of the time, it is.</p>
    `
  },
  {
    id: 'doc-eda-checklist',
    group: 'data-science',
    title: 'An EDA checklist that scales from a CSV to a real dataset',
    tags: ['eda', 'pandas'],
    body: `
      <p>Exploratory analysis has a way of turning into aimless scrolling through <code>.head()</code> output. A fixed checklist keeps it purposeful.</p>
      <h4>Run these, in this order, before any modeling</h4>
      <ul>
        <li><b>Shape & dtypes</b> — <code>df.shape</code>, <code>df.dtypes</code>. Numbers stored as strings are the most common silent bug here.</li>
        <li><b>Missingness</b> — <code>df.isna().mean().sort_values(ascending=False)</code>. A column missing 60% of the time needs a different treatment than one missing 2%.</li>
        <li><b>Duplicates</b> — <code>df.duplicated().sum()</code>, and check whether duplicates are legitimate (repeat customers) or a join bug.</li>
        <li><b>Target distribution</b> (if there is one) — class imbalance or a skewed continuous target changes which metrics and models make sense later.</li>
        <li><b>Leakage scan</b> — for every column, ask "would I know this at prediction time?" Columns computed after the outcome are the single most common cause of suspiciously good models.</li>
      </ul>
      <pre class="code">import pandas as pd
report = pd.DataFrame({
    'dtype': df.dtypes,
    'missing_%': (df.isna().mean() * 100).round(1),
    'n_unique': df.nunique()
})
report.sort_values('missing_%', ascending=False)</pre>
    `
  },
  {
    id: 'doc-missing-data',
    group: 'data-science',
    title: 'Handling missing data without quietly leaking information',
    tags: ['missing-data', 'pipelines'],
    body: `
      <p>The most common mistake with missing values isn't picking the wrong imputation method — it's computing the imputation using information from outside the training set.</p>
      <h4>The rule that prevents most leakage</h4>
      <p>Fit any imputer (mean, median, KNN, model-based) <i>only</i> on the training split, then apply it unchanged to validation/test. If you impute using the full dataset before splitting, your test set has quietly informed your training data.</p>
      <pre class="code">from sklearn.impute import SimpleImputer

imputer = SimpleImputer(strategy='median')
X_train_filled = imputer.fit_transform(X_train)   # fit + transform on train only
X_test_filled  = imputer.transform(X_test)         # transform only, using train's stats</pre>
      <h4>Choosing a strategy</h4>
      <ul>
        <li>Missing completely at random, low %: mean/median is fine and simple.</li>
        <li>Missingness that correlates with the target (e.g. income missing more often for one group): consider adding a "was_missing" flag column — the missingness itself can be a real signal.</li>
        <li>High missing % (&gt;50%): question whether the column belongs in the model at all before reaching for a fancier imputer.</li>
      </ul>
    `
  },
  {
    id: 'doc-dashboarding',
    group: 'data-science',
    title: 'Turning a chart-filled notebook into a dashboard someone will use',
    tags: ['dashboards', 'streamlit'],
    body: `
      <p>The gap between "I made some charts" and "I made a dashboard" is usually three things: a fixed set of questions it answers, interactivity, and a layout that doesn't require scrolling to find the point.</p>
      <h4>Before touching a dashboarding library</h4>
      <ul>
        <li>Write down the 3–5 specific questions the dashboard answers. "Explore the data" is not a question; "which regions had the steepest churn increase last quarter" is.</li>
        <li>Sketch the layout on paper first — top-left is where eyes land first, put the headline number there.</li>
      </ul>
      <h4>A minimal Streamlit skeleton</h4>
      <pre class="code">import streamlit as st
import pandas as pd

st.title("Churn by Region")
region = st.selectbox("Region", df['region'].unique())
filtered = df[df['region'] == region]
st.metric("Churn rate", f"{filtered['churned'].mean():.1%}")
st.line_chart(filtered.groupby('month')['churned'].mean())</pre>
      <p>Ship this minimal version before adding filters and polish — a dashboard that answers one question well beats one that half-answers ten.</p>
    `
  },
  {
    id: 'doc-baseline-first',
    group: 'machine-learning',
    title: 'Always build the dumbest baseline first',
    tags: ['baselines', 'evaluation'],
    body: `
      <p>Skipping the baseline is the single most common reason people misjudge how good their model actually is. Without a baseline, "82% accuracy" has no meaning.</p>
      <h4>What counts as a baseline</h4>
      <ul>
        <li>Classification: predict the majority class every time. If that alone gets 90% accuracy on an imbalanced set, your fancy model needs to clear a much higher bar than 90%.</li>
        <li>Regression: predict the mean (or median) of the training target every time.</li>
        <li>Time series: predict "same as yesterday" (a naive/persistence forecast) — surprisingly hard to beat, and a great sanity check.</li>
      </ul>
      <pre class="code">from sklearn.dummy import DummyClassifier
baseline = DummyClassifier(strategy='most_frequent')
baseline.fit(X_train, y_train)
print("baseline accuracy:", baseline.score(X_test, y_test))</pre>
      <p>Report your real model's improvement <i>over</i> the baseline, not just its raw score — that's the number that actually reflects the work you did.</p>
    `
  },
  {
    id: 'doc-cv-pitfalls',
    group: 'machine-learning',
    title: 'Cross-validation pitfalls that inflate your score',
    tags: ['cross-validation', 'leakage'],
    body: `
      <p>Cross-validation is supposed to give an honest estimate of real-world performance. It stops doing that the moment any preprocessing "sees" data outside the current fold.</p>
      <h4>Common ways this breaks</h4>
      <ul>
        <li>Scaling/imputing/feature-selecting on the full dataset before splitting into folds.</li>
        <li>Oversampling (e.g. SMOTE) applied before the split, so synthetic points derived from test-fold neighbors leak into training.</li>
        <li>Time series data shuffled into random folds instead of split chronologically — the model ends up "predicting the past from the future".</li>
        <li>Grouped data (multiple rows per customer/patient) split randomly, so the same entity appears in both train and test folds.</li>
      </ul>
      <h4>The fix is almost always a Pipeline</h4>
      <pre class="code">from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import cross_val_score

pipe = Pipeline([('scale', StandardScaler()), ('model', model)])
scores = cross_val_score(pipe, X, y, cv=5)  # scaling refit inside each fold, automatically</pre>
      <p>Wrapping preprocessing in a <code>Pipeline</code> means each fold refits it independently — the single most reliable fix for this whole category of bug.</p>
    `
  },
  {
    id: 'doc-class-imbalance',
    group: 'machine-learning',
    title: 'Handling class imbalance without fooling yourself',
    tags: ['imbalance', 'metrics'],
    body: `
      <p>On an imbalanced dataset (1% fraud, 99% not-fraud), accuracy is nearly useless — a model that predicts "not fraud" every time scores 99%. Fix the metric before you fix the model.</p>
      <h4>Order of operations</h4>
      <ol>
        <li>Switch metrics first — precision, recall, F1, or PR-AUC (not ROC-AUC, which can look misleadingly good on severe imbalance).</li>
        <li>Try class weighting before resampling — often <code>class_weight='balanced'</code> gets you most of the benefit with none of the resampling complexity.</li>
        <li>If resampling, only oversample (SMOTE) the training fold, never the full dataset — see the cross-validation article for why.</li>
        <li>Pick your decision threshold deliberately against a cost matrix (a missed fraud case and a false alarm rarely cost the same) instead of defaulting to 0.5.</li>
      </ol>
      <pre class="code">from sklearn.metrics import precision_recall_curve
prec, rec, thresh = precision_recall_curve(y_test, model.predict_proba(X_test)[:,1])
# pick the threshold that hits your actual recall target, not 0.5 by default</pre>
    `
  },
  {
    id: 'doc-error-analysis',
    group: 'machine-learning',
    title: 'Error analysis: what to do after the metric comes back',
    tags: ['debugging', 'evaluation'],
    body: `
      <p>A single accuracy or RMSE number tells you <i>that</i> something is wrong but never <i>what</i>. Error analysis is where the actual next step comes from.</p>
      <h4>A practical routine</h4>
      <ul>
        <li>Pull the 20 worst predictions (by residual or confidence-weighted error) and read every single one.</li>
        <li>Look for a pattern by segment: is error concentrated in one category, one time period, one range of a feature?</li>
        <li>For classifiers, look at the confusion matrix, not just the aggregate metric — which specific classes get confused for which?</li>
        <li>Ask "does the model even have the information to get this right?" — sometimes the fix isn't a better model, it's a missing feature.</li>
      </ul>
      <pre class="code">errors = X_test.copy()
errors['y_true'] = y_test
errors['y_pred'] = model.predict(X_test)
errors['abs_err'] = (errors['y_true'] - errors['y_pred']).abs()
errors.sort_values('abs_err', ascending=False).head(20)</pre>
    `
  },
  {
    id: 'doc-debugging-training',
    group: 'deep-learning',
    title: 'Debugging a training run that won\'t converge',
    tags: ['debugging', 'training'],
    body: `
      <p>Most "the model isn't learning" problems are plumbing bugs wearing a math costume, not genuinely hard optimization problems. Work down this list before touching architecture.</p>
      <h4>In order</h4>
      <ol>
        <li><b>Overfit a tiny batch on purpose.</b> Take 10 examples, remove regularization, and see if the model can drive loss to ~0. If it can't, you have a bug — not a data or capacity problem.</li>
        <li><b>Check every shape.</b> Print <code>.shape</code> after every layer once. Silent broadcasting (e.g. a stray <code>(N,)</code> vs <code>(N,1)</code>) is the most common single source of DL bugs.</li>
        <li><b>Check the loss function matches the output.</b> Softmax output with a loss that expects logits (or vice versa) trains "fine" but wrong.</li>
        <li><b>Check the labels line up with the inputs</b> after any shuffling or augmentation — an off-by-one in a custom Dataset class will train a model that's confidently wrong.</li>
        <li><b>Only then</b> consider learning rate, architecture depth, or more data.</li>
      </ol>
      <p>This order matters because a bug in steps 1–4 will make step 5's tuning look like it's helping when it's actually just noise.</p>
    `
  },
  {
    id: 'doc-learning-rate',
    group: 'deep-learning',
    title: 'Choosing a learning rate without guessing',
    tags: ['optimization', 'hyperparameters'],
    body: `
      <p>Learning rate is the single hyperparameter most likely to make or break a training run — too high and loss diverges or oscillates, too low and you'll wait forever (or plateau early).</p>
      <h4>The LR range test</h4>
      <p>Instead of guessing, run a short pass where the learning rate increases exponentially every few steps while you log the loss. Plot loss vs. LR (log scale) and pick a rate from the steepest descending region, just before the loss starts to blow up.</p>
      <pre class="code"># conceptually, over N steps:
# lr = lr_min * (lr_max / lr_min) ** (step / N)
# log (lr, loss) every step, then plot loss vs lr on a log-x axis</pre>
      <h4>Rules of thumb once you have a rough value</h4>
      <ul>
        <li>Pair it with a scheduler (cosine decay or step decay) rather than a single fixed rate for the whole run.</li>
        <li>Use a short linear warmup (a few hundred steps) for transformer-style architectures — skipping this is a common source of early instability.</li>
        <li>If loss is stable but plateaus early, that's more often a signal to adjust the schedule than to keep raising the peak rate.</li>
      </ul>
    `
  },
  {
    id: 'doc-regularization',
    group: 'deep-learning',
    title: 'The regularization toolbox, and when to reach for each tool',
    tags: ['regularization', 'overfitting'],
    body: `
      <p>Regularization only helps once you've confirmed you're actually overfitting — training loss much lower than validation loss. Applying it earlier just makes debugging harder.</p>
      <h4>Cheapest to try first</h4>
      <ul>
        <li><b>More/better data or augmentation</b> — usually the highest-leverage fix, and the one people skip because it's less glamorous than a new layer.</li>
        <li><b>Weight decay (L2)</b> — cheap, almost always safe to try, small effect.</li>
        <li><b>Dropout</b> — effective for fully-connected layers; use more conservatively in conv/attention layers than the classic 0.5.</li>
        <li><b>Early stopping</b> — track validation loss and stop when it turns upward; effectively free.</li>
      </ul>
      <h4>Reach for later</h4>
      <ul>
        <li>Reducing model capacity (fewer layers/params) if the above aren't enough and you suspect the model is simply too big for the data.</li>
        <li>Label smoothing for classification, if the model is overconfident on wrong predictions specifically.</li>
      </ul>
      <p>Change one regularizer at a time and re-check the train/val gap — stacking three changes at once tells you nothing about which one worked.</p>
    `
  },
  {
    id: 'doc-transfer-learning',
    group: 'deep-learning',
    title: 'When transfer learning is (and isn\'t) the right call',
    tags: ['transfer-learning', 'pretrained-models'],
    body: `
      <p>Transfer learning is the default sensible choice for most vision and language projects with limited data — but "default" doesn't mean "always".</p>
      <h4>Good fit</h4>
      <ul>
        <li>Your dataset is small (hundreds to low-thousands of examples) relative to what training from scratch would need.</li>
        <li>Your domain is reasonably close to the pretrained model's original domain (natural images, general text).</li>
      </ul>
      <h4>Worth training from scratch instead</h4>
      <ul>
        <li>Your data is very different from the pretraining domain (e.g. satellite imagery, medical scans, a niche technical language) — the pretrained features may not transfer cleanly.</li>
        <li>You have genuinely large domain-specific data and compute budget to match.</li>
      </ul>
      <h4>A sensible default recipe</h4>
      <ol>
        <li>Freeze the pretrained backbone, train only a new head for a few epochs.</li>
        <li>Unfreeze the last few layers, fine-tune with a small learning rate.</li>
        <li>Only unfreeze the whole network if 1–2 aren't enough, and use an even smaller LR.</li>
      </ol>
    `
  },
  {
    id: 'doc-backtest-lying',
    group: 'quant-finance',
    title: 'Backtesting without lying to yourself',
    tags: ['backtesting', 'quant'],
    body: `
      <p>A backtest is one of the easiest things in quantitative work to accidentally rig in your own favor. The bugs are subtle because every one of them makes your results look <i>better</i>, so nothing looks wrong at the time.</p>
      <h4>The classic ways backtests lie</h4>
      <ul>
        <li><b>Look-ahead bias</b> — using information at time T that wouldn't actually have been available at time T (e.g. today's closing price to make today's trading decision).</li>
        <li><b>Survivorship bias</b> — testing only on companies/assets that still exist today, silently excluding the ones that went to zero or got delisted.</li>
        <li><b>Ignoring costs</b> — no transaction costs, no slippage, no bid-ask spread. A strategy that "works" pre-cost frequently doesn't post-cost.</li>
        <li><b>Overfitting to the backtest period</b> — tuning parameters until the backtest looks great is fitting noise, not finding an edge.</li>
      </ul>
      <h4>A minimal honesty checklist before trusting a result</h4>
      <ol>
        <li>Did I use only information available at each point in time?</li>
        <li>Does my universe include delisted/failed assets from that period?</li>
        <li>Did I subtract realistic transaction costs and slippage?</li>
        <li>Did I test out-of-sample on a period I didn't touch while building the strategy?</li>
      </ol>
    `
  },
  {
    id: 'doc-position-sizing',
    group: 'quant-finance',
    title: 'Position sizing and risk basics before you touch a strategy',
    tags: ['risk', 'position-sizing'],
    body: `
      <p>A mediocre signal with disciplined position sizing usually beats a brilliant signal with none. Sizing is risk management, not an afterthought.</p>
      <h4>A few foundational ideas</h4>
      <ul>
        <li><b>Volatility-scaled sizing</b> — size positions inversely to recent volatility, so a jumpy asset doesn't dominate portfolio risk just because it moves a lot.</li>
        <li><b>Fixed-fractional risk</b> — risk a fixed % of capital per trade (e.g. 1%), sized off your stop distance, rather than a fixed number of shares/contracts.</li>
        <li><b>Correlation matters more than count</b> — ten positions that are all really the same trade (highly correlated) provide far less diversification than the count suggests.</li>
      </ul>
      <pre class="code"># fixed-fractional sizing sketch
risk_per_trade = 0.01 * account_equity
stop_distance = entry_price - stop_price
shares = risk_per_trade / stop_distance</pre>
      <h4>Metrics to actually look at</h4>
      <p>Sharpe ratio alone hides a lot — always pair it with max drawdown (can you psychologically and financially survive the worst stretch?) and turnover (does the edge survive realistic costs at this trading frequency?).</p>
    `
  },
  {
    id: 'doc-quant-metrics',
    group: 'quant-finance',
    title: 'The quant metrics people cite, explained plainly',
    tags: ['metrics', 'quant'],
    body: `
      <p>These show up in almost every quant finance write-up. Knowing what each one actually captures (and what it hides) matters more than memorizing the formula.</p>
      <h4>Sharpe ratio</h4>
      <p>Return per unit of volatility. High Sharpe with low volatility is more "tradeable" in practice than the same return with wild swings — but Sharpe treats upside and downside volatility the same, which flatters strategies with big occasional wins and steady small losses.</p>
      <h4>Max drawdown</h4>
      <p>The largest peak-to-trough loss over the period. This is the number that tells you whether you (or an investor) could actually stomach holding the strategy live — a great Sharpe with a 40% drawdown is a hard sell.</p>
      <h4>Sortino ratio</h4>
      <p>Like Sharpe, but only penalizes downside volatility — often a fairer read on strategies with asymmetric return profiles.</p>
      <h4>Turnover</h4>
      <p>How often the strategy trades. High turnover can look great pre-cost and mediocre post-cost — always report turnover next to any return number.</p>
      <h4>Hit rate</h4>
      <p>The % of trades that are profitable — deceptive on its own, since a strategy can have a low hit rate and still be very profitable if winners are much bigger than losers (and vice versa).</p>
    `
  },
  {
    id: 'doc-market-data-pitfalls',
    group: 'quant-finance',
    title: 'Data pitfalls specific to market data',
    tags: ['data-quality', 'quant'],
    body: `
      <p>Market data has failure modes that don't show up in typical tabular datasets, and they're easy to miss until a backtest result looks suspiciously good.</p>
      <h4>Watch for these specifically</h4>
      <ul>
        <li><b>Unadjusted prices</b> — splits and dividends create fake "jumps" or "drops" in raw price series; always use adjusted close for anything price-based.</li>
        <li><b>Corporate actions</b> — mergers, spin-offs, and ticker changes can silently break a time series if your data source doesn't handle them.</li>
        <li><b>Timezone/session mismatches</b> — joining data across exchanges or with news/sentiment data without aligning timezones and trading sessions causes subtle misalignment.</li>
        <li><b>Point-in-time data</b> — fundamentals get restated after the fact; using today's "final" numbers for a backtest 5 years ago is look-ahead bias in disguise.</li>
      </ul>
      <p>None of these show up as an error message — they show up as a backtest that performs unusually well, which is exactly why they're dangerous.</p>
    `
  },
  {
    id: 'doc-pandas-performance',
    group: 'tricks',
    title: 'Pandas performance tricks worth knowing',
    tags: ['pandas', 'performance'],
    body: `
      <p>Most pandas slowness comes from a handful of repeated patterns. Fixing these usually gets you 10–100x without touching your logic.</p>
      <ul>
        <li><b>Avoid <code>.apply()</code> with a Python function when a vectorized operation exists</b> — <code>df['x'] * 2</code> beats <code>df['x'].apply(lambda v: v * 2)</code> by a wide margin at scale.</li>
        <li><b>Avoid growing a DataFrame in a loop</b> — collect rows in a list of dicts, then build the DataFrame once at the end with <code>pd.DataFrame(rows)</code>.</li>
        <li><b>Use categorical dtype for low-cardinality string columns</b> — <code>df['col'] = df['col'].astype('category')</code> cuts memory and speeds up groupbys substantially.</li>
        <li><b>Downcast numeric types</b> when the full range of <code>int64</code>/<code>float64</code> isn't needed — <code>pd.to_numeric(col, downcast='integer')</code>.</li>
        <li><b>Read only what you need</b> — <code>pd.read_csv(path, usecols=[...], dtype={...})</code> is dramatically faster than reading everything and dropping columns after.</li>
      </ul>
      <pre class="code"># quick before/after check
%timeit df['y'] = df['x'].apply(lambda v: v * 2)
%timeit df['y'] = df['x'] * 2</pre>
    `
  },
  {
    id: 'doc-hyperparam-tuning',
    group: 'tricks',
    title: 'Hyperparameter tuning without wasting a week of compute',
    tags: ['hyperparameters', 'tuning'],
    body: `
      <p>Grid search over every combination scales terribly — 5 parameters with 5 values each is already 3,125 runs. Most of that compute buys you almost nothing.</p>
      <h4>A saner order</h4>
      <ol>
        <li><b>Coarse random search first</b> — random search finds good regions faster than grid search because it doesn't waste runs varying unimportant parameters exhaustively.</li>
        <li><b>Identify which parameters actually move the metric</b> — often 1–2 of them matter far more than the rest.</li>
        <li><b>Narrow the range and search again</b> around the promising region, ignoring parameters that showed little effect.</li>
        <li><b>Reach for Bayesian optimization / Optuna</b> only once you understand the rough landscape — it's most useful for squeezing out the last bit, not for the first exploration pass.</li>
      </ol>
      <pre class="code">import optuna

def objective(trial):
    lr = trial.suggest_float('lr', 1e-4, 1e-1, log=True)
    depth = trial.suggest_int('max_depth', 3, 10)
    # train + return validation score
    return val_score

study = optuna.create_study(direction='maximize')
study.optimize(objective, n_trials=40)</pre>
    `
  },
  {
    id: 'doc-model-eval-beyond-accuracy',
    group: 'tricks',
    title: 'Model evaluation beyond a single accuracy number',
    tags: ['evaluation', 'metrics'],
    body: `
      <p>A single scalar metric is a compression of a lot of information — sometimes a dangerous one. Before trusting it, look at how the model behaves, not just its score.</p>
      <ul>
        <li><b>Calibration</b> — for probabilistic predictions, do predicted probabilities actually match observed frequencies? A model that says "70% confident" should be right about 70% of the time it says that.</li>
        <li><b>Slice-level performance</b> — check the metric within important subgroups (by segment, time period, region), not just in aggregate; a model can be great on average and terrible on a subgroup that matters.</li>
        <li><b>Stability across seeds</b> — retrain with a couple of different random seeds; if the metric swings wildly, your evaluation set may be too small to trust a single number.</li>
        <li><b>Compare against the baseline, always</b> — see the "always build a baseline first" article; a metric in isolation is unranked.</li>
      </ul>
    `
  },
  {
    id: 'doc-feature-store-basics',
    group: 'tricks',
    title: 'Feature store basics: why "the same feature computed twice" is a real bug',
    tags: ['feature-engineering', 'mlops'],
    body: `
      <p>A common production bug: the feature used at training time (computed in a notebook, on historical data) is subtly different from the feature computed at serving time (computed live, on a slightly different pipeline). This is called training-serving skew, and it's invisible until predictions in production look wrong for no obvious reason.</p>
      <h4>How to avoid it even without a real feature store</h4>
      <ul>
        <li>Write feature computation as a single shared function/module, imported by both the training pipeline and the serving code — never reimplemented twice.</li>
        <li>Log the actual feature values used for every production prediction, so you can compare them against what a from-scratch recomputation would produce.</li>
        <li>Be explicit about point-in-time correctness: a feature like "customer's average order value" must only use orders <i>before</i> the prediction timestamp, both in training and serving.</li>
      </ul>
      <p>A real feature store (Feast, Tecton, or a cloud-native equivalent) formalizes this, but the underlying discipline — one definition, one source of truth, point-in-time correctness — is what actually prevents the bug, tooling or not.</p>
    `
  },
];
