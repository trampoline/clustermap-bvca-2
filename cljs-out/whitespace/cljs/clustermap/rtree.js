// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__45877_45881 = cljs.core.seq.call(null,keys);var chunk__45878_45882 = null;var count__45879_45883 = 0;var i__45880_45884 = 0;while(true){
if((i__45880_45884 < count__45879_45883))
{var k_45885 = cljs.core._nth.call(null,chunk__45878_45882,i__45880_45884);var obj_45886 = (js_index[k_45885]);var geom_45887 = (obj_45886["geojson"]);var feature_45888 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45886["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45886["compact_name"])], null)], null));var __45889__$1 = (feature_45888["geometry"] = geom_45887);features.push(feature_45888);
{
var G__45890 = seq__45877_45881;
var G__45891 = chunk__45878_45882;
var G__45892 = count__45879_45883;
var G__45893 = (i__45880_45884 + 1);
seq__45877_45881 = G__45890;
chunk__45878_45882 = G__45891;
count__45879_45883 = G__45892;
i__45880_45884 = G__45893;
continue;
}
} else
{var temp__4092__auto___45894 = cljs.core.seq.call(null,seq__45877_45881);if(temp__4092__auto___45894)
{var seq__45877_45895__$1 = temp__4092__auto___45894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45877_45895__$1))
{var c__4189__auto___45896 = cljs.core.chunk_first.call(null,seq__45877_45895__$1);{
var G__45897 = cljs.core.chunk_rest.call(null,seq__45877_45895__$1);
var G__45898 = c__4189__auto___45896;
var G__45899 = cljs.core.count.call(null,c__4189__auto___45896);
var G__45900 = 0;
seq__45877_45881 = G__45897;
chunk__45878_45882 = G__45898;
count__45879_45883 = G__45899;
i__45880_45884 = G__45900;
continue;
}
} else
{var k_45901 = cljs.core.first.call(null,seq__45877_45895__$1);var obj_45902 = (js_index[k_45901]);var geom_45903 = (obj_45902["geojson"]);var feature_45904 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45902["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45902["compact_name"])], null)], null));var __45905__$1 = (feature_45904["geometry"] = geom_45903);features.push(feature_45904);
{
var G__45906 = cljs.core.next.call(null,seq__45877_45895__$1);
var G__45907 = null;
var G__45908 = 0;
var G__45909 = 0;
seq__45877_45881 = G__45906;
chunk__45878_45882 = G__45907;
count__45879_45883 = G__45908;
i__45880_45884 = G__45909;
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
