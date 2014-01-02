// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.map');
goog.require('cljs.core');
goog.require('purnam.cljs');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('purnam.cljs');
goog.require('jayq.core');
clustermap.map.map = cljs.core.atom.call(null,null);
clustermap.map.create_map = (function create_map(){var factory_fn = L.mapbox.map;var map = factory_fn.call(null,"map","mccraigmccraig.map-gqkcbi1g");map.fitBounds([[[61,2.5],[48.7,-11.5]]],new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",[[0,0]],"paddingBottomRight",[[0,0]]], null));
return map;
});
/**
* @param {...*} var_args
*/
clustermap.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (map,all_bounds){var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,fb));return map.fitBounds(super_bounds);
};
var pan_to_show = function (map,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,map,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__29074){
var map = cljs.core.first(arglist__29074);
var all_bounds = cljs.core.rest(arglist__29074);
return pan_to_show__delegate(map,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.map.init = (function init(){return cljs.core.reset_BANG_.call(null,clustermap.map.map,clustermap.map.create_map.call(null));
});
