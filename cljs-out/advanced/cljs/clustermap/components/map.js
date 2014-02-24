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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__22566 = config;var G__22566__$1 = (((G__22566 == null))?null:G__22566.components);var G__22566__$2 = (((G__22566__$1 == null))?null:G__22566__$1.map);var G__22566__$3 = (((G__22566__$2 == null))?null:G__22566__$2.api_key);return G__22566__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$418,m,cljs.core.constant$keyword$419,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$420,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$421,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__22567){
var m = cljs.core.first(arglist__22567);
var all_bounds = cljs.core.rest(arglist__22567);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$373,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$422,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$422,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs22569 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$278,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,site) : path_fn.call(null,cljs.core.constant$keyword$310,site)),cljs.core.constant$keyword$273,null,cljs.core.constant$keyword$267,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs22569))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,null,cljs.core.constant$keyword$267,"map-marker-popup-location-list"], null),attrs22569], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"map-marker-popup-location-list\">"),cljs.core.str(hiccups.runtime.render_html(attrs22569)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__22572 = location_sites;var G__22572__$1 = (((G__22572 == null))?null:cljs.core.first(G__22572));var G__22572__$2 = (((G__22572__$1 == null))?null:cljs.core.constant$keyword$423.cljs$core$IFn$_invoke$arity$1(G__22572__$1));var G__22572__$3 = (((G__22572__$2 == null))?null:cljs.core.reverse(G__22572__$2));var G__22572__$4 = (((G__22572__$3 == null))?null:cljs.core.clj__GT_js(G__22572__$3));return G__22572__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,"map-marker",cljs.core.constant$keyword$424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),cljs.core.constant$keyword$425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,28], null),cljs.core.constant$keyword$426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-22], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$427,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_22573_22574 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22573_22574;
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
,update_marker_keys));var _ = (function (){var seq__22579 = cljs.core.seq(remove_marker_keys);var chunk__22580 = null;var count__22581 = 0;var i__22582 = 0;while(true){
if((i__22582 < count__22581))
{var k = chunk__22580.cljs$core$IIndexed$_nth$arity$2(null,i__22582);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__22583 = seq__22579;
var G__22584 = chunk__22580;
var G__22585 = count__22581;
var G__22586 = (i__22582 + 1);
seq__22579 = G__22583;
chunk__22580 = G__22584;
count__22581 = G__22585;
i__22582 = G__22586;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22579);if(temp__4092__auto__)
{var seq__22579__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22579__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22579__$1);{
var G__22587 = cljs.core.chunk_rest(seq__22579__$1);
var G__22588 = c__4148__auto__;
var G__22589 = cljs.core.count(c__4148__auto__);
var G__22590 = 0;
seq__22579 = G__22587;
chunk__22580 = G__22588;
count__22581 = G__22589;
i__22582 = G__22590;
continue;
}
} else
{var k = cljs.core.first(seq__22579__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__22591 = cljs.core.next(seq__22579__$1);
var G__22592 = null;
var G__22593 = 0;
var G__22594 = 0;
seq__22579 = G__22591;
chunk__22580 = G__22592;
count__22581 = G__22593;
i__22582 = G__22594;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__22603 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__22603__$1 = ((cljs.core.seq_QMARK_(map__22603))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22603):map__22603);var clj_envelope = map__22603__$1;var vec__22604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,"coordinates");var vec__22605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22604,0,null);var vec__22606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22605,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,1,null);var vec__22607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22605,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22607,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22607,1,null);var vec__22608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22605,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22608,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22608,1,null);var vec__22609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22605,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,1,null);var vec__22610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22605,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22610,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22610,1,null);var inner = vec__22605;var coords = vec__22604;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$266,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$266,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__22611){var map__22613 = p__22611;var map__22613__$1 = ((cljs.core.seq_QMARK_(map__22613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22613):map__22613);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613__$1,cljs.core.constant$keyword$428);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613__$1,cljs.core.constant$keyword$292);if(cljs.core.truth_((function (){var and__3394__auto__ = selected;if(cljs.core.truth_(and__3394__auto__))
{return highlighted;
} else
{return and__3394__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$429,"#0000aa",cljs.core.constant$keyword$430,2,cljs.core.constant$keyword$431,1,cljs.core.constant$keyword$432,true,cljs.core.constant$keyword$433,0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$429,"#0000aa",cljs.core.constant$keyword$430,2,cljs.core.constant$keyword$431,1,cljs.core.constant$keyword$432,true,cljs.core.constant$keyword$433,0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$429,"#000000",cljs.core.constant$keyword$430,2,cljs.core.constant$keyword$431,1,cljs.core.constant$keyword$432,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$429,"#ff0000",cljs.core.constant$keyword$430,2,cljs.core.constant$keyword$431,0,cljs.core.constant$keyword$432,false,cljs.core.constant$keyword$433,0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__22614){var map__22616 = p__22614;var map__22616__$1 = ((cljs.core.seq_QMARK_(map__22616))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22616):map__22616);var path_attrs = map__22616__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,cljs.core.constant$keyword$292);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$273,boundaryline_id,cljs.core.constant$keyword$434,tolerance,cljs.core.constant$keyword$292,selected,cljs.core.constant$keyword$435,leaflet_path,cljs.core.constant$keyword$436,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__22618 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22618,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22618,1,null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$435.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__22619,path_attrs){var map__22622 = p__22619;var map__22622__$1 = ((cljs.core.seq_QMARK_(map__22622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22622):map__22622);var path = map__22622__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22622__$1,cljs.core.constant$keyword$273);var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__22623 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22623,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22623,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$434.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$435.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$435.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$437,cljs.core.constant$keyword$438),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$292,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$428,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$292,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$428,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__22630 = cljs.core.seq(delete_path_keys);var chunk__22631 = null;var count__22632 = 0;var i__22633 = 0;while(true){
if((i__22633 < count__22632))
{var k = chunk__22631.cljs$core$IIndexed$_nth$arity$2(null,i__22633);var temp__4090__auto___22636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___22636))
{var path_22637 = temp__4090__auto___22636;clustermap.components.map.delete_path(leaflet_map,path_22637);
} else
{}
{
var G__22638 = seq__22630;
var G__22639 = chunk__22631;
var G__22640 = count__22632;
var G__22641 = (i__22633 + 1);
seq__22630 = G__22638;
chunk__22631 = G__22639;
count__22632 = G__22640;
i__22633 = G__22641;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22630);if(temp__4092__auto__)
{var seq__22630__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22630__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22630__$1);{
var G__22642 = cljs.core.chunk_rest(seq__22630__$1);
var G__22643 = c__4148__auto__;
var G__22644 = cljs.core.count(c__4148__auto__);
var G__22645 = 0;
seq__22630 = G__22642;
chunk__22631 = G__22643;
count__22632 = G__22644;
i__22633 = G__22645;
continue;
}
} else
{var k = cljs.core.first(seq__22630__$1);var temp__4090__auto___22646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___22646))
{var path_22647 = temp__4090__auto___22646;clustermap.components.map.delete_path(leaflet_map,path_22647);
} else
{}
{
var G__22648 = cljs.core.next(seq__22630__$1);
var G__22649 = null;
var G__22650 = 0;
var G__22651 = 0;
seq__22630 = G__22648;
chunk__22631 = G__22649;
count__22632 = G__22650;
i__22633 = G__22651;
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
return (function (m,p__22634){var map__22635 = p__22634;var map__22635__$1 = ((cljs.core.seq_QMARK_(map__22635))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22635):map__22635);var path = map__22635__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635__$1,cljs.core.constant$keyword$273);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(paths))
{clustermap.components.map.locate_map(leaflet_map);
return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$439,true);
} else
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$439,false);
var temp__4090__auto__ = (function (){var G__22653 = cljs.core.select_keys(paths,path_selections);var G__22653__$1 = (((G__22653 == null))?null:cljs.core.vals(G__22653));var G__22653__$2 = (((G__22653__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$436,G__22653__$1));return G__22653__$2;
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
clustermap.components.map.map_component = (function map_component(p__22654,owner){var map__22674 = p__22654;var map__22674__$1 = ((cljs.core.seq_QMARK_(map__22674))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22674):map__22674);var app_state = map__22674__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22674__$1,cljs.core.constant$keyword$319);if(typeof clustermap.components.map.t22675 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t22675 = (function (selection,app_state,map__22674,owner,p__22654,map_component,meta22676){
this.selection = selection;
this.app_state = app_state;
this.map__22674 = map__22674;
this.owner = owner;
this.p__22654 = p__22654;
this.map_component = map_component;
this.meta22676 = meta22676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t22675.cljs$lang$type = true;
clustermap.components.map.t22675.cljs$lang$ctorStr = "clustermap.components.map/t22675";
clustermap.components.map.t22675.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t22675");
});
clustermap.components.map.t22675.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t22675.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__22678,p__22679){var self__ = this;
var map__22680 = p__22678;var map__22680__$1 = ((cljs.core.seq_QMARK_(map__22680))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22680):map__22680);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$319);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$440);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$441);var next_uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$442);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$324);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22680__$1,cljs.core.constant$keyword$443);var map__22681 = p__22679;var map__22681__$1 = ((cljs.core.seq_QMARK_(map__22681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22681):map__22681);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22681__$1,cljs.core.constant$keyword$444);var this$__$1 = this;var map__22682 = om.core.get_props(self__.owner);var map__22682__$1 = ((cljs.core.seq_QMARK_(map__22682))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22682):map__22682);var uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22682__$1,cljs.core.constant$keyword$442);var map__22683 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22683__$1 = ((cljs.core.seq_QMARK_(map__22683))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22683):map__22683);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.constant$keyword$320);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.constant$keyword$321);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.constant$keyword$445);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.constant$keyword$313);var map__22684 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22684__$1 = ((cljs.core.seq_QMARK_(map__22684))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22684):map__22684);var map__22685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22684__$1,cljs.core.constant$keyword$446);var map__22685__$1 = ((cljs.core.seq_QMARK_(map__22685))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22685):map__22685);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22685__$1,cljs.core.constant$keyword$421);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22685__$1,cljs.core.constant$keyword$420);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22685__$1,cljs.core.constant$keyword$419);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22685__$1,cljs.core.constant$keyword$418);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22684__$1,cljs.core.constant$keyword$439);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22684__$1,cljs.core.constant$keyword$444);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_uk_constituencies_rtree,uk_constituencies_rtree))
{leaflet_map.on("mousemove",(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first(hits);var highlight_path_ids = cljs.core.set(cljs.core.take(1,hit_path_ids));var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$444);if(cljs.core.truth_((function (){var and__3394__auto__ = highlight_hit;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids);
} else
{return and__3394__auto__;
}
})()))
{var G__22686_22693 = L.popup();G__22686_22693.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__22686_22693.setContent([cljs.core.str("<p>"),cljs.core.str((function (){var G__22687 = highlight_hit;var G__22687__$1 = (((G__22687 == null))?null:G__22687.properties);var G__22687__$2 = (((G__22687__$1 == null))?null:G__22687__$1.compact_name);return G__22687__$2;
})()),cljs.core.str("</p>")].join(''));
G__22686_22693.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$444,highlight_path_ids);
}));
leaflet_map.on("click",(function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,cljs.core.first(hit_path_ids)], null)], null));
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
clustermap.components.map.t22675.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t22675.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__22688 = clustermap.components.map.create_map(node);var map__22688__$1 = ((cljs.core.seq_QMARK_(map__22688))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22688):map__22688);var map = map__22688__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,cljs.core.constant$keyword$447);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,cljs.core.constant$keyword$419);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22688__$1,cljs.core.constant$keyword$418);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$446,map);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$444,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$448),cljs.core.assoc,cljs.core.constant$keyword$443,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__22689 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22689__$1 = ((cljs.core.seq_QMARK_(map__22689))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22689):map__22689);var map__22690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22689__$1,cljs.core.constant$keyword$446);var map__22690__$1 = ((cljs.core.seq_QMARK_(map__22690))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22690):map__22690);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,cljs.core.constant$keyword$421);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,cljs.core.constant$keyword$420);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$443,leaflet_map.getZoom());
});
clustermap.components.map.t22675.prototype.om$core$IRender$ = true;
clustermap.components.map.t22675.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t22675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22677){var self__ = this;
var _22677__$1 = this;return self__.meta22676;
});
clustermap.components.map.t22675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22677,meta22676__$1){var self__ = this;
var _22677__$1 = this;return (new clustermap.components.map.t22675(self__.selection,self__.app_state,self__.map__22674,self__.owner,self__.p__22654,self__.map_component,meta22676__$1));
});
clustermap.components.map.__GT_t22675 = (function __GT_t22675(selection__$1,app_state__$1,map__22674__$2,owner__$1,p__22654__$1,map_component__$1,meta22676){return (new clustermap.components.map.t22675(selection__$1,app_state__$1,map__22674__$2,owner__$1,p__22654__$1,map_component__$1,meta22676));
});
}
return (new clustermap.components.map.t22675(selection,app_state,map__22674__$1,owner,p__22654,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$448,app_state,cljs.core.constant$keyword$445,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$324)], null)], 0)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
