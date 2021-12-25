#!/usr/bin/env bash

# DISCUSS:
ID="e19237ccfd1bcb3aaec33e7d" # problem or not? - Why?

echo "*****************************************"
echo "* expected result 'Wendell Cronin [...]' *"
echo "*****************************************"
echo

curl -X GET -H 'Content-Type: application/json' -i http://localhost:3345/users/$ID
