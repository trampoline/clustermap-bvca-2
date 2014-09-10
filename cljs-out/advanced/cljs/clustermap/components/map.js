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
clustermap.components.map.ticket = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
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
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3529__auto__ = s;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = w;if(cljs.core.truth_(and__3529__auto____$1))
{var and__3529__auto____$2 = n;if(cljs.core.truth_(and__3529__auto____$2))
{return e;
} else
{return and__3529__auto____$2;
}
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js(initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3541__auto__ = (function (){var G__38009 = config;var G__38009__$1 = (((G__38009 == null))?null:G__38009.components);var G__38009__$2 = (((G__38009__$1 == null))?null:G__38009__$1.map);var G__38009__$3 = (((G__38009__$2 == null))?null:G__38009__$2.api_key);return G__38009__$3;
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1076,m,cljs.core.constant$keyword$1077,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1078,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1079,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__38010){
var m = cljs.core.first(arglist__38010);
var all_bounds = cljs.core.rest(arglist__38010);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs38012 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$843,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1007,cljs.core.constant$keyword$907,site) : path_fn.call(null,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$907,site)),cljs.core.constant$keyword$824,null,cljs.core.constant$keyword$835,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$852.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs38012))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$824,null,cljs.core.constant$keyword$835,"map-marker-popup-location-list"], null),attrs38012], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38012))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__38015 = location_sites;var G__38015__$1 = (((G__38015 == null))?null:cljs.core.first(G__38015));var G__38015__$2 = (((G__38015__$1 == null))?null:cljs.core.constant$keyword$1080.cljs$core$IFn$_invoke$arity$1(G__38015__$1));var G__38015__$3 = (((G__38015__$2 == null))?null:cljs.core.reverse(G__38015__$2));var G__38015__$4 = (((G__38015__$3 == null))?null:cljs.core.clj__GT_js(G__38015__$3));return G__38015__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$837,"map-marker",cljs.core.constant$keyword$1081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1083,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1084,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4468__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_38016_38017 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_38016_38017,sb__4468__auto__,temp__4124__auto__){
return (function (x__4469__auto__){return sb__4468__auto__.append(x__4469__auto__);
});})(_STAR_print_fn_STAR_38016_38017,sb__4468__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38016_38017;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4468__auto__));
})())));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$917], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$917], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__38022 = cljs.core.seq(remove_marker_keys);var chunk__38023 = null;var count__38024 = (0);var i__38025 = (0);while(true){
if((i__38025 < count__38024))
{var k = chunk__38023.cljs$core$IIndexed$_nth$arity$2(null,i__38025);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__38026 = seq__38022;
var G__38027 = chunk__38023;
var G__38028 = count__38024;
var G__38029 = (i__38025 + (1));
seq__38022 = G__38026;
chunk__38023 = G__38027;
count__38024 = G__38028;
i__38025 = G__38029;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38022);if(temp__4126__auto__)
{var seq__38022__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38022__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__38022__$1);{
var G__38030 = cljs.core.chunk_rest(seq__38022__$1);
var G__38031 = c__4297__auto__;
var G__38032 = cljs.core.count(c__4297__auto__);
var G__38033 = (0);
seq__38022 = G__38030;
chunk__38023 = G__38031;
count__38024 = G__38032;
i__38025 = G__38033;
continue;
}
} else
{var k = cljs.core.first(seq__38022__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__38034 = cljs.core.next(seq__38022__$1);
var G__38035 = null;
var G__38036 = (0);
var G__38037 = (0);
seq__38022 = G__38034;
chunk__38023 = G__38035;
count__38024 = G__38036;
i__38025 = G__38037;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__38046 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__38046__$1 = ((cljs.core.seq_QMARK_(map__38046))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38046):map__38046);var clj_envelope = map__38046__$1;var vec__38047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38046__$1,"coordinates");var vec__38048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(0),null);var vec__38049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38048,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38049,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38049,(1),null);var vec__38050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38048,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(1),null);var vec__38051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38048,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38051,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38051,(1),null);var vec__38052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38048,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(1),null);var vec__38053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38048,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053,(1),null);var inner = vec__38048;var coords = vec__38047;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__38054){var map__38056 = p__38054;var map__38056__$1 = ((cljs.core.seq_QMARK_(map__38056))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38056):map__38056);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38056__$1,cljs.core.constant$keyword$1085);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38056__$1,cljs.core.constant$keyword$1086);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38056__$1,cljs.core.constant$keyword$858);if(cljs.core.truth_((function (){var and__3529__auto__ = selected;if(cljs.core.truth_(and__3529__auto__))
{return highlighted;
} else
{return and__3529__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1087,"#000000",cljs.core.constant$keyword$1088,fill_color,cljs.core.constant$keyword$1089,(2),cljs.core.constant$keyword$1090,(1),cljs.core.constant$keyword$1091,true,cljs.core.constant$keyword$1092,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1087,"#8c2d04",cljs.core.constant$keyword$1088,fill_color,cljs.core.constant$keyword$1089,(1),cljs.core.constant$keyword$1090,(1),cljs.core.constant$keyword$1091,true,cljs.core.constant$keyword$1092,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1087,"#000000",cljs.core.constant$keyword$1088,fill_color,cljs.core.constant$keyword$1089,(2),cljs.core.constant$keyword$1090,(1),cljs.core.constant$keyword$1091,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1087,"#8c2d04",cljs.core.constant$keyword$1088,fill_color,cljs.core.constant$keyword$1089,(1),cljs.core.constant$keyword$1090,(0),cljs.core.constant$keyword$1091,false,cljs.core.constant$keyword$1092,(0)], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__38057){var map__38059 = p__38057;var map__38059__$1 = ((cljs.core.seq_QMARK_(map__38059))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38059):map__38059);var path_attrs = map__38059__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38059__$1,cljs.core.constant$keyword$858);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__38059,map__38059__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$910,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__38059,map__38059__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$824,boundaryline_id,cljs.core.constant$keyword$805,tolerance,cljs.core.constant$keyword$858,selected,cljs.core.constant$keyword$1093,leaflet_path,cljs.core.constant$keyword$807,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1093.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$824.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__38060,tolerance,js_boundaryline,path_attrs){var map__38062 = p__38060;var map__38062__$1 = ((cljs.core.seq_QMARK_(map__38062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38062):map__38062);var path = map__38062__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38062__$1,cljs.core.constant$keyword$824);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1093.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1093.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1094,create_path_keys,cljs.core.constant$keyword$1095,delete_path_keys,cljs.core.constant$keyword$1096,update_path_keys], null)));var vec__38076 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$806,live_path_keys) : fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$806,live_path_keys));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38076,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38076,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan){
return (function (p__38077){var vec__38078 = p__38077;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38078,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38078,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38078,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$858,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1085,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1086,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan))
,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan){
return (function (k){var vec__38079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = tolerance;if(cljs.core.truth_(and__3529__auto____$1))
{return js_boundaryline;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan,created_paths){
return (function (p__38080){var vec__38081 = p__38080;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38081,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38081,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38081,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$858,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1085,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1086,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan,created_paths))
,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__38082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38082,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38082,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = tolerance;if(cljs.core.truth_(and__3529__auto____$1))
{return js_boundaryline;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__38083 = cljs.core.seq(delete_path_keys);var chunk__38084 = null;var count__38085 = (0);var i__38086 = (0);while(true){
if((i__38086 < count__38085))
{var k = chunk__38084.cljs$core$IIndexed$_nth$arity$2(null,i__38086);var temp__4124__auto___38089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___38089))
{var path_38090 = temp__4124__auto___38089;clustermap.components.map.delete_path(leaflet_map,path_38090);
} else
{}
{
var G__38091 = seq__38083;
var G__38092 = chunk__38084;
var G__38093 = count__38085;
var G__38094 = (i__38086 + (1));
seq__38083 = G__38091;
chunk__38084 = G__38092;
count__38085 = G__38093;
i__38086 = G__38094;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38083);if(temp__4126__auto__)
{var seq__38083__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38083__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__38083__$1);{
var G__38095 = cljs.core.chunk_rest(seq__38083__$1);
var G__38096 = c__4297__auto__;
var G__38097 = cljs.core.count(c__4297__auto__);
var G__38098 = (0);
seq__38083 = G__38095;
chunk__38084 = G__38096;
count__38085 = G__38097;
i__38086 = G__38098;
continue;
}
} else
{var k = cljs.core.first(seq__38083__$1);var temp__4124__auto___38099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___38099))
{var path_38100 = temp__4124__auto___38099;clustermap.components.map.delete_path(leaflet_map,path_38100);
} else
{}
{
var G__38101 = cljs.core.next(seq__38083__$1);
var G__38102 = null;
var G__38103 = (0);
var G__38104 = (0);
seq__38083 = G__38101;
chunk__38084 = G__38102;
count__38085 = G__38103;
i__38086 = G__38104;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__38087){var map__38088 = p__38087;var map__38088__$1 = ((cljs.core.seq_QMARK_(map__38088))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38088):map__38088);var path = map__38088__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38088__$1,cljs.core.constant$keyword$824);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38076,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_(paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$824.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$826.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$843,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1007,cljs.core.constant$keyword$910,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$825,bl_id,cljs.core.constant$keyword$826,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$910,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$825,bl_id,cljs.core.constant$keyword$826,bl_name], null))),cljs.core.constant$keyword$824,null,cljs.core.constant$keyword$835,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs38106 = bl_name;if(cljs.core.map_QMARK_(attrs38106))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$824,null,cljs.core.constant$keyword$835,"map-marker-constituency-name"], null),attrs38106], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38106))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter((function (p__38109){var vec__38110 = p__38109;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38110,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38110,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,blcoll,variable,filter,bounds){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_38155){var state_val_38156 = (state_38155[(1)]);if((state_val_38156 === (5)))
{var inst_38153 = (state_38155[(2)]);var state_38155__$1 = state_38155;return cljs.core.async.impl.ioc_helpers.return_chan(state_38155__$1,inst_38153);
} else
{if((state_val_38156 === (4)))
{var state_38155__$1 = state_38155;var statearr_38157_38169 = state_38155__$1;(statearr_38157_38169[(2)] = null);
(statearr_38157_38169[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_38156 === (3)))
{var inst_38142 = (state_38155[(7)]);var inst_38148 = [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$935];var inst_38149 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38148,null));var inst_38150 = (set_app_state_fn.cljs$core$IFn$_invoke$arity$2 ? set_app_state_fn.cljs$core$IFn$_invoke$arity$2(inst_38149,inst_38142) : set_app_state_fn.call(null,inst_38149,inst_38142));var state_38155__$1 = state_38155;var statearr_38158_38170 = state_38155__$1;(statearr_38158_38170[(2)] = inst_38150);
(statearr_38158_38170[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_38156 === (2)))
{var inst_38142 = (state_38155[(2)]);var inst_38143 = [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1100];var inst_38144 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38143,null));var inst_38145 = (get_app_state_fn.cljs$core$IFn$_invoke$arity$1 ? get_app_state_fn.cljs$core$IFn$_invoke$arity$1(inst_38144) : get_app_state_fn.call(null,inst_38144));var inst_38146 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ticket,inst_38145);var state_38155__$1 = (function (){var statearr_38159 = state_38155;(statearr_38159[(7)] = inst_38142);
return statearr_38159;
})();if(inst_38146)
{var statearr_38160_38171 = state_38155__$1;(statearr_38160_38171[(1)] = (3));
} else
{var statearr_38161_38172 = state_38155__$1;(statearr_38161_38172[(1)] = (4));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_38156 === (1)))
{var inst_38140 = clustermap.api.boundaryline_aggregation(index,index_type,blcoll,variable,filter,bounds);var state_38155__$1 = state_38155;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38155__$1,(2),inst_38140);
} else
{return null;
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38165 = [null,null,null,null,null,null,null,null];(statearr_38165[(0)] = state_machine__5677__auto__);
(statearr_38165[(1)] = (1));
return statearr_38165;
});
var state_machine__5677__auto____1 = (function (state_38155){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38155);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38166){if((e38166 instanceof Object))
{var ex__5680__auto__ = e38166;var statearr_38167_38173 = state_38155;(statearr_38167_38173[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38155);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e38166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__38174 = state_38155;
state_38155 = G__38174;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38155){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_38168 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_38168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.components.map.fetch_point_data = (function fetch_point_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,filter,bounds){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_38223){var state_val_38224 = (state_38223[(1)]);if((state_val_38224 === (5)))
{var inst_38221 = (state_38223[(2)]);var state_38223__$1 = state_38223;return cljs.core.async.impl.ioc_helpers.return_chan(state_38223__$1,inst_38221);
} else
{if((state_val_38224 === (4)))
{var state_38223__$1 = state_38223;var statearr_38225_38237 = state_38223__$1;(statearr_38225_38237[(2)] = null);
(statearr_38225_38237[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_38224 === (3)))
{var inst_38210 = (state_38223[(7)]);var inst_38216 = [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$1101];var inst_38217 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38216,null));var inst_38218 = (set_app_state_fn.cljs$core$IFn$_invoke$arity$2 ? set_app_state_fn.cljs$core$IFn$_invoke$arity$2(inst_38217,inst_38210) : set_app_state_fn.call(null,inst_38217,inst_38210));var state_38223__$1 = state_38223;var statearr_38226_38238 = state_38223__$1;(statearr_38226_38238[(2)] = inst_38218);
(statearr_38226_38238[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_38224 === (2)))
{var inst_38210 = (state_38223[(2)]);var inst_38211 = [cljs.core.constant$keyword$1097,cljs.core.constant$keyword$1098,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1100];var inst_38212 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38211,null));var inst_38213 = (get_app_state_fn.cljs$core$IFn$_invoke$arity$1 ? get_app_state_fn.cljs$core$IFn$_invoke$arity$1(inst_38212) : get_app_state_fn.call(null,inst_38212));var inst_38214 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ticket,inst_38213);var state_38223__$1 = (function (){var statearr_38227 = state_38223;(statearr_38227[(7)] = inst_38210);
return statearr_38227;
})();if(inst_38214)
{var statearr_38228_38239 = state_38223__$1;(statearr_38228_38239[(1)] = (3));
} else
{var statearr_38229_38240 = state_38223__$1;(statearr_38229_38240[(1)] = (4));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_38224 === (1)))
{var inst_38206 = ["!name","!location","!latest_employee_count","!latest_turnover"];var inst_38207 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38206,null));var inst_38208 = clustermap.api.location_lists(index,index_type,"!postcode",inst_38207,(1000),filter,bounds);var state_38223__$1 = state_38223;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38223__$1,(2),inst_38208);
} else
{return null;
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38233 = [null,null,null,null,null,null,null,null];(statearr_38233[(0)] = state_machine__5677__auto__);
(statearr_38233[(1)] = (1));
return statearr_38233;
});
var state_machine__5677__auto____1 = (function (state_38223){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38223);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38234){if((e38234 instanceof Object))
{var ex__5680__auto__ = e38234;var statearr_38235_38241 = state_38223;(statearr_38235_38241[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38223);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e38234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__38242 = state_38223;
state_38223 = G__38242;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38223){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_38236 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_38236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__38243,owner){var map__38281 = p__38243;var map__38281__$1 = ((cljs.core.seq_QMARK_(map__38281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38281):map__38281);var cursor = map__38281__$1;var map__38282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38281__$1,cljs.core.constant$keyword$1099);var map__38282__$1 = ((cljs.core.seq_QMARK_(map__38282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38282):map__38282);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282__$1,cljs.core.constant$keyword$1102);if(typeof clustermap.components.map.t38283 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t38283 = (function (initial_bounds,map__38282,cursor,map__38281,owner,p__38243,map_component,meta38284){
this.initial_bounds = initial_bounds;
this.map__38282 = map__38282;
this.cursor = cursor;
this.map__38281 = map__38281;
this.owner = owner;
this.p__38243 = p__38243;
this.map_component = map_component;
this.meta38284 = meta38284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t38283.cljs$lang$type = true;
clustermap.components.map.t38283.cljs$lang$ctorStr = "clustermap.components.map/t38283";
clustermap.components.map.t38283.cljs$lang$ctorPrWriter = ((function (map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map/t38283");
});})(map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;
clustermap.components.map.t38283.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t38283.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (this$,p__38286,p__38287){var self__ = this;
var map__38288 = p__38286;var map__38288__$1 = ((cljs.core.seq_QMARK_(map__38288))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38288):map__38288);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,cljs.core.constant$keyword$808);var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,cljs.core.constant$keyword$935);var next_point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,cljs.core.constant$keyword$1101);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,cljs.core.constant$keyword$1103);var map__38289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,cljs.core.constant$keyword$1099);var map__38289__$1 = ((cljs.core.seq_QMARK_(map__38289))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38289):map__38289);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,cljs.core.constant$keyword$1104);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,cljs.core.constant$keyword$807);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,cljs.core.constant$keyword$1105);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,cljs.core.constant$keyword$1106);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,cljs.core.constant$keyword$1107);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,cljs.core.constant$keyword$1108);var map__38290 = p__38287;var map__38290__$1 = ((cljs.core.seq_QMARK_(map__38290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38290):map__38290);var map__38291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38290__$1,cljs.core.constant$keyword$1007);var map__38291__$1 = ((cljs.core.seq_QMARK_(map__38291))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38291):map__38291);var next_markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,cljs.core.constant$keyword$1077);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,cljs.core.constant$keyword$1078);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,cljs.core.constant$keyword$1079);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38290__$1,cljs.core.constant$keyword$1109);var this$__$1 = this;var map__38292 = om.core.get_props(self__.owner);var map__38292__$1 = ((cljs.core.seq_QMARK_(map__38292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38292):map__38292);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,cljs.core.constant$keyword$808);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,cljs.core.constant$keyword$935);var point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,cljs.core.constant$keyword$1101);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,cljs.core.constant$keyword$1103);var map__38293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,cljs.core.constant$keyword$1099);var map__38293__$1 = ((cljs.core.seq_QMARK_(map__38293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38293):map__38293);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.constant$keyword$1108);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.constant$keyword$1107);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.constant$keyword$1106);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.constant$keyword$1105);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.constant$keyword$1104);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.constant$keyword$807);var initial_bounds__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,cljs.core.constant$keyword$1102);var map__38294 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38294__$1 = ((cljs.core.seq_QMARK_(map__38294))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38294):map__38294);var get_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.constant$keyword$1110);var set_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.constant$keyword$1111);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.constant$keyword$1112);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.constant$keyword$1113);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.constant$keyword$906);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.constant$keyword$905);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38294__$1,cljs.core.constant$keyword$915);var map__38295 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38295__$1 = ((cljs.core.seq_QMARK_(map__38295))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38295):map__38295);var map__38296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38295__$1,cljs.core.constant$keyword$1007);var map__38296__$1 = ((cljs.core.seq_QMARK_(map__38296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38296):map__38296);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38296__$1,cljs.core.constant$keyword$1079);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38296__$1,cljs.core.constant$keyword$1078);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38296__$1,cljs.core.constant$keyword$1077);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38296__$1,cljs.core.constant$keyword$1076);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38295__$1,cljs.core.constant$keyword$1114);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38295__$1,cljs.core.constant$keyword$1109);if(cljs.core.truth_((function (){var and__3529__auto__ = leaflet_map;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = next_zoom;if(cljs.core.truth_(and__3529__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,zoom)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,leaflet_map.getZoom()));
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3529__auto__ = leaflet_map;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = next_bounds;if(cljs.core.truth_(and__3529__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,bounds)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,clustermap.components.map.bounds_array(leaflet_map.getBounds())));
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js(next_bounds));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,cljs.core.constant$keyword$807], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3529__auto__ = leaflet_map;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = boundaryline_collections;if(cljs.core.truth_(and__3529__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1105], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3529__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3529__auto__))
{var or__3541__auto__ = (function (){var and__3529__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3529__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_agg,boundaryline_agg);
} else
{return and__3529__auto____$1;
}
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter,filter)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,bounds));
}
} else
{return and__3529__auto__;
}
})()))
{var ticket_38318 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1100], null),ticket_38318);
clustermap.components.map.fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket_38318,cljs.core.constant$keyword$820.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1115.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1116.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
clustermap.components.map.fetch_point_data(set_app_state_fn,get_app_state_fn,ticket_38318,cljs.core.constant$keyword$820.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1115.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,colorchooser)))
{var vec__38297_38319 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1117.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1118.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$825,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1116.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$917.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_38320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38297_38319,(0),null);var selection_path_colours_38321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38297_38319,(1),null);var update_paths_invocation_38322 = ((function (vec__38297_38319,new_threshold_colors_38320,selection_path_colours_38321,map__38292,map__38292__$1,filter,data,point_data,boundaryline_collections,map__38293,map__38293__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__38294,map__38294__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38295,map__38295__$1,map__38296,map__38296__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38288,map__38288__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__38289,map__38289__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__38290,map__38290__$1,map__38291,map__38291__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_38321);
});})(vec__38297_38319,new_threshold_colors_38320,selection_path_colours_38321,map__38292,map__38292__$1,filter,data,point_data,boundaryline_collections,map__38293,map__38293__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__38294,map__38294__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38295,map__38295__$1,map__38296,map__38296__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38288,map__38288__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__38289,map__38289__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__38290,map__38290__$1,map__38291,map__38291__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors_38320,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1108], null),new_threshold_colors_38320);
} else
{}
var temp__4126__auto___38323 = update_paths_invocation_38322();if(cljs.core.truth_(temp__4126__auto___38323))
{var notify_chan_38324 = temp__4126__auto___38323;var c__5691__auto___38325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___38325,notify_chan_38324,temp__4126__auto___38323,vec__38297_38319,new_threshold_colors_38320,selection_path_colours_38321,update_paths_invocation_38322,map__38292,map__38292__$1,filter,data,point_data,boundaryline_collections,map__38293,map__38293__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__38294,map__38294__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38295,map__38295__$1,map__38296,map__38296__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38288,map__38288__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__38289,map__38289__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__38290,map__38290__$1,map__38291,map__38291__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___38325,notify_chan_38324,temp__4126__auto___38323,vec__38297_38319,new_threshold_colors_38320,selection_path_colours_38321,update_paths_invocation_38322,map__38292,map__38292__$1,filter,data,point_data,boundaryline_collections,map__38293,map__38293__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__38294,map__38294__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38295,map__38295__$1,map__38296,map__38296__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38288,map__38288__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__38289,map__38289__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__38290,map__38290__$1,map__38291,map__38291__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (state_38302){var state_val_38303 = (state_38302[(1)]);if((state_val_38303 === (2)))
{var inst_38299 = (state_38302[(2)]);var inst_38300 = update_paths_invocation_38322();var state_38302__$1 = (function (){var statearr_38304 = state_38302;(statearr_38304[(7)] = inst_38299);
return statearr_38304;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38302__$1,inst_38300);
} else
{if((state_val_38303 === (1)))
{var state_38302__$1 = state_38302;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38302__$1,(2),notify_chan_38324);
} else
{return null;
}
}
});})(c__5691__auto___38325,notify_chan_38324,temp__4126__auto___38323,vec__38297_38319,new_threshold_colors_38320,selection_path_colours_38321,update_paths_invocation_38322,map__38292,map__38292__$1,filter,data,point_data,boundaryline_collections,map__38293,map__38293__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__38294,map__38294__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38295,map__38295__$1,map__38296,map__38296__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38288,map__38288__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__38289,map__38289__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__38290,map__38290__$1,map__38291,map__38291__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;return ((function (switch__5676__auto__,c__5691__auto___38325,notify_chan_38324,temp__4126__auto___38323,vec__38297_38319,new_threshold_colors_38320,selection_path_colours_38321,update_paths_invocation_38322,map__38292,map__38292__$1,filter,data,point_data,boundaryline_collections,map__38293,map__38293__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__38294,map__38294__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38295,map__38295__$1,map__38296,map__38296__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38288,map__38288__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__38289,map__38289__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__38290,map__38290__$1,map__38291,map__38291__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_38308 = [null,null,null,null,null,null,null,null];(statearr_38308[(0)] = state_machine__5677__auto__);
(statearr_38308[(1)] = (1));
return statearr_38308;
});
var state_machine__5677__auto____1 = (function (state_38302){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_38302);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e38309){if((e38309 instanceof Object))
{var ex__5680__auto__ = e38309;var statearr_38310_38326 = state_38302;(statearr_38310_38326[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38302);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e38309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__38327 = state_38302;
state_38302 = G__38327;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_38302){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_38302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___38325,notify_chan_38324,temp__4126__auto___38323,vec__38297_38319,new_threshold_colors_38320,selection_path_colours_38321,update_paths_invocation_38322,map__38292,map__38292__$1,filter,data,point_data,boundaryline_collections,map__38293,map__38293__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__38294,map__38294__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38295,map__38295__$1,map__38296,map__38296__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38288,map__38288__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__38289,map__38289__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__38290,map__38290__$1,map__38291,map__38291__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
})();var state__5693__auto__ = (function (){var statearr_38311 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_38311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___38325);
return statearr_38311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___38325,notify_chan_38324,temp__4126__auto___38323,vec__38297_38319,new_threshold_colors_38320,selection_path_colours_38321,update_paths_invocation_38322,map__38292,map__38292__$1,filter,data,point_data,boundaryline_collections,map__38293,map__38293__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__38294,map__38294__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38295,map__38295__$1,map__38296,map__38296__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38288,map__38288__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__38289,map__38289__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__38290,map__38290__$1,map__38291,map__38291__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_point_data,point_data))
{return clustermap.components.map.update_markers(path_fn,leaflet_map,next_markers,cljs.core.constant$keyword$917.cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;
clustermap.components.map.t38283.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t38283.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38312 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__38312__$1 = ((cljs.core.seq_QMARK_(map__38312))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38312):map__38312);var map = map__38312__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38312__$1,cljs.core.constant$keyword$875);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38312__$1,cljs.core.constant$keyword$1077);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38312__$1,cljs.core.constant$keyword$1076);var map__38313 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38313__$1 = ((cljs.core.seq_QMARK_(map__38313))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38313):map__38313);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38313__$1,cljs.core.constant$keyword$905);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38313__$1,cljs.core.constant$keyword$906);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38313__$1,cljs.core.constant$keyword$1112);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38313__$1,cljs.core.constant$keyword$1113);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38313__$1,cljs.core.constant$keyword$915);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1104], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,cljs.core.constant$keyword$807], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1007,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1109,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,cljs.core.constant$keyword$1104], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,cljs.core.constant$keyword$807], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1119,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
);
});})(node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1119,null);
});})(node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$824.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1109);if(cljs.core.truth_((function (){var and__3529__auto__ = highlight_hit;if(cljs.core.truth_(and__3529__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1119)));
} else
{return and__3529__auto__;
}
})()))
{var G__38314_38328 = L.popup();G__38314_38328.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__38314_38328.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__38314_38328.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1109,highlight_path_ids);
});})(node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__38315 = hits;var G__38315__$1 = (((G__38315 == null))?null:cljs.core.first(G__38315));var G__38315__$2 = (((G__38315__$1 == null))?null:cljs.core.constant$keyword$824.cljs$core$IFn$_invoke$arity$1(G__38315__$1));return G__38315__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$910,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__38312,map__38312__$1,map,path,markers,leaflet_map,map__38313,map__38313__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
);
});})(map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;
clustermap.components.map.t38283.prototype.om$core$IRender$ = true;
clustermap.components.map.t38283.prototype.om$core$IRender$render$arity$1 = ((function (map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;
clustermap.components.map.t38283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (_38285){var self__ = this;
var _38285__$1 = this;return self__.meta38284;
});})(map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;
clustermap.components.map.t38283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function (_38285,meta38284__$1){var self__ = this;
var _38285__$1 = this;return (new clustermap.components.map.t38283(self__.initial_bounds,self__.map__38282,self__.cursor,self__.map__38281,self__.owner,self__.p__38243,self__.map_component,meta38284__$1));
});})(map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;
clustermap.components.map.__GT_t38283 = ((function (map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds){
return (function __GT_t38283(initial_bounds__$1,map__38282__$2,cursor__$1,map__38281__$2,owner__$1,p__38243__$1,map_component__$1,meta38284){return (new clustermap.components.map.t38283(initial_bounds__$1,map__38282__$2,cursor__$1,map__38281__$2,owner__$1,p__38243__$1,map_component__$1,meta38284));
});})(map__38281,map__38281__$1,cursor,map__38282,map__38282__$1,initial_bounds))
;
}
return (new clustermap.components.map.t38283(initial_bounds,map__38282__$1,cursor,map__38281__$1,owner,p__38243,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$900,shared,cljs.core.constant$keyword$903,document.getElementById(elem_id),cljs.core.constant$keyword$875,path], null));
});
