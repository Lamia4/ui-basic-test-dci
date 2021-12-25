#!/usr/bin/env bash

curl -X PUT -H 'Content-Type: application/json' -i http://localhost:3345/users/60eebc14986bc44d5f9f51d1 --data '{
  "name": "Maureen Hayes",
  "readinglist": [
    "60eebc14986bc44d5f9f51d7",
    "60eebc14986bc44d5f9f51d8",
    "60eebc14986bc44d5f9f51da"
  ]
}'
