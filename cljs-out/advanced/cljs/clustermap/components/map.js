// Compiled by ClojureScript 0.0-2261
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
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__36942 = config;var G__36942__$1 = (((G__36942 == null))?null:G__36942.components);var G__36942__$2 = (((G__36942__$1 == null))?null:G__36942__$1.map);var G__36942__$3 = (((G__36942__$2 == null))?null:G__36942__$2.api_key);return G__36942__$3;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1051,m,cljs.core.constant$keyword$1052,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1053,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1054,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__36943){
var m = cljs.core.first(arglist__36943);
var all_bounds = cljs.core.rest(arglist__36943);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs36945 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$818,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$982,cljs.core.constant$keyword$882,site) : path_fn.call(null,cljs.core.constant$keyword$982,cljs.core.constant$keyword$882,site)),cljs.core.constant$keyword$799,null,cljs.core.constant$keyword$810,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs36945))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$799,null,cljs.core.constant$keyword$810,"map-marker-popup-location-list"], null),attrs36945], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs36945))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__36948 = location_sites;var G__36948__$1 = (((G__36948 == null))?null:cljs.core.first(G__36948));var G__36948__$2 = (((G__36948__$1 == null))?null:cljs.core.constant$keyword$1055.cljs$core$IFn$_invoke$arity$1(G__36948__$1));var G__36948__$3 = (((G__36948__$2 == null))?null:cljs.core.reverse(G__36948__$2));var G__36948__$4 = (((G__36948__$3 == null))?null:cljs.core.clj__GT_js(G__36948__$3));return G__36948__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$812,"map-marker",cljs.core.constant$keyword$1056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1058,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1059,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_36949_36950 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_36949_36950,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_36949_36950,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36949_36950;
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
,update_marker_keys));var _ = (function (){var seq__36955 = cljs.core.seq(remove_marker_keys);var chunk__36956 = null;var count__36957 = (0);var i__36958 = (0);while(true){
if((i__36958 < count__36957))
{var k = chunk__36956.cljs$core$IIndexed$_nth$arity$2(null,i__36958);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__36959 = seq__36955;
var G__36960 = chunk__36956;
var G__36961 = count__36957;
var G__36962 = (i__36958 + (1));
seq__36955 = G__36959;
chunk__36956 = G__36960;
count__36957 = G__36961;
i__36958 = G__36962;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__36955);if(temp__4126__auto__)
{var seq__36955__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36955__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__36955__$1);{
var G__36963 = cljs.core.chunk_rest(seq__36955__$1);
var G__36964 = c__4299__auto__;
var G__36965 = cljs.core.count(c__4299__auto__);
var G__36966 = (0);
seq__36955 = G__36963;
chunk__36956 = G__36964;
count__36957 = G__36965;
i__36958 = G__36966;
continue;
}
} else
{var k = cljs.core.first(seq__36955__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__36967 = cljs.core.next(seq__36955__$1);
var G__36968 = null;
var G__36969 = (0);
var G__36970 = (0);
seq__36955 = G__36967;
chunk__36956 = G__36968;
count__36957 = G__36969;
i__36958 = G__36970;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__36979 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__36979__$1 = ((cljs.core.seq_QMARK_(map__36979))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36979):map__36979);var clj_envelope = map__36979__$1;var vec__36980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36979__$1,"coordinates");var vec__36981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36980,(0),null);var vec__36982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36982,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36982,(1),null);var vec__36983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36983,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36983,(1),null);var vec__36984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36984,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36984,(1),null);var vec__36985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985,(1),null);var vec__36986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36981,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36986,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36986,(1),null);var inner = vec__36981;var coords = vec__36980;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__36987){var map__36989 = p__36987;var map__36989__$1 = ((cljs.core.seq_QMARK_(map__36989))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36989):map__36989);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36989__$1,cljs.core.constant$keyword$1060);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36989__$1,cljs.core.constant$keyword$1061);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36989__$1,cljs.core.constant$keyword$833);if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
{return highlighted;
} else
{return and__3531__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1062,"#000000",cljs.core.constant$keyword$1063,fill_color,cljs.core.constant$keyword$1064,(2),cljs.core.constant$keyword$1065,(1),cljs.core.constant$keyword$1066,true,cljs.core.constant$keyword$1067,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1062,"#8c2d04",cljs.core.constant$keyword$1063,fill_color,cljs.core.constant$keyword$1064,(1),cljs.core.constant$keyword$1065,(1),cljs.core.constant$keyword$1066,true,cljs.core.constant$keyword$1067,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1062,"#000000",cljs.core.constant$keyword$1063,fill_color,cljs.core.constant$keyword$1064,(2),cljs.core.constant$keyword$1065,(1),cljs.core.constant$keyword$1066,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1062,"#8c2d04",cljs.core.constant$keyword$1063,fill_color,cljs.core.constant$keyword$1064,(1),cljs.core.constant$keyword$1065,(0),cljs.core.constant$keyword$1066,false,cljs.core.constant$keyword$1067,(0)], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__36990){var map__36992 = p__36990;var map__36992__$1 = ((cljs.core.seq_QMARK_(map__36992))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36992):map__36992);var path_attrs = map__36992__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36992__$1,cljs.core.constant$keyword$833);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__36992,map__36992__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$885,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__36992,map__36992__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$799,boundaryline_id,cljs.core.constant$keyword$1068,tolerance,cljs.core.constant$keyword$833,selected,cljs.core.constant$keyword$1069,leaflet_path,cljs.core.constant$keyword$1070,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,leaflet_map,boundaryline_id,path_attrs){var temp__4124__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$2 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$2(boundaryline_id,leaflet_map.getZoom()) : fetch_boundaryline_fn.call(null,boundaryline_id,leaflet_map.getZoom()));if(cljs.core.truth_(temp__4124__auto__))
{var vec__36994 = temp__4124__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(1),null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1069.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,leaflet_map,p__36995,path_attrs){var map__36998 = p__36995;var map__36998__$1 = ((cljs.core.seq_QMARK_(map__36998))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36998):map__36998);var path = map__36998__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36998__$1,cljs.core.constant$keyword$799);var temp__4124__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$2 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$2(boundaryline_id,leaflet_map.getZoom()) : fetch_boundaryline_fn.call(null,boundaryline_id,leaflet_map.getZoom()));if(cljs.core.truth_(temp__4124__auto__))
{var vec__36999 = temp__4124__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36999,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36999,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$1068.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1069.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1069.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$833,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1060,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1061,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$833,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1060,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1061,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__37006 = cljs.core.seq(delete_path_keys);var chunk__37007 = null;var count__37008 = (0);var i__37009 = (0);while(true){
if((i__37009 < count__37008))
{var k = chunk__37007.cljs$core$IIndexed$_nth$arity$2(null,i__37009);var temp__4124__auto___37012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___37012))
{var path_37013 = temp__4124__auto___37012;clustermap.components.map.delete_path(leaflet_map,path_37013);
} else
{}
{
var G__37014 = seq__37006;
var G__37015 = chunk__37007;
var G__37016 = count__37008;
var G__37017 = (i__37009 + (1));
seq__37006 = G__37014;
chunk__37007 = G__37015;
count__37008 = G__37016;
i__37009 = G__37017;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37006);if(temp__4126__auto__)
{var seq__37006__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37006__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37006__$1);{
var G__37018 = cljs.core.chunk_rest(seq__37006__$1);
var G__37019 = c__4299__auto__;
var G__37020 = cljs.core.count(c__4299__auto__);
var G__37021 = (0);
seq__37006 = G__37018;
chunk__37007 = G__37019;
count__37008 = G__37020;
i__37009 = G__37021;
continue;
}
} else
{var k = cljs.core.first(seq__37006__$1);var temp__4124__auto___37022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___37022))
{var path_37023 = temp__4124__auto___37022;clustermap.components.map.delete_path(leaflet_map,path_37023);
} else
{}
{
var G__37024 = cljs.core.next(seq__37006__$1);
var G__37025 = null;
var G__37026 = (0);
var G__37027 = (0);
seq__37006 = G__37024;
chunk__37007 = G__37025;
count__37008 = G__37026;
i__37009 = G__37027;
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
return (function (m,p__37010){var map__37011 = p__37010;var map__37011__$1 = ((cljs.core.seq_QMARK_(map__37011))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37011):map__37011);var path = map__37011__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37011__$1,cljs.core.constant$keyword$799);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$801.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$818,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$982,cljs.core.constant$keyword$885,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$800,bl_id,cljs.core.constant$keyword$801,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$982,cljs.core.constant$keyword$885,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$800,bl_id,cljs.core.constant$keyword$801,bl_name], null))),cljs.core.constant$keyword$799,null,cljs.core.constant$keyword$810,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs37029 = bl_name;if(cljs.core.map_QMARK_(attrs37029))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$799,null,cljs.core.constant$keyword$810,"map-marker-constituency-name"], null),attrs37029], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs37029))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter((function (p__37032){var vec__37033 = p__37032;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37033,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37033,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,index,index_type,blcoll,variable,filter){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37057){var state_val_37058 = (state_37057[(1)]);if((state_val_37058 === (2)))
{var inst_37052 = (state_37057[(2)]);var inst_37053 = [cljs.core.constant$keyword$1071,cljs.core.constant$keyword$1072,cljs.core.constant$keyword$982,cljs.core.constant$keyword$910];var inst_37054 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37053,null));var inst_37055 = (set_app_state_fn.cljs$core$IFn$_invoke$arity$2 ? set_app_state_fn.cljs$core$IFn$_invoke$arity$2(inst_37054,inst_37052) : set_app_state_fn.call(null,inst_37054,inst_37052));var state_37057__$1 = state_37057;return cljs.core.async.impl.ioc_helpers.return_chan(state_37057__$1,inst_37055);
} else
{if((state_val_37058 === (1)))
{var inst_37050 = clustermap.api.boundaryline_aggregation(index,index_type,blcoll,variable,filter);var state_37057__$1 = state_37057;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37057__$1,(2),inst_37050);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37062 = [null,null,null,null,null,null,null];(statearr_37062[(0)] = state_machine__5679__auto__);
(statearr_37062[(1)] = (1));
return statearr_37062;
});
var state_machine__5679__auto____1 = (function (state_37057){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37057);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37063){if((e37063 instanceof Object))
{var ex__5682__auto__ = e37063;var statearr_37064_37066 = state_37057;(statearr_37064_37066[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37057);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e37063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__37067 = state_37057;
state_37057 = G__37067;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37057){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37065 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__37068,owner){var map__37091 = p__37068;var map__37091__$1 = ((cljs.core.seq_QMARK_(map__37091))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37091):map__37091);var cursor = map__37091__$1;var map__37092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37091__$1,cljs.core.constant$keyword$1073);var map__37092__$1 = ((cljs.core.seq_QMARK_(map__37092))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37092):map__37092);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37092__$1,cljs.core.constant$keyword$1074);if(typeof clustermap.components.map.t37093 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t37093 = (function (initial_bounds,map__37092,cursor,map__37091,owner,p__37068,map_component,meta37094){
this.initial_bounds = initial_bounds;
this.map__37092 = map__37092;
this.cursor = cursor;
this.map__37091 = map__37091;
this.owner = owner;
this.p__37068 = p__37068;
this.map_component = map_component;
this.meta37094 = meta37094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t37093.cljs$lang$type = true;
clustermap.components.map.t37093.cljs$lang$ctorStr = "clustermap.components.map/t37093";
clustermap.components.map.t37093.cljs$lang$ctorPrWriter = ((function (map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map/t37093");
});})(map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
;
clustermap.components.map.t37093.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t37093.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (this$,p__37096,p__37097){var self__ = this;
var map__37098 = p__37096;var map__37098__$1 = ((cljs.core.seq_QMARK_(map__37098))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37098):map__37098);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,cljs.core.constant$keyword$784);var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,cljs.core.constant$keyword$910);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,cljs.core.constant$keyword$1075);var map__37099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,cljs.core.constant$keyword$1073);var map__37099__$1 = ((cljs.core.seq_QMARK_(map__37099))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37099):map__37099);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,cljs.core.constant$keyword$1076);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,cljs.core.constant$keyword$1070);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,cljs.core.constant$keyword$1077);var colorchooser_control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,cljs.core.constant$keyword$1078);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,cljs.core.constant$keyword$1079);var map__37100 = p__37097;var map__37100__$1 = ((cljs.core.seq_QMARK_(map__37100))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37100):map__37100);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37100__$1,cljs.core.constant$keyword$1080);var this$__$1 = this;var map__37101 = om.core.get_props(self__.owner);var map__37101__$1 = ((cljs.core.seq_QMARK_(map__37101))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37101):map__37101);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,cljs.core.constant$keyword$784);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,cljs.core.constant$keyword$910);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,cljs.core.constant$keyword$1075);var map__37102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,cljs.core.constant$keyword$1073);var map__37102__$1 = ((cljs.core.seq_QMARK_(map__37102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37102):map__37102);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,cljs.core.constant$keyword$1079);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,cljs.core.constant$keyword$1077);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,cljs.core.constant$keyword$1076);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,cljs.core.constant$keyword$1070);var initial_bounds__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,cljs.core.constant$keyword$1074);var map__37103 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37103__$1 = ((cljs.core.seq_QMARK_(map__37103))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37103):map__37103);var set_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,cljs.core.constant$keyword$1081);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,cljs.core.constant$keyword$1082);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,cljs.core.constant$keyword$1083);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,cljs.core.constant$keyword$881);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,cljs.core.constant$keyword$880);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37103__$1,cljs.core.constant$keyword$890);var map__37104 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37104__$1 = ((cljs.core.seq_QMARK_(map__37104))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37104):map__37104);var map__37105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37104__$1,cljs.core.constant$keyword$982);var map__37105__$1 = ((cljs.core.seq_QMARK_(map__37105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37105):map__37105);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,cljs.core.constant$keyword$1054);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,cljs.core.constant$keyword$1053);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,cljs.core.constant$keyword$1052);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,cljs.core.constant$keyword$1051);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37104__$1,cljs.core.constant$keyword$1084);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37104__$1,cljs.core.constant$keyword$1080);if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1070], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1077], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3531__auto__))
{var or__3543__auto__ = (function (){var and__3531__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_data,null);
} else
{return and__3531__auto____$1;
}
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (function (){var and__3531__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_agg,boundaryline_agg);
} else
{return and__3531__auto____$1;
}
})();if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,boundaryline_collection)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter,filter));
}
}
} else
{return and__3531__auto__;
}
})()))
{clustermap.components.map.fetch_aggregation_data(set_app_state_fn,cljs.core.constant$keyword$794.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),next_boundaryline_collection,cljs.core.constant$keyword$1086.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter));
} else
{}
var vec__37106 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1087.cljs$core$IFn$_invoke$arity$1(colorchooser_control),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1088.cljs$core$IFn$_invoke$arity$1(colorchooser_control)),cljs.core.constant$keyword$800,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1086.cljs$core$IFn$_invoke$arity$1(colorchooser_control)),cljs.core.constant$keyword$892.cljs$core$IFn$_invoke$arity$1(next_data));var threshold_colors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37106,(0),null);var selection_path_colours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37106,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,data))
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next-data",next_data], null)));
console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["threshold-colors",threshold_colors], null)));
console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection-path-colors",selection_path_colours], null)));
} else
{}
return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundaryline_fn,next_boundaryline_collection),leaflet_map,paths,path_selections,next_path_highlights,selection_path_colours);
});})(map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
;
clustermap.components.map.t37093.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t37093.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37107 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__37107__$1 = ((cljs.core.seq_QMARK_(map__37107))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37107):map__37107);var map = map__37107__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,cljs.core.constant$keyword$850);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,cljs.core.constant$keyword$1052);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,cljs.core.constant$keyword$1051);var map__37108 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37108__$1 = ((cljs.core.seq_QMARK_(map__37108))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37108):map__37108);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37108__$1,cljs.core.constant$keyword$880);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37108__$1,cljs.core.constant$keyword$881);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37108__$1,cljs.core.constant$keyword$1082);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37108__$1,cljs.core.constant$keyword$1083);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37108__$1,cljs.core.constant$keyword$890);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1076], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1070], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$982,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1080,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",((function (node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (e){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1076], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1070], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
);
leaflet_map.on("moveend",((function (node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (e){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1076], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1073,cljs.core.constant$keyword$1070], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1089,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
);
});})(node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1089,null);
});})(node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1080);if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1089)));
} else
{return and__3531__auto__;
}
})()))
{var G__37109_37113 = L.popup();G__37109_37113.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__37109_37113.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__37109_37113.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1080,highlight_path_ids);
});})(node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__37110 = hits;var G__37110__$1 = (((G__37110 == null))?null:cljs.core.first(G__37110));var G__37110__$2 = (((G__37110__$1 == null))?null:cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(G__37110__$1));return G__37110__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$885,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__37107,map__37107__$1,map,path,markers,leaflet_map,map__37108,map__37108__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
);
});})(map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
;
clustermap.components.map.t37093.prototype.om$core$IRender$ = true;
clustermap.components.map.t37093.prototype.om$core$IRender$render$arity$1 = ((function (map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
;
clustermap.components.map.t37093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (_37095){var self__ = this;
var _37095__$1 = this;return self__.meta37094;
});})(map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
;
clustermap.components.map.t37093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function (_37095,meta37094__$1){var self__ = this;
var _37095__$1 = this;return (new clustermap.components.map.t37093(self__.initial_bounds,self__.map__37092,self__.cursor,self__.map__37091,self__.owner,self__.p__37068,self__.map_component,meta37094__$1));
});})(map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
;
clustermap.components.map.__GT_t37093 = ((function (map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds){
return (function __GT_t37093(initial_bounds__$1,map__37092__$2,cursor__$1,map__37091__$2,owner__$1,p__37068__$1,map_component__$1,meta37094){return (new clustermap.components.map.t37093(initial_bounds__$1,map__37092__$2,cursor__$1,map__37091__$2,owner__$1,p__37068__$1,map_component__$1,meta37094));
});})(map__37091,map__37091__$1,cursor,map__37092,map__37092__$1,initial_bounds))
;
}
return (new clustermap.components.map.t37093(initial_bounds,map__37092__$1,cursor,map__37091__$1,owner,p__37068,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$875,shared,cljs.core.constant$keyword$878,document.getElementById(elem_id),cljs.core.constant$keyword$850,path], null));
});
