// Compiled by ClojureScript 0.0-2268
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
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
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
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3531__auto__ = s;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = w;if(cljs.core.truth_(and__3531__auto____$1))
{var and__3531__auto____$2 = n;if(cljs.core.truth_(and__3531__auto____$2))
{return e;
} else
{return and__3531__auto____$2;
}
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js(initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__38988 = config;var G__38988__$1 = (((G__38988 == null))?null:G__38988.components);var G__38988__$2 = (((G__38988__$1 == null))?null:G__38988__$1.map);var G__38988__$3 = (((G__38988__$2 == null))?null:G__38988__$2.api_key);return G__38988__$3;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1060,m,cljs.core.constant$keyword$1061,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1062,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1063,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__38989){
var m = cljs.core.first(arglist__38989);
var all_bounds = cljs.core.rest(arglist__38989);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs38991 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$827,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$991,cljs.core.constant$keyword$891,site) : path_fn.call(null,cljs.core.constant$keyword$991,cljs.core.constant$keyword$891,site)),cljs.core.constant$keyword$808,null,cljs.core.constant$keyword$819,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$836.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs38991))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$808,null,cljs.core.constant$keyword$819,"map-marker-popup-location-list"], null),attrs38991], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38991))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__38994 = location_sites;var G__38994__$1 = (((G__38994 == null))?null:cljs.core.first(G__38994));var G__38994__$2 = (((G__38994__$1 == null))?null:cljs.core.constant$keyword$1064.cljs$core$IFn$_invoke$arity$1(G__38994__$1));var G__38994__$3 = (((G__38994__$2 == null))?null:cljs.core.reverse(G__38994__$2));var G__38994__$4 = (((G__38994__$3 == null))?null:cljs.core.clj__GT_js(G__38994__$3));return G__38994__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$821,"map-marker",cljs.core.constant$keyword$1065,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1067,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1068,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_38995_38996 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_38995_38996,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_38995_38996,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38995_38996;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4470__auto__));
})())));
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
,update_marker_keys));var _ = (function (){var seq__39001 = cljs.core.seq(remove_marker_keys);var chunk__39002 = null;var count__39003 = (0);var i__39004 = (0);while(true){
if((i__39004 < count__39003))
{var k = chunk__39002.cljs$core$IIndexed$_nth$arity$2(null,i__39004);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__39005 = seq__39001;
var G__39006 = chunk__39002;
var G__39007 = count__39003;
var G__39008 = (i__39004 + (1));
seq__39001 = G__39005;
chunk__39002 = G__39006;
count__39003 = G__39007;
i__39004 = G__39008;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39001);if(temp__4126__auto__)
{var seq__39001__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39001__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__39001__$1);{
var G__39009 = cljs.core.chunk_rest(seq__39001__$1);
var G__39010 = c__4299__auto__;
var G__39011 = cljs.core.count(c__4299__auto__);
var G__39012 = (0);
seq__39001 = G__39009;
chunk__39002 = G__39010;
count__39003 = G__39011;
i__39004 = G__39012;
continue;
}
} else
{var k = cljs.core.first(seq__39001__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__39013 = cljs.core.next(seq__39001__$1);
var G__39014 = null;
var G__39015 = (0);
var G__39016 = (0);
seq__39001 = G__39013;
chunk__39002 = G__39014;
count__39003 = G__39015;
i__39004 = G__39016;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__39025 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__39025__$1 = ((cljs.core.seq_QMARK_(map__39025))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39025):map__39025);var clj_envelope = map__39025__$1;var vec__39026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39025__$1,"coordinates");var vec__39027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39026,(0),null);var vec__39028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39027,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39028,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39028,(1),null);var vec__39029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39027,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39029,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39029,(1),null);var vec__39030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39027,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,(1),null);var vec__39031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39027,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39031,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39031,(1),null);var vec__39032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39027,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39032,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39032,(1),null);var inner = vec__39027;var coords = vec__39026;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__39033){var map__39035 = p__39033;var map__39035__$1 = ((cljs.core.seq_QMARK_(map__39035))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39035):map__39035);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39035__$1,cljs.core.constant$keyword$1069);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39035__$1,cljs.core.constant$keyword$1070);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39035__$1,cljs.core.constant$keyword$842);if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
{return highlighted;
} else
{return and__3531__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1071,"#000000",cljs.core.constant$keyword$1072,fill_color,cljs.core.constant$keyword$1073,(2),cljs.core.constant$keyword$1074,(1),cljs.core.constant$keyword$1075,true,cljs.core.constant$keyword$1076,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1071,"#8c2d04",cljs.core.constant$keyword$1072,fill_color,cljs.core.constant$keyword$1073,(1),cljs.core.constant$keyword$1074,(1),cljs.core.constant$keyword$1075,true,cljs.core.constant$keyword$1076,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1071,"#000000",cljs.core.constant$keyword$1072,fill_color,cljs.core.constant$keyword$1073,(2),cljs.core.constant$keyword$1074,(1),cljs.core.constant$keyword$1075,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1071,"#8c2d04",cljs.core.constant$keyword$1072,fill_color,cljs.core.constant$keyword$1073,(1),cljs.core.constant$keyword$1074,(0),cljs.core.constant$keyword$1075,false,cljs.core.constant$keyword$1076,(0)], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__39036){var map__39038 = p__39036;var map__39038__$1 = ((cljs.core.seq_QMARK_(map__39038))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39038):map__39038);var path_attrs = map__39038__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39038__$1,cljs.core.constant$keyword$842);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__39038,map__39038__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$894,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__39038,map__39038__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$808,boundaryline_id,cljs.core.constant$keyword$791,tolerance,cljs.core.constant$keyword$842,selected,cljs.core.constant$keyword$1077,leaflet_path,cljs.core.constant$keyword$792,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1077.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$808.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__39039,tolerance,js_boundaryline,path_attrs){var map__39041 = p__39039;var map__39041__$1 = ((cljs.core.seq_QMARK_(map__39041))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39041):map__39041);var path = map__39041__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39041__$1,cljs.core.constant$keyword$808);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$791.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1077.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1077.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var vec__39055 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(live_path_keys,leaflet_map.getZoom()) : fetch_boundarylines_fn.call(null,live_path_keys,leaflet_map.getZoom()));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39055,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39055,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan){
return (function (p__39056){var vec__39057 = p__39056;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39057,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39057,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39057,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$842,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1069,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1070,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan))
,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan){
return (function (k){var vec__39058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39058,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39058,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = tolerance;if(cljs.core.truth_(and__3531__auto____$1))
{return js_boundaryline;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan,created_paths){
return (function (p__39059){var vec__39060 = p__39059;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39060,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39060,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39060,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$842,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1069,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1070,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan,created_paths))
,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__39061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39061,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39061,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = tolerance;if(cljs.core.truth_(and__3531__auto____$1))
{return js_boundaryline;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var _ = (function (){var seq__39062 = cljs.core.seq(delete_path_keys);var chunk__39063 = null;var count__39064 = (0);var i__39065 = (0);while(true){
if((i__39065 < count__39064))
{var k = chunk__39063.cljs$core$IIndexed$_nth$arity$2(null,i__39065);var temp__4124__auto___39068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___39068))
{var path_39069 = temp__4124__auto___39068;clustermap.components.map.delete_path(leaflet_map,path_39069);
} else
{}
{
var G__39070 = seq__39062;
var G__39071 = chunk__39063;
var G__39072 = count__39064;
var G__39073 = (i__39065 + (1));
seq__39062 = G__39070;
chunk__39063 = G__39071;
count__39064 = G__39072;
i__39065 = G__39073;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39062);if(temp__4126__auto__)
{var seq__39062__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39062__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__39062__$1);{
var G__39074 = cljs.core.chunk_rest(seq__39062__$1);
var G__39075 = c__4299__auto__;
var G__39076 = cljs.core.count(c__4299__auto__);
var G__39077 = (0);
seq__39062 = G__39074;
chunk__39063 = G__39075;
count__39064 = G__39076;
i__39065 = G__39077;
continue;
}
} else
{var k = cljs.core.first(seq__39062__$1);var temp__4124__auto___39078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___39078))
{var path_39079 = temp__4124__auto___39078;clustermap.components.map.delete_path(leaflet_map,path_39079);
} else
{}
{
var G__39080 = cljs.core.next(seq__39062__$1);
var G__39081 = null;
var G__39082 = (0);
var G__39083 = (0);
seq__39062 = G__39080;
chunk__39063 = G__39081;
count__39064 = G__39082;
i__39065 = G__39083;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan,created_paths,updated_paths,_){
return (function (m,p__39066){var map__39067 = p__39066;var map__39067__$1 = ((cljs.core.seq_QMARK_(map__39067))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39067):map__39067);var path = map__39067__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39067__$1,cljs.core.constant$keyword$808);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__39055,tolerance_paths,notifychan,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_(paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$808.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$810.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$827,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$991,cljs.core.constant$keyword$894,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$809,bl_id,cljs.core.constant$keyword$810,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$991,cljs.core.constant$keyword$894,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$809,bl_id,cljs.core.constant$keyword$810,bl_name], null))),cljs.core.constant$keyword$808,null,cljs.core.constant$keyword$819,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs39085 = bl_name;if(cljs.core.map_QMARK_(attrs39085))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$808,null,cljs.core.constant$keyword$819,"map-marker-constituency-name"], null),attrs39085], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs39085))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter((function (p__39088){var vec__39089 = p__39088;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39089,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39089,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,index,index_type,blcoll,variable,filter,bounds){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_39115){var state_val_39116 = (state_39115[(1)]);if((state_val_39116 === (2)))
{var inst_39110 = (state_39115[(2)]);var inst_39111 = [cljs.core.constant$keyword$1078,cljs.core.constant$keyword$1079,cljs.core.constant$keyword$991,cljs.core.constant$keyword$919];var inst_39112 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39111,null));var inst_39113 = (set_app_state_fn.cljs$core$IFn$_invoke$arity$2 ? set_app_state_fn.cljs$core$IFn$_invoke$arity$2(inst_39112,inst_39110) : set_app_state_fn.call(null,inst_39112,inst_39110));var state_39115__$1 = state_39115;return cljs.core.async.impl.ioc_helpers.return_chan(state_39115__$1,inst_39113);
} else
{if((state_val_39116 === (1)))
{var inst_39107 = clustermap.components.map.bounds_array(bounds);var inst_39108 = clustermap.api.boundaryline_aggregation(index,index_type,blcoll,variable,filter,inst_39107);var state_39115__$1 = state_39115;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39115__$1,(2),inst_39108);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39120 = [null,null,null,null,null,null,null];(statearr_39120[(0)] = state_machine__5679__auto__);
(statearr_39120[(1)] = (1));
return statearr_39120;
});
var state_machine__5679__auto____1 = (function (state_39115){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39115);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39121){if((e39121 instanceof Object))
{var ex__5682__auto__ = e39121;var statearr_39122_39124 = state_39115;(statearr_39122_39124[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39115);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e39121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__39125 = state_39115;
state_39115 = G__39125;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39115){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39123 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__39126,owner){var map__39164 = p__39126;var map__39164__$1 = ((cljs.core.seq_QMARK_(map__39164))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39164):map__39164);var cursor = map__39164__$1;var map__39165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39164__$1,cljs.core.constant$keyword$1080);var map__39165__$1 = ((cljs.core.seq_QMARK_(map__39165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39165):map__39165);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39165__$1,cljs.core.constant$keyword$1081);if(typeof clustermap.components.map.t39166 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t39166 = (function (initial_bounds,map__39165,cursor,map__39164,owner,p__39126,map_component,meta39167){
this.initial_bounds = initial_bounds;
this.map__39165 = map__39165;
this.cursor = cursor;
this.map__39164 = map__39164;
this.owner = owner;
this.p__39126 = p__39126;
this.map_component = map_component;
this.meta39167 = meta39167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t39166.cljs$lang$type = true;
clustermap.components.map.t39166.cljs$lang$ctorStr = "clustermap.components.map/t39166";
clustermap.components.map.t39166.cljs$lang$ctorPrWriter = ((function (map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map/t39166");
});})(map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;
clustermap.components.map.t39166.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t39166.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (this$,p__39169,p__39170){var self__ = this;
var map__39171 = p__39169;var map__39171__$1 = ((cljs.core.seq_QMARK_(map__39171))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39171):map__39171);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,cljs.core.constant$keyword$793);var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,cljs.core.constant$keyword$919);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,cljs.core.constant$keyword$1082);var map__39172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39171__$1,cljs.core.constant$keyword$1080);var map__39172__$1 = ((cljs.core.seq_QMARK_(map__39172))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39172):map__39172);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,cljs.core.constant$keyword$1083);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,cljs.core.constant$keyword$792);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,cljs.core.constant$keyword$1084);var next_colorchooser_control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,cljs.core.constant$keyword$1085);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,cljs.core.constant$keyword$1086);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39172__$1,cljs.core.constant$keyword$1087);var map__39173 = p__39170;var map__39173__$1 = ((cljs.core.seq_QMARK_(map__39173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39173):map__39173);var map__39174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39173__$1,cljs.core.constant$keyword$991);var map__39174__$1 = ((cljs.core.seq_QMARK_(map__39174))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39174):map__39174);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39174__$1,cljs.core.constant$keyword$1062);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39174__$1,cljs.core.constant$keyword$1063);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39173__$1,cljs.core.constant$keyword$1088);var this$__$1 = this;var map__39175 = om.core.get_props(self__.owner);var map__39175__$1 = ((cljs.core.seq_QMARK_(map__39175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39175):map__39175);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39175__$1,cljs.core.constant$keyword$793);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39175__$1,cljs.core.constant$keyword$919);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39175__$1,cljs.core.constant$keyword$1082);var map__39176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39175__$1,cljs.core.constant$keyword$1080);var map__39176__$1 = ((cljs.core.seq_QMARK_(map__39176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39176):map__39176);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39176__$1,cljs.core.constant$keyword$1087);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39176__$1,cljs.core.constant$keyword$1086);var colorchooser_control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39176__$1,cljs.core.constant$keyword$1089);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39176__$1,cljs.core.constant$keyword$1084);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39176__$1,cljs.core.constant$keyword$1083);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39176__$1,cljs.core.constant$keyword$792);var initial_bounds__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39176__$1,cljs.core.constant$keyword$1081);var map__39177 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39177__$1 = ((cljs.core.seq_QMARK_(map__39177))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39177):map__39177);var set_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39177__$1,cljs.core.constant$keyword$1090);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39177__$1,cljs.core.constant$keyword$1091);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39177__$1,cljs.core.constant$keyword$1092);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39177__$1,cljs.core.constant$keyword$890);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39177__$1,cljs.core.constant$keyword$889);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39177__$1,cljs.core.constant$keyword$899);var map__39178 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39178__$1 = ((cljs.core.seq_QMARK_(map__39178))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39178):map__39178);var map__39179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39178__$1,cljs.core.constant$keyword$991);var map__39179__$1 = ((cljs.core.seq_QMARK_(map__39179))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39179):map__39179);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39179__$1,cljs.core.constant$keyword$1063);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39179__$1,cljs.core.constant$keyword$1062);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39179__$1,cljs.core.constant$keyword$1061);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39179__$1,cljs.core.constant$keyword$1060);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39178__$1,cljs.core.constant$keyword$1093);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39178__$1,cljs.core.constant$keyword$1088);if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = next_zoom;if(cljs.core.truth_(and__3531__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,zoom)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,leaflet_map.getZoom()));
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = next_bounds;if(cljs.core.truth_(and__3531__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,bounds)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,clustermap.components.map.bounds_array(leaflet_map.getBounds())));
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js(next_bounds));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$792], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = boundaryline_collections;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1084], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3531__auto__))
{var or__3543__auto__ = (function (){var and__3531__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_agg,boundaryline_agg);
} else
{return and__3531__auto____$1;
}
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,boundaryline_collection)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter,filter));
}
} else
{return and__3531__auto__;
}
})()))
{clustermap.components.map.fetch_aggregation_data(set_app_state_fn,cljs.core.constant$keyword$803.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1094.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),next_boundaryline_collection,cljs.core.constant$keyword$1095.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),leaflet_map.getBounds());
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,data))
{var vec__39180 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1096.cljs$core$IFn$_invoke$arity$1(next_colorchooser_control),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1097.cljs$core$IFn$_invoke$arity$1(next_colorchooser_control)),cljs.core.constant$keyword$809,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1095.cljs$core$IFn$_invoke$arity$1(next_colorchooser_control)),cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39180,(0),null);var selection_path_colours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39180,(1),null);var update_paths_invocation = ((function (vec__39180,new_threshold_colors,selection_path_colours,map__39175,map__39175__$1,filter,data,boundaryline_collections,map__39176,map__39176__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__39177,map__39177__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39178,map__39178__$1,map__39179,map__39179__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39171,map__39171__$1,next_filter,next_data,next_boundaryline_collections,map__39172,map__39172__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__39173,map__39173__$1,map__39174,map__39174__$1,next_paths,next_path_selections,next_path_highlights,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours);
});})(vec__39180,new_threshold_colors,selection_path_colours,map__39175,map__39175__$1,filter,data,boundaryline_collections,map__39176,map__39176__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__39177,map__39177__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39178,map__39178__$1,map__39179,map__39179__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39171,map__39171__$1,next_filter,next_data,next_boundaryline_collections,map__39172,map__39172__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__39173,map__39173__$1,map__39174,map__39174__$1,next_paths,next_path_selections,next_path_highlights,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1087], null),new_threshold_colors);
} else
{}
var temp__4126__auto__ = update_paths_invocation();if(cljs.core.truth_(temp__4126__auto__))
{var notify_chan = temp__4126__auto__;var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__39180,new_threshold_colors,selection_path_colours,update_paths_invocation,map__39175,map__39175__$1,filter,data,boundaryline_collections,map__39176,map__39176__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__39177,map__39177__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39178,map__39178__$1,map__39179,map__39179__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39171,map__39171__$1,next_filter,next_data,next_boundaryline_collections,map__39172,map__39172__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__39173,map__39173__$1,map__39174,map__39174__$1,next_paths,next_path_selections,next_path_highlights,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__39180,new_threshold_colors,selection_path_colours,update_paths_invocation,map__39175,map__39175__$1,filter,data,boundaryline_collections,map__39176,map__39176__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__39177,map__39177__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39178,map__39178__$1,map__39179,map__39179__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39171,map__39171__$1,next_filter,next_data,next_boundaryline_collections,map__39172,map__39172__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__39173,map__39173__$1,map__39174,map__39174__$1,next_paths,next_path_selections,next_path_highlights,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (state_39185){var state_val_39186 = (state_39185[(1)]);if((state_val_39186 === (2)))
{var inst_39182 = (state_39185[(2)]);var inst_39183 = update_paths_invocation();var state_39185__$1 = (function (){var statearr_39187 = state_39185;(statearr_39187[(7)] = inst_39182);
return statearr_39187;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39185__$1,inst_39183);
} else
{if((state_val_39186 === (1)))
{var state_39185__$1 = state_39185;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39185__$1,(2),notify_chan);
} else
{return null;
}
}
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__39180,new_threshold_colors,selection_path_colours,update_paths_invocation,map__39175,map__39175__$1,filter,data,boundaryline_collections,map__39176,map__39176__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__39177,map__39177__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39178,map__39178__$1,map__39179,map__39179__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39171,map__39171__$1,next_filter,next_data,next_boundaryline_collections,map__39172,map__39172__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__39173,map__39173__$1,map__39174,map__39174__$1,next_paths,next_path_selections,next_path_highlights,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;return ((function (switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__39180,new_threshold_colors,selection_path_colours,update_paths_invocation,map__39175,map__39175__$1,filter,data,boundaryline_collections,map__39176,map__39176__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__39177,map__39177__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39178,map__39178__$1,map__39179,map__39179__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39171,map__39171__$1,next_filter,next_data,next_boundaryline_collections,map__39172,map__39172__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__39173,map__39173__$1,map__39174,map__39174__$1,next_paths,next_path_selections,next_path_highlights,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39191 = [null,null,null,null,null,null,null,null];(statearr_39191[(0)] = state_machine__5679__auto__);
(statearr_39191[(1)] = (1));
return statearr_39191;
});
var state_machine__5679__auto____1 = (function (state_39185){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39185);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$773))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39192){if((e39192 instanceof Object))
{var ex__5682__auto__ = e39192;var statearr_39193_39201 = state_39185;(statearr_39193_39201[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39185);
return cljs.core.constant$keyword$773;
} else
{if(cljs.core.constant$keyword$764)
{throw e39192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$773))
{{
var G__39202 = state_39185;
state_39185 = G__39202;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39185){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__39180,new_threshold_colors,selection_path_colours,update_paths_invocation,map__39175,map__39175__$1,filter,data,boundaryline_collections,map__39176,map__39176__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__39177,map__39177__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39178,map__39178__$1,map__39179,map__39179__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39171,map__39171__$1,next_filter,next_data,next_boundaryline_collections,map__39172,map__39172__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__39173,map__39173__$1,map__39174,map__39174__$1,next_paths,next_path_selections,next_path_highlights,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
})();var state__5695__auto__ = (function (){var statearr_39194 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__39180,new_threshold_colors,selection_path_colours,update_paths_invocation,map__39175,map__39175__$1,filter,data,boundaryline_collections,map__39176,map__39176__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__39177,map__39177__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__39178,map__39178__$1,map__39179,map__39179__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__39171,map__39171__$1,next_filter,next_data,next_boundaryline_collections,map__39172,map__39172__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__39173,map__39173__$1,map__39174,map__39174__$1,next_paths,next_path_selections,next_path_highlights,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
);
return c__5693__auto__;
} else
{return null;
}
} else
{return null;
}
});})(map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;
clustermap.components.map.t39166.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t39166.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39195 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__39195__$1 = ((cljs.core.seq_QMARK_(map__39195))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39195):map__39195);var map = map__39195__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39195__$1,cljs.core.constant$keyword$859);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39195__$1,cljs.core.constant$keyword$1061);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39195__$1,cljs.core.constant$keyword$1060);var map__39196 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39196__$1 = ((cljs.core.seq_QMARK_(map__39196))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39196):map__39196);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39196__$1,cljs.core.constant$keyword$889);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39196__$1,cljs.core.constant$keyword$890);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39196__$1,cljs.core.constant$keyword$1091);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39196__$1,cljs.core.constant$keyword$1092);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39196__$1,cljs.core.constant$keyword$899);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1083], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$792], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$991,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1088,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",((function (node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (e){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1083], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$792], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
);
leaflet_map.on("moveend",((function (node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (e){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$1083], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1080,cljs.core.constant$keyword$792], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1098,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
);
});})(node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1098,null);
});})(node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$808.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1088);if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1098)));
} else
{return and__3531__auto__;
}
})()))
{var G__39197_39203 = L.popup();G__39197_39203.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__39197_39203.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__39197_39203.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1088,highlight_path_ids);
});})(node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__39198 = hits;var G__39198__$1 = (((G__39198 == null))?null:cljs.core.first(G__39198));var G__39198__$2 = (((G__39198__$1 == null))?null:cljs.core.constant$keyword$808.cljs$core$IFn$_invoke$arity$1(G__39198__$1));return G__39198__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$894,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__39195,map__39195__$1,map,path,markers,leaflet_map,map__39196,map__39196__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
);
});})(map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;
clustermap.components.map.t39166.prototype.om$core$IRender$ = true;
clustermap.components.map.t39166.prototype.om$core$IRender$render$arity$1 = ((function (map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;
clustermap.components.map.t39166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (_39168){var self__ = this;
var _39168__$1 = this;return self__.meta39167;
});})(map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;
clustermap.components.map.t39166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function (_39168,meta39167__$1){var self__ = this;
var _39168__$1 = this;return (new clustermap.components.map.t39166(self__.initial_bounds,self__.map__39165,self__.cursor,self__.map__39164,self__.owner,self__.p__39126,self__.map_component,meta39167__$1));
});})(map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;
clustermap.components.map.__GT_t39166 = ((function (map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds){
return (function __GT_t39166(initial_bounds__$1,map__39165__$2,cursor__$1,map__39164__$2,owner__$1,p__39126__$1,map_component__$1,meta39167){return (new clustermap.components.map.t39166(initial_bounds__$1,map__39165__$2,cursor__$1,map__39164__$2,owner__$1,p__39126__$1,map_component__$1,meta39167));
});})(map__39164,map__39164__$1,cursor,map__39165,map__39165__$1,initial_bounds))
;
}
return (new clustermap.components.map.t39166(initial_bounds,map__39165__$1,cursor,map__39164__$1,owner,p__39126,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$884,shared,cljs.core.constant$keyword$887,document.getElementById(elem_id),cljs.core.constant$keyword$859,path], null));
});
