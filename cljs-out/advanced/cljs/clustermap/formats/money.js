// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.money');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
clustermap.formats.money.money_suffixes = new cljs.core.PersistentArrayMap(null, 5, [0,"",3,"k",6,"m",9,"bn",12,"tn"], null);
/**
* take an exponent and return a suffix
*/
clustermap.formats.money.money_suffix = (function money_suffix(exp){var or__3406__auto__ = (clustermap.formats.money.money_suffixes.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.money.money_suffixes.cljs$core$IFn$_invoke$arity$1(exp) : clustermap.formats.money.money_suffixes.call(null,exp));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return [cljs.core.str("x10^"),cljs.core.str(exp)].join('');
}
});
/**
* format human readable money amount
* :sf - number of significant figures
* :curr - currency symbol
* :plus? - use a plus prefix for +ve amounts
* :default - default result when (nil? n)
* @param {...*} var_args
*/
clustermap.formats.money.readable = (function() { 
var readable__delegate = function (n,p__21971){var map__21974 = p__21971;var map__21974__$1 = ((cljs.core.seq_QMARK_(map__21974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21974):map__21974);var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21974__$1,cljs.core.constant$keyword$194);var plus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21974__$1,cljs.core.constant$keyword$260);var curr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21974__$1,cljs.core.constant$keyword$262,"\u00A3");var sf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21974__$1,cljs.core.constant$keyword$259);if(cljs.core.truth_(n))
{var vec__21975 = clustermap.formats.number.eng_notation.cljs$core$IFn$_invoke$arity$variadic(n,cljs.core.array_seq([cljs.core.constant$keyword$259,sf], 0));var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21975,0,null);var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21975,1,null);var abs_sig = Math.abs(sig);var suffix = clustermap.formats.money.money_suffix(exp);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3394__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3394__auto__))
{return (sig > 0);
} else
{return and__3394__auto__;
}
})())?"+":(((sig < 0))?"-":null)),curr,abs_sig,suffix], null)));
} else
{return default$;
}
};
var readable = function (n,var_args){
var p__21971 = null;if (arguments.length > 1) {
  p__21971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return readable__delegate.call(this,n,p__21971);};
readable.cljs$lang$maxFixedArity = 1;
readable.cljs$lang$applyTo = (function (arglist__21976){
var n = cljs.core.first(arglist__21976);
var p__21971 = cljs.core.rest(arglist__21976);
return readable__delegate(n,p__21971);
});
readable.cljs$core$IFn$_invoke$arity$variadic = readable__delegate;
return readable;
})()
;
clustermap.formats.money.fmoney = clustermap.formats.money.readable;
