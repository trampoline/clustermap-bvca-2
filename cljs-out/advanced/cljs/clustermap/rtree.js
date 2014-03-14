// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$582,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34908_34912 = cljs.core.seq(keys);var chunk__34909_34913 = null;var count__34910_34914 = 0;var i__34911_34915 = 0;while(true){
if((i__34911_34915 < count__34910_34914))
{var k_34916 = chunk__34909_34913.cljs$core$IIndexed$_nth$arity$2(null,i__34911_34915);var obj_34917 = (js_index[k_34916]);var geom_34918 = (obj_34917["geojson"]);var feature_34919 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$582,"Feature",cljs.core.constant$keyword$735,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$578,(obj_34917["id"]),cljs.core.constant$keyword$653,(obj_34917["compact_name"])], null)], null));var __34920__$1 = (feature_34919["geometry"] = geom_34918);features.push(feature_34919);
{
var G__34921 = seq__34908_34912;
var G__34922 = chunk__34909_34913;
var G__34923 = count__34910_34914;
var G__34924 = (i__34911_34915 + 1);
seq__34908_34912 = G__34921;
chunk__34909_34913 = G__34922;
count__34910_34914 = G__34923;
i__34911_34915 = G__34924;
continue;
}
} else
{var temp__4092__auto___34925 = cljs.core.seq(seq__34908_34912);if(temp__4092__auto___34925)
{var seq__34908_34926__$1 = temp__4092__auto___34925;if(cljs.core.chunked_seq_QMARK_(seq__34908_34926__$1))
{var c__4189__auto___34927 = cljs.core.chunk_first(seq__34908_34926__$1);{
var G__34928 = cljs.core.chunk_rest(seq__34908_34926__$1);
var G__34929 = c__4189__auto___34927;
var G__34930 = cljs.core.count(c__4189__auto___34927);
var G__34931 = 0;
seq__34908_34912 = G__34928;
chunk__34909_34913 = G__34929;
count__34910_34914 = G__34930;
i__34911_34915 = G__34931;
continue;
}
} else
{var k_34932 = cljs.core.first(seq__34908_34926__$1);var obj_34933 = (js_index[k_34932]);var geom_34934 = (obj_34933["geojson"]);var feature_34935 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$582,"Feature",cljs.core.constant$keyword$735,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$578,(obj_34933["id"]),cljs.core.constant$keyword$653,(obj_34933["compact_name"])], null)], null));var __34936__$1 = (feature_34935["geometry"] = geom_34934);features.push(feature_34935);
{
var G__34937 = cljs.core.next(seq__34908_34926__$1);
var G__34938 = null;
var G__34939 = 0;
var G__34940 = 0;
seq__34908_34912 = G__34937;
chunk__34909_34913 = G__34938;
count__34910_34914 = G__34939;
i__34911_34915 = G__34940;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$736,x,cljs.core.constant$keyword$737,y,cljs.core.constant$keyword$738,0,cljs.core.constant$keyword$739,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$582,"Point",cljs.core.constant$keyword$740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
