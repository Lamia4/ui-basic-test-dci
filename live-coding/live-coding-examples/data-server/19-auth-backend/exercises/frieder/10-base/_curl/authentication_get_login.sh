#!/usr/bin/env bash

curl -X GET -H 'Content-Type: application/json' -i http://localhost:3345/authentication --data '{
  "email": "thomas.hofmann@digitalcareerinstitute.org",
  "password": "12345678"
}'
