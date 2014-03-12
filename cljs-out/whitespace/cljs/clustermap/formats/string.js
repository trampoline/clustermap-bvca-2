// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__45870){var vec__45872 = p__45870;var irreg = cljs.core.nth.call(null,vec__45872,0,null);if((n === 1))
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
var p__45870 = null;if (arguments.length > 2) {
  p__45870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__45870);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__45873){
var n = cljs.core.first(arglist__45873);
arglist__45873 = cljs.core.next(arglist__45873);
var word = cljs.core.first(arglist__45873);
var p__45870 = cljs.core.rest(arglist__45873);
return pluralize__delegate(n,word,p__45870);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
