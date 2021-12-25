#!/usr/bin/env bash

curl -X PUT -H 'Content-Type: application/json' -i http://localhost:3345/articles/fcacda464ee01a25fdd655ef --data '{
  "title": "TITLE",
  "teaser": "Teasing Text",
  "text": "Full Text"
}'
