// All texts in both languages. Event data lives in events.js.

// YouTube intro video: paste the full YouTube link between the quotes.
// Leave empty ("") to hide the video block.
const INTRO_VIDEO = "https://www.youtube.com/watch?v=NJ9QIiWgLWw";

const TEXTS = {
  en: {
    locTitle: "Where we meet",
    locText: "We meet at the ZEP, a colorful, student-run building of the university full of comfy sofas.",
    locMap: "Open in Google Maps",
    eyebrow: "Every 2nd Tuesday of the month",
    eyebrowLang: "German & English",
    tagline: "A cozy evening for women* – play Go, chat and learn together.",
    photoAlt: "Three women laughing on a sofa while playing Go on a wooden board",
    datesTitle: "Upcoming dates",
    noEvents: "The next date will be announced here soon. Check back!",
    pastTitle: "Past events",
    previewTitle: "Further dates",
    pastLink: "On Meetup",
    nextUp: "Next up",
    meetupBtn: "Sign up on Meetup",
    calendarBtn: "Add to Google Calendar",
    calendarShort: "+ Google Calendar",
    mapBtn: "Directions",
    emailOrMeetup: "Not on Meetup? Sign up by email:",
    emailOnly: "Sign up by email:",
    emailSubject: "Go Girls* Game Night – {date}",
    emailBody: "Hi Sina,\n\nI'd like to come to the Go Girls* Game Night on {date}.\n\nSee you there!\n",
    newTitle: "New to Go?",
    newText: "No problem! We'll explain the rules and play your first games with you.",
    foodTitle: "Free to join",
    foodText: "Bring your own food and drinks, or get drinks on site for €1.50. If we bring snacks, a small donation (€1⁠–⁠2) is appreciated.",
    paceTitle: "At your own pace",
    paceText: "Come late, leave early or take a break. There are quiet rooms for a calm game or a moment to yourself.",
    welcomeTitle: "Just among us",
    welcomeText: "Cis, trans and inter women and non-binary people are welcome. We aim to be a safer space.",
    hosts: "Hosts: Sina & Maya",
    contact: "Contact:",
    goTitle: "What is Go?",
    goIntro: "Go is a strategy board game for two players. The rules fit on a napkin, but the game is so deep that you can keep discovering new things for a lifetime.",
    step1Title: "Place a stone",
    step1Text: "Black and White take turns placing one stone on an empty point – on the lines, not in the squares. Once placed, stones don't move.",
    step2Title: "Surround to capture",
    step2Text: "A stone needs at least one free point next to it. Take away its last free point and it's captured and removed from the board.",
    step3Title: "Claim territory",
    step3Text: "Build walls to fence off areas of the board. At the end, whoever surrounds more space (plus captured stones) wins.",
    videoTitle: "Watch: Learn Go in five minutes",
    videoLoad: "Play video",
    timerEyebrow: "btw, I've built an app",
    timerText: "A Go clock for your phone that lies next to the board – right in the browser, no install needed.",
    timerOpen: "Open the timer",
    timerGithub: "On GitHub",
  },
  de: {
    locTitle: "Wo wir uns treffen",
    locText: "Wir treffen uns in der ZEP, einem bunten, selbstverwalteten Gebäude der Universität voller gemütlicher Sofas.",
    locMap: "In Google Maps öffnen",
    eyebrow: "Jeden 2. Dienstag im Monat",
    eyebrowLang: "Deutsch & Englisch",
    tagline: "Ein gemütlicher Abend für Frauen* – Go spielen, quatschen und lernen.",
    photoAlt: "Drei Frauen sitzen lachend auf einem Sofa und spielen Go auf einem Holzbrett",
    datesTitle: "Kommende Termine",
    noEvents: "Der nächste Termin wird bald hier bekannt gegeben. Schau wieder vorbei!",
    pastTitle: "Vergangene Termine",
    previewTitle: "Weitere Termine",
    pastLink: "Auf Meetup",
    nextUp: "Als Nächstes",
    meetupBtn: "Auf Meetup anmelden",
    calendarBtn: "Zu Google Kalender hinzufügen",
    calendarShort: "+ Google Kalender",
    mapBtn: "Wegbeschreibung",
    emailOrMeetup: "Nicht auf Meetup? Melde dich per E-Mail an:",
    emailOnly: "Melde dich per E-Mail an:",
    emailSubject: "Go Girls* Game Night – {date}",
    emailBody: "Hallo Sina,\n\nich möchte gern zur Go Girls* Game Night am {date} kommen.\n\nBis dann!\n",
    newTitle: "Neu bei Go?",
    newText: "Kein Problem! Wir erklären dir die Regeln und spielen deine ersten Partien mit dir.",
    foodTitle: "Kostenlose Teilnahme",
    foodText: "Bring gern Essen und Getränke mit oder hol dir vor Ort Getränke für 1,50 €. Wenn wir Snacks mitbringen, freuen wir uns über eine kleine Spende (1⁠–⁠2 €).",
    paceTitle: "In deinem Tempo",
    paceText: "Komm später, geh früher oder mach eine Pause. Es gibt ruhige Räume für eine Partie in Ruhe oder einen Moment für dich.",
    welcomeTitle: "Ganz unter uns",
    welcomeText: "Cis, trans und inter Frauen sowie nicht-binäre Personen sind willkommen. Wir möchten ein Safer Space sein.",
    hosts: "Gastgeberinnen: Sina & Maya",
    contact: "Kontakt:",
    goTitle: "Was ist Go?",
    goIntro: "Go ist ein Strategie-Brettspiel für zwei Personen. Die Regeln passen auf einen Bierdeckel – und trotzdem ist das Spiel so tief, dass man ein Leben lang Neues entdeckt.",
    step1Title: "Steine setzen",
    step1Text: "Schwarz und Weiß setzen abwechselnd einen Stein auf einen freien Punkt – auf die Linien, nicht in die Kästchen. Gesetzte Steine bewegen sich nicht mehr.",
    step2Title: "Umzingeln & schlagen",
    step2Text: "Ein Stein braucht mindestens einen freien Nachbarpunkt. Nimmst du ihm den letzten, ist er geschlagen und wird vom Brett genommen.",
    step3Title: "Gebiet abstecken",
    step3Text: "Baue Mauern und grenze Bereiche des Bretts ab. Am Ende gewinnt, wer mehr Gebiet umschlossen (plus Steine geschlagen) hat.",
    videoTitle: "Video: Go in fünf Minuten lernen (auf Englisch)",
    videoLoad: "Video abspielen",
    timerEyebrow: "btw, ich habe eine App gebaut",
    timerText: "Eine Go-Uhr fürs Handy, die neben dem Brett liegt – direkt im Browser, ohne Installation.",
    timerOpen: "Timer öffnen",
    timerGithub: "Zu GitHub",
  },
};

const LOCALES = { en: "en-GB", de: "de-DE" };
let lang = "en";

function pickStartLanguage() {
  try {
    const saved = localStorage.getItem("gogirls-lang");
    if (saved && TEXTS[saved]) return saved;
  } catch (e) {}
  return (navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en";
}

function setLanguage(newLang) {
  lang = newLang;
  document.documentElement.lang = lang;
  try { localStorage.setItem("gogirls-lang", lang); } catch (e) {}

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = TEXTS[lang][el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = TEXTS[lang][el.dataset.i18nAlt];
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
  });
  renderEvents();

  const contact = document.getElementById("contact-link");
  contact.href = mailtoUrl("Go Girls*");
  contact.textContent = EMAIL;
}

// ---- Events ----

function toDate(dateStr, timeStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = (timeStr || "00:00").split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm);
}

function isoDate(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" +
    String(d.getDate()).padStart(2, "0");
}

// Second Tuesday of a month (month may overflow, e.g. 13 = January next year)
function secondTuesday(year, month) {
  const first = new Date(year, month, 1);
  const firstTuesday = 1 + ((2 - first.getDay() + 7) % 7);
  return new Date(year, month, firstTuesday + 7);
}

// Combines the events from events.js with the regular schedule
// (every 2nd Tuesday). Events stay "upcoming" until the end of their day.
function splitEvents() {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const byDate = (a, b) => toDate(a.date, a.start) - toDate(b.date, b.start);

  const listed = EVENTS.map((ev) => ({ ...EVENT_DEFAULTS, ...ev }));
  const all = new Map(listed.map((ev) => [ev.date, ev]));
  for (let i = 0; i <= PREVIEW_COUNT + 2; i++) {
    const date = isoDate(secondTuesday(startOfToday.getFullYear(), startOfToday.getMonth() + i));
    if (!all.has(date)) all.set(date, { ...EVENT_DEFAULTS, date });
  }

  const events = [...all.values()].filter((ev) => !ev.cancelled);
  return {
    upcoming: events.filter((ev) => toDate(ev.date) >= startOfToday).sort(byDate)
      .slice(0, 1 + PREVIEW_COUNT),
    past: events.filter((ev) => ev.meetup && toDate(ev.date) < startOfToday).sort(byDate).reverse(),
  };
}

function formatTime(date) {
  return new Intl.DateTimeFormat(LOCALES[lang], { hour: "numeric", minute: "2-digit" }).format(date);
}

function timeRange(ev) {
  return `${formatTime(toDate(ev.date, ev.start))} – ${formatTime(toDate(ev.date, ev.end))}` +
    (lang === "de" ? " Uhr" : "");
}

// Put together here instead of written out, so spam bots reading the page can't pick it up
const EMAIL = ["go.girls.game.night", "gmail.com"].join("@");

// Email link with subject and a short message already filled in
function mailtoUrl(subject, body) {
  const query = [["subject", subject], ["body", body]]
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join("&");
  return `mailto:${EMAIL}` + (query ? "?" + query : "");
}

// Link that opens Google Calendar with the event already filled in
function googleCalendarUrl(ev) {
  const stamp = (time) => ev.date.replace(/-/g, "") + "T" + time.replace(":", "") + "00";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Go Girls* Game Night",
    dates: `${stamp(ev.start)}/${stamp(ev.end)}`,
    ctz: "Europe/Berlin",
    location: `${ev.place}, ${ev.address}`,
    details: ev.meetup || "",
  });
  return "https://calendar.google.com/calendar/render?" + params;
}

function renderEvents() {
  const list = document.getElementById("event-list");
  const t = TEXTS[lang];
  const { upcoming, past } = splitEvents();
  const [next, ...preview] = upcoming;

  renderDateList("preview", preview);
  renderDateList("past", past);

  if (!next) {
    list.innerHTML = `<div class="event-empty"><p>${t.noEvents}</p></div>`;
    return;
  }

  const start = toDate(next.date, next.start);
  const fmt = (opts) => new Intl.DateTimeFormat(LOCALES[lang], opts).format(start);
  const meetupButton = next.meetup
    ? `<a class="btn btn-primary" href="${next.meetup}" target="_blank" rel="noopener">${t.meetupBtn}</a>`
    : "";
  // The usual place is in the "Where we meet" section, so only spell out a different one
  const elsewhere = next.address !== EVENT_DEFAULTS.address;
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${next.place}, ${next.address}`);
  const mapButton = elsewhere
    ? `<a class="btn btn-ghost" href="${mapUrl}" target="_blank" rel="noopener">${t.mapBtn}</a>`
    : "";

  list.innerHTML = `
    <article class="event-card is-next">
      <div class="event-date">
        <span class="event-weekday">${fmt({ weekday: "short" })}</span>
        <span class="event-day">${start.getDate()}</span>
        <span class="event-month">${fmt({ month: "short" })}</span>
      </div>
      <div class="event-body">
        <span class="badge">${t.nextUp}</span>
        <h3>${timeRange(next)}</h3>
        <p class="event-meta">${elsewhere ? `${next.place}, ${next.address}` : `${next.place}, Heidelberg`}</p>
        <div class="event-actions">
          ${meetupButton}
          <a class="btn btn-ghost" href="${googleCalendarUrl(next)}" target="_blank" rel="noopener">${t.calendarBtn}</a>
          ${mapButton}
        </div>
      </div>
    </article>
    <p class="email-signup">${next.meetup ? t.emailOrMeetup : t.emailOnly}
      <a class="email-link" href="${mailtoUrl(t.emailSubject.replace("{date}", fmt({ day: "numeric", month: "long" })),
        t.emailBody.replace("{date}", fmt({ weekday: "long", day: "numeric", month: "long" })))}">${EMAIL}</a></p>`;
}

// Time and place, but only where they differ from the usual ones
function unusualDetails(ev) {
  const d = EVENT_DEFAULTS;
  return [
    (ev.start !== d.start || ev.end !== d.end) && timeRange(ev),
    ev.place !== d.place && ev.place,
  ].filter(Boolean).join(" · ");
}

// Compact list of dates (preview or past), each with its Meetup link if there is one
function renderDateList(id, events) {
  const t = TEXTS[lang];
  document.getElementById(`${id}-events`).hidden = events.length === 0;
  document.getElementById(`${id}-list`).innerHTML = events.map((ev) => {
    const date = new Intl.DateTimeFormat(LOCALES[lang], { weekday: "short", day: "numeric", month: "long", year: "numeric" })
      .format(toDate(ev.date));
    const links = [
      ev.meetup && `<a href="${ev.meetup}" target="_blank" rel="noopener">${t.pastLink} →</a>`,
      id === "preview" && `<a href="${googleCalendarUrl(ev)}" target="_blank" rel="noopener">${t.calendarShort}</a>`,
    ].filter(Boolean).join("");
    return `<li>
        <span class="list-date">${date}</span>
        <span class="list-details">${unusualDetails(ev)}</span>
        <span class="list-links">${links}</span>
      </li>`;
  }).join("");
}

// ---- "What is Go?" diagrams ----

// Draws a small Go board as SVG. Points are [column, row], counted from 0.
// edge: true draws a complete board, false a cut-out of a bigger one.
function drawBoard(el, { size, edge = false, black = [], white = [], ghost = [], ring = [],
                         empty = [], blackArea = [], whiteArea = [] }) {
  const gap = 24;
  const margin = edge ? 16 : 12;
  const width = margin * 2 + gap * (size - 1);
  const p = (i) => margin + i * gap;
  const lineStart = edge ? margin : 0;
  const lineEnd = edge ? width - margin : width;
  const ink = "#393643";
  let svg = `<rect width="${width}" height="${width}" rx="14" fill="#ffd9e2"/>`;

  for (let i = 0; i < size; i++) {
    svg += `<line x1="${lineStart}" y1="${p(i)}" x2="${lineEnd}" y2="${p(i)}"/>`;
    svg += `<line x1="${p(i)}" y1="${lineStart}" x2="${p(i)}" y2="${lineEnd}"/>`;
  }
  svg = `<g stroke="#eea3b7" stroke-width="1.3" stroke-linecap="round">${svg}</g>`;

  // Territory is marked with small squares
  const square = (x, y, fill, stroke = "none") =>
    `<rect x="${p(x) - 4}" y="${p(y) - 4}" width="8" height="8" rx="1.5" fill="${fill}" stroke="${stroke}"/>`;
  blackArea.forEach(([x, y]) => { svg += square(x, y, ink); });
  whiteArea.forEach(([x, y]) => { svg += square(x, y, "#fff", ink); });

  empty.forEach(([x, y]) => {
    svg += `<circle cx="${p(x)}" cy="${p(y)}" r="10" fill="none" stroke="#cc3d6e" stroke-width="1.5" stroke-dasharray="3 3"/>`;
  });

  black.forEach(([x, y]) => {
    svg += `<circle cx="${p(x)}" cy="${p(y)}" r="10.5" fill="${ink}"/>
            <ellipse cx="${p(x) - 3.5}" cy="${p(y) - 4.5}" rx="3.2" ry="2" fill="#fff" opacity="0.2"/>`;
  });
  white.forEach(([x, y]) => {
    svg += `<circle cx="${p(x)}" cy="${p(y)}" r="10.5" fill="#fffaf8" stroke="#d9a9b7" stroke-width="1"/>`;
  });
  ghost.forEach(([x, y]) => {
    svg += `<circle cx="${p(x)}" cy="${p(y)}" r="10.5" fill="${ink}" opacity="0.25" stroke="${ink}" stroke-dasharray="3 2"/>`;
  });
  ring.forEach(([x, y]) => {
    svg += `<circle cx="${p(x)}" cy="${p(y)}" r="14.5" fill="none" stroke="#cc3d6e" stroke-width="2.2" stroke-dasharray="4 3"/>`;
  });

  el.innerHTML = `<svg viewBox="0 0 ${width} ${width}" aria-hidden="true">${svg}</svg>`;
}

function drawDiagrams() {
  drawBoard(document.getElementById("diagram-place"), {
    size: 5,
    black: [[1, 1], [3, 3], [2, 2]],
    white: [[3, 1], [1, 3]],
    ring: [[2, 2]],
  });
  drawBoard(document.getElementById("diagram-capture-before"), {
    size: 5,
    black: [[1, 2], [2, 1], [3, 2]],
    white: [[2, 2]],
    ghost: [[2, 3]],
  });
  drawBoard(document.getElementById("diagram-capture-after"), {
    size: 5,
    black: [[1, 2], [2, 1], [3, 2], [2, 3]],
    empty: [[2, 2]],
  });

  // Territory: one wall per side, row by row (column of the black / white stone)
  const blackWall = [2, 2, 3, 3, 3, 2, 2];
  const whiteWall = [3, 3, 4, 4, 4, 3, 3];
  const board = { size: 7, edge: true, black: [], white: [], blackArea: [], whiteArea: [] };
  for (let y = 0; y < 7; y++) {
    board.black.push([blackWall[y], y]);
    board.white.push([whiteWall[y], y]);
    for (let x = 0; x < blackWall[y]; x++) board.blackArea.push([x, y]);
    for (let x = whiteWall[y] + 1; x < 7; x++) board.whiteArea.push([x, y]);
  }
  drawBoard(document.getElementById("diagram-territory"), board);
}

// ---- Intro video (only loads from YouTube after a click) ----

function setupVideo() {
  const match = INTRO_VIDEO.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  const id = match ? match[1] : (/^[\w-]{11}$/.test(INTRO_VIDEO) ? INTRO_VIDEO : null);
  if (!id) return;

  document.getElementById("video-block").hidden = false;
  document.getElementById("video-load").addEventListener("click", () => {
    document.getElementById("video-frame").innerHTML =
      `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0"
        title="Learn The Game Of Go In FIVE MINUTES! (In Sente)" allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  });
}

// ---- Start ----

drawDiagrams();
setupVideo();
document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});
setLanguage(pickStartLanguage());
