// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$270,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23167_23171 = cljs.core.seq(keys);var chunk__23168_23172 = null;var count__23169_23173 = 0;var i__23170_23174 = 0;while(true){
if((i__23170_23174 < count__23169_23173))
{var k_23175 = chunk__23168_23172.cljs$core$IIndexed$_nth$arity$2(null,i__23170_23174);var obj_23176 = (js_index[k_23175]);var geom_23177 = (obj_23176["geojson"]);var feature_23178 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"Feature",cljs.core.constant$keyword$391,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,(obj_23176["id"])], null)], null));var __23179__$1 = (feature_23178["geometry"] = geom_23177);features.push(feature_23178);
{
var G__23180 = seq__23167_23171;
var G__23181 = chunk__23168_23172;
var G__23182 = count__23169_23173;
var G__23183 = (i__23170_23174 + 1);
seq__23167_23171 = G__23180;
chunk__23168_23172 = G__23181;
count__23169_23173 = G__23182;
i__23170_23174 = G__23183;
continue;
}
} else
{var temp__4092__auto___23184 = cljs.core.seq(seq__23167_23171);if(temp__4092__auto___23184)
{var seq__23167_23185__$1 = temp__4092__auto___23184;if(cljs.core.chunked_seq_QMARK_(seq__23167_23185__$1))
{var c__4148__auto___23186 = cljs.core.chunk_first(seq__23167_23185__$1);{
var G__23187 = cljs.core.chunk_rest(seq__23167_23185__$1);
var G__23188 = c__4148__auto___23186;
var G__23189 = cljs.core.count(c__4148__auto___23186);
var G__23190 = 0;
seq__23167_23171 = G__23187;
chunk__23168_23172 = G__23188;
count__23169_23173 = G__23189;
i__23170_23174 = G__23190;
continue;
}
} else
{var k_23191 = cljs.core.first(seq__23167_23185__$1);var obj_23192 = (js_index[k_23191]);var geom_23193 = (obj_23192["geojson"]);var feature_23194 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,"Feature",cljs.core.constant$keyword$391,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,(obj_23192["id"])], null)], null));var __23195__$1 = (feature_23194["geometry"] = geom_23193);features.push(feature_23194);
{
var G__23196 = cljs.core.next(seq__23167_23185__$1);
var G__23197 = null;
var G__23198 = 0;
var G__23199 = 0;
seq__23167_23171 = G__23196;
chunk__23168_23172 = G__23197;
count__23169_23173 = G__23198;
i__23170_23174 = G__23199;
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
