// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23257_23261 = cljs.core.seq(keys);var chunk__23258_23262 = null;var count__23259_23263 = 0;var i__23260_23264 = 0;while(true){
if((i__23260_23264 < count__23259_23263))
{var k_23265 = chunk__23258_23262.cljs$core$IIndexed$_nth$arity$2(null,i__23260_23264);var obj_23266 = (js_index[k_23265]);var geom_23267 = (obj_23266["geojson"]);var feature_23268 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"Feature",cljs.core.constant$keyword$401,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,(obj_23266["id"]),cljs.core.constant$keyword$394,(obj_23266["compact_name"])], null)], null));var __23269__$1 = (feature_23268["geometry"] = geom_23267);features.push(feature_23268);
{
var G__23270 = seq__23257_23261;
var G__23271 = chunk__23258_23262;
var G__23272 = count__23259_23263;
var G__23273 = (i__23260_23264 + 1);
seq__23257_23261 = G__23270;
chunk__23258_23262 = G__23271;
count__23259_23263 = G__23272;
i__23260_23264 = G__23273;
continue;
}
} else
{var temp__4092__auto___23274 = cljs.core.seq(seq__23257_23261);if(temp__4092__auto___23274)
{var seq__23257_23275__$1 = temp__4092__auto___23274;if(cljs.core.chunked_seq_QMARK_(seq__23257_23275__$1))
{var c__4148__auto___23276 = cljs.core.chunk_first(seq__23257_23275__$1);{
var G__23277 = cljs.core.chunk_rest(seq__23257_23275__$1);
var G__23278 = c__4148__auto___23276;
var G__23279 = cljs.core.count(c__4148__auto___23276);
var G__23280 = 0;
seq__23257_23261 = G__23277;
chunk__23258_23262 = G__23278;
count__23259_23263 = G__23279;
i__23260_23264 = G__23280;
continue;
}
} else
{var k_23281 = cljs.core.first(seq__23257_23275__$1);var obj_23282 = (js_index[k_23281]);var geom_23283 = (obj_23282["geojson"]);var feature_23284 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"Feature",cljs.core.constant$keyword$401,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,(obj_23282["id"]),cljs.core.constant$keyword$394,(obj_23282["compact_name"])], null)], null));var __23285__$1 = (feature_23284["geometry"] = geom_23283);features.push(feature_23284);
{
var G__23286 = cljs.core.next(seq__23257_23275__$1);
var G__23287 = null;
var G__23288 = 0;
var G__23289 = 0;
seq__23257_23261 = G__23286;
chunk__23258_23262 = G__23287;
count__23259_23263 = G__23288;
i__23260_23264 = G__23289;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$402,x,cljs.core.constant$keyword$403,y,cljs.core.constant$keyword$404,0,cljs.core.constant$keyword$405,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"Point",cljs.core.constant$keyword$406,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
