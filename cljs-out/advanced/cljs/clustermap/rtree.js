// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$270,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23205_23209 = cljs.core.seq(keys);var chunk__23206_23210 = null;var count__23207_23211 = 0;var i__23208_23212 = 0;while(true){
if((i__23208_23212 < count__23207_23211))
{var k_23213 = chunk__23206_23210.cljs$core$IIndexed$_nth$arity$2(null,i__23208_23212);var obj_23214 = (js_index[k_23213]);var geom_23215 = (obj_23214["geojson"]);var feature_23216 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"Feature",cljs.core.constant$keyword$390,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,(obj_23214["id"]),cljs.core.constant$keyword$383,(obj_23214["compact_name"])], null)], null));var __23217__$1 = (feature_23216["geometry"] = geom_23215);features.push(feature_23216);
{
var G__23218 = seq__23205_23209;
var G__23219 = chunk__23206_23210;
var G__23220 = count__23207_23211;
var G__23221 = (i__23208_23212 + 1);
seq__23205_23209 = G__23218;
chunk__23206_23210 = G__23219;
count__23207_23211 = G__23220;
i__23208_23212 = G__23221;
continue;
}
} else
{var temp__4092__auto___23222 = cljs.core.seq(seq__23205_23209);if(temp__4092__auto___23222)
{var seq__23205_23223__$1 = temp__4092__auto___23222;if(cljs.core.chunked_seq_QMARK_(seq__23205_23223__$1))
{var c__4148__auto___23224 = cljs.core.chunk_first(seq__23205_23223__$1);{
var G__23225 = cljs.core.chunk_rest(seq__23205_23223__$1);
var G__23226 = c__4148__auto___23224;
var G__23227 = cljs.core.count(c__4148__auto___23224);
var G__23228 = 0;
seq__23205_23209 = G__23225;
chunk__23206_23210 = G__23226;
count__23207_23211 = G__23227;
i__23208_23212 = G__23228;
continue;
}
} else
{var k_23229 = cljs.core.first(seq__23205_23223__$1);var obj_23230 = (js_index[k_23229]);var geom_23231 = (obj_23230["geojson"]);var feature_23232 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"Feature",cljs.core.constant$keyword$390,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,(obj_23230["id"]),cljs.core.constant$keyword$383,(obj_23230["compact_name"])], null)], null));var __23233__$1 = (feature_23232["geometry"] = geom_23231);features.push(feature_23232);
{
var G__23234 = cljs.core.next(seq__23205_23223__$1);
var G__23235 = null;
var G__23236 = 0;
var G__23237 = 0;
seq__23205_23209 = G__23234;
chunk__23206_23210 = G__23235;
count__23207_23211 = G__23236;
i__23208_23212 = G__23237;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$391,x,cljs.core.constant$keyword$360,y,cljs.core.constant$keyword$392,0,cljs.core.constant$keyword$393,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"Point",cljs.core.constant$keyword$394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
