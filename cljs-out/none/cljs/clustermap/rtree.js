// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23907_23911 = cljs.core.seq.call(null,keys);var chunk__23908_23912 = null;var count__23909_23913 = 0;var i__23910_23914 = 0;while(true){
if((i__23910_23914 < count__23909_23913))
{var k_23915 = cljs.core._nth.call(null,chunk__23908_23912,i__23910_23914);var obj_23916 = (js_index[k_23915]);var geom_23917 = (obj_23916["geojson"]);var feature_23918 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23916["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23916["compact_name"])], null)], null));var __23919__$1 = (feature_23918["geometry"] = geom_23917);features.push(feature_23918);
{
var G__23920 = seq__23907_23911;
var G__23921 = chunk__23908_23912;
var G__23922 = count__23909_23913;
var G__23923 = (i__23910_23914 + 1);
seq__23907_23911 = G__23920;
chunk__23908_23912 = G__23921;
count__23909_23913 = G__23922;
i__23910_23914 = G__23923;
continue;
}
} else
{var temp__4092__auto___23924 = cljs.core.seq.call(null,seq__23907_23911);if(temp__4092__auto___23924)
{var seq__23907_23925__$1 = temp__4092__auto___23924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23907_23925__$1))
{var c__4189__auto___23926 = cljs.core.chunk_first.call(null,seq__23907_23925__$1);{
var G__23927 = cljs.core.chunk_rest.call(null,seq__23907_23925__$1);
var G__23928 = c__4189__auto___23926;
var G__23929 = cljs.core.count.call(null,c__4189__auto___23926);
var G__23930 = 0;
seq__23907_23911 = G__23927;
chunk__23908_23912 = G__23928;
count__23909_23913 = G__23929;
i__23910_23914 = G__23930;
continue;
}
} else
{var k_23931 = cljs.core.first.call(null,seq__23907_23925__$1);var obj_23932 = (js_index[k_23931]);var geom_23933 = (obj_23932["geojson"]);var feature_23934 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23932["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23932["compact_name"])], null)], null));var __23935__$1 = (feature_23934["geometry"] = geom_23933);features.push(feature_23934);
{
var G__23936 = cljs.core.next.call(null,seq__23907_23925__$1);
var G__23937 = null;
var G__23938 = 0;
var G__23939 = 0;
seq__23907_23911 = G__23936;
chunk__23908_23912 = G__23937;
count__23909_23913 = G__23938;
i__23910_23914 = G__23939;
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

//# sourceMappingURL=rtree.js.map