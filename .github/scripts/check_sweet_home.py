"""
Checks whether an upcoming "Sweet Home" event is posted in the
Heidelberg Events Meetup calendar.

- If there is one, it saves the link of the latest one in
  .github/sweet-home-last-event.txt (the calendar forgets events once they
  are over, so the reminder can still link the last one to copy).
- If there is none, it exits with code 3, so the workflow sends a reminder
  (see .github/workflows/sweet-home-reminder.yml).

To test it with other files:  python check_sweet_home.py [calendar.ics] [last-event.txt]
"""

import re
import sys
from datetime import date
from pathlib import Path

from update_events import date_and_time, load_calendar, parse_events

TITLE = re.compile(r"sweet\s*home", re.IGNORECASE)
LAST_EVENT_FILE = Path(__file__).resolve().parents[1] / "sweet-home-last-event.txt"


def main():
    calendar_file = sys.argv[1] if len(sys.argv) > 1 else None
    last_event_file = Path(sys.argv[2]) if len(sys.argv) > 2 else LAST_EVENT_FILE
    today = date.today().isoformat()
    upcoming = sorted(
        (date_and_time(event["DTSTART"])[0], event["URL"])
        for event in parse_events(load_calendar(calendar_file))
        if TITLE.search(event.get("SUMMARY", ""))
        and event.get("STATUS") != "CANCELLED"
        and date_and_time(event["DTSTART"])[0] >= today
    )
    if not upcoming:
        print("No upcoming Sweet Home event on Meetup")
        return 3

    print(f"Next Sweet Home event: {upcoming[0][0]}")
    latest = upcoming[-1][1]
    if not last_event_file.exists() or last_event_file.read_text(encoding="utf-8").strip() != latest:
        last_event_file.write_text(latest + "\n", encoding="utf-8")
        print(f"Saved the latest one: {latest}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
