// All texts in both languages. Event data lives in events.js.
const TEXTS = {
  en: {
    navDates: "Dates",
    navAbout: "About",
    eyebrow: "Heidelberg · once a month",
    tagline: "A cozy Go night for women* – play, chat and learn together.",
    heroCta: "See the next dates",
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
    whoText: "Women* of every age and level. You don't need to be a student.",
    langTitle: "Language",
    langText: "German and English – whatever suits you.",
    foodTitle: "Food & drinks",
    foodText: "Drinks are €1.50 on site. Feel free to bring snacks.",
    asteriskNote: "* The asterisk in Girls* includes everyone who identifies as a woman, including trans, inter and non-binary people.",
    hosts: "Hosts: Sina & Maya",
    footerMeetup: "Next event on Meetup",
  },
  de: {
    navDates: "Termine",
    navAbout: "Über uns",
    eyebrow: "Heidelberg · einmal im Monat",
    tagline: "Ein gemütlicher Go-Abend für Frauen* – zusammen spielen, quatschen und lernen.",
    heroCta: "Zu den nächsten Terminen",
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
    whoText: "Frauen* jeden Alters und jeder Spielstärke. Du musst keine Studentin sein.",
    langTitle: "Sprache",
    langText: "Deutsch und Englisch – wie es dir lieber ist.",
    foodTitle: "Essen & Trinken",
    foodText: "Getränke kosten vor Ort 1,50 €. Snacks kannst du gerne mitbringen.",
    asteriskNote: "* Das Sternchen in Girls* schließt alle ein, die sich als Frau identifizieren – auch trans, inter und nicht-binäre Personen.",
    hosts: "Gastgeberinnen: Sina & Maya",
    footerMeetup: "Nächster Termin auf Meetup",
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

// ---- Start ----

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});
setLanguage(pickStartLanguage());
