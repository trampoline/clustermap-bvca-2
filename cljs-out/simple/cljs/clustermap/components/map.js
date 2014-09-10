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
clustermap.components.map.api_key = (function (){var or__3541__auto__ = (function (){var G__25681 = config;var G__25681__$1 = (((G__25681 == null))?null:G__25681.components);var G__25681__$2 = (((G__25681__$1 == null))?null:G__25681__$1.map);var G__25681__$3 = (((G__25681__$2 == null))?null:G__25681__$2.api_key);return G__25681__$3;
})();if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__25682){
var m = cljs.core.first(arglist__25682);
var all_bounds = cljs.core.rest(arglist__25682);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs25684 = cljs.core.map.call(null,(function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),site),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs25684))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-popup-location-list"], null),attrs25684)))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs25684))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__25687 = location_sites;var G__25687__$1 = (((G__25687 == null))?null:cljs.core.first.call(null,G__25687));var G__25687__$2 = (((G__25687__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__25687__$1));var G__25687__$3 = (((G__25687__$2 == null))?null:cljs.core.reverse.call(null,G__25687__$2));var G__25687__$4 = (((G__25687__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__25687__$3));return G__25687__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4468__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_25688_25689 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25688_25689,sb__4468__auto__,temp__4124__auto__){
return (function (x__4469__auto__){return sb__4468__auto__.append(x__4469__auto__);
});})(_STAR_print_fn_STAR_25688_25689,sb__4468__auto__,temp__4124__auto__))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25688_25689;
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
,update_marker_keys));var ___$1 = (function (){var seq__25694 = cljs.core.seq.call(null,remove_marker_keys);var chunk__25695 = null;var count__25696 = (0);var i__25697 = (0);while(true){
if((i__25697 < count__25696))
{var k = cljs.core._nth.call(null,chunk__25695,i__25697);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__25698 = seq__25694;
var G__25699 = chunk__25695;
var G__25700 = count__25696;
var G__25701 = (i__25697 + (1));
seq__25694 = G__25698;
chunk__25695 = G__25699;
count__25696 = G__25700;
i__25697 = G__25701;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25694);if(temp__4126__auto__)
{var seq__25694__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25694__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__25694__$1);{
var G__25702 = cljs.core.chunk_rest.call(null,seq__25694__$1);
var G__25703 = c__4297__auto__;
var G__25704 = cljs.core.count.call(null,c__4297__auto__);
var G__25705 = (0);
seq__25694 = G__25702;
chunk__25695 = G__25703;
count__25696 = G__25704;
i__25697 = G__25705;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__25694__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__25706 = cljs.core.next.call(null,seq__25694__$1);
var G__25707 = null;
var G__25708 = (0);
var G__25709 = (0);
seq__25694 = G__25706;
chunk__25695 = G__25707;
count__25696 = G__25708;
i__25697 = G__25709;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__25718 = cljs.core.js__GT_clj.call(null,envelope);var map__25718__$1 = ((cljs.core.seq_QMARK_.call(null,map__25718))?cljs.core.apply.call(null,cljs.core.hash_map,map__25718):map__25718);var clj_envelope = map__25718__$1;var vec__25719 = cljs.core.get.call(null,map__25718__$1,"coordinates");var vec__25720 = cljs.core.nth.call(null,vec__25719,(0),null);var vec__25721 = cljs.core.nth.call(null,vec__25720,(0),null);var miny0 = cljs.core.nth.call(null,vec__25721,(0),null);var minx0 = cljs.core.nth.call(null,vec__25721,(1),null);var vec__25722 = cljs.core.nth.call(null,vec__25720,(1),null);var maxy1 = cljs.core.nth.call(null,vec__25722,(0),null);var minx1 = cljs.core.nth.call(null,vec__25722,(1),null);var vec__25723 = cljs.core.nth.call(null,vec__25720,(2),null);var maxy2 = cljs.core.nth.call(null,vec__25723,(0),null);var maxx2 = cljs.core.nth.call(null,vec__25723,(1),null);var vec__25724 = cljs.core.nth.call(null,vec__25720,(3),null);var miny3 = cljs.core.nth.call(null,vec__25724,(0),null);var maxx3 = cljs.core.nth.call(null,vec__25724,(1),null);var vec__25725 = cljs.core.nth.call(null,vec__25720,(4),null);var miny4 = cljs.core.nth.call(null,vec__25725,(0),null);var minx4 = cljs.core.nth.call(null,vec__25725,(1),null);var inner = vec__25720;var coords = vec__25719;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__25726){var map__25728 = p__25726;var map__25728__$1 = ((cljs.core.seq_QMARK_.call(null,map__25728))?cljs.core.apply.call(null,cljs.core.hash_map,map__25728):map__25728);var fill_color = cljs.core.get.call(null,map__25728__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__25728__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__25728__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3529__auto__ = selected;if(cljs.core.truth_(and__3529__auto__))
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
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__25729){var map__25731 = p__25729;var map__25731__$1 = ((cljs.core.seq_QMARK_.call(null,map__25731))?cljs.core.apply.call(null,cljs.core.hash_map,map__25731):map__25731);var path_attrs = map__25731__$1;var selected = cljs.core.get.call(null,map__25731__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__25731,map__25731__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__25731,map__25731__$1,path_attrs,selected))
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
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__25732,tolerance,js_boundaryline,path_attrs){var map__25734 = p__25732;var map__25734__$1 = ((cljs.core.seq_QMARK_.call(null,map__25734))?cljs.core.apply.call(null,cljs.core.hash_map,map__25734):map__25734);var path = map__25734__$1;var boundaryline_id = cljs.core.get.call(null,map__25734__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create","create",-1301499256),create_path_keys,new cljs.core.Keyword(null,"delete","delete",-1768633620),delete_path_keys,new cljs.core.Keyword(null,"update","update",1045576396),update_path_keys], null)));var vec__25748 = fetch_boundarylines_fn.call(null,clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()),leaflet_map.getZoom(),new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),live_path_keys);var tolerance_paths = cljs.core.nth.call(null,vec__25748,(0),null);var notifychan = cljs.core.nth.call(null,vec__25748,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan){
return (function (p__25749){var vec__25750 = p__25749;var k = cljs.core.nth.call(null,vec__25750,(0),null);var tolerance = cljs.core.nth.call(null,vec__25750,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__25750,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan){
return (function (k){var vec__25751 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__25751,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__25751,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan,created_paths){
return (function (p__25752){var vec__25753 = p__25752;var k = cljs.core.nth.call(null,vec__25753,(0),null);var tolerance = cljs.core.nth.call(null,vec__25753,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__25753,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__25754 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__25754,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__25754,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var ___$1 = (function (){var seq__25755 = cljs.core.seq.call(null,delete_path_keys);var chunk__25756 = null;var count__25757 = (0);var i__25758 = (0);while(true){
if((i__25758 < count__25757))
{var k = cljs.core._nth.call(null,chunk__25756,i__25758);var temp__4124__auto___25761 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___25761))
{var path_25762 = temp__4124__auto___25761;clustermap.components.map.delete_path.call(null,leaflet_map,path_25762);
} else
{}
{
var G__25763 = seq__25755;
var G__25764 = chunk__25756;
var G__25765 = count__25757;
var G__25766 = (i__25758 + (1));
seq__25755 = G__25763;
chunk__25756 = G__25764;
count__25757 = G__25765;
i__25758 = G__25766;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25755);if(temp__4126__auto__)
{var seq__25755__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25755__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__25755__$1);{
var G__25767 = cljs.core.chunk_rest.call(null,seq__25755__$1);
var G__25768 = c__4297__auto__;
var G__25769 = cljs.core.count.call(null,c__4297__auto__);
var G__25770 = (0);
seq__25755 = G__25767;
chunk__25756 = G__25768;
count__25757 = G__25769;
i__25758 = G__25770;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__25755__$1);var temp__4124__auto___25771 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___25771))
{var path_25772 = temp__4124__auto___25771;clustermap.components.map.delete_path.call(null,leaflet_map,path_25772);
} else
{}
{
var G__25773 = cljs.core.next.call(null,seq__25755__$1);
var G__25774 = null;
var G__25775 = (0);
var G__25776 = (0);
seq__25755 = G__25773;
chunk__25756 = G__25774;
count__25757 = G__25775;
i__25758 = G__25776;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan,created_paths,updated_paths,___$1){
return (function (m,p__25759){var map__25760 = p__25759;var map__25760__$1 = ((cljs.core.seq_QMARK_.call(null,map__25760))?cljs.core.apply.call(null,cljs.core.hash_map,map__25760):map__25760);var path = map__25760__$1;var id = cljs.core.get.call(null,map__25760__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,_,vec__25748,tolerance_paths,notifychan,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = new cljs.core.Keyword(null,"compact_name","compact_name",1525822383).cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),bl_name], null)),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs25778 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs25778))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-constituency-name"], null),attrs25778)))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs25778))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__25781){var vec__25782 = p__25781;var tz = cljs.core.nth.call(null,vec__25782,(0),null);var collection = cljs.core.nth.call(null,vec__25782,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,blcoll,variable,filter,bounds){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_25827){var state_val_25828 = (state_25827[(1)]);if((state_val_25828 === (5)))
{var inst_25825 = (state_25827[(2)]);var state_25827__$1 = state_25827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25827__$1,inst_25825);
} else
{if((state_val_25828 === (4)))
{var state_25827__$1 = state_25827;var statearr_25829_25841 = state_25827__$1;(statearr_25829_25841[(2)] = null);
(statearr_25829_25841[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (3)))
{var inst_25814 = (state_25827[(7)]);var inst_25820 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377)];var inst_25821 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25820,null));var inst_25822 = set_app_state_fn.call(null,inst_25821,inst_25814);var state_25827__$1 = state_25827;var statearr_25830_25842 = state_25827__$1;(statearr_25830_25842[(2)] = inst_25822);
(statearr_25830_25842[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (2)))
{var inst_25814 = (state_25827[(2)]);var inst_25815 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)];var inst_25816 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25815,null));var inst_25817 = get_app_state_fn.call(null,inst_25816);var inst_25818 = cljs.core._EQ_.call(null,ticket,inst_25817);var state_25827__$1 = (function (){var statearr_25831 = state_25827;(statearr_25831[(7)] = inst_25814);
return statearr_25831;
})();if(inst_25818)
{var statearr_25832_25843 = state_25827__$1;(statearr_25832_25843[(1)] = (3));
} else
{var statearr_25833_25844 = state_25827__$1;(statearr_25833_25844[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25828 === (1)))
{var inst_25812 = clustermap.api.boundaryline_aggregation.call(null,index,index_type,blcoll,variable,filter,bounds);var state_25827__$1 = state_25827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25827__$1,(2),inst_25812);
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
var state_machine__5677__auto____0 = (function (){var statearr_25837 = [null,null,null,null,null,null,null,null];(statearr_25837[(0)] = state_machine__5677__auto__);
(statearr_25837[(1)] = (1));
return statearr_25837;
});
var state_machine__5677__auto____1 = (function (state_25827){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25827);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25838){if((e25838 instanceof Object))
{var ex__5680__auto__ = e25838;var statearr_25839_25845 = state_25827;(statearr_25839_25845[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25827);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25846 = state_25827;
state_25827 = G__25846;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25827){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_25840 = f__5692__auto__.call(null);(statearr_25840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_25840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
clustermap.components.map.fetch_point_data = (function fetch_point_data(set_app_state_fn,get_app_state_fn,ticket,index,index_type,filter,bounds){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_25895){var state_val_25896 = (state_25895[(1)]);if((state_val_25896 === (5)))
{var inst_25893 = (state_25895[(2)]);var state_25895__$1 = state_25895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25895__$1,inst_25893);
} else
{if((state_val_25896 === (4)))
{var state_25895__$1 = state_25895;var statearr_25897_25909 = state_25895__$1;(statearr_25897_25909[(2)] = null);
(statearr_25897_25909[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25896 === (3)))
{var inst_25882 = (state_25895[(7)]);var inst_25888 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"point-data","point-data",-1294572970)];var inst_25889 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25888,null));var inst_25890 = set_app_state_fn.call(null,inst_25889,inst_25882);var state_25895__$1 = state_25895;var statearr_25898_25910 = state_25895__$1;(statearr_25898_25910[(2)] = inst_25890);
(statearr_25898_25910[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25896 === (2)))
{var inst_25882 = (state_25895[(2)]);var inst_25883 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)];var inst_25884 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25883,null));var inst_25885 = get_app_state_fn.call(null,inst_25884);var inst_25886 = cljs.core._EQ_.call(null,ticket,inst_25885);var state_25895__$1 = (function (){var statearr_25899 = state_25895;(statearr_25899[(7)] = inst_25882);
return statearr_25899;
})();if(inst_25886)
{var statearr_25900_25911 = state_25895__$1;(statearr_25900_25911[(1)] = (3));
} else
{var statearr_25901_25912 = state_25895__$1;(statearr_25901_25912[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25896 === (1)))
{var inst_25878 = ["!name","!location","!latest_employee_count","!latest_turnover"];var inst_25879 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25878,null));var inst_25880 = clustermap.api.location_lists.call(null,index,index_type,"!postcode",inst_25879,(1000),filter,bounds);var state_25895__$1 = state_25895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25895__$1,(2),inst_25880);
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
var state_machine__5677__auto____0 = (function (){var statearr_25905 = [null,null,null,null,null,null,null,null];(statearr_25905[(0)] = state_machine__5677__auto__);
(statearr_25905[(1)] = (1));
return statearr_25905;
});
var state_machine__5677__auto____1 = (function (state_25895){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25906){if((e25906 instanceof Object))
{var ex__5680__auto__ = e25906;var statearr_25907_25913 = state_25895;(statearr_25907_25913[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25914 = state_25895;
state_25895 = G__25914;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25895){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_25908 = f__5692__auto__.call(null);(statearr_25908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_25908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__25915,owner){var map__25953 = p__25915;var map__25953__$1 = ((cljs.core.seq_QMARK_.call(null,map__25953))?cljs.core.apply.call(null,cljs.core.hash_map,map__25953):map__25953);var cursor = map__25953__$1;var map__25954 = cljs.core.get.call(null,map__25953__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__25954__$1 = ((cljs.core.seq_QMARK_.call(null,map__25954))?cljs.core.apply.call(null,cljs.core.hash_map,map__25954):map__25954);var initial_bounds = cljs.core.get.call(null,map__25954__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));if(typeof clustermap.components.map.t25955 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t25955 = (function (initial_bounds,map__25954,cursor,map__25953,owner,p__25915,map_component,meta25956){
this.initial_bounds = initial_bounds;
this.map__25954 = map__25954;
this.cursor = cursor;
this.map__25953 = map__25953;
this.owner = owner;
this.p__25915 = p__25915;
this.map_component = map_component;
this.meta25956 = meta25956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t25955.cljs$lang$type = true;
clustermap.components.map.t25955.cljs$lang$ctorStr = "clustermap.components.map/t25955";
clustermap.components.map.t25955.cljs$lang$ctorPrWriter = ((function (map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map/t25955");
});})(map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;
clustermap.components.map.t25955.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t25955.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (this$,p__25958,p__25959){var self__ = this;
var map__25960 = p__25958;var map__25960__$1 = ((cljs.core.seq_QMARK_.call(null,map__25960))?cljs.core.apply.call(null,cljs.core.hash_map,map__25960):map__25960);var next_filter = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_data = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_point_data = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var next_boundaryline_collections = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__25961 = cljs.core.get.call(null,map__25960__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__25961__$1 = ((cljs.core.seq_QMARK_.call(null,map__25961))?cljs.core.apply.call(null,cljs.core.hash_map,map__25961):map__25961);var next_zoom = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_bounds = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_collection = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_colorchooser = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_agg = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_threshold_colors = cljs.core.get.call(null,map__25961__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var map__25962 = p__25959;var map__25962__$1 = ((cljs.core.seq_QMARK_.call(null,map__25962))?cljs.core.apply.call(null,cljs.core.hash_map,map__25962):map__25962);var map__25963 = cljs.core.get.call(null,map__25962__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__25963__$1 = ((cljs.core.seq_QMARK_.call(null,map__25963))?cljs.core.apply.call(null,cljs.core.hash_map,map__25963):map__25963);var next_markers = cljs.core.get.call(null,map__25963__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var next_paths = cljs.core.get.call(null,map__25963__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__25963__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__25962__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var this$__$1 = this;var map__25964 = om.core.get_props.call(null,self__.owner);var map__25964__$1 = ((cljs.core.seq_QMARK_.call(null,map__25964))?cljs.core.apply.call(null,cljs.core.hash_map,map__25964):map__25964);var filter = cljs.core.get.call(null,map__25964__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var data = cljs.core.get.call(null,map__25964__$1,new cljs.core.Keyword(null,"data","data",-232669377));var point_data = cljs.core.get.call(null,map__25964__$1,new cljs.core.Keyword(null,"point-data","point-data",-1294572970));var boundaryline_collections = cljs.core.get.call(null,map__25964__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__25965 = cljs.core.get.call(null,map__25964__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__25965__$1 = ((cljs.core.seq_QMARK_.call(null,map__25965))?cljs.core.apply.call(null,cljs.core.hash_map,map__25965):map__25965);var threshold_colors = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var boundaryline_agg = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var colorchooser = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var boundaryline_collection = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var zoom = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var bounds = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds__$2 = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var map__25966 = om.core.get_shared.call(null,self__.owner);var map__25966__$1 = ((cljs.core.seq_QMARK_.call(null,map__25966))?cljs.core.apply.call(null,cljs.core.hash_map,map__25966):map__25966);var get_app_state_fn = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"get-app-state-fn","get-app-state-fn",-1385178201));var set_app_state_fn = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"set-app-state-fn","set-app-state-fn",-1158769652));var point_in_boundarylines_fn = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var link_fn = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var path_fn = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__25966__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__25967 = om.core.get_state.call(null,self__.owner);var map__25967__$1 = ((cljs.core.seq_QMARK_.call(null,map__25967))?cljs.core.apply.call(null,cljs.core.hash_map,map__25967):map__25967);var map__25968 = cljs.core.get.call(null,map__25967__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__25968__$1 = ((cljs.core.seq_QMARK_.call(null,map__25968))?cljs.core.apply.call(null,cljs.core.hash_map,map__25968):map__25968);var path_selections = cljs.core.get.call(null,map__25968__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__25968__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__25968__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__25968__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__25967__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__25967__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3529__auto__ = leaflet_map;if(cljs.core.truth_(and__3529__auto__))
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
{var ticket_25990 = clustermap.components.map.next_ticket.call(null);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"ticket","ticket",1810559700)], null),ticket_25990);
clustermap.components.map.fetch_aggregation_data.call(null,set_app_state_fn,get_app_state_fn,ticket_25990,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),clustermap.components.map.choose_boundaryline_collection.call(null,next_boundaryline_collections,leaflet_map.getZoom()),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
clustermap.components.map.fetch_point_data.call(null,set_app_state_fn,get_app_state_fn,ticket_25990,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
} else
{}
if((cljs.core.not_EQ_.call(null,next_data,data)) || (cljs.core.not_EQ_.call(null,next_colorchooser,colorchooser)))
{var vec__25969_25991 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors_25992 = cljs.core.nth.call(null,vec__25969_25991,(0),null);var selection_path_colours_25993 = cljs.core.nth.call(null,vec__25969_25991,(1),null);var update_paths_invocation_25994 = ((function (vec__25969_25991,new_threshold_colors_25992,selection_path_colours_25993,map__25964,map__25964__$1,filter,data,point_data,boundaryline_collections,map__25965,map__25965__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__25966,map__25966__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__25967,map__25967__$1,map__25968,map__25968__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__25960,map__25960__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__25961,map__25961__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__25962,map__25962__$1,map__25963,map__25963__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours_25993);
});})(vec__25969_25991,new_threshold_colors_25992,selection_path_colours_25993,map__25964,map__25964__$1,filter,data,point_data,boundaryline_collections,map__25965,map__25965__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__25966,map__25966__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__25967,map__25967__$1,map__25968,map__25968__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__25960,map__25960__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__25961,map__25961__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__25962,map__25962__$1,map__25963,map__25963__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors_25992,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors_25992);
} else
{}
var temp__4126__auto___25995 = update_paths_invocation_25994.call(null);if(cljs.core.truth_(temp__4126__auto___25995))
{var notify_chan_25996 = temp__4126__auto___25995;var c__5691__auto___25997 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___25997,notify_chan_25996,temp__4126__auto___25995,vec__25969_25991,new_threshold_colors_25992,selection_path_colours_25993,update_paths_invocation_25994,map__25964,map__25964__$1,filter,data,point_data,boundaryline_collections,map__25965,map__25965__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__25966,map__25966__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__25967,map__25967__$1,map__25968,map__25968__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__25960,map__25960__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__25961,map__25961__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__25962,map__25962__$1,map__25963,map__25963__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___25997,notify_chan_25996,temp__4126__auto___25995,vec__25969_25991,new_threshold_colors_25992,selection_path_colours_25993,update_paths_invocation_25994,map__25964,map__25964__$1,filter,data,point_data,boundaryline_collections,map__25965,map__25965__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__25966,map__25966__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__25967,map__25967__$1,map__25968,map__25968__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__25960,map__25960__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__25961,map__25961__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__25962,map__25962__$1,map__25963,map__25963__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (state_25974){var state_val_25975 = (state_25974[(1)]);if((state_val_25975 === (2)))
{var inst_25971 = (state_25974[(2)]);var inst_25972 = update_paths_invocation_25994.call(null);var state_25974__$1 = (function (){var statearr_25976 = state_25974;(statearr_25976[(7)] = inst_25971);
return statearr_25976;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25974__$1,inst_25972);
} else
{if((state_val_25975 === (1)))
{var state_25974__$1 = state_25974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25974__$1,(2),notify_chan_25996);
} else
{return null;
}
}
});})(c__5691__auto___25997,notify_chan_25996,temp__4126__auto___25995,vec__25969_25991,new_threshold_colors_25992,selection_path_colours_25993,update_paths_invocation_25994,map__25964,map__25964__$1,filter,data,point_data,boundaryline_collections,map__25965,map__25965__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__25966,map__25966__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__25967,map__25967__$1,map__25968,map__25968__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__25960,map__25960__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__25961,map__25961__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__25962,map__25962__$1,map__25963,map__25963__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;return ((function (switch__5676__auto__,c__5691__auto___25997,notify_chan_25996,temp__4126__auto___25995,vec__25969_25991,new_threshold_colors_25992,selection_path_colours_25993,update_paths_invocation_25994,map__25964,map__25964__$1,filter,data,point_data,boundaryline_collections,map__25965,map__25965__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__25966,map__25966__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__25967,map__25967__$1,map__25968,map__25968__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__25960,map__25960__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__25961,map__25961__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__25962,map__25962__$1,map__25963,map__25963__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_25980 = [null,null,null,null,null,null,null,null];(statearr_25980[(0)] = state_machine__5677__auto__);
(statearr_25980[(1)] = (1));
return statearr_25980;
});
var state_machine__5677__auto____1 = (function (state_25974){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_25974);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e25981){if((e25981 instanceof Object))
{var ex__5680__auto__ = e25981;var statearr_25982_25998 = state_25974;(statearr_25982_25998[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25999 = state_25974;
state_25974 = G__25999;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_25974){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_25974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___25997,notify_chan_25996,temp__4126__auto___25995,vec__25969_25991,new_threshold_colors_25992,selection_path_colours_25993,update_paths_invocation_25994,map__25964,map__25964__$1,filter,data,point_data,boundaryline_collections,map__25965,map__25965__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__25966,map__25966__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__25967,map__25967__$1,map__25968,map__25968__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__25960,map__25960__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__25961,map__25961__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__25962,map__25962__$1,map__25963,map__25963__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
})();var state__5693__auto__ = (function (){var statearr_25983 = f__5692__auto__.call(null);(statearr_25983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___25997);
return statearr_25983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___25997,notify_chan_25996,temp__4126__auto___25995,vec__25969_25991,new_threshold_colors_25992,selection_path_colours_25993,update_paths_invocation_25994,map__25964,map__25964__$1,filter,data,point_data,boundaryline_collections,map__25965,map__25965__$1,threshold_colors,boundaryline_agg,colorchooser,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__25966,map__25966__$1,get_app_state_fn,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__25967,map__25967__$1,map__25968,map__25968__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__25960,map__25960__$1,next_filter,next_data,next_point_data,next_boundaryline_collections,map__25961,map__25961__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser,next_boundaryline_agg,next_threshold_colors,map__25962,map__25962__$1,map__25963,map__25963__$1,next_markers,next_paths,next_path_selections,next_path_highlights,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
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
});})(map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;
clustermap.components.map.t25955.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t25955.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__25984 = clustermap.components.map.create_map.call(null,node,self__.initial_bounds);var map__25984__$1 = ((cljs.core.seq_QMARK_.call(null,map__25984))?cljs.core.apply.call(null,cljs.core.hash_map,map__25984):map__25984);var map = map__25984__$1;var path = cljs.core.get.call(null,map__25984__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__25984__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__25984__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__25985 = om.core.get_shared.call(null,self__.owner);var map__25985__$1 = ((cljs.core.seq_QMARK_.call(null,map__25985))?cljs.core.apply.call(null,cljs.core.hash_map,map__25985):map__25985);var path_fn = cljs.core.get.call(null,map__25985__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__25985__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var point_in_boundarylines_fn = cljs.core.get.call(null,map__25985__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__25985__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__25985__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("moveend",((function (node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (e){console.log("moveend");
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
);
});})(node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = point_in_boundarylines_fn.call(null,lng,lat);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3529__auto__ = highlight_hit;if(cljs.core.truth_(and__3529__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134))));
} else
{return and__3529__auto__;
}
})()))
{var G__25986_26000 = L.popup();G__25986_26000.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__25986_26000.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__25986_26000.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),highlight_path_ids);
});})(node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (e){var hits = point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat);var boundaryline_id = (function (){var G__25987 = hits;var G__25987__$1 = (((G__25987 == null))?null:cljs.core.first.call(null,G__25987));var G__25987__$2 = (((G__25987__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25987__$1));return G__25987__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__25984,map__25984__$1,map,path,markers,leaflet_map,map__25985,map__25985__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
);
});})(map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;
clustermap.components.map.t25955.prototype.om$core$IRender$ = true;
clustermap.components.map.t25955.prototype.om$core$IRender$render$arity$1 = ((function (map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;
clustermap.components.map.t25955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (_25957){var self__ = this;
var _25957__$1 = this;return self__.meta25956;
});})(map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;
clustermap.components.map.t25955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function (_25957,meta25956__$1){var self__ = this;
var _25957__$1 = this;return (new clustermap.components.map.t25955(self__.initial_bounds,self__.map__25954,self__.cursor,self__.map__25953,self__.owner,self__.p__25915,self__.map_component,meta25956__$1));
});})(map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;
clustermap.components.map.__GT_t25955 = ((function (map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds){
return (function __GT_t25955(initial_bounds__$1,map__25954__$2,cursor__$1,map__25953__$2,owner__$1,p__25915__$1,map_component__$1,meta25956){return (new clustermap.components.map.t25955(initial_bounds__$1,map__25954__$2,cursor__$1,map__25953__$2,owner__$1,p__25915__$1,map_component__$1,meta25956));
});})(map__25953,map__25953__$1,cursor,map__25954,map__25954__$1,initial_bounds))
;
}
return (new clustermap.components.map.t25955(initial_bounds,map__25954__$1,cursor,map__25953__$1,owner,p__25915,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
