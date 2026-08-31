// ===============================
// BVU SHORTCUT CHALLENGE DATA
// ===============================
//
// HOW TO UPDATE THIS FILE:
// 1. Change the week information below.
// 2. Put your YouTube video URL in video.
// 3. Put your Google Form URL in form.
// 4. Update leaderboardData with verified results.
//
// For now, this is intentionally manual. Later we can connect
// the site to Google Sheets / a database for automatic updates.

const weeks = [
  { number: 1, track: "YOUR TRACK", target: "1:00.000", shortcut: "Describe the shortcut here.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 2, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 3, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 4, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 5, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 6, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 7, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 8, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 9, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 10, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 11, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 12, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" },
  { number: 13, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "YOUR_GOOGLE_FORM_URL" }
];

// Replace this with your real verified leaderboard.
// "time" is the player's best verified submitted time.
// "points" is the player's total season score.
const leaderboardData = [
  // { name: "Player Name", time: "1:23.456", points: 0 },
];

let selectedWeek = 1;

function youtubeEmbed(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    let id = u.searchParams.get("v");
    if (!id && u.hostname.includes("youtu.be")) id = u.pathname.slice(1);
    if (!id) return "";
    return `https://www.youtube.com/embed/${id}`;
  } catch {
    return "";
  }
}

function renderCurrentChallenge() {
  const week = weeks[0];
  document.getElementById("currentWeekTitle").textContent = `Week ${week.number}`;
  document.getElementById("currentChallenge").innerHTML = `
    <div class="challenge-grid">
      <div>
        <div class="week-meta">
          <span class="pill">Week ${week.number}</span>
          <span class="pill">3 points available</span>
        </div>
        <h3>${week.track}</h3>
        <p>${week.shortcut}</p>
        <a class="button primary" href="#weeks">See challenge details →</a>
      </div>
      <div class="stat-box">
        <small>TARGET TIME</small>
        <div class="target">${week.target}</div>
        <small>Beat it for +1 point</small>
      </div>
    </div>
  `;
}

function renderTabs() {
  const container = document.getElementById("weekTabs");
  container.innerHTML = weeks.map(week => `
    <button class="week-tab ${week.number === selectedWeek ? "active" : ""}" onclick="selectWeek(${week.number})">
      Week ${week.number}
    </button>
  `).join("");
}

function renderWeek() {
  const week = weeks.find(w => w.number === selectedWeek);
  const embed = youtubeEmbed(week.video);

  document.getElementById("weekContent").innerHTML = `
    <div class="week-meta">
      <span class="pill">Week ${week.number}</span>
      <span class="pill">Target: ${week.target}</span>
      <span class="pill">+1 shortcut</span>
      <span class="pill">+1 target</span>
      <span class="pill">+1 top 3</span>
    </div>
    <h3>${week.track}</h3>
    <p>${week.shortcut}</p>

    <div class="video-placeholder">
      ${embed
        ? `<iframe src="${embed}" title="Week ${week.number} challenge video" allowfullscreen></iframe>`
        : `<span>Add your YouTube link in <code>script.js</code> to show the video here.</span>`
      }
    </div>

    <a class="button submit-button" href="${week.form}" target="_blank" rel="noopener">
      Submit Your Run →
    </a>
  `;
}

function renderLeaderboard() {
  const body = document.getElementById("leaderboardBody");
  const sorted = [...leaderboardData].sort((a, b) => b.points - a.points);

  if (!sorted.length) {
    body.innerHTML = `<tr><td colspan="4">No verified runs have been entered yet. The leaderboard will appear here once you add players in script.js.</td></tr>`;
    return;
  }

  body.innerHTML = sorted.map((player, index) => `
    <tr>
      <td class="place">${index + 1}</td>
      <td><strong>${player.name}</strong></td>
      <td>${player.time}</td>
      <td class="points">${player.points}</td>
    </tr>
  `).join("");
}

function selectWeek(number) {
  selectedWeek = number;
  renderTabs();
  renderWeek();
  document.getElementById("weekContent").scrollIntoView({ behavior: "smooth", block: "start" });
}

renderCurrentChallenge();
renderTabs();
renderWeek();
renderLeaderboard();
