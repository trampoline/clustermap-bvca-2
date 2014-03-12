// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__45861_45865 = cljs.core.seq.call(null,keys);var chunk__45862_45866 = null;var count__45863_45867 = 0;var i__45864_45868 = 0;while(true){
if((i__45864_45868 < count__45863_45867))
{var k_45869 = cljs.core._nth.call(null,chunk__45862_45866,i__45864_45868);var obj_45870 = (js_index[k_45869]);var geom_45871 = (obj_45870["geojson"]);var feature_45872 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45870["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45870["compact_name"])], null)], null));var __45873__$1 = (feature_45872["geometry"] = geom_45871);features.push(feature_45872);
{
var G__45874 = seq__45861_45865;
var G__45875 = chunk__45862_45866;
var G__45876 = count__45863_45867;
var G__45877 = (i__45864_45868 + 1);
seq__45861_45865 = G__45874;
chunk__45862_45866 = G__45875;
count__45863_45867 = G__45876;
i__45864_45868 = G__45877;
continue;
}
} else
{var temp__4092__auto___45878 = cljs.core.seq.call(null,seq__45861_45865);if(temp__4092__auto___45878)
{var seq__45861_45879__$1 = temp__4092__auto___45878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45861_45879__$1))
{var c__4189__auto___45880 = cljs.core.chunk_first.call(null,seq__45861_45879__$1);{
var G__45881 = cljs.core.chunk_rest.call(null,seq__45861_45879__$1);
var G__45882 = c__4189__auto___45880;
var G__45883 = cljs.core.count.call(null,c__4189__auto___45880);
var G__45884 = 0;
seq__45861_45865 = G__45881;
chunk__45862_45866 = G__45882;
count__45863_45867 = G__45883;
i__45864_45868 = G__45884;
continue;
}
} else
{var k_45885 = cljs.core.first.call(null,seq__45861_45879__$1);var obj_45886 = (js_index[k_45885]);var geom_45887 = (obj_45886["geojson"]);var feature_45888 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45886["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45886["compact_name"])], null)], null));var __45889__$1 = (feature_45888["geometry"] = geom_45887);features.push(feature_45888);
{
var G__45890 = cljs.core.next.call(null,seq__45861_45879__$1);
var G__45891 = null;
var G__45892 = 0;
var G__45893 = 0;
seq__45861_45865 = G__45890;
chunk__45862_45866 = G__45891;
count__45863_45867 = G__45892;
i__45864_45868 = G__45893;
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
