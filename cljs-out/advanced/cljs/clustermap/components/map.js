// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
/**
* convert a Leaflet LatLngBounds object into nested-array form
*/
clustermap.components.map.bounds_array = (function bounds_array(bounds){if((bounds instanceof L.LatLngBounds))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getSouth(),bounds.getWest()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds.getNorth(),bounds.getEast()], null)], null);
} else
{return bounds;
}
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3531__auto__ = s;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = w;if(cljs.core.truth_(and__3531__auto____$1))
{var and__3531__auto____$2 = n;if(cljs.core.truth_(and__3531__auto____$2))
{return e;
} else
{return and__3531__auto____$2;
}
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js(initial_bounds),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__36795 = config;var G__36795__$1 = (((G__36795 == null))?null:G__36795.components);var G__36795__$2 = (((G__36795__$1 == null))?null:G__36795__$1.map);var G__36795__$3 = (((G__36795__$2 == null))?null:G__36795__$2.api_key);return G__36795__$3;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not(config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1049,m,cljs.core.constant$keyword$1050,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1051,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$1052,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__36796){
var m = cljs.core.first(arglist__36796);
var all_bounds = cljs.core.rest(arglist__36796);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs36798 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$816,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$980,cljs.core.constant$keyword$880,site) : path_fn.call(null,cljs.core.constant$keyword$980,cljs.core.constant$keyword$880,site)),cljs.core.constant$keyword$797,null,cljs.core.constant$keyword$808,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(cljs.core.constant$keyword$825.cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_(attrs36798))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,null,cljs.core.constant$keyword$808,"map-marker-popup-location-list"], null),attrs36798], 0))))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs36798))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__36801 = location_sites;var G__36801__$1 = (((G__36801 == null))?null:cljs.core.first(G__36801));var G__36801__$2 = (((G__36801__$1 == null))?null:cljs.core.constant$keyword$1053.cljs$core$IFn$_invoke$arity$1(G__36801__$1));var G__36801__$3 = (((G__36801__$2 == null))?null:cljs.core.reverse(G__36801__$2));var G__36801__$4 = (((G__36801__$3 == null))?null:cljs.core.clj__GT_js(G__36801__$3));return G__36801__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$810,"map-marker",cljs.core.constant$keyword$1054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),cljs.core.constant$keyword$1055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),cljs.core.constant$keyword$1056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,icon], null)));var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_36802_36803 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_36802_36803,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_36802_36803,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36802_36803;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4470__auto__));
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
,update_marker_keys));var _ = (function (){var seq__36808 = cljs.core.seq(remove_marker_keys);var chunk__36809 = null;var count__36810 = (0);var i__36811 = (0);while(true){
if((i__36811 < count__36810))
{var k = chunk__36809.cljs$core$IIndexed$_nth$arity$2(null,i__36811);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__36812 = seq__36808;
var G__36813 = chunk__36809;
var G__36814 = count__36810;
var G__36815 = (i__36811 + (1));
seq__36808 = G__36812;
chunk__36809 = G__36813;
count__36810 = G__36814;
i__36811 = G__36815;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__36808);if(temp__4126__auto__)
{var seq__36808__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36808__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__36808__$1);{
var G__36816 = cljs.core.chunk_rest(seq__36808__$1);
var G__36817 = c__4299__auto__;
var G__36818 = cljs.core.count(c__4299__auto__);
var G__36819 = (0);
seq__36808 = G__36816;
chunk__36809 = G__36817;
count__36810 = G__36818;
i__36811 = G__36819;
continue;
}
} else
{var k = cljs.core.first(seq__36808__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__36820 = cljs.core.next(seq__36808__$1);
var G__36821 = null;
var G__36822 = (0);
var G__36823 = (0);
seq__36808 = G__36820;
chunk__36809 = G__36821;
count__36810 = G__36822;
i__36811 = G__36823;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__36832 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__36832__$1 = ((cljs.core.seq_QMARK_(map__36832))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36832):map__36832);var clj_envelope = map__36832__$1;var vec__36833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36832__$1,"coordinates");var vec__36834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36833,(0),null);var vec__36835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36834,(0),null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835,(0),null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36835,(1),null);var vec__36836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36834,(1),null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36836,(0),null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36836,(1),null);var vec__36837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36834,(2),null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36837,(0),null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36837,(1),null);var vec__36838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36834,(3),null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(0),null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36838,(1),null);var vec__36839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36834,(4),null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36839,(0),null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36839,(1),null);var inner = vec__36834;var coords = vec__36833;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__36840){var map__36842 = p__36840;var map__36842__$1 = ((cljs.core.seq_QMARK_(map__36842))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36842):map__36842);var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36842__$1,cljs.core.constant$keyword$1058);var highlighted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36842__$1,cljs.core.constant$keyword$1059);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36842__$1,cljs.core.constant$keyword$831);if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
{return highlighted;
} else
{return and__3531__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1060,fill_color,cljs.core.constant$keyword$1061,(2),cljs.core.constant$keyword$1062,(1),cljs.core.constant$keyword$1063,true,cljs.core.constant$keyword$1064,0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1060,fill_color,cljs.core.constant$keyword$1061,(2),cljs.core.constant$keyword$1062,(1),cljs.core.constant$keyword$1063,true,cljs.core.constant$keyword$1064,0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1060,fill_color,cljs.core.constant$keyword$1061,(2),cljs.core.constant$keyword$1062,(1),cljs.core.constant$keyword$1063,false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1060,fill_color,cljs.core.constant$keyword$1061,(2),cljs.core.constant$keyword$1062,(0),cljs.core.constant$keyword$1063,false,cljs.core.constant$keyword$1064,(0)], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__36843){var map__36845 = p__36843;var map__36845__$1 = ((cljs.core.seq_QMARK_(map__36845))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36845):map__36845);var path_attrs = map__36845__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36845__$1,cljs.core.constant$keyword$831);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__36845,map__36845__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$883,boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__36845,map__36845__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$797,boundaryline_id,cljs.core.constant$keyword$1065,tolerance,cljs.core.constant$keyword$831,selected,cljs.core.constant$keyword$1066,leaflet_path,cljs.core.constant$keyword$1067,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,leaflet_map,boundaryline_id,path_attrs){var temp__4124__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$2 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$2(boundaryline_id,leaflet_map.getZoom()) : fetch_boundaryline_fn.call(null,boundaryline_id,leaflet_map.getZoom()));if(cljs.core.truth_(temp__4124__auto__))
{var vec__36847 = temp__4124__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36847,(1),null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$1066.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,leaflet_map,p__36848,path_attrs){var map__36851 = p__36848;var map__36851__$1 = ((cljs.core.seq_QMARK_(map__36851))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36851):map__36851);var path = map__36851__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36851__$1,cljs.core.constant$keyword$797);var temp__4124__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$2 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$2(boundaryline_id,leaflet_map.getZoom()) : fetch_boundaryline_fn.call(null,boundaryline_id,leaflet_map.getZoom()));if(cljs.core.truth_(temp__4124__auto__))
{var vec__36852 = temp__4124__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36852,(0),null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36852,(1),null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$1065.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$1066.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$1066.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.keys(new_selection_paths));var live_path_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,live_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$831,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1058,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1059,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$831,cljs.core.contains_QMARK_(new_selection_path_keys,k),cljs.core.constant$keyword$1058,(new_selection_paths.cljs$core$IFn$_invoke$arity$1 ? new_selection_paths.cljs$core$IFn$_invoke$arity$1(k) : new_selection_paths.call(null,k)),cljs.core.constant$keyword$1059,cljs.core.contains_QMARK_(new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__36859 = cljs.core.seq(delete_path_keys);var chunk__36860 = null;var count__36861 = (0);var i__36862 = (0);while(true){
if((i__36862 < count__36861))
{var k = chunk__36860.cljs$core$IIndexed$_nth$arity$2(null,i__36862);var temp__4124__auto___36865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___36865))
{var path_36866 = temp__4124__auto___36865;clustermap.components.map.delete_path(leaflet_map,path_36866);
} else
{}
{
var G__36867 = seq__36859;
var G__36868 = chunk__36860;
var G__36869 = count__36861;
var G__36870 = (i__36862 + (1));
seq__36859 = G__36867;
chunk__36860 = G__36868;
count__36861 = G__36869;
i__36862 = G__36870;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__36859);if(temp__4126__auto__)
{var seq__36859__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__36859__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__36859__$1);{
var G__36871 = cljs.core.chunk_rest(seq__36859__$1);
var G__36872 = c__4299__auto__;
var G__36873 = cljs.core.count(c__4299__auto__);
var G__36874 = (0);
seq__36859 = G__36871;
chunk__36860 = G__36872;
count__36861 = G__36873;
i__36862 = G__36874;
continue;
}
} else
{var k = cljs.core.first(seq__36859__$1);var temp__4124__auto___36875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4124__auto___36875))
{var path_36876 = temp__4124__auto___36875;clustermap.components.map.delete_path(leaflet_map,path_36876);
} else
{}
{
var G__36877 = cljs.core.next(seq__36859__$1);
var G__36878 = null;
var G__36879 = (0);
var G__36880 = (0);
seq__36859 = G__36877;
chunk__36860 = G__36878;
count__36861 = G__36879;
i__36862 = G__36880;
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
return (function (m,p__36863){var map__36864 = p__36863;var map__36864__$1 = ((cljs.core.seq_QMARK_(map__36864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36864):map__36864);var path = map__36864__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864__$1,cljs.core.constant$keyword$797);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$816,(path_fn.cljs$core$IFn$_invoke$arity$3 ? path_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$980,cljs.core.constant$keyword$883,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$798,bl_id,cljs.core.constant$keyword$799,bl_name], null)) : path_fn.call(null,cljs.core.constant$keyword$980,cljs.core.constant$keyword$883,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$798,bl_id,cljs.core.constant$keyword$799,bl_name], null))),cljs.core.constant$keyword$797,null,cljs.core.constant$keyword$808,null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs36882 = bl_name;if(cljs.core.map_QMARK_(attrs36882))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,null,cljs.core.constant$keyword$808,"map-marker-constituency-name"], null),attrs36882], 0))))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html(attrs36882))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last(cljs.core.first(cljs.core.reverse(cljs.core.filter((function (p__36885){var vec__36886 = p__36885;var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886,(0),null);var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,index,index_type,blcoll,variable,filter){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_36910){var state_val_36911 = (state_36910[(1)]);if((state_val_36911 === (2)))
{var inst_36905 = (state_36910[(2)]);var inst_36906 = [cljs.core.constant$keyword$1068,cljs.core.constant$keyword$1069,cljs.core.constant$keyword$980,cljs.core.constant$keyword$908];var inst_36907 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_36906,null));var inst_36908 = (set_app_state_fn.cljs$core$IFn$_invoke$arity$2 ? set_app_state_fn.cljs$core$IFn$_invoke$arity$2(inst_36907,inst_36905) : set_app_state_fn.call(null,inst_36907,inst_36905));var state_36910__$1 = state_36910;return cljs.core.async.impl.ioc_helpers.return_chan(state_36910__$1,inst_36908);
} else
{if((state_val_36911 === (1)))
{var inst_36903 = clustermap.api.boundaryline_aggregation(index,index_type,blcoll,variable,filter);var state_36910__$1 = state_36910;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36910__$1,(2),inst_36903);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_36915 = [null,null,null,null,null,null,null];(statearr_36915[(0)] = state_machine__5679__auto__);
(statearr_36915[(1)] = (1));
return statearr_36915;
});
var state_machine__5679__auto____1 = (function (state_36910){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36910);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36916){if((e36916 instanceof Object))
{var ex__5682__auto__ = e36916;var statearr_36917_36919 = state_36910;(statearr_36917_36919[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36910);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e36916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__36920 = state_36910;
state_36910 = G__36920;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36910){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_36918 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__36921,owner){var map__36943 = p__36921;var map__36943__$1 = ((cljs.core.seq_QMARK_(map__36943))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36943):map__36943);var cursor = map__36943__$1;var map__36944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943__$1,cljs.core.constant$keyword$1070);var map__36944__$1 = ((cljs.core.seq_QMARK_(map__36944))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36944):map__36944);var initial_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36944__$1,cljs.core.constant$keyword$1071);if(typeof clustermap.components.map.t36945 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t36945 = (function (initial_bounds,map__36944,cursor,map__36943,owner,p__36921,map_component,meta36946){
this.initial_bounds = initial_bounds;
this.map__36944 = map__36944;
this.cursor = cursor;
this.map__36943 = map__36943;
this.owner = owner;
this.p__36921 = p__36921;
this.map_component = map_component;
this.meta36946 = meta36946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t36945.cljs$lang$type = true;
clustermap.components.map.t36945.cljs$lang$ctorStr = "clustermap.components.map/t36945";
clustermap.components.map.t36945.cljs$lang$ctorPrWriter = ((function (map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map/t36945");
});})(map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
;
clustermap.components.map.t36945.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t36945.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (this$,p__36948,p__36949){var self__ = this;
var map__36950 = p__36948;var map__36950__$1 = ((cljs.core.seq_QMARK_(map__36950))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36950):map__36950);var next_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,cljs.core.constant$keyword$782);var next_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,cljs.core.constant$keyword$908);var next_boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,cljs.core.constant$keyword$1072);var map__36951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36950__$1,cljs.core.constant$keyword$1070);var map__36951__$1 = ((cljs.core.seq_QMARK_(map__36951))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36951):map__36951);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,cljs.core.constant$keyword$1073);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,cljs.core.constant$keyword$1067);var next_boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,cljs.core.constant$keyword$1074);var colorchooser_control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,cljs.core.constant$keyword$1075);var next_boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,cljs.core.constant$keyword$1076);var map__36952 = p__36949;var map__36952__$1 = ((cljs.core.seq_QMARK_(map__36952))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36952):map__36952);var next_path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36952__$1,cljs.core.constant$keyword$1077);var this$__$1 = this;var map__36953 = om.core.get_props(self__.owner);var map__36953__$1 = ((cljs.core.seq_QMARK_(map__36953))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36953):map__36953);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36953__$1,cljs.core.constant$keyword$782);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36953__$1,cljs.core.constant$keyword$908);var boundaryline_collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36953__$1,cljs.core.constant$keyword$1072);var map__36954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36953__$1,cljs.core.constant$keyword$1070);var map__36954__$1 = ((cljs.core.seq_QMARK_(map__36954))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36954):map__36954);var boundaryline_agg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36954__$1,cljs.core.constant$keyword$1076);var boundaryline_collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36954__$1,cljs.core.constant$keyword$1074);var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36954__$1,cljs.core.constant$keyword$1073);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36954__$1,cljs.core.constant$keyword$1067);var initial_bounds__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36954__$1,cljs.core.constant$keyword$1071);var map__36955 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__36955__$1 = ((cljs.core.seq_QMARK_(map__36955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36955):map__36955);var set_app_state_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36955__$1,cljs.core.constant$keyword$1078);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36955__$1,cljs.core.constant$keyword$1079);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36955__$1,cljs.core.constant$keyword$1080);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36955__$1,cljs.core.constant$keyword$879);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36955__$1,cljs.core.constant$keyword$878);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36955__$1,cljs.core.constant$keyword$888);var map__36956 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__36956__$1 = ((cljs.core.seq_QMARK_(map__36956))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36956):map__36956);var map__36957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36956__$1,cljs.core.constant$keyword$980);var map__36957__$1 = ((cljs.core.seq_QMARK_(map__36957))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36957):map__36957);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36957__$1,cljs.core.constant$keyword$1052);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36957__$1,cljs.core.constant$keyword$1051);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36957__$1,cljs.core.constant$keyword$1050);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36957__$1,cljs.core.constant$keyword$1049);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36956__$1,cljs.core.constant$keyword$1081);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36956__$1,cljs.core.constant$keyword$1077);if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = next_zoom;if(cljs.core.truth_(and__3531__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,zoom)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_zoom,leaflet_map.getZoom()));
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = next_bounds;if(cljs.core.truth_(and__3531__auto____$1))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,bounds)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,clustermap.components.map.bounds_array(leaflet_map.getBounds())));
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js(next_bounds));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1070,cljs.core.constant$keyword$1067], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = boundaryline_collections;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1070,cljs.core.constant$keyword$1074], null),clustermap.components.map.choose_boundaryline_collection(next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3531__auto__))
{var or__3543__auto__ = (function (){var and__3531__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_data,null);
} else
{return and__3531__auto____$1;
}
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (function (){var and__3531__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_agg,boundaryline_agg);
} else
{return and__3531__auto____$1;
}
})();if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_boundaryline_collection,boundaryline_collection)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter,filter));
}
}
} else
{return and__3531__auto__;
}
})()))
{clustermap.components.map.fetch_aggregation_data(set_app_state_fn,cljs.core.constant$keyword$792.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),cljs.core.constant$keyword$1082.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),next_boundaryline_collection,cljs.core.constant$keyword$1083.cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value(next_filter));
} else
{}
var selection_path_colours = clustermap.data.colorchooser.choose(cljs.core.constant$keyword$1084.cljs$core$IFn$_invoke$arity$1(colorchooser_control),cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(colorchooser_control),cljs.core.constant$keyword$798,cljs.core.constant$keyword$1083.cljs$core$IFn$_invoke$arity$1(colorchooser_control),cljs.core.constant$keyword$890.cljs$core$IFn$_invoke$arity$1(next_data));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_data,data))
{console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next-data",next_data], null)));
console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection-path-colours",selection_path_colours], null)));
} else
{}
return clustermap.components.map.update_paths(comm,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetch_boundaryline_fn,next_boundaryline_collection),leaflet_map,paths,path_selections,next_path_highlights,selection_path_colours);
});})(map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
;
clustermap.components.map.t36945.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t36945.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__36958 = clustermap.components.map.create_map(node,self__.initial_bounds);var map__36958__$1 = ((cljs.core.seq_QMARK_(map__36958))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36958):map__36958);var map = map__36958__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,cljs.core.constant$keyword$848);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,cljs.core.constant$keyword$1050);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,cljs.core.constant$keyword$1049);var map__36959 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__36959__$1 = ((cljs.core.seq_QMARK_(map__36959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36959):map__36959);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,cljs.core.constant$keyword$878);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,cljs.core.constant$keyword$879);var point_in_boundarylines_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,cljs.core.constant$keyword$1079);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,cljs.core.constant$keyword$1080);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,cljs.core.constant$keyword$888);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1070,cljs.core.constant$keyword$1073], null),leaflet_map.getZoom());
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1070,cljs.core.constant$keyword$1067], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$980,map);
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1077,cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",((function (node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (e){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1070,cljs.core.constant$keyword$1073], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1070,cljs.core.constant$keyword$1067], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
);
leaflet_map.on("moveend",((function (node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (e){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1070,cljs.core.constant$keyword$1073], null),leaflet_map.getZoom());
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1070,cljs.core.constant$keyword$1067], null),clustermap.components.map.bounds_array(leaflet_map.getBounds()));
});})(node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1086,true);
} else
{}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
);
});})(node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1086,null);
});})(node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(lng,lat) : point_in_boundarylines_fn.call(null,lng,lat));var highlight_hit = cljs.core.first(hits);var highlight_path_id = cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1077);if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path_highlights,highlight_path_ids)) && (cljs.core.not(om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$1086)));
} else
{return and__3531__auto__;
}
})()))
{var G__36960_36964 = L.popup();G__36960_36964.setLatLng(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__36960_36964.setContent(clustermap.components.map.constituency_marker_popup_content(path_fn,highlight_hit));
G__36960_36964.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1077,highlight_path_ids);
});})(node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (e){var hits = (point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2 ? point_in_boundarylines_fn.cljs$core$IFn$_invoke$arity$2(e.latlng.lng,e.latlng.lat) : point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat));var boundaryline_id = (function (){var G__36961 = hits;var G__36961__$1 = (((G__36961 == null))?null:cljs.core.first(G__36961));var G__36961__$2 = (((G__36961__$1 == null))?null:cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(G__36961__$1));return G__36961__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$883,boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__36958,map__36958__$1,map,path,markers,leaflet_map,map__36959,map__36959__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
);
});})(map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
;
clustermap.components.map.t36945.prototype.om$core$IRender$ = true;
clustermap.components.map.t36945.prototype.om$core$IRender$render$arity$1 = ((function (map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
;
clustermap.components.map.t36945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (_36947){var self__ = this;
var _36947__$1 = this;return self__.meta36946;
});})(map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
;
clustermap.components.map.t36945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function (_36947,meta36946__$1){var self__ = this;
var _36947__$1 = this;return (new clustermap.components.map.t36945(self__.initial_bounds,self__.map__36944,self__.cursor,self__.map__36943,self__.owner,self__.p__36921,self__.map_component,meta36946__$1));
});})(map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
;
clustermap.components.map.__GT_t36945 = ((function (map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds){
return (function __GT_t36945(initial_bounds__$1,map__36944__$2,cursor__$1,map__36943__$2,owner__$1,p__36921__$1,map_component__$1,meta36946){return (new clustermap.components.map.t36945(initial_bounds__$1,map__36944__$2,cursor__$1,map__36943__$2,owner__$1,p__36921__$1,map_component__$1,meta36946));
});})(map__36943,map__36943__$1,cursor,map__36944,map__36944__$1,initial_bounds))
;
}
return (new clustermap.components.map.t36945(initial_bounds,map__36944__$1,cursor,map__36943__$1,owner,p__36921,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$873,shared,cljs.core.constant$keyword$876,document.getElementById(elem_id),cljs.core.constant$keyword$848,path], null));
});
