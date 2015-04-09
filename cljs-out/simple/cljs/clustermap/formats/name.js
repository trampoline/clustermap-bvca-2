// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.name');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* if a name is 'surname, forename' reverse to 'forename surname'
*/
clustermap.formats.name.reverse_name = (function reverse_name(n){var G__13848 = n;var G__13848__$1 = (((G__13848 == null))?null:clojure.string.split.call(null,G__13848,/,/));var G__13848__$2 = (((G__13848__$1 == null))?null:cljs.core.reverse.call(null,G__13848__$1));var G__13848__$3 = (((G__13848__$2 == null))?null:((function (G__13848,G__13848__$1,G__13848__$2){
return (function (p1__13846_SHARP_){return clojure.string.join.call(null," ",p1__13846_SHARP_);
});})(G__13848,G__13848__$1,G__13848__$2))
.call(null,G__13848__$2));return G__13848__$3;
});
