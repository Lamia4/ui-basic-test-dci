# Readme

Die `POST /users`-Route legt den Nutzer mit Passwort an, das Passwort wird dabei mit Hilfe von bcrypt, gehasht gespeichert.

## Source
`16-schema-ref/live/40-delete-article`

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
