// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__33860_33864 = cljs.core.seq.call(null,keys);var chunk__33861_33865 = null;var count__33862_33866 = 0;var i__33863_33867 = 0;while(true){
if((i__33863_33867 < count__33862_33866))
{var k_33868 = cljs.core._nth.call(null,chunk__33861_33865,i__33863_33867);var obj_33869 = (js_index[k_33868]);var geom_33870 = (obj_33869["geojson"]);var feature_33871 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33869["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33869["compact_name"])], null)], null));var __33872__$1 = (feature_33871["geometry"] = geom_33870);features.push(feature_33871);
{
var G__33873 = seq__33860_33864;
var G__33874 = chunk__33861_33865;
var G__33875 = count__33862_33866;
var G__33876 = (i__33863_33867 + 1);
seq__33860_33864 = G__33873;
chunk__33861_33865 = G__33874;
count__33862_33866 = G__33875;
i__33863_33867 = G__33876;
continue;
}
} else
{var temp__4092__auto___33877 = cljs.core.seq.call(null,seq__33860_33864);if(temp__4092__auto___33877)
{var seq__33860_33878__$1 = temp__4092__auto___33877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33860_33878__$1))
{var c__4148__auto___33879 = cljs.core.chunk_first.call(null,seq__33860_33878__$1);{
var G__33880 = cljs.core.chunk_rest.call(null,seq__33860_33878__$1);
var G__33881 = c__4148__auto___33879;
var G__33882 = cljs.core.count.call(null,c__4148__auto___33879);
var G__33883 = 0;
seq__33860_33864 = G__33880;
chunk__33861_33865 = G__33881;
count__33862_33866 = G__33882;
i__33863_33867 = G__33883;
continue;
}
} else
{var k_33884 = cljs.core.first.call(null,seq__33860_33878__$1);var obj_33885 = (js_index[k_33884]);var geom_33886 = (obj_33885["geojson"]);var feature_33887 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33885["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33885["compact_name"])], null)], null));var __33888__$1 = (feature_33887["geometry"] = geom_33886);features.push(feature_33887);
{
var G__33889 = cljs.core.next.call(null,seq__33860_33878__$1);
var G__33890 = null;
var G__33891 = 0;
var G__33892 = 0;
seq__33860_33864 = G__33889;
chunk__33861_33865 = G__33890;
count__33862_33866 = G__33891;
i__33863_33867 = G__33892;
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
