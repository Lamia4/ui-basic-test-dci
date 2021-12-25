#!/usr/bin/env bash

# DISCUSS:
ID="e19237ccfd1bcb3aaec33e7d" # problem or not? - Why?

echo "******************************************************"
echo "* expected result deletion of 'Wendell Cronin [...]' *"
echo "******************************************************"
echo

curl -X DELETE -H 'Content-Type: application/json' -i http://localhost:3345/users/$ID
