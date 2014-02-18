// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$270,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23201_23205 = cljs.core.seq(keys);var chunk__23202_23206 = null;var count__23203_23207 = 0;var i__23204_23208 = 0;while(true){
if((i__23204_23208 < count__23203_23207))
{var k_23209 = chunk__23202_23206.cljs$core$IIndexed$_nth$arity$2(null,i__23204_23208);var obj_23210 = (js_index[k_23209]);var geom_23211 = (obj_23210["geojson"]);var feature_23212 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"Feature",cljs.core.constant$keyword$391,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,(obj_23210["id"]),cljs.core.constant$keyword$384,(obj_23210["compact_name"])], null)], null));var __23213__$1 = (feature_23212["geometry"] = geom_23211);features.push(feature_23212);
{
var G__23214 = seq__23201_23205;
var G__23215 = chunk__23202_23206;
var G__23216 = count__23203_23207;
var G__23217 = (i__23204_23208 + 1);
seq__23201_23205 = G__23214;
chunk__23202_23206 = G__23215;
count__23203_23207 = G__23216;
i__23204_23208 = G__23217;
continue;
}
} else
{var temp__4092__auto___23218 = cljs.core.seq(seq__23201_23205);if(temp__4092__auto___23218)
{var seq__23201_23219__$1 = temp__4092__auto___23218;if(cljs.core.chunked_seq_QMARK_(seq__23201_23219__$1))
{var c__4148__auto___23220 = cljs.core.chunk_first(seq__23201_23219__$1);{
var G__23221 = cljs.core.chunk_rest(seq__23201_23219__$1);
var G__23222 = c__4148__auto___23220;
var G__23223 = cljs.core.count(c__4148__auto___23220);
var G__23224 = 0;
seq__23201_23205 = G__23221;
chunk__23202_23206 = G__23222;
count__23203_23207 = G__23223;
i__23204_23208 = G__23224;
continue;
}
} else
{var k_23225 = cljs.core.first(seq__23201_23219__$1);var obj_23226 = (js_index[k_23225]);var geom_23227 = (obj_23226["geojson"]);var feature_23228 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"Feature",cljs.core.constant$keyword$391,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,(obj_23226["id"]),cljs.core.constant$keyword$384,(obj_23226["compact_name"])], null)], null));var __23229__$1 = (feature_23228["geometry"] = geom_23227);features.push(feature_23228);
{
var G__23230 = cljs.core.next(seq__23201_23219__$1);
var G__23231 = null;
var G__23232 = 0;
var G__23233 = 0;
seq__23201_23205 = G__23230;
chunk__23202_23206 = G__23231;
count__23203_23207 = G__23232;
i__23204_23208 = G__23233;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$392,x,cljs.core.constant$keyword$361,y,cljs.core.constant$keyword$393,0,cljs.core.constant$keyword$394,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"Point",cljs.core.constant$keyword$395,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
