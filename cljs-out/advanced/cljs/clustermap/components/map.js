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
clustermap.components.map.api_key = (function (){var or__3558__auto__ = (function (){var G__38443 = config;var G__38443__$1 = (((G__38443 == null))?null:G__38443.components);var G__38443__$2 = (((G__38443__$1 == null))?null:G__38443__$1.map);var G__38443__$3 = (((G__38443__$2 == null))?null:G__38443__$2.api_key);return G__38443__$3;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1145,m,cljs.core.constant$keyword$1146,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1129,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.constant$keyword$1147,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY))], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__38444){
var m = cljs.core.first(arglist__38444);
var all_bounds = cljs.core.rest(arglist__38444);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs38446 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$903,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1141,cljs.core.constant$keyword$966,site) : path_fn.call(null,cljs.core.constant$keyword$1141,cljs.core.constant$keyword$966,site)),cljs.core.constant$keyword$882,null,cljs.core.constant$keyword$894,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$912.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs38446))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$882,null,cljs.core.constant$keyword$894,"map-marker-popup-location-list"], null),attrs38446], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38446))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__38449 = location_sites;var G__38449__$1 = (((G__38449 == null))?null:cljs.core.first(G__38449));var G__38449__$2 = (((G__38449__$1 == null))?null:cljs.core.constant$keyword$1148.cljs$core$IFn$_invoke$arity$1(G__38449__$1));var G__38449__$3 = (((G__38449__$2 == null))?null:cljs.core.reverse(G__38449__$2));var G__38449__$4 = (((G__38449__$3 == null))?null:cljs.core.clj__GT_js(G__38449__$3));return G__38449__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$896,"map-marker",cljs.core.constant$keyword$1149,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1152,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4485__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_38450_38451 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_38450_38451,sb__4485__auto__,temp__4124__auto__){
return (function (x__4486__auto__){return sb__4485__auto__.append(x__4486__auto__);
});})(_STAR_print_fn_STAR_38450_38451,sb__4485__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38450_38451;
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
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$976], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$976], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__38456 = cljs.core.seq(remove_marker_keys);var chunk__38457 = null;var count__38458 = (0);var i__38459 = (0);while(true){
if((i__38459 < count__38458))
{var k = chunk__38457.cljs$core$IIndexed$_nth$arity$2(null,i__38459);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__38460 = seq__38456;
var G__38461 = chunk__38457;
var G__38462 = count__38458;
var G__38463 = (i__38459 + (1));
seq__38456 = G__38460;
chunk__38457 = G__38461;
count__38458 = G__38462;
i__38459 = G__38463;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38456);if(temp__4126__auto__)
{var seq__38456__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38456__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__38456__$1);{
var G__38464 = cljs.core.chunk_rest(seq__38456__$1);
var G__38465 = c__4314__auto__;
var G__38466 = cljs.core.count(c__4314__auto__);
var G__38467 = (0);
seq__38456 = G__38464;
chunk__38457 = G__38465;
count__38458 = G__38466;
i__38459 = G__38467;
continue;
}
} else
{var k = cljs.core.first(seq__38456__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__38468 = cljs.core.next(seq__38456__$1);
var G__38469 = null;
var G__38470 = (0);
var G__38471 = (0);
seq__38456 = G__38468;
chunk__38457 = G__38469;
count__38458 = G__38470;
i__38459 = G__38471;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__38480 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__38480__$1 = ((cljs.core.seq_QMARK_(map__38480))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38480):map__38480);var clj_envelope = map__38480__$1;var vec__38481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38480__$1,"coordinates");var vec__38482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38481,(0),null);var vec__38483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38483,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38483,(1),null);var vec__38484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38484,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38484,(1),null);var vec__38485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38485,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38485,(1),null);var vec__38486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(1),null);var vec__38487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38482,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(1),null);var inner = vec__38482;var coords = vec__38481;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__38488){var map__38490 = p__38488;var map__38490__$1 = ((cljs.core.seq_QMARK_(map__38490))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38490):map__38490);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38490__$1,cljs.core.constant$keyword$1153);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38490__$1,cljs.core.constant$keyword$1154);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38490__$1,cljs.core.constant$keyword$917);if(cljs.core.truth_((function (){var and__3546__auto__ = selected;if(cljs.core.truth_(and__3546__auto__))
{return highlighted;
} else
{return and__3546__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1155,"#000000",cljs.core.constant$keyword$1156,fill_color,cljs.core.constant$keyword$1157,(2),cljs.core.constant$keyword$1158,(1),cljs.core.constant$keyword$1159,true,cljs.core.constant$keyword$1160,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1155,"#8c2d04",cljs.core.constant$keyword$1156,fill_color,cljs.core.constant$keyword$1157,(1),cljs.core.constant$keyword$1158,(1),cljs.core.constant$keyword$1159,true,cljs.core.constant$keyword$1160,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1155,"#000000",cljs.core.constant$keyword$1156,fill_color,cljs.core.constant$keyword$1157,(2),cljs.core.constant$keyword$1158,(1),cljs.core.constant$keyword$1159,false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1155,"#8c2d04",cljs.core.constant$keyword$1156,fill_color,cljs.core.constant$keyword$1157,(1),cljs.core.constant$keyword$1158,(0),cljs.core.constant$keyword$1159,false,cljs.core.constant$keyword$1160,(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__38491){var map__38493 = p__38491;var map__38493__$1 = ((cljs.core.seq_QMARK_(map__38493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38493):map__38493);var path_attrs = map__38493__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38493__$1,cljs.core.constant$keyword$917);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__38493,map__38493__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$919,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$969,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__38493,map__38493__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$882,boundaryline_id,cljs.core.constant$keyword$862,tolerance,cljs.core.constant$keyword$917,selected,cljs.core.constant$keyword$1161,leaflet_path,cljs.core.constant$keyword$864,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1161.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$882.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__38494,tolerance,js_boundaryline,path_attrs){var map__38496 = p__38494;var map__38496__$1 = ((cljs.core.seq_QMARK_(map__38496))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38496):map__38496);var path = map__38496__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38496__$1,cljs.core.constant$keyword$882);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$862.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1161.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1161.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(paths_atom) : cljs.core.deref.call(null,paths_atom));var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path_selections_atom) : cljs.core.deref.call(null,path_selections_atom));var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1162,create_path_keys,cljs.core.constant$keyword$1163,delete_path_keys,cljs.core.constant$keyword$1164,update_path_keys], null)));var vec__38510 = (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$863,live_path_keys) : fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array(leaflet_map.getBounds()),leaflet_map.getZoom(),cljs.core.constant$keyword$863,live_path_keys));var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38510,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38510,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan){
return (function (p__38511){var vec__38512 = p__38511;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38512,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$917,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1153,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1154,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan){
return (function (k){var vec__38513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38513,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38513,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan,created_paths){
return (function (p__38514){var vec__38515 = p__38514;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38515,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38515,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38515,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$917,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1153,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1154,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__38516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38516,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38516,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__38517 = cljs.core.seq(delete_path_keys);var chunk__38518 = null;var count__38519 = (0);var i__38520 = (0);while(true){
if((i__38520 < count__38519))
{var k = chunk__38518.cljs$core$IIndexed$_nth$arity$2(null,i__38520);var temp__4124__auto___38523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___38523))
{var path_38524 = temp__4124__auto___38523;clustermap.components.map.delete_path(leaflet_map,path_38524);
} else
{}
{
var G__38525 = seq__38517;
var G__38526 = chunk__38518;
var G__38527 = count__38519;
var G__38528 = (i__38520 + (1));
seq__38517 = G__38525;
chunk__38518 = G__38526;
count__38519 = G__38527;
i__38520 = G__38528;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38517);if(temp__4126__auto__)
{var seq__38517__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38517__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__38517__$1);{
var G__38529 = cljs.core.chunk_rest(seq__38517__$1);
var G__38530 = c__4314__auto__;
var G__38531 = cljs.core.count(c__4314__auto__);
var G__38532 = (0);
seq__38517 = G__38529;
chunk__38518 = G__38530;
count__38519 = G__38531;
i__38520 = G__38532;
continue;
}
} else
{var k = cljs.core.first(seq__38517__$1);var temp__4124__auto___38533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___38533))
{var path_38534 = temp__4124__auto___38533;clustermap.components.map.delete_path(leaflet_map,path_38534);
} else
{}
{
var G__38535 = cljs.core.next(seq__38517__$1);
var G__38536 = null;
var G__38537 = (0);
var G__38538 = (0);
seq__38517 = G__38535;
chunk__38518 = G__38536;
count__38519 = G__38537;
i__38520 = G__38538;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__38521){var map__38522 = p__38521;var map__38522__$1 = ((cljs.core.seq_QMARK_(map__38522))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38522):map__38522);var path = map__38522__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38522__$1,cljs.core.constant$keyword$882);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__38510,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(path_selections_atom,new_selection_path_keys) : cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(paths_atom,new_paths) : cljs.core.reset_BANG_.call(null,paths_atom,new_paths));
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$882.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$884.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$903,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$1141,cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,bl_id,cljs.core.constant$keyword$884,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$1141,cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,bl_id,cljs.core.constant$keyword$884,bl_name], null))),cljs.core.constant$keyword$882,null,cljs.core.constant$keyword$894,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs38540 = bl_name;if(cljs.core.map_QMARK_(attrs38540))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$882,null,cljs.core.constant$keyword$894,"map-marker-constituency-name"], null),attrs38540], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs38540))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38543){var vec__38544 = p__38543;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.boundaryline_aggregation,cljs.core.array_seq([index,index_type,blcoll,variable,filter,bounds], 0));
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.location_lists,cljs.core.array_seq([index,index_type,"!postcode",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds], 0));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__38545,owner){var map__38584 = p__38545;var map__38584__$1 = ((cljs.core.seq_QMARK_(map__38584))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38584):map__38584);var cursor_data = map__38584__$1;var map__38585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38584__$1,cljs.core.constant$keyword$1165);var map__38585__$1 = ((cljs.core.seq_QMARK_(map__38585))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38585):map__38585);var cursor = map__38585__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,cljs.core.constant$keyword$994);var point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,cljs.core.constant$keyword$1166);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,cljs.core.constant$keyword$1167);var map__38586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,cljs.core.constant$keyword$1063);var map__38586__$1 = ((cljs.core.seq_QMARK_(map__38586))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38586):map__38586);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,cljs.core.constant$keyword$1168);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,cljs.core.constant$keyword$1169);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,cljs.core.constant$keyword$1170);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,cljs.core.constant$keyword$1171);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,cljs.core.constant$keyword$1172);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,cljs.core.constant$keyword$864);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,cljs.core.constant$keyword$1173);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38584__$1,cljs.core.constant$keyword$865);if(typeof clustermap.components.map.t38587 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t38587 = (function (colorchooser,initial_bounds,owner,data,zoom,map__38585,cursor_data,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,map__38584,p__38545,filter,map__38586,point_data,boundaryline_agg,meta38588){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__38585 = map__38585;
this.cursor_data = cursor_data;
this.map_component = map_component;
this.boundaryline_collections = boundaryline_collections;
this.cursor = cursor;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.map__38584 = map__38584;
this.p__38545 = p__38545;
this.filter = filter;
this.map__38586 = map__38586;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.meta38588 = meta38588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t38587.cljs$lang$type = true;
clustermap.components.map.t38587.cljs$lang$ctorStr = "clustermap.components.map/t38587";
clustermap.components.map.t38587.cljs$lang$ctorPrWriter = ((function (map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map/t38587");
});})(map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t38587.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t38587.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__38590 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38590__$1 = ((cljs.core.seq_QMARK_(map__38590))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38590):map__38590);var point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38590__$1,cljs.core.constant$keyword$1174);var aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38590__$1,cljs.core.constant$keyword$1175);clustermap.ordered_resource.close(aggregation_data_resource);
return clustermap.ordered_resource.close(point_data_resource);
});})(map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t38587.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t38587.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$,p__38591,p__38592){var self__ = this;
var map__38593 = p__38591;var map__38593__$1 = ((cljs.core.seq_QMARK_(map__38593))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38593):map__38593);var next_cursor_data = map__38593__$1;var map__38594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38593__$1,cljs.core.constant$keyword$1165);var map__38594__$1 = ((cljs.core.seq_QMARK_(map__38594))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38594):map__38594);var next_cursor = map__38594__$1;var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38594__$1,cljs.core.constant$keyword$994);var next_point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38594__$1,cljs.core.constant$keyword$1166);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38594__$1,cljs.core.constant$keyword$1167);var map__38595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38594__$1,cljs.core.constant$keyword$1063);var map__38595__$1 = ((cljs.core.seq_QMARK_(map__38595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38595):map__38595);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38595__$1,cljs.core.constant$keyword$1172);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38595__$1,cljs.core.constant$keyword$864);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38595__$1,cljs.core.constant$keyword$1171);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38595__$1,cljs.core.constant$keyword$1170);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38595__$1,cljs.core.constant$keyword$1169);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38595__$1,cljs.core.constant$keyword$1168);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38593__$1,cljs.core.constant$keyword$865);var map__38596 = p__38592;var map__38596__$1 = ((cljs.core.seq_QMARK_(map__38596))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38596):map__38596);var map__38597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38596__$1,cljs.core.constant$keyword$1141);var map__38597__$1 = ((cljs.core.seq_QMARK_(map__38597))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38597):map__38597);var next_markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38597__$1,cljs.core.constant$keyword$1146);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38597__$1,cljs.core.constant$keyword$1129);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38597__$1,cljs.core.constant$keyword$1147);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38596__$1,cljs.core.constant$keyword$1176);var next_aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38596__$1,cljs.core.constant$keyword$1175);var next_point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38596__$1,cljs.core.constant$keyword$1174);var this$__$1 = this;var map__38598 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38598__$1 = ((cljs.core.seq_QMARK_(map__38598))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38598):map__38598);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,cljs.core.constant$keyword$1177);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,cljs.core.constant$keyword$1178);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,cljs.core.constant$keyword$965);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,cljs.core.constant$keyword$964);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,cljs.core.constant$keyword$974);var map__38599 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38599__$1 = ((cljs.core.seq_QMARK_(map__38599))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38599):map__38599);var map__38600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,cljs.core.constant$keyword$1141);var map__38600__$1 = ((cljs.core.seq_QMARK_(map__38600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38600):map__38600);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.constant$keyword$1147);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.constant$keyword$1129);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.constant$keyword$1146);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38600__$1,cljs.core.constant$keyword$1145);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,cljs.core.constant$keyword$1179);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,cljs.core.constant$keyword$1176);if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$864], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1171], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
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
{var ticket_38622 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1180], null),ticket_38622);
clustermap.components.map.request_aggregation_data(next_aggregation_data_resource,cljs.core.constant$keyword$878.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1068.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1181.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
clustermap.components.map.request_point_data(next_point_data_resource,cljs.core.constant$keyword$878.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1068.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,self__.data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,self__.colorchooser)))
{var vec__38601_38623 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1182.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1183.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$883,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1181.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_38624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38601_38623,(0),null);var selection_path_colours_38625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38601_38623,(1),null);var update_paths_invocation_38626 = ((function (vec__38601_38623,new_threshold_colors_38624,selection_path_colours_38625,map__38598,map__38598__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38599,map__38599__$1,map__38600,map__38600__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38593,map__38593__$1,next_cursor_data,map__38594,map__38594__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__38595,map__38595__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__38596,map__38596__$1,map__38597,map__38597__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_38625);
});})(vec__38601_38623,new_threshold_colors_38624,selection_path_colours_38625,map__38598,map__38598__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38599,map__38599__$1,map__38600,map__38600__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38593,map__38593__$1,next_cursor_data,map__38594,map__38594__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__38595,map__38595__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__38596,map__38596__$1,map__38597,map__38597__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors_38624,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1168], null),new_threshold_colors_38624);
} else
{}
var temp__4126__auto___38627 = update_paths_invocation_38626();if(cljs.core.truth_(temp__4126__auto___38627))
{var notify_chan_38628 = temp__4126__auto___38627;var c__5708__auto___38629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___38629,notify_chan_38628,temp__4126__auto___38627,vec__38601_38623,new_threshold_colors_38624,selection_path_colours_38625,update_paths_invocation_38626,map__38598,map__38598__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38599,map__38599__$1,map__38600,map__38600__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38593,map__38593__$1,next_cursor_data,map__38594,map__38594__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__38595,map__38595__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__38596,map__38596__$1,map__38597,map__38597__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___38629,notify_chan_38628,temp__4126__auto___38627,vec__38601_38623,new_threshold_colors_38624,selection_path_colours_38625,update_paths_invocation_38626,map__38598,map__38598__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38599,map__38599__$1,map__38600,map__38600__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38593,map__38593__$1,next_cursor_data,map__38594,map__38594__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__38595,map__38595__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__38596,map__38596__$1,map__38597,map__38597__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (state_38606){var state_val_38607 = (state_38606[(1)]);if((state_val_38607 === (2)))
{var inst_38603 = (state_38606[(2)]);var inst_38604 = update_paths_invocation_38626();var state_38606__$1 = (function (){var statearr_38608 = state_38606;(statearr_38608[(7)] = inst_38603);
return statearr_38608;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_38606__$1,inst_38604);
} else
{if((state_val_38607 === (1)))
{var state_38606__$1 = state_38606;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38606__$1,(2),notify_chan_38628);
} else
{return null;
}
}
});})(c__5708__auto___38629,notify_chan_38628,temp__4126__auto___38627,vec__38601_38623,new_threshold_colors_38624,selection_path_colours_38625,update_paths_invocation_38626,map__38598,map__38598__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38599,map__38599__$1,map__38600,map__38600__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38593,map__38593__$1,next_cursor_data,map__38594,map__38594__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__38595,map__38595__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__38596,map__38596__$1,map__38597,map__38597__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;return ((function (switch__5693__auto__,c__5708__auto___38629,notify_chan_38628,temp__4126__auto___38627,vec__38601_38623,new_threshold_colors_38624,selection_path_colours_38625,update_paths_invocation_38626,map__38598,map__38598__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38599,map__38599__$1,map__38600,map__38600__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38593,map__38593__$1,next_cursor_data,map__38594,map__38594__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__38595,map__38595__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__38596,map__38596__$1,map__38597,map__38597__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38612 = [null,null,null,null,null,null,null,null];(statearr_38612[(0)] = state_machine__5694__auto__);
(statearr_38612[(1)] = (1));
return statearr_38612;
});
var state_machine__5694__auto____1 = (function (state_38606){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_38606);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$844))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38613){if((e38613 instanceof Object))
{var ex__5697__auto__ = e38613;var statearr_38614_38630 = state_38606;(statearr_38614_38630[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38606);
return cljs.core.constant$keyword$844;
} else
{throw e38613;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$844))
{{
var G__38631 = state_38606;
state_38606 = G__38631;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38606){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___38629,notify_chan_38628,temp__4126__auto___38627,vec__38601_38623,new_threshold_colors_38624,selection_path_colours_38625,update_paths_invocation_38626,map__38598,map__38598__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38599,map__38599__$1,map__38600,map__38600__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38593,map__38593__$1,next_cursor_data,map__38594,map__38594__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__38595,map__38595__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__38596,map__38596__$1,map__38597,map__38597__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
})();var state__5710__auto__ = (function (){var statearr_38615 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_38615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___38629);
return statearr_38615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___38629,notify_chan_38628,temp__4126__auto___38627,vec__38601_38623,new_threshold_colors_38624,selection_path_colours_38625,update_paths_invocation_38626,map__38598,map__38598__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__38599,map__38599__$1,map__38600,map__38600__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__38593,map__38593__$1,next_cursor_data,map__38594,map__38594__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__38595,map__38595__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__38596,map__38596__$1,map__38597,map__38597__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_point_data,self__.point_data))
{return clustermap.components.map.update_markers(path_fn,leaflet_map,next_markers,cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t38587.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t38587.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38616 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__38616__$1 = ((cljs.core.seq_QMARK_(map__38616))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38616):map__38616);var map = map__38616__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38616__$1,cljs.core.constant$keyword$934);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38616__$1,cljs.core.constant$keyword$1146);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38616__$1,cljs.core.constant$keyword$1145);var map__38617 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38617__$1 = ((cljs.core.seq_QMARK_(map__38617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38617):map__38617);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,cljs.core.constant$keyword$964);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,cljs.core.constant$keyword$965);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,cljs.core.constant$keyword$1177);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,cljs.core.constant$keyword$1178);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,cljs.core.constant$keyword$974);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1172], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$864], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1141,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1176,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1172], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$864], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupopen",((function (node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1184,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupclose",((function (node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1184,null);
});})(node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("mousemove",((function (node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$882.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1176);if(cljs.core.truth_((function (){var and__3546__auto__ = highlight_hit;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1184)));
} else
{return and__3546__auto__;
}
})()))
{var G__38618_38632 = L.popup();G__38618_38632.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__38618_38632.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__38618_38632.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1176,highlight_path_ids);
});})(node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("click",((function (node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__38619 = hits;var G__38619__$1 = (((G__38619 == null))?null:cljs.core.first(G__38619));var G__38619__$2 = (((G__38619__$1 == null))?null:cljs.core.constant$keyword$882.cljs$core$IFn$_invoke$arity$1(G__38619__$1));return G__38619__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$919,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$969,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var adr_38633 = clustermap.ordered_resource.make_discard_stale_resource("aggregation-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1175,adr_38633);
clustermap.ordered_resource.retrieve_responses(adr_38633,((function (adr_38633,node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$994], null),data__$2);
});})(adr_38633,node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var pdr = clustermap.ordered_resource.make_discard_stale_resource("point-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1174,pdr);
return clustermap.ordered_resource.retrieve_responses(pdr,((function (pdr,node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (point_data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1166], null),point_data__$2);
});})(pdr,node,map__38616,map__38616__$1,map,path,markers,leaflet_map,map__38617,map__38617__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t38587.prototype.om$core$IRender$ = true;
clustermap.components.map.t38587.prototype.om$core$IRender$render$arity$1 = ((function (map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t38587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_38589){var self__ = this;
var _38589__$1 = this;return self__.meta38588;
});})(map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t38587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_38589,meta38588__$1){var self__ = this;
var _38589__$1 = this;return (new clustermap.components.map.t38587(self__.colorchooser,self__.initial_bounds,self__.owner,self__.data,self__.zoom,self__.map__38585,self__.cursor_data,self__.map_component,self__.boundaryline_collections,self__.cursor,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.map__38584,self__.p__38545,self__.filter,self__.map__38586,self__.point_data,self__.boundaryline_agg,meta38588__$1));
});})(map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.__GT_t38587 = ((function (map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function __GT_t38587(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,zoom__$1,map__38585__$2,cursor_data__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,map__38584__$2,p__38545__$1,filter__$1,map__38586__$2,point_data__$1,boundaryline_agg__$1,meta38588){return (new clustermap.components.map.t38587(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,zoom__$1,map__38585__$2,cursor_data__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,map__38584__$2,p__38545__$1,filter__$1,map__38586__$2,point_data__$1,boundaryline_agg__$1,meta38588));
});})(map__38584,map__38584__$1,cursor_data,map__38585,map__38585__$1,cursor,data,point_data,boundaryline_collections,map__38586,map__38586__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
}
return (new clustermap.components.map.t38587(colorchooser,initial_bounds,owner,data,zoom,map__38585__$1,cursor_data,map_component,boundaryline_collections,cursor,threshold_colors,bounds,boundaryline_collection,map__38584__$1,p__38545,filter,map__38586__$1,point_data,boundaryline_agg,null));
});
