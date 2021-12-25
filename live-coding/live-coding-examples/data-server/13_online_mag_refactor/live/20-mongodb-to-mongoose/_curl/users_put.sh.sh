#!/usr/bin/env bash

curl -X PUT -H 'Content-Type: application/json' -i http://localhost:3345/users/60eebc14986bc44d5f9f51d1 --data '{
  "name": "Maureen Hayes",
  "readinglist": [
    "1fd087b57452ef5d26bf0d31",
    "055dc77addd46908dfbe2fee",
    "5502da0eee415cdebe47a433"
  ]
}'
