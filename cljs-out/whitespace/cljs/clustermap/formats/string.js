// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__14521){var vec__14523 = p__14521;var irreg = cljs.core.nth.call(null,vec__14523,(0),null);if((n === (1)))
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
var p__14521 = null;if (arguments.length > 2) {
  p__14521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__14521);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__14524){
var n = cljs.core.first(arglist__14524);
arglist__14524 = cljs.core.next(arglist__14524);
var word = cljs.core.first(arglist__14524);
var p__14521 = cljs.core.rest(arglist__14524);
return pluralize__delegate(n,word,p__14521);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
