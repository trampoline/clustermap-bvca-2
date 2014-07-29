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
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__37765 = config;var G__37765__$1 = (((G__37765 == null))?null:G__37765.components);var G__37765__$2 = (((G__37765__$1 == null))?null:G__37765__$1.map);var G__37765__$3 = (((G__37765__$2 == null))?null:G__37765__$2.api_key);return G__37765__$3;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1064,m,cljs.core.constant$keyword$1065,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1066,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1067,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__37766){
var m = cljs.core.first(arglist__37766);
var all_bounds = cljs.core.rest(arglist__37766);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs37768 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$831,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$995,cljs.core.constant$keyword$895,site) : path_fn.call(null,cljs.core.constant$keyword$995,cljs.core.constant$keyword$895,site)),cljs.core.constant$keyword$812,null,cljs.core.constant$keyword$823,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$840.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs37768))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$812,null,cljs.core.constant$keyword$823,"map-marker-popup-location-list"], null),attrs37768], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs37768))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__37771 = location_sites;var G__37771__$1 = (((G__37771 == null))?null:cljs.core.first(G__37771));var G__37771__$2 = (((G__37771__$1 == null))?null:cljs.core.constant$keyword$1068.cljs$core$IFn$_invoke$arity$1(G__37771__$1));var G__37771__$3 = (((G__37771__$2 == null))?null:cljs.core.reverse(G__37771__$2));var G__37771__$4 = (((G__37771__$3 == null))?null:cljs.core.clj__GT_js(G__37771__$3));return G__37771__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$825,"map-marker",cljs.core.constant$keyword$1069,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1072,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_37772_37773 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_37772_37773,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_37772_37773,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37772_37773;
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
,update_marker_keys));var _ = (function (){var seq__37778 = cljs.core.seq(remove_marker_keys);var chunk__37779 = null;var count__37780 = (0);var i__37781 = (0);while(true){
if((i__37781 < count__37780))
{var k = chunk__37779.cljs$core$IIndexed$_nth$arity$2(null,i__37781);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__37782 = seq__37778;
var G__37783 = chunk__37779;
var G__37784 = count__37780;
var G__37785 = (i__37781 + (1));
seq__37778 = G__37782;
chunk__37779 = G__37783;
count__37780 = G__37784;
i__37781 = G__37785;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37778);if(temp__4126__auto__)
{var seq__37778__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37778__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37778__$1);{
var G__37786 = cljs.core.chunk_rest(seq__37778__$1);
var G__37787 = c__4299__auto__;
var G__37788 = cljs.core.count(c__4299__auto__);
var G__37789 = (0);
seq__37778 = G__37786;
chunk__37779 = G__37787;
count__37780 = G__37788;
i__37781 = G__37789;
continue;
}
} else
{var k = cljs.core.first(seq__37778__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__37790 = cljs.core.next(seq__37778__$1);
var G__37791 = null;
var G__37792 = (0);
var G__37793 = (0);
seq__37778 = G__37790;
chunk__37779 = G__37791;
count__37780 = G__37792;
i__37781 = G__37793;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__37802 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__37802__$1 = ((cljs.core.seq_QMARK_(map__37802))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37802):map__37802);var clj_envelope = map__37802__$1;var vec__37803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37802__$1,"coordinates");var vec__37804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37803,(0),null);var vec__37805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37804,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37805,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37805,(1),null);var vec__37806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37804,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37806,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37806,(1),null);var vec__37807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37804,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37807,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37807,(1),null);var vec__37808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37804,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37808,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37808,(1),null);var vec__37809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37804,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37809,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37809,(1),null);var inner = vec__37804;var coords = vec__37803;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__37810){var map__37812 = p__37810;var map__37812__$1 = ((cljs.core.seq_QMARK_(map__37812))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37812):map__37812);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,cljs.core.constant$keyword$1073);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,cljs.core.constant$keyword$1074);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,cljs.core.constant$keyword$846);if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
{return highlighted;
} else
{return and__3531__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1075,"#000000",cljs.core.constant$keyword$1076,fill_color,cljs.core.constant$keyword$1077,(2),cljs.core.constant$keyword$1078,(1),cljs.core.constant$keyword$1079,true,cljs.core.constant$keyword$1080,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1075,"#8c2d04",cljs.core.constant$keyword$1076,fill_color,cljs.core.constant$keyword$1077,(1),cljs.core.constant$keyword$1078,(1),cljs.core.constant$keyword$1079,true,cljs.core.constant$keyword$1080,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1075,"#000000",cljs.core.constant$keyword$1076,fill_color,cljs.core.constant$keyword$1077,(2),cljs.core.constant$keyword$1078,(1),cljs.core.constant$keyword$1079,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1075,"#8c2d04",cljs.core.constant$keyword$1076,fill_color,cljs.core.constant$keyword$1077,(1),cljs.core.constant$keyword$1078,(0),cljs.core.constant$keyword$1079,false,cljs.core.constant$keyword$1080,(0)], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__37813){var map__37815 = p__37813;var map__37815__$1 = ((cljs.core.seq_QMARK_(map__37815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37815):map__37815);var path_attrs = map__37815__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37815__$1,cljs.core.constant$keyword$846);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__37815,map__37815__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__37815,map__37815__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$812,boundaryline_id,cljs.core.constant$keyword$795,tolerance,cljs.core.constant$keyword$846,selected,cljs.core.constant$keyword$1081,leaflet_path,cljs.core.constant$keyword$797,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1081.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$812.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__37816,tolerance,js_boundaryline,path_attrs){var map__37818 = p__37816;var map__37818__$1 = ((cljs.core.seq_QMARK_(map__37818))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37818):map__37818);var path = map__37818__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37818__$1,cljs.core.constant$keyword$812);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$795.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1081.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1081.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var vec__37832 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$796,live_path_keys) : fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$796,live_path_keys));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37832,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37832,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan){
return (function (p__37833){var vec__37834 = p__37833;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37834,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37834,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37834,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$846,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1073,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1074,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan))
,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan){
return (function (k){var vec__37835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan,created_paths){
return (function (p__37836){var vec__37837 = p__37836;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37837,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37837,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37837,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$846,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1073,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1074,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan,created_paths))
,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__37838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37838,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37838,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var _ = (function (){var seq__37839 = cljs.core.seq(delete_path_keys);var chunk__37840 = null;var count__37841 = (0);var i__37842 = (0);while(true){
if((i__37842 < count__37841))
{var k = chunk__37840.cljs$core$IIndexed$_nth$arity$2(null,i__37842);var temp__4124__auto___37845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___37845))
{var path_37846 = temp__4124__auto___37845;clustermap.components.map.delete_path(leaflet_map,path_37846);
} else
{}
{
var G__37847 = seq__37839;
var G__37848 = chunk__37840;
var G__37849 = count__37841;
var G__37850 = (i__37842 + (1));
seq__37839 = G__37847;
chunk__37840 = G__37848;
count__37841 = G__37849;
i__37842 = G__37850;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37839);if(temp__4126__auto__)
{var seq__37839__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37839__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37839__$1);{
var G__37851 = cljs.core.chunk_rest(seq__37839__$1);
var G__37852 = c__4299__auto__;
var G__37853 = cljs.core.count(c__4299__auto__);
var G__37854 = (0);
seq__37839 = G__37851;
chunk__37840 = G__37852;
count__37841 = G__37853;
i__37842 = G__37854;
continue;
}
} else
{var k = cljs.core.first(seq__37839__$1);var temp__4124__auto___37855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___37855))
{var path_37856 = temp__4124__auto___37855;clustermap.components.map.delete_path(leaflet_map,path_37856);
} else
{}
{
var G__37857 = cljs.core.next(seq__37839__$1);
var G__37858 = null;
var G__37859 = (0);
var G__37860 = (0);
seq__37839 = G__37857;
chunk__37840 = G__37858;
count__37841 = G__37859;
i__37842 = G__37860;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan,created_paths,updated_paths,_){
return (function (m,p__37843){var map__37844 = p__37843;var map__37844__$1 = ((cljs.core.seq_QMARK_(map__37844))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37844):map__37844);var path = map__37844__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37844__$1,cljs.core.constant$keyword$812);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__37832,tolerance_paths,notifychan,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_(paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$812.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$814.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$831,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$995,cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$813,bl_id,cljs.core.constant$keyword$814,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$995,cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$813,bl_id,cljs.core.constant$keyword$814,bl_name], null))),cljs.core.constant$keyword$812,null,cljs.core.constant$keyword$823,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs37862 = bl_name;if(cljs.core.map_QMARK_(attrs37862))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$812,null,cljs.core.constant$keyword$823,"map-marker-constituency-name"], null),attrs37862], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs37862))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter((function (p__37865){var vec__37866 = p__37865;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37866,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37866,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,blcoll,variable,filter,bounds){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_37911){var state_val_37912 = (state_37911[(1)]);if((state_val_37912 === (5)))
{var inst_37909 = (state_37911[(2)]);var state_37911__$1 = state_37911;return cljs.core.async.impl.ioc_helpers.return_chan(state_37911__$1,inst_37909);
} else
{if((state_val_37912 === (4)))
{var state_37911__$1 = state_37911;var statearr_37913_37925 = state_37911__$1;(statearr_37913_37925[(2)] = null);
(statearr_37913_37925[(1)] = (5));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37912 === (3)))
{var inst_37898 = (state_37911[(7)]);var inst_37904 = [cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$995,cljs.core.constant$keyword$923];var inst_37905 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37904,null));var inst_37906 = (set_app_state_fn.cljs$core$IFn$_invoke$arity$2 ? set_app_state_fn.cljs$core$IFn$_invoke$arity$2(inst_37905,inst_37898) : set_app_state_fn.call(null,inst_37905,inst_37898));var state_37911__$1 = state_37911;var statearr_37914_37926 = state_37911__$1;(statearr_37914_37926[(2)] = inst_37906);
(statearr_37914_37926[(1)] = (5));
return cljs.core.constant$keyword$777;
} else
{if((state_val_37912 === (2)))
{var inst_37898 = (state_37911[(2)]);var inst_37899 = [cljs.core.constant$keyword$1082,cljs.core.constant$keyword$1083,cljs.core.constant$keyword$995,cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1085];var inst_37900 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_37899,null));var inst_37901 = (get_app_state_fn.cljs$core$IFn$_invoke$arity$1 ? get_app_state_fn.cljs$core$IFn$_invoke$arity$1(inst_37900) : get_app_state_fn.call(null,inst_37900));var inst_37902 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ticket,inst_37901);var state_37911__$1 = (function (){var statearr_37915 = state_37911;(statearr_37915[(7)] = inst_37898);
return statearr_37915;
})();if(inst_37902)
{var statearr_37916_37927 = state_37911__$1;(statearr_37916_37927[(1)] = (3));
} else
{var statearr_37917_37928 = state_37911__$1;(statearr_37917_37928[(1)] = (4));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_37912 === (1)))
{var inst_37896 = clustermap.api.boundaryline_aggregation(index,index_type,blcoll,variable,filter,bounds);var state_37911__$1 = state_37911;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37911__$1,(2),inst_37896);
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
var state_machine__5679__auto____0 = (function (){var statearr_37921 = [null,null,null,null,null,null,null,null];(statearr_37921[(0)] = state_machine__5679__auto__);
(statearr_37921[(1)] = (1));
return statearr_37921;
});
var state_machine__5679__auto____1 = (function (state_37911){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37911);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37922){if((e37922 instanceof Object))
{var ex__5682__auto__ = e37922;var statearr_37923_37929 = state_37911;(statearr_37923_37929[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37911);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e37922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__37930 = state_37911;
state_37911 = G__37930;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37911){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_37924 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__37931,owner){var map__37969 = p__37931;var map__37969__$1 = ((cljs.core.seq_QMARK_(map__37969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37969):map__37969);var cursor = map__37969__$1;var map__37970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37969__$1,cljs.core.constant$keyword$1084);var map__37970__$1 = ((cljs.core.seq_QMARK_(map__37970))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37970):map__37970);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37970__$1,cljs.core.constant$keyword$1086);if(typeof clustermap.components.map.t37971 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t37971 = (function (initial_bounds,map__37970,cursor,map__37969,owner,p__37931,map_component,meta37972){
this.initial_bounds = initial_bounds;
this.map__37970 = map__37970;
this.cursor = cursor;
this.map__37969 = map__37969;
this.owner = owner;
this.p__37931 = p__37931;
this.map_component = map_component;
this.meta37972 = meta37972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t37971.cljs$lang$type = true;
clustermap.components.map.t37971.cljs$lang$ctorStr = "clustermap.components.map/t37971";
clustermap.components.map.t37971.cljs$lang$ctorPrWriter = ((function (map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map/t37971");
});})(map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;
clustermap.components.map.t37971.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t37971.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (this$,p__37974,p__37975){var self__ = this;
var map__37976 = p__37974;var map__37976__$1 = ((cljs.core.seq_QMARK_(map__37976))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37976):map__37976);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976__$1,cljs.core.constant$keyword$798);var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976__$1,cljs.core.constant$keyword$923);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976__$1,cljs.core.constant$keyword$1087);var map__37977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976__$1,cljs.core.constant$keyword$1084);var map__37977__$1 = ((cljs.core.seq_QMARK_(map__37977))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37977):map__37977);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$1088);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$797);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$1089);var next_colorchooser_control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$1090);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$1091);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37977__$1,cljs.core.constant$keyword$1092);var map__37978 = p__37975;var map__37978__$1 = ((cljs.core.seq_QMARK_(map__37978))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37978):map__37978);var map__37979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37978__$1,cljs.core.constant$keyword$995);var map__37979__$1 = ((cljs.core.seq_QMARK_(map__37979))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37979):map__37979);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37979__$1,cljs.core.constant$keyword$1066);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37979__$1,cljs.core.constant$keyword$1067);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37978__$1,cljs.core.constant$keyword$1093);var this$__$1 = this;var map__37980 = om.core.get_props(self__.owner);var map__37980__$1 = ((cljs.core.seq_QMARK_(map__37980))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37980):map__37980);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37980__$1,cljs.core.constant$keyword$798);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37980__$1,cljs.core.constant$keyword$923);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37980__$1,cljs.core.constant$keyword$1087);var map__37981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37980__$1,cljs.core.constant$keyword$1084);var map__37981__$1 = ((cljs.core.seq_QMARK_(map__37981))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37981):map__37981);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37981__$1,cljs.core.constant$keyword$1092);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37981__$1,cljs.core.constant$keyword$1091);var colorchooser_control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37981__$1,cljs.core.constant$keyword$1094);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37981__$1,cljs.core.constant$keyword$1089);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37981__$1,cljs.core.constant$keyword$1088);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37981__$1,cljs.core.constant$keyword$797);var initial_bounds__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37981__$1,cljs.core.constant$keyword$1086);var map__37982 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37982__$1 = ((cljs.core.seq_QMARK_(map__37982))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37982):map__37982);var get_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,cljs.core.constant$keyword$1095);var set_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,cljs.core.constant$keyword$1096);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,cljs.core.constant$keyword$1097);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,cljs.core.constant$keyword$1098);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,cljs.core.constant$keyword$894);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,cljs.core.constant$keyword$893);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,cljs.core.constant$keyword$903);var map__37983 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__37983__$1 = ((cljs.core.seq_QMARK_(map__37983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37983):map__37983);var map__37984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,cljs.core.constant$keyword$995);var map__37984__$1 = ((cljs.core.seq_QMARK_(map__37984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37984):map__37984);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,cljs.core.constant$keyword$1067);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,cljs.core.constant$keyword$1066);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,cljs.core.constant$keyword$1065);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37984__$1,cljs.core.constant$keyword$1064);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,cljs.core.constant$keyword$1099);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,cljs.core.constant$keyword$1093);if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1084,cljs.core.constant$keyword$797], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1089], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
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
{var ticket_38006 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1085], null),ticket_38006);
clustermap.components.map.fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket_38006,cljs.core.constant$keyword$808.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1100.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1101.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,data))
{var vec__37985 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1102.cljs$core$IFn$_invoke$arity$1(next_colorchooser_control),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1103.cljs$core$IFn$_invoke$arity$1(next_colorchooser_control)),cljs.core.constant$keyword$813,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1101.cljs$core$IFn$_invoke$arity$1(next_colorchooser_control)),cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37985,(0),null);var selection_path_colours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37985,(1),null);var update_paths_invocation = ((function (vec__37985,new_threshold_colors,selection_path_colours,map__37980,map__37980__$1,filter,data,boundaryline_collections,map__37981,map__37981__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37982,map__37982__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37983,map__37983__$1,map__37984,map__37984__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37976,map__37976__$1,next_filter,next_data,next_boundaryline_collections,map__37977,map__37977__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__37978,map__37978__$1,map__37979,map__37979__$1,next_paths,next_path_selections,next_path_highlights,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours);
});})(vec__37985,new_threshold_colors,selection_path_colours,map__37980,map__37980__$1,filter,data,boundaryline_collections,map__37981,map__37981__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37982,map__37982__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37983,map__37983__$1,map__37984,map__37984__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37976,map__37976__$1,next_filter,next_data,next_boundaryline_collections,map__37977,map__37977__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__37978,map__37978__$1,map__37979,map__37979__$1,next_paths,next_path_selections,next_path_highlights,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1092], null),new_threshold_colors);
} else
{}
var temp__4126__auto__ = update_paths_invocation();if(cljs.core.truth_(temp__4126__auto__))
{var notify_chan = temp__4126__auto__;var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__37985,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37980,map__37980__$1,filter,data,boundaryline_collections,map__37981,map__37981__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37982,map__37982__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37983,map__37983__$1,map__37984,map__37984__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37976,map__37976__$1,next_filter,next_data,next_boundaryline_collections,map__37977,map__37977__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__37978,map__37978__$1,map__37979,map__37979__$1,next_paths,next_path_selections,next_path_highlights,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__37985,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37980,map__37980__$1,filter,data,boundaryline_collections,map__37981,map__37981__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37982,map__37982__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37983,map__37983__$1,map__37984,map__37984__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37976,map__37976__$1,next_filter,next_data,next_boundaryline_collections,map__37977,map__37977__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__37978,map__37978__$1,map__37979,map__37979__$1,next_paths,next_path_selections,next_path_highlights,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (state_37990){var state_val_37991 = (state_37990[(1)]);if((state_val_37991 === (2)))
{var inst_37987 = (state_37990[(2)]);var inst_37988 = update_paths_invocation();var state_37990__$1 = (function (){var statearr_37992 = state_37990;(statearr_37992[(7)] = inst_37987);
return statearr_37992;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37990__$1,inst_37988);
} else
{if((state_val_37991 === (1)))
{var state_37990__$1 = state_37990;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37990__$1,(2),notify_chan);
} else
{return null;
}
}
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__37985,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37980,map__37980__$1,filter,data,boundaryline_collections,map__37981,map__37981__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37982,map__37982__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37983,map__37983__$1,map__37984,map__37984__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37976,map__37976__$1,next_filter,next_data,next_boundaryline_collections,map__37977,map__37977__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__37978,map__37978__$1,map__37979,map__37979__$1,next_paths,next_path_selections,next_path_highlights,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;return ((function (switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__37985,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37980,map__37980__$1,filter,data,boundaryline_collections,map__37981,map__37981__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37982,map__37982__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37983,map__37983__$1,map__37984,map__37984__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37976,map__37976__$1,next_filter,next_data,next_boundaryline_collections,map__37977,map__37977__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__37978,map__37978__$1,map__37979,map__37979__$1,next_paths,next_path_selections,next_path_highlights,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_37996 = [null,null,null,null,null,null,null,null];(statearr_37996[(0)] = state_machine__5679__auto__);
(statearr_37996[(1)] = (1));
return statearr_37996;
});
var state_machine__5679__auto____1 = (function (state_37990){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_37990);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e37997){if((e37997 instanceof Object))
{var ex__5682__auto__ = e37997;var statearr_37998_38007 = state_37990;(statearr_37998_38007[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37990);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e37997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__38008 = state_37990;
state_37990 = G__38008;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_37990){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_37990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__37985,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37980,map__37980__$1,filter,data,boundaryline_collections,map__37981,map__37981__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37982,map__37982__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37983,map__37983__$1,map__37984,map__37984__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37976,map__37976__$1,next_filter,next_data,next_boundaryline_collections,map__37977,map__37977__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__37978,map__37978__$1,map__37979,map__37979__$1,next_paths,next_path_selections,next_path_highlights,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
})();var state__5695__auto__ = (function (){var statearr_37999 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_37999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_37999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__37985,new_threshold_colors,selection_path_colours,update_paths_invocation,map__37980,map__37980__$1,filter,data,boundaryline_collections,map__37981,map__37981__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__37982,map__37982__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__37983,map__37983__$1,map__37984,map__37984__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__37976,map__37976__$1,next_filter,next_data,next_boundaryline_collections,map__37977,map__37977__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__37978,map__37978__$1,map__37979,map__37979__$1,next_paths,next_path_selections,next_path_highlights,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
);
return c__5693__auto__;
} else
{return null;
}
} else
{return null;
}
});})(map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;
clustermap.components.map.t37971.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t37971.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38000 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__38000__$1 = ((cljs.core.seq_QMARK_(map__38000))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38000):map__38000);var map = map__38000__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,cljs.core.constant$keyword$863);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,cljs.core.constant$keyword$1065);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,cljs.core.constant$keyword$1064);var map__38001 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38001__$1 = ((cljs.core.seq_QMARK_(map__38001))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38001):map__38001);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001__$1,cljs.core.constant$keyword$893);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001__$1,cljs.core.constant$keyword$894);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001__$1,cljs.core.constant$keyword$1097);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001__$1,cljs.core.constant$keyword$1098);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001__$1,cljs.core.constant$keyword$903);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1088], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1084,cljs.core.constant$keyword$797], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$995,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1093,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1084,cljs.core.constant$keyword$1088], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1084,cljs.core.constant$keyword$797], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1104,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
);
});})(node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1104,null);
});})(node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$812.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1093);if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1104)));
} else
{return and__3531__auto__;
}
})()))
{var G__38002_38009 = L.popup();G__38002_38009.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__38002_38009.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__38002_38009.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1093,highlight_path_ids);
});})(node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__38003 = hits;var G__38003__$1 = (((G__38003 == null))?null:cljs.core.first(G__38003));var G__38003__$2 = (((G__38003__$1 == null))?null:cljs.core.constant$keyword$812.cljs$core$IFn$_invoke$arity$1(G__38003__$1));return G__38003__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__38000,map__38000__$1,map,path,markers,leaflet_map,map__38001,map__38001__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
);
});})(map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;
clustermap.components.map.t37971.prototype.om$core$IRender$ = true;
clustermap.components.map.t37971.prototype.om$core$IRender$render$arity$1 = ((function (map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;
clustermap.components.map.t37971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (_37973){var self__ = this;
var _37973__$1 = this;return self__.meta37972;
});})(map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;
clustermap.components.map.t37971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function (_37973,meta37972__$1){var self__ = this;
var _37973__$1 = this;return (new clustermap.components.map.t37971(self__.initial_bounds,self__.map__37970,self__.cursor,self__.map__37969,self__.owner,self__.p__37931,self__.map_component,meta37972__$1));
});})(map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;
clustermap.components.map.__GT_t37971 = ((function (map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds){
return (function __GT_t37971(initial_bounds__$1,map__37970__$2,cursor__$1,map__37969__$2,owner__$1,p__37931__$1,map_component__$1,meta37972){return (new clustermap.components.map.t37971(initial_bounds__$1,map__37970__$2,cursor__$1,map__37969__$2,owner__$1,p__37931__$1,map_component__$1,meta37972));
});})(map__37969,map__37969__$1,cursor,map__37970,map__37970__$1,initial_bounds))
;
}
return (new clustermap.components.map.t37971(initial_bounds,map__37970__$1,cursor,map__37969__$1,owner,p__37931,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$888,shared,cljs.core.constant$keyword$891,document.getElementById(elem_id),cljs.core.constant$keyword$863,path], null));
});
