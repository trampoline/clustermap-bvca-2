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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__11934 = config;var G__11934__$1 = (((G__11934 == null))?null:G__11934.components);var G__11934__$2 = (((G__11934__$1 == null))?null:G__11934__$1.map);var G__11934__$3 = (((G__11934__$2 == null))?null:G__11934__$2.api_key);return G__11934__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$179,m,cljs.core.constant$keyword$180,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$181,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$182,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__11935){
var m = cljs.core.first(arglist__11935);
var all_bounds = cljs.core.rest(arglist__11935);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$183,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$183,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs11937 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,site) : path_fn.call(null,cljs.core.constant$keyword$77,site)),cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$34,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs11937))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$34,null], null),attrs11937], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul>"),cljs.core.str(hiccups.runtime.render_html(attrs11937)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__11940 = location_sites;var G__11940__$1 = (((G__11940 == null))?null:cljs.core.first(G__11940));var G__11940__$2 = (((G__11940__$1 == null))?null:cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(G__11940__$1));var G__11940__$3 = (((G__11940__$2 == null))?null:cljs.core.reverse(G__11940__$2));var G__11940__$4 = (((G__11940__$3 == null))?null:cljs.core.clj__GT_js(G__11940__$3));return G__11940__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_11941_11942 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11941_11942;
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
,update_marker_keys));var _ = (function (){var seq__11947 = cljs.core.seq(remove_marker_keys);var chunk__11948 = null;var count__11949 = 0;var i__11950 = 0;while(true){
if((i__11950 < count__11949))
{var k = chunk__11948.cljs$core$IIndexed$_nth$arity$2(null,i__11950);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__11951 = seq__11947;
var G__11952 = chunk__11948;
var G__11953 = count__11949;
var G__11954 = (i__11950 + 1);
seq__11947 = G__11951;
chunk__11948 = G__11952;
count__11949 = G__11953;
i__11950 = G__11954;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11947);if(temp__4092__auto__)
{var seq__11947__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11947__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__11947__$1);{
var G__11955 = cljs.core.chunk_rest(seq__11947__$1);
var G__11956 = c__4148__auto__;
var G__11957 = cljs.core.count(c__4148__auto__);
var G__11958 = 0;
seq__11947 = G__11955;
chunk__11948 = G__11956;
count__11949 = G__11957;
i__11950 = G__11958;
continue;
}
} else
{var k = cljs.core.first(seq__11947__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__11959 = cljs.core.next(seq__11947__$1);
var G__11960 = null;
var G__11961 = 0;
var G__11962 = 0;
seq__11947 = G__11959;
chunk__11948 = G__11960;
count__11949 = G__11961;
i__11950 = G__11962;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__11971 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__11971__$1 = ((cljs.core.seq_QMARK_(map__11971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11971):map__11971);var clj_envelope = map__11971__$1;var vec__11972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11971__$1,"coordinates");var vec__11973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11972,0,null);var vec__11974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11973,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11974,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11974,1,null);var vec__11975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11973,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11975,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11975,1,null);var vec__11976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11973,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,1,null);var vec__11977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11973,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11977,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11977,1,null);var vec__11978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11973,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11978,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11978,1,null);var inner = vec__11973;var coords = vec__11972;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$33,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$33,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(path,p__11979){var map__11981 = p__11979;var map__11981__$1 = ((cljs.core.seq_QMARK_(map__11981))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11981):map__11981);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11981__$1,cljs.core.constant$keyword$59);if(cljs.core.truth_(selected))
{return path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$136,"#0000ff",cljs.core.constant$keyword$185,3,cljs.core.constant$keyword$186,1,cljs.core.constant$keyword$187,0.3], null)));
} else
{return path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$136,"#ff0000",cljs.core.constant$keyword$185,3,cljs.core.constant$keyword$186,0,cljs.core.constant$keyword$187,0], null)));
}
});
clustermap.components.map.create_boundaryline_path = (function create_boundaryline_path(comm,boundaryline_id,leaflet_map,js_boundaryline,p__11982){var map__11984 = p__11982;var map__11984__$1 = ((cljs.core.seq_QMARK_(map__11984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11984):map__11984);var path_attrs = map__11984__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11984__$1,cljs.core.constant$keyword$59);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$188,tolerance,cljs.core.constant$keyword$59,selected,cljs.core.constant$keyword$189,leaflet_path,cljs.core.constant$keyword$190,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.create_paths = (function create_paths(comm,js_boundaryline_index,leaflet_map,paths_atom){if(cljs.core.empty_QMARK_(cljs.core.deref(paths_atom)))
{var temp__4092__auto__ = cljs.core.not_empty(Object.keys(js_boundaryline_index));if(cljs.core.truth_(temp__4092__auto__))
{var keys = temp__4092__auto__;return cljs.core.reset_BANG_(paths_atom,cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (boundaryline_id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,clustermap.components.map.create_boundaryline_path(comm,boundaryline_id,leaflet_map,(js_boundaryline_index[boundaryline_id]),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,false], null))], null);
}),keys)));
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.map.replace_boundaryline_path = (function replace_boundaryline_path(comm,boundaryline_id,leaflet_map,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_boundaryline_path(comm,boundaryline_id,leaflet_map,js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,path,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__11986 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11986,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11986,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$188.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_boundaryline_path(comm,boundaryline_id,leaflet_map,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$191,cljs.core.constant$keyword$192),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var select_path_keys = cljs.core.into(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(old_selection_path_keys,new_selection_path_keys),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,old_selection_path_keys));var deselect_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_selection_path_keys,new_selection_path_keys);var selected_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys){
return (function (p__11991){var vec__11992 = p__11991;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11992,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11992,1,null);return cljs.core.identity(v);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,true], null))], null);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys))
,select_path_keys)));var deselected_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths){
return (function (p__11993){var vec__11994 = p__11993;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11994,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11994,1,null);return cljs.core.identity(v);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,false], null))], null);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths))
,deselect_path_keys)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([paths,selected_paths,deselected_paths], 0)));
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(paths))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$193,true);
} else
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$193,false);
var temp__4092__auto__ = (function (){var G__11996 = cljs.core.select_keys(paths,path_selections);var G__11996__$1 = (((G__11996 == null))?null:cljs.core.vals(G__11996));var G__11996__$2 = (((G__11996__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$190,G__11996__$1));return G__11996__$2;
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
clustermap.components.map.map_component = (function map_component(p__11997,owner){var map__12012 = p__11997;var map__12012__$1 = ((cljs.core.seq_QMARK_(map__12012))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12012):map__12012);var app_state = map__12012__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12012__$1,cljs.core.constant$keyword$82);if(typeof clustermap.components.map.t12013 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t12013 = (function (selection,app_state,map__12012,owner,p__11997,map_component,meta12014){
this.selection = selection;
this.app_state = app_state;
this.map__12012 = map__12012;
this.owner = owner;
this.p__11997 = p__11997;
this.map_component = map_component;
this.meta12014 = meta12014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t12013.cljs$lang$type = true;
clustermap.components.map.t12013.cljs$lang$ctorStr = "clustermap.components.map/t12013";
clustermap.components.map.t12013.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t12013");
});
clustermap.components.map.t12013.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t12013.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__12016,next_state){var self__ = this;
var map__12017 = p__12016;var map__12017__$1 = ((cljs.core.seq_QMARK_(map__12017))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12017):map__12017);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12017__$1,cljs.core.constant$keyword$82);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12017__$1,cljs.core.constant$keyword$194);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12017__$1,cljs.core.constant$keyword$195);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12017__$1,cljs.core.constant$keyword$87);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12017__$1,cljs.core.constant$keyword$196);var this$__$1 = this;var map__12018 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__12018__$1 = ((cljs.core.seq_QMARK_(map__12018))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12018):map__12018);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12018__$1,cljs.core.constant$keyword$83);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12018__$1,cljs.core.constant$keyword$84);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12018__$1,cljs.core.constant$keyword$197);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12018__$1,cljs.core.constant$keyword$80);var map__12019 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__12019__$1 = ((cljs.core.seq_QMARK_(map__12019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12019):map__12019);var map__12020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12019__$1,cljs.core.constant$keyword$198);var map__12020__$1 = ((cljs.core.seq_QMARK_(map__12020))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12020):map__12020);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12020__$1,cljs.core.constant$keyword$182);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12020__$1,cljs.core.constant$keyword$181);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12020__$1,cljs.core.constant$keyword$180);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12020__$1,cljs.core.constant$keyword$179);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12019__$1,cljs.core.constant$keyword$193);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
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
clustermap.components.map.t12013.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t12013.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__12021 = clustermap.components.map.create_map(node);var map__12021__$1 = ((cljs.core.seq_QMARK_(map__12021))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12021):map__12021);var map = map__12021__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12021__$1,cljs.core.constant$keyword$199);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12021__$1,cljs.core.constant$keyword$180);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12021__$1,cljs.core.constant$keyword$179);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$198,map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$200),cljs.core.assoc,cljs.core.constant$keyword$196,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__12022 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__12022__$1 = ((cljs.core.seq_QMARK_(map__12022))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12022):map__12022);var map__12023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12022__$1,cljs.core.constant$keyword$198);var map__12023__$1 = ((cljs.core.seq_QMARK_(map__12023))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12023):map__12023);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,cljs.core.constant$keyword$182);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12023__$1,cljs.core.constant$keyword$181);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$196,leaflet_map.getZoom());
});
clustermap.components.map.t12013.prototype.om$core$IRender$ = true;
clustermap.components.map.t12013.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t12013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12015){var self__ = this;
var _12015__$1 = this;return self__.meta12014;
});
clustermap.components.map.t12013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12015,meta12014__$1){var self__ = this;
var _12015__$1 = this;return (new clustermap.components.map.t12013(self__.selection,self__.app_state,self__.map__12012,self__.owner,self__.p__11997,self__.map_component,meta12014__$1));
});
clustermap.components.map.__GT_t12013 = (function __GT_t12013(selection__$1,app_state__$1,map__12012__$2,owner__$1,p__11997__$1,map_component__$1,meta12014){return (new clustermap.components.map.t12013(selection__$1,app_state__$1,map__12012__$2,owner__$1,p__11997__$1,map_component__$1,meta12014));
});
}
return (new clustermap.components.map.t12013(selection,app_state,map__12012__$1,owner,p__11997,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$200,app_state,cljs.core.constant$keyword$197,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$87)], null)], 0)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
