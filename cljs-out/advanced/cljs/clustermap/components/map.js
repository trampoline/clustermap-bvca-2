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
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,"mccraigmccraig.map-gqkcbi1g",{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$279,m,cljs.core.constant$keyword$280,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$281,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
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
var pan_to_show__delegate = function (m,all_bounds){var fb = cljs.core.first(all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest(all_bounds));return m.fitBounds(super_bounds);
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__20980){
var m = cljs.core.first(arglist__20980);
var all_bounds = cljs.core.rest(arglist__20980);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$282,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$283,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$283,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str((function (){var attrs20982 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs20982))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,null,cljs.core.constant$keyword$185,null], null),attrs20982], 0)))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html(attrs20982)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__20984 = location_sites;var G__20984__$1 = (((G__20984 == null))?null:cljs.core.first(G__20984));var G__20984__$2 = (((G__20984__$1 == null))?null:cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(G__20984__$1));var G__20984__$3 = (((G__20984__$2 == null))?null:cljs.core.reverse(G__20984__$2));var G__20984__$4 = (((G__20984__$3 == null))?null:cljs.core.clj__GT_js(G__20984__$3));return G__20984__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return null;
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){return marker.setPopupContent(clustermap.components.map.marker_popup_content(location));
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,old_locations,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__20989 = cljs.core.seq(remove_marker_keys);var chunk__20990 = null;var count__20991 = 0;var i__20992 = 0;while(true){
if((i__20992 < count__20991))
{var k = chunk__20990.cljs$core$IIndexed$_nth$arity$2(null,i__20992);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__20993 = seq__20989;
var G__20994 = chunk__20990;
var G__20995 = count__20991;
var G__20996 = (i__20992 + 1);
seq__20989 = G__20993;
chunk__20990 = G__20994;
count__20991 = G__20995;
i__20992 = G__20996;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__20989);if(temp__4092__auto__)
{var seq__20989__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__20989__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__20989__$1);{
var G__20997 = cljs.core.chunk_rest(seq__20989__$1);
var G__20998 = c__4148__auto__;
var G__20999 = cljs.core.count(c__4148__auto__);
var G__21000 = 0;
seq__20989 = G__20997;
chunk__20990 = G__20998;
count__20991 = G__20999;
i__20992 = G__21000;
continue;
}
} else
{var k = cljs.core.first(seq__20989__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__21001 = cljs.core.next(seq__20989__$1);
var G__21002 = null;
var G__21003 = 0;
var G__21004 = 0;
seq__20989 = G__21001;
chunk__20990 = G__21002;
count__20991 = G__21003;
i__20992 = G__21004;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__21013 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__21013__$1 = ((cljs.core.seq_QMARK_(map__21013))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21013):map__21013);var clj_envelope = map__21013__$1;var vec__21014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21013__$1,"coordinates");var vec__21015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21014,0,null);var vec__21016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21015,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21016,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21016,1,null);var vec__21017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21015,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21017,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21017,1,null);var vec__21018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21015,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21018,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21018,1,null);var vec__21019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21015,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21019,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21019,1,null);var vec__21020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21015,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21020,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21020,1,null);var inner = vec__21015;var coords = vec__21014;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.create_path = (function create_path(leaflet_map,uk_constituencies,boundaryline_id){var temp__4092__auto__ = (uk_constituencies[boundaryline_id]);if(cljs.core.truth_(temp__4092__auto__))
{var cons = temp__4092__auto__;var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,path,cljs.core.constant$keyword$286,bounds], null);
} else
{return null;
}
});
clustermap.components.map.update_path = (function update_path(leaflet_map,uk_constituencies,path,boundaryline_id){return null;
});
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__21022 = path;var G__21022__$1 = (((G__21022 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21022));var G__21022__$2 = (((G__21022__$1 == null))?null:leaflet_map.removeLayer(G__21022__$1));return G__21022__$2;
});
clustermap.components.map.update_paths = (function update_paths(leaflet_map,uk_constituencies,paths_atom,old_locations,new_locations){var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var location_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$273,cljs.core.constant$keyword$272),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_locations)))));var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,location_path_keys);var new_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path(leaflet_map,uk_constituencies,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys));var updated_paths = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path(leaflet_map,uk_constituencies,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__21027 = cljs.core.seq(remove_path_keys);var chunk__21028 = null;var count__21029 = 0;var i__21030 = 0;while(true){
if((i__21030 < count__21029))
{var k = chunk__21028.cljs$core$IIndexed$_nth$arity$2(null,i__21030);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21031 = seq__21027;
var G__21032 = chunk__21028;
var G__21033 = count__21029;
var G__21034 = (i__21030 + 1);
seq__21027 = G__21031;
chunk__21028 = G__21032;
count__21029 = G__21033;
i__21030 = G__21034;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21027);if(temp__4092__auto__)
{var seq__21027__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21027__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__21027__$1);{
var G__21035 = cljs.core.chunk_rest(seq__21027__$1);
var G__21036 = c__4148__auto__;
var G__21037 = cljs.core.count(c__4148__auto__);
var G__21038 = 0;
seq__21027 = G__21035;
chunk__21028 = G__21036;
count__21029 = G__21037;
i__21030 = G__21038;
continue;
}
} else
{var k = cljs.core.first(seq__21027__$1);clustermap.components.map.remove_path(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k));
{
var G__21039 = cljs.core.next(seq__21027__$1);
var G__21040 = null;
var G__21041 = 0;
var G__21042 = 0;
seq__21027 = G__21039;
chunk__21028 = G__21040;
count__21029 = G__21041;
i__21030 = G__21042;
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
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__21044 = paths;var G__21044__$1 = (((G__21044 == null))?null:cljs.core.vals(G__21044));var G__21044__$2 = (((G__21044__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$286,G__21044__$1));return G__21044__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__21045,owner){var map__21055 = p__21045;var map__21055__$1 = ((cljs.core.seq_QMARK_(map__21055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21055):map__21055);var uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.constant$keyword$287);var selection_portfolio_company_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.constant$keyword$288);var selection_portfolio_company_sites = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.constant$keyword$265);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.constant$keyword$232);if(typeof clustermap.components.map.t21056 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t21056 = (function (selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__21055,owner,p__21045,map_component,meta21057){
this.selection = selection;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.selection_portfolio_company_locations = selection_portfolio_company_locations;
this.uk_constituencies = uk_constituencies;
this.map__21055 = map__21055;
this.owner = owner;
this.p__21045 = p__21045;
this.map_component = map_component;
this.meta21057 = meta21057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t21056.cljs$lang$type = true;
clustermap.components.map.t21056.cljs$lang$ctorStr = "clustermap.components.map/t21056";
clustermap.components.map.t21056.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t21056");
});
clustermap.components.map.t21056.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t21056.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$289,clustermap.components.map.create_map(node));
});
clustermap.components.map.t21056.prototype.om$core$IRenderState$ = true;
clustermap.components.map.t21056.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__21059){var self__ = this;
var map__21060 = p__21059;var map__21060__$1 = ((cljs.core.seq_QMARK_(map__21060))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21060):map__21060);var map__21061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21060__$1,cljs.core.constant$keyword$289);var map__21061__$1 = ((cljs.core.seq_QMARK_(map__21061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21061):map__21061);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.constant$keyword$281);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.constant$keyword$280);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.constant$keyword$279);var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21060__$1,cljs.core.constant$keyword$290);var this$__$1 = this;var new_locations_21064 = (cljs.core.truth_(self__.selection_portfolio_company_locations)?om.core.value(self__.selection_portfolio_company_locations):null);if((locations === new_locations_21064))
{} else
{clustermap.components.map.update_markers(leaflet_map,markers,locations,new_locations_21064);
clustermap.components.map.update_paths(leaflet_map,self__.uk_constituencies,paths,locations,new_locations_21064);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$290,new_locations_21064);
clustermap.components.map.pan_to_selection(leaflet_map,cljs.core.deref(paths));
}
return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t21056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21058){var self__ = this;
var _21058__$1 = this;return self__.meta21057;
});
clustermap.components.map.t21056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21058,meta21057__$1){var self__ = this;
var _21058__$1 = this;return (new clustermap.components.map.t21056(self__.selection,self__.selection_portfolio_company_sites,self__.selection_portfolio_company_locations,self__.uk_constituencies,self__.map__21055,self__.owner,self__.p__21045,self__.map_component,meta21057__$1));
});
clustermap.components.map.__GT_t21056 = (function __GT_t21056(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__21055__$2,owner__$1,p__21045__$1,map_component__$1,meta21057){return (new clustermap.components.map.t21056(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__21055__$2,owner__$1,p__21045__$1,map_component__$1,meta21057));
});
}
return (new clustermap.components.map.t21056(selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__21055__$1,owner,p__21045,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
