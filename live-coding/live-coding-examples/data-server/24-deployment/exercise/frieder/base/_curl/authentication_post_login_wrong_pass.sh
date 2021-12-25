
curl -X POST -H 'Content-Type: application/json' -i http://localhost:3345/authentication --data '{
  "email": "alice@example.com",
  "password": "FALSCHES PASSWORT"
}'
