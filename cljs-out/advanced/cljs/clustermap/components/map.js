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
clustermap.components.map.api_key = (function (){var or__3558__auto__ = (function (){var G__40023 = config;var G__40023__$1 = (((G__40023 == null))?null:G__40023.components);var G__40023__$2 = (((G__40023__$1 == null))?null:G__40023__$1.map);var G__40023__$3 = (((G__40023__$2 == null))?null:G__40023__$2.api_key);return G__40023__$3;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1184,m,cljs.core.constant$keyword$1185,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1168,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1186,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY))], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__40024){
var m = cljs.core.first(arglist__40024);
var all_bounds = cljs.core.rest(arglist__40024);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs40026 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$924,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1180,cljs.core.constant$keyword$1006,site) : path_fn.call(null,cljs.core.constant$keyword$1180,cljs.core.constant$keyword$1006,site)),cljs.core.constant$keyword$906,null,cljs.core.constant$keyword$915,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$933.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs40026))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$906,null,cljs.core.constant$keyword$915,"map-marker-popup-location-list"], null),attrs40026], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs40026))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__40029 = location_sites;var G__40029__$1 = (((G__40029 == null))?null:cljs.core.first(G__40029));var G__40029__$2 = (((G__40029__$1 == null))?null:cljs.core.constant$keyword$1187.cljs$core$IFn$_invoke$arity$1(G__40029__$1));var G__40029__$3 = (((G__40029__$2 == null))?null:cljs.core.reverse(G__40029__$2));var G__40029__$4 = (((G__40029__$3 == null))?null:cljs.core.clj__GT_js(G__40029__$3));return G__40029__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$917,"map-marker",cljs.core.constant$keyword$1188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1191,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4485__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_40030_40031 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_40030_40031,sb__4485__auto__,temp__4124__auto__){
return (function (x__4486__auto__){return sb__4485__auto__.append(x__4486__auto__);
});})(_STAR_print_fn_STAR_40030_40031,sb__4485__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40030_40031;
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
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1017], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1017], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__40036 = cljs.core.seq(remove_marker_keys);var chunk__40037 = null;var count__40038 = (0);var i__40039 = (0);while(true){
if((i__40039 < count__40038))
{var k = chunk__40037.cljs$core$IIndexed$_nth$arity$2(null,i__40039);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__40040 = seq__40036;
var G__40041 = chunk__40037;
var G__40042 = count__40038;
var G__40043 = (i__40039 + (1));
seq__40036 = G__40040;
chunk__40037 = G__40041;
count__40038 = G__40042;
i__40039 = G__40043;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40036);if(temp__4126__auto__)
{var seq__40036__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40036__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__40036__$1);{
var G__40044 = cljs.core.chunk_rest(seq__40036__$1);
var G__40045 = c__4314__auto__;
var G__40046 = cljs.core.count(c__4314__auto__);
var G__40047 = (0);
seq__40036 = G__40044;
chunk__40037 = G__40045;
count__40038 = G__40046;
i__40039 = G__40047;
continue;
}
} else
{var k = cljs.core.first(seq__40036__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__40048 = cljs.core.next(seq__40036__$1);
var G__40049 = null;
var G__40050 = (0);
var G__40051 = (0);
seq__40036 = G__40048;
chunk__40037 = G__40049;
count__40038 = G__40050;
i__40039 = G__40051;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__40060 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__40060__$1 = ((cljs.core.seq_QMARK_(map__40060))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40060):map__40060);var clj_envelope = map__40060__$1;var vec__40061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40060__$1,"coordinates");var vec__40062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40061,(0),null);var vec__40063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40063,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40063,(1),null);var vec__40064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40064,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40064,(1),null);var vec__40065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40065,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40065,(1),null);var vec__40066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40066,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40066,(1),null);var vec__40067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40062,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40067,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40067,(1),null);var inner = vec__40062;var coords = vec__40061;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__40068){var map__40070 = p__40068;var map__40070__$1 = ((cljs.core.seq_QMARK_(map__40070))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40070):map__40070);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40070__$1,cljs.core.constant$keyword$1192);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40070__$1,cljs.core.constant$keyword$1193);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40070__$1,cljs.core.constant$keyword$938);if(cljs.core.truth_((function (){var and__3546__auto__ = selected;if(cljs.core.truth_(and__3546__auto__))
{return highlighted;
} else
{return and__3546__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1194,"#000000",cljs.core.constant$keyword$1195,fill_color,cljs.core.constant$keyword$1196,(2),cljs.core.constant$keyword$1197,(1),cljs.core.constant$keyword$1198,true,cljs.core.constant$keyword$1199,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1194,"#8c2d04",cljs.core.constant$keyword$1195,fill_color,cljs.core.constant$keyword$1196,(1),cljs.core.constant$keyword$1197,(1),cljs.core.constant$keyword$1198,true,cljs.core.constant$keyword$1199,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1194,"#000000",cljs.core.constant$keyword$1195,fill_color,cljs.core.constant$keyword$1196,(2),cljs.core.constant$keyword$1197,(1),cljs.core.constant$keyword$1198,false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1194,"#8c2d04",cljs.core.constant$keyword$1195,fill_color,cljs.core.constant$keyword$1196,(1),cljs.core.constant$keyword$1197,(0),cljs.core.constant$keyword$1198,false,cljs.core.constant$keyword$1199,(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__40071){var map__40073 = p__40071;var map__40073__$1 = ((cljs.core.seq_QMARK_(map__40073))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40073):map__40073);var path_attrs = map__40073__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40073__$1,cljs.core.constant$keyword$938);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__40073,map__40073__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$940,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1009,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__40073,map__40073__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$906,boundaryline_id,cljs.core.constant$keyword$890,tolerance,cljs.core.constant$keyword$938,selected,cljs.core.constant$keyword$1200,leaflet_path,cljs.core.constant$keyword$892,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1200.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__40074,tolerance,js_boundaryline,path_attrs){var map__40076 = p__40074;var map__40076__$1 = ((cljs.core.seq_QMARK_(map__40076))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40076):map__40076);var path = map__40076__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40076__$1,cljs.core.constant$keyword$906);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$890.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1200.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1200.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paths_atom) : cljs.core.deref.call(null,paths_atom));var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path_selections_atom) : cljs.core.deref.call(null,path_selections_atom));var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1201,create_path_keys,cljs.core.constant$keyword$1202,delete_path_keys,cljs.core.constant$keyword$1203,update_path_keys], null)));var vec__40090 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$891,live_path_keys) : fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$891,live_path_keys));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40090,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40090,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan){
return (function (p__40091){var vec__40092 = p__40091;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40092,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40092,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40092,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$938,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1192,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1193,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan){
return (function (k){var vec__40093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40093,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40093,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan,created_paths){
return (function (p__40094){var vec__40095 = p__40094;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40095,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40095,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40095,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$938,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1192,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1193,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__40096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40096,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40096,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__40097 = cljs.core.seq(delete_path_keys);var chunk__40098 = null;var count__40099 = (0);var i__40100 = (0);while(true){
if((i__40100 < count__40099))
{var k = chunk__40098.cljs$core$IIndexed$_nth$arity$2(null,i__40100);var temp__4124__auto___40103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___40103))
{var path_40104 = temp__4124__auto___40103;clustermap.components.map.delete_path(leaflet_map,path_40104);
} else
{}
{
var G__40105 = seq__40097;
var G__40106 = chunk__40098;
var G__40107 = count__40099;
var G__40108 = (i__40100 + (1));
seq__40097 = G__40105;
chunk__40098 = G__40106;
count__40099 = G__40107;
i__40100 = G__40108;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40097);if(temp__4126__auto__)
{var seq__40097__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40097__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__40097__$1);{
var G__40109 = cljs.core.chunk_rest(seq__40097__$1);
var G__40110 = c__4314__auto__;
var G__40111 = cljs.core.count(c__4314__auto__);
var G__40112 = (0);
seq__40097 = G__40109;
chunk__40098 = G__40110;
count__40099 = G__40111;
i__40100 = G__40112;
continue;
}
} else
{var k = cljs.core.first(seq__40097__$1);var temp__4124__auto___40113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___40113))
{var path_40114 = temp__4124__auto___40113;clustermap.components.map.delete_path(leaflet_map,path_40114);
} else
{}
{
var G__40115 = cljs.core.next(seq__40097__$1);
var G__40116 = null;
var G__40117 = (0);
var G__40118 = (0);
seq__40097 = G__40115;
chunk__40098 = G__40116;
count__40099 = G__40117;
i__40100 = G__40118;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__40101){var map__40102 = p__40101;var map__40102__$1 = ((cljs.core.seq_QMARK_(map__40102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40102):map__40102);var path = map__40102__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40102__$1,cljs.core.constant$keyword$906);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__40090,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(path_selections_atom,new_selection_path_keys) : cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(paths_atom,new_paths) : cljs.core.reset_BANG_.call(null,paths_atom,new_paths));
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$908.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$924,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1180,cljs.core.constant$keyword$1009,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$907,bl_id,cljs.core.constant$keyword$908,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$1180,cljs.core.constant$keyword$1009,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$907,bl_id,cljs.core.constant$keyword$908,bl_name], null))),cljs.core.constant$keyword$906,null,cljs.core.constant$keyword$915,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs40120 = bl_name;if(cljs.core.map_QMARK_(attrs40120))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$906,null,cljs.core.constant$keyword$915,"map-marker-constituency-name"], null),attrs40120], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs40120))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40123){var vec__40124 = p__40123;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40124,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40124,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.boundaryline_aggregation,cljs.core.array_seq([index,index_type,blcoll,variable,filter,bounds], 0));
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.location_lists,cljs.core.array_seq([index,index_type,"!postcode",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds], 0));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__40125,owner){var map__40164 = p__40125;var map__40164__$1 = ((cljs.core.seq_QMARK_(map__40164))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40164):map__40164);var cursor_data = map__40164__$1;var map__40165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40164__$1,cljs.core.constant$keyword$1204);var map__40165__$1 = ((cljs.core.seq_QMARK_(map__40165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40165):map__40165);var cursor = map__40165__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$992);var point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$1205);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$1206);var map__40166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40165__$1,cljs.core.constant$keyword$980);var map__40166__$1 = ((cljs.core.seq_QMARK_(map__40166))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40166):map__40166);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,cljs.core.constant$keyword$1207);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,cljs.core.constant$keyword$1208);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,cljs.core.constant$keyword$1209);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,cljs.core.constant$keyword$1210);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,cljs.core.constant$keyword$1211);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,cljs.core.constant$keyword$892);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,cljs.core.constant$keyword$1212);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40164__$1,cljs.core.constant$keyword$893);if(typeof clustermap.components.map.t40167 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t40167 = (function (colorchooser,map__40164,initial_bounds,owner,data,zoom,cursor_data,map__40165,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,map__40166,filter,point_data,boundaryline_agg,p__40125,meta40168){
this.colorchooser = colorchooser;
this.map__40164 = map__40164;
this.initial_bounds = initial_bounds;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.cursor_data = cursor_data;
this.map__40165 = map__40165;
this.map_component = map_component;
this.boundaryline_collections = boundaryline_collections;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.map__40166 = map__40166;
this.filter = filter;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.p__40125 = p__40125;
this.meta40168 = meta40168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t40167.cljs$lang$type = true;
clustermap.components.map.t40167.cljs$lang$ctorStr = "clustermap.components.map/t40167";
clustermap.components.map.t40167.cljs$lang$ctorPrWriter = ((function (map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map/t40167");
});})(map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t40167.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t40167.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__40170 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__40170__$1 = ((cljs.core.seq_QMARK_(map__40170))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40170):map__40170);var point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40170__$1,cljs.core.constant$keyword$1213);var aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40170__$1,cljs.core.constant$keyword$1214);clustermap.ordered_resource.close(aggregation_data_resource);
return clustermap.ordered_resource.close(point_data_resource);
});})(map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t40167.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t40167.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$,p__40171,p__40172){var self__ = this;
var map__40173 = p__40171;var map__40173__$1 = ((cljs.core.seq_QMARK_(map__40173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40173):map__40173);var next_cursor_data = map__40173__$1;var map__40174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40173__$1,cljs.core.constant$keyword$1204);var map__40174__$1 = ((cljs.core.seq_QMARK_(map__40174))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40174):map__40174);var next_cursor = map__40174__$1;var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40174__$1,cljs.core.constant$keyword$992);var next_point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40174__$1,cljs.core.constant$keyword$1205);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40174__$1,cljs.core.constant$keyword$1206);var map__40175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40174__$1,cljs.core.constant$keyword$980);var map__40175__$1 = ((cljs.core.seq_QMARK_(map__40175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40175):map__40175);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40175__$1,cljs.core.constant$keyword$1211);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40175__$1,cljs.core.constant$keyword$892);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40175__$1,cljs.core.constant$keyword$1210);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40175__$1,cljs.core.constant$keyword$1209);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40175__$1,cljs.core.constant$keyword$1208);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40175__$1,cljs.core.constant$keyword$1207);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40173__$1,cljs.core.constant$keyword$893);var map__40176 = p__40172;var map__40176__$1 = ((cljs.core.seq_QMARK_(map__40176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40176):map__40176);var map__40177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40176__$1,cljs.core.constant$keyword$1180);var map__40177__$1 = ((cljs.core.seq_QMARK_(map__40177))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40177):map__40177);var next_markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40177__$1,cljs.core.constant$keyword$1185);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40177__$1,cljs.core.constant$keyword$1168);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40177__$1,cljs.core.constant$keyword$1186);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40176__$1,cljs.core.constant$keyword$1215);var next_aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40176__$1,cljs.core.constant$keyword$1214);var next_point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40176__$1,cljs.core.constant$keyword$1213);var this$__$1 = this;var map__40178 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__40178__$1 = ((cljs.core.seq_QMARK_(map__40178))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40178):map__40178);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,cljs.core.constant$keyword$1216);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,cljs.core.constant$keyword$1217);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,cljs.core.constant$keyword$1005);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,cljs.core.constant$keyword$1004);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40178__$1,cljs.core.constant$keyword$1015);var map__40179 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__40179__$1 = ((cljs.core.seq_QMARK_(map__40179))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40179):map__40179);var map__40180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40179__$1,cljs.core.constant$keyword$1180);var map__40180__$1 = ((cljs.core.seq_QMARK_(map__40180))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40180):map__40180);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,cljs.core.constant$keyword$1186);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,cljs.core.constant$keyword$1168);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,cljs.core.constant$keyword$1185);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,cljs.core.constant$keyword$1184);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40179__$1,cljs.core.constant$keyword$1218);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40179__$1,cljs.core.constant$keyword$1215);if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$980,cljs.core.constant$keyword$892], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$980,cljs.core.constant$keyword$1210], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
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
{var ticket_40202 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$980,cljs.core.constant$keyword$1219], null),ticket_40202);
clustermap.components.map.request_aggregation_data(next_aggregation_data_resource,cljs.core.constant$keyword$902.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$998.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1220.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
clustermap.components.map.request_point_data(next_point_data_resource,cljs.core.constant$keyword$902.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$998.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,self__.data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,self__.colorchooser)))
{var vec__40181_40203 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1221.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1222.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$907,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1220.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1017.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_40204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40181_40203,(0),null);var selection_path_colours_40205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40181_40203,(1),null);var update_paths_invocation_40206 = ((function (vec__40181_40203,new_threshold_colors_40204,selection_path_colours_40205,map__40178,map__40178__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__40179,map__40179__$1,map__40180,map__40180__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__40173,map__40173__$1,next_cursor_data,map__40174,map__40174__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__40175,map__40175__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__40176,map__40176__$1,map__40177,map__40177__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_40205);
});})(vec__40181_40203,new_threshold_colors_40204,selection_path_colours_40205,map__40178,map__40178__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__40179,map__40179__$1,map__40180,map__40180__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__40173,map__40173__$1,next_cursor_data,map__40174,map__40174__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__40175,map__40175__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__40176,map__40176__$1,map__40177,map__40177__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors_40204,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$980,cljs.core.constant$keyword$1207], null),new_threshold_colors_40204);
} else
{}
var temp__4126__auto___40207 = update_paths_invocation_40206();if(cljs.core.truth_(temp__4126__auto___40207))
{var notify_chan_40208 = temp__4126__auto___40207;var c__5708__auto___40209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___40209,notify_chan_40208,temp__4126__auto___40207,vec__40181_40203,new_threshold_colors_40204,selection_path_colours_40205,update_paths_invocation_40206,map__40178,map__40178__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__40179,map__40179__$1,map__40180,map__40180__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__40173,map__40173__$1,next_cursor_data,map__40174,map__40174__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__40175,map__40175__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__40176,map__40176__$1,map__40177,map__40177__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___40209,notify_chan_40208,temp__4126__auto___40207,vec__40181_40203,new_threshold_colors_40204,selection_path_colours_40205,update_paths_invocation_40206,map__40178,map__40178__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__40179,map__40179__$1,map__40180,map__40180__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__40173,map__40173__$1,next_cursor_data,map__40174,map__40174__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__40175,map__40175__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__40176,map__40176__$1,map__40177,map__40177__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (state_40186){var state_val_40187 = (state_40186[(1)]);if((state_val_40187 === (2)))
{var inst_40183 = (state_40186[(2)]);var inst_40184 = update_paths_invocation_40206();var state_40186__$1 = (function (){var statearr_40188 = state_40186;(statearr_40188[(7)] = inst_40183);
return statearr_40188;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_40186__$1,inst_40184);
} else
{if((state_val_40187 === (1)))
{var state_40186__$1 = state_40186;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40186__$1,(2),notify_chan_40208);
} else
{return null;
}
}
});})(c__5708__auto___40209,notify_chan_40208,temp__4126__auto___40207,vec__40181_40203,new_threshold_colors_40204,selection_path_colours_40205,update_paths_invocation_40206,map__40178,map__40178__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__40179,map__40179__$1,map__40180,map__40180__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__40173,map__40173__$1,next_cursor_data,map__40174,map__40174__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__40175,map__40175__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__40176,map__40176__$1,map__40177,map__40177__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;return ((function (switch__5693__auto__,c__5708__auto___40209,notify_chan_40208,temp__4126__auto___40207,vec__40181_40203,new_threshold_colors_40204,selection_path_colours_40205,update_paths_invocation_40206,map__40178,map__40178__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__40179,map__40179__$1,map__40180,map__40180__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__40173,map__40173__$1,next_cursor_data,map__40174,map__40174__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__40175,map__40175__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__40176,map__40176__$1,map__40177,map__40177__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_40192 = [null,null,null,null,null,null,null,null];(statearr_40192[(0)] = state_machine__5694__auto__);
(statearr_40192[(1)] = (1));
return statearr_40192;
});
var state_machine__5694__auto____1 = (function (state_40186){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_40186);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e40193){if((e40193 instanceof Object))
{var ex__5697__auto__ = e40193;var statearr_40194_40210 = state_40186;(statearr_40194_40210[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40186);
return cljs.core.constant$keyword$872;
} else
{throw e40193;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__40211 = state_40186;
state_40186 = G__40211;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_40186){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_40186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___40209,notify_chan_40208,temp__4126__auto___40207,vec__40181_40203,new_threshold_colors_40204,selection_path_colours_40205,update_paths_invocation_40206,map__40178,map__40178__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__40179,map__40179__$1,map__40180,map__40180__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__40173,map__40173__$1,next_cursor_data,map__40174,map__40174__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__40175,map__40175__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__40176,map__40176__$1,map__40177,map__40177__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
})();var state__5710__auto__ = (function (){var statearr_40195 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_40195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___40209);
return statearr_40195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___40209,notify_chan_40208,temp__4126__auto___40207,vec__40181_40203,new_threshold_colors_40204,selection_path_colours_40205,update_paths_invocation_40206,map__40178,map__40178__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__40179,map__40179__$1,map__40180,map__40180__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__40173,map__40173__$1,next_cursor_data,map__40174,map__40174__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__40175,map__40175__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__40176,map__40176__$1,map__40177,map__40177__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_point_data,self__.point_data))
{return clustermap.components.map.update_markers(path_fn,leaflet_map,next_markers,cljs.core.constant$keyword$1017.cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t40167.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t40167.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__40196 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__40196__$1 = ((cljs.core.seq_QMARK_(map__40196))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40196):map__40196);var map = map__40196__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40196__$1,cljs.core.constant$keyword$946);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40196__$1,cljs.core.constant$keyword$1185);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40196__$1,cljs.core.constant$keyword$1184);var map__40197 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__40197__$1 = ((cljs.core.seq_QMARK_(map__40197))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40197):map__40197);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40197__$1,cljs.core.constant$keyword$1004);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40197__$1,cljs.core.constant$keyword$1005);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40197__$1,cljs.core.constant$keyword$1216);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40197__$1,cljs.core.constant$keyword$1217);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40197__$1,cljs.core.constant$keyword$1015);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$980,cljs.core.constant$keyword$1211], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$980,cljs.core.constant$keyword$892], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1180,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1215,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$980,cljs.core.constant$keyword$1211], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$980,cljs.core.constant$keyword$892], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupopen",((function (node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1223,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupclose",((function (node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1223,null);
});})(node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("mousemove",((function (node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1215);if(cljs.core.truth_((function (){var and__3546__auto__ = highlight_hit;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1223)));
} else
{return and__3546__auto__;
}
})()))
{var G__40198_40212 = L.popup();G__40198_40212.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__40198_40212.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__40198_40212.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1215,highlight_path_ids);
});})(node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("click",((function (node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__40199 = hits;var G__40199__$1 = (((G__40199 == null))?null:cljs.core.first(G__40199));var G__40199__$2 = (((G__40199__$1 == null))?null:cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(G__40199__$1));return G__40199__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$940,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1009,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var adr_40213 = clustermap.ordered_resource.make_discard_stale_resource("aggregation-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1214,adr_40213);
clustermap.ordered_resource.retrieve_responses(adr_40213,((function (adr_40213,node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$992], null),data__$2);
});})(adr_40213,node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var pdr = clustermap.ordered_resource.make_discard_stale_resource("point-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1213,pdr);
return clustermap.ordered_resource.retrieve_responses(pdr,((function (pdr,node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (point_data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1205], null),point_data__$2);
});})(pdr,node,map__40196,map__40196__$1,map,path,markers,leaflet_map,map__40197,map__40197__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t40167.prototype.om$core$IRender$ = true;
clustermap.components.map.t40167.prototype.om$core$IRender$render$arity$1 = ((function (map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t40167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_40169){var self__ = this;
var _40169__$1 = this;return self__.meta40168;
});})(map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t40167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_40169,meta40168__$1){var self__ = this;
var _40169__$1 = this;return (new clustermap.components.map.t40167(self__.colorchooser,self__.map__40164,self__.initial_bounds,self__.owner,self__.data,self__.zoom,self__.cursor_data,self__.map__40165,self__.map_component,self__.boundaryline_collections,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.map__40166,self__.filter,self__.point_data,self__.boundaryline_agg,self__.p__40125,meta40168__$1));
});})(map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.__GT_t40167 = ((function (map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function __GT_t40167(colorchooser__$1,map__40164__$2,initial_bounds__$1,owner__$1,data__$1,zoom__$1,cursor_data__$1,map__40165__$2,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,map__40166__$2,filter__$1,point_data__$1,boundaryline_agg__$1,p__40125__$1,meta40168){return (new clustermap.components.map.t40167(colorchooser__$1,map__40164__$2,initial_bounds__$1,owner__$1,data__$1,zoom__$1,cursor_data__$1,map__40165__$2,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,map__40166__$2,filter__$1,point_data__$1,boundaryline_agg__$1,p__40125__$1,meta40168));
});})(map__40164,map__40164__$1,cursor_data,map__40165,map__40165__$1,cursor,data,point_data,boundaryline_collections,map__40166,map__40166__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
}
return (new clustermap.components.map.t40167(colorchooser,map__40164__$1,initial_bounds,owner,data,zoom,cursor_data,map__40165__$1,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,map__40166__$1,filter,point_data,boundaryline_agg,p__40125,null));
});
