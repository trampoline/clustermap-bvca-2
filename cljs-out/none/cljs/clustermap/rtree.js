// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12650_12654 = cljs.core.seq.call(null,keys);var chunk__12651_12655 = null;var count__12652_12656 = 0;var i__12653_12657 = 0;while(true){
if((i__12653_12657 < count__12652_12656))
{var k_12658 = cljs.core._nth.call(null,chunk__12651_12655,i__12653_12657);var obj_12659 = (js_index[k_12658]);var geom_12660 = (obj_12659["geojson"]);var feature_12661 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12659["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12659["compact_name"])], null)], null));var __12662__$1 = (feature_12661["geometry"] = geom_12660);features.push(feature_12661);
{
var G__12663 = seq__12650_12654;
var G__12664 = chunk__12651_12655;
var G__12665 = count__12652_12656;
var G__12666 = (i__12653_12657 + 1);
seq__12650_12654 = G__12663;
chunk__12651_12655 = G__12664;
count__12652_12656 = G__12665;
i__12653_12657 = G__12666;
continue;
}
} else
{var temp__4092__auto___12667 = cljs.core.seq.call(null,seq__12650_12654);if(temp__4092__auto___12667)
{var seq__12650_12668__$1 = temp__4092__auto___12667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12650_12668__$1))
{var c__4148__auto___12669 = cljs.core.chunk_first.call(null,seq__12650_12668__$1);{
var G__12670 = cljs.core.chunk_rest.call(null,seq__12650_12668__$1);
var G__12671 = c__4148__auto___12669;
var G__12672 = cljs.core.count.call(null,c__4148__auto___12669);
var G__12673 = 0;
seq__12650_12654 = G__12670;
chunk__12651_12655 = G__12671;
count__12652_12656 = G__12672;
i__12653_12657 = G__12673;
continue;
}
} else
{var k_12674 = cljs.core.first.call(null,seq__12650_12668__$1);var obj_12675 = (js_index[k_12674]);var geom_12676 = (obj_12675["geojson"]);var feature_12677 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12675["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12675["compact_name"])], null)], null));var __12678__$1 = (feature_12677["geometry"] = geom_12676);features.push(feature_12677);
{
var G__12679 = cljs.core.next.call(null,seq__12650_12668__$1);
var G__12680 = null;
var G__12681 = 0;
var G__12682 = 0;
seq__12650_12654 = G__12679;
chunk__12651_12655 = G__12680;
count__12652_12656 = G__12681;
i__12653_12657 = G__12682;
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