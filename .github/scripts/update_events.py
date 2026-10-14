"""
Looks for new Go Girls* events in the Heidelberg Events Meetup calendar
and adds their Meetup links to events.js.

Runs every day on GitHub (see .github/workflows/update-events.yml).
To test it with other files:  python update_events.py [calendar.ics] [events.js]
"""

import re
import sys
import urllib.request
from pathlib import Path

FEED_URL = "https://www.meetup.com/heidelberg-events/events/ical/"
TITLE = re.compile(r"go\s*girls", re.IGNORECASE)
EVENTS_FILE = Path(__file__).resolve().parents[2] / "events.js"


def load_calendar(source):
    if source:
        return Path(source).read_text(encoding="utf-8")
    request = urllib.request.Request(FEED_URL, headers={"User-Agent": "Mozilla/5.0 (Go Girls* website)"})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8")


def parse_events(calendar):
    """Returns one dict per event, e.g. {"SUMMARY": "...", "DTSTART": "20261110T183000", "URL": "..."}"""
    if "BEGIN:VCALENDAR" not in calendar:
        raise ValueError("This doesn't look like a calendar - did Meetup change the feed?")
    # Long lines are wrapped: a line starting with a space continues the previous one
    calendar = re.sub(r"\r?\n[ \t]", "", calendar)
    events = []
    for block in re.findall(r"BEGIN:VEVENT\r?\n(.*?)END:VEVENT", calendar, re.DOTALL):
        fields = {}
        for line in block.splitlines():
            key, _, value = line.partition(":")
            fields[key.split(";")[0]] = value.replace("\\,", ",").replace("\\;", ";")
        events.append(fields)
    return events


def date_and_time(stamp):
    """ "20261110T183000" -> ("2026-11-10", "18:30") """
    return f"{stamp[0:4]}-{stamp[4:6]}-{stamp[6:8]}", f"{stamp[9:11]}:{stamp[11:13]}"


def main():
    calendar_file = sys.argv[1] if len(sys.argv) > 1 else None
    events_file = Path(sys.argv[2]) if len(sys.argv) > 2 else EVENTS_FILE

    text = events_file.read_text(encoding="utf-8")
    events_list = re.search(r"const EVENTS = \[.*?\n\];", text, re.DOTALL)
    defaults = re.search(r"const EVENT_DEFAULTS = \{.*?\};", text, re.DOTALL).group()
    default_start = re.search(r'start:\s*"([^"]+)"', defaults).group(1)
    default_end = re.search(r'end:\s*"([^"]+)"', defaults).group(1)
    known_dates = set(re.findall(r'date:\s*"(\d{4}-\d{2}-\d{2})"', events_list.group()))

    new_lines = []
    for event in parse_events(load_calendar(calendar_file)):
        if not TITLE.search(event.get("SUMMARY", "")) or event.get("STATUS") == "CANCELLED":
            continue
        date, start = date_and_time(event["DTSTART"])
        if date in known_dates:
            print(f"{date}: already in events.js")
            continue
        line = f'  {{ date: "{date}", meetup: "{event["URL"]}"'
        if start != default_start:
            line += f', start: "{start}"'
        if "DTEND" in event and date_and_time(event["DTEND"])[1] != default_end:
            line += f', end: "{date_and_time(event["DTEND"])[1]}"'
        new_lines.append(line + " },")
        known_dates.add(date)
        print(f"{date}: added {event['URL']}")

    if not new_lines:
        print("Nothing new")
        return
    end_of_list = events_list.end() - len("];")
    text = text[:end_of_list] + "\n".join(new_lines) + "\n" + text[end_of_list:]
    events_file.write_text(text, encoding="utf-8")


if __name__ == "__main__":
    main()
