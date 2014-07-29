// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__38570){var vec__38572 = p__38570;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38572,(0),null);if((n === (1)))
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
var p__38570 = null;if (arguments.length > 2) {
  p__38570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__38570);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__38573){
var n = cljs.core.first(arglist__38573);
arglist__38573 = cljs.core.next(arglist__38573);
var word = cljs.core.first(arglist__38573);
var p__38570 = cljs.core.rest(arglist__38573);
return pluralize__delegate(n,word,p__38570);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
