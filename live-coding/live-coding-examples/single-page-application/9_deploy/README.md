# Auslieferung / Deployment

- Welche Rolle spielt ein Server bei einer Single-Page-Application, die komplett auf dem Client ausgeführt wird?
- Was ist ein Webserver?
- Wie werden Dateien ausgeliefert?

---

## Links

### Docker
https://www.docker.com

https://hub.docker.com

#### Docker-Workshop
https://github.com/thomas-hofmann-dci/workshop-docker-intro
### Docker-Compose-Workshop
https://github.com/thomas-hofmann-dci/workshop-docker-compose

### Hosting Services

### (Virtual) Server
#### DigitalOcean
https://www.digitalocean.com/

#### Hetzner
https://www.hetzner.com
(Cloud/...)

#### Kamp
https://www.kamp.de
(DHP Minipaket)

#### Firebase
https://firebase.google.com/

#### Github-Pages
https://pages.github.com/

  ##### JS-Package: "gh-pages"
  https://www.npmjs.com/package/gh-pages?activeTab=readme

#### Heroku
https://www.heroku.com/

#### Jamstack
https://jamstack.org/
- Site-Generator for "react static"
https://app.netlify.com/start/deploy?repository=https://github.com/tannerlinsley/react-static-starter

#### Netlify
https://www.netlify.com/

#### Vercel
https://vercel.com/

---

## Exercise:
original: https://github.com/DigitalCareerInstitute/SPA-todo-app/blob/stage/07-deployment/Deployment.md

### Deployment
1. Erstelle ein Github-Repository gemäß der Anleitung auf:

    https://pages.github.com/

    - Stelle sicher, dass die angelegte `index.html` über

      https://DEIN_GITHUB_NUTZERNAME.github.io

      erreichbar ist.


2. Erstelle innerhalb des Projektordners ein React-Projekt:
   ```
   $> npx create-react-app NAME_DES_REACT_PROJEKTS
   ```

3. Setup JS-Paket "gh-pages"
    - installiere "gh-pages" im neu angelegten React-Projekt als Development-Abhängigkeit:
      ```
      $> npm install --save-dev gh-pages
      ```
    - füge die Eigenschaft (engl. "property") "homepage" zur `package.json` hinzu:
      ```
      "homepage":"."
      ```
    - füge 2 Skripte zum "scripts"-Objekt in der `packages.json` hinzu:
      ```
      "predeploy":"npm run build",
      "deploy":"gh-pages -d build"
      ```

    - Das folgende Kommando veröffentlicht (engl. "deploy") das Projekt:
      ```
      $> npm run deploy
      ```

    - Gehe zu den Github-Einstellungen (engl. "Settings") des Repositories. Wähle dort "Pages" und stelle für diese "Github Page" als Quelle (engl. "Source") den Zweig "gh-pages" aus.

      **Randbemerkung:**

      Das ist notwendig, da Github-Pages als Voreinstellung auf den "master"-Branch zugreifen, das Paket "gh-pages" aber in der Grundeinstellung in den "gh-pages"-Zweig "pusht". Das Verzeichnis bleibt auf "/ (root)".

   **Notiz:**
   - Nach erfolgtem "Deployment" kann es ein paar Minuten dauern, bevor eine aktualisierte Version vom Github-Pages-Server ausgeliefert wird.
