// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12902_12906 = cljs.core.seq.call(null,keys);var chunk__12903_12907 = null;var count__12904_12908 = 0;var i__12905_12909 = 0;while(true){
if((i__12905_12909 < count__12904_12908))
{var k_12910 = cljs.core._nth.call(null,chunk__12903_12907,i__12905_12909);var obj_12911 = (js_index[k_12910]);var geom_12912 = (obj_12911["geojson"]);var feature_12913 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12911["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12911["compact_name"])], null)], null));var __12914__$1 = (feature_12913["geometry"] = geom_12912);features.push(feature_12913);
{
var G__12915 = seq__12902_12906;
var G__12916 = chunk__12903_12907;
var G__12917 = count__12904_12908;
var G__12918 = (i__12905_12909 + 1);
seq__12902_12906 = G__12915;
chunk__12903_12907 = G__12916;
count__12904_12908 = G__12917;
i__12905_12909 = G__12918;
continue;
}
} else
{var temp__4092__auto___12919 = cljs.core.seq.call(null,seq__12902_12906);if(temp__4092__auto___12919)
{var seq__12902_12920__$1 = temp__4092__auto___12919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12902_12920__$1))
{var c__4189__auto___12921 = cljs.core.chunk_first.call(null,seq__12902_12920__$1);{
var G__12922 = cljs.core.chunk_rest.call(null,seq__12902_12920__$1);
var G__12923 = c__4189__auto___12921;
var G__12924 = cljs.core.count.call(null,c__4189__auto___12921);
var G__12925 = 0;
seq__12902_12906 = G__12922;
chunk__12903_12907 = G__12923;
count__12904_12908 = G__12924;
i__12905_12909 = G__12925;
continue;
}
} else
{var k_12926 = cljs.core.first.call(null,seq__12902_12920__$1);var obj_12927 = (js_index[k_12926]);var geom_12928 = (obj_12927["geojson"]);var feature_12929 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12927["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12927["compact_name"])], null)], null));var __12930__$1 = (feature_12929["geometry"] = geom_12928);features.push(feature_12929);
{
var G__12931 = cljs.core.next.call(null,seq__12902_12920__$1);
var G__12932 = null;
var G__12933 = 0;
var G__12934 = 0;
seq__12902_12906 = G__12931;
chunk__12903_12907 = G__12932;
count__12904_12908 = G__12933;
i__12905_12909 = G__12934;
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