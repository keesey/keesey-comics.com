#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <version>"
    exit 1
fi

VERSION=$1

# Run yarn bump with the version
towncrier build --yes --version $VERSION

# Run yarn version with the version
yarn version --new-version $VERSION
