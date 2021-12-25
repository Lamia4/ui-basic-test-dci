## Anfragemodell:

1. Client postet login (Username, Passwort) zum Server.
2. Server validiert LoginDaten, kreiert JWT und sendet diesen zurück.
3. Client sendet neue und jede weitere Anfrage (springt in der Navigation rum) mit JWT.
4. Server validiert JWT, verarbeitet die Anfrage und sendet entsprechend Ergebnis zurück.
5. Wenn ja, dann Zugriff, wenn nein oder abgelaufen, dann error/Status.

### Reihenfolgen beachten zwecks async!
===================================

##### Postrequest → “/users/login” -Route mit Email und Passwort.

- wenn Nutzer gefunden weiter zur Passwortvalidierung, wenn nicht gefunden abbrechen und Status senden.
- Nutzer (Email und Passwort) authentifizieren und JWT erstellen zurück senden bzw speichern.
- Funktion die password und email abgleicht und wenn erfolgreich die Funktion/Middelware aufruft, die JWT erstellt.
- wenn nicht abbrechen und Status senden

- JWT mit jwt.sign generieren und auf Abfrage an server senden (Secret wird ausgelagert)
- JWT nur einem Nutzer zuweisen und speichern bis der Token abgelaufen ist.
- JWT speichern in local Storage?!
- JWT Eigenschaften festlegen: wie Ablaufzeit usw.

- Bei jeder weiteren Anfrage JWT abfragen und verifizieren mittels Middleware mit jwt.verify.
- update/refreshfunktion für JWT anfügen für Server performance wenn der Nutzer länger verweilt?!
- JWT löschen wenn Sitzung beendet.

______________________________

JWT Funktion erstellen in Middleware zwecks Wiederverwendung. JWT in UserModel speichern. Aufruf nach Nutzerauthentifizierung