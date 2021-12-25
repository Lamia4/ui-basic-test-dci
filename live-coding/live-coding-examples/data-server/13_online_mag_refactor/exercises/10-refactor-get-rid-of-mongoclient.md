# Refactoring: Entferne Abhängigkeit zu MongoClient

1. Überarbeite die Anwendung, so dass nicht mehr die Datenbankverbindung mit 
dem darunterliegenden MongoClient genutzt wird. Statt dessen soll ausschließlich 
Mongoose genutzt werden.

2. Nach diesem Refactoring entferne den nun nicht mehr benötigten Import
3. Nenne schließlich `mongooseCon` zu `db` um.
