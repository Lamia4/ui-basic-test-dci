Grundlage bildet im Wesentlichen der bereits angefangene Express-Server (`09_intro_mongodb`) für das "Online Magazin".
Dieser nutzt für die Datenbankverbindung bisher MongoClient.
Daneben existiert ein Skript `seed.js` zum Initialisieren der Datenbank (`12_database_seeds_faker`) und dem `docker-compose.yml` aus `10_mongoose`.

Ziel ist MongoClient im Webserver durch Mongoose zu ersetzen.
Dieses wird für die existierenden `articles`-Routen vorgeführt und wird in den Übungen fortgeführt.

Als reine Übung schließt sich eine reine Übung an:
Nach diesem Mongoose-Refactoring, soll darüberhinaus das Backend so umgearbeitet werden, dass `express.Router()` genutzt wird.
