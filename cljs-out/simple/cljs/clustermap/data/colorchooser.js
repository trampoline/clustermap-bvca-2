// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.data.colorchooser');
goog.require('cljs.core');
goog.require('clustermap.data.colorbrewer');
goog.require('clustermap.data.colorbrewer');
goog.require('clustermap.data.picker');
goog.require('clustermap.data.picker');
clustermap.data.colorchooser.linear_scale = (function linear_scale(min,max,steps){var step = ((max - min) / steps);return cljs.core.map.call(null,((function (step){
return (function (i){return (min + (i * step));
});})(step))
,cljs.core.range.call(null,(1),steps));
});
clustermap.data.colorchooser.log_scale = (function log_scale(min,max,steps){var translation = ((1) - min);var log_min = Math.log.call(null,min);var log_max = Math.log.call(null,(max + translation));var log_linear_scale = clustermap.data.colorchooser.linear_scale.call(null,(1),log_max,steps);return cljs.core.map.call(null,((function (translation,log_min,log_max,log_linear_scale){
return (function (n){return (Math.pow.call(null,Math.E,n) - translation);
});})(translation,log_min,log_max,log_linear_scale))
,log_linear_scale);
});
clustermap.data.colorchooser.choose_from_scheme = (function choose_from_scheme(scheme,thresholds,value){var scheme_thresholds = cljs.core.map.call(null,cljs.core.vector,thresholds,scheme);var chosen = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (scheme_thresholds){
return (function (p__25843){var vec__25844 = p__25843;var t = cljs.core.nth.call(null,vec__25844,(0),null);var i = cljs.core.nth.call(null,vec__25844,(1),null);return (value <= t);
});})(scheme_thresholds))
,scheme_thresholds)));var or__3543__auto__ = chosen;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.last.call(null,scheme);
}
});
/**
* return a map of {key-value => colours}
*/
clustermap.data.colorchooser.choose = (function choose(color_scheme_spec,scale,key,variable,data){var color_scheme = cljs.core.get_in.call(null,clustermap.data.colorbrewer.schemes,color_scheme_spec);var col_count = cljs.core.count.call(null,color_scheme);var values = clustermap.data.picker.pick_variable.call(null,variable,data);var min_value = cljs.core.apply.call(null,cljs.core.min,values);var max_value = cljs.core.apply.call(null,cljs.core.max,values);var thresholds = ((cljs.core._EQ_.call(null,scale,new cljs.core.Keyword(null,"log","log",-1595516004)))?clustermap.data.colorchooser.log_scale.call(null,min_value,max_value,col_count):clustermap.data.colorchooser.linear_scale.call(null,min_value,max_value,col_count));var chooser = cljs.core.partial.call(null,clustermap.data.colorchooser.choose_from_scheme,color_scheme,thresholds);var value_colors = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (color_scheme,col_count,values,min_value,max_value,thresholds,chooser){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,r,key),chooser.call(null,cljs.core.get.call(null,r,variable))], null);
});})(color_scheme,col_count,values,min_value,max_value,thresholds,chooser))
,data));var threshold_colors = cljs.core.map.call(null,cljs.core.vector,cljs.core.concat.call(null,thresholds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_value], null)),color_scheme);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [threshold_colors,value_colors], null);
});
