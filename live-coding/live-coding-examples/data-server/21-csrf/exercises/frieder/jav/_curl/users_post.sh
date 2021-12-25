#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3345/users --data '{
  "name": "Thomas Hofmann",
  "email": "thomas.hofmann@digitalcareerinstitute.org",
  "password": "12345678"
}'
