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
clustermap.components.map.api_key = (function (){var or__3558__auto__ = (function (){var G__39476 = config;var G__39476__$1 = (((G__39476 == null))?null:G__39476.components);var G__39476__$2 = (((G__39476__$1 == null))?null:G__39476__$1.map);var G__39476__$3 = (((G__39476__$2 == null))?null:G__39476__$2.api_key);return G__39476__$3;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1193,m,cljs.core.constant$keyword$1194,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1177,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1195,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY))], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__39477){
var m = cljs.core.first(arglist__39477);
var all_bounds = cljs.core.rest(arglist__39477);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs39479 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$932,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1014,site) : path_fn.call(null,cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1014,site)),cljs.core.constant$keyword$914,null,cljs.core.constant$keyword$923,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs39479))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$914,null,cljs.core.constant$keyword$923,"map-marker-popup-location-list"], null),attrs39479], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs39479))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__39482 = location_sites;var G__39482__$1 = (((G__39482 == null))?null:cljs.core.first(G__39482));var G__39482__$2 = (((G__39482__$1 == null))?null:cljs.core.constant$keyword$1196.cljs$core$IFn$_invoke$arity$1(G__39482__$1));var G__39482__$3 = (((G__39482__$2 == null))?null:cljs.core.reverse(G__39482__$2));var G__39482__$4 = (((G__39482__$3 == null))?null:cljs.core.clj__GT_js(G__39482__$3));return G__39482__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$925,"map-marker",cljs.core.constant$keyword$1197,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1200,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4485__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_39483_39484 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_39483_39484,sb__4485__auto__,temp__4124__auto__){
return (function (x__4486__auto__){return sb__4485__auto__.append(x__4486__auto__);
});})(_STAR_print_fn_STAR_39483_39484,sb__4485__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39483_39484;
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
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1025], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1025], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__39489 = cljs.core.seq(remove_marker_keys);var chunk__39490 = null;var count__39491 = (0);var i__39492 = (0);while(true){
if((i__39492 < count__39491))
{var k = chunk__39490.cljs$core$IIndexed$_nth$arity$2(null,i__39492);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__39493 = seq__39489;
var G__39494 = chunk__39490;
var G__39495 = count__39491;
var G__39496 = (i__39492 + (1));
seq__39489 = G__39493;
chunk__39490 = G__39494;
count__39491 = G__39495;
i__39492 = G__39496;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39489);if(temp__4126__auto__)
{var seq__39489__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39489__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__39489__$1);{
var G__39497 = cljs.core.chunk_rest(seq__39489__$1);
var G__39498 = c__4314__auto__;
var G__39499 = cljs.core.count(c__4314__auto__);
var G__39500 = (0);
seq__39489 = G__39497;
chunk__39490 = G__39498;
count__39491 = G__39499;
i__39492 = G__39500;
continue;
}
} else
{var k = cljs.core.first(seq__39489__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__39501 = cljs.core.next(seq__39489__$1);
var G__39502 = null;
var G__39503 = (0);
var G__39504 = (0);
seq__39489 = G__39501;
chunk__39490 = G__39502;
count__39491 = G__39503;
i__39492 = G__39504;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__39513 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__39513__$1 = ((cljs.core.seq_QMARK_(map__39513))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39513):map__39513);var clj_envelope = map__39513__$1;var vec__39514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39513__$1,"coordinates");var vec__39515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39514,(0),null);var vec__39516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39515,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39516,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39516,(1),null);var vec__39517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39515,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39517,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39517,(1),null);var vec__39518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39515,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39518,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39518,(1),null);var vec__39519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39515,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39519,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39519,(1),null);var vec__39520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39515,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39520,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39520,(1),null);var inner = vec__39515;var coords = vec__39514;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__39521){var map__39523 = p__39521;var map__39523__$1 = ((cljs.core.seq_QMARK_(map__39523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39523):map__39523);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,cljs.core.constant$keyword$1201);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,cljs.core.constant$keyword$1202);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39523__$1,cljs.core.constant$keyword$946);if(cljs.core.truth_((function (){var and__3546__auto__ = selected;if(cljs.core.truth_(and__3546__auto__))
{return highlighted;
} else
{return and__3546__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1203,"#000000",cljs.core.constant$keyword$1204,fill_color,cljs.core.constant$keyword$1205,(2),cljs.core.constant$keyword$1206,(1),cljs.core.constant$keyword$1207,true,cljs.core.constant$keyword$1208,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1203,"#8c2d04",cljs.core.constant$keyword$1204,fill_color,cljs.core.constant$keyword$1205,(1),cljs.core.constant$keyword$1206,(1),cljs.core.constant$keyword$1207,true,cljs.core.constant$keyword$1208,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1203,"#000000",cljs.core.constant$keyword$1204,fill_color,cljs.core.constant$keyword$1205,(2),cljs.core.constant$keyword$1206,(1),cljs.core.constant$keyword$1207,false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1203,"#8c2d04",cljs.core.constant$keyword$1204,fill_color,cljs.core.constant$keyword$1205,(1),cljs.core.constant$keyword$1206,(0),cljs.core.constant$keyword$1207,false,cljs.core.constant$keyword$1208,(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__39524){var map__39526 = p__39524;var map__39526__$1 = ((cljs.core.seq_QMARK_(map__39526))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39526):map__39526);var path_attrs = map__39526__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39526__$1,cljs.core.constant$keyword$946);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__39526,map__39526__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1017,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__39526,map__39526__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$914,boundaryline_id,cljs.core.constant$keyword$898,tolerance,cljs.core.constant$keyword$946,selected,cljs.core.constant$keyword$1209,leaflet_path,cljs.core.constant$keyword$900,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1209.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$914.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__39527,tolerance,js_boundaryline,path_attrs){var map__39529 = p__39527;var map__39529__$1 = ((cljs.core.seq_QMARK_(map__39529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39529):map__39529);var path = map__39529__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39529__$1,cljs.core.constant$keyword$914);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1209.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1209.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paths_atom) : cljs.core.deref.call(null,paths_atom));var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path_selections_atom) : cljs.core.deref.call(null,path_selections_atom));var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1210,create_path_keys,cljs.core.constant$keyword$1211,delete_path_keys,cljs.core.constant$keyword$1212,update_path_keys], null)));var vec__39543 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$899,live_path_keys) : fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$899,live_path_keys));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39543,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39543,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan){
return (function (p__39544){var vec__39545 = p__39544;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39545,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$946,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1201,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1202,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan){
return (function (k){var vec__39546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39546,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39546,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan,created_paths){
return (function (p__39547){var vec__39548 = p__39547;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39548,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39548,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39548,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$946,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1201,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1202,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__39549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39549,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39549,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__39550 = cljs.core.seq(delete_path_keys);var chunk__39551 = null;var count__39552 = (0);var i__39553 = (0);while(true){
if((i__39553 < count__39552))
{var k = chunk__39551.cljs$core$IIndexed$_nth$arity$2(null,i__39553);var temp__4124__auto___39556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___39556))
{var path_39557 = temp__4124__auto___39556;clustermap.components.map.delete_path(leaflet_map,path_39557);
} else
{}
{
var G__39558 = seq__39550;
var G__39559 = chunk__39551;
var G__39560 = count__39552;
var G__39561 = (i__39553 + (1));
seq__39550 = G__39558;
chunk__39551 = G__39559;
count__39552 = G__39560;
i__39553 = G__39561;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39550);if(temp__4126__auto__)
{var seq__39550__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39550__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__39550__$1);{
var G__39562 = cljs.core.chunk_rest(seq__39550__$1);
var G__39563 = c__4314__auto__;
var G__39564 = cljs.core.count(c__4314__auto__);
var G__39565 = (0);
seq__39550 = G__39562;
chunk__39551 = G__39563;
count__39552 = G__39564;
i__39553 = G__39565;
continue;
}
} else
{var k = cljs.core.first(seq__39550__$1);var temp__4124__auto___39566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___39566))
{var path_39567 = temp__4124__auto___39566;clustermap.components.map.delete_path(leaflet_map,path_39567);
} else
{}
{
var G__39568 = cljs.core.next(seq__39550__$1);
var G__39569 = null;
var G__39570 = (0);
var G__39571 = (0);
seq__39550 = G__39568;
chunk__39551 = G__39569;
count__39552 = G__39570;
i__39553 = G__39571;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__39554){var map__39555 = p__39554;var map__39555__$1 = ((cljs.core.seq_QMARK_(map__39555))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39555):map__39555);var path = map__39555__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39555__$1,cljs.core.constant$keyword$914);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__39543,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(path_selections_atom,new_selection_path_keys) : cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(paths_atom,new_paths) : cljs.core.reset_BANG_.call(null,paths_atom,new_paths));
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$914.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$916.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$932,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1017,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,bl_id,cljs.core.constant$keyword$916,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$1189,cljs.core.constant$keyword$1017,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,bl_id,cljs.core.constant$keyword$916,bl_name], null))),cljs.core.constant$keyword$914,null,cljs.core.constant$keyword$923,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs39573 = bl_name;if(cljs.core.map_QMARK_(attrs39573))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$914,null,cljs.core.constant$keyword$923,"map-marker-constituency-name"], null),attrs39573], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs39573))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__39576){var vec__39577 = p__39576;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39577,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39577,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.boundaryline_aggregation,cljs.core.array_seq([index,index_type,blcoll,variable,filter,bounds], 0));
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.location_lists,cljs.core.array_seq([index,index_type,"!postcode",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds], 0));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__39578,owner){var map__39617 = p__39578;var map__39617__$1 = ((cljs.core.seq_QMARK_(map__39617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39617):map__39617);var cursor_data = map__39617__$1;var map__39618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39617__$1,cljs.core.constant$keyword$1213);var map__39618__$1 = ((cljs.core.seq_QMARK_(map__39618))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39618):map__39618);var cursor = map__39618__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618__$1,cljs.core.constant$keyword$999);var point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618__$1,cljs.core.constant$keyword$1214);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618__$1,cljs.core.constant$keyword$1215);var map__39619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618__$1,cljs.core.constant$keyword$1003);var map__39619__$1 = ((cljs.core.seq_QMARK_(map__39619))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39619):map__39619);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,cljs.core.constant$keyword$1216);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,cljs.core.constant$keyword$1217);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,cljs.core.constant$keyword$1218);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,cljs.core.constant$keyword$1219);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,cljs.core.constant$keyword$1220);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,cljs.core.constant$keyword$900);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,cljs.core.constant$keyword$1221);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39617__$1,cljs.core.constant$keyword$901);if(typeof clustermap.components.map.t39620 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t39620 = (function (colorchooser,map__39618,initial_bounds,owner,map__39617,data,zoom,p__39578,cursor_data,map__39619,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,filter,point_data,boundaryline_agg,meta39621){
this.colorchooser = colorchooser;
this.map__39618 = map__39618;
this.initial_bounds = initial_bounds;
this.owner = owner;
this.map__39617 = map__39617;
this.data = data;
this.zoom = zoom;
this.p__39578 = p__39578;
this.cursor_data = cursor_data;
this.map__39619 = map__39619;
this.map_component = map_component;
this.boundaryline_collections = boundaryline_collections;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.filter = filter;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta39621 = meta39621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t39620.cljs$lang$type = true;
clustermap.components.map.t39620.cljs$lang$ctorStr = "clustermap.components.map/t39620";
clustermap.components.map.t39620.cljs$lang$ctorPrWriter = ((function (map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map/t39620");
});})(map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t39620.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t39620.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__39623 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39623__$1 = ((cljs.core.seq_QMARK_(map__39623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39623):map__39623);var point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39623__$1,cljs.core.constant$keyword$1222);var aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39623__$1,cljs.core.constant$keyword$1223);clustermap.ordered_resource.close(aggregation_data_resource);
return clustermap.ordered_resource.close(point_data_resource);
});})(map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t39620.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t39620.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$,p__39624,p__39625){var self__ = this;
var map__39626 = p__39624;var map__39626__$1 = ((cljs.core.seq_QMARK_(map__39626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39626):map__39626);var next_cursor_data = map__39626__$1;var map__39627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39626__$1,cljs.core.constant$keyword$1213);var map__39627__$1 = ((cljs.core.seq_QMARK_(map__39627))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39627):map__39627);var next_cursor = map__39627__$1;var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39627__$1,cljs.core.constant$keyword$999);var next_point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39627__$1,cljs.core.constant$keyword$1214);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39627__$1,cljs.core.constant$keyword$1215);var map__39628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39627__$1,cljs.core.constant$keyword$1003);var map__39628__$1 = ((cljs.core.seq_QMARK_(map__39628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39628):map__39628);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39628__$1,cljs.core.constant$keyword$1220);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39628__$1,cljs.core.constant$keyword$900);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39628__$1,cljs.core.constant$keyword$1219);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39628__$1,cljs.core.constant$keyword$1218);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39628__$1,cljs.core.constant$keyword$1217);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39628__$1,cljs.core.constant$keyword$1216);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39626__$1,cljs.core.constant$keyword$901);var map__39629 = p__39625;var map__39629__$1 = ((cljs.core.seq_QMARK_(map__39629))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39629):map__39629);var map__39630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,cljs.core.constant$keyword$1189);var map__39630__$1 = ((cljs.core.seq_QMARK_(map__39630))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39630):map__39630);var next_markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39630__$1,cljs.core.constant$keyword$1194);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39630__$1,cljs.core.constant$keyword$1177);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39630__$1,cljs.core.constant$keyword$1195);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,cljs.core.constant$keyword$1224);var next_aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,cljs.core.constant$keyword$1223);var next_point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,cljs.core.constant$keyword$1222);var this$__$1 = this;var map__39631 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39631__$1 = ((cljs.core.seq_QMARK_(map__39631))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39631):map__39631);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,cljs.core.constant$keyword$1225);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,cljs.core.constant$keyword$1226);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,cljs.core.constant$keyword$1013);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,cljs.core.constant$keyword$1012);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39631__$1,cljs.core.constant$keyword$1023);var map__39632 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39632__$1 = ((cljs.core.seq_QMARK_(map__39632))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39632):map__39632);var map__39633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39632__$1,cljs.core.constant$keyword$1189);var map__39633__$1 = ((cljs.core.seq_QMARK_(map__39633))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39633):map__39633);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39633__$1,cljs.core.constant$keyword$1195);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39633__$1,cljs.core.constant$keyword$1177);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39633__$1,cljs.core.constant$keyword$1194);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39633__$1,cljs.core.constant$keyword$1193);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39632__$1,cljs.core.constant$keyword$1227);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39632__$1,cljs.core.constant$keyword$1224);if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$900], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1219], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
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
{var ticket_39655 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1228], null),ticket_39655);
clustermap.components.map.request_aggregation_data(next_aggregation_data_resource,cljs.core.constant$keyword$910.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1006.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1229.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
clustermap.components.map.request_point_data(next_point_data_resource,cljs.core.constant$keyword$910.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1006.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,self__.data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,self__.colorchooser)))
{var vec__39634_39656 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1230.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1231.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$915,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1229.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1025.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_39657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39634_39656,(0),null);var selection_path_colours_39658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39634_39656,(1),null);var update_paths_invocation_39659 = ((function (vec__39634_39656,new_threshold_colors_39657,selection_path_colours_39658,map__39631,map__39631__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39632,map__39632__$1,map__39633,map__39633__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39626,map__39626__$1,next_cursor_data,map__39627,map__39627__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__39628,map__39628__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__39629,map__39629__$1,map__39630,map__39630__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_39658);
});})(vec__39634_39656,new_threshold_colors_39657,selection_path_colours_39658,map__39631,map__39631__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39632,map__39632__$1,map__39633,map__39633__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39626,map__39626__$1,next_cursor_data,map__39627,map__39627__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__39628,map__39628__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__39629,map__39629__$1,map__39630,map__39630__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors_39657,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1216], null),new_threshold_colors_39657);
} else
{}
var temp__4126__auto___39660 = update_paths_invocation_39659();if(cljs.core.truth_(temp__4126__auto___39660))
{var notify_chan_39661 = temp__4126__auto___39660;var c__5708__auto___39662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___39662,notify_chan_39661,temp__4126__auto___39660,vec__39634_39656,new_threshold_colors_39657,selection_path_colours_39658,update_paths_invocation_39659,map__39631,map__39631__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39632,map__39632__$1,map__39633,map__39633__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39626,map__39626__$1,next_cursor_data,map__39627,map__39627__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__39628,map__39628__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__39629,map__39629__$1,map__39630,map__39630__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___39662,notify_chan_39661,temp__4126__auto___39660,vec__39634_39656,new_threshold_colors_39657,selection_path_colours_39658,update_paths_invocation_39659,map__39631,map__39631__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39632,map__39632__$1,map__39633,map__39633__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39626,map__39626__$1,next_cursor_data,map__39627,map__39627__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__39628,map__39628__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__39629,map__39629__$1,map__39630,map__39630__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (state_39639){var state_val_39640 = (state_39639[(1)]);if((state_val_39640 === (2)))
{var inst_39636 = (state_39639[(2)]);var inst_39637 = update_paths_invocation_39659();var state_39639__$1 = (function (){var statearr_39641 = state_39639;(statearr_39641[(7)] = inst_39636);
return statearr_39641;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39639__$1,inst_39637);
} else
{if((state_val_39640 === (1)))
{var state_39639__$1 = state_39639;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39639__$1,(2),notify_chan_39661);
} else
{return null;
}
}
});})(c__5708__auto___39662,notify_chan_39661,temp__4126__auto___39660,vec__39634_39656,new_threshold_colors_39657,selection_path_colours_39658,update_paths_invocation_39659,map__39631,map__39631__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39632,map__39632__$1,map__39633,map__39633__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39626,map__39626__$1,next_cursor_data,map__39627,map__39627__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__39628,map__39628__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__39629,map__39629__$1,map__39630,map__39630__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;return ((function (switch__5693__auto__,c__5708__auto___39662,notify_chan_39661,temp__4126__auto___39660,vec__39634_39656,new_threshold_colors_39657,selection_path_colours_39658,update_paths_invocation_39659,map__39631,map__39631__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39632,map__39632__$1,map__39633,map__39633__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39626,map__39626__$1,next_cursor_data,map__39627,map__39627__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__39628,map__39628__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__39629,map__39629__$1,map__39630,map__39630__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_39645 = [null,null,null,null,null,null,null,null];(statearr_39645[(0)] = state_machine__5694__auto__);
(statearr_39645[(1)] = (1));
return statearr_39645;
});
var state_machine__5694__auto____1 = (function (state_39639){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39639);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39646){if((e39646 instanceof Object))
{var ex__5697__auto__ = e39646;var statearr_39647_39663 = state_39639;(statearr_39647_39663[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39639);
return cljs.core.constant$keyword$880;
} else
{throw e39646;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__39664 = state_39639;
state_39639 = G__39664;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39639){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___39662,notify_chan_39661,temp__4126__auto___39660,vec__39634_39656,new_threshold_colors_39657,selection_path_colours_39658,update_paths_invocation_39659,map__39631,map__39631__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39632,map__39632__$1,map__39633,map__39633__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39626,map__39626__$1,next_cursor_data,map__39627,map__39627__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__39628,map__39628__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__39629,map__39629__$1,map__39630,map__39630__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
})();var state__5710__auto__ = (function (){var statearr_39648 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___39662);
return statearr_39648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___39662,notify_chan_39661,temp__4126__auto___39660,vec__39634_39656,new_threshold_colors_39657,selection_path_colours_39658,update_paths_invocation_39659,map__39631,map__39631__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39632,map__39632__$1,map__39633,map__39633__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39626,map__39626__$1,next_cursor_data,map__39627,map__39627__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__39628,map__39628__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__39629,map__39629__$1,map__39630,map__39630__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_point_data,self__.point_data))
{return clustermap.components.map.update_markers(path_fn,leaflet_map,next_markers,cljs.core.constant$keyword$1025.cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t39620.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t39620.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39649 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__39649__$1 = ((cljs.core.seq_QMARK_(map__39649))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39649):map__39649);var map = map__39649__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39649__$1,cljs.core.constant$keyword$954);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39649__$1,cljs.core.constant$keyword$1194);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39649__$1,cljs.core.constant$keyword$1193);var map__39650 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39650__$1 = ((cljs.core.seq_QMARK_(map__39650))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39650):map__39650);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39650__$1,cljs.core.constant$keyword$1012);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39650__$1,cljs.core.constant$keyword$1013);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39650__$1,cljs.core.constant$keyword$1225);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39650__$1,cljs.core.constant$keyword$1226);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39650__$1,cljs.core.constant$keyword$1023);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1220], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$900], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1189,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1224,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1220], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$900], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupopen",((function (node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1232,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupclose",((function (node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1232,null);
});})(node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("mousemove",((function (node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$914.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1224);if(cljs.core.truth_((function (){var and__3546__auto__ = highlight_hit;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1232)));
} else
{return and__3546__auto__;
}
})()))
{var G__39651_39665 = L.popup();G__39651_39665.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__39651_39665.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__39651_39665.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1224,highlight_path_ids);
});})(node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("click",((function (node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__39652 = hits;var G__39652__$1 = (((G__39652 == null))?null:cljs.core.first(G__39652));var G__39652__$2 = (((G__39652__$1 == null))?null:cljs.core.constant$keyword$914.cljs$core$IFn$_invoke$arity$1(G__39652__$1));return G__39652__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1017,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var adr_39666 = clustermap.ordered_resource.make_discard_stale_resource("aggregation-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1223,adr_39666);
clustermap.ordered_resource.retrieve_responses(adr_39666,((function (adr_39666,node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$999], null),data__$2);
});})(adr_39666,node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var pdr = clustermap.ordered_resource.make_discard_stale_resource("point-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1222,pdr);
return clustermap.ordered_resource.retrieve_responses(pdr,((function (pdr,node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (point_data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1214], null),point_data__$2);
});})(pdr,node,map__39649,map__39649__$1,map,path,markers,leaflet_map,map__39650,map__39650__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t39620.prototype.om$core$IRender$ = true;
clustermap.components.map.t39620.prototype.om$core$IRender$render$arity$1 = ((function (map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t39620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_39622){var self__ = this;
var _39622__$1 = this;return self__.meta39621;
});})(map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t39620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_39622,meta39621__$1){var self__ = this;
var _39622__$1 = this;return (new clustermap.components.map.t39620(self__.colorchooser,self__.map__39618,self__.initial_bounds,self__.owner,self__.map__39617,self__.data,self__.zoom,self__.p__39578,self__.cursor_data,self__.map__39619,self__.map_component,self__.boundaryline_collections,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.filter,self__.point_data,self__.boundaryline_agg,meta39621__$1));
});})(map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.__GT_t39620 = ((function (map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function __GT_t39620(colorchooser__$1,map__39618__$2,initial_bounds__$1,owner__$1,map__39617__$2,data__$1,zoom__$1,p__39578__$1,cursor_data__$1,map__39619__$2,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,filter__$1,point_data__$1,boundaryline_agg__$1,meta39621){return (new clustermap.components.map.t39620(colorchooser__$1,map__39618__$2,initial_bounds__$1,owner__$1,map__39617__$2,data__$1,zoom__$1,p__39578__$1,cursor_data__$1,map__39619__$2,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,filter__$1,point_data__$1,boundaryline_agg__$1,meta39621));
});})(map__39617,map__39617__$1,cursor_data,map__39618,map__39618__$1,cursor,data,point_data,boundaryline_collections,map__39619,map__39619__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
}
return (new clustermap.components.map.t39620(colorchooser,map__39618__$1,initial_bounds,owner,map__39617__$1,data,zoom,p__39578,cursor_data,map__39619__$1,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,filter,point_data,boundaryline_agg,null));
});
