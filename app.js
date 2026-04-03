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
// SLUTSPELSMATCHER (id 101+)
// ================================================
const KNOCKOUT_ROUNDS = [
  { round: "R32", name: "Sextondelsfinal", matches: [
    { id: 101 }, { id: 102 }, { id: 103 }, { id: 104 },
    { id: 105 }, { id: 106 }, { id: 107 }, { id: 108 },
    { id: 109 }, { id: 110 }, { id: 111 }, { id: 112 },
    { id: 113 }, { id: 114 }, { id: 115 }, { id: 116 },
  ]},
  { round: "R16", name: "Åttondelsfinaler", matches: [
    { id: 201 }, { id: 202 }, { id: 203 }, { id: 204 },
    { id: 205 }, { id: 206 }, { id: 207 }, { id: 208 },
  ]},
  { round: "QF", name: "Kvartsfinaler", matches: [
    { id: 301 }, { id: 302 }, { id: 303 }, { id: 304 },
  ]},
  { round: "SF", name: "Semifinaler", matches: [
    { id: 401 }, { id: 402 },
  ]},
  { round: "F", name: "Final", matches: [
    { id: 501 },
  ]},
];

// ================================================
// HJÄLPFUNKTIONER – TIPS
// ================================================
function getSavedTips() {
  return JSON.parse(localStorage.getItem("vm2026_tips") || "{}");
}
function saveTip(matchId, homeGoals, awayGoals) {
  const tips = getSavedTips();
  tips[matchId] = { homeGoals, awayGoals };
  localStorage.setItem("vm2026_tips", JSON.stringify(tips));
}
function getKnockoutPicks() {
  return JSON.parse(localStorage.getItem("vm2026_knockout") || "{}");
}
function saveKnockoutPick(matchId, winner) {
  const picks = getKnockoutPicks();
  picks[matchId] = winner;
  // Rensa alla picks som beror på denna match
  clearDownstreamPicks(matchId, picks);
  localStorage.setItem("vm2026_knockout", JSON.stringify(picks));
}
function clearDownstreamPicks(matchId, picks) {
  // Om en pick ändras, rensa nästa rundas match som beror på den
  const id = parseInt(matchId);
  let nextId = null;
  if (id >= 101 && id <= 116) nextId = 200 + Math.ceil((id - 100) / 2);
  else if (id >= 201 && id <= 208) nextId = 300 + Math.ceil((id - 200) / 2);
  else if (id >= 301 && id <= 304) nextId = 400 + Math.ceil((id - 300) / 2);
  else if (id >= 401 && id <= 402) nextId = 501;
  if (nextId && picks[nextId]) {
    delete picks[nextId];
    clearDownstreamPicks(nextId, picks);
  }
}

// ================================================
// GRUPPTABELL
// ================================================
function groupMatchesByGroup(matches) {
  const groups = {};
  for (const m of matches) {
    if (!groups[m.group]) groups[m.group] = [];
    groups[m.group].push(m);
  }
  return groups;
}

function calcGroupStandings(groupMatches, tips) {
  const teams = {};
  for (const m of groupMatches) {
    if (!teams[m.homeTeam]) teams[m.homeTeam] = { name: m.homeTeam, p:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 };
    if (!teams[m.awayTeam]) teams[m.awayTeam] = { name: m.awayTeam, p:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 };
    const tip = tips[m.id];
    if (!tip) continue;
    const hg = tip.homeGoals, ag = tip.awayGoals;
    teams[m.homeTeam].p++; teams[m.awayTeam].p++;
    teams[m.homeTeam].gf += hg; teams[m.homeTeam].ga += ag;
    teams[m.awayTeam].gf += ag; teams[m.awayTeam].ga += hg;
    if (hg > ag) {
      teams[m.homeTeam].w++; teams[m.homeTeam].pts += 3; teams[m.awayTeam].l++;
    } else if (hg < ag) {
      teams[m.awayTeam].w++; teams[m.awayTeam].pts += 3; teams[m.homeTeam].l++;
    } else {
      teams[m.homeTeam].d++; teams[m.homeTeam].pts++;
      teams[m.awayTeam].d++; teams[m.awayTeam].pts++;
    }
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
  return thirds.sort((a,b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if ((b.gf-b.ga) !== (a.gf-a.ga)) return (b.gf-b.ga)-(a.gf-a.ga);
    return b.gf - a.gf;
  }).slice(0, 8);
}

// ================================================
// BERÄKNA SEXTONDELSFINAL-PAR
// ================================================
function calcR32Matchups(groupStandings, bestThirds) {
  const w = (g) => groupStandings["GROUP_"+g]?.[0]?.name || "Vinnare "+g;
  const r = (g) => groupStandings["GROUP_"+g]?.[1]?.name || "Tvåa "+g;
  const t = (i) => bestThirds[i]?.name || "Bästa trea #"+(i+1);

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
    { id: 116, home: w("B"), away: r("E") },
  ];
}

// ================================================
// BERÄKNA EFTERFÖLJANDE RUNDOR FRÅN PICKS
// ================================================
function calcKnockoutMatchups(r32Matchups, picks) {
  // R16 – vinnare av R32 möts parvis
  const r16 = [];
  for (let i = 0; i < 8; i++) {
    const m1 = r32Matchups[i*2];
    const m2 = r32Matchups[i*2+1];
    r16.push({
      id: 201 + i,
      home: picks[m1.id] || `Vinnare M${m1.id-100}`,
      away: picks[m2.id] || `Vinnare M${m2.id-100}`,
    });
  }

  const qf = [];
  for (let i = 0; i < 4; i++) {
    const m1 = r16[i*2];
    const m2 = r16[i*2+1];
    qf.push({
      id: 301 + i,
      home: picks[m1.id] || `Vinnare M${m1.id}`,
      away: picks[m2.id] || `Vinnare M${m2.id}`,
    });
  }

  const sf = [
    { id: 401, home: picks[301] || `Vinnare QF1`, away: picks[302] || `Vinnare QF2` },
    { id: 402, home: picks[303] || `Vinnare QF3`, away: picks[304] || `Vinnare QF4` },
  ];

  const final = [
    { id: 501, home: picks[401] || `Vinnare SF1`, away: picks[402] || `Vinnare SF2` },
  ];

  return { r16, qf, sf, final };
}

// ================================================
// RENDERA FLIKAR
// ================================================
window.showTab = function(tab, btn) {
  ["groups","bracket","leaderboard"].forEach(t => {
    document.getElementById("tab-"+t).style.display = t === tab ? "block" : "none";
  });
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  if (tab === "bracket") renderBracket();
  if (tab === "leaderboard") renderLeaderboard(); // async, inget await behövs
};

// ================================================
// RENDERA GRUPPTABELL
// ================================================
function renderStandingsTable(standings) {
  return `<table class="standings-table">
    <thead><tr><th>#</th><th>Lag</th><th>S</th><th>V</th><th>O</th><th>F</th><th>GM</th><th>IM</th><th>MS</th><th>P</th></tr></thead>
    <tbody>${standings.map((t,i) => {
      const gd = t.gf - t.ga;
      const cls = i===0?"pos-first":i===1?"pos-second":i===2?"pos-third":"";
      return `<tr class="${cls}"><td>${i+1}</td><td>${t.name}</td><td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.gf}</td><td>${t.ga}</td><td>${gd>=0?"+":""}${gd}</td><td><strong>${t.pts}</strong></td></tr>`;
    }).join("")}</tbody>
  </table>`;
}

// ================================================
// RENDERA GRUPPER
// ================================================
function renderGroups(groups) {
  const container = document.getElementById("groups-container");
  const tips = getSavedTips();
  container.innerHTML = "";

  for (const groupName of Object.keys(groups).sort()) {
    const matches = groups[groupName];
    const standings = calcGroupStandings(matches, tips);
    const groupDiv = document.createElement("div");
    groupDiv.className = "group-block";
    groupDiv.innerHTML = `<h2>${groupName.replace("GROUP_","Grupp ")}</h2>`;

    for (const match of matches) {
      const id = match.id;
      const tip = tips[id];
      const isSwe = match.homeTeam === "Sverige" || match.awayTeam === "Sverige";
      const matchDiv = document.createElement("div");
      matchDiv.className = `match-row ${tip?"saved":""} ${isSwe?"sweden-match":""}`;
      matchDiv.id = `match-${id}`;
      matchDiv.innerHTML = `
        <span class="match-date">${formatDate(match.utcDate)}</span>
        <div class="match-teams">
          <span class="team home">${match.homeTeam}</span>
          <div class="score-input">
            <input type="number" min="0" max="99" value="${tip?tip.homeGoals:""}" placeholder="-" id="home-${id}" />
            <span>–</span>
            <input type="number" min="0" max="99" value="${tip?tip.awayGoals:""}" placeholder="-" id="away-${id}" />
          </div>
          <span class="team away">${match.awayTeam}</span>
        </div>
        <button class="tip-btn" onclick="submitTip(${id})">Spara</button>
      `;
      groupDiv.appendChild(matchDiv);
    }

    const tableDiv = document.createElement("div");
    tableDiv.className = "standings-wrapper";
    tableDiv.id = `standings-${groupName}`;
    tableDiv.innerHTML = renderStandingsTable(standings);
    groupDiv.appendChild(tableDiv);
    container.appendChild(groupDiv);
  }

  document.getElementById("loading").style.display = "none";
}

// ================================================
// SPARA GRUPPSPELSTIPS
// ================================================
window.submitTip = function(matchId) {
  const h = document.getElementById(`home-${matchId}`);
  const a = document.getElementById(`away-${matchId}`);
  if (h.value === "" || a.value === "") { alert("Fyll i båda!"); return; }
  saveTip(matchId, parseInt(h.value), parseInt(a.value));
  document.getElementById(`match-${matchId}`).classList.add("saved");

  const allGroups = groupMatchesByGroup(WC_MATCHES);
  const tips = getSavedTips();
  const matchObj = WC_MATCHES.find(m => m.id === matchId);
  if (matchObj) {
    const standings = calcGroupStandings(allGroups[matchObj.group], tips);
    const wrapper = document.getElementById(`standings-${matchObj.group}`);
    if (wrapper) wrapper.innerHTML = renderStandingsTable(standings);
  }

  // ← NY RAD: synka till molnet
  if (window.syncTipsToCloud) window.syncTipsToCloud();
};
// ================================================
// RENDERA BRACKET MED KLICKBARA VINNARE
// ================================================
function renderBracket() {
  const tips = getSavedTips();
  const picks = getKnockoutPicks();
  const allGroups = groupMatchesByGroup(WC_MATCHES);
  const groupStandings = {};
  for (const [g, matches] of Object.entries(allGroups)) {
    groupStandings[g] = calcGroupStandings(matches, tips);
  }
  const bestThirds = getBestThirds(allGroups, tips);
  const r32 = calcR32Matchups(groupStandings, bestThirds);
  const { r16, qf, sf, final } = calcKnockoutMatchups(r32, picks);

  const container = document.getElementById("bracket-container");
  container.innerHTML = "";

  const rounds = [
    { name: "⚡ Sextondelsfinal", matches: r32 },
    { name: "⚔️ Åttondelsfinaler", matches: r16 },
    { name: "🔥 Kvartsfinaler", matches: qf },
    { name: "🌟 Semifinaler", matches: sf },
    { name: "🏆 Final", matches: final },
  ];

  for (const round of rounds) {
    const roundDiv = document.createElement("div");
    roundDiv.className = "bracket-round";
    roundDiv.innerHTML = `<h2 class="bracket-title">${round.name}</h2>
      <p class="bracket-subtitle">Klicka på ett lag för att välja vinnare</p>
      <div class="bracket-grid">`;

    let cards = "";
    for (const match of round.matches) {
      const picked = picks[match.id];
      const homeActive = picked === match.home ? "active-pick" : "";
      const awayActive = picked === match.away ? "active-pick" : "";
      cards += `
        <div class="bracket-match">
          <button class="bracket-team-btn ${homeActive}" onclick="pickWinner(${match.id}, '${match.home.replace(/'/g,"\\'")}')">
            ${match.home}
          </button>
          <div class="bracket-vs">vs</div>
          <button class="bracket-team-btn ${awayActive}" onclick="pickWinner(${match.id}, '${match.away.replace(/'/g,"\\'")}')">
            ${match.away}
          </button>
        </div>`;
    }

    roundDiv.innerHTML += cards + "</div>";
    container.appendChild(roundDiv);
  }
}

window.pickWinner = function(matchId, winner) {
  saveKnockoutPick(matchId, winner);
  renderBracket();
  // ← NY RAD: synka till molnet
  if (window.syncTipsToCloud) window.syncTipsToCloud();
};

// ================================================
// POÄNGSYSTEM
// ================================================
function calcUserPoints(tips, picks, actualGroupResults, actualKnockoutResults) {
  let pts = 0;

  // Gruppspel
  for (const [id, tip] of Object.entries(tips)) {
    const actual = actualGroupResults[id];
    if (!actual) continue;
    if (tip.homeGoals === actual.homeGoals && tip.awayGoals === actual.awayGoals) {
      pts += 3; // Exakt rätt
    } else {
      const tipResult = tip.homeGoals > tip.awayGoals ? "H" : tip.homeGoals < tip.awayGoals ? "A" : "D";
      const actResult = actual.homeGoals > actual.awayGoals ? "H" : actual.homeGoals < actual.awayGoals ? "A" : "D";
      if (tipResult === actResult) pts += 1; // Rätt utgång
    }
  }

  // Slutspel – rätt vinnare
  for (const [id, pick] of Object.entries(picks)) {
    if (actualKnockoutResults[id] && actualKnockoutResults[id] === pick) {
      pts += 2;
    }
  }

  return pts;
}

// ================================================
// RENDERA LIGATABELL
// ================================================
async function renderLeaderboard() {
  const container = document.getElementById("leaderboard-container");
  container.innerHTML = `<p style="text-align:center;padding:40px;color:#6b7280">⏳ Laddar ligatabell...</p>`;

  const tips = getSavedTips();
  const picks = getKnockoutPicks();
  const tippedGroups = Object.keys(tips).length;
  const tippedKnockout = Object.keys(picks).length;

  // Hämta verkliga resultat
  const results = await window.fetchResults();
  const { groupResults, knockoutResults } = results;

  // Hämta alla användares tips
  let allUsers = [];
  try {
    allUsers = await window.fetchAllTips();
  } catch(e) {
    console.log("Kunde inte hämta alla tips");
  }

  // Räkna poäng för varje användare
  const ranked = allUsers.map(u => ({
    email: u.email,
    points: calcUserPoints(u.tips || {}, u.picks || {}, groupResults, knockoutResults),
    tipped: Object.keys(u.tips || {}).length,
  })).sort((a,b) => b.points - a.points);

  const myEmail = window._auth?.currentUser?.email;

  const rows = ranked.map((u, i) => {
    const isMe = u.email === myEmail;
    return `<tr class="${isMe ? "my-row" : ""}">
      <td>${i+1}</td>
      <td>${u.email} ${isMe ? "👈" : ""}</td>
      <td>${u.tipped}/72</td>
      <td><strong>${u.points}</strong></td>
    </tr>`;
  }).join("");

  container.innerHTML = `
    <div class="leaderboard-wrapper">
      <h2 class="bracket-title">🏆 Ligatabell</h2>

      <div class="my-stats">
        <div class="stat-box">
          <div class="stat-number">${tippedGroups}</div>
          <div class="stat-label">Tipsade gruppmatcher</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">${tippedKnockout}</div>
          <div class="stat-label">Slutspelsval</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">${72 - tippedGroups}</div>
          <div class="stat-label">Kvar att tippa</div>
        </div>
      </div>

      <table class="standings-table" style="max-width:600px;margin:0 auto;">
        <thead><tr><th>#</th><th>Användare</th><th>Tippar</th><th>Poäng</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="4" style="text-align:center;color:#6b7280;padding:24px">Inga användare ännu</td></tr>`}</tbody>
      </table>

      <div class="leaderboard-note" style="margin-top:24px">
        <p>💡 Poäng räknas ut mot verkliga resultat när VM börjar 11 juni.</p>
        <p>✅ Dina tips sparas automatiskt i molnet varje gång du tippar.</p>
      </div>
    </div>
  `;
}
// ================================================
// DATUM
// ================================================
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("sv-SE", { day:"numeric", month:"short", hour:"2-digit", minute:"2-digit" });
}

// ================================================
// STARTA
// ================================================
window.initApp = function() {
  document.getElementById("loading").style.display = "none";
  const groups = groupMatchesByGroup(WC_MATCHES);
  renderGroups(groups);
};