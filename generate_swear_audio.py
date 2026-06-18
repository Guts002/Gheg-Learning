#!/usr/bin/env python3
"""Generate audio for swear words (IDs 823-907)"""
import os, re, sys, time

# Ensure user site-packages is available (gTTS installed there)
sys.path.insert(0, '/home/gus/.local/lib/python3.12/site-packages')

from gtts import gTTS

SCRIPT_DIR = "/home/gus/vs code openclaude test 2/gheg-lerning"
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "audio")
os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(os.path.join(SCRIPT_DIR, "learnWordsData.js"), "r", encoding="utf-8") as f:
    content = f.read()

pattern = r'\{ id:(\d+),\s*gheg:"([^"]+)"'
matches = re.findall(pattern, content)
swear_words = [(int(id_num), text) for id_num, text in matches if 823 <= int(id_num) <= 907]
print(f"Generating {len(swear_words)} swear word audio files...")

success = skipped = errors = 0
for i, (word_id, text) in enumerate(swear_words, 1):
    out_path = os.path.join(OUTPUT_DIR, f"{word_id}.mp3")
    if os.path.exists(out_path) and os.path.getsize(out_path) > 5000:
        skipped += 1
        continue
    try:
        tts = gTTS(text=text, lang='sq', slow=False)
        tts.save(out_path)
        size = os.path.getsize(out_path)
        success += 1
        print(f"[{i}/{len(swear_words)}] #{word_id} ({size/1024:.1f} KB): {text[:50]}")
        time.sleep(0.25)
    except Exception as e:
        errors += 1
        print(f"[{i}/{len(swear_words)}] #{word_id}: {e}")

print(f"\nDone: {success} generated, {skipped} skipped, {errors} errors")
