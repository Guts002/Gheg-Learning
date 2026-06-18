#!/usr/bin/env python3
"""Generate TTS audio files for ALL Kosovo-Wörter entries (~3,400)
Parses the Kosovo-Wörter file (3 different formats) and generates MP3s via gTTS.
"""
import os, re, time, sys
from gtts import gTTS

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
VOCAB_FILE = os.path.join(SCRIPT_DIR, "Kosovo-Wörter")
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "audio-kosovo")
MAPPING_FILE = os.path.join(SCRIPT_DIR, "audio-kosovo-mapping.json")
os.makedirs(OUTPUT_DIR, exist_ok=True)

def parse_part1_table(lines):
    """Parse Part 1: Markdown table format
    || # | Gheg (Kosovo) | Deutsch | Anmerkungen |
    || 1 | **familjë** / **familje** | Familie | [GHEG] ...
    """
    words = []
    for line in lines:
        line = line.strip()
        if not line.startswith('|') or line.startswith('|---') or not re.search(r'\*\*', line):
            continue
        # Split by |
        parts = [p.strip() for p in line.split('|')]
        # Parts after strip: ['', '1', '**familjë** / **familje**', 'Familie', ...]
        # The Gheg word is in column indexed at [2] (3rd column after stripping)
        if len(parts) >= 3:
            gheg_col = parts[2]
            # Extract first bold text: **...**
            bold_matches = re.findall(r'\*\*(.+?)\*\*', gheg_col)
            if bold_matches:
                # Use the first bold text as the primary word
                word = bold_matches[0].strip()
                # Clean up: remove trailing punctuation that isn't part of the word
                word = word.strip(' ,;.')
                if word and len(word) > 1:
                    words.append(word)
    return words

def parse_part2_table(lines):
    """Parse Part 2: Pipe-delimited format
    word | translation | category | notes
    Only process lines that have actual pipe-separated data (>= 2 parts).
    """
    words = []
    for line in lines:
        line = line.strip()
        if not line or line.startswith('#') or line.startswith('=') or line.startswith('-'):
            continue
        parts = [p.strip() for p in line.split('|')]
        # Require at least 2 pipe-separated parts to be a real data row
        if len(parts) < 2:
            continue
        word = parts[0].strip()
        # Skip headers, section markers, explanatory text
        if not word or word in ['Gheg (Kosovo)', 'Word'] or word.startswith('#') or word.startswith('--') or word.startswith('**'):
            continue
        # Skip long lines that are section titles
        if len(word) > 80 or word.startswith('SECTION') or 'SECTION' in word:
            continue
        # Clean
        word = word.strip(' ,;.')
        if len(word) > 1:
            words.append(word)
    return words

def parse_part3_list(lines):
    """Parse Part 3: Numbered list format
       1  Liri                        [G/S]  (f) Freiheit
       7  Dashuni / Dashunia         [GHEG] (f) Liebe
    Also handles: some entries like 'un / unë — ich (STD: unë)'
    """
    words = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        # Skip headers, separators, legends
        if (line.startswith('═') or line.startswith('─') or 
            line.startswith('>>>') or line.startswith('LEGENDE') or
            line.startswith('Legende') or line.startswith('  ') or
            line in ['', '════════════════════════════════']):
            continue
        
        # Match numbered entries: optional number, then the word
        # Pattern: optionally start with a number, then word(s), then [G/S] or [GHEG] or (STD: or —
        # Part 3 format: "   1  Liri                        [G/S]  (f) Freiheit"
        m = re.match(r'^\s*(?:\d+)\s+(.+?)\s+(\[G/S\]|\[GHEG\]|\(STD:|\—)', line)
        if m:
            word = m.group(1).strip()
            # Sometimes the word has a type like "(f)" before it — those are part of the word
            # Clean but keep slashes for alternatives
            word = word.strip(' ,;.')
            if word and len(word) > 1:
                words.append(word)
            continue
        
        # For lines without [G/S] tag but still have numbers (like appendix entries)
        # "  im / em  — mein (STD: im)"
        m2 = re.match(r'^\s*(?:\d+)\s+(.+?)\s+\—', line)
        if m2:
            word = m2.group(1).strip()
            word = word.strip(' ,;.')
            if word and len(word) > 1:
                words.append(word)
            continue
    
    return words

def parse_all_words():
    """Parse the entire Kosovo-Wörter file and extract all Gheg words."""
    with open(VOCAB_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find section boundaries
    part1_start = None
    part2_start = None
    part3_start = None
    
    for i, line in enumerate(lines):
        if 'TEIL 1:' in line.upper() and ('ALLTAG' in line.upper() or 'FAMILIE' in line.upper()):
            part1_start = i
        elif 'TEIL 2:' in line.upper() and ('ARBEIT' in line.upper() or 'BILDUNG' in line.upper()):
            part2_start = i
        elif 'TEIL 3:' in line.upper() and ('ABSTRAKTE' in line.upper() or 'ZEIT' in line.upper()):
            part3_start = i
    
    print(f"  Part 1 starts at line {part1_start}")
    print(f"  Part 2 starts at line {part2_start}")
    print(f"  Part 3 starts at line {part3_start}")
    
    all_words = []
    seen = set()
    
    # Parse Part 1 (markdown table)
    if part1_start and part2_start:
        p1_lines = lines[part1_start:part2_start]
        p1_words = parse_part1_table(p1_lines)
        for w in p1_words:
            key = w.lower().strip()
            if key not in seen:
                seen.add(key)
                all_words.append(w)
        print(f"  Part 1: {len(p1_words)} words extracted")
    
    # Parse Part 2 (pipe-delimited)
    if part2_start and part3_start:
        p2_lines = lines[part2_start:part3_start]
        p2_words = parse_part2_table(p2_lines)
        for w in p2_words:
            key = w.lower().strip()
            if key not in seen:
                seen.add(key)
                all_words.append(w)
        print(f"  Part 2: {len(p2_words)} words extracted")
    
    # Parse Part 3 (numbered list)
    if part3_start:
        p3_lines = lines[part3_start:]
        p3_words = parse_part3_list(p3_lines)
        for w in p3_words:
            key = w.lower().strip()
            if key not in seen:
                seen.add(key)
                all_words.append(w)
        print(f"  Part 3: {len(p3_words)} words extracted")
    
    print(f"\n  Total unique words extracted: {len(all_words)}")
    return all_words

# Dry-run mode: just parse and show what we'd generate
# Run with --run to actually generate audio
if __name__ == '__main__':
    import sys
    do_run = '--run' in sys.argv
    
    print("=" * 60)
    print("  Kosovo-Wörter Audio Generator")
    print("=" * 60)
    
    words = parse_all_words()
    
    print("\n" + "=" * 60)
    print(f"  Total: {len(words)} words to generate audio for")
    print("=" * 60)
    
    if do_run:
        print("\n  GENERATING AUDIO FILES...")
        print(f"  Output: {OUTPUT_DIR}")
        print()
        
        success = 0
        skipped = 0
        errors = 0
        total = len(words)
        
        for i, word in enumerate(words, 1):
            # Create a filename-safe version but keep the ID for referencing
            out_path = os.path.join(OUTPUT_DIR, f"kw_{i:04d}.mp3")
            
            # Skip if already exists with reasonable size
            if os.path.exists(out_path) and os.path.getsize(out_path) > 5000:
                skipped += 1
                print(f"  [{i}/{total}] ⏭️  #{i:04d} (exists): {word[:50]}")
                continue
            
            try:
                # For compound words with "/", pick the first one for cleaner audio
                text = word.split('/')[0].strip()
                tts = gTTS(text=text, lang='sq', slow=False)
                tts.save(out_path)
                size = os.path.getsize(out_path)
                success += 1
                if success % 50 == 0 or success <= 5:
                    print(f"  [{i}/{total}] ✅ #{i:04d} ({size/1024:.1f} KB): {word[:50]}")
                time.sleep(0.2)  # rate limit buffer
            except Exception as e:
                errors += 1
                print(f"  [{i}/{total}] ❌ #{i:04d}: {word[:40]} — {e}")
        
        print(f"\n=== Done ===")
        print(f"  Generated: {success}")
        print(f"  Skipped (exists): {skipped}")
        print(f"  Errors: {errors}")
        print(f"  Total: {total}")
        
        # Save mapping
        import json
        mapping = []
        for i, word in enumerate(words):
            mapping.append({
                "id": i + 1,
                "file": f"kw_{i+1:04d}.mp3",
                "gheg": word
            })
        
        with open(MAPPING_FILE, 'w', encoding='utf-8') as f:
            json.dump(mapping, f, ensure_ascii=False, indent=2)
        print(f"\n  Mapping saved to: {MAPPING_FILE}")
    else:
        # Show sample
        print("\n  Sample words (first 20):")
        for i, w in enumerate(words[:20]):
            print(f"    {i+1:4d}. {w[:60]}")
        if len(words) > 20:
            print(f"  ... and {len(words)-20} more")
        
        # Calculate timing
        est_time = len(words) * 0.30
        print(f"\n  Estimated time: {est_time/60:.1f} minutes ({est_time:.0f} seconds)")
        print(f"  Output dir: {OUTPUT_DIR}")
        if os.path.isdir(OUTPUT_DIR):
            existing = len([f for f in os.listdir(OUTPUT_DIR) if f.endswith('.mp3')])
        else:
            existing = 0
        print(f"  Existing files: {existing}")
        
        print("\n  Run with --run to actually generate audio")
