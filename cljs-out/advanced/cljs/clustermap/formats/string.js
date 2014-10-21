// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__72591){var vec__72593 = p__72591;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72593,(0),null);if((n === (1)))
{return word;
} else
{var or__3637__auto__ = irreg;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__72591 = null;if (arguments.length > 2) {
  p__72591 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__72591);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__72594){
var n = cljs.core.first(arglist__72594);
arglist__72594 = cljs.core.next(arglist__72594);
var word = cljs.core.first(arglist__72594);
var p__72591 = cljs.core.rest(arglist__72594);
return pluralize__delegate(n,word,p__72591);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
