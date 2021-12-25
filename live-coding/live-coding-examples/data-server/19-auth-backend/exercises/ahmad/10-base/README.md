# Readme

Das Löschen eines Nutzers soll dazu führen, dass auch alle Artikel deren Autor dieser Nutzer war, gelöscht werden.

## Prerequisites:
- yarn
  `$> sudo npm install --global yarn`

## package.js
```bash

# Services Starten und Seeden, schließlich Webserver im "dev"-Mode starten
$> yarn dev

# Services Stoppen
$> yarn stop

# Services Stoppen und Löschen
$> yarn down

# Datenbank "seeden"
$> yarn seed
```