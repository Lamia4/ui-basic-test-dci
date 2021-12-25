#!/usr/bin/env bash

USER_ID="b3d03ccb5f3ecbc613cf5670"
ARTICLE_ID="9d01fae952ada36c6fbdfcfb"
curl -X PATCH -i http://localhost:3345/users/$USER_ID/readinglist/$ARTICLE_ID
