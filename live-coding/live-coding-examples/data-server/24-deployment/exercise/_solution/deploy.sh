#!/usr/bin/env bash

cd $(dirname $0)

export COMPOSE_DOCKER_CLI_BUILD=0           # to workaround the problem occuring when executing the COPY in the Dockerfile
export DOCKER_HOST="ssh://online-magazine"  # target host, here "strongfoo" is configured in the ~/.ssh/config
docker-compose up -d --build                # the actual deployment
