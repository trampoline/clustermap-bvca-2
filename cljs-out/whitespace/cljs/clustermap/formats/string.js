// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__13829){var vec__13831 = p__13829;var irreg = cljs.core.nth.call(null,vec__13831,(0),null);if((n === (1)))
{return word;
} else
{var or__3543__auto__ = irreg;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__13829 = null;if (arguments.length > 2) {
  p__13829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__13829);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__13832){
var n = cljs.core.first(arglist__13832);
arglist__13832 = cljs.core.next(arglist__13832);
var word = cljs.core.first(arglist__13832);
var p__13829 = cljs.core.rest(arglist__13832);
return pluralize__delegate(n,word,p__13829);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
