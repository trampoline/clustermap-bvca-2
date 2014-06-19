// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.boundarylines');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('clustermap.rtree');
goog.require('om.dom');
goog.require('clustermap.rtree');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
clustermap.components.map.initial_bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null);
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(clustermap.components.map.initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3539__auto__ = (function (){var G__34763 = config;var G__34763__$1 = (((G__34763 == null))?null:G__34763.components);var G__34763__$2 = (((G__34763__$1 == null))?null:G__34763__$1.map);var G__34763__$3 = (((G__34763__$2 == null))?null:G__34763__$2.api_key);return G__34763__$3;
})();if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$811,m,cljs.core.constant$keyword$812,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$813,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$814,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3527__auto__ = s;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = w;if(cljs.core.truth_(and__3527__auto____$1))
{var and__3527__auto____$2 = n;if(cljs.core.truth_(and__3527__auto____$2))
{return e;
} else
{return and__3527__auto____$2;
}
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__34764){
var m = cljs.core.first(arglist__34764);
var all_bounds = cljs.core.rest(arglist__34764);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs34767 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$634,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$799,cljs.core.constant$keyword$698,site) : path_fn.call(null,cljs.core.constant$keyword$799,cljs.core.constant$keyword$698,site)),cljs.core.constant$keyword$614,null,cljs.core.constant$keyword$625,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs34768 = cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs34768))
{return ("<li"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,null,cljs.core.constant$keyword$625,null], null),attrs34768], 0))))+"></li>");
} else
{return ("<li>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs34768))+"</li>");
}
})())+"</a>");
}),location_sites);if(cljs.core.map_QMARK_(attrs34767))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,null,cljs.core.constant$keyword$625,"map-marker-popup-location-list"], null),attrs34767], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs34767))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__34771 = location_sites;var G__34771__$1 = (((G__34771 == null))?null:cljs.core.first(G__34771));var G__34771__$2 = (((G__34771__$1 == null))?null:cljs.core.constant$keyword$815.cljs$core$IFn$_invoke$arity$1(G__34771__$1));var G__34771__$3 = (((G__34771__$2 == null))?null:cljs.core.reverse(G__34771__$2));var G__34771__$4 = (((G__34771__$3 == null))?null:cljs.core.clj__GT_js(G__34771__$3));return G__34771__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$627,"map-marker",cljs.core.constant$keyword$816,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),cljs.core.constant$keyword$817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,14], null),cljs.core.constant$keyword$818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-8], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$819,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4466__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_34772_34773 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34772_34773,sb__4466__auto__,temp__4124__auto__){
return (function (x__4467__auto__){return sb__4466__auto__.append(x__4467__auto__);
});})(_STAR_print_fn_STAR_34772_34773,sb__4466__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34772_34773;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4466__auto__));
})())));
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
,update_marker_keys));var _ = (function (){var seq__34778 = cljs.core.seq(remove_marker_keys);var chunk__34779 = null;var count__34780 = 0;var i__34781 = 0;while(true){
if((i__34781 < count__34780))
{var k = chunk__34779.cljs$core$IIndexed$_nth$arity$2(null,i__34781);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__34782 = seq__34778;
var G__34783 = chunk__34779;
var G__34784 = count__34780;
var G__34785 = (i__34781 + 1);
seq__34778 = G__34782;
chunk__34779 = G__34783;
count__34780 = G__34784;
i__34781 = G__34785;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__34778);if(temp__4126__auto__)
{var seq__34778__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34778__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__34778__$1);{
var G__34786 = cljs.core.chunk_rest(seq__34778__$1);
var G__34787 = c__4295__auto__;
var G__34788 = cljs.core.count(c__4295__auto__);
var G__34789 = 0;
seq__34778 = G__34786;
chunk__34779 = G__34787;
count__34780 = G__34788;
i__34781 = G__34789;
continue;
}
} else
{var k = cljs.core.first(seq__34778__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__34790 = cljs.core.next(seq__34778__$1);
var G__34791 = null;
var G__34792 = 0;
var G__34793 = 0;
seq__34778 = G__34790;
chunk__34779 = G__34791;
count__34780 = G__34792;
i__34781 = G__34793;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__34802 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__34802__$1 = ((cljs.core.seq_QMARK_(map__34802))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34802):map__34802);var clj_envelope = map__34802__$1;var vec__34803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34802__$1,"coordinates");var vec__34804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34803,0,null);var vec__34805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805,1,null);var vec__34806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34806,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34806,1,null);var vec__34807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,1,null);var vec__34808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34808,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34808,1,null);var vec__34809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34809,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34809,1,null);var inner = vec__34804;var coords = vec__34803;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3539__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$611,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$611,7));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__34810){var map__34812 = p__34810;var map__34812__$1 = ((cljs.core.seq_QMARK_(map__34812))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34812):map__34812);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,cljs.core.constant$keyword$820);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34812__$1,cljs.core.constant$keyword$648);if(cljs.core.truth_((function (){var and__3527__auto__ = selected;if(cljs.core.truth_(and__3527__auto__))
{return highlighted;
} else
{return and__3527__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$821,"#0000aa",cljs.core.constant$keyword$822,2,cljs.core.constant$keyword$823,1,cljs.core.constant$keyword$824,true,cljs.core.constant$keyword$825,0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$821,"#0000aa",cljs.core.constant$keyword$822,2,cljs.core.constant$keyword$823,1,cljs.core.constant$keyword$824,true,cljs.core.constant$keyword$825,0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$821,"#000000",cljs.core.constant$keyword$822,2,cljs.core.constant$keyword$823,1,cljs.core.constant$keyword$824,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$821,"#ff0000",cljs.core.constant$keyword$822,2,cljs.core.constant$keyword$823,0,cljs.core.constant$keyword$824,false,cljs.core.constant$keyword$825,0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__34813){var map__34815 = p__34813;var map__34815__$1 = ((cljs.core.seq_QMARK_(map__34815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34815):map__34815);var path_attrs = map__34815__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34815__$1,cljs.core.constant$keyword$648);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__34815,map__34815__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$701,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__34815,map__34815__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$614,boundaryline_id,cljs.core.constant$keyword$826,tolerance,cljs.core.constant$keyword$648,selected,cljs.core.constant$keyword$827,leaflet_path,cljs.core.constant$keyword$828,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4124__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4124__auto__))
{var vec__34817 = temp__4124__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34817,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34817,1,null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$614.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__34818,path_attrs){var map__34821 = p__34818;var map__34821__$1 = ((cljs.core.seq_QMARK_(map__34821))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34821):map__34821);var path = map__34821__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34821__$1,cljs.core.constant$keyword$614);var temp__4124__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4124__auto__))
{var vec__34822 = temp__4124__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34822,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34822,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$826.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$829,cljs.core.constant$keyword$830),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$648,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$820,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$648,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$820,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__34829 = cljs.core.seq(delete_path_keys);var chunk__34830 = null;var count__34831 = 0;var i__34832 = 0;while(true){
if((i__34832 < count__34831))
{var k = chunk__34830.cljs$core$IIndexed$_nth$arity$2(null,i__34832);var temp__4124__auto___34835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___34835))
{var path_34836 = temp__4124__auto___34835;clustermap.components.map.delete_path(leaflet_map,path_34836);
} else
{}
{
var G__34837 = seq__34829;
var G__34838 = chunk__34830;
var G__34839 = count__34831;
var G__34840 = (i__34832 + 1);
seq__34829 = G__34837;
chunk__34830 = G__34838;
count__34831 = G__34839;
i__34832 = G__34840;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__34829);if(temp__4126__auto__)
{var seq__34829__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34829__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__34829__$1);{
var G__34841 = cljs.core.chunk_rest(seq__34829__$1);
var G__34842 = c__4295__auto__;
var G__34843 = cljs.core.count(c__4295__auto__);
var G__34844 = 0;
seq__34829 = G__34841;
chunk__34830 = G__34842;
count__34831 = G__34843;
i__34832 = G__34844;
continue;
}
} else
{var k = cljs.core.first(seq__34829__$1);var temp__4124__auto___34845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___34845))
{var path_34846 = temp__4124__auto___34845;clustermap.components.map.delete_path(leaflet_map,path_34846);
} else
{}
{
var G__34847 = cljs.core.next(seq__34829__$1);
var G__34848 = null;
var G__34849 = 0;
var G__34850 = 0;
seq__34829 = G__34847;
chunk__34830 = G__34848;
count__34831 = G__34849;
i__34832 = G__34850;
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
return (function (m,p__34833){var map__34834 = p__34833;var map__34834__$1 = ((cljs.core.seq_QMARK_(map__34834))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34834):map__34834);var path = map__34834__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34834__$1,cljs.core.constant$keyword$614);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(path_selections))
{return clustermap.components.map.locate_map(leaflet_map);
} else
{if(cljs.core.empty_QMARK_(paths))
{return (om.core.set_state.cljs$core$IFn$_invoke$arity$3 ? om.core.set_state.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$831,true) : om.core.set_state.call(null,owner,cljs.core.constant$keyword$831,true));
} else
{if(cljs.core.truth_(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$831)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$831,false);
} else
{}
var temp__4124__auto__ = (function (){var G__34852 = cljs.core.select_keys(paths,path_selections);var G__34852__$1 = (((G__34852 == null))?null:cljs.core.vals(G__34852));var G__34852__$2 = (((G__34852__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$828,G__34852__$1));var G__34852__$3 = (((G__34852__$2 == null))?null:cljs.core.not_empty(G__34852__$2));return G__34852__$3;
})();if(cljs.core.truth_(temp__4124__auto__))
{var bounds = temp__4124__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show(clustermap.components.map.initial_bounds);
}
}
}
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = (function (){var G__34856 = constituency;var G__34856__$1 = (((G__34856 == null))?null:G__34856.properties);var G__34856__$2 = (((G__34856__$1 == null))?null:G__34856__$1.id);return G__34856__$2;
})();var bl_name = (function (){var G__34857 = constituency;var G__34857__$1 = (((G__34857 == null))?null:G__34857.properties);var G__34857__$2 = (((G__34857__$1 == null))?null:G__34857__$1.compact_name);return G__34857__$2;
})();return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$634,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$799,cljs.core.constant$keyword$701,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$615,bl_id,cljs.core.constant$keyword$616,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$799,cljs.core.constant$keyword$701,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$615,bl_id,cljs.core.constant$keyword$616,bl_name], null))),cljs.core.constant$keyword$614,null,cljs.core.constant$keyword$625,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs34858 = bl_name;if(cljs.core.map_QMARK_(attrs34858))
{return ("<p"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,null,cljs.core.constant$keyword$625,"map-marker-constituency-name"], null),attrs34858], 0))))+" />");
} else
{return ("<p class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs34858))+"</p>");
}
})())+"</a>");
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__34859,owner){var map__34878 = p__34859;var map__34878__$1 = ((cljs.core.seq_QMARK_(map__34878))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34878):map__34878);var app_state = map__34878__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34878__$1,cljs.core.constant$keyword$761);if(typeof clustermap.components.map.t34879 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t34879 = (function (selection,app_state,map__34878,owner,p__34859,map_component,meta34880){
this.selection = selection;
this.app_state = app_state;
this.map__34878 = map__34878;
this.owner = owner;
this.p__34859 = p__34859;
this.map_component = map_component;
this.meta34880 = meta34880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t34879.cljs$lang$type = true;
clustermap.components.map.t34879.cljs$lang$ctorStr = "clustermap.components.map/t34879";
clustermap.components.map.t34879.cljs$lang$ctorPrWriter = ((function (map__34878,map__34878__$1,app_state,selection){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map/t34879");
});})(map__34878,map__34878__$1,app_state,selection))
;
clustermap.components.map.t34879.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t34879.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__34878,map__34878__$1,app_state,selection){
return (function (this$,p__34882,p__34883){var self__ = this;
var map__34884 = p__34882;var map__34884__$1 = ((cljs.core.seq_QMARK_(map__34884))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34884):map__34884);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34884__$1,cljs.core.constant$keyword$761);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34884__$1,cljs.core.constant$keyword$832);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34884__$1,cljs.core.constant$keyword$833);var next_uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34884__$1,cljs.core.constant$keyword$834);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34884__$1,cljs.core.constant$keyword$702);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34884__$1,cljs.core.constant$keyword$835);var map__34885 = p__34883;var map__34885__$1 = ((cljs.core.seq_QMARK_(map__34885))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34885):map__34885);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34885__$1,cljs.core.constant$keyword$836);var this$__$1 = this;var map__34886 = om.core.get_props(self__.owner);var map__34886__$1 = ((cljs.core.seq_QMARK_(map__34886))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34886):map__34886);var uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34886__$1,cljs.core.constant$keyword$834);var map__34887 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34887__$1 = ((cljs.core.seq_QMARK_(map__34887))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34887):map__34887);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34887__$1,cljs.core.constant$keyword$696);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34887__$1,cljs.core.constant$keyword$697);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34887__$1,cljs.core.constant$keyword$837);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34887__$1,cljs.core.constant$keyword$707);var map__34888 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34888__$1 = ((cljs.core.seq_QMARK_(map__34888))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34888):map__34888);var map__34889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34888__$1,cljs.core.constant$keyword$799);var map__34889__$1 = ((cljs.core.seq_QMARK_(map__34889))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34889):map__34889);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,cljs.core.constant$keyword$814);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,cljs.core.constant$keyword$813);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,cljs.core.constant$keyword$812);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,cljs.core.constant$keyword$811);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34888__$1,cljs.core.constant$keyword$831);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34888__$1,cljs.core.constant$keyword$836);var mousemove_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34888__$1,cljs.core.constant$keyword$838);var click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34888__$1,cljs.core.constant$keyword$839);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_uk_constituencies_rtree,uk_constituencies_rtree))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$838,((function (map__34886,map__34886__$1,uk_constituencies_rtree,map__34887,map__34887__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__34888,map__34888__$1,map__34889,map__34889__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__34884,map__34884__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__34885,map__34885__$1,next_path_highlights,map__34878,map__34878__$1,app_state,selection){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lat,lng,hits,map__34886,map__34886__$1,uk_constituencies_rtree,map__34887,map__34887__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__34888,map__34888__$1,map__34889,map__34889__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__34884,map__34884__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__34885,map__34885__$1,next_path_highlights,map__34878,map__34878__$1,app_state,selection){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits,map__34886,map__34886__$1,uk_constituencies_rtree,map__34887,map__34887__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__34888,map__34888__$1,map__34889,map__34889__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__34884,map__34884__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__34885,map__34885__$1,next_path_highlights,map__34878,map__34878__$1,app_state,selection))
,hits);var highlight_hit = cljs.core.first(hits);var highlight_path_ids = cljs.core.set(cljs.core.take(1,hit_path_ids));var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$836);if(cljs.core.truth_((function (){var and__3527__auto__ = highlight_hit;if(cljs.core.truth_(and__3527__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$840)));
} else
{return and__3527__auto__;
}
})()))
{var G__34890_34896 = L.popup();G__34890_34896.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__34890_34896.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__34890_34896.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$836,highlight_path_ids);
});})(map__34886,map__34886__$1,uk_constituencies_rtree,map__34887,map__34887__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__34888,map__34888__$1,map__34889,map__34889__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__34884,map__34884__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__34885,map__34885__$1,next_path_highlights,map__34878,map__34878__$1,app_state,selection))
);
if(cljs.core.truth_(mousemove_listener))
{leaflet_map.off("mousemove",mousemove_listener);
} else
{}
leaflet_map.on("mousemove",om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$838));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$839,((function (map__34886,map__34886__$1,uk_constituencies_rtree,map__34887,map__34887__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__34888,map__34888__$1,map__34889,map__34889__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__34884,map__34884__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__34885,map__34885__$1,next_path_highlights,map__34878,map__34878__$1,app_state,selection){
return (function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits,map__34886,map__34886__$1,uk_constituencies_rtree,map__34887,map__34887__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__34888,map__34888__$1,map__34889,map__34889__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__34884,map__34884__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__34885,map__34885__$1,next_path_highlights,map__34878,map__34878__$1,app_state,selection){
return (function (hit){return hit.properties.id;
});})(hits,map__34886,map__34886__$1,uk_constituencies_rtree,map__34887,map__34887__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__34888,map__34888__$1,map__34889,map__34889__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__34884,map__34884__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__34885,map__34885__$1,next_path_highlights,map__34878,map__34878__$1,app_state,selection))
,hits);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$701,cljs.core.first(hit_path_ids)], null)], null));
});})(map__34886,map__34886__$1,uk_constituencies_rtree,map__34887,map__34887__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__34888,map__34888__$1,map__34889,map__34889__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__34884,map__34884__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__34885,map__34885__$1,next_path_highlights,map__34878,map__34878__$1,app_state,selection))
);
if(cljs.core.truth_(click_listener))
{leaflet_map.off("click",click_listener);
} else
{}
leaflet_map.on("click",om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$839));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths(comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3539__auto__ = pan_pending;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});})(map__34878,map__34878__$1,app_state,selection))
;
clustermap.components.map.t34879.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t34879.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__34878,map__34878__$1,app_state,selection){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34891 = clustermap.components.map.create_map(node);var map__34891__$1 = ((cljs.core.seq_QMARK_(map__34891))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34891):map__34891);var map = map__34891__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,cljs.core.constant$keyword$666);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,cljs.core.constant$keyword$812);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,cljs.core.constant$keyword$811);om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$799,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$836,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",((function (node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection){
return (function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$841),cljs.core.assoc,cljs.core.constant$keyword$835,leaflet_map.getZoom());
});})(node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection))
);
leaflet_map.on("popupopen",((function (node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > 0))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$840,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection))
);
});})(node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection))
);
leaflet_map.on("popupclose",((function (node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$840,null);
});})(node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection))
);
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection){
return (function (e){var map__34892 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__34892__$1 = ((cljs.core.seq_QMARK_(map__34892))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34892):map__34892);var map__34893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892__$1,cljs.core.constant$keyword$799);var map__34893__$1 = ((cljs.core.seq_QMARK_(map__34893))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34893):map__34893);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34893__$1,cljs.core.constant$keyword$814);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34893__$1,cljs.core.constant$keyword$813);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
});})(node,map__34891,map__34891__$1,map,path,markers,leaflet_map,this$__$1,map__34878,map__34878__$1,app_state,selection))
);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$835,leaflet_map.getZoom());
});})(map__34878,map__34878__$1,app_state,selection))
;
clustermap.components.map.t34879.prototype.om$core$IRender$ = true;
clustermap.components.map.t34879.prototype.om$core$IRender$render$arity$1 = ((function (map__34878,map__34878__$1,app_state,selection){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__34878,map__34878__$1,app_state,selection))
;
clustermap.components.map.t34879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34878,map__34878__$1,app_state,selection){
return (function (_34881){var self__ = this;
var _34881__$1 = this;return self__.meta34880;
});})(map__34878,map__34878__$1,app_state,selection))
;
clustermap.components.map.t34879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34878,map__34878__$1,app_state,selection){
return (function (_34881,meta34880__$1){var self__ = this;
var _34881__$1 = this;return (new clustermap.components.map.t34879(self__.selection,self__.app_state,self__.map__34878,self__.owner,self__.p__34859,self__.map_component,meta34880__$1));
});})(map__34878,map__34878__$1,app_state,selection))
;
clustermap.components.map.__GT_t34879 = ((function (map__34878,map__34878__$1,app_state,selection){
return (function __GT_t34879(selection__$1,app_state__$1,map__34878__$2,owner__$1,p__34859__$1,map_component__$1,meta34880){return (new clustermap.components.map.t34879(selection__$1,app_state__$1,map__34878__$2,owner__$1,p__34859__$1,map_component__$1,meta34880));
});})(map__34878,map__34878__$1,app_state,selection))
;
}
return (new clustermap.components.map.t34879(selection,app_state,map__34878__$1,owner,p__34859,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$691,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$841,app_state,cljs.core.constant$keyword$837,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$702)], null)], 0)),cljs.core.constant$keyword$694,document.getElementById(elem_id)], null));
});
