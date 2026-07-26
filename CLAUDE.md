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
- `index.html` – einzige Seite (Stand: erstes Grundgerüst), gestylt über `style.css`.
- Bewusst **kein** iframe-Wrapper (im Teambuch-Repo historisch bedingt, hier nicht nötig).
- Abschnitte „Über uns" und „Kontakt" sind aktuell Platzhalter („Inhalte folgen") – echte Vereinsinhalte (Ziele, Vorstand, Kontaktdaten, Bankverbindung etc.) müssen von der Nutzerin geliefert werden, nie erfinden.

## Git-Workflow
- Repository wurde am 26. Juli 2026 leer angelegt; der erste Commit (Grundgerüst mit Titelbild/Logo) ging direkt auf `main`, da zu dem Zeitpunkt noch nichts Bestehendes zu schützen war.
- Für alle folgenden Änderungen: sinnvollerweise auf einem Feature-Branch entwickeln und vor dem Mergen nach `main` kurz Rückmeldung von der Nutzerin einholen (wie beim Teambuch).
