// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
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
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__22439 = config;var G__22439__$1 = (((G__22439 == null))?null:G__22439.components);var G__22439__$2 = (((G__22439__$1 == null))?null:G__22439__$1.map);var G__22439__$3 = (((G__22439__$2 == null))?null:G__22439__$2.api_key);return G__22439__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$399,m,cljs.core.constant$keyword$400,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$401,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$402,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__22440){
var m = cljs.core.first(arglist__22440);
var all_bounds = cljs.core.rest(arglist__22440);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$358,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$403,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$403,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs22442 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<div"),cljs.core.str(" class=\"map-marker-popup-location-list\""),cljs.core.str(">"),cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$265,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,site) : path_fn.call(null,cljs.core.constant$keyword$297,site)),cljs.core.constant$keyword$260,null,cljs.core.constant$keyword$254,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>"),cljs.core.str("</div>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs22442))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,null,cljs.core.constant$keyword$254,null], null),attrs22442], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul>"),cljs.core.str(hiccups.runtime.render_html(attrs22442)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__22445 = location_sites;var G__22445__$1 = (((G__22445 == null))?null:cljs.core.first(G__22445));var G__22445__$2 = (((G__22445__$1 == null))?null:cljs.core.constant$keyword$404.cljs$core$IFn$_invoke$arity$1(G__22445__$1));var G__22445__$3 = (((G__22445__$2 == null))?null:cljs.core.reverse(G__22445__$2));var G__22445__$4 = (((G__22445__$3 == null))?null:cljs.core.clj__GT_js(G__22445__$3));return G__22445__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_22446_22447 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22446_22447;
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
,update_marker_keys));var _ = (function (){var seq__22452 = cljs.core.seq(remove_marker_keys);var chunk__22453 = null;var count__22454 = 0;var i__22455 = 0;while(true){
if((i__22455 < count__22454))
{var k = chunk__22453.cljs$core$IIndexed$_nth$arity$2(null,i__22455);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__22456 = seq__22452;
var G__22457 = chunk__22453;
var G__22458 = count__22454;
var G__22459 = (i__22455 + 1);
seq__22452 = G__22456;
chunk__22453 = G__22457;
count__22454 = G__22458;
i__22455 = G__22459;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22452);if(temp__4092__auto__)
{var seq__22452__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22452__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22452__$1);{
var G__22460 = cljs.core.chunk_rest(seq__22452__$1);
var G__22461 = c__4148__auto__;
var G__22462 = cljs.core.count(c__4148__auto__);
var G__22463 = 0;
seq__22452 = G__22460;
chunk__22453 = G__22461;
count__22454 = G__22462;
i__22455 = G__22463;
continue;
}
} else
{var k = cljs.core.first(seq__22452__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__22464 = cljs.core.next(seq__22452__$1);
var G__22465 = null;
var G__22466 = 0;
var G__22467 = 0;
seq__22452 = G__22464;
chunk__22453 = G__22465;
count__22454 = G__22466;
i__22455 = G__22467;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__22476 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__22476__$1 = ((cljs.core.seq_QMARK_(map__22476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22476):map__22476);var clj_envelope = map__22476__$1;var vec__22477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476__$1,"coordinates");var vec__22478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22477,0,null);var vec__22479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22478,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22479,1,null);var vec__22480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22478,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22480,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22480,1,null);var vec__22481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22478,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22481,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22481,1,null);var vec__22482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22478,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,1,null);var vec__22483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22478,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22483,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22483,1,null);var inner = vec__22478;var coords = vec__22477;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$253,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$253,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(path,p__22484){var map__22486 = p__22484;var map__22486__$1 = ((cljs.core.seq_QMARK_(map__22486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22486):map__22486);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486__$1,cljs.core.constant$keyword$279);if(cljs.core.truth_(selected))
{return path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$356,"#0000ff",cljs.core.constant$keyword$405,3,cljs.core.constant$keyword$406,1,cljs.core.constant$keyword$407,0.3], null)));
} else
{return path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$356,"#ff0000",cljs.core.constant$keyword$405,3,cljs.core.constant$keyword$406,0,cljs.core.constant$keyword$407,0], null)));
}
});
clustermap.components.map.create_boundaryline_path = (function create_boundaryline_path(comm,boundaryline_id,leaflet_map,js_boundaryline,p__22487){var map__22489 = p__22487;var map__22489__$1 = ((cljs.core.seq_QMARK_(map__22489))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22489):map__22489);var path_attrs = map__22489__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22489__$1,cljs.core.constant$keyword$279);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$408,tolerance,cljs.core.constant$keyword$279,selected,cljs.core.constant$keyword$409,leaflet_path,cljs.core.constant$keyword$410,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.create_paths = (function create_paths(comm,js_boundaryline_index,leaflet_map,paths_atom){if(cljs.core.empty_QMARK_(cljs.core.deref(paths_atom)))
{var temp__4092__auto__ = cljs.core.not_empty(Object.keys(js_boundaryline_index));if(cljs.core.truth_(temp__4092__auto__))
{var keys = temp__4092__auto__;return cljs.core.reset_BANG_(paths_atom,cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (boundaryline_id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,clustermap.components.map.create_boundaryline_path(comm,boundaryline_id,leaflet_map,(js_boundaryline_index[boundaryline_id]),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,false], null))], null);
}),keys)));
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.map.replace_boundaryline_path = (function replace_boundaryline_path(comm,boundaryline_id,leaflet_map,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_boundaryline_path(comm,boundaryline_id,leaflet_map,js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,path,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__22491 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22491,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22491,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$408.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_boundaryline_path(comm,boundaryline_id,leaflet_map,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$411,cljs.core.constant$keyword$412),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var select_path_keys = cljs.core.into(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(old_selection_path_keys,new_selection_path_keys),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,old_selection_path_keys));var deselect_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_selection_path_keys,new_selection_path_keys);var selected_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys){
return (function (p__22496){var vec__22497 = p__22496;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22497,1,null);return cljs.core.identity(v);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,true], null))], null);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys))
,select_path_keys)));var deselected_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths){
return (function (p__22498){var vec__22499 = p__22498;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499,1,null);return cljs.core.identity(v);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,false], null))], null);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths))
,deselect_path_keys)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([paths,selected_paths,deselected_paths], 0)));
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(paths))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$413,true);
} else
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$413,false);
var temp__4092__auto__ = (function (){var G__22501 = cljs.core.select_keys(paths,path_selections);var G__22501__$1 = (((G__22501 == null))?null:cljs.core.vals(G__22501));var G__22501__$2 = (((G__22501__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$410,G__22501__$1));return G__22501__$2;
})();if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__22502,owner){var map__22517 = p__22502;var map__22517__$1 = ((cljs.core.seq_QMARK_(map__22517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22517):map__22517);var app_state = map__22517__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,cljs.core.constant$keyword$303);if(typeof clustermap.components.map.t22518 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t22518 = (function (selection,app_state,map__22517,owner,p__22502,map_component,meta22519){
this.selection = selection;
this.app_state = app_state;
this.map__22517 = map__22517;
this.owner = owner;
this.p__22502 = p__22502;
this.map_component = map_component;
this.meta22519 = meta22519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t22518.cljs$lang$type = true;
clustermap.components.map.t22518.cljs$lang$ctorStr = "clustermap.components.map/t22518";
clustermap.components.map.t22518.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t22518");
});
clustermap.components.map.t22518.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t22518.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__22521,next_state){var self__ = this;
var map__22522 = p__22521;var map__22522__$1 = ((cljs.core.seq_QMARK_(map__22522))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22522):map__22522);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,cljs.core.constant$keyword$303);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,cljs.core.constant$keyword$414);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,cljs.core.constant$keyword$415);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,cljs.core.constant$keyword$308);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22522__$1,cljs.core.constant$keyword$416);var this$__$1 = this;var map__22523 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22523__$1 = ((cljs.core.seq_QMARK_(map__22523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22523):map__22523);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22523__$1,cljs.core.constant$keyword$304);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22523__$1,cljs.core.constant$keyword$305);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22523__$1,cljs.core.constant$keyword$417);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22523__$1,cljs.core.constant$keyword$300);var map__22524 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22524__$1 = ((cljs.core.seq_QMARK_(map__22524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22524):map__22524);var map__22525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22524__$1,cljs.core.constant$keyword$418);var map__22525__$1 = ((cljs.core.seq_QMARK_(map__22525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22525):map__22525);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.constant$keyword$402);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.constant$keyword$401);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.constant$keyword$400);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22525__$1,cljs.core.constant$keyword$399);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22524__$1,cljs.core.constant$keyword$413);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.create_paths(comm,next_uk_constituencies,leaflet_map,paths);
clustermap.components.map.update_paths(comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3406__auto__ = pan_pending;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t22518.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t22518.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__22526 = clustermap.components.map.create_map(node);var map__22526__$1 = ((cljs.core.seq_QMARK_(map__22526))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22526):map__22526);var map = map__22526__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.constant$keyword$419);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.constant$keyword$400);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22526__$1,cljs.core.constant$keyword$399);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$418,map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$420),cljs.core.assoc,cljs.core.constant$keyword$416,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__22527 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22527__$1 = ((cljs.core.seq_QMARK_(map__22527))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22527):map__22527);var map__22528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,cljs.core.constant$keyword$418);var map__22528__$1 = ((cljs.core.seq_QMARK_(map__22528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22528):map__22528);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528__$1,cljs.core.constant$keyword$402);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22528__$1,cljs.core.constant$keyword$401);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$416,leaflet_map.getZoom());
});
clustermap.components.map.t22518.prototype.om$core$IRender$ = true;
clustermap.components.map.t22518.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t22518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22520){var self__ = this;
var _22520__$1 = this;return self__.meta22519;
});
clustermap.components.map.t22518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22520,meta22519__$1){var self__ = this;
var _22520__$1 = this;return (new clustermap.components.map.t22518(self__.selection,self__.app_state,self__.map__22517,self__.owner,self__.p__22502,self__.map_component,meta22519__$1));
});
clustermap.components.map.__GT_t22518 = (function __GT_t22518(selection__$1,app_state__$1,map__22517__$2,owner__$1,p__22502__$1,map_component__$1,meta22519){return (new clustermap.components.map.t22518(selection__$1,app_state__$1,map__22517__$2,owner__$1,p__22502__$1,map_component__$1,meta22519));
});
}
return (new clustermap.components.map.t22518(selection,app_state,map__22517__$1,owner,p__22502,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$420,app_state,cljs.core.constant$keyword$417,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$308)], null)], 0)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
