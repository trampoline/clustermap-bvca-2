// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23931_23935 = cljs.core.seq.call(null,keys);var chunk__23932_23936 = null;var count__23933_23937 = 0;var i__23934_23938 = 0;while(true){
if((i__23934_23938 < count__23933_23937))
{var k_23939 = cljs.core._nth.call(null,chunk__23932_23936,i__23934_23938);var obj_23940 = (js_index[k_23939]);var geom_23941 = (obj_23940["geojson"]);var feature_23942 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23940["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23940["compact_name"])], null)], null));var __23943__$1 = (feature_23942["geometry"] = geom_23941);features.push(feature_23942);
{
var G__23944 = seq__23931_23935;
var G__23945 = chunk__23932_23936;
var G__23946 = count__23933_23937;
var G__23947 = (i__23934_23938 + 1);
seq__23931_23935 = G__23944;
chunk__23932_23936 = G__23945;
count__23933_23937 = G__23946;
i__23934_23938 = G__23947;
continue;
}
} else
{var temp__4092__auto___23948 = cljs.core.seq.call(null,seq__23931_23935);if(temp__4092__auto___23948)
{var seq__23931_23949__$1 = temp__4092__auto___23948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23931_23949__$1))
{var c__4189__auto___23950 = cljs.core.chunk_first.call(null,seq__23931_23949__$1);{
var G__23951 = cljs.core.chunk_rest.call(null,seq__23931_23949__$1);
var G__23952 = c__4189__auto___23950;
var G__23953 = cljs.core.count.call(null,c__4189__auto___23950);
var G__23954 = 0;
seq__23931_23935 = G__23951;
chunk__23932_23936 = G__23952;
count__23933_23937 = G__23953;
i__23934_23938 = G__23954;
continue;
}
} else
{var k_23955 = cljs.core.first.call(null,seq__23931_23949__$1);var obj_23956 = (js_index[k_23955]);var geom_23957 = (obj_23956["geojson"]);var feature_23958 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23956["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23956["compact_name"])], null)], null));var __23959__$1 = (feature_23958["geometry"] = geom_23957);features.push(feature_23958);
{
var G__23960 = cljs.core.next.call(null,seq__23931_23949__$1);
var G__23961 = null;
var G__23962 = 0;
var G__23963 = 0;
seq__23931_23935 = G__23960;
chunk__23932_23936 = G__23961;
count__23933_23937 = G__23962;
i__23934_23938 = G__23963;
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