// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12626_12630 = cljs.core.seq.call(null,keys);var chunk__12627_12631 = null;var count__12628_12632 = 0;var i__12629_12633 = 0;while(true){
if((i__12629_12633 < count__12628_12632))
{var k_12634 = cljs.core._nth.call(null,chunk__12627_12631,i__12629_12633);var obj_12635 = (js_index[k_12634]);var geom_12636 = (obj_12635["geojson"]);var feature_12637 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12635["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12635["compact_name"])], null)], null));var __12638__$1 = (feature_12637["geometry"] = geom_12636);features.push(feature_12637);
{
var G__12639 = seq__12626_12630;
var G__12640 = chunk__12627_12631;
var G__12641 = count__12628_12632;
var G__12642 = (i__12629_12633 + 1);
seq__12626_12630 = G__12639;
chunk__12627_12631 = G__12640;
count__12628_12632 = G__12641;
i__12629_12633 = G__12642;
continue;
}
} else
{var temp__4092__auto___12643 = cljs.core.seq.call(null,seq__12626_12630);if(temp__4092__auto___12643)
{var seq__12626_12644__$1 = temp__4092__auto___12643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12626_12644__$1))
{var c__4148__auto___12645 = cljs.core.chunk_first.call(null,seq__12626_12644__$1);{
var G__12646 = cljs.core.chunk_rest.call(null,seq__12626_12644__$1);
var G__12647 = c__4148__auto___12645;
var G__12648 = cljs.core.count.call(null,c__4148__auto___12645);
var G__12649 = 0;
seq__12626_12630 = G__12646;
chunk__12627_12631 = G__12647;
count__12628_12632 = G__12648;
i__12629_12633 = G__12649;
continue;
}
} else
{var k_12650 = cljs.core.first.call(null,seq__12626_12644__$1);var obj_12651 = (js_index[k_12650]);var geom_12652 = (obj_12651["geojson"]);var feature_12653 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12651["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12651["compact_name"])], null)], null));var __12654__$1 = (feature_12653["geometry"] = geom_12652);features.push(feature_12653);
{
var G__12655 = cljs.core.next.call(null,seq__12626_12644__$1);
var G__12656 = null;
var G__12657 = 0;
var G__12658 = 0;
seq__12626_12630 = G__12655;
chunk__12627_12631 = G__12656;
count__12628_12632 = G__12657;
i__12629_12633 = G__12658;
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