Erste Überlegungen zur Implementierung eines tokens

- über den server.js eine middleware über einen router einführen (router.use)

- bei den routern im authenticate router über den Controller oder die Middleware auf eine weitere Funktion weiterleiten

- über den ordner middleware in einer js datei die token function erstellen

- die Gültigkeit des tokens mit dem error handling überprüfen

- im postman wird nur der username und password eingegeben, aber im response werden die weiteren informationen des users und der token zurückgegeben


Aus Frieders Überlegungen:

- im login nach erfolgreicher authentifizierung prozess zum token erstellen anstoßen (als mw denkbar)

- funktion zum ertellen des tokens erstellen

- neue mw + funktion zur verifizierung des tokens estellen

- bei erfolgreicher verifizierung tokendauer aktualisieren, nächste mw anstoßen

- bei falschem hashwert requestprozess abbrechen, token löschen

- bei logout request beenden, token löschen

- bei abgelaufenen token request mit fehler abbrechen, umleitung auf login formular (frontend)