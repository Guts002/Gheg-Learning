#!/usr/bin/env python3
"""Check top 200 Gheg word entries using Wiktionary"""
import json, re

with open('/home/gus/vs code openclaude test 2/gheg-lerning/Kosovo-Wörter', 'r') as f:
    lines = f.readlines()

entries = []
for line in lines:
    m = re.match(r'^\|\s*(\d+)\s*\|\s*\*{2}([^*]+)\*{2}\s*\|\s*([^|]+)\s*\|', line)
    if m:
        entries.append({
            'num': int(m.group(1)),
            'gheg': m.group(2).strip(),
            'de': m.group(3).strip()
        })

# Take first 200 entries by number (1-200)
top200 = [e for e in entries if 1 <= e['num'] <= 200]

print(json.dumps(top200, ensure_ascii=False, indent=2))
