// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.number');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
clustermap.formats.number.round_decimal = (function round_decimal(n,dec_places){if(cljs.core.truth_(dec_places))
{return (Math.round((n * Math.pow(10,dec_places))) / Math.pow(10,dec_places));
} else
{return n;
}
});
clustermap.formats.number.prefix_sign = (function prefix_sign(n_str,n,plus_QMARK_){if((n < 0))
{return [cljs.core.str("-"),cljs.core.str(n_str)].join('');
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = plus_QMARK_;if(cljs.core.truth_(and__3394__auto__))
{return (n > 0);
} else
{return and__3394__auto__;
}
})()))
{return [cljs.core.str("+"),cljs.core.str(n_str)].join('');
} else
{if(true)
{return n_str;
} else
{return null;
}
}
}
});
clustermap.formats.number.split_thousands = (function split_thousands(n_str){return clojure.string.join.call(null,",",cljs.core.map.call(null,(function (p1__34506_SHARP_){return cljs.core.apply.call(null,cljs.core.str,p1__34506_SHARP_);
}),cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.reverse,cljs.core.partition.call(null,3,3,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,n_str))))));
});
/**
* splits a number into a [coefficient, exponent] pair, where
* exponent is a multiple of 3
* :sf : # of significant figures
* @param {...*} var_args
*/
clustermap.formats.number.eng_notation = (function() { 
var eng_notation__delegate = function (n,p__34507){var map__34512 = p__34507;var map__34512__$1 = ((cljs.core.seq_QMARK_.call(null,map__34512))?cljs.core.apply.call(null,cljs.core.hash_map,map__34512):map__34512);var sf = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"sf","sf",1013907909));if(cljs.core.truth_(n))
{var sign = (((n > 0))?1:((cljs.core._EQ_.call(null,n,0))?0:(((n < 0))?-1:null)));var abs_n = Math.abs(n);var vec__34513 = [cljs.core.str(abs_n)].join('').split(".");var i = cljs.core.nth.call(null,vec__34513,0,null);var d = cljs.core.nth.call(null,vec__34513,1,null);var exp = (((abs_n >= 1))?(3 * (((cljs.core.count.call(null,i) - 1) / 3) | 0)):(((abs_n > 0))?(-3 * (((3 + cljs.core.count.call(null,cljs.core.take_while.call(null,((function (sign,abs_n,vec__34513,i,d){
return (function (c){return cljs.core._EQ_.call(null,c,"0");
});})(sign,abs_n,vec__34513,i,d))
,d))) / 3) | 0)):((true)?0:null)));var usig = (abs_n * Math.pow(10,(-1 * exp)));var vec__34514 = (cljs.core.truth_(sf)?[cljs.core.str(usig)].join('').split("."):null);var usig_i = cljs.core.nth.call(null,vec__34514,0,null);var usig_d = cljs.core.nth.call(null,vec__34514,1,null);var sigmult = (cljs.core.truth_((function (){var and__3394__auto__ = sf;if(cljs.core.truth_(and__3394__auto__))
{return (usig > 0);
} else
{return and__3394__auto__;
}
})())?Math.pow(10,(cljs.core.count.call(null,usig_i) - sf)):null);var round_usig_str = (cljs.core.truth_(sigmult)?[cljs.core.str((sigmult * Math.round((usig / sigmult))))].join(''):null);var vec__34515 = (cljs.core.truth_(round_usig_str)?round_usig_str.split("."):null);var round_usig_i = cljs.core.nth.call(null,vec__34515,0,null);var round_usig_d = cljs.core.nth.call(null,vec__34515,1,null);var trunc_usig_str = (cljs.core.truth_(round_usig_str)?cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,sf,round_usig_i),cljs.core.repeat.call(null,(cljs.core.count.call(null,round_usig_i) - sf),"0"),(((cljs.core.count.call(null,round_usig_d) > 0))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",cljs.core.take.call(null,(sf - cljs.core.count.call(null,round_usig_i)),round_usig_d)], null):null)], null))))):null);var trunc_usig = (cljs.core.truth_(trunc_usig_str)?parseFloat(trunc_usig_str):null);var sig = (sign * (function (){var or__3406__auto__ = trunc_usig;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return usig;
}
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,exp], null);
} else
{return null;
}
};
var eng_notation = function (n,var_args){
var p__34507 = null;if (arguments.length > 1) {
  p__34507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return eng_notation__delegate.call(this,n,p__34507);};
eng_notation.cljs$lang$maxFixedArity = 1;
eng_notation.cljs$lang$applyTo = (function (arglist__34516){
var n = cljs.core.first(arglist__34516);
var p__34507 = cljs.core.rest(arglist__34516);
return eng_notation__delegate(n,p__34507);
});
eng_notation.cljs$core$IFn$_invoke$arity$variadic = eng_notation__delegate;
return eng_notation;
})()
;
/**
* format a human readable number, with commas between groups of thousands
* :dec - number of decimal places
* :plus? - include a leading + for positive numbers
* :default - default result when (nil? n)
* @param {...*} var_args
*/
clustermap.formats.number.readable = (function() { 
var readable__delegate = function (n,p__34517){var map__34520 = p__34517;var map__34520__$1 = ((cljs.core.seq_QMARK_.call(null,map__34520))?cljs.core.apply.call(null,cljs.core.hash_map,map__34520):map__34520);var default$ = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"default","default",2558708147));var plus_QMARK_ = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"plus?","plus?",1120672087));var dec = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"dec","dec",1014003572));if(cljs.core.truth_(n))
{var abs_n = Math.abs(n);var round_n = clustermap.formats.number.round_decimal.call(null,abs_n,dec);var round_n_str = [cljs.core.str(round_n)].join('');var vec__34521 = clojure.string.split.call(null,round_n_str,/\./);var i_str = cljs.core.nth.call(null,vec__34521,0,null);var d_str = cljs.core.nth.call(null,vec__34521,1,null);var t_str = clustermap.formats.number.split_thousands.call(null,i_str);var t_dec_str = clojure.string.join.call(null,".",cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_str,d_str], null)));return clustermap.formats.number.prefix_sign.call(null,t_dec_str,n,plus_QMARK_);
} else
{return default$;
}
};
var readable = function (n,var_args){
var p__34517 = null;if (arguments.length > 1) {
  p__34517 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return readable__delegate.call(this,n,p__34517);};
readable.cljs$lang$maxFixedArity = 1;
readable.cljs$lang$applyTo = (function (arglist__34522){
var n = cljs.core.first(arglist__34522);
var p__34517 = cljs.core.rest(arglist__34522);
return readable__delegate(n,p__34517);
});
readable.cljs$core$IFn$_invoke$arity$variadic = readable__delegate;
return readable;
})()
;
clustermap.formats.number.fnum = clustermap.formats.number.readable;
