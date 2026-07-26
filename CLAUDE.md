# Förderverein Kita Reischlestraße – Hinweise für Claude Code

Dieses Repository ist die Website des Fördervereins der Kita Reischlestraße (Augsburg). Es ist ein Schwesterprojekt des internen Teambuchs (separates Repository `matgamble/teambuch`) und teilt sich mit diesem Bildsprache und Grundfarben, ist aber inhaltlich und technisch eigenständig.

## Herkunft der Bild-Assets
- `assets/cover/foerderverein-cover.png`: Titelbild im Stil des Teambuch-Covers (Aquarell-Orkas, Zapfen, Pastell-Hintergrund). Die Illustration selbst wurde extern (nicht von Claude) erzeugt und von der Nutzerin hochgeladen; Claude hat lediglich das Förderverein-Logo unten rechts eingefügt und dafür den Fußbereich um ein Stück verlängert (gleiche Hintergrundfarbe fortgesetzt), damit es nicht mit der Motto-Zeile überlappt.
- `assets/branding/logo-foerderverein-kita-reischlestrasse.png`: Kombiniertes Logo, analog zum Teambuch-Logo (`Stadt Augsburg | Kita Reischlestraße`), hier aber `zwei Orkas (Symbol für gegenseitige Hilfe) | Förderverein` links und unverändert `Orka | Kita Reischlestraße` rechts. Per HTML/CSS (Playwright-Screenshot) gebaut, Schrift Georgia, Navy `#12264a`.
- Kein Bildgenerator verfügbar: Claude kann keine neuen Aquarell-Illustrationen malen, nur vorhandene Bilder zuschneiden/einfärben/zusammensetzen. Neue Illustrationen (z. B. weitere Orka-Posen) müssen extern erzeugt und von der Nutzerin hochgeladen werden.

## Konventionen (übernommen vom Teambuch, siehe dort für Details)
- Bilder nach Möglichkeit als scrollbare Galerie einfügen, nie als einzelnes `<img>`, sobald mehrere Fotos zu einem Thema existieren.
- Nie URLs, Adressen, Telefonnummern, E-Mails oder sonstige reale Angaben raten – nur verwenden, was die Nutzerin explizit angibt oder in einem hochgeladenen Dokument steht.
- Ton bei diktierten/frei erzählten Inhalten: nie roh übernehmen, sondern wertschätzend und warm umformulieren, ohne Inhalt zu verändern oder zu erfinden.

## Struktur
- `index.html` – einzige Seite, gestylt über `style.css`. Navigation: sticky `.topbar` mit `<details class="mobile-menu">` (1:1 Muster aus dem Teambuch-Repo, `nav.js` = die Nav-Sync-Logik aus `checklists.js`, ohne die Teambuch-spezifischen Checklisten-Teile). Ab 1024px Breite ist das Menü dauerhaft als Pill-Reihe sichtbar statt eingeklappt.
- Bewusst **kein** iframe-Wrapper (im Teambuch-Repo historisch bedingt, hier nicht nötig).
- Seitenstruktur (Stand: Grundgerüst, per Web-Recherche zu typischen Kita-Förderverein-Websites zusammengestellt) – alle Abschnitte außer der Überschriften/Struktur sind Platzhalter „Inhalte folgen", **nie Inhalte erfinden**, nur von der Nutzerin gelieferte Daten einsetzen:
  - Das sind wir (Vorstand/Kita-Leitung mit Fotogalerie)
  - Über uns (Vereinszweck, Gründungsjahr)
  - Was wir fördern (konkrete Projekte/Anschaffungen)
  - Mitglied werden (Ablauf, Beitragshöhe, Beitrittsformular)
  - Spenden (Bankverbindung/Girocode-QR – siehe Abschnitt unten, Spendenquittungs-Hinweis)
  - Termine (Veranstaltungen)
  - Satzung & Downloads (Satzung-PDF, Protokolle, Presse-Logo)
  - Kontakt
  - **Impressum** und **Datenschutzerklärung** (rechtlich verpflichtend, § 5 DDG bzw. DSGVO) – als eigene Abschnitte am Seitenende, aus dem Footer verlinkt (`.legal-links`), aktuell nur Checkliste der Pflichtangaben, kein Fließtext. Vor echtem Go-Live zwingend mit echten Daten (Vorstand nach § 26 BGB, Vereinsregisternummer, Registergericht etc.) füllen bzw. Datenschutzerklärung rechtlich erstellen lassen – hier nichts raten oder generisch vorformulieren.

## Spenden-QR-Code (Girocode)
- Bei „Spenden" liegt aktuell ein **Beispiel-QR-Code** (`assets/spenden/qr-beispiel.png`, mit `qrcode`-Python-Paket erzeugt, kodiert nur einen Platzhaltertext, kein echter Girocode) neben einem warmen Text zur Unterstützung, deutlich als „Beispielansicht" gekennzeichnet.
- Für den echten Girocode/EPC-QR-Code braucht es die **IBAN** (BLZ/Kontonummer allein reicht nicht) + Kontoinhaber, optional BIC/fester Betrag/Verwendungszweck – sobald die Nutzerin das liefert, den echten Girocode im EPC069-12-Zeilenformat erzeugen und das Platzhalter-Bild ersetzen.

## Foto-Galerien
- `slideshow.js` (Basis aus dem Teambuch-Repo übernommen, aber erweitert) macht jede `.special-photo-gallery` **und** `.special-photo-gallery-placeholder` automatisch im Vollbild swipebar (Touch, Pfeiltasten, Escape). Muster: `<div class="special-photo-gallery(-placeholder)" aria-label="..."><figure><a class="gallery-link" href="#id"><img ...> oder <div class="image-placeholder">Foto folgt</div></a><figcaption>...</figcaption></figure>...</div>`. Figuren ohne `<img>` (noch "Foto folgt") zeigen im Vollbild einen Platzhalter-Slide statt eines Fehlers.
- Wichtig: Die Bildunterschrift in der Vollbildansicht steht **unterhalb** des Bildes (eigene Zeile im Flex-Layout, `.slideshow-stage` + `.slideshow-caption` als Geschwister), nicht mehr als überlagerter Text darüber – bei langen Bildunterschriften auf schmalen Handys hat das vorher das Foto verdeckt.
- Sobald für "Das sind wir" die restlichen echten Fotos da sind: einfach `<img>` statt `.image-placeholder` einsetzen, die Vollbildansicht greift automatisch weiter.

## Orka-Fakten-Dropdown
- Direkt unter dem Titelbild sitzt (wie im Teambuch) ein `<details class="orka-dropdown">` mit dem transparenten `orka-symbol.png`-Icon als `<summary>` – aufklappbar zu einem längeren Info-Text über Orkas ("Warum Orkas die erfolgreichsten Jäger der Meere sind", 5 Fakten, Kartenraster). Inhalt 1:1 aus dem Teambuch übernommen (generisches Orka-Wissen, nicht Kita-spezifisch, daher unverändert wiederverwendbar). Zugehörige Assets: `orka-symbol.png` (Repo-Root, wie im Teambuch). CSS-Klassen `.orka-dropdown*`, `.orka-fakt`, `.orka-symbol`, `.card-grid`, `.check-card` ebenfalls aus dem Teambuch übernommen.

## Netzwerk-Einschränkungen in dieser Umgebung
- Der Proxy erlaubt nur eine Allowlist an Domains (z. B. `fonts.googleapis.com`, `api.github.com`, `github.com`); beliebige andere Domains per `curl`/direktem Download schlagen mit "CONNECT tunnel failed, response 403" fehl – das ist eine Umgebungs-Policy, keine Falscheingabe.
- `WebFetch` scheitert zusätzlich oft an Bot-Schutz einzelner Websites (403), auch wenn die Domain grundsätzlich erreichbar wäre.
- Praktische Konsequenz: Externe PDFs/Dateien (z. B. Beispiel-Vordrucke aus dem Netz) lassen sich in dieser Umgebung meist nicht direkt herunterladen. Workaround: passende Inhalte/Struktur selbst nachbauen (z. B. mit `reportlab`), basierend auf bekanntem Standardaufbau, statt ein Original 1:1 zu kopieren.

## Copyright-Sicherheitssperre (wichtige Beobachtung)
- Beim Versuch, Fotos mit deutlich erkennbaren, urheberrechtlich geschützten Drittanbieter-Charakteren (z. B. Legoland-Maskottchen/-Figuren) zu committen, hat ein automatischer Sicherheits-Klassifikator den Commit blockiert – und zwar **nur, solange das Repository öffentlich war**. Nach dem Umschalten auf privat gingen dieselben Dateien anstandslos durch (später wurde das Repo wieder auf öffentlich gestellt, mit den Fotos weiterhin drin – das war eine bewusste Nutzer-Entscheidung).
- Die Sperre greift nur bei tatsächlichen Aktionen von Claude (Bash/git), nicht rückwirkend auf bereits vorhandene Dateien im Repo.

## Git-Workflow
- Repository wurde am 26. Juli 2026 leer angelegt; der erste Commit (Grundgerüst mit Titelbild/Logo) ging direkt auf `main`, da zu dem Zeitpunkt noch nichts Bestehendes zu schützen war.
- Für alle folgenden Änderungen: sinnvollerweise auf einem Feature-Branch entwickeln und vor dem Mergen nach `main` kurz Rückmeldung von der Nutzerin einholen (wie beim Teambuch).
