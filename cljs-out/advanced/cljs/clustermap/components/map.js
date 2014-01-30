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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__21544 = config;var G__21544__$1 = (((G__21544 == null))?null:G__21544.components);var G__21544__$2 = (((G__21544__$1 == null))?null:G__21544__$1.map);var G__21544__$3 = (((G__21544__$2 == null))?null:G__21544__$2.api_key);return G__21544__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$337,m,cljs.core.constant$keyword$338,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$339,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__21545){
var m = cljs.core.first(arglist__21545);
var all_bounds = cljs.core.rest(arglist__21545);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$304,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$340,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$340,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str((function (){var attrs21547 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs21547))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,null,cljs.core.constant$keyword$215,null], null),attrs21547], 0)))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html(attrs21547)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__21550 = location_sites;var G__21550__$1 = (((G__21550 == null))?null:cljs.core.first(G__21550));var G__21550__$2 = (((G__21550__$1 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__21550__$1));var G__21550__$3 = (((G__21550__$2 == null))?null:cljs.core.reverse(G__21550__$2));var G__21550__$4 = (((G__21550__$3 == null))?null:cljs.core.clj__GT_js(G__21550__$3));return G__21550__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_21551_21552 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21551_21552;
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
,update_marker_keys));var _ = (function (){var seq__21557 = cljs.core.seq(remove_marker_keys);var chunk__21558 = null;var count__21559 = 0;var i__21560 = 0;while(true){
if((i__21560 < count__21559))
{var k = chunk__21558.cljs$core$IIndexed$_nth$arity$2(null,i__21560);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21561 = seq__21557;
var G__21562 = chunk__21558;
var G__21563 = count__21559;
var G__21564 = (i__21560 + 1);
seq__21557 = G__21561;
chunk__21558 = G__21562;
count__21559 = G__21563;
i__21560 = G__21564;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21557);if(temp__4092__auto__)
{var seq__21557__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21557__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21557__$1);{
var G__21565 = cljs.core.chunk_rest(seq__21557__$1);
var G__21566 = c__4148__auto__;
var G__21567 = cljs.core.count(c__4148__auto__);
var G__21568 = 0;
seq__21557 = G__21565;
chunk__21558 = G__21566;
count__21559 = G__21567;
i__21560 = G__21568;
continue;
}
} else
{var k = cljs.core.first(seq__21557__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21569 = cljs.core.next(seq__21557__$1);
var G__21570 = null;
var G__21571 = 0;
var G__21572 = 0;
seq__21557 = G__21569;
chunk__21558 = G__21570;
count__21559 = G__21571;
i__21560 = G__21572;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__21581 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__21581__$1 = ((cljs.core.seq_QMARK_(map__21581))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21581):map__21581);var clj_envelope = map__21581__$1;var vec__21582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21581__$1,"coordinates");var vec__21583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21582,0,null);var vec__21584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21584,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21584,1,null);var vec__21585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21585,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21585,1,null);var vec__21586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21586,1,null);var vec__21587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21587,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21587,1,null);var vec__21588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,1,null);var inner = vec__21583;var coords = vec__21582;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.create_path = (function create_path(leaflet_map,uk_constituencies,boundaryline_id){var temp__4090__auto__ = (uk_constituencies[boundaryline_id]);if(cljs.core.truth_(temp__4090__auto__))
{var cons = temp__4090__auto__;var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$342,path,cljs.core.constant$keyword$343,bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
clustermap.components.map.update_path = (function update_path(leaflet_map,uk_constituencies,path,boundaryline_id){return path;
});
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__21590 = path;var G__21590__$1 = (((G__21590 == null))?null:cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(G__21590));var G__21590__$2 = (((G__21590__$1 == null))?null:leaflet_map.removeLayer(G__21590__$1));return G__21590__$2;
});
clustermap.components.map.update_paths = (function update_paths(leaflet_map,uk_constituencies,paths_atom,new_locations){if(cljs.core.truth_(uk_constituencies))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var location_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$332,cljs.core.constant$keyword$331),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_locations)))));var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__21597){var vec__21598 = p__21597;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21598,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21598,1,null);return cljs.core.identity(v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path(leaflet_map,uk_constituencies,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(leaflet_map,uk_constituencies,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__21599 = cljs.core.seq(remove_path_keys);var chunk__21600 = null;var count__21601 = 0;var i__21602 = 0;while(true){
if((i__21602 < count__21601))
{var k = chunk__21600.cljs$core$IIndexed$_nth$arity$2(null,i__21602);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21603 = seq__21599;
var G__21604 = chunk__21600;
var G__21605 = count__21601;
var G__21606 = (i__21602 + 1);
seq__21599 = G__21603;
chunk__21600 = G__21604;
count__21601 = G__21605;
i__21602 = G__21606;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21599);if(temp__4092__auto__)
{var seq__21599__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21599__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21599__$1);{
var G__21607 = cljs.core.chunk_rest(seq__21599__$1);
var G__21608 = c__4148__auto__;
var G__21609 = cljs.core.count(c__4148__auto__);
var G__21610 = 0;
seq__21599 = G__21607;
chunk__21600 = G__21608;
count__21601 = G__21609;
i__21602 = G__21610;
continue;
}
} else
{var k = cljs.core.first(seq__21599__$1);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21611 = cljs.core.next(seq__21599__$1);
var G__21612 = null;
var G__21613 = 0;
var G__21614 = 0;
seq__21599 = G__21611;
chunk__21600 = G__21612;
count__21601 = G__21613;
i__21602 = G__21614;
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
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__21616 = paths;var G__21616__$1 = (((G__21616 == null))?null:cljs.core.vals(G__21616));var G__21616__$2 = (((G__21616__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$343,G__21616__$1));return G__21616__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__21617,owner){var map__21628 = p__21617;var map__21628__$1 = ((cljs.core.seq_QMARK_(map__21628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21628):map__21628);var uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,cljs.core.constant$keyword$344);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,cljs.core.constant$keyword$264);if(typeof clustermap.components.map.t21629 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t21629 = (function (selection,uk_constituencies,map__21628,owner,p__21617,map_component,meta21630){
this.selection = selection;
this.uk_constituencies = uk_constituencies;
this.map__21628 = map__21628;
this.owner = owner;
this.p__21617 = p__21617;
this.map_component = map_component;
this.meta21630 = meta21630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t21629.cljs$lang$type = true;
clustermap.components.map.t21629.cljs$lang$ctorStr = "clustermap.components.map/t21629";
clustermap.components.map.t21629.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t21629");
});
clustermap.components.map.t21629.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t21629.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;var map__21632 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21632__$1 = ((cljs.core.seq_QMARK_(map__21632))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21632):map__21632);var map__21633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21632__$1,cljs.core.constant$keyword$345);var map__21633__$1 = ((cljs.core.seq_QMARK_(map__21633))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21633):map__21633);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21633__$1,cljs.core.constant$keyword$339);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21633__$1,cljs.core.constant$keyword$338);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21633__$1,cljs.core.constant$keyword$337);var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21632__$1,cljs.core.constant$keyword$346);var uk_constituencies__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21632__$1,cljs.core.constant$keyword$344);var new_locations = (function (){var G__21634 = next_props;var G__21634__$1 = (((G__21634 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21634));var G__21634__$2 = (((G__21634__$1 == null))?null:cljs.core.deref(G__21634__$1));return G__21634__$2;
})();var new_uk_constituencies = (function (){var G__21635 = next_props;var G__21635__$1 = (((G__21635 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__21635));return G__21635__$1;
})();if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(locations,new_locations)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(uk_constituencies__$2,new_uk_constituencies)))
{clustermap.components.map.update_markers(leaflet_map,markers,new_locations);
clustermap.components.map.update_paths(leaflet_map,new_uk_constituencies,paths,new_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(locations,new_locations))
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$346,new_locations);
} else
{}
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(uk_constituencies__$2,new_uk_constituencies))
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$344,new_uk_constituencies);
} else
{}
return clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
} else
{return null;
}
});
clustermap.components.map.t21629.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t21629.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$345,clustermap.components.map.create_map(node));
});
clustermap.components.map.t21629.prototype.om$core$IRender$ = true;
clustermap.components.map.t21629.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t21629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21631){var self__ = this;
var _21631__$1 = this;return self__.meta21630;
});
clustermap.components.map.t21629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21631,meta21630__$1){var self__ = this;
var _21631__$1 = this;return (new clustermap.components.map.t21629(self__.selection,self__.uk_constituencies,self__.map__21628,self__.owner,self__.p__21617,self__.map_component,meta21630__$1));
});
clustermap.components.map.__GT_t21629 = (function __GT_t21629(selection__$1,uk_constituencies__$1,map__21628__$2,owner__$1,p__21617__$1,map_component__$1,meta21630){return (new clustermap.components.map.t21629(selection__$1,uk_constituencies__$1,map__21628__$2,owner__$1,p__21617__$1,map_component__$1,meta21630));
});
}
return (new clustermap.components.map.t21629(selection,uk_constituencies,map__21628__$1,owner,p__21617,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
