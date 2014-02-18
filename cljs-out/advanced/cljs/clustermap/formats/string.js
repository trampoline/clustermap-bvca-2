// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__23114){var vec__23116 = p__23114;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23116,0,null);if((n === 1))
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
var p__23114 = null;if (arguments.length > 2) {
  p__23114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__23114);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__23117){
var n = cljs.core.first(arglist__23117);
arglist__23117 = cljs.core.next(arglist__23117);
var word = cljs.core.first(arglist__23117);
var p__23114 = cljs.core.rest(arglist__23117);
return pluralize__delegate(n,word,p__23114);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
