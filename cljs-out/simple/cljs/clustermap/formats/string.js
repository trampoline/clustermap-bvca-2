// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__32854){var vec__32856 = p__32854;var irreg = cljs.core.nth.call(null,vec__32856,(0),null);if((n === (1)))
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
var p__32854 = null;if (arguments.length > 2) {
  p__32854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__32854);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__32857){
var n = cljs.core.first(arglist__32857);
arglist__32857 = cljs.core.next(arglist__32857);
var word = cljs.core.first(arglist__32857);
var p__32854 = cljs.core.rest(arglist__32857);
return pluralize__delegate(n,word,p__32854);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
