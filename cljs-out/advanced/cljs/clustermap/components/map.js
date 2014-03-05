// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.map.initial_bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null);
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(clustermap.components.map.initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3441__auto__ = (function (){var G__34290 = config;var G__34290__$1 = (((G__34290 == null))?null:G__34290.components);var G__34290__$2 = (((G__34290__$1 == null))?null:G__34290__$1.map);var G__34290__$3 = (((G__34290__$2 == null))?null:G__34290__$2.api_key);return G__34290__$3;
})();if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$756,m,cljs.core.constant$keyword$757,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$758,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$759,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3429__auto__ = s;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = w;if(cljs.core.truth_(and__3429__auto____$1))
{var and__3429__auto____$2 = n;if(cljs.core.truth_(and__3429__auto____$2))
{return e;
} else
{return and__3429__auto____$2;
}
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty(all_bounds)))
{var fb = cljs.core.first(all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest(all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__34291){
var m = cljs.core.first(arglist__34291);
var all_bounds = cljs.core.rest(arglist__34291);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs34293 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$585,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,site) : path_fn.call(null,cljs.core.constant$keyword$629,site)),cljs.core.constant$keyword$580,null,cljs.core.constant$keyword$574,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs34293))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,null,cljs.core.constant$keyword$574,"map-marker-popup-location-list"], null),attrs34293], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"map-marker-popup-location-list\">"),cljs.core.str(hiccups.runtime.render_html(attrs34293)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__34296 = location_sites;var G__34296__$1 = (((G__34296 == null))?null:cljs.core.first(G__34296));var G__34296__$2 = (((G__34296__$1 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__34296__$1));var G__34296__$3 = (((G__34296__$2 == null))?null:cljs.core.reverse(G__34296__$2));var G__34296__$4 = (((G__34296__$3 == null))?null:cljs.core.clj__GT_js(G__34296__$3));return G__34296__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$576,"map-marker",cljs.core.constant$keyword$761,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),cljs.core.constant$keyword$762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,14], null),cljs.core.constant$keyword$763,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-8], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$764,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4339__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_34297_34298 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4340__auto__){return sb__4339__auto__.append(x__4340__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34297_34298;
}return [cljs.core.str(sb__4339__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__34303 = cljs.core.seq(remove_marker_keys);var chunk__34304 = null;var count__34305 = 0;var i__34306 = 0;while(true){
if((i__34306 < count__34305))
{var k = chunk__34304.cljs$core$IIndexed$_nth$arity$2(null,i__34306);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__34307 = seq__34303;
var G__34308 = chunk__34304;
var G__34309 = count__34305;
var G__34310 = (i__34306 + 1);
seq__34303 = G__34307;
chunk__34304 = G__34308;
count__34305 = G__34309;
i__34306 = G__34310;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34303);if(temp__4092__auto__)
{var seq__34303__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34303__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34303__$1);{
var G__34311 = cljs.core.chunk_rest(seq__34303__$1);
var G__34312 = c__4189__auto__;
var G__34313 = cljs.core.count(c__4189__auto__);
var G__34314 = 0;
seq__34303 = G__34311;
chunk__34304 = G__34312;
count__34305 = G__34313;
i__34306 = G__34314;
continue;
}
} else
{var k = cljs.core.first(seq__34303__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__34315 = cljs.core.next(seq__34303__$1);
var G__34316 = null;
var G__34317 = 0;
var G__34318 = 0;
seq__34303 = G__34315;
chunk__34304 = G__34316;
count__34305 = G__34317;
i__34306 = G__34318;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_(markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0)));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__34327 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__34327__$1 = ((cljs.core.seq_QMARK_(map__34327))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34327):map__34327);var clj_envelope = map__34327__$1;var vec__34328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34327__$1,"coordinates");var vec__34329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34328,0,null);var vec__34330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34330,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34330,1,null);var vec__34331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34331,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34331,1,null);var vec__34332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34332,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34332,1,null);var vec__34333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34333,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34333,1,null);var vec__34334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34334,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34334,1,null);var inner = vec__34329;var coords = vec__34328;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3441__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$573,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$573,7));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__34335){var map__34337 = p__34335;var map__34337__$1 = ((cljs.core.seq_QMARK_(map__34337))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34337):map__34337);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,cljs.core.constant$keyword$765);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,cljs.core.constant$keyword$599);if(cljs.core.truth_((function (){var and__3429__auto__ = selected;if(cljs.core.truth_(and__3429__auto__))
{return highlighted;
} else
{return and__3429__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$766,"#0000aa",cljs.core.constant$keyword$767,2,cljs.core.constant$keyword$768,1,cljs.core.constant$keyword$769,true,cljs.core.constant$keyword$770,0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$766,"#0000aa",cljs.core.constant$keyword$767,2,cljs.core.constant$keyword$768,1,cljs.core.constant$keyword$769,true,cljs.core.constant$keyword$770,0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$766,"#000000",cljs.core.constant$keyword$767,2,cljs.core.constant$keyword$768,1,cljs.core.constant$keyword$769,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$766,"#ff0000",cljs.core.constant$keyword$767,2,cljs.core.constant$keyword$768,0,cljs.core.constant$keyword$769,false,cljs.core.constant$keyword$770,0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__34338){var map__34340 = p__34338;var map__34340__$1 = ((cljs.core.seq_QMARK_(map__34340))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34340):map__34340);var path_attrs = map__34340__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34340__$1,cljs.core.constant$keyword$599);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$631,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$580,boundaryline_id,cljs.core.constant$keyword$771,tolerance,cljs.core.constant$keyword$599,selected,cljs.core.constant$keyword$772,leaflet_path,cljs.core.constant$keyword$773,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__34342 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34342,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34342,1,null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$772.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$580.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__34343,path_attrs){var map__34346 = p__34343;var map__34346__$1 = ((cljs.core.seq_QMARK_(map__34346))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34346):map__34346);var path = map__34346__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34346__$1,cljs.core.constant$keyword$580);var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__34347 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34347,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34347,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$771.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$772.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$772.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$774,cljs.core.constant$keyword$775),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$599,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$765,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$599,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$765,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__34354 = cljs.core.seq(delete_path_keys);var chunk__34355 = null;var count__34356 = 0;var i__34357 = 0;while(true){
if((i__34357 < count__34356))
{var k = chunk__34355.cljs$core$IIndexed$_nth$arity$2(null,i__34357);var temp__4090__auto___34360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___34360))
{var path_34361 = temp__4090__auto___34360;clustermap.components.map.delete_path(leaflet_map,path_34361);
} else
{}
{
var G__34362 = seq__34354;
var G__34363 = chunk__34355;
var G__34364 = count__34356;
var G__34365 = (i__34357 + 1);
seq__34354 = G__34362;
chunk__34355 = G__34363;
count__34356 = G__34364;
i__34357 = G__34365;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34354);if(temp__4092__auto__)
{var seq__34354__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34354__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34354__$1);{
var G__34366 = cljs.core.chunk_rest(seq__34354__$1);
var G__34367 = c__4189__auto__;
var G__34368 = cljs.core.count(c__4189__auto__);
var G__34369 = 0;
seq__34354 = G__34366;
chunk__34355 = G__34367;
count__34356 = G__34368;
i__34357 = G__34369;
continue;
}
} else
{var k = cljs.core.first(seq__34354__$1);var temp__4090__auto___34370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___34370))
{var path_34371 = temp__4090__auto___34370;clustermap.components.map.delete_path(leaflet_map,path_34371);
} else
{}
{
var G__34372 = cljs.core.next(seq__34354__$1);
var G__34373 = null;
var G__34374 = 0;
var G__34375 = 0;
seq__34354 = G__34372;
chunk__34355 = G__34373;
count__34356 = G__34374;
i__34357 = G__34375;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_){
return (function (m,p__34358){var map__34359 = p__34358;var map__34359__$1 = ((cljs.core.seq_QMARK_(map__34359))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34359):map__34359);var path = map__34359__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34359__$1,cljs.core.constant$keyword$580);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(paths))
{clustermap.components.map.locate_map(leaflet_map);
return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$776,true);
} else
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$776,false);
var temp__4090__auto__ = (function (){var G__34377 = cljs.core.select_keys(paths,path_selections);var G__34377__$1 = (((G__34377 == null))?null:cljs.core.vals(G__34377));var G__34377__$2 = (((G__34377__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$773,G__34377__$1));return G__34377__$2;
})();if(cljs.core.truth_(temp__4090__auto__))
{var bounds = temp__4090__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show(clustermap.components.map.initial_bounds);
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__34378,owner){var map__34398 = p__34378;var map__34398__$1 = ((cljs.core.seq_QMARK_(map__34398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34398):map__34398);var app_state = map__34398__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34398__$1,cljs.core.constant$keyword$639);if(typeof clustermap.components.map.t34399 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t34399 = (function (selection,app_state,map__34398,owner,p__34378,map_component,meta34400){
this.selection = selection;
this.app_state = app_state;
this.map__34398 = map__34398;
this.owner = owner;
this.p__34378 = p__34378;
this.map_component = map_component;
this.meta34400 = meta34400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t34399.cljs$lang$type = true;
clustermap.components.map.t34399.cljs$lang$ctorStr = "clustermap.components.map/t34399";
clustermap.components.map.t34399.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map/t34399");
});
clustermap.components.map.t34399.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t34399.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__34402,p__34403){var self__ = this;
var map__34404 = p__34402;var map__34404__$1 = ((cljs.core.seq_QMARK_(map__34404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34404):map__34404);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34404__$1,cljs.core.constant$keyword$639);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34404__$1,cljs.core.constant$keyword$777);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34404__$1,cljs.core.constant$keyword$778);var next_uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34404__$1,cljs.core.constant$keyword$779);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34404__$1,cljs.core.constant$keyword$687);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34404__$1,cljs.core.constant$keyword$780);var map__34405 = p__34403;var map__34405__$1 = ((cljs.core.seq_QMARK_(map__34405))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34405):map__34405);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34405__$1,cljs.core.constant$keyword$781);var this$__$1 = this;var map__34406 = om.core.get_props(self__.owner);var map__34406__$1 = ((cljs.core.seq_QMARK_(map__34406))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34406):map__34406);var uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34406__$1,cljs.core.constant$keyword$779);var map__34407 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34407__$1 = ((cljs.core.seq_QMARK_(map__34407))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34407):map__34407);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34407__$1,cljs.core.constant$keyword$632);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34407__$1,cljs.core.constant$keyword$649);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34407__$1,cljs.core.constant$keyword$782);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34407__$1,cljs.core.constant$keyword$633);var map__34408 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34408__$1 = ((cljs.core.seq_QMARK_(map__34408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34408):map__34408);var map__34409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34408__$1,cljs.core.constant$keyword$783);var map__34409__$1 = ((cljs.core.seq_QMARK_(map__34409))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34409):map__34409);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34409__$1,cljs.core.constant$keyword$759);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34409__$1,cljs.core.constant$keyword$758);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34409__$1,cljs.core.constant$keyword$757);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34409__$1,cljs.core.constant$keyword$756);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34408__$1,cljs.core.constant$keyword$776);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34408__$1,cljs.core.constant$keyword$781);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_uk_constituencies_rtree,uk_constituencies_rtree))
{leaflet_map.on("mousemove",(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first(hits);var highlight_path_ids = cljs.core.set(cljs.core.take(1,hit_path_ids));var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$781);if(cljs.core.truth_((function (){var and__3429__auto__ = highlight_hit;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids);
} else
{return and__3429__auto__;
}
})()))
{var G__34410_34417 = L.popup();G__34410_34417.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__34410_34417.setContent([cljs.core.str("<p>"),cljs.core.str((function (){var G__34411 = highlight_hit;var G__34411__$1 = (((G__34411 == null))?null:G__34411.properties);var G__34411__$2 = (((G__34411__$1 == null))?null:G__34411__$1.compact_name);return G__34411__$2;
})()),cljs.core.str("</p>")].join(''));
G__34410_34417.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$781,highlight_path_ids);
}));
leaflet_map.on("click",(function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$631,cljs.core.first(hit_path_ids)], null)], null));
}));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths(comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3441__auto__ = pan_pending;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t34399.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t34399.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34412 = clustermap.components.map.create_map(node);var map__34412__$1 = ((cljs.core.seq_QMARK_(map__34412))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34412):map__34412);var map = map__34412__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34412__$1,cljs.core.constant$keyword$607);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34412__$1,cljs.core.constant$keyword$757);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34412__$1,cljs.core.constant$keyword$756);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$783,map);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$781,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$784),cljs.core.assoc,cljs.core.constant$keyword$780,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__34413 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34413__$1 = ((cljs.core.seq_QMARK_(map__34413))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34413):map__34413);var map__34414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34413__$1,cljs.core.constant$keyword$783);var map__34414__$1 = ((cljs.core.seq_QMARK_(map__34414))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34414):map__34414);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34414__$1,cljs.core.constant$keyword$759);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34414__$1,cljs.core.constant$keyword$758);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$780,leaflet_map.getZoom());
});
clustermap.components.map.t34399.prototype.om$core$IRender$ = true;
clustermap.components.map.t34399.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t34399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34401){var self__ = this;
var _34401__$1 = this;return self__.meta34400;
});
clustermap.components.map.t34399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34401,meta34400__$1){var self__ = this;
var _34401__$1 = this;return (new clustermap.components.map.t34399(self__.selection,self__.app_state,self__.map__34398,self__.owner,self__.p__34378,self__.map_component,meta34400__$1));
});
clustermap.components.map.__GT_t34399 = (function __GT_t34399(selection__$1,app_state__$1,map__34398__$2,owner__$1,p__34378__$1,map_component__$1,meta34400){return (new clustermap.components.map.t34399(selection__$1,app_state__$1,map__34398__$2,owner__$1,p__34378__$1,map_component__$1,meta34400));
});
}
return (new clustermap.components.map.t34399(selection,app_state,map__34398__$1,owner,p__34378,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$784,app_state,cljs.core.constant$keyword$782,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$687)], null)], 0)),cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
