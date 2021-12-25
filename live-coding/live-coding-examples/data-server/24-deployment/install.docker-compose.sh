#!/usr/bin/env bash

# Author: Thomas Hofmann<thomas@savoy-truffle.de>

VERSION=1.29.2
OS=`uname -s`
ARCH=`uname -m`

sudo curl -L "https://github.com/docker/compose/releases/download/$VERSION/docker-compose-$OS-$ARCH" -o /usr/local/bin/docker-compose \
&& sudo chmod a+x /usr/local/bin/docker-compose

echo "The version-number of the latest release can be determined on:"
echo "https://github.com/docker/compose/releases"
