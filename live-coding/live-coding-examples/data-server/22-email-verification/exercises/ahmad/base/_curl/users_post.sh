#!/usr/bin/env bash

curl -X POST -H 'Content-Type: application/json' -i http://localhost:3345/users --data '{
  "name": "alice",
  "email": "alice@example.com",
  "password": "abc"
}'
