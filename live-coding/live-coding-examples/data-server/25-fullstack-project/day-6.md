# Milestones Tag 6
- Von Tag 5: Neue Route GET /links/:linkHash
  - Weiterleitung beim Aufruf zur eigentlichen URL
  - Falls Hash nicht existiert: 404 zurückgeben
  - Beispiel: http://localhost:3000/links/mein-erstes-video => https://youtube.com/watch?q=fnjrneo3rnfow3ri

- API-Calls im Frontend in API.js auslagern

- Context verwenden
  - Links im Context abrufen und von dort verwenden
  - Bearbeitungsfunktionen (hinzufügen, bearbeiten, löschen) über Context bereitstellen
