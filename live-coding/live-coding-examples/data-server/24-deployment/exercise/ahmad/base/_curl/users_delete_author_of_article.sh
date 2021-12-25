#!/usr/bin/env bash

ID="68e7a3b8deb63a6dd84d722f"

curl -X DELETE -H 'Content-Type: application/json' -i http://localhost:3345/users/$ID
