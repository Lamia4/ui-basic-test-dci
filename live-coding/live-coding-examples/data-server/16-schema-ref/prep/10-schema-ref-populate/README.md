# Readme

Articles have now an `author` attribute referencing a `User`.
And a user's `readingList.articleId` references an `Article`.
Populate has been added in the _READ_ functions: `User.readOne()`, `Article.readOne()`, and `Article.readAll`.

## Docker-Compose
```bash
#  Erster Start:
$> docker-compose up -d mongo
$> docker-compose up -d mongo-express # optional, wenn Admin-GUI benötigt wird, erreichbar über http://localhost:8081

#  Status
$> docker-compose ps

# Stoppen
$> docker-compose stop

# Starten
$> docker-compose start

# Beenden und Container Löschen
$> docker-compose down

```

## package.js
```bash
# Datenbank "seeden"
$> yarn seed

# Webserver starten
$> yarn dev
```
