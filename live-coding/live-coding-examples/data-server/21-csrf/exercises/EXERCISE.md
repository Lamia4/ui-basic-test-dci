# CSRF-Protection

## Online Magazine
Schütze das Online Magazin vor "Cross Site Request Forgery" Angriffen.
- Welche Routen sollten geschützt werden?
- Welche Routen müssen nicht geschützt werden?
- Gibt es Routen, die nicht geschützt werden können?

## Vorbereitung auf Morgen "Send Mail":
  - Besorge Dir einen Zugang bei [Sendgrid.com](https://sendgrid.com/).
  - Registriere dort eine Email-Adresse und verifiziere sie.
  - Lege einen API-Key an, er benötigt lediglich "Restricted Access" und dort lediglich "Full Access" bei "Mail Send" (vgl. Screenshot `Sendgrid - API-Key-Permissions for sending mails.png`).

---
## Welche Routen sollten geschützt werden?
- auf jeden Fall die Routen, die etwas verändern: 
  - POST, UPDATE, PATCH, DELETE-Routen

- alles was persönliche Daten liefern kann
  wegen rechtlicher Probleme
  - das sind in der Regel GET-Routen
  => nur GET-Routen, die persönliche Daten offenbaren, sollten geschützt werden, das wird aber durch Authentifizierung und Autorisierung abgefangen.

Wichtig in der Überlegung der Server-Architektur ist die Zuordnung von CRUD-Operationen zu HTTP-Methoden.
```
CRUD    HTTP-Methode
Create  CREATE
Read    GET
Update  UPDATE
Delete  DELETE
```

### Testen der CSRF-Protection
- Formular zum Anlegen eines Nutzers bauen und ausliefern.
  - Kopie des `views/.` Ordners und anpassen
  - Route im Server anlegen, die dieses Formular ausliefert.
  Vergleiche live Code

---

## Pseudocode
token = csurf.generateToken(cookie.value);

function generateToken(cookie.value) {
  let token = sha256(cookie.value + date);
  return token;
}
