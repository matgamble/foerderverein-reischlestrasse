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
- Nutzerin möchte einen Girocode/EPC-QR-Code für Spenden (siehe Abschnitt „Spenden"). Braucht dafür die **IBAN** (BLZ/Kontonummer allein reicht nicht) + Kontoinhaber, optional BIC/fester Betrag/Verwendungszweck. Nutzerin trägt die Daten in einer künftigen Session nach – dann Girocode erzeugen (z. B. per `qrcode`-Bibliothek mit EPC069-12-Zeilenformat) und im Spenden-Abschnitt einbinden.

## Foto-Galerien
- `slideshow.js` (1:1 aus dem Teambuch-Repo übernommen, generisch) macht jede `.special-photo-gallery` automatisch im Vollbild swipebar (Touch, Pfeiltasten, Escape). Muster: `<div class="special-photo-gallery" aria-label="..."><figure><a class="gallery-link" href="#id"><img ...></a><figcaption>...</figcaption></figure>...</div>`.
- Solange für einen Bereich noch keine echten Fotos vorliegen, `.special-photo-gallery-placeholder` verwenden (gleiches Scroll-Layout, aber `.image-placeholder`-Boxen mit "Foto folgt" statt `<img>` – bewusst NICHT an slideshow.js gekoppelt, da es ohne echtes Bild nichts zum Aufklappen gäbe). Sobald echte Fotos da sind: Klasse zu `.special-photo-gallery` wechseln und `<img>` einsetzen, dann greift die Vollbildansicht automatisch.

## Git-Workflow
- Repository wurde am 26. Juli 2026 leer angelegt; der erste Commit (Grundgerüst mit Titelbild/Logo) ging direkt auf `main`, da zu dem Zeitpunkt noch nichts Bestehendes zu schützen war.
- Für alle folgenden Änderungen: sinnvollerweise auf einem Feature-Branch entwickeln und vor dem Mergen nach `main` kurz Rückmeldung von der Nutzerin einholen (wie beim Teambuch).
