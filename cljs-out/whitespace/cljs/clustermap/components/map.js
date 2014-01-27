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
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,"mccraigmccraig.map-gqkcbi1g",{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
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
var pan_to_show__delegate = function (m,all_bounds){var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,all_bounds));return m.fitBounds(super_bounds);
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__30779){
var m = cljs.core.first(arglist__30779);
var all_bounds = cljs.core.rest(arglist__30779);
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
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,(function (site){return [cljs.core.str((function (){var attrs30781 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_.call(null,attrs30781))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs30781))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs30781)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__30783 = location_sites;var G__30783__$1 = (((G__30783 == null))?null:cljs.core.first.call(null,G__30783));var G__30783__$2 = (((G__30783__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__30783__$1));var G__30783__$3 = (((G__30783__$2 == null))?null:cljs.core.reverse.call(null,G__30783__$2));var G__30783__$4 = (((G__30783__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__30783__$3));return G__30783__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content.call(null,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return null;
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){return marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,location));
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,old_locations,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,leaflet_map,cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__30788 = cljs.core.seq.call(null,remove_marker_keys);var chunk__30789 = null;var count__30790 = 0;var i__30791 = 0;while(true){
if((i__30791 < count__30790))
{var k = cljs.core._nth.call(null,chunk__30789,i__30791);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__30792 = seq__30788;
var G__30793 = chunk__30789;
var G__30794 = count__30790;
var G__30795 = (i__30791 + 1);
seq__30788 = G__30792;
chunk__30789 = G__30793;
count__30790 = G__30794;
i__30791 = G__30795;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30788);if(temp__4092__auto__)
{var seq__30788__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30788__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__30788__$1);{
var G__30796 = cljs.core.chunk_rest.call(null,seq__30788__$1);
var G__30797 = c__4148__auto__;
var G__30798 = cljs.core.count.call(null,c__4148__auto__);
var G__30799 = 0;
seq__30788 = G__30796;
chunk__30789 = G__30797;
count__30790 = G__30798;
i__30791 = G__30799;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__30788__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__30800 = cljs.core.next.call(null,seq__30788__$1);
var G__30801 = null;
var G__30802 = 0;
var G__30803 = 0;
seq__30788 = G__30800;
chunk__30789 = G__30801;
count__30790 = G__30802;
i__30791 = G__30803;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__30812 = cljs.core.js__GT_clj.call(null,envelope);var map__30812__$1 = ((cljs.core.seq_QMARK_.call(null,map__30812))?cljs.core.apply.call(null,cljs.core.hash_map,map__30812):map__30812);var clj_envelope = map__30812__$1;var vec__30813 = cljs.core.get.call(null,map__30812__$1,"coordinates");var vec__30814 = cljs.core.nth.call(null,vec__30813,0,null);var vec__30815 = cljs.core.nth.call(null,vec__30814,0,null);var miny = cljs.core.nth.call(null,vec__30815,0,null);var minx = cljs.core.nth.call(null,vec__30815,1,null);var vec__30816 = cljs.core.nth.call(null,vec__30814,1,null);var maxy = cljs.core.nth.call(null,vec__30816,0,null);var minx__$1 = cljs.core.nth.call(null,vec__30816,1,null);var vec__30817 = cljs.core.nth.call(null,vec__30814,2,null);var maxy__$1 = cljs.core.nth.call(null,vec__30817,0,null);var maxx = cljs.core.nth.call(null,vec__30817,1,null);var vec__30818 = cljs.core.nth.call(null,vec__30814,3,null);var miny__$1 = cljs.core.nth.call(null,vec__30818,0,null);var maxx__$1 = cljs.core.nth.call(null,vec__30818,1,null);var vec__30819 = cljs.core.nth.call(null,vec__30814,4,null);var miny__$2 = cljs.core.nth.call(null,vec__30819,0,null);var minx__$2 = cljs.core.nth.call(null,vec__30819,1,null);var inner = vec__30814;var coords = vec__30813;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx__$2,miny__$2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx__$1,maxy__$1], null)], null)));
});
clustermap.components.map.create_path = (function create_path(leaflet_map,uk_constituencies,boundaryline_id){var temp__4092__auto__ = (uk_constituencies[boundaryline_id]);if(cljs.core.truth_(temp__4092__auto__))
{var cons = temp__4092__auto__;var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
} else
{return null;
}
});
clustermap.components.map.update_path = (function update_path(leaflet_map,uk_constituencies,path,boundaryline_id){return null;
});
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__30821 = path;var G__30821__$1 = (((G__30821 == null))?null:new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__30821));var G__30821__$2 = (((G__30821__$1 == null))?null:leaflet_map.removeLayer(G__30821__$1));return G__30821__$2;
});
clustermap.components.map.update_paths = (function update_paths(leaflet_map,uk_constituencies,paths_atom,old_locations,new_locations){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var location_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_locations)))));var update_path_keys = clojure.set.intersection.call(null,path_keys,location_path_keys);var new_path_keys = clojure.set.difference.call(null,location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.call(null,path_keys,location_path_keys);var new_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path.call(null,leaflet_map,uk_constituencies,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys));var updated_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path.call(null,leaflet_map,uk_constituencies,cljs.core.get.call(null,paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__30826 = cljs.core.seq.call(null,remove_path_keys);var chunk__30827 = null;var count__30828 = 0;var i__30829 = 0;while(true){
if((i__30829 < count__30828))
{var k = cljs.core._nth.call(null,chunk__30827,i__30829);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__30830 = seq__30826;
var G__30831 = chunk__30827;
var G__30832 = count__30828;
var G__30833 = (i__30829 + 1);
seq__30826 = G__30830;
chunk__30827 = G__30831;
count__30828 = G__30832;
i__30829 = G__30833;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30826);if(temp__4092__auto__)
{var seq__30826__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30826__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__30826__$1);{
var G__30834 = cljs.core.chunk_rest.call(null,seq__30826__$1);
var G__30835 = c__4148__auto__;
var G__30836 = cljs.core.count.call(null,c__4148__auto__);
var G__30837 = 0;
seq__30826 = G__30834;
chunk__30827 = G__30835;
count__30828 = G__30836;
i__30829 = G__30837;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__30826__$1);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__30838 = cljs.core.next.call(null,seq__30826__$1);
var G__30839 = null;
var G__30840 = 0;
var G__30841 = 0;
seq__30826 = G__30838;
chunk__30827 = G__30839;
count__30828 = G__30840;
i__30829 = G__30841;
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
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__30843 = paths;var G__30843__$1 = (((G__30843 == null))?null:cljs.core.vals.call(null,G__30843));var G__30843__$2 = (((G__30843__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__30843__$1));return G__30843__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__30844,owner){var map__30854 = p__30844;var map__30854__$1 = ((cljs.core.seq_QMARK_.call(null,map__30854))?cljs.core.apply.call(null,cljs.core.hash_map,map__30854):map__30854);var uk_constituencies = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var selection_portfolio_company_locations = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var selection_portfolio_company_sites = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680));var selection = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t30855 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t30855 = (function (selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__30854,owner,p__30844,map_component,meta30856){
this.selection = selection;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.selection_portfolio_company_locations = selection_portfolio_company_locations;
this.uk_constituencies = uk_constituencies;
this.map__30854 = map__30854;
this.owner = owner;
this.p__30844 = p__30844;
this.map_component = map_component;
this.meta30856 = meta30856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t30855.cljs$lang$type = true;
clustermap.components.map.t30855.cljs$lang$ctorStr = "clustermap.components.map/t30855";
clustermap.components.map.t30855.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t30855");
});
clustermap.components.map.t30855.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t30855.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.components.map.create_map.call(null,node));
});
clustermap.components.map.t30855.prototype.om$core$IRenderState$ = true;
clustermap.components.map.t30855.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__30858){var self__ = this;
var map__30859 = p__30858;var map__30859__$1 = ((cljs.core.seq_QMARK_.call(null,map__30859))?cljs.core.apply.call(null,cljs.core.hash_map,map__30859):map__30859);var map__30860 = cljs.core.get.call(null,map__30859__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__30860__$1 = ((cljs.core.seq_QMARK_.call(null,map__30860))?cljs.core.apply.call(null,cljs.core.hash_map,map__30860):map__30860);var paths = cljs.core.get.call(null,map__30860__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__30860__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__30860__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var locations = cljs.core.get.call(null,map__30859__$1,new cljs.core.Keyword(null,"locations","locations",4111682256));var this$__$1 = this;var new_locations_30863 = (cljs.core.truth_(self__.selection_portfolio_company_locations)?om.core.value.call(null,self__.selection_portfolio_company_locations):null);if((locations === new_locations_30863))
{} else
{clustermap.components.map.update_markers.call(null,leaflet_map,markers,locations,new_locations_30863);
clustermap.components.map.update_paths.call(null,leaflet_map,self__.uk_constituencies,paths,locations,new_locations_30863);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"locations","locations",4111682256),new_locations_30863);
clustermap.components.map.pan_to_selection.call(null,leaflet_map,cljs.core.deref.call(null,paths));
}
return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t30855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30857){var self__ = this;
var _30857__$1 = this;return self__.meta30856;
});
clustermap.components.map.t30855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30857,meta30856__$1){var self__ = this;
var _30857__$1 = this;return (new clustermap.components.map.t30855(self__.selection,self__.selection_portfolio_company_sites,self__.selection_portfolio_company_locations,self__.uk_constituencies,self__.map__30854,self__.owner,self__.p__30844,self__.map_component,meta30856__$1));
});
clustermap.components.map.__GT_t30855 = (function __GT_t30855(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__30854__$2,owner__$1,p__30844__$1,map_component__$1,meta30856){return (new clustermap.components.map.t30855(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__30854__$2,owner__$1,p__30844__$1,map_component__$1,meta30856));
});
}
return (new clustermap.components.map.t30855(selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__30854__$1,owner,p__30844,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
