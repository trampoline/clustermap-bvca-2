// Compiled by ClojureScript 0.0-2356
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
clustermap.components.map.ticket = (function (){var G__74447 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74447) : cljs.core.atom.call(null,G__74447));
})();
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
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3625__auto__ = s;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = w;if(cljs.core.truth_(and__3625__auto____$1))
{var and__3625__auto____$2 = n;if(cljs.core.truth_(and__3625__auto____$2))
{return e;
} else
{return and__3625__auto____$2;
}
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var G__74449 = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null));return L.latLngBounds(G__74449);
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js(initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3637__auto__ = (function (){var G__74451 = config;var G__74451__$1 = (((G__74451 == null))?null:G__74451.components);var G__74451__$2 = (((G__74451__$1 == null))?null:G__74451__$1.map);var G__74451__$3 = (((G__74451__$2 == null))?null:G__74451__$2.api_key);return G__74451__$3;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1603,m,cljs.core.constant$keyword$1604,(function (){var G__74455 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74455) : cljs.core.atom.call(null,G__74455));
})(),cljs.core.constant$keyword$1255,(function (){var G__74456 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74456) : cljs.core.atom.call(null,G__74456));
})(),cljs.core.constant$keyword$1605,(function (){var G__74457 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__74457) : cljs.core.atom.call(null,G__74457));
})()], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__74458){
var m = cljs.core.first(arglist__74458);
var all_bounds = cljs.core.rest(arglist__74458);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs74463 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1265,(function (){var G__74464 = cljs.core.constant$keyword$1339;var G__74465 = cljs.core.constant$keyword$1286;var G__74466 = site;return (path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(G__74464,G__74465,G__74466) : path_fn.call(null,G__74464,G__74465,G__74466));
})(),cljs.core.constant$keyword$1162,null,cljs.core.constant$keyword$1257,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs74463))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1162,null,cljs.core.constant$keyword$1257,"map-marker-popup-location-list"], null),attrs74463], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs74463))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__74472 = location_sites;var G__74472__$1 = (((G__74472 == null))?null:cljs.core.first(G__74472));var G__74472__$2 = (((G__74472__$1 == null))?null:cljs.core.constant$keyword$1606.cljs$core$IFn$_invoke$arity$1(G__74472__$1));var G__74472__$3 = (((G__74472__$2 == null))?null:cljs.core.reverse(G__74472__$2));var G__74472__$4 = (((G__74472__$3 == null))?null:cljs.core.clj__GT_js(G__74472__$3));return G__74472__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = (function (){var G__74473 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1259,"map-marker",cljs.core.constant$keyword$1607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1608,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null));return L.divIcon(G__74473);
})();var marker = (function (){var G__74474 = latlong;var G__74475 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1610,icon], null));return L.marker(G__74474,G__74475);
})();var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4577__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_74476_74477 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_74476_74477,sb__4577__auto__,temp__4124__auto__){
return (function (x__4578__auto__){return sb__4577__auto__.append(x__4578__auto__);
});})(_STAR_print_fn_STAR_74476_74477,sb__4577__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_74476_74477;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4577__auto__));
})())));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = (function (){var G__74485 = markers_atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74485) : cljs.core.deref.call(null,G__74485));
})();var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1500], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1500], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__74486 = cljs.core.seq(remove_marker_keys);var chunk__74487 = null;var count__74488 = (0);var i__74489 = (0);while(true){
if((i__74489 < count__74488))
{var k = chunk__74487.cljs$core$IIndexed$_nth$arity$2(null,i__74489);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__74492 = seq__74486;
var G__74493 = chunk__74487;
var G__74494 = count__74488;
var G__74495 = (i__74489 + (1));
seq__74486 = G__74492;
chunk__74487 = G__74493;
count__74488 = G__74494;
i__74489 = G__74495;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__74486);if(temp__4126__auto__)
{var seq__74486__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__74486__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__74486__$1);{
var G__74496 = cljs.core.chunk_rest(seq__74486__$1);
var G__74497 = c__4406__auto__;
var G__74498 = cljs.core.count(c__4406__auto__);
var G__74499 = (0);
seq__74486 = G__74496;
chunk__74487 = G__74497;
count__74488 = G__74498;
i__74489 = G__74499;
continue;
}
} else
{var k = cljs.core.first(seq__74486__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__74500 = cljs.core.next(seq__74486__$1);
var G__74501 = null;
var G__74502 = (0);
var G__74503 = (0);
seq__74486 = G__74500;
chunk__74487 = G__74501;
count__74488 = G__74502;
i__74489 = G__74503;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var G__74490 = markers_atom;var G__74491 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0));return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__74490,G__74491) : cljs.core.reset_BANG_.call(null,G__74490,G__74491));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__74513 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__74513__$1 = ((cljs.core.seq_QMARK_(map__74513))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74513):map__74513);var clj_envelope = map__74513__$1;var vec__74514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74513__$1,"coordinates");var vec__74515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74514,(0),null);var vec__74516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74515,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74516,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74516,(1),null);var vec__74517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74515,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74517,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74517,(1),null);var vec__74518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74515,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74518,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74518,(1),null);var vec__74519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74515,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74519,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74519,(1),null);var vec__74520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74515,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74520,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74520,(1),null);var inner = vec__74515;var coords = vec__74514;var G__74521 = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));return L.latLngBounds(G__74521);
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__74522){var map__74524 = p__74522;var map__74524__$1 = ((cljs.core.seq_QMARK_(map__74524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74524):map__74524);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74524__$1,cljs.core.constant$keyword$1611);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74524__$1,cljs.core.constant$keyword$1612);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74524__$1,cljs.core.constant$keyword$1279);if(cljs.core.truth_((function (){var and__3625__auto__ = selected;if(cljs.core.truth_(and__3625__auto__))
{return highlighted;
} else
{return and__3625__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1613,"#000000",cljs.core.constant$keyword$1614,fill_color,cljs.core.constant$keyword$1615,(2),cljs.core.constant$keyword$1616,(1),cljs.core.constant$keyword$1617,true,cljs.core.constant$keyword$1618,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1613,"#8c2d04",cljs.core.constant$keyword$1614,fill_color,cljs.core.constant$keyword$1615,(1),cljs.core.constant$keyword$1616,(1),cljs.core.constant$keyword$1617,true,cljs.core.constant$keyword$1618,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1613,"#000000",cljs.core.constant$keyword$1614,fill_color,cljs.core.constant$keyword$1615,(2),cljs.core.constant$keyword$1616,(1),cljs.core.constant$keyword$1617,false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1613,"#8c2d04",cljs.core.constant$keyword$1614,fill_color,cljs.core.constant$keyword$1615,(1),cljs.core.constant$keyword$1616,(0),cljs.core.constant$keyword$1617,false,cljs.core.constant$keyword$1618,(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__74525){var map__74528 = p__74525;var map__74528__$1 = ((cljs.core.seq_QMARK_(map__74528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74528):map__74528);var path_attrs = map__74528__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74528__$1,cljs.core.constant$keyword$1279);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = (function (){var G__74529 = (js_boundaryline["geojson"]);return L.geoJson(G__74529);
})();clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__74528,map__74528__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__74528,map__74528__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1162,boundaryline_id,cljs.core.constant$keyword$1140,tolerance,cljs.core.constant$keyword$1279,selected,cljs.core.constant$keyword$1619,leaflet_path,cljs.core.constant$keyword$1142,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1619.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$1162.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__74530,tolerance,js_boundaryline,path_attrs){var map__74532 = p__74530;var map__74532__$1 = ((cljs.core.seq_QMARK_(map__74532))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74532):map__74532);var path = map__74532__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74532__$1,cljs.core.constant$keyword$1162);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$1140.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1619.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1619.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = (function (){var G__74559 = paths_atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74559) : cljs.core.deref.call(null,G__74559));
})();var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = (function (){var G__74560 = path_selections_atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__74560) : cljs.core.deref.call(null,G__74560));
})();var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1620,create_path_keys,cljs.core.constant$keyword$1621,delete_path_keys,cljs.core.constant$keyword$1622,update_path_keys], null)));var vec__74558 = (function (){var G__74561 = clustermap.components.map.bounds_array(leaflet_map.getBounds());var G__74562 = leaflet_map.getZoom();var G__74563 = cljs.core.constant$keyword$1141;var G__74564 = live_path_keys;return (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(G__74561,G__74562,G__74563,G__74564) : fetch_boundarylines_fn.call(null,G__74561,G__74562,G__74563,G__74564));
})();var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74558,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74558,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan){
return (function (p__74565){var vec__74566 = p__74565;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74566,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74566,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74566,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1279,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1611,(function (){var G__74567 = k;return (new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(G__74567) : new_selection_paths.call(null,G__74567));
})(),cljs.core.constant$keyword$1612,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan){
return (function (k){var vec__74568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74568,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74568,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = tolerance;if(cljs.core.truth_(and__3625__auto____$1))
{return js_boundaryline;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan,created_paths){
return (function (p__74569){var vec__74570 = p__74569;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74570,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74570,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74570,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1279,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1611,(function (){var G__74571 = k;return (new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(G__74571) : new_selection_paths.call(null,G__74571));
})(),cljs.core.constant$keyword$1612,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__74572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74572,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74572,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = tolerance;if(cljs.core.truth_(and__3625__auto____$1))
{return js_boundaryline;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__74573 = cljs.core.seq(delete_path_keys);var chunk__74574 = null;var count__74575 = (0);var i__74576 = (0);while(true){
if((i__74576 < count__74575))
{var k = chunk__74574.cljs$core$IIndexed$_nth$arity$2(null,i__74576);var temp__4124__auto___74583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___74583))
{var path_74584 = temp__4124__auto___74583;clustermap.components.map.delete_path(leaflet_map,path_74584);
} else
{}
{
var G__74585 = seq__74573;
var G__74586 = chunk__74574;
var G__74587 = count__74575;
var G__74588 = (i__74576 + (1));
seq__74573 = G__74585;
chunk__74574 = G__74586;
count__74575 = G__74587;
i__74576 = G__74588;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__74573);if(temp__4126__auto__)
{var seq__74573__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__74573__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__74573__$1);{
var G__74589 = cljs.core.chunk_rest(seq__74573__$1);
var G__74590 = c__4406__auto__;
var G__74591 = cljs.core.count(c__4406__auto__);
var G__74592 = (0);
seq__74573 = G__74589;
chunk__74574 = G__74590;
count__74575 = G__74591;
i__74576 = G__74592;
continue;
}
} else
{var k = cljs.core.first(seq__74573__$1);var temp__4124__auto___74593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___74593))
{var path_74594 = temp__4124__auto___74593;clustermap.components.map.delete_path(leaflet_map,path_74594);
} else
{}
{
var G__74595 = cljs.core.next(seq__74573__$1);
var G__74596 = null;
var G__74597 = (0);
var G__74598 = (0);
seq__74573 = G__74595;
chunk__74574 = G__74596;
count__74575 = G__74597;
i__74576 = G__74598;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__74577){var map__74578 = p__74577;var map__74578__$1 = ((cljs.core.seq_QMARK_(map__74578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74578):map__74578);var path = map__74578__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74578__$1,cljs.core.constant$keyword$1162);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__74558,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));var G__74579_74599 = path_selections_atom;var G__74580_74600 = new_selection_path_keys;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__74579_74599,G__74580_74600) : cljs.core.reset_BANG_.call(null,G__74579_74599,G__74580_74600));
var G__74581_74601 = paths_atom;var G__74582_74602 = new_paths;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__74581_74601,G__74582_74602) : cljs.core.reset_BANG_.call(null,G__74581_74601,G__74582_74602));
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$1162.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$1164.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1265,(function (){var G__74608 = cljs.core.constant$keyword$1339;var G__74609 = cljs.core.constant$keyword$1288;var G__74610 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1163,bl_id,cljs.core.constant$keyword$1164,bl_name], null);return (path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(G__74608,G__74609,G__74610) : path_fn.call(null,G__74608,G__74609,G__74610));
})(),cljs.core.constant$keyword$1162,null,cljs.core.constant$keyword$1257,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs74607 = bl_name;if(cljs.core.map_QMARK_(attrs74607))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1162,null,cljs.core.constant$keyword$1257,"map-marker-constituency-name"], null),attrs74607], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs74607))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__74613){var vec__74614 = p__74613;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74614,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74614,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.boundaryline_aggregation,cljs.core.array_seq([index,index_type,blcoll,variable,filter,bounds], 0));
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.location_lists,cljs.core.array_seq([index,index_type,"!postcode",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds], 0));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__74615,owner){var map__74659 = p__74615;var map__74659__$1 = ((cljs.core.seq_QMARK_(map__74659))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74659):map__74659);var cursor_data = map__74659__$1;var map__74660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74659__$1,cljs.core.constant$keyword$1623);var map__74660__$1 = ((cljs.core.seq_QMARK_(map__74660))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74660):map__74660);var cursor = map__74660__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74660__$1,cljs.core.constant$keyword$1305);var point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74660__$1,cljs.core.constant$keyword$1624);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74660__$1,cljs.core.constant$keyword$1625);var map__74661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74660__$1,cljs.core.constant$keyword$1368);var map__74661__$1 = ((cljs.core.seq_QMARK_(map__74661))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74661):map__74661);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,cljs.core.constant$keyword$1626);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,cljs.core.constant$keyword$1627);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,cljs.core.constant$keyword$1628);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,cljs.core.constant$keyword$1629);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,cljs.core.constant$keyword$1630);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,cljs.core.constant$keyword$1142);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74661__$1,cljs.core.constant$keyword$1631);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74659__$1,cljs.core.constant$keyword$1143);if(typeof clustermap.components.map.t74662 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t74662 = (function (colorchooser,initial_bounds,owner,data,zoom,cursor_data,map__74660,map_component,boundaryline_collections,p__74615,cursor,threshold_colors,bounds,boundaryline_collection,filter,map__74661,map__74659,point_data,boundaryline_agg,meta74663){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.cursor_data = cursor_data;
this.map__74660 = map__74660;
this.map_component = map_component;
this.boundaryline_collections = boundaryline_collections;
this.p__74615 = p__74615;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.filter = filter;
this.map__74661 = map__74661;
this.map__74659 = map__74659;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta74663 = meta74663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t74662.cljs$lang$type = true;
clustermap.components.map.t74662.cljs$lang$ctorStr = "clustermap.components.map/t74662";
clustermap.components.map.t74662.cljs$lang$ctorPrWriter = ((function (map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.map/t74662");
});})(map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t74662.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t74662.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__74665 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__74665__$1 = ((cljs.core.seq_QMARK_(map__74665))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74665):map__74665);var point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74665__$1,cljs.core.constant$keyword$1632);var aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74665__$1,cljs.core.constant$keyword$1633);clustermap.ordered_resource.close(aggregation_data_resource);
return clustermap.ordered_resource.close(point_data_resource);
});})(map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t74662.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t74662.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$,p__74666,p__74667){var self__ = this;
var map__74668 = p__74666;var map__74668__$1 = ((cljs.core.seq_QMARK_(map__74668))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74668):map__74668);var next_cursor_data = map__74668__$1;var map__74669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74668__$1,cljs.core.constant$keyword$1623);var map__74669__$1 = ((cljs.core.seq_QMARK_(map__74669))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74669):map__74669);var next_cursor = map__74669__$1;var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74669__$1,cljs.core.constant$keyword$1305);var next_point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74669__$1,cljs.core.constant$keyword$1624);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74669__$1,cljs.core.constant$keyword$1625);var map__74670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74669__$1,cljs.core.constant$keyword$1368);var map__74670__$1 = ((cljs.core.seq_QMARK_(map__74670))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74670):map__74670);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670__$1,cljs.core.constant$keyword$1630);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670__$1,cljs.core.constant$keyword$1142);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670__$1,cljs.core.constant$keyword$1629);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670__$1,cljs.core.constant$keyword$1628);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670__$1,cljs.core.constant$keyword$1627);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670__$1,cljs.core.constant$keyword$1626);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74668__$1,cljs.core.constant$keyword$1143);var map__74671 = p__74667;var map__74671__$1 = ((cljs.core.seq_QMARK_(map__74671))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74671):map__74671);var map__74672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671__$1,cljs.core.constant$keyword$1339);var map__74672__$1 = ((cljs.core.seq_QMARK_(map__74672))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74672):map__74672);var next_markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74672__$1,cljs.core.constant$keyword$1604);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74672__$1,cljs.core.constant$keyword$1255);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74672__$1,cljs.core.constant$keyword$1605);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671__$1,cljs.core.constant$keyword$1634);var next_aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671__$1,cljs.core.constant$keyword$1633);var next_point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671__$1,cljs.core.constant$keyword$1632);var this$__$1 = this;var map__74673 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__74673__$1 = ((cljs.core.seq_QMARK_(map__74673))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74673):map__74673);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74673__$1,cljs.core.constant$keyword$1635);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74673__$1,cljs.core.constant$keyword$1636);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74673__$1,cljs.core.constant$keyword$1492);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74673__$1,cljs.core.constant$keyword$1491);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74673__$1,cljs.core.constant$keyword$1312);var map__74674 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__74674__$1 = ((cljs.core.seq_QMARK_(map__74674))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74674):map__74674);var map__74675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74674__$1,cljs.core.constant$keyword$1339);var map__74675__$1 = ((cljs.core.seq_QMARK_(map__74675))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74675):map__74675);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74675__$1,cljs.core.constant$keyword$1605);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74675__$1,cljs.core.constant$keyword$1255);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74675__$1,cljs.core.constant$keyword$1604);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74675__$1,cljs.core.constant$keyword$1603);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74674__$1,cljs.core.constant$keyword$1637);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74674__$1,cljs.core.constant$keyword$1634);if(cljs.core.truth_((function (){var and__3625__auto__ = leaflet_map;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = next_zoom;if(cljs.core.truth_(and__3625__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,self__.zoom)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,leaflet_map.getZoom()));
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3625__auto__ = leaflet_map;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = next_bounds;if(cljs.core.truth_(and__3625__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,clustermap.components.map.bounds_array(leaflet_map.getBounds())));
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js(next_bounds));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1142], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3625__auto__ = leaflet_map;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = self__.boundaryline_collections;if(cljs.core.truth_(and__3625__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1629], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3625__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3625__auto__))
{var or__3637__auto__ = (function (){var and__3625__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3625__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_agg,self__.boundaryline_agg);
} else
{return and__3625__auto____$1;
}
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter,self__.filter)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds));
}
} else
{return and__3625__auto__;
}
})()))
{var ticket_74702 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1638], null),ticket_74702);
clustermap.components.map.request_aggregation_data(next_aggregation_data_resource,cljs.core.constant$keyword$1158.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1369.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1639.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
clustermap.components.map.request_point_data(next_point_data_resource,cljs.core.constant$keyword$1158.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1369.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,self__.data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,self__.colorchooser)))
{var vec__74676_74703 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1640.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1641.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1163,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1639.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_74704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74676_74703,(0),null);var selection_path_colours_74705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74676_74703,(1),null);var update_paths_invocation_74706 = ((function (vec__74676_74703,new_threshold_colors_74704,selection_path_colours_74705,map__74673,map__74673__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__74674,map__74674__$1,map__74675,map__74675__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__74668,map__74668__$1,next_cursor_data,map__74669,map__74669__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__74670,map__74670__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__74671,map__74671__$1,map__74672,map__74672__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_74705);
});})(vec__74676_74703,new_threshold_colors_74704,selection_path_colours_74705,map__74673,map__74673__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__74674,map__74674__$1,map__74675,map__74675__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__74668,map__74668__$1,next_cursor_data,map__74669,map__74669__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__74670,map__74670__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__74671,map__74671__$1,map__74672,map__74672__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors_74704,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1626], null),new_threshold_colors_74704);
} else
{}
var temp__4126__auto___74707 = update_paths_invocation_74706();if(cljs.core.truth_(temp__4126__auto___74707))
{var notify_chan_74708 = temp__4126__auto___74707;var c__5819__auto___74709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___74709,notify_chan_74708,temp__4126__auto___74707,vec__74676_74703,new_threshold_colors_74704,selection_path_colours_74705,update_paths_invocation_74706,map__74673,map__74673__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__74674,map__74674__$1,map__74675,map__74675__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__74668,map__74668__$1,next_cursor_data,map__74669,map__74669__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__74670,map__74670__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__74671,map__74671__$1,map__74672,map__74672__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___74709,notify_chan_74708,temp__4126__auto___74707,vec__74676_74703,new_threshold_colors_74704,selection_path_colours_74705,update_paths_invocation_74706,map__74673,map__74673__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__74674,map__74674__$1,map__74675,map__74675__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__74668,map__74668__$1,next_cursor_data,map__74669,map__74669__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__74670,map__74670__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__74671,map__74671__$1,map__74672,map__74672__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (state_74681){var state_val_74682 = (state_74681[(1)]);if((state_val_74682 === (2)))
{var inst_74678 = (state_74681[(2)]);var inst_74679 = update_paths_invocation_74706();var state_74681__$1 = (function (){var statearr_74683 = state_74681;(statearr_74683[(7)] = inst_74678);
return statearr_74683;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_74681__$1,inst_74679);
} else
{if((state_val_74682 === (1)))
{var state_74681__$1 = state_74681;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74681__$1,(2),notify_chan_74708);
} else
{return null;
}
}
});})(c__5819__auto___74709,notify_chan_74708,temp__4126__auto___74707,vec__74676_74703,new_threshold_colors_74704,selection_path_colours_74705,update_paths_invocation_74706,map__74673,map__74673__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__74674,map__74674__$1,map__74675,map__74675__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__74668,map__74668__$1,next_cursor_data,map__74669,map__74669__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__74670,map__74670__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__74671,map__74671__$1,map__74672,map__74672__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;return ((function (switch__5804__auto__,c__5819__auto___74709,notify_chan_74708,temp__4126__auto___74707,vec__74676_74703,new_threshold_colors_74704,selection_path_colours_74705,update_paths_invocation_74706,map__74673,map__74673__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__74674,map__74674__$1,map__74675,map__74675__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__74668,map__74668__$1,next_cursor_data,map__74669,map__74669__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__74670,map__74670__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__74671,map__74671__$1,map__74672,map__74672__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_74687 = [null,null,null,null,null,null,null,null];(statearr_74687[(0)] = state_machine__5805__auto__);
(statearr_74687[(1)] = (1));
return statearr_74687;
});
var state_machine__5805__auto____1 = (function (state_74681){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_74681);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e74688){if((e74688 instanceof Object))
{var ex__5808__auto__ = e74688;var statearr_74689_74710 = state_74681;(statearr_74689_74710[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_74681);
return cljs.core.constant$keyword$1120;
} else
{throw e74688;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__74711 = state_74681;
state_74681 = G__74711;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_74681){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_74681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___74709,notify_chan_74708,temp__4126__auto___74707,vec__74676_74703,new_threshold_colors_74704,selection_path_colours_74705,update_paths_invocation_74706,map__74673,map__74673__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__74674,map__74674__$1,map__74675,map__74675__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__74668,map__74668__$1,next_cursor_data,map__74669,map__74669__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__74670,map__74670__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__74671,map__74671__$1,map__74672,map__74672__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
})();var state__5821__auto__ = (function (){var statearr_74690 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_74690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___74709);
return statearr_74690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___74709,notify_chan_74708,temp__4126__auto___74707,vec__74676_74703,new_threshold_colors_74704,selection_path_colours_74705,update_paths_invocation_74706,map__74673,map__74673__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__74674,map__74674__$1,map__74675,map__74675__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__74668,map__74668__$1,next_cursor_data,map__74669,map__74669__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__74670,map__74670__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__74671,map__74671__$1,map__74672,map__74672__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_point_data,self__.point_data))
{return clustermap.components.map.update_markers(path_fn,leaflet_map,next_markers,cljs.core.constant$keyword$1500.cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t74662.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t74662.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__74691 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__74691__$1 = ((cljs.core.seq_QMARK_(map__74691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74691):map__74691);var map = map__74691__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74691__$1,cljs.core.constant$keyword$1217);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74691__$1,cljs.core.constant$keyword$1604);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74691__$1,cljs.core.constant$keyword$1603);var map__74692 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__74692__$1 = ((cljs.core.seq_QMARK_(map__74692))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74692):map__74692);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74692__$1,cljs.core.constant$keyword$1491);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74692__$1,cljs.core.constant$keyword$1492);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74692__$1,cljs.core.constant$keyword$1635);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74692__$1,cljs.core.constant$keyword$1636);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74692__$1,cljs.core.constant$keyword$1312);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1630], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1142], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1339,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1634,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1630], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1142], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupopen",((function (node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1642,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupclose",((function (node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1642,null);
});})(node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("mousemove",((function (node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (function (){var G__74693 = lng;var G__74694 = lat;return (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(G__74693,G__74694) : point_in_boundarylines_fn.call(null,G__74693,G__74694));
})();var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$1162.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1634);if(cljs.core.truth_((function (){var and__3625__auto__ = highlight_hit;if(cljs.core.truth_(and__3625__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1642)));
} else
{return and__3625__auto__;
}
})()))
{var G__74695_74712 = (function (){return L.popup();
})();G__74695_74712.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__74695_74712.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__74695_74712.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1634,highlight_path_ids);
});})(node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("click",((function (node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var hits = (function (){var G__74696 = e.latlng.lng;var G__74697 = e.latlng.lat;return (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(G__74696,G__74697) : point_in_boundarylines_fn.call(null,G__74696,G__74697));
})();var boundaryline_id = (function (){var G__74698 = hits;var G__74698__$1 = (((G__74698 == null))?null:cljs.core.first(G__74698));var G__74698__$2 = (((G__74698__$1 == null))?null:cljs.core.constant$keyword$1162.cljs$core$IFn$_invoke$arity$1(G__74698__$1));return G__74698__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var adr_74713 = clustermap.ordered_resource.make_discard_stale_resource("aggregation-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1633,adr_74713);
clustermap.ordered_resource.retrieve_responses(adr_74713,((function (adr_74713,node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1305], null),data__$2);
});})(adr_74713,node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var pdr = clustermap.ordered_resource.make_discard_stale_resource("point-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1632,pdr);
return clustermap.ordered_resource.retrieve_responses(pdr,((function (pdr,node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (point_data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1624], null),point_data__$2);
});})(pdr,node,map__74691,map__74691__$1,map,path,markers,leaflet_map,map__74692,map__74692__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t74662.prototype.om$core$IRender$ = true;
clustermap.components.map.t74662.prototype.om$core$IRender$render$arity$1 = ((function (map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var G__74701 = {"className": "map", "ref": "map"};return React.DOM.div(G__74701);
});})(map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t74662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_74664){var self__ = this;
var _74664__$1 = this;return self__.meta74663;
});})(map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t74662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_74664,meta74663__$1){var self__ = this;
var _74664__$1 = this;return (new clustermap.components.map.t74662(self__.colorchooser,self__.initial_bounds,self__.owner,self__.data,self__.zoom,self__.cursor_data,self__.map__74660,self__.map_component,self__.boundaryline_collections,self__.p__74615,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.filter,self__.map__74661,self__.map__74659,self__.point_data,self__.boundaryline_agg,meta74663__$1));
});})(map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.__GT_t74662 = ((function (map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function __GT_t74662(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,zoom__$1,cursor_data__$1,map__74660__$2,map_component__$1,boundaryline_collections__$1,p__74615__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,filter__$1,map__74661__$2,map__74659__$2,point_data__$1,boundaryline_agg__$1,meta74663){return (new clustermap.components.map.t74662(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,zoom__$1,cursor_data__$1,map__74660__$2,map_component__$1,boundaryline_collections__$1,p__74615__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,filter__$1,map__74661__$2,map__74659__$2,point_data__$1,boundaryline_agg__$1,meta74663));
});})(map__74659,map__74659__$1,cursor_data,map__74660,map__74660__$1,cursor,data,point_data,boundaryline_collections,map__74661,map__74661__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
}
return (new clustermap.components.map.t74662(colorchooser,initial_bounds,owner,data,zoom,cursor_data,map__74660__$1,map_component,boundaryline_collections,p__74615,cursor,threshold_colors,bounds,boundaryline_collection,filter,map__74661__$1,map__74659__$1,point_data,boundaryline_agg,null));
});
