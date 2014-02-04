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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__21707 = config;var G__21707__$1 = (((G__21707 == null))?null:G__21707.components);var G__21707__$2 = (((G__21707__$1 == null))?null:G__21707__$1.map);var G__21707__$3 = (((G__21707__$2 == null))?null:G__21707__$2.api_key);return G__21707__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$351,m,cljs.core.constant$keyword$352,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$353,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__21708){
var m = cljs.core.first(arglist__21708);
var all_bounds = cljs.core.rest(arglist__21708);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$317,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$354,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$354,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str((function (){var attrs21710 = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs21710))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,null,cljs.core.constant$keyword$226,null], null),attrs21710], 0)))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html(attrs21710)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__21713 = location_sites;var G__21713__$1 = (((G__21713 == null))?null:cljs.core.first(G__21713));var G__21713__$2 = (((G__21713__$1 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__21713__$1));var G__21713__$3 = (((G__21713__$2 == null))?null:cljs.core.reverse(G__21713__$2));var G__21713__$4 = (((G__21713__$3 == null))?null:cljs.core.clj__GT_js(G__21713__$3));return G__21713__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_21714_21715 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21714_21715;
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
,update_marker_keys));var _ = (function (){var seq__21720 = cljs.core.seq(remove_marker_keys);var chunk__21721 = null;var count__21722 = 0;var i__21723 = 0;while(true){
if((i__21723 < count__21722))
{var k = chunk__21721.cljs$core$IIndexed$_nth$arity$2(null,i__21723);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21724 = seq__21720;
var G__21725 = chunk__21721;
var G__21726 = count__21722;
var G__21727 = (i__21723 + 1);
seq__21720 = G__21724;
chunk__21721 = G__21725;
count__21722 = G__21726;
i__21723 = G__21727;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21720);if(temp__4092__auto__)
{var seq__21720__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21720__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21720__$1);{
var G__21728 = cljs.core.chunk_rest(seq__21720__$1);
var G__21729 = c__4148__auto__;
var G__21730 = cljs.core.count(c__4148__auto__);
var G__21731 = 0;
seq__21720 = G__21728;
chunk__21721 = G__21729;
count__21722 = G__21730;
i__21723 = G__21731;
continue;
}
} else
{var k = cljs.core.first(seq__21720__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21732 = cljs.core.next(seq__21720__$1);
var G__21733 = null;
var G__21734 = 0;
var G__21735 = 0;
seq__21720 = G__21732;
chunk__21721 = G__21733;
count__21722 = G__21734;
i__21723 = G__21735;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__21744 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__21744__$1 = ((cljs.core.seq_QMARK_(map__21744))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21744):map__21744);var clj_envelope = map__21744__$1;var vec__21745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21744__$1,"coordinates");var vec__21746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,0,null);var vec__21747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,1,null);var vec__21748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21748,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21748,1,null);var vec__21749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21749,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21749,1,null);var vec__21750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21750,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21750,1,null);var vec__21751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21751,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21751,1,null);var inner = vec__21746;var coords = vec__21745;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$225,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$225,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
/**
* create a Leaflet path for a boundaryline
*/
clustermap.components.map.create_path = (function create_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,boundaryline_id){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,uk_constituencies,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__21753 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21753,0,null);var cons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21753,1,null);var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$356,tolerance,cljs.core.constant$keyword$357,path,cljs.core.constant$keyword$358,bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,path,boundaryline_id){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,uk_constituencies,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__21755 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21755,0,null);var cons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21755,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(path)))
{var new_path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((cons["envelope"]));new_path.addTo(leaflet_map);
leaflet_map.removeLayer(cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(path));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$356,tolerance,cljs.core.constant$keyword$357,new_path,cljs.core.constant$keyword$358,bounds], null);
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
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__21757 = path;var G__21757__$1 = (((G__21757 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__21757));var G__21757__$2 = (((G__21757__$1 == null))?null:leaflet_map.removeLayer(G__21757__$1));return G__21757__$2;
});
clustermap.components.map.update_paths = (function update_paths(fetch_boundaryline_fn,uk_constituencies,leaflet_map,paths_atom,new_locations){if(cljs.core.truth_(uk_constituencies))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var location_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$346,cljs.core.constant$keyword$345),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_locations)))));var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__21764){var vec__21765 = p__21764;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21765,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21765,1,null);return cljs.core.identity(v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__21766 = cljs.core.seq(remove_path_keys);var chunk__21767 = null;var count__21768 = 0;var i__21769 = 0;while(true){
if((i__21769 < count__21768))
{var k = chunk__21767.cljs$core$IIndexed$_nth$arity$2(null,i__21769);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21770 = seq__21766;
var G__21771 = chunk__21767;
var G__21772 = count__21768;
var G__21773 = (i__21769 + 1);
seq__21766 = G__21770;
chunk__21767 = G__21771;
count__21768 = G__21772;
i__21769 = G__21773;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21766);if(temp__4092__auto__)
{var seq__21766__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21766__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21766__$1);{
var G__21774 = cljs.core.chunk_rest(seq__21766__$1);
var G__21775 = c__4148__auto__;
var G__21776 = cljs.core.count(c__4148__auto__);
var G__21777 = 0;
seq__21766 = G__21774;
chunk__21767 = G__21775;
count__21768 = G__21776;
i__21769 = G__21777;
continue;
}
} else
{var k = cljs.core.first(seq__21766__$1);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21778 = cljs.core.next(seq__21766__$1);
var G__21779 = null;
var G__21780 = 0;
var G__21781 = 0;
seq__21766 = G__21778;
chunk__21767 = G__21779;
count__21768 = G__21780;
i__21769 = G__21781;
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
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__21783 = paths;var G__21783__$1 = (((G__21783 == null))?null:cljs.core.vals(G__21783));var G__21783__$2 = (((G__21783__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$358,G__21783__$1));return G__21783__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__21784,owner){var map__21798 = p__21784;var map__21798__$1 = ((cljs.core.seq_QMARK_(map__21798))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21798):map__21798);var app_state = map__21798__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,cljs.core.constant$keyword$274);if(typeof clustermap.components.map.t21799 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t21799 = (function (selection,app_state,map__21798,owner,p__21784,map_component,meta21800){
this.selection = selection;
this.app_state = app_state;
this.map__21798 = map__21798;
this.owner = owner;
this.p__21784 = p__21784;
this.map_component = map_component;
this.meta21800 = meta21800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t21799.cljs$lang$type = true;
clustermap.components.map.t21799.cljs$lang$ctorStr = "clustermap.components.map/t21799";
clustermap.components.map.t21799.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t21799");
});
clustermap.components.map.t21799.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t21799.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__21802,next_state){var self__ = this;
var map__21803 = p__21802;var map__21803__$1 = ((cljs.core.seq_QMARK_(map__21803))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21803):map__21803);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21803__$1,cljs.core.constant$keyword$274);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21803__$1,cljs.core.constant$keyword$359);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21803__$1,cljs.core.constant$keyword$360);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21803__$1,cljs.core.constant$keyword$361);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21803__$1,cljs.core.constant$keyword$362);var this$__$1 = this;var fetch_boundaryline_fn = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$363);var map__21804 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21804__$1 = ((cljs.core.seq_QMARK_(map__21804))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21804):map__21804);var map__21805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,cljs.core.constant$keyword$364);var map__21805__$1 = ((cljs.core.seq_QMARK_(map__21805))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21805):map__21805);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21805__$1,cljs.core.constant$keyword$353);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21805__$1,cljs.core.constant$keyword$352);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21805__$1,cljs.core.constant$keyword$351);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,cljs.core.constant$keyword$365);clustermap.components.map.update_markers(leaflet_map,markers,next_locations);
clustermap.components.map.update_paths(fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection))
{if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(paths))))
{clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
} else
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$365,true);
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
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$365,false);
} else
{return null;
}
});
clustermap.components.map.t21799.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t21799.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__21806 = clustermap.components.map.create_map(node);var map__21806__$1 = ((cljs.core.seq_QMARK_(map__21806))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21806):map__21806);var map = map__21806__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,cljs.core.constant$keyword$357);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,cljs.core.constant$keyword$352);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21806__$1,cljs.core.constant$keyword$351);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$364,map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$366),cljs.core.assoc,cljs.core.constant$keyword$362,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__21807 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__21807__$1 = ((cljs.core.seq_QMARK_(map__21807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21807):map__21807);var map__21808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21807__$1,cljs.core.constant$keyword$364);var map__21808__$1 = ((cljs.core.seq_QMARK_(map__21808))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21808):map__21808);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,cljs.core.constant$keyword$353);leaflet_map.invalidateSize();
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(paths))))
{return clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
} else
{return clustermap.components.map.locate_map(leaflet_map);
}
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$362,leaflet_map.getZoom());
});
clustermap.components.map.t21799.prototype.om$core$IRender$ = true;
clustermap.components.map.t21799.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t21799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21801){var self__ = this;
var _21801__$1 = this;return self__.meta21800;
});
clustermap.components.map.t21799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21801,meta21800__$1){var self__ = this;
var _21801__$1 = this;return (new clustermap.components.map.t21799(self__.selection,self__.app_state,self__.map__21798,self__.owner,self__.p__21784,self__.map_component,meta21800__$1));
});
clustermap.components.map.__GT_t21799 = (function __GT_t21799(selection__$1,app_state__$1,map__21798__$2,owner__$1,p__21784__$1,map_component__$1,meta21800){return (new clustermap.components.map.t21799(selection__$1,app_state__$1,map__21798__$2,owner__$1,p__21784__$1,map_component__$1,meta21800));
});
}
return (new clustermap.components.map.t21799(selection,app_state,map__21798__$1,owner,p__21784,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$272,comm,cljs.core.constant$keyword$366,app_state,cljs.core.constant$keyword$363,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$361)], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
