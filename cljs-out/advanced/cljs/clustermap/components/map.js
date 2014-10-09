// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.map.ticket = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
clustermap.components.map.next_ticket = (function next_ticket(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.ticket,cljs.core.inc);
});
/**
* convert a Leaflet LatLngBounds object into nested-array form
*/
clustermap.components.map.bounds_array = (function bounds_array(bounds){if((bounds instanceof L.LatLngBounds))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getSouth(),bounds.getWest()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getNorth(),bounds.getEast()], null)], null);
} else
{return bounds;
}
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3546__auto__ = s;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = w;if(cljs.core.truth_(and__3546__auto____$1))
{var and__3546__auto____$2 = n;if(cljs.core.truth_(and__3546__auto____$2))
{return e;
} else
{return and__3546__auto____$2;
}
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js(initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3558__auto__ = (function (){var G__46210 = config;var G__46210__$1 = (((G__46210 == null))?null:G__46210.components);var G__46210__$2 = (((G__46210__$1 == null))?null:G__46210__$1.map);var G__46210__$3 = (((G__46210__$2 == null))?null:G__46210__$2.api_key);return G__46210__$3;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1285,m,cljs.core.constant$keyword$1286,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1269,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1287,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY))], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__46211){
var m = cljs.core.first(arglist__46211);
var all_bounds = cljs.core.rest(arglist__46211);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs46213 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1057,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1137,site) : path_fn.call(null,cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1137,site)),cljs.core.constant$keyword$976,null,cljs.core.constant$keyword$1049,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$998.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs46213))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$976,null,cljs.core.constant$keyword$1049,"map-marker-popup-location-list"], null),attrs46213], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs46213))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__46216 = location_sites;var G__46216__$1 = (((G__46216 == null))?null:cljs.core.first(G__46216));var G__46216__$2 = (((G__46216__$1 == null))?null:cljs.core.constant$keyword$1288.cljs$core$IFn$_invoke$arity$1(G__46216__$1));var G__46216__$3 = (((G__46216__$2 == null))?null:cljs.core.reverse(G__46216__$2));var G__46216__$4 = (((G__46216__$3 == null))?null:cljs.core.clj__GT_js(G__46216__$3));return G__46216__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1051,"map-marker",cljs.core.constant$keyword$1289,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4485__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_46217_46218 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_46217_46218,sb__4485__auto__,temp__4124__auto__){
return (function (x__4486__auto__){return sb__4485__auto__.append(x__4486__auto__);
});})(_STAR_print_fn_STAR_46217_46218,sb__4485__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46217_46218;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4485__auto__));
})())));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(markers_atom) : cljs.core.deref.call(null,markers_atom));var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1148], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1148], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__46223 = cljs.core.seq(remove_marker_keys);var chunk__46224 = null;var count__46225 = (0);var i__46226 = (0);while(true){
if((i__46226 < count__46225))
{var k = chunk__46224.cljs$core$IIndexed$_nth$arity$2(null,i__46226);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__46227 = seq__46223;
var G__46228 = chunk__46224;
var G__46229 = count__46225;
var G__46230 = (i__46226 + (1));
seq__46223 = G__46227;
chunk__46224 = G__46228;
count__46225 = G__46229;
i__46226 = G__46230;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46223);if(temp__4126__auto__)
{var seq__46223__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46223__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__46223__$1);{
var G__46231 = cljs.core.chunk_rest(seq__46223__$1);
var G__46232 = c__4314__auto__;
var G__46233 = cljs.core.count(c__4314__auto__);
var G__46234 = (0);
seq__46223 = G__46231;
chunk__46224 = G__46232;
count__46225 = G__46233;
i__46226 = G__46234;
continue;
}
} else
{var k = cljs.core.first(seq__46223__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__46235 = cljs.core.next(seq__46223__$1);
var G__46236 = null;
var G__46237 = (0);
var G__46238 = (0);
seq__46223 = G__46235;
chunk__46224 = G__46236;
count__46225 = G__46237;
i__46226 = G__46238;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0))) : cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0))));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__46247 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__46247__$1 = ((cljs.core.seq_QMARK_(map__46247))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46247):map__46247);var clj_envelope = map__46247__$1;var vec__46248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46247__$1,"coordinates");var vec__46249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46248,(0),null);var vec__46250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46250,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46250,(1),null);var vec__46251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46251,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46251,(1),null);var vec__46252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(1),null);var vec__46253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46253,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46253,(1),null);var vec__46254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46254,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46254,(1),null);var inner = vec__46249;var coords = vec__46248;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__46255){var map__46257 = p__46255;var map__46257__$1 = ((cljs.core.seq_QMARK_(map__46257))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46257):map__46257);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46257__$1,cljs.core.constant$keyword$1293);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46257__$1,cljs.core.constant$keyword$1294);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46257__$1,cljs.core.constant$keyword$1069);if(cljs.core.truth_((function (){var and__3546__auto__ = selected;if(cljs.core.truth_(and__3546__auto__))
{return highlighted;
} else
{return and__3546__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1295,"#000000",cljs.core.constant$keyword$1296,fill_color,cljs.core.constant$keyword$1297,(2),cljs.core.constant$keyword$1298,(1),cljs.core.constant$keyword$1299,true,cljs.core.constant$keyword$1300,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1295,"#8c2d04",cljs.core.constant$keyword$1296,fill_color,cljs.core.constant$keyword$1297,(1),cljs.core.constant$keyword$1298,(1),cljs.core.constant$keyword$1299,true,cljs.core.constant$keyword$1300,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1295,"#000000",cljs.core.constant$keyword$1296,fill_color,cljs.core.constant$keyword$1297,(2),cljs.core.constant$keyword$1298,(1),cljs.core.constant$keyword$1299,false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1295,"#8c2d04",cljs.core.constant$keyword$1296,fill_color,cljs.core.constant$keyword$1297,(1),cljs.core.constant$keyword$1298,(0),cljs.core.constant$keyword$1299,false,cljs.core.constant$keyword$1300,(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__46258){var map__46260 = p__46258;var map__46260__$1 = ((cljs.core.seq_QMARK_(map__46260))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46260):map__46260);var path_attrs = map__46260__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46260__$1,cljs.core.constant$keyword$1069);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__46260,map__46260__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1140,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__46260,map__46260__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$976,boundaryline_id,cljs.core.constant$keyword$954,tolerance,cljs.core.constant$keyword$1069,selected,cljs.core.constant$keyword$1301,leaflet_path,cljs.core.constant$keyword$956,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1301.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__46261,tolerance,js_boundaryline,path_attrs){var map__46263 = p__46261;var map__46263__$1 = ((cljs.core.seq_QMARK_(map__46263))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46263):map__46263);var path = map__46263__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46263__$1,cljs.core.constant$keyword$976);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$954.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1301.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1301.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paths_atom) : cljs.core.deref.call(null,paths_atom));var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path_selections_atom) : cljs.core.deref.call(null,path_selections_atom));var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1302,create_path_keys,cljs.core.constant$keyword$1303,delete_path_keys,cljs.core.constant$keyword$1304,update_path_keys], null)));var vec__46277 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$955,live_path_keys) : fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$955,live_path_keys));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46277,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46277,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan){
return (function (p__46278){var vec__46279 = p__46278;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46279,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46279,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46279,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1069,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1293,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1294,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan){
return (function (k){var vec__46280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46280,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46280,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = tolerance;if(cljs.core.truth_(and__3546__auto____$1))
{return js_boundaryline;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan,created_paths){
return (function (p__46281){var vec__46282 = p__46281;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46282,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46282,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46282,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1069,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1293,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1294,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__46283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46283,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46283,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = tolerance;if(cljs.core.truth_(and__3546__auto____$1))
{return js_boundaryline;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__46284 = cljs.core.seq(delete_path_keys);var chunk__46285 = null;var count__46286 = (0);var i__46287 = (0);while(true){
if((i__46287 < count__46286))
{var k = chunk__46285.cljs$core$IIndexed$_nth$arity$2(null,i__46287);var temp__4124__auto___46290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___46290))
{var path_46291 = temp__4124__auto___46290;clustermap.components.map.delete_path(leaflet_map,path_46291);
} else
{}
{
var G__46292 = seq__46284;
var G__46293 = chunk__46285;
var G__46294 = count__46286;
var G__46295 = (i__46287 + (1));
seq__46284 = G__46292;
chunk__46285 = G__46293;
count__46286 = G__46294;
i__46287 = G__46295;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46284);if(temp__4126__auto__)
{var seq__46284__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46284__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__46284__$1);{
var G__46296 = cljs.core.chunk_rest(seq__46284__$1);
var G__46297 = c__4314__auto__;
var G__46298 = cljs.core.count(c__4314__auto__);
var G__46299 = (0);
seq__46284 = G__46296;
chunk__46285 = G__46297;
count__46286 = G__46298;
i__46287 = G__46299;
continue;
}
} else
{var k = cljs.core.first(seq__46284__$1);var temp__4124__auto___46300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___46300))
{var path_46301 = temp__4124__auto___46300;clustermap.components.map.delete_path(leaflet_map,path_46301);
} else
{}
{
var G__46302 = cljs.core.next(seq__46284__$1);
var G__46303 = null;
var G__46304 = (0);
var G__46305 = (0);
seq__46284 = G__46302;
chunk__46285 = G__46303;
count__46286 = G__46304;
i__46287 = G__46305;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__46288){var map__46289 = p__46288;var map__46289__$1 = ((cljs.core.seq_QMARK_(map__46289))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46289):map__46289);var path = map__46289__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46289__$1,cljs.core.constant$keyword$976);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__46277,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(path_selections_atom,new_selection_path_keys) : cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(paths_atom,new_paths) : cljs.core.reset_BANG_.call(null,paths_atom,new_paths));
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1057,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1140,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$977,bl_id,cljs.core.constant$keyword$978,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$1011,cljs.core.constant$keyword$1140,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$977,bl_id,cljs.core.constant$keyword$978,bl_name], null))),cljs.core.constant$keyword$976,null,cljs.core.constant$keyword$1049,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs46307 = bl_name;if(cljs.core.map_QMARK_(attrs46307))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$976,null,cljs.core.constant$keyword$1049,"map-marker-constituency-name"], null),attrs46307], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs46307))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__46310){var vec__46311 = p__46310;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46311,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46311,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.boundaryline_aggregation,cljs.core.array_seq([index,index_type,blcoll,variable,filter,bounds], 0));
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.location_lists,cljs.core.array_seq([index,index_type,"!postcode",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds], 0));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__46312,owner){var map__46351 = p__46312;var map__46351__$1 = ((cljs.core.seq_QMARK_(map__46351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46351):map__46351);var cursor_data = map__46351__$1;var map__46352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46351__$1,cljs.core.constant$keyword$1305);var map__46352__$1 = ((cljs.core.seq_QMARK_(map__46352))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46352):map__46352);var cursor = map__46352__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46352__$1,cljs.core.constant$keyword$1082);var point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46352__$1,cljs.core.constant$keyword$1306);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46352__$1,cljs.core.constant$keyword$1307);var map__46353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46352__$1,cljs.core.constant$keyword$1109);var map__46353__$1 = ((cljs.core.seq_QMARK_(map__46353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46353):map__46353);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353__$1,cljs.core.constant$keyword$1308);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353__$1,cljs.core.constant$keyword$1309);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353__$1,cljs.core.constant$keyword$1310);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353__$1,cljs.core.constant$keyword$1311);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353__$1,cljs.core.constant$keyword$1312);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353__$1,cljs.core.constant$keyword$956);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353__$1,cljs.core.constant$keyword$1313);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46351__$1,cljs.core.constant$keyword$957);if(typeof clustermap.components.map.t46354 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t46354 = (function (colorchooser,initial_bounds,map__46351,owner,data,zoom,cursor_data,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,map__46353,map__46352,filter,p__46312,point_data,boundaryline_agg,meta46355){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.map__46351 = map__46351;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.cursor_data = cursor_data;
this.map_component = map_component;
this.boundaryline_collections = boundaryline_collections;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.map__46353 = map__46353;
this.map__46352 = map__46352;
this.filter = filter;
this.p__46312 = p__46312;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta46355 = meta46355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t46354.cljs$lang$type = true;
clustermap.components.map.t46354.cljs$lang$ctorStr = "clustermap.components.map/t46354";
clustermap.components.map.t46354.cljs$lang$ctorPrWriter = ((function (map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map/t46354");
});})(map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46354.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t46354.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__46357 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46357__$1 = ((cljs.core.seq_QMARK_(map__46357))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46357):map__46357);var point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46357__$1,cljs.core.constant$keyword$1314);var aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46357__$1,cljs.core.constant$keyword$1315);clustermap.ordered_resource.close(aggregation_data_resource);
return clustermap.ordered_resource.close(point_data_resource);
});})(map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46354.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t46354.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$,p__46358,p__46359){var self__ = this;
var map__46360 = p__46358;var map__46360__$1 = ((cljs.core.seq_QMARK_(map__46360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46360):map__46360);var next_cursor_data = map__46360__$1;var map__46361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46360__$1,cljs.core.constant$keyword$1305);var map__46361__$1 = ((cljs.core.seq_QMARK_(map__46361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46361):map__46361);var next_cursor = map__46361__$1;var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46361__$1,cljs.core.constant$keyword$1082);var next_point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46361__$1,cljs.core.constant$keyword$1306);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46361__$1,cljs.core.constant$keyword$1307);var map__46362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46361__$1,cljs.core.constant$keyword$1109);var map__46362__$1 = ((cljs.core.seq_QMARK_(map__46362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46362):map__46362);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,cljs.core.constant$keyword$1312);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,cljs.core.constant$keyword$956);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,cljs.core.constant$keyword$1311);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,cljs.core.constant$keyword$1310);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,cljs.core.constant$keyword$1309);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,cljs.core.constant$keyword$1308);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46360__$1,cljs.core.constant$keyword$957);var map__46363 = p__46359;var map__46363__$1 = ((cljs.core.seq_QMARK_(map__46363))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46363):map__46363);var map__46364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46363__$1,cljs.core.constant$keyword$1011);var map__46364__$1 = ((cljs.core.seq_QMARK_(map__46364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46364):map__46364);var next_markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46364__$1,cljs.core.constant$keyword$1286);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46364__$1,cljs.core.constant$keyword$1269);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46364__$1,cljs.core.constant$keyword$1287);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46363__$1,cljs.core.constant$keyword$1316);var next_aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46363__$1,cljs.core.constant$keyword$1315);var next_point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46363__$1,cljs.core.constant$keyword$1314);var this$__$1 = this;var map__46365 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46365__$1 = ((cljs.core.seq_QMARK_(map__46365))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46365):map__46365);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46365__$1,cljs.core.constant$keyword$1317);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46365__$1,cljs.core.constant$keyword$1318);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46365__$1,cljs.core.constant$keyword$1136);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46365__$1,cljs.core.constant$keyword$1135);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46365__$1,cljs.core.constant$keyword$1146);var map__46366 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46366__$1 = ((cljs.core.seq_QMARK_(map__46366))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46366):map__46366);var map__46367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46366__$1,cljs.core.constant$keyword$1011);var map__46367__$1 = ((cljs.core.seq_QMARK_(map__46367))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46367):map__46367);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46367__$1,cljs.core.constant$keyword$1287);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46367__$1,cljs.core.constant$keyword$1269);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46367__$1,cljs.core.constant$keyword$1286);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46367__$1,cljs.core.constant$keyword$1285);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46366__$1,cljs.core.constant$keyword$1319);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46366__$1,cljs.core.constant$keyword$1316);if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = next_zoom;if(cljs.core.truth_(and__3546__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,self__.zoom)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,leaflet_map.getZoom()));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = next_bounds;if(cljs.core.truth_(and__3546__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,clustermap.components.map.bounds_array(leaflet_map.getBounds())));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js(next_bounds));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,cljs.core.constant$keyword$956], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = self__.boundaryline_collections;if(cljs.core.truth_(and__3546__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1311], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3546__auto__))
{var or__3558__auto__ = (function (){var and__3546__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3546__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_agg,self__.boundaryline_agg);
} else
{return and__3546__auto____$1;
}
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter,self__.filter)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds));
}
} else
{return and__3546__auto__;
}
})()))
{var ticket_46389 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1320], null),ticket_46389);
clustermap.components.map.request_aggregation_data(next_aggregation_data_resource,cljs.core.constant$keyword$972.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1110.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1321.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
clustermap.components.map.request_point_data(next_point_data_resource,cljs.core.constant$keyword$972.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1110.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,self__.data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,self__.colorchooser)))
{var vec__46368_46390 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1322.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1323.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$977,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1321.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1148.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_46391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46368_46390,(0),null);var selection_path_colours_46392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46368_46390,(1),null);var update_paths_invocation_46393 = ((function (vec__46368_46390,new_threshold_colors_46391,selection_path_colours_46392,map__46365,map__46365__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46366,map__46366__$1,map__46367,map__46367__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46360,map__46360__$1,next_cursor_data,map__46361,map__46361__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46362,map__46362__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46363,map__46363__$1,map__46364,map__46364__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_46392);
});})(vec__46368_46390,new_threshold_colors_46391,selection_path_colours_46392,map__46365,map__46365__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46366,map__46366__$1,map__46367,map__46367__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46360,map__46360__$1,next_cursor_data,map__46361,map__46361__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46362,map__46362__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46363,map__46363__$1,map__46364,map__46364__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors_46391,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1308], null),new_threshold_colors_46391);
} else
{}
var temp__4126__auto___46394 = update_paths_invocation_46393();if(cljs.core.truth_(temp__4126__auto___46394))
{var notify_chan_46395 = temp__4126__auto___46394;var c__5708__auto___46396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___46396,notify_chan_46395,temp__4126__auto___46394,vec__46368_46390,new_threshold_colors_46391,selection_path_colours_46392,update_paths_invocation_46393,map__46365,map__46365__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46366,map__46366__$1,map__46367,map__46367__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46360,map__46360__$1,next_cursor_data,map__46361,map__46361__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46362,map__46362__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46363,map__46363__$1,map__46364,map__46364__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___46396,notify_chan_46395,temp__4126__auto___46394,vec__46368_46390,new_threshold_colors_46391,selection_path_colours_46392,update_paths_invocation_46393,map__46365,map__46365__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46366,map__46366__$1,map__46367,map__46367__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46360,map__46360__$1,next_cursor_data,map__46361,map__46361__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46362,map__46362__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46363,map__46363__$1,map__46364,map__46364__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (state_46373){var state_val_46374 = (state_46373[(1)]);if((state_val_46374 === (2)))
{var inst_46370 = (state_46373[(2)]);var inst_46371 = update_paths_invocation_46393();var state_46373__$1 = (function (){var statearr_46375 = state_46373;(statearr_46375[(7)] = inst_46370);
return statearr_46375;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_46373__$1,inst_46371);
} else
{if((state_val_46374 === (1)))
{var state_46373__$1 = state_46373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46373__$1,(2),notify_chan_46395);
} else
{return null;
}
}
});})(c__5708__auto___46396,notify_chan_46395,temp__4126__auto___46394,vec__46368_46390,new_threshold_colors_46391,selection_path_colours_46392,update_paths_invocation_46393,map__46365,map__46365__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46366,map__46366__$1,map__46367,map__46367__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46360,map__46360__$1,next_cursor_data,map__46361,map__46361__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46362,map__46362__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46363,map__46363__$1,map__46364,map__46364__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;return ((function (switch__5693__auto__,c__5708__auto___46396,notify_chan_46395,temp__4126__auto___46394,vec__46368_46390,new_threshold_colors_46391,selection_path_colours_46392,update_paths_invocation_46393,map__46365,map__46365__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46366,map__46366__$1,map__46367,map__46367__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46360,map__46360__$1,next_cursor_data,map__46361,map__46361__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46362,map__46362__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46363,map__46363__$1,map__46364,map__46364__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_46379 = [null,null,null,null,null,null,null,null];(statearr_46379[(0)] = state_machine__5694__auto__);
(statearr_46379[(1)] = (1));
return statearr_46379;
});
var state_machine__5694__auto____1 = (function (state_46373){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_46373);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e46380){if((e46380 instanceof Object))
{var ex__5697__auto__ = e46380;var statearr_46381_46397 = state_46373;(statearr_46381_46397[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_46373);
return cljs.core.constant$keyword$936;
} else
{throw e46380;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__46398 = state_46373;
state_46373 = G__46398;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_46373){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_46373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___46396,notify_chan_46395,temp__4126__auto___46394,vec__46368_46390,new_threshold_colors_46391,selection_path_colours_46392,update_paths_invocation_46393,map__46365,map__46365__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46366,map__46366__$1,map__46367,map__46367__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46360,map__46360__$1,next_cursor_data,map__46361,map__46361__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46362,map__46362__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46363,map__46363__$1,map__46364,map__46364__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
})();var state__5710__auto__ = (function (){var statearr_46382 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_46382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___46396);
return statearr_46382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___46396,notify_chan_46395,temp__4126__auto___46394,vec__46368_46390,new_threshold_colors_46391,selection_path_colours_46392,update_paths_invocation_46393,map__46365,map__46365__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__46366,map__46366__$1,map__46367,map__46367__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__46360,map__46360__$1,next_cursor_data,map__46361,map__46361__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__46362,map__46362__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__46363,map__46363__$1,map__46364,map__46364__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_point_data,self__.point_data))
{return clustermap.components.map.update_markers(path_fn,leaflet_map,next_markers,cljs.core.constant$keyword$1148.cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46354.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t46354.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46383 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__46383__$1 = ((cljs.core.seq_QMARK_(map__46383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46383):map__46383);var map = map__46383__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46383__$1,cljs.core.constant$keyword$1019);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46383__$1,cljs.core.constant$keyword$1286);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46383__$1,cljs.core.constant$keyword$1285);var map__46384 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46384__$1 = ((cljs.core.seq_QMARK_(map__46384))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46384):map__46384);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,cljs.core.constant$keyword$1135);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,cljs.core.constant$keyword$1136);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,cljs.core.constant$keyword$1317);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,cljs.core.constant$keyword$1318);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46384__$1,cljs.core.constant$keyword$1146);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1312], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,cljs.core.constant$keyword$956], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1011,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1316,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,cljs.core.constant$keyword$1312], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109,cljs.core.constant$keyword$956], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupopen",((function (node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1324,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupclose",((function (node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1324,null);
});})(node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("mousemove",((function (node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1316);if(cljs.core.truth_((function (){var and__3546__auto__ = highlight_hit;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1324)));
} else
{return and__3546__auto__;
}
})()))
{var G__46385_46399 = L.popup();G__46385_46399.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__46385_46399.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__46385_46399.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1316,highlight_path_ids);
});})(node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("click",((function (node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__46386 = hits;var G__46386__$1 = (((G__46386 == null))?null:cljs.core.first(G__46386));var G__46386__$2 = (((G__46386__$1 == null))?null:cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(G__46386__$1));return G__46386__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1140,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var adr_46400 = clustermap.ordered_resource.make_discard_stale_resource("aggregation-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1315,adr_46400);
clustermap.ordered_resource.retrieve_responses(adr_46400,((function (adr_46400,node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1082], null),data__$2);
});})(adr_46400,node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var pdr = clustermap.ordered_resource.make_discard_stale_resource("point-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1314,pdr);
return clustermap.ordered_resource.retrieve_responses(pdr,((function (pdr,node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (point_data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1306], null),point_data__$2);
});})(pdr,node,map__46383,map__46383__$1,map,path,markers,leaflet_map,map__46384,map__46384__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46354.prototype.om$core$IRender$ = true;
clustermap.components.map.t46354.prototype.om$core$IRender$render$arity$1 = ((function (map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_46356){var self__ = this;
var _46356__$1 = this;return self__.meta46355;
});})(map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t46354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_46356,meta46355__$1){var self__ = this;
var _46356__$1 = this;return (new clustermap.components.map.t46354(self__.colorchooser,self__.initial_bounds,self__.map__46351,self__.owner,self__.data,self__.zoom,self__.cursor_data,self__.map_component,self__.boundaryline_collections,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.map__46353,self__.map__46352,self__.filter,self__.p__46312,self__.point_data,self__.boundaryline_agg,meta46355__$1));
});})(map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.__GT_t46354 = ((function (map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function __GT_t46354(colorchooser__$1,initial_bounds__$1,map__46351__$2,owner__$1,data__$1,zoom__$1,cursor_data__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,map__46353__$2,map__46352__$2,filter__$1,p__46312__$1,point_data__$1,boundaryline_agg__$1,meta46355){return (new clustermap.components.map.t46354(colorchooser__$1,initial_bounds__$1,map__46351__$2,owner__$1,data__$1,zoom__$1,cursor_data__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,map__46353__$2,map__46352__$2,filter__$1,p__46312__$1,point_data__$1,boundaryline_agg__$1,meta46355));
});})(map__46351,map__46351__$1,cursor_data,map__46352,map__46352__$1,cursor,data,point_data,boundaryline_collections,map__46353,map__46353__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
}
return (new clustermap.components.map.t46354(colorchooser,initial_bounds,map__46351__$1,owner,data,zoom,cursor_data,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,map__46353__$1,map__46352__$1,filter,p__46312,point_data,boundaryline_agg,null));
});
