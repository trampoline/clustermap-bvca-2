// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$584,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34860_34864 = cljs.core.seq(keys);var chunk__34861_34865 = null;var count__34862_34866 = 0;var i__34863_34867 = 0;while(true){
if((i__34863_34867 < count__34862_34866))
{var k_34868 = chunk__34861_34865.cljs$core$IIndexed$_nth$arity$2(null,i__34863_34867);var obj_34869 = (js_index[k_34868]);var geom_34870 = (obj_34869["geojson"]);var feature_34871 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Feature",cljs.core.constant$keyword$737,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,(obj_34869["id"]),cljs.core.constant$keyword$656,(obj_34869["compact_name"])], null)], null));var __34872__$1 = (feature_34871["geometry"] = geom_34870);features.push(feature_34871);
{
var G__34873 = seq__34860_34864;
var G__34874 = chunk__34861_34865;
var G__34875 = count__34862_34866;
var G__34876 = (i__34863_34867 + 1);
seq__34860_34864 = G__34873;
chunk__34861_34865 = G__34874;
count__34862_34866 = G__34875;
i__34863_34867 = G__34876;
continue;
}
} else
{var temp__4092__auto___34877 = cljs.core.seq(seq__34860_34864);if(temp__4092__auto___34877)
{var seq__34860_34878__$1 = temp__4092__auto___34877;if(cljs.core.chunked_seq_QMARK_(seq__34860_34878__$1))
{var c__4189__auto___34879 = cljs.core.chunk_first(seq__34860_34878__$1);{
var G__34880 = cljs.core.chunk_rest(seq__34860_34878__$1);
var G__34881 = c__4189__auto___34879;
var G__34882 = cljs.core.count(c__4189__auto___34879);
var G__34883 = 0;
seq__34860_34864 = G__34880;
chunk__34861_34865 = G__34881;
count__34862_34866 = G__34882;
i__34863_34867 = G__34883;
continue;
}
} else
{var k_34884 = cljs.core.first(seq__34860_34878__$1);var obj_34885 = (js_index[k_34884]);var geom_34886 = (obj_34885["geojson"]);var feature_34887 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Feature",cljs.core.constant$keyword$737,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,(obj_34885["id"]),cljs.core.constant$keyword$656,(obj_34885["compact_name"])], null)], null));var __34888__$1 = (feature_34887["geometry"] = geom_34886);features.push(feature_34887);
{
var G__34889 = cljs.core.next(seq__34860_34878__$1);
var G__34890 = null;
var G__34891 = 0;
var G__34892 = 0;
seq__34860_34864 = G__34889;
chunk__34861_34865 = G__34890;
count__34862_34866 = G__34891;
i__34863_34867 = G__34892;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$738,x,cljs.core.constant$keyword$739,y,cljs.core.constant$keyword$740,0,cljs.core.constant$keyword$741,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Point",cljs.core.constant$keyword$742,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
