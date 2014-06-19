// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__46476){var vec__46478 = p__46476;var irreg = cljs.core.nth.call(null,vec__46478,0,null);if((n === 1))
{return word;
} else
{var or__3539__auto__ = irreg;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+"s");
}
}
};
var pluralize = function (n,word,var_args){
var p__46476 = null;if (arguments.length > 2) {
  p__46476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__46476);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__46479){
var n = cljs.core.first(arglist__46479);
arglist__46479 = cljs.core.next(arglist__46479);
var word = cljs.core.first(arglist__46479);
var p__46476 = cljs.core.rest(arglist__46479);
return pluralize__delegate(n,word,p__46476);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
