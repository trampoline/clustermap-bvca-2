// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$584,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34980_34984 = cljs.core.seq(keys);var chunk__34981_34985 = null;var count__34982_34986 = 0;var i__34983_34987 = 0;while(true){
if((i__34983_34987 < count__34982_34986))
{var k_34988 = chunk__34981_34985.cljs$core$IIndexed$_nth$arity$2(null,i__34983_34987);var obj_34989 = (js_index[k_34988]);var geom_34990 = (obj_34989["geojson"]);var feature_34991 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Feature",cljs.core.constant$keyword$740,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,(obj_34989["id"]),cljs.core.constant$keyword$657,(obj_34989["compact_name"])], null)], null));var __34992__$1 = (feature_34991["geometry"] = geom_34990);features.push(feature_34991);
{
var G__34993 = seq__34980_34984;
var G__34994 = chunk__34981_34985;
var G__34995 = count__34982_34986;
var G__34996 = (i__34983_34987 + 1);
seq__34980_34984 = G__34993;
chunk__34981_34985 = G__34994;
count__34982_34986 = G__34995;
i__34983_34987 = G__34996;
continue;
}
} else
{var temp__4092__auto___34997 = cljs.core.seq(seq__34980_34984);if(temp__4092__auto___34997)
{var seq__34980_34998__$1 = temp__4092__auto___34997;if(cljs.core.chunked_seq_QMARK_(seq__34980_34998__$1))
{var c__4189__auto___34999 = cljs.core.chunk_first(seq__34980_34998__$1);{
var G__35000 = cljs.core.chunk_rest(seq__34980_34998__$1);
var G__35001 = c__4189__auto___34999;
var G__35002 = cljs.core.count(c__4189__auto___34999);
var G__35003 = 0;
seq__34980_34984 = G__35000;
chunk__34981_34985 = G__35001;
count__34982_34986 = G__35002;
i__34983_34987 = G__35003;
continue;
}
} else
{var k_35004 = cljs.core.first(seq__34980_34998__$1);var obj_35005 = (js_index[k_35004]);var geom_35006 = (obj_35005["geojson"]);var feature_35007 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Feature",cljs.core.constant$keyword$740,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$580,(obj_35005["id"]),cljs.core.constant$keyword$657,(obj_35005["compact_name"])], null)], null));var __35008__$1 = (feature_35007["geometry"] = geom_35006);features.push(feature_35007);
{
var G__35009 = cljs.core.next(seq__34980_34998__$1);
var G__35010 = null;
var G__35011 = 0;
var G__35012 = 0;
seq__34980_34984 = G__35009;
chunk__34981_34985 = G__35010;
count__34982_34986 = G__35011;
i__34983_34987 = G__35012;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$741,x,cljs.core.constant$keyword$742,y,cljs.core.constant$keyword$743,0,cljs.core.constant$keyword$744,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"Point",cljs.core.constant$keyword$745,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
