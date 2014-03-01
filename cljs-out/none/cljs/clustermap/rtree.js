// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12904_12908 = cljs.core.seq.call(null,keys);var chunk__12905_12909 = null;var count__12906_12910 = 0;var i__12907_12911 = 0;while(true){
if((i__12907_12911 < count__12906_12910))
{var k_12912 = cljs.core._nth.call(null,chunk__12905_12909,i__12907_12911);var obj_12913 = (js_index[k_12912]);var geom_12914 = (obj_12913["geojson"]);var feature_12915 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12913["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12913["compact_name"])], null)], null));var __12916__$1 = (feature_12915["geometry"] = geom_12914);features.push(feature_12915);
{
var G__12917 = seq__12904_12908;
var G__12918 = chunk__12905_12909;
var G__12919 = count__12906_12910;
var G__12920 = (i__12907_12911 + 1);
seq__12904_12908 = G__12917;
chunk__12905_12909 = G__12918;
count__12906_12910 = G__12919;
i__12907_12911 = G__12920;
continue;
}
} else
{var temp__4092__auto___12921 = cljs.core.seq.call(null,seq__12904_12908);if(temp__4092__auto___12921)
{var seq__12904_12922__$1 = temp__4092__auto___12921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12904_12922__$1))
{var c__4148__auto___12923 = cljs.core.chunk_first.call(null,seq__12904_12922__$1);{
var G__12924 = cljs.core.chunk_rest.call(null,seq__12904_12922__$1);
var G__12925 = c__4148__auto___12923;
var G__12926 = cljs.core.count.call(null,c__4148__auto___12923);
var G__12927 = 0;
seq__12904_12908 = G__12924;
chunk__12905_12909 = G__12925;
count__12906_12910 = G__12926;
i__12907_12911 = G__12927;
continue;
}
} else
{var k_12928 = cljs.core.first.call(null,seq__12904_12922__$1);var obj_12929 = (js_index[k_12928]);var geom_12930 = (obj_12929["geojson"]);var feature_12931 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12929["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12929["compact_name"])], null)], null));var __12932__$1 = (feature_12931["geometry"] = geom_12930);features.push(feature_12931);
{
var G__12933 = cljs.core.next.call(null,seq__12904_12922__$1);
var G__12934 = null;
var G__12935 = 0;
var G__12936 = 0;
seq__12904_12908 = G__12933;
chunk__12905_12909 = G__12934;
count__12906_12910 = G__12935;
i__12907_12911 = G__12936;
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