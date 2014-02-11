// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('jayq.core');
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__21767 = config;var G__21767__$1 = (((G__21767 == null))?null:G__21767.components);var G__21767__$2 = (((G__21767__$1 == null))?null:G__21767__$1.map);var G__21767__$3 = (((G__21767__$2 == null))?null:G__21767__$2.api_key);return G__21767__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$368,m,cljs.core.constant$keyword$369,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$370,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3394__auto__ = s;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = w;if(cljs.core.truth_(and__3394__auto____$1))
{var and__3394__auto____$2 = n;if(cljs.core.truth_(and__3394__auto____$2))
{return e;
} else
{return and__3394__auto____$2;
}
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__21768){
var m = cljs.core.first(arglist__21768);
var all_bounds = cljs.core.rest(arglist__21768);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$328,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$371,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$371,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs21770 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$243,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,site) : path_fn.call(null,cljs.core.constant$keyword$275,site)),cljs.core.constant$keyword$238,null,cljs.core.constant$keyword$232,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs21770))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$238,null,cljs.core.constant$keyword$232,null], null),attrs21770], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul>"),cljs.core.str(hiccups.runtime.render_html(attrs21770)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__21773 = location_sites;var G__21773__$1 = (((G__21773 == null))?null:cljs.core.first(G__21773));var G__21773__$2 = (((G__21773__$1 == null))?null:cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(G__21773__$1));var G__21773__$3 = (((G__21773__$2 == null))?null:cljs.core.reverse(G__21773__$2));var G__21773__$4 = (((G__21773__$3 == null))?null:cljs.core.clj__GT_js(G__21773__$3));return G__21773__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_21774_21775 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21774_21775;
}return [cljs.core.str(sb__4298__auto__)].join('');
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
,update_marker_keys));var _ = (function (){var seq__21780 = cljs.core.seq(remove_marker_keys);var chunk__21781 = null;var count__21782 = 0;var i__21783 = 0;while(true){
if((i__21783 < count__21782))
{var k = chunk__21781.cljs$core$IIndexed$_nth$arity$2(null,i__21783);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21784 = seq__21780;
var G__21785 = chunk__21781;
var G__21786 = count__21782;
var G__21787 = (i__21783 + 1);
seq__21780 = G__21784;
chunk__21781 = G__21785;
count__21782 = G__21786;
i__21783 = G__21787;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21780);if(temp__4092__auto__)
{var seq__21780__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21780__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21780__$1);{
var G__21788 = cljs.core.chunk_rest(seq__21780__$1);
var G__21789 = c__4148__auto__;
var G__21790 = cljs.core.count(c__4148__auto__);
var G__21791 = 0;
seq__21780 = G__21788;
chunk__21781 = G__21789;
count__21782 = G__21790;
i__21783 = G__21791;
continue;
}
} else
{var k = cljs.core.first(seq__21780__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21792 = cljs.core.next(seq__21780__$1);
var G__21793 = null;
var G__21794 = 0;
var G__21795 = 0;
seq__21780 = G__21792;
chunk__21781 = G__21793;
count__21782 = G__21794;
i__21783 = G__21795;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__21804 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__21804__$1 = ((cljs.core.seq_QMARK_(map__21804))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21804):map__21804);var clj_envelope = map__21804__$1;var vec__21805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,"coordinates");var vec__21806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21805,0,null);var vec__21807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21806,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21807,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21807,1,null);var vec__21808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21806,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,1,null);var vec__21809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21806,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,1,null);var vec__21810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21806,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21810,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21810,1,null);var vec__21811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21806,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21811,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21811,1,null);var inner = vec__21806;var coords = vec__21805;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$231,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$231,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
/**
* create a Leaflet path for a boundaryline
*/
clustermap.components.map.create_path = (function create_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,boundaryline_id){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,uk_constituencies,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__21813 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21813,0,null);var cons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21813,1,null);var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$373,tolerance,cljs.core.constant$keyword$374,path,cljs.core.constant$keyword$375,bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,path,boundaryline_id){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,uk_constituencies,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__21815 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21815,0,null);var cons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21815,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$373.cljs$core$IFn$_invoke$arity$1(path)))
{var new_path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((cons["envelope"]));new_path.addTo(leaflet_map);
leaflet_map.removeLayer(cljs.core.constant$keyword$374.cljs$core$IFn$_invoke$arity$1(path));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$373,tolerance,cljs.core.constant$keyword$374,new_path,cljs.core.constant$keyword$375,bounds], null);
} else
{return path;
}
} else
{return path;
}
});
/**
* remove a leaflet path
*/
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__21817 = path;var G__21817__$1 = (((G__21817 == null))?null:cljs.core.constant$keyword$374.cljs$core$IFn$_invoke$arity$1(G__21817));var G__21817__$2 = (((G__21817__$1 == null))?null:leaflet_map.removeLayer(G__21817__$1));return G__21817__$2;
});
clustermap.components.map.update_paths = (function update_paths(fetch_boundaryline_fn,uk_constituencies,leaflet_map,paths_atom,new_locations){if(cljs.core.truth_(uk_constituencies))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var location_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$363,cljs.core.constant$keyword$362),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_locations)))));var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__21824){var vec__21825 = p__21824;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21825,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21825,1,null);return cljs.core.identity(v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__21826 = cljs.core.seq(remove_path_keys);var chunk__21827 = null;var count__21828 = 0;var i__21829 = 0;while(true){
if((i__21829 < count__21828))
{var k = chunk__21827.cljs$core$IIndexed$_nth$arity$2(null,i__21829);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21830 = seq__21826;
var G__21831 = chunk__21827;
var G__21832 = count__21828;
var G__21833 = (i__21829 + 1);
seq__21826 = G__21830;
chunk__21827 = G__21831;
count__21828 = G__21832;
i__21829 = G__21833;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21826);if(temp__4092__auto__)
{var seq__21826__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21826__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21826__$1);{
var G__21834 = cljs.core.chunk_rest(seq__21826__$1);
var G__21835 = c__4148__auto__;
var G__21836 = cljs.core.count(c__4148__auto__);
var G__21837 = 0;
seq__21826 = G__21834;
chunk__21827 = G__21835;
count__21828 = G__21836;
i__21829 = G__21837;
continue;
}
} else
{var k = cljs.core.first(seq__21826__$1);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21838 = cljs.core.next(seq__21826__$1);
var G__21839 = null;
var G__21840 = 0;
var G__21841 = 0;
seq__21826 = G__21838;
chunk__21827 = G__21839;
count__21828 = G__21840;
i__21829 = G__21841;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_(paths_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_paths,new_paths], 0)));
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__21843 = paths;var G__21843__$1 = (((G__21843 == null))?null:cljs.core.vals(G__21843));var G__21843__$2 = (((G__21843__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$375,G__21843__$1));return G__21843__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__21844,owner){var map__21859 = p__21844;var map__21859__$1 = ((cljs.core.seq_QMARK_(map__21859))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21859):map__21859);var app_state = map__21859__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,cljs.core.constant$keyword$280);if(typeof clustermap.components.map.t21860 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t21860 = (function (selection,app_state,map__21859,owner,p__21844,map_component,meta21861){
this.selection = selection;
this.app_state = app_state;
this.map__21859 = map__21859;
this.owner = owner;
this.p__21844 = p__21844;
this.map_component = map_component;
this.meta21861 = meta21861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t21860.cljs$lang$type = true;
clustermap.components.map.t21860.cljs$lang$ctorStr = "clustermap.components.map/t21860";
clustermap.components.map.t21860.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t21860");
});
clustermap.components.map.t21860.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t21860.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__21863,next_state){var self__ = this;
var map__21864 = p__21863;var map__21864__$1 = ((cljs.core.seq_QMARK_(map__21864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21864):map__21864);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.constant$keyword$280);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.constant$keyword$376);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.constant$keyword$377);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.constant$keyword$300);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.constant$keyword$378);var this$__$1 = this;var map__21865 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21865__$1 = ((cljs.core.seq_QMARK_(map__21865))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21865):map__21865);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21865__$1,cljs.core.constant$keyword$297);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21865__$1,cljs.core.constant$keyword$298);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21865__$1,cljs.core.constant$keyword$379);var map__21866 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21866__$1 = ((cljs.core.seq_QMARK_(map__21866))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21866):map__21866);var map__21867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21866__$1,cljs.core.constant$keyword$380);var map__21867__$1 = ((cljs.core.seq_QMARK_(map__21867))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21867):map__21867);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,cljs.core.constant$keyword$370);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,cljs.core.constant$keyword$369);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,cljs.core.constant$keyword$368);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21866__$1,cljs.core.constant$keyword$381);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
clustermap.components.map.update_paths(fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection))
{if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(paths))))
{clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
} else
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$381,true);
}
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = pan_pending;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_empty(cljs.core.deref(paths));
} else
{return and__3394__auto__;
}
})()))
{clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$381,false);
} else
{return null;
}
});
clustermap.components.map.t21860.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t21860.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__21868 = clustermap.components.map.create_map(node);var map__21868__$1 = ((cljs.core.seq_QMARK_(map__21868))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21868):map__21868);var map = map__21868__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.constant$keyword$374);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.constant$keyword$369);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.constant$keyword$368);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$380,map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$382),cljs.core.assoc,cljs.core.constant$keyword$378,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__21869 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21869__$1 = ((cljs.core.seq_QMARK_(map__21869))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21869):map__21869);var map__21870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21869__$1,cljs.core.constant$keyword$380);var map__21870__$1 = ((cljs.core.seq_QMARK_(map__21870))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21870):map__21870);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21870__$1,cljs.core.constant$keyword$370);leaflet_map.invalidateSize();
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(paths))))
{return clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
} else
{return clustermap.components.map.locate_map(leaflet_map);
}
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$378,leaflet_map.getZoom());
});
clustermap.components.map.t21860.prototype.om$core$IRender$ = true;
clustermap.components.map.t21860.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t21860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21862){var self__ = this;
var _21862__$1 = this;return self__.meta21861;
});
clustermap.components.map.t21860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21862,meta21861__$1){var self__ = this;
var _21862__$1 = this;return (new clustermap.components.map.t21860(self__.selection,self__.app_state,self__.map__21859,self__.owner,self__.p__21844,self__.map_component,meta21861__$1));
});
clustermap.components.map.__GT_t21860 = (function __GT_t21860(selection__$1,app_state__$1,map__21859__$2,owner__$1,p__21844__$1,map_component__$1,meta21861){return (new clustermap.components.map.t21860(selection__$1,app_state__$1,map__21859__$2,owner__$1,p__21844__$1,map_component__$1,meta21861));
});
}
return (new clustermap.components.map.t21860(selection,app_state,map__21859__$1,owner,p__21844,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$382,app_state,cljs.core.constant$keyword$379,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$300)], null)], 0)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
