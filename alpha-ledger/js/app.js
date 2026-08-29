(function () {
  const CATS = [
    { key: 'data-science', code: 'DS', name: 'Data Science' },
    { key: 'machine-learning', code: 'ML', name: 'Machine Learning' },
    { key: 'deep-learning', code: 'DL', name: 'Deep Learning' },
    { key: 'quant-finance', code: 'QF', name: 'Quant Finance' },
    { key: 'industry-projects', code: 'IP', name: 'Industry Projects' },
  ];

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5.5" width="20" height="13" rx="4"/><path d="M10.5 9.3v5.4l4.8-2.7z" fill="currentColor" stroke="none"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4.5C4 3.67 4.67 3 5.5 3H19a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6.5a2.5 2.5 0 0 0 0 0"/><path d="M4 4.5v14A2.5 2.5 0 0 0 6.5 21H20"/></svg>',
    paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8M8 9h3"/></svg>',
    kaggle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 3v18"/><path d="M5 13l7-6"/><path d="M5 13l8 8"/><circle cx="17.5" cy="6.5" r="0"/></svg>'
  };

  // ---- Tag a deterministic ~25% of projects as collaborative, across every
  // category and difficulty, with a suggested team size and role split so
  // the Team Dashboard has something concrete to assign. ----
  const ROLE_SETS = {
    'data-science': ['Data Engineer', 'Analyst', 'Viz & Storytelling'],
    'machine-learning': ['ML Engineer', 'Feature Prep', 'Evaluation & Reporting'],
    'deep-learning': ['Model / Architecture', 'Training & Tuning', 'Infra & Logging'],
    'quant-finance': ['Signal Research', 'Backtest Engineer', 'Risk & Reporting'],
    'industry-projects': ['Systems / Pipeline', 'Modeling', 'Product / Dashboard'],
  };
  PROJECTS.forEach((p, i) => {
    if (i % 4 === 1) {
      p.collaborative = true;
      const roles = ROLE_SETS[p.category] || ROLE_SETS['data-science'];
      if (p.difficulty === 'Beginner') { p.teamSize = '2'; p.roles = roles.slice(0, 2); }
      else if (p.difficulty === 'Intermediate') { p.teamSize = '2-3'; p.roles = roles.slice(0, 3); }
      else { p.teamSize = '3-4'; p.roles = roles; }
    }
  });

  // Hackathons are all collaborative by nature — give each one a role split too.
  HACKATHONS.forEach(h => { h.roles = ROLE_SETS[h.categories[0]] || ROLE_SETS['data-science']; });

  let state = { view: 'projects', category: 'all', difficulty: 'All', search: '', visible: 24, collabOnly: false };

  // ---------------------------------------------------------------- progress
  const STORE_KEY = 'alphaLedgerProgress_v1';
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) { try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) { /* storage unavailable — progress just won't persist this session */ } }
  let progress = loadProgress();

  function getEntry(id) {
    if (!progress[id]) progress[id] = { checklist: [], solved: false };
    return progress[id];
  }
  function setChecklist(id, idx, val) {
    const e = getEntry(id);
    e.checklist[idx] = val;
    saveProgress(progress);
  }
  function markSolved(id) {
    const e = getEntry(id);
    e.solved = true;
    saveProgress(progress);
  }

  // ---------------------------------------------------------------- team board
  // A "team board" is just: a team name, a roster of {name, role}, and a list
  // of joined project/hackathon ids. It lives in localStorage. "Shareable"
  // means the whole thing can be packed into a URL param (?board=<base64>) —
  // no backend, no accounts, but a teammate who opens that link sees the same
  // board and can choose to load it into their own browser.
  const BOARD_KEY = 'alphaLedgerTeamBoard_v1';
  function loadBoard() {
    try {
      return JSON.parse(localStorage.getItem(BOARD_KEY)) || { teamName: 'My Team', members: [], items: [] };
    } catch (e) { return { teamName: 'My Team', members: [], items: [] }; }
  }
  function saveBoard(b) { try { localStorage.setItem(BOARD_KEY, JSON.stringify(b)); } catch (e) { /* storage unavailable — board just won't persist this session */ } }
  let board = loadBoard();

  function isOnBoard(id) { return board.items.some(it => it.id === id); }
  function toggleBoardItem(id, kind) {
    const idx = board.items.findIndex(it => it.id === id);
    if (idx >= 0) board.items.splice(idx, 1);
    else board.items.push({ id, kind });
    saveBoard(board);
  }
  function removeBoardItem(id) {
    board.items = board.items.filter(it => it.id !== id);
    saveBoard(board);
  }
  function addMember(name, role) {
    if (!name.trim()) return;
    board.members.push({ name: name.trim(), role: role || 'Contributor' });
    saveBoard(board);
  }
  function removeMember(idx) {
    board.members.splice(idx, 1);
    saveBoard(board);
  }

  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode('0x' + p1)));
  }
  function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
  }
  function boardShareUrl() {
    const packed = JSON.stringify({ n: board.teamName, m: board.members, i: board.items });
    return location.origin + location.pathname + '?board=' + encodeURIComponent(b64EncodeUnicode(packed));
  }
  function parseBoardParam(raw) {
    try {
      const obj = JSON.parse(b64DecodeUnicode(decodeURIComponent(raw)));
      if (!obj || !Array.isArray(obj.i)) return null;
      return { teamName: obj.n || 'Shared Team', members: obj.m || [], items: obj.i || [] };
    } catch (e) { return null; }
  }

  function kaggleFor(p) {
    if (p.kaggle) return { name: p.kaggle.name, url: p.kaggle.url, matched: true };
    return { name: 'Search Kaggle for a dataset', url: `https://www.kaggle.com/search?q=${encodeURIComponent(p.title)}`, matched: false };
  }

  function counts() {
    const c = {};
    CATS.forEach(cat => c[cat.key] = PROJECTS.filter(p => p.category === cat.key).length);
    return c;
  }
  const catCounts = counts();

  function buildTicker() {
    const parts = CATS.map(c => `<span><b>${c.code}</b><em>${c.name.toUpperCase()} · ${catCounts[c.key]} ENTRIES</em></span>`).join('')
      + `<span><b>HK</b><em>HACKATHONS · ${HACKATHONS.length} LIVE</em></span>`;
    document.getElementById('tickerTrack').innerHTML = parts + parts;
  }

  function buildCatGrid() {
    const el = document.getElementById('catGrid');
    let html = '';
    CATS.forEach(c => {
      html += `<button class="cat-tile" data-cat="${c.key}">
        <div class="code">${c.code}-001 &ndash; ${c.code}-${String(catCounts[c.key]).padStart(3, '0')}</div>
        <div class="name">${c.name}</div>
        <div class="count">${catCounts[c.key]} entries</div>
        <div class="bar"><i></i></div>
      </button>`;
    });
    el.innerHTML = html;
    el.addEventListener('click', e => {
      const btn = e.target.closest('.cat-tile');
      if (!btn) return;
      const cat = btn.dataset.cat;
      state.category = (state.category === cat) ? 'all' : cat;
      state.visible = 24;
      render();
    });
  }

  function buildDiffChips() {
    const el = document.getElementById('diffChips');
    el.addEventListener('click', e => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      if (btn.dataset.diff !== undefined) {
        state.difficulty = btn.dataset.diff;
      }
      state.visible = 24;
      render();
    });
    const collabBtn = document.getElementById('collabToggle');
    collabBtn.addEventListener('click', () => {
      state.collabOnly = !state.collabOnly;
      state.visible = 24;
      render();
    });
  }

  function buildSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', () => {
      state.search = input.value.trim().toLowerCase();
      state.visible = 24;
      render();
    });
  }

  function switchView(view) {
    state.view = view;
    state.visible = 24;
    document.querySelectorAll('.view-tab').forEach(b => b.classList.toggle('active', b.dataset.view === view));
    document.getElementById('catalog').style.display = view === 'projects' ? '' : 'none';
    render();
  }

  function buildViewToggle() {
    document.querySelectorAll('.view-tab').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });
    const navHk = document.querySelector('a[href="#hackathons"]');
    if (navHk) navHk.addEventListener('click', () => switchView('hackathons'));
  }

  function filtered() {
    return PROJECTS.filter(p => {
      if (state.category !== 'all' && p.category !== state.category) return false;
      if (state.difficulty !== 'All' && p.difficulty !== state.difficulty) return false;
      if (state.collabOnly && !p.collaborative) return false;
      if (state.search && !(p.title.toLowerCase().includes(state.search) || p.blurb.toLowerCase().includes(state.search))) return false;
      return true;
    });
  }

  function progressBadge(p) {
    const e = progress[p.id];
    if (!e) return '';
    if (e.solved) return `<span class="pbadge solved">✓ exercise solved</span>`;
    if (e.checklist && e.checklist.some(Boolean)) return `<span class="pbadge started">in progress</span>`;
    return '';
  }

  function cardHtml(p) {
    const kg = kaggleFor(p);
    const topics = (p.topics || []).map(t => `<span>${t}</span>`).join('');
    const e = getEntry(p.id);
    const checkboxes = p.checklist.map((step, idx) =>
      `<label><input type="checkbox" data-idx="${idx}" ${e.checklist[idx] ? 'checked' : ''}><span>${step}</span></label>`).join('');
    const doneCount = e.checklist.filter(Boolean).length;
    return `<article class="card" data-id="${p.id}">
      <div class="card-top">
        <span class="pid">${p.id}</span>
        <span class="diff" data-d="${p.difficulty}"><span class="dot"></span>${p.difficulty}</span>
      </div>
      ${p.collaborative ? `<div class="collab-tag">⇄ collaborative · team of ${p.teamSize}</div>` : ''}
      <h3 class="card-title-btn" data-open="${p.id}">${p.title}</h3>
      <p class="blurb">${p.blurb}</p>
      ${progressBadge(p)}
      <div class="topic-chips">${topics}</div>
      <div class="res-list">
        <a class="res-row" href="${p.github.url}" target="_blank" rel="noopener">
          ${ICONS.github}
          <span class="res-meta"><span class="res-kind">GitHub</span><span class="res-name">${p.github.name}</span></span>
        </a>
        <a class="res-row" href="${p.youtube.url}" target="_blank" rel="noopener">
          ${ICONS.youtube}
          <span class="res-meta"><span class="res-kind">YouTube</span><span class="res-name">${p.youtube.name}</span></span>
        </a>
        <a class="res-row" href="https://www.google.com/search?q=${encodeURIComponent(p.book.title + ' ' + p.book.author + ' book')}" target="_blank" rel="noopener">
          ${ICONS.book}
          <span class="res-meta"><span class="res-kind">Book</span><span class="res-name">${p.book.title}</span></span>
        </a>
        <a class="res-row" href="${p.paper.url}" target="_blank" rel="noopener">
          ${ICONS.paper}
          <span class="res-meta"><span class="res-kind">Paper</span><span class="res-name">${p.paper.title}</span></span>
        </a>
        <a class="res-row" href="${kg.url}" target="_blank" rel="noopener">
          ${ICONS.kaggle}
          <span class="res-meta"><span class="res-kind">Kaggle</span><span class="res-name${kg.matched ? '' : ' dim'}">${kg.name}</span></span>
        </a>
      </div>
      <details class="checklist-block">
        <summary><span>Build checklist</span><span class="progress">${doneCount}/${p.checklist.length}</span></summary>
        <div class="checklist-items">${checkboxes}</div>
      </details>
      <button class="open-btn" data-open="${p.id}">Open mini-tutorial &amp; exercise room →</button>
      ${p.collaborative ? `<button class="board-toggle${isOnBoard(p.id) ? ' on' : ''}" data-board-toggle="${p.id}" data-board-kind="project">${isOnBoard(p.id) ? '✓ On your team board — remove' : '+ Add to team board'}</button>` : ''}
    </article>`;
  }

  function hackathonCardHtml(h) {
    return `<article class="card hk-card" data-hk="${h.id}">
      <div class="card-top">
        <span class="pid">${h.id}</span>
        <span class="diff" data-d="${h.difficulty}"><span class="dot"></span>${h.difficulty}</span>
      </div>
      <div class="collab-tag">⇄ team of ${h.teamSize} · ${h.duration}</div>
      <h3 class="card-title-btn" data-openhk="${h.id}">${h.title}</h3>
      <p class="blurb">${h.theme}</p>
      <div class="topic-chips">${h.categories.map(c => `<span>${c}</span>`).join('')}</div>
      <button class="open-btn" data-openhk="${h.id}">View brief &amp; milestones →</button>
      <button class="board-toggle${isOnBoard(h.id) ? ' on' : ''}" data-board-toggle="${h.id}" data-board-kind="hackathon">${isOnBoard(h.id) ? '✓ On your team board — remove' : '+ Add to team board'}</button>
    </article>`;
  }

  function render() {
    document.querySelectorAll('.cat-tile').forEach(t => t.classList.toggle('active', t.dataset.cat === state.category));
    document.querySelectorAll('.chip[data-diff]').forEach(c => c.classList.toggle('active', c.dataset.diff === state.difficulty));
    document.getElementById('collabToggle').classList.toggle('active', state.collabOnly);

    if (state.view === 'hackathons') {
      document.getElementById('resultLine').innerHTML = `Showing <b>${HACKATHONS.length}</b> hackathons`;
      document.getElementById('grid').innerHTML = HACKATHONS.map(hackathonCardHtml).join('');
      document.getElementById('loadMoreBtn').style.display = 'none';
      updateBoardToggleButtons();
      return;
    }
    document.getElementById('loadMoreBtn').style.display = '';

    const list = filtered();
    const shown = list.slice(0, state.visible);
    const grid = document.getElementById('grid');
    grid.innerHTML = shown.length
      ? shown.map(cardHtml).join('')
      : `<div class="empty-state">No entries match that filter. &gt; try clearing the search or switching level.</div>`;

    document.getElementById('resultLine').innerHTML =
      `Showing <b>${shown.length}</b> of <b>${list.length}</b> matching entries &nbsp;(<b>${PROJECTS.length}</b> total in the ledger)`;

    const btn = document.getElementById('loadMoreBtn');
    if (state.visible >= list.length) {
      btn.textContent = 'All matching entries loaded';
      btn.disabled = true;
    } else {
      btn.textContent = `Load 24 more entries`;
      btn.disabled = false;
    }
    updateBoardToggleButtons();
  }

  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    state.visible += 24;
    render();
  });

  document.getElementById('grid').addEventListener('click', e => {
    const boardBtn = e.target.closest('[data-board-toggle]');
    if (boardBtn) {
      toggleBoardItem(boardBtn.dataset.boardToggle, boardBtn.dataset.boardKind);
      updateBoardToggleButtons();
      if (document.getElementById('dashGrid')) buildDashboard();
      return;
    }
  });

  document.getElementById('grid').addEventListener('change', e => {
    const box = e.target;
    if (box.tagName !== 'INPUT' || box.type !== 'checkbox') return;
    const card = box.closest('.card');
    const id = card.dataset.id;
    const idx = parseInt(box.dataset.idx);
    setChecklist(id, idx, box.checked);
    const block = box.closest('.checklist-block');
    const items = block.querySelectorAll('input[type="checkbox"]');
    const done = block.querySelectorAll('input[type="checkbox"]:checked').length;
    block.querySelector('.progress').textContent = `${done}/${items.length}`;
  });

  document.getElementById('grid').addEventListener('click', e => {
    const openBtn = e.target.closest('[data-open]');
    if (openBtn) { openModal(openBtn.dataset.open); return; }
    const openHk = e.target.closest('[data-openhk]');
    if (openHk) { openHackathonModal(openHk.dataset.openhk); return; }
  });

  function buildHeroStats() {
    const repos = new Set(PROJECTS.map(p => p.github.url));
    const channels = new Set(PROJECTS.map(p => p.youtube.url));
    const books = new Set(PROJECTS.map(p => p.book.title));
    const papers = new Set(PROJECTS.map(p => p.paper.url));
    const kaggleDirect = PROJECTS.filter(p => p.kaggle).length;
    const solvedCount = Object.values(progress).filter(e => e.solved).length;
    const stats = [
      [PROJECTS.length, 'Project entries'],
      [HACKATHONS.length, 'Hackathons'],
      [repos.size, 'Reference repos'],
      [channels.size, 'Course channels'],
      [papers.size, 'Papers cited'],
      [solvedCount, 'Exercises you\u2019ve solved'],
    ];
    document.getElementById('heroStats').innerHTML = stats.map(([num, label]) =>
      `<div><div class="num">${num}</div><div class="label">${label}</div></div>`).join('');
  }

  function buildLibrary() {
    const repos = {}, channels = {}, books = {}, papers = {};
    PROJECTS.forEach(p => {
      repos[p.github.url] = p.github;
      channels[p.youtube.url] = p.youtube;
      books[p.book.title] = p.book;
      papers[p.paper.url] = p.paper;
    });
    const repoList = Object.values(repos).sort((a, b) => a.name.localeCompare(b.name));
    const chanList = Object.values(channels).sort((a, b) => a.name.localeCompare(b.name));
    const bookList = Object.values(books).sort((a, b) => a.title.localeCompare(b.title));
    const paperList = Object.values(papers).sort((a, b) => a.title.localeCompare(b.title));

    document.getElementById('libRepos').innerHTML = repoList.map(r =>
      `<li><a href="${r.url}" target="_blank" rel="noopener">${r.name}</a></li>`).join('');
    document.getElementById('libChannels').innerHTML = chanList.map(c =>
      `<li><a href="${c.url}" target="_blank" rel="noopener">${c.name}</a></li>`).join('');
    document.getElementById('libBooks').innerHTML = bookList.map(b =>
      `<li><a href="https://www.google.com/search?q=${encodeURIComponent(b.title + ' ' + b.author + ' book')}" target="_blank" rel="noopener">${b.title}<span class="sub">${b.author}</span></a></li>`).join('');
    document.getElementById('libPapers').innerHTML = paperList.map(p =>
      `<li><a href="${p.url}" target="_blank" rel="noopener">${p.title}<span class="sub">${p.authors}</span></a></li>`).join('');
  }

  // -------------------------------------------------------------- team dashboard
  function findBoardTarget(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (p) return { title: p.title, kind: 'project', meta: `${p.id} · team of ${p.teamSize}`, ref: p };
    const h = HACKATHONS.find(x => x.id === id);
    if (h) return { title: h.title, kind: 'hackathon', meta: `${h.id} · team of ${h.teamSize} · ${h.duration}`, ref: h };
    return null;
  }

  function dashItemHtml(item) {
    const t = findBoardTarget(item.id);
    if (!t) return '';
    let progressHtml = '';
    if (t.kind === 'project') {
      const e = getEntry(t.ref.id);
      const done = e.checklist.filter(Boolean).length;
      const total = t.ref.checklist.length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      progressHtml = `<div class="di-progress"><div class="di-bar"><i style="width:${pct}%"></i></div><div class="di-pct">${done}/${total} steps</div></div>`;
    } else {
      progressHtml = `<div class="di-progress"><div class="di-pct" style="text-align:right;">${t.ref.milestones.length} milestones</div></div>`;
    }
    return `<div class="dash-item" data-id="${item.id}">
      <div class="di-main">
        <div class="di-title" data-open-board="${item.id}" data-kind="${t.kind}">${t.title}</div>
        <div class="di-meta">${t.meta}</div>
      </div>
      ${progressHtml}
      <button class="dash-remove" data-remove-board="${item.id}" title="Remove from board">✕</button>
    </div>`;
  }

  function buildDashboard() {
    const grid = document.getElementById('dashGrid');
    const validItems = board.items.filter(it => findBoardTarget(it.id));
    const projItems = validItems.filter(it => it.kind === 'project');
    let totalDone = 0, totalSteps = 0;
    projItems.forEach(it => {
      const t = findBoardTarget(it.id);
      const e = getEntry(t.ref.id);
      totalDone += e.checklist.filter(Boolean).length;
      totalSteps += t.ref.checklist.length;
    });
    const overallPct = totalSteps ? Math.round((totalDone / totalSteps) * 100) : 0;

    const leftHtml = `
      <div class="dash-panel">
        <h4>Your team board · ${validItems.length} item${validItems.length === 1 ? '' : 's'}</h4>
        <div class="dash-aggregate">
          <div><div class="num">${validItems.length}</div><div class="label">Joined items</div></div>
          <div><div class="num">${board.members.length}</div><div class="label">Team members</div></div>
          <div><div class="num">${overallPct}%</div><div class="label">Combined checklist progress</div></div>
        </div>
        ${validItems.length ? validItems.map(dashItemHtml).join('') : `<div class="dash-empty">No items yet. Open any collaborative project (green ⇄ tag) or a hackathon and click "Add to team board".</div>`}
      </div>`;

    const rosterRows = board.members.map((m, idx) =>
      `<div class="roster-row"><span class="r-name">${m.name}</span><span class="r-role">${m.role}</span><button data-remove-member="${idx}">✕</button></div>`).join('');
    const allRoles = Array.from(new Set(Object.values(ROLE_SETS).flat()));
    const rightHtml = `
      <div class="dash-panel">
        <h4>Team roster</h4>
        <div class="roster-list" id="rosterList">${rosterRows || `<div class="dash-empty">No teammates added yet.</div>`}</div>
        <div class="roster-form">
          <input type="text" id="memberName" placeholder="Teammate name">
          <select id="memberRole">${allRoles.map(r => `<option value="${r}">${r}</option>`).join('')}</select>
          <button id="addMemberBtn">Add</button>
        </div>
        <button class="dash-share" id="dashShareBtn">Copy shareable dashboard link</button>
      </div>`;

    grid.innerHTML = leftHtml + rightHtml;

    document.getElementById('addMemberBtn').addEventListener('click', () => {
      const nameEl = document.getElementById('memberName');
      addMember(nameEl.value, document.getElementById('memberRole').value);
      nameEl.value = '';
      buildDashboard();
    });
    grid.querySelectorAll('[data-remove-member]').forEach(btn => btn.addEventListener('click', () => {
      removeMember(parseInt(btn.dataset.removeMember));
      buildDashboard();
    }));
    grid.querySelectorAll('[data-remove-board]').forEach(btn => btn.addEventListener('click', () => {
      removeBoardItem(btn.dataset.removeBoard);
      buildDashboard();
      updateBoardToggleButtons();
    }));
    grid.querySelectorAll('[data-open-board]').forEach(el => el.addEventListener('click', () => {
      if (el.dataset.kind === 'project') openModal(el.dataset.openBoard);
      else openHackathonModal(el.dataset.openBoard);
    }));
    const shareBtn = document.getElementById('dashShareBtn');
    shareBtn.addEventListener('click', () => {
      const url = boardShareUrl();
      navigator.clipboard && navigator.clipboard.writeText(url);
      shareBtn.textContent = 'Link copied — send it to your team';
      setTimeout(() => { shareBtn.textContent = 'Copy shareable dashboard link'; }, 2500);
    });
  }

  function buildBoardBanner() {
    const params = new URLSearchParams(location.search);
    const raw = params.get('board');
    const el = document.getElementById('boardBanner');
    if (!raw) { el.innerHTML = ''; return; }
    const incoming = parseBoardParam(raw);
    if (!incoming) { el.innerHTML = ''; return; }
    el.innerHTML = `<div class="board-banner">
      <span>A teammate shared <b>"${incoming.n !== undefined ? incoming.n : incoming.teamName}"</b> — ${incoming.items.length} item(s), ${incoming.members.length} member(s). Load it into this browser?</span>
      <div class="banner-actions">
        <button class="banner-load" id="loadBoardBtn">Load shared board</button>
        <button class="banner-dismiss" id="dismissBoardBtn">Dismiss</button>
      </div>
    </div>`;
    document.getElementById('loadBoardBtn').addEventListener('click', () => {
      board = { teamName: incoming.teamName, members: incoming.members, items: incoming.items };
      saveBoard(board);
      buildDashboard();
      updateBoardToggleButtons();
      el.innerHTML = `<div class="board-banner"><span>Board loaded. It's now saved in this browser too.</span></div>`;
    });
    document.getElementById('dismissBoardBtn').addEventListener('click', () => { el.innerHTML = ''; });
  }

  function updateBoardToggleButtons() {
    document.querySelectorAll('[data-board-toggle]').forEach(btn => {
      const on = isOnBoard(btn.dataset.boardToggle);
      btn.classList.toggle('on', on);
      btn.textContent = on ? '✓ On your team board — remove' : '+ Add to team board';
    });
  }

  // -------------------------------------------------------------- docs & tutorials
  let activeDocId = null;
  function buildDocsNav() {
    const nav = document.getElementById('docsNav');
    let html = '';
    DOC_GROUPS.forEach(g => {
      const items = TUTORIALS.filter(t => t.group === g.key);
      if (!items.length) return;
      html += `<div class="docs-group"><h5>${g.name}</h5><ul>${items.map(t =>
        `<li><button class="doc-link" data-doc="${t.id}">${t.title}</button></li>`).join('')}</ul></div>`;
    });
    nav.innerHTML = html;
    nav.addEventListener('click', e => {
      const btn = e.target.closest('.doc-link');
      if (!btn) return;
      renderDoc(btn.dataset.doc);
    });
  }
  function renderDoc(id) {
    const t = TUTORIALS.find(x => x.id === id);
    if (!t) return;
    activeDocId = id;
    document.querySelectorAll('.doc-link').forEach(b => b.classList.toggle('active', b.dataset.doc === id));
    document.getElementById('docReader').innerHTML = `
      <h3>${t.title}</h3>
      <div class="doc-tags">${t.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <div class="doc-body">${t.body}</div>`;
  }
  function buildDocs() {
    buildDocsNav();
    renderDoc(TUTORIALS[0].id);
  }

  // -------------------------------------------------------------- showcase
  function svgAttr(v) { return String(v); }
  function renderBarChart(chart) {
    const w = 420, h = 220, pad = 30;
    const max = Math.max(...chart.data.map(d => d.value)) * 1.15;
    const barW = (w - pad * 2) / chart.data.length - 8;
    let bars = '';
    chart.data.forEach((d, i) => {
      const x = pad + i * ((w - pad * 2) / chart.data.length) + 4;
      const bh = (d.value / max) * (h - pad * 2);
      const y = h - pad - bh;
      bars += `<rect x="${x}" y="${y}" width="${barW}" height="${bh}" rx="2" fill="var(--gold)"/>
        <text x="${x + barW / 2}" y="${h - pad + 14}" text-anchor="middle" font-size="9" fill="var(--ink-muted)" font-family="var(--mono)">${d.label}</text>
        <text x="${x + barW / 2}" y="${y - 5}" text-anchor="middle" font-size="9.5" fill="var(--ink-text)" font-family="var(--mono)">${(d.value * (d.value <= 1 ? 100 : 1)).toFixed(d.value <= 1 ? 0 : 1)}${d.value <= 1 ? '%' : ''}</text>`;
    });
    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="var(--line-strong)"/>
      ${bars}
    </svg>`;
  }
  function renderLineChart(chart) {
    const w = 420, h = 220, pad = 34;
    const allVals = chart.series.flatMap(s => s.points);
    const max = Math.max(...allVals) * 1.1, min = Math.min(0, Math.min(...allVals) * 0.95);
    const n = chart.series[0].points.length;
    const stepX = (w - pad * 2) / (n - 1);
    function pt(i, v) {
      const x = pad + i * stepX;
      const y = h - pad - ((v - min) / (max - min)) * (h - pad * 2);
      return [x, y];
    }
    let lines = '';
    chart.series.forEach(s => {
      const pts = s.points.map((v, i) => pt(i, v));
      lines += `<polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="${s.color}" stroke-width="2"/>`;
      pts.forEach(([x, y]) => { lines += `<circle cx="${x}" cy="${y}" r="2.3" fill="${s.color}"/>`; });
    });
    const ticks = (chart.xTicks || []).map((t, i) => {
      const [x] = pt(i, min);
      return `<text x="${x}" y="${h - pad + 14}" text-anchor="middle" font-size="9" fill="var(--ink-muted)" font-family="var(--mono)">${t}</text>`;
    }).join('');
    const legend = chart.series.map((s, i) =>
      `<circle cx="${pad + i * 100}" cy="14" r="3.5" fill="${s.color}"/><text x="${pad + i * 100 + 8}" y="18" font-size="9.5" fill="var(--ink-text)" font-family="var(--mono)">${s.name}</text>`).join('');
    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      ${legend}
      <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="var(--line-strong)"/>
      ${lines}${ticks}
    </svg>`;
  }
  function renderScatterChart(chart) {
    const w = 420, h = 220, pad = 34;
    const xs = chart.points.map(p => p[0]), ys = chart.points.map(p => p[1]);
    const max = Math.max(...xs, ...ys) * 1.08, min = Math.min(...xs, ...ys) * 0.9;
    function sx(v) { return pad + ((v - min) / (max - min)) * (w - pad * 2); }
    function sy(v) { return h - pad - ((v - min) / (max - min)) * (h - pad * 2); }
    const dots = chart.points.map(([x, y]) => `<circle cx="${sx(x)}" cy="${sy(y)}" r="3.5" fill="var(--gold)" fill-opacity="0.85"/>`).join('');
    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <line x1="${sx(min)}" y1="${sy(min)}" x2="${sx(max)}" y2="${sy(max)}" stroke="var(--line-strong)" stroke-dasharray="3,3"/>
      <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="var(--line-strong)"/>
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h - pad}" stroke="var(--line-strong)"/>
      ${dots}
    </svg>`;
  }
  function renderTableChart(chart) {
    const head = chart.columns.map(c => `<th>${c}</th>`).join('');
    const rows = chart.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
    return `<table class="plain-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
  }
  function renderShowcaseChart(chart) {
    if (chart.type === 'bar') return renderBarChart(chart);
    if (chart.type === 'line') return renderLineChart(chart);
    if (chart.type === 'scatter') return renderScatterChart(chart);
    if (chart.type === 'table') return renderTableChart(chart);
    return '';
  }

  let showcaseFilterCat = 'all';
  function buildShowcaseFilter() {
    const el = document.getElementById('showcaseFilter');
    const cats = ['all', ...CATS.map(c => c.key)];
    el.innerHTML = cats.map(c => {
      const label = c === 'all' ? 'All categories' : CATS.find(x => x.key === c).name;
      return `<button class="chip${c === showcaseFilterCat ? ' active' : ''}" data-sccat="${c}">${label}</button>`;
    }).join('');
    el.addEventListener('click', e => {
      const btn = e.target.closest('[data-sccat]');
      if (!btn) return;
      showcaseFilterCat = btn.dataset.sccat;
      buildShowcaseFilter();
      buildShowcaseGrid();
    });
  }
  function showcaseCardHtml(s) {
    const linked = PROJECTS.find(p => p.id === s.linkId);
    return `<article class="sc-card">
      <div class="sc-top"><span class="sc-cat">${(CATS.find(c => c.key === s.category) || {}).name || s.category}</span>${linked ? `<span class="sc-cat">${linked.id}</span>` : ''}</div>
      <h3>${s.title}</h3>
      <p class="sc-summary">${s.summary}</p>
      <div class="sc-metrics">${s.metrics.map(m => `<div><div class="num">${m.value}</div><div class="label">${m.label}</div></div>`).join('')}</div>
      <div class="sc-chart">${renderShowcaseChart(s.chart)}</div>
      <div class="sc-takeaway">${s.takeaway}</div>
      <pre class="sc-code">${s.code}</pre>
      ${linked ? `<button class="sc-open" data-open="${linked.id}">Open the full project — build it yourself →</button>` : ''}
    </article>`;
  }
  function buildShowcaseGrid() {
    const grid = document.getElementById('showcaseGrid');
    const items = showcaseFilterCat === 'all' ? SHOWCASE : SHOWCASE.filter(s => s.category === showcaseFilterCat);
    grid.innerHTML = items.map(showcaseCardHtml).join('');
    grid.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.open)));
  }
  function buildShowcase() {
    buildShowcaseFilter();
    buildShowcaseGrid();
  }

  // -------------------------------------------------------------- hackathon leaderboard
  const LB_KEY = 'alphaLedgerLeaderboardSubmissions_v1';
  function loadLbSubmissions() {
    try { return JSON.parse(localStorage.getItem(LB_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveLbSubmissions(s) { try { localStorage.setItem(LB_KEY, JSON.stringify(s)); } catch (e) { /* storage unavailable — submission just won't persist this session */ } }
  let lbSubmissions = loadLbSubmissions();

  function fullLeaderboard(h) {
    const mine = (lbSubmissions[h.id] || []).map(e => ({ ...e, you: true }));
    const combined = [...h.leaderboard.map(e => ({ ...e, you: false })), ...mine];
    combined.sort((a, b) => b.score - a.score);
    return combined;
  }
  function leaderboardHtml(h) {
    const rows = fullLeaderboard(h).map((e, i) =>
      `<tr class="${e.you ? 'lb-you' : ''}"><td class="lb-rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</td><td>${e.team}${e.you ? ' <span style="color:var(--gold-bright); font-family:var(--mono); font-size:10.5px;">· you</span>' : ''}</td><td>${e.score}</td></tr>`).join('');
    return `<table class="lb-table"><thead><tr><th>Rank</th><th>Team</th><th>Score</th></tr></thead><tbody>${rows}</tbody></table>
      <form class="lb-form" id="lbForm">
        <input type="text" name="team" placeholder="Your team name" required maxlength="40">
        <input type="number" name="score" placeholder="Score (0-100)" min="0" max="100" required>
        <button type="submit">Submit to leaderboard</button>
      </form>
      <p style="font-family:var(--mono); font-size:11px; color:var(--ink-muted); margin-top:8px;">Leaderboard entries above the divider are seed/reference scores from past runs; submissions you add here are stored in this browser only — there's no shared server backing this, so it won't sync to other people's devices.</p>`;
  }
  function wireLeaderboard(h) {
    const form = document.getElementById('lbForm');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const team = form.elements.team.value.trim();
      const score = Math.max(0, Math.min(100, parseFloat(form.elements.score.value)));
      if (!team || isNaN(score)) return;
      if (!lbSubmissions[h.id]) lbSubmissions[h.id] = [];
      lbSubmissions[h.id].push({ team, score });
      saveLbSubmissions(lbSubmissions);
      const pane = form.closest('.tab-pane');
      pane.innerHTML = leaderboardHtml(h);
      wireLeaderboard(h);
    });
  }

  // -------------------------------------------------------------- tutorial
  const CATEGORY_COACHING = {
    'data-science': [
      "Get the raw data in front of you before you plan anything else — plans made about imaginary-clean data are wrong plans.",
      "Profile before you clean: nulls, dtypes, duplicates, outliers, and how the target (if any) is distributed.",
      "Every chart should answer a question you actually have — not just 'a chart of column X'.",
      "Build the smallest version of the final deliverable first, then widen it.",
      "Write your findings in plain language before you write any more code — if you can't say it simply, you don't have it yet."
    ],
    'machine-learning': [
      "Start with the dumbest baseline that could work (mean prediction, majority class) so you know what 'better' even means.",
      "Split your data correctly before touching features — leakage from the test set is the most common silent bug.",
      "One model, one change at a time — if you tune five things at once you won't know what helped.",
      "Look at your errors, not just your metric — the wrong predictions tell you what to fix next.",
      "Write down what you'd try next if you had another day — that list is the real deliverable."
    ],
    'deep-learning': [
      "Get a tiny version training end-to-end (a few examples, a few steps) before scaling up — architecture bugs hide in the plumbing, not the math.",
      "Check your shapes at every layer — most DL bugs are shape mismatches wearing a math costume.",
      "Overfit a small batch on purpose first — if your model can't memorize 10 examples, it has a bug, not a data problem.",
      "Watch the loss curve like a hawk — plateaus, spikes, and NaNs are all telling you something specific.",
      "Only then scale up data/epochs — and log everything so you can tell what actually caused the improvement."
    ],
    'quant-finance': [
      "Define the hypothesis in one plain sentence before writing a line of backtest code — 'this signal should work because...'.",
      "Get the data pipeline right and survivorship-bias-free before anything else — a great strategy on bad data is worthless.",
      "Build the simplest possible version of the strategy first, and compare against a naive baseline (buy-and-hold, equal-weight).",
      "Compute the real risk metrics — Sharpe, max drawdown, turnover — not just cumulative return, which flatters everything.",
      "Write down why the edge might disappear (crowding, regime change, cost assumptions) — that's the difference between a backtest and a strategy."
    ]
  };

  function tutorialHtml(p) {
    const coaching = CATEGORY_COACHING[p.category] || CATEGORY_COACHING['data-science'];
    const steps = p.checklist.map((step, i) => {
      const tip = coaching[i] || coaching[coaching.length - 1];
      return `<li>
        <div class="tstep-head"><span class="tstep-num">${i + 1}</span><span class="tstep-title">${step}</span></div>
        <div class="tstep-tip">${tip}</div>
      </li>`;
    }).join('');
    return `<p class="tutorial-intro">A step-by-step path through <b>${p.title}</b>. Each step below is one sitting's worth of work — don't try to do all of it in one pass.</p>
      <ol class="tutorial-steps">${steps}</ol>
      <p class="tutorial-outro">Stuck on a step? The GitHub repo and YouTube course linked in the Overview tab are matched to this exact project — start there before searching cold.</p>`;
  }

  // -------------------------------------------------------------- exercise room
  function exerciseRoomHtml(templateKey) {
    const tpl = EXERCISES[templateKey];
    return `<p class="ex-prompt"><b>${tpl.title}</b><br>${tpl.prompt}</p>
      <textarea class="code-editor" id="codeEditor" spellcheck="false">${tpl.starter}</textarea>
      <div class="ex-controls">
        <button class="run-btn" id="runBtn">▶ Run &amp; check</button>
        <span class="ex-status" id="exStatus"></span>
      </div>
      <pre class="ex-output" id="exOutput"></pre>`;
  }

  function wireExerciseRoom(templateKey, itemId) {
    const runBtn = document.getElementById('runBtn');
    if (!runBtn) return;
    runBtn.addEventListener('click', async () => {
      runBtn.disabled = true;
      const statusEl = document.getElementById('exStatus');
      const outEl = document.getElementById('exOutput');
      outEl.textContent = '';
      outEl.className = 'ex-output';
      const code = document.getElementById('codeEditor').value;
      const result = await runExercise(templateKey, code, (msg) => { statusEl.textContent = msg; });
      statusEl.textContent = '';
      outEl.textContent = result.msg + (result.raw ? '\n\n' + result.raw.trim() : '');
      outEl.className = 'ex-output ' + (result.pass ? 'pass' : (result.error ? 'error' : 'fail'));
      if (result.pass) {
        markSolved(itemId);
        buildHeroStats();
      }
      runBtn.disabled = false;
    });
  }

  // -------------------------------------------------------------- modal
  const modalRoot = document.getElementById('modalRoot');

  function safeReplaceState(url) {
    try { history.replaceState(null, '', url); } catch (e) { /* some file:// contexts restrict this — non-fatal */ }
  }

  function closeModal() {
    modalRoot.classList.remove('open');
    modalRoot.innerHTML = '';
    safeReplaceState(location.pathname);
  }

  function switchTab(root, tab) {
    root.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    root.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('active', p.dataset.pane === tab));
  }

  function openModal(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    const templateKey = pickExerciseTemplate(p);
    const kg = kaggleFor(p);
    safeReplaceState('?open=' + id);
    modalRoot.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-panel" role="dialog" aria-modal="true">
        <button class="modal-close" id="modalClose">✕</button>
        <div class="modal-head">
          <span class="pid">${p.id}</span>
          <span class="diff" data-d="${p.difficulty}"><span class="dot"></span>${p.difficulty}</span>
          ${p.collaborative ? `<span class="collab-tag inline">⇄ team of ${p.teamSize}</span>` : ''}
        </div>
        <h2>${p.title}</h2>
        <div class="tab-bar">
          <button class="tab-btn active" data-tab="overview">Overview</button>
          <button class="tab-btn" data-tab="tutorial">Mini-tutorial</button>
          <button class="tab-btn" data-tab="exercise">Exercise room</button>
        </div>
        <div class="tab-pane active" data-pane="overview">
          <p class="blurb">${p.blurb}</p>
          <div class="topic-chips">${(p.topics || []).map(t => `<span>${t}</span>`).join('')}</div>
          <div class="res-list modal-res">
            <a class="res-row" href="${p.github.url}" target="_blank" rel="noopener">${ICONS.github}<span class="res-meta"><span class="res-kind">GitHub</span><span class="res-name">${p.github.name}</span></span></a>
            <a class="res-row" href="${p.youtube.url}" target="_blank" rel="noopener">${ICONS.youtube}<span class="res-meta"><span class="res-kind">YouTube</span><span class="res-name">${p.youtube.name}</span></span></a>
            <a class="res-row" href="${kg.url}" target="_blank" rel="noopener">${ICONS.kaggle}<span class="res-meta"><span class="res-kind">Kaggle</span><span class="res-name">${kg.name}</span></span></a>
          </div>
          ${p.collaborative ? `<p style="font-family:var(--mono); font-size:11.5px; color:var(--ink-muted); margin:14px 0 4px;">Suggested roles: ${p.roles.join(' · ')}</p>
          <button class="share-btn" id="shareBtn">Copy shareable link for your team</button>
          <button class="board-toggle${isOnBoard(p.id) ? ' on' : ''}" data-board-toggle="${p.id}" data-board-kind="project" id="modalBoardBtn">${isOnBoard(p.id) ? '✓ On your team board — remove' : '+ Add to team board'}</button>` : ''}
        </div>
        <div class="tab-pane" data-pane="tutorial">${tutorialHtml(p)}</div>
        <div class="tab-pane" data-pane="exercise">${exerciseRoomHtml(templateKey)}</div>
      </div>`;
    modalRoot.classList.add('open');
    modalRoot.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    document.getElementById('modalClose').addEventListener('click', closeModal);
    modalRoot.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => switchTab(modalRoot, btn.dataset.tab)));
    wireExerciseRoom(templateKey, p.id);
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) shareBtn.addEventListener('click', () => {
      const url = location.origin + location.pathname + '?open=' + p.id;
      navigator.clipboard && navigator.clipboard.writeText(url);
      shareBtn.textContent = 'Link copied — send it to your team';
    });
    const modalBoardBtn = document.getElementById('modalBoardBtn');
    if (modalBoardBtn) modalBoardBtn.addEventListener('click', () => {
      toggleBoardItem(p.id, 'project');
      modalBoardBtn.classList.toggle('on', isOnBoard(p.id));
      modalBoardBtn.textContent = isOnBoard(p.id) ? '✓ On your team board — remove' : '+ Add to team board';
      updateBoardToggleButtons();
      if (document.getElementById('dashGrid')) buildDashboard();
    });
  }

  function openHackathonModal(id) {
    const h = HACKATHONS.find(x => x.id === id);
    if (!h) return;
    const templateKey = h.exerciseTemplate;
    safeReplaceState('?hk=' + id);
    modalRoot.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-panel" role="dialog" aria-modal="true">
        <button class="modal-close" id="modalClose">✕</button>
        <div class="modal-head">
          <span class="pid">${h.id}</span>
          <span class="diff" data-d="${h.difficulty}"><span class="dot"></span>${h.difficulty}</span>
          <span class="collab-tag inline">⇄ team of ${h.teamSize} · ${h.duration}</span>
        </div>
        <h2>${h.title}</h2>
        <div class="tab-bar">
          <button class="tab-btn active" data-tab="overview">Brief</button>
          <button class="tab-btn" data-tab="tutorial">Milestones</button>
          <button class="tab-btn" data-tab="exercise">Warm-up exercise</button>
          <button class="tab-btn" data-tab="leaderboard">Leaderboard</button>
        </div>
        <div class="tab-pane active" data-pane="overview">
          <p class="blurb">${h.brief}</p>
          <div class="topic-chips">${h.categories.map(c => `<span>${c}</span>`).join('')}</div>
          <h4 class="mini-head">Deliverables</h4>
          <ul class="deliverables">${h.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
          <p style="font-family:var(--mono); font-size:11.5px; color:var(--ink-muted); margin:14px 0 4px;">Suggested roles: ${h.roles.join(' · ')}</p>
          <button class="share-btn" id="shareBtn">Copy shareable link for your team</button>
          <button class="board-toggle${isOnBoard(h.id) ? ' on' : ''}" data-board-toggle="${h.id}" data-board-kind="hackathon" id="modalBoardBtn">${isOnBoard(h.id) ? '✓ On your team board — remove' : '+ Add to team board'}</button>
        </div>
        <div class="tab-pane" data-pane="tutorial">
          <p class="tutorial-intro">Suggested pacing for a team of ${h.teamSize} over ${h.duration}:</p>
          <ol class="tutorial-steps">${h.milestones.map(m => `<li><div class="tstep-head"><span class="tstep-num">${m.time}</span><span class="tstep-title">${m.task}</span></div></li>`).join('')}</ol>
        </div>
        <div class="tab-pane" data-pane="exercise">
          <p class="ex-prompt" style="margin-bottom:8px;"><i>Use this as a 15-minute warm-up before the clock starts on the full hackathon.</i></p>
          ${exerciseRoomHtml(templateKey)}
        </div>
        <div class="tab-pane" data-pane="leaderboard">${leaderboardHtml(h)}</div>
      </div>`;
    modalRoot.classList.add('open');
    modalRoot.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    document.getElementById('modalClose').addEventListener('click', closeModal);
    modalRoot.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => switchTab(modalRoot, btn.dataset.tab)));
    wireExerciseRoom(templateKey, h.id);
    wireLeaderboard(h);
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) shareBtn.addEventListener('click', () => {
      const url = location.origin + location.pathname + '?hk=' + h.id;
      navigator.clipboard && navigator.clipboard.writeText(url);
      shareBtn.textContent = 'Link copied — send it to your team';
    });
    const modalBoardBtn = document.getElementById('modalBoardBtn');
    if (modalBoardBtn) modalBoardBtn.addEventListener('click', () => {
      toggleBoardItem(h.id, 'hackathon');
      modalBoardBtn.classList.toggle('on', isOnBoard(h.id));
      modalBoardBtn.textContent = isOnBoard(h.id) ? '✓ On your team board — remove' : '+ Add to team board';
      updateBoardToggleButtons();
      if (document.getElementById('dashGrid')) buildDashboard();
    });
  }

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ---------------------------------------------------------------- boot
  buildTicker();
  buildCatGrid();
  buildDiffChips();
  buildSearch();
  buildViewToggle();
  buildHeroStats();
  buildLibrary();
  buildDashboard();
  buildBoardBanner();
  buildDocs();
  buildShowcase();
  render();

  // deep-link support: ?open=DS-001 or ?hk=HK-01
  const params = new URLSearchParams(location.search);
  if (params.get('open')) openModal(params.get('open'));
  if (params.get('hk')) openHackathonModal(params.get('hk'));
})();
