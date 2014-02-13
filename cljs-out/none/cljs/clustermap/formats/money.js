// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.money');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
clustermap.formats.money.money_suffixes = new cljs.core.PersistentArrayMap(null, 5, [0,"",3,"k",6,"m",9,"bn",12,"tn"], null);
/**
* take an exponent and return a suffix
*/
clustermap.formats.money.money_suffix = (function money_suffix(exp){var or__3406__auto__ = clustermap.formats.money.money_suffixes.call(null,exp);if(cljs.core.truth_(or__3406__auto__))
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
var readable__delegate = function (n,p__12123){var map__12126 = p__12123;var map__12126__$1 = ((cljs.core.seq_QMARK_.call(null,map__12126))?cljs.core.apply.call(null,cljs.core.hash_map,map__12126):map__12126);var default$ = cljs.core.get.call(null,map__12126__$1,new cljs.core.Keyword(null,"default","default",2558708147));var plus_QMARK_ = cljs.core.get.call(null,map__12126__$1,new cljs.core.Keyword(null,"plus?","plus?",1120672087));var curr = cljs.core.get.call(null,map__12126__$1,new cljs.core.Keyword(null,"curr","curr",1016969636),"\u00A3");var sf = cljs.core.get.call(null,map__12126__$1,new cljs.core.Keyword(null,"sf","sf",1013907909));if(cljs.core.truth_(n))
{var vec__12127 = clustermap.formats.number.eng_notation.call(null,n,new cljs.core.Keyword(null,"sf","sf",1013907909),sf);var sig = cljs.core.nth.call(null,vec__12127,0,null);var exp = cljs.core.nth.call(null,vec__12127,1,null);var abs_sig = Math.abs(sig);var suffix = clustermap.formats.money.money_suffix.call(null,exp);return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3394__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3394__auto__))
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
var p__12123 = null;if (arguments.length > 1) {
  p__12123 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return readable__delegate.call(this,n,p__12123);};
readable.cljs$lang$maxFixedArity = 1;
readable.cljs$lang$applyTo = (function (arglist__12128){
var n = cljs.core.first(arglist__12128);
var p__12123 = cljs.core.rest(arglist__12128);
return readable__delegate(n,p__12123);
});
readable.cljs$core$IFn$_invoke$arity$variadic = readable__delegate;
return readable;
})()
;
clustermap.formats.money.fmoney = clustermap.formats.money.readable;

//# sourceMappingURL=money.js.map