#!/usr/bin/env bash

# DISCUSS:
ID="60eebdd9a97399556fdaf569" # problem or not? - Why?

echo "*****************************************"
echo "* expected result 'Dr. Rick King [...]' *"
echo "*****************************************"
echo

curl -X GET -H 'Content-Type: application/json' -i http://localhost:3345/users/$ID
