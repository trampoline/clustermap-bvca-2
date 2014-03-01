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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__23069 = config;var G__23069__$1 = (((G__23069 == null))?null:G__23069.components);var G__23069__$2 = (((G__23069__$1 == null))?null:G__23069__$1.map);var G__23069__$3 = (((G__23069__$2 == null))?null:G__23069__$2.api_key);return G__23069__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$464,m,cljs.core.constant$keyword$465,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$466,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$467,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__23070){
var m = cljs.core.first(arglist__23070);
var all_bounds = cljs.core.rest(arglist__23070);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$421,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$468,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$468,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs23072 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$306,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$338,site) : path_fn.call(null,cljs.core.constant$keyword$338,site)),cljs.core.constant$keyword$301,null,cljs.core.constant$keyword$295,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs23072))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$301,null,cljs.core.constant$keyword$295,"map-marker-popup-location-list"], null),attrs23072], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"map-marker-popup-location-list\">"),cljs.core.str(hiccups.runtime.render_html(attrs23072)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__23075 = location_sites;var G__23075__$1 = (((G__23075 == null))?null:cljs.core.first(G__23075));var G__23075__$2 = (((G__23075__$1 == null))?null:cljs.core.constant$keyword$469.cljs$core$IFn$_invoke$arity$1(G__23075__$1));var G__23075__$3 = (((G__23075__$2 == null))?null:cljs.core.reverse(G__23075__$2));var G__23075__$4 = (((G__23075__$3 == null))?null:cljs.core.clj__GT_js(G__23075__$3));return G__23075__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,"map-marker",cljs.core.constant$keyword$470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),cljs.core.constant$keyword$471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,14], null),cljs.core.constant$keyword$472,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-8], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$473,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_23076_23077 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23076_23077;
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
,update_marker_keys));var _ = (function (){var seq__23082 = cljs.core.seq(remove_marker_keys);var chunk__23083 = null;var count__23084 = 0;var i__23085 = 0;while(true){
if((i__23085 < count__23084))
{var k = chunk__23083.cljs$core$IIndexed$_nth$arity$2(null,i__23085);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__23086 = seq__23082;
var G__23087 = chunk__23083;
var G__23088 = count__23084;
var G__23089 = (i__23085 + 1);
seq__23082 = G__23086;
chunk__23083 = G__23087;
count__23084 = G__23088;
i__23085 = G__23089;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23082);if(temp__4092__auto__)
{var seq__23082__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23082__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23082__$1);{
var G__23090 = cljs.core.chunk_rest(seq__23082__$1);
var G__23091 = c__4148__auto__;
var G__23092 = cljs.core.count(c__4148__auto__);
var G__23093 = 0;
seq__23082 = G__23090;
chunk__23083 = G__23091;
count__23084 = G__23092;
i__23085 = G__23093;
continue;
}
} else
{var k = cljs.core.first(seq__23082__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__23094 = cljs.core.next(seq__23082__$1);
var G__23095 = null;
var G__23096 = 0;
var G__23097 = 0;
seq__23082 = G__23094;
chunk__23083 = G__23095;
count__23084 = G__23096;
i__23085 = G__23097;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__23106 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__23106__$1 = ((cljs.core.seq_QMARK_(map__23106))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23106):map__23106);var clj_envelope = map__23106__$1;var vec__23107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23106__$1,"coordinates");var vec__23108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23107,0,null);var vec__23109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23108,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23109,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23109,1,null);var vec__23110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23108,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23110,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23110,1,null);var vec__23111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23108,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23111,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23111,1,null);var vec__23112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23108,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23112,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23112,1,null);var vec__23113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23108,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23113,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23113,1,null);var inner = vec__23108;var coords = vec__23107;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$294,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$294,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__23114){var map__23116 = p__23114;var map__23116__$1 = ((cljs.core.seq_QMARK_(map__23116))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23116):map__23116);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23116__$1,cljs.core.constant$keyword$474);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23116__$1,cljs.core.constant$keyword$320);if(cljs.core.truth_((function (){var and__3394__auto__ = selected;if(cljs.core.truth_(and__3394__auto__))
{return highlighted;
} else
{return and__3394__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$475,"#0000aa",cljs.core.constant$keyword$476,2,cljs.core.constant$keyword$477,1,cljs.core.constant$keyword$478,true,cljs.core.constant$keyword$479,0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$475,"#0000aa",cljs.core.constant$keyword$476,2,cljs.core.constant$keyword$477,1,cljs.core.constant$keyword$478,true,cljs.core.constant$keyword$479,0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$475,"#000000",cljs.core.constant$keyword$476,2,cljs.core.constant$keyword$477,1,cljs.core.constant$keyword$478,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$475,"#ff0000",cljs.core.constant$keyword$476,2,cljs.core.constant$keyword$477,0,cljs.core.constant$keyword$478,false,cljs.core.constant$keyword$479,0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__23117){var map__23119 = p__23117;var map__23119__$1 = ((cljs.core.seq_QMARK_(map__23119))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23119):map__23119);var path_attrs = map__23119__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23119__$1,cljs.core.constant$keyword$320);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$340,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$301,boundaryline_id,cljs.core.constant$keyword$480,tolerance,cljs.core.constant$keyword$320,selected,cljs.core.constant$keyword$481,leaflet_path,cljs.core.constant$keyword$482,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__23121 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23121,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23121,1,null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$481.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__23122,path_attrs){var map__23125 = p__23122;var map__23125__$1 = ((cljs.core.seq_QMARK_(map__23125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23125):map__23125);var path = map__23125__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23125__$1,cljs.core.constant$keyword$301);var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__23126 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23126,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23126,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$480.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$481.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$481.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$483,cljs.core.constant$keyword$484),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$474,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$474,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__23133 = cljs.core.seq(delete_path_keys);var chunk__23134 = null;var count__23135 = 0;var i__23136 = 0;while(true){
if((i__23136 < count__23135))
{var k = chunk__23134.cljs$core$IIndexed$_nth$arity$2(null,i__23136);var temp__4090__auto___23139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___23139))
{var path_23140 = temp__4090__auto___23139;clustermap.components.map.delete_path(leaflet_map,path_23140);
} else
{}
{
var G__23141 = seq__23133;
var G__23142 = chunk__23134;
var G__23143 = count__23135;
var G__23144 = (i__23136 + 1);
seq__23133 = G__23141;
chunk__23134 = G__23142;
count__23135 = G__23143;
i__23136 = G__23144;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23133);if(temp__4092__auto__)
{var seq__23133__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23133__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23133__$1);{
var G__23145 = cljs.core.chunk_rest(seq__23133__$1);
var G__23146 = c__4148__auto__;
var G__23147 = cljs.core.count(c__4148__auto__);
var G__23148 = 0;
seq__23133 = G__23145;
chunk__23134 = G__23146;
count__23135 = G__23147;
i__23136 = G__23148;
continue;
}
} else
{var k = cljs.core.first(seq__23133__$1);var temp__4090__auto___23149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___23149))
{var path_23150 = temp__4090__auto___23149;clustermap.components.map.delete_path(leaflet_map,path_23150);
} else
{}
{
var G__23151 = cljs.core.next(seq__23133__$1);
var G__23152 = null;
var G__23153 = 0;
var G__23154 = 0;
seq__23133 = G__23151;
chunk__23134 = G__23152;
count__23135 = G__23153;
i__23136 = G__23154;
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
return (function (m,p__23137){var map__23138 = p__23137;var map__23138__$1 = ((cljs.core.seq_QMARK_(map__23138))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23138):map__23138);var path = map__23138__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23138__$1,cljs.core.constant$keyword$301);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(paths))
{clustermap.components.map.locate_map(leaflet_map);
return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$485,true);
} else
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$485,false);
var temp__4090__auto__ = (function (){var G__23156 = cljs.core.select_keys(paths,path_selections);var G__23156__$1 = (((G__23156 == null))?null:cljs.core.vals(G__23156));var G__23156__$2 = (((G__23156__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$482,G__23156__$1));return G__23156__$2;
})();if(cljs.core.truth_(temp__4090__auto__))
{var bounds = temp__4090__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show(clustermap.components.map.initial_bounds);
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__23157,owner){var map__23177 = p__23157;var map__23177__$1 = ((cljs.core.seq_QMARK_(map__23177))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23177):map__23177);var app_state = map__23177__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23177__$1,cljs.core.constant$keyword$348);if(typeof clustermap.components.map.t23178 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t23178 = (function (selection,app_state,map__23177,owner,p__23157,map_component,meta23179){
this.selection = selection;
this.app_state = app_state;
this.map__23177 = map__23177;
this.owner = owner;
this.p__23157 = p__23157;
this.map_component = map_component;
this.meta23179 = meta23179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t23178.cljs$lang$type = true;
clustermap.components.map.t23178.cljs$lang$ctorStr = "clustermap.components.map/t23178";
clustermap.components.map.t23178.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t23178");
});
clustermap.components.map.t23178.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t23178.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__23181,p__23182){var self__ = this;
var map__23183 = p__23181;var map__23183__$1 = ((cljs.core.seq_QMARK_(map__23183))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23183):map__23183);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$348);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$486);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$487);var next_uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$488);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$396);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,cljs.core.constant$keyword$489);var map__23184 = p__23182;var map__23184__$1 = ((cljs.core.seq_QMARK_(map__23184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23184):map__23184);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23184__$1,cljs.core.constant$keyword$490);var this$__$1 = this;var map__23185 = om.core.get_props(self__.owner);var map__23185__$1 = ((cljs.core.seq_QMARK_(map__23185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23185):map__23185);var uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.constant$keyword$488);var map__23186 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__23186__$1 = ((cljs.core.seq_QMARK_(map__23186))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23186):map__23186);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23186__$1,cljs.core.constant$keyword$341);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23186__$1,cljs.core.constant$keyword$358);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23186__$1,cljs.core.constant$keyword$491);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23186__$1,cljs.core.constant$keyword$342);var map__23187 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__23187__$1 = ((cljs.core.seq_QMARK_(map__23187))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23187):map__23187);var map__23188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187__$1,cljs.core.constant$keyword$492);var map__23188__$1 = ((cljs.core.seq_QMARK_(map__23188))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23188):map__23188);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188__$1,cljs.core.constant$keyword$467);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188__$1,cljs.core.constant$keyword$466);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188__$1,cljs.core.constant$keyword$465);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188__$1,cljs.core.constant$keyword$464);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187__$1,cljs.core.constant$keyword$485);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187__$1,cljs.core.constant$keyword$490);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_uk_constituencies_rtree,uk_constituencies_rtree))
{leaflet_map.on("mousemove",(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first(hits);var highlight_path_ids = cljs.core.set(cljs.core.take(1,hit_path_ids));var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$490);if(cljs.core.truth_((function (){var and__3394__auto__ = highlight_hit;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids);
} else
{return and__3394__auto__;
}
})()))
{var G__23189_23196 = L.popup();G__23189_23196.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__23189_23196.setContent([cljs.core.str("<p>"),cljs.core.str((function (){var G__23190 = highlight_hit;var G__23190__$1 = (((G__23190 == null))?null:G__23190.properties);var G__23190__$2 = (((G__23190__$1 == null))?null:G__23190__$1.compact_name);return G__23190__$2;
})()),cljs.core.str("</p>")].join(''));
G__23189_23196.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$490,highlight_path_ids);
}));
leaflet_map.on("click",(function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$340,cljs.core.first(hit_path_ids)], null)], null));
}));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths(comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
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
clustermap.components.map.t23178.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t23178.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__23191 = clustermap.components.map.create_map(node);var map__23191__$1 = ((cljs.core.seq_QMARK_(map__23191))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23191):map__23191);var map = map__23191__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23191__$1,cljs.core.constant$keyword$493);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23191__$1,cljs.core.constant$keyword$465);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23191__$1,cljs.core.constant$keyword$464);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$492,map);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$490,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$494),cljs.core.assoc,cljs.core.constant$keyword$489,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__23192 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__23192__$1 = ((cljs.core.seq_QMARK_(map__23192))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23192):map__23192);var map__23193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23192__$1,cljs.core.constant$keyword$492);var map__23193__$1 = ((cljs.core.seq_QMARK_(map__23193))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23193):map__23193);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23193__$1,cljs.core.constant$keyword$467);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23193__$1,cljs.core.constant$keyword$466);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$489,leaflet_map.getZoom());
});
clustermap.components.map.t23178.prototype.om$core$IRender$ = true;
clustermap.components.map.t23178.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t23178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23180){var self__ = this;
var _23180__$1 = this;return self__.meta23179;
});
clustermap.components.map.t23178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23180,meta23179__$1){var self__ = this;
var _23180__$1 = this;return (new clustermap.components.map.t23178(self__.selection,self__.app_state,self__.map__23177,self__.owner,self__.p__23157,self__.map_component,meta23179__$1));
});
clustermap.components.map.__GT_t23178 = (function __GT_t23178(selection__$1,app_state__$1,map__23177__$2,owner__$1,p__23157__$1,map_component__$1,meta23179){return (new clustermap.components.map.t23178(selection__$1,app_state__$1,map__23177__$2,owner__$1,p__23157__$1,map_component__$1,meta23179));
});
}
return (new clustermap.components.map.t23178(selection,app_state,map__23177__$1,owner,p__23157,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$494,app_state,cljs.core.constant$keyword$491,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$396)], null)], 0)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
