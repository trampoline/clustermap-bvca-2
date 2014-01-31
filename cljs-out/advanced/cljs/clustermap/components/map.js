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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__21518 = config;var G__21518__$1 = (((G__21518 == null))?null:G__21518.components);var G__21518__$2 = (((G__21518__$1 == null))?null:G__21518__$1.map);var G__21518__$3 = (((G__21518__$2 == null))?null:G__21518__$2.api_key);return G__21518__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$339,m,cljs.core.constant$keyword$340,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$341,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__21519){
var m = cljs.core.first(arglist__21519);
var all_bounds = cljs.core.rest(arglist__21519);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$306,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$342,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$342,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str((function (){var attrs21521 = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs21521))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$222,null,cljs.core.constant$keyword$216,null], null),attrs21521], 0)))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html(attrs21521)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__21524 = location_sites;var G__21524__$1 = (((G__21524 == null))?null:cljs.core.first(G__21524));var G__21524__$2 = (((G__21524__$1 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__21524__$1));var G__21524__$3 = (((G__21524__$2 == null))?null:cljs.core.reverse(G__21524__$2));var G__21524__$4 = (((G__21524__$3 == null))?null:cljs.core.clj__GT_js(G__21524__$3));return G__21524__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_21525_21526 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21525_21526;
}return [cljs.core.str(sb__4298__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__21531 = cljs.core.seq(remove_marker_keys);var chunk__21532 = null;var count__21533 = 0;var i__21534 = 0;while(true){
if((i__21534 < count__21533))
{var k = chunk__21532.cljs$core$IIndexed$_nth$arity$2(null,i__21534);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21535 = seq__21531;
var G__21536 = chunk__21532;
var G__21537 = count__21533;
var G__21538 = (i__21534 + 1);
seq__21531 = G__21535;
chunk__21532 = G__21536;
count__21533 = G__21537;
i__21534 = G__21538;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21531);if(temp__4092__auto__)
{var seq__21531__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21531__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21531__$1);{
var G__21539 = cljs.core.chunk_rest(seq__21531__$1);
var G__21540 = c__4148__auto__;
var G__21541 = cljs.core.count(c__4148__auto__);
var G__21542 = 0;
seq__21531 = G__21539;
chunk__21532 = G__21540;
count__21533 = G__21541;
i__21534 = G__21542;
continue;
}
} else
{var k = cljs.core.first(seq__21531__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21543 = cljs.core.next(seq__21531__$1);
var G__21544 = null;
var G__21545 = 0;
var G__21546 = 0;
seq__21531 = G__21543;
chunk__21532 = G__21544;
count__21533 = G__21545;
i__21534 = G__21546;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__21555 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__21555__$1 = ((cljs.core.seq_QMARK_(map__21555))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21555):map__21555);var clj_envelope = map__21555__$1;var vec__21556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21555__$1,"coordinates");var vec__21557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21556,0,null);var vec__21558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21557,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21558,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21558,1,null);var vec__21559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21557,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21559,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21559,1,null);var vec__21560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21557,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21560,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21560,1,null);var vec__21561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21557,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21561,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21561,1,null);var vec__21562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21557,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21562,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21562,1,null);var inner = vec__21557;var coords = vec__21556;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.create_path = (function create_path(leaflet_map,uk_constituencies,boundaryline_id){var temp__4090__auto__ = (uk_constituencies[boundaryline_id]);if(cljs.core.truth_(temp__4090__auto__))
{var cons = temp__4090__auto__;var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$344,path,cljs.core.constant$keyword$345,bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
clustermap.components.map.update_path = (function update_path(leaflet_map,uk_constituencies,path,boundaryline_id){return path;
});
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__21564 = path;var G__21564__$1 = (((G__21564 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__21564));var G__21564__$2 = (((G__21564__$1 == null))?null:leaflet_map.removeLayer(G__21564__$1));return G__21564__$2;
});
clustermap.components.map.update_paths = (function update_paths(leaflet_map,uk_constituencies,paths_atom,new_locations){if(cljs.core.truth_(uk_constituencies))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var location_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$334,cljs.core.constant$keyword$333),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_locations)))));var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__21571){var vec__21572 = p__21571;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21572,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21572,1,null);return cljs.core.identity(v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path(leaflet_map,uk_constituencies,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(leaflet_map,uk_constituencies,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__21573 = cljs.core.seq(remove_path_keys);var chunk__21574 = null;var count__21575 = 0;var i__21576 = 0;while(true){
if((i__21576 < count__21575))
{var k = chunk__21574.cljs$core$IIndexed$_nth$arity$2(null,i__21576);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21577 = seq__21573;
var G__21578 = chunk__21574;
var G__21579 = count__21575;
var G__21580 = (i__21576 + 1);
seq__21573 = G__21577;
chunk__21574 = G__21578;
count__21575 = G__21579;
i__21576 = G__21580;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21573);if(temp__4092__auto__)
{var seq__21573__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21573__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21573__$1);{
var G__21581 = cljs.core.chunk_rest(seq__21573__$1);
var G__21582 = c__4148__auto__;
var G__21583 = cljs.core.count(c__4148__auto__);
var G__21584 = 0;
seq__21573 = G__21581;
chunk__21574 = G__21582;
count__21575 = G__21583;
i__21576 = G__21584;
continue;
}
} else
{var k = cljs.core.first(seq__21573__$1);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21585 = cljs.core.next(seq__21573__$1);
var G__21586 = null;
var G__21587 = 0;
var G__21588 = 0;
seq__21573 = G__21585;
chunk__21574 = G__21586;
count__21575 = G__21587;
i__21576 = G__21588;
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
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__21590 = paths;var G__21590__$1 = (((G__21590 == null))?null:cljs.core.vals(G__21590));var G__21590__$2 = (((G__21590__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$345,G__21590__$1));return G__21590__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__21591,owner){var map__21602 = p__21591;var map__21602__$1 = ((cljs.core.seq_QMARK_(map__21602))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21602):map__21602);var uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21602__$1,cljs.core.constant$keyword$346);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21602__$1,cljs.core.constant$keyword$265);if(typeof clustermap.components.map.t21603 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t21603 = (function (selection,uk_constituencies,map__21602,owner,p__21591,map_component,meta21604){
this.selection = selection;
this.uk_constituencies = uk_constituencies;
this.map__21602 = map__21602;
this.owner = owner;
this.p__21591 = p__21591;
this.map_component = map_component;
this.meta21604 = meta21604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t21603.cljs$lang$type = true;
clustermap.components.map.t21603.cljs$lang$ctorStr = "clustermap.components.map/t21603";
clustermap.components.map.t21603.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t21603");
});
clustermap.components.map.t21603.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t21603.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;var map__21606 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21606__$1 = ((cljs.core.seq_QMARK_(map__21606))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21606):map__21606);var map__21607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21606__$1,cljs.core.constant$keyword$347);var map__21607__$1 = ((cljs.core.seq_QMARK_(map__21607))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21607):map__21607);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21607__$1,cljs.core.constant$keyword$341);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21607__$1,cljs.core.constant$keyword$340);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21607__$1,cljs.core.constant$keyword$339);var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21606__$1,cljs.core.constant$keyword$348);var uk_constituencies__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21606__$1,cljs.core.constant$keyword$346);var new_locations = (function (){var G__21608 = next_props;var G__21608__$1 = (((G__21608 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__21608));var G__21608__$2 = (((G__21608__$1 == null))?null:cljs.core.deref(G__21608__$1));return G__21608__$2;
})();var new_uk_constituencies = (function (){var G__21609 = next_props;var G__21609__$1 = (((G__21609 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__21609));return G__21609__$1;
})();if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(locations,new_locations)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(uk_constituencies__$2,new_uk_constituencies)))
{clustermap.components.map.update_markers(leaflet_map,markers,new_locations);
clustermap.components.map.update_paths(leaflet_map,new_uk_constituencies,paths,new_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(locations,new_locations))
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$348,new_locations);
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(uk_constituencies__$2,new_uk_constituencies))
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$346,new_uk_constituencies);
} else
{}
return clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
} else
{return null;
}
});
clustermap.components.map.t21603.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t21603.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$347,clustermap.components.map.create_map(node));
});
clustermap.components.map.t21603.prototype.om$core$IRender$ = true;
clustermap.components.map.t21603.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t21603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21605){var self__ = this;
var _21605__$1 = this;return self__.meta21604;
});
clustermap.components.map.t21603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21605,meta21604__$1){var self__ = this;
var _21605__$1 = this;return (new clustermap.components.map.t21603(self__.selection,self__.uk_constituencies,self__.map__21602,self__.owner,self__.p__21591,self__.map_component,meta21604__$1));
});
clustermap.components.map.__GT_t21603 = (function __GT_t21603(selection__$1,uk_constituencies__$1,map__21602__$2,owner__$1,p__21591__$1,map_component__$1,meta21604){return (new clustermap.components.map.t21603(selection__$1,uk_constituencies__$1,map__21602__$2,owner__$1,p__21591__$1,map_component__$1,meta21604));
});
}
return (new clustermap.components.map.t21603(selection,uk_constituencies,map__21602__$1,owner,p__21591,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
