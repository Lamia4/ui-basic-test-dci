#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3345/articles/ --data '{
  "authorId": "68e7a3b8deb63a6dd84d722f",
  "title": "TITLE of a new ARTICLE",
  "teaser": "Yet Another Teasing Text",
  "text": "Full Text with the author specified."
}'
