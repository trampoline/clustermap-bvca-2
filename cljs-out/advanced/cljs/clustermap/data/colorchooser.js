// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.data.colorchooser');
goog.require('cljs.core');
goog.require('clustermap.data.colorbrewer');
goog.require('clustermap.data.colorbrewer');
goog.require('clustermap.data.picker');
goog.require('clustermap.data.picker');
clustermap.data.colorchooser.linear_scale = (function linear_scale(min,max,steps){var step = ((max - min) / steps);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (i){return (min + (i * step));
});})(step))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),steps));
});
clustermap.data.colorchooser.log_scale = (function log_scale(min,max,steps){var translation = ((1) - min);var log_min = (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1(min) : Math.log.call(null,min));var log_max = (Math.log.cljs$core$IFn$_invoke$arity$1 ? Math.log.cljs$core$IFn$_invoke$arity$1((max + translation)) : Math.log.call(null,(max + translation)));var log_linear_scale = clustermap.data.colorchooser.linear_scale((1),log_max,steps);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (translation,log_min,log_max,log_linear_scale){
return (function (n){return ((Math.pow.cljs$core$IFn$_invoke$arity$2 ? Math.pow.cljs$core$IFn$_invoke$arity$2(Math.E,n) : Math.pow.call(null,Math.E,n)) - translation);
});})(translation,log_min,log_max,log_linear_scale))
,log_linear_scale);
});
clustermap.data.colorchooser.choose_from_scheme = (function choose_from_scheme(scheme,thresholds,value){var scheme_thresholds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,thresholds,scheme);var chosen = cljs.core.last(cljs.core.first(cljs.core.filter(((function (scheme_thresholds){
return (function (p__39718){var vec__39719 = p__39718;var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39719,(0),null);var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39719,(1),null);return (value <= t);
});})(scheme_thresholds))
,scheme_thresholds)));var or__3543__auto__ = chosen;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.last(scheme);
}
});
/**
* return a map of {key-value => colours}
*/
clustermap.data.colorchooser.choose = (function choose(color_scheme_spec,scale,key,variable,data){var color_scheme = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clustermap.data.colorbrewer.schemes,color_scheme_spec);var col_count = cljs.core.count(color_scheme);var values = clustermap.data.picker.pick_variable(variable,data);var min_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,values);var max_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,values);var thresholds = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scale,cljs.core.constant$keyword$1036))?clustermap.data.colorchooser.log_scale(min_value,max_value,col_count):clustermap.data.colorchooser.linear_scale(min_value,max_value,col_count));var chooser = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.data.colorchooser.choose_from_scheme,color_scheme,thresholds);var value_colors = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (color_scheme,col_count,values,min_value,max_value,thresholds,chooser){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,key),(chooser.cljs$core$IFn$_invoke$arity$1 ? chooser.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,variable)) : chooser.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,variable)))], null);
});})(color_scheme,col_count,values,min_value,max_value,thresholds,chooser))
,data));var threshold_colors = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(thresholds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_value], null)),color_scheme);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threshold_colors,value_colors], null);
});
