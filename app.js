// ================================================
// VM-BET 2026
// Komplett app.js
// ================================================

// ================================================
// KONFIG / DEADLINE
// ================================================
const SWEDEN_TIMEZONE = "Europe/Stockholm";
const DEADLINE_UTC = new Date("2026-06-11T18:00:00Z"); // 20:00 svensk tid
const TOTAL_GROUP_MATCHES = 72;

let activeFilter = "all";
let countdownInterval = null;

// ================================================
// VM 2026 MATCHDATA
// ================================================
const WC_MATCHES = [
  { id: 1, group: "GROUP_A", utcDate: "2026-06-11T21:00:00Z", homeTeam: "Mexiko", awayTeam: "Sydafrika" },
  { id: 2, group: "GROUP_A", utcDate: "2026-06-12T04:00:00Z", homeTeam: "Sydkorea", awayTeam: "Tjeckien" },
  { id: 3, group: "GROUP_A", utcDate: "2026-06-18T16:00:00Z", homeTeam: "Tjeckien", awayTeam: "Sydafrika" },
  { id: 4, group: "GROUP_A", utcDate: "2026-06-18T19:00:00Z", homeTeam: "Mexiko", awayTeam: "Sydkorea" },
  { id: 5, group: "GROUP_A", utcDate: "2026-06-25T01:00:00Z", homeTeam: "Sydafrika", awayTeam: "Sydkorea" },
  { id: 6, group: "GROUP_A", utcDate: "2026-06-25T01:00:00Z", homeTeam: "Tjeckien", awayTeam: "Mexiko" },

  { id: 7, group: "GROUP_B", utcDate: "2026-06-12T19:00:00Z", homeTeam: "Kanada", awayTeam: "Bosnien & Hercegovina" },
  { id: 8, group: "GROUP_B", utcDate: "2026-06-13T01:00:00Z", homeTeam: "Qatar", awayTeam: "Schweiz" },
  { id: 9, group: "GROUP_B", utcDate: "2026-06-18T19:00:00Z", homeTeam: "Schweiz", awayTeam: "Bosnien & Hercegovina" },
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
  { id: 72, group: "GROUP_L", utcDate: "2026-06-27T21:00:00Z", homeTeam: "Kroatien", awayTeam: "Ghana" }
];

// ================================================
// HJÄLPFUNKTIONER
// ================================================
function isBeforeDeadline() {
  return new Date() < DEADLINE_UTC;
}

function getDeadlineStatusText() {
  if (isBeforeDeadline()) {
    return "Öppet för tips fram till 11 juni 2026 kl. 20:00 svensk tid.";
  }
  return "Deadline har passerat. Tipsning är nu låst.";
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const date = new Intl.DateTimeFormat("sv-SE", {
    timeZone: SWEDEN_TIMEZONE,
    day: "numeric",
    month: "short"
  }).format(d);

  const time = new Intl.DateTimeFormat("sv-SE", {
    timeZone: SWEDEN_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit"
  }).format(d);

  return `${date} ${time}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeWinnerString(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function initialsFromName(name = "") {
  const parts = name.trim().split(" ").filter(Boolean);
  if (!parts.length) return "?";
  return parts.slice(0, 2).map(p => p[0]?.toUpperCase() || "").join("");
}

function showToast(message, type = "success") {
  const existing = document.getElementById("global-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "global-toast";
  toast.className = `global-toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 20);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

// ================================================
// STORAGE
// ================================================
function getSavedTips() {
  return JSON.parse(localStorage.getItem("vm2026_tips") || "{}");
}

function saveTip(id, hg, ag) {
  const tips = getSavedTips();
  tips[id] = { homeGoals: hg, awayGoals: ag };
  localStorage.setItem("vm2026_tips", JSON.stringify(tips));
}

function getKnockoutPicks() {
  return JSON.parse(localStorage.getItem("vm2026_knockout") || "{}");
}

function saveKnockoutPick(matchId, winner) {
  const picks = getKnockoutPicks();
  picks[matchId] = winner;
  clearDownstreamPicks(matchId, picks);
  localStorage.setItem("vm2026_knockout", JSON.stringify(picks));
}

function clearDownstreamPicks(matchId, picks) {
  const id = Number(matchId);
  let next = null;

  if (id >= 101 && id <= 116) next = 200 + Math.ceil((id - 100) / 2);
  else if (id >= 201 && id <= 208) next = 300 + Math.ceil((id - 200) / 2);
  else if (id >= 301 && id <= 304) next = 400 + Math.ceil((id - 300) / 2);
  else if (id >= 401 && id <= 402) next = 501;

  if (next && picks[next]) {
    delete picks[next];
    clearDownstreamPicks(next, picks);
  }
}

// ================================================
// GRUPPER / TABELLER
// ================================================
function groupMatchesByGroup(matches) {
  return matches.reduce((acc, match) => {
    if (!acc[match.group]) acc[match.group] = [];
    acc[match.group].push(match);
    return acc;
  }, {});
}

function calcGroupStandings(groupMatches, tips) {
  const teams = {};

  for (const match of groupMatches) {
    if (!teams[match.homeTeam]) {
      teams[match.homeTeam] = { name: match.homeTeam, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    }
    if (!teams[match.awayTeam]) {
      teams[match.awayTeam] = { name: match.awayTeam, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 };
    }

    const tip = tips[match.id];
    if (!tip) continue;

    const hg = Number(tip.homeGoals);
    const ag = Number(tip.awayGoals);

    teams[match.homeTeam].p++;
    teams[match.awayTeam].p++;

    teams[match.homeTeam].gf += hg;
    teams[match.homeTeam].ga += ag;
    teams[match.awayTeam].gf += ag;
    teams[match.awayTeam].ga += hg;

    if (hg > ag) {
      teams[match.homeTeam].w++;
      teams[match.homeTeam].pts += 3;
      teams[match.awayTeam].l++;
    } else if (hg < ag) {
      teams[match.awayTeam].w++;
      teams[match.awayTeam].pts += 3;
      teams[match.homeTeam].l++;
    } else {
      teams[match.homeTeam].d++;
      teams[match.homeTeam].pts++;
      teams[match.awayTeam].d++;
      teams[match.awayTeam].pts++;
    }
  }

  return Object.values(teams).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const gdA = a.gf - a.ga;
    const gdB = b.gf - b.ga;
    if (gdB !== gdA) return gdB - gdA;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.name.localeCompare(b.name, "sv");
  });
}

function getBestThirds(allGroups, tips) {
  const thirds = [];

  for (const [groupName, matches] of Object.entries(allGroups)) {
    const standings = calcGroupStandings(matches, tips);
    if (standings.length >= 3) {
      thirds.push({ ...standings[2], group: groupName });
    }
  }

  return thirds
    .sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      const gdA = a.gf - a.ga;
      const gdB = b.gf - b.ga;
      if (gdB !== gdA) return gdB - gdA;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return a.name.localeCompare(b.name, "sv");
    })
    .slice(0, 8);
}

// ================================================
// SLUTSPEL
// ================================================
function calcR32Matchups(gs, thirds) {
  const w = (g) => gs[`GROUP_${g}`]?.[0]?.name || `Vinnare ${g}`;
  const r = (g) => gs[`GROUP_${g}`]?.[1]?.name || `Tvåa ${g}`;
  const t = (i) => thirds[i]?.name || `Bästa trea #${i + 1}`;

  return [
    { id: 101, home: w("A"), away: r("B") },
    { id: 102, home: w("C"), away: r("F") },
    { id: 103, home: w("E"), away: t(0) },
    { id: 104, home: w("F"), away: r("C") },
    { id: 105, home: w("G"), away: t(1) },
    { id: 106, home: w("D"), away: t(2) },
    { id: 107, home: w("I"), away: t(3) },
    { id: 108, home: w("L"), away: t(4) },
    { id: 109, home: r("A"), away: r("D") },
    { id: 110, home: w("B"), away: t(5) },
    { id: 111, home: w("H"), away: r("J") },
    { id: 112, home: w("J"), away: r("H") },
    { id: 113, home: w("K"), away: t(6) },
    { id: 114, home: r("K"), away: r("L") },
    { id: 115, home: r("G"), away: t(7) },
    { id: 116, home: r("E"), away: r("I") }
  ];
}

function calcKnockoutMatchups(r32, picks) {
  const r16 = Array.from({ length: 8 }, (_, i) => ({
    id: 201 + i,
    home: picks[r32[i * 2].id] || `Vinnare M${r32[i * 2].id - 100}`,
    away: picks[r32[i * 2 + 1].id] || `Vinnare M${r32[i * 2 + 1].id - 100}`
  }));

  const qf = Array.from({ length: 4 }, (_, i) => ({
    id: 301 + i,
    home: picks[r16[i * 2].id] || `Vinnare M${r16[i * 2].id}`,
    away: picks[r16[i * 2 + 1].id] || `Vinnare M${r16[i * 2 + 1].id}`
  }));

  const sf = [
    { id: 401, home: picks[301] || "Vinnare QF1", away: picks[302] || "Vinnare QF2" },
    { id: 402, home: picks[303] || "Vinnare QF3", away: picks[304] || "Vinnare QF4" }
  ];

  const final = [
    { id: 501, home: picks[401] || "Vinnare SF1", away: picks[402] || "Vinnare SF2" }
  ];

  return { r16, qf, sf, final };
}

// ================================================
// POÄNG
// ================================================
function calcUserPoints(tips, picks, groupResults, knockoutResults) {
  let pts = 0;

  for (const [id, tip] of Object.entries(tips || {})) {
    const actual = groupResults?.[id];
    if (!actual) continue;

    if (Number(tip.homeGoals) === Number(actual.homeGoals) && Number(tip.awayGoals) === Number(actual.awayGoals)) {
      pts += 3;
    } else {
      const tipResult =
        Number(tip.homeGoals) > Number(tip.awayGoals)
          ? "H"
          : Number(tip.homeGoals) < Number(tip.awayGoals)
          ? "A"
          : "D";

      const actualResult =
        Number(actual.homeGoals) > Number(actual.awayGoals)
          ? "H"
          : Number(actual.homeGoals) < Number(actual.awayGoals)
          ? "A"
          : "D";

      if (tipResult === actualResult) pts += 1;
    }
  }

  for (const [id, pick] of Object.entries(picks || {})) {
    if (knockoutResults?.[id] && knockoutResults[id] === pick) {
      pts += 2;
    }
  }

  return pts;
}

// ================================================
// AVATAR PREVIEW
// ================================================
window.previewAvatar = function (e) {
  const file = e.target.files?.[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    document.getElementById("reg-error").textContent = "Profilbilden får vara max 5 MB.";
    e.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (ev) => {
    const preview = document.getElementById("avatar-preview");
    preview.innerHTML = `<img src="${ev.target.result}" alt="avatar" />`;
  };
  reader.readAsDataURL(file);
};

window.previewProfileAvatar = function (e) {
  const file = e.target.files?.[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    const msg = document.getElementById("profile-msg");
    if (msg) msg.textContent = "Profilbilden får vara max 5 MB.";
    e.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (ev) => {
    const preview = document.getElementById("profile-avatar-preview");
    preview.innerHTML = `<img src="${ev.target.result}" alt="avatar" />`;
  };
  reader.readAsDataURL(file);
};

// ================================================
// AUTH-SKÄRM / MODALER
// ================================================
window.showLogin = function () {
  document.getElementById("panel-register").style.display = "none";
  document.getElementById("panel-login").style.display = "flex";
};

window.showRegister = function () {
  document.getElementById("panel-login").style.display = "none";
  document.getElementById("panel-register").style.display = "flex";
};

window.showForgotPassword = function () {
  document.getElementById("forgot-email").value = document.getElementById("login-email")?.value || "";
  document.getElementById("forgot-msg").textContent = "";
  document.getElementById("forgot-msg").className = "modal-message";
  document.getElementById("forgot-modal").style.display = "flex";
};

window.closeForgotModal = function (e) {
  if (!e || e.target.classList.contains("modal-overlay")) {
    document.getElementById("forgot-modal").style.display = "none";
  }
};

window.requestPasswordReset = async function () {
  const email = document.getElementById("forgot-email").value.trim().toLowerCase();
  const msg = document.getElementById("forgot-msg");
  msg.textContent = "";
  msg.className = "modal-message";

  if (!email) {
    msg.textContent = "Fyll i din e-postadress.";
    msg.classList.add("error");
    return;
  }

  try {
    await window._firebaseFns.sendPasswordResetEmail(window._auth, email);
    msg.textContent = "Återställningslänk skickad. Kolla din mejl.";
    msg.classList.add("success");
  } catch (error) {
    console.error(error);
    msg.textContent = "Ingen användare med den e-postadressen hittades.";
    msg.classList.add("error");
  }
};

// ================================================
// TAB NAVIGATION
// ================================================
function updateSidebar() {
  const user = window._auth?.currentUser || window._currentUser;
  if (!user) return;

  const sidebarAvatar = document.getElementById("sidebar-avatar");
  if (sidebarAvatar) {
    if (user.photoURL) {
      sidebarAvatar.innerHTML = `<img src="${escapeHtml(user.photoURL)}" alt="avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`;
    } else {
      sidebarAvatar.textContent = initialsFromName(user.displayName || user.email);
    }
  }

  const sidebarName = document.getElementById("sidebar-name");
  if (sidebarName) sidebarName.textContent = user.displayName || user.email;
}
window.switchTab = function (tab, el) {
  document.querySelectorAll(".tab-content").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));

  const tabEl = document.getElementById(`tab-${tab}`);
  if (tabEl) tabEl.classList.add("active");

  if (el) {
    el.classList.add("active");
  } else {
    const navEl = document.querySelector(`[data-tab="${tab}"]`);
    if (navEl) navEl.classList.add("active");
  }

  if (tab === "home") renderHome();
  if (tab === "groups") renderGroups();
  if (tab === "bracket") renderBracket();
  if (tab === "leaderboard") renderLeaderboard();
  if (tab === "leagues") renderLeagues();
  if (tab === "profile") renderProfile();
};

// ================================================
// COUNTDOWN / DEADLINE BANNER
// ================================================
function renderCountdown() {
  const el = document.getElementById("countdown-display");
  if (!el) return;

  const diff = DEADLINE_UTC.getTime() - Date.now();

  if (diff <= 0) {
    el.innerHTML = `
      <div class="countdown-caption">Tipsdeadline</div>
      <div class="countdown-locked">LÅST</div>
    `;
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  el.innerHTML = `
    <div class="countdown-caption">Deadline om</div>
    <div class="countdown-grid">
      <div class="cd-unit">
        <div class="cd-num">${days}</div>
        <div class="cd-label">Dagar</div>
      </div>
      <div class="cd-divider">:</div>
      <div class="cd-unit">
        <div class="cd-num">${String(hours).padStart(2, "0")}</div>
        <div class="cd-label">Tim</div>
      </div>
      <div class="cd-divider">:</div>
      <div class="cd-unit">
        <div class="cd-num">${String(mins).padStart(2, "0")}</div>
        <div class="cd-label">Min</div>
      </div>
      <div class="cd-divider">:</div>
      <div class="cd-unit">
        <div class="cd-num">${String(secs).padStart(2, "0")}</div>
        <div class="cd-label">Sek</div>
      </div>
    </div>
  `;
}

function renderDeadlineBanners() {
  const groupsBanner = document.getElementById("deadline-banner");
  const bracketBanner = document.getElementById("knockout-deadline-banner");
  const html = isBeforeDeadline()
    ? `⏳ ${getDeadlineStatusText()}`
    : `🔒 ${getDeadlineStatusText()}`;

  if (groupsBanner) {
    groupsBanner.innerHTML = html;
    groupsBanner.className = `deadline-banner ${isBeforeDeadline() ? "open" : "closed"}`;
  }

  if (bracketBanner) {
    bracketBanner.innerHTML = html;
    bracketBanner.className = `deadline-banner ${isBeforeDeadline() ? "open" : "closed"}`;
  }
}

// ================================================
// HOME
// ================================================
function updateProgressBar(tipped) {
  const pct = ((tipped / TOTAL_GROUP_MATCHES) * 100).toFixed(1);
  const bar = document.getElementById("tip-progress-bar");
  const txt = document.getElementById("tip-progress-text");

  if (bar) bar.style.width = `${pct}%`;
  if (txt) txt.textContent = `${tipped}/${TOTAL_GROUP_MATCHES} tipsade`;
}

function renderHome() {
  const user = window._auth?.currentUser || window._currentUser;
  if (!user) return;

  const firstName = user.displayName ? user.displayName.split(" ")[0] : user.email.split("@")[0];
  const welcomeEl = document.getElementById("welcome-name");
  if (welcomeEl) welcomeEl.textContent = `Hej, ${firstName}!`;

updateSidebar();

  // resten av renderHome är oförändrad...

  const tips = getSavedTips();
  const tipped = Object.keys(tips).length;

  const statTipped = document.getElementById("stat-tipped");
  const statLeft = document.getElementById("stat-left");
  if (statTipped) statTipped.textContent = String(tipped);
  if (statLeft) statLeft.textContent = String(TOTAL_GROUP_MATCHES - tipped);

  updateProgressBar(tipped);

  const upcoming = WC_MATCHES.filter((m) => !tips[m.id]).slice(0, 5);
  const upEl = document.getElementById("upcoming-matches");
  if (upEl) {
    if (!upcoming.length) {
      upEl.innerHTML = `<p class="empty-inline">Alla gruppmatcher är tipsade. Snyggt! 🎉</p>`;
    } else {
      upEl.innerHTML = upcoming
        .map(
          (m) => `
            <div class="upcoming-match">
              <div>
                <div class="um-teams">${escapeHtml(m.homeTeam)} vs ${escapeHtml(m.awayTeam)}</div>
                <div class="um-date">${formatDate(m.utcDate)}</div>
              </div>
              <button class="um-tip-btn" onclick="goTipMatch(${m.id})">Tippa →</button>
            </div>
          `
        )
        .join("");
    }
  }

  renderMiniLeaderboard();
  renderDeadlineBanners();
  renderCountdown();

  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    renderCountdown();
    renderDeadlineBanners();
  }, 1000);
}

async function renderMiniLeaderboard() {
  const el = document.getElementById("mini-leaderboard");
  if (!el) return;

  el.innerHTML = `<p class="empty-inline">Laddar...</p>`;

  try {
    const allUsers = await window.fetchAllTips();
    const results = await window.fetchResults();
    const myEmail = window._currentUser?.email || "";

    const ranked = allUsers
      .map((u) => ({
        email: u.email,
        displayName: u.displayName || u.email?.split("@")[0] || "Spelare",
        photoURL: u.photoURL || "",
        points: calcUserPoints(u.tips || {}, u.picks || {}, results.groupResults || {}, results.knockoutResults || {})
      }))
      .sort((a, b) => b.points - a.points);

    const topFive = ranked.slice(0, 5);
    const myRank = ranked.findIndex((u) => u.email === myEmail) + 1;
    const me = ranked.find((u) => u.email === myEmail);

    const statRank = document.getElementById("stat-rank");
    const statPts = document.getElementById("stat-pts");
    const sidebarPts = document.getElementById("sidebar-pts");

    if (statRank) statRank.textContent = myRank || "–";
    if (statPts) statPts.textContent = String(me?.points || 0);
    if (sidebarPts) sidebarPts.textContent = `${me?.points || 0} poäng`;

    if (!topFive.length) {
      el.innerHTML = `<p class="empty-inline">Inga deltagare ännu.</p>`;
      return;
    }

    const rankClasses = ["gold", "silver", "bronze"];

    el.innerHTML = topFive
      .map((u, i) => {
        const isMe = u.email === myEmail;
        const avatar = u.photoURL
          ? `<img src="${u.photoURL}" alt="" />`
          : escapeHtml(initialsFromName(u.displayName));

        return `
          <div class="mini-lb-row ${isMe ? "me" : ""}">
            <div class="mini-lb-rank ${rankClasses[i] || ""}">${i + 1}</div>
            <div class="mini-lb-avatar">${avatar}</div>
            <div class="mini-lb-name">${escapeHtml(u.displayName)}${isMe ? " (du)" : ""}</div>
            <div class="mini-lb-pts">${u.points}p</div>
          </div>
        `;
      })
      .join("");
  } catch (e) {
    console.error(e);
    el.innerHTML = `<p class="empty-inline">Kunde inte ladda topplistan.</p>`;
  }
}

window.goTipMatch = function (matchId) {
  switchTab("groups", document.querySelector('[data-tab="groups"]'));
  setTimeout(() => {
    const el = document.getElementById(`match-${matchId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("match-highlight");
      setTimeout(() => el.classList.remove("match-highlight"), 1800);
    }
  }, 250);
};

// ================================================
// GROUPS
// ================================================
window.filterGroups = function (filter, btn) {
  activeFilter = filter;
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderGroups();
};

function renderStandingsRows(standings) {
  return standings
    .map((team, i) => {
      const gd = team.gf - team.ga;
      const rowClass = i === 0 ? "pos-first" : i === 1 ? "pos-second" : i === 2 ? "pos-third" : "";
      return `
        <tr class="${rowClass}">
          <td>${i + 1}</td>
          <td>${escapeHtml(team.name)}</td>
          <td>${team.p}</td>
          <td>${team.w}</td>
          <td>${team.d}</td>
          <td>${team.l}</td>
          <td>${team.gf}</td>
          <td>${team.ga}</td>
          <td>${gd >= 0 ? "+" : ""}${gd}</td>
          <td><strong>${team.pts}</strong></td>
        </tr>
      `;
    })
    .join("");
}

function renderGroups() {
  const container = document.getElementById("groups-container");
  if (!container) return;

  const tips = getSavedTips();
  const allGroups = groupMatchesByGroup(WC_MATCHES);
  container.innerHTML = "";

  for (const groupName of Object.keys(allGroups).sort()) {
    const matches = allGroups[groupName];

    let show = true;
    if (activeFilter === "sweden") {
      show = matches.some((m) => m.homeTeam === "Sverige" || m.awayTeam === "Sverige");
    } else if (activeFilter === "untipped") {
      show = matches.some((m) => !tips[m.id]);
    }

    if (!show) continue;

    const standings = calcGroupStandings(matches, tips);
    const label = groupName.replace("GROUP_", "Grupp ");
    const tippedCount = matches.filter((m) => tips[m.id]).length;

    const block = document.createElement("div");
    block.className = "group-block";
    block.innerHTML = `
      <div class="group-header">
        <span class="group-label">${escapeHtml(label)}</span>
        <span class="group-tag">${tippedCount}/${matches.length} tipsade</span>
      </div>
      <div class="group-body">
        <div class="match-list" id="matches-${groupName}"></div>
        <div class="standings-wrapper">
          <table class="standings-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Lag</th>
                <th>S</th>
                <th>V</th>
                <th>O</th>
                <th>F</th>
                <th>GM</th>
                <th>IM</th>
                <th>MS</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody id="standings-${groupName}">
              ${renderStandingsRows(standings)}
            </tbody>
          </table>
        </div>
      </div>
    `;
    container.appendChild(block);

    const matchList = document.getElementById(`matches-${groupName}`);

    for (const match of matches) {
      if (activeFilter === "untipped" && tips[match.id]) continue;

      const tip = tips[match.id];
      const isSwedenMatch = match.homeTeam === "Sverige" || match.awayTeam === "Sverige";
      const locked = !isBeforeDeadline();

      const row = document.createElement("div");
      row.className = `match-row ${tip ? "saved" : ""} ${isSwedenMatch ? "sweden-match" : ""}`;
      row.id = `match-${match.id}`;

      row.innerHTML = `
        <div class="match-date">${formatDate(match.utcDate)}</div>
        <div class="match-teams">
          <div class="team-name home">${escapeHtml(match.homeTeam)}</div>
          <div class="score-inputs">
            <input type="number" class="score-input" min="0" max="99" value="${tip ? Number(tip.homeGoals) : ""}" placeholder="–" id="home-${match.id}" ${locked ? "disabled" : ""} />
            <span class="score-sep">:</span>
            <input type="number" class="score-input" min="0" max="99" value="${tip ? Number(tip.awayGoals) : ""}" placeholder="–" id="away-${match.id}" ${locked ? "disabled" : ""} />
          </div>
          <div class="team-name away">${escapeHtml(match.awayTeam)}</div>
        </div>
        <button class="tip-btn" onclick="submitTip(${match.id})" ${locked ? "disabled" : ""}>${locked ? "Låst" : "Spara"}</button>
      `;

      matchList.appendChild(row);

      const homeInput = row.querySelector(`#home-${match.id}`);
      const awayInput = row.querySelector(`#away-${match.id}`);

      if (homeInput && awayInput && !locked) {
        homeInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") awayInput.focus();
        });
        awayInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") submitTip(match.id);
        });
      }
    }
  }

  updateProgressBar(Object.keys(tips).length);
  renderDeadlineBanners();
}

window.submitTip = async function (matchId) {
  if (!isBeforeDeadline()) {
    showToast("Deadline har passerat. Du kan inte ändra tips längre.", "error");
    return;
  }

  const h = document.getElementById(`home-${matchId}`);
  const a = document.getElementById(`away-${matchId}`);

  if (!h || !a || h.value === "" || a.value === "") {
    showToast("Fyll i båda resultaten först.", "error");
    return;
  }

  const hg = Number(h.value);
  const ag = Number(a.value);

  if (Number.isNaN(hg) || Number.isNaN(ag) || hg < 0 || ag < 0) {
    showToast("Ogiltigt resultat.", "error");
    return;
  }

  saveTip(matchId, hg, ag);

  const row = document.getElementById(`match-${matchId}`);
  if (row) row.classList.add("saved");

  const allGroups = groupMatchesByGroup(WC_MATCHES);
  const tips = getSavedTips();
  const matchObj = WC_MATCHES.find((m) => m.id === matchId);

  if (matchObj) {
    const tbody = document.getElementById(`standings-${matchObj.group}`);
    if (tbody) {
      tbody.innerHTML = renderStandingsRows(calcGroupStandings(allGroups[matchObj.group], tips));
    }
  }

  updateProgressBar(Object.keys(tips).length);

  try {
    await window.syncTipsToCloud?.();
  } catch (e) {
    console.error(e);
  }

  renderHome();
  showToast("Tipset sparat.");
};

// ================================================
// BRACKET
// ================================================
function renderBracket() {
  const container = document.getElementById("bracket-container");
  if (!container) return;

  const tips = getSavedTips();
  const picks = getKnockoutPicks();
  const allGroups = groupMatchesByGroup(WC_MATCHES);
  const gs = {};

  for (const [groupName, matches] of Object.entries(allGroups)) {
    gs[groupName] = calcGroupStandings(matches, tips);
  }

  const thirds = getBestThirds(allGroups, tips);
  const r32 = calcR32Matchups(gs, thirds);
  const { r16, qf, sf, final } = calcKnockoutMatchups(r32, picks);
  const locked = !isBeforeDeadline();

  const rounds = [
    { name: "Sextondelsfinal", emoji: "⚡", matches: r32 },
    { name: "Åttondelsfinaler", emoji: "⚔️", matches: r16 },
    { name: "Kvartsfinaler", emoji: "🔥", matches: qf },
    { name: "Semifinaler", emoji: "🌟", matches: sf },
    { name: "Final", emoji: "🏆", matches: final }
  ];

  container.innerHTML = rounds
    .map(
      (round) => `
        <div class="bracket-round">
          <div class="round-header">
            <span class="round-title">${round.emoji} ${escapeHtml(round.name)}</span>
            <span class="round-hint">${locked ? "Deadline har passerat" : "Klicka på ett lag för att välja vinnare"}</span>
          </div>
          <div class="bracket-grid">
            ${round.matches
              .map((m) => {
                const picked = picks[m.id];
                return `
                  <div class="bracket-card">
                    <button
                      class="bracket-btn ${picked === m.home ? "picked" : ""}"
                      onclick="pickWinner(${m.id}, '${safeWinnerString(m.home)}')"
                      ${locked ? "disabled" : ""}
                    >
                      ${picked === m.home ? "✓ " : ""}${escapeHtml(m.home)}
                    </button>
                    <div class="bracket-vs">vs</div>
                    <button
                      class="bracket-btn ${picked === m.away ? "picked" : ""}"
                      onclick="pickWinner(${m.id}, '${safeWinnerString(m.away)}')"
                      ${locked ? "disabled" : ""}
                    >
                      ${picked === m.away ? "✓ " : ""}${escapeHtml(m.away)}
                    </button>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
      `
    )
    .join("");

  renderDeadlineBanners();
}

window.pickWinner = async function (matchId, winner) {
  if (!isBeforeDeadline()) {
    showToast("Deadline har passerat. Slutspelstips är låsta.", "error");
    return;
  }

  saveKnockoutPick(matchId, winner);
  renderBracket();

  try {
    await window.syncTipsToCloud?.();
  } catch (e) {
    console.error(e);
  }

  showToast("Slutspelsval sparat.");
};

// ================================================
// LEADERBOARD
// ================================================
async function renderLeaderboard() {
  const container = document.getElementById("leaderboard-container");
  if (!container) return;

  container.innerHTML = `<p class="loading-block">⏳ Laddar topplista...</p>`;

  try {
    const allUsers = await window.fetchAllTips();
    const results = await window.fetchResults();
    const myEmail = window._currentUser?.email || "";

    const ranked = allUsers
      .map((u) => ({
        email: u.email,
        displayName: u.displayName || u.email?.split("@")[0] || "Spelare",
        photoURL: u.photoURL || "",
        points: calcUserPoints(u.tips || {}, u.picks || {}, results.groupResults || {}, results.knockoutResults || {}),
        tipped: Object.keys(u.tips || {}).length
      }))
      .sort((a, b) => b.points - a.points);

    const rankIcons = ["🥇", "🥈", "🥉"];
    const rankClass = ["r1", "r2", "r3"];

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
            ${
              ranked.length
                ? ranked
                    .map((u, i) => {
                      const avatar = u.photoURL
                        ? `<img src="${u.photoURL}" alt="" />`
                        : escapeHtml(initialsFromName(u.displayName));
                      const isMe = u.email === myEmail;

                      return `
                        <tr class="${isMe ? "my-row" : ""}">
                          <td class="lb-rank-num ${rankClass[i] || ""}">${rankIcons[i] || i + 1}</td>
                          <td>
                            <div class="lb-user">
                              <div class="lb-avatar">${avatar}</div>
                              <div class="lb-name">${escapeHtml(u.displayName)}${isMe ? " (du)" : ""}</div>
                            </div>
                          </td>
                          <td class="lb-tipped">${u.tipped}/${TOTAL_GROUP_MATCHES}</td>
                          <td class="lb-pts">${u.points}</td>
                        </tr>
                      `;
                    })
                    .join("")
                : `<tr><td colspan="4" class="empty-table-cell">Inga deltagare ännu</td></tr>`
            }
          </tbody>
        </table>
      </div>

      <div class="info-box">
        <p>💡 <strong>Poängsystem:</strong> Exakt rätt resultat = 3p · Rätt utgång = 1p · Slutspelsvinnare = 2p</p>
        <p class="info-box-sub">✅ Tips sparas till molnet när du gör ändringar.</p>
      </div>
    `;
  } catch (e) {
    console.error(e);
    container.innerHTML = `<p class="loading-block">Kunde inte ladda topplistan.</p>`;
  }
}

// ================================================
// LIGOR
// ================================================
function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

window.showCreateLeague = function () {
  document.getElementById("modal-title").textContent = "Skapa ny liga";
  document.getElementById("modal-body").innerHTML = `
    <div class="form-group" style="margin-bottom:16px">
      <label>Liga-namn</label>
      <input type="text" id="new-league-name" placeholder="T.ex. VM-kompisarna 2026" />
    </div>
    <div class="modal-btns">
      <button class="btn-secondary" onclick="closeLeagueModal()">Avbryt</button>
      <button class="btn-primary" onclick="createLeagueAction()">Skapa liga</button>
    </div>
  `;
  document.getElementById("league-modal").style.display = "flex";
};

window.showJoinLeague = function () {
  document.getElementById("modal-title").textContent = "Gå med i liga";
  document.getElementById("modal-body").innerHTML = `
    <p class="modal-subtext">Ange koden du fått av din vän.</p>
    <div class="form-group" style="margin-bottom:16px">
      <label>Liga-kod</label>
      <input
        type="text"
        id="join-code"
        placeholder="T.ex. AB12CD"
        style="text-transform:uppercase;letter-spacing:0.1em;font-family:'DM Mono',monospace"
        oninput="this.value=this.value.toUpperCase()"
      />
    </div>
    <div class="modal-btns">
      <button class="btn-secondary" onclick="closeLeagueModal()">Avbryt</button>
      <button class="btn-primary" onclick="joinLeagueAction()">Gå med</button>
    </div>
  `;
  document.getElementById("league-modal").style.display = "flex";
};

window.closeLeagueModal = function (e) {
  if (!e || e.target.classList.contains("modal-overlay")) {
    document.getElementById("league-modal").style.display = "none";
  }
};

window.createLeagueAction = async function () {
  const input = document.getElementById("new-league-name");
  const name = input?.value.trim();
  const user = window._currentUser;

  if (!name) {
    showToast("Fyll i ett liganamn.", "error");
    return;
  }
  if (!user) return;

  try {
    const code = generateCode();

    await window.dbAddDoc(window.dbCollection("leagues"), {
      name,
      code,
      owner: user.uid,
      ownerEmail: user.email,
      ownerName: user.displayName || user.email,
      members: [user.uid],
      memberEmails: [user.email],
      memberNames: [user.displayName || user.email],
      createdAt: new Date().toISOString()
    });

    document.getElementById("modal-body").innerHTML = `
      <p class="modal-subtext">Liga skapad! Dela koden med dina vänner:</p>
      <div class="league-code-display">
        <div class="code">${escapeHtml(code)}</div>
        <p>Dela koden så kan andra gå med i din liga.</p>
      </div>
      <button class="btn-primary" style="width:100%" onclick="closeLeagueModal(); renderLeagues();">Klar</button>
    `;

    showToast("Liga skapad.");
  } catch (e) {
    console.error(e);
    showToast("Kunde inte skapa liga.", "error");
  }
};

window.joinLeagueAction = async function () {
  const code = document.getElementById("join-code")?.value.trim().toUpperCase();
  const user = window._currentUser;
  if (!code) {
    showToast("Fyll i ligakoden.", "error");
    return;
  }
  if (!user) return;

  try {
    const q = window.dbQuery(window.dbCollection("leagues"), window.dbWhere("code", "==", code));
    const snap = await window.dbGetDocs(q);

    if (snap.empty) {
      showToast("Ingen liga med den koden hittades.", "error");
      return;
    }

    const leagueDoc = snap.docs[0];
    const data = leagueDoc.data();

    if (Array.isArray(data.members) && data.members.includes(user.uid)) {
      showToast("Du är redan med i den ligan.", "error");
      return;
    }

    await window.dbUpdateDoc(leagueDoc.ref, {
      members: window.dbArrayUnion(user.uid),
      memberEmails: window.dbArrayUnion(user.email),
      memberNames: window.dbArrayUnion(user.displayName || user.email)
    });

    closeLeagueModal();
    await renderLeagues();
    showToast(`Du gick med i ligan "${data.name}".`);
  } catch (e) {
    console.error(e);
    showToast("Något gick fel när du försökte gå med i ligan.", "error");
  }
};

async function renderLeagues() {
  const container = document.getElementById("leagues-container");
  if (!container) return;

  container.innerHTML = `<p class="loading-block">Laddar dina ligor...</p>`;

  const user = window._currentUser;
  if (!user) return;

  try {
    const q = window.dbQuery(window.dbCollection("leagues"), window.dbWhere("members", "array-contains", user.uid));
    const snap = await window.dbGetDocs(q);

    if (snap.empty) {
      container.innerHTML = `
        <div class="league-empty">
          <div class="big-icon">🏆</div>
          <p>Du är inte med i någon liga ännu.</p>
          <p style="margin-top:8px">Skapa en eller gå med med en kod.</p>
        </div>
      `;
      return;
    }

    const allTipsDocs = await window.fetchAllTips();
    const results = await window.fetchResults();

    const leagues = snap.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data()
    }));

    const html = leagues
      .map((league) => {
        const members = allTipsDocs
          .filter((u) => (league.memberEmails || []).includes(u.email))
          .map((u) => ({
            email: u.email,
            displayName: u.displayName || u.email?.split("@")[0] || "Spelare",
            photoURL: u.photoURL || "",
            points: calcUserPoints(u.tips || {}, u.picks || {}, results.groupResults || {}, results.knockoutResults || {})
          }))
          .sort((a, b) => b.points - a.points);

        return `
          <div class="league-card">
            ${league.owner === user.uid
              ? `<span class="league-card-badge badge-owner">Ägare</span>`
              : `<span class="league-card-badge badge-active">Medlem</span>`}
            <div class="league-card-name">${escapeHtml(league.name)}</div>
            <div class="league-card-code">Kod: ${escapeHtml(league.code)}</div>
            <div class="league-card-meta">
              <span>👥 ${league.members?.length || 1} deltagare</span>
            </div>

            <div class="league-member-board">
              <div class="league-member-board-title">Topplista i ligan</div>
              ${
                members.length
                  ? members
                      .slice(0, 5)
                      .map((m, index) => `
                        <div class="league-member-row">
                          <div class="league-member-rank">${index + 1}</div>
                          <div class="league-member-name">${escapeHtml(m.displayName)}${m.email === user.email ? " (du)" : ""}</div>
                          <div class="league-member-points">${m.points}p</div>
                        </div>
                      `)
                      .join("")
                  : `<div class="league-member-empty">Ingen ligapoäng ännu.</div>`
              }
            </div>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `<div class="leagues-grid">${html}</div>`;
  } catch (e) {
    console.error(e);
    container.innerHTML = `<p class="loading-block">Kunde inte ladda ligor.</p>`;
  }
}

// ================================================
// PROFIL
// ================================================
async function renderProfile() {
  const user = window._auth?.currentUser || window._currentUser;
  window._currentUser = user;
  if (!user) return;

  try {
    let firstName = "";
    let lastName = "";

    const userDoc = await window.dbGetDoc(window.dbDoc("users", user.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      firstName = data.firstName || "";
      lastName = data.lastName || "";
    } else {
      const parts = (user.displayName || "").split(" ");
      firstName = parts[0] || "";
      lastName = parts.slice(1).join(" ");
    }

    const fn = document.getElementById("profile-firstname");
    const ln = document.getElementById("profile-lastname");
    const email = document.getElementById("profile-email-readonly");
    const preview = document.getElementById("profile-avatar-preview");
    const profileMsg = document.getElementById("profile-msg");
    const passwordMsg = document.getElementById("password-msg");

    if (fn) fn.value = firstName;
    if (ln) ln.value = lastName;
    if (email) email.value = user.email || "";

    if (preview) {
      if (user.photoURL) {
        preview.innerHTML = `<img src="${user.photoURL}" alt="avatar" />`;
      } else {
        preview.textContent = initialsFromName(user.displayName || user.email);
      }
    }

    if (profileMsg) {
      profileMsg.textContent = "";
      profileMsg.className = "auth-error profile-feedback";
    }
    if (passwordMsg) {
      passwordMsg.textContent = "";
      passwordMsg.className = "auth-error profile-feedback";
    }
  } catch (e) {
    console.error(e);
  }
}

window.saveProfileChanges = async function () {
  const user = window._auth.currentUser;
  const msg = document.getElementById("profile-msg");
  if (!user || !msg) return;

  msg.textContent = "";
  msg.className = "auth-error profile-feedback";

  const firstName = document.getElementById("profile-firstname")?.value.trim() || "";
  const lastName = document.getElementById("profile-lastname")?.value.trim() || "";
  const file = document.getElementById("profile-avatar-input")?.files?.[0];

  if (!firstName || !lastName) {
    msg.textContent = "Fyll i både förnamn och efternamn.";
    return;
  }

  try {
    let photoURL = user.photoURL || "";

    if (file) {
      const storageRef = window.storageRef(window._storage, `avatars/${user.uid}`);
      await window.storageUploadBytes(storageRef, file);
      photoURL = await window.storageGetDownloadURL(storageRef);
    }

    const displayName = `${firstName} ${lastName}`.trim();

    await window._firebaseFns.updateProfile(user, {
      displayName,
      photoURL
    });

    await user.reload();
    window._currentUser = window._auth.currentUser;

    // Uppdatera sidebar omedelbart utan att vänta på renderHome
    updateSidebar();

    await window.dbSetDoc(
      window.dbDoc("users", user.uid),
      {
        email: user.email,
        displayName,
        firstName,
        lastName,
        photoURL,
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );

    await window.dbSetDoc(
      window.dbDoc("tips", user.uid),
      {
        email: user.email,
        displayName,
        photoURL,
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );

    msg.textContent = "Profilen har uppdaterats.";
    msg.classList.add("success");

    renderHome();
    renderProfile();
    showToast("Profil sparad.");
  } catch (e) {
    console.error(e);
    msg.textContent = "Kunde inte spara profilen.";
  }
};

window.changeMyPassword = async function () {
  const user = window._currentUser;
  const msg = document.getElementById("password-msg");
  if (!user || !msg) return;

  msg.textContent = "";
  msg.className = "auth-error profile-feedback";

  const currentPassword = document.getElementById("current-password")?.value || "";
  const newPassword = document.getElementById("new-password")?.value || "";

  if (!currentPassword || !newPassword) {
    msg.textContent = "Fyll i både nuvarande och nytt lösenord.";
    return;
  }

  if (newPassword.length < 6) {
    msg.textContent = "Nytt lösenord måste vara minst 6 tecken.";
    return;
  }

  try {
    const credential = window._firebaseFns.EmailAuthProvider.credential(user.email, currentPassword);
    await window._firebaseFns.reauthenticateWithCredential(user, credential);
    await window._firebaseFns.updatePassword(user, newPassword);

    document.getElementById("current-password").value = "";
    document.getElementById("new-password").value = "";

    msg.textContent = "Lösenordet har bytts.";
    msg.classList.add("success");

    showToast("Lösenord uppdaterat.");
  } catch (e) {
    console.error(e);
    msg.textContent = "Fel nuvarande lösenord eller kunde inte byta lösenord.";
  }
};

// ================================================
// INIT
// ================================================
window.initApp = function () {
  renderHome();
  renderGroups();
  renderProfile();
};

document.addEventListener("DOMContentLoaded", () => {
  renderDeadlineBanners();
});