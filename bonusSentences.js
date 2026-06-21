/* ═══════════════════════════════════════════════════════════════
   BONUS SENTENCE BUILDER DATA — Gegische Sätze zum Zusammenbauen
   Format: BONUS_SENTENCES[levelNum] = { sentences: [...] }
   Jeder Satz: { de, gheg, pool }
   ═══════════════════════════════════════════════════════════════ */

const BONUS_SENTENCES = {
  1: {
    title: "Begrüßung 1",
    sentences: [
      { de: "Hallo, wie geht's?", gheg: "Mirëdita, qysh je?", pool: ["Mirëdita,", "qysh", "je?"] },
      { de: "Tschüss! Was gibt's?", gheg: "Tung! Çka ka?", pool: ["Tung!", "Çka", "ka?"] },
      { de: "Hallo! Wie geht es Ihnen?", gheg: "Mirëdita! Qysh jeni?", pool: ["Mirëdita!", "Qysh", "jeni?"] },
    ],
  },
  2: {
    title: "Begrüßung 2",
    sentences: [
      { de: "Willkommen! Vielen Dank!", gheg: "Mirë se vjen! Faleminderit shumë!", pool: ["Mirë se vjen!", "Faleminderit", "shumë!"] },
      { de: "Danke dir! Kein Problem!", gheg: "T'falem! S'ka problem!", pool: ["T'falem!", "S'ka", "problem!"] },
      { de: "Bitte schön! Willkommen!", gheg: "Lutem! Mirë se vjen!", pool: ["Lutem!", "Mirë se", "vjen!"] },
    ],
  },
  3: {
    title: "Höflichkeit",
    sentences: [
      { de: "Bitte schön, keine Ursache.", gheg: "Të lutem, s'ka gja.", pool: ["Të lutem,", "s'ka", "gja."] },
      { de: "Entschuldigung, wo ist das?", gheg: "Më falni, ku është kjo?", pool: ["Më falni,", "ku", "është kjo?"] },
      { de: "Schön dich zu sehen, freut mich!", gheg: "Mirë se më gjete, gëzohem!", pool: ["Mirë se më gjete,", "gëzohem!"] },
    ],
  },
  4: {
    title: "Familie 1",
    sentences: [
      { de: "Mama und Papa sind zu Hause.", gheg: "Nana dhe babë janë në shtëpi.", pool: ["Nana", "dhe", "babë", "janë në", "shtëpi."] },
      { de: "Meine Mutter und mein Vater.", gheg: "Mëma ime dhe ati im.", pool: ["Mëma", "ime", "dhe", "ati", "im."] },
      { de: "Das Mädchen und der Junge spielen.", gheg: "Çika dhe djali luajnë.", pool: ["Çika", "dhe", "djali", "luajnë."] },
    ],
  },
  5: {
    title: "Familie 2",
    sentences: [
      { de: "Mein Bruder und meine Schwester.", gheg: "Vllai dhe motra ime.", pool: ["Vllai", "dhe", "motra", "ime."] },
      { de: "Die Großmutter und der Großvater.", gheg: "Gjyshja dhe gjyshi.", pool: ["Gjyshja", "dhe", "gjyshi."] },
      { de: "Der Onkel und die Tante kommen.", gheg: "Xhaja dhe halla po vijnë.", pool: ["Xhaja", "dhe", "halla", "po vijnë."] },
    ],
  },
  6: {
    title: "Familie 3",
    sentences: [
      { de: "Die Schwiegermutter ist nett.", gheg: "Vjehrra është e mirë.", pool: ["Vjehrra", "është", "e mirë."] },
      { de: "Mein Schwager arbeitet viel.", gheg: "Kunati im punon shumë.", pool: ["Kunati", "im", "punon", "shumë."] },
      { de: "Der Neffe spielt mit der Nichte.", gheg: "Nipi luan me mbesën.", pool: ["Nipi", "luan", "me", "mbesën."] },
    ],
  },
  7: {
    title: "Fragen 1",
    sentences: [
      { de: "Wer bist du? Wie heißt du?", gheg: "Kush je? Si quhesh?", pool: ["Kush", "je?", "Si", "quhesh?"] },
      { de: "Was machst du heute?", gheg: "Çka po bën sot?", pool: ["Çka", "po", "bën", "sot?"] },
      { de: "Woher kommst du, mein Freund?", gheg: "Nga vjen shoku im?", pool: ["Nga", "vjen", "shoku", "im?"] },
    ],
  },
  8: {
    title: "Fragen/Fragewörter",
    sentences: [
      { de: "Wann kommst du zu mir?", gheg: "Kur po vjen te unë?", pool: ["Kur", "po", "vjen", "te unë?"] },
      { de: "Warum fragst du das?", gheg: "Pse po pyet këtë?", pool: ["Pse", "po", "pyet", "këtë?"] },
      { de: "Wie viel kostet das hier?", gheg: "Sa kushton kjo?", pool: ["Sa", "kushton", "kjo?"] },
    ],
  },
  9: {
    title: "Zahlen 1",
    sentences: [
      { de: "Ich möchte eine Portion, bitte.", gheg: "Dua një porcion, të lutem.", pool: ["Dua", "një", "porcion,", "të lutem."] },
      { de: "Zwei Bier, bitte schön.", gheg: "Dy birra, të lutem.", pool: ["Dy", "birra,", "të", "lutem."] },
      { de: "Drei Euro kostet der Kaffee.", gheg: "Tre euro kushton kafeja.", pool: ["Tre", "euro", "kushton", "kafeja."] },
    ],
  },
  10: {
    title: "Zahlen 2",
    sentences: [
      { de: "Das macht vier Euro fünfzig.", gheg: "Bën katër euro e pesëdhjetë.", pool: ["Bën", "katër", "euro", "e pesëdhjetë."] },
      { de: "Sechs Äpfel, bitte.", gheg: "Gjashtë mollë, të lutem.", pool: ["Gjashtë", "mollë,", "të", "lutem."] },
      { de: "Sieben Tage hat die Woche.", gheg: "Shtatë ditë ka java.", pool: ["Shtatë", "ditë", "ka", "java."] },
    ],
  },
  // ── LEVELS 11–25 ──
  11: {
    title: "Tage",
    sentences: [
          {
              "de": "Heute ist Montag, morgen ist Dienstag.",
              "gheg": "Sot është e hënë, nesër është e martë.",
              "pool": [
                  "Sot",
                  "është",
                  "e hënë,",
                  "nesër",
                  "është e martë."
              ]
          },
          {
              "de": "Am Sonntag habe ich frei.",
              "gheg": "Të dielën kam pushim.",
              "pool": [
                  "Të",
                  "dielën",
                  "kam",
                  "pushim."
              ]
          },
          {
              "de": "Mittwoch und Donnerstag arbeite ich.",
              "gheg": "E mërkurë dhe e enjte punoj.",
              "pool": [
                  "E mërkurë",
                  "dhe",
                  "e enjte",
                  "punoj."
              ]
          }
      ],
  },
  12: {
    title: "Zeit",
    sentences: [
          {
              "de": "Guten Morgen! Wie spät ist es?",
              "gheg": "Mirëmëngjes! Sa është ora?",
              "pool": [
                  "Mirëmëngjes!",
                  "Sa",
                  "është",
                  "ora?"
              ]
          },
          {
              "de": "Heute Abend gehe ich aus.",
              "gheg": "Sonte dal jashtë.",
              "pool": [
                  "Sonte",
                  "dal",
                  "jashtë."
              ]
          },
          {
              "de": "Gestern war ich zu Hause.",
              "gheg": "Dje isha në shtëpi.",
              "pool": [
                  "Dje",
                  "isha",
                  "në",
                  "shtëpi."
              ]
          }
      ],
  },
  13: {
    title: "Essen 1",
    sentences: [
          {
              "de": "Das Brot ist frisch und gut.",
              "gheg": "Buka është e freskët dhe e mirë.",
              "pool": [
                  "Buka",
                  "është",
                  "e freskët",
                  "dhe",
                  "e mirë."
              ]
          },
          {
              "de": "Ich möchte Wasser, bitte.",
              "gheg": "Dëshiroj ujë, të lutem.",
              "pool": [
                  "Dëshiroj",
                  "ujë,",
                  "të",
                  "lutem."
              ]
          },
          {
              "de": "Der Kaffee und der Tee sind heiß.",
              "gheg": "Kafeja dhe çaji janë të nxehtë.",
              "pool": [
                  "Kafeja",
                  "dhe",
                  "çaji",
                  "janë të",
                  "nxehtë."
              ]
          }
      ],
  },
  14: {
    title: "Essen 2",
    sentences: [
          {
              "de": "Das Fleisch mit Reis schmeckt gut.",
              "gheg": "Mishi me oriz ka shije të mirë.",
              "pool": [
                  "Mishi",
                  "me",
                  "oriz",
                  "ka",
                  "shije të mirë."
              ]
          },
          {
              "de": "Die Suppe ist heiß, Vorsicht!",
              "gheg": "Supja është e nxehtë, kujdes!",
              "pool": [
                  "Supja",
                  "është",
                  "e nxehtë,",
                  "kujdes!"
              ]
          },
          {
              "de": "Der Salat ist frisch.",
              "gheg": "Sallata është e freskët.",
              "pool": [
                  "Sallata",
                  "është",
                  "e freskët."
              ]
          }
      ],
  },
  15: {
    title: "Getränke",
    sentences: [
          {
              "de": "Das Bier ist kalt, prost!",
              "gheg": "Birra është e ftohtë, gëzuar!",
              "pool": [
                  "Birra",
                  "është",
                  "e ftohtë,",
                  "gëzuar!"
              ]
          },
          {
              "de": "Ein Glas Weißwein, bitte.",
              "gheg": "Një gotë verë të bardhë, të lutem.",
              "pool": [
                  "Një",
                  "gotë",
                  "verë të bardhë,",
                  "të lutem."
              ]
          },
          {
              "de": "Der Saft ist für das Kind.",
              "gheg": "Lëngu është për fëmijën.",
              "pool": [
                  "Lëngu",
                  "është",
                  "për",
                  "fëmijën."
              ]
          }
      ],
  },
  16: {
    title: "Farben",
    sentences: [
          {
              "de": "Das rote Auto ist schön.",
              "gheg": "Makina e kuqe është e bukur.",
              "pool": [
                  "Makina",
                  "e kuqe",
                  "është",
                  "e bukur."
              ]
          },
          {
              "de": "Ich mag die blaue Farbe.",
              "gheg": "Më pëlqen ngjyra blu.",
              "pool": [
                  "Më pëlqen",
                  "ngjyra",
                  "blu."
              ]
          },
          {
              "de": "Die schwarze und die weiße Katze.",
              "gheg": "Maçja e zezë dhe e bardhë.",
              "pool": [
                  "Maçja",
                  "e zezë",
                  "dhe",
                  "e bardhë."
              ]
          }
      ],
  },
  17: {
    title: "Adjektive",
    sentences: [
          {
              "de": "Ein großer Mann und eine kleine Frau.",
              "gheg": "Një burrë i madh dhe një grua e vogël.",
              "pool": [
                  "Një",
                  "burrë i madh",
                  "dhe",
                  "një grua",
                  "e vogël."
              ]
          },
          {
              "de": "Das Haus ist neu und schön.",
              "gheg": "Shtëpia është e re dhe e bukur.",
              "pool": [
                  "Shtëpia",
                  "është",
                  "e re",
                  "dhe",
                  "e bukur."
              ]
          },
          {
              "de": "Der alte Weg ist kurz.",
              "gheg": "Rruga e vjetër është e shkurtër.",
              "pool": [
                  "Rruga",
                  "e vjetër",
                  "është",
                  "e shkurtër."
              ]
          }
      ],
  },
  18: {
    title: "Gefühle",
    sentences: [
          {
              "de": "Ich bin sehr glücklich heute!",
              "gheg": "Jam shumë i gëzuar sot!",
              "pool": [
                  "Jam",
                  "shumë",
                  "i gëzuar",
                  "sot!"
              ]
          },
          {
              "de": "Bist du müde, mein Freund?",
              "gheg": "A je i lodhur, shoku im?",
              "pool": [
                  "A je",
                  "i lodhur,",
                  "shoku",
                  "im?"
              ]
          },
          {
              "de": "Keine Angst, alles ist gut.",
              "gheg": "Mos ki frikë, çdo gjë është mirë.",
              "pool": [
                  "Mos",
                  "ki frikë,",
                  "çdo gjë",
                  "është mirë."
              ]
          }
      ],
  },
  19: {
    title: "Wetter",
    sentences: [
          {
              "de": "Heute scheint die Sonne schön.",
              "gheg": "Sot po shkëlqen dielli bukur.",
              "pool": [
                  "Sot",
                  "po shkëlqen",
                  "dielli",
                  "bukur."
              ]
          },
          {
              "de": "Es regnet, nimm den Schirm!",
              "gheg": "Po bie shi, merre ombrellën!",
              "pool": [
                  "Po bie",
                  "shi,",
                  "merre",
                  "ombrellën!"
              ]
          },
          {
              "de": "Der Himmel ist klar und blau.",
              "gheg": "Qielli është i kthjellët dhe blu.",
              "pool": [
                  "Qielli",
                  "është",
                  "i kthjellët",
                  "dhe",
                  "blu."
              ]
          }
      ],
  },
  20: {
    title: "Natur",
    sentences: [
          {
              "de": "Der Berg ist hoch und schön.",
              "gheg": "Mali është i lartë dhe i bukur.",
              "pool": [
                  "Mali",
                  "është",
                  "i lartë",
                  "dhe",
                  "i bukur."
              ]
          },
          {
              "de": "Im Wald gibt es viele Bäume.",
              "gheg": "Në pyll ka shumë pemë.",
              "pool": [
                  "Në",
                  "pyll",
                  "ka",
                  "shumë",
                  "pemë."
              ]
          },
          {
              "de": "Das Wasser im Fluss ist kalt.",
              "gheg": "Uji në lumë është i ftohtë.",
              "pool": [
                  "Uji",
                  "në",
                  "lumë",
                  "është",
                  "i ftohtë."
              ]
          }
      ],
  },
  21: {
    title: "Körper 1",
    sentences: [
          {
              "de": "Mein Kopf tut weh.",
              "gheg": "Koka ime po më dhemb.",
              "pool": [
                  "Koka",
                  "ime",
                  "po",
                  "më dhemb."
              ]
          },
          {
              "de": "Die Augen sind blau und schön.",
              "gheg": "Sytë janë blu dhe të bukur.",
              "pool": [
                  "Sytë",
                  "janë",
                  "blu",
                  "dhe",
                  "të bukur."
              ]
          },
          {
              "de": "Die Nase riecht die Blume.",
              "gheg": "Hunda e njen lulen.",
              "pool": [
                  "Hunda",
                  "e njen",
                  "lulen."
              ]
          }
      ],
  },
  22: {
    title: "Körper 2",
    sentences: [
          {
              "de": "Die Hände sind sauber.",
              "gheg": "Duart janë të pastra.",
              "pool": [
                  "Duart",
                  "janë",
                  "të pastra."
              ]
          },
          {
              "de": "Mein Fuß tut weh.",
              "gheg": "Këmba ime më dhemb.",
              "pool": [
                  "Këmba",
                  "ime",
                  "më",
                  "dhemb."
              ]
          },
          {
              "de": "Das Herz schlägt schnell.",
              "gheg": "Zemra rreh shpejt.",
              "pool": [
                  "Zemra",
                  "rreh",
                  "shpejt."
              ]
          }
      ],
  },
  23: {
    title: "Kleidung",
    sentences: [
          {
              "de": "Das Hemd ist sauber und neu.",
              "gheg": "Këmisha është e pastër dhe e re.",
              "pool": [
                  "Këmisha",
                  "është",
                  "e pastër",
                  "dhe",
                  "e re."
              ]
          },
          {
              "de": "Die Schuhe sind schwarz.",
              "gheg": "Këpucët janë të zeza.",
              "pool": [
                  "Këpucët",
                  "janë",
                  "të zeza."
              ]
          },
          {
              "de": "Der Rock ist sehr schön.",
              "gheg": "Funda është shumë e bukur.",
              "pool": [
                  "Funda",
                  "është",
                  "shumë",
                  "e bukur."
              ]
          }
      ],
  },
  24: {
    title: "Haus",
    sentences: [
          {
              "de": "Das Haus hat eine große Tür.",
              "gheg": "Shtëpia ka një derë të madhe.",
              "pool": [
                  "Shtëpia",
                  "ka",
                  "një",
                  "derë të madhe."
              ]
          },
          {
              "de": "Das Fenster ist offen.",
              "gheg": "Dritarja është e hapur.",
              "pool": [
                  "Dritarja",
                  "është",
                  "e hapur."
              ]
          },
          {
              "de": "Die Küche ist sauber und ordentlich.",
              "gheg": "Kuzhina është e pastër dhe e rregullt.",
              "pool": [
                  "Kuzhina",
                  "është",
                  "e pastër",
                  "dhe",
                  "e rregullt."
              ]
          }
      ],
  },
  25: {
    title: "Möbel",
    sentences: [
          {
              "de": "Der Tisch ist aus Holz.",
              "gheg": "Tavolina është prej druri.",
              "pool": [
                  "Tavolina",
                  "është",
                  "prej",
                  "druri."
              ]
          },
          {
              "de": "Der Stuhl ist kaputt.",
              "gheg": "Karriga është e thyer.",
              "pool": [
                  "Karriga",
                  "është",
                  "e thyer."
              ]
          },
          {
              "de": "Das Bett ist sehr bequem.",
              "gheg": "Shtrati është shumë i rehatshëm.",
              "pool": [
                  "Shtrati",
                  "është",
                  "shumë",
                  "i rehatshëm."
              ]
          }
      ],
  },
};
