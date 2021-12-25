#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3345/articles/ --data '{
  "title": "TITLE of a new ARTICLE",
  "teaser": "Yet Another Teasing Text",
  "text": "Full Text in short ;-)"
}'
