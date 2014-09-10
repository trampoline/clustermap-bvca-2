// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__26561){var vec__26563 = p__26561;var irreg = cljs.core.nth.call(null,vec__26563,(0),null);if((n === (1)))
{return word;
} else
{var or__3541__auto__ = irreg;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__26561 = null;if (arguments.length > 2) {
  p__26561 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__26561);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__26564){
var n = cljs.core.first(arglist__26564);
arglist__26564 = cljs.core.next(arglist__26564);
var word = cljs.core.first(arglist__26564);
var p__26561 = cljs.core.rest(arglist__26564);
return pluralize__delegate(n,word,p__26561);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
