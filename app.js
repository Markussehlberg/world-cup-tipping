// ================================================
// VM 2026 MATCHDATA
// ================================================
const WC_MATCHES = [
  { id: 1,  group: "GROUP_A", utcDate: "2026-06-11T21:00:00Z", homeTeam: "Mexiko", awayTeam: "Sydafrika" },
  { id: 2,  group: "GROUP_A", utcDate: "2026-06-12T04:00:00Z", homeTeam: "Sydkorea", awayTeam: "Tjeckien" },
  { id: 3,  group: "GROUP_A", utcDate: "2026-06-18T16:00:00Z", homeTeam: "Tjeckien", awayTeam: "Sydafrika" },
  { id: 4,  group: "GROUP_A", utcDate: "2026-06-18T19:00:00Z", homeTeam: "Mexiko", awayTeam: "Sydkorea" },
  { id: 5,  group: "GROUP_A", utcDate: "2026-06-25T01:00:00Z", homeTeam: "Sydafrika", awayTeam: "Sydkorea" },
  { id: 6,  group: "GROUP_A", utcDate: "2026-06-25T01:00:00Z", homeTeam: "Tjeckien", awayTeam: "Mexiko" },
  { id: 7,  group: "GROUP_B", utcDate: "2026-06-12T19:00:00Z", homeTeam: "Kanada", awayTeam: "Bosnien & Hercegovina" },
  { id: 8,  group: "GROUP_B", utcDate: "2026-06-13T01:00:00Z", homeTeam: "Qatar", awayTeam: "Schweiz" },
  { id: 9,  group: "GROUP_B", utcDate: "2026-06-18T19:00:00Z", homeTeam: "Schweiz", awayTeam: "Bosnien & Hercegovina" },
  { id: 10, group: "GROUP_B", utcDate: "2026-06-18T03:00:00Z", homeTeam: "Kanada", awayTeam: "Qatar" },
  { id: 11, group: "GROUP_B", utcDate: "2026-06-24T19:00:00Z", homeTeam: "Schweiz", awayTeam: "Kanada" },
  { id: 12, group: "GROUP_B", utcDate: "2026-06-24T19:00:00Z", homeTeam: "Bosnien & Hercegovina", awayTeam: "Qatar" },
  { id: 13, group: "GROUP_C", utcDate: "2026-06-13T22:00:00Z", homeTeam: "Brasilien", awayTeam: "Marocko" },
  { id: 14, group: "GROUP_C", utcDate: "2026-06-14T01:00:00Z", homeTeam: "Haiti", awayTeam: "Skottland" },
  { id: 15, group: "GROUP_C", utcDate: "2026-06-19T22:00:00Z", homeTeam: "Skottland", awayTeam: "Marocko" },
  { id: 16, group: "GROUP_C", utcDate: "2026-06-20T01:00:00Z", homeTeam: "Brasilien", awayTeam: "Haiti" },
  { id: 17, group: "GROUP_C", utcDate: "2026-06-24T22:00:00Z", homeTeam: "Marocko", awayTeam: "Haiti" },
  { id: 18, group: "GROUP_C", utcDate: "2026-06-24T22:00:00Z", homeTeam: "Skottland", awayTeam: "Brasilien" },
  { id: 19, group: "GROUP_D", utcDate: "2026-06-12T18:00:00Z", homeTeam: "USA", awayTeam: "Paraguay" },
  { id: 20, group: "GROUP_D", utcDate: "2026-06-14T04:00:00Z", homeTeam: "Australien", awayTeam: "Turkiet" },
  { id: 21, group: "GROUP_D", utcDate: "2026-06-19T04:00:00Z", homeTeam: "USA", awayTeam: "Australien" },
  { id: 22, group: "GROUP_D", utcDate: "2026-06-20T04:00:00Z", homeTeam: "Turkiet", awayTeam: "Paraguay" },
  { id: 23, group: "GROUP_D", utcDate: "2026-06-26T02:00:00Z", homeTeam: "Turkiet", awayTeam: "USA" },
  { id: 24, group: "GROUP_D", utcDate: "2026-06-26T02:00:00Z", homeTeam: "Paraguay", awayTeam: "Australien" },
  { id: 25, group: "GROUP_E", utcDate: "2026-06-14T17:00:00Z", homeTeam: "Tyskland", awayTeam: "Curaçao" },
  { id: 26, group: "GROUP_E", utcDate: "2026-06-14T23:00:00Z", homeTeam: "Elfenbenskusten", awayTeam: "Ecuador" },
  { id: 27, group: "GROUP_E", utcDate: "2026-06-20T20:00:00Z", homeTeam: "Tyskland", awayTeam: "Elfenbenskusten" },
  { id: 28, group: "GROUP_E", utcDate: "2026-06-21T00:00:00Z", homeTeam: "Ecuador", awayTeam: "Curaçao" },
  { id: 29, group: "GROUP_E", utcDate: "2026-06-25T20:00:00Z", homeTeam: "Curaçao", awayTeam: "Elfenbenskusten" },
  { id: 30, group: "GROUP_E", utcDate: "2026-06-25T20:00:00Z", homeTeam: "Ecuador", awayTeam: "Tyskland" },
  { id: 31, group: "GROUP_F", utcDate: "2026-06-14T12:00:00Z", homeTeam: "Nederländerna", awayTeam: "Japan" },
  { id: 32, group: "GROUP_F", utcDate: "2026-06-15T02:00:00Z", homeTeam: "Sverige", awayTeam: "Tunisien" },
  { id: 33, group: "GROUP_F", utcDate: "2026-06-20T17:00:00Z", homeTeam: "Nederländerna", awayTeam: "Sverige" },
  { id: 34, group: "GROUP_F", utcDate: "2026-06-21T04:00:00Z", homeTeam: "Tunisien", awayTeam: "Japan" },
  { id: 35, group: "GROUP_F", utcDate: "2026-06-25T23:00:00Z", homeTeam: "Tunisien", awayTeam: "Nederländerna" },
  { id: 36, group: "GROUP_F", utcDate: "2026-06-25T23:00:00Z", homeTeam: "Japan", awayTeam: "Sverige" },
  { id: 37, group: "GROUP_G", utcDate: "2026-06-15T19:00:00Z", homeTeam: "Belgien", awayTeam: "Egypten" },
  { id: 38, group: "GROUP_G", utcDate: "2026-06-16T01:00:00Z", homeTeam: "Iran", awayTeam: "Nya Zeeland" },
  { id: 39, group: "GROUP_G", utcDate: "2026-06-21T19:00:00Z", homeTeam: "Belgien", awayTeam: "Iran" },
  { id: 40, group: "GROUP_G", utcDate: "2026-06-22T01:00:00Z", homeTeam: "Nya Zeeland", awayTeam: "Egypten" },
  { id: 41, group: "GROUP_G", utcDate: "2026-06-27T03:00:00Z", homeTeam: "Nya Zeeland", awayTeam: "Belgien" },
  { id: 42, group: "GROUP_G", utcDate: "2026-06-27T03:00:00Z", homeTeam: "Egypten", awayTeam: "Iran" },
  { id: 43, group: "GROUP_H", utcDate: "2026-06-15T16:00:00Z", homeTeam: "Spanien", awayTeam: "Kap Verde" },
  { id: 44, group: "GROUP_H", utcDate: "2026-06-15T22:00:00Z", homeTeam: "Saudiarabien", awayTeam: "Uruguay" },
  { id: 45, group: "GROUP_H", utcDate: "2026-06-21T16:00:00Z", homeTeam: "Spanien", awayTeam: "Saudiarabien" },
  { id: 46, group: "GROUP_H", utcDate: "2026-06-21T22:00:00Z", homeTeam: "Uruguay", awayTeam: "Kap Verde" },
  { id: 47, group: "GROUP_H", utcDate: "2026-06-26T00:00:00Z", homeTeam: "Kap Verde", awayTeam: "Saudiarabien" },
  { id: 48, group: "GROUP_H", utcDate: "2026-06-26T00:00:00Z", homeTeam: "Uruguay", awayTeam: "Spanien" },
  { id: 49, group: "GROUP_I", utcDate: "2026-06-15T19:00:00Z", homeTeam: "Frankrike", awayTeam: "Senegal" },
  { id: 50, group: "GROUP_I", utcDate: "2026-06-16T00:00:00Z", homeTeam: "Irak", awayTeam: "Norge" },
  { id: 51, group: "GROUP_I", utcDate: "2026-06-21T21:00:00Z", homeTeam: "Frankrike", awayTeam: "Irak" },
  { id: 52, group: "GROUP_I", utcDate: "2026-06-22T01:00:00Z", homeTeam: "Norge", awayTeam: "Senegal" },
  { id: 53, group: "GROUP_I", utcDate: "2026-06-26T19:00:00Z", homeTeam: "Norge", awayTeam: "Frankrike" },
  { id: 54, group: "GROUP_I", utcDate: "2026-06-26T19:00:00Z", homeTeam: "Senegal", awayTeam: "Irak" },
  { id: 55, group: "GROUP_J", utcDate: "2026-06-16T01:00:00Z", homeTeam: "Argentina", awayTeam: "Algeriet" },
  { id: 56, group: "GROUP_J", utcDate: "2026-06-16T04:00:00Z", homeTeam: "Österrike", awayTeam: "Jordanien" },
  { id: 57, group: "GROUP_J", utcDate: "2026-06-22T17:00:00Z", homeTeam: "Argentina", awayTeam: "Österrike" },
  { id: 58, group: "GROUP_J", utcDate: "2026-06-22T21:00:00Z", homeTeam: "Jordanien", awayTeam: "Algeriet" },
  { id: 59, group: "GROUP_J", utcDate: "2026-06-28T02:00:00Z", homeTeam: "Jordanien", awayTeam: "Argentina" },
  { id: 60, group: "GROUP_J", utcDate: "2026-06-28T02:00:00Z", homeTeam: "Algeriet", awayTeam: "Österrike" },
  { id: 61, group: "GROUP_K", utcDate: "2026-06-16T17:00:00Z", homeTeam: "Portugal", awayTeam: "DR Kongo" },
  { id: 62, group: "GROUP_K", utcDate: "2026-06-16T22:00:00Z", homeTeam: "Uzbekistan", awayTeam: "Colombia" },
  { id: 63, group: "GROUP_K", utcDate: "2026-06-22T17:00:00Z", homeTeam: "Portugal", awayTeam: "Uzbekistan" },
  { id: 64, group: "GROUP_K", utcDate: "2026-06-22T22:00:00Z", homeTeam: "Colombia", awayTeam: "DR Kongo" },
  { id: 65, group: "GROUP_K", utcDate: "2026-06-27T23:30:00Z", homeTeam: "DR Kongo", awayTeam: "Uzbekistan" },
  { id: 66, group: "GROUP_K", utcDate: "2026-06-27T23:30:00Z", homeTeam: "Colombia", awayTeam: "Portugal" },
  { id: 67, group: "GROUP_L", utcDate: "2026-06-17T01:00:00Z", homeTeam: "Ghana", awayTeam: "Panama" },
  { id: 68, group: "GROUP_L", utcDate: "2026-06-17T15:00:00Z", homeTeam: "England", awayTeam: "Kroatien" },
  { id: 69, group: "GROUP_L", utcDate: "2026-06-22T22:00:00Z", homeTeam: "England", awayTeam: "Ghana" },
  { id: 70, group: "GROUP_L", utcDate: "2026-06-23T00:00:00Z", homeTeam: "Panama", awayTeam: "Kroatien" },
  { id: 71, group: "GROUP_L", utcDate: "2026-06-27T21:00:00Z", homeTeam: "Panama", awayTeam: "England" },
  { id: 72, group: "GROUP_L", utcDate: "2026-06-27T21:00:00Z", homeTeam: "Kroatien", awayTeam: "Ghana" },
];

// ================================================
// STORAGE
// ================================================
function getSavedTips() { return JSON.parse(localStorage.getItem("vm2026_tips") || "{}"); }
function saveTip(id, hg, ag) {
  const t = getSavedTips();
  t[id] = { homeGoals: hg, awayGoals: ag };
  localStorage.setItem("vm2026_tips", JSON.stringify(t));
}
function getKnockoutPicks() { return JSON.parse(localStorage.getItem("vm2026_knockout") || "{}"); }
function saveKnockoutPick(matchId, winner) {
  const p = getKnockoutPicks();
  p[matchId] = winner;
  clearDownstreamPicks(matchId, p);
  localStorage.setItem("vm2026_knockout", JSON.stringify(p));
}
function clearDownstreamPicks(matchId, picks) {
  const id = parseInt(matchId);
  let next = null;
  if (id >= 101 && id <= 116) next = 200 + Math.ceil((id - 100) / 2);
  else if (id >= 201 && id <= 208) next = 300 + Math.ceil((id - 200) / 2);
  else if (id >= 301 && id <= 304) next = 400 + Math.ceil((id - 300) / 2);
  else if (id >= 401 && id <= 402) next = 501;
  if (next && picks[next]) { delete picks[next]; clearDownstreamPicks(next, picks); }
}

// ================================================
// GROUP LOGIC
// ================================================
function groupMatchesByGroup(matches) {
  return matches.reduce((acc, m) => {
    if (!acc[m.group]) acc[m.group] = [];
    acc[m.group].push(m);
    return acc;
  }, {});
}

function calcGroupStandings(groupMatches, tips) {
  const teams = {};
  for (const m of groupMatches) {
    if (!teams[m.homeTeam]) teams[m.homeTeam] = { name: m.homeTeam, p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 };
    if (!teams[m.awayTeam]) teams[m.awayTeam] = { name: m.awayTeam, p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 };
    const tip = tips[m.id];
    if (!tip) continue;
    const hg = tip.homeGoals, ag = tip.awayGoals;
    teams[m.homeTeam].p++; teams[m.awayTeam].p++;
    teams[m.homeTeam].gf += hg; teams[m.homeTeam].ga += ag;
    teams[m.awayTeam].gf += ag; teams[m.awayTeam].ga += hg;
    if (hg > ag) { teams[m.homeTeam].w++; teams[m.homeTeam].pts += 3; teams[m.awayTeam].l++; }
    else if (hg < ag) { teams[m.awayTeam].w++; teams[m.awayTeam].pts += 3; teams[m.homeTeam].l++; }
    else { teams[m.homeTeam].d++; teams[m.homeTeam].pts++; teams[m.awayTeam].d++; teams[m.awayTeam].pts++; }
  }
  return Object.values(teams).sort((a,b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if ((b.gf-b.ga) !== (a.gf-a.ga)) return (b.gf-b.ga)-(a.gf-a.ga);
    return b.gf - a.gf;
  });
}

function getBestThirds(allGroups, tips) {
  const thirds = [];
  for (const [g, matches] of Object.entries(allGroups)) {
    const s = calcGroupStandings(matches, tips);
    if (s.length >= 3) thirds.push({ ...s[2], group: g });
  }
  return thirds.sort((a,b) => b.pts - a.pts || (b.gf-b.ga) - (a.gf-a.ga) || b.gf - a.gf).slice(0,8);
}

// ================================================
// KNOCKOUT
// ================================================
function calcR32Matchups(gs, thirds) {
  const w = g => gs["GROUP_"+g]?.[0]?.name || "Vinnare "+g;
  const r = g => gs["GROUP_"+g]?.[1]?.name || "Tvåa "+g;
  const t = i => thirds[i]?.name || "Bästa trea #"+(i+1);
  return [
    { id:101, home:w("A"), away:r("B") }, { id:102, home:w("C"), away:r("F") },
    { id:103, home:w("E"), away:t(0) },   { id:104, home:w("F"), away:r("C") },
    { id:105, home:w("G"), away:t(1) },   { id:106, home:w("D"), away:t(2) },
    { id:107, home:w("I"), away:t(3) },   { id:108, home:w("L"), away:t(4) },
    { id:109, home:r("A"), away:r("D") }, { id:110, home:w("B"), away:t(5) },
    { id:111, home:w("H"), away:r("J") }, { id:112, home:w("J"), away:r("H") },
    { id:113, home:w("K"), away:t(6) },   { id:114, home:r("K"), away:r("L") },
    { id:115, home:r("G"), away:t(7) },   { id:116, home:w("B"), away:r("E") },
  ];
}

function calcKnockoutMatchups(r32, picks) {
  const r16 = Array.from({length:8}, (_,i) => ({
    id: 201+i,
    home: picks[r32[i*2].id] || `Vinnare M${r32[i*2].id-100}`,
    away: picks[r32[i*2+1].id] || `Vinnare M${r32[i*2+1].id-100}`,
  }));
  const qf = Array.from({length:4}, (_,i) => ({
    id: 301+i,
    home: picks[r16[i*2].id] || `Vinnare M${r16[i*2].id}`,
    away: picks[r16[i*2+1].id] || `Vinnare M${r16[i*2+1].id}`,
  }));
  const sf = [
    { id:401, home: picks[301]||"Vinnare QF1", away: picks[302]||"Vinnare QF2" },
    { id:402, home: picks[303]||"Vinnare QF3", away: picks[304]||"Vinnare QF4" },
  ];
  const final = [{ id:501, home: picks[401]||"Vinnare SF1", away: picks[402]||"Vinnare SF2" }];
  return { r16, qf, sf, final };
}

// ================================================
// POINTS
// ================================================
function calcUserPoints(tips, picks, groupResults, knockoutResults) {
  let pts = 0;
  for (const [id, tip] of Object.entries(tips)) {
    const actual = groupResults[id];
    if (!actual) continue;
    if (tip.homeGoals === actual.homeGoals && tip.awayGoals === actual.awayGoals) { pts += 3; }
    else {
      const tr = tip.homeGoals > tip.awayGoals ? "H" : tip.homeGoals < tip.awayGoals ? "A" : "D";
      const ar = actual.homeGoals > actual.awayGoals ? "H" : actual.homeGoals < actual.awayGoals ? "A" : "D";
      if (tr === ar) pts += 1;
    }
  }
  for (const [id, pick] of Object.entries(picks)) {
    if (knockoutResults[id] && knockoutResults[id] === pick) pts += 2;
  }
  return pts;
}

// ================================================
// DATE FORMAT
// ================================================
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("sv-SE", { day:"numeric", month:"short" })
    + " " + d.toLocaleTimeString("sv-SE", { hour:"2-digit", minute:"2-digit" });
}

// ================================================
// AVATAR PREVIEW
// ================================================
window.previewAvatar = function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const prev = document.getElementById("avatar-preview");
    prev.innerHTML = `<img src="${ev.target.result}" alt="avatar" />`;
  };
  reader.readAsDataURL(file);
};

// ================================================
// AUTH SWITCH
// ================================================
window.showLogin = function() {
  document.getElementById("panel-register").style.display = "none";
  document.getElementById("panel-login").style.display = "flex";
};
window.showRegister = function() {
  document.getElementById("panel-login").style.display = "none";
  document.getElementById("panel-register").style.display = "flex";
};

// ================================================
// TAB NAVIGATION
// ================================================
window.switchTab = function(tab, el) {
  document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.getElementById("tab-"+tab).classList.add("active");
  if (el) el.classList.add("active");
  else {
    const navEl = document.querySelector(`[data-tab="${tab}"]`);
    if (navEl) navEl.classList.add("active");
  }

  if (tab === "groups") renderGroups();
  if (tab === "bracket") renderBracket();
  if (tab === "leaderboard") renderLeaderboard();
  if (tab === "leagues") renderLeagues();
};

// ================================================
// COUNTDOWN
// ================================================
function renderCountdown() {
  const target = new Date("2026-06-11T21:00:00Z");
  const now = new Date();
  const diff = target - now;

  const el = document.getElementById("countdown-display");
  if (!el) return;

  if (diff <= 0) {
    el.innerHTML = `<div style="text-align:center;font-family:'Bebas Neue';font-size:1.1rem;color:var(--green);letter-spacing:2px">VM PÅGÅR!</div>`;
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  el.innerHTML = `
    <div style="font-size:0.7rem;color:var(--text-3);text-align:center;margin-bottom:6px;letter-spacing:0.1em;text-transform:uppercase">VM startar om</div>
    <div class="countdown-grid">
      <div class="cd-unit"><div class="cd-num">${days}</div><div class="cd-label">Dagar</div></div>
      <div class="cd-unit" style="align-self:center;padding-bottom:10px;color:var(--text-3);font-size:1.2rem">:</div>
      <div class="cd-unit"><div class="cd-num">${String(hours).padStart(2,"0")}</div><div class="cd-label">Tim</div></div>
      <div class="cd-unit" style="align-self:center;padding-bottom:10px;color:var(--text-3);font-size:1.2rem">:</div>
      <div class="cd-unit"><div class="cd-num">${String(mins).padStart(2,"0")}</div><div class="cd-label">Min</div></div>
      <div class="cd-unit" style="align-self:center;padding-bottom:10px;color:var(--text-3);font-size:1.2rem">:</div>
      <div class="cd-unit"><div class="cd-num">${String(secs).padStart(2,"0")}</div><div class="cd-label">Sek</div></div>
    </div>`;
}

// ================================================
// RENDER HOME
// ================================================
function renderHome() {
  const user = window._currentUser;
  if (!user) return;

  // Name + welcome
  const name = user.displayName ? user.displayName.split(" ")[0] : user.email.split("@")[0];
  const welcomeEl = document.getElementById("welcome-name");
  if (welcomeEl) welcomeEl.textContent = `Hej, ${name}!`;

  // Sidebar avatar
  const sAvatar = document.getElementById("sidebar-avatar");
  if (user.photoURL) {
    sAvatar.innerHTML = `<img src="${user.photoURL}" alt="avatar" />`;
  } else {
    sAvatar.textContent = name[0].toUpperCase();
  }
  const sName = document.getElementById("sidebar-name");
  if (sName) sName.textContent = user.displayName || name;

  // Stats
  const tips = getSavedTips();
  const tipped = Object.keys(tips).length;
  document.getElementById("stat-tipped").textContent = tipped;
  document.getElementById("stat-left").textContent = 72 - tipped;
  updateProgressBar(tipped);

  // Upcoming matches to tip
  const upcoming = WC_MATCHES.filter(m => !tips[m.id]).slice(0,5);
  const upEl = document.getElementById("upcoming-matches");
  if (upEl) {
    upEl.innerHTML = upcoming.map(m => `
      <div class="upcoming-match" id="um-${m.id}">
        <div class="um-teams">${m.homeTeam} vs ${m.awayTeam}</div>
        <button class="um-tip-btn" onclick="goTipMatch(${m.id})">Tippa →</button>
      </div>
    `).join("") || `<p style="color:var(--text-3);font-size:0.85rem;text-align:center;padding:20px">Alla matcher tipsade! 🎉</p>`;
  }

  // Mini leaderboard
  renderMiniLeaderboard();

  // Countdown
  renderCountdown();
  setInterval(renderCountdown, 1000);
}

function updateProgressBar(tipped) {
  const pct = (tipped / 72 * 100).toFixed(1);
  const bar = document.getElementById("tip-progress-bar");
  const txt = document.getElementById("tip-progress-text");
  if (bar) bar.style.width = pct + "%";
  if (txt) txt.textContent = `${tipped}/72 tipsade`;
}

async function renderMiniLeaderboard() {
  const el = document.getElementById("mini-leaderboard");
  if (!el) return;
  el.innerHTML = `<p style="color:var(--text-3);font-size:0.82rem;padding:12px 0">Laddar...</p>`;

  try {
    const allUsers = await window.fetchAllTips();
    const results = await window.fetchResults();
    const ranked = allUsers.map(u => ({
      email: u.email,
      displayName: u.displayName || u.email?.split("@")[0],
      photoURL: u.photoURL || "",
      points: calcUserPoints(u.tips||{}, u.picks||{}, results.groupResults||{}, results.knockoutResults||{})
    })).sort((a,b) => b.points - a.points).slice(0,5);

    const myEmail = window._currentUser?.email;
    const myRank = ranked.findIndex(u => u.email === myEmail) + 1;
    document.getElementById("stat-rank").textContent = myRank || "–";
    document.getElementById("sidebar-pts").textContent = (ranked.find(u => u.email === myEmail)?.points || 0) + " p";
    document.getElementById("stat-pts").textContent = ranked.find(u => u.email === myEmail)?.points || 0;

    const rankClasses = ["gold","silver","bronze"];
    el.innerHTML = ranked.map((u, i) => {
      const initials = (u.displayName || "?").split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase();
      const avatar = u.photoURL ? `<img src="${u.photoURL}" alt="" />` : initials;
      const isMe = u.email === myEmail;
      const rc = rankClasses[i] || "";
      return `<div class="mini-lb-row ${isMe?"me":""}">
        <div class="mini-lb-rank ${rc}">${i+1}</div>
        <div class="mini-lb-avatar">${avatar}</div>
        <div class="mini-lb-name">${u.displayName || u.email?.split("@")[0]}${isMe?" (du)":""}</div>
        <div class="mini-lb-pts">${u.points}p</div>
      </div>`;
    }).join("") || `<p style="color:var(--text-3);font-size:0.82rem;padding:12px 0">Inga deltagare ännu</p>`;
  } catch(e) {
    el.innerHTML = `<p style="color:var(--text-3);font-size:0.82rem;padding:12px 0">Kunde inte ladda data</p>`;
  }
}

window.goTipMatch = function(matchId) {
  switchTab("groups", document.querySelector("[data-tab=groups]"));
  setTimeout(() => {
    const el = document.getElementById(`match-${matchId}`);
    if (el) { el.scrollIntoView({behavior:"smooth", block:"center"}); el.style.boxShadow = "0 0 0 2px var(--green)"; setTimeout(()=>el.style.boxShadow="",2000); }
  }, 300);
};

// ================================================
// RENDER GROUPS
// ================================================
let activeFilter = "all";

window.filterGroups = function(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderGroups();
};

function renderGroups() {
  const container = document.getElementById("groups-container");
  if (!container) return;
  const tips = getSavedTips();
  const allGroups = groupMatchesByGroup(WC_MATCHES);

  container.innerHTML = "";

  for (const groupName of Object.keys(allGroups).sort()) {
    const matches = allGroups[groupName];

    // Filter
    let show = true;
    if (activeFilter === "sweden") show = matches.some(m => m.homeTeam === "Sverige" || m.awayTeam === "Sverige");
    if (activeFilter === "untipped") show = matches.some(m => !tips[m.id]);
    if (!show) continue;

    const standings = calcGroupStandings(matches, tips);
    const label = groupName.replace("GROUP_", "Grupp ");

    const block = document.createElement("div");
    block.className = "group-block";

    const tippedCount = matches.filter(m => tips[m.id]).length;

    block.innerHTML = `
      <div class="group-header">
        <span class="group-label">${label}</span>
        <span class="group-tag">${tippedCount}/${matches.length} tipsade</span>
      </div>
      <div class="group-body">
        <div class="match-list" id="matches-${groupName}"></div>
        <div class="standings-wrapper">
          <table class="standings-table">
            <thead><tr><th>#</th><th>Lag</th><th>S</th><th>V</th><th>O</th><th>F</th><th>GM</th><th>IM</th><th>MS</th><th>P</th></tr></thead>
            <tbody id="standings-${groupName}">${renderStandingsRows(standings)}</tbody>
          </table>
        </div>
      </div>
    `;

    container.appendChild(block);

    const matchList = document.getElementById(`matches-${groupName}`);
    for (const match of matches) {
      if (activeFilter === "untipped" && tips[match.id]) continue;

      const tip = tips[match.id];
      const isSwe = match.homeTeam === "Sverige" || match.awayTeam === "Sverige";
      const row = document.createElement("div");
      row.className = `match-row ${tip ? "saved" : ""} ${isSwe ? "sweden-match" : ""}`;
      row.id = `match-${match.id}`;
      row.innerHTML = `
        <div class="match-date">${formatDate(match.utcDate)}</div>
        <div class="match-teams">
          <div class="team-name home">${match.homeTeam}</div>
          <div class="score-inputs">
            <input type="number" class="score-input" min="0" max="99" value="${tip ? tip.homeGoals : ""}" placeholder="–" id="home-${match.id}" />
            <span class="score-sep">:</span>
            <input type="number" class="score-input" min="0" max="99" value="${tip ? tip.awayGoals : ""}" placeholder="–" id="away-${match.id}" />
          </div>
          <div class="team-name away">${match.awayTeam}</div>
        </div>
        <button class="tip-btn" onclick="submitTip(${match.id})">Spara</button>
      `;

      // Enter key saves
      row.querySelector(`#home-${match.id}`).addEventListener("keydown", e => { if (e.key === "Enter") document.getElementById(`away-${match.id}`).focus(); });
      row.querySelector(`#away-${match.id}`).addEventListener("keydown", e => { if (e.key === "Enter") submitTip(match.id); });

      matchList.appendChild(row);
    }
  }

  updateProgressBar(Object.keys(tips).length);
}

function renderStandingsRows(standings) {
  return standings.map((t, i) => {
    const gd = t.gf - t.ga;
    const cls = i===0?"pos-first":i===1?"pos-second":i===2?"pos-third":"";
    return `<tr class="${cls}"><td>${i+1}</td><td>${t.name}</td><td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.gf}</td><td>${t.ga}</td><td>${gd>=0?"+":""}${gd}</td><td><strong>${t.pts}</strong></td></tr>`;
  }).join("");
}

window.submitTip = function(matchId) {
  const h = document.getElementById(`home-${matchId}`);
  const a = document.getElementById(`away-${matchId}`);
  if (!h || !a || h.value === "" || a.value === "") { return; }

  saveTip(matchId, parseInt(h.value), parseInt(a.value));

  const row = document.getElementById(`match-${matchId}`);
  if (row) row.classList.add("saved");

  // Update standings
  const allGroups = groupMatchesByGroup(WC_MATCHES);
  const tips = getSavedTips();
  const matchObj = WC_MATCHES.find(m => m.id === matchId);
  if (matchObj) {
    const tbody = document.getElementById(`standings-${matchObj.group}`);
    if (tbody) tbody.innerHTML = renderStandingsRows(calcGroupStandings(allGroups[matchObj.group], tips));
  }

  updateProgressBar(Object.keys(tips).length);
  if (window.syncTipsToCloud) window.syncTipsToCloud();
};

// ================================================
// RENDER BRACKET
// ================================================
function renderBracket() {
  const container = document.getElementById("bracket-container");
  if (!container) return;

  const tips = getSavedTips();
  const picks = getKnockoutPicks();
  const allGroups = groupMatchesByGroup(WC_MATCHES);
  const gs = {};
  for (const [g, m] of Object.entries(allGroups)) gs[g] = calcGroupStandings(m, tips);
  const thirds = getBestThirds(allGroups, tips);
  const r32 = calcR32Matchups(gs, thirds);
  const { r16, qf, sf, final } = calcKnockoutMatchups(r32, picks);

  const rounds = [
    { name: "Sextondelsfinal", emoji: "⚡", matches: r32 },
    { name: "Åttondelsfinaler", emoji: "⚔️", matches: r16 },
    { name: "Kvartsfinaler", emoji: "🔥", matches: qf },
    { name: "Semifinaler", emoji: "🌟", matches: sf },
    { name: "Final", emoji: "🏆", matches: final },
  ];

  container.innerHTML = rounds.map(round => `
    <div class="bracket-round">
      <div class="round-header">
        <span class="round-title">${round.emoji} ${round.name}</span>
        <span class="round-hint">Klicka på ett lag för att välja vinnare</span>
      </div>
      <div class="bracket-grid">
        ${round.matches.map(m => {
          const picked = picks[m.id];
          return `
            <div class="bracket-card">
              <button class="bracket-btn ${picked === m.home ? "picked" : ""}" onclick="pickWinner(${m.id}, '${m.home.replace(/'/g,"\\'")}')">
                ${picked === m.home ? "✓ " : ""}${m.home}
              </button>
              <div class="bracket-vs">vs</div>
              <button class="bracket-btn ${picked === m.away ? "picked" : ""}" onclick="pickWinner(${m.id}, '${m.away.replace(/'/g,"\\'")}')">
                ${picked === m.away ? "✓ " : ""}${m.away}
              </button>
            </div>`;
        }).join("")}
      </div>
    </div>
  `).join("");
}

window.pickWinner = function(matchId, winner) {
  saveKnockoutPick(matchId, winner);
  renderBracket();
  if (window.syncTipsToCloud) window.syncTipsToCloud();
};

// ================================================
// RENDER LEADERBOARD
// ================================================
async function renderLeaderboard() {
  const container = document.getElementById("leaderboard-container");
  if (!container) return;
  container.innerHTML = `<p style="text-align:center;padding:60px;color:var(--text-3)">⏳ Laddar topplista...</p>`;

  try {
    const allUsers = await window.fetchAllTips();
    const results = await window.fetchResults();
    const myEmail = window._currentUser?.email;

    const ranked = allUsers.map(u => ({
      email: u.email,
      displayName: u.displayName || u.email?.split("@")[0],
      photoURL: u.photoURL || "",
      points: calcUserPoints(u.tips||{}, u.picks||{}, results.groupResults||{}, results.knockoutResults||{}),
      tipped: Object.keys(u.tips||{}).length,
    })).sort((a,b) => b.points - a.points);

    const rankIcons = ["🥇","🥈","🥉"];
    const rankClass = ["r1","r2","r3"];

    container.innerHTML = `
      <div class="leaderboard-table-wrap">
        <table class="lb-table">
          <thead>
            <tr>
              <th style="text-align:center">#</th>
              <th>Spelare</th>
              <th style="text-align:center">Tippar</th>
              <th style="text-align:right">Poäng</th>
            </tr>
          </thead>
          <tbody>
            ${ranked.map((u,i) => {
              const initials = (u.displayName || "?").split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase();
              const avatar = u.photoURL ? `<img src="${u.photoURL}" alt="" />` : initials;
              const isMe = u.email === myEmail;
              return `<tr class="${isMe?"my-row":""}">
                <td class="lb-rank-num ${rankClass[i]||""}">${rankIcons[i] || i+1}</td>
                <td>
                  <div class="lb-user">
                    <div class="lb-avatar">${avatar}</div>
                    <div class="lb-name">${u.displayName}${isMe?" (du)":""}</div>
                  </div>
                </td>
                <td class="lb-tipped">${u.tipped}/72</td>
                <td class="lb-pts">${u.points}</td>
              </tr>`;
            }).join("") || `<tr><td colspan="4" style="text-align:center;padding:40px;color:var(--text-3)">Inga deltagare ännu</td></tr>`}
          </tbody>
        </table>
      </div>
      <div style="margin-top:24px;padding:16px 20px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);font-size:0.85rem;color:var(--text-2)">
        <p>💡 <strong>Poängsystem:</strong> Exakt rätt resultat = 3p · Rätt utgång = 1p · Slutspelsvinnare = 2p</p>
        <p style="margin-top:8px">✅ Tips sparas automatiskt till molnet varje gång du tippar</p>
      </div>
    `;
  } catch(e) {
    container.innerHTML = `<p style="text-align:center;padding:60px;color:var(--text-3)">Kunde inte ladda topplistan</p>`;
  }
}

// ================================================
// LEAGUES
// ================================================
function generateCode() { return Math.random().toString(36).substring(2,8).toUpperCase(); }

window.showCreateLeague = function() {
  document.getElementById("modal-title").textContent = "Skapa ny liga";
  document.getElementById("modal-body").innerHTML = `
    <div class="form-group" style="margin-bottom:16px">
      <label>Liga-namn</label>
      <input type="text" id="new-league-name" placeholder="T.ex. VM-komparna 2026" />
    </div>
    <div class="modal-btns">
      <button class="btn-secondary" onclick="closeLeagueModal()">Avbryt</button>
      <button class="btn-primary" onclick="createLeagueAction()">Skapa liga</button>
    </div>
  `;
  document.getElementById("league-modal").style.display = "flex";
};

window.showJoinLeague = function() {
  document.getElementById("modal-title").textContent = "Gå med i liga";
  document.getElementById("modal-body").innerHTML = `
    <p style="color:var(--text-2);font-size:0.88rem;margin-bottom:16px">Ange koden du fått av din vän</p>
    <div class="form-group" style="margin-bottom:16px">
      <label>Liga-kod</label>
      <input type="text" id="join-code" placeholder="T.ex. AB12CD" style="text-transform:uppercase;letter-spacing:0.1em;font-family:'DM Mono',monospace" oninput="this.value=this.value.toUpperCase()" />
    </div>
    <div class="modal-btns">
      <button class="btn-secondary" onclick="closeLeagueModal()">Avbryt</button>
      <button class="btn-primary" onclick="joinLeagueAction()">Gå med</button>
    </div>
  `;
  document.getElementById("league-modal").style.display = "flex";
};

window.closeLeagueModal = function(e) {
  if (!e || e.target.classList.contains("modal-overlay")) {
    document.getElementById("league-modal").style.display = "none";
  }
};

window.createLeagueAction = async function() {
  const name = document.getElementById("new-league-name").value.trim();
  if (!name) return;

  const user = window._currentUser;
  if (!user) return;

  const code = generateCode();
  try {
    const col = window.dbCollection("leagues");
    const { addDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const ref = await addDoc(col, {
      name, code,
      owner: user.uid,
      ownerEmail: user.email,
      members: [user.uid],
      memberEmails: [user.email],
      createdAt: new Date().toISOString()
    });

    document.getElementById("modal-body").innerHTML = `
      <p style="color:var(--text-2);margin-bottom:8px">Liga skapad! Dela koden med dina vänner:</p>
      <div class="league-code-display">
        <div class="code">${code}</div>
        <p>Dela denna kod med dina vänner så kan de gå med</p>
      </div>
      <button class="btn-primary" style="width:100%" onclick="closeLeagueModal();renderLeagues()">Klar</button>
    `;
  } catch(e) {
    console.error(e);
    alert("Kunde inte skapa liga");
  }
};

window.joinLeagueAction = async function() {
  const code = document.getElementById("join-code").value.trim().toUpperCase();
  if (!code) return;

  const user = window._currentUser;
  try {
    const q = window.dbQuery(window.dbCollection("leagues"), window.dbWhere("code","==",code));
    const snap = await window.dbGetDocs(q);

    if (snap.empty) { alert("Ingen liga med den koden hittades."); return; }

    const leagueDoc = snap.docs[0];
    const data = leagueDoc.data();

    if (!data.members.includes(user.uid)) {
      await window.dbUpdateDoc(leagueDoc.ref, {
        members: window.dbArrayUnion(user.uid),
        memberEmails: window.dbArrayUnion(user.email),
      });
    }

    closeLeagueModal();
    renderLeagues();
    alert(`Du gick med i ligan: ${data.name}! 🎉`);
  } catch(e) {
    console.error(e);
    alert("Något gick fel");
  }
};

async function renderLeagues() {
  const container = document.getElementById("leagues-container");
  if (!container) return;
  container.innerHTML = `<p style="color:var(--text-3);padding:40px;text-align:center">Laddar dina ligor...</p>`;

  const user = window._currentUser;
  if (!user) return;

  try {
    const q = window.dbQuery(window.dbCollection("leagues"), window.dbWhere("members","array-contains",user.uid));
    const snap = await window.dbGetDocs(q);

    if (snap.empty) {
      container.innerHTML = `
        <div class="league-empty">
          <div class="big-icon">🏆</div>
          <p>Du är inte med i någon liga ännu.</p>
          <p style="margin-top:8px">Skapa en eller gå med med en kod!</p>
        </div>`;
      return;
    }

    let html = `<div class="leagues-grid">`;
    snap.forEach(doc => {
      const l = doc.data();
      const isOwner = l.owner === user.uid;
      html += `
        <div class="league-card">
          ${isOwner ? `<span class="league-card-badge badge-owner">Ägare</span>` : `<span class="league-card-badge badge-active">Medlem</span>`}
          <div class="league-card-name">${l.name}</div>
          <div class="league-card-code">Kod: ${l.code}</div>
          <div class="league-card-meta">
            <span>👥 ${l.members?.length || 1} deltagare</span>
          </div>
        </div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
  } catch(e) {
    container.innerHTML = `<p style="color:var(--text-3);padding:40px;text-align:center">Kunde inte ladda ligor</p>`;
  }
}

// ================================================
// INIT
// ================================================
window.initApp = function() {
  renderHome();
  renderGroups();
};