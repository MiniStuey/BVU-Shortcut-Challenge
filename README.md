# BVU Shortcut Challenge

A static website for the Buena Vista University Mario Kart World Shortcut Challenge.

## Files

- `index.html` — page structure
- `style.css` — BVU navy/gold visual design
- `script.js` — weekly challenges and leaderboard data

## Updating a week

Open `script.js` and edit the matching object in `weeks`.

Example:

```js
{
  number: 1,
  track: "Rainbow Road",
  target: "1:42.500",
  shortcut: "Hit the shortcut on all three laps and submit your best verified time.",
  video: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  form: "YOUR_GOOGLE_FORM_URL"
}
```

## Updating the leaderboard

Add verified players to `leaderboardData`:

```js
const leaderboardData = [
  { name: "Mario", time: "1:41.382", points: 3 },
  { name: "Luigi", time: "1:43.901", points: 2 },
];
```

The site automatically sorts the leaderboard by total points.

## Season

The calendar from Monday, September 7, 2026 through Monday, November 30, 2026 gives you 13 weekly challenge slots.

## GitHub Pages

This is a static site, so it can be hosted directly with GitHub Pages. No server is required for this first version.
