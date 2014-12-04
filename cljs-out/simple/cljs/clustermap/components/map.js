// Compiled by ClojureScript 0.0-2356
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
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js.call(null,clustermap.components.map.initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3639__auto__ = (function (){var G__13260 = config;var G__13260__$1 = (((G__13260 == null))?null:G__13260.components);var G__13260__$2 = (((G__13260__$1 == null))?null:G__13260__$1.map);var G__13260__$3 = (((G__13260__$2 == null))?null:G__13260__$2.api_key);return G__13260__$3;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747),m,new cljs.core.Keyword(null,"markers","markers",-246919693),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3627__auto__ = s;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = w;if(cljs.core.truth_(and__3627__auto____$1))
{var and__3627__auto____$2 = n;if(cljs.core.truth_(and__3627__auto____$2))
{return e;
} else
{return and__3627__auto____$2;
}
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__13261){
var m = cljs.core.first(arglist__13261);
var all_bounds = cljs.core.rest(arglist__13261);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13263 = cljs.core.map.call(null,(function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),site),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs13263))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-popup-location-list"], null),attrs13263)))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13263))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__13266 = location_sites;var G__13266__$1 = (((G__13266 == null))?null:cljs.core.first.call(null,G__13266));var G__13266__$2 = (((G__13266__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__13266__$1));var G__13266__$3 = (((G__13266__$2 == null))?null:cljs.core.reverse.call(null,G__13266__$2));var G__13266__$4 = (((G__13266__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__13266__$3));return G__13266__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4579__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13267_13268 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13267_13268,sb__4579__auto__,temp__4124__auto__){
return (function (x__4580__auto__){return sb__4579__auto__.append(x__4580__auto__);
});})(_STAR_print_fn_STAR_13267_13268,sb__4579__auto__,temp__4124__auto__))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13267_13268;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4579__auto__));
})())));
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
,update_marker_keys));var _ = (function (){var seq__13273 = cljs.core.seq.call(null,remove_marker_keys);var chunk__13274 = null;var count__13275 = (0);var i__13276 = (0);while(true){
if((i__13276 < count__13275))
{var k = cljs.core._nth.call(null,chunk__13274,i__13276);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__13277 = seq__13273;
var G__13278 = chunk__13274;
var G__13279 = count__13275;
var G__13280 = (i__13276 + (1));
seq__13273 = G__13277;
chunk__13274 = G__13278;
count__13275 = G__13279;
i__13276 = G__13280;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13273);if(temp__4126__auto__)
{var seq__13273__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13273__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__13273__$1);{
var G__13281 = cljs.core.chunk_rest.call(null,seq__13273__$1);
var G__13282 = c__4408__auto__;
var G__13283 = cljs.core.count.call(null,c__4408__auto__);
var G__13284 = (0);
seq__13273 = G__13281;
chunk__13274 = G__13282;
count__13275 = G__13283;
i__13276 = G__13284;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__13273__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__13285 = cljs.core.next.call(null,seq__13273__$1);
var G__13286 = null;
var G__13287 = (0);
var G__13288 = (0);
seq__13273 = G__13285;
chunk__13274 = G__13286;
count__13275 = G__13287;
i__13276 = G__13288;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__13297 = cljs.core.js__GT_clj.call(null,envelope);var map__13297__$1 = ((cljs.core.seq_QMARK_.call(null,map__13297))?cljs.core.apply.call(null,cljs.core.hash_map,map__13297):map__13297);var clj_envelope = map__13297__$1;var vec__13298 = cljs.core.get.call(null,map__13297__$1,"coordinates");var vec__13299 = cljs.core.nth.call(null,vec__13298,(0),null);var vec__13300 = cljs.core.nth.call(null,vec__13299,(0),null);var miny0 = cljs.core.nth.call(null,vec__13300,(0),null);var minx0 = cljs.core.nth.call(null,vec__13300,(1),null);var vec__13301 = cljs.core.nth.call(null,vec__13299,(1),null);var maxy1 = cljs.core.nth.call(null,vec__13301,(0),null);var minx1 = cljs.core.nth.call(null,vec__13301,(1),null);var vec__13302 = cljs.core.nth.call(null,vec__13299,(2),null);var maxy2 = cljs.core.nth.call(null,vec__13302,(0),null);var maxx2 = cljs.core.nth.call(null,vec__13302,(1),null);var vec__13303 = cljs.core.nth.call(null,vec__13299,(3),null);var miny3 = cljs.core.nth.call(null,vec__13303,(0),null);var maxx3 = cljs.core.nth.call(null,vec__13303,(1),null);var vec__13304 = cljs.core.nth.call(null,vec__13299,(4),null);var miny4 = cljs.core.nth.call(null,vec__13304,(0),null);var minx4 = cljs.core.nth.call(null,vec__13304,(1),null);var inner = vec__13299;var coords = vec__13298;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3639__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,zoom,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318),(7));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__13305){var map__13307 = p__13305;var map__13307__$1 = ((cljs.core.seq_QMARK_.call(null,map__13307))?cljs.core.apply.call(null,cljs.core.hash_map,map__13307):map__13307);var highlighted = cljs.core.get.call(null,map__13307__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__13307__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3627__auto__ = selected;if(cljs.core.truth_(and__3627__auto__))
{return highlighted;
} else
{return and__3627__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000aa",new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#0000aa",new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),false], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"#ff0000",new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__13308){var map__13310 = p__13308;var map__13310__$1 = ((cljs.core.seq_QMARK_.call(null,map__13310))?cljs.core.apply.call(null,cljs.core.hash_map,map__13310):map__13310);var path_attrs = map__13310__$1;var selected = cljs.core.get.call(null,map__13310__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__13310,map__13310__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__13310,map__13310__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4124__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4124__auto__))
{var vec__13312 = temp__4124__auto__;var tolerance = cljs.core.nth.call(null,vec__13312,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__13312,(1),null);return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__13313,path_attrs){var map__13316 = p__13313;var map__13316__$1 = ((cljs.core.seq_QMARK_.call(null,map__13316))?cljs.core.apply.call(null,cljs.core.hash_map,map__13316):map__13316);var path = map__13316__$1;var boundaryline_id = cljs.core.get.call(null,map__13316__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var temp__4124__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4124__auto__))
{var vec__13317 = temp__4124__auto__;var tolerance = cljs.core.nth.call(null,vec__13317,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__13317,(1),null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",-1502047669),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",-169762782)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_selection_locations)))));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.call(null,paths,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__13324 = cljs.core.seq.call(null,delete_path_keys);var chunk__13325 = null;var count__13326 = (0);var i__13327 = (0);while(true){
if((i__13327 < count__13326))
{var k = cljs.core._nth.call(null,chunk__13325,i__13327);var temp__4124__auto___13330 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___13330))
{var path_13331 = temp__4124__auto___13330;clustermap.components.map.delete_path.call(null,leaflet_map,path_13331);
} else
{}
{
var G__13332 = seq__13324;
var G__13333 = chunk__13325;
var G__13334 = count__13326;
var G__13335 = (i__13327 + (1));
seq__13324 = G__13332;
chunk__13325 = G__13333;
count__13326 = G__13334;
i__13327 = G__13335;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13324);if(temp__4126__auto__)
{var seq__13324__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13324__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__13324__$1);{
var G__13336 = cljs.core.chunk_rest.call(null,seq__13324__$1);
var G__13337 = c__4408__auto__;
var G__13338 = cljs.core.count.call(null,c__4408__auto__);
var G__13339 = (0);
seq__13324 = G__13336;
chunk__13325 = G__13337;
count__13326 = G__13338;
i__13327 = G__13339;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__13324__$1);var temp__4124__auto___13340 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___13340))
{var path_13341 = temp__4124__auto___13340;clustermap.components.map.delete_path.call(null,leaflet_map,path_13341);
} else
{}
{
var G__13342 = cljs.core.next.call(null,seq__13324__$1);
var G__13343 = null;
var G__13344 = (0);
var G__13345 = (0);
seq__13324 = G__13342;
chunk__13325 = G__13343;
count__13326 = G__13344;
i__13327 = G__13345;
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
return (function (m,p__13328){var map__13329 = p__13328;var map__13329__$1 = ((cljs.core.seq_QMARK_.call(null,map__13329))?cljs.core.apply.call(null,cljs.core.hash_map,map__13329):map__13329);var path = map__13329__$1;var id = cljs.core.get.call(null,map__13329__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref.call(null,paths_atom);var path_selections = cljs.core.deref.call(null,path_selections_atom);if(cljs.core.empty_QMARK_.call(null,path_selections))
{return clustermap.components.map.locate_map.call(null,leaflet_map);
} else
{if(cljs.core.empty_QMARK_.call(null,paths))
{return om.core.set_state.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779),true);
} else
{if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779))))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779),false);
} else
{}
var temp__4124__auto__ = (function (){var G__13347 = cljs.core.select_keys.call(null,paths,path_selections);var G__13347__$1 = (((G__13347 == null))?null:cljs.core.vals.call(null,G__13347));var G__13347__$2 = (((G__13347__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),G__13347__$1));var G__13347__$3 = (((G__13347__$2 == null))?null:cljs.core.not_empty.call(null,G__13347__$2));return G__13347__$3;
})();if(cljs.core.truth_(temp__4124__auto__))
{var bounds = temp__4124__auto__;return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show.call(null,clustermap.components.map.initial_bounds);
}
}
}
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = (function (){var G__13351 = constituency;var G__13351__$1 = (((G__13351 == null))?null:G__13351.properties);var G__13351__$2 = (((G__13351__$1 == null))?null:G__13351__$1.id);return G__13351__$2;
})();var bl_name = (function (){var G__13352 = constituency;var G__13352__$1 = (((G__13352 == null))?null:G__13352.properties);var G__13352__$2 = (((G__13352__$1 == null))?null:G__13352__$1.compact_name);return G__13352__$2;
})();return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),bl_name], null)),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13353 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs13353))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-constituency-name"], null),attrs13353)))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13353))+"</span>");
}
})())+"</a>");
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__13354,owner){var map__13373 = p__13354;var map__13373__$1 = ((cljs.core.seq_QMARK_.call(null,map__13373))?cljs.core.apply.call(null,cljs.core.hash_map,map__13373):map__13373);var app_state = map__13373__$1;var selection = cljs.core.get.call(null,map__13373__$1,new cljs.core.Keyword(null,"selection","selection",975998651));if(typeof clustermap.components.map.t13374 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t13374 = (function (selection,app_state,map__13373,owner,p__13354,map_component,meta13375){
this.selection = selection;
this.app_state = app_state;
this.map__13373 = map__13373;
this.owner = owner;
this.p__13354 = p__13354;
this.map_component = map_component;
this.meta13375 = meta13375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t13374.cljs$lang$type = true;
clustermap.components.map.t13374.cljs$lang$ctorStr = "clustermap.components.map/t13374";
clustermap.components.map.t13374.cljs$lang$ctorPrWriter = ((function (map__13373,map__13373__$1,app_state,selection){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map/t13374");
});})(map__13373,map__13373__$1,app_state,selection))
;
clustermap.components.map.t13374.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t13374.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13373,map__13373__$1,app_state,selection){
return (function (this$,p__13377,p__13378){var self__ = this;
var map__13379 = p__13377;var map__13379__$1 = ((cljs.core.seq_QMARK_.call(null,map__13379))?cljs.core.apply.call(null,cljs.core.hash_map,map__13379):map__13379);var next_selection = cljs.core.get.call(null,map__13379__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var next_locations = cljs.core.get.call(null,map__13379__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",-1948963855));var next_uk_constituencies = cljs.core.get.call(null,map__13379__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",-685500855));var next_uk_constituencies_rtree = cljs.core.get.call(null,map__13379__$1,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402));var next_boundarylines = cljs.core.get.call(null,map__13379__$1,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708));var next_zoom = cljs.core.get.call(null,map__13379__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var map__13380 = p__13378;var map__13380__$1 = ((cljs.core.seq_QMARK_.call(null,map__13380))?cljs.core.apply.call(null,cljs.core.hash_map,map__13380):map__13380);var next_path_highlights = cljs.core.get.call(null,map__13380__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var this$__$1 = this;var map__13381 = om.core.get_props.call(null,self__.owner);var map__13381__$1 = ((cljs.core.seq_QMARK_.call(null,map__13381))?cljs.core.apply.call(null,cljs.core.hash_map,map__13381):map__13381);var uk_constituencies_rtree = cljs.core.get.call(null,map__13381__$1,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",-1849185402));var map__13382 = om.core.get_shared.call(null,self__.owner);var map__13382__$1 = ((cljs.core.seq_QMARK_.call(null,map__13382))?cljs.core.apply.call(null,cljs.core.hash_map,map__13382):map__13382);var path_fn = cljs.core.get.call(null,map__13382__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__13382__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var fetch_boundaryline_fn = cljs.core.get.call(null,map__13382__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",-1105464009));var comm = cljs.core.get.call(null,map__13382__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__13383 = om.core.get_state.call(null,self__.owner);var map__13383__$1 = ((cljs.core.seq_QMARK_.call(null,map__13383))?cljs.core.apply.call(null,cljs.core.hash_map,map__13383):map__13383);var map__13384 = cljs.core.get.call(null,map__13383__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__13384__$1 = ((cljs.core.seq_QMARK_.call(null,map__13384))?cljs.core.apply.call(null,cljs.core.hash_map,map__13384):map__13384);var path_selections = cljs.core.get.call(null,map__13384__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__13384__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__13384__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__13384__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__13383__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__13383__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var mousemove_listener = cljs.core.get.call(null,map__13383__$1,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",1599643823));var click_listener = cljs.core.get.call(null,map__13383__$1,new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084));clustermap.components.map.update_markers.call(null,path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.call(null,next_uk_constituencies_rtree,uk_constituencies_rtree))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",1599643823),((function (map__13381,map__13381__$1,uk_constituencies_rtree,map__13382,map__13382__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__13383,map__13383__$1,map__13384,map__13384__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__13379,map__13379__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__13380,map__13380__$1,next_path_highlights,map__13373,map__13373__$1,app_state,selection){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons.call(null,next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.call(null,((function (lat,lng,hits,map__13381,map__13381__$1,uk_constituencies_rtree,map__13382,map__13382__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__13383,map__13383__$1,map__13384,map__13384__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__13379,map__13379__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__13380,map__13380__$1,next_path_highlights,map__13373,map__13373__$1,app_state,selection){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits,map__13381,map__13381__$1,uk_constituencies_rtree,map__13382,map__13382__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__13383,map__13383__$1,map__13384,map__13384__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__13379,map__13379__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__13380,map__13380__$1,next_path_highlights,map__13373,map__13373__$1,app_state,selection))
,hits);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_ids = cljs.core.set.call(null,cljs.core.take.call(null,(1),hit_path_ids));var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3627__auto__ = highlight_hit;if(cljs.core.truth_(and__3627__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134))));
} else
{return and__3627__auto__;
}
})()))
{var G__13385_13391 = L.popup();G__13385_13391.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__13385_13391.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__13385_13391.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),highlight_path_ids);
});})(map__13381,map__13381__$1,uk_constituencies_rtree,map__13382,map__13382__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__13383,map__13383__$1,map__13384,map__13384__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__13379,map__13379__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__13380,map__13380__$1,next_path_highlights,map__13373,map__13373__$1,app_state,selection))
);
if(cljs.core.truth_(mousemove_listener))
{leaflet_map.off("mousemove",mousemove_listener);
} else
{}
leaflet_map.on("mousemove",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",1599643823)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084),((function (map__13381,map__13381__$1,uk_constituencies_rtree,map__13382,map__13382__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__13383,map__13383__$1,map__13384,map__13384__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__13379,map__13379__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__13380,map__13380__$1,next_path_highlights,map__13373,map__13373__$1,app_state,selection){
return (function (e){var hits = clustermap.rtree.point_in_polygons.call(null,next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.call(null,((function (hits,map__13381,map__13381__$1,uk_constituencies_rtree,map__13382,map__13382__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__13383,map__13383__$1,map__13384,map__13384__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__13379,map__13379__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__13380,map__13380__$1,next_path_highlights,map__13373,map__13373__$1,app_state,selection){
return (function (hit){return hit.properties.id;
});})(hits,map__13381,map__13381__$1,uk_constituencies_rtree,map__13382,map__13382__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__13383,map__13383__$1,map__13384,map__13384__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__13379,map__13379__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__13380,map__13380__$1,next_path_highlights,map__13373,map__13373__$1,app_state,selection))
,hits);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),cljs.core.first.call(null,hit_path_ids)], null)], null));
});})(map__13381,map__13381__$1,uk_constituencies_rtree,map__13382,map__13382__$1,path_fn,link_fn,fetch_boundaryline_fn,comm,map__13383,map__13383__$1,map__13384,map__13384__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,mousemove_listener,click_listener,this$__$1,map__13379,map__13379__$1,next_selection,next_locations,next_uk_constituencies,next_uk_constituencies_rtree,next_boundarylines,next_zoom,map__13380,map__13380__$1,next_path_highlights,map__13373,map__13373__$1,app_state,selection))
);
if(cljs.core.truth_(click_listener))
{leaflet_map.off("click",click_listener);
} else
{}
leaflet_map.on("click",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084)));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths.call(null,comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3639__auto__ = pan_pending;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not_EQ_.call(null,next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});})(map__13373,map__13373__$1,app_state,selection))
;
clustermap.components.map.t13374.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t13374.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__13373,map__13373__$1,app_state,selection){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__13386 = clustermap.components.map.create_map.call(null,node);var map__13386__$1 = ((cljs.core.seq_QMARK_.call(null,map__13386))?cljs.core.apply.call(null,cljs.core.hash_map,map__13386):map__13386);var map = map__13386__$1;var path = cljs.core.get.call(null,map__13386__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__13386__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__13386__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",((function (node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection){
return (function (e){return cljs.core.swap_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"app-state","app-state",-1509963278)),cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),leaflet_map.getZoom());
});})(node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection))
);
leaflet_map.on("popupopen",((function (node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection))
);
});})(node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection))
);
leaflet_map.on("popupclose",((function (node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection))
);
jayq.core.$.call(null,document).on("clustermap-change-view",((function (node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection){
return (function (e){var map__13387 = om.core.get_state.call(null,self__.owner);var map__13387__$1 = ((cljs.core.seq_QMARK_.call(null,map__13387))?cljs.core.apply.call(null,cljs.core.hash_map,map__13387):map__13387);var map__13388 = cljs.core.get.call(null,map__13387__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__13388__$1 = ((cljs.core.seq_QMARK_.call(null,map__13388))?cljs.core.apply.call(null,cljs.core.hash_map,map__13388):map__13388);var path_selections = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
});})(node,map__13386,map__13386__$1,map,path,markers,leaflet_map,this$__$1,map__13373,map__13373__$1,app_state,selection))
);
return om.core.update_BANG_.call(null,self__.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),leaflet_map.getZoom());
});})(map__13373,map__13373__$1,app_state,selection))
;
clustermap.components.map.t13374.prototype.om$core$IRender$ = true;
clustermap.components.map.t13374.prototype.om$core$IRender$render$arity$1 = ((function (map__13373,map__13373__$1,app_state,selection){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__13373,map__13373__$1,app_state,selection))
;
clustermap.components.map.t13374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13373,map__13373__$1,app_state,selection){
return (function (_13376){var self__ = this;
var _13376__$1 = this;return self__.meta13375;
});})(map__13373,map__13373__$1,app_state,selection))
;
clustermap.components.map.t13374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13373,map__13373__$1,app_state,selection){
return (function (_13376,meta13375__$1){var self__ = this;
var _13376__$1 = this;return (new clustermap.components.map.t13374(self__.selection,self__.app_state,self__.map__13373,self__.owner,self__.p__13354,self__.map_component,meta13375__$1));
});})(map__13373,map__13373__$1,app_state,selection))
;
clustermap.components.map.__GT_t13374 = ((function (map__13373,map__13373__$1,app_state,selection){
return (function __GT_t13374(selection__$1,app_state__$1,map__13373__$2,owner__$1,p__13354__$1,map_component__$1,meta13375){return (new clustermap.components.map.t13374(selection__$1,app_state__$1,map__13373__$2,owner__$1,p__13354__$1,map_component__$1,meta13375));
});})(map__13373,map__13373__$1,app_state,selection))
;
}
return (new clustermap.components.map.t13374(selection,app_state,map__13373__$1,owner,p__13354,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.merge.call(null,shared,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-state","app-state",-1509963278),app_state,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",-1105464009),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708))], null)),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
