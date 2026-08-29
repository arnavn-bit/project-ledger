// ---------------------------------------------------------------------------
// Exercise Room engine
//
// Every project/hackathon gets a short Python coding exercise, matched to its
// category. Code runs for real in the browser via Pyodide (Python compiled to
// WebAssembly — https://pyodide.org), so this works on plain static hosting
// with no backend, no API key, and no server cost.
//
// EXERCISES is keyed by template id. Each template has:
//   - prompt: what to build
//   - starter: starter code shown in the editor
//   - hidden test code: appended after the user's code, calls their function
//     against fixed inputs and prints RESULT:<json> which we parse and check.
//
// To add a new exercise template: copy a block, change the key, prompt,
// starter, and the check() function. Then reference its key from a project
// (pickExerciseTemplate) or a hackathon's exerciseTemplate field.
// ---------------------------------------------------------------------------

const EXERCISES = {
  "ds-a": {
    category: "data-science",
    title: "clean_and_summarize(data)",
    prompt: "Write clean_and_summarize(data) where data is a list of numbers that may contain None. Return a tuple (mean, count) using only the non-None values. Round mean to 2 decimals.",
    starter: `def clean_and_summarize(data):
    # data: list of numbers, some entries may be None
    # return (mean, count) of the non-None values, mean rounded to 2 decimals
    pass
`,
    testCode: `
result = clean_and_summarize([12, None, 8, 19, None, 25])
print("RESULT:" + str(result))
`,
    check: (out) => {
      const m = out.match(/RESULT:\(([\d.]+),\s*(\d+)\)/);
      if (!m) return { pass: false, msg: "Couldn't find a (mean, count) tuple in the output." };
      const mean = parseFloat(m[1]), count = parseInt(m[2]);
      const pass = Math.abs(mean - 16.0) < 0.01 && count === 4;
      return { pass, msg: pass ? "mean=16.0, count=4 — correct." : `Got mean=${mean}, count=${count}, expected mean=16.0, count=4.` };
    }
  },
  "ds-b": {
    category: "data-science",
    title: "top_category(counts)",
    prompt: "Write top_category(counts) where counts is a dict mapping category name -> count. Return the category name with the highest count.",
    starter: `def top_category(counts):
    # counts: dict like {"Action": 80, "Drama": 150, "Comedy": 60}
    # return the key with the largest value
    pass
`,
    testCode: `
result = top_category({"Action": 80, "Drama": 150, "Comedy": 60})
print("RESULT:" + str(result))
`,
    check: (out) => {
      const pass = /RESULT:Drama/.test(out);
      return { pass, msg: pass ? "'Drama' — correct." : "Expected 'Drama' (highest count, 150)." };
    }
  },
  "ml-a": {
    category: "machine-learning",
    title: "accuracy(y_true, y_pred)",
    prompt: "Write accuracy(y_true, y_pred) — two equal-length lists of 0/1 labels. Return the fraction of matching entries, as a float.",
    starter: `def accuracy(y_true, y_pred):
    # both args are lists of 0/1, same length
    # return fraction correct as a float
    pass
`,
    testCode: `
result = accuracy([1,0,1,1,0], [1,0,0,1,0])
print("RESULT:" + str(result))
`,
    check: (out) => {
      const m = out.match(/RESULT:([\d.]+)/);
      if (!m) return { pass: false, msg: "Couldn't find a numeric result." };
      const val = parseFloat(m[1]);
      const pass = Math.abs(val - 0.8) < 0.001;
      return { pass, msg: pass ? "0.8 — correct." : `Got ${val}, expected 0.8 (4 of 5 match).` };
    }
  },
  "ml-b": {
    category: "machine-learning",
    title: "normalize(values)",
    prompt: "Write normalize(values) — min-max scale a list of numbers to the range [0, 1]. Round each output to 3 decimals. Return a list.",
    starter: `def normalize(values):
    # min-max scale to [0, 1], round each value to 3 decimals
    # return a list
    pass
`,
    testCode: `
result = normalize([10, 20, 30])
print("RESULT:" + str(result))
`,
    check: (out) => {
      const pass = /RESULT:\[0\.0,\s*0\.5,\s*1\.0\]/.test(out);
      return { pass, msg: pass ? "[0.0, 0.5, 1.0] — correct." : "Expected [0.0, 0.5, 1.0]." };
    }
  },
  "dl-a": {
    category: "deep-learning",
    title: "relu(values)",
    prompt: "Write relu(values) — apply the ReLU function (max(0, x)) elementwise to a list of numbers. Return a list.",
    starter: `def relu(values):
    # apply max(0, x) to every element
    # return a list
    pass
`,
    testCode: `
result = relu([-2, -0.5, 0, 1, 3])
print("RESULT:" + str(result))
`,
    check: (out) => {
      const pass = /RESULT:\[0,\s*0,\s*0,\s*1,\s*3\]/.test(out) || /RESULT:\[0\.0,\s*0\.0,\s*0\.0,\s*1(\.0)?,\s*3(\.0)?\]/.test(out) || /RESULT:\[0,\s*0,\s*0,\s*1(\.0)?,\s*3(\.0)?\]/.test(out);
      return { pass, msg: pass ? "[0, 0, 0, 1, 3] — correct." : "Expected [0, 0, 0, 1, 3] (negatives clipped to 0)." };
    }
  },
  "dl-b": {
    category: "deep-learning",
    title: "predict_class(logits)",
    prompt: "Write predict_class(logits) — given a list of raw scores, return the index of the highest value (the predicted class).",
    starter: `def predict_class(logits):
    # return the index of the max value in the list
    pass
`,
    testCode: `
result = predict_class([0.2, 0.5, 0.1, 0.9, 0.3])
print("RESULT:" + str(result))
`,
    check: (out) => {
      const pass = /RESULT:3\b/.test(out);
      return { pass, msg: pass ? "3 — correct." : "Expected 3 (index of 0.9, the max value)." };
    }
  },
  "qf-a": {
    category: "quant-finance",
    title: "moving_average(prices, window)",
    prompt: "Write moving_average(prices, window) — return the list of simple moving averages for the given window size. Output length = len(prices) - window + 1.",
    starter: `def moving_average(prices, window):
    # simple moving average, output length = len(prices) - window + 1
    # return a list of floats
    pass
`,
    testCode: `
result = moving_average([10, 12, 14, 16, 18, 20], 3)
print("RESULT:" + str(result))
`,
    check: (out) => {
      const pass = /RESULT:\[12\.0,\s*14\.0,\s*16\.0,\s*18\.0\]/.test(out);
      return { pass, msg: pass ? "[12.0, 14.0, 16.0, 18.0] — correct." : "Expected [12.0, 14.0, 16.0, 18.0]." };
    }
  },
  "qf-b": {
    category: "quant-finance",
    title: "daily_returns(prices)",
    prompt: "Write daily_returns(prices) — return the list of daily percentage returns as fractions (not %), each rounded to 4 decimals. Output length = len(prices) - 1.",
    starter: `def daily_returns(prices):
    # (today - yesterday) / yesterday, rounded to 4 decimals
    # return a list of floats
    pass
`,
    testCode: `
result = daily_returns([100, 102, 101, 105])
print("RESULT:" + str(result))
`,
    check: (out) => {
      const m = out.match(/RESULT:\[([^\]]+)\]/);
      if (!m) return { pass: false, msg: "Couldn't find a list result." };
      const vals = m[1].split(',').map(s => parseFloat(s.trim()));
      const expected = [0.02, -0.0098, 0.0396];
      const pass = vals.length === 3 && vals.every((v, i) => Math.abs(v - expected[i]) < 0.001);
      return { pass, msg: pass ? "[0.02, -0.0098, 0.0396] — correct." : `Expected roughly [0.02, -0.0098, 0.0396], got [${vals.join(', ')}].` };
    }
  }
};

// Deterministically pick a template for a project so the same project always
// gets the same exercise, while spreading the two variants per category.
function pickExerciseTemplate(project) {
  const map = {
    "data-science": ["ds-a", "ds-b"],
    "machine-learning": ["ml-a", "ml-b"],
    "deep-learning": ["dl-a", "dl-b"],
    "quant-finance": ["qf-a", "qf-b"]
  };
  const options = map[project.category] || map["data-science"];
  let hash = 0;
  for (let i = 0; i < project.id.length; i++) hash = (hash * 31 + project.id.charCodeAt(i)) >>> 0;
  return options[hash % options.length];
}

// ---------------------------------------------------------------------------
// Pyodide runner — loaded lazily on first "Run" click, not on page load,
// so the ~6MB runtime never blocks the catalog from rendering instantly.
// ---------------------------------------------------------------------------
let pyodideInstance = null;
let pyodideLoading = null;

function loadPyodideOnce(onStatus) {
  if (pyodideInstance) return Promise.resolve(pyodideInstance);
  if (pyodideLoading) return pyodideLoading;
  onStatus && onStatus("Booting Python runtime (first run only, ~6MB)…");
  pyodideLoading = loadPyodide().then(inst => {
    pyodideInstance = inst;
    return inst;
  });
  return pyodideLoading;
}

// Runs user code + a template's hidden test code, returns {pass, msg, raw, error}
async function runExercise(templateKey, userCode, onStatus) {
  const tpl = EXERCISES[templateKey];
  if (!tpl) return { pass: false, msg: "Unknown exercise template.", error: true };
  try {
    const py = await loadPyodideOnce(onStatus);
    onStatus && onStatus("Running your code…");
    let stdout = "";
    py.setStdout({ batched: (s) => { stdout += s + "\n"; } });
    py.setStderr({ batched: (s) => { stdout += s + "\n"; } });
    const fullCode = userCode + "\n" + tpl.testCode;
    await py.runPythonAsync(fullCode);
    const result = tpl.check(stdout);
    return { pass: result.pass, msg: result.msg, raw: stdout };
  } catch (err) {
    return { pass: false, msg: "Error: " + (err && err.message ? err.message.split('\n').slice(-2).join(' ') : String(err)), error: true };
  }
}
