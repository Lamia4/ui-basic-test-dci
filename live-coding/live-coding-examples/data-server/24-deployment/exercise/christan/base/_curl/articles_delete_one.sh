#!/usr/bin/env bash

# DISCUSS:
ID="1d6bb43ce8d98ef149e0dceb" # problem or not? - Why?

curl -X DELETE -H 'Content-Type: application/json' -i http://localhost:3345/articles/$ID
