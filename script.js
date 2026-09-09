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
  { number: 1, track: "Bowser's Castle", target: "2:30.000", shortcut: "The shortcut this week is about the main rail shortcut in the video. The secondary shortcut isn't required for the shortcut point, but it may come in handy when getting around to the time requirement. If you want to see my pb, my switch friend code is SW-6765-3665-2884, and my pb is 2:22.112. Good Luck!", video: "https://www.youtube.com/watch?v=mmV98A0soY8", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 2, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 3, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 4, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 5, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 6, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 7, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 8, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 9, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 10, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 11, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 12, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" },
  { number: 13, track: "TBD", target: "TBD", shortcut: "Challenge details coming soon.", video: "", form: "https://docs.google.com/forms/d/e/1FAIpQLScjSjIpSUgIi5RLaqKbGGr9o9Uo4SX9meJc1sVMq0MqcC5tjQ/viewform?usp=publish-editor" }
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
      ${
        embed
          ? `
            <iframe
              src="${embed}"
              title="Week ${week.number} challenge video"
              width="560"
              height="315"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          `
          : `
            <p>No challenge video has been added for this week yet.</p>
          `
      }
    </div>

    <a class="button submit-button" href="${week.form}" target="_blank" rel="noopener">
      Submit Your Run →
    </a>
  `;
}

function renderLeaderboard() {

  // =========================
  // TIME TRIAL LEADERBOARD
  // =========================

  const timeBody = document.getElementById("timeLeaderboardBody");

  // Sort fastest time first
  const timeSorted = [...leaderboardData].sort((a, b) => {
    return timeToMilliseconds(a.time) - timeToMilliseconds(b.time);
  });

  if (!timeSorted.length) {
    timeBody.innerHTML = `
      <tr>
        <td colspan="3">
          No verified times yet.
        </td>
      </tr>
    `;
  } else {
    timeBody.innerHTML = timeSorted.map((player, index) => `
      <tr>
        <td class="place">${index + 1}</td>
        <td><strong>${player.name}</strong></td>
        <td>${player.time}</td>
      </tr>
    `).join("");
  }


  // =========================
  // POINTS LEADERBOARD
  // =========================

  const pointsBody = document.getElementById("pointsLeaderboardBody");

  // Sort highest points first
  const pointsSorted = [...leaderboardData].sort((a, b) => {
    return b.points - a.points;
  });

  if (!pointsSorted.length) {
    pointsBody.innerHTML = `
      <tr>
        <td colspan="3">
          No points have been awarded yet.
        </td>
      </tr>
    `;
  } else {
    pointsBody.innerHTML = pointsSorted.map((player, index) => `
      <tr>
        <td class="place">${index + 1}</td>
        <td><strong>${player.name}</strong></td>
        <td class="points">${player.points}</td>
      </tr>
    `).join("");
  }
}


// Convert a Mario Kart time such as 2:30.456
// into milliseconds so JavaScript can compare times.
function timeToMilliseconds(time) {

  const parts = time.split(":");

  const minutes = parseInt(parts[0]);
  const seconds = parseFloat(parts[1]);

  return (minutes * 60 + seconds) * 1000;
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
