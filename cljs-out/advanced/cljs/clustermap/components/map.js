// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__11553 = config;var G__11553__$1 = (((G__11553 == null))?null:G__11553.components);var G__11553__$2 = (((G__11553__$1 == null))?null:G__11553__$1.map);var G__11553__$3 = (((G__11553__$2 == null))?null:G__11553__$2.api_key);return G__11553__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$154,m,cljs.core.constant$keyword$155,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$156,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__11554){
var m = cljs.core.first(arglist__11554);
var all_bounds = cljs.core.rest(arglist__11554);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$157,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$157,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str((function (){var attrs11556 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs11556))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$32,null], null),attrs11556], 0)))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html(attrs11556)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__11559 = location_sites;var G__11559__$1 = (((G__11559 == null))?null:cljs.core.first(G__11559));var G__11559__$2 = (((G__11559__$1 == null))?null:cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(G__11559__$1));var G__11559__$3 = (((G__11559__$2 == null))?null:cljs.core.reverse(G__11559__$2));var G__11559__$4 = (((G__11559__$3 == null))?null:cljs.core.clj__GT_js(G__11559__$3));return G__11559__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_11560_11561 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11560_11561;
}return [cljs.core.str(sb__4298__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,old_locations,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__11566 = cljs.core.seq(remove_marker_keys);var chunk__11567 = null;var count__11568 = 0;var i__11569 = 0;while(true){
if((i__11569 < count__11568))
{var k = chunk__11567.cljs$core$IIndexed$_nth$arity$2(null,i__11569);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__11570 = seq__11566;
var G__11571 = chunk__11567;
var G__11572 = count__11568;
var G__11573 = (i__11569 + 1);
seq__11566 = G__11570;
chunk__11567 = G__11571;
count__11568 = G__11572;
i__11569 = G__11573;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11566);if(temp__4092__auto__)
{var seq__11566__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11566__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__11566__$1);{
var G__11574 = cljs.core.chunk_rest(seq__11566__$1);
var G__11575 = c__4148__auto__;
var G__11576 = cljs.core.count(c__4148__auto__);
var G__11577 = 0;
seq__11566 = G__11574;
chunk__11567 = G__11575;
count__11568 = G__11576;
i__11569 = G__11577;
continue;
}
} else
{var k = cljs.core.first(seq__11566__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__11578 = cljs.core.next(seq__11566__$1);
var G__11579 = null;
var G__11580 = 0;
var G__11581 = 0;
seq__11566 = G__11578;
chunk__11567 = G__11579;
count__11568 = G__11580;
i__11569 = G__11581;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__11590 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__11590__$1 = ((cljs.core.seq_QMARK_(map__11590))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11590):map__11590);var clj_envelope = map__11590__$1;var vec__11591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11590__$1,"coordinates");var vec__11592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11591,0,null);var vec__11593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11592,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11593,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11593,1,null);var vec__11594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11592,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11594,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11594,1,null);var vec__11595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11592,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11595,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11595,1,null);var vec__11596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11592,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11596,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11596,1,null);var vec__11597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11592,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11597,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11597,1,null);var inner = vec__11592;var coords = vec__11591;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.create_path = (function create_path(leaflet_map,uk_constituencies,boundaryline_id){var temp__4090__auto__ = (uk_constituencies[boundaryline_id]);if(cljs.core.truth_(temp__4090__auto__))
{var cons = temp__4090__auto__;var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,path,cljs.core.constant$keyword$160,bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
clustermap.components.map.update_path = (function update_path(leaflet_map,uk_constituencies,path,boundaryline_id){return path;
});
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__11599 = path;var G__11599__$1 = (((G__11599 == null))?null:cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(G__11599));var G__11599__$2 = (((G__11599__$1 == null))?null:leaflet_map.removeLayer(G__11599__$1));return G__11599__$2;
});
clustermap.components.map.update_paths = (function update_paths(leaflet_map,uk_constituencies,paths_atom,old_locations,new_locations){var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var location_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$149,cljs.core.constant$keyword$148),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_locations)))));var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__11606){var vec__11607 = p__11606;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11607,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11607,1,null);return cljs.core.identity(v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path(leaflet_map,uk_constituencies,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(leaflet_map,uk_constituencies,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__11608 = cljs.core.seq(remove_path_keys);var chunk__11609 = null;var count__11610 = 0;var i__11611 = 0;while(true){
if((i__11611 < count__11610))
{var k = chunk__11609.cljs$core$IIndexed$_nth$arity$2(null,i__11611);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__11612 = seq__11608;
var G__11613 = chunk__11609;
var G__11614 = count__11610;
var G__11615 = (i__11611 + 1);
seq__11608 = G__11612;
chunk__11609 = G__11613;
count__11610 = G__11614;
i__11611 = G__11615;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11608);if(temp__4092__auto__)
{var seq__11608__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11608__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__11608__$1);{
var G__11616 = cljs.core.chunk_rest(seq__11608__$1);
var G__11617 = c__4148__auto__;
var G__11618 = cljs.core.count(c__4148__auto__);
var G__11619 = 0;
seq__11608 = G__11616;
chunk__11609 = G__11617;
count__11610 = G__11618;
i__11611 = G__11619;
continue;
}
} else
{var k = cljs.core.first(seq__11608__$1);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__11620 = cljs.core.next(seq__11608__$1);
var G__11621 = null;
var G__11622 = 0;
var G__11623 = 0;
seq__11608 = G__11620;
chunk__11609 = G__11621;
count__11610 = G__11622;
i__11611 = G__11623;
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
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__11625 = paths;var G__11625__$1 = (((G__11625 == null))?null:cljs.core.vals(G__11625));var G__11625__$2 = (((G__11625__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$160,G__11625__$1));return G__11625__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__11626,owner){var map__11636 = p__11626;var map__11636__$1 = ((cljs.core.seq_QMARK_(map__11636))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11636):map__11636);var uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11636__$1,cljs.core.constant$keyword$161);var selection_portfolio_company_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11636__$1,cljs.core.constant$keyword$162);var selection_portfolio_company_sites = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11636__$1,cljs.core.constant$keyword$141);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11636__$1,cljs.core.constant$keyword$81);if(typeof clustermap.components.map.t11637 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t11637 = (function (selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__11636,owner,p__11626,map_component,meta11638){
this.selection = selection;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.selection_portfolio_company_locations = selection_portfolio_company_locations;
this.uk_constituencies = uk_constituencies;
this.map__11636 = map__11636;
this.owner = owner;
this.p__11626 = p__11626;
this.map_component = map_component;
this.meta11638 = meta11638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t11637.cljs$lang$type = true;
clustermap.components.map.t11637.cljs$lang$ctorStr = "clustermap.components.map/t11637";
clustermap.components.map.t11637.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t11637");
});
clustermap.components.map.t11637.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t11637.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;var map__11640 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__11640__$1 = ((cljs.core.seq_QMARK_(map__11640))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11640):map__11640);var map__11641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11640__$1,cljs.core.constant$keyword$163);var map__11641__$1 = ((cljs.core.seq_QMARK_(map__11641))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11641):map__11641);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11641__$1,cljs.core.constant$keyword$156);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11641__$1,cljs.core.constant$keyword$155);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11641__$1,cljs.core.constant$keyword$154);var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11640__$1,cljs.core.constant$keyword$164);var new_locations = (function (){var G__11642 = next_props;var G__11642__$1 = (((G__11642 == null))?null:cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(G__11642));var G__11642__$2 = (((G__11642__$1 == null))?null:cljs.core.deref(G__11642__$1));return G__11642__$2;
})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(locations,new_locations))
{return null;
} else
{clustermap.components.map.update_markers(leaflet_map,markers,locations,new_locations);
clustermap.components.map.update_paths(leaflet_map,self__.uk_constituencies,paths,locations,new_locations);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$164,new_locations);
return clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
}
});
clustermap.components.map.t11637.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t11637.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$163,clustermap.components.map.create_map(node));
});
clustermap.components.map.t11637.prototype.om$core$IRender$ = true;
clustermap.components.map.t11637.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t11637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11639){var self__ = this;
var _11639__$1 = this;return self__.meta11638;
});
clustermap.components.map.t11637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11639,meta11638__$1){var self__ = this;
var _11639__$1 = this;return (new clustermap.components.map.t11637(self__.selection,self__.selection_portfolio_company_sites,self__.selection_portfolio_company_locations,self__.uk_constituencies,self__.map__11636,self__.owner,self__.p__11626,self__.map_component,meta11638__$1));
});
clustermap.components.map.__GT_t11637 = (function __GT_t11637(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__11636__$2,owner__$1,p__11626__$1,map_component__$1,meta11638){return (new clustermap.components.map.t11637(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__11636__$2,owner__$1,p__11626__$1,map_component__$1,meta11638));
});
}
return (new clustermap.components.map.t11637(selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__11636__$1,owner,p__11626,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
