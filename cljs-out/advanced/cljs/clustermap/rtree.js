// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$286,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23225_23229 = cljs.core.seq(keys);var chunk__23226_23230 = null;var count__23227_23231 = 0;var i__23228_23232 = 0;while(true){
if((i__23228_23232 < count__23227_23231))
{var k_23233 = chunk__23226_23230.cljs$core$IIndexed$_nth$arity$2(null,i__23228_23232);var obj_23234 = (js_index[k_23233]);var geom_23235 = (obj_23234["geojson"]);var feature_23236 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$286,"Feature",cljs.core.constant$keyword$416,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$282,(obj_23234["id"]),cljs.core.constant$keyword$338,(obj_23234["compact_name"])], null)], null));var __23237__$1 = (feature_23236["geometry"] = geom_23235);features.push(feature_23236);
{
var G__23238 = seq__23225_23229;
var G__23239 = chunk__23226_23230;
var G__23240 = count__23227_23231;
var G__23241 = (i__23228_23232 + 1);
seq__23225_23229 = G__23238;
chunk__23226_23230 = G__23239;
count__23227_23231 = G__23240;
i__23228_23232 = G__23241;
continue;
}
} else
{var temp__4092__auto___23242 = cljs.core.seq(seq__23225_23229);if(temp__4092__auto___23242)
{var seq__23225_23243__$1 = temp__4092__auto___23242;if(cljs.core.chunked_seq_QMARK_(seq__23225_23243__$1))
{var c__4148__auto___23244 = cljs.core.chunk_first(seq__23225_23243__$1);{
var G__23245 = cljs.core.chunk_rest(seq__23225_23243__$1);
var G__23246 = c__4148__auto___23244;
var G__23247 = cljs.core.count(c__4148__auto___23244);
var G__23248 = 0;
seq__23225_23229 = G__23245;
chunk__23226_23230 = G__23246;
count__23227_23231 = G__23247;
i__23228_23232 = G__23248;
continue;
}
} else
{var k_23249 = cljs.core.first(seq__23225_23243__$1);var obj_23250 = (js_index[k_23249]);var geom_23251 = (obj_23250["geojson"]);var feature_23252 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$286,"Feature",cljs.core.constant$keyword$416,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$282,(obj_23250["id"]),cljs.core.constant$keyword$338,(obj_23250["compact_name"])], null)], null));var __23253__$1 = (feature_23252["geometry"] = geom_23251);features.push(feature_23252);
{
var G__23254 = cljs.core.next(seq__23225_23243__$1);
var G__23255 = null;
var G__23256 = 0;
var G__23257 = 0;
seq__23225_23229 = G__23254;
chunk__23226_23230 = G__23255;
count__23227_23231 = G__23256;
i__23228_23232 = G__23257;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$417,x,cljs.core.constant$keyword$418,y,cljs.core.constant$keyword$419,0,cljs.core.constant$keyword$420,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$286,"Point",cljs.core.constant$keyword$421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
