// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23249_23253 = cljs.core.seq(keys);var chunk__23250_23254 = null;var count__23251_23255 = 0;var i__23252_23256 = 0;while(true){
if((i__23252_23256 < count__23251_23255))
{var k_23257 = chunk__23250_23254.cljs$core$IIndexed$_nth$arity$2(null,i__23252_23256);var obj_23258 = (js_index[k_23257]);var geom_23259 = (obj_23258["geojson"]);var feature_23260 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"Feature",cljs.core.constant$keyword$402,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,(obj_23258["id"]),cljs.core.constant$keyword$395,(obj_23258["compact_name"])], null)], null));var __23261__$1 = (feature_23260["geometry"] = geom_23259);features.push(feature_23260);
{
var G__23262 = seq__23249_23253;
var G__23263 = chunk__23250_23254;
var G__23264 = count__23251_23255;
var G__23265 = (i__23252_23256 + 1);
seq__23249_23253 = G__23262;
chunk__23250_23254 = G__23263;
count__23251_23255 = G__23264;
i__23252_23256 = G__23265;
continue;
}
} else
{var temp__4092__auto___23266 = cljs.core.seq(seq__23249_23253);if(temp__4092__auto___23266)
{var seq__23249_23267__$1 = temp__4092__auto___23266;if(cljs.core.chunked_seq_QMARK_(seq__23249_23267__$1))
{var c__4148__auto___23268 = cljs.core.chunk_first(seq__23249_23267__$1);{
var G__23269 = cljs.core.chunk_rest(seq__23249_23267__$1);
var G__23270 = c__4148__auto___23268;
var G__23271 = cljs.core.count(c__4148__auto___23268);
var G__23272 = 0;
seq__23249_23253 = G__23269;
chunk__23250_23254 = G__23270;
count__23251_23255 = G__23271;
i__23252_23256 = G__23272;
continue;
}
} else
{var k_23273 = cljs.core.first(seq__23249_23267__$1);var obj_23274 = (js_index[k_23273]);var geom_23275 = (obj_23274["geojson"]);var feature_23276 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"Feature",cljs.core.constant$keyword$402,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,(obj_23274["id"]),cljs.core.constant$keyword$395,(obj_23274["compact_name"])], null)], null));var __23277__$1 = (feature_23276["geometry"] = geom_23275);features.push(feature_23276);
{
var G__23278 = cljs.core.next(seq__23249_23267__$1);
var G__23279 = null;
var G__23280 = 0;
var G__23281 = 0;
seq__23249_23253 = G__23278;
chunk__23250_23254 = G__23279;
count__23251_23255 = G__23280;
i__23252_23256 = G__23281;
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
