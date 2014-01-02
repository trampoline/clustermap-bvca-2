#!/bin/bash

PUBLIC_DIR=`dirname $0`/../public
mkdir $PUBLIC_DIR
cd $PUBLIC_DIR

for F in ../cljs-out/* ; do
  ln -s $F .
done
