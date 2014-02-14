// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__22819){var vec__22821 = p__22819;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22821,0,null);if((n === 1))
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
var p__22819 = null;if (arguments.length > 2) {
  p__22819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__22819);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__22822){
var n = cljs.core.first(arglist__22822);
arglist__22822 = cljs.core.next(arglist__22822);
var word = cljs.core.first(arglist__22822);
var p__22819 = cljs.core.rest(arglist__22822);
return pluralize__delegate(n,word,p__22819);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
