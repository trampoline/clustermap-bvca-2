// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$269,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23197_23201 = cljs.core.seq(keys);var chunk__23198_23202 = null;var count__23199_23203 = 0;var i__23200_23204 = 0;while(true){
if((i__23200_23204 < count__23199_23203))
{var k_23205 = chunk__23198_23202.cljs$core$IIndexed$_nth$arity$2(null,i__23200_23204);var obj_23206 = (js_index[k_23205]);var geom_23207 = (obj_23206["geojson"]);var feature_23208 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Feature",cljs.core.constant$keyword$389,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,(obj_23206["id"]),cljs.core.constant$keyword$382,(obj_23206["compact_name"])], null)], null));var __23209__$1 = (feature_23208["geometry"] = geom_23207);features.push(feature_23208);
{
var G__23210 = seq__23197_23201;
var G__23211 = chunk__23198_23202;
var G__23212 = count__23199_23203;
var G__23213 = (i__23200_23204 + 1);
seq__23197_23201 = G__23210;
chunk__23198_23202 = G__23211;
count__23199_23203 = G__23212;
i__23200_23204 = G__23213;
continue;
}
} else
{var temp__4092__auto___23214 = cljs.core.seq(seq__23197_23201);if(temp__4092__auto___23214)
{var seq__23197_23215__$1 = temp__4092__auto___23214;if(cljs.core.chunked_seq_QMARK_(seq__23197_23215__$1))
{var c__4148__auto___23216 = cljs.core.chunk_first(seq__23197_23215__$1);{
var G__23217 = cljs.core.chunk_rest(seq__23197_23215__$1);
var G__23218 = c__4148__auto___23216;
var G__23219 = cljs.core.count(c__4148__auto___23216);
var G__23220 = 0;
seq__23197_23201 = G__23217;
chunk__23198_23202 = G__23218;
count__23199_23203 = G__23219;
i__23200_23204 = G__23220;
continue;
}
} else
{var k_23221 = cljs.core.first(seq__23197_23215__$1);var obj_23222 = (js_index[k_23221]);var geom_23223 = (obj_23222["geojson"]);var feature_23224 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Feature",cljs.core.constant$keyword$389,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,(obj_23222["id"]),cljs.core.constant$keyword$382,(obj_23222["compact_name"])], null)], null));var __23225__$1 = (feature_23224["geometry"] = geom_23223);features.push(feature_23224);
{
var G__23226 = cljs.core.next(seq__23197_23215__$1);
var G__23227 = null;
var G__23228 = 0;
var G__23229 = 0;
seq__23197_23201 = G__23226;
chunk__23198_23202 = G__23227;
count__23199_23203 = G__23228;
i__23200_23204 = G__23229;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$390,x,cljs.core.constant$keyword$359,y,cljs.core.constant$keyword$391,0,cljs.core.constant$keyword$392,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Point",cljs.core.constant$keyword$393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
