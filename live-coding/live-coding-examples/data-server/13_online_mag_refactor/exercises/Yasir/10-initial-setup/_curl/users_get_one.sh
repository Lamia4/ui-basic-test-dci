#!/usr/bin/env bash

# DISCUSS:
ID="acbedf1edba2c5b8bf2a495e" # problem or not? - Why?

curl -X GET -H 'Content-Type: application/json' -i http://localhost:3345/users/$ID
