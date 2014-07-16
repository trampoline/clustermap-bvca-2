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
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__48832 = config;var G__48832__$1 = (((G__48832 == null))?null:G__48832.components);var G__48832__$2 = (((G__48832__$1 == null))?null:G__48832__$1.map);var G__48832__$3 = (((G__48832__$2 == null))?null:G__48832__$2.api_key);return G__48832__$3;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__48833){
var m = cljs.core.first(arglist__48833);
var all_bounds = cljs.core.rest(arglist__48833);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs48835 = cljs.core.map.call(null,(function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),site),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs48835))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-popup-location-list"], null),attrs48835)))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs48835))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__48838 = location_sites;var G__48838__$1 = (((G__48838 == null))?null:cljs.core.first.call(null,G__48838));var G__48838__$2 = (((G__48838__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__48838__$1));var G__48838__$3 = (((G__48838__$2 == null))?null:cljs.core.reverse.call(null,G__48838__$2));var G__48838__$4 = (((G__48838__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__48838__$3));return G__48838__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_48839_48840 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_48839_48840,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_48839_48840,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48839_48840;
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
,update_marker_keys));var _ = (function (){var seq__48845 = cljs.core.seq.call(null,remove_marker_keys);var chunk__48846 = null;var count__48847 = (0);var i__48848 = (0);while(true){
if((i__48848 < count__48847))
{var k = cljs.core._nth.call(null,chunk__48846,i__48848);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__48849 = seq__48845;
var G__48850 = chunk__48846;
var G__48851 = count__48847;
var G__48852 = (i__48848 + (1));
seq__48845 = G__48849;
chunk__48846 = G__48850;
count__48847 = G__48851;
i__48848 = G__48852;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__48845);if(temp__4126__auto__)
{var seq__48845__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48845__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__48845__$1);{
var G__48853 = cljs.core.chunk_rest.call(null,seq__48845__$1);
var G__48854 = c__4299__auto__;
var G__48855 = cljs.core.count.call(null,c__4299__auto__);
var G__48856 = (0);
seq__48845 = G__48853;
chunk__48846 = G__48854;
count__48847 = G__48855;
i__48848 = G__48856;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__48845__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__48857 = cljs.core.next.call(null,seq__48845__$1);
var G__48858 = null;
var G__48859 = (0);
var G__48860 = (0);
seq__48845 = G__48857;
chunk__48846 = G__48858;
count__48847 = G__48859;
i__48848 = G__48860;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__48869 = cljs.core.js__GT_clj.call(null,envelope);var map__48869__$1 = ((cljs.core.seq_QMARK_.call(null,map__48869))?cljs.core.apply.call(null,cljs.core.hash_map,map__48869):map__48869);var clj_envelope = map__48869__$1;var vec__48870 = cljs.core.get.call(null,map__48869__$1,"coordinates");var vec__48871 = cljs.core.nth.call(null,vec__48870,(0),null);var vec__48872 = cljs.core.nth.call(null,vec__48871,(0),null);var miny0 = cljs.core.nth.call(null,vec__48872,(0),null);var minx0 = cljs.core.nth.call(null,vec__48872,(1),null);var vec__48873 = cljs.core.nth.call(null,vec__48871,(1),null);var maxy1 = cljs.core.nth.call(null,vec__48873,(0),null);var minx1 = cljs.core.nth.call(null,vec__48873,(1),null);var vec__48874 = cljs.core.nth.call(null,vec__48871,(2),null);var maxy2 = cljs.core.nth.call(null,vec__48874,(0),null);var maxx2 = cljs.core.nth.call(null,vec__48874,(1),null);var vec__48875 = cljs.core.nth.call(null,vec__48871,(3),null);var miny3 = cljs.core.nth.call(null,vec__48875,(0),null);var maxx3 = cljs.core.nth.call(null,vec__48875,(1),null);var vec__48876 = cljs.core.nth.call(null,vec__48871,(4),null);var miny4 = cljs.core.nth.call(null,vec__48876,(0),null);var minx4 = cljs.core.nth.call(null,vec__48876,(1),null);var inner = vec__48871;var coords = vec__48870;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__48877){var map__48879 = p__48877;var map__48879__$1 = ((cljs.core.seq_QMARK_.call(null,map__48879))?cljs.core.apply.call(null,cljs.core.hash_map,map__48879):map__48879);var fill_color = cljs.core.get.call(null,map__48879__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__48879__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__48879__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__48880){var map__48882 = p__48880;var map__48882__$1 = ((cljs.core.seq_QMARK_.call(null,map__48882))?cljs.core.apply.call(null,cljs.core.hash_map,map__48882):map__48882);var path_attrs = map__48882__$1;var selected = cljs.core.get.call(null,map__48882__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__48882,map__48882__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__48882,map__48882__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,leaflet_map,boundaryline_id,path_attrs){var temp__4124__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4124__auto__))
{var vec__48884 = temp__4124__auto__;var tolerance = cljs.core.nth.call(null,vec__48884,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__48884,(1),null);return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
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
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,leaflet_map,p__48885,path_attrs){var map__48888 = p__48885;var map__48888__$1 = ((cljs.core.seq_QMARK_.call(null,map__48888))?cljs.core.apply.call(null,cljs.core.hash_map,map__48888):map__48888);var path = map__48888__$1;var boundaryline_id = cljs.core.get.call(null,map__48888__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var temp__4124__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4124__auto__))
{var vec__48889 = temp__4124__auto__;var tolerance = cljs.core.nth.call(null,vec__48889,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__48889,(1),null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
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
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path.call(null,comm,fetch_boundaryline_fn,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path.call(null,comm,fetch_boundaryline_fn,leaflet_map,cljs.core.get.call(null,paths,k),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__48896 = cljs.core.seq.call(null,delete_path_keys);var chunk__48897 = null;var count__48898 = (0);var i__48899 = (0);while(true){
if((i__48899 < count__48898))
{var k = cljs.core._nth.call(null,chunk__48897,i__48899);var temp__4124__auto___48902 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___48902))
{var path_48903 = temp__4124__auto___48902;clustermap.components.map.delete_path.call(null,leaflet_map,path_48903);
} else
{}
{
var G__48904 = seq__48896;
var G__48905 = chunk__48897;
var G__48906 = count__48898;
var G__48907 = (i__48899 + (1));
seq__48896 = G__48904;
chunk__48897 = G__48905;
count__48898 = G__48906;
i__48899 = G__48907;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__48896);if(temp__4126__auto__)
{var seq__48896__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48896__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__48896__$1);{
var G__48908 = cljs.core.chunk_rest.call(null,seq__48896__$1);
var G__48909 = c__4299__auto__;
var G__48910 = cljs.core.count.call(null,c__4299__auto__);
var G__48911 = (0);
seq__48896 = G__48908;
chunk__48897 = G__48909;
count__48898 = G__48910;
i__48899 = G__48911;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__48896__$1);var temp__4124__auto___48912 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___48912))
{var path_48913 = temp__4124__auto___48912;clustermap.components.map.delete_path.call(null,leaflet_map,path_48913);
} else
{}
{
var G__48914 = cljs.core.next.call(null,seq__48896__$1);
var G__48915 = null;
var G__48916 = (0);
var G__48917 = (0);
seq__48896 = G__48914;
chunk__48897 = G__48915;
count__48898 = G__48916;
i__48899 = G__48917;
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
return (function (m,p__48900){var map__48901 = p__48900;var map__48901__$1 = ((cljs.core.seq_QMARK_.call(null,map__48901))?cljs.core.apply.call(null,cljs.core.hash_map,map__48901):map__48901);var path = map__48901__$1;var id = cljs.core.get.call(null,map__48901__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = new cljs.core.Keyword(null,"compact_name","compact_name",1525822383).cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),bl_name], null)),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs48919 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs48919))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-constituency-name"], null),attrs48919)))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs48919))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__48922){var vec__48923 = p__48922;var tz = cljs.core.nth.call(null,vec__48923,(0),null);var collection = cljs.core.nth.call(null,vec__48923,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,index,index_type,blcoll,variable,filter){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_48947){var state_val_48948 = (state_48947[(1)]);if((state_val_48948 === (2)))
{var inst_48942 = (state_48947[(2)]);var inst_48943 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377)];var inst_48944 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48943,null));var inst_48945 = set_app_state_fn.call(null,inst_48944,inst_48942);var state_48947__$1 = state_48947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48947__$1,inst_48945);
} else
{if((state_val_48948 === (1)))
{var inst_48940 = clustermap.api.boundaryline_aggregation.call(null,index,index_type,blcoll,variable,filter);var state_48947__$1 = state_48947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48947__$1,(2),inst_48940);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48952 = [null,null,null,null,null,null,null];(statearr_48952[(0)] = state_machine__5679__auto__);
(statearr_48952[(1)] = (1));
return statearr_48952;
});
var state_machine__5679__auto____1 = (function (state_48947){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48953){if((e48953 instanceof Object))
{var ex__5682__auto__ = e48953;var statearr_48954_48956 = state_48947;(statearr_48954_48956[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48957 = state_48947;
state_48947 = G__48957;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48947){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_48955 = f__5694__auto__.call(null);(statearr_48955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__48958,owner){var map__48981 = p__48958;var map__48981__$1 = ((cljs.core.seq_QMARK_.call(null,map__48981))?cljs.core.apply.call(null,cljs.core.hash_map,map__48981):map__48981);var cursor = map__48981__$1;var map__48982 = cljs.core.get.call(null,map__48981__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__48982__$1 = ((cljs.core.seq_QMARK_.call(null,map__48982))?cljs.core.apply.call(null,cljs.core.hash_map,map__48982):map__48982);var initial_bounds = cljs.core.get.call(null,map__48982__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));if(typeof clustermap.components.map.t48983 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t48983 = (function (initial_bounds,map__48982,cursor,map__48981,owner,p__48958,map_component,meta48984){
this.initial_bounds = initial_bounds;
this.map__48982 = map__48982;
this.cursor = cursor;
this.map__48981 = map__48981;
this.owner = owner;
this.p__48958 = p__48958;
this.map_component = map_component;
this.meta48984 = meta48984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t48983.cljs$lang$type = true;
clustermap.components.map.t48983.cljs$lang$ctorStr = "clustermap.components.map/t48983";
clustermap.components.map.t48983.cljs$lang$ctorPrWriter = ((function (map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map/t48983");
});})(map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
;
clustermap.components.map.t48983.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t48983.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (this$,p__48986,p__48987){var self__ = this;
var map__48988 = p__48986;var map__48988__$1 = ((cljs.core.seq_QMARK_.call(null,map__48988))?cljs.core.apply.call(null,cljs.core.hash_map,map__48988):map__48988);var next_filter = cljs.core.get.call(null,map__48988__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_data = cljs.core.get.call(null,map__48988__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_boundaryline_collections = cljs.core.get.call(null,map__48988__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__48989 = cljs.core.get.call(null,map__48988__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__48989__$1 = ((cljs.core.seq_QMARK_.call(null,map__48989))?cljs.core.apply.call(null,cljs.core.hash_map,map__48989):map__48989);var next_zoom = cljs.core.get.call(null,map__48989__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_bounds = cljs.core.get.call(null,map__48989__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_collection = cljs.core.get.call(null,map__48989__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var colorchooser_control = cljs.core.get.call(null,map__48989__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_agg = cljs.core.get.call(null,map__48989__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var map__48990 = p__48987;var map__48990__$1 = ((cljs.core.seq_QMARK_.call(null,map__48990))?cljs.core.apply.call(null,cljs.core.hash_map,map__48990):map__48990);var next_path_highlights = cljs.core.get.call(null,map__48990__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var this$__$1 = this;var map__48991 = om.core.get_props.call(null,self__.owner);var map__48991__$1 = ((cljs.core.seq_QMARK_.call(null,map__48991))?cljs.core.apply.call(null,cljs.core.hash_map,map__48991):map__48991);var filter = cljs.core.get.call(null,map__48991__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var data = cljs.core.get.call(null,map__48991__$1,new cljs.core.Keyword(null,"data","data",-232669377));var boundaryline_collections = cljs.core.get.call(null,map__48991__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__48992 = cljs.core.get.call(null,map__48991__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__48992__$1 = ((cljs.core.seq_QMARK_.call(null,map__48992))?cljs.core.apply.call(null,cljs.core.hash_map,map__48992):map__48992);var boundaryline_agg = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var boundaryline_collection = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var zoom = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var bounds = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds__$2 = cljs.core.get.call(null,map__48992__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var map__48993 = om.core.get_shared.call(null,self__.owner);var map__48993__$1 = ((cljs.core.seq_QMARK_.call(null,map__48993))?cljs.core.apply.call(null,cljs.core.hash_map,map__48993):map__48993);var set_app_state_fn = cljs.core.get.call(null,map__48993__$1,new cljs.core.Keyword(null,"set-app-state-fn","set-app-state-fn",-1158769652));var point_in_boundarylines_fn = cljs.core.get.call(null,map__48993__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundaryline_fn = cljs.core.get.call(null,map__48993__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",-1105464009));var link_fn = cljs.core.get.call(null,map__48993__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var path_fn = cljs.core.get.call(null,map__48993__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__48993__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__48994 = om.core.get_state.call(null,self__.owner);var map__48994__$1 = ((cljs.core.seq_QMARK_.call(null,map__48994))?cljs.core.apply.call(null,cljs.core.hash_map,map__48994):map__48994);var map__48995 = cljs.core.get.call(null,map__48994__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__48995__$1 = ((cljs.core.seq_QMARK_.call(null,map__48995))?cljs.core.apply.call(null,cljs.core.hash_map,map__48995):map__48995);var path_selections = cljs.core.get.call(null,map__48995__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__48995__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__48995__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__48995__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__48994__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__48994__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
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
{return cljs.core._EQ_.call(null,next_data,null);
} else
{return and__3531__auto____$1;
}
})();if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (function (){var and__3531__auto____$1 = next_boundaryline_agg;if(cljs.core.truth_(and__3531__auto____$1))
{return cljs.core.not_EQ_.call(null,next_boundaryline_agg,boundaryline_agg);
} else
{return and__3531__auto____$1;
}
})();if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return (cljs.core.not_EQ_.call(null,next_boundaryline_collection,boundaryline_collection)) || (cljs.core.not_EQ_.call(null,next_filter,filter));
}
}
} else
{return and__3531__auto__;
}
})()))
{clustermap.components.map.fetch_aggregation_data.call(null,set_app_state_fn,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),next_boundaryline_collection,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter));
} else
{}
var vec__48996 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(colorchooser_control),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(colorchooser_control)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(colorchooser_control)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var threshold_colors = cljs.core.nth.call(null,vec__48996,(0),null);var selection_path_colours = cljs.core.nth.call(null,vec__48996,(1),null);if(cljs.core.not_EQ_.call(null,next_data,data))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next-data",next_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["threshold-colors",threshold_colors], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection-path-colors",selection_path_colours], null)));
} else
{}
return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundaryline_fn,next_boundaryline_collection),leaflet_map,paths,path_selections,next_path_highlights,selection_path_colours);
});})(map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
;
clustermap.components.map.t48983.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t48983.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__48997 = clustermap.components.map.create_map.call(null,node,self__.initial_bounds);var map__48997__$1 = ((cljs.core.seq_QMARK_.call(null,map__48997))?cljs.core.apply.call(null,cljs.core.hash_map,map__48997):map__48997);var map = map__48997__$1;var path = cljs.core.get.call(null,map__48997__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__48997__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__48997__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__48998 = om.core.get_shared.call(null,self__.owner);var map__48998__$1 = ((cljs.core.seq_QMARK_.call(null,map__48998))?cljs.core.apply.call(null,cljs.core.hash_map,map__48998):map__48998);var path_fn = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var point_in_boundarylines_fn = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundaryline_fn = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",-1105464009));var comm = cljs.core.get.call(null,map__48998__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",((function (node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (e){om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
);
leaflet_map.on("moveend",((function (node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (e){om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
);
});})(node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = point_in_boundarylines_fn.call(null,lng,lat);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134))));
} else
{return and__3531__auto__;
}
})()))
{var G__48999_49003 = L.popup();G__48999_49003.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__48999_49003.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__48999_49003.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),highlight_path_ids);
});})(node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (e){var hits = point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat);var boundaryline_id = (function (){var G__49000 = hits;var G__49000__$1 = (((G__49000 == null))?null:cljs.core.first.call(null,G__49000));var G__49000__$2 = (((G__49000__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__49000__$1));return G__49000__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__48997,map__48997__$1,map,path,markers,leaflet_map,map__48998,map__48998__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
);
});})(map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
;
clustermap.components.map.t48983.prototype.om$core$IRender$ = true;
clustermap.components.map.t48983.prototype.om$core$IRender$render$arity$1 = ((function (map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
;
clustermap.components.map.t48983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (_48985){var self__ = this;
var _48985__$1 = this;return self__.meta48984;
});})(map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
;
clustermap.components.map.t48983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function (_48985,meta48984__$1){var self__ = this;
var _48985__$1 = this;return (new clustermap.components.map.t48983(self__.initial_bounds,self__.map__48982,self__.cursor,self__.map__48981,self__.owner,self__.p__48958,self__.map_component,meta48984__$1));
});})(map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
;
clustermap.components.map.__GT_t48983 = ((function (map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds){
return (function __GT_t48983(initial_bounds__$1,map__48982__$2,cursor__$1,map__48981__$2,owner__$1,p__48958__$1,map_component__$1,meta48984){return (new clustermap.components.map.t48983(initial_bounds__$1,map__48982__$2,cursor__$1,map__48981__$2,owner__$1,p__48958__$1,map_component__$1,meta48984));
});})(map__48981,map__48981__$1,cursor,map__48982,map__48982__$1,initial_bounds))
;
}
return (new clustermap.components.map.t48983(initial_bounds,map__48982__$1,cursor,map__48981__$1,owner,p__48958,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=map.js.map