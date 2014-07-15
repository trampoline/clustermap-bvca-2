// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('clustermap.boundarylines');
goog.require('jayq.core');
goog.require('clustermap.data.colorchooser');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
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
clustermap.components.map.api_key = (function (){var or__3543__auto__ = (function (){var G__12638 = config;var G__12638__$1 = (((G__12638 == null))?null:G__12638.components);var G__12638__$2 = (((G__12638__$1 == null))?null:G__12638__$1.map);var G__12638__$3 = (((G__12638__$2 == null))?null:G__12638__$2.api_key);return G__12638__$3;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__12639){
var m = cljs.core.first(arglist__12639);
var all_bounds = cljs.core.rest(arglist__12639);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs12641 = cljs.core.map.call(null,(function (site){return ("<li><a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),site),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(site)))+"</a></li>");
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs12641))
{return ("<ul"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-popup-location-list"], null),attrs12641)))+"></ul>");
} else
{return ("<ul class=\"map-marker-popup-location-list\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs12641))+"</ul>");
}
})()));
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4124__auto__ = (function (){var G__12644 = location_sites;var G__12644__$1 = (((G__12644 == null))?null:cljs.core.first.call(null,G__12644));var G__12644__$2 = (((G__12644__$1 == null))?null:new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__12644__$1));var G__12644__$3 = (((G__12644__$2 == null))?null:cljs.core.reverse.call(null,G__12644__$2));var G__12644__$4 = (((G__12644__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__12644__$3));return G__12644__$4;
})();if(cljs.core.truth_(temp__4124__auto__))
{var latlong = temp__4124__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",253109071),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(28)], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",970343173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14)], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",931949236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-8)], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log(("missing location: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4470__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_12645_12646 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12645_12646,sb__4470__auto__,temp__4124__auto__){
return (function (x__4471__auto__){return sb__4470__auto__.append(x__4471__auto__);
});})(_STAR_print_fn_STAR_12645_12646,sb__4470__auto__,temp__4124__auto__))
;
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12645_12646;
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
,update_marker_keys));var _ = (function (){var seq__12651 = cljs.core.seq.call(null,remove_marker_keys);var chunk__12652 = null;var count__12653 = (0);var i__12654 = (0);while(true){
if((i__12654 < count__12653))
{var k = cljs.core._nth.call(null,chunk__12652,i__12654);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__12655 = seq__12651;
var G__12656 = chunk__12652;
var G__12657 = count__12653;
var G__12658 = (i__12654 + (1));
seq__12651 = G__12655;
chunk__12652 = G__12656;
count__12653 = G__12657;
i__12654 = G__12658;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12651);if(temp__4126__auto__)
{var seq__12651__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12651__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12651__$1);{
var G__12659 = cljs.core.chunk_rest.call(null,seq__12651__$1);
var G__12660 = c__4299__auto__;
var G__12661 = cljs.core.count.call(null,c__4299__auto__);
var G__12662 = (0);
seq__12651 = G__12659;
chunk__12652 = G__12660;
count__12653 = G__12661;
i__12654 = G__12662;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__12651__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__12663 = cljs.core.next.call(null,seq__12651__$1);
var G__12664 = null;
var G__12665 = (0);
var G__12666 = (0);
seq__12651 = G__12663;
chunk__12652 = G__12664;
count__12653 = G__12665;
i__12654 = G__12666;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__12675 = cljs.core.js__GT_clj.call(null,envelope);var map__12675__$1 = ((cljs.core.seq_QMARK_.call(null,map__12675))?cljs.core.apply.call(null,cljs.core.hash_map,map__12675):map__12675);var clj_envelope = map__12675__$1;var vec__12676 = cljs.core.get.call(null,map__12675__$1,"coordinates");var vec__12677 = cljs.core.nth.call(null,vec__12676,(0),null);var vec__12678 = cljs.core.nth.call(null,vec__12677,(0),null);var miny0 = cljs.core.nth.call(null,vec__12678,(0),null);var minx0 = cljs.core.nth.call(null,vec__12678,(1),null);var vec__12679 = cljs.core.nth.call(null,vec__12677,(1),null);var maxy1 = cljs.core.nth.call(null,vec__12679,(0),null);var minx1 = cljs.core.nth.call(null,vec__12679,(1),null);var vec__12680 = cljs.core.nth.call(null,vec__12677,(2),null);var maxy2 = cljs.core.nth.call(null,vec__12680,(0),null);var maxx2 = cljs.core.nth.call(null,vec__12680,(1),null);var vec__12681 = cljs.core.nth.call(null,vec__12677,(3),null);var miny3 = cljs.core.nth.call(null,vec__12681,(0),null);var maxx3 = cljs.core.nth.call(null,vec__12681,(1),null);var vec__12682 = cljs.core.nth.call(null,vec__12677,(4),null);var miny4 = cljs.core.nth.call(null,vec__12682,(0),null);var minx4 = cljs.core.nth.call(null,vec__12682,(1),null);var inner = vec__12677;var coords = vec__12676;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__12683){var map__12685 = p__12683;var map__12685__$1 = ((cljs.core.seq_QMARK_.call(null,map__12685))?cljs.core.apply.call(null,cljs.core.hash_map,map__12685):map__12685);var fill_color = cljs.core.get.call(null,map__12685__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));var highlighted = cljs.core.get.call(null,map__12685__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var selected = cljs.core.get.call(null,map__12685__$1,new cljs.core.Keyword(null,"selected","selected",574897764));if(cljs.core.truth_((function (){var and__3531__auto__ = selected;if(cljs.core.truth_(and__3531__auto__))
{return highlighted;
} else
{return and__3531__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.6], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.6], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"fill","fill",883462889),false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),fill_color,new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"fill","fill",883462889),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),(0)], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__12686){var map__12688 = p__12686;var map__12688__$1 = ((cljs.core.seq_QMARK_.call(null,map__12688))?cljs.core.apply.call(null,cljs.core.hash_map,map__12688):map__12688);var path_attrs = map__12688__$1;var selected = cljs.core.get.call(null,map__12688__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",((function (tolerance,bounds,leaflet_path,map__12688,map__12688__$1,path_attrs,selected){
return (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
});})(tolerance,bounds,leaflet_path,map__12688,map__12688__$1,path_attrs,selected))
);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",-201564390),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,leaflet_map,boundaryline_id,path_attrs){var temp__4124__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,leaflet_map.getZoom(),new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318),(7));if(cljs.core.truth_(temp__4124__auto__))
{var vec__12690 = temp__4124__auto__;var tolerance = cljs.core.nth.call(null,vec__12690,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__12690,(1),null);return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
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
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,leaflet_map,p__12691,path_attrs){var map__12694 = p__12691;var map__12694__$1 = ((cljs.core.seq_QMARK_.call(null,map__12694))?cljs.core.apply.call(null,cljs.core.hash_map,map__12694):map__12694);var path = map__12694__$1;var boundaryline_id = cljs.core.get.call(null,map__12694__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var temp__4124__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,leaflet_map.getZoom(),new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318),(7));if(cljs.core.truth_(temp__4124__auto__))
{var vec__12695 = temp__4124__auto__;var tolerance = cljs.core.nth.call(null,vec__12695,(0),null);var js_boundaryline = cljs.core.nth.call(null,vec__12695,(1),null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",406811818).cljs$core$IFn$_invoke$arity$1(path)))
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
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_paths){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_selection_paths));var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-selection-path-keys",new_selection_path_keys], null)));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,_,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path.call(null,comm,fetch_boundaryline_fn,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,_,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,_,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path.call(null,comm,fetch_boundaryline_fn,leaflet_map,cljs.core.get.call(null,paths,k),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new_selection_paths.call(null,k),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,_,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var ___$1 = (function (){var seq__12702 = cljs.core.seq.call(null,delete_path_keys);var chunk__12703 = null;var count__12704 = (0);var i__12705 = (0);while(true){
if((i__12705 < count__12704))
{var k = cljs.core._nth.call(null,chunk__12703,i__12705);var temp__4124__auto___12708 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___12708))
{var path_12709 = temp__4124__auto___12708;clustermap.components.map.delete_path.call(null,leaflet_map,path_12709);
} else
{}
{
var G__12710 = seq__12702;
var G__12711 = chunk__12703;
var G__12712 = count__12704;
var G__12713 = (i__12705 + (1));
seq__12702 = G__12710;
chunk__12703 = G__12711;
count__12704 = G__12712;
i__12705 = G__12713;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12702);if(temp__4126__auto__)
{var seq__12702__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12702__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12702__$1);{
var G__12714 = cljs.core.chunk_rest.call(null,seq__12702__$1);
var G__12715 = c__4299__auto__;
var G__12716 = cljs.core.count.call(null,c__4299__auto__);
var G__12717 = (0);
seq__12702 = G__12714;
chunk__12703 = G__12715;
count__12704 = G__12716;
i__12705 = G__12717;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__12702__$1);var temp__4124__auto___12718 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4124__auto___12718))
{var path_12719 = temp__4124__auto___12718;clustermap.components.map.delete_path.call(null,leaflet_map,path_12719);
} else
{}
{
var G__12720 = cljs.core.next.call(null,seq__12702__$1);
var G__12721 = null;
var G__12722 = (0);
var G__12723 = (0);
seq__12702 = G__12720;
chunk__12703 = G__12721;
count__12704 = G__12722;
i__12705 = G__12723;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,_,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,___$1){
return (function (m,p__12706){var map__12707 = p__12706;var map__12707__$1 = ((cljs.core.seq_QMARK_.call(null,map__12707))?cljs.core.apply.call(null,cljs.core.hash_map,map__12707):map__12707);var path = map__12707__$1;var id = cljs.core.get.call(null,map__12707__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,_,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,___$1))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
});
clustermap.components.map.constituency_marker_popup_content = (function constituency_marker_popup_content(path_fn,constituency){var bl_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(constituency);var bl_name = new cljs.core.Keyword(null,"compact_name","compact_name",1525822383).cljs$core$IFn$_invoke$arity$1(constituency);return ("<a"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),bl_id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),bl_name], null)),new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs12725 = bl_name;if(cljs.core.map_QMARK_.call(null,attrs12725))
{return ("<span"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"map-marker-constituency-name"], null),attrs12725)))+"></span>");
} else
{return ("<span class=\"map-marker-constituency-name\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs12725))+"</span>");
}
})())+"</a>");
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__12726,owner){var map__12748 = p__12726;var map__12748__$1 = ((cljs.core.seq_QMARK_.call(null,map__12748))?cljs.core.apply.call(null,cljs.core.hash_map,map__12748):map__12748);var cursor = map__12748__$1;var map__12749 = cljs.core.get.call(null,map__12748__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__12749__$1 = ((cljs.core.seq_QMARK_.call(null,map__12749))?cljs.core.apply.call(null,cljs.core.hash_map,map__12749):map__12749);var initial_bounds = cljs.core.get.call(null,map__12749__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));if(typeof clustermap.components.map.t12750 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t12750 = (function (initial_bounds,map__12749,cursor,map__12748,owner,p__12726,map_component,meta12751){
this.initial_bounds = initial_bounds;
this.map__12749 = map__12749;
this.cursor = cursor;
this.map__12748 = map__12748;
this.owner = owner;
this.p__12726 = p__12726;
this.map_component = map_component;
this.meta12751 = meta12751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t12750.cljs$lang$type = true;
clustermap.components.map.t12750.cljs$lang$ctorStr = "clustermap.components.map/t12750";
clustermap.components.map.t12750.cljs$lang$ctorPrWriter = ((function (map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map/t12750");
});})(map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
;
clustermap.components.map.t12750.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t12750.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (this$,p__12753,p__12754){var self__ = this;
var map__12755 = p__12753;var map__12755__$1 = ((cljs.core.seq_QMARK_.call(null,map__12755))?cljs.core.apply.call(null,cljs.core.hash_map,map__12755):map__12755);var next_data = cljs.core.get.call(null,map__12755__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__12756 = cljs.core.get.call(null,map__12755__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__12756__$1 = ((cljs.core.seq_QMARK_.call(null,map__12756))?cljs.core.apply.call(null,cljs.core.hash_map,map__12756):map__12756);var next_zoom = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var next_bounds = cljs.core.get.call(null,map__12756__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__12757 = p__12754;var map__12757__$1 = ((cljs.core.seq_QMARK_.call(null,map__12757))?cljs.core.apply.call(null,cljs.core.hash_map,map__12757):map__12757);var next_path_highlights = cljs.core.get.call(null,map__12757__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));var this$__$1 = this;var map__12758 = om.core.get_props.call(null,self__.owner);var map__12758__$1 = ((cljs.core.seq_QMARK_.call(null,map__12758))?cljs.core.apply.call(null,cljs.core.hash_map,map__12758):map__12758);var data = cljs.core.get.call(null,map__12758__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__12759 = cljs.core.get.call(null,map__12758__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__12759__$1 = ((cljs.core.seq_QMARK_.call(null,map__12759))?cljs.core.apply.call(null,cljs.core.hash_map,map__12759):map__12759);var zoom = cljs.core.get.call(null,map__12759__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));var bounds = cljs.core.get.call(null,map__12759__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var initial_bounds__$2 = cljs.core.get.call(null,map__12759__$1,new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542));var map__12760 = om.core.get_shared.call(null,self__.owner);var map__12760__$1 = ((cljs.core.seq_QMARK_.call(null,map__12760))?cljs.core.apply.call(null,cljs.core.hash_map,map__12760):map__12760);var point_in_boundarylines_fn = cljs.core.get.call(null,map__12760__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundaryline_fn = cljs.core.get.call(null,map__12760__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",-1105464009));var link_fn = cljs.core.get.call(null,map__12760__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var path_fn = cljs.core.get.call(null,map__12760__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__12760__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var map__12761 = om.core.get_state.call(null,self__.owner);var map__12761__$1 = ((cljs.core.seq_QMARK_.call(null,map__12761))?cljs.core.apply.call(null,cljs.core.hash_map,map__12761):map__12761);var map__12762 = cljs.core.get.call(null,map__12761__$1,new cljs.core.Keyword(null,"map","map",1371690461));var map__12762__$1 = ((cljs.core.seq_QMARK_.call(null,map__12762))?cljs.core.apply.call(null,cljs.core.hash_map,map__12762):map__12762);var path_selections = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"path-selections","path-selections",-1495179033));var paths = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var markers = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__12762__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var pan_pending = cljs.core.get.call(null,map__12761__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",-1898979779));var path_highlights = cljs.core.get.call(null,map__12761__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3531__auto__ = leaflet_map;if(cljs.core.truth_(and__3531__auto__))
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
if(cljs.core.not_EQ_.call(null,next_data,data))
{console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next-data",next_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["boundaryline-colors"], null)));
} else
{}
var selection_path_colours = clustermap.data.colorchooser.choose.call(null,clustermap.data.colorchooser.brewer_green,new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(next_data));return clustermap.components.map.update_paths.call(null,comm,fetch_boundaryline_fn,leaflet_map,paths,path_selections,next_path_highlights,selection_path_colours);
});})(map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
;
clustermap.components.map.t12750.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t12750.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__12763 = clustermap.components.map.create_map.call(null,node,self__.initial_bounds);var map__12763__$1 = ((cljs.core.seq_QMARK_.call(null,map__12763))?cljs.core.apply.call(null,cljs.core.hash_map,map__12763):map__12763);var map = map__12763__$1;var path = cljs.core.get.call(null,map__12763__$1,new cljs.core.Keyword(null,"path","path",-188191168));var markers = cljs.core.get.call(null,map__12763__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));var leaflet_map = cljs.core.get.call(null,map__12763__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",-132492747));var map__12764 = om.core.get_shared.call(null,self__.owner);var map__12764__$1 = ((cljs.core.seq_QMARK_.call(null,map__12764))?cljs.core.apply.call(null,cljs.core.hash_map,map__12764):map__12764);var path_fn = cljs.core.get.call(null,map__12764__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__12764__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var point_in_boundarylines_fn = cljs.core.get.call(null,map__12764__$1,new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614));var fetch_boundaryline_fn = cljs.core.get.call(null,map__12764__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",-1105464009));var comm = cljs.core.get.call(null,map__12764__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1371690461),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",((function (node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (e){om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
);
leaflet_map.on("moveend",((function (node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (e){om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),leaflet_map.getZoom());
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),clustermap.components.map.bounds_array.call(null,leaflet_map.getBounds()));
});})(node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
);
leaflet_map.on("popupopen",((function (node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (e){var popup_el = e.popup._container;var marker_popup_location_list_cnt = jayq.core.$.call(null,popup_el).find(".map-marker-popup-location-list").length;if((marker_popup_location_list_cnt > (0)))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),true);
} else
{}
return jayq.core.$.call(null,popup_el).on("mousemove",((function (popup_el,marker_popup_location_list_cnt,node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (e__$1){e__$1.preventDefault();
return false;
});})(popup_el,marker_popup_location_list_cnt,node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
);
});})(node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
);
leaflet_map.on("popupclose",((function (node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134),null);
});})(node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
);
leaflet_map.on("mousemove",((function (node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = point_in_boundarylines_fn.call(null,lng,lat);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight_hit);var highlight_path_ids = (cljs.core.truth_(highlight_path_id)?cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlight_path_id], null)):null);var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411));if(cljs.core.truth_((function (){var and__3531__auto__ = highlight_hit;if(cljs.core.truth_(and__3531__auto__))
{return (cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids)) && (cljs.core.not.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"popup-selected","popup-selected",1632807134))));
} else
{return and__3531__auto__;
}
})()))
{var G__12765_12769 = L.popup();G__12765_12769.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__12765_12769.setContent(clustermap.components.map.constituency_marker_popup_content.call(null,path_fn,highlight_hit));
G__12765_12769.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",-1452960411),highlight_path_ids);
});})(node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
);
return leaflet_map.on("click",((function (node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (e){var hits = point_in_boundarylines_fn.call(null,e.latlng.lng,e.latlng.lat);var boundaryline_id = (function (){var G__12766 = hits;var G__12766__$1 = (((G__12766 == null))?null:cljs.core.first.call(null,G__12766));var G__12766__$2 = (((G__12766__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__12766__$1));return G__12766__$2;
})();if(cljs.core.truth_(boundaryline_id))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),boundaryline_id], null)], null));
} else
{return null;
}
});})(node,map__12763,map__12763__$1,map,path,markers,leaflet_map,map__12764,map__12764__$1,path_fn,link_fn,point_in_boundarylines_fn,fetch_boundaryline_fn,comm,this$__$1,map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
);
});})(map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
;
clustermap.components.map.t12750.prototype.om$core$IRender$ = true;
clustermap.components.map.t12750.prototype.om$core$IRender$render$arity$1 = ((function (map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});})(map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
;
clustermap.components.map.t12750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (_12752){var self__ = this;
var _12752__$1 = this;return self__.meta12751;
});})(map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
;
clustermap.components.map.t12750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function (_12752,meta12751__$1){var self__ = this;
var _12752__$1 = this;return (new clustermap.components.map.t12750(self__.initial_bounds,self__.map__12749,self__.cursor,self__.map__12748,self__.owner,self__.p__12726,self__.map_component,meta12751__$1));
});})(map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
;
clustermap.components.map.__GT_t12750 = ((function (map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds){
return (function __GT_t12750(initial_bounds__$1,map__12749__$2,cursor__$1,map__12748__$2,owner__$1,p__12726__$1,map_component__$1,meta12751){return (new clustermap.components.map.t12750(initial_bounds__$1,map__12749__$2,cursor__$1,map__12748__$2,owner__$1,p__12726__$1,map_component__$1,meta12751));
});})(map__12748,map__12748__$1,cursor,map__12749,map__12749__$1,initial_bounds))
;
}
return (new clustermap.components.map.t12750(initial_bounds,map__12749__$1,cursor,map__12748__$1,owner,p__12726,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
