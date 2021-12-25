#!/usr/bin/env bash

cd $(dirname $0)

for project in ./projects/*; do
    echo "pulling $project"

    cd $project
        git pull
    cd -
done
