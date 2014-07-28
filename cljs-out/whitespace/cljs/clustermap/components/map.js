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
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__13750 = config;var G__13750__$1 = (((G__13750 == null))?null:G__13750.components);var G__13750__$2 = (((G__13750__$1 == null))?null:G__13750__$1.map);var G__13750__$3 = (((G__13750__$2 == null))?null:G__13750__$2.api_key);return G__13750__$3;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__13751){
var m = cljs.core.first(arglist__13751);
var all_bounds = cljs.core.rest(arglist__13751);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13753 = cljs.core.map.call(null,(function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),site),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs13753))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-popup-location-list"], null),attrs13753)))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13753))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__13756 = location_sites;var G__13756__$1 = (((G__13756 == null))?null:cljs.core.first.call(null,G__13756));var G__13756__$2 = (((G__13756__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__13756__$1));var G__13756__$3 = (((G__13756__$2 == null))?null:cljs.core.reverse.call(null,G__13756__$2));var G__13756__$4 = (((G__13756__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__13756__$3));return G__13756__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_13757_13758 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_13757_13758,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_13757_13758,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13757_13758;
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
,update_marker_keys));var _ = (function (){var seq__13763 = cljs.core.seq.call(null,remove_marker_keys);var chunk__13764 = null;var count__13765 = (0);var i__13766 = (0);while(true){
if((i__13766 < count__13765))
{var k = cljs.core._nth.call(null,chunk__13764,i__13766);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__13767 = seq__13763;
var G__13768 = chunk__13764;
var G__13769 = count__13765;
var G__13770 = (i__13766 + (1));
seq__13763 = G__13767;
chunk__13764 = G__13768;
count__13765 = G__13769;
i__13766 = G__13770;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13763);if(temp__4126__auto__)
{var seq__13763__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13763__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13763__$1);{
var G__13771 = cljs.core.chunk_rest.call(null,seq__13763__$1);
var G__13772 = c__4299__auto__;
var G__13773 = cljs.core.count.call(null,c__4299__auto__);
var G__13774 = (0);
seq__13763 = G__13771;
chunk__13764 = G__13772;
count__13765 = G__13773;
i__13766 = G__13774;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__13763__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__13775 = cljs.core.next.call(null,seq__13763__$1);
var G__13776 = null;
var G__13777 = (0);
var G__13778 = (0);
seq__13763 = G__13775;
chunk__13764 = G__13776;
count__13765 = G__13777;
i__13766 = G__13778;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__13787 = cljs.core.js__GT_clj.call(null,envelope);var map__13787__$1 = ((cljs.core.seq_QMARK_.call(null,map__13787))?cljs.core.apply.call(null,cljs.core.hash_map,map__13787):map__13787);var clj_envelope = map__13787__$1;var vec__13788 = cljs.core.get.call(null,map__13787__$1,"coordinates");var vec__13789 = cljs.core.nth.call(null,vec__13788,(0),null);var vec__13790 = cljs.core.nth.call(null,vec__13789,(0),null);var miny0 = cljs.core.nth.call(null,vec__13790,(0),null);var minx0 = cljs.core.nth.call(null,vec__13790,(1),null);var vec__13791 = cljs.core.nth.call(null,vec__13789,(1),null);var maxy1 = cljs.core.nth.call(null,vec__13791,(0),null);var minx1 = cljs.core.nth.call(null,vec__13791,(1),null);var vec__13792 = cljs.core.nth.call(null,vec__13789,(2),null);var maxy2 = cljs.core.nth.call(null,vec__13792,(0),null);var maxx2 = cljs.core.nth.call(null,vec__13792,(1),null);var vec__13793 = cljs.core.nth.call(null,vec__13789,(3),null);var miny3 = cljs.core.nth.call(null,vec__13793,(0),null);var maxx3 = cljs.core.nth.call(null,vec__13793,(1),null);var vec__13794 = cljs.core.nth.call(null,vec__13789,(4),null);var miny4 = cljs.core.nth.call(null,vec__13794,(0),null);var minx4 = cljs.core.nth.call(null,vec__13794,(1),null);var inner = vec__13789;var coords = vec__13788;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__13795){var map__13797 = p__13795;var map__13797__$1 = ((cljs.core.seq_QMARK_.call(null,map__13797))?cljs.core.apply.call(null,cljs.core.hash_map,map__13797):map__13797);var fill_color = cljs.core.get.call(null,map__13797__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__13797__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__13797__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__13798){var map__13800 = p__13798;var map__13800__$1 = ((cljs.core.seq_QMARK_.call(null,map__13800))?cljs.core.apply.call(null,cljs.core.hash_map,map__13800):map__13800);var path_attrs = map__13800__$1;var selected = cljs.core.get.call(null,map__13800__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__13800,map__13800__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__13800,map__13800__$1,path_attrs,selected))
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
clustermap.components.map.update_path = (function update_path(comm,leaflet_map,p__13801,tolerance,js_boundaryline,path_attrs){var map__13803 = p__13801;var map__13803__$1 = ((cljs.core.seq_QMARK_.call(null,map__13803))?cljs.core.apply.call(null,cljs.core.hash_map,map__13803):map__13803);var path = map__13803__$1;var boundaryline_id = cljs.core.get.call(null,map__13803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundarylines_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var vec__13817 = fetch_boundarylines_fn.call(null,live_path_keys,leaflet_map.getZoom());var tolerance_paths = cljs.core.nth.call(null,vec__13817,(0),null);var notifychan = cljs.core.nth.call(null,vec__13817,(1),null);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan){
return (function (p__13818){var vec__13819 = p__13818;var k = cljs.core.nth.call(null,vec__13819,(0),null);var tolerance = cljs.core.nth.call(null,vec__13819,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__13819,(2),null);return clustermap.components.map.fetch_create_path.call(null,comm,leaflet_map,k,tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan){
return (function (k){var vec__13820 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__13820,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__13820,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan))
,create_path_keys)));var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan,created_paths){
return (function (p__13821){var vec__13822 = p__13821;var k = cljs.core.nth.call(null,vec__13822,(0),null);var tolerance = cljs.core.nth.call(null,vec__13822,(1),null);var js_boundaryline = cljs.core.nth.call(null,vec__13822,(2),null);return clustermap.components.map.update_path.call(null,comm,leaflet_map,cljs.core.get.call(null,paths,k),tolerance,js_boundaryline,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan,created_paths))
,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan,created_paths){
return (function (k){var vec__13823 = cljs.core.get.call(null,tolerance_paths,k);var tolerance = cljs.core.nth.call(null,vec__13823,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__13823,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan,created_paths))
,update_path_keys)));var _ = (function (){var seq__13824 = cljs.core.seq.call(null,delete_path_keys);var chunk__13825 = null;var count__13826 = (0);var i__13827 = (0);while(true){
if((i__13827 < count__13826))
{var k = cljs.core._nth.call(null,chunk__13825,i__13827);var temp__4124__auto___13830 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___13830))
{var path_13831 = temp__4124__auto___13830;clustermap.components.map.delete_path.call(null,leaflet_map,path_13831);
} else
{}
{
var G__13832 = seq__13824;
var G__13833 = chunk__13825;
var G__13834 = count__13826;
var G__13835 = (i__13827 + (1));
seq__13824 = G__13832;
chunk__13825 = G__13833;
count__13826 = G__13834;
i__13827 = G__13835;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13824);if(temp__4126__auto__)
{var seq__13824__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13824__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13824__$1);{
var G__13836 = cljs.core.chunk_rest.call(null,seq__13824__$1);
var G__13837 = c__4299__auto__;
var G__13838 = cljs.core.count.call(null,c__4299__auto__);
var G__13839 = (0);
seq__13824 = G__13836;
chunk__13825 = G__13837;
count__13826 = G__13838;
i__13827 = G__13839;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__13824__$1);var temp__4124__auto___13840 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___13840))
{var path_13841 = temp__4124__auto___13840;clustermap.components.map.delete_path.call(null,leaflet_map,path_13841);
} else
{}
{
var G__13842 = cljs.core.next.call(null,seq__13824__$1);
var G__13843 = null;
var G__13844 = (0);
var G__13845 = (0);
seq__13824 = G__13842;
chunk__13825 = G__13843;
count__13826 = G__13844;
i__13827 = G__13845;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan,created_paths,updated_paths,_){
return (function (m,p__13828){var map__13829 = p__13828;var map__13829__$1 = ((cljs.core.seq_QMARK_.call(null,map__13829))?cljs.core.apply.call(null,cljs.core.hash_map,map__13829):map__13829);var path = map__13829__$1;var id = cljs.core.get.call(null,map__13829__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,vec__13817,tolerance_paths,notifychan,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
return notifychan;
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = new cljs.core.Keyword(null,"compact_name","compact_name",1525822383).cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),bl_name], null)),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13847 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs13847))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-constituency-name"], null),attrs13847)))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13847))+"</span>");
}
})())+"</a>");
});
clustermap.components.map.choose_boundaryline_collection = (function choose_boundaryline_collection(threshold_collections,zoom){return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.filter.call(null,(function (p__13850){var vec__13851 = p__13850;var tz = cljs.core.nth.call(null,vec__13851,(0),null);var collection = cljs.core.nth.call(null,vec__13851,(1),null);return (zoom >= tz);
}),threshold_collections))));
});
clustermap.components.map.fetch_aggregation_data = (function fetch_aggregation_data(set_app_state_fn,index,index_type,blcoll,variable,filter,bounds){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_13877){var state_val_13878 = (state_13877[(1)]);if((state_val_13878 === (2)))
{var inst_13872 = (state_13877[(2)]);var inst_13873 = [new cljs.core.Keyword(null,"multiview","multiview",194694555),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377)];var inst_13874 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13873,null));var inst_13875 = set_app_state_fn.call(null,inst_13874,inst_13872);var state_13877__$1 = state_13877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13877__$1,inst_13875);
} else
{if((state_val_13878 === (1)))
{var inst_13869 = clustermap.components.map.bounds_array.call(null,bounds);var inst_13870 = clustermap.api.boundaryline_aggregation.call(null,index,index_type,blcoll,variable,filter,inst_13869);var state_13877__$1 = state_13877;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13877__$1,(2),inst_13870);
} else
{return null;
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_13882 = [null,null,null,null,null,null,null];(statearr_13882[(0)] = state_machine__5679__auto__);
(statearr_13882[(1)] = (1));
return statearr_13882;
});
var state_machine__5679__auto____1 = (function (state_13877){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_13877);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e13883){if((e13883 instanceof Object))
{var ex__5682__auto__ = e13883;var statearr_13884_13886 = state_13877;(statearr_13884_13886[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13887 = state_13877;
state_13877 = G__13887;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_13877){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_13877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_13885 = f__5694__auto__.call(null);(statearr_13885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_13885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__13888,owner){var map__13926 = p__13888;var map__13926__$1 = ((cljs.core.seq_QMARK_.call(null,map__13926))?cljs.core.apply.call(null,cljs.core.hash_map,map__13926):map__13926);var cursor = map__13926__$1;var map__13927 = cljs.core.get.call(null,map__13926__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13927__$1 = ((cljs.core.seq_QMARK_.call(null,map__13927))?cljs.core.apply.call(null,cljs.core.hash_map,map__13927):map__13927);var initial_bounds = cljs.core.get.call(null,map__13927__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));if(typeof clustermap.components.map.t13928 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t13928 = (function (initial_bounds,map__13927,cursor,map__13926,owner,p__13888,map_component,meta13929){
this.initial_bounds = initial_bounds;
this.map__13927 = map__13927;
this.cursor = cursor;
this.map__13926 = map__13926;
this.owner = owner;
this.p__13888 = p__13888;
this.map_component = map_component;
this.meta13929 = meta13929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t13928.cljs$lang$type = true;
clustermap.components.map.t13928.cljs$lang$ctorStr = "clustermap.components.map/t13928";
clustermap.components.map.t13928.cljs$lang$ctorPrWriter = ((function (map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map/t13928");
});})(map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;
clustermap.components.map.t13928.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t13928.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (this$,p__13931,p__13932){var self__ = this;
var map__13933 = p__13931;var map__13933__$1 = ((cljs.core.seq_QMARK_.call(null,map__13933))?cljs.core.apply.call(null,cljs.core.hash_map,map__13933):map__13933);var next_filter = cljs.core.get.call(null,map__13933__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_data = cljs.core.get.call(null,map__13933__$1,new cljs.core.Keyword(null,"data","data",-232669377));var next_boundaryline_collections = cljs.core.get.call(null,map__13933__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__13934 = cljs.core.get.call(null,map__13933__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13934__$1 = ((cljs.core.seq_QMARK_.call(null,map__13934))?cljs.core.apply.call(null,cljs.core.hash_map,map__13934):map__13934);var next_zoom = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_bounds = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var next_boundaryline_collection = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var next_colorchooser_control = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729));var next_boundaryline_agg = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var next_threshold_colors = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var map__13935 = p__13932;var map__13935__$1 = ((cljs.core.seq_QMARK_.call(null,map__13935))?cljs.core.apply.call(null,cljs.core.hash_map,map__13935):map__13935);var map__13936 = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__13936__$1 = ((cljs.core.seq_QMARK_.call(null,map__13936))?cljs.core.apply.call(null,cljs.core.hash_map,map__13936):map__13936);var next_paths = cljs.core.get.call(null,map__13936__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var next_path_selections = cljs.core.get.call(null,map__13936__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var next_path_highlights = cljs.core.get.call(null,map__13935__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var this$__$1 = this;var map__13937 = om.core.get_props.call(null,self__.owner);var map__13937__$1 = ((cljs.core.seq_QMARK_.call(null,map__13937))?cljs.core.apply.call(null,cljs.core.hash_map,map__13937):map__13937);var filter = cljs.core.get.call(null,map__13937__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var data = cljs.core.get.call(null,map__13937__$1,new cljs.core.Keyword(null,"data","data",-232669377));var boundaryline_collections = cljs.core.get.call(null,map__13937__$1,new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980));var map__13938 = cljs.core.get.call(null,map__13937__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13938__$1 = ((cljs.core.seq_QMARK_.call(null,map__13938))?cljs.core.apply.call(null,cljs.core.hash_map,map__13938):map__13938);var threshold_colors = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983));var boundaryline_agg = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775));var colorchooser_control = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"colorchooser-control","colorchooser-control",1037196256));var boundaryline_collection = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936));var zoom = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var bounds = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds__$2 = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var map__13939 = om.core.get_shared.call(null,self__.owner);var map__13939__$1 = ((cljs.core.seq_QMARK_.call(null,map__13939))?cljs.core.apply.call(null,cljs.core.hash_map,map__13939):map__13939);var set_app_state_fn = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"set-app-state-fn","set-app-state-fn",-1158769652));var point_in_boundarylines_fn = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var link_fn = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var path_fn = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13939__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__13940 = om.core.get_state.call(null,self__.owner);var map__13940__$1 = ((cljs.core.seq_QMARK_.call(null,map__13940))?cljs.core.apply.call(null,cljs.core.hash_map,map__13940):map__13940);var map__13941 = cljs.core.get.call(null,map__13940__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__13941__$1 = ((cljs.core.seq_QMARK_.call(null,map__13941))?cljs.core.apply.call(null,cljs.core.hash_map,map__13941):map__13941);var path_selections = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__13940__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__13940__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
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
{return (cljs.core.not_EQ_.call(null,next_boundaryline_collection,boundaryline_collection)) || (cljs.core.not_EQ_.call(null,next_filter,filter));
}
} else
{return and__3531__auto__;
}
})()))
{clustermap.components.map.fetch_aggregation_data.call(null,set_app_state_fn,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),new cljs.core.Keyword(null,"index-type","index-type",500383962).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),next_boundaryline_collection,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_boundaryline_agg),om.core._value.call(null,next_filter),leaflet_map.getBounds());
} else
{}
if(cljs.core.not_EQ_.call(null,next_data,data))
{var vec__13942 = clustermap.data.colorchooser.choose.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(next_colorchooser_control),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(next_colorchooser_control)),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(next_colorchooser_control)),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));var new_threshold_colors = cljs.core.nth.call(null,vec__13942,(0),null);var selection_path_colours = cljs.core.nth.call(null,vec__13942,(1),null);var update_paths_invocation = ((function (vec__13942,new_threshold_colors,selection_path_colours,map__13937,map__13937__$1,filter,data,boundaryline_collections,map__13938,map__13938__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13939,map__13939__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13940,map__13940__$1,map__13941,map__13941__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13933,map__13933__$1,next_filter,next_data,next_boundaryline_collections,map__13934,map__13934__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__13935,map__13935__$1,map__13936,map__13936__$1,next_paths,next_path_selections,next_path_highlights,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (){return clustermap.components.map.update_paths.call(null,comm,cljs.core.partial.call(null,fetch_boundarylines_fn,next_boundaryline_collection),leaflet_map,next_paths,next_path_selections,next_path_highlights,selection_path_colours);
});})(vec__13942,new_threshold_colors,selection_path_colours,map__13937,map__13937__$1,filter,data,boundaryline_collections,map__13938,map__13938__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13939,map__13939__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13940,map__13940__$1,map__13941,map__13941__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13933,map__13933__$1,next_filter,next_data,next_boundaryline_collections,map__13934,map__13934__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__13935,map__13935__$1,map__13936,map__13936__$1,next_paths,next_path_selections,next_path_highlights,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;if(cljs.core.not_EQ_.call(null,new_threshold_colors,next_threshold_colors))
{om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"threshold-colors","threshold-colors",615635983)], null),new_threshold_colors);
} else
{}
var temp__4126__auto__ = update_paths_invocation.call(null);if(cljs.core.truth_(temp__4126__auto__))
{var notify_chan = temp__4126__auto__;var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__13942,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13937,map__13937__$1,filter,data,boundaryline_collections,map__13938,map__13938__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13939,map__13939__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13940,map__13940__$1,map__13941,map__13941__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13933,map__13933__$1,next_filter,next_data,next_boundaryline_collections,map__13934,map__13934__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__13935,map__13935__$1,map__13936,map__13936__$1,next_paths,next_path_selections,next_path_highlights,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,notify_chan,temp__4126__auto__,vec__13942,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13937,map__13937__$1,filter,data,boundaryline_collections,map__13938,map__13938__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13939,map__13939__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13940,map__13940__$1,map__13941,map__13941__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13933,map__13933__$1,next_filter,next_data,next_boundaryline_collections,map__13934,map__13934__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__13935,map__13935__$1,map__13936,map__13936__$1,next_paths,next_path_selections,next_path_highlights,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (state_13947){var state_val_13948 = (state_13947[(1)]);if((state_val_13948 === (2)))
{var inst_13944 = (state_13947[(2)]);var inst_13945 = update_paths_invocation.call(null);var state_13947__$1 = (function (){var statearr_13949 = state_13947;(statearr_13949[(7)] = inst_13944);
return statearr_13949;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13947__$1,inst_13945);
} else
{if((state_val_13948 === (1)))
{var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13947__$1,(2),notify_chan);
} else
{return null;
}
}
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__13942,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13937,map__13937__$1,filter,data,boundaryline_collections,map__13938,map__13938__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13939,map__13939__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13940,map__13940__$1,map__13941,map__13941__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13933,map__13933__$1,next_filter,next_data,next_boundaryline_collections,map__13934,map__13934__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__13935,map__13935__$1,map__13936,map__13936__$1,next_paths,next_path_selections,next_path_highlights,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;return ((function (switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__13942,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13937,map__13937__$1,filter,data,boundaryline_collections,map__13938,map__13938__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13939,map__13939__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13940,map__13940__$1,map__13941,map__13941__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13933,map__13933__$1,next_filter,next_data,next_boundaryline_collections,map__13934,map__13934__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__13935,map__13935__$1,map__13936,map__13936__$1,next_paths,next_path_selections,next_path_highlights,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_13953 = [null,null,null,null,null,null,null,null];(statearr_13953[(0)] = state_machine__5679__auto__);
(statearr_13953[(1)] = (1));
return statearr_13953;
});
var state_machine__5679__auto____1 = (function (state_13947){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_13947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e13954){if((e13954 instanceof Object))
{var ex__5682__auto__ = e13954;var statearr_13955_13963 = state_13947;(statearr_13955_13963[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13964 = state_13947;
state_13947 = G__13964;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_13947){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_13947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,notify_chan,temp__4126__auto__,vec__13942,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13937,map__13937__$1,filter,data,boundaryline_collections,map__13938,map__13938__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13939,map__13939__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13940,map__13940__$1,map__13941,map__13941__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13933,map__13933__$1,next_filter,next_data,next_boundaryline_collections,map__13934,map__13934__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__13935,map__13935__$1,map__13936,map__13936__$1,next_paths,next_path_selections,next_path_highlights,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
})();var state__5695__auto__ = (function (){var statearr_13956 = f__5694__auto__.call(null);(statearr_13956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_13956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,notify_chan,temp__4126__auto__,vec__13942,new_threshold_colors,selection_path_colours,update_paths_invocation,map__13937,map__13937__$1,filter,data,boundaryline_collections,map__13938,map__13938__$1,threshold_colors,boundaryline_agg,colorchooser_control,boundaryline_collection,zoom,bounds,initial_bounds__$2,map__13939,map__13939__$1,set_app_state_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,link_fn,path_fn,comm,map__13940,map__13940__$1,map__13941,map__13941__$1,path_selections,paths,markers,leaflet_map,pan_pending,path_highlights,this$__$1,map__13933,map__13933__$1,next_filter,next_data,next_boundaryline_collections,map__13934,map__13934__$1,next_zoom,next_bounds,next_boundaryline_collection,next_colorchooser_control,next_boundaryline_agg,next_threshold_colors,map__13935,map__13935__$1,map__13936,map__13936__$1,next_paths,next_path_selections,next_path_highlights,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
);
return c__5693__auto__;
} else
{return null;
}
} else
{return null;
}
});})(map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;
clustermap.components.map.t13928.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t13928.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__13957 = clustermap.components.map.create_map.call(null,node,self__.initial_bounds);var map__13957__$1 = ((cljs.core.seq_QMARK_.call(null,map__13957))?cljs.core.apply.call(null,cljs.core.hash_map,map__13957):map__13957);var map = map__13957__$1;var path = cljs.core.get.call(null,map__13957__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__13957__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__13957__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__13958 = om.core.get_shared.call(null,self__.owner);var map__13958__$1 = ((cljs.core.seq_QMARK_.call(null,map__13958))?cljs.core.apply.call(null,cljs.core.hash_map,map__13958):map__13958);var path_fn = cljs.core.get.call(null,map__13958__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__13958__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var point_in_boundarylines_fn = cljs.core.get.call(null,map__13958__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundarylines_fn = cljs.core.get.call(null,map__13958__$1,new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393));var comm = cljs.core.get.call(null,map__13958__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",((function (node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (e){om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
);
leaflet_map.on("moveend",((function (node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (e){om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
);
});})(node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = point_in_boundarylines_fn.call(null,lng,lat);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134))));
} else
{return and__3531__auto__;
}
})()))
{var G__13959_13965 = L.popup();G__13959_13965.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__13959_13965.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__13959_13965.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),highlight_path_ids);
});})(node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (e){var hits = point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat);var boundaryline_id = (function (){var G__13960 = hits;var G__13960__$1 = (((G__13960 == null))?null:cljs.core.first.call(null,G__13960));var G__13960__$2 = (((G__13960__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__13960__$1));return G__13960__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__13957,map__13957__$1,map,path,markers,leaflet_map,map__13958,map__13958__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundarylines_fn,comm,this$__$1,map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
);
});})(map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;
clustermap.components.map.t13928.prototype.om$core$IRender$ = true;
clustermap.components.map.t13928.prototype.om$core$IRender$render$arity$1 = ((function (map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;
clustermap.components.map.t13928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (_13930){var self__ = this;
var _13930__$1 = this;return self__.meta13929;
});})(map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;
clustermap.components.map.t13928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function (_13930,meta13929__$1){var self__ = this;
var _13930__$1 = this;return (new clustermap.components.map.t13928(self__.initial_bounds,self__.map__13927,self__.cursor,self__.map__13926,self__.owner,self__.p__13888,self__.map_component,meta13929__$1));
});})(map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;
clustermap.components.map.__GT_t13928 = ((function (map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds){
return (function __GT_t13928(initial_bounds__$1,map__13927__$2,cursor__$1,map__13926__$2,owner__$1,p__13888__$1,map_component__$1,meta13929){return (new clustermap.components.map.t13928(initial_bounds__$1,map__13927__$2,cursor__$1,map__13926__$2,owner__$1,p__13888__$1,map_component__$1,meta13929));
});})(map__13926,map__13926__$1,cursor,map__13927,map__13927__$1,initial_bounds))
;
}
return (new clustermap.components.map.t13928(initial_bounds,map__13927__$1,cursor,map__13926__$1,owner,p__13888,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
