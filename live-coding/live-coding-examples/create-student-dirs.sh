#!/usr/bin/env bash
set -e

dir_target=${1?'error: parameter TARGET_DIR missing'}
dir_source=${2} # optional: dir_source will be copied recursively into each student directory

for student in _solution ahmad alex christan cüneyt frank frieder galip julia kateryna lamia rigina sven yasir zeynep; do
    dir_student="$dir_target/$student"

    mkdir -p "$dir_student"
    touch "$dir_student/.keep"

    if [[ $dir_source && -e $dir_source ]]; then
        cp -a "$dir_source" "$dir_student"
    fi

done
