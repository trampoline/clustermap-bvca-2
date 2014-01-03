// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('purnam.cljs');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('clustermap.async');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('clustermap.async');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('purnam.cljs');
goog.require('jayq.core');
clustermap.map.create_map = (function create_map(){var factory_fn = L.mapbox.map;var m = (factory_fn.cljs$core$IFn$_invoke$arity$2 ? factory_fn.cljs$core$IFn$_invoke$arity$2("map","mccraigmccraig.map-gqkcbi1g") : factory_fn.call(null,"map","mccraigmccraig.map-gqkcbi1g"));m.fitBounds([[[59.54,2.3],[49.29,-11.29]]],new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",[[0,0]],"paddingBottomRight",[[0,0]]], null));
return m;
});
/**
* @param {...*} var_args
*/
clustermap.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){var fb = cljs.core.first(all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest(fb));return m.fitBounds(super_bounds);
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__30223){
var m = cljs.core.first(arglist__30223);
var all_bounds = cljs.core.rest(arglist__30223);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse(purnam.cljs.js_lookup.cljs$core$IFn$_invoke$arity$2(site,"location")));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$105,[cljs.core.str(purnam.cljs.js_lookup.cljs$core$IFn$_invoke$arity$2(site,"name")),cljs.core.str(", "),cljs.core.str(purnam.cljs.js_lookup.cljs$core$IFn$_invoke$arity$2(site,"postcode")),cljs.core.str(", "),cljs.core.str(purnam.cljs.js_lookup.cljs$core$IFn$_invoke$arity$2(site,"company_no"))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.map.display_sites = (function display_sites(m,sites){console.log("display-sites");
console.log(m);
console.log(sites);
return clustermap.async.dorun_async(clustermap.async.map_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.map.display_site,m),cljs.core.array_seq([sites], 0)));
});
