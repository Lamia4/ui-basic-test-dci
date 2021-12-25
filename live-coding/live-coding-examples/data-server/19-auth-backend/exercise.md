# Exercise: Authentifizierung im Backend

Das Passwort soll mit Hilfe von `bcrypt` verhasht gespeichert und überprüft werden.

## Anlegen eines neuen Nutzers mit Passwort

Ein neuer Nutzer soll mit den folgenden Informationen angelegt werden:
- name
- email
- password

### Todos
- Sicherstellen, dass es den Nutzer noch nicht gibt.

- Route: `routers/users.js -> post("/", usersController.create)`;
  - über `controllers/users.js -> create()`
  - zu `models/User.js -> register()`
    "verhashe" dort den Passwort-Parameter vor dem Speichern mit `bcrypt`

- User-Schema:
  - `password` soll `required` sein

### Optional
- Validierung der Nutzereingabe:
  1. Mindestlänge (Auftraggeber sagt: min. 8 Zeichen)
  Laut Auftraggeber derzeit nicht erforderlich, es geht erstmal um einen Prototypen:
  1. erforderliche Zeichen - Buchstaben (groß, klein), Sonderzeichen, Leerzeichen, ...
  2. Sanitization, gerade wenn Sonderzeichen erlaubt werden.
    - ist in der Nutzereingabe vorhandenes bspw. "json" ein Problem?

#### Zunächst lediglich Login ohne die weiteren "Use-Cases":
- Bestätigungsmail mit Bestätigungslink
  Es müsste das User-Schema um ein Attribut, wie `isEmailValidated` erweitert weren.
	- Validierung der Email wäre damit auch erledigt

## Login eines Nutzers

Login erfolgt auf Grundlage der folgenden eingegebenen Daten:
- email 
- password

- Route: `routers/authentication.js -> post("/", authenticationController.loginByEmail)`;
  - über `controllers/authentication.js -> loginByEmail()`
    Rückgaben:
	- im Erfolgsfall das senden des zurückgegebenen Objekts
	- sonst: `res.status(401).send("unauthorized - wrong email/password")`
	  
  - zu `models/User.js -> loginByEmail()`
	Dort überprüfen:
	- im Erfolgsfall das folgende Objekt zurückgeben `{authentication: "successfull"}`
	- sonst: throw `Error("authentication failed")`


### Zunächst nicht
#### Validierung:
- Middleware, wo/wie hinzufügen

#### Frontend:
Umgang mit vergessenem Passwort?
- Erneutes Login ermöglichen
- Passwort zurücksetzen

