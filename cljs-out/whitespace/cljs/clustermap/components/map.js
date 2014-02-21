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
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js.call(null,clustermap.components.map.initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__33217 = config;var G__33217__$1 = (((G__33217 == null))?null:G__33217.components);var G__33217__$2 = (((G__33217__$1 == null))?null:G__33217__$1.map);var G__33217__$3 = (((G__33217__$2 == null))?null:G__33217__$2.api_key);return G__33217__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m,new cljs.core.Keyword(null,"markers","markers",1853155051),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",512369281),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__33218){
var m = cljs.core.first(arglist__33218);
var all_bounds = cljs.core.rest(arglist__33218);
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
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs33220 = cljs.core.map.call(null,(function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site),new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs33220))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),"map-marker-popup-location-list"], null),attrs33220))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"map-marker-popup-location-list\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs33220)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__33223 = location_sites;var G__33223__$1 = (((G__33223 == null))?null:cljs.core.first.call(null,G__33223));var G__33223__$2 = (((G__33223__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__33223__$1));var G__33223__$3 = (((G__33223__$2 == null))?null:cljs.core.reverse.call(null,G__33223__$2));var G__33223__$4 = (((G__33223__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__33223__$3));return G__33223__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",4570914700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",4290568192),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,28], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",1041293811),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-22], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1017130987),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_33224_33225 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33224_33225;
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
,update_marker_keys));var _ = (function (){var seq__33230 = cljs.core.seq.call(null,remove_marker_keys);var chunk__33231 = null;var count__33232 = 0;var i__33233 = 0;while(true){
if((i__33233 < count__33232))
{var k = cljs.core._nth.call(null,chunk__33231,i__33233);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__33234 = seq__33230;
var G__33235 = chunk__33231;
var G__33236 = count__33232;
var G__33237 = (i__33233 + 1);
seq__33230 = G__33234;
chunk__33231 = G__33235;
count__33232 = G__33236;
i__33233 = G__33237;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33230);if(temp__4092__auto__)
{var seq__33230__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33230__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33230__$1);{
var G__33238 = cljs.core.chunk_rest.call(null,seq__33230__$1);
var G__33239 = c__4148__auto__;
var G__33240 = cljs.core.count.call(null,c__4148__auto__);
var G__33241 = 0;
seq__33230 = G__33238;
chunk__33231 = G__33239;
count__33232 = G__33240;
i__33233 = G__33241;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__33230__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__33242 = cljs.core.next.call(null,seq__33230__$1);
var G__33243 = null;
var G__33244 = 0;
var G__33245 = 0;
seq__33230 = G__33242;
chunk__33231 = G__33243;
count__33232 = G__33244;
i__33233 = G__33245;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__33254 = cljs.core.js__GT_clj.call(null,envelope);var map__33254__$1 = ((cljs.core.seq_QMARK_.call(null,map__33254))?cljs.core.apply.call(null,cljs.core.hash_map,map__33254):map__33254);var clj_envelope = map__33254__$1;var vec__33255 = cljs.core.get.call(null,map__33254__$1,"coordinates");var vec__33256 = cljs.core.nth.call(null,vec__33255,0,null);var vec__33257 = cljs.core.nth.call(null,vec__33256,0,null);var miny0 = cljs.core.nth.call(null,vec__33257,0,null);var minx0 = cljs.core.nth.call(null,vec__33257,1,null);var vec__33258 = cljs.core.nth.call(null,vec__33256,1,null);var maxy1 = cljs.core.nth.call(null,vec__33258,0,null);var minx1 = cljs.core.nth.call(null,vec__33258,1,null);var vec__33259 = cljs.core.nth.call(null,vec__33256,2,null);var maxy2 = cljs.core.nth.call(null,vec__33259,0,null);var maxx2 = cljs.core.nth.call(null,vec__33259,1,null);var vec__33260 = cljs.core.nth.call(null,vec__33256,3,null);var miny3 = cljs.core.nth.call(null,vec__33260,0,null);var maxx3 = cljs.core.nth.call(null,vec__33260,1,null);var vec__33261 = cljs.core.nth.call(null,vec__33256,4,null);var miny4 = cljs.core.nth.call(null,vec__33261,0,null);var minx4 = cljs.core.nth.call(null,vec__33261,1,null);var inner = vec__33256;var coords = vec__33255;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
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
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__33262){var map__33264 = p__33262;var map__33264__$1 = ((cljs.core.seq_QMARK_.call(null,map__33264))?cljs.core.apply.call(null,cljs.core.hash_map,map__33264):map__33264);var highlighted = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"highlighted","highlighted",3500421061));var selected = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));if(cljs.core.truth_((function (){var and__3394__auto__ = selected;if(cljs.core.truth_(and__3394__auto__))
{return highlighted;
} else
{return and__3394__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#0000aa",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#0000aa",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1108746965),"#000000",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#ff0000",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),0,new cljs.core.Keyword(null,"fill","fill",1017047285),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__33265){var map__33267 = p__33265;var map__33267__$1 = ((cljs.core.seq_QMARK_.call(null,map__33267))?cljs.core.apply.call(null,cljs.core.hash_map,map__33267):map__33267);var path_attrs = map__33267__$1;var selected = cljs.core.get.call(null,map__33267__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",1013907597),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895),tolerance,new cljs.core.Keyword(null,"selected","selected",2205476365),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__33269 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__33269,0,null);var js_boundaryline = cljs.core.nth.call(null,vec__33269,1,null);return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__33270,path_attrs){var map__33273 = p__33270;var map__33273__$1 = ((cljs.core.seq_QMARK_.call(null,map__33273))?cljs.core.apply.call(null,cljs.core.hash_map,map__33273):map__33273);var path = map__33273__$1;var boundaryline_id = cljs.core.get.call(null,map__33273__$1,new cljs.core.Keyword(null,"id","id",1013907597));var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__33274 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__33274,0,null);var js_boundaryline = cljs.core.nth.call(null,vec__33274,1,null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_selection_locations)))));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"highlighted","highlighted",3500421061),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.call(null,paths,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"highlighted","highlighted",3500421061),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__33281 = cljs.core.seq.call(null,delete_path_keys);var chunk__33282 = null;var count__33283 = 0;var i__33284 = 0;while(true){
if((i__33284 < count__33283))
{var k = cljs.core._nth.call(null,chunk__33282,i__33284);var temp__4090__auto___33287 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4090__auto___33287))
{var path_33288 = temp__4090__auto___33287;clustermap.components.map.delete_path.call(null,leaflet_map,path_33288);
} else
{}
{
var G__33289 = seq__33281;
var G__33290 = chunk__33282;
var G__33291 = count__33283;
var G__33292 = (i__33284 + 1);
seq__33281 = G__33289;
chunk__33282 = G__33290;
count__33283 = G__33291;
i__33284 = G__33292;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33281);if(temp__4092__auto__)
{var seq__33281__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33281__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33281__$1);{
var G__33293 = cljs.core.chunk_rest.call(null,seq__33281__$1);
var G__33294 = c__4148__auto__;
var G__33295 = cljs.core.count.call(null,c__4148__auto__);
var G__33296 = 0;
seq__33281 = G__33293;
chunk__33282 = G__33294;
count__33283 = G__33295;
i__33284 = G__33296;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__33281__$1);var temp__4090__auto___33297 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4090__auto___33297))
{var path_33298 = temp__4090__auto___33297;clustermap.components.map.delete_path.call(null,leaflet_map,path_33298);
} else
{}
{
var G__33299 = cljs.core.next.call(null,seq__33281__$1);
var G__33300 = null;
var G__33301 = 0;
var G__33302 = 0;
seq__33281 = G__33299;
chunk__33282 = G__33300;
count__33283 = G__33301;
i__33284 = G__33302;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_){
return (function (m,p__33285){var map__33286 = p__33285;var map__33286__$1 = ((cljs.core.seq_QMARK_.call(null,map__33286))?cljs.core.apply.call(null,cljs.core.hash_map,map__33286):map__33286);var path = map__33286__$1;var id = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref.call(null,paths_atom);var path_selections = cljs.core.deref.call(null,path_selections_atom);if(cljs.core.empty_QMARK_.call(null,paths))
{clustermap.components.map.locate_map.call(null,leaflet_map);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),true);
} else
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),false);
var temp__4090__auto__ = (function (){var G__33304 = cljs.core.select_keys.call(null,paths,path_selections);var G__33304__$1 = (((G__33304 == null))?null:cljs.core.vals.call(null,G__33304));var G__33304__$2 = (((G__33304__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__33304__$1));return G__33304__$2;
})();if(cljs.core.truth_(temp__4090__auto__))
{var bounds = temp__4090__auto__;return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show.call(null,clustermap.components.map.initial_bounds);
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__33305,owner){var map__33325 = p__33305;var map__33325__$1 = ((cljs.core.seq_QMARK_.call(null,map__33325))?cljs.core.apply.call(null,cljs.core.hash_map,map__33325):map__33325);var app_state = map__33325__$1;var selection = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t33326 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t33326 = (function (selection,app_state,map__33325,owner,p__33305,map_component,meta33327){
this.selection = selection;
this.app_state = app_state;
this.map__33325 = map__33325;
this.owner = owner;
this.p__33305 = p__33305;
this.map_component = map_component;
this.meta33327 = meta33327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t33326.cljs$lang$type = true;
clustermap.components.map.t33326.cljs$lang$ctorStr = "clustermap.components.map/t33326";
clustermap.components.map.t33326.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t33326");
});
clustermap.components.map.t33326.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t33326.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__33329,p__33330){var self__ = this;
var map__33331 = p__33329;var map__33331__$1 = ((cljs.core.seq_QMARK_.call(null,map__33331))?cljs.core.apply.call(null,cljs.core.hash_map,map__33331):map__33331);var next_selection = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var next_locations = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var next_uk_constituencies = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var next_uk_constituencies_rtree = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600));var next_boundarylines = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847));var next_zoom = cljs.core.get.call(null,map__33331__$1,new cljs.core.Keyword(null,"zoom","zoom",1017648965));var map__33332 = p__33330;var map__33332__$1 = ((cljs.core.seq_QMARK_.call(null,map__33332))?cljs.core.apply.call(null,cljs.core.hash_map,map__33332):map__33332);var next_path_highlights = cljs.core.get.call(null,map__33332__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));var this$__$1 = this;var map__33333 = om.core.get_props.call(null,self__.owner);var map__33333__$1 = ((cljs.core.seq_QMARK_.call(null,map__33333))?cljs.core.apply.call(null,cljs.core.hash_map,map__33333):map__33333);var uk_constituencies_rtree = cljs.core.get.call(null,map__33333__$1,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600));var map__33334 = om.core.get_shared.call(null,self__.owner);var map__33334__$1 = ((cljs.core.seq_QMARK_.call(null,map__33334))?cljs.core.apply.call(null,cljs.core.hash_map,map__33334):map__33334);var path_fn = cljs.core.get.call(null,map__33334__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__33334__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var fetch_boundaryline_fn = cljs.core.get.call(null,map__33334__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934));var comm = cljs.core.get.call(null,map__33334__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__33335 = om.core.get_state.call(null,self__.owner);var map__33335__$1 = ((cljs.core.seq_QMARK_.call(null,map__33335))?cljs.core.apply.call(null,cljs.core.hash_map,map__33335):map__33335);var map__33336 = cljs.core.get.call(null,map__33335__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__33336__$1 = ((cljs.core.seq_QMARK_.call(null,map__33336))?cljs.core.apply.call(null,cljs.core.hash_map,map__33336):map__33336);var path_selections = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"path-selections","path-selections",512369281));var paths = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var pan_pending = cljs.core.get.call(null,map__33335__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121));var path_highlights = cljs.core.get.call(null,map__33335__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));clustermap.components.map.update_markers.call(null,path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.call(null,next_uk_constituencies_rtree,uk_constituencies_rtree))
{leaflet_map.on("mousemove",(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons.call(null,next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.call(null,((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_ids = cljs.core.set.call(null,cljs.core.take.call(null,1,hit_path_ids));var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));if(cljs.core.truth_((function (){var and__3394__auto__ = highlight_hit;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids);
} else
{return and__3394__auto__;
}
})()))
{var G__33337_33344 = L.popup();G__33337_33344.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__33337_33344.setContent([cljs.core.str("<p>"),cljs.core.str((function (){var G__33338 = highlight_hit;var G__33338__$1 = (((G__33338 == null))?null:G__33338.properties);var G__33338__$2 = (((G__33338__$1 == null))?null:G__33338__$1.compact_name);return G__33338__$2;
})()),cljs.core.str("</p>")].join(''));
G__33337_33344.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745),highlight_path_ids);
}));
leaflet_map.on("click",(function (e){var hits = clustermap.rtree.point_in_polygons.call(null,next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.call(null,((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),cljs.core.first.call(null,hit_path_ids)], null)], null));
}));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths.call(null,comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3406__auto__ = pan_pending;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not_EQ_.call(null,next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t33326.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t33326.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__33339 = clustermap.components.map.create_map.call(null,node);var map__33339__$1 = ((cljs.core.seq_QMARK_.call(null,map__33339))?cljs.core.apply.call(null,cljs.core.hash_map,map__33339):map__33339);var map = map__33339__$1;var path = cljs.core.get.call(null,map__33339__$1,new cljs.core.Keyword(null,"path","path",1017337751));var markers = cljs.core.get.call(null,map__33339__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__33339__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"app-state","app-state",1424976215)),cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
}));
jayq.core.$.call(null,document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__33340 = om.core.get_state.call(null,self__.owner);var map__33340__$1 = ((cljs.core.seq_QMARK_.call(null,map__33340))?cljs.core.apply.call(null,cljs.core.hash_map,map__33340):map__33340);var map__33341 = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__33341__$1 = ((cljs.core.seq_QMARK_.call(null,map__33341))?cljs.core.apply.call(null,cljs.core.hash_map,map__33341):map__33341);var path_selections = cljs.core.get.call(null,map__33341__$1,new cljs.core.Keyword(null,"path-selections","path-selections",512369281));var paths = cljs.core.get.call(null,map__33341__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.call(null,self__.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
});
clustermap.components.map.t33326.prototype.om$core$IRender$ = true;
clustermap.components.map.t33326.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t33326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33328){var self__ = this;
var _33328__$1 = this;return self__.meta33327;
});
clustermap.components.map.t33326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33328,meta33327__$1){var self__ = this;
var _33328__$1 = this;return (new clustermap.components.map.t33326(self__.selection,self__.app_state,self__.map__33325,self__.owner,self__.p__33305,self__.map_component,meta33327__$1));
});
clustermap.components.map.__GT_t33326 = (function __GT_t33326(selection__$1,app_state__$1,map__33325__$2,owner__$1,p__33305__$1,map_component__$1,meta33327){return (new clustermap.components.map.t33326(selection__$1,app_state__$1,map__33325__$2,owner__$1,p__33305__$1,map_component__$1,meta33327));
});
}
return (new clustermap.components.map.t33326(selection,app_state,map__33325__$1,owner,p__33305,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,cljs.core.merge.call(null,shared,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-state","app-state",1424976215),app_state,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847))], null)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
