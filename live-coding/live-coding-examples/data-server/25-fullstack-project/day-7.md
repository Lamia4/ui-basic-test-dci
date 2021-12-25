# Milestones Tag 7

- Rund machen
  - Zugriff für alle anderen ermöglichen
    - Zugriffsrechte oder ins "Live"-Repo aufnehmen
  - `.gitignore`: 
	- `.env` (!, Passworte, API-Keys, ...)
    - `node_modules` (Sven/Alex hatten "Pain") - `$> git rm --cached node_modules`
  - MVP (Minimal Viable Product): Nicht notwendige Komponenten Deaktivieren
  - Bugs Fixen
  - Vorbereiten für Deployment
    - `docker-compose.yml`
	  services:
	    - `frontend`
		- `backend`
		- `mongo` (im Falle einer selbst gehosteten Datenbank, also nicht Atlas)
- Deployment
  - lokal via `docker-compose`
  - ggf. auf VM

Fragen:
- Deployment des Frontends:
  - Builden und dann Static Ausliefern

## Links:
- [React Production Build](https://create-react-app.dev/docs/production-build/)


## Nachmittag
- bis 14:00
  - MVP:
    - Anlegen eines Links
	- Nutzen der Kurz-URL (Weiterleitung)

- bis 15:00
  - Ausführen des `build` Scripts aus der `package.json` des Frontends
  - Ausliefern des damit erstellten `build`-Verzeichnisses mittels `express.static` durch den Backend-Server

- bis 16:00 
  - gemeinsames Deployment

### Fragen:
@ALL: MVP-Status?

### In Gruppen klären
- Julia & Kateryna
  - Authentication

- Yasir, Galip, Lamia, Cüneyt
  - express-static

- Sven @Ahmad und Frank wegen Redirect
- Frieder & Christian Merge steht aus.

- Julia: MVP fast fertig, React Problem

- Lamia & Galip: MVP, haben wir nicht, 
  Yasir & Cüneyt: MVP noch 
  - Link Anlegen: Funktion unklar
  - Weiterleitung: Unklar
