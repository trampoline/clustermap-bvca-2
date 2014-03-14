// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23939_23943 = cljs.core.seq.call(null,keys);var chunk__23940_23944 = null;var count__23941_23945 = 0;var i__23942_23946 = 0;while(true){
if((i__23942_23946 < count__23941_23945))
{var k_23947 = cljs.core._nth.call(null,chunk__23940_23944,i__23942_23946);var obj_23948 = (js_index[k_23947]);var geom_23949 = (obj_23948["geojson"]);var feature_23950 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23948["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23948["compact_name"])], null)], null));var __23951__$1 = (feature_23950["geometry"] = geom_23949);features.push(feature_23950);
{
var G__23952 = seq__23939_23943;
var G__23953 = chunk__23940_23944;
var G__23954 = count__23941_23945;
var G__23955 = (i__23942_23946 + 1);
seq__23939_23943 = G__23952;
chunk__23940_23944 = G__23953;
count__23941_23945 = G__23954;
i__23942_23946 = G__23955;
continue;
}
} else
{var temp__4092__auto___23956 = cljs.core.seq.call(null,seq__23939_23943);if(temp__4092__auto___23956)
{var seq__23939_23957__$1 = temp__4092__auto___23956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23939_23957__$1))
{var c__4189__auto___23958 = cljs.core.chunk_first.call(null,seq__23939_23957__$1);{
var G__23959 = cljs.core.chunk_rest.call(null,seq__23939_23957__$1);
var G__23960 = c__4189__auto___23958;
var G__23961 = cljs.core.count.call(null,c__4189__auto___23958);
var G__23962 = 0;
seq__23939_23943 = G__23959;
chunk__23940_23944 = G__23960;
count__23941_23945 = G__23961;
i__23942_23946 = G__23962;
continue;
}
} else
{var k_23963 = cljs.core.first.call(null,seq__23939_23957__$1);var obj_23964 = (js_index[k_23963]);var geom_23965 = (obj_23964["geojson"]);var feature_23966 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23964["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23964["compact_name"])], null)], null));var __23967__$1 = (feature_23966["geometry"] = geom_23965);features.push(feature_23966);
{
var G__23968 = cljs.core.next.call(null,seq__23939_23957__$1);
var G__23969 = null;
var G__23970 = 0;
var G__23971 = 0;
seq__23939_23943 = G__23968;
chunk__23940_23944 = G__23969;
count__23941_23945 = G__23970;
i__23942_23946 = G__23971;
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