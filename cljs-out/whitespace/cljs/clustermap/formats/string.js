// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__11502){var vec__11504 = p__11502;var irreg = cljs.core.nth.call(null,vec__11504,0,null);if((n === 1))
{return word;
} else
{var or__3406__auto__ = irreg;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return [cljs.core.str(word),cljs.core.str("s")].join('');
}
}
};
var pluralize = function (n,word,var_args){
var p__11502 = null;if (arguments.length > 2) {
  p__11502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__11502);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__11505){
var n = cljs.core.first(arglist__11505);
arglist__11505 = cljs.core.next(arglist__11505);
var word = cljs.core.first(arglist__11505);
var p__11502 = cljs.core.rest(arglist__11505);
return pluralize__delegate(n,word,p__11502);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
