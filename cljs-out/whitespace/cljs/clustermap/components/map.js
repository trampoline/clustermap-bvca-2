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
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3531__auto__ = s;if(cljs.core.truth_(and__3531__auto__))
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
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js.call(null,initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__13289 = config;var G__13289__$1 = (((G__13289 == null))?null:G__13289.components);var G__13289__$2 = (((G__13289__$1 == null))?null:G__13289__$1.map);var G__13289__$3 = (((G__13289__$2 == null))?null:G__13289__$2.api_key);return G__13289__$3;
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__13290){
var m = cljs.core.first(arglist__13290);
var all_bounds = cljs.core.rest(arglist__13290);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13292 = cljs.core.map.call(null,(function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),site),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs13292))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-popup-location-list"], null),attrs13292)))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13292))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__13295 = location_sites;var G__13295__$1 = (((G__13295 == null))?null:cljs.core.first.call(null,G__13295));var G__13295__$2 = (((G__13295__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__13295__$1));var G__13295__$3 = (((G__13295__$2 == null))?null:cljs.core.reverse.call(null,G__13295__$2));var G__13295__$4 = (((G__13295__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__13295__$3));return G__13295__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13296_13297 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13296_13297,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_13296_13297,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13296_13297;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4470__auto__));
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
,update_marker_keys));var _ = (function (){var seq__13302 = cljs.core.seq.call(null,remove_marker_keys);var chunk__13303 = null;var count__13304 = (0);var i__13305 = (0);while(true){
if((i__13305 < count__13304))
{var k = cljs.core._nth.call(null,chunk__13303,i__13305);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__13306 = seq__13302;
var G__13307 = chunk__13303;
var G__13308 = count__13304;
var G__13309 = (i__13305 + (1));
seq__13302 = G__13306;
chunk__13303 = G__13307;
count__13304 = G__13308;
i__13305 = G__13309;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13302);if(temp__4126__auto__)
{var seq__13302__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13302__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13302__$1);{
var G__13310 = cljs.core.chunk_rest.call(null,seq__13302__$1);
var G__13311 = c__4299__auto__;
var G__13312 = cljs.core.count.call(null,c__4299__auto__);
var G__13313 = (0);
seq__13302 = G__13310;
chunk__13303 = G__13311;
count__13304 = G__13312;
i__13305 = G__13313;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__13302__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__13314 = cljs.core.next.call(null,seq__13302__$1);
var G__13315 = null;
var G__13316 = (0);
var G__13317 = (0);
seq__13302 = G__13314;
chunk__13303 = G__13315;
count__13304 = G__13316;
i__13305 = G__13317;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__13326 = cljs.core.js__GT_clj.call(null,envelope);var map__13326__$1 = ((cljs.core.seq_QMARK_.call(null,map__13326))?cljs.core.apply.call(null,cljs.core.hash_map,map__13326):map__13326);var clj_envelope = map__13326__$1;var vec__13327 = cljs.core.get.call(null,map__13326__$1,"coordinates");var vec__13328 = cljs.core.nth.call(null,vec__13327,(0),null);var vec__13329 = cljs.core.nth.call(null,vec__13328,(0),null);var miny0 = cljs.core.nth.call(null,vec__13329,(0),null);var minx0 = cljs.core.nth.call(null,vec__13329,(1),null);var vec__13330 = cljs.core.nth.call(null,vec__13328,(1),null);var maxy1 = cljs.core.nth.call(null,vec__13330,(0),null);var minx1 = cljs.core.nth.call(null,vec__13330,(1),null);var vec__13331 = cljs.core.nth.call(null,vec__13328,(2),null);var maxy2 = cljs.core.nth.call(null,vec__13331,(0),null);var maxx2 = cljs.core.nth.call(null,vec__13331,(1),null);var vec__13332 = cljs.core.nth.call(null,vec__13328,(3),null);var miny3 = cljs.core.nth.call(null,vec__13332,(0),null);var maxx3 = cljs.core.nth.call(null,vec__13332,(1),null);var vec__13333 = cljs.core.nth.call(null,vec__13328,(4),null);var miny4 = cljs.core.nth.call(null,vec__13333,(0),null);var minx4 = cljs.core.nth.call(null,vec__13333,(1),null);var inner = vec__13328;var coords = vec__13327;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__13334){var map__13336 = p__13334;var map__13336__$1 = ((cljs.core.seq_QMARK_.call(null,map__13336))?cljs.core.apply.call(null,cljs.core.hash_map,map__13336):map__13336);var fill_color = cljs.core.get.call(null,map__13336__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__13336__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__13336__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
{return highlighted;
} else
{return and__3531__auto__;
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
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__13337){var map__13339 = p__13337;var map__13339__$1 = ((cljs.core.seq_QMARK_.call(null,map__13339))?cljs.core.apply.call(null,cljs.core.hash_map,map__13339):map__13339);var path_attrs = map__13339__$1;var selected = cljs.core.get.call(null,map__13339__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__13339,map__13339__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__13339,map__13339__$1,path_attrs,selected))
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
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__13340,tolerance,js_boundaryline,path_attrs){var map__13342 = p__13340;var map__13342__$1 = ((cljs.core.seq_QMARK_.call(null,map__13342))?cljs.core.apply.call(null,cljs.core.hash_map,map__13342):map__13342);var path = map__13342__$1;var boundaryline_id = cljs.core.get.call(null,map__13342__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__13356 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__13356,(0),null);var notifychan = cljs.core.nth.call(null,vec__13356,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan){
return (function (p__13357){var vec__13358 = p__13357;var k = cljs.core.nth.call(null,vec__13358,(0),null);var tolerance = cljs.core.nth.call(null,vec__13358,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__13358,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan){
return (function (k){var vec__13359 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__13359,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__13359,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = tolerance;if(cljs.core.truth_(and__3531__auto____$1))
{return js_boundaryline;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan,created_paths){
return (function (p__13360){var vec__13361 = p__13360;var k = cljs.core.nth.call(null,vec__13361,(0),null);var tolerance = cljs.core.nth.call(null,vec__13361,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__13361,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__13362 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__13362,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__13362,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = tolerance;if(cljs.core.truth_(and__3531__auto____$1))
{return js_boundaryline;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__13363 = cljs.core.seq.call(null,delete_path_keys);var chunk__13364 = null;var count__13365 = (0);var i__13366 = (0);while(true){
if((i__13366 < count__13365))
{var k = cljs.core._nth.call(null,chunk__13364,i__13366);var temp__4124__auto___13369 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___13369))
{var path_13370 = temp__4124__auto___13369;clustermap.components.map.delete_path.call(null,leaflet_map,path_13370);
} else
{}
{
var G__13371 = seq__13363;
var G__13372 = chunk__13364;
var G__13373 = count__13365;
var G__13374 = (i__13366 + (1));
seq__13363 = G__13371;
chunk__13364 = G__13372;
count__13365 = G__13373;
i__13366 = G__13374;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13363);if(temp__4126__auto__)
{var seq__13363__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13363__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13363__$1);{
var G__13375 = cljs.core.chunk_rest.call(null,seq__13363__$1);
var G__13376 = c__4299__auto__;
var G__13377 = cljs.core.count.call(null,c__4299__auto__);
var G__13378 = (0);
seq__13363 = G__13375;
chunk__13364 = G__13376;
count__13365 = G__13377;
i__13366 = G__13378;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__13363__$1);var temp__4124__auto___13379 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___13379))
{var path_13380 = temp__4124__auto___13379;clustermap.components.map.delete_path.call(null,leaflet_map,path_13380);
} else
{}
{
var G__13381 = cljs.core.next.call(null,seq__13363__$1);
var G__13382 = null;
var G__13383 = (0);
var G__13384 = (0);
seq__13363 = G__13381;
chunk__13364 = G__13382;
count__13365 = G__13383;
i__13366 = G__13384;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__13367){var map__13368 = p__13367;var map__13368__$1 = ((cljs.core.seq_QMARK_.call(null,map__13368))?cljs.core.apply.call(null,cljs.core.hash_map,map__13368):map__13368);var path = map__13368__$1;var id = cljs.core.get.call(null,map__13368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__13356,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = new cljs.core.Keyword(null,"compact_name","compact_name",1525822383).cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),bl_name], null)),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13386 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs13386))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-constituency-name"], null),attrs13386)))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13386))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__13389){var vec__13390 = p__13389;var tz = cljs.core.nth.call(null,vec__13390,(0),null);var collection = cljs.core.nth.call(null,vec__13390,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,blcoll,variable,filter,bounds){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_13435){var state_val_13436 = (state_13435[(1)]);if((state_val_13436 === (5)))
{var inst_13433 = (state_13435[(2)]);var state_13435__$1 = state_13435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13435__$1,inst_13433);
} else
{if((state_val_13436 === (4)))
{var state_13435__$1 = state_13435;var statearr_13437_13449 = state_13435__$1;(statearr_13437_13449[(2)] = null);
(statearr_13437_13449[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (3)))
{var inst_13422 = (state_13435[(7)]);var inst_13428 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377)];var inst_13429 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13428,null));var inst_13430 = set_app_state_fn.call(null,inst_13429,inst_13422);var state_13435__$1 = state_13435;var statearr_13438_13450 = state_13435__$1;(statearr_13438_13450[(2)] = inst_13430);
(statearr_13438_13450[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (2)))
{var inst_13422 = (state_13435[(2)]);var inst_13423 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)];var inst_13424 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13423,null));var inst_13425 = get_app_state_fn.call(null,inst_13424);var inst_13426 = cljs.core._EQ_.call(null,ticket,inst_13425);var state_13435__$1 = (function (){var statearr_13439 = state_13435;(statearr_13439[(7)] = inst_13422);
return statearr_13439;
})();if(inst_13426)
{var statearr_13440_13451 = state_13435__$1;(statearr_13440_13451[(1)] = (3));
} else
{var statearr_13441_13452 = state_13435__$1;(statearr_13441_13452[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13436 === (1)))
{var inst_13420 = clustermap.api.boundaryline_aggregation.call(null,index,index_type,blcoll,variable,filter,bounds);var state_13435__$1 = state_13435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13435__$1,(2),inst_13420);
} else
{return null;
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_13445 = [null,null,null,null,null,null,null,null];(statearr_13445[(0)] = state_machine__5679__auto__);
(statearr_13445[(1)] = (1));
return statearr_13445;
});
var state_machine__5679__auto____1 = (function (state_13435){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_13435);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e13446){if((e13446 instanceof Object))
{var ex__5682__auto__ = e13446;var statearr_13447_13453 = state_13435;(statearr_13447_13453[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13454 = state_13435;
state_13435 = G__13454;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_13435){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_13435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_13448 = f__5694__auto__.call(null);(statearr_13448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_13448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__13455,owner){var map__13493 = p__13455;var map__13493__$1 = ((cljs.core.seq_QMARK_.call(null,map__13493))?cljs.core.apply.call(null,cljs.core.hash_map,map__13493):map__13493);var cursor = map__13493__$1;var map__13494 = cljs.core.get.call(null,map__13493__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13494__$1 = ((cljs.core.seq_QMARK_.call(null,map__13494))?cljs.core.apply.call(null,cljs.core.hash_map,map__13494):map__13494);var initial_bounds = cljs.core.get.call(null,map__13494__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));if(typeof clustermap.components.map.t13495 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t13495 = (function (initial_bounds,map__13494,cursor,map__13493,owner,p__13455,map_component,meta13496){
this.initial_bounds = initial_bounds;
this.map__13494 = map__13494;
this.cursor = cursor;
this.map__13493 = map__13493;
this.owner = owner;
this.p__13455 = p__13455;
this.map_component = map_component;
this.meta13496 = meta13496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t13495.cljs$lang$type = true;
clustermap.components.map.t13495.cljs$lang$ctorStr = "clustermap.components.map/t13495";
clustermap.components.map.t13495.cljs$lang$ctorPrWriter = ((function (map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map/t13495");
});})(map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;
clustermap.components.map.t13495.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t13495.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (this$,p__13498,p__13499){var self__ = this;
var map__13500 = p__13498;var map__13500__$1 = ((cljs.core.seq_QMARK_.call(null,map__13500))?cljs.core.apply.call(null,cljs.core.hash_map,map__13500):map__13500);var next_filter = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_data = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_boundaryline_collections = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__13501 = cljs.core.get.call(null,map__13500__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13501__$1 = ((cljs.core.seq_QMARK_.call(null,map__13501))?cljs.core.apply.call(null,cljs.core.hash_map,map__13501):map__13501);var next_zoom = cljs.core.get.call(null,map__13501__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_bounds = cljs.core.get.call(null,map__13501__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_collection = cljs.core.get.call(null,map__13501__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_colorchooser = cljs.core.get.call(null,map__13501__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_agg = cljs.core.get.call(null,map__13501__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_threshold_colors = cljs.core.get.call(null,map__13501__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var map__13502 = p__13499;var map__13502__$1 = ((cljs.core.seq_QMARK_.call(null,map__13502))?cljs.core.apply.call(null,cljs.core.hash_map,map__13502):map__13502);var map__13503 = cljs.core.get.call(null,map__13502__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__13503__$1 = ((cljs.core.seq_QMARK_.call(null,map__13503))?cljs.core.apply.call(null,cljs.core.hash_map,map__13503):map__13503);var next_paths = cljs.core.get.call(null,map__13503__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__13503__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__13502__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var this$__$1 = this;var map__13504 = om.core.get_props.call(null,self__.owner);var map__13504__$1 = ((cljs.core.seq_QMARK_.call(null,map__13504))?cljs.core.apply.call(null,cljs.core.hash_map,map__13504):map__13504);var filter = cljs.core.get.call(null,map__13504__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var data = cljs.core.get.call(null,map__13504__$1,new cljs.core.Keyword(null,"data","data",-232669377));var boundaryline_collections = cljs.core.get.call(null,map__13504__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__13505 = cljs.core.get.call(null,map__13504__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13505__$1 = ((cljs.core.seq_QMARK_.call(null,map__13505))?cljs.core.apply.call(null,cljs.core.hash_map,map__13505):map__13505);var threshold_colors = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var boundaryline_agg = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var colorchooser = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var boundaryline_collection = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var zoom = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var bounds = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds__$2 = cljs.core.get.call(null,map__13505__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var map__13506 = om.core.get_shared.call(null,self__.owner);var map__13506__$1 = ((cljs.core.seq_QMARK_.call(null,map__13506))?cljs.core.apply.call(null,cljs.core.hash_map,map__13506):map__13506);var get_app_state_fn = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"get-app-state-fn","get-app-state-fn",-1385178201));var set_app_state_fn = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"set-app-state-fn","set-app-state-fn",-1158769652));var point_in_boundarylines_fn = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var link_fn = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var path_fn = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__13507 = om.core.get_state.call(null,self__.owner);var map__13507__$1 = ((cljs.core.seq_QMARK_.call(null,map__13507))?cljs.core.apply.call(null,cljs.core.hash_map,map__13507):map__13507);var map__13508 = cljs.core.get.call(null,map__13507__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__13508__$1 = ((cljs.core.seq_QMARK_.call(null,map__13508))?cljs.core.apply.call(null,cljs.core.hash_map,map__13508):map__13508);var path_selections = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__13507__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__13507__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = next_zoom;if(cljs.core.truth_(and__3531__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_zoom,zoom)) && (cljs.core.not_EQ_.call(null,next_zoom,leaflet_map.getZoom()));
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
{return (cljs.core.not_EQ_.call(null,next_bounds,bounds)) && (cljs.core.not_EQ_.call(null,next_bounds,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds())));
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js.call(null,next_bounds));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = boundaryline_collections;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936)], null),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3531__auto__))
{var or__3543__auto__ = (function (){var and__3531__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_agg,boundaryline_agg);
} else
{return and__3531__auto____$1;
}
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (cljs.core.not_EQ_.call(null,next_filter,filter)) || (cljs.core.not_EQ_.call(null,next_bounds,bounds));
}
} else
{return and__3531__auto__;
}
})()))
{var ticket_13530 = clustermap.components.map.next_ticket.call(null);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)], null),ticket_13530);
clustermap.components.map.fetch_aggregation_data.call(null,set_app_state_fn,get_app_state_fn,ticket_13530,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.call(null,next_data,data)) || (cljs.core.not_EQ_.call(null,next_colorchooser,colorchooser)))
{var vec__13509 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors = cljs.core.nth.call(null,vec__13509,(0),null);var selection_path_colours = cljs.core.nth.call(null,vec__13509,(1),null);var update_paths_invocation = ((function (vec__13509,new_threshold_colors,selection_path_colours,map__13504,map__13504__$1,filter,data,boundaryline_collections,map__13505,map__13505__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13506,map__13506__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13507,map__13507__$1,map__13508,map__13508__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13500,map__13500__$1,next_filter,next_data,next_boundaryline_collections,map__13501,map__13501__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__13502,map__13502__$1,map__13503,map__13503__$1,next_paths,next_path_selections,next_path_highlights,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours);
});})(vec__13509,new_threshold_colors,selection_path_colours,map__13504,map__13504__$1,filter,data,boundaryline_collections,map__13505,map__13505__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13506,map__13506__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13507,map__13507__$1,map__13508,map__13508__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13500,map__13500__$1,next_filter,next_data,next_boundaryline_collections,map__13501,map__13501__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__13502,map__13502__$1,map__13503,map__13503__$1,next_paths,next_path_selections,next_path_highlights,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors);
} else
{}
var temp__4126__auto__ = update_paths_invocation.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var notify_chan = temp__4126__auto__;var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__13509,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13504,map__13504__$1,filter,data,boundaryline_collections,map__13505,map__13505__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13506,map__13506__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13507,map__13507__$1,map__13508,map__13508__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13500,map__13500__$1,next_filter,next_data,next_boundaryline_collections,map__13501,map__13501__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__13502,map__13502__$1,map__13503,map__13503__$1,next_paths,next_path_selections,next_path_highlights,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__13509,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13504,map__13504__$1,filter,data,boundaryline_collections,map__13505,map__13505__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13506,map__13506__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13507,map__13507__$1,map__13508,map__13508__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13500,map__13500__$1,next_filter,next_data,next_boundaryline_collections,map__13501,map__13501__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__13502,map__13502__$1,map__13503,map__13503__$1,next_paths,next_path_selections,next_path_highlights,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (state_13514){var state_val_13515 = (state_13514[(1)]);if((state_val_13515 === (2)))
{var inst_13511 = (state_13514[(2)]);var inst_13512 = update_paths_invocation.call(null);var state_13514__$1 = (function (){var statearr_13516 = state_13514;(statearr_13516[(7)] = inst_13511);
return statearr_13516;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13514__$1,inst_13512);
} else
{if((state_val_13515 === (1)))
{var state_13514__$1 = state_13514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13514__$1,(2),notify_chan);
} else
{return null;
}
}
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__13509,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13504,map__13504__$1,filter,data,boundaryline_collections,map__13505,map__13505__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13506,map__13506__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13507,map__13507__$1,map__13508,map__13508__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13500,map__13500__$1,next_filter,next_data,next_boundaryline_collections,map__13501,map__13501__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__13502,map__13502__$1,map__13503,map__13503__$1,next_paths,next_path_selections,next_path_highlights,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;return ((function (switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__13509,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13504,map__13504__$1,filter,data,boundaryline_collections,map__13505,map__13505__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13506,map__13506__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13507,map__13507__$1,map__13508,map__13508__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13500,map__13500__$1,next_filter,next_data,next_boundaryline_collections,map__13501,map__13501__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__13502,map__13502__$1,map__13503,map__13503__$1,next_paths,next_path_selections,next_path_highlights,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_13520 = [null,null,null,null,null,null,null,null];(statearr_13520[(0)] = state_machine__5679__auto__);
(statearr_13520[(1)] = (1));
return statearr_13520;
});
var state_machine__5679__auto____1 = (function (state_13514){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_13514);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e13521){if((e13521 instanceof Object))
{var ex__5682__auto__ = e13521;var statearr_13522_13531 = state_13514;(statearr_13522_13531[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13514);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13532 = state_13514;
state_13514 = G__13532;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_13514){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_13514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__13509,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13504,map__13504__$1,filter,data,boundaryline_collections,map__13505,map__13505__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13506,map__13506__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13507,map__13507__$1,map__13508,map__13508__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13500,map__13500__$1,next_filter,next_data,next_boundaryline_collections,map__13501,map__13501__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__13502,map__13502__$1,map__13503,map__13503__$1,next_paths,next_path_selections,next_path_highlights,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
})();var state__5695__auto__ = (function (){var statearr_13523 = f__5694__auto__.call(null);(statearr_13523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_13523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__13509,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13504,map__13504__$1,filter,data,boundaryline_collections,map__13505,map__13505__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13506,map__13506__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13507,map__13507__$1,map__13508,map__13508__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13500,map__13500__$1,next_filter,next_data,next_boundaryline_collections,map__13501,map__13501__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__13502,map__13502__$1,map__13503,map__13503__$1,next_paths,next_path_selections,next_path_highlights,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
);
return c__5693__auto__;
} else
{return null;
}
} else
{return null;
}
});})(map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;
clustermap.components.map.t13495.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t13495.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__13524 = clustermap.components.map.create_map.call(null,node,self__.initial_bounds);var map__13524__$1 = ((cljs.core.seq_QMARK_.call(null,map__13524))?cljs.core.apply.call(null,cljs.core.hash_map,map__13524):map__13524);var map = map__13524__$1;var path = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__13525 = om.core.get_shared.call(null,self__.owner);var map__13525__$1 = ((cljs.core.seq_QMARK_.call(null,map__13525))?cljs.core.apply.call(null,cljs.core.hash_map,map__13525):map__13525);var path_fn = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var point_in_boundarylines_fn = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
);
});})(node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = point_in_boundarylines_fn.call(null,lng,lat);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134))));
} else
{return and__3531__auto__;
}
})()))
{var G__13526_13533 = L.popup();G__13526_13533.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__13526_13533.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__13526_13533.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),highlight_path_ids);
});})(node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (e){var hits = point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat);var boundaryline_id = (function (){var G__13527 = hits;var G__13527__$1 = (((G__13527 == null))?null:cljs.core.first.call(null,G__13527));var G__13527__$2 = (((G__13527__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__13527__$1));return G__13527__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__13524,map__13524__$1,map,path,markers,leaflet_map,map__13525,map__13525__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
);
});})(map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;
clustermap.components.map.t13495.prototype.om$core$IRender$ = true;
clustermap.components.map.t13495.prototype.om$core$IRender$render$arity$1 = ((function (map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;
clustermap.components.map.t13495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (_13497){var self__ = this;
var _13497__$1 = this;return self__.meta13496;
});})(map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;
clustermap.components.map.t13495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function (_13497,meta13496__$1){var self__ = this;
var _13497__$1 = this;return (new clustermap.components.map.t13495(self__.initial_bounds,self__.map__13494,self__.cursor,self__.map__13493,self__.owner,self__.p__13455,self__.map_component,meta13496__$1));
});})(map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;
clustermap.components.map.__GT_t13495 = ((function (map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds){
return (function __GT_t13495(initial_bounds__$1,map__13494__$2,cursor__$1,map__13493__$2,owner__$1,p__13455__$1,map_component__$1,meta13496){return (new clustermap.components.map.t13495(initial_bounds__$1,map__13494__$2,cursor__$1,map__13493__$2,owner__$1,p__13455__$1,map_component__$1,meta13496));
});})(map__13493,map__13493__$1,cursor,map__13494,map__13494__$1,initial_bounds))
;
}
return (new clustermap.components.map.t13495(initial_bounds,map__13494__$1,cursor,map__13493__$1,owner,p__13455,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
