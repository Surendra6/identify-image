#!/usr/bin/env sh
set -e

npm run build

cd dist

git init 
git add -A
git commit -m "Deploy Identify Image"
git push -f git@github.com:Surendra6/identify-image.git master:gh-pages

cd -