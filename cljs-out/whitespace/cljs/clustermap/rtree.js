// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__33725_33729 = cljs.core.seq.call(null,keys);var chunk__33726_33730 = null;var count__33727_33731 = 0;var i__33728_33732 = 0;while(true){
if((i__33728_33732 < count__33727_33731))
{var k_33733 = cljs.core._nth.call(null,chunk__33726_33730,i__33728_33732);var obj_33734 = (js_index[k_33733]);var geom_33735 = (obj_33734["geojson"]);var feature_33736 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33734["id"])], null)], null));var __33737__$1 = (feature_33736["geometry"] = geom_33735);features.push(feature_33736);
{
var G__33738 = seq__33725_33729;
var G__33739 = chunk__33726_33730;
var G__33740 = count__33727_33731;
var G__33741 = (i__33728_33732 + 1);
seq__33725_33729 = G__33738;
chunk__33726_33730 = G__33739;
count__33727_33731 = G__33740;
i__33728_33732 = G__33741;
continue;
}
} else
{var temp__4092__auto___33742 = cljs.core.seq.call(null,seq__33725_33729);if(temp__4092__auto___33742)
{var seq__33725_33743__$1 = temp__4092__auto___33742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33725_33743__$1))
{var c__4148__auto___33744 = cljs.core.chunk_first.call(null,seq__33725_33743__$1);{
var G__33745 = cljs.core.chunk_rest.call(null,seq__33725_33743__$1);
var G__33746 = c__4148__auto___33744;
var G__33747 = cljs.core.count.call(null,c__4148__auto___33744);
var G__33748 = 0;
seq__33725_33729 = G__33745;
chunk__33726_33730 = G__33746;
count__33727_33731 = G__33747;
i__33728_33732 = G__33748;
continue;
}
} else
{var k_33749 = cljs.core.first.call(null,seq__33725_33743__$1);var obj_33750 = (js_index[k_33749]);var geom_33751 = (obj_33750["geojson"]);var feature_33752 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33750["id"])], null)], null));var __33753__$1 = (feature_33752["geometry"] = geom_33751);features.push(feature_33752);
{
var G__33754 = cljs.core.next.call(null,seq__33725_33743__$1);
var G__33755 = null;
var G__33756 = 0;
var G__33757 = 0;
seq__33725_33729 = G__33754;
chunk__33726_33730 = G__33755;
count__33727_33731 = G__33756;
i__33728_33732 = G__33757;
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
