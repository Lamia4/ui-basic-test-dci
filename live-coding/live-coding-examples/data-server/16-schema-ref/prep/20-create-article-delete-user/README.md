# Readme

## Added Functionality:
- `Article.deleteByAuthorId(id)`
- Hook in `UserSchema.post('findOneAndDelete)`
- `_curl/articles_post.sh` => Post an article with an author
- `_curl/users_delete_author_of_article.sh` => Delete author of the article above

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
