// All texts in both languages. Event data lives in events.js.

// YouTube intro video: paste the full YouTube link between the quotes.
// Leave empty ("") to hide the video block.
const INTRO_VIDEO = "https://www.youtube.com/watch?v=NJ9QIiWgLWw";

const TEXTS = {
  en: {
    navDates: "Dates",
    navAbout: "About",
    navLocation: "Location",
    logoAlt: "Go Girls* logo: a cute black Go stone with a pink bow",
    locTitle: "Where we meet",
    locText: "We meet in the cozy “Uni-Wohnzimmer” (university living room) at the ZEP – a relaxed place to sit together, play and chat.",
    locMap: "Open in Google Maps",
    eyebrow: "Heidelberg · once a month",
    tagline: "A cozy Go night for women* – play, chat and learn together.",
    photoAlt: "Three women laughing on a sofa while playing Go on a wooden board",
    datesTitle: "Upcoming dates",
    datesSub: "Not on Meetup? No problem – all dates are listed here too.",
    noEvents: "The next date will be announced here soon. Check back!",
    pastTitle: "Past events",
    pastLink: "On Meetup",
    nextUp: "Next up",
    meetupBtn: "Details & RSVP on Meetup",
    calendarBtn: "Add to calendar",
    mapBtn: "Directions",
    aboutTitle: "What is Go Girls*?",
    aboutText: "Go Girls* is a monthly game night for women* who want to play Go (also known as Baduk or Weiqi), the ancient board game of black and white stones. Whether you've never placed a stone or play regularly: come by, play, chat and enjoy the evening with us.",
    newTitle: "New to Go?",
    newText: "Perfect! We'll explain the rules and play your first games with you.",
    whoTitle: "Who can come?",
    whoText: "Women* of every age and level.",
    langTitle: "Language",
    langText: "German and English – whatever suits you.",
    foodTitle: "Food & drinks",
    foodText: "Drinks are €1.50 on site. Feel free to bring snacks.",
    asteriskNote: "The asterisk in Girls* includes everyone who identifies as a woman, including trans, inter and non-binary people.",
    hosts: "Hosts: Sina & Maya",
    footerMeetup: "Next event on Meetup",
    navGo: "What is Go?",
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
    videoNote: "The video is loaded from YouTube when you click.",
  },
  de: {
    navDates: "Termine",
    navAbout: "Über uns",
    navLocation: "Ort",
    logoAlt: "Go Girls*-Logo: ein süßer schwarzer Go-Stein mit rosa Schleife",
    locTitle: "Wo wir uns treffen",
    locText: "Wir treffen uns im gemütlichen Uni-Wohnzimmer der ZEP – ein entspannter Ort zum Zusammensitzen, Spielen und Quatschen.",
    locMap: "In Google Maps öffnen",
    eyebrow: "Heidelberg · einmal im Monat",
    tagline: "Ein gemütlicher Go-Abend für Frauen* – zusammen spielen, quatschen und lernen.",
    photoAlt: "Drei Frauen sitzen lachend auf einem Sofa und spielen Go auf einem Holzbrett",
    datesTitle: "Kommende Termine",
    datesSub: "Nicht auf Meetup? Kein Problem – alle Termine findest du auch hier.",
    noEvents: "Der nächste Termin wird bald hier bekannt gegeben. Schau wieder vorbei!",
    pastTitle: "Vergangene Termine",
    pastLink: "Auf Meetup",
    nextUp: "Als Nächstes",
    meetupBtn: "Details & Anmeldung auf Meetup",
    calendarBtn: "In den Kalender",
    mapBtn: "Wegbeschreibung",
    aboutTitle: "Was ist Go Girls*?",
    aboutText: "Go Girls* ist ein monatlicher Spieleabend für Frauen*, die Go spielen möchten (auch bekannt als Baduk oder Weiqi) – das jahrtausendealte Brettspiel mit schwarzen und weißen Steinen. Egal ob du noch nie einen Stein gesetzt hast oder regelmäßig spielst: Komm vorbei, spiel mit, quatsch mit uns und genieß den Abend.",
    newTitle: "Neu bei Go?",
    newText: "Super! Wir erklären dir die Regeln und spielen deine ersten Partien mit dir.",
    whoTitle: "Wer kann kommen?",
    whoText: "Frauen* jeden Alters und jeder Spielstärke.",
    langTitle: "Sprache",
    langText: "Deutsch und Englisch – wie es dir lieber ist.",
    foodTitle: "Essen & Trinken",
    foodText: "Getränke kosten vor Ort 1,50 €. Snacks kannst du gerne mitbringen.",
    asteriskNote: "Das Sternchen in Girls* schließt alle ein, die sich als Frau identifizieren – auch trans, inter und nicht-binäre Personen.",
    hosts: "Gastgeberinnen: Sina & Maya",
    footerMeetup: "Nächster Termin auf Meetup",
    navGo: "Was ist Go?",
    goTitle: "Was ist Go?",
    goIntro: "Go ist ein Strategie-Brettspiel für zwei Personen. Die Regeln passen auf einen Bierdeckel – und trotzdem ist das Spiel so tief, dass man ein Leben lang Neues entdeckt.",
    step1Title: "Stein setzen",
    step1Text: "Schwarz und Weiß setzen abwechselnd einen Stein auf einen freien Punkt – auf die Linien, nicht in die Kästchen. Gesetzte Steine bewegen sich nicht mehr.",
    step2Title: "Umzingeln & schlagen",
    step2Text: "Ein Stein braucht mindestens einen freien Nachbarpunkt. Nimmst du ihm den letzten, ist er geschlagen und wird vom Brett genommen.",
    step3Title: "Gebiet abstecken",
    step3Text: "Baue Mauern und grenze Bereiche des Bretts ab. Am Ende gewinnt, wer mehr Gebiet umschlossen (plus Steine geschlagen) hat.",
    videoTitle: "Video: Go in fünf Minuten lernen (auf Englisch)",
    videoLoad: "Video abspielen",
    videoNote: "Das Video wird erst beim Klick von YouTube geladen.",
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
}

// ---- Events ----

function toDate(dateStr, timeStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = (timeStr || "00:00").split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm);
}

// Events stay "upcoming" until the end of their day.
function splitEvents() {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const byDate = (a, b) => toDate(a.date, a.start) - toDate(b.date, b.start);
  return {
    upcoming: EVENTS.filter((ev) => toDate(ev.date) >= startOfToday).sort(byDate),
    past: EVENTS.filter((ev) => toDate(ev.date) < startOfToday).sort(byDate).reverse(),
  };
}

function formatTime(date) {
  return new Intl.DateTimeFormat(LOCALES[lang], { hour: "numeric", minute: "2-digit" }).format(date);
}

function calendarFile(ev) {
  const stamp = (date) =>
    date.getFullYear() +
    String(date.getMonth() + 1).padStart(2, "0") +
    String(date.getDate()).padStart(2, "0") + "T" +
    String(date.getHours()).padStart(2, "0") +
    String(date.getMinutes()).padStart(2, "0") + "00";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Go Girls//Heidelberg//EN",
    "BEGIN:VEVENT",
    `UID:gogirls-${ev.date}@sinalaura.github.io`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART;TZID=Europe/Berlin:${stamp(toDate(ev.date, ev.start))}`,
    `DTEND;TZID=Europe/Berlin:${stamp(toDate(ev.date, ev.end))}`,
    "SUMMARY:Go Girls* Night",
    `LOCATION:${ev.place}\\, ${ev.address.replace(/,/g, "\\,")}`,
    `URL:${ev.meetup}`,
    `DESCRIPTION:${ev.meetup}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
}

function renderEvents() {
  const list = document.getElementById("event-list");
  const t = TEXTS[lang];
  const { upcoming, past } = splitEvents();
  list.innerHTML = "";

  // Footer button always points to the next event (hidden if there is none)
  const nextLink = document.getElementById("next-event-link");
  nextLink.hidden = upcoming.length === 0;
  if (upcoming.length) nextLink.href = upcoming[0].meetup;

  renderPastEvents(past);

  if (upcoming.length === 0) {
    list.innerHTML = `<div class="event-empty"><p>${t.noEvents}</p></div>`;
    return;
  }

  upcoming.forEach((ev, i) => {
    const start = toDate(ev.date, ev.start);
    const end = toDate(ev.date, ev.end);
    const fmt = (opts) => new Intl.DateTimeFormat(LOCALES[lang], opts).format(start);
    const mapUrl = "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(`${ev.place}, ${ev.address}`);

    const card = document.createElement("article");
    card.className = "event-card" + (i === 0 ? " is-next" : "");
    card.innerHTML = `
      <div class="event-date">
        <span class="event-weekday">${fmt({ weekday: "short" })}</span>
        <span class="event-day">${start.getDate()}</span>
        <span class="event-month">${fmt({ month: "short" })}</span>
      </div>
      <div class="event-body">
        ${i === 0 ? `<span class="badge">${t.nextUp}</span>` : ""}
        <h3>Go Girls* Night</h3>
        <p class="event-meta">${fmt({ weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          · ${formatTime(start)} – ${formatTime(end)}${lang === "de" ? " Uhr" : ""}</p>
        <p class="event-meta">${ev.place}, ${ev.address}</p>
        <div class="event-actions">
          <a class="btn btn-primary" href="${ev.meetup}" target="_blank" rel="noopener">${t.meetupBtn}</a>
          <a class="btn btn-ghost" href="${calendarFile(ev)}" download="go-girls-${ev.date}.ics">${t.calendarBtn}</a>
          <a class="btn btn-ghost" href="${mapUrl}" target="_blank" rel="noopener">${t.mapBtn}</a>
        </div>
      </div>`;
    list.appendChild(card);
  });
}

function renderPastEvents(past) {
  const t = TEXTS[lang];
  document.getElementById("past-events").hidden = past.length === 0;
  document.getElementById("past-list").innerHTML = past.map((ev) => {
    const date = new Intl.DateTimeFormat(LOCALES[lang], { day: "numeric", month: "long", year: "numeric" })
      .format(toDate(ev.date));
    return `<li>
        <span class="past-date">${date}</span>
        <span class="past-place">${ev.place}</span>
        <a href="${ev.meetup}" target="_blank" rel="noopener">${t.pastLink} →</a>
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

  // Territory is marked with little hearts
  const heart = (x, y, fill, stroke = "none") =>
    `<use href="#heart" x="${p(x) - 4.5}" y="${p(y) - 4}" width="9" height="8.25" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
  blackArea.forEach(([x, y]) => { svg += heart(x, y, ink); });
  whiteArea.forEach(([x, y]) => { svg += heart(x, y, "#fff", ink); });

  empty.forEach(([x, y]) => {
    svg += `<circle cx="${p(x)}" cy="${p(y)}" r="10" fill="none" stroke="#cc3d6e" stroke-width="1.5" stroke-dasharray="3 3"/>`;
  });

  // A stone with a little face, like the Go Girls* logo
  const face = (cx, cy, eye, mouth) => `
    <circle cx="${cx - 3.6}" cy="${cy - 0.8}" r="1.7" fill="${eye}"/>
    <circle cx="${cx + 3.6}" cy="${cy - 0.8}" r="1.7" fill="${eye}"/>
    <circle cx="${cx - 3.1}" cy="${cy - 1.4}" r="0.6" fill="#fff"/>
    <circle cx="${cx + 4.1}" cy="${cy - 1.4}" r="0.6" fill="#fff"/>
    <ellipse cx="${cx - 6}" cy="${cy + 2.6}" rx="1.8" ry="1.1" fill="#f7a1b5"/>
    <ellipse cx="${cx + 6}" cy="${cy + 2.6}" rx="1.8" ry="1.1" fill="#f7a1b5"/>
    <path d="M${cx - 1.6} ${cy + 2.4} q1.6 1.6 3.2 0" fill="none" stroke="${mouth}" stroke-width="0.9" stroke-linecap="round"/>`;

  black.forEach(([x, y]) => {
    svg += `<circle cx="${p(x)}" cy="${p(y) + 1}" r="10.5" fill="#e58ba3" opacity="0.35"/>
            <circle cx="${p(x)}" cy="${p(y)}" r="10.5" fill="${ink}"/>
            <ellipse cx="${p(x) - 4}" cy="${p(y) - 6}" rx="3" ry="1.8" fill="#fff" opacity="0.25"/>
            ${face(p(x), p(y), "#fff", "#f7c2d0")}`;
  });
  white.forEach(([x, y]) => {
    svg += `<circle cx="${p(x)}" cy="${p(y) + 1}" r="10.5" fill="#e58ba3" opacity="0.35"/>
            <circle cx="${p(x)}" cy="${p(y)}" r="10.5" fill="#fffaf8" stroke="#e7b6c3" stroke-width="1"/>
            ${face(p(x), p(y), ink, ink)}`;
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
