#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3345/articles/ --data '{
  "authorId": "111111111111111111111111",
  "title": "ARTIKEL MIT AUTOR der nicht existiert",
  "teaser": "Das Anlegen dieses Artikels soll verhindert werden.",
  "text": "Bevor Artikel angelegt werden, muss überprüft werden, ob der Autor existiert..."
}'
