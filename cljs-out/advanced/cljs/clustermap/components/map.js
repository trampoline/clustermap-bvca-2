// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.map.initial_bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null);
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(clustermap.components.map.initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3441__auto__ = (function (){var G__34016 = config;var G__34016__$1 = (((G__34016 == null))?null:G__34016.components);var G__34016__$2 = (((G__34016__$1 == null))?null:G__34016__$1.map);var G__34016__$3 = (((G__34016__$2 == null))?null:G__34016__$2.api_key);return G__34016__$3;
})();if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$758,m,cljs.core.constant$keyword$759,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$760,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$761,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3429__auto__ = s;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = w;if(cljs.core.truth_(and__3429__auto____$1))
{var and__3429__auto____$2 = n;if(cljs.core.truth_(and__3429__auto____$2))
{return e;
} else
{return and__3429__auto____$2;
}
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
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
pan_to_show.cljs$lang$applyTo = (function (arglist__34017){
var m = cljs.core.first(arglist__34017);
var all_bounds = cljs.core.rest(arglist__34017);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs34020 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$587,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$757,cljs.core.constant$keyword$631,site) : path_fn.call(null,cljs.core.constant$keyword$757,cljs.core.constant$keyword$631,site)),cljs.core.constant$keyword$582,null,cljs.core.constant$keyword$576,null], null))),cljs.core.str(">"),cljs.core.str((function (){var attrs34021 = cljs.core.constant$keyword$596.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs34021))
{return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$582,null,cljs.core.constant$keyword$576,null], null),attrs34021], 0)))),cljs.core.str(">"),cljs.core.str("</li>")].join('');
} else
{return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html(attrs34021)),cljs.core.str("</li>")].join('');
}
})()),cljs.core.str("</a>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs34020))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$582,null,cljs.core.constant$keyword$576,"map-marker-popup-location-list"], null),attrs34020], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"map-marker-popup-location-list\">"),cljs.core.str(hiccups.runtime.render_html(attrs34020)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__34024 = location_sites;var G__34024__$1 = (((G__34024 == null))?null:cljs.core.first(G__34024));var G__34024__$2 = (((G__34024__$1 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34024__$1));var G__34024__$3 = (((G__34024__$2 == null))?null:cljs.core.reverse(G__34024__$2));var G__34024__$4 = (((G__34024__$3 == null))?null:cljs.core.clj__GT_js(G__34024__$3));return G__34024__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$578,"map-marker",cljs.core.constant$keyword$763,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),cljs.core.constant$keyword$764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,14], null),cljs.core.constant$keyword$765,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-8], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$766,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4339__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_34025_34026 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4340__auto__){return sb__4339__auto__.append(x__4340__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34025_34026;
}return [cljs.core.str(sb__4339__auto__)].join('');
})())].join(''));
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
,update_marker_keys));var _ = (function (){var seq__34031 = cljs.core.seq(remove_marker_keys);var chunk__34032 = null;var count__34033 = 0;var i__34034 = 0;while(true){
if((i__34034 < count__34033))
{var k = chunk__34032.cljs$core$IIndexed$_nth$arity$2(null,i__34034);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__34035 = seq__34031;
var G__34036 = chunk__34032;
var G__34037 = count__34033;
var G__34038 = (i__34034 + 1);
seq__34031 = G__34035;
chunk__34032 = G__34036;
count__34033 = G__34037;
i__34034 = G__34038;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34031);if(temp__4092__auto__)
{var seq__34031__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34031__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34031__$1);{
var G__34039 = cljs.core.chunk_rest(seq__34031__$1);
var G__34040 = c__4189__auto__;
var G__34041 = cljs.core.count(c__4189__auto__);
var G__34042 = 0;
seq__34031 = G__34039;
chunk__34032 = G__34040;
count__34033 = G__34041;
i__34034 = G__34042;
continue;
}
} else
{var k = cljs.core.first(seq__34031__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__34043 = cljs.core.next(seq__34031__$1);
var G__34044 = null;
var G__34045 = 0;
var G__34046 = 0;
seq__34031 = G__34043;
chunk__34032 = G__34044;
count__34033 = G__34045;
i__34034 = G__34046;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__34055 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__34055__$1 = ((cljs.core.seq_QMARK_(map__34055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34055):map__34055);var clj_envelope = map__34055__$1;var vec__34056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34055__$1,"coordinates");var vec__34057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34056,0,null);var vec__34058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34057,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34058,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34058,1,null);var vec__34059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34057,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34059,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34059,1,null);var vec__34060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34057,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,1,null);var vec__34061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34057,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34061,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34061,1,null);var vec__34062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34057,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,1,null);var inner = vec__34057;var coords = vec__34056;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3441__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$575,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$575,7));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__34063){var map__34065 = p__34063;var map__34065__$1 = ((cljs.core.seq_QMARK_(map__34065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34065):map__34065);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34065__$1,cljs.core.constant$keyword$767);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34065__$1,cljs.core.constant$keyword$601);if(cljs.core.truth_((function (){var and__3429__auto__ = selected;if(cljs.core.truth_(and__3429__auto__))
{return highlighted;
} else
{return and__3429__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$768,"#0000aa",cljs.core.constant$keyword$769,2,cljs.core.constant$keyword$770,1,cljs.core.constant$keyword$771,true,cljs.core.constant$keyword$772,0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$768,"#0000aa",cljs.core.constant$keyword$769,2,cljs.core.constant$keyword$770,1,cljs.core.constant$keyword$771,true,cljs.core.constant$keyword$772,0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$768,"#000000",cljs.core.constant$keyword$769,2,cljs.core.constant$keyword$770,1,cljs.core.constant$keyword$771,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$768,"#ff0000",cljs.core.constant$keyword$769,2,cljs.core.constant$keyword$770,0,cljs.core.constant$keyword$771,false,cljs.core.constant$keyword$772,0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__34066){var map__34068 = p__34066;var map__34068__$1 = ((cljs.core.seq_QMARK_(map__34068))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34068):map__34068);var path_attrs = map__34068__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34068__$1,cljs.core.constant$keyword$601);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$582,boundaryline_id,cljs.core.constant$keyword$773,tolerance,cljs.core.constant$keyword$601,selected,cljs.core.constant$keyword$774,leaflet_path,cljs.core.constant$keyword$775,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__34070 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34070,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34070,1,null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$774.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$582.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__34071,path_attrs){var map__34074 = p__34071;var map__34074__$1 = ((cljs.core.seq_QMARK_(map__34074))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34074):map__34074);var path = map__34074__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34074__$1,cljs.core.constant$keyword$582);var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__34075 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34075,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34075,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$773.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$774.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$774.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$776,cljs.core.constant$keyword$777),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$601,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$767,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$601,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$767,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__34082 = cljs.core.seq(delete_path_keys);var chunk__34083 = null;var count__34084 = 0;var i__34085 = 0;while(true){
if((i__34085 < count__34084))
{var k = chunk__34083.cljs$core$IIndexed$_nth$arity$2(null,i__34085);var temp__4090__auto___34088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___34088))
{var path_34089 = temp__4090__auto___34088;clustermap.components.map.delete_path(leaflet_map,path_34089);
} else
{}
{
var G__34090 = seq__34082;
var G__34091 = chunk__34083;
var G__34092 = count__34084;
var G__34093 = (i__34085 + 1);
seq__34082 = G__34090;
chunk__34083 = G__34091;
count__34084 = G__34092;
i__34085 = G__34093;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34082);if(temp__4092__auto__)
{var seq__34082__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34082__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34082__$1);{
var G__34094 = cljs.core.chunk_rest(seq__34082__$1);
var G__34095 = c__4189__auto__;
var G__34096 = cljs.core.count(c__4189__auto__);
var G__34097 = 0;
seq__34082 = G__34094;
chunk__34083 = G__34095;
count__34084 = G__34096;
i__34085 = G__34097;
continue;
}
} else
{var k = cljs.core.first(seq__34082__$1);var temp__4090__auto___34098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___34098))
{var path_34099 = temp__4090__auto___34098;clustermap.components.map.delete_path(leaflet_map,path_34099);
} else
{}
{
var G__34100 = cljs.core.next(seq__34082__$1);
var G__34101 = null;
var G__34102 = 0;
var G__34103 = 0;
seq__34082 = G__34100;
chunk__34083 = G__34101;
count__34084 = G__34102;
i__34085 = G__34103;
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
return (function (m,p__34086){var map__34087 = p__34086;var map__34087__$1 = ((cljs.core.seq_QMARK_(map__34087))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34087):map__34087);var path = map__34087__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34087__$1,cljs.core.constant$keyword$582);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(path_selections))
{return clustermap.components.map.locate_map(leaflet_map);
} else
{if(cljs.core.empty_QMARK_(paths))
{return (om.core.set_state.cljs$core$IFn$_invoke$arity$3 ? om.core.set_state.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$778,true) : om.core.set_state.call(null,owner,cljs.core.constant$keyword$778,true));
} else
{if(cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$778)))
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$778,false);
} else
{}
var temp__4090__auto__ = (function (){var G__34105 = cljs.core.select_keys(paths,path_selections);var G__34105__$1 = (((G__34105 == null))?null:cljs.core.vals(G__34105));var G__34105__$2 = (((G__34105__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$775,G__34105__$1));var G__34105__$3 = (((G__34105__$2 == null))?null:cljs.core.not_empty(G__34105__$2));return G__34105__$3;
})();if(cljs.core.truth_(temp__4090__auto__))
{var bounds = temp__4090__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show(clustermap.components.map.initial_bounds);
}
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__34106,owner){var map__34126 = p__34106;var map__34126__$1 = ((cljs.core.seq_QMARK_(map__34126))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34126):map__34126);var app_state = map__34126__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34126__$1,cljs.core.constant$keyword$642);if(typeof clustermap.components.map.t34127 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t34127 = (function (selection,app_state,map__34126,owner,p__34106,map_component,meta34128){
this.selection = selection;
this.app_state = app_state;
this.map__34126 = map__34126;
this.owner = owner;
this.p__34106 = p__34106;
this.map_component = map_component;
this.meta34128 = meta34128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t34127.cljs$lang$type = true;
clustermap.components.map.t34127.cljs$lang$ctorStr = "clustermap.components.map/t34127";
clustermap.components.map.t34127.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map/t34127");
});
clustermap.components.map.t34127.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t34127.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__34130,p__34131){var self__ = this;
var map__34132 = p__34130;var map__34132__$1 = ((cljs.core.seq_QMARK_(map__34132))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34132):map__34132);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34132__$1,cljs.core.constant$keyword$642);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34132__$1,cljs.core.constant$keyword$779);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34132__$1,cljs.core.constant$keyword$780);var next_uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34132__$1,cljs.core.constant$keyword$781);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34132__$1,cljs.core.constant$keyword$688);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34132__$1,cljs.core.constant$keyword$782);var map__34133 = p__34131;var map__34133__$1 = ((cljs.core.seq_QMARK_(map__34133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34133):map__34133);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34133__$1,cljs.core.constant$keyword$783);var this$__$1 = this;var map__34134 = om.core.get_props(self__.owner);var map__34134__$1 = ((cljs.core.seq_QMARK_(map__34134))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34134):map__34134);var uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34134__$1,cljs.core.constant$keyword$781);var map__34135 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34135__$1 = ((cljs.core.seq_QMARK_(map__34135))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34135):map__34135);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34135__$1,cljs.core.constant$keyword$634);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34135__$1,cljs.core.constant$keyword$652);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34135__$1,cljs.core.constant$keyword$784);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34135__$1,cljs.core.constant$keyword$635);var map__34136 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34136__$1 = ((cljs.core.seq_QMARK_(map__34136))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34136):map__34136);var map__34137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34136__$1,cljs.core.constant$keyword$757);var map__34137__$1 = ((cljs.core.seq_QMARK_(map__34137))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34137):map__34137);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34137__$1,cljs.core.constant$keyword$761);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34137__$1,cljs.core.constant$keyword$760);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34137__$1,cljs.core.constant$keyword$759);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34137__$1,cljs.core.constant$keyword$758);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34136__$1,cljs.core.constant$keyword$778);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34136__$1,cljs.core.constant$keyword$783);var mousemove_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34136__$1,cljs.core.constant$keyword$785);var click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34136__$1,cljs.core.constant$keyword$786);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_uk_constituencies_rtree,uk_constituencies_rtree))
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$785,(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first(hits);var highlight_path_ids = cljs.core.set(cljs.core.take(1,hit_path_ids));var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$783);if(cljs.core.truth_((function (){var and__3429__auto__ = highlight_hit;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids);
} else
{return and__3429__auto__;
}
})()))
{var G__34138_34145 = L.popup();G__34138_34145.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__34138_34145.setContent([cljs.core.str("<p>"),cljs.core.str((function (){var G__34139 = highlight_hit;var G__34139__$1 = (((G__34139 == null))?null:G__34139.properties);var G__34139__$2 = (((G__34139__$1 == null))?null:G__34139__$1.compact_name);return G__34139__$2;
})()),cljs.core.str("</p>")].join(''));
G__34138_34145.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$783,highlight_path_ids);
}));
if(cljs.core.truth_(mousemove_listener))
{leaflet_map.off("mousemove",mousemove_listener);
} else
{}
leaflet_map.on("mousemove",om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$785));
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$786,(function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,cljs.core.first(hit_path_ids)], null)], null));
}));
if(cljs.core.truth_(click_listener))
{leaflet_map.off("click",click_listener);
} else
{}
leaflet_map.on("click",om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$786));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths(comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3441__auto__ = pan_pending;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t34127.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t34127.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34140 = clustermap.components.map.create_map(node);var map__34140__$1 = ((cljs.core.seq_QMARK_(map__34140))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34140):map__34140);var map = map__34140__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34140__$1,cljs.core.constant$keyword$609);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34140__$1,cljs.core.constant$keyword$759);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34140__$1,cljs.core.constant$keyword$758);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$757,map);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$783,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$787),cljs.core.assoc,cljs.core.constant$keyword$782,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){var map__34141 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34141__$1 = ((cljs.core.seq_QMARK_(map__34141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34141):map__34141);var map__34142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34141__$1,cljs.core.constant$keyword$757);var map__34142__$1 = ((cljs.core.seq_QMARK_(map__34142))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34142):map__34142);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34142__$1,cljs.core.constant$keyword$761);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34142__$1,cljs.core.constant$keyword$760);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$782,leaflet_map.getZoom());
});
clustermap.components.map.t34127.prototype.om$core$IRender$ = true;
clustermap.components.map.t34127.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t34127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34129){var self__ = this;
var _34129__$1 = this;return self__.meta34128;
});
clustermap.components.map.t34127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34129,meta34128__$1){var self__ = this;
var _34129__$1 = this;return (new clustermap.components.map.t34127(self__.selection,self__.app_state,self__.map__34126,self__.owner,self__.p__34106,self__.map_component,meta34128__$1));
});
clustermap.components.map.__GT_t34127 = (function __GT_t34127(selection__$1,app_state__$1,map__34126__$2,owner__$1,p__34106__$1,map_component__$1,meta34128){return (new clustermap.components.map.t34127(selection__$1,app_state__$1,map__34126__$2,owner__$1,p__34106__$1,map_component__$1,meta34128));
});
}
return (new clustermap.components.map.t34127(selection,app_state,map__34126__$1,owner,p__34106,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$621,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$787,app_state,cljs.core.constant$keyword$784,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$688)], null)], 0)),cljs.core.constant$keyword$626,document.getElementById(elem_id)], null));
});
