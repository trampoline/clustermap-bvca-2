#!/bin/bash

cd `dirname $0`/..

rm -rf public/*

scripts/softlink_cljs.sh whitespace
node_modules/.bin/brunch build
