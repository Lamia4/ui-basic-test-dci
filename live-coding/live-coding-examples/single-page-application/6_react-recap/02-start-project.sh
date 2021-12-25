#!/usr/bin/env bash
set -e

cd $(dirname $0)

if [ ! $1 ]; then
    >&2 echo "error: parameter PROJECT_NAME missing"
    exit 1
fi

PROJECT_NAME="$1"

echo "starting project '$PROJECT_NAME'"
cd "$PROJECT_NAME"
yarn start
