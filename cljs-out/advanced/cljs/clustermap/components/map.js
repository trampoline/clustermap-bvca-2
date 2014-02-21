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
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__22575 = config;var G__22575__$1 = (((G__22575 == null))?null:G__22575.components);var G__22575__$2 = (((G__22575__$1 == null))?null:G__22575__$1.map);var G__22575__$3 = (((G__22575__$2 == null))?null:G__22575__$2.api_key);return G__22575__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$407,m,cljs.core.constant$keyword$408,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$409,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$410,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__22576){
var m = cljs.core.first(arglist__22576);
var all_bounds = cljs.core.rest(arglist__22576);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$362,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$411,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$411,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs22578 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<div"),cljs.core.str(" class=\"map-marker-popup-location-list\""),cljs.core.str(">"),cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$271,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,site) : path_fn.call(null,cljs.core.constant$keyword$303,site)),cljs.core.constant$keyword$266,null,cljs.core.constant$keyword$260,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>"),cljs.core.str("</div>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs22578))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,null,cljs.core.constant$keyword$260,null], null),attrs22578], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul>"),cljs.core.str(hiccups.runtime.render_html(attrs22578)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__22581 = location_sites;var G__22581__$1 = (((G__22581 == null))?null:cljs.core.first(G__22581));var G__22581__$2 = (((G__22581__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__22581__$1));var G__22581__$3 = (((G__22581__$2 == null))?null:cljs.core.reverse(G__22581__$2));var G__22581__$4 = (((G__22581__$3 == null))?null:cljs.core.clj__GT_js(G__22581__$3));return G__22581__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_22582_22583 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22582_22583;
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
,update_marker_keys));var _ = (function (){var seq__22588 = cljs.core.seq(remove_marker_keys);var chunk__22589 = null;var count__22590 = 0;var i__22591 = 0;while(true){
if((i__22591 < count__22590))
{var k = chunk__22589.cljs$core$IIndexed$_nth$arity$2(null,i__22591);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__22592 = seq__22588;
var G__22593 = chunk__22589;
var G__22594 = count__22590;
var G__22595 = (i__22591 + 1);
seq__22588 = G__22592;
chunk__22589 = G__22593;
count__22590 = G__22594;
i__22591 = G__22595;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22588);if(temp__4092__auto__)
{var seq__22588__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22588__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22588__$1);{
var G__22596 = cljs.core.chunk_rest(seq__22588__$1);
var G__22597 = c__4148__auto__;
var G__22598 = cljs.core.count(c__4148__auto__);
var G__22599 = 0;
seq__22588 = G__22596;
chunk__22589 = G__22597;
count__22590 = G__22598;
i__22591 = G__22599;
continue;
}
} else
{var k = cljs.core.first(seq__22588__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__22600 = cljs.core.next(seq__22588__$1);
var G__22601 = null;
var G__22602 = 0;
var G__22603 = 0;
seq__22588 = G__22600;
chunk__22589 = G__22601;
count__22590 = G__22602;
i__22591 = G__22603;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__22612 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__22612__$1 = ((cljs.core.seq_QMARK_(map__22612))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22612):map__22612);var clj_envelope = map__22612__$1;var vec__22613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22612__$1,"coordinates");var vec__22614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22613,0,null);var vec__22615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22614,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22615,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22615,1,null);var vec__22616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22614,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22616,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22616,1,null);var vec__22617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22614,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22617,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22617,1,null);var vec__22618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22614,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22618,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22618,1,null);var vec__22619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22614,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22619,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22619,1,null);var inner = vec__22614;var coords = vec__22613;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$259,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$259,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__22620){var map__22622 = p__22620;var map__22622__$1 = ((cljs.core.seq_QMARK_(map__22622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22622):map__22622);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22622__$1,cljs.core.constant$keyword$413);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22622__$1,cljs.core.constant$keyword$285);if(cljs.core.truth_((function (){var and__3394__auto__ = selected;if(cljs.core.truth_(and__3394__auto__))
{return highlighted;
} else
{return and__3394__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$414,"#0000ff",cljs.core.constant$keyword$415,3,cljs.core.constant$keyword$416,1,cljs.core.constant$keyword$417,true,cljs.core.constant$keyword$418,0.3], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$414,"#0000ff",cljs.core.constant$keyword$415,3,cljs.core.constant$keyword$416,1,cljs.core.constant$keyword$417,true,cljs.core.constant$keyword$418,0.3], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$414,"#000000",cljs.core.constant$keyword$415,3,cljs.core.constant$keyword$416,1,cljs.core.constant$keyword$417,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$414,"#ff0000",cljs.core.constant$keyword$415,3,cljs.core.constant$keyword$416,0,cljs.core.constant$keyword$417,false,cljs.core.constant$keyword$418,0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__22623){var map__22625 = p__22623;var map__22625__$1 = ((cljs.core.seq_QMARK_(map__22625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22625):map__22625);var path_attrs = map__22625__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,cljs.core.constant$keyword$285);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$266,boundaryline_id,cljs.core.constant$keyword$419,tolerance,cljs.core.constant$keyword$285,selected,cljs.core.constant$keyword$420,leaflet_path,cljs.core.constant$keyword$421,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__22627 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22627,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22627,1,null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__22628,path_attrs){var map__22631 = p__22628;var map__22631__$1 = ((cljs.core.seq_QMARK_(map__22631))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22631):map__22631);var path = map__22631__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22631__$1,cljs.core.constant$keyword$266);var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__22632 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22632,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22632,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$419.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$422,cljs.core.constant$keyword$423),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$413,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$413,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__22639 = cljs.core.seq(delete_path_keys);var chunk__22640 = null;var count__22641 = 0;var i__22642 = 0;while(true){
if((i__22642 < count__22641))
{var k = chunk__22640.cljs$core$IIndexed$_nth$arity$2(null,i__22642);var temp__4090__auto___22645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___22645))
{var path_22646 = temp__4090__auto___22645;clustermap.components.map.delete_path(leaflet_map,path_22646);
} else
{}
{
var G__22647 = seq__22639;
var G__22648 = chunk__22640;
var G__22649 = count__22641;
var G__22650 = (i__22642 + 1);
seq__22639 = G__22647;
chunk__22640 = G__22648;
count__22641 = G__22649;
i__22642 = G__22650;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22639);if(temp__4092__auto__)
{var seq__22639__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22639__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22639__$1);{
var G__22651 = cljs.core.chunk_rest(seq__22639__$1);
var G__22652 = c__4148__auto__;
var G__22653 = cljs.core.count(c__4148__auto__);
var G__22654 = 0;
seq__22639 = G__22651;
chunk__22640 = G__22652;
count__22641 = G__22653;
i__22642 = G__22654;
continue;
}
} else
{var k = cljs.core.first(seq__22639__$1);var temp__4090__auto___22655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___22655))
{var path_22656 = temp__4090__auto___22655;clustermap.components.map.delete_path(leaflet_map,path_22656);
} else
{}
{
var G__22657 = cljs.core.next(seq__22639__$1);
var G__22658 = null;
var G__22659 = 0;
var G__22660 = 0;
seq__22639 = G__22657;
chunk__22640 = G__22658;
count__22641 = G__22659;
i__22642 = G__22660;
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
return (function (m,p__22643){var map__22644 = p__22643;var map__22644__$1 = ((cljs.core.seq_QMARK_(map__22644))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22644):map__22644);var path = map__22644__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22644__$1,cljs.core.constant$keyword$266);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(paths))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$424,true);
} else
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$424,false);
var temp__4092__auto__ = (function (){var G__22662 = cljs.core.select_keys(paths,path_selections);var G__22662__$1 = (((G__22662 == null))?null:cljs.core.vals(G__22662));var G__22662__$2 = (((G__22662__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$421,G__22662__$1));return G__22662__$2;
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
clustermap.components.map.map_component = (function map_component(p__22663,owner){var map__22683 = p__22663;var map__22683__$1 = ((cljs.core.seq_QMARK_(map__22683))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22683):map__22683);var app_state = map__22683__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,cljs.core.constant$keyword$309);if(typeof clustermap.components.map.t22684 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t22684 = (function (selection,app_state,map__22683,owner,p__22663,map_component,meta22685){
this.selection = selection;
this.app_state = app_state;
this.map__22683 = map__22683;
this.owner = owner;
this.p__22663 = p__22663;
this.map_component = map_component;
this.meta22685 = meta22685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t22684.cljs$lang$type = true;
clustermap.components.map.t22684.cljs$lang$ctorStr = "clustermap.components.map/t22684";
clustermap.components.map.t22684.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t22684");
});
clustermap.components.map.t22684.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t22684.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__22687,p__22688){var self__ = this;
var map__22689 = p__22687;var map__22689__$1 = ((cljs.core.seq_QMARK_(map__22689))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22689):map__22689);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22689__$1,cljs.core.constant$keyword$309);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22689__$1,cljs.core.constant$keyword$425);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22689__$1,cljs.core.constant$keyword$426);var next_uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22689__$1,cljs.core.constant$keyword$427);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22689__$1,cljs.core.constant$keyword$314);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22689__$1,cljs.core.constant$keyword$428);var map__22690 = p__22688;var map__22690__$1 = ((cljs.core.seq_QMARK_(map__22690))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22690):map__22690);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,cljs.core.constant$keyword$429);var this$__$1 = this;var map__22691 = om.core.get_props(self__.owner);var map__22691__$1 = ((cljs.core.seq_QMARK_(map__22691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22691):map__22691);var uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22691__$1,cljs.core.constant$keyword$427);var map__22692 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22692__$1 = ((cljs.core.seq_QMARK_(map__22692))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22692):map__22692);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,cljs.core.constant$keyword$310);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,cljs.core.constant$keyword$311);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,cljs.core.constant$keyword$430);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22692__$1,cljs.core.constant$keyword$306);var map__22693 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22693__$1 = ((cljs.core.seq_QMARK_(map__22693))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22693):map__22693);var map__22694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693__$1,cljs.core.constant$keyword$431);var map__22694__$1 = ((cljs.core.seq_QMARK_(map__22694))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22694):map__22694);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22694__$1,cljs.core.constant$keyword$410);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22694__$1,cljs.core.constant$keyword$409);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22694__$1,cljs.core.constant$keyword$408);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22694__$1,cljs.core.constant$keyword$407);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693__$1,cljs.core.constant$keyword$424);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22693__$1,cljs.core.constant$keyword$429);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_uk_constituencies_rtree,uk_constituencies_rtree))
{leaflet_map.on("mousemove",(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first(hits);var highlight_path_ids = cljs.core.set(cljs.core.take(1,hit_path_ids));var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$429);if(cljs.core.truth_((function (){var and__3394__auto__ = highlight_hit;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids);
} else
{return and__3394__auto__;
}
})()))
{var G__22695_22702 = L.popup();G__22695_22702.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__22695_22702.setContent([cljs.core.str("<p>"),cljs.core.str((function (){var G__22696 = highlight_hit;var G__22696__$1 = (((G__22696 == null))?null:G__22696.properties);var G__22696__$2 = (((G__22696__$1 == null))?null:G__22696__$1.compact_name);return G__22696__$2;
})()),cljs.core.str("</p>")].join(''));
G__22695_22702.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$429,highlight_path_ids);
}));
leaflet_map.on("click",(function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,cljs.core.first(hit_path_ids)], null)], null));
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
clustermap.components.map.t22684.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t22684.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__22697 = clustermap.components.map.create_map(node);var map__22697__$1 = ((cljs.core.seq_QMARK_(map__22697))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22697):map__22697);var map = map__22697__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,cljs.core.constant$keyword$432);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,cljs.core.constant$keyword$408);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,cljs.core.constant$keyword$407);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$431,map);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$429,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$433),cljs.core.assoc,cljs.core.constant$keyword$428,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__22698 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22698__$1 = ((cljs.core.seq_QMARK_(map__22698))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22698):map__22698);var map__22699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22698__$1,cljs.core.constant$keyword$431);var map__22699__$1 = ((cljs.core.seq_QMARK_(map__22699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22699):map__22699);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22699__$1,cljs.core.constant$keyword$410);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22699__$1,cljs.core.constant$keyword$409);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$428,leaflet_map.getZoom());
});
clustermap.components.map.t22684.prototype.om$core$IRender$ = true;
clustermap.components.map.t22684.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t22684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22686){var self__ = this;
var _22686__$1 = this;return self__.meta22685;
});
clustermap.components.map.t22684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22686,meta22685__$1){var self__ = this;
var _22686__$1 = this;return (new clustermap.components.map.t22684(self__.selection,self__.app_state,self__.map__22683,self__.owner,self__.p__22663,self__.map_component,meta22685__$1));
});
clustermap.components.map.__GT_t22684 = (function __GT_t22684(selection__$1,app_state__$1,map__22683__$2,owner__$1,p__22663__$1,map_component__$1,meta22685){return (new clustermap.components.map.t22684(selection__$1,app_state__$1,map__22683__$2,owner__$1,p__22663__$1,map_component__$1,meta22685));
});
}
return (new clustermap.components.map.t22684(selection,app_state,map__22683__$1,owner,p__22663,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$433,app_state,cljs.core.constant$keyword$430,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$314)], null)], 0)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
