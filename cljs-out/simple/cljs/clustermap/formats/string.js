// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__32848){var vec__32850 = p__32848;var irreg = cljs.core.nth.call(null,vec__32850,(0),null);if((n === (1)))
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
var p__32848 = null;if (arguments.length > 2) {
  p__32848 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__32848);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__32851){
var n = cljs.core.first(arglist__32851);
arglist__32851 = cljs.core.next(arglist__32851);
var word = cljs.core.first(arglist__32851);
var p__32848 = cljs.core.rest(arglist__32851);
return pluralize__delegate(n,word,p__32848);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
