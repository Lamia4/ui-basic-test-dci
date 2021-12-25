# Milestones Tag 5
- Absicherung durch Benutzeranmeldung
  - Einer oder mehrere User in der Datenbank (manuell eingefügt) mit E-Mail-Adresse und gehashtem Passwort
  - Absicherung aller Routen außer GET /links

- Neue Route GET /links/:linkHash
  - Weiterleitung beim Aufruf zur eigentlichen URL
  - Falls Hash nicht existiert: 404 zurückgeben
  - Beispiel: http://localhost:3000/links/mein-erstes-video => https://youtube.com/watch?q=fnjrneo3rnfow3ri
