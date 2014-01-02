#!/bin/bash

if [ "$1" = "" ] ; then
  echo "usage: $0 <cljs-build-id>"
  exit 1
fi

PUBLIC_DIR=`dirname $0`/../public
mkdir -p $PUBLIC_DIR
cd $PUBLIC_DIR

for F in ../cljs-out/$1/* ; do
  rm -f `basename $F`
  ln -s $F .
done
