// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__21115){var vec__21117 = p__21115;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21117,0,null);if((n === 1))
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
var p__21115 = null;if (arguments.length > 2) {
  p__21115 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__21115);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__21118){
var n = cljs.core.first(arglist__21118);
arglist__21118 = cljs.core.next(arglist__21118);
var word = cljs.core.first(arglist__21118);
var p__21115 = cljs.core.rest(arglist__21118);
return pluralize__delegate(n,word,p__21115);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
