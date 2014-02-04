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
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__31748 = config;var G__31748__$1 = (((G__31748 == null))?null:G__31748.components);var G__31748__$2 = (((G__31748__$1 == null))?null:G__31748__$1.map);var G__31748__$3 = (((G__31748__$2 == null))?null:G__31748__$2.api_key);return G__31748__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m,new cljs.core.Keyword(null,"markers","markers",1853155051),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3394__auto__ = s;if(cljs.core.truth_(and__3394__auto__))
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
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty.call(null,all_bounds)))
{var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__31749){
var m = cljs.core.first(arglist__31749);
var all_bounds = cljs.core.rest(arglist__31749);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js.call(null,cljs.core.reverse.call(null,(site["location"])));var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return casync.dorun_async.call(null,c,new cljs.core.Keyword(null,"delay","delay",1109372149),null);
}).call(null,casync.map_async.call(null,cljs.core.partial.call(null,clustermap.components.map.display_site,m),sites));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,(function (site){return [cljs.core.str((function (){var attrs31751 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_.call(null,attrs31751))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs31751))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs31751)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__31754 = location_sites;var G__31754__$1 = (((G__31754 == null))?null:cljs.core.first.call(null,G__31754));var G__31754__$2 = (((G__31754__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__31754__$1));var G__31754__$3 = (((G__31754__$2 == null))?null:cljs.core.reverse.call(null,G__31754__$2));var G__31754__$4 = (((G__31754__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31754__$3));return G__31754__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content.call(null,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31755_31756 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31755_31756;
}return [cljs.core.str(sb__4298__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,leaflet_map,cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__31761 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31762 = null;var count__31763 = 0;var i__31764 = 0;while(true){
if((i__31764 < count__31763))
{var k = cljs.core._nth.call(null,chunk__31762,i__31764);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__31765 = seq__31761;
var G__31766 = chunk__31762;
var G__31767 = count__31763;
var G__31768 = (i__31764 + 1);
seq__31761 = G__31765;
chunk__31762 = G__31766;
count__31763 = G__31767;
i__31764 = G__31768;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31761);if(temp__4092__auto__)
{var seq__31761__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31761__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31761__$1);{
var G__31769 = cljs.core.chunk_rest.call(null,seq__31761__$1);
var G__31770 = c__4148__auto__;
var G__31771 = cljs.core.count.call(null,c__4148__auto__);
var G__31772 = 0;
seq__31761 = G__31769;
chunk__31762 = G__31770;
count__31763 = G__31771;
i__31764 = G__31772;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31761__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__31773 = cljs.core.next.call(null,seq__31761__$1);
var G__31774 = null;
var G__31775 = 0;
var G__31776 = 0;
seq__31761 = G__31773;
chunk__31762 = G__31774;
count__31763 = G__31775;
i__31764 = G__31776;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__31785 = cljs.core.js__GT_clj.call(null,envelope);var map__31785__$1 = ((cljs.core.seq_QMARK_.call(null,map__31785))?cljs.core.apply.call(null,cljs.core.hash_map,map__31785):map__31785);var clj_envelope = map__31785__$1;var vec__31786 = cljs.core.get.call(null,map__31785__$1,"coordinates");var vec__31787 = cljs.core.nth.call(null,vec__31786,0,null);var vec__31788 = cljs.core.nth.call(null,vec__31787,0,null);var miny0 = cljs.core.nth.call(null,vec__31788,0,null);var minx0 = cljs.core.nth.call(null,vec__31788,1,null);var vec__31789 = cljs.core.nth.call(null,vec__31787,1,null);var maxy1 = cljs.core.nth.call(null,vec__31789,0,null);var minx1 = cljs.core.nth.call(null,vec__31789,1,null);var vec__31790 = cljs.core.nth.call(null,vec__31787,2,null);var maxy2 = cljs.core.nth.call(null,vec__31790,0,null);var maxx2 = cljs.core.nth.call(null,vec__31790,1,null);var vec__31791 = cljs.core.nth.call(null,vec__31787,3,null);var miny3 = cljs.core.nth.call(null,vec__31791,0,null);var maxx3 = cljs.core.nth.call(null,vec__31791,1,null);var vec__31792 = cljs.core.nth.call(null,vec__31787,4,null);var miny4 = cljs.core.nth.call(null,vec__31792,0,null);var minx4 = cljs.core.nth.call(null,vec__31792,1,null);var inner = vec__31787;var coords = vec__31786;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,zoom,new cljs.core.Keyword(null,"min-zoom","min-zoom",3894785504),7);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
/**
* create a Leaflet path for a boundaryline
*/
clustermap.components.map.create_path = (function create_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,boundaryline_id){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,uk_constituencies,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__31794 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__31794,0,null);var cons = cljs.core.nth.call(null,vec__31794,1,null);var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tolerance","tolerance",2046976895),tolerance,new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,path,boundaryline_id){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,uk_constituencies,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__31796 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__31796,0,null);var cons = cljs.core.nth.call(null,vec__31796,1,null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895).cljs$core$IFn$_invoke$arity$1(path)))
{var new_path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(cons["envelope"]));new_path.addTo(leaflet_map);
leaflet_map.removeLayer(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(path));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tolerance","tolerance",2046976895),tolerance,new cljs.core.Keyword(null,"path","path",1017337751),new_path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
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
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__31798 = path;var G__31798__$1 = (((G__31798 == null))?null:new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__31798));var G__31798__$2 = (((G__31798__$1 == null))?null:leaflet_map.removeLayer(G__31798__$1));return G__31798__$2;
});
clustermap.components.map.update_paths = (function update_paths(fetch_boundaryline_fn,uk_constituencies,leaflet_map,paths_atom,new_locations){if(cljs.core.truth_(uk_constituencies))
{var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var location_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_locations)))));var update_path_keys = clojure.set.intersection.call(null,path_keys,location_path_keys);var new_path_keys = clojure.set.difference.call(null,location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.call(null,path_keys,location_path_keys);var new_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__31805){var vec__31806 = p__31805;var k = cljs.core.nth.call(null,vec__31806,0,null);var v = cljs.core.nth.call(null,vec__31806,1,null);return cljs.core.identity.call(null,v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path.call(null,fetch_boundaryline_fn,uk_constituencies,leaflet_map,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path.call(null,fetch_boundaryline_fn,uk_constituencies,leaflet_map,cljs.core.get.call(null,paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__31807 = cljs.core.seq.call(null,remove_path_keys);var chunk__31808 = null;var count__31809 = 0;var i__31810 = 0;while(true){
if((i__31810 < count__31809))
{var k = cljs.core._nth.call(null,chunk__31808,i__31810);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__31811 = seq__31807;
var G__31812 = chunk__31808;
var G__31813 = count__31809;
var G__31814 = (i__31810 + 1);
seq__31807 = G__31811;
chunk__31808 = G__31812;
count__31809 = G__31813;
i__31810 = G__31814;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31807);if(temp__4092__auto__)
{var seq__31807__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31807__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31807__$1);{
var G__31815 = cljs.core.chunk_rest.call(null,seq__31807__$1);
var G__31816 = c__4148__auto__;
var G__31817 = cljs.core.count.call(null,c__4148__auto__);
var G__31818 = 0;
seq__31807 = G__31815;
chunk__31808 = G__31816;
count__31809 = G__31817;
i__31810 = G__31818;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31807__$1);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__31819 = cljs.core.next.call(null,seq__31807__$1);
var G__31820 = null;
var G__31821 = 0;
var G__31822 = 0;
seq__31807 = G__31819;
chunk__31808 = G__31820;
count__31809 = G__31821;
i__31810 = G__31822;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,paths_atom,cljs.core.merge.call(null,updated_paths,new_paths));
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__31824 = paths;var G__31824__$1 = (((G__31824 == null))?null:cljs.core.vals.call(null,G__31824));var G__31824__$2 = (((G__31824__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__31824__$1));return G__31824__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__31825,owner){var map__31837 = p__31825;var map__31837__$1 = ((cljs.core.seq_QMARK_.call(null,map__31837))?cljs.core.apply.call(null,cljs.core.hash_map,map__31837):map__31837);var app_state = map__31837__$1;var selection = cljs.core.get.call(null,map__31837__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t31838 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t31838 = (function (selection,app_state,map__31837,owner,p__31825,map_component,meta31839){
this.selection = selection;
this.app_state = app_state;
this.map__31837 = map__31837;
this.owner = owner;
this.p__31825 = p__31825;
this.map_component = map_component;
this.meta31839 = meta31839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t31838.cljs$lang$type = true;
clustermap.components.map.t31838.cljs$lang$ctorStr = "clustermap.components.map/t31838";
clustermap.components.map.t31838.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t31838");
});
clustermap.components.map.t31838.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t31838.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__31841,next_state){var self__ = this;
var map__31842 = p__31841;var map__31842__$1 = ((cljs.core.seq_QMARK_.call(null,map__31842))?cljs.core.apply.call(null,cljs.core.hash_map,map__31842):map__31842);var next_selection = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var next_locations = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var next_uk_constituencies = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var next_boundarylines = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847));var next_zoom = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"zoom","zoom",1017648965));var this$__$1 = this;var fetch_boundaryline_fn = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934));var map__31843 = om.core.get_state.call(null,self__.owner);var map__31843__$1 = ((cljs.core.seq_QMARK_.call(null,map__31843))?cljs.core.apply.call(null,cljs.core.hash_map,map__31843):map__31843);var map__31844 = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__31844__$1 = ((cljs.core.seq_QMARK_.call(null,map__31844))?cljs.core.apply.call(null,cljs.core.hash_map,map__31844):map__31844);var paths = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var pan_pending = cljs.core.get.call(null,map__31843__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121));clustermap.components.map.update_markers.call(null,leaflet_map,markers,next_locations);
clustermap.components.map.update_paths.call(null,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,next_locations);
if(cljs.core.not_EQ_.call(null,next_selection,self__.selection))
{if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,paths))))
{clustermap.components.map.pan_to_selection.call(null,leaflet_map,cljs.core.deref.call(null,paths));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),true);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = pan_pending;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_empty.call(null,cljs.core.deref.call(null,paths));
} else
{return and__3394__auto__;
}
})()))
{clustermap.components.map.pan_to_selection.call(null,leaflet_map,cljs.core.deref.call(null,paths));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),false);
} else
{return null;
}
});
clustermap.components.map.t31838.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t31838.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__31845 = clustermap.components.map.create_map.call(null,node);var map__31845__$1 = ((cljs.core.seq_QMARK_.call(null,map__31845))?cljs.core.apply.call(null,cljs.core.hash_map,map__31845):map__31845);var map = map__31845__$1;var path = cljs.core.get.call(null,map__31845__$1,new cljs.core.Keyword(null,"path","path",1017337751));var markers = cljs.core.get.call(null,map__31845__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__31845__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"app-state","app-state",1424976215)),cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
}));
return om.core.update_BANG_.call(null,self__.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
});
clustermap.components.map.t31838.prototype.om$core$IRender$ = true;
clustermap.components.map.t31838.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t31838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31840){var self__ = this;
var _31840__$1 = this;return self__.meta31839;
});
clustermap.components.map.t31838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31840,meta31839__$1){var self__ = this;
var _31840__$1 = this;return (new clustermap.components.map.t31838(self__.selection,self__.app_state,self__.map__31837,self__.owner,self__.p__31825,self__.map_component,meta31839__$1));
});
clustermap.components.map.__GT_t31838 = (function __GT_t31838(selection__$1,app_state__$1,map__31837__$2,owner__$1,p__31825__$1,map_component__$1,meta31839){return (new clustermap.components.map.t31838(selection__$1,app_state__$1,map__31837__$2,owner__$1,p__31825__$1,map_component__$1,meta31839));
});
}
return (new clustermap.components.map.t31838(selection,app_state,map__31837__$1,owner,p__31825,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm,new cljs.core.Keyword(null,"app-state","app-state",1424976215),app_state,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847))], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
