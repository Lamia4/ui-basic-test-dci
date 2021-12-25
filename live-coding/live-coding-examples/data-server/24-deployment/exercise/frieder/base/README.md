# Readme

## Neu entwickelte Formulare

http://localhost:3345/users/form/create

http://localhost:3345/authentication/form/login

## Plan

### DEU
Refactor der csrfProtection in eigene Datei innerhalb von `./middleware/.`, entsprechende Imports...
Warum? Es reduziert doppelten Code, erleichtert die Nutzung und fördert die Einheitlichkeit der Konfiguration, da diese an einem einzigen Ort geschieht, nämlich in der `csrfProtection`-Datei.

### ENG
Refactor csrfProtection to be in its own middleware file and then import accordingly.

Why? Because it facilitates usage, reduces repeated code and hence fosters coherence (single point of configuration of CSRF-Protection)


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
