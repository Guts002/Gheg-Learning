#!/usr/bin/env python3
"""Check remaining -ë feminina and other patterns in Kosovo-Wörter"""
import re

with open('Kosovo-Wörter', 'r') as f:
    lines = f.readlines()

print("=== Remaining [GHEG] -ë Femininformen in Teil 2 ===")
for i, line in enumerate(lines, 1):
    if 1100 <= i <= 2690:
        parts = line.split('|')
        if len(parts) >= 4:
            gheg_word = parts[1].strip()
            translation = parts[2].strip()
            notes = parts[3].strip() if len(parts) > 3 else ''
            if gheg_word.endswith('ë') and '[GHEG]' in notes and 'Tosk:' in notes:
                print(f"  Line {i}: {gheg_word} → {translation} | {notes}")

print()
print("=== Duplikat-mobilje ===")
for i, line in enumerate(lines, 1):
    if 'mobilje' in line.lower():
        print(f"  Line {i}: {line.rstrip()}")

print()
print("=== Zeile 1057 (rahatllëk Referenz) ===")
for i in range(1054, 1062):
    print(f"  {i}: {lines[i-1].rstrip()}")

print()
print("=== Zeile 1184 (Wasserhahn ref) ===")
for i in range(1181, 1189):
    print(f"  {i}: {lines[i-1].rstrip()}")

print()
print("=== Zeile 4413+ (rânë wordlist) ===")
for i in range(4410, 4420):
    if i <= len(lines):
        print(f"  {i}: {lines[i-1].rstrip()}")
