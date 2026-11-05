# 22olwe

A personal school-work website (SSIS, class 22olwe) built with Flask. It collects coursework in one place: HTML/CSS exercises, a tourist page, a Yatzy game, a train seat booking demo ("SJ Platsbokning") and a few other small pages. Text is mostly in Swedish.

Student project, not maintained.

## Requirements
- Python 3
- `flask` and `flask-cors`

## Run
```bash
pip install flask flask-cors
python3 app.py
```
The server starts in debug mode on port 8000 (see `constants.py`); open http://localhost:8000.

## Layout
- `app.py`, `routes.py`, `constants.py`: Flask app, page routes and settings.
- `static/cogs/`: seat booking logic and front-end scripts. `static/seats.json` and `static/cities.json` hold the booking demo data; `static/reset_seats.py` regenerates `seats.json`.
- `templates/`: the pages, grouped by course under `Skolarbete/`.
- `templates/Skolarbete/Webbutveckling/Wordpress/`: a WordPress core copy from a course assignment (third-party code, GPL). `wp-config.php` is intentionally not tracked; copy `wp-config-sample.php` if you want to use it.

## Notes
- Debug mode is on and the server binds to the machine's LAN address, so run it only on a trusted network.
- Uploaded ticket files and downloadables are git-ignored.
