# Peppered Bcrypt

Erweitere die `bcrypt`-Version, so dass sie mit einem Pepper arbeitet.

Es ist erforderlich eine Datei `users-bcryptPepperd.json` anzulegen, ein dort eingetragener Nutzer soll das folgende beispielhafte Format haben:
```json
"USER": {
    "name": "USER",
    "bcryptPeppered": "...."
}
```

Um einen Wert in das `bcryptPeppered`-Attribut eintragen zu können, muss dieses aus dem Passwort und Pepper erzeugt werden.

Ausgangsbasis bietet die Datei `50-authenticate-bcrypt.js`.
