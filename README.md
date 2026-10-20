# Go Girls* Heidelberg

**https://sinalaura.github.io/gogirls/**

Website for the Go Girls* Game Night, a cozy monthly Go night for women* in Heidelberg. Beginners welcome!

## Adding dates

We meet every 2nd Tuesday of the month, and the page works out those dates by itself. To link an evening to Meetup, skip a month or change the time, edit [`events.js`](events.js). The instructions are at the top of that file.

Meetup links are added automatically: every morning a GitHub Action looks for new events with "Go Girls" in the title in the Heidelberg Events Meetup group and adds them to `events.js`. You can also start it by hand under **Actions → Update events → Run workflow**.

## Sweet Home reminder

Every morning another GitHub Action checks whether an upcoming "Sweet Home" event is posted in the Heidelberg Events Meetup group. If none is, it opens an issue that tags you (so GitHub sends you one email) with a link to the last Sweet Home event to copy. The issue closes by itself once the next event is on Meetup. The latest event's link is kept in `.github/sweet-home-last-event.txt`.

## Running it locally

It's a plain HTML/CSS/JS page with no build step. Just open `index.html` in a browser.
