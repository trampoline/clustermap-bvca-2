// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__45957_45961 = cljs.core.seq.call(null,keys);var chunk__45958_45962 = null;var count__45959_45963 = 0;var i__45960_45964 = 0;while(true){
if((i__45960_45964 < count__45959_45963))
{var k_45965 = cljs.core._nth.call(null,chunk__45958_45962,i__45960_45964);var obj_45966 = (js_index[k_45965]);var geom_45967 = (obj_45966["geojson"]);var feature_45968 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45966["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45966["compact_name"])], null)], null));var __45969__$1 = (feature_45968["geometry"] = geom_45967);features.push(feature_45968);
{
var G__45970 = seq__45957_45961;
var G__45971 = chunk__45958_45962;
var G__45972 = count__45959_45963;
var G__45973 = (i__45960_45964 + 1);
seq__45957_45961 = G__45970;
chunk__45958_45962 = G__45971;
count__45959_45963 = G__45972;
i__45960_45964 = G__45973;
continue;
}
} else
{var temp__4092__auto___45974 = cljs.core.seq.call(null,seq__45957_45961);if(temp__4092__auto___45974)
{var seq__45957_45975__$1 = temp__4092__auto___45974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45957_45975__$1))
{var c__4189__auto___45976 = cljs.core.chunk_first.call(null,seq__45957_45975__$1);{
var G__45977 = cljs.core.chunk_rest.call(null,seq__45957_45975__$1);
var G__45978 = c__4189__auto___45976;
var G__45979 = cljs.core.count.call(null,c__4189__auto___45976);
var G__45980 = 0;
seq__45957_45961 = G__45977;
chunk__45958_45962 = G__45978;
count__45959_45963 = G__45979;
i__45960_45964 = G__45980;
continue;
}
} else
{var k_45981 = cljs.core.first.call(null,seq__45957_45975__$1);var obj_45982 = (js_index[k_45981]);var geom_45983 = (obj_45982["geojson"]);var feature_45984 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45982["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45982["compact_name"])], null)], null));var __45985__$1 = (feature_45984["geometry"] = geom_45983);features.push(feature_45984);
{
var G__45986 = cljs.core.next.call(null,seq__45957_45975__$1);
var G__45987 = null;
var G__45988 = 0;
var G__45989 = 0;
seq__45957_45961 = G__45986;
chunk__45958_45962 = G__45987;
count__45959_45963 = G__45988;
i__45960_45964 = G__45989;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"w","w",1013904361),0,new cljs.core.Keyword(null,"h","h",1013904346),0], null)));return cljs.core.filter.call(null,(function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
