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
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,"mccraigmccraig.map-gqkcbi1g",{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$275,m,cljs.core.constant$keyword$276,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$277,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3394__auto__ = s;if(cljs.core.truth_(and__3394__auto__))
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
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){var fb = cljs.core.first(all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest(all_bounds));return m.fitBounds(super_bounds);
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__20836){
var m = cljs.core.first(arglist__20836);
var all_bounds = cljs.core.rest(arglist__20836);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$279,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$279,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str((function (){var attrs20838 = cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_(attrs20838))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$188,null,cljs.core.constant$keyword$182,null], null),attrs20838], 0)))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html(attrs20838)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__20840 = location_sites;var G__20840__$1 = (((G__20840 == null))?null:cljs.core.first(G__20840));var G__20840__$2 = (((G__20840__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__20840__$1));var G__20840__$3 = (((G__20840__$2 == null))?null:cljs.core.reverse(G__20840__$2));var G__20840__$4 = (((G__20840__$3 == null))?null:cljs.core.clj__GT_js(G__20840__$3));return G__20840__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return null;
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){return marker.setPopupContent(clustermap.components.map.marker_popup_content(location));
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,old_locations,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__20845 = cljs.core.seq(remove_marker_keys);var chunk__20846 = null;var count__20847 = 0;var i__20848 = 0;while(true){
if((i__20848 < count__20847))
{var k = chunk__20846.cljs$core$IIndexed$_nth$arity$2(null,i__20848);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__20849 = seq__20845;
var G__20850 = chunk__20846;
var G__20851 = count__20847;
var G__20852 = (i__20848 + 1);
seq__20845 = G__20849;
chunk__20846 = G__20850;
count__20847 = G__20851;
i__20848 = G__20852;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__20845);if(temp__4092__auto__)
{var seq__20845__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__20845__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__20845__$1);{
var G__20853 = cljs.core.chunk_rest(seq__20845__$1);
var G__20854 = c__4148__auto__;
var G__20855 = cljs.core.count(c__4148__auto__);
var G__20856 = 0;
seq__20845 = G__20853;
chunk__20846 = G__20854;
count__20847 = G__20855;
i__20848 = G__20856;
continue;
}
} else
{var k = cljs.core.first(seq__20845__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__20857 = cljs.core.next(seq__20845__$1);
var G__20858 = null;
var G__20859 = 0;
var G__20860 = 0;
seq__20845 = G__20857;
chunk__20846 = G__20858;
count__20847 = G__20859;
i__20848 = G__20860;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_(markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0)));
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,selection,selection_portfolio_company_sites){var points = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$280,selection_portfolio_company_sites);var bounds = clustermap.components.map.geojson_point_bounds(points);if(cljs.core.truth_(bounds))
{return clustermap.components.map.pan_to_show.cljs$core$IFn$_invoke$arity$variadic(leaflet_map,cljs.core.array_seq([bounds], 0));
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__20861,owner){var map__20871 = p__20861;var map__20871__$1 = ((cljs.core.seq_QMARK_(map__20871))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20871):map__20871);var selection_portfolio_company_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20871__$1,cljs.core.constant$keyword$281);var selection_portfolio_company_sites = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20871__$1,cljs.core.constant$keyword$262);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20871__$1,cljs.core.constant$keyword$229);if(typeof clustermap.components.map.t20872 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t20872 = (function (selection,selection_portfolio_company_sites,selection_portfolio_company_locations,map__20871,owner,p__20861,map_component,meta20873){
this.selection = selection;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.selection_portfolio_company_locations = selection_portfolio_company_locations;
this.map__20871 = map__20871;
this.owner = owner;
this.p__20861 = p__20861;
this.map_component = map_component;
this.meta20873 = meta20873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t20872.cljs$lang$type = true;
clustermap.components.map.t20872.cljs$lang$ctorStr = "clustermap.components.map/t20872";
clustermap.components.map.t20872.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t20872");
});
clustermap.components.map.t20872.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t20872.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$282,clustermap.components.map.create_map(node));
});
clustermap.components.map.t20872.prototype.om$core$IRenderState$ = true;
clustermap.components.map.t20872.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__20875){var self__ = this;
var map__20876 = p__20875;var map__20876__$1 = ((cljs.core.seq_QMARK_(map__20876))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20876):map__20876);var map__20877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876__$1,cljs.core.constant$keyword$282);var map__20877__$1 = ((cljs.core.seq_QMARK_(map__20877))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20877):map__20877);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,cljs.core.constant$keyword$277);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,cljs.core.constant$keyword$276);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,cljs.core.constant$keyword$275);var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876__$1,cljs.core.constant$keyword$283);var this$__$1 = this;var new_locations_20880 = (cljs.core.truth_(self__.selection_portfolio_company_locations)?om.core.value(self__.selection_portfolio_company_locations):null);if((locations === new_locations_20880))
{} else
{clustermap.components.map.update_markers(leaflet_map,markers,locations,new_locations_20880);
om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$283,new_locations_20880);
clustermap.components.map.pan_to_selection(leaflet_map,self__.selection,self__.selection_portfolio_company_sites);
}
return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t20872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20874){var self__ = this;
var _20874__$1 = this;return self__.meta20873;
});
clustermap.components.map.t20872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20874,meta20873__$1){var self__ = this;
var _20874__$1 = this;return (new clustermap.components.map.t20872(self__.selection,self__.selection_portfolio_company_sites,self__.selection_portfolio_company_locations,self__.map__20871,self__.owner,self__.p__20861,self__.map_component,meta20873__$1));
});
clustermap.components.map.__GT_t20872 = (function __GT_t20872(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,map__20871__$2,owner__$1,p__20861__$1,map_component__$1,meta20873){return (new clustermap.components.map.t20872(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,map__20871__$2,owner__$1,p__20861__$1,map_component__$1,meta20873));
});
}
return (new clustermap.components.map.t20872(selection,selection_portfolio_company_sites,selection_portfolio_company_locations,map__20871__$1,owner,p__20861,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
