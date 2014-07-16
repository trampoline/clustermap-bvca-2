// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__25660){var vec__25662 = p__25660;var irreg = cljs.core.nth.call(null,vec__25662,(0),null);if((n === (1)))
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
var p__25660 = null;if (arguments.length > 2) {
  p__25660 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__25660);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__25663){
var n = cljs.core.first(arglist__25663);
arglist__25663 = cljs.core.next(arglist__25663);
var word = cljs.core.first(arglist__25663);
var p__25660 = cljs.core.rest(arglist__25663);
return pluralize__delegate(n,word,p__25660);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
