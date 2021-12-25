#!/usr/bin/env bash

# DISCUSS:
ID="60ed93ce0349ae7279316624" # problem or not? - Why?

curl -X GET -H 'Content-Type: application/json' -i http://localhost:3345/users/$ID
