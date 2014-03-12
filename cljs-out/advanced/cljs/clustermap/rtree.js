// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$584,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34968_34972 = cljs.core.seq(keys);var chunk__34969_34973 = null;var count__34970_34974 = 0;var i__34971_34975 = 0;while(true){
if((i__34971_34975 < count__34970_34974))
{var k_34976 = chunk__34969_34973.cljs$core$IIndexed$_nth$arity$2(null,i__34971_34975);var obj_34977 = (js_index[k_34976]);var geom_34978 = (obj_34977["geojson"]);var feature_34979 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Feature",cljs.core.constant$keyword$738,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,(obj_34977["id"]),cljs.core.constant$keyword$657,(obj_34977["compact_name"])], null)], null));var __34980__$1 = (feature_34979["geometry"] = geom_34978);features.push(feature_34979);
{
var G__34981 = seq__34968_34972;
var G__34982 = chunk__34969_34973;
var G__34983 = count__34970_34974;
var G__34984 = (i__34971_34975 + 1);
seq__34968_34972 = G__34981;
chunk__34969_34973 = G__34982;
count__34970_34974 = G__34983;
i__34971_34975 = G__34984;
continue;
}
} else
{var temp__4092__auto___34985 = cljs.core.seq(seq__34968_34972);if(temp__4092__auto___34985)
{var seq__34968_34986__$1 = temp__4092__auto___34985;if(cljs.core.chunked_seq_QMARK_(seq__34968_34986__$1))
{var c__4189__auto___34987 = cljs.core.chunk_first(seq__34968_34986__$1);{
var G__34988 = cljs.core.chunk_rest(seq__34968_34986__$1);
var G__34989 = c__4189__auto___34987;
var G__34990 = cljs.core.count(c__4189__auto___34987);
var G__34991 = 0;
seq__34968_34972 = G__34988;
chunk__34969_34973 = G__34989;
count__34970_34974 = G__34990;
i__34971_34975 = G__34991;
continue;
}
} else
{var k_34992 = cljs.core.first(seq__34968_34986__$1);var obj_34993 = (js_index[k_34992]);var geom_34994 = (obj_34993["geojson"]);var feature_34995 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Feature",cljs.core.constant$keyword$738,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,(obj_34993["id"]),cljs.core.constant$keyword$657,(obj_34993["compact_name"])], null)], null));var __34996__$1 = (feature_34995["geometry"] = geom_34994);features.push(feature_34995);
{
var G__34997 = cljs.core.next(seq__34968_34986__$1);
var G__34998 = null;
var G__34999 = 0;
var G__35000 = 0;
seq__34968_34972 = G__34997;
chunk__34969_34973 = G__34998;
count__34970_34974 = G__34999;
i__34971_34975 = G__35000;
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
