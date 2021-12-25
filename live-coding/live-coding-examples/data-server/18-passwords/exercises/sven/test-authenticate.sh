#!/usr/bin/env bash

echo "success?"
node 60-pepper-bcrypt.js data/60-users-bcrypt-peppered.json alice abc
echo "failed?"
node 60-pepper-bcrypt.js data/60-users-bcrypt-peppered.json alice WRONG_PASS

echo "success?"
node 60-pepper-bcrypt.js data/60-users-bcrypt-peppered.json bob 123
echo "failed?"
node 60-pepper-bcrypt.js data/60-users-bcrypt-peppered.json bob WRONG_PASS
