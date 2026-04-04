// ================================================
// VM-BET 2026 — app.js
// ================================================

const SWEDEN_TIMEZONE = "Europe/Stockholm";
const DEADLINE_UTC = new Date("2026-06-11T18:00:00Z");
const TOTAL_GROUP_MATCHES = 72;

let activeLeagueId = null;
let countdownInterval = null;

// ================================================
// VM 2026 MATCHDATA
// ================================================
const WC_MATCHES = [
  { id: 1,  group: "GROUP_A", utcDate: "2026-06-11T21:00:00Z", homeTeam: "Mexiko",               awayTeam: "Sydafrika" },
  { id: 2,  group: "GROUP_A", utcDate: "2026-06-12T04:00:00Z", homeTeam: "Sydkorea",              awayTeam: "Tjeckien" },
  { id: 3,  group: "GROUP_A", utcDate: "2026-06-18T16:00:00Z", homeTeam: "Tjeckien",              awayTeam: "Sydafrika" },
  { id: 4,  group: "GROUP_A", utcDate: "2026-06-18T19:00:00Z", homeTeam: "Mexiko",               awayTeam: "Sydkorea" },
  { id: 5,  group: "GROUP_A", utcDate: "2026-06-25T01:00:00Z", homeTeam: "Sydafrika",             awayTeam: "Sydkorea" },
  { id: 6,  group: "GROUP_A", utcDate: "2026-06-25T01:00:00Z", homeTeam: "Tjeckien",              awayTeam: "Mexiko" },
  { id: 7,  group: "GROUP_B", utcDate: "2026-06-12T19:00:00Z", homeTeam: "Kanada",               awayTeam: "Bosnien & Hercegovina" },
  { id: 8,  group: "GROUP_B", utcDate: "2026-06-13T01:00:00Z", homeTeam: "Qatar",                awayTeam: "Schweiz" },
  { id: 9,  group: "GROUP_B", utcDate: "2026-06-18T19:00:00Z", homeTeam: "Schweiz",              awayTeam: "Bosnien & Hercegovina" },
  { id: 10, group: "GROUP_B", utcDate: "2026-06-18T03:00:00Z", homeTeam: "Kanada",               awayTeam: "Qatar" },
  { id: 11, group: "GROUP_B", utcDate: "2026-06-24T19:00:00Z", homeTeam: "Schweiz",              awayTeam: "Kanada" },
  { id: 12, group: "GROUP_B", utcDate: "2026-06-24T19:00:00Z", homeTeam: "Bosnien & Hercegovina", awayTeam: "Qatar" },
  { id: 13, group: "GROUP_C", utcDate: "2026-06-13T22:00:00Z", homeTeam: "Brasilien",            awayTeam: "Marocko" },
  { id: 14, group: "GROUP_C", utcDate: "2026-06-14T01:00:00Z", homeTeam: "Haiti",                awayTeam: "Skottland" },
  { id: 15, group: "GROUP_C", utcDate: "2026-06-19T22:00:00Z", homeTeam: "Skottland",            awayTeam: "Marocko" },
  { id: 16, group: "GROUP_C", utcDate: "2026-06-20T01:00:00Z", homeTeam: "Brasilien",            awayTeam: "Haiti" },
  { id: 17, group: "GROUP_C", utcDate: "2026-06-24T22:00:00Z", homeTeam: "Marocko",              awayTeam: "Haiti" },
  { id: 18, group: "GROUP_C", utcDate: "2026-06-24T22:00:00Z", homeTeam: "Skottland",            awayTeam: "Brasilien" },
  { id: 19, group: "GROUP_D", utcDate: "2026-06-12T18:00:00Z", homeTeam: "USA",                  awayTeam: "Paraguay" },
  { id: 20, group: "GROUP_D", utcDate: "2026-06-14T04:00:00Z", homeTeam: "Australien",           awayTeam: "Turkiet" },
  { id: 21, group: "GROUP_D", utcDate: "2026-06-19T04:00:00Z", homeTeam: "USA",                  awayTeam: "Australien" },
  { id: 22, group: "GROUP_D", utcDate: "2026-06-20T04:00:00Z", homeTeam: "Turkiet",              awayTeam: "Paraguay" },
  { id: 23, group: "GROUP_D", utcDate: "2026-06-26T02:00:00Z", homeTeam: "Turkiet",              awayTeam: "USA" },
  { id: 24, group: "GROUP_D", utcDate: "2026-06-26T02:00:00Z", homeTeam: "Paraguay",             awayTeam: "Australien" },
  { id: 25, group: "GROUP_E", utcDate: "2026-06-14T17:00:00Z", homeTeam: "Tyskland",             awayTeam: "Curaçao" },
  { id: 26, group: "GROUP_E", utcDate: "2026-06-14T23:00:00Z", homeTeam: "Elfenbenskusten",      awayTeam: "Ecuador" },
  { id: 27, group: "GROUP_E", utcDate: "2026-06-20T20:00:00Z", homeTeam: "Tyskland",             awayTeam: "Elfenbenskusten" },
  { id: 28, group: "GROUP_E", utcDate: "2026-06-21T00:00:00Z", homeTeam: "Ecuador",              awayTeam: "Curaçao" },
  { id: 29, group: "GROUP_E", utcDate: "2026-06-25T20:00:00Z", homeTeam: "Curaçao",              awayTeam: "Elfenbenskusten" },
  { id: 30, group: "GROUP_E", utcDate: "2026-06-25T20:00:00Z", homeTeam: "Ecuador",              awayTeam: "Tyskland" },
  { id: 31, group: "GROUP_F", utcDate: "2026-06-14T12:00:00Z", homeTeam: "Nederländerna",        awayTeam: "Japan" },
  { id: 32, group: "GROUP_F", utcDate: "2026-06-15T02:00:00Z", homeTeam: "Sverige",              awayTeam: "Tunisien" },
  { id: 33, group: "GROUP_F", utcDate: "2026-06-20T17:00:00Z", homeTeam: "Nederländerna",        awayTeam: "Sverige" },
  { id: 34, group: "GROUP_F", utcDate: "2026-06-21T04:00:00Z", homeTeam: "Tunisien",             awayTeam: "Japan" },
  { id: 35, group: "GROUP_F", utcDate: "2026-06-25T23:00:00Z", homeTeam: "Tunisien",             awayTeam: "Nederländerna" },
  { id: 36, group: "GROUP_F", utcDate: "2026-06-25T23:00:00Z", homeTeam: "Japan",                awayTeam: "Sverige" },
  { id: 37, group: "GROUP_G", utcDate: "2026-06-15T19:00:00Z", homeTeam: "Belgien",              awayTeam: "Egypten" },
  { id: 38, group: "GROUP_G", utcDate: "2026-06-16T01:00:00Z", homeTeam: "Iran",                 awayTeam: "Nya Zeeland" },
  { id: 39, group: "GROUP_G", utcDate: "2026-06-21T19:00:00Z", homeTeam: "Belgien",              awayTeam: "Iran" },
  { id: 40, group: "GROUP_G", utcDate: "2026-06-22T01:00:00Z", homeTeam: "Nya Zeeland",          awayTeam: "Egypten" },
  { id: 41, group: "GROUP_G", utcDate: "2026-06-27T03:00:00Z", homeTeam: "Nya Zeeland",          awayTeam: "Belgien" },
  { id: 42, group: "GROUP_G", utcDate: "2026-06-27T03:00:00Z", homeTeam: "Egypten",              awayTeam: "Iran" },
  { id: 43, group: "GROUP_H", utcDate: "2026-06-15T16:00:00Z", homeTeam: "Spanien",              awayTeam: "Kap Verde" },
  { id: 44, group: "GROUP_H", utcDate: "2026-06-15T22:00:00Z", homeTeam: "Saudiarabien",         awayTeam: "Uruguay" },
  { id: 45, group: "GROUP_H", utcDate: "2026-06-21T16:00:00Z", homeTeam: "Spanien",              awayTeam: "Saudiarabien" },
  { id: 46, group: "GROUP_H", utcDate: "2026-06-21T22:00:00Z", homeTeam: "Uruguay",              awayTeam: "Kap Verde" },
  { id: 47, group: "GROUP_H", utcDate: "2026-06-26T00:00:00Z", homeTeam: "Kap Verde",            awayTeam: "Saudiarabien" },
  { id: 48, group: "GROUP_H", utcDate: "2026-06-26T00:00:00Z", homeTeam: "Uruguay",              awayTeam: "Spanien" },
  { id: 49, group: "GROUP_I", utcDate: "2026-06-15T19:00:00Z", homeTeam: "Frankrike",            awayTeam: "Senegal" },
  { id: 50, group: "GROUP_I", utcDate: "2026-06-16T00:00:00Z", homeTeam: "Irak",                 awayTeam: "Norge" },
  { id: 51, group: "GROUP_I", utcDate: "2026-06-21T21:00:00Z", homeTeam: "Frankrike",            awayTeam: "Irak" },
  { id: 52, group: "GROUP_I", utcDate: "2026-06-22T01:00:00Z", homeTeam: "Norge",                awayTeam: "Senegal" },
  { id: 53, group: "GROUP_I", utcDate: "2026-06-26T19:00:00Z", homeTeam: "Norge",                awayTeam: "Frankrike" },
  { id: 54, group: "GROUP_I", utcDate: "2026-06-26T19:00:00Z", homeTeam: "Senegal",              awayTeam: "Irak" },
  { id: 55, group: "GROUP_J", utcDate: "2026-06-16T01:00:00Z", homeTeam: "Argentina",            awayTeam: "Algeriet" },
  { id: 56, group: "GROUP_J", utcDate: "2026-06-16T04:00:00Z", homeTeam: "Österrike",            awayTeam: "Jordanien" },
  { id: 57, group: "GROUP_J", utcDate: "2026-06-22T17:00:00Z", homeTeam: "Argentina",            awayTeam: "Österrike" },
  { id: 58, group: "GROUP_J", utcDate: "2026-06-22T21:00:00Z", homeTeam: "Jordanien",            awayTeam: "Algeriet" },
  { id: 59, group: "GROUP_J", utcDate: "2026-06-28T02:00:00Z", homeTeam: "Jordanien",            awayTeam: "Argentina" },
  { id: 60, group: "GROUP_J", utcDate: "2026-06-28T02:00:00Z", homeTeam: "Algeriet",             awayTeam: "Österrike" },
  { id: 61, group: "GROUP_K", utcDate: "2026-06-16T17:00:00Z", homeTeam: "Portugal",             awayTeam: "DR Kongo" },
  { id: 62, group: "GROUP_K", utcDate: "2026-06-16T22:00:00Z", homeTeam: "Uzbekistan",           awayTeam: "Colombia" },
  { id: 63, group: "GROUP_K", utcDate: "2026-06-22T17:00:00Z", homeTeam: "Portugal",             awayTeam: "Uzbekistan" },
  { id: 64, group: "GROUP_K", utcDate: "2026-06-22T22:00:00Z", homeTeam: "Colombia",             awayTeam: "DR Kongo" },
  { id: 65, group: "GROUP_K", utcDate: "2026-06-27T23:30:00Z", homeTeam: "DR Kongo",             awayTeam: "Uzbekistan" },
  { id: 66, group: "GROUP_K", utcDate: "2026-06-27T23:30:00Z", homeTeam: "Colombia",             awayTeam: "Portugal" },
  { id: 67, group: "GROUP_L", utcDate: "2026-06-17T01:00:00Z", homeTeam: "Ghana",                awayTeam: "Panama" },
  { id: 68, group: "GROUP_L", utcDate: "2026-06-17T15:00:00Z", homeTeam: "England",              awayTeam: "Kroatien" },
  { id: 69, group: "GROUP_L", utcDate: "2026-06-22T22:00:00Z", homeTeam: "England",              awayTeam: "Ghana" },
  { id: 70, group: "GROUP_L", utcDate: "2026-06-23T00:00:00Z", homeTeam: "Panama",               awayTeam: "Kroatien" },
  { id: 71, group: "GROUP_L", utcDate: "2026-06-27T21:00:00Z", homeTeam: "Panama",               awayTeam: "England" },
  { id: 72, group: "GROUP_L", utcDate: "2026-06-27T21:00:00Z", homeTeam: "Kroatien",             awayTeam: "Ghana" }
];

// Slutspelsschema (fasta matchuppställningar enligt FIFA WC 2026)
const KNOCKOUT_SCHEDULE = [
  // Sextondelsfinal (R32) - 29 jun–2 jul
  { id: 101, round: "Sextondelsfinal", utcDate: "2026-06-29T19:00:00Z", home: "1:a Grupp A", away: "2:a Grupp B" },
  { id: 102, round: "Sextondelsfinal", utcDate: "2026-06-29T22:00:00Z", home: "1:a Grupp C", away: "2:a Grupp F" },
  { id: 103, round: "Sextondelsfinal", utcDate: "2026-06-30T19:00:00Z", home: "1:a Grupp E", away: "Bästa 3:a (A/B/C/D)" },
  { id: 104, round: "Sextondelsfinal", utcDate: "2026-06-30T22:00:00Z", home: "1:a Grupp F", away: "2:a Grupp C" },
  { id: 105, round: "Sextondelsfinal", utcDate: "2026-07-01T19:00:00Z", home: "1:a Grupp G", away: "Bästa 3:a (A/B/C)" },
  { id: 106, round: "Sextondelsfinal", utcDate: "2026-07-01T22:00:00Z", home: "1:a Grupp D", away: "Bästa 3:a (D/E/F)" },
  { id: 107, round: "Sextondelsfinal", utcDate: "2026-07-02T19:00:00Z", home: "1:a Grupp I", away: "Bästa 3:a (G/H/I)" },
  { id: 108, round: "Sextondelsfinal", utcDate: "2026-07-02T22:00:00Z", home: "1:a Grupp L", away: "Bästa 3:a (J/K/L)" },
  { id: 109, round: "Sextondelsfinal", utcDate: "2026-07-03T19:00:00Z", home: "2:a Grupp A", away: "2:a Grupp D" },
  { id: 110, round: "Sextondelsfinal", utcDate: "2026-07-03T22:00:00Z", home: "1:a Grupp B", away: "Bästa 3:a (E/F/G/H)" },
  { id: 111, round: "Sextondelsfinal", utcDate: "2026-07-04T19:00:00Z", home: "1:a Grupp H", away: "2:a Grupp J" },
  { id: 112, round: "Sextondelsfinal", utcDate: "2026-07-04T22:00:00Z", home: "1:a Grupp J", away: "2:a Grupp H" },
  { id: 113, round: "Sextondelsfinal", utcDate: "2026-07-05T19:00:00Z", home: "1:a Grupp K", away: "Bästa 3:a (I/J/K)" },
  { id: 114, round: "Sextondelsfinal", utcDate: "2026-07-05T22:00:00Z", home: "2:a Grupp K", away: "2:a Grupp L" },
  { id: 115, round: "Sextondelsfinal", utcDate: "2026-07-06T19:00:00Z", home: "2:a Grupp G", away: "Bästa 3:a (resterande)" },
  { id: 116, round: "Sextondelsfinal", utcDate: "2026-07-06T22:00:00Z", home: "2:a Grupp E", away: "2:a Grupp I" },
  // Åttondelsfinaler (R16) - 4–7 jul
  { id: 201, round: "Åttondelsfinaler", utcDate: "2026-07-09T19:00:00Z", home: "Vinnare M101", away: "Vinnare M102" },
  { id: 202, round: "Åttondelsfinaler", utcDate: "2026-07-09T22:00:00Z", home: "Vinnare M103", away: "Vinnare M104" },
  { id: 203, round: "Åttondelsfinaler", utcDate: "2026-07-10T19:00:00Z", home: "Vinnare M105", away: "Vinnare M106" },
  { id: 204, round: "Åttondelsfinaler", utcDate: "2026-07-10T22:00:00Z", home: "Vinnare M107", away: "Vinnare M108" },
  { id: 205, round: "Åttondelsfinaler", utcDate: "2026-07-11T19:00:00Z", home: "Vinnare M109", away: "Vinnare M110" },
  { id: 206, round: "Åttondelsfinaler", utcDate: "2026-07-11T22:00:00Z", home: "Vinnare M111", away: "Vinnare M112" },
  { id: 207, round: "Åttondelsfinaler", utcDate: "2026-07-12T19:00:00Z", home: "Vinnare M113", away: "Vinnare M114" },
  { id: 208, round: "Åttondelsfinaler", utcDate: "2026-07-12T22:00:00Z", home: "Vinnare M115", away: "Vinnare M116" },
  // Kvartsfinaler - 10–11 jul
  { id: 301, round: "Kvartsfinaler",    utcDate: "2026-07-14T19:00:00Z", home: "Vinnare M201", away: "Vinnare M202" },
  { id: 302, round: "Kvartsfinaler",    utcDate: "2026-07-14T22:00:00Z", home: "Vinnare M203", away: "Vinnare M204" },
  { id: 303, round: "Kvartsfinaler",    utcDate: "2026-07-15T19:00:00Z", home: "Vinnare M205", away: "Vinnare M206" },
  { id: 304, round: "Kvartsfinaler",    utcDate: "2026-07-15T22:00:00Z", home: "Vinnare M207", away: "Vinnare M208" },
  // Semifinaler - 14–15 jul
  { id: 401, round: "Semifinaler",      utcDate: "2026-07-17T22:00:00Z", home: "Vinnare QF1", away: "Vinnare QF2" },
  { id: 402, round: "Semifinaler",      utcDate: "2026-07-18T22:00:00Z", home: "Vinnare QF3", away: "Vinnare QF4" },
  // Final - 19 jul
  { id: 501, round: "Final",            utcDate: "2026-07-19T20:00:00Z", home: "Vinnare SF1", away: "Vinnare SF2" }
];

// ================================================
// HJÄLPFUNKTIONER
// ================================================
function isBeforeDeadline() {
  return new Date() < DEADLINE_UTC;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const date = new Intl.DateTimeFormat("sv-SE", {
    timeZone: SWEDEN_TIMEZONE, day: "numeric", month: "short"
  }).format(d);
  const time = new Intl.DateTimeFormat("sv-SE", {
    timeZone: SWEDEN_TIMEZONE, hour: "2-digit", minute: "2-digit"
  }).format(d);
  return `${date} ${time}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
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
  setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 250); }, 2800);
}

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// ================================================
// SIDEBAR UPDATE
// ================================================
function updateSidebar() {
  const user = window._auth?.currentUser;
  if (!user) return;
  const sidebarAvatar = document.getElementById("sidebar-avatar");
  if (sidebarAvatar) {
    if (user.photoURL) {
      sidebarAvatar.innerHTML = `<img src="${user.photoURL}" alt="avatar" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`;
    } else {
      sidebarAvatar.textContent = initialsFromName(user.displayName || user.email);
    }
  }
  const sidebarName = document.getElementById("sidebar-name");
  if (sidebarName) sidebarName.textContent = user.displayName || user.email;
}

// ================================================
// TAB NAVIGATION
// ================================================
window.switchTab = function (tab, el) {
  document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const tabEl = document.getElementById(`tab-${tab}`);
  if (tabEl) tabEl.classList.add("active");
  if (el) {
    el.classList.add("active");
  } else {
    const navEl = document.querySelector(`[data-tab="${tab}"]`);
    if (navEl) navEl.classList.add("active");
  }
  if (tab === "schedule") renderSchedule();
  if (tab === "knockout-schedule") renderKnockoutSchedule();
  if (tab === "leagues") renderLeagues();
  if (tab === "profile") renderProfile();
};

// ================================================
// COUNTDOWN
// ================================================
function renderCountdown() {
  const el = document.getElementById("countdown-display");
  if (!el) return;
  const diff = DEADLINE_UTC.getTime() - Date.now();
  if (diff <= 0) {
    el.innerHTML = `<div class="countdown-caption">Tipsdeadline</div><div class="countdown-locked">LÅST</div>`;
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  el.innerHTML = `
    <div class="countdown-caption">Tippa senast om</div>
    <div class="countdown-grid">
      <div class="cd-unit"><div class="cd-num">${days}</div><div class="cd-label">Dagar</div></div>
      <div class="cd-divider">:</div>
      <div class="cd-unit"><div class="cd-num">${String(hours).padStart(2,"0")}</div><div class="cd-label">Tim</div></div>
      <div class="cd-divider">:</div>
      <div class="cd-unit"><div class="cd-num">${String(mins).padStart(2,"0")}</div><div class="cd-label">Min</div></div>
      <div class="cd-divider">:</div>
      <div class="cd-unit"><div class="cd-num">${String(secs).padStart(2,"0")}</div><div class="cd-label">Sek</div></div>
    </div>`;
}

// ================================================
// HEM
// ================================================
function renderHome() {
  const user = window._auth?.currentUser;
  if (!user) return;
  const firstName = user.displayName ? user.displayName.split(" ")[0] : user.email.split("@")[0];
  const welcomeEl = document.getElementById("welcome-name");
  if (welcomeEl) welcomeEl.textContent = `Hej, ${firstName}!`;
  updateSidebar();
  renderCountdown();
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(renderCountdown, 1000);
}

// ================================================
// SCHEMA GRUPPSPEL (READ-ONLY)
// ================================================
function renderSchedule() {
  const container = document.getElementById("schedule-container");
  if (!container) return;

  const byGroup = WC_MATCHES.reduce((acc, m) => {
    if (!acc[m.group]) acc[m.group] = [];
    acc[m.group].push(m);
    return acc;
  }, {});

  container.innerHTML = Object.keys(byGroup).sort().map(groupName => {
    const matches = byGroup[groupName];
    const label = groupName.replace("GROUP_", "Grupp ");
    return `
      <div class="schedule-group">
        <div class="schedule-group-header">${escapeHtml(label)}</div>
        ${matches.map(m => `
          <div class="schedule-row ${m.homeTeam === "Sverige" || m.awayTeam === "Sverige" ? "sweden-match" : ""}">
            <div class="sr-date">${formatDate(m.utcDate)}</div>
            <div class="sr-teams">
              <span class="sr-home">${escapeHtml(m.homeTeam)}</span>
              <span class="sr-vs">vs</span>
              <span class="sr-away">${escapeHtml(m.awayTeam)}</span>
            </div>
          </div>
        `).join("")}
      </div>`;
  }).join("");
}

// ================================================
// SCHEMA SLUTSPEL (READ-ONLY)
// ================================================
function renderKnockoutSchedule() {
  const container = document.getElementById("knockout-schedule-container");
  if (!container) return;

  const byRound = KNOCKOUT_SCHEDULE.reduce((acc, m) => {
    if (!acc[m.round]) acc[m.round] = [];
    acc[m.round].push(m);
    return acc;
  }, {});

  const roundOrder = ["Sextondelsfinal", "Åttondelsfinaler", "Kvartsfinaler", "Semifinaler", "Final"];
  const roundEmoji = { "Sextondelsfinal": "⚡", "Åttondelsfinaler": "⚔️", "Kvartsfinaler": "🔥", "Semifinaler": "🌟", "Final": "🏆" };

  container.innerHTML = roundOrder.map(round => {
    const matches = byRound[round] || [];
    return `
      <div class="schedule-group">
        <div class="schedule-group-header">${roundEmoji[round]} ${round}</div>
        ${matches.map(m => `
          <div class="schedule-row">
            <div class="sr-date">${formatDate(m.utcDate)}</div>
            <div class="sr-teams">
              <span class="sr-home">${escapeHtml(m.home)}</span>
              <span class="sr-vs">vs</span>
              <span class="sr-away">${escapeHtml(m.away)}</span>
            </div>
          </div>
        `).join("")}
      </div>`;
  }).join("");
}

// ================================================
// LIGOR
// ================================================
async function renderLeagues() {
  const container = document.getElementById("leagues-container");
  if (!container) return;
  container.innerHTML = `<p class="loading-block">Laddar ligor...</p>`;
  const user = window._auth?.currentUser;
  if (!user) return;

  try {
    const q = window.dbQuery(window.dbCollection("leagues"), window.dbWhere("members", "array-contains", user.uid));
    const snap = await window.dbGetDocs(q);

    if (snap.empty) {
      container.innerHTML = `
        <div class="league-empty">
          <div class="big-icon">🏆</div>
          <p>Du är inte med i någon liga ännu.</p>
          <p style="margin-top:8px">Skapa en eller gå med med en kod från en vän.</p>
        </div>`;
      return;
    }

    const leagues = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    container.innerHTML = `
      <div class="leagues-grid">
        ${leagues.map(league => `
          <div class="league-card" onclick="openLeague('${league.id}')">
            ${league.owner === user.uid
              ? `<span class="league-card-badge badge-owner">Ägare</span>`
              : `<span class="league-card-badge badge-active">Medlem</span>`}
            <div class="league-card-name">${escapeHtml(league.name)}</div>
            <div class="league-card-code">Kod: <strong>${escapeHtml(league.code)}</strong></div>
            <div class="league-card-meta">👥 ${league.members?.length || 1} deltagare</div>
            <div class="league-card-cta">Öppna liga →</div>
          </div>
        `).join("")}
      </div>`;
  } catch (e) {
    console.error(e);
    container.innerHTML = `<p class="loading-block">Kunde inte ladda ligor.</p>`;
  }
}

window.showCreateLeague = function () {
  document.getElementById("modal-title").textContent = "Skapa ny liga";
  document.getElementById("modal-body").innerHTML = `
    <div class="form-group" style="margin-bottom:16px">
      <label>Liganamn</label>
      <input type="text" id="new-league-name" placeholder="T.ex. VM-kompisarna 2026" />
    </div>
    <div class="modal-btns">
      <button class="btn-secondary" onclick="closeLeagueModal()">Avbryt</button>
      <button class="btn-primary" onclick="createLeagueAction()">Skapa liga</button>
    </div>`;
  document.getElementById("league-modal").style.display = "flex";
};

window.showJoinLeague = function () {
  document.getElementById("modal-title").textContent = "Gå med i liga";
  document.getElementById("modal-body").innerHTML = `
    <p class="modal-subtext">Ange koden du fått av din vän.</p>
    <div class="form-group" style="margin-bottom:16px">
      <label>Liga-kod</label>
      <input type="text" id="join-code" placeholder="T.ex. AB12CD"
        style="text-transform:uppercase;letter-spacing:0.1em;font-family:'DM Mono',monospace"
        oninput="this.value=this.value.toUpperCase()" />
    </div>
    <div class="modal-btns">
      <button class="btn-secondary" onclick="closeLeagueModal()">Avbryt</button>
      <button class="btn-primary" onclick="joinLeagueAction()">Gå med</button>
    </div>`;
  document.getElementById("league-modal").style.display = "flex";
};

window.closeLeagueModal = function (e) {
  if (!e || e.target.classList.contains("modal-overlay")) {
    document.getElementById("league-modal").style.display = "none";
  }
};

window.createLeagueAction = async function () {
  const name = document.getElementById("new-league-name")?.value.trim();
  const user = window._auth?.currentUser;
  if (!name) { showToast("Fyll i ett liganamn.", "error"); return; }
  if (!user) return;
  try {
    const code = generateCode();
    await window.dbAddDoc(window.dbCollection("leagues"), {
      name, code,
      owner: user.uid, ownerEmail: user.email,
      members: [user.uid], memberEmails: [user.email],
      createdAt: new Date().toISOString()
    });
    document.getElementById("modal-body").innerHTML = `
      <p class="modal-subtext">Liga skapad! Dela koden med dina vänner:</p>
      <div class="league-code-display">
        <div class="code">${escapeHtml(code)}</div>
        <p>Dela koden så kan vänner gå med.</p>
      </div>
      <button class="btn-primary" style="width:100%" onclick="closeLeagueModal(); renderLeagues();">Klar</button>`;
    showToast("Liga skapad!");
  } catch (e) {
    console.error(e);
    showToast("Kunde inte skapa liga. Kontrollera Firestore-regler.", "error");
  }
};

window.joinLeagueAction = async function () {
  const code = document.getElementById("join-code")?.value.trim().toUpperCase();
  const user = window._auth?.currentUser;
  if (!code) { showToast("Fyll i ligakoden.", "error"); return; }
  if (!user) return;
  try {
    const q = window.dbQuery(window.dbCollection("leagues"), window.dbWhere("code", "==", code));
    const snap = await window.dbGetDocs(q);
    if (snap.empty) { showToast("Ingen liga med den koden.", "error"); return; }
    const leagueDoc = snap.docs[0];
    const data = leagueDoc.data();
    if (data.members?.includes(user.uid)) { showToast("Du är redan med i den ligan.", "error"); return; }
    await window.dbUpdateDoc(leagueDoc.ref, {
      members: window.dbArrayUnion(user.uid),
      memberEmails: window.dbArrayUnion(user.email)
    });
    closeLeagueModal();
    await renderLeagues();
    showToast(`Du gick med i "${data.name}"!`);
  } catch (e) {
    console.error(e);
    showToast("Kunde inte gå med i ligan.", "error");
  }
};

// ================================================
// ÖPPNA EN LIGA (tipping + topplista inuti)
// ================================================
window.openLeague = async function (leagueId) {
  activeLeagueId = leagueId;
  const user = window._auth?.currentUser;

  // Visa liga-vyn
  document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
  document.getElementById("tab-league-inner").classList.add("active");
  document.getElementById("league-inner-loading").style.display = "block";
  document.getElementById("league-inner-content").style.display = "none";

  try {
    const leagueDoc = await window.dbGetDoc(window.dbDoc("leagues", leagueId));
    const league = leagueDoc.data();

    document.getElementById("league-inner-title").textContent = league.name;
    document.getElementById("league-inner-code").textContent = `Kod: ${league.code}`;
    document.getElementById("league-inner-loading").style.display = "none";
    document.getElementById("league-inner-content").style.display = "block";

    // Ladda tips för denna användare från Firestore
    const tipsDoc = await window.dbGetDoc(window.dbDoc("tips", user.uid));
    const myData = tipsDoc.exists() ? tipsDoc.data() : {};
    const myTips = myData.tips || {};
    const myPicks = myData.picks || {};

    // Spara lokalt
    localStorage.setItem("vm2026_tips", JSON.stringify(myTips));
    localStorage.setItem("vm2026_knockout", JSON.stringify(myPicks));

    renderLeagueTabs("groups");
    renderLeagueLeaderboard(league, leagueId);
  } catch (e) {
    console.error(e);
    showToast("Kunde inte öppna ligan.", "error");
  }
};

window.renderLeagueTabs = function (tab) {
  document.querySelectorAll(".league-inner-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".ltab-btn").forEach(b => b.classList.remove("active"));
  const tabEl = document.getElementById(`ltab-${tab}`);
  if (tabEl) tabEl.classList.add("active");
  const btn = document.querySelector(`[data-ltab="${tab}"]`);
  if (btn) btn.classList.add("active");

  if (tab === "groups") renderLeagueGroups();
  if (tab === "bracket") renderLeagueBracket();
  if (tab === "leaderboard") renderLeagueLeaderboard(null, activeLeagueId);
};

window.backToLeagues = function () {
  activeLeagueId = null;
  switchTab("leagues", document.querySelector('[data-tab="leagues"]'));
};

// ================================================
// GRUPPSPEL INSIDE LIGA
// ================================================
function getSavedTips() { return JSON.parse(localStorage.getItem("vm2026_tips") || "{}"); }
function saveTip(id, hg, ag) {
  const tips = getSavedTips();
  tips[id] = { homeGoals: hg, awayGoals: ag };
  localStorage.setItem("vm2026_tips", JSON.stringify(tips));
}
function getKnockoutPicks() { return JSON.parse(localStorage.getItem("vm2026_knockout") || "{}"); }
function saveKnockoutPick(matchId, winner) {
  const picks = getKnockoutPicks();
  picks[matchId] = winner;
  localStorage.setItem("vm2026_knockout", JSON.stringify(picks));
}

function groupMatchesByGroup(matches) {
  return matches.reduce((acc, m) => { if (!acc[m.group]) acc[m.group] = []; acc[m.group].push(m); return acc; }, {});
}

function calcGroupStandings(groupMatches, tips) {
  const teams = {};
  for (const m of groupMatches) {
    if (!teams[m.homeTeam]) teams[m.homeTeam] = { name: m.homeTeam, p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 };
    if (!teams[m.awayTeam]) teams[m.awayTeam] = { name: m.awayTeam, p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 };
    const tip = tips[m.id];
    if (!tip) continue;
    const hg = Number(tip.homeGoals), ag = Number(tip.awayGoals);
    teams[m.homeTeam].p++; teams[m.awayTeam].p++;
    teams[m.homeTeam].gf += hg; teams[m.homeTeam].ga += ag;
    teams[m.awayTeam].gf += ag; teams[m.awayTeam].ga += hg;
    if (hg > ag) { teams[m.homeTeam].w++; teams[m.homeTeam].pts+=3; teams[m.awayTeam].l++; }
    else if (hg < ag) { teams[m.awayTeam].w++; teams[m.awayTeam].pts+=3; teams[m.homeTeam].l++; }
    else { teams[m.homeTeam].d++; teams[m.homeTeam].pts++; teams[m.awayTeam].d++; teams[m.awayTeam].pts++; }
  }
  return Object.values(teams).sort((a,b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const gdA = a.gf-a.ga, gdB = b.gf-b.ga;
    if (gdB !== gdA) return gdB - gdA;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.name.localeCompare(b.name, "sv");
  });
}

function renderStandingsRows(standings) {
  return standings.map((team, i) => {
    const gd = team.gf - team.ga;
    const cls = i===0?"pos-first":i===1?"pos-second":i===2?"pos-third":"";
    return `<tr class="${cls}">
      <td>${i+1}</td><td>${escapeHtml(team.name)}</td>
      <td>${team.p}</td><td>${team.w}</td><td>${team.d}</td><td>${team.l}</td>
      <td>${team.gf}</td><td>${team.ga}</td>
      <td>${gd>=0?"+":""}${gd}</td><td><strong>${team.pts}</strong></td>
    </tr>`;
  }).join("");
}

function renderLeagueGroups() {
  const container = document.getElementById("ltab-groups");
  if (!container) return;
  const tips = getSavedTips();
  const allGroups = groupMatchesByGroup(WC_MATCHES);
  const locked = !isBeforeDeadline();
  const tipped = Object.keys(tips).length;
  const pct = ((tipped / TOTAL_GROUP_MATCHES) * 100).toFixed(1);

  container.innerHTML = `
    <div class="tip-progress-bar-wrap">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-size:0.82rem;color:var(--text-2)">${tipped}/${TOTAL_GROUP_MATCHES} tipsade</span>
        ${locked ? '<span class="deadline-closed-badge">🔒 Deadline passerad</span>' : '<span class="deadline-open-badge">⏳ Öppet för tipsning</span>'}
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    ${Object.keys(allGroups).sort().map(groupName => {
      const matches = allGroups[groupName];
      const standings = calcGroupStandings(matches, tips);
      const label = groupName.replace("GROUP_", "Grupp ");
      const tippedCount = matches.filter(m => tips[m.id]).length;
      return `
        <div class="group-block">
          <div class="group-header">
            <span class="group-label">${escapeHtml(label)}</span>
            <span class="group-tag">${tippedCount}/${matches.length} tipsade</span>
          </div>
          <div class="group-body">
            <div class="match-list">
              ${matches.map(m => {
                const tip = tips[m.id];
                const isSwe = m.homeTeam==="Sverige"||m.awayTeam==="Sverige";
                return `
                  <div class="match-row ${tip?"saved":""} ${isSwe?"sweden-match":""}" id="match-${m.id}">
                    <div class="match-date">${formatDate(m.utcDate)}</div>
                    <div class="match-teams">
                      <div class="team-name home">${escapeHtml(m.homeTeam)}</div>
                      <div class="score-inputs">
                        <input type="number" class="score-input" min="0" max="99"
                          value="${tip?Number(tip.homeGoals):""}" placeholder="–"
                          id="home-${m.id}" ${locked?"disabled":""} />
                        <span class="score-sep">:</span>
                        <input type="number" class="score-input" min="0" max="99"
                          value="${tip?Number(tip.awayGoals):""}" placeholder="–"
                          id="away-${m.id}" ${locked?"disabled":""} />
                      </div>
                      <div class="team-name away">${escapeHtml(m.awayTeam)}</div>
                    </div>
                    <button class="tip-btn" onclick="submitTip(${m.id})" ${locked?"disabled":""}>
                      ${locked?"Låst":"Spara"}
                    </button>
                  </div>`;
              }).join("")}
            </div>
            <div class="standings-wrapper">
              <table class="standings-table">
                <thead><tr>
                  <th>#</th><th>Lag</th><th>S</th><th>V</th><th>O</th><th>F</th>
                  <th>GM</th><th>IM</th><th>MS</th><th>P</th>
                </tr></thead>
                <tbody>${renderStandingsRows(standings)}</tbody>
              </table>
            </div>
          </div>
        </div>`;
    }).join("")}`;

  // Enter-hantering
  WC_MATCHES.forEach(m => {
    const h = document.getElementById(`home-${m.id}`);
    const a = document.getElementById(`away-${m.id}`);
    if (h && a && !locked) {
      h.addEventListener("keydown", e => { if (e.key==="Enter") a.focus(); });
      a.addEventListener("keydown", e => { if (e.key==="Enter") submitTip(m.id); });
    }
  });
}

window.submitTip = async function (matchId) {
  if (!isBeforeDeadline()) { showToast("Deadline har passerat.", "error"); return; }
  const h = document.getElementById(`home-${matchId}`);
  const a = document.getElementById(`away-${matchId}`);
  if (!h||!a||h.value===""||a.value==="") { showToast("Fyll i båda resultaten.", "error"); return; }
  const hg = Number(h.value), ag = Number(a.value);
  if (isNaN(hg)||isNaN(ag)||hg<0||ag<0) { showToast("Ogiltigt resultat.", "error"); return; }
  saveTip(matchId, hg, ag);
  const row = document.getElementById(`match-${matchId}`);
  if (row) row.classList.add("saved");
  try { await window.syncTipsToCloud?.(); } catch(e) { console.error(e); }
  showToast("Tipset sparat!");
  // Uppdatera standings för den gruppen
  const matchObj = WC_MATCHES.find(m => m.id === matchId);
  if (matchObj) {
    const allGroups = groupMatchesByGroup(WC_MATCHES);
    const tips = getSavedTips();
    const tbody = document.querySelector(`#ltab-groups .group-body .standings-table tbody`);
    // Re-render hela grupp-sektionen för korrekt standings
    renderLeagueGroups();
  }
};

// ================================================
// SLUTSPEL INSIDE LIGA
// ================================================
function renderLeagueBracket() {
  const container = document.getElementById("ltab-bracket");
  if (!container) return;
  const picks = getKnockoutPicks();
  const locked = !isBeforeDeadline();

  const rounds = ["Sextondelsfinal","Åttondelsfinaler","Kvartsfinaler","Semifinaler","Final"];
  const emojis = { "Sextondelsfinal":"⚡","Åttondelsfinaler":"⚔️","Kvartsfinaler":"🔥","Semifinaler":"🌟","Final":"🏆" };
  const byRound = KNOCKOUT_SCHEDULE.reduce((acc,m) => { if(!acc[m.round])acc[m.round]=[]; acc[m.round].push(m); return acc; }, {});

  container.innerHTML = rounds.map(round => {
    const matches = byRound[round] || [];
    return `
      <div class="bracket-round">
        <div class="round-header">
          <span class="round-title">${emojis[round]} ${round}</span>
          <span class="round-hint">${locked?"Låst":"Klicka för att välja vinnare"}</span>
        </div>
        <div class="bracket-grid">
          ${matches.map(m => {
            const picked = picks[m.id];
            return `
              <div class="bracket-card">
                <button class="bracket-btn ${picked===m.home?"picked":""}"
                  onclick="pickWinner(${m.id},'${safeWinnerString(m.home)}')" ${locked?"disabled":""}>
                  ${picked===m.home?"✓ ":""}${escapeHtml(m.home)}
                </button>
                <div class="bracket-vs">vs</div>
                <button class="bracket-btn ${picked===m.away?"picked":""}"
                  onclick="pickWinner(${m.id},'${safeWinnerString(m.away)}')" ${locked?"disabled":""}>
                  ${picked===m.away?"✓ ":""}${escapeHtml(m.away)}
                </button>
              </div>`;
          }).join("")}
        </div>
      </div>`;
  }).join("");
}

window.pickWinner = async function (matchId, winner) {
  if (!isBeforeDeadline()) { showToast("Deadline passerad.", "error"); return; }
  saveKnockoutPick(matchId, winner);
  renderLeagueBracket();
  try { await window.syncTipsToCloud?.(); } catch(e) { console.error(e); }
  showToast("Val sparat!");
};

// ================================================
// TOPPLISTA INSIDE LIGA
// ================================================
async function renderLeagueLeaderboard(league, leagueId) {
  const container = document.getElementById("ltab-leaderboard");
  if (!container) return;
  container.innerHTML = `<p class="loading-block">⏳ Laddar topplista...</p>`;

  try {
    if (!league) {
      const leagueDoc = await window.dbGetDoc(window.dbDoc("leagues", leagueId));
      league = leagueDoc.data();
    }
    const memberUids = league.members || [];
    const allTipsSnap = await window.dbGetDocs(window.dbCollection("tips"));
    const allTips = [];
    allTipsSnap.forEach(d => { if (memberUids.includes(d.id)) allTips.push({ uid: d.id, ...d.data() }); });

    const results = await window.fetchResults();
    const myUid = window._auth?.currentUser?.uid || "";

    const ranked = allTips.map(u => ({
      uid: u.uid,
      displayName: u.displayName || u.email?.split("@")[0] || "Spelare",
      photoURL: u.photoURL || "",
      email: u.email || "",
      points: calcUserPoints(u.tips||{}, u.picks||{}, results.groupResults||{}, results.knockoutResults||{}),
      tipped: Object.keys(u.tips||{}).length
    })).sort((a,b) => b.points - a.points);

    const rankIcons = ["🥇","🥈","🥉"];
    const rankClass = ["r1","r2","r3"];

    container.innerHTML = `
      <div class="leaderboard-table-wrap">
        <table class="lb-table">
          <thead><tr>
            <th style="text-align:center">#</th>
            <th>Spelare</th>
            <th style="text-align:center">Tippar</th>
            <th style="text-align:right">Poäng</th>
          </tr></thead>
          <tbody>
            ${ranked.length ? ranked.map((u,i) => {
              const isMe = u.uid === myUid;
              const avatar = u.photoURL
                ? `<img src="${u.photoURL}" alt="" />`
                : escapeHtml(initialsFromName(u.displayName));
              return `
                <tr class="${isMe?"my-row":""}">
                  <td class="lb-rank-num ${rankClass[i]||""}">${rankIcons[i]||i+1}</td>
                  <td><div class="lb-user">
                    <div class="lb-avatar">${avatar}</div>
                    <div class="lb-name">${escapeHtml(u.displayName)}${isMe?" (du)":""}</div>
                  </div></td>
                  <td class="lb-tipped">${u.tipped}/${TOTAL_GROUP_MATCHES}</td>
                  <td class="lb-pts">${u.points}</td>
                </tr>`;
            }).join("") : `<tr><td colspan="4" class="empty-table-cell">Inga tips ännu</td></tr>`}
          </tbody>
        </table>
      </div>
      <div class="info-box" style="margin-top:20px">
        <p>💡 <strong>Poängsystem:</strong> Exakt rätt resultat = 3p · Rätt utgång = 1p · Rätt slutspelsvinnare = 2p</p>
      </div>`;
  } catch(e) {
    console.error(e);
    container.innerHTML = `<p class="loading-block">Kunde inte ladda topplistan.</p>`;
  }
}

// ================================================
// POÄNGRÄKNING
// ================================================
function calcUserPoints(tips, picks, groupResults, knockoutResults) {
  let pts = 0;
  for (const [id, tip] of Object.entries(tips||{})) {
    const actual = groupResults?.[id];
    if (!actual) continue;
    if (Number(tip.homeGoals)===Number(actual.homeGoals) && Number(tip.awayGoals)===Number(actual.awayGoals)) {
      pts += 3;
    } else {
      const tr = Number(tip.homeGoals)>Number(tip.awayGoals)?"H":Number(tip.homeGoals)<Number(tip.awayGoals)?"A":"D";
      const ar = Number(actual.homeGoals)>Number(actual.awayGoals)?"H":Number(actual.homeGoals)<Number(actual.awayGoals)?"A":"D";
      if (tr === ar) pts += 1;
    }
  }
  for (const [id, pick] of Object.entries(picks||{})) {
    if (knockoutResults?.[id] && knockoutResults[id] === pick) pts += 2;
  }
  return pts;
}

// ================================================
// PROFIL
// ================================================
async function renderProfile() {
  const user = window._auth?.currentUser;
  if (!user) return;
  try {
    let firstName = "", lastName = "";
    const userDoc = await window.dbGetDoc(window.dbDoc("users", user.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      firstName = data.firstName || "";
      lastName = data.lastName || "";
    } else {
      const parts = (user.displayName||"").split(" ");
      firstName = parts[0]||""; lastName = parts.slice(1).join(" ");
    }
    const fn = document.getElementById("profile-firstname");
    const ln = document.getElementById("profile-lastname");
    const email = document.getElementById("profile-email-readonly");
    const preview = document.getElementById("profile-avatar-preview");
    if (fn) fn.value = firstName;
    if (ln) ln.value = lastName;
    if (email) email.value = user.email||"";
    if (preview) {
      if (user.photoURL) {
        preview.innerHTML = `<img src="${user.photoURL}" alt="avatar" />`;
      } else {
        preview.textContent = initialsFromName(user.displayName||user.email);
      }
    }
    const profileMsg = document.getElementById("profile-msg");
    const passwordMsg = document.getElementById("password-msg");
    if (profileMsg) { profileMsg.textContent=""; profileMsg.className="auth-error profile-feedback"; }
    if (passwordMsg) { passwordMsg.textContent=""; passwordMsg.className="auth-error profile-feedback"; }
  } catch(e) { console.error(e); }
}

window.previewProfileAvatar = function (e) {
  const file = e.target.files?.[0];
  if (!file) return;
  if (file.size > 5*1024*1024) {
    const msg = document.getElementById("profile-msg");
    if (msg) msg.textContent = "Profilbilden får vara max 5 MB.";
    e.target.value=""; return;
  }
  const reader = new FileReader();
  reader.onload = ev => {
    const preview = document.getElementById("profile-avatar-preview");
    if (preview) preview.innerHTML = `<img src="${ev.target.result}" alt="avatar" />`;
  };
  reader.readAsDataURL(file);
};

window.previewAvatar = function (e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const preview = document.getElementById("avatar-preview");
    if (preview) preview.innerHTML = `<img src="${ev.target.result}" alt="avatar" />`;
  };
  reader.readAsDataURL(file);
};

window.saveProfileChanges = async function () {
  const user = window._auth?.currentUser;
  const msg = document.getElementById("profile-msg");
  if (!user||!msg) return;
  msg.textContent=""; msg.className="auth-error profile-feedback";
  const firstName = document.getElementById("profile-firstname")?.value.trim()||"";
  const lastName = document.getElementById("profile-lastname")?.value.trim()||"";
  const file = document.getElementById("profile-avatar-input")?.files?.[0];
  if (!firstName||!lastName) { msg.textContent="Fyll i både förnamn och efternamn."; return; }
  try {
    let photoURL = user.photoURL||"";
    if (file) {
      const sRef = window.storageRef(window._storage, `avatars/${user.uid}`);
      await window.storageUploadBytes(sRef, file);
      photoURL = await window.storageGetDownloadURL(sRef);
    }
    const displayName = `${firstName} ${lastName}`.trim();
    await window._firebaseFns.updateProfile(user, { displayName, photoURL });
    await user.reload();

    updateSidebar();

    await window.dbSetDoc(window.dbDoc("users", user.uid), {
      email: user.email, displayName, firstName, lastName, photoURL,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    await window.dbSetDoc(window.dbDoc("tips", user.uid), {
      email: user.email, displayName, photoURL,
      updatedAt: new Date().toISOString()
    }, { merge: true });

    msg.textContent = "Profilen har uppdaterats.";
    msg.classList.add("success");
    renderHome();
    renderProfile();
    showToast("Profil sparad!");
  } catch(e) {
    console.error(e);
    msg.textContent="Kunde inte spara profilen.";
  }
};

window.changeMyPassword = async function () {
  const user = window._auth?.currentUser;
  const msg = document.getElementById("password-msg");
  if (!user||!msg) return;
  msg.textContent=""; msg.className="auth-error profile-feedback";
  const currentPw = document.getElementById("current-password")?.value||"";
  const newPw = document.getElementById("new-password")?.value||"";
  if (!currentPw||!newPw) { msg.textContent="Fyll i båda lösenordsfälten."; return; }
  if (newPw.length < 6) { msg.textContent="Nytt lösenord måste vara minst 6 tecken."; return; }
  try {
    const credential = window._firebaseFns.EmailAuthProvider.credential(user.email, currentPw);
    await window._firebaseFns.reauthenticateWithCredential(user, credential);
    await window._firebaseFns.updatePassword(user, newPw);
    document.getElementById("current-password").value="";
    document.getElementById("new-password").value="";
    msg.textContent="Lösenordet har bytts."; msg.classList.add("success");
    showToast("Lösenord uppdaterat!");
  } catch(e) {
    console.error(e);
    msg.textContent="Fel nuvarande lösenord eller kunde inte byta lösenord.";
  }
};

// ================================================
// RADERA KONTO
// ================================================
window.showDeleteAccountModal = function () {
  document.getElementById("delete-account-modal").style.display = "flex";
  document.getElementById("delete-confirm-password").value = "";
  document.getElementById("delete-error-msg").textContent = "";
};

window.closeDeleteAccountModal = function (e) {
  if (!e || e.target.classList.contains("modal-overlay")) {
    document.getElementById("delete-account-modal").style.display = "none";
  }
};

window.confirmDeleteAccount = async function () {
  const user = window._auth?.currentUser;
  const pw = document.getElementById("delete-confirm-password")?.value || "";
  const errEl = document.getElementById("delete-error-msg");
  errEl.textContent = "";
  if (!pw) { errEl.textContent = "Fyll i ditt lösenord för att bekräfta."; return; }
  try {
    const credential = window._firebaseFns.EmailAuthProvider.credential(user.email, pw);
    await window._firebaseFns.reauthenticateWithCredential(user, credential);

    // Ta bort Firestore-data
    try { await window.dbDeleteDoc(window.dbDoc("tips", user.uid)); } catch(_) {}
    try { await window.dbDeleteDoc(window.dbDoc("users", user.uid)); } catch(_) {}

    // Ta bort auth-kontot
    await window._firebaseFns.deleteUser(user);

    localStorage.removeItem("vm2026_tips");
    localStorage.removeItem("vm2026_knockout");
    showToast("Kontot har raderats.");
  } catch(e) {
    console.error(e);
    errEl.textContent = "Fel lösenord eller något gick fel.";
  }
};

// ================================================
// AUTH-MODALER
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
  document.getElementById("forgot-email").value = document.getElementById("login-email")?.value||"";
  document.getElementById("forgot-msg").textContent = "";
  document.getElementById("forgot-msg").className = "modal-message";
  document.getElementById("forgot-modal").style.display = "flex";
};
window.closeForgotModal = function (e) {
  if (!e||e.target.classList.contains("modal-overlay")) {
    document.getElementById("forgot-modal").style.display = "none";
  }
};
window.requestPasswordReset = async function () {
  const email = document.getElementById("forgot-email").value.trim().toLowerCase();
  const msg = document.getElementById("forgot-msg");
  msg.textContent=""; msg.className="modal-message";
  if (!email) { msg.textContent="Fyll i din e-postadress."; msg.classList.add("error"); return; }
  try {
    await window._firebaseFns.sendPasswordResetEmail(window._auth, email);
    msg.textContent="Återställningslänk skickad! Kolla din mejl."; msg.classList.add("success");
  } catch(e) {
    console.error(e);
    msg.textContent="Ingen användare med den e-postadressen hittades."; msg.classList.add("error");
  }
};

// ================================================
// INIT
// ================================================
window.initApp = function () {
  renderHome();
  renderSchedule();
};

document.addEventListener("DOMContentLoaded", () => {});