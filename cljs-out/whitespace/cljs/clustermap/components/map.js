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
pan_to_show.cljs$lang$applyTo = (function (arglist__30519){
var m = cljs.core.first(arglist__30519);
var all_bounds = cljs.core.rest(arglist__30519);
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
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,(function (site){return [cljs.core.str((function (){var attrs30521 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_.call(null,attrs30521))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs30521))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs30521)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__30523 = location_sites;var G__30523__$1 = (((G__30523 == null))?null:cljs.core.first.call(null,G__30523));var G__30523__$2 = (((G__30523__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__30523__$1));var G__30523__$3 = (((G__30523__$2 == null))?null:cljs.core.reverse.call(null,G__30523__$2));var G__30523__$4 = (((G__30523__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__30523__$3));return G__30523__$4;
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
,update_marker_keys));var _ = (function (){var seq__30528 = cljs.core.seq.call(null,remove_marker_keys);var chunk__30529 = null;var count__30530 = 0;var i__30531 = 0;while(true){
if((i__30531 < count__30530))
{var k = cljs.core._nth.call(null,chunk__30529,i__30531);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__30532 = seq__30528;
var G__30533 = chunk__30529;
var G__30534 = count__30530;
var G__30535 = (i__30531 + 1);
seq__30528 = G__30532;
chunk__30529 = G__30533;
count__30530 = G__30534;
i__30531 = G__30535;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30528);if(temp__4092__auto__)
{var seq__30528__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30528__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__30528__$1);{
var G__30536 = cljs.core.chunk_rest.call(null,seq__30528__$1);
var G__30537 = c__4148__auto__;
var G__30538 = cljs.core.count.call(null,c__4148__auto__);
var G__30539 = 0;
seq__30528 = G__30536;
chunk__30529 = G__30537;
count__30530 = G__30538;
i__30531 = G__30539;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__30528__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__30540 = cljs.core.next.call(null,seq__30528__$1);
var G__30541 = null;
var G__30542 = 0;
var G__30543 = 0;
seq__30528 = G__30540;
chunk__30529 = G__30541;
count__30530 = G__30542;
i__30531 = G__30543;
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
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,selection,selection_portfolio_company_sites){var points = cljs.core.map.call(null,new cljs.core.Keyword(null,"location","location",2914947879),selection_portfolio_company_sites);var bounds = clustermap.components.map.geojson_point_bounds.call(null,points);if(cljs.core.truth_(bounds))
{return clustermap.components.map.pan_to_show.call(null,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__30544,owner){var map__30554 = p__30544;var map__30554__$1 = ((cljs.core.seq_QMARK_.call(null,map__30554))?cljs.core.apply.call(null,cljs.core.hash_map,map__30554):map__30554);var selection_portfolio_company_locations = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var selection_portfolio_company_sites = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680));var selection = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t30555 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t30555 = (function (selection,selection_portfolio_company_sites,selection_portfolio_company_locations,map__30554,owner,p__30544,map_component,meta30556){
this.selection = selection;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.selection_portfolio_company_locations = selection_portfolio_company_locations;
this.map__30554 = map__30554;
this.owner = owner;
this.p__30544 = p__30544;
this.map_component = map_component;
this.meta30556 = meta30556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t30555.cljs$lang$type = true;
clustermap.components.map.t30555.cljs$lang$ctorStr = "clustermap.components.map/t30555";
clustermap.components.map.t30555.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t30555");
});
clustermap.components.map.t30555.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t30555.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.components.map.create_map.call(null,node));
});
clustermap.components.map.t30555.prototype.om$core$IRenderState$ = true;
clustermap.components.map.t30555.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__30558){var self__ = this;
var map__30559 = p__30558;var map__30559__$1 = ((cljs.core.seq_QMARK_.call(null,map__30559))?cljs.core.apply.call(null,cljs.core.hash_map,map__30559):map__30559);var map__30560 = cljs.core.get.call(null,map__30559__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__30560__$1 = ((cljs.core.seq_QMARK_.call(null,map__30560))?cljs.core.apply.call(null,cljs.core.hash_map,map__30560):map__30560);var paths = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var locations = cljs.core.get.call(null,map__30559__$1,new cljs.core.Keyword(null,"locations","locations",4111682256));var this$__$1 = this;var new_locations_30563 = (cljs.core.truth_(self__.selection_portfolio_company_locations)?om.core.value.call(null,self__.selection_portfolio_company_locations):null);if((locations === new_locations_30563))
{} else
{clustermap.components.map.update_markers.call(null,leaflet_map,markers,locations,new_locations_30563);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"locations","locations",4111682256),new_locations_30563);
clustermap.components.map.pan_to_selection.call(null,leaflet_map,self__.selection,self__.selection_portfolio_company_sites);
}
return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t30555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30557){var self__ = this;
var _30557__$1 = this;return self__.meta30556;
});
clustermap.components.map.t30555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30557,meta30556__$1){var self__ = this;
var _30557__$1 = this;return (new clustermap.components.map.t30555(self__.selection,self__.selection_portfolio_company_sites,self__.selection_portfolio_company_locations,self__.map__30554,self__.owner,self__.p__30544,self__.map_component,meta30556__$1));
});
clustermap.components.map.__GT_t30555 = (function __GT_t30555(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,map__30554__$2,owner__$1,p__30544__$1,map_component__$1,meta30556){return (new clustermap.components.map.t30555(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,map__30554__$2,owner__$1,p__30544__$1,map_component__$1,meta30556));
});
}
return (new clustermap.components.map.t30555(selection,selection_portfolio_company_sites,selection_portfolio_company_locations,map__30554__$1,owner,p__30544,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
