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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__31962 = config;var G__31962__$1 = (((G__31962 == null))?null:G__31962.components);var G__31962__$2 = (((G__31962__$1 == null))?null:G__31962__$1.map);var G__31962__$3 = (((G__31962__$2 == null))?null:G__31962__$2.api_key);return G__31962__$3;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__31963){
var m = cljs.core.first(arglist__31963);
var all_bounds = cljs.core.rest(arglist__31963);
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
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs31965 = cljs.core.map.call(null,(function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site),new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs31965))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs31965))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs31965)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__31968 = location_sites;var G__31968__$1 = (((G__31968 == null))?null:cljs.core.first.call(null,G__31968));var G__31968__$2 = (((G__31968__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__31968__$1));var G__31968__$3 = (((G__31968__$2 == null))?null:cljs.core.reverse.call(null,G__31968__$2));var G__31968__$4 = (((G__31968__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31968__$3));return G__31968__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31969_31970 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31969_31970;
}return [cljs.core.str(sb__4298__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__31975 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31976 = null;var count__31977 = 0;var i__31978 = 0;while(true){
if((i__31978 < count__31977))
{var k = cljs.core._nth.call(null,chunk__31976,i__31978);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__31979 = seq__31975;
var G__31980 = chunk__31976;
var G__31981 = count__31977;
var G__31982 = (i__31978 + 1);
seq__31975 = G__31979;
chunk__31976 = G__31980;
count__31977 = G__31981;
i__31978 = G__31982;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31975);if(temp__4092__auto__)
{var seq__31975__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31975__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31975__$1);{
var G__31983 = cljs.core.chunk_rest.call(null,seq__31975__$1);
var G__31984 = c__4148__auto__;
var G__31985 = cljs.core.count.call(null,c__4148__auto__);
var G__31986 = 0;
seq__31975 = G__31983;
chunk__31976 = G__31984;
count__31977 = G__31985;
i__31978 = G__31986;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31975__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__31987 = cljs.core.next.call(null,seq__31975__$1);
var G__31988 = null;
var G__31989 = 0;
var G__31990 = 0;
seq__31975 = G__31987;
chunk__31976 = G__31988;
count__31977 = G__31989;
i__31978 = G__31990;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__31999 = cljs.core.js__GT_clj.call(null,envelope);var map__31999__$1 = ((cljs.core.seq_QMARK_.call(null,map__31999))?cljs.core.apply.call(null,cljs.core.hash_map,map__31999):map__31999);var clj_envelope = map__31999__$1;var vec__32000 = cljs.core.get.call(null,map__31999__$1,"coordinates");var vec__32001 = cljs.core.nth.call(null,vec__32000,0,null);var vec__32002 = cljs.core.nth.call(null,vec__32001,0,null);var miny0 = cljs.core.nth.call(null,vec__32002,0,null);var minx0 = cljs.core.nth.call(null,vec__32002,1,null);var vec__32003 = cljs.core.nth.call(null,vec__32001,1,null);var maxy1 = cljs.core.nth.call(null,vec__32003,0,null);var minx1 = cljs.core.nth.call(null,vec__32003,1,null);var vec__32004 = cljs.core.nth.call(null,vec__32001,2,null);var maxy2 = cljs.core.nth.call(null,vec__32004,0,null);var maxx2 = cljs.core.nth.call(null,vec__32004,1,null);var vec__32005 = cljs.core.nth.call(null,vec__32001,3,null);var miny3 = cljs.core.nth.call(null,vec__32005,0,null);var maxx3 = cljs.core.nth.call(null,vec__32005,1,null);var vec__32006 = cljs.core.nth.call(null,vec__32001,4,null);var miny4 = cljs.core.nth.call(null,vec__32006,0,null);var minx4 = cljs.core.nth.call(null,vec__32006,1,null);var inner = vec__32001;var coords = vec__32000;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
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
{var vec__32008 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__32008,0,null);var cons = cljs.core.nth.call(null,vec__32008,1,null);var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tolerance","tolerance",2046976895),tolerance,new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(fetch_boundaryline_fn,uk_constituencies,leaflet_map,path,boundaryline_id){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,uk_constituencies,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__32010 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__32010,0,null);var cons = cljs.core.nth.call(null,vec__32010,1,null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895).cljs$core$IFn$_invoke$arity$1(path)))
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
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__32012 = path;var G__32012__$1 = (((G__32012 == null))?null:new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__32012));var G__32012__$2 = (((G__32012__$1 == null))?null:leaflet_map.removeLayer(G__32012__$1));return G__32012__$2;
});
clustermap.components.map.update_paths = (function update_paths(fetch_boundaryline_fn,uk_constituencies,leaflet_map,paths_atom,new_locations){if(cljs.core.truth_(uk_constituencies))
{var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var location_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_locations)))));var update_path_keys = clojure.set.intersection.call(null,path_keys,location_path_keys);var new_path_keys = clojure.set.difference.call(null,location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.call(null,path_keys,location_path_keys);var new_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__32019){var vec__32020 = p__32019;var k = cljs.core.nth.call(null,vec__32020,0,null);var v = cljs.core.nth.call(null,vec__32020,1,null);return cljs.core.identity.call(null,v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path.call(null,fetch_boundaryline_fn,uk_constituencies,leaflet_map,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path.call(null,fetch_boundaryline_fn,uk_constituencies,leaflet_map,cljs.core.get.call(null,paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__32021 = cljs.core.seq.call(null,remove_path_keys);var chunk__32022 = null;var count__32023 = 0;var i__32024 = 0;while(true){
if((i__32024 < count__32023))
{var k = cljs.core._nth.call(null,chunk__32022,i__32024);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__32025 = seq__32021;
var G__32026 = chunk__32022;
var G__32027 = count__32023;
var G__32028 = (i__32024 + 1);
seq__32021 = G__32025;
chunk__32022 = G__32026;
count__32023 = G__32027;
i__32024 = G__32028;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32021);if(temp__4092__auto__)
{var seq__32021__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32021__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32021__$1);{
var G__32029 = cljs.core.chunk_rest.call(null,seq__32021__$1);
var G__32030 = c__4148__auto__;
var G__32031 = cljs.core.count.call(null,c__4148__auto__);
var G__32032 = 0;
seq__32021 = G__32029;
chunk__32022 = G__32030;
count__32023 = G__32031;
i__32024 = G__32032;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32021__$1);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__32033 = cljs.core.next.call(null,seq__32021__$1);
var G__32034 = null;
var G__32035 = 0;
var G__32036 = 0;
seq__32021 = G__32033;
chunk__32022 = G__32034;
count__32023 = G__32035;
i__32024 = G__32036;
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
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__32038 = paths;var G__32038__$1 = (((G__32038 == null))?null:cljs.core.vals.call(null,G__32038));var G__32038__$2 = (((G__32038__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__32038__$1));return G__32038__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32039,owner){var map__32054 = p__32039;var map__32054__$1 = ((cljs.core.seq_QMARK_.call(null,map__32054))?cljs.core.apply.call(null,cljs.core.hash_map,map__32054):map__32054);var app_state = map__32054__$1;var selection = cljs.core.get.call(null,map__32054__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t32055 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32055 = (function (selection,app_state,map__32054,owner,p__32039,map_component,meta32056){
this.selection = selection;
this.app_state = app_state;
this.map__32054 = map__32054;
this.owner = owner;
this.p__32039 = p__32039;
this.map_component = map_component;
this.meta32056 = meta32056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32055.cljs$lang$type = true;
clustermap.components.map.t32055.cljs$lang$ctorStr = "clustermap.components.map/t32055";
clustermap.components.map.t32055.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t32055");
});
clustermap.components.map.t32055.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32055.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__32058,next_state){var self__ = this;
var map__32059 = p__32058;var map__32059__$1 = ((cljs.core.seq_QMARK_.call(null,map__32059))?cljs.core.apply.call(null,cljs.core.hash_map,map__32059):map__32059);var next_selection = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var next_locations = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var next_uk_constituencies = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var next_boundarylines = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847));var next_zoom = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword(null,"zoom","zoom",1017648965));var this$__$1 = this;var map__32060 = om.core.get_shared.call(null,self__.owner);var map__32060__$1 = ((cljs.core.seq_QMARK_.call(null,map__32060))?cljs.core.apply.call(null,cljs.core.hash_map,map__32060):map__32060);var path_fn = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var fetch_boundaryline_fn = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934));var map__32061 = om.core.get_state.call(null,self__.owner);var map__32061__$1 = ((cljs.core.seq_QMARK_.call(null,map__32061))?cljs.core.apply.call(null,cljs.core.hash_map,map__32061):map__32061);var map__32062 = cljs.core.get.call(null,map__32061__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__32062__$1 = ((cljs.core.seq_QMARK_.call(null,map__32062))?cljs.core.apply.call(null,cljs.core.hash_map,map__32062):map__32062);var paths = cljs.core.get.call(null,map__32062__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__32062__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__32062__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var pan_pending = cljs.core.get.call(null,map__32061__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121));clustermap.components.map.update_markers.call(null,path_fn,leaflet_map,markers,next_locations);
clustermap.components.map.update_paths.call(null,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,next_locations);
if(cljs.core.not_EQ_.call(null,next_selection,self__.selection))
{if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,paths))))
{clustermap.components.map.pan_to_selection.call(null,leaflet_map,cljs.core.deref.call(null,paths));
} else
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),true);
}
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
clustermap.components.map.t32055.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32055.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__32063 = clustermap.components.map.create_map.call(null,node);var map__32063__$1 = ((cljs.core.seq_QMARK_.call(null,map__32063))?cljs.core.apply.call(null,cljs.core.hash_map,map__32063):map__32063);var map = map__32063__$1;var path = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"path","path",1017337751));var markers = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"app-state","app-state",1424976215)),cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
}));
jayq.core.$.call(null,document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__32064 = om.core.get_state.call(null,self__.owner);var map__32064__$1 = ((cljs.core.seq_QMARK_.call(null,map__32064))?cljs.core.apply.call(null,cljs.core.hash_map,map__32064):map__32064);var map__32065 = cljs.core.get.call(null,map__32064__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__32065__$1 = ((cljs.core.seq_QMARK_.call(null,map__32065))?cljs.core.apply.call(null,cljs.core.hash_map,map__32065):map__32065);var paths = cljs.core.get.call(null,map__32065__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));leaflet_map.invalidateSize();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,paths))))
{return clustermap.components.map.pan_to_selection.call(null,leaflet_map,cljs.core.deref.call(null,paths));
} else
{return clustermap.components.map.locate_map.call(null,leaflet_map);
}
}));
return om.core.update_BANG_.call(null,self__.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
});
clustermap.components.map.t32055.prototype.om$core$IRender$ = true;
clustermap.components.map.t32055.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t32055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32057){var self__ = this;
var _32057__$1 = this;return self__.meta32056;
});
clustermap.components.map.t32055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32057,meta32056__$1){var self__ = this;
var _32057__$1 = this;return (new clustermap.components.map.t32055(self__.selection,self__.app_state,self__.map__32054,self__.owner,self__.p__32039,self__.map_component,meta32056__$1));
});
clustermap.components.map.__GT_t32055 = (function __GT_t32055(selection__$1,app_state__$1,map__32054__$2,owner__$1,p__32039__$1,map_component__$1,meta32056){return (new clustermap.components.map.t32055(selection__$1,app_state__$1,map__32054__$2,owner__$1,p__32039__$1,map_component__$1,meta32056));
});
}
return (new clustermap.components.map.t32055(selection,app_state,map__32054__$1,owner,p__32039,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,cljs.core.merge.call(null,shared,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-state","app-state",1424976215),app_state,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847))], null)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
