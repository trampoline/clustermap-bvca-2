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
* @param {...*} var_args
*/
clustermap.formats.money.readable = (function() { 
var readable__delegate = function (n,p__10692){var map__10695 = p__10692;var map__10695__$1 = ((cljs.core.seq_QMARK_.call(null,map__10695))?cljs.core.apply.call(null,cljs.core.hash_map,map__10695):map__10695);var plus_QMARK_ = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"plus?","plus?",1120672087));var curr = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"curr","curr",1016969636),"\u00A3");var sf = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"sf","sf",1013907909));var vec__10696 = clustermap.formats.number.eng_notation.call(null,n,new cljs.core.Keyword(null,"sf","sf",1013907909),sf);var sig = cljs.core.nth.call(null,vec__10696,0,null);var exp = cljs.core.nth.call(null,vec__10696,1,null);var abs_sig = Math.abs(sig);var suffix = clustermap.formats.money.money_suffix.call(null,exp);return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__3394__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3394__auto__))
{return (sig > 0);
} else
{return and__3394__auto__;
}
})())?"+":(((sig < 0))?"-":null)),curr,abs_sig,suffix], null)));
};
var readable = function (n,var_args){
var p__10692 = null;if (arguments.length > 1) {
  p__10692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return readable__delegate.call(this,n,p__10692);};
readable.cljs$lang$maxFixedArity = 1;
readable.cljs$lang$applyTo = (function (arglist__10697){
var n = cljs.core.first(arglist__10697);
var p__10692 = cljs.core.rest(arglist__10697);
return readable__delegate(n,p__10692);
});
readable.cljs$core$IFn$_invoke$arity$variadic = readable__delegate;
return readable;
})()
;

//# sourceMappingURL=money.js.map