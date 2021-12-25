#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3345/api/events/61237d4724734d7a08fb41c9/guests --data '{
  "firstName": "Thomas",
  "lastName": "Hofmann"
}'
