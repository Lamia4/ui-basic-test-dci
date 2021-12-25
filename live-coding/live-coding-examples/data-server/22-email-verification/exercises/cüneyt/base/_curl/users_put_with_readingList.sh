#!/usr/bin/env bash

USER_ID="e19237ccfd1bcb3aaec33e7d"
USER_NAME="Wendell Cronin"

ARTICLE_1="9d01fae952ada36c6fbdfcfb"
ARTICLE_2="be0363ab949dca9dfe02beb4"
ARTICLE_3="1fd087b57452ef5d26bf0d31"
ARTICLE_4="1d6bb43ce8d98ef149e0dceb"

curl -X PUT -H 'Content-Type: application/json' \
-i http://localhost:3345/users/$USER_ID \
--data "{
  \"name\": \"$USER_NAME\",
  \"readingList\": [
    {\"read\": 0, \"articleId\": \"$ARTICLE_1\"},
    {\"read\": 0, \"articleId\": \"$ARTICLE_2\"},
    {\"read\": 0, \"articleId\": \"$ARTICLE_3\"},
    {\"read\": 0, \"articleId\": \"$ARTICLE_4\"}
  ]
}"
