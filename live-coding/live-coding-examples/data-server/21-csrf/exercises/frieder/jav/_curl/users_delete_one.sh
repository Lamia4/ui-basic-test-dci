#!/usr/bin/env bash

# DISCUSS:
ID="3735eb3d03ccb5f3ecbc613c" # problem or not? - Why?

echo "******************************************************"
echo "* expected result deletion of 'Millie Franecki [...]' *"
echo "******************************************************"
echo

curl -X DELETE -H 'Content-Type: application/json' -i http://localhost:3345/users/$ID
