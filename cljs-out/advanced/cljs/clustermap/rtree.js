// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23209_23213 = cljs.core.seq(keys);var chunk__23210_23214 = null;var count__23211_23215 = 0;var i__23212_23216 = 0;while(true){
if((i__23212_23216 < count__23211_23215))
{var k_23217 = chunk__23210_23214.cljs$core$IIndexed$_nth$arity$2(null,i__23212_23216);var obj_23218 = (js_index[k_23217]);var geom_23219 = (obj_23218["geojson"]);var feature_23220 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"Feature",cljs.core.constant$keyword$402,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,(obj_23218["id"]),cljs.core.constant$keyword$395,(obj_23218["compact_name"])], null)], null));var __23221__$1 = (feature_23220["geometry"] = geom_23219);features.push(feature_23220);
{
var G__23222 = seq__23209_23213;
var G__23223 = chunk__23210_23214;
var G__23224 = count__23211_23215;
var G__23225 = (i__23212_23216 + 1);
seq__23209_23213 = G__23222;
chunk__23210_23214 = G__23223;
count__23211_23215 = G__23224;
i__23212_23216 = G__23225;
continue;
}
} else
{var temp__4092__auto___23226 = cljs.core.seq(seq__23209_23213);if(temp__4092__auto___23226)
{var seq__23209_23227__$1 = temp__4092__auto___23226;if(cljs.core.chunked_seq_QMARK_(seq__23209_23227__$1))
{var c__4148__auto___23228 = cljs.core.chunk_first(seq__23209_23227__$1);{
var G__23229 = cljs.core.chunk_rest(seq__23209_23227__$1);
var G__23230 = c__4148__auto___23228;
var G__23231 = cljs.core.count(c__4148__auto___23228);
var G__23232 = 0;
seq__23209_23213 = G__23229;
chunk__23210_23214 = G__23230;
count__23211_23215 = G__23231;
i__23212_23216 = G__23232;
continue;
}
} else
{var k_23233 = cljs.core.first(seq__23209_23227__$1);var obj_23234 = (js_index[k_23233]);var geom_23235 = (obj_23234["geojson"]);var feature_23236 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"Feature",cljs.core.constant$keyword$402,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,(obj_23234["id"]),cljs.core.constant$keyword$395,(obj_23234["compact_name"])], null)], null));var __23237__$1 = (feature_23236["geometry"] = geom_23235);features.push(feature_23236);
{
var G__23238 = cljs.core.next(seq__23209_23227__$1);
var G__23239 = null;
var G__23240 = 0;
var G__23241 = 0;
seq__23209_23213 = G__23238;
chunk__23210_23214 = G__23239;
count__23211_23215 = G__23240;
i__23212_23216 = G__23241;
continue;
}
}
} else
{}
}
break;
}
rtree.geoJSON(js_feature_coll);
return rtree;
});
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$403,x,cljs.core.constant$keyword$404,y,cljs.core.constant$keyword$405,0,cljs.core.constant$keyword$406,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"Point",cljs.core.constant$keyword$407,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
