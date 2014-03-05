// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__45973_45977 = cljs.core.seq.call(null,keys);var chunk__45974_45978 = null;var count__45975_45979 = 0;var i__45976_45980 = 0;while(true){
if((i__45976_45980 < count__45975_45979))
{var k_45981 = cljs.core._nth.call(null,chunk__45974_45978,i__45976_45980);var obj_45982 = (js_index[k_45981]);var geom_45983 = (obj_45982["geojson"]);var feature_45984 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45982["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45982["compact_name"])], null)], null));var __45985__$1 = (feature_45984["geometry"] = geom_45983);features.push(feature_45984);
{
var G__45986 = seq__45973_45977;
var G__45987 = chunk__45974_45978;
var G__45988 = count__45975_45979;
var G__45989 = (i__45976_45980 + 1);
seq__45973_45977 = G__45986;
chunk__45974_45978 = G__45987;
count__45975_45979 = G__45988;
i__45976_45980 = G__45989;
continue;
}
} else
{var temp__4092__auto___45990 = cljs.core.seq.call(null,seq__45973_45977);if(temp__4092__auto___45990)
{var seq__45973_45991__$1 = temp__4092__auto___45990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45973_45991__$1))
{var c__4189__auto___45992 = cljs.core.chunk_first.call(null,seq__45973_45991__$1);{
var G__45993 = cljs.core.chunk_rest.call(null,seq__45973_45991__$1);
var G__45994 = c__4189__auto___45992;
var G__45995 = cljs.core.count.call(null,c__4189__auto___45992);
var G__45996 = 0;
seq__45973_45977 = G__45993;
chunk__45974_45978 = G__45994;
count__45975_45979 = G__45995;
i__45976_45980 = G__45996;
continue;
}
} else
{var k_45997 = cljs.core.first.call(null,seq__45973_45991__$1);var obj_45998 = (js_index[k_45997]);var geom_45999 = (obj_45998["geojson"]);var feature_46000 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45998["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45998["compact_name"])], null)], null));var __46001__$1 = (feature_46000["geometry"] = geom_45999);features.push(feature_46000);
{
var G__46002 = cljs.core.next.call(null,seq__45973_45991__$1);
var G__46003 = null;
var G__46004 = 0;
var G__46005 = 0;
seq__45973_45977 = G__46002;
chunk__45974_45978 = G__46003;
count__45975_45979 = G__46004;
i__45976_45980 = G__46005;
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
