// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__34881){var vec__34883 = p__34881;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34883,0,null);if((n === 1))
{return word;
} else
{var or__3441__auto__ = irreg;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return [cljs.core.str(word),cljs.core.str("s")].join('');
}
}
};
var pluralize = function (n,word,var_args){
var p__34881 = null;if (arguments.length > 2) {
  p__34881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__34881);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__34884){
var n = cljs.core.first(arglist__34884);
arglist__34884 = cljs.core.next(arglist__34884);
var word = cljs.core.first(arglist__34884);
var p__34881 = cljs.core.rest(arglist__34884);
return pluralize__delegate(n,word,p__34881);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
