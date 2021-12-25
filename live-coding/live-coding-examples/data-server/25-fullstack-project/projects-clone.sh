#!/usr/bin/env bash

HOST="dci.github.com"

cd $(dirname $0)

mkdir -p projects

# Alex und Sven
git clone $HOST:LexLuthor-official/freibier.git projects/alex-sven

# Zeynep und Rigina
git clone $HOST:Riginana/DCI_Projects.git projects/zeynep-rigina

# Ahmad und Frank
git clone $HOST:ahmadaflak8/urlshortener.git projects/ahmad-frank

# Christian und Frieder
git clone $HOST:Nakrankh/urlShortener.git projects/christian-frieder

# Julia und Kateryna
git clone $HOST:julia-lein/urlshortener.git projects/julia-kateryna

# Yasir und Cüneyt
git clone $HOST:yykoca/url_shortener.git projects/yasir-cüneyt

# Lamia und Galip
git clone $HOST:Lamia4/howmanyclicks.git projects/lamia-galip
