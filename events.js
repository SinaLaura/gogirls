/*
  ============================================================
   GO GIRLS* EVENTS - this is the only file you need to edit
  ============================================================

  We meet every 2nd Tuesday of the month. The website works out
  these dates by itself and always shows the next few. You only
  need to add the Meetup link once the event exists on Meetup:

    { date: "2026-11-10", meetup: "https://www.meetup.com/..." },

  (don't forget the comma at the end of each line!)

  Usually you don't even need to do that: every morning GitHub
  looks for new "Go Girls" events on Meetup and adds the link
  here by itself (see .github/workflows/update-events.yml).

  - Time and place come from EVENT_DEFAULTS below. If one evening
    is different, add it to that event, e.g.  start: "19:00",
  - To skip a month (e.g. holidays):
    { date: "2026-12-08", cancelled: true },
  - The day after an event, it moves to "Past events"
    automatically, so never delete anything.
*/

const EVENT_DEFAULTS = {
  start: "18:30",
  end: "21:30",
  place: "ZEP",
  address: "Zeppelinstraße 1, Heidelberg",
};

const EVENTS = [
  { date: "2026-09-02", start: "19:00", end: "22:00", meetup: "https://www.meetup.com/heidelberg-events/events/316278720/" },
  { date: "2026-10-13", meetup: "https://www.meetup.com/heidelberg-events/events/316468466/" },
  { date: "2026-11-10", meetup: "https://www.meetup.com/heidelberg-events/events/316965368/" },
];

// How many dates to preview below the next event
const PREVIEW_COUNT = 3;
