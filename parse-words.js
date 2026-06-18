/**
 * Kosovo-Wörter → Learn-Words JSON Parser
 * Liest die Kosovo-Wörter Datei und generiert learnWordsData.js
 *
 * Usage: node parse-words.js
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'Kosovo-Wörter');
const outputFile = path.join(__dirname, 'learnWordsData.js');

const text = fs.readFileSync(inputFile, 'utf-8');
const lines = text.split('\n');

const SECTION_MAP = {
  'FAMILY MEMBERS': 'familje',
  'HOME & ROOMS': 'shtepi',
  'HOUSEHOLD ITEMS': 'mobilje',
  'FOOD & DRINK': 'ushqim',
  'CLOTHING': 'rroba',
  'BODY & HEALTH': 'trupi',
  'EMOTIONS': 'emocionet',
  'DAILY ROUTINE': 'rutina',
};

const sections = [];
let currentSection = null;
let wordId = 0;

for (const line of lines) {
  // Section header: ## 1. FAMILY MEMBERS & RELATIONSHIPS (Familjtarët / Marrëdhëniet)
  const sectionMatch = line.match(/^##\s+\d+\.\s+(.+?)(?:\s*\(|$)/);
  if (sectionMatch) {
    const heading = sectionMatch[1].trim();
    let cat = 'të-gjera';
    for (const [key, val] of Object.entries(SECTION_MAP)) {
      if (heading.includes(key)) { cat = val; break; }
    }
    // Skip grammar notes, phrases, summary
    if (heading.includes('GRAMMAR NOTES') || heading.includes('ADDITIONAL USEFUL') || heading.includes('SUMMARY')) {
      currentSection = null;
      continue;
    }
    currentSection = { cat, words: [] };
    sections.push(currentSection);
    continue;
  }

  // Skip if not in a data section
  if (!currentSection) continue;

  // Table row: | 1 | **wort** | deutsch | anmerkung |
  // Must start with | and have a number
  if (!line.startsWith('|')) continue;
  const parts = line.split('|').map(p => p.trim());
  // parts[0] is empty, parts[1] is number, parts[2] is gheg, parts[3] is german, parts[4] is notes
  if (parts.length < 4 || !parts[1] || !/^\d+$/.test(parts[1])) continue;

  const gheg = parts[2].replace(/\*\*/g, '').trim();
  const german = parts[3].trim();
  const notes = parts[4] ? parts[4].trim() : '';

  if (!gheg || !german || gheg === 'Gheg (Kosovo)') continue;

  wordId++;
  currentSection.words.push({
    id: wordId,
    gheg,
    de: german,
    note: notes,
    cat: currentSection.cat,
  });
}

// Generate the data file
let output = `/* ═══════════════════════════════════════════════════════════════\n`;
output += `   LEARN WORDS — Kosovo-Wörter aus der Vokabelliste\n`;
output += `   Automatisch generiert aus Kosovo-Wörter\n`;
output += `   ═══════════════════════════════════════════════════════════════ */\n\n`;
output += `const LEARN_WORDS = [\n`;

for (const section of sections) {
  output += `  // ── ${section.cat.toUpperCase()} (${section.words.length} Wörter) ──\n`;
  for (const w of section.words) {
    output += `  { id:${w.id}, gheg:${JSON.stringify(w.gheg)}, de:${JSON.stringify(w.de)}, note:${JSON.stringify(w.note)}, cat:${JSON.stringify(w.cat)} },\n`;
  }
}

output += `];\n`;

// Add total count
output += `\n// Gesamt: ${wordId} Wörter\n`;

// Add category labels
output += `\nconst LEARN_CAT_LABELS = {\n`;
output += `  alle: "Alle (${wordId})",\n`;
for (const section of sections) {
  output += `  ${JSON.stringify(section.cat)}: "${section.cat} (${section.words.length})",\n`;
}
output += `};\n`;

fs.writeFileSync(outputFile, output, 'utf-8');
console.log(`✅ ${wordId} Wörter in ${sections.length} Kategorien gespeichert nach ${outputFile}`);
for (const s of sections) {
  console.log(`   - ${s.cat}: ${s.words.length} Wörter`);
}
