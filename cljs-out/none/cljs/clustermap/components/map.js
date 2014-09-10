// Compiled by ClojureScript 0.0-2268
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
clustermap.components.map.ticket = cljs.core.atom.call(null,(0));
clustermap.components.map.next_ticket = (function next_ticket(){return cljs.core.swap_BANG_.call(null,clustermap.components.map.ticket,cljs.core.inc);
});
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
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3529__auto__ = s;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = w;if(cljs.core.truth_(and__3529__auto____$1))
{var and__3529__auto____$2 = n;if(cljs.core.truth_(and__3529__auto____$2))
{return e;
} else
{return and__3529__auto____$2;
}
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js.call(null,initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3541__auto__ = (function (){var G__50337 = config;var G__50337__$1 = (((G__50337 == null))?null:G__50337.components);var G__50337__$2 = (((G__50337__$1 == null))?null:G__50337__$1.map);var G__50337__$3 = (((G__50337__$2 == null))?null:G__50337__$2.api_key);return G__50337__$3;
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m,initial_bounds);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747),m,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__50338){
var m = cljs.core.first(arglist__50338);
var all_bounds = cljs.core.rest(arglist__50338);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs50340 = cljs.core.map.call(null,(function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),site),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs50340))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-popup-location-list"], null),attrs50340)))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs50340))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__50343 = location_sites;var G__50343__$1 = (((G__50343 == null))?null:cljs.core.first.call(null,G__50343));var G__50343__$2 = (((G__50343__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__50343__$1));var G__50343__$3 = (((G__50343__$2 == null))?null:cljs.core.reverse.call(null,G__50343__$2));var G__50343__$4 = (((G__50343__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__50343__$3));return G__50343__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4468__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_50344_50345 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_50344_50345,sb__4468__auto__,temp__4124__auto__){
return (function (x__4469__auto__){return sb__4468__auto__.append(x__4469__auto__);
});})(_STAR_print_fn_STAR_50344_50345,sb__4468__auto__,temp__4124__auto__))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50344_50345;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4468__auto__));
})())));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,location_keys),location_keys], null)));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get_in.call(null,new_locations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"records","records",1326822832)], null)))], null);
});})(markers,marker_keys,location_keys,_,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var ___$1 = (function (){var seq__50350 = cljs.core.seq.call(null,remove_marker_keys);var chunk__50351 = null;var count__50352 = (0);var i__50353 = (0);while(true){
if((i__50353 < count__50352))
{var k = cljs.core._nth.call(null,chunk__50351,i__50353);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__50354 = seq__50350;
var G__50355 = chunk__50351;
var G__50356 = count__50352;
var G__50357 = (i__50353 + (1));
seq__50350 = G__50354;
chunk__50351 = G__50355;
count__50352 = G__50356;
i__50353 = G__50357;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50350);if(temp__4126__auto__)
{var seq__50350__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50350__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__50350__$1);{
var G__50358 = cljs.core.chunk_rest.call(null,seq__50350__$1);
var G__50359 = c__4297__auto__;
var G__50360 = cljs.core.count.call(null,c__4297__auto__);
var G__50361 = (0);
seq__50350 = G__50358;
chunk__50351 = G__50359;
count__50352 = G__50360;
i__50353 = G__50361;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__50350__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__50362 = cljs.core.next.call(null,seq__50350__$1);
var G__50363 = null;
var G__50364 = (0);
var G__50365 = (0);
seq__50350 = G__50362;
chunk__50351 = G__50363;
count__50352 = G__50364;
i__50353 = G__50365;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__50374 = cljs.core.js__GT_clj.call(null,envelope);var map__50374__$1 = ((cljs.core.seq_QMARK_.call(null,map__50374))?cljs.core.apply.call(null,cljs.core.hash_map,map__50374):map__50374);var clj_envelope = map__50374__$1;var vec__50375 = cljs.core.get.call(null,map__50374__$1,"coordinates");var vec__50376 = cljs.core.nth.call(null,vec__50375,(0),null);var vec__50377 = cljs.core.nth.call(null,vec__50376,(0),null);var miny0 = cljs.core.nth.call(null,vec__50377,(0),null);var minx0 = cljs.core.nth.call(null,vec__50377,(1),null);var vec__50378 = cljs.core.nth.call(null,vec__50376,(1),null);var maxy1 = cljs.core.nth.call(null,vec__50378,(0),null);var minx1 = cljs.core.nth.call(null,vec__50378,(1),null);var vec__50379 = cljs.core.nth.call(null,vec__50376,(2),null);var maxy2 = cljs.core.nth.call(null,vec__50379,(0),null);var maxx2 = cljs.core.nth.call(null,vec__50379,(1),null);var vec__50380 = cljs.core.nth.call(null,vec__50376,(3),null);var miny3 = cljs.core.nth.call(null,vec__50380,(0),null);var maxx3 = cljs.core.nth.call(null,vec__50380,(1),null);var vec__50381 = cljs.core.nth.call(null,vec__50376,(4),null);var miny4 = cljs.core.nth.call(null,vec__50381,(0),null);var minx4 = cljs.core.nth.call(null,vec__50381,(1),null);var inner = vec__50376;var coords = vec__50375;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__50382){var map__50384 = p__50382;var map__50384__$1 = ((cljs.core.seq_QMARK_.call(null,map__50384))?cljs.core.apply.call(null,cljs.core.hash_map,map__50384):map__50384);var fill_color = cljs.core.get.call(null,map__50384__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__50384__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__50384__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3529__auto__ = selected;if(cljs.core.truth_(and__3529__auto__))
{return highlighted;
} else
{return and__3529__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),(0)], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__50385){var map__50387 = p__50385;var map__50387__$1 = ((cljs.core.seq_QMARK_.call(null,map__50387))?cljs.core.apply.call(null,cljs.core.hash_map,map__50387):map__50387);var path_attrs = map__50387__$1;var selected = cljs.core.get.call(null,map__50387__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__50387,map__50387__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__50387,map__50387__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,leaflet_map,boundaryline_id,tolerance,js_boundaryline,path_attrs){return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__50388,tolerance,js_boundaryline,path_attrs){var map__50390 = p__50388;var map__50390__$1 = ((cljs.core.seq_QMARK_.call(null,map__50390))?cljs.core.apply.call(null,cljs.core.hash_map,map__50390):map__50390);var path = map__50390__$1;var boundaryline_id = cljs.core.get.call(null,map__50390__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__50404 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__50404,(0),null);var notifychan = cljs.core.nth.call(null,vec__50404,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan){
return (function (p__50405){var vec__50406 = p__50405;var k = cljs.core.nth.call(null,vec__50406,(0),null);var tolerance = cljs.core.nth.call(null,vec__50406,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__50406,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan){
return (function (k){var vec__50407 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__50407,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__50407,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = tolerance;if(cljs.core.truth_(and__3529__auto____$1))
{return js_boundaryline;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan,created_paths){
return (function (p__50408){var vec__50409 = p__50408;var k = cljs.core.nth.call(null,vec__50409,(0),null);var tolerance = cljs.core.nth.call(null,vec__50409,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__50409,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__50410 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__50410,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__50410,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = tolerance;if(cljs.core.truth_(and__3529__auto____$1))
{return js_boundaryline;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__50411 = cljs.core.seq.call(null,delete_path_keys);var chunk__50412 = null;var count__50413 = (0);var i__50414 = (0);while(true){
if((i__50414 < count__50413))
{var k = cljs.core._nth.call(null,chunk__50412,i__50414);var temp__4124__auto___50417 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___50417))
{var path_50418 = temp__4124__auto___50417;clustermap.components.map.delete_path.call(null,leaflet_map,path_50418);
} else
{}
{
var G__50419 = seq__50411;
var G__50420 = chunk__50412;
var G__50421 = count__50413;
var G__50422 = (i__50414 + (1));
seq__50411 = G__50419;
chunk__50412 = G__50420;
count__50413 = G__50421;
i__50414 = G__50422;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50411);if(temp__4126__auto__)
{var seq__50411__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50411__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__50411__$1);{
var G__50423 = cljs.core.chunk_rest.call(null,seq__50411__$1);
var G__50424 = c__4297__auto__;
var G__50425 = cljs.core.count.call(null,c__4297__auto__);
var G__50426 = (0);
seq__50411 = G__50423;
chunk__50412 = G__50424;
count__50413 = G__50425;
i__50414 = G__50426;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__50411__$1);var temp__4124__auto___50427 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___50427))
{var path_50428 = temp__4124__auto___50427;clustermap.components.map.delete_path.call(null,leaflet_map,path_50428);
} else
{}
{
var G__50429 = cljs.core.next.call(null,seq__50411__$1);
var G__50430 = null;
var G__50431 = (0);
var G__50432 = (0);
seq__50411 = G__50429;
chunk__50412 = G__50430;
count__50413 = G__50431;
i__50414 = G__50432;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__50415){var map__50416 = p__50415;var map__50416__$1 = ((cljs.core.seq_QMARK_.call(null,map__50416))?cljs.core.apply.call(null,cljs.core.hash_map,map__50416):map__50416);var path = map__50416__$1;var id = cljs.core.get.call(null,map__50416__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__50404,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = new cljs.core.Keyword(null,"compact_name","compact_name",1525822383).cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),bl_name], null)),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs50434 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs50434))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-constituency-name"], null),attrs50434)))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs50434))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__50437){var vec__50438 = p__50437;var tz = cljs.core.nth.call(null,vec__50438,(0),null);var collection = cljs.core.nth.call(null,vec__50438,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,blcoll,variable,filter,bounds){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_50483){var state_val_50484 = (state_50483[(1)]);if((state_val_50484 === (5)))
{var inst_50481 = (state_50483[(2)]);var state_50483__$1 = state_50483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50483__$1,inst_50481);
} else
{if((state_val_50484 === (4)))
{var state_50483__$1 = state_50483;var statearr_50485_50497 = state_50483__$1;(statearr_50485_50497[(2)] = null);
(statearr_50485_50497[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50484 === (3)))
{var inst_50470 = (state_50483[(7)]);var inst_50476 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377)];var inst_50477 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50476,null));var inst_50478 = set_app_state_fn.call(null,inst_50477,inst_50470);var state_50483__$1 = state_50483;var statearr_50486_50498 = state_50483__$1;(statearr_50486_50498[(2)] = inst_50478);
(statearr_50486_50498[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50484 === (2)))
{var inst_50470 = (state_50483[(2)]);var inst_50471 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)];var inst_50472 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50471,null));var inst_50473 = get_app_state_fn.call(null,inst_50472);var inst_50474 = cljs.core._EQ_.call(null,ticket,inst_50473);var state_50483__$1 = (function (){var statearr_50487 = state_50483;(statearr_50487[(7)] = inst_50470);
return statearr_50487;
})();if(inst_50474)
{var statearr_50488_50499 = state_50483__$1;(statearr_50488_50499[(1)] = (3));
} else
{var statearr_50489_50500 = state_50483__$1;(statearr_50489_50500[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50484 === (1)))
{var inst_50468 = clustermap.api.boundaryline_aggregation.call(null,index,index_type,blcoll,variable,filter,bounds);var state_50483__$1 = state_50483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50483__$1,(2),inst_50468);
} else
{return null;
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_50493 = [null,null,null,null,null,null,null,null];(statearr_50493[(0)] = state_machine__5677__auto__);
(statearr_50493[(1)] = (1));
return statearr_50493;
});
var state_machine__5677__auto____1 = (function (state_50483){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_50483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e50494){if((e50494 instanceof Object))
{var ex__5680__auto__ = e50494;var statearr_50495_50501 = state_50483;(statearr_50495_50501[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50483);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50502 = state_50483;
state_50483 = G__50502;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_50483){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_50483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_50496 = f__5692__auto__.call(null);(statearr_50496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_50496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.components.map.fetch_point_data = (function fetch_point_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,filter,bounds){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_50551){var state_val_50552 = (state_50551[(1)]);if((state_val_50552 === (5)))
{var inst_50549 = (state_50551[(2)]);var state_50551__$1 = state_50551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50551__$1,inst_50549);
} else
{if((state_val_50552 === (4)))
{var state_50551__$1 = state_50551;var statearr_50553_50565 = state_50551__$1;(statearr_50553_50565[(2)] = null);
(statearr_50553_50565[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50552 === (3)))
{var inst_50538 = (state_50551[(7)]);var inst_50544 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_50545 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50544,null));var inst_50546 = set_app_state_fn.call(null,inst_50545,inst_50538);var state_50551__$1 = state_50551;var statearr_50554_50566 = state_50551__$1;(statearr_50554_50566[(2)] = inst_50546);
(statearr_50554_50566[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50552 === (2)))
{var inst_50538 = (state_50551[(2)]);var inst_50539 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)];var inst_50540 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50539,null));var inst_50541 = get_app_state_fn.call(null,inst_50540);var inst_50542 = cljs.core._EQ_.call(null,ticket,inst_50541);var state_50551__$1 = (function (){var statearr_50555 = state_50551;(statearr_50555[(7)] = inst_50538);
return statearr_50555;
})();if(inst_50542)
{var statearr_50556_50567 = state_50551__$1;(statearr_50556_50567[(1)] = (3));
} else
{var statearr_50557_50568 = state_50551__$1;(statearr_50557_50568[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50552 === (1)))
{var inst_50534 = ["!name","!location","!latest_employee_count","!latest_turnover"];var inst_50535 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_50534,null));var inst_50536 = clustermap.api.location_lists.call(null,index,index_type,"!postcode",inst_50535,(1000),filter,bounds);var state_50551__$1 = state_50551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50551__$1,(2),inst_50536);
} else
{return null;
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_50561 = [null,null,null,null,null,null,null,null];(statearr_50561[(0)] = state_machine__5677__auto__);
(statearr_50561[(1)] = (1));
return statearr_50561;
});
var state_machine__5677__auto____1 = (function (state_50551){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_50551);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e50562){if((e50562 instanceof Object))
{var ex__5680__auto__ = e50562;var statearr_50563_50569 = state_50551;(statearr_50563_50569[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50570 = state_50551;
state_50551 = G__50570;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_50551){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_50551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_50564 = f__5692__auto__.call(null);(statearr_50564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_50564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__50571,owner){var map__50609 = p__50571;var map__50609__$1 = ((cljs.core.seq_QMARK_.call(null,map__50609))?cljs.core.apply.call(null,cljs.core.hash_map,map__50609):map__50609);var cursor = map__50609__$1;var map__50610 = cljs.core.get.call(null,map__50609__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__50610__$1 = ((cljs.core.seq_QMARK_.call(null,map__50610))?cljs.core.apply.call(null,cljs.core.hash_map,map__50610):map__50610);var initial_bounds = cljs.core.get.call(null,map__50610__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));if(typeof clustermap.components.map.t50611 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t50611 = (function (initial_bounds,map__50610,cursor,map__50609,owner,p__50571,map_component,meta50612){
this.initial_bounds = initial_bounds;
this.map__50610 = map__50610;
this.cursor = cursor;
this.map__50609 = map__50609;
this.owner = owner;
this.p__50571 = p__50571;
this.map_component = map_component;
this.meta50612 = meta50612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t50611.cljs$lang$type = true;
clustermap.components.map.t50611.cljs$lang$ctorStr = "clustermap.components.map/t50611";
clustermap.components.map.t50611.cljs$lang$ctorPrWriter = ((function (map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map/t50611");
});})(map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;
clustermap.components.map.t50611.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t50611.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (this$,p__50614,p__50615){var self__ = this;
var map__50616 = p__50614;var map__50616__$1 = ((cljs.core.seq_QMARK_.call(null,map__50616))?cljs.core.apply.call(null,cljs.core.hash_map,map__50616):map__50616);var next_filter = cljs.core.get.call(null,map__50616__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_data = cljs.core.get.call(null,map__50616__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__50616__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__50616__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__50617 = cljs.core.get.call(null,map__50616__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__50617__$1 = ((cljs.core.seq_QMARK_.call(null,map__50617))?cljs.core.apply.call(null,cljs.core.hash_map,map__50617):map__50617);var next_zoom = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_bounds = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_collection = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_colorchooser = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_agg = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_threshold_colors = cljs.core.get.call(null,map__50617__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var map__50618 = p__50615;var map__50618__$1 = ((cljs.core.seq_QMARK_.call(null,map__50618))?cljs.core.apply.call(null,cljs.core.hash_map,map__50618):map__50618);var map__50619 = cljs.core.get.call(null,map__50618__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__50619__$1 = ((cljs.core.seq_QMARK_.call(null,map__50619))?cljs.core.apply.call(null,cljs.core.hash_map,map__50619):map__50619);var next_markers = cljs.core.get.call(null,map__50619__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_paths = cljs.core.get.call(null,map__50619__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__50619__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__50618__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var this$__$1 = this;var map__50620 = om.core.get_props.call(null,self__.owner);var map__50620__$1 = ((cljs.core.seq_QMARK_.call(null,map__50620))?cljs.core.apply.call(null,cljs.core.hash_map,map__50620):map__50620);var filter = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var data = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__50621 = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__50621__$1 = ((cljs.core.seq_QMARK_.call(null,map__50621))?cljs.core.apply.call(null,cljs.core.hash_map,map__50621):map__50621);var threshold_colors = cljs.core.get.call(null,map__50621__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var boundaryline_agg = cljs.core.get.call(null,map__50621__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var colorchooser = cljs.core.get.call(null,map__50621__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var boundaryline_collection = cljs.core.get.call(null,map__50621__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var zoom = cljs.core.get.call(null,map__50621__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var bounds = cljs.core.get.call(null,map__50621__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds__$2 = cljs.core.get.call(null,map__50621__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var map__50622 = om.core.get_shared.call(null,self__.owner);var map__50622__$1 = ((cljs.core.seq_QMARK_.call(null,map__50622))?cljs.core.apply.call(null,cljs.core.hash_map,map__50622):map__50622);var get_app_state_fn = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"get-app-state-fn","get-app-state-fn",-1385178201));var set_app_state_fn = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"set-app-state-fn","set-app-state-fn",-1158769652));var point_in_boundarylines_fn = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var link_fn = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var path_fn = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__50622__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__50623 = om.core.get_state.call(null,self__.owner);var map__50623__$1 = ((cljs.core.seq_QMARK_.call(null,map__50623))?cljs.core.apply.call(null,cljs.core.hash_map,map__50623):map__50623);var map__50624 = cljs.core.get.call(null,map__50623__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__50624__$1 = ((cljs.core.seq_QMARK_.call(null,map__50624))?cljs.core.apply.call(null,cljs.core.hash_map,map__50624):map__50624);var path_selections = cljs.core.get.call(null,map__50624__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__50624__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__50624__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__50624__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__50623__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__50623__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3529__auto__ = leaflet_map;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = next_zoom;if(cljs.core.truth_(and__3529__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_zoom,zoom)) && (cljs.core.not_EQ_.call(null,next_zoom,leaflet_map.getZoom()));
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3529__auto__ = leaflet_map;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = next_bounds;if(cljs.core.truth_(and__3529__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_bounds,bounds)) && (cljs.core.not_EQ_.call(null,next_bounds,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds())));
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js.call(null,next_bounds));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3529__auto__ = leaflet_map;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = boundaryline_collections;if(cljs.core.truth_(and__3529__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936)], null),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3529__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3529__auto__))
{var or__3541__auto__ = (function (){var and__3529__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3529__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_agg,boundaryline_agg);
} else
{return and__3529__auto____$1;
}
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (cljs.core.not_EQ_.call(null,next_filter,filter)) || (cljs.core.not_EQ_.call(null,next_bounds,bounds));
}
} else
{return and__3529__auto__;
}
})()))
{var ticket_50646 = clustermap.components.map.next_ticket.call(null);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)], null),ticket_50646);
clustermap.components.map.fetch_aggregation_data.call(null,set_app_state_fn,get_app_state_fn,ticket_50646,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
clustermap.components.map.fetch_point_data.call(null,set_app_state_fn,get_app_state_fn,ticket_50646,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.call(null,next_data,data)) || (cljs.core.not_EQ_.call(null,next_colorchooser,colorchooser)))
{var vec__50625_50647 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_50648 = cljs.core.nth.call(null,vec__50625_50647,(0),null);var selection_path_colours_50649 = cljs.core.nth.call(null,vec__50625_50647,(1),null);var update_paths_invocation_50650 = ((function (vec__50625_50647,new_threshold_colors_50648,selection_path_colours_50649,map__50620,map__50620__$1,filter,data,point_data,boundaryline_collections,map__50621,map__50621__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__50622,map__50622__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__50623,map__50623__$1,map__50624,map__50624__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__50616,map__50616__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__50617,map__50617__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__50618,map__50618__$1,map__50619,map__50619__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_50649);
});})(vec__50625_50647,new_threshold_colors_50648,selection_path_colours_50649,map__50620,map__50620__$1,filter,data,point_data,boundaryline_collections,map__50621,map__50621__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__50622,map__50622__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__50623,map__50623__$1,map__50624,map__50624__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__50616,map__50616__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__50617,map__50617__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__50618,map__50618__$1,map__50619,map__50619__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_50648,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_50648);
} else
{}
var temp__4126__auto___50651 = update_paths_invocation_50650.call(null);if(cljs.core.truth_(temp__4126__auto___50651))
{var notify_chan_50652 = temp__4126__auto___50651;var c__5691__auto___50653 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___50653,notify_chan_50652,temp__4126__auto___50651,vec__50625_50647,new_threshold_colors_50648,selection_path_colours_50649,update_paths_invocation_50650,map__50620,map__50620__$1,filter,data,point_data,boundaryline_collections,map__50621,map__50621__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__50622,map__50622__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__50623,map__50623__$1,map__50624,map__50624__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__50616,map__50616__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__50617,map__50617__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__50618,map__50618__$1,map__50619,map__50619__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___50653,notify_chan_50652,temp__4126__auto___50651,vec__50625_50647,new_threshold_colors_50648,selection_path_colours_50649,update_paths_invocation_50650,map__50620,map__50620__$1,filter,data,point_data,boundaryline_collections,map__50621,map__50621__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__50622,map__50622__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__50623,map__50623__$1,map__50624,map__50624__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__50616,map__50616__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__50617,map__50617__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__50618,map__50618__$1,map__50619,map__50619__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (state_50630){var state_val_50631 = (state_50630[(1)]);if((state_val_50631 === (2)))
{var inst_50627 = (state_50630[(2)]);var inst_50628 = update_paths_invocation_50650.call(null);var state_50630__$1 = (function (){var statearr_50632 = state_50630;(statearr_50632[(7)] = inst_50627);
return statearr_50632;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50630__$1,inst_50628);
} else
{if((state_val_50631 === (1)))
{var state_50630__$1 = state_50630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50630__$1,(2),notify_chan_50652);
} else
{return null;
}
}
});})(c__5691__auto___50653,notify_chan_50652,temp__4126__auto___50651,vec__50625_50647,new_threshold_colors_50648,selection_path_colours_50649,update_paths_invocation_50650,map__50620,map__50620__$1,filter,data,point_data,boundaryline_collections,map__50621,map__50621__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__50622,map__50622__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__50623,map__50623__$1,map__50624,map__50624__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__50616,map__50616__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__50617,map__50617__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__50618,map__50618__$1,map__50619,map__50619__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;return ((function (switch__5676__auto__,c__5691__auto___50653,notify_chan_50652,temp__4126__auto___50651,vec__50625_50647,new_threshold_colors_50648,selection_path_colours_50649,update_paths_invocation_50650,map__50620,map__50620__$1,filter,data,point_data,boundaryline_collections,map__50621,map__50621__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__50622,map__50622__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__50623,map__50623__$1,map__50624,map__50624__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__50616,map__50616__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__50617,map__50617__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__50618,map__50618__$1,map__50619,map__50619__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_50636 = [null,null,null,null,null,null,null,null];(statearr_50636[(0)] = state_machine__5677__auto__);
(statearr_50636[(1)] = (1));
return statearr_50636;
});
var state_machine__5677__auto____1 = (function (state_50630){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_50630);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e50637){if((e50637 instanceof Object))
{var ex__5680__auto__ = e50637;var statearr_50638_50654 = state_50630;(statearr_50638_50654[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50655 = state_50630;
state_50630 = G__50655;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_50630){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_50630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___50653,notify_chan_50652,temp__4126__auto___50651,vec__50625_50647,new_threshold_colors_50648,selection_path_colours_50649,update_paths_invocation_50650,map__50620,map__50620__$1,filter,data,point_data,boundaryline_collections,map__50621,map__50621__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__50622,map__50622__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__50623,map__50623__$1,map__50624,map__50624__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__50616,map__50616__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__50617,map__50617__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__50618,map__50618__$1,map__50619,map__50619__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
})();var state__5693__auto__ = (function (){var statearr_50639 = f__5692__auto__.call(null);(statearr_50639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___50653);
return statearr_50639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___50653,notify_chan_50652,temp__4126__auto___50651,vec__50625_50647,new_threshold_colors_50648,selection_path_colours_50649,update_paths_invocation_50650,map__50620,map__50620__$1,filter,data,point_data,boundaryline_collections,map__50621,map__50621__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__50622,map__50622__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__50623,map__50623__$1,map__50624,map__50624__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__50616,map__50616__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__50617,map__50617__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__50618,map__50618__$1,map__50619,map__50619__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.call(null,next_point_data,point_data))
{return clustermap.components.map.update_markers.call(null,path_fn,leaflet_map,next_markers,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;
clustermap.components.map.t50611.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t50611.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__50640 = clustermap.components.map.create_map.call(null,node,self__.initial_bounds);var map__50640__$1 = ((cljs.core.seq_QMARK_.call(null,map__50640))?cljs.core.apply.call(null,cljs.core.hash_map,map__50640):map__50640);var map = map__50640__$1;var path = cljs.core.get.call(null,map__50640__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__50640__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__50640__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__50641 = om.core.get_shared.call(null,self__.owner);var map__50641__$1 = ((cljs.core.seq_QMARK_.call(null,map__50641))?cljs.core.apply.call(null,cljs.core.hash_map,map__50641):map__50641);var path_fn = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var point_in_boundarylines_fn = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
);
});})(node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = point_in_boundarylines_fn.call(null,lng,lat);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3529__auto__ = highlight_hit;if(cljs.core.truth_(and__3529__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134))));
} else
{return and__3529__auto__;
}
})()))
{var G__50642_50656 = L.popup();G__50642_50656.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__50642_50656.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__50642_50656.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),highlight_path_ids);
});})(node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (e){var hits = point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat);var boundaryline_id = (function (){var G__50643 = hits;var G__50643__$1 = (((G__50643 == null))?null:cljs.core.first.call(null,G__50643));var G__50643__$2 = (((G__50643__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__50643__$1));return G__50643__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__50640,map__50640__$1,map,path,markers,leaflet_map,map__50641,map__50641__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
);
});})(map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;
clustermap.components.map.t50611.prototype.om$core$IRender$ = true;
clustermap.components.map.t50611.prototype.om$core$IRender$render$arity$1 = ((function (map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;
clustermap.components.map.t50611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (_50613){var self__ = this;
var _50613__$1 = this;return self__.meta50612;
});})(map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;
clustermap.components.map.t50611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function (_50613,meta50612__$1){var self__ = this;
var _50613__$1 = this;return (new clustermap.components.map.t50611(self__.initial_bounds,self__.map__50610,self__.cursor,self__.map__50609,self__.owner,self__.p__50571,self__.map_component,meta50612__$1));
});})(map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;
clustermap.components.map.__GT_t50611 = ((function (map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds){
return (function __GT_t50611(initial_bounds__$1,map__50610__$2,cursor__$1,map__50609__$2,owner__$1,p__50571__$1,map_component__$1,meta50612){return (new clustermap.components.map.t50611(initial_bounds__$1,map__50610__$2,cursor__$1,map__50609__$2,owner__$1,p__50571__$1,map_component__$1,meta50612));
});})(map__50609,map__50609__$1,cursor,map__50610,map__50610__$1,initial_bounds))
;
}
return (new clustermap.components.map.t50611(initial_bounds,map__50610__$1,cursor,map__50609__$1,owner,p__50571,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=map.js.map