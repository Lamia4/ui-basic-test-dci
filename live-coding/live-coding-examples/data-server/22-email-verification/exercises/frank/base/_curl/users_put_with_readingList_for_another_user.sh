#!/usr/bin/env bash

USER_ID="2bfd5fdb8e7d97c422b1889f"

ARTICLE_1="9d01fae952ada36c6fbdfcfb"
ARTICLE_3="1fd087b57452ef5d26bf0d31"
ARTICLE_4="1d6bb43ce8d98ef149e0dceb"

curl -X PUT -H 'Content-Type: application/json' \
-i http://localhost:3345/users/$USER_ID \
--data "{
  \"readingList\": [
    {\"read\": 0, \"articleId\": \"$ARTICLE_1\"},
    {\"read\": 0, \"articleId\": \"$ARTICLE_3\"},
    {\"read\": 0, \"articleId\": \"$ARTICLE_4\"}
  ]
}"
