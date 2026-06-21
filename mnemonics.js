/* ═══════════════════════════════════════════════════════════════
   MNEMONICS — 200 Eselsbrücken für alle TOP200 Wörter
   Jede Eselsbrücke verbindet den Klang des Gegischen mit
   dem Deutschen — absurd, visuell, unvergesslich.
   ═══════════════════════════════════════════════════════════════ */

/** Hauptfunktion: liefert Mnemonic-Hint + Emoji für ein Wort */
function getMnemonic(word) {
  if (!word) return null;
  const db = typeof MNEMONIC_DB !== 'undefined' ? MNEMONIC_DB : (window.MNEMONIC_DB || {});
  const lookup = db[word.id];
  if (lookup) return lookup;
  return generateFallbackMnemonic(word);
}

/** Kuratierte Eselsbrücken für alle 200 TOP200-Wörter */
const MNEMONIC_DB = {
  // ── 1. BEGRÜSSUNGEN (1–18) ──
  1:  '🇦🇱 "Mir ist **die Tür** aufgegangen" → Hallo!',
  2:  '🔚 "Tung!" klingt wie **Tschüss** → kurz & knapp',
  3:  '❓ "**Qysh** je?" → **quiche**? Wie geht\'s?',
  4:  '👔 "Qysh **jeni**?" → **Jenny** formell begrüßen',
  5:  '🤷 "**Çka** ka?" → **Tschaka**, was geht?',
  6:  '🎉 "Mirë se **vjen**!" → **Vienna** heißt dich willkommen',
  7:  '🙏 "**Falem**inderit" → **Falle** ins Dankeschön',
  8:  '🌟 "Faleminderit **shumë**" → **Schuh** voller Dank',
  9:  '💫 "**T\'falem**" → kurz für "ich **fall** dir zu Füßen"',
  10: '🔄 "**Lutem**" → **Lutschen**? Nein, BITTE schön!',
  11: '🙇 "Të **lutem**" → Höfliches Bitte = **lutsche** mir nicht',
  12: '🎩 "Ju **lutem**" → Formell: **Ju** like "you"',
  13: '🙏 "Më **fal**!" → **fall** nicht hin, Entschuldigung!',
  14: '😎 "**S\'ka** problem!" → **Skate**-Problem? Kein Problem!',
  15: '😏 "**S\'ka gja**!" → **Skage**? Nichts los hier!',
  16: '😊 "Mirë se më **gjete**!" → Schön, dass du mich **getroffen** hast',
  17: '🎊 "**Gëzohem**!" → **Gesundheit**? Freut mich!',
  18: '👋 "Mirëdita, **qysh je**?" → Hallo, **quiche**?',

  // ── 2. FAMILIE 1 (19–33) ──
  19: '👩 "**Nana** / **nona**" → **Nonna** (ital. Oma) = Mama',
  20: '👨 "**Babë** / **baba**" → **Baba** (wie Baby) = Papa',
  21: '👨 "**Babi**" → Kurzform: **Babylein** als Anrede',
  22: '👪 "**Prindë** / **prind**" → Eltern = **Parent** auf Englisch',
  23: '👨‍👦 "**Atë**" → **At** the head of family = Vater',
  24: '👩‍👧 "**Mëmë**" → **Mama** auf kosovarisch (weich)',
  25: '👦 "**Djalë**" → Junge = **Dj** like DJ = junger Kerl',
  26: '👧 "**Çikë**" → **Chip**-Mädchen, klein & süß',
  27: '👧 "**Vajzë**" → **Waise**? Nein, Mädchen!',
  28: '👦 "**Vlla**" → **Bruder** = V for brother',
  29: '👨 "**Vëlla**" → Formell: **Welle** der Brüderlichkeit',
  30: '👩 "**Motër**" → **Motor**? Nein, Schwester!',
  31: '👬 "**Vllazën** / **vllazni**" → Brüder = **Blazer**-Brüder',
  32: '👭 "**Motra**" → Schwestern = **Mother**-like (Plural)',
  33: '👴 "**Gjysh**" → Opa = **Gish** wie alter Fisch',

  // ── 3. FAMILIE 2 (34–48) ──
  34: '👵 "**Gjyshe**" → Oma = **Gische** wie alte Geschichte',
  35: '👴 "**Gjyshë**" → Opa (Alt.) = **Gische**-Variante',
  36: '👩 "**Hallë**" → Tante väterlich = **Halle** (Baby)',
  37: '👩 "**Teze**" → Tante mütterlich = **Tee** mit Tante',
  38: '👨 "**Xhajë** / **xhaja**" → Onkel väterlich = **Chaja**',
  39: '👨 "**Dajë** / **daja**" → Onkel mütterlich = **Day**-Onkel',
  40: '👦 "**Nip**" → Neffe = **Nippel** (kleiner Kerl)',
  41: '👧 "**Mbesë**" → Nichte = **Bässe** wie Bass-Stimme',
  42: '👴 "**Stërgjysh**" → Urgroßvater = **Ster**-Opa',
  43: '👵 "**Stërgjyshe**" → Urgroßmutter = **Ster**-Oma',
  44: '👰 "**Martesë**" → **March** in die Ehe = Hochzeit',
  45: '👨‍👩‍👧 "**Familje**" → **Family** auf kosovarisch',
  46: '🧑‍🧑‍🧒 "**Familja**" → Die Familie (bestimmt) = **Family**-a',
  47: '💍 "**Fejesë**" → Verlobung = **Faye** sagt Ja!',
  48: '👨‍👩‍👧 "**Dasëm**" → Hochzeitsfest = **Dassem** feiern',

  // ── 4. FRAGEN (49–58) ──
  49: '❓ "**Kush**?" → **Kuss**? Wer war das?',
  50: '❓ "**Çka**?" → **Tschaka**, was machst du?',
  51: '❓ "**Ku**?" → **Kuh**? Wo ist die Kuh?',
  52: '❓ "**Kur**?" → **Kur**z fragen: WANN?',
  53: '❓ "**Pse**?" → **Pse**udo-Frage: Warum?',
  54: '❓ "**Si**?" → **Sie**hst du? WIE geht\'s?',
  55: '❓ "**Sa**?" → **Sa**ge mir den Preis = WIE VIEL?',
  56: '❓ "**Nga**?" → **Nga** (wie "nah") = Woher?',
  57: '❓ "**Cilin**?" → **Zieh**lin? Welchen?',
  58: '❓ "**Cilën**?" → Welche (weibl.) = **Zieh**lenchen',

  // ── 5. ZAHLEN 1 (59–68) ──
  59: '1️⃣ "**Një**" → **Njet** (russisch nein) + eins',
  60: '2️⃣ "**Dy**" → **Dü** (du) + zwei = Düo',
  61: '3️⃣ "**Tre**" → **Tre**e (Baum) hat 3 Äste',
  62: '4️⃣ "**Katër**" → **Kater** hat 4 Beine',
  63: '5️⃣ "**Pesë**" → **Pesa** (Geld) = 5 Scheine',
  64: '6️⃣ "**Gjashtë**" → **Gjasch**të klingt nach **sechs**',
  65: '7️⃣ "**Shtatë**" → **Schtatte** = 7. Himmel',
  66: '8️⃣ "**Tetë**" → **Tete** (frz. Kopf) = 8 Ecken',
  67: '9️⃣ "**Nëntë**" → **Neunt**e = 9',
  68: '🔟 "**Dhjetë**" → **Djet** = 10 wie **10** im Engl.',

  // ── 6. ZAHLEN 2 + TAGE (69–83) ──
  69: '💶 "**Njëzet**" → **Një** + **zet** = 20',
  70: '💶 "**Tridhjetë**" → **Tri** (3) + **dhjetë** (10) = 30',
  71: '💶 "**Njëqind**" → **Një** + **qind** = 100',
  72: '📅 "**Sot**" → **Soot**? Heute ist Ruß?',
  73: '📅 "**Nesër**" → **Neser** = Morgen kommt der **Nesser**',
  74: '📅 "**Dje**" → **Dje** wie "the day before"',
  75: '📅 "**E hënë**" → **Höhne**? Montag = Hühner-Tag',
  76: '📅 "**E martë**" → **Marte** = Dienstag (Mars-Tag)',
  77: '📅 "**E mërkurë**" → **Merkur** = Mittwoch',
  78: '📅 "**E enjte**" → **Eente** = Donnerstag',
  79: '📅 "**E premte**" → **Premte** klingt wie **Premiere** = Freitag',
  80: '📅 "**E shtunë**" → **Schtunë** = Samstag',
  81: '📅 "**E dielë**" → **Dielë** = Sonntag (Kirche/Tag)',
  82: '⏰ "**Java**" → **Java** (Programmiersprache) = Woche',
  83: '⏰ "**Muaji**" → **Muah**! Ein Monat ist rum',

  // ── 7. ZEIT (84–98) ──
  84: '🌅 "**Mirëmëngjes**" → **Mir** ist **morgens** gut = Guten Morgen',
  85: '🌙 "**Mirëmbrëma**" → **Mir** ist **abends** gut = Guten Abend',
  86: '🌃 "**Natën e mirë**" → Gute **Nacht** = **Natten**',
  87: '🕐 "**Ora**" → **Uhr** = **Ora** klingt wie "hour"',
  88: '⏳ "**Minuta**" → **Minute** = fast gleich',
  89: '⏱️ "**Sekonda**" → **Sekunde** = fast gleich',
  90: '🌄 "**Mëngjes**" → **Morgens** = **Mëngjes**',
  91: '☀️ "**Paraditë**" → **Par** + **ditë** = Vormittag',
  92: '☀️ "**Pasditë**" → **Pass** + **ditë** = Nachmittag',
  93: '🌆 "**Mbrëmje**" → **Mbrëmje** = Abend (wie "evening")',
  94: '🌙 "**Nata**" → **Nacht** = **Nata**',
  95: '⏰ "**Koha**" → **Koh**l? Zeit ist **Koha**',
  96: '🕰️ "**Herët**" → Früh = **Herd**? Früh aufstehen!',
  97: '🌅 "**Vonë**" → Spät = **Wonne**? Wenns spät wird',
  98: '⏲️ "**Gjithmonë**" → **Gisch** + **monë** = Immer',

  // ── 8. ESSEN 1 (99–113) ──
  99: '🍞 "**Buka**" → **Buch**? Nein, **Brot**!',
  100: '💧 "**Uji**" → **Uji** (Wasser) = **U-Boot** fährt im Wasser',
  101: '☕ "**Kafeja**" → **Café** auf kosovarisch',
  102: '🫖 "**Çaji**" → **Chai** = Tee auf kosovarisch',
  103: '🥛 "**Qumështi**" → **Kuh-Milch** = **Qumësht**',
  104: '🥩 "**Mishi**" → **Misch** das Fleisch!',
  105: '🍚 "**Orizi**" → **Oris** = Reis (wie Oryza)',
  106: '🥣 "**Supja**" → **Suppe** = **Supja**',
  107: '🥗 "**Sallata**" → **Salat** = fast gleich',
  108: '🍎 "**Molla**" → **Molle** = **Apfel** auf kosovarisch',
  109: '🍌 "**Banane**" → **Banane** = gleich',
  110: '🍋 "**Limoni**" → **Limone** = **Zitrone**',
  111: '🍊 "**Portokalli**" → **Porto**-Kalle = **Orange**',
  112: '🍇 "**Rrushi**" → **Rusche** = **Traube**',
  113: '🍓 "**Luleshtrydhet**" → **Lule** + **shtrydhe** = **Erdbeere**',

  // ── 9. ESSEN 2 + GETRÄNKE (114–128) ──
  114: '🍺 "**Birra**" → **Bier** = **Birra**',
  115: '🍷 "**Vera**" → **Wein** = **Vera** (wie Vino)',
  116: '🥤 "**Lëngu**" → **Leng** = **Saft** auf kosovarisch',
  117: '🥃 "**Rakia**" → **Rakia** = **Schnaps** (wie Raki)',
  118: '🍽️ "**Ushqimi**" → **Usch-kimi** = **Essen**',
  119: '🍳 "**Gatim**" → **Gattim** = Kochen / **Gatter**?',
  120: '🧂 "**Kripë**" → **Krippe**? Nein, **Salz**!',
  121: '🍬 "**Sheqer**" → **Zucker** = **Sheqer**',
  122: '🧈 "**Gjalpë**" → **Gjalp** = **Butter**',
  123: '🥚 "**Vezë**" → **Vezë** = **Eier** (wie eggs)',
  124: '🧀 "**Djathë**" → **Djatë** = **Käse**',
  125: '🥩 "**Peshku**" → **Peshk** = **Fisch** (pesce ital.)',
  126: '🍗 "**Pula**" → **Pula** = **Hühnchen**',
  127: '🐑 "**Qengji**" → **Qengj** = **Lamm**',
  128: '🥩 "**Mish pule**" → **Misch** + **Pule** = **Hähnchenfleisch**',

  // ── 10. FARBEN (129–143) ──
  129: '🔴 "**Kuqe**" → **Kuchen**? Nein, **rot**!',
  130: '🔵 "**Blu**" → **Blau** = **Blu**',
  131: '🟢 "**Gjelbër**" → **Gelb**? Nein, **Grün**!',
  132: '🟡 "**Verde**" → **Verde** (ital.) = **Grün**',
  133: '⚪ "**Bardhë**" → **Bart**? Nein, **weiß**!',
  134: '⚫ "**Zezë**" → **Zeese** = **schwarz**',
  135: '🟤 "**Kafe**" → **Café**-farben = **braun**',
  136: '🟣 "**Vjollcë**" → **Violett** = **Vjollcë**',
  137: '🟠 "**Portokalli**" → **Orange** wie die Frucht',
  138: '🩶 "**Hirtë**" → **Hirte**? Grau wie Schafwolle',
  139: '🩷 "**Rozë**" → **Rose** = **Rosa**',
  140: '🌟 "**Shkëlqyeshëm**" → **Schkël** = **glänzend**',
  141: '🌑 "**Errët**" → **Erde**? Nein, **dunkel**!',
  142: '☀️ "**Ndriçues**" → **Ndryshues** = **leuchtend**',
  143: '🌈 "**Ngjyra**" → **Farbe** = **Ngjyra**',

  // ── 11. ADJEKTIVE (144–158) ──
  144: '📏 "**Madh**" → **Matsch**? Nein, **groß**!',
  145: '📐 "**Vogël**" → **Vogel**? Nein, **klein**!',
  146: '✨ "**Bukur**" → **Buch**? Nein, **schön**!',
  147: '🆕 "**Ri / e re**" → **Re** (again) = **neu**',
  148: '🆒 "**Freskët**" → **Frisch** = **freskët**',
  149: '🏛️ "**Vjetër**" → **Veteran** = **alt**',
  150: '🗑️ "**Keq**" → **Keks**? Nein, **schlecht**!',
  151: '💪 "**Mirë**" → **Mir** geht\'s **gut**',
  152: '🌡️ "**Nxehtë**" → **Nächst**e? **Heiß**!',
  153: '❄️ "**Ftohtë**" → **Ftohtë** = **kalt**',
  154: '📊 "**Gjatë**" → **Gatte**? **Lang**!',
  155: '📏 "**Shkurtër**" → **Schkurt** = **kurz**',
  156: '⚡ "**Shpejt**" → **Schpejt** = **schnell**',
  157: '🐌 "**Ngadalë**" → **Nga-dalë** = **langsam**',
  158: '💯 "**Plotë**" → **Platte** voll = **voll**',

  // ── 12. GEFÜHLE (159–173) ──
  159: '😊 "**Gëzuar**" → **Gesund**? **Fröhlich**!',
  160: '😢 "**Trishtuar**" → **Trist** (frz.) = **traurig**',
  161: '😡 "**Inatosur**" → **In** + **Toast**? **Wütend**!',
  162: '😰 "**Frikësuar**" → **Frikadelle**? **Angst**!',
  163: '😴 "**Lodhur**" → **Lodder**? **Müde**!',
  164: '😷 "**Sëmurë**" → **Summer**? **Krank**!',
  165: '😋 "**Urënë**" → **Uren**? **Hungrig**!',
  166: '🥤 "**Etje**" → **Ete**? **Durst**!',
  167: '❤️ "**Dashuri**" → **Dash** = **Liebe**',
  168: '💔 "**Urrejtje**" → **Ur**-Reise? **Hass**',
  169: '😌 "**Qetë**" → **Kette** leise = **ruhig**',
  170: '🤗 "**Ngushëllim**" → **Ngushellim** = **Trost**',
  171: '😱 "**Tmerr**" → **Terror** = **Schrecken**',
  172: '😤 "**Zemërim**" → **Zemer** = **Wut**',
  173: '😐 "**Normal**" → **Normal** = gleich',

  // ── 13. WETTER (174–188) ──
  174: '☀️ "**Dielli**" → **Diell** = **Sonne** (wie "dieli")',
  175: '🌧️ "**Shiu**" → **Schuh**? Regen **Schuh**!',
  176: '❄️ "**Bora**" → **Bora** = **Schnee** (wie Bora-Wind)',
  177: '💨 "**Era**" → **Ära**? **Wind**!',
  178: '⛅ "**Reja**" → **Reh**? **Wolke**!',
  179: '🌤️ "**Kthjellët**" → **Ktjell** = **klar**',
  180: '🌡️ "**Temperatura**" → **Temperatur** = gleich',
  181: '🌡️ "**Shkalla**" → **Skala** = **Grad**',
  182: '🧥 "**Ftohtë**" → s.o. **kalt**',
  183: '🕶️ "**Nxehtë**" → s.o. **heiß**',
  184: '☔ "**Shi bie**" → **Schuh + Biene** = **es regnet**',
  185: '⛈️ "**Stuhia**" → **Sturm** = **Stuhia**',
  186: '🌈 "**Ylberi**" → **Ilber** = **Regenbogen**',
  187: '💧 "**Lagështi**" → **Lag** + **schti** = **Feuchtigkeit**',
  188: '🌫️ "**Mjegulla**" → **Mjegu** = **Nebel**',

  // ── 14. NATUR (189–200) ──
  189: '⛰️ "**Mali**" → **Mali** = **Berg**',
  190: '🌊 "**Lumi**" → **Lumm** = **Fluss**',
  191: '🌲 "**Pylli**" → **Püll** = **Wald**',
  192: '🌳 "**Pema**" → **Pema** = **Baum**',
  193: '🌸 "**Lulet**" → **Lule** = **Blumen**',
  194: '🌿 "**Bari**" → **Bari** = **Gras**',
  195: '🌍 "**Toka**" → **Token**? Nein, **Erde**!',
  196: '🪨 "**Guri**" → **Gur** = **Stein**',
  197: '🏞️ "**Fusha**" → **Fusche** = **Feld**',
  198: '🏖️ "**Plazhi**" → **Plage** (frz.) = **Strand**',
  199: '🏝️ "**Ishulli**" → **Insel** = **Ishulli**',
  200: '🌋 "**Vullkani**" → **Vulkan** = fast gleich',
};

/** Fallback: auto-generiert Eselsbrücke aus Wort-Klang */
function generateFallbackMnemonic(word) {
  if (!word || !word.gheg) return null;
  const g = word.gheg.split('/')[0].trim().replace(/[!?.,]/g, '');
  const d = word.de.split('/')[0].trim();
  const lower = g.toLowerCase();

  // Bekannte Muster
  if (lower.endsWith('a') || lower.endsWith('ë'))
    return `🎯 "${g}" → Denk an: **${d}** auf kosovarisch mit -a/-ë`;
  if (lower.includes('imi'))
    return `🔤 "${g}" → Klingt wie **${d}** (Wortendung -imi)`;
  if (lower.length <= 3)
    return `📝 "${g}" → Kurzwort für **${d}**`;

  // Generisch: ersten 2 Silben als Eselsbrücke
  const firstPart = g.slice(0, Math.min(4, g.length));
  return `💡 "${g}" → Merk es dir als: **${firstPart}...** = **${d}**`;
}

// Export to window for cross-script access
if (typeof window !== 'undefined') window.MNEMONIC_DB = MNEMONIC_DB;
