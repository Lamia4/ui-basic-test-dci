# Exercise: Verifikation der Email-Adresse

Die E-Mail Adresse, 
die der Nutzer beim Anlegen seines Accounts angegeben hat, 
soll verifiziert werden. 

## Create User
- generate EMAIL_VERIFICATION_TOKEN
- speichern des EMAIL_VERIFICATION_TOKENS im neuen User-Document
  
  => neues Attribut `emailVerificationToken` im User-Schema

- Email mit Verifizierungslink schicken.
  Lösungsansatz: Neue Middleware `sendVerificationEmail`, einhängen in Route `POST /users`
  
  Link bspw.: http://localhost:3345/emailVerify/USER_EMAIL/EMAIL_VERIFICATION_TOKEN

## Verifizierung
Serverseitig:
- Route für Verifizierung `GET /emailVerify/:userEmail/:emailVerificationToken`
	- Nutzer "raussuchen": `User.findByEmail(userEmail)`
	- als verifiziert markieren:
	  
	  Setzen auf "" bzw. Löschen des Wertes des Attributs `User.emailVerificationToken`


	- Authentifizierung (sprich Login) ist erst möglich, nachdem die E-Mail-Verifizierung erfolgt ist.
	  Wiederholtes Senden der Verifizierungsmail, wird später angeboten, wahrscheinlich im Zusammenhang mit einer Erweiterung des Logins

	- Future Plan:

	  - virtuals: Anlegen eines "virtuellen" Attributs `isEmailVerified` (bool) mit folgender Mechanik:
		- `true`, wenn emailVerificationToken = "" oder nil (zu klären, Implementierungsdetail)
		- `false` sonst
  	  - Umgang mit Datenleichen, sprich nicht verifizierte Nutzer.
	    => `User.dateCreated` (type: date)
	       => Löschen von nicht verifizierten Accounts, die älter als X sind.

	

