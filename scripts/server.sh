#!/bin/bash

cd `dirname $0`/..
rm -rf public/*

scripts/softlink_cljs.sh none
node_modules/.bin/brunch watch --server
