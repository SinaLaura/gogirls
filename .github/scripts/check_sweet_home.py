"""
Checks whether an upcoming "Sweet Home" event is posted in the
Heidelberg Events Meetup calendar.

If there is none, it looks up the last Sweet Home event on Meetup's
past events page (to copy it), and exits with code 3, so the workflow
sends a reminder (see .github/workflows/sweet-home-reminder.yml).

To test it with saved files:  python check_sweet_home.py [calendar.ics] [past-events.html]
"""

import json
import os
import re
import sys
import urllib.request
from datetime import date
from pathlib import Path

from update_events import date_and_time, load_calendar, parse_events

TITLE = re.compile(r"sweet\s*home", re.IGNORECASE)
PAST_URL = "https://www.meetup.com/heidelberg-events/events/?type=past"


def last_event(source):
    """Link of the most recent past Sweet Home event, or the past events page if it can't be found."""
    try:
        if source:
            page = Path(source).read_text(encoding="utf-8")
        else:
            request = urllib.request.Request(PAST_URL, headers={"User-Agent": "Mozilla/5.0 (Go Girls* website)"})
            with urllib.request.urlopen(request, timeout=30) as response:
                page = response.read().decode("utf-8")
        # The page carries its events as JSON in a <script id="__NEXT_DATA__"> tag
        data = json.loads(re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', page, re.DOTALL).group(1))
        events = [
            value for key, value in data["props"]["pageProps"]["__APOLLO_STATE__"].items()
            if key.startswith("Event:") and TITLE.search(value.get("title", "")) and value.get("eventUrl")
        ]
        return max(events, key=lambda event: event["dateTime"])["eventUrl"]
    except Exception as error:  # Meetup changed the page: still send the reminder
        print(f"Couldn't find the last Sweet Home event ({error!r})")
        return PAST_URL


def main():
    calendar_file = sys.argv[1] if len(sys.argv) > 1 else None
    past_file = sys.argv[2] if len(sys.argv) > 2 else None
    today = date.today().isoformat()
    upcoming = sorted(
        date_and_time(event["DTSTART"])[0]
        for event in parse_events(load_calendar(calendar_file))
        if TITLE.search(event.get("SUMMARY", ""))
        and event.get("STATUS") != "CANCELLED"
        and date_and_time(event["DTSTART"])[0] >= today
    )
    if upcoming:
        print(f"Next Sweet Home event: {upcoming[0]}")
        return 0

    print("No upcoming Sweet Home event on Meetup")
    link = last_event(past_file)
    print(f"Last Sweet Home event: {link}")
    if "GITHUB_OUTPUT" in os.environ:
        with open(os.environ["GITHUB_OUTPUT"], "a", encoding="utf-8") as output:
            output.write(f"last_event={link}\n")
    return 3


if __name__ == "__main__":
    sys.exit(main())
