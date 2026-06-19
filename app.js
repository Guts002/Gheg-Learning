/* ============================================
   GHEG LEARNING PWA — Main Application
   Duolingo-Style with Level System
   ============================================ */

// ===========================
// TOP 200 WORDS DATA
// ===========================
const TOP200 = [
  // 1. BEGRÜSSUNGEN & HÖFLICHKEIT (1-18)
  { id:1, gheg:"Tung! / Tungjatjeta!", de:"Hallo! / Servus!", std:"Përshëndetje", cat:"begruessung" },
  { id:2, gheg:"Shëndet!", de:"Tschüss! / Mach's gut!", std:"Mirupafshim / Lamtumirë", cat:"begruessung" },
  { id:3, gheg:"Qysh je?", de:"Wie geht's?", std:"Si je?", cat:"begruessung" },
  { id:4, gheg:"Qysh jeni?", de:"Wie geht es Ihnen?", std:"Si jeni?", cat:"begruessung" },
  { id:5, gheg:"Çka ka? / Çkaka?", de:"Was gibt's? / Was los?", std:"Çfarë ka?", cat:"begruessung" },
  { id:6, gheg:"Mirë se vjen!", de:"Willkommen!", std:"Mirë se vjen!", cat:"begruessung" },
  { id:7, gheg:"Faleminderit!", de:"Danke!", std:"Faleminderit!", cat:"begruessung" },
  { id:8, gheg:"Faleminderit shumë!", de:"Vielen Dank!", std:"Faleminderit shumë!", cat:"begruessung" },
  { id:9, gheg:"T'falem!", de:"Danke dir! (kurz)", std:"Të falem", cat:"begruessung" },
  { id:10, gheg:"Lutem", de:"Bitte (Antwort auf Danke)", std:"Lutem", cat:"begruessung" },
  { id:11, gheg:"Të lutem", de:"Bitte (höflich)", std:"Të lutem", cat:"begruessung" },
  { id:12, gheg:"Ju lutem", de:"Bitte (formell)", std:"Ju lutem", cat:"begruessung" },
  { id:13, gheg:"Më fal! / Më falni!", de:"Entschuldigung!", std:"Më fal!", cat:"begruessung" },
  { id:14, gheg:"S'ka problem!", de:"Kein Problem!", std:"S'ka problem!", cat:"begruessung" },
  { id:15, gheg:"S'ka gja!", de:"Kein Problem! / Nichts los!", std:"S'ka gjë", cat:"begruessung" },
  { id:16, gheg:"Mirë se më gjete!", de:"Schön dich zu sehen!", std:"Mirë se më gjete!", cat:"begruessung" },
  { id:17, gheg:"Gëzohem!", de:"Freut mich!", std:"Gëzohem!", cat:"begruessung" },
  { id:18, gheg:"Tung, qysh je?", de:"Hallo, wie geht's?", std:"Përshëndetje, si je?", cat:"begruessung" },

  // 2. FRAGEWÖRTER (19-28)
  { id:19, gheg:"Çka? / Ç'?", de:"Was?", std:"Çfarë?", cat:"fragewoerter" },
  { id:20, gheg:"Qysh?", de:"Wie?", std:"Si?", cat:"fragewoerter" },
  { id:21, gheg:"Kush?", de:"Wer?", std:"Kush?", cat:"fragewoerter" },
  { id:22, gheg:"Ku?", de:"Wo?", std:"Ku?", cat:"fragewoerter" },
  { id:23, gheg:"Prej kah? / Nga kah?", de:"Woher?", std:"Prej ku?", cat:"fragewoerter" },
  { id:24, gheg:"Kah?", de:"Wohin?", std:"Ku?", cat:"fragewoerter" },
  { id:25, gheg:"Kur?", de:"Wann?", std:"Kur?", cat:"fragewoerter" },
  { id:26, gheg:"Pse? / Përse?", de:"Warum?", std:"Pse?", cat:"fragewoerter" },
  { id:27, gheg:"Sa?", de:"Wie viel? / Wie viele?", std:"Sa?", cat:"fragewoerter" },
  { id:28, gheg:"Cili? / Cila?", de:"Welcher? / Welche?", std:"Cili? / Cila?", cat:"fragewoerter" },

  // 3. PRONOMEN & GRUNDPARTIKEL (29-42)
  { id:29, gheg:"Un / Unë", de:"Ich", std:"Unë", cat:"pronomina" },
  { id:30, gheg:"Ti", de:"Du", std:"Ti", cat:"pronomina" },
  { id:31, gheg:"Ai / Aj", de:"Er", std:"Ai", cat:"pronomina" },
  { id:32, gheg:"Ajo / Aj", de:"Sie (weiblich)", std:"Ajo", cat:"pronomina" },
  { id:33, gheg:"Na", de:"Wir", std:"Ne", cat:"pronomina" },
  { id:34, gheg:"Ju", de:"Ihr / Sie (Höflichkeit)", std:"Ju", cat:"pronomina" },
  { id:35, gheg:"Ata", de:"Sie (männlich)", std:"Ata", cat:"pronomina" },
  { id:36, gheg:"Ato", de:"Sie (weiblich)", std:"Ato", cat:"pronomina" },
  { id:37, gheg:"Ky", de:"Dieser", std:"Ky", cat:"pronomina" },
  { id:38, gheg:"Kjo", de:"Diese", std:"Kjo", cat:"pronomina" },
  { id:39, gheg:"Nji / Një", de:"Ein / Eine", std:"Një", cat:"pronomina" },
  { id:40, gheg:"Gjithë / Të gjithë", de:"Alle / Alles", std:"Të gjithë", cat:"pronomina" },
  { id:41, gheg:"Tjetër", de:"Anderer / Andere", std:"Tjetër", cat:"pronomina" },
  { id:42, gheg:"Najsen / Najsend", de:"Etwas / Irgendwas", std:"Diçka", cat:"pronomina" },

  // 4. JA / NEIN / BESTÄTIGUNG (43-53)
  { id:43, gheg:"Po", de:"Ja", std:"Po", cat:"bestaetigung" },
  { id:44, gheg:"Jo", de:"Nein", std:"Jo", cat:"bestaetigung" },
  { id:45, gheg:"A po?", de:"Oder? / Nicht wahr?", std:"Apo?", cat:"bestaetigung" },
  { id:46, gheg:"Hajde! / Hajt!", de:"Los! / Komm schon!", std:"Eja!", cat:"bestaetigung" },
  { id:47, gheg:"Amanet!", de:"Pass gut auf! / Ich schwör's!", std:"Amanet!", cat:"bestaetigung" },
  { id:48, gheg:"Pasha Zotin! / Pasha!", de:"Ich schwöre bei Gott!", std:"Pasha Zotin!", cat:"bestaetigung" },
  { id:49, gheg:"Me t'vërtetë!", de:"Wirklich! / Ehrlich!", std:"Me të vërtetë!", cat:"bestaetigung" },
  { id:50, gheg:"Ore!", de:"Alter! / Junge! (Anruf M)", std:"—", cat:"bestaetigung" },
  { id:51, gheg:"Bre!", de:"Digga! / Mann! (neutral)", std:"—", cat:"bestaetigung" },
  { id:52, gheg:"Mor! / Mori! / Moj!", de:"Mädchen! / Frau! (Anruf W)", std:"—", cat:"bestaetigung" },
  { id:53, gheg:"Vlla!", de:"Bruder! / Bro!", std:"Vëlla", cat:"bestaetigung" },

  // 5. DIE WICHTIGSTEN VERBEN (54-76)
  { id:54, gheg:"Jom", de:"Ich bin", std:"Jam", cat:"verben" },
  { id:55, gheg:"Asht", de:"Er/sie/es ist", std:"Është", cat:"verben" },
  { id:56, gheg:"Jan", de:"Sie sind", std:"Janë", cat:"verben" },
  { id:57, gheg:"Kam", de:"Haben", std:"Kam", cat:"verben" },
  { id:58, gheg:"Baj", de:"Machen / Tun", std:"Bëj", cat:"verben" },
  { id:59, gheg:"Thom", de:"Ich sage", std:"Them", cat:"verben" },
  { id:60, gheg:"Shof", de:"Ich sehe", std:"Shoh", cat:"verben" },
  { id:61, gheg:"Dua", de:"Wollen / Lieben / Mögen", std:"Dua", cat:"verben" },
  { id:62, gheg:"Mund", de:"Können", std:"Mund", cat:"verben" },
  { id:63, gheg:"Di", de:"Wissen", std:"Di", cat:"verben" },
  { id:64, gheg:"Duhet", de:"Müssen / Man muss", std:"Duhet", cat:"verben" },
  { id:65, gheg:"Flas", de:"Sprechen", std:"Flas", cat:"verben" },
  { id:66, gheg:"Dëgjoj", de:"Hören / Zuhören", std:"Dëgjoj", cat:"verben" },
  { id:67, gheg:"Marr", de:"Nehmen", std:"Marr", cat:"verben" },
  { id:68, gheg:"Jap / Dhanë", de:"Geben", std:"Jap", cat:"verben" },
  { id:69, gheg:"Punoj / Punu", de:"Arbeiten", std:"Punoj", cat:"verben" },
  { id:70, gheg:"Lexoj", de:"Lesen", std:"Lexoj", cat:"verben" },
  { id:71, gheg:"Shkruaj", de:"Schreiben", std:"Shkruaj", cat:"verben" },
  { id:72, gheg:"Mendoj", de:"Denken", std:"Mendoj", cat:"verben" },
  { id:73, gheg:"Kuptoj", de:"Verstehen", std:"Kuptoj", cat:"verben" },
  { id:74, gheg:"Hap", de:"Öffnen", std:"Hap", cat:"verben" },
  { id:75, gheg:"Mbyll", de:"Schließen", std:"Mbyll", cat:"verben" },
  { id:76, gheg:"Pres", de:"Warten / Schneiden", std:"Pres", cat:"verben" },

  // 6. INFINITIVE (77-89)
  { id:77, gheg:"Me pa", de:"Sehen (Inf.)", std:"Të shoh", cat:"infinitiv" },
  { id:78, gheg:"Me hangër", de:"Essen (Inf.)", std:"Të ha", cat:"infinitiv" },
  { id:79, gheg:"Me pi", de:"Trinken (Inf.)", std:"Të pi", cat:"infinitiv" },
  { id:80, gheg:"Me fjet", de:"Schlafen (Inf.)", std:"Të fle", cat:"infinitiv" },
  { id:81, gheg:"Me punu / Me punue", de:"Arbeiten (Inf.)", std:"Të punoj", cat:"infinitiv" },
  { id:82, gheg:"Me ardhë", de:"Kommen (Inf.)", std:"Të vij", cat:"infinitiv" },
  { id:83, gheg:"Me shkue / Me shku", de:"Gehen (Inf.)", std:"Të shkoj", cat:"infinitiv" },
  { id:84, gheg:"Me ba", de:"Machen / Tun (Inf.)", std:"Të bëj", cat:"infinitiv" },
  { id:85, gheg:"Me dhanë / Me dhânë", de:"Geben (Inf.)", std:"Të jap", cat:"infinitiv" },
  { id:86, gheg:"Me dashtë", de:"Lieben / Wollen (Inf.)", std:"Të dua", cat:"infinitiv" },
  { id:87, gheg:"Me ditë", de:"Wissen (Inf.)", std:"Të di", cat:"infinitiv" },
  { id:88, gheg:"Me mujtë", de:"Können (Inf.)", std:"Të mund", cat:"infinitiv" },
  { id:89, gheg:"Me lanë", de:"Lassen / Verlassen (Inf.)", std:"Të lë", cat:"infinitiv" },

  // 7. ALLTAGS- & NOMEN (90-106)
  { id:90, gheg:"Shpi / Shpija", de:"Haus / Zuhause", std:"Shtëpi", cat:"nomen" },
  { id:91, gheg:"Grue", de:"Frau", std:"Grua", cat:"nomen" },
  { id:92, gheg:"Burr", de:"Mann", std:"Burrë", cat:"nomen" },
  { id:93, gheg:"Cupë", de:"Mädchen", std:"Vajzë", cat:"nomen" },
  { id:94, gheg:"Djalë", de:"Junge / Bursche", std:"Djalë", cat:"nomen" },
  { id:95, gheg:"Fëmi / Fëmija", de:"Kind", std:"Fëmijë", cat:"nomen" },
  { id:96, gheg:"Nana / Nonë / Amë", de:"Mama / Mutter", std:"Nënë / Mëmë", cat:"nomen" },
  { id:97, gheg:"Babi / Babë", de:"Papa / Vater", std:"Atë / Baba", cat:"nomen" },
  { id:98, gheg:"Vlla", de:"Bruder", std:"Vëlla", cat:"nomen" },
  { id:99, gheg:"Motër / Moj", de:"Schwester", std:"Motër", cat:"nomen" },
  { id:100, gheg:"Shok / Mik / Ortak", de:"Freund / Kumpel", std:"Shok / Mik", cat:"nomen" },
  { id:101, gheg:"Gjysh", de:"Großvater", std:"Gjysh", cat:"nomen" },
  { id:102, gheg:"Nona / Gjyshe", de:"Großmutter", std:"Gjyshe", cat:"nomen" },
  { id:103, gheg:"Njeri", de:"Mensch", std:"Njeri", cat:"nomen" },
  { id:104, gheg:"Fshat", de:"Dorf", std:"Fshat", cat:"nomen" },
  { id:105, gheg:"Qytet", de:"Stadt", std:"Qytet", cat:"nomen" },
  { id:106, gheg:"Vend", de:"Ort / Land / Platz", std:"Vend", cat:"nomen" },

  // 8. ESSEN & TRINKEN (107-126)
  { id:107, gheg:"Bukë / Buka", de:"Brot", std:"Bukë", cat:"essen" },
  { id:108, gheg:"Ujë / Uji", de:"Wasser", std:"Ujë", cat:"essen" },
  { id:109, gheg:"Mish", de:"Fleisch", std:"Mish", cat:"essen" },
  { id:110, gheg:"Tâmël", de:"Milch", std:"Qumësht", cat:"essen" },
  { id:111, gheg:"Djath / Djathë", de:"Käse", std:"Djathë", cat:"essen" },
  { id:112, gheg:"Vezë / Vez", de:"Ei / Eier", std:"Vezë", cat:"essen" },
  { id:113, gheg:"Vaj", de:"Öl", std:"Vaj", cat:"essen" },
  { id:114, gheg:"Kripë", de:"Salz", std:"Kripë", cat:"essen" },
  { id:115, gheg:"Sheqer", de:"Zucker", std:"Sheqer", cat:"essen" },
  { id:116, gheg:"Mjaltë", de:"Honig", std:"Mjaltë", cat:"essen" },
  { id:117, gheg:"Kos", de:"Joghurt", std:"Kos", cat:"essen" },
  { id:118, gheg:"Flija / Flia", de:"Flija (kosovar. Spezialität)", std:"Flia", cat:"essen" },
  { id:119, gheg:"Byrek", de:"Börek / Blätterteigpastete", std:"Byrek", cat:"essen" },
  { id:120, gheg:"Qofte", de:"Hackbällchen / Frikadellen", std:"Qofte", cat:"essen" },
  { id:121, gheg:"Speca", de:"Paprika", std:"Speca", cat:"essen" },
  { id:122, gheg:"Domate", de:"Tomaten", std:"Domate", cat:"essen" },
  { id:123, gheg:"Tranguj", de:"Gurken", std:"Tranguj", cat:"essen" },
  { id:124, gheg:"Mollë", de:"Apfel", std:"Mollë", cat:"essen" },
  { id:125, gheg:"Rrush", de:"Trauben", std:"Rrush", cat:"essen" },
  { id:126, gheg:"Limon", de:"Zitrone", std:"Limon", cat:"essen" },

  // 9. ZAHLEN (127-139)
  { id:127, gheg:"Nji", de:"Eins", std:"Një", cat:"zahlen" },
  { id:128, gheg:"Dy", de:"Zwei", std:"Dy", cat:"zahlen" },
  { id:129, gheg:"Tre / Tri", de:"Drei", std:"Tre", cat:"zahlen" },
  { id:130, gheg:"Katër", de:"Vier", std:"Katër", cat:"zahlen" },
  { id:131, gheg:"Pesë", de:"Fünf", std:"Pesë", cat:"zahlen" },
  { id:132, gheg:"Gjashtë", de:"Sechs", std:"Gjashtë", cat:"zahlen" },
  { id:133, gheg:"Shtatë", de:"Sieben", std:"Shtatë", cat:"zahlen" },
  { id:134, gheg:"Tetë", de:"Acht", std:"Tetë", cat:"zahlen" },
  { id:135, gheg:"Nëntë", de:"Neun", std:"Nëntë", cat:"zahlen" },
  { id:136, gheg:"Dhjetë", de:"Zehn", std:"Dhjetë", cat:"zahlen" },
  { id:137, gheg:"Njizet", de:"Zwanzig", std:"Njëzet", cat:"zahlen" },
  { id:138, gheg:"Qind", de:"Hundert", std:"Qind", cat:"zahlen" },
  { id:139, gheg:"Mijë", de:"Tausend", std:"Mijë", cat:"zahlen" },

  // 10. ZEIT & TAGE (140-160)
  { id:140, gheg:"Tash", de:"Jetzt", std:"Tani", cat:"zeit" },
  { id:141, gheg:"Sot", de:"Heute", std:"Sot", cat:"zeit" },
  { id:142, gheg:"Dje", de:"Gestern", std:"Dje", cat:"zeit" },
  { id:143, gheg:"Nesër", de:"Morgen", std:"Nesër", cat:"zeit" },
  { id:144, gheg:"Para dje", de:"Vorgestern", std:"Para dje", cat:"zeit" },
  { id:145, gheg:"Prapë", de:"Wieder / Schon wieder", std:"Përsëri", cat:"zeit" },
  { id:146, gheg:"Gjithmonë", de:"Immer", std:"Gjithmonë", cat:"zeit" },
  { id:147, gheg:"Kurrë / Kurr", de:"Nie", std:"Kurrë", cat:"zeit" },
  { id:148, gheg:"Herë / Her", de:"Mal / Zeitpunkt", std:"Herë", cat:"zeit" },
  { id:149, gheg:"Dit / Ditë", de:"Tag", std:"Ditë", cat:"zeit" },
  { id:150, gheg:"Nat / Natë", de:"Nacht", std:"Natë", cat:"zeit" },
  { id:151, gheg:"Javë", de:"Woche", std:"Javë", cat:"zeit" },
  { id:152, gheg:"Muaj", de:"Monat", std:"Muaj", cat:"zeit" },
  { id:153, gheg:"Mot", de:"Jahr", std:"Vit / Vjet", cat:"zeit" },
  { id:154, gheg:"E hënë", de:"Montag", std:"E hënë", cat:"zeit" },
  { id:155, gheg:"E martë", de:"Dienstag", std:"E martë", cat:"zeit" },
  { id:156, gheg:"E mërkurë", de:"Mittwoch", std:"E mërkurë", cat:"zeit" },
  { id:157, gheg:"E enjte", de:"Donnerstag", std:"E enjte", cat:"zeit" },
  { id:158, gheg:"E premte", de:"Freitag", std:"E premte", cat:"zeit" },
  { id:159, gheg:"E shtunë", de:"Samstag", std:"E shtunë", cat:"zeit" },
  { id:160, gheg:"E diel", de:"Sonntag", std:"E diel", cat:"zeit" },

  // 11. ORT & RICHTUNG (161-170)
  { id:161, gheg:"Qitu", de:"Hier", std:"Këtu", cat:"ort" },
  { id:162, gheg:"Aty", de:"Dort / Da", std:"Atje", cat:"ort" },
  { id:163, gheg:"Ashtu", de:"So / Solche", std:"Kështu", cat:"ort" },
  { id:164, gheg:"Nalt", de:"Oben / Hoch", std:"Lart", cat:"ort" },
  { id:165, gheg:"Poshtë", de:"Unten", std:"Poshtë", cat:"ort" },
  { id:166, gheg:"Brenda", de:"Drinnen", std:"Brenda", cat:"ort" },
  { id:167, gheg:"Jashtë", de:"Draußen", std:"Jashtë", cat:"ort" },
  { id:168, gheg:"Afër", de:"Nah / Nahe", std:"Afër", cat:"ort" },
  { id:169, gheg:"Larg", de:"Weit / Fern", std:"Larg", cat:"ort" },
  { id:170, gheg:"Rrugë / Rrug", de:"Straße / Weg", std:"Rrugë", cat:"ort" },

  // 12. ADJEKTIVE (171-188)
  { id:171, gheg:"Mir' / Mirë", de:"Gut", std:"Mirë", cat:"adjektive" },
  { id:172, gheg:"Keq", de:"Schlecht", std:"Keq", cat:"adjektive" },
  { id:173, gheg:"I madh", de:"Groß", std:"I madh", cat:"adjektive" },
  { id:174, gheg:"I vogël", de:"Klein", std:"I vogël", cat:"adjektive" },
  { id:175, gheg:"I gjatë", de:"Lang / Groß (Größe)", std:"I gjatë", cat:"adjektive" },
  { id:176, gheg:"I shkurtër", de:"Kurz / Klein (Größe)", std:"I shkurtër", cat:"adjektive" },
  { id:177, gheg:"I ri", de:"Neu / Jung", std:"I ri", cat:"adjektive" },
  { id:178, gheg:"I vjetër", de:"Alt", std:"I vjetër", cat:"adjektive" },
  { id:179, gheg:"I bukur", de:"Schön", std:"I bukur", cat:"adjektive" },
  { id:180, gheg:"I shëmtuar", de:"Hässlich", std:"I shëmtuar", cat:"adjektive" },
  { id:181, gheg:"I lehtë", de:"Leicht / Einfach", std:"I lehtë", cat:"adjektive" },
  { id:182, gheg:"I rândë", de:"Schwer / Schwierig", std:"I rëndë", cat:"adjektive" },
  { id:183, gheg:"Shpejt", de:"Schnell", std:"Shpejt", cat:"adjektive" },
  { id:184, gheg:"Ngadalë", de:"Langsam", std:"Ngadalë", cat:"adjektive" },
  { id:185, gheg:"Shum' / Shumë", de:"Viel / Sehr", std:"Shumë", cat:"adjektive" },
  { id:186, gheg:"Fort", de:"Sehr / Stark", std:"Shumë", cat:"adjektive" },
  { id:187, gheg:"Pak", de:"Wenig / Ein bisschen", std:"Pak", cat:"adjektive" },
  { id:188, gheg:"Shumicë", de:"Meistens", std:"Shumicë", cat:"adjektive" },

  // 13. NATUR & UMWELT (189-200)
  { id:189, gheg:"Hânë", de:"Mond", std:"Hënë", cat:"natur" },
  { id:190, gheg:"Diell", de:"Sonne", std:"Diell", cat:"natur" },
  { id:191, gheg:"Qiell / Kjell", de:"Himmel", std:"Qiell", cat:"natur" },
  { id:192, gheg:"Tokë / Toka", de:"Erde / Boden", std:"Tokë", cat:"natur" },
  { id:193, gheg:"Mal", de:"Berg", std:"Mal", cat:"natur" },
  { id:194, gheg:"Lumë", de:"Fluss", std:"Lumë", cat:"natur" },
  { id:195, gheg:"Det", de:"Meer", std:"Det", cat:"natur" },
  { id:196, gheg:"Fushë", de:"Feld / Ebene", std:"Fushë", cat:"natur" },
  { id:197, gheg:"Pyll", de:"Wald", std:"Pyll", cat:"natur" },
  { id:198, gheg:"Lule / Lul", de:"Blume", std:"Lule", cat:"natur" },
  { id:199, gheg:"Mot / Kohë", de:"Wetter", std:"Mot", cat:"natur" },
  { id:200, gheg:"Zjarr", de:"Feuer", std:"Zjarr", cat:"natur" },
];

// ===========================
// SWEAR WORDS — loaded from LEARN_WORDS (cat:"schimpf")
// ===========================
function getSwearWords() {
  if (typeof LEARN_WORDS !== 'undefined') {
    return LEARN_WORDS.filter(w => w.cat === 'schimpf').map((w, i) => ({
      id: i + 1,
      gheg: w.gheg,
      de: w.de,
      note: w.note || '',
      intensity: w.intensity || 'mittel',
    }));
  }
  return [];
}

// ===========================
// CATEGORY LABELS
// ===========================
const CAT_LABELS = {
  begruessung: "👋 Begrüßung & Höflichkeit",
  fragewoerter: "❓ Fragewörter",
  pronomina: "👤 Pronomen & Partikel",
  bestaetigung: "✅ Ja / Nein / Bestätigung",
  verben: "🏃 Verben",
  infinitiv: "📝 Infinitive",
  nomen: "🏠 Alltag & Nomen",
  essen: "🍽️ Essen & Trinken",
  zahlen: "🔢 Zahlen",
  zeit: "🕐 Zeit & Tage",
  ort: "📍 Ort & Richtung",
  adjektive: "🎨 Adjektive",
  natur: "🌿 Natur & Umwelt",
  familje: "👨‍👩‍👧 Familie",
  shtepi: "🏡 Zuhause",
  mobilje: "🛋️ Möbel",
  ushqim: "🍕 Essen",
  rroba: "👕 Kleidung",
  trupi: "🫀 Körper",
  emocionet: "💭 Emotionen",
  rutina: "🔄 Routine",
};

const INTENSITY_LABELS = {
  mild: "🟢 Mild",
  mittel: "🟡 Mittel",
  stark: "🟠 Stark",
  sehr_stark: "🔴 Sehr stark",
};

// ===========================
// PROGRESS MANAGEMENT
// ===========================
function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('gheg_progress')) || { levels: {}, tests: {}, highestUnlocked: 1 };
  } catch(e) { return { levels: {}, tests: {}, highestUnlocked: 1 }; }
}

function saveProgress(prog) {
  localStorage.setItem('gheg_progress', JSON.stringify(prog));
}

function loadCursesProgress() {
  try {
    return JSON.parse(localStorage.getItem('gheg_curses_progress')) || { levels: {}, tests: {}, highestUnlocked: 1 };
  } catch(e) { return { levels: {}, tests: {}, highestUnlocked: 1 }; }
}

function saveCursesProgress(prog) {
  localStorage.setItem('gheg_curses_progress', JSON.stringify(prog));
}

// ===========================
// LEVEL SYSTEM — MAIN
// ===========================

// Build level groups from TOP200
function buildMainLevels() {
  const levels = [];
  console.log('buildMainLevels: TOP200 length =', TOP200?.length, 'LEARN_WORDS length =', typeof LEARN_WORDS !== 'undefined' ? LEARN_WORDS.length : 'UNDEFINED');
  // TOP200: 40 levels x 5 words
  for (let i = 0; i < 40; i++) {
    const start = i * 5;
    const words = TOP200.slice(start, start + 5);
    if (words.length === 0) break;
    const cat = words[0].cat;
    levels.push({
      num: i + 1,
      words: words,
      category: CAT_LABELS[cat] || cat,
      testGroup: Math.floor(i / 5) + 1, // which test group (1-8)
    });
  }

  // Remaining words from learnWordsData.js (excluding schimpf)
  if (typeof LEARN_WORDS !== 'undefined') {
    const otherWords = LEARN_WORDS.filter(w => w.cat !== 'schimpf');
    // Group by category
    const cats = [...new Set(otherWords.map(w => w.cat))];
    let levelNum = 41;
    for (const cat of cats) {
      const catWords = otherWords.filter(w => w.cat === cat);
      for (let i = 0; i < catWords.length; i += 5) {
        const words = catWords.slice(i, i + 5);
        if (words.length === 0) break;
        levels.push({
          num: levelNum,
          words: words.map(w => ({ id: w.id, gheg: w.gheg, de: w.de, std: w.note || '', cat: w.cat })),
          category: CAT_LABELS[cat] || cat,
          testGroup: Math.floor((levelNum - 1) / 5) + 1,
        });
        levelNum++;
      }
    }
  }

  console.log('buildMainLevels: returning', levels.length, 'levels');
  return levels;
}

// Build curse levels
function buildCurseLevels() {
  const swearWords = getSwearWords();
  const levels = [];
  for (let i = 0; i < swearWords.length; i += 5) {
    const words = swearWords.slice(i, i + 5);
    if (words.length === 0) break;
    const lvlIdx = Math.floor(i / 5) + 1;
    const intensities = words.map(w => w.intensity);
    const maxIntensity = intensities.includes('sehr_stark') ? 'sehr_stark' :
                         intensities.includes('stark') ? 'stark' :
                         intensities.includes('mittel') ? 'mittel' : 'mild';
    levels.push({
      num: lvlIdx,
      words: words,
      category: INTENSITY_LABELS[maxIntensity] || `Level ${lvlIdx}`,
      testGroup: Math.floor((lvlIdx - 1) / 5) + 1,
    });
  }
  return levels;
}

// ===========================
// RENDER LEVEL MAP (MAIN)
// ===========================
function renderMainLevels() {
  const container = document.getElementById('level-map');
  if (!container) { console.error('renderMainLevels: #level-map not found!'); return; }

  const levels = buildMainLevels();
  console.log('renderMainLevels: levels count =', levels.length, 'first:', levels[0]);
  const prog = loadProgress();
  let html = '';
  let lastTestGroup = 0;

  for (const lvl of levels) {
    // Insert test button before each test group boundary (every 5 levels)
    if (lvl.testGroup !== lastTestGroup && lvl.num > 1) {
      const testNum = lvl.testGroup - 1;
      // Check if ALL levels in the group this test covers are completed
      const allDone = levels
        .filter(l => l.testGroup === testNum)
        .every(l => prog.levels[l.num] && prog.levels[l.num].completed);
      if (allDone) {
        const testProg = prog.tests[testNum];
        const testPassed = testProg && testPassedCheck(testProg.grade);
        html += `
          <button class="test-button" onclick="startTest(${testNum})">
            <svg class="icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Test ${testNum + 1} ${testPassed ? '✅' : '📝'}
          </button>`;
      }
      lastTestGroup = lvl.testGroup;
    }

    const isUnlocked = lvl.num <= prog.highestUnlocked;
    const lvlProg = prog.levels[lvl.num];
    const isCompleted = lvlProg && lvlProg.completed;
    const isCurrent = lvl.num === prog.highestUnlocked && !isCompleted;
    const wordsCorrect = lvlProg ? (lvlProg.wordsCorrect || 0) : 0;

    let cardClass = 'level-card ';
    if (isCompleted) cardClass += 'completed ';
    else if (isCurrent) cardClass += 'current ';
    else if (isUnlocked) cardClass += 'available ';
    else cardClass += 'locked ';

    const iconContent = isCompleted ? '✅' : (isUnlocked ? lvl.num : '🔒');
    const progressPct = (wordsCorrect / 5) * 100;

    html += `
      <div class="${cardClass}" ${isUnlocked ? `onclick="startLevel(${lvl.num})"` : ''}>
        <div class="level-icon">${iconContent}</div>
        <div class="level-info">
          <div class="level-name">Level ${lvl.num}</div>
          <div class="level-sub">${lvl.category}</div>
        </div>
        <div class="level-progress">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
          </div>
          <span class="progress-text">${wordsCorrect}/5</span>
        </div>
      </div>`;
  }

  // Final test button — only show when last group is fully completed
  const lastTestGroupNum = Math.floor((levels.length - 1) / 5) + 1;
  const finalAllDone = levels
    .filter(l => l.testGroup === lastTestGroupNum)
    .every(l => prog.levels[l.num] && prog.levels[l.num].completed);
  if (finalAllDone) {
    const finalTestProg = prog.tests[lastTestGroupNum];
    const finalTestPassed = finalTestProg && testPassedCheck(finalTestProg.grade);
    html += `
      <button class="test-button" onclick="startTest(${lastTestGroupNum})">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        Test ${lastTestGroupNum} ${finalTestPassed ? '✅' : '📝'}
      </button>`;
  }

  console.log('renderMainLevels: html length =', html.length, 'snippet:', html.substring(0, 200));
  container.innerHTML = html;
}

// ===========================
// RENDER LEVEL MAP (CURSES)
// ===========================
function renderCurseLevels() {
  const container = document.getElementById('curses-level-map');
  if (!container) return;

  const levels = buildCurseLevels();
  const prog = loadCursesProgress();

  // Update progress bar
  const completedCount = Object.values(prog.levels).filter(l => l.completed).length;
  const pct = (completedCount / levels.length) * 100;
  document.getElementById('curses-progress-text').textContent = `${completedCount} / ${getSwearWords().length} Wörter`;
  document.getElementById('curses-progress-fill').style.width = `${pct}%`;

  let html = '';
  let lastTestGroup = 0;

  for (const lvl of levels) {
    if (lvl.testGroup !== lastTestGroup && lvl.num > 1) {
      const testNum = lvl.testGroup - 1;
      // Check if ALL levels in the group this test covers are completed
      const allDone = levels
        .filter(l => l.testGroup === testNum)
        .every(l => prog.levels[l.num] && prog.levels[l.num].completed);
      if (allDone) {
        const testProg = prog.tests[testNum];
        const testPassed = testProg && testPassedCheck(testProg.grade);
        html += `
          <button class="test-button" onclick="startCursesTest(${testNum})">
            <svg class="icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Test ${testNum + 1} ${testPassed ? '✅' : '📝'}
          </button>`;
      }
      lastTestGroup = lvl.testGroup;
    }

    const isUnlocked = lvl.num <= prog.highestUnlocked;
    const lvlProg = prog.levels[lvl.num];
    const isCompleted = lvlProg && lvlProg.completed;
    const isCurrent = lvl.num === prog.highestUnlocked && !isCompleted;
    const wordsCorrect = lvlProg ? (lvlProg.wordsCorrect || 0) : 0;

    let cardClass = 'level-card ';
    if (isCompleted) cardClass += 'completed ';
    else if (isCurrent) cardClass += 'current ';
    else if (isUnlocked) cardClass += 'available ';
    else cardClass += 'locked ';

    const iconContent = isCompleted ? '✅' : (isUnlocked ? lvl.num : '🔒');
    const progressPct = (wordsCorrect / 5) * 100;

    html += `
      <div class="${cardClass}" ${isUnlocked ? `onclick="startCursesLevel(${lvl.num})"` : ''}>
        <div class="level-icon">${iconContent}</div>
        <div class="level-info">
          <div class="level-name">Level ${lvl.num}</div>
          <div class="level-sub">${lvl.category}</div>
        </div>
        <div class="level-progress">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
          </div>
          <span class="progress-text">${wordsCorrect}/5</span>
        </div>
      </div>`;
  }

  // Final test — only show when last group is fully completed
  const lastTestGroupNum = Math.floor((levels.length - 1) / 5) + 1;
  const finalAllDone = levels
    .filter(l => l.testGroup === lastTestGroupNum)
    .every(l => prog.levels[l.num] && prog.levels[l.num].completed);
  if (finalAllDone) {
    const finalTestProg = prog.tests[lastTestGroupNum];
    const finalTestPassed = finalTestProg && testPassedCheck(finalTestProg.grade);
    html += `
      <button class="test-button" onclick="startCursesTest(${lastTestGroupNum})">
        <svg class="icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        Test ${lastTestGroupNum} ${finalTestPassed ? '✅' : '📝'}
      </button>`;
  }

  container.innerHTML = html;
}

// ===========================
// UNIFIED LEARN MODE
// Phases: 1=View (gheg+de), 2=Translate Gheg→De, 3=Translate De→Gheg
// ===========================
let learnState = null; // { levelNum, words, phase, currentIdx, correct, totalCorrect, isCurses }

function startLevel(levelNum) {
  const levels = buildMainLevels();
  const lvl = levels.find(l => l.num === levelNum);
  if (!lvl) return;

  learnState = {
    levelNum: levelNum,
    words: [...lvl.words],
    phase: 1, // 1=view, 2=gheg→de, 3=de→gheg
    currentIdx: 0,
    correct: 0,
    totalCorrect: 0,
    isCurses: false,
  };

  showLearnOverlay();
  renderLearnStep();
}

function startCursesLevel(levelNum) {
  const levels = buildCurseLevels();
  const lvl = levels.find(l => l.num === levelNum);
  if (!lvl) return;

  learnState = {
    levelNum: levelNum,
    words: [...lvl.words],
    phase: 1,
    currentIdx: 0,
    correct: 0,
    totalCorrect: 0,
    isCurses: true,
  };

  showLearnOverlay();
  renderLearnStep();
}

function showLearnOverlay() {
  document.getElementById('learn-overlay').classList.add('active');
  document.getElementById('learn-input').value = '';
  document.getElementById('learn-feedback').innerHTML = '';
  document.getElementById('learn-input').className = 'answer-input';
}

function renderLearnStep() {
  const s = learnState;
  const word = s.words[s.currentIdx];
  s.currentWord = word;

  const phaseLabel = s.phase === 1 ? '📖 Wort ansehen' : (s.phase === 2 ? '🔤 Albanisch → Deutsch' : '🇩🇪 Deutsch → Albanisch');
  const totalSteps = s.words.length * 3; // 3 phases
  const currentStep = (s.phase - 1) * s.words.length + s.currentIdx + 1;

  document.getElementById('learn-counter').textContent = `Phase ${s.phase}/3 · ${s.currentIdx + 1}/${s.words.length}`;
  document.getElementById('learn-progress-fill').style.width = `${(currentStep / totalSteps) * 100}%`;
  document.getElementById('learn-direction').textContent = phaseLabel;

  const inputEl = document.getElementById('learn-input');
  const feedbackEl = document.getElementById('learn-feedback');
  const submitBtn = document.getElementById('learn-submit');

  inputEl.value = '';
  feedbackEl.innerHTML = '';
  inputEl.className = 'answer-input';
  inputEl.style.display = 'none';
  submitBtn.style.display = 'none';

  if (s.phase === 1) {
    // Phase 1: Show both words — just a "Weiter" button
    document.getElementById('learn-word').innerHTML = `
      <div style="font-size:2.2rem;margin-bottom:8px;display:flex;align-items:center;gap:10px;justify-content:center">
        ${word.gheg}
        <button class="audio-btn" onclick="event.stopPropagation();playLearnAudio(${word.id}, this)">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
        </button>
      </div>
      <div style="font-size:1.3rem;color:var(--text-dim)">${word.de}</div>
    `;
    feedbackEl.innerHTML = '<div style="color:var(--text-dim);font-size:0.9rem">Merke dir das Wort, dann weiter 👇</div>';
    submitBtn.textContent = s.currentIdx < s.words.length - 1 ? 'Weiter ➡️' : 'Jetzt übersetzen! ✍️';
    submitBtn.style.display = 'block';
    submitBtn.onclick = nextLearnStep;
  } else {
    // Phase 2 & 3: Translation
    const showGheg = s.phase === 2;
    document.getElementById('learn-word').innerHTML = showGheg
      ? `<div style="display:flex;align-items:center;gap:10px;justify-content:center">
          ${word.gheg}
          <button class="audio-btn" onclick="event.stopPropagation();playLearnAudio(${word.id}, this)">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
          </button>
        </div>`
      : `<div>${word.de}</div>`;
    inputEl.style.display = 'block';
    submitBtn.textContent = 'Prüfen';
    submitBtn.style.display = 'block';
    submitBtn.onclick = checkLearnAnswer;
    setTimeout(() => inputEl.focus(), 100);
  }
}

function nextLearnStep() {
  const s = learnState;
  s.currentIdx++;
  if (s.currentIdx >= s.words.length) {
    // Move to next phase
    s.phase++;
    s.currentIdx = 0;
    s.correct = 0;
  }
  if (s.phase > 3) {
    finishLearnLevel();
    return;
  }
  renderLearnStep();
}

function checkLearnAnswer() {
  const s = learnState;
  if (!s) return;

  const input = document.getElementById('learn-input');
  const feedback = document.getElementById('learn-feedback');
  const userAnswer = normalizeAnswer(input.value);

  // Phase 2: Gheg→De, Phase 3: De→Gheg
  const correctAnswer = normalizeAnswer(s.phase === 2 ? s.currentWord.de : s.currentWord.gheg);
  const isCorrect = checkAnswerMatch(userAnswer, correctAnswer);

  if (isCorrect) {
    input.className = 'answer-input correct';
    feedback.innerHTML = '<div class="correct-text">✅ Richtig!</div>';
    s.correct++;
    s.totalCorrect++;
  } else {
    input.className = 'answer-input wrong';
    const correctDisplay = s.phase === 2 ? s.currentWord.de : s.currentWord.gheg;
    feedback.innerHTML = `<div class="wrong-text">❌ Falsch</div>
      <div class="correct-answer">Richtig: <strong>${correctDisplay}</strong></div>`;
  }

  setTimeout(() => {
    s.currentIdx++;
    if (s.currentIdx >= s.words.length) {
      // Done with this phase, move to next
      s.phase++;
      s.currentIdx = 0;
      s.correct = 0;
    }
    if (s.phase > 3) {
      finishLearnLevel();
    } else {
      renderLearnStep();
    }
  }, 1200);
}

function finishLearnLevel() {
  const s = learnState;
  const allCorrect = s.totalCorrect === s.words.length * 3;

  if (s.isCurses) {
    const prog = loadCursesProgress();
    if (!prog.levels[s.levelNum]) prog.levels[s.levelNum] = {};
    if (allCorrect) {
      prog.levels[s.levelNum].completed = true;
    }
    prog.levels[s.levelNum].wordsCorrect = s.totalCorrect;
    if (allCorrect && s.levelNum >= prog.highestUnlocked) {
      prog.highestUnlocked = s.levelNum + 1;
    }
    saveCursesProgress(prog);
  } else {
    const prog = loadProgress();
    if (!prog.levels[s.levelNum]) prog.levels[s.levelNum] = {};
    if (allCorrect) {
      prog.levels[s.levelNum].completed = true;
    }
    prog.levels[s.levelNum].wordsCorrect = s.totalCorrect;
    if (allCorrect && s.levelNum >= prog.highestUnlocked) {
      prog.highestUnlocked = s.levelNum + 1;
    }
    saveProgress(prog);
  }

  document.getElementById('learn-overlay').classList.remove('active');
  learnState = null;

  if (s.isCurses) renderCurseLevels();
  else renderMainLevels();
}

function closeLearn() {
  document.getElementById('learn-overlay').classList.remove('active');
  learnState = null;
}

// ===========================
// TEST SYSTEM (MAIN)
// ===========================
let currentTestState = null;

function startTest(testGroupNum) {
  const levels = buildMainLevels();
  // Get all levels in this test group
  const groupLevels = levels.filter(l => l.testGroup === testGroupNum);
  if (groupLevels.length === 0) return;

  // Collect all words from these levels
  let allWords = [];
  for (const lvl of groupLevels) {
    allWords = allWords.concat(lvl.words);
  }

  // Pick 15 random words
  const testWords = shuffleArray([...allWords]).slice(0, 15);

  currentTestState = {
    testGroupNum: testGroupNum,
    words: testWords,
    currentIdx: 0,
    correct: 0,
    results: [], // { word, userAnswer, correct, direction }
    isTest: true,
    isCurses: false,
  };

  showTestOverlay();
  renderTestQuestion();
}

function showTestOverlay() {
  document.getElementById('test-overlay').classList.add('active');
  document.getElementById('test-input').value = '';
  document.getElementById('test-feedback').innerHTML = '';
  document.getElementById('test-input').className = 'answer-input';
}

function renderTestQuestion() {
  const s = currentTestState;
  const word = s.words[s.currentIdx];
  const dir = Math.random() < 0.5;
  s.currentDir = dir;
  s.currentWord = word;

  const total = s.words.length;
  const idx = s.currentIdx;

  document.getElementById('test-counter').textContent = `${idx + 1}/${total}`;
  document.getElementById('test-progress-fill').style.width = `${(idx / total) * 100}%`;
  document.getElementById('test-question-num').textContent = `Frage ${idx + 1}`;
  document.getElementById('test-question-word').textContent = dir ? word.gheg : word.de;
  document.getElementById('test-question-dir').textContent = dir ? 'Übersetze ins Deutsche' : 'Übersetze ins Albanische';
  document.getElementById('test-input').value = '';
  document.getElementById('test-feedback').innerHTML = '';
  document.getElementById('test-input').className = 'answer-input';
  document.getElementById('test-input').focus();
}

function checkTestAnswer() {
  const s = currentTestState;
  if (!s) return;

  const input = document.getElementById('test-input');
  const userAnswer = normalizeAnswer(input.value);
  const correctAnswer = normalizeAnswer(s.currentDir ? s.currentWord.de : s.currentWord.gheg);
  const isCorrect = checkAnswerMatch(userAnswer, correctAnswer);

  s.results.push({
    word: s.currentWord,
    userAnswer: input.value.trim(),
    correct: isCorrect,
    direction: s.currentDir,
  });

  if (isCorrect) s.correct++;

  s.currentIdx++;
  if (s.currentIdx >= s.words.length) {
    document.getElementById('test-overlay').classList.remove('active');
    finishTest();
  } else {
    renderTestQuestion();
  }
}

function finishTest() {
  const s = currentTestState;
  const total = s.words.length;
  const pct = Math.round((s.correct / total) * 100);
  const grade = calculateGrade(pct);
  const passed = testPassedCheck(grade);

  // Save test result
  const prog = s.isCurses ? loadCursesProgress() : loadProgress();
  prog.tests[s.testGroupNum] = {
    score: pct,
    grade: grade,
    passed: passed,
    date: new Date().toISOString(),
  };

  // If not passed, lock levels back
  if (!passed) {
    // Reset highest unlocked to first level of this test group
    const levels = s.isCurses ? buildCurseLevels() : buildMainLevels();
    const groupLevels = levels.filter(l => l.testGroup === s.testGroupNum);
    if (groupLevels.length > 0) {
      prog.highestUnlocked = groupLevels[0].num;
    }
  }

  if (s.isCurses) saveCursesProgress(prog);
  else saveProgress(prog);

  document.getElementById('test-overlay').classList.remove('active');
  showResult(pct, grade, passed, s.results, s.isCurses);
}

function closeTest() {
  document.getElementById('test-overlay').classList.remove('active');
  currentTestState = null;
}

// ===========================
// TEST SYSTEM (CURSES)
// ===========================
let currentCursesTestState = null;

function startCursesTest(testGroupNum) {
  const levels = buildCurseLevels();
  const groupLevels = levels.filter(l => l.testGroup === testGroupNum);
  if (groupLevels.length === 0) return;

  let allWords = [];
  for (const lvl of groupLevels) {
    allWords = allWords.concat(lvl.words);
  }

  const testWords = shuffleArray([...allWords]).slice(0, 15);

  currentTestState = {
    testGroupNum: testGroupNum,
    words: testWords,
    currentIdx: 0,
    correct: 0,
    results: [],
    isTest: true,
    isCurses: true,
  };

  showTestOverlay();
  renderTestQuestion();
}

// ===========================
// RESULT SCREEN
// ===========================
function showResult(pct, grade, passed, results, isCurses) {
  const overlay = document.getElementById('result-overlay');
  overlay.classList.add('active');

  // Grade display
  const gradeEl = document.getElementById('result-grade');
  gradeEl.className = `result-grade grade-${grade}`;
  document.getElementById('result-grade-num').textContent = grade;

  const gradeLabels = {
    1: 'Sehr gut', 2: 'Gut', 3: 'Befriedigend',
    4: 'Genügend', 5: 'Mangelhaft', 6: 'Ungenügend'
  };
  document.getElementById('result-grade-label').textContent = gradeLabels[grade];

  // Score text
  const correct = results.filter(r => r.correct).length;
  const total = results.length;
  document.getElementById('result-score-text').textContent = `${correct} / ${total} richtig (${pct}%)`;

  // Message
  const msgEl = document.getElementById('result-message');
  if (passed) {
    msgEl.className = 'result-message passed';
    msgEl.textContent = '🎉 Gut gemacht! Nächste Level freigeschaltet!';
  } else {
    msgEl.className = 'result-message locked';
    msgEl.textContent = '🔒 Du brauchst mindestens eine 2 (80%) um weiterzumachen. Wiederhole die Level!';
  }

  // Word lists
  const correctList = document.getElementById('result-correct-list');
  const wrongList = document.getElementById('result-wrong-list');

  correctList.innerHTML = results.filter(r => r.correct).map(r => `
    <div class="result-word-item correct">
      <span class="word-gheg">${r.word.gheg}</span>
      <span class="word-arrow">→</span>
      <span class="word-de">${r.word.de}</span>
    </div>
  `).join('') || '<div style="color:var(--text-dim);font-size:0.85rem">Keine</div>';

  wrongList.innerHTML = results.filter(r => !r.correct).map(r => `
    <div class="result-word-item wrong">
      <span class="word-gheg">${r.word.gheg}</span>
      <span class="word-arrow">→</span>
      <span class="word-de">${r.word.de}</span>
      <span class="word-user-answer">(Deine Antwort: ${r.userAnswer || '—'})</span>
    </div>
  `).join('') || '<div style="color:var(--text-dim);font-size:0.85rem">Keine</div>';

  // Buttons
  const primaryBtn = document.getElementById('result-primary-btn');
  const secondaryBtn = document.getElementById('result-secondary-btn');

  if (passed) {
    primaryBtn.textContent = 'Weiter →';
    primaryBtn.onclick = () => {
      overlay.classList.remove('active');
      if (isCurses) renderCurseLevels();
      else renderMainLevels();
    };
    secondaryBtn.classList.add('hidden');
  } else {
    primaryBtn.textContent = 'Level wiederholen';
    primaryBtn.onclick = () => {
      overlay.classList.remove('active');
      // Go back to first level of the failed test group
      const levels = isCurses ? buildCurseLevels() : buildMainLevels();
      // Find the test group from the last test
      const prog = isCurses ? loadCursesProgress() : loadProgress();
      // Just re-render, user needs to redo levels
      if (isCurses) renderCurseLevels();
      else renderMainLevels();
    };
    secondaryBtn.textContent = 'Erneut testen';
    secondaryBtn.classList.remove('hidden');
    secondaryBtn.onclick = () => {
      overlay.classList.remove('active');
      // Re-start the same test
      if (isCurses) {
        // Find which test group was last
        const prog = loadCursesProgress();
        const lastTestNum = Object.keys(prog.tests).map(Number).sort((a,b) => b-a)[0];
        if (lastTestNum) startCursesTest(lastTestNum);
      } else {
        const prog = loadProgress();
        const lastTestNum = Object.keys(prog.tests).map(Number).sort((a,b) => b-a)[0];
        if (lastTestNum) startTest(lastTestNum);
      }
    };
  }

  // Confetti if passed
  if (passed) spawnConfetti();
}

function handleResultPrimary() {
  // Handled inline in showResult
}

function handleResultSecondary() {
  // Handled inline in showResult
}

// ===========================
// GRADE CALCULATION
// ===========================
function calculateGrade(pct) {
  if (pct >= 90) return 1;
  if (pct >= 80) return 2;
  if (pct >= 70) return 3;
  if (pct >= 50) return 4;
  if (pct >= 30) return 5;
  return 6;
}

function testPassedCheck(grade) {
  return grade <= 2; // 1 or 2 = passed
}

// ===========================
// ANSWER MATCHING
// ===========================
function normalizeAnswer(str) {
  return str.trim().toLowerCase()
    .replace(/[.!?,;:'"()]/g, '')
    .replace(/\s+/g, ' ');
}

function checkAnswerMatch(user, correct) {
  // Direct match
  if (user === correct) return true;

  // Check alternatives (separated by /)
  const correctAlts = correct.split('/').map(s => normalizeAnswer(s));
  for (const alt of correctAlts) {
    if (user === alt) return true;
  }

  // Check if user answer is contained in correct (for multi-word answers)
  if (correctAlts.some(alt => alt.includes(user) && user.length > 2)) return true;

  return false;
}

// ===========================
// NAVIGATION
// ===========================
function switchTab(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`.nav-tab[data-page="${page}"]`).classList.add('active');

  if (page === 'home') renderMainLevels();
  if (page === 'curses') renderCurseLevels();
  if (page === 'sentences') renderSentenceTabs();
}

// ===========================
// SENTENCES
// ===========================
let currentSentenceLevel = 1;

function renderSentenceTabs() {
  const container = document.getElementById('sentence-level-tabs');
  if (!container) return;

  let html = '';
  for (let i = 1; i <= 9; i++) {
    const active = i === currentSentenceLevel ? 'active' : '';
    html += `<button class="level-tab ${active}" onclick="showSentences(${i})">L0${i}</button>`;
  }
  container.innerHTML = html;

  if (typeof SENTENCE_DATA !== 'undefined') {
    showSentences(currentSentenceLevel);
  }
}

function showSentences(level) {
  currentSentenceLevel = level;

  // Update active tab
  document.querySelectorAll('.level-tab').forEach((tab, idx) => {
    tab.classList.toggle('active', idx + 1 === level);
  });

  if (typeof SENTENCE_DATA === 'undefined') return;

  const sentences = SENTENCE_DATA.filter(s => s.l === level);
  renderSentenceList(sentences);
}

function filterSentences() {
  const query = document.getElementById('sentence-search').value.toLowerCase();
  if (typeof SENTENCE_DATA === 'undefined') return;

  const sentences = SENTENCE_DATA.filter(s => s.l === currentSentenceLevel);
  if (!query) {
    renderSentenceList(sentences);
    return;
  }

  const filtered = sentences.filter(s =>
    (s.g && s.g.toLowerCase().includes(query)) ||
    (s.d && s.d.toLowerCase().includes(query))
  );
  renderSentenceList(filtered);
}

function renderSentenceList(sentences) {
  const container = document.getElementById('sentence-list');
  if (!container) return;

  if (sentences.length === 0) {
    container.innerHTML = '<div class="empty-state">Keine Sätze gefunden</div>';
    return;
  }

  container.innerHTML = sentences.map(s => `
    <div class="sentence-card">
      <button class="sentence-audio-btn" onclick="playSentenceAudio('${s.a || ''}', this)">
        <svg class="icon" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
      </button>
      <div class="sentence-gheg">${s.g || ''}</div>
      <div class="sentence-de">${s.d || ''}</div>
    </div>
  `).join('');
}

// ===========================
// AUDIO
// ===========================
function playAudio(word, btn) {
  const cleanWord = word.split('/')[0].trim().split(' ')[0].toLowerCase().replace(/[^a-zëçâêîôû]/g, '');
  const audio = new Audio(`audio/${cleanWord}.mp3`);

  if (btn) {
    btn.classList.add('playing');
    audio.onended = () => btn.classList.remove('playing');
    audio.onerror = () => {
      btn.classList.remove('playing');
      // Fallback to SpeechSynthesis
      speakText(word, 'sq-AL');
    };
  }

  audio.play().catch(() => {
    speakText(word, 'sq-AL');
  });
}

function playLearnAudio(wordId, btn) {
  const fileName = getAudioFile(wordId);
  let audio;

  if (fileName) {
    audio = new Audio(`audio-kosovo/${fileName}`);
  }

  if (btn) {
    btn.classList.add('playing');
    const cleanup = () => btn.classList.remove('playing');

    if (audio) {
      audio.onended = cleanup;
      audio.onerror = () => {
        cleanup();
        // Fallback: find the word text and use SpeechSynthesis
        const word = LEARN_WORDS.find(w => w.id === wordId);
        if (word) speakText(word.gheg, 'sq-AL');
      };
      audio.play().catch(() => {
        cleanup();
        const word = LEARN_WORDS.find(w => w.id === wordId);
        if (word) speakText(word.gheg, 'sq-AL');
      });
    } else {
      // No audio file found — use SpeechSynthesis fallback
      const word = LEARN_WORDS.find(w => w.id === wordId);
      if (word) {
        speakText(word.gheg, 'sq-AL');
      }
      // Remove the playing class after a short delay for feedback
      setTimeout(cleanup, 300);
    }
  } else {
    if (audio) {
      audio.play().catch(() => {
        const word = LEARN_WORDS.find(w => w.id === wordId);
        if (word) speakText(word.gheg, 'sq-AL');
      });
    } else {
      const word = LEARN_WORDS.find(w => w.id === wordId);
      if (word) speakText(word.gheg, 'sq-AL');
    }
  }
}

function playSentenceAudio(path, btn) {
  if (!path) return;
  const audio = new Audio(path);

  if (btn) {
    btn.classList.add('playing');
    audio.onended = () => btn.classList.remove('playing');
    audio.onerror = () => btn.classList.remove('playing');
  }

  audio.play().catch(() => {});
}

function speakText(text, lang) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = 0.85;
    speechSynthesis.speak(utter);
  }
}

// ===========================
// POMODORO TIMER
// ===========================
let timerInterval = null;
let timerRemaining = 25 * 60;
let timerTotal = 25 * 60;
let timerRunning = false;
let timerMode = 'work';
let timerSessions = 0;

const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 120; // r=120

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;

  document.getElementById('timer-start-btn').classList.add('hidden');
  document.getElementById('timer-stop-btn').classList.remove('hidden');

  timerInterval = setInterval(() => {
    timerRemaining--;
    updateTimerDisplay();

    if (timerRemaining <= 0) {
      onTimerComplete();
    }
  }, 1000);
}

function stopTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  document.getElementById('timer-start-btn').classList.remove('hidden');
  document.getElementById('timer-stop-btn').classList.add('hidden');
}

function resetTimer() {
  stopTimer();
  timerRemaining = timerTotal;
  updateTimerDisplay();
}

function setTimerMode(mode) {
  stopTimer();
  timerMode = mode;
  timerTotal = mode === 'work' ? 25 * 60 : 5 * 60;
  timerRemaining = timerTotal;
  updateTimerDisplay();

  document.getElementById('mode-work').classList.toggle('active', mode === 'work');
  document.getElementById('mode-break').classList.toggle('active', mode === 'break');
}

function updateTimerDisplay() {
  const mins = Math.floor(timerRemaining / 60);
  const secs = timerRemaining % 60;
  document.getElementById('timer-display').textContent =
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  const pct = timerRemaining / timerTotal;
  const offset = CIRCLE_CIRCUMFERENCE * (1 - pct);
  document.getElementById('timer-progress').style.strokeDashoffset = offset;
}

function onTimerComplete() {
  stopTimer();

  if (timerMode === 'work') {
    timerSessions++;
    document.getElementById('timer-sessions').textContent = `Sitzungen: ${timerSessions}`;
  }

  // Notification
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('Gheg Timer', {
      body: timerMode === 'work' ? 'Zeit für eine Pause!' : 'Pause vorbei — weiter geht\'s!',
    });
  }

  // Vibrate
  if ('vibrate' in navigator) {
    navigator.vibrate([200, 100, 200]);
  }

  // Auto-switch
  setTimerMode(timerMode === 'work' ? 'break' : 'work');
}

// ===========================
// CONFETTI
// ===========================
function spawnConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#e63946', '#8b5cf6', '#22c55e', '#f4a261', '#3b82f6', '#ff2d55'];

  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 2 + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    piece.style.width = (Math.random() * 8 + 5) + 'px';
    piece.style.height = (Math.random() * 8 + 5) + 'px';
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 4000);
}

// ===========================
// UTILITY
// ===========================
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===========================
// KEYBOARD SUPPORT
// ===========================
document.addEventListener('keydown', (e) => {
  const learnActive = document.getElementById('learn-overlay').classList.contains('active');
  const testActive = document.getElementById('test-overlay').classList.contains('active');

  if (learnActive || testActive) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (testActive) {
        checkTestAnswer();
      } else if (learnActive) {
        // Phase 1 = "Weiter" button, Phase 2+ = check answer
        if (learnState && learnState.phase === 1) {
          nextLearnStep();
        } else {
          checkLearnAnswer();
        }
      }
    }
    if (e.key === 'Escape') {
      if (testActive) closeTest();
      else closeLearn();
    }
  }
});

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  // Request notification permission
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => console.warn('SW registration failed:', err));
  }

  // Init timer display
  updateTimerDisplay();

  // Render initial page
  renderMainLevels();

  // Update streak
  updateStreak();
});

function updateStreak() {
  const today = new Date().toDateString();
  let streakData = {};
  try {
    streakData = JSON.parse(localStorage.getItem('gheg_streak')) || {};
  } catch(e) { streakData = {}; }

  if (streakData.lastDay !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (streakData.lastDay === yesterday.toDateString()) {
      streakData.count = (streakData.count || 0) + 1;
    } else if (streakData.lastDay !== today) {
      streakData.count = 1;
    }
    streakData.lastDay = today;
    localStorage.setItem('gheg_streak', JSON.stringify(streakData));
  }

  const streakEl = document.getElementById('streak-count');
  if (streakEl) streakEl.textContent = streakData.count || 0;
}
