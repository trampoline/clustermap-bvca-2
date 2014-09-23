// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.money');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
clustermap.formats.money.money_suffixes = new cljs.core.PersistentArrayMap(null, 5, [(0),"",(3),"k",(6),"m",(9),"bn",(12),"tn"], null);
/**
* take an exponent and return a suffix
*/
clustermap.formats.money.money_suffix = (function money_suffix(exp){var or__3558__auto__ = clustermap.formats.money.money_suffixes.call(null,exp);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return ("x10^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp));
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
var readable__delegate = function (n,p__51713){var map__51716 = p__51713;var map__51716__$1 = ((cljs.core.seq_QMARK_.call(null,map__51716))?cljs.core.apply.call(null,cljs.core.hash_map,map__51716):map__51716);var default$ = cljs.core.get.call(null,map__51716__$1,new cljs.core.Keyword(null,"default","default",-1987822328));var plus_QMARK_ = cljs.core.get.call(null,map__51716__$1,new cljs.core.Keyword(null,"plus?","plus?",-3051327));var curr = cljs.core.get.call(null,map__51716__$1,new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3");var sf = cljs.core.get.call(null,map__51716__$1,new cljs.core.Keyword(null,"sf","sf",-1949491738));if(cljs.core.truth_(n))
{var vec__51717 = clustermap.formats.number.eng_notation.call(null,n,new cljs.core.Keyword(null,"sf","sf",-1949491738),sf);var sig = cljs.core.nth.call(null,vec__51717,(0),null);var exp = cljs.core.nth.call(null,vec__51717,(1),null);var abs_sig = Math.abs(sig);var suffix = clustermap.formats.money.money_suffix.call(null,exp);return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3546__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3546__auto__))
{return (sig > (0));
} else
{return and__3546__auto__;
}
})())?"+":(((sig < (0)))?"-":null)),curr,abs_sig,suffix], null)));
} else
{return default$;
}
};
var readable = function (n,var_args){
var p__51713 = null;if (arguments.length > 1) {
  p__51713 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return readable__delegate.call(this,n,p__51713);};
readable.cljs$lang$maxFixedArity = 1;
readable.cljs$lang$applyTo = (function (arglist__51718){
var n = cljs.core.first(arglist__51718);
var p__51713 = cljs.core.rest(arglist__51718);
return readable__delegate(n,p__51713);
});
readable.cljs$core$IFn$_invoke$arity$variadic = readable__delegate;
return readable;
})()
;
clustermap.formats.money.fmoney = clustermap.formats.money.readable;

//# sourceMappingURL=money.js.map