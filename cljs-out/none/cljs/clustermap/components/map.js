// Compiled by ClojureScript 0.0-2322
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
goog.require('clustermap.ordered_resource');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
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
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3546__auto__ = s;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = w;if(cljs.core.truth_(and__3546__auto____$1))
{var and__3546__auto____$2 = n;if(cljs.core.truth_(and__3546__auto____$2))
{return e;
} else
{return and__3546__auto____$2;
}
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
clustermap.components.map.locate_map = (function locate_map(m,initial_bounds){return m.fitBounds(cljs.core.clj__GT_js.call(null,initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3558__auto__ = (function (){var G__51034 = config;var G__51034__$1 = (((G__51034 == null))?null:G__51034.components);var G__51034__$2 = (((G__51034__$1 == null))?null:G__51034__$1.map);var G__51034__$3 = (((G__51034__$2 == null))?null:G__51034__$2.api_key);return G__51034__$3;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el,initial_bounds){var m = L.map.call(null,id_or_el,{"maxZoom": (19), "zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__51035){
var m = cljs.core.first(arglist__51035);
var all_bounds = cljs.core.rest(arglist__51035);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs51037 = cljs.core.map.call(null,(function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),site),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs51037))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-popup-location-list"], null),attrs51037)))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs51037))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__51040 = location_sites;var G__51040__$1 = (((G__51040 == null))?null:cljs.core.first.call(null,G__51040));var G__51040__$2 = (((G__51040__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__51040__$1));var G__51040__$3 = (((G__51040__$2 == null))?null:cljs.core.reverse.call(null,G__51040__$2));var G__51040__$4 = (((G__51040__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__51040__$3));return G__51040__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4485__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_51041_51042 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_51041_51042,sb__4485__auto__,temp__4124__auto__){
return (function (x__4486__auto__){return sb__4485__auto__.append(x__4486__auto__);
});})(_STAR_print_fn_STAR_51041_51042,sb__4485__auto__,temp__4124__auto__))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51041_51042;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4485__auto__));
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
,update_marker_keys));var ___$1 = (function (){var seq__51047 = cljs.core.seq.call(null,remove_marker_keys);var chunk__51048 = null;var count__51049 = (0);var i__51050 = (0);while(true){
if((i__51050 < count__51049))
{var k = cljs.core._nth.call(null,chunk__51048,i__51050);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__51051 = seq__51047;
var G__51052 = chunk__51048;
var G__51053 = count__51049;
var G__51054 = (i__51050 + (1));
seq__51047 = G__51051;
chunk__51048 = G__51052;
count__51049 = G__51053;
i__51050 = G__51054;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51047);if(temp__4126__auto__)
{var seq__51047__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51047__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__51047__$1);{
var G__51055 = cljs.core.chunk_rest.call(null,seq__51047__$1);
var G__51056 = c__4314__auto__;
var G__51057 = cljs.core.count.call(null,c__4314__auto__);
var G__51058 = (0);
seq__51047 = G__51055;
chunk__51048 = G__51056;
count__51049 = G__51057;
i__51050 = G__51058;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__51047__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__51059 = cljs.core.next.call(null,seq__51047__$1);
var G__51060 = null;
var G__51061 = (0);
var G__51062 = (0);
seq__51047 = G__51059;
chunk__51048 = G__51060;
count__51049 = G__51061;
i__51050 = G__51062;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__51071 = cljs.core.js__GT_clj.call(null,envelope);var map__51071__$1 = ((cljs.core.seq_QMARK_.call(null,map__51071))?cljs.core.apply.call(null,cljs.core.hash_map,map__51071):map__51071);var clj_envelope = map__51071__$1;var vec__51072 = cljs.core.get.call(null,map__51071__$1,"coordinates");var vec__51073 = cljs.core.nth.call(null,vec__51072,(0),null);var vec__51074 = cljs.core.nth.call(null,vec__51073,(0),null);var miny0 = cljs.core.nth.call(null,vec__51074,(0),null);var minx0 = cljs.core.nth.call(null,vec__51074,(1),null);var vec__51075 = cljs.core.nth.call(null,vec__51073,(1),null);var maxy1 = cljs.core.nth.call(null,vec__51075,(0),null);var minx1 = cljs.core.nth.call(null,vec__51075,(1),null);var vec__51076 = cljs.core.nth.call(null,vec__51073,(2),null);var maxy2 = cljs.core.nth.call(null,vec__51076,(0),null);var maxx2 = cljs.core.nth.call(null,vec__51076,(1),null);var vec__51077 = cljs.core.nth.call(null,vec__51073,(3),null);var miny3 = cljs.core.nth.call(null,vec__51077,(0),null);var maxx3 = cljs.core.nth.call(null,vec__51077,(1),null);var vec__51078 = cljs.core.nth.call(null,vec__51073,(4),null);var miny4 = cljs.core.nth.call(null,vec__51078,(0),null);var minx4 = cljs.core.nth.call(null,vec__51078,(1),null);var inner = vec__51073;var coords = vec__51072;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__51079){var map__51081 = p__51079;var map__51081__$1 = ((cljs.core.seq_QMARK_.call(null,map__51081))?cljs.core.apply.call(null,cljs.core.hash_map,map__51081):map__51081);var fill_color = cljs.core.get.call(null,map__51081__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__51081__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__51081__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3546__auto__ = selected;if(cljs.core.truth_(and__3546__auto__))
{return highlighted;
} else
{return and__3546__auto__;
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
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"#8c2d04",new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),(0)], null)));

}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__51082){var map__51084 = p__51082;var map__51084__$1 = ((cljs.core.seq_QMARK_.call(null,map__51084))?cljs.core.apply.call(null,cljs.core.hash_map,map__51084):map__51084);var path_attrs = map__51084__$1;var selected = cljs.core.get.call(null,map__51084__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__51084,map__51084__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__51084,map__51084__$1,path_attrs,selected))
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
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__51085,tolerance,js_boundaryline,path_attrs){var map__51087 = p__51085;var map__51087__$1 = ((cljs.core.seq_QMARK_.call(null,map__51087))?cljs.core.apply.call(null,cljs.core.hash_map,map__51087):map__51087);var path = map__51087__$1;var boundaryline_id = cljs.core.get.call(null,map__51087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__51101 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__51101,(0),null);var notifychan = cljs.core.nth.call(null,vec__51101,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan){
return (function (p__51102){var vec__51103 = p__51102;var k = cljs.core.nth.call(null,vec__51103,(0),null);var tolerance = cljs.core.nth.call(null,vec__51103,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__51103,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan){
return (function (k){var vec__51104 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__51104,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__51104,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = tolerance;if(cljs.core.truth_(and__3546__auto____$1))
{return js_boundaryline;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan,created_paths){
return (function (p__51105){var vec__51106 = p__51105;var k = cljs.core.nth.call(null,vec__51106,(0),null);var tolerance = cljs.core.nth.call(null,vec__51106,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__51106,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__51107 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__51107,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__51107,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = tolerance;if(cljs.core.truth_(and__3546__auto____$1))
{return js_boundaryline;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tolerance,js_boundaryline], null);
} else
{return null;
}
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__51108 = cljs.core.seq.call(null,delete_path_keys);var chunk__51109 = null;var count__51110 = (0);var i__51111 = (0);while(true){
if((i__51111 < count__51110))
{var k = cljs.core._nth.call(null,chunk__51109,i__51111);var temp__4124__auto___51114 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___51114))
{var path_51115 = temp__4124__auto___51114;clustermap.components.map.delete_path.call(null,leaflet_map,path_51115);
} else
{}
{
var G__51116 = seq__51108;
var G__51117 = chunk__51109;
var G__51118 = count__51110;
var G__51119 = (i__51111 + (1));
seq__51108 = G__51116;
chunk__51109 = G__51117;
count__51110 = G__51118;
i__51111 = G__51119;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51108);if(temp__4126__auto__)
{var seq__51108__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51108__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__51108__$1);{
var G__51120 = cljs.core.chunk_rest.call(null,seq__51108__$1);
var G__51121 = c__4314__auto__;
var G__51122 = cljs.core.count.call(null,c__4314__auto__);
var G__51123 = (0);
seq__51108 = G__51120;
chunk__51109 = G__51121;
count__51110 = G__51122;
i__51111 = G__51123;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__51108__$1);var temp__4124__auto___51124 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___51124))
{var path_51125 = temp__4124__auto___51124;clustermap.components.map.delete_path.call(null,leaflet_map,path_51125);
} else
{}
{
var G__51126 = cljs.core.next.call(null,seq__51108__$1);
var G__51127 = null;
var G__51128 = (0);
var G__51129 = (0);
seq__51108 = G__51126;
chunk__51109 = G__51127;
count__51110 = G__51128;
i__51111 = G__51129;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__51112){var map__51113 = p__51112;var map__51113__$1 = ((cljs.core.seq_QMARK_.call(null,map__51113))?cljs.core.apply.call(null,cljs.core.hash_map,map__51113):map__51113);var path = map__51113__$1;var id = cljs.core.get.call(null,map__51113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__51101,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = new cljs.core.Keyword(null,"compact_name","compact_name",1525822383).cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),bl_name], null)),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs51131 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs51131))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-constituency-name"], null),attrs51131)))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs51131))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__51134){var vec__51135 = p__51134;var tz = cljs.core.nth.call(null,vec__51135,(0),null);var collection = cljs.core.nth.call(null,vec__51135,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.request_aggregation_data = (function request_aggregation_data(resource,index,index_type,blcoll,variable,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.boundaryline_aggregation,index,index_type,blcoll,variable,filter,bounds);
});
clustermap.components.map.request_point_data = (function request_point_data(resource,index,index_type,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.location_lists,index,index_type,"!postcode",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!name","!location","!latest_employee_count","!latest_turnover"], null),(1000),filter,bounds);
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__51136,owner){var map__51175 = p__51136;var map__51175__$1 = ((cljs.core.seq_QMARK_.call(null,map__51175))?cljs.core.apply.call(null,cljs.core.hash_map,map__51175):map__51175);var cursor_data = map__51175__$1;var map__51176 = cljs.core.get.call(null,map__51175__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__51176__$1 = ((cljs.core.seq_QMARK_.call(null,map__51176))?cljs.core.apply.call(null,cljs.core.hash_map,map__51176):map__51176);var cursor = map__51176__$1;var data = cljs.core.get.call(null,map__51176__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__51176__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__51176__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__51177 = cljs.core.get.call(null,map__51176__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__51177__$1 = ((cljs.core.seq_QMARK_.call(null,map__51177))?cljs.core.apply.call(null,cljs.core.hash_map,map__51177):map__51177);var threshold_colors = cljs.core.get.call(null,map__51177__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var boundaryline_agg = cljs.core.get.call(null,map__51177__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var colorchooser = cljs.core.get.call(null,map__51177__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var boundaryline_collection = cljs.core.get.call(null,map__51177__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var zoom = cljs.core.get.call(null,map__51177__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var bounds = cljs.core.get.call(null,map__51177__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds = cljs.core.get.call(null,map__51177__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var filter = cljs.core.get.call(null,map__51175__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.map.t51178 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t51178 = (function (colorchooser,initial_bounds,owner,data,zoom,cursor_data,p__51136,map_component,boundaryline_collections,cursor,map__51176,threshold_colors,bounds,boundaryline_collection,filter,map__51175,point_data,map__51177,boundaryline_agg,meta51179){
this.colorchooser = colorchooser;
this.initial_bounds = initial_bounds;
this.owner = owner;
this.data = data;
this.zoom = zoom;
this.cursor_data = cursor_data;
this.p__51136 = p__51136;
this.map_component = map_component;
this.boundaryline_collections = boundaryline_collections;
this.cursor = cursor;
this.map__51176 = map__51176;
this.threshold_colors = threshold_colors;
this.bounds = bounds;
this.boundaryline_collection = boundaryline_collection;
this.filter = filter;
this.map__51175 = map__51175;
this.point_data = point_data;
this.map__51177 = map__51177;
this.boundaryline_agg = boundaryline_agg;
this.meta51179 = meta51179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t51178.cljs$lang$type = true;
clustermap.components.map.t51178.cljs$lang$ctorStr = "clustermap.components.map/t51178";
clustermap.components.map.t51178.cljs$lang$ctorPrWriter = ((function (map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map/t51178");
});})(map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t51178.prototype.om$core$IWillUnmount$ = true;
clustermap.components.map.t51178.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__51181 = om.core.get_state.call(null,self__.owner);var map__51181__$1 = ((cljs.core.seq_QMARK_.call(null,map__51181))?cljs.core.apply.call(null,cljs.core.hash_map,map__51181):map__51181);var point_data_resource = cljs.core.get.call(null,map__51181__$1,new cljs.core.Keyword(null,"point-data-resource","point-data-resource",-64127097));var aggregation_data_resource = cljs.core.get.call(null,map__51181__$1,new cljs.core.Keyword(null,"aggregation-data-resource","aggregation-data-resource",992435689));clustermap.ordered_resource.close.call(null,aggregation_data_resource);
return clustermap.ordered_resource.close.call(null,point_data_resource);
});})(map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t51178.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t51178.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$,p__51182,p__51183){var self__ = this;
var map__51184 = p__51182;var map__51184__$1 = ((cljs.core.seq_QMARK_.call(null,map__51184))?cljs.core.apply.call(null,cljs.core.hash_map,map__51184):map__51184);var next_cursor_data = map__51184__$1;var map__51185 = cljs.core.get.call(null,map__51184__$1,new cljs.core.Keyword(null,"map-state","map-state",-1227493550));var map__51185__$1 = ((cljs.core.seq_QMARK_.call(null,map__51185))?cljs.core.apply.call(null,cljs.core.hash_map,map__51185):map__51185);var next_cursor = map__51185__$1;var next_data = cljs.core.get.call(null,map__51185__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__51185__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__51185__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__51186 = cljs.core.get.call(null,map__51185__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__51186__$1 = ((cljs.core.seq_QMARK_.call(null,map__51186))?cljs.core.apply.call(null,cljs.core.hash_map,map__51186):map__51186);var next_zoom = cljs.core.get.call(null,map__51186__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_bounds = cljs.core.get.call(null,map__51186__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_collection = cljs.core.get.call(null,map__51186__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_colorchooser = cljs.core.get.call(null,map__51186__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_agg = cljs.core.get.call(null,map__51186__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_threshold_colors = cljs.core.get.call(null,map__51186__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var next_filter = cljs.core.get.call(null,map__51184__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__51187 = p__51183;var map__51187__$1 = ((cljs.core.seq_QMARK_.call(null,map__51187))?cljs.core.apply.call(null,cljs.core.hash_map,map__51187):map__51187);var map__51188 = cljs.core.get.call(null,map__51187__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__51188__$1 = ((cljs.core.seq_QMARK_.call(null,map__51188))?cljs.core.apply.call(null,cljs.core.hash_map,map__51188):map__51188);var next_markers = cljs.core.get.call(null,map__51188__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_paths = cljs.core.get.call(null,map__51188__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__51188__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__51187__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var next_aggregation_data_resource = cljs.core.get.call(null,map__51187__$1,new cljs.core.Keyword(null,"aggregation-data-resource","aggregation-data-resource",992435689));var next_point_data_resource = cljs.core.get.call(null,map__51187__$1,new cljs.core.Keyword(null,"point-data-resource","point-data-resource",-64127097));var this$__$1 = this;var map__51189 = om.core.get_shared.call(null,self__.owner);var map__51189__$1 = ((cljs.core.seq_QMARK_.call(null,map__51189))?cljs.core.apply.call(null,cljs.core.hash_map,map__51189):map__51189);var point_in_boundarylines_fn = cljs.core.get.call(null,map__51189__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__51189__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var link_fn = cljs.core.get.call(null,map__51189__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var path_fn = cljs.core.get.call(null,map__51189__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__51189__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__51190 = om.core.get_state.call(null,self__.owner);var map__51190__$1 = ((cljs.core.seq_QMARK_.call(null,map__51190))?cljs.core.apply.call(null,cljs.core.hash_map,map__51190):map__51190);var map__51191 = cljs.core.get.call(null,map__51190__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__51191__$1 = ((cljs.core.seq_QMARK_.call(null,map__51191))?cljs.core.apply.call(null,cljs.core.hash_map,map__51191):map__51191);var path_selections = cljs.core.get.call(null,map__51191__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__51191__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__51191__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__51191__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__51190__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__51190__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = next_zoom;if(cljs.core.truth_(and__3546__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_zoom,self__.zoom)) && (cljs.core.not_EQ_.call(null,next_zoom,leaflet_map.getZoom()));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{leaflet_map.setZoom(next_zoom);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = next_bounds;if(cljs.core.truth_(and__3546__auto____$1))
{return (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)) && (cljs.core.not_EQ_.call(null,next_bounds,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds())));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{leaflet_map.fitBounds(cljs.core.clj__GT_js.call(null,next_bounds));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = leaflet_map;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = self__.boundaryline_collections;if(cljs.core.truth_(and__3546__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_collection,clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-collection",clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom())], null)));
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936)], null),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()));
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = next_boundaryline_collection;if(cljs.core.truth_(and__3546__auto__))
{var or__3558__auto__ = (function (){var and__3546__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3546__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_agg,self__.boundaryline_agg);
} else
{return and__3546__auto____$1;
}
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (cljs.core.not_EQ_.call(null,next_filter,self__.filter)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
}
} else
{return and__3546__auto__;
}
})()))
{var ticket_51213 = clustermap.components.map.next_ticket.call(null);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)], null),ticket_51213);
clustermap.components.map.request_aggregation_data.call(null,next_aggregation_data_resource,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
clustermap.components.map.request_point_data.call(null,next_point_data_resource,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.call(null,next_data,self__.data)) || (cljs.core.not_EQ_.call(null,next_colorchooser,self__.colorchooser)))
{var vec__51192_51214 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_51215 = cljs.core.nth.call(null,vec__51192_51214,(0),null);var selection_path_colours_51216 = cljs.core.nth.call(null,vec__51192_51214,(1),null);var update_paths_invocation_51217 = ((function (vec__51192_51214,new_threshold_colors_51215,selection_path_colours_51216,map__51189,map__51189__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__51190,map__51190__$1,map__51191,map__51191__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__51184,map__51184__$1,next_cursor_data,map__51185,map__51185__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__51186,map__51186__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__51187,map__51187__$1,map__51188,map__51188__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_51216);
});})(vec__51192_51214,new_threshold_colors_51215,selection_path_colours_51216,map__51189,map__51189__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__51190,map__51190__$1,map__51191,map__51191__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__51184,map__51184__$1,next_cursor_data,map__51185,map__51185__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__51186,map__51186__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__51187,map__51187__$1,map__51188,map__51188__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_51215,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_51215);
} else
{}
var temp__4126__auto___51218 = update_paths_invocation_51217.call(null);if(cljs.core.truth_(temp__4126__auto___51218))
{var notify_chan_51219 = temp__4126__auto___51218;var c__5708__auto___51220 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___51220,notify_chan_51219,temp__4126__auto___51218,vec__51192_51214,new_threshold_colors_51215,selection_path_colours_51216,update_paths_invocation_51217,map__51189,map__51189__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__51190,map__51190__$1,map__51191,map__51191__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__51184,map__51184__$1,next_cursor_data,map__51185,map__51185__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__51186,map__51186__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__51187,map__51187__$1,map__51188,map__51188__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___51220,notify_chan_51219,temp__4126__auto___51218,vec__51192_51214,new_threshold_colors_51215,selection_path_colours_51216,update_paths_invocation_51217,map__51189,map__51189__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__51190,map__51190__$1,map__51191,map__51191__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__51184,map__51184__$1,next_cursor_data,map__51185,map__51185__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__51186,map__51186__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__51187,map__51187__$1,map__51188,map__51188__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (state_51197){var state_val_51198 = (state_51197[(1)]);if((state_val_51198 === (2)))
{var inst_51194 = (state_51197[(2)]);var inst_51195 = update_paths_invocation_51217.call(null);var state_51197__$1 = (function (){var statearr_51199 = state_51197;(statearr_51199[(7)] = inst_51194);
return statearr_51199;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51197__$1,inst_51195);
} else
{if((state_val_51198 === (1)))
{var state_51197__$1 = state_51197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51197__$1,(2),notify_chan_51219);
} else
{return null;
}
}
});})(c__5708__auto___51220,notify_chan_51219,temp__4126__auto___51218,vec__51192_51214,new_threshold_colors_51215,selection_path_colours_51216,update_paths_invocation_51217,map__51189,map__51189__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__51190,map__51190__$1,map__51191,map__51191__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__51184,map__51184__$1,next_cursor_data,map__51185,map__51185__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__51186,map__51186__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__51187,map__51187__$1,map__51188,map__51188__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;return ((function (switch__5693__auto__,c__5708__auto___51220,notify_chan_51219,temp__4126__auto___51218,vec__51192_51214,new_threshold_colors_51215,selection_path_colours_51216,update_paths_invocation_51217,map__51189,map__51189__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__51190,map__51190__$1,map__51191,map__51191__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__51184,map__51184__$1,next_cursor_data,map__51185,map__51185__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__51186,map__51186__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__51187,map__51187__$1,map__51188,map__51188__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51203 = [null,null,null,null,null,null,null,null];(statearr_51203[(0)] = state_machine__5694__auto__);
(statearr_51203[(1)] = (1));
return statearr_51203;
});
var state_machine__5694__auto____1 = (function (state_51197){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_51197);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51204){if((e51204 instanceof Object))
{var ex__5697__auto__ = e51204;var statearr_51205_51221 = state_51197;(statearr_51205_51221[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e51204;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51222 = state_51197;
state_51197 = G__51222;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51197){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___51220,notify_chan_51219,temp__4126__auto___51218,vec__51192_51214,new_threshold_colors_51215,selection_path_colours_51216,update_paths_invocation_51217,map__51189,map__51189__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__51190,map__51190__$1,map__51191,map__51191__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__51184,map__51184__$1,next_cursor_data,map__51185,map__51185__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__51186,map__51186__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__51187,map__51187__$1,map__51188,map__51188__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
})();var state__5710__auto__ = (function (){var statearr_51206 = f__5709__auto__.call(null);(statearr_51206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___51220);
return statearr_51206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___51220,notify_chan_51219,temp__4126__auto___51218,vec__51192_51214,new_threshold_colors_51215,selection_path_colours_51216,update_paths_invocation_51217,map__51189,map__51189__$1,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__51190,map__51190__$1,map__51191,map__51191__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__51184,map__51184__$1,next_cursor_data,map__51185,map__51185__$1,next_cursor,next_data,next_point_data,next_boundaryline_collections,map__51186,map__51186__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,next_filter,map__51187,map__51187__$1,map__51188,map__51188__$1,next_markers,next_paths,next_path_selections,next_path_highlights,next_aggregation_data_resource,next_point_data_resource,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
} else
{}
} else
{}
if(cljs.core.not_EQ_.call(null,next_point_data,self__.point_data))
{return clustermap.components.map.update_markers.call(null,path_fn,leaflet_map,next_markers,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_point_data));
} else
{return null;
}
});})(map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t51178.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t51178.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__51207 = clustermap.components.map.create_map.call(null,node,self__.initial_bounds);var map__51207__$1 = ((cljs.core.seq_QMARK_.call(null,map__51207))?cljs.core.apply.call(null,cljs.core.hash_map,map__51207):map__51207);var map = map__51207__$1;var path = cljs.core.get.call(null,map__51207__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__51207__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__51207__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__51208 = om.core.get_shared.call(null,self__.owner);var map__51208__$1 = ((cljs.core.seq_QMARK_.call(null,map__51208))?cljs.core.apply.call(null,cljs.core.hash_map,map__51208):map__51208);var path_fn = cljs.core.get.call(null,map__51208__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__51208__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var point_in_boundarylines_fn = cljs.core.get.call(null,map__51208__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__51208__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__51208__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupopen",((function (node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("popupclose",((function (node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("mousemove",((function (node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = point_in_boundarylines_fn.call(null,lng,lat);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3546__auto__ = highlight_hit;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134))));
} else
{return and__3546__auto__;
}
})()))
{var G__51209_51223 = L.popup();G__51209_51223.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__51209_51223.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__51209_51223.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),highlight_path_ids);
});})(node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
leaflet_map.on("click",((function (node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (e){var hits = point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat);var boundaryline_id = (function (){var G__51210 = hits;var G__51210__$1 = (((G__51210 == null))?null:cljs.core.first.call(null,G__51210));var G__51210__$2 = (((G__51210__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51210__$1));return G__51210__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var adr_51224 = clustermap.ordered_resource.make_discard_stale_resource.call(null,"aggregation-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"aggregation-data-resource","aggregation-data-resource",992435689),adr_51224);
clustermap.ordered_resource.retrieve_responses.call(null,adr_51224,((function (adr_51224,node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (data__$2){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),data__$2);
});})(adr_51224,node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
var pdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"point-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"point-data-resource","point-data-resource",-64127097),pdr);
return clustermap.ordered_resource.retrieve_responses.call(null,pdr,((function (pdr,node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (point_data__$2){return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-data","point-data",-1294572970)], null),point_data__$2);
});})(pdr,node,map__51207,map__51207__$1,map,path,markers,leaflet_map,map__51208,map__51208__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
);
});})(map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t51178.prototype.om$core$IRender$ = true;
clustermap.components.map.t51178.prototype.om$core$IRender$render$arity$1 = ((function (map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t51178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_51180){var self__ = this;
var _51180__$1 = this;return self__.meta51179;
});})(map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.t51178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function (_51180,meta51179__$1){var self__ = this;
var _51180__$1 = this;return (new clustermap.components.map.t51178(self__.colorchooser,self__.initial_bounds,self__.owner,self__.data,self__.zoom,self__.cursor_data,self__.p__51136,self__.map_component,self__.boundaryline_collections,self__.cursor,self__.map__51176,self__.threshold_colors,self__.bounds,self__.boundaryline_collection,self__.filter,self__.map__51175,self__.point_data,self__.map__51177,self__.boundaryline_agg,meta51179__$1));
});})(map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
clustermap.components.map.__GT_t51178 = ((function (map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter){
return (function __GT_t51178(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,zoom__$1,cursor_data__$1,p__51136__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,map__51176__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,filter__$1,map__51175__$2,point_data__$1,map__51177__$2,boundaryline_agg__$1,meta51179){return (new clustermap.components.map.t51178(colorchooser__$1,initial_bounds__$1,owner__$1,data__$1,zoom__$1,cursor_data__$1,p__51136__$1,map_component__$1,boundaryline_collections__$1,cursor__$1,map__51176__$2,threshold_colors__$1,bounds__$1,boundaryline_collection__$1,filter__$1,map__51175__$2,point_data__$1,map__51177__$2,boundaryline_agg__$1,meta51179));
});})(map__51175,map__51175__$1,cursor_data,map__51176,map__51176__$1,cursor,data,point_data,boundaryline_collections,map__51177,map__51177__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds,filter))
;
}
return (new clustermap.components.map.t51178(colorchooser,initial_bounds,owner,data,zoom,cursor_data,p__51136,map_component,boundaryline_collections,cursor,map__51176__$1,threshold_colors,bounds,boundaryline_collection,filter,map__51175__$1,point_data,map__51177__$1,boundaryline_agg,null));
});

//# sourceMappingURL=map.js.map