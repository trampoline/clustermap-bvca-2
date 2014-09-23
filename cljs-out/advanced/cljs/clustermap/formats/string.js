// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__39169){var vec__39171 = p__39169;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39171,(0),null);if((n === (1)))
{return word;
} else
{var or__3558__auto__ = irreg;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__39169 = null;if (arguments.length > 2) {
  p__39169 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__39169);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__39172){
var n = cljs.core.first(arglist__39172);
arglist__39172 = cljs.core.next(arglist__39172);
var word = cljs.core.first(arglist__39172);
var p__39169 = cljs.core.rest(arglist__39172);
return pluralize__delegate(n,word,p__39169);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
