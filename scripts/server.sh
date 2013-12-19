#!/bin/bash

cd `dirname $0`/..
rm -rf public/*

node_modules/.bin/brunch watch --server
