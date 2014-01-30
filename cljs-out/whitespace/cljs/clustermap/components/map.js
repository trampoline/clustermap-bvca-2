// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
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
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__31533 = config;var G__31533__$1 = (((G__31533 == null))?null:G__31533.components);var G__31533__$2 = (((G__31533__$1 == null))?null:G__31533__$1.map);var G__31533__$3 = (((G__31533__$2 == null))?null:G__31533__$2.api_key);return G__31533__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m,new cljs.core.Keyword(null,"markers","markers",1853155051),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__31534){
var m = cljs.core.first(arglist__31534);
var all_bounds = cljs.core.rest(arglist__31534);
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
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,(function (site){return [cljs.core.str((function (){var attrs31536 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_.call(null,attrs31536))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs31536))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs31536)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__31539 = location_sites;var G__31539__$1 = (((G__31539 == null))?null:cljs.core.first.call(null,G__31539));var G__31539__$2 = (((G__31539__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__31539__$1));var G__31539__$3 = (((G__31539__$2 == null))?null:cljs.core.reverse.call(null,G__31539__$2));var G__31539__$4 = (((G__31539__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31539__$3));return G__31539__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content.call(null,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31540_31541 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31540_31541;
}return [cljs.core.str(sb__4298__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,leaflet_map,cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__31546 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31547 = null;var count__31548 = 0;var i__31549 = 0;while(true){
if((i__31549 < count__31548))
{var k = cljs.core._nth.call(null,chunk__31547,i__31549);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__31550 = seq__31546;
var G__31551 = chunk__31547;
var G__31552 = count__31548;
var G__31553 = (i__31549 + 1);
seq__31546 = G__31550;
chunk__31547 = G__31551;
count__31548 = G__31552;
i__31549 = G__31553;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31546);if(temp__4092__auto__)
{var seq__31546__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31546__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31546__$1);{
var G__31554 = cljs.core.chunk_rest.call(null,seq__31546__$1);
var G__31555 = c__4148__auto__;
var G__31556 = cljs.core.count.call(null,c__4148__auto__);
var G__31557 = 0;
seq__31546 = G__31554;
chunk__31547 = G__31555;
count__31548 = G__31556;
i__31549 = G__31557;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31546__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__31558 = cljs.core.next.call(null,seq__31546__$1);
var G__31559 = null;
var G__31560 = 0;
var G__31561 = 0;
seq__31546 = G__31558;
chunk__31547 = G__31559;
count__31548 = G__31560;
i__31549 = G__31561;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__31570 = cljs.core.js__GT_clj.call(null,envelope);var map__31570__$1 = ((cljs.core.seq_QMARK_.call(null,map__31570))?cljs.core.apply.call(null,cljs.core.hash_map,map__31570):map__31570);var clj_envelope = map__31570__$1;var vec__31571 = cljs.core.get.call(null,map__31570__$1,"coordinates");var vec__31572 = cljs.core.nth.call(null,vec__31571,0,null);var vec__31573 = cljs.core.nth.call(null,vec__31572,0,null);var miny0 = cljs.core.nth.call(null,vec__31573,0,null);var minx0 = cljs.core.nth.call(null,vec__31573,1,null);var vec__31574 = cljs.core.nth.call(null,vec__31572,1,null);var maxy1 = cljs.core.nth.call(null,vec__31574,0,null);var minx1 = cljs.core.nth.call(null,vec__31574,1,null);var vec__31575 = cljs.core.nth.call(null,vec__31572,2,null);var maxy2 = cljs.core.nth.call(null,vec__31575,0,null);var maxx2 = cljs.core.nth.call(null,vec__31575,1,null);var vec__31576 = cljs.core.nth.call(null,vec__31572,3,null);var miny3 = cljs.core.nth.call(null,vec__31576,0,null);var maxx3 = cljs.core.nth.call(null,vec__31576,1,null);var vec__31577 = cljs.core.nth.call(null,vec__31572,4,null);var miny4 = cljs.core.nth.call(null,vec__31577,0,null);var minx4 = cljs.core.nth.call(null,vec__31577,1,null);var inner = vec__31572;var coords = vec__31571;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.create_path = (function create_path(leaflet_map,uk_constituencies,boundaryline_id){var temp__4090__auto__ = (uk_constituencies[boundaryline_id]);if(cljs.core.truth_(temp__4090__auto__))
{var cons = temp__4090__auto__;var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
clustermap.components.map.update_path = (function update_path(leaflet_map,uk_constituencies,path,boundaryline_id){return path;
});
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__31579 = path;var G__31579__$1 = (((G__31579 == null))?null:new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__31579));var G__31579__$2 = (((G__31579__$1 == null))?null:leaflet_map.removeLayer(G__31579__$1));return G__31579__$2;
});
clustermap.components.map.update_paths = (function update_paths(leaflet_map,uk_constituencies,paths_atom,new_locations){if(cljs.core.truth_(uk_constituencies))
{var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var location_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_locations)))));var update_path_keys = clojure.set.intersection.call(null,path_keys,location_path_keys);var new_path_keys = clojure.set.difference.call(null,location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.call(null,path_keys,location_path_keys);var new_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__31586){var vec__31587 = p__31586;var k = cljs.core.nth.call(null,vec__31587,0,null);var v = cljs.core.nth.call(null,vec__31587,1,null);return cljs.core.identity.call(null,v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path.call(null,leaflet_map,uk_constituencies,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path.call(null,leaflet_map,uk_constituencies,cljs.core.get.call(null,paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__31588 = cljs.core.seq.call(null,remove_path_keys);var chunk__31589 = null;var count__31590 = 0;var i__31591 = 0;while(true){
if((i__31591 < count__31590))
{var k = cljs.core._nth.call(null,chunk__31589,i__31591);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__31592 = seq__31588;
var G__31593 = chunk__31589;
var G__31594 = count__31590;
var G__31595 = (i__31591 + 1);
seq__31588 = G__31592;
chunk__31589 = G__31593;
count__31590 = G__31594;
i__31591 = G__31595;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31588);if(temp__4092__auto__)
{var seq__31588__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31588__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31588__$1);{
var G__31596 = cljs.core.chunk_rest.call(null,seq__31588__$1);
var G__31597 = c__4148__auto__;
var G__31598 = cljs.core.count.call(null,c__4148__auto__);
var G__31599 = 0;
seq__31588 = G__31596;
chunk__31589 = G__31597;
count__31590 = G__31598;
i__31591 = G__31599;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31588__$1);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__31600 = cljs.core.next.call(null,seq__31588__$1);
var G__31601 = null;
var G__31602 = 0;
var G__31603 = 0;
seq__31588 = G__31600;
chunk__31589 = G__31601;
count__31590 = G__31602;
i__31591 = G__31603;
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
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__31605 = paths;var G__31605__$1 = (((G__31605 == null))?null:cljs.core.vals.call(null,G__31605));var G__31605__$2 = (((G__31605__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__31605__$1));return G__31605__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__31606,owner){var map__31617 = p__31606;var map__31617__$1 = ((cljs.core.seq_QMARK_.call(null,map__31617))?cljs.core.apply.call(null,cljs.core.hash_map,map__31617):map__31617);var uk_constituencies = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var selection = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t31618 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t31618 = (function (selection,uk_constituencies,map__31617,owner,p__31606,map_component,meta31619){
this.selection = selection;
this.uk_constituencies = uk_constituencies;
this.map__31617 = map__31617;
this.owner = owner;
this.p__31606 = p__31606;
this.map_component = map_component;
this.meta31619 = meta31619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t31618.cljs$lang$type = true;
clustermap.components.map.t31618.cljs$lang$ctorStr = "clustermap.components.map/t31618";
clustermap.components.map.t31618.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t31618");
});
clustermap.components.map.t31618.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t31618.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;var map__31621 = om.core.get_state.call(null,self__.owner);var map__31621__$1 = ((cljs.core.seq_QMARK_.call(null,map__31621))?cljs.core.apply.call(null,cljs.core.hash_map,map__31621):map__31621);var map__31622 = cljs.core.get.call(null,map__31621__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__31622__$1 = ((cljs.core.seq_QMARK_.call(null,map__31622))?cljs.core.apply.call(null,cljs.core.hash_map,map__31622):map__31622);var paths = cljs.core.get.call(null,map__31622__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__31622__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__31622__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var locations = cljs.core.get.call(null,map__31621__$1,new cljs.core.Keyword(null,"locations","locations",4111682256));var uk_constituencies__$2 = cljs.core.get.call(null,map__31621__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var new_locations = (function (){var G__31623 = next_props;var G__31623__$1 = (((G__31623 == null))?null:new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162).cljs$core$IFn$_invoke$arity$1(G__31623));var G__31623__$2 = (((G__31623__$1 == null))?null:cljs.core.deref.call(null,G__31623__$1));return G__31623__$2;
})();var new_uk_constituencies = (function (){var G__31624 = next_props;var G__31624__$1 = (((G__31624 == null))?null:new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365).cljs$core$IFn$_invoke$arity$1(G__31624));return G__31624__$1;
})();if((cljs.core.not_EQ_.call(null,locations,new_locations)) || (cljs.core.not_EQ_.call(null,uk_constituencies__$2,new_uk_constituencies)))
{clustermap.components.map.update_markers.call(null,leaflet_map,markers,new_locations);
clustermap.components.map.update_paths.call(null,leaflet_map,new_uk_constituencies,paths,new_locations);
if(cljs.core.not_EQ_.call(null,locations,new_locations))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"locations","locations",4111682256),new_locations);
} else
{}
if(cljs.core.not_EQ_.call(null,uk_constituencies__$2,new_uk_constituencies))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new_uk_constituencies);
} else
{}
return clustermap.components.map.pan_to_selection.call(null,leaflet_map,cljs.core.deref.call(null,paths));
} else
{return null;
}
});
clustermap.components.map.t31618.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t31618.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.components.map.create_map.call(null,node));
});
clustermap.components.map.t31618.prototype.om$core$IRender$ = true;
clustermap.components.map.t31618.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t31618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31620){var self__ = this;
var _31620__$1 = this;return self__.meta31619;
});
clustermap.components.map.t31618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31620,meta31619__$1){var self__ = this;
var _31620__$1 = this;return (new clustermap.components.map.t31618(self__.selection,self__.uk_constituencies,self__.map__31617,self__.owner,self__.p__31606,self__.map_component,meta31619__$1));
});
clustermap.components.map.__GT_t31618 = (function __GT_t31618(selection__$1,uk_constituencies__$1,map__31617__$2,owner__$1,p__31606__$1,map_component__$1,meta31619){return (new clustermap.components.map.t31618(selection__$1,uk_constituencies__$1,map__31617__$2,owner__$1,p__31606__$1,map_component__$1,meta31619));
});
}
return (new clustermap.components.map.t31618(selection,uk_constituencies,map__31617__$1,owner,p__31606,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
