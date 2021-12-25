#!/usr/bin/env bash

# DISCUSS:
ID="b3d03ccb5f3ecbc613cf5670" # problem or not? - Why?

curl -X GET -H 'Content-Type: application/json' -i http://localhost:3345/users/$ID
