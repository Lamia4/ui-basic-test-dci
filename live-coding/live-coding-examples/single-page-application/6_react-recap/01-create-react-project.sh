#!/usr/bin/env bash
set -e

cd $(dirname $0)

if [ ! $1 ]; then
    >&2 echo "error: parameter PROJECT_NAME missing"
    exit 1
fi

PROJECT_NAME="$1"

echo "creating new react-project '$PROJECT_NAME'"
npx create-react-app "$PROJECT_NAME"
