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
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__37663 = config;var G__37663__$1 = (((G__37663 == null))?null:G__37663.components);var G__37663__$2 = (((G__37663__$1 == null))?null:G__37663__$1.map);var G__37663__$3 = (((G__37663__$2 == null))?null:G__37663__$2.api_key);return G__37663__$3;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1068,m,cljs.core.constant$keyword$1069,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1070,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1071,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__37664){
var m = cljs.core.first(arglist__37664);
var all_bounds = cljs.core.rest(arglist__37664);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs37666 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$835,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$999,cljs.core.constant$keyword$899,site) : path_fn.call(null,cljs.core.constant$keyword$999,cljs.core.constant$keyword$899,site)),cljs.core.constant$keyword$816,null,cljs.core.constant$keyword$827,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$844.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs37666))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$816,null,cljs.core.constant$keyword$827,"map-marker-popup-location-list"], null),attrs37666], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs37666))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__37669 = location_sites;var G__37669__$1 = (((G__37669 == null))?null:cljs.core.first(G__37669));var G__37669__$2 = (((G__37669__$1 == null))?null:cljs.core.constant$keyword$1072.cljs$core$IFn$_invoke$arity$1(G__37669__$1));var G__37669__$3 = (((G__37669__$2 == null))?null:cljs.core.reverse(G__37669__$2));var G__37669__$4 = (((G__37669__$3 == null))?null:cljs.core.clj__GT_js(G__37669__$3));return G__37669__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$829,"map-marker",cljs.core.constant$keyword$1073,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1074,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1075,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1076,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_37670_37671 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_37670_37671,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_37670_37671,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37670_37671;
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
,update_marker_keys));var _ = (function (){var seq__37676 = cljs.core.seq(remove_marker_keys);var chunk__37677 = null;var count__37678 = (0);var i__37679 = (0);while(true){
if((i__37679 < count__37678))
{var k = chunk__37677.cljs$core$IIndexed$_nth$arity$2(null,i__37679);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__37680 = seq__37676;
var G__37681 = chunk__37677;
var G__37682 = count__37678;
var G__37683 = (i__37679 + (1));
seq__37676 = G__37680;
chunk__37677 = G__37681;
count__37678 = G__37682;
i__37679 = G__37683;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37676);if(temp__4126__auto__)
{var seq__37676__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37676__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37676__$1);{
var G__37684 = cljs.core.chunk_rest(seq__37676__$1);
var G__37685 = c__4299__auto__;
var G__37686 = cljs.core.count(c__4299__auto__);
var G__37687 = (0);
seq__37676 = G__37684;
chunk__37677 = G__37685;
count__37678 = G__37686;
i__37679 = G__37687;
continue;
}
} else
{var k = cljs.core.first(seq__37676__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__37688 = cljs.core.next(seq__37676__$1);
var G__37689 = null;
var G__37690 = (0);
var G__37691 = (0);
seq__37676 = G__37688;
chunk__37677 = G__37689;
count__37678 = G__37690;
i__37679 = G__37691;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__37700 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__37700__$1 = ((cljs.core.seq_QMARK_(map__37700))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37700):map__37700);var clj_envelope = map__37700__$1;var vec__37701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37700__$1,"coordinates");var vec__37702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37701,(0),null);var vec__37703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(1),null);var vec__37704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37704,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37704,(1),null);var vec__37705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(1),null);var vec__37706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706,(1),null);var vec__37707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37707,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37707,(1),null);var inner = vec__37702;var coords = vec__37701;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__37708){var map__37710 = p__37708;var map__37710__$1 = ((cljs.core.seq_QMARK_(map__37710))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37710):map__37710);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37710__$1,cljs.core.constant$keyword$1077);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37710__$1,cljs.core.constant$keyword$1078);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37710__$1,cljs.core.constant$keyword$850);if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
{return highlighted;
} else
{return and__3531__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1079,"#000000",cljs.core.constant$keyword$1080,fill_color,cljs.core.constant$keyword$1081,(2),cljs.core.constant$keyword$1082,(1),cljs.core.constant$keyword$1083,true,cljs.core.constant$keyword$1084,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1079,"#8c2d04",cljs.core.constant$keyword$1080,fill_color,cljs.core.constant$keyword$1081,(1),cljs.core.constant$keyword$1082,(1),cljs.core.constant$keyword$1083,true,cljs.core.constant$keyword$1084,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1079,"#000000",cljs.core.constant$keyword$1080,fill_color,cljs.core.constant$keyword$1081,(2),cljs.core.constant$keyword$1082,(1),cljs.core.constant$keyword$1083,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1079,"#8c2d04",cljs.core.constant$keyword$1080,fill_color,cljs.core.constant$keyword$1081,(1),cljs.core.constant$keyword$1082,(0),cljs.core.constant$keyword$1083,false,cljs.core.constant$keyword$1084,(0)], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__37711){var map__37713 = p__37711;var map__37713__$1 = ((cljs.core.seq_QMARK_(map__37713))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37713):map__37713);var path_attrs = map__37713__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37713__$1,cljs.core.constant$keyword$850);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__37713,map__37713__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$902,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__37713,map__37713__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$816,boundaryline_id,cljs.core.constant$keyword$799,tolerance,cljs.core.constant$keyword$850,selected,cljs.core.constant$keyword$1085,leaflet_path,cljs.core.constant$keyword$801,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$816.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__37714,tolerance,js_boundaryline,path_attrs){var map__37716 = p__37714;var map__37716__$1 = ((cljs.core.seq_QMARK_(map__37716))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37716):map__37716);var path = map__37716__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37716__$1,cljs.core.constant$keyword$816);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1086,create_path_keys,cljs.core.constant$keyword$1087,delete_path_keys,cljs.core.constant$keyword$1088,update_path_keys], null)));var vec__37730 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$800,live_path_keys) : fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$800,live_path_keys));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37730,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37730,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan){
return (function (p__37731){var vec__37732 = p__37731;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37732,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37732,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37732,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$850,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1077,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1078,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan))
,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan){
return (function (k){var vec__37733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37733,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37733,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan,created_paths){
return (function (p__37734){var vec__37735 = p__37734;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37735,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37735,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37735,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$850,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1077,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1078,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan,created_paths))
,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__37736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__37737 = cljs.core.seq(delete_path_keys);var chunk__37738 = null;var count__37739 = (0);var i__37740 = (0);while(true){
if((i__37740 < count__37739))
{var k = chunk__37738.cljs$core$IIndexed$_nth$arity$2(null,i__37740);var temp__4124__auto___37743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___37743))
{var path_37744 = temp__4124__auto___37743;clustermap.components.map.delete_path(leaflet_map,path_37744);
} else
{}
{
var G__37745 = seq__37737;
var G__37746 = chunk__37738;
var G__37747 = count__37739;
var G__37748 = (i__37740 + (1));
seq__37737 = G__37745;
chunk__37738 = G__37746;
count__37739 = G__37747;
i__37740 = G__37748;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37737);if(temp__4126__auto__)
{var seq__37737__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37737__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37737__$1);{
var G__37749 = cljs.core.chunk_rest(seq__37737__$1);
var G__37750 = c__4299__auto__;
var G__37751 = cljs.core.count(c__4299__auto__);
var G__37752 = (0);
seq__37737 = G__37749;
chunk__37738 = G__37750;
count__37739 = G__37751;
i__37740 = G__37752;
continue;
}
} else
{var k = cljs.core.first(seq__37737__$1);var temp__4124__auto___37753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___37753))
{var path_37754 = temp__4124__auto___37753;clustermap.components.map.delete_path(leaflet_map,path_37754);
} else
{}
{
var G__37755 = cljs.core.next(seq__37737__$1);
var G__37756 = null;
var G__37757 = (0);
var G__37758 = (0);
seq__37737 = G__37755;
chunk__37738 = G__37756;
count__37739 = G__37757;
i__37740 = G__37758;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__37741){var map__37742 = p__37741;var map__37742__$1 = ((cljs.core.seq_QMARK_(map__37742))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37742):map__37742);var path = map__37742__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37742__$1,cljs.core.constant$keyword$816);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__37730,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_(paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$816.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$818.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$835,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$999,cljs.core.constant$keyword$902,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$817,bl_id,cljs.core.constant$keyword$818,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$999,cljs.core.constant$keyword$902,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$817,bl_id,cljs.core.constant$keyword$818,bl_name], null))),cljs.core.constant$keyword$816,null,cljs.core.constant$keyword$827,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs37760 = bl_name;if(cljs.core.map_QMARK_(attrs37760))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$816,null,cljs.core.constant$keyword$827,"map-marker-constituency-name"], null),attrs37760], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs37760))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter((function (p__37763){var vec__37764 = p__37763;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37764,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37764,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,blcoll,variable,filter,bounds){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37809){var state_val_37810 = (state_37809[(1)]);if((state_val_37810 === (5)))
{var inst_37807 = (state_37809[(2)]);var state_37809__$1 = state_37809;return cljs.core.async.impl.ioc_helpers.return_chan(state_37809__$1,inst_37807);
} else
{if((state_val_37810 === (4)))
{var state_37809__$1 = state_37809;var statearr_37811_37823 = state_37809__$1;(statearr_37811_37823[(2)] = null);
(statearr_37811_37823[(1)] = (5));
return cljs.core.constant$keyword$781;
} else
{if((state_val_37810 === (3)))
{var inst_37796 = (state_37809[(7)]);var inst_37802 = [cljs.core.constant$keyword$1089,cljs.core.constant$keyword$1090,cljs.core.constant$keyword$999,cljs.core.constant$keyword$927];var inst_37803 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37802,null));var inst_37804 = (set_app_state_fn.cljs$core$IFn$_invoke$arity$2 ? set_app_state_fn.cljs$core$IFn$_invoke$arity$2(inst_37803,inst_37796) : set_app_state_fn.call(null,inst_37803,inst_37796));var state_37809__$1 = state_37809;var statearr_37812_37824 = state_37809__$1;(statearr_37812_37824[(2)] = inst_37804);
(statearr_37812_37824[(1)] = (5));
return cljs.core.constant$keyword$781;
} else
{if((state_val_37810 === (2)))
{var inst_37796 = (state_37809[(2)]);var inst_37797 = [cljs.core.constant$keyword$1089,cljs.core.constant$keyword$1090,cljs.core.constant$keyword$999,cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1092];var inst_37798 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37797,null));var inst_37799 = (get_app_state_fn.cljs$core$IFn$_invoke$arity$1 ? get_app_state_fn.cljs$core$IFn$_invoke$arity$1(inst_37798) : get_app_state_fn.call(null,inst_37798));var inst_37800 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ticket,inst_37799);var state_37809__$1 = (function (){var statearr_37813 = state_37809;(statearr_37813[(7)] = inst_37796);
return statearr_37813;
})();if(inst_37800)
{var statearr_37814_37825 = state_37809__$1;(statearr_37814_37825[(1)] = (3));
} else
{var statearr_37815_37826 = state_37809__$1;(statearr_37815_37826[(1)] = (4));
}
return cljs.core.constant$keyword$781;
} else
{if((state_val_37810 === (1)))
{var inst_37794 = clustermap.api.boundaryline_aggregation(index,index_type,blcoll,variable,filter,bounds);var state_37809__$1 = state_37809;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37809__$1,(2),inst_37794);
} else
{return null;
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37819 = [null,null,null,null,null,null,null,null];(statearr_37819[(0)] = state_machine__5679__auto__);
(statearr_37819[(1)] = (1));
return statearr_37819;
});
var state_machine__5679__auto____1 = (function (state_37809){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37809);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37820){if((e37820 instanceof Object))
{var ex__5682__auto__ = e37820;var statearr_37821_37827 = state_37809;(statearr_37821_37827[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37809);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e37820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__37828 = state_37809;
state_37809 = G__37828;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37809){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37822 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__37829,owner){var map__37867 = p__37829;var map__37867__$1 = ((cljs.core.seq_QMARK_(map__37867))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37867):map__37867);var cursor = map__37867__$1;var map__37868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37867__$1,cljs.core.constant$keyword$1091);var map__37868__$1 = ((cljs.core.seq_QMARK_(map__37868))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37868):map__37868);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37868__$1,cljs.core.constant$keyword$1093);if(typeof clustermap.components.map.t37869 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t37869 = (function (initial_bounds,map__37868,cursor,map__37867,owner,p__37829,map_component,meta37870){
this.initial_bounds = initial_bounds;
this.map__37868 = map__37868;
this.cursor = cursor;
this.map__37867 = map__37867;
this.owner = owner;
this.p__37829 = p__37829;
this.map_component = map_component;
this.meta37870 = meta37870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t37869.cljs$lang$type = true;
clustermap.components.map.t37869.cljs$lang$ctorStr = "clustermap.components.map/t37869";
clustermap.components.map.t37869.cljs$lang$ctorPrWriter = ((function (map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map/t37869");
});})(map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;
clustermap.components.map.t37869.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t37869.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (this$,p__37872,p__37873){var self__ = this;
var map__37874 = p__37872;var map__37874__$1 = ((cljs.core.seq_QMARK_(map__37874))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37874):map__37874);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874__$1,cljs.core.constant$keyword$802);var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874__$1,cljs.core.constant$keyword$927);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874__$1,cljs.core.constant$keyword$1094);var map__37875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874__$1,cljs.core.constant$keyword$1091);var map__37875__$1 = ((cljs.core.seq_QMARK_(map__37875))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37875):map__37875);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875__$1,cljs.core.constant$keyword$1095);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875__$1,cljs.core.constant$keyword$801);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875__$1,cljs.core.constant$keyword$1096);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875__$1,cljs.core.constant$keyword$1097);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875__$1,cljs.core.constant$keyword$1098);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875__$1,cljs.core.constant$keyword$1099);var map__37876 = p__37873;var map__37876__$1 = ((cljs.core.seq_QMARK_(map__37876))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37876):map__37876);var map__37877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37876__$1,cljs.core.constant$keyword$999);var map__37877__$1 = ((cljs.core.seq_QMARK_(map__37877))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37877):map__37877);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,cljs.core.constant$keyword$1070);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,cljs.core.constant$keyword$1071);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37876__$1,cljs.core.constant$keyword$1100);var this$__$1 = this;var map__37878 = om.core.get_props(self__.owner);var map__37878__$1 = ((cljs.core.seq_QMARK_(map__37878))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37878):map__37878);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,cljs.core.constant$keyword$802);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,cljs.core.constant$keyword$927);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,cljs.core.constant$keyword$1094);var map__37879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878__$1,cljs.core.constant$keyword$1091);var map__37879__$1 = ((cljs.core.seq_QMARK_(map__37879))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37879):map__37879);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,cljs.core.constant$keyword$1099);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,cljs.core.constant$keyword$1098);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,cljs.core.constant$keyword$1097);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,cljs.core.constant$keyword$1096);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,cljs.core.constant$keyword$1095);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,cljs.core.constant$keyword$801);var initial_bounds__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,cljs.core.constant$keyword$1093);var map__37880 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37880__$1 = ((cljs.core.seq_QMARK_(map__37880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37880):map__37880);var get_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,cljs.core.constant$keyword$1101);var set_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,cljs.core.constant$keyword$1102);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,cljs.core.constant$keyword$1103);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,cljs.core.constant$keyword$1104);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,cljs.core.constant$keyword$898);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,cljs.core.constant$keyword$897);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,cljs.core.constant$keyword$907);var map__37881 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37881__$1 = ((cljs.core.seq_QMARK_(map__37881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37881):map__37881);var map__37882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37881__$1,cljs.core.constant$keyword$999);var map__37882__$1 = ((cljs.core.seq_QMARK_(map__37882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37882):map__37882);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,cljs.core.constant$keyword$1071);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,cljs.core.constant$keyword$1070);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,cljs.core.constant$keyword$1069);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37882__$1,cljs.core.constant$keyword$1068);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37881__$1,cljs.core.constant$keyword$1105);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37881__$1,cljs.core.constant$keyword$1100);if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$801], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1096], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
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
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter,filter)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,bounds));
}
} else
{return and__3531__auto__;
}
})()))
{var ticket_37904 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1092], null),ticket_37904);
clustermap.components.map.fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket_37904,cljs.core.constant$keyword$812.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1106.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1107.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,colorchooser)))
{var vec__37883 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1108.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1109.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$817,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1107.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$909.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37883,(0),null);var selection_path_colours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37883,(1),null);var update_paths_invocation = ((function (vec__37883,new_threshold_colors,selection_path_colours,map__37878,map__37878__$1,filter,data,boundaryline_collections,map__37879,map__37879__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37880,map__37880__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37881,map__37881__$1,map__37882,map__37882__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37874,map__37874__$1,next_filter,next_data,next_boundaryline_collections,map__37875,map__37875__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__37876,map__37876__$1,map__37877,map__37877__$1,next_paths,next_path_selections,next_path_highlights,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours);
});})(vec__37883,new_threshold_colors,selection_path_colours,map__37878,map__37878__$1,filter,data,boundaryline_collections,map__37879,map__37879__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37880,map__37880__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37881,map__37881__$1,map__37882,map__37882__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37874,map__37874__$1,next_filter,next_data,next_boundaryline_collections,map__37875,map__37875__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__37876,map__37876__$1,map__37877,map__37877__$1,next_paths,next_path_selections,next_path_highlights,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1099], null),new_threshold_colors);
} else
{}
var temp__4126__auto__ = update_paths_invocation();if(cljs.core.truth_(temp__4126__auto__))
{var notify_chan = temp__4126__auto__;var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__37883,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37878,map__37878__$1,filter,data,boundaryline_collections,map__37879,map__37879__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37880,map__37880__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37881,map__37881__$1,map__37882,map__37882__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37874,map__37874__$1,next_filter,next_data,next_boundaryline_collections,map__37875,map__37875__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__37876,map__37876__$1,map__37877,map__37877__$1,next_paths,next_path_selections,next_path_highlights,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__37883,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37878,map__37878__$1,filter,data,boundaryline_collections,map__37879,map__37879__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37880,map__37880__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37881,map__37881__$1,map__37882,map__37882__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37874,map__37874__$1,next_filter,next_data,next_boundaryline_collections,map__37875,map__37875__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__37876,map__37876__$1,map__37877,map__37877__$1,next_paths,next_path_selections,next_path_highlights,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (state_37888){var state_val_37889 = (state_37888[(1)]);if((state_val_37889 === (2)))
{var inst_37885 = (state_37888[(2)]);var inst_37886 = update_paths_invocation();var state_37888__$1 = (function (){var statearr_37890 = state_37888;(statearr_37890[(7)] = inst_37885);
return statearr_37890;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37888__$1,inst_37886);
} else
{if((state_val_37889 === (1)))
{var state_37888__$1 = state_37888;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37888__$1,(2),notify_chan);
} else
{return null;
}
}
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__37883,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37878,map__37878__$1,filter,data,boundaryline_collections,map__37879,map__37879__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37880,map__37880__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37881,map__37881__$1,map__37882,map__37882__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37874,map__37874__$1,next_filter,next_data,next_boundaryline_collections,map__37875,map__37875__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__37876,map__37876__$1,map__37877,map__37877__$1,next_paths,next_path_selections,next_path_highlights,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;return ((function (switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__37883,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37878,map__37878__$1,filter,data,boundaryline_collections,map__37879,map__37879__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37880,map__37880__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37881,map__37881__$1,map__37882,map__37882__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37874,map__37874__$1,next_filter,next_data,next_boundaryline_collections,map__37875,map__37875__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__37876,map__37876__$1,map__37877,map__37877__$1,next_paths,next_path_selections,next_path_highlights,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37894 = [null,null,null,null,null,null,null,null];(statearr_37894[(0)] = state_machine__5679__auto__);
(statearr_37894[(1)] = (1));
return statearr_37894;
});
var state_machine__5679__auto____1 = (function (state_37888){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37888);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$781))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37895){if((e37895 instanceof Object))
{var ex__5682__auto__ = e37895;var statearr_37896_37905 = state_37888;(statearr_37896_37905[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37888);
return cljs.core.constant$keyword$781;
} else
{if(cljs.core.constant$keyword$772)
{throw e37895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$781))
{{
var G__37906 = state_37888;
state_37888 = G__37906;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37888){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__37883,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37878,map__37878__$1,filter,data,boundaryline_collections,map__37879,map__37879__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37880,map__37880__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37881,map__37881__$1,map__37882,map__37882__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37874,map__37874__$1,next_filter,next_data,next_boundaryline_collections,map__37875,map__37875__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__37876,map__37876__$1,map__37877,map__37877__$1,next_paths,next_path_selections,next_path_highlights,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
})();var state__5695__auto__ = (function (){var statearr_37897 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__37883,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37878,map__37878__$1,filter,data,boundaryline_collections,map__37879,map__37879__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37880,map__37880__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37881,map__37881__$1,map__37882,map__37882__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37874,map__37874__$1,next_filter,next_data,next_boundaryline_collections,map__37875,map__37875__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__37876,map__37876__$1,map__37877,map__37877__$1,next_paths,next_path_selections,next_path_highlights,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
);
return c__5693__auto__;
} else
{return null;
}
} else
{return null;
}
});})(map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;
clustermap.components.map.t37869.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t37869.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37898 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__37898__$1 = ((cljs.core.seq_QMARK_(map__37898))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37898):map__37898);var map = map__37898__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898__$1,cljs.core.constant$keyword$867);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898__$1,cljs.core.constant$keyword$1069);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898__$1,cljs.core.constant$keyword$1068);var map__37899 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37899__$1 = ((cljs.core.seq_QMARK_(map__37899))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37899):map__37899);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,cljs.core.constant$keyword$897);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,cljs.core.constant$keyword$898);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,cljs.core.constant$keyword$1103);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,cljs.core.constant$keyword$1104);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,cljs.core.constant$keyword$907);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1095], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$801], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$999,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1100,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$1095], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1091,cljs.core.constant$keyword$801], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1110,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
);
});})(node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1110,null);
});})(node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$816.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1100);if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1110)));
} else
{return and__3531__auto__;
}
})()))
{var G__37900_37907 = L.popup();G__37900_37907.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__37900_37907.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__37900_37907.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1100,highlight_path_ids);
});})(node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__37901 = hits;var G__37901__$1 = (((G__37901 == null))?null:cljs.core.first(G__37901));var G__37901__$2 = (((G__37901__$1 == null))?null:cljs.core.constant$keyword$816.cljs$core$IFn$_invoke$arity$1(G__37901__$1));return G__37901__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$902,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__37898,map__37898__$1,map,path,markers,leaflet_map,map__37899,map__37899__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
);
});})(map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;
clustermap.components.map.t37869.prototype.om$core$IRender$ = true;
clustermap.components.map.t37869.prototype.om$core$IRender$render$arity$1 = ((function (map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;
clustermap.components.map.t37869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (_37871){var self__ = this;
var _37871__$1 = this;return self__.meta37870;
});})(map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;
clustermap.components.map.t37869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function (_37871,meta37870__$1){var self__ = this;
var _37871__$1 = this;return (new clustermap.components.map.t37869(self__.initial_bounds,self__.map__37868,self__.cursor,self__.map__37867,self__.owner,self__.p__37829,self__.map_component,meta37870__$1));
});})(map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;
clustermap.components.map.__GT_t37869 = ((function (map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds){
return (function __GT_t37869(initial_bounds__$1,map__37868__$2,cursor__$1,map__37867__$2,owner__$1,p__37829__$1,map_component__$1,meta37870){return (new clustermap.components.map.t37869(initial_bounds__$1,map__37868__$2,cursor__$1,map__37867__$2,owner__$1,p__37829__$1,map_component__$1,meta37870));
});})(map__37867,map__37867__$1,cursor,map__37868,map__37868__$1,initial_bounds))
;
}
return (new clustermap.components.map.t37869(initial_bounds,map__37868__$1,cursor,map__37867__$1,owner,p__37829,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$892,shared,cljs.core.constant$keyword$895,document.getElementById(elem_id),cljs.core.constant$keyword$867,path], null));
});
