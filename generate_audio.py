#!/usr/bin/env python3
"""Generate Gheg TTS audio files for all 200 vocabulary words"""
import os, re, time, sys
from gtts import gTTS

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
APP_JS = os.path.join(SCRIPT_DIR, "app.js")
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "audio")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Read app.js and extract id -> gheg text
with open(APP_JS, "r", encoding="utf-8") as f:
    content = f.read()

pattern = r"\{ id:(\d+),\s*gheg:\"([^\"]+)\""
matches = re.findall(pattern, content)
print(f"Found {len(matches)} vocabulary entries in app.js")

# Build clean word list (id, text)
words = []
seen = set()
for id_num, text in matches:
    wid = int(id_num)
    words.append((wid, text))

total = len(words)
print(f"Generating {total} audio files in {OUTPUT_DIR}")

success = 0
skipped = 0
errors = 0

for i, (word_id, text) in enumerate(words, 1):
    out_path = os.path.join(OUTPUT_DIR, f"{word_id}.mp3")
    
    # Skip if already exists with reasonable size
    if os.path.exists(out_path) and os.path.getsize(out_path) > 5000:
        skipped += 1
        continue
    
    try:
        tts = gTTS(text=text, lang='sq', slow=False)
        tts.save(out_path)
        size = os.path.getsize(out_path)
        success += 1
        print(f"  [{i}/{total}] ✅ #{word_id} ({size/1024:.1f} KB): {text[:50]}")
        time.sleep(0.25)  # rate limit buffer
    except Exception as e:
        errors += 1
        print(f"  [{i}/{total}] ❌ #{word_id}: {e}")

print(f"\n=== Done ===")
print(f"  Generated: {success}")
print(f"  Skipped (exists): {skipped}")
print(f"  Errors: {errors}")
print(f"  Total: {total}")
