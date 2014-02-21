// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12654_12658 = cljs.core.seq.call(null,keys);var chunk__12655_12659 = null;var count__12656_12660 = 0;var i__12657_12661 = 0;while(true){
if((i__12657_12661 < count__12656_12660))
{var k_12662 = cljs.core._nth.call(null,chunk__12655_12659,i__12657_12661);var obj_12663 = (js_index[k_12662]);var geom_12664 = (obj_12663["geojson"]);var feature_12665 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12663["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12663["compact_name"])], null)], null));var __12666__$1 = (feature_12665["geometry"] = geom_12664);features.push(feature_12665);
{
var G__12667 = seq__12654_12658;
var G__12668 = chunk__12655_12659;
var G__12669 = count__12656_12660;
var G__12670 = (i__12657_12661 + 1);
seq__12654_12658 = G__12667;
chunk__12655_12659 = G__12668;
count__12656_12660 = G__12669;
i__12657_12661 = G__12670;
continue;
}
} else
{var temp__4092__auto___12671 = cljs.core.seq.call(null,seq__12654_12658);if(temp__4092__auto___12671)
{var seq__12654_12672__$1 = temp__4092__auto___12671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12654_12672__$1))
{var c__4148__auto___12673 = cljs.core.chunk_first.call(null,seq__12654_12672__$1);{
var G__12674 = cljs.core.chunk_rest.call(null,seq__12654_12672__$1);
var G__12675 = c__4148__auto___12673;
var G__12676 = cljs.core.count.call(null,c__4148__auto___12673);
var G__12677 = 0;
seq__12654_12658 = G__12674;
chunk__12655_12659 = G__12675;
count__12656_12660 = G__12676;
i__12657_12661 = G__12677;
continue;
}
} else
{var k_12678 = cljs.core.first.call(null,seq__12654_12672__$1);var obj_12679 = (js_index[k_12678]);var geom_12680 = (obj_12679["geojson"]);var feature_12681 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12679["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12679["compact_name"])], null)], null));var __12682__$1 = (feature_12681["geometry"] = geom_12680);features.push(feature_12681);
{
var G__12683 = cljs.core.next.call(null,seq__12654_12672__$1);
var G__12684 = null;
var G__12685 = 0;
var G__12686 = 0;
seq__12654_12658 = G__12683;
chunk__12655_12659 = G__12684;
count__12656_12660 = G__12685;
i__12657_12661 = G__12686;
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