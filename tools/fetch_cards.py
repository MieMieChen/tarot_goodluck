#!/usr/bin/env python3
"""Download the 78 Rider-Waite-Smith card images (public domain) from Wikimedia Commons.

Usage: python3 tools/fetch_cards.py [--width 500]
Writes img/cards/<id>.jpg where id is m00..m21 (major) or w/c/s/p + 01..14 (minor).
"""
import json, sys, time, urllib.request, urllib.parse, pathlib

WIDTH = int(sys.argv[sys.argv.index("--width") + 1]) if "--width" in sys.argv else 500
UA = "MieMieChen-tarot/1.0 (https://github.com/MieMieChen/tarot_goodluck)"
OUT = pathlib.Path(__file__).resolve().parent.parent / "img" / "cards"
OUT.mkdir(parents=True, exist_ok=True)

MAJOR = ["Fool", "Magician", "High_Priestess", "Empress", "Emperor", "Hierophant", "Lovers",
         "Chariot", "Strength", "Hermit", "Wheel_of_Fortune", "Justice", "Hanged_Man", "Death",
         "Temperance", "Devil", "Tower", "Star", "Moon", "Sun", "Judgement", "World"]
SUITS = {"w": "Wands", "c": "Cups", "s": "Swords", "p": "Pents"}

files = {f"m{i:02d}": f"RWS_Tarot_{i:02d}_{n}.jpg" for i, n in enumerate(MAJOR)}
for k, s in SUITS.items():
    for r in range(1, 15):
        files[f"{k}{r:02d}"] = f"{s}{r:02d}.jpg"

def api(title):
    q = urllib.parse.urlencode({"action": "query", "titles": f"File:{title}", "prop": "imageinfo",
                                "iiprop": "url|extmetadata", "iiurlwidth": WIDTH, "format": "json"})
    req = urllib.request.Request(f"https://commons.wikimedia.org/w/api.php?{q}", headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.load(r)
    page = next(iter(d["query"]["pages"].values()))
    ii = page["imageinfo"][0]
    lic = ii.get("extmetadata", {}).get("LicenseShortName", {}).get("value", "?")
    return ii["thumburl"].split("?")[0], lic

bad = 0
for cid, title in files.items():
    dst = OUT / f"{cid}.jpg"
    if dst.exists() and dst.stat().st_size > 10_000:
        continue
    try:
        url, lic = api(title)
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as r:
            dst.write_bytes(r.read())
        print(f"{cid:4s} <- {title:40s} [{lic}] {dst.stat().st_size//1024}KB")
    except Exception as e:
        bad += 1
        print(f"{cid:4s} FAILED {title}: {e}", file=sys.stderr)
    time.sleep(0.3)
print(f"done, {len(files)-bad}/{len(files)} ok")
sys.exit(1 if bad else 0)
