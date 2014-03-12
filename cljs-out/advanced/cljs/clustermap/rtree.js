// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$584,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34896_34900 = cljs.core.seq(keys);var chunk__34897_34901 = null;var count__34898_34902 = 0;var i__34899_34903 = 0;while(true){
if((i__34899_34903 < count__34898_34902))
{var k_34904 = chunk__34897_34901.cljs$core$IIndexed$_nth$arity$2(null,i__34899_34903);var obj_34905 = (js_index[k_34904]);var geom_34906 = (obj_34905["geojson"]);var feature_34907 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Feature",cljs.core.constant$keyword$738,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,(obj_34905["id"]),cljs.core.constant$keyword$657,(obj_34905["compact_name"])], null)], null));var __34908__$1 = (feature_34907["geometry"] = geom_34906);features.push(feature_34907);
{
var G__34909 = seq__34896_34900;
var G__34910 = chunk__34897_34901;
var G__34911 = count__34898_34902;
var G__34912 = (i__34899_34903 + 1);
seq__34896_34900 = G__34909;
chunk__34897_34901 = G__34910;
count__34898_34902 = G__34911;
i__34899_34903 = G__34912;
continue;
}
} else
{var temp__4092__auto___34913 = cljs.core.seq(seq__34896_34900);if(temp__4092__auto___34913)
{var seq__34896_34914__$1 = temp__4092__auto___34913;if(cljs.core.chunked_seq_QMARK_(seq__34896_34914__$1))
{var c__4189__auto___34915 = cljs.core.chunk_first(seq__34896_34914__$1);{
var G__34916 = cljs.core.chunk_rest(seq__34896_34914__$1);
var G__34917 = c__4189__auto___34915;
var G__34918 = cljs.core.count(c__4189__auto___34915);
var G__34919 = 0;
seq__34896_34900 = G__34916;
chunk__34897_34901 = G__34917;
count__34898_34902 = G__34918;
i__34899_34903 = G__34919;
continue;
}
} else
{var k_34920 = cljs.core.first(seq__34896_34914__$1);var obj_34921 = (js_index[k_34920]);var geom_34922 = (obj_34921["geojson"]);var feature_34923 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Feature",cljs.core.constant$keyword$738,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,(obj_34921["id"]),cljs.core.constant$keyword$657,(obj_34921["compact_name"])], null)], null));var __34924__$1 = (feature_34923["geometry"] = geom_34922);features.push(feature_34923);
{
var G__34925 = cljs.core.next(seq__34896_34914__$1);
var G__34926 = null;
var G__34927 = 0;
var G__34928 = 0;
seq__34896_34900 = G__34925;
chunk__34897_34901 = G__34926;
count__34898_34902 = G__34927;
i__34899_34903 = G__34928;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$739,x,cljs.core.constant$keyword$740,y,cljs.core.constant$keyword$741,0,cljs.core.constant$keyword$742,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Point",cljs.core.constant$keyword$743,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
