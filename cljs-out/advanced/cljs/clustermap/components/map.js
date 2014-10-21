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
clustermap.components.map.ticket = (function (){var G__55668 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55668) : cljs.core.atom.call(null,G__55668));
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
{var G__55670 = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null));return L.latLngBounds(G__55670);
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js(initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3637__auto__ = (function (){var G__55672 = config;var G__55672__$1 = (((G__55672 == null))?null:G__55672.components);var G__55672__$2 = (((G__55672__$1 == null))?null:G__55672__$1.map);var G__55672__$3 = (((G__55672__$2 == null))?null:G__55672__$2.api_key);return G__55672__$3;
})();if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1543,m,cljs.core.constant$keyword$1544,(function (){var G__55676 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55676) : cljs.core.atom.call(null,G__55676));
})(),cljs.core.constant$keyword$1255,(function (){var G__55677 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55677) : cljs.core.atom.call(null,G__55677));
})(),cljs.core.constant$keyword$1545,(function (){var G__55678 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__55678) : cljs.core.atom.call(null,G__55678));
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
pan_to_show.cljs$lang$applyTo = (function (arglist__55679){
var m = cljs.core.first(arglist__55679);
var all_bounds = cljs.core.rest(arglist__55679);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs55684 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1265,(function (){var G__55685 = cljs.core.constant$keyword$1356;var G__55686 = cljs.core.constant$keyword$1286;var G__55687 = site;return (path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(G__55685,G__55686,G__55687) : path_fn.call(null,G__55685,G__55686,G__55687));
})(),cljs.core.constant$keyword$1162,null,cljs.core.constant$keyword$1257,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs55684))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1162,null,cljs.core.constant$keyword$1257,"map-marker-popup-location-list"], null),attrs55684], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs55684))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__55693 = location_sites;var G__55693__$1 = (((G__55693 == null))?null:cljs.core.first(G__55693));var G__55693__$2 = (((G__55693__$1 == null))?null:cljs.core.constant$keyword$1546.cljs$core$IFn$_invoke$arity$1(G__55693__$1));var G__55693__$3 = (((G__55693__$2 == null))?null:cljs.core.reverse(G__55693__$2));var G__55693__$4 = (((G__55693__$3 == null))?null:cljs.core.clj__GT_js(G__55693__$3));return G__55693__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = (function (){var G__55694 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1259,"map-marker",cljs.core.constant$keyword$1547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1549,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null));return L.divIcon(G__55694);
})();var marker = (function (){var G__55695 = latlong;var G__55696 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1550,icon], null));return L.marker(G__55695,G__55696);
})();var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4577__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_55697_55698 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_55697_55698,sb__4577__auto__,temp__4124__auto__){
return (function (x__4578__auto__){return sb__4577__auto__.append(x__4578__auto__);
});})(_STAR_print_fn_STAR_55697_55698,sb__4577__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_55697_55698;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4577__auto__));
})())));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = (function (){var G__55706 = markers_atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55706) : cljs.core.deref.call(null,G__55706));
})();var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1505], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.constant$keyword$1505], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__55707 = cljs.core.seq(remove_marker_keys);var chunk__55708 = null;var count__55709 = (0);var i__55710 = (0);while(true){
if((i__55710 < count__55709))
{var k = chunk__55708.cljs$core$IIndexed$_nth$arity$2(null,i__55710);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__55713 = seq__55707;
var G__55714 = chunk__55708;
var G__55715 = count__55709;
var G__55716 = (i__55710 + (1));
seq__55707 = G__55713;
chunk__55708 = G__55714;
count__55709 = G__55715;
i__55710 = G__55716;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__55707);if(temp__4126__auto__)
{var seq__55707__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__55707__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__55707__$1);{
var G__55717 = cljs.core.chunk_rest(seq__55707__$1);
var G__55718 = c__4406__auto__;
var G__55719 = cljs.core.count(c__4406__auto__);
var G__55720 = (0);
seq__55707 = G__55717;
chunk__55708 = G__55718;
count__55709 = G__55719;
i__55710 = G__55720;
continue;
}
} else
{var k = cljs.core.first(seq__55707__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__55721 = cljs.core.next(seq__55707__$1);
var G__55722 = null;
var G__55723 = (0);
var G__55724 = (0);
seq__55707 = G__55721;
chunk__55708 = G__55722;
count__55709 = G__55723;
i__55710 = G__55724;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var G__55711 = markers_atom;var G__55712 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0));return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55711,G__55712) : cljs.core.reset_BANG_.call(null,G__55711,G__55712));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__55734 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__55734__$1 = ((cljs.core.seq_QMARK_(map__55734))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55734):map__55734);var clj_envelope = map__55734__$1;var vec__55735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55734__$1,"coordinates");var vec__55736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55735,(0),null);var vec__55737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55736,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55737,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55737,(1),null);var vec__55738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55736,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55738,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55738,(1),null);var vec__55739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55736,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55739,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55739,(1),null);var vec__55740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55736,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55740,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55740,(1),null);var vec__55741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55736,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55741,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55741,(1),null);var inner = vec__55736;var coords = vec__55735;var G__55742 = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null));return L.latLngBounds(G__55742);
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__55743){var map__55745 = p__55743;var map__55745__$1 = ((cljs.core.seq_QMARK_(map__55745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55745):map__55745);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55745__$1,cljs.core.constant$keyword$1551);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55745__$1,cljs.core.constant$keyword$1552);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55745__$1,cljs.core.constant$keyword$1279);if(cljs.core.truth_((function (){var and__3625__auto__ = selected;if(cljs.core.truth_(and__3625__auto__))
{return highlighted;
} else
{return and__3625__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1553,"#000000",cljs.core.constant$keyword$1554,fill_color,cljs.core.constant$keyword$1555,(2),cljs.core.constant$keyword$1556,(1),cljs.core.constant$keyword$1557,true,cljs.core.constant$keyword$1558,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1553,"#8c2d04",cljs.core.constant$keyword$1554,fill_color,cljs.core.constant$keyword$1555,(1),cljs.core.constant$keyword$1556,(1),cljs.core.constant$keyword$1557,true,cljs.core.constant$keyword$1558,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1553,"#000000",cljs.core.constant$keyword$1554,fill_color,cljs.core.constant$keyword$1555,(2),cljs.core.constant$keyword$1556,(1),cljs.core.constant$keyword$1557,false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$1553,"#8c2d04",cljs.core.constant$keyword$1554,fill_color,cljs.core.constant$keyword$1555,(1),cljs.core.constant$keyword$1556,(0),cljs.core.constant$keyword$1557,false,cljs.core.constant$keyword$1558,(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__55746){var map__55749 = p__55746;var map__55749__$1 = ((cljs.core.seq_QMARK_(map__55749))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55749):map__55749);var path_attrs = map__55749__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55749__$1,cljs.core.constant$keyword$1279);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = (function (){var G__55750 = (js_boundaryline["geojson"]);return L.geoJson(G__55750);
})();clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__55749,map__55749__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__55749,map__55749__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1162,boundaryline_id,cljs.core.constant$keyword$1140,tolerance,cljs.core.constant$keyword$1279,selected,cljs.core.constant$keyword$1559,leaflet_path,cljs.core.constant$keyword$1142,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1559.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$1162.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__55751,tolerance,js_boundaryline,path_attrs){var map__55753 = p__55751;var map__55753__$1 = ((cljs.core.seq_QMARK_(map__55753))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55753):map__55753);var path = map__55753__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55753__$1,cljs.core.constant$keyword$1162);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$1140.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1559.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1559.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = (function (){var G__55780 = paths_atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55780) : cljs.core.deref.call(null,G__55780));
})();var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = (function (){var G__55781 = path_selections_atom;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__55781) : cljs.core.deref.call(null,G__55781));
})();var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1560,create_path_keys,cljs.core.constant$keyword$1561,delete_path_keys,cljs.core.constant$keyword$1562,update_path_keys], null)));var vec__55779 = (function (){var G__55782 = clustermap.components.map.bounds_array(leaflet_map.getBounds());var G__55783 = leaflet_map.getZoom();var G__55784 = cljs.core.constant$keyword$1141;var G__55785 = live_path_keys;return (fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundarylines_fn.cljs$core$IFn$_invoke$arity$4(G__55782,G__55783,G__55784,G__55785) : fetch_boundarylines_fn.call(null,G__55782,G__55783,G__55784,G__55785));
})();var tolerance_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55779,(0),null);var notifychan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55779,(1),null);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan){
return (function (p__55786){var vec__55787 = p__55786;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55787,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55787,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55787,(2),null);return clustermap.components.map.fetch_create_path(comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1279,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1551,(function (){var G__55788 = k;return (new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(G__55788) : new_selection_paths.call(null,G__55788));
})(),cljs.core.constant$keyword$1552,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan){
return (function (k){var vec__55789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55789,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55789,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan,created_paths){
return (function (p__55790){var vec__55791 = p__55790;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55791,(0),null);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55791,(1),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55791,(2),null);return clustermap.components.map.update_path(comm,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1279,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1551,(function (){var G__55792 = k;return (new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(G__55792) : new_selection_paths.call(null,G__55792));
})(),cljs.core.constant$keyword$1552,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__55793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tolerance_paths,k);var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55793,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55793,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__55794 = cljs.core.seq(delete_path_keys);var chunk__55795 = null;var count__55796 = (0);var i__55797 = (0);while(true){
if((i__55797 < count__55796))
{var k = chunk__55795.cljs$core$IIndexed$_nth$arity$2(null,i__55797);var temp__4124__auto___55804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___55804))
{var path_55805 = temp__4124__auto___55804;clustermap.components.map.delete_path(leaflet_map,path_55805);
} else
{}
{
var G__55806 = seq__55794;
var G__55807 = chunk__55795;
var G__55808 = count__55796;
var G__55809 = (i__55797 + (1));
seq__55794 = G__55806;
chunk__55795 = G__55807;
count__55796 = G__55808;
i__55797 = G__55809;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__55794);if(temp__4126__auto__)
{var seq__55794__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__55794__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__55794__$1);{
var G__55810 = cljs.core.chunk_rest(seq__55794__$1);
var G__55811 = c__4406__auto__;
var G__55812 = cljs.core.count(c__4406__auto__);
var G__55813 = (0);
seq__55794 = G__55810;
chunk__55795 = G__55811;
count__55796 = G__55812;
i__55797 = G__55813;
continue;
}
} else
{var k = cljs.core.first(seq__55794__$1);var temp__4124__auto___55814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___55814))
{var path_55815 = temp__4124__auto___55814;clustermap.components.map.delete_path(leaflet_map,path_55815);
} else
{}
{
var G__55816 = cljs.core.next(seq__55794__$1);
var G__55817 = null;
var G__55818 = (0);
var G__55819 = (0);
seq__55794 = G__55816;
chunk__55795 = G__55817;
count__55796 = G__55818;
i__55797 = G__55819;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__55798){var map__55799 = p__55798;var map__55799__$1 = ((cljs.core.seq_QMARK_(map__55799))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55799):map__55799);var path = map__55799__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55799__$1,cljs.core.constant$keyword$1162);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__55779,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));var G__55800_55820 = path_selections_atom;var G__55801_55821 = new_selection_path_keys;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55800_55820,G__55801_55821) : cljs.core.reset_BANG_.call(null,G__55800_55820,G__55801_55821));
var G__55802_55822 = paths_atom;var G__55803_55823 = new_paths;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__55802_55822,G__55803_55823) : cljs.core.reset_BANG_.call(null,G__55802_55822,G__55803_55823));
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$1162.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$1164.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1265,(function (){var G__55829 = cljs.core.constant$keyword$1356;var G__55830 = cljs.core.constant$keyword$1288;var G__55831 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1163,bl_id,cljs.core.constant$keyword$1164,bl_name], null);return (path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(G__55829,G__55830,G__55831) : path_fn.call(null,G__55829,G__55830,G__55831));
})(),cljs.core.constant$keyword$1162,null,cljs.core.constant$keyword$1257,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs55828 = bl_name;if(cljs.core.map_QMARK_(attrs55828))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1162,null,cljs.core.constant$keyword$1257,"map-marker-constituency-name"], null),attrs55828], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs55828))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__55834){var vec__55835 = p__55834;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55835,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55835,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.boundaryline_aggregation,cljs.core.array_seq([index,index_type,blcoll,variable,filter,bounds], 0));
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.location_lists,cljs.core.array_seq([index,index_type,"!postcode",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds], 0));
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__55836,owner){var map__55880 = p__55836;var map__55880__$1 = ((cljs.core.seq_QMARK_(map__55880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55880):map__55880);var cursor_data = map__55880__$1;var map__55881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,cljs.core.constant$keyword$1563);var map__55881__$1 = ((cljs.core.seq_QMARK_(map__55881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55881):map__55881);var cursor = map__55881__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,cljs.core.constant$keyword$1305);var point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,cljs.core.constant$keyword$1564);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,cljs.core.constant$keyword$1565);var map__55882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,cljs.core.constant$keyword$1384);var map__55882__$1 = ((cljs.core.seq_QMARK_(map__55882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55882):map__55882);var threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55882__$1,cljs.core.constant$keyword$1566);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55882__$1,cljs.core.constant$keyword$1567);var colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55882__$1,cljs.core.constant$keyword$1568);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55882__$1,cljs.core.constant$keyword$1569);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55882__$1,cljs.core.constant$keyword$1570);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55882__$1,cljs.core.constant$keyword$1142);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55882__$1,cljs.core.constant$keyword$1571);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55880__$1,cljs.core.constant$keyword$1143);if(typeof clustermap.components.map.t55883 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t55883 = (function (colorchooser,initial_bounds,owner,data,zoom,map__55882,p__55836,cursor_data,map_component,boundaryline_collections,cursor,map__55881,threshold_colors,bounds,boundaryline_collection,filter,point_data,boundaryline_agg,map__55880,meta55884){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.map__55882 = map__55882;
this.p__55836 = p__55836;
this.cursor_data = cursor_data;
this.map_component = map_component;
this.boundaryline_collections = boundaryline_collections;
this.cursor = cursor;
this.map__55881 = map__55881;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.filter = filter;
this.point_data = point_data;
this.boundaryline_agg = boundaryline_agg;
this.map__55880 = map__55880;
this.meta55884 = meta55884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t55883.cljs$lang$type = true;
clustermap.components.map.t55883.cljs$lang$ctorStr = "clustermap.components.map/t55883";
clustermap.components.map.t55883.cljs$lang$ctorPrWriter = ((function (map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.map/t55883");
});})(map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t55883.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t55883.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__55886 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__55886__$1 = ((cljs.core.seq_QMARK_(map__55886))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55886):map__55886);var point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55886__$1,cljs.core.constant$keyword$1572);var aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55886__$1,cljs.core.constant$keyword$1573);clustermap.ordered_resource.close(aggregation_data_resource);
return clustermap.ordered_resource.close(point_data_resource);
});})(map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t55883.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t55883.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$,p__55887,p__55888){var self__ = this;
var map__55889 = p__55887;var map__55889__$1 = ((cljs.core.seq_QMARK_(map__55889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55889):map__55889);var next_cursor_data = map__55889__$1;var map__55890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55889__$1,cljs.core.constant$keyword$1563);var map__55890__$1 = ((cljs.core.seq_QMARK_(map__55890))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55890):map__55890);var next_cursor = map__55890__$1;var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55890__$1,cljs.core.constant$keyword$1305);var next_point_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55890__$1,cljs.core.constant$keyword$1564);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55890__$1,cljs.core.constant$keyword$1565);var map__55891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55890__$1,cljs.core.constant$keyword$1384);var map__55891__$1 = ((cljs.core.seq_QMARK_(map__55891))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55891):map__55891);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55891__$1,cljs.core.constant$keyword$1570);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55891__$1,cljs.core.constant$keyword$1142);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55891__$1,cljs.core.constant$keyword$1569);var next_colorchooser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55891__$1,cljs.core.constant$keyword$1568);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55891__$1,cljs.core.constant$keyword$1567);var next_threshold_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55891__$1,cljs.core.constant$keyword$1566);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55889__$1,cljs.core.constant$keyword$1143);var map__55892 = p__55888;var map__55892__$1 = ((cljs.core.seq_QMARK_(map__55892))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55892):map__55892);var map__55893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55892__$1,cljs.core.constant$keyword$1356);var map__55893__$1 = ((cljs.core.seq_QMARK_(map__55893))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55893):map__55893);var next_markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55893__$1,cljs.core.constant$keyword$1544);var next_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55893__$1,cljs.core.constant$keyword$1255);var next_path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55893__$1,cljs.core.constant$keyword$1545);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55892__$1,cljs.core.constant$keyword$1574);var next_aggregation_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55892__$1,cljs.core.constant$keyword$1573);var next_point_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55892__$1,cljs.core.constant$keyword$1572);var this$__$1 = this;var map__55894 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__55894__$1 = ((cljs.core.seq_QMARK_(map__55894))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55894):map__55894);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55894__$1,cljs.core.constant$keyword$1575);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55894__$1,cljs.core.constant$keyword$1576);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55894__$1,cljs.core.constant$keyword$1497);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55894__$1,cljs.core.constant$keyword$1496);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55894__$1,cljs.core.constant$keyword$1312);var map__55895 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__55895__$1 = ((cljs.core.seq_QMARK_(map__55895))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55895):map__55895);var map__55896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55895__$1,cljs.core.constant$keyword$1356);var map__55896__$1 = ((cljs.core.seq_QMARK_(map__55896))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55896):map__55896);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,cljs.core.constant$keyword$1545);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,cljs.core.constant$keyword$1255);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,cljs.core.constant$keyword$1544);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,cljs.core.constant$keyword$1543);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55895__$1,cljs.core.constant$keyword$1577);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55895__$1,cljs.core.constant$keyword$1574);if(cljs.core.truth_((function (){var and__3625__auto__ = leaflet_map;if(cljs.core.truth_(and__3625__auto__))
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1142], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
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
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1569], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
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
{var ticket_55923 = clustermap.components.map.next_ticket();om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1578], null),ticket_55923);
clustermap.components.map.request_aggregation_data(next_aggregation_data_resource,cljs.core.constant$keyword$1158.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1385.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()),cljs.core.constant$keyword$1579.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
clustermap.components.map.request_point_data(next_point_data_resource,cljs.core.constant$keyword$1158.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1385.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,self__.data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_colorchooser,self__.colorchooser)))
{var vec__55897_55924 = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1580.cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1581.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1163,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1579.cljs$core$IFn$_invoke$arity$1(next_colorchooser)),cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_55925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55897_55924,(0),null);var selection_path_colours_55926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55897_55924,(1),null);var update_paths_invocation_55927 = ((function (vec__55897_55924,new_threshold_colors_55925,selection_path_colours_55926,map__55894,map__55894__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__55895,map__55895__$1,map__55896,map__55896__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__55889,map__55889__$1,next_cursor_data,map__55890,map__55890__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__55891,map__55891__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__55892,map__55892__$1,map__55893,map__55893__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_55926);
});})(vec__55897_55924,new_threshold_colors_55925,selection_path_colours_55926,map__55894,map__55894__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__55895,map__55895__$1,map__55896,map__55896__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__55889,map__55889__$1,next_cursor_data,map__55890,map__55890__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__55891,map__55891__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__55892,map__55892__$1,map__55893,map__55893__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_threshold_colors_55925,next_threshold_colors))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1566], null),new_threshold_colors_55925);
} else
{}
var temp__4126__auto___55928 = update_paths_invocation_55927();if(cljs.core.truth_(temp__4126__auto___55928))
{var notify_chan_55929 = temp__4126__auto___55928;var c__5819__auto___55930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto___55930,notify_chan_55929,temp__4126__auto___55928,vec__55897_55924,new_threshold_colors_55925,selection_path_colours_55926,update_paths_invocation_55927,map__55894,map__55894__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__55895,map__55895__$1,map__55896,map__55896__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__55889,map__55889__$1,next_cursor_data,map__55890,map__55890__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__55891,map__55891__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__55892,map__55892__$1,map__55893,map__55893__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___55930,notify_chan_55929,temp__4126__auto___55928,vec__55897_55924,new_threshold_colors_55925,selection_path_colours_55926,update_paths_invocation_55927,map__55894,map__55894__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__55895,map__55895__$1,map__55896,map__55896__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__55889,map__55889__$1,next_cursor_data,map__55890,map__55890__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__55891,map__55891__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__55892,map__55892__$1,map__55893,map__55893__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (state_55902){var state_val_55903 = (state_55902[(1)]);if((state_val_55903 === (2)))
{var inst_55899 = (state_55902[(2)]);var inst_55900 = update_paths_invocation_55927();var state_55902__$1 = (function (){var statearr_55904 = state_55902;(statearr_55904[(7)] = inst_55899);
return statearr_55904;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_55902__$1,inst_55900);
} else
{if((state_val_55903 === (1)))
{var state_55902__$1 = state_55902;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55902__$1,(2),notify_chan_55929);
} else
{return null;
}
}
});})(c__5819__auto___55930,notify_chan_55929,temp__4126__auto___55928,vec__55897_55924,new_threshold_colors_55925,selection_path_colours_55926,update_paths_invocation_55927,map__55894,map__55894__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__55895,map__55895__$1,map__55896,map__55896__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__55889,map__55889__$1,next_cursor_data,map__55890,map__55890__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__55891,map__55891__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__55892,map__55892__$1,map__55893,map__55893__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;return ((function (switch__5804__auto__,c__5819__auto___55930,notify_chan_55929,temp__4126__auto___55928,vec__55897_55924,new_threshold_colors_55925,selection_path_colours_55926,update_paths_invocation_55927,map__55894,map__55894__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__55895,map__55895__$1,map__55896,map__55896__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__55889,map__55889__$1,next_cursor_data,map__55890,map__55890__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__55891,map__55891__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__55892,map__55892__$1,map__55893,map__55893__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_55908 = [null,null,null,null,null,null,null,null];(statearr_55908[(0)] = state_machine__5805__auto__);
(statearr_55908[(1)] = (1));
return statearr_55908;
});
var state_machine__5805__auto____1 = (function (state_55902){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_55902);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e55909){if((e55909 instanceof Object))
{var ex__5808__auto__ = e55909;var statearr_55910_55931 = state_55902;(statearr_55910_55931[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_55902);
return cljs.core.constant$keyword$1120;
} else
{throw e55909;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__55932 = state_55902;
state_55902 = G__55932;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_55902){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_55902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___55930,notify_chan_55929,temp__4126__auto___55928,vec__55897_55924,new_threshold_colors_55925,selection_path_colours_55926,update_paths_invocation_55927,map__55894,map__55894__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__55895,map__55895__$1,map__55896,map__55896__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__55889,map__55889__$1,next_cursor_data,map__55890,map__55890__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__55891,map__55891__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__55892,map__55892__$1,map__55893,map__55893__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
})();var state__5821__auto__ = (function (){var statearr_55911 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_55911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___55930);
return statearr_55911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto___55930,notify_chan_55929,temp__4126__auto___55928,vec__55897_55924,new_threshold_colors_55925,selection_path_colours_55926,update_paths_invocation_55927,map__55894,map__55894__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__55895,map__55895__$1,map__55896,map__55896__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__55889,map__55889__$1,next_cursor_data,map__55890,map__55890__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__55891,map__55891__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__55892,map__55892__$1,map__55893,map__55893__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_point_data,self__.point_data))
{return clustermap.components.map.update_markers(path_fn,leaflet_map,next_markers,cljs.core.constant$keyword$1505.cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t55883.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t55883.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__55912 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__55912__$1 = ((cljs.core.seq_QMARK_(map__55912))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55912):map__55912);var map = map__55912__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55912__$1,cljs.core.constant$keyword$1217);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55912__$1,cljs.core.constant$keyword$1544);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55912__$1,cljs.core.constant$keyword$1543);var map__55913 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__55913__$1 = ((cljs.core.seq_QMARK_(map__55913))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55913):map__55913);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55913__$1,cljs.core.constant$keyword$1496);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55913__$1,cljs.core.constant$keyword$1497);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55913__$1,cljs.core.constant$keyword$1575);var fetch_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55913__$1,cljs.core.constant$keyword$1576);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55913__$1,cljs.core.constant$keyword$1312);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1570], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1142], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1356,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1574,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1570], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1384,cljs.core.constant$keyword$1142], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupopen",((function (node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1582,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupclose",((function (node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1582,null);
});})(node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("mousemove",((function (node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (function (){var G__55914 = lng;var G__55915 = lat;return (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(G__55914,G__55915) : point_in_boundarylines_fn.call(null,G__55914,G__55915));
})();var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$1162.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1574);if(cljs.core.truth_((function (){var and__3625__auto__ = highlight_hit;if(cljs.core.truth_(and__3625__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1582)));
} else
{return and__3625__auto__;
}
})()))
{var G__55916_55933 = (function (){return L.popup();
})();G__55916_55933.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__55916_55933.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__55916_55933.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1574,highlight_path_ids);
});})(node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("click",((function (node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var hits = (function (){var G__55917 = e.latlng.lng;var G__55918 = e.latlng.lat;return (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(G__55917,G__55918) : point_in_boundarylines_fn.call(null,G__55917,G__55918));
})();var boundaryline_id = (function (){var G__55919 = hits;var G__55919__$1 = (((G__55919 == null))?null:cljs.core.first(G__55919));var G__55919__$2 = (((G__55919__$1 == null))?null:cljs.core.constant$keyword$1162.cljs$core$IFn$_invoke$arity$1(G__55919__$1));return G__55919__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var adr_55934 = clustermap.ordered_resource.make_discard_stale_resource("aggregation-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1573,adr_55934);
clustermap.ordered_resource.retrieve_responses(adr_55934,((function (adr_55934,node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1305], null),data__$2);
});})(adr_55934,node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var pdr = clustermap.ordered_resource.make_discard_stale_resource("point-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1572,pdr);
return clustermap.ordered_resource.retrieve_responses(pdr,((function (pdr,node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (point_data__$2){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1564], null),point_data__$2);
});})(pdr,node,map__55912,map__55912__$1,map,path,markers,leaflet_map,map__55913,map__55913__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t55883.prototype.om$core$IRender$ = true;
clustermap.components.map.t55883.prototype.om$core$IRender$render$arity$1 = ((function (map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var G__55922 = {"className": "map", "ref": "map"};return React.DOM.div(G__55922);
});})(map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t55883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_55885){var self__ = this;
var _55885__$1 = this;return self__.meta55884;
});})(map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t55883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_55885,meta55884__$1){var self__ = this;
var _55885__$1 = this;return (new clustermap.components.map.t55883(self__.colorchooser,self__.initial_bounds,self__.owner,self__.data,self__.zoom,self__.map__55882,self__.p__55836,self__.cursor_data,self__.map_component,self__.boundaryline_collections,self__.cursor,self__.map__55881,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.filter,self__.point_data,self__.boundaryline_agg,self__.map__55880,meta55884__$1));
});})(map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.__GT_t55883 = ((function (map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function __GT_t55883(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,zoom__$1,map__55882__$2,p__55836__$1,cursor_data__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,map__55881__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,filter__$1,point_data__$1,boundaryline_agg__$1,map__55880__$2,meta55884){return (new clustermap.components.map.t55883(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,zoom__$1,map__55882__$2,p__55836__$1,cursor_data__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,map__55881__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,filter__$1,point_data__$1,boundaryline_agg__$1,map__55880__$2,meta55884));
});})(map__55880,map__55880__$1,cursor_data,map__55881,map__55881__$1,cursor,data,point_data,boundaryline_collections,map__55882,map__55882__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
}
return (new clustermap.components.map.t55883(colorchooser,initial_bounds,owner,data,zoom,map__55882__$1,p__55836,cursor_data,map_component,boundaryline_collections,cursor,map__55881__$1,threshold_colors,bounds,boundaryline_collection,filter,point_data,boundaryline_agg,map__55880__$1,null));
});
