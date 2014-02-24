// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12630_12634 = cljs.core.seq.call(null,keys);var chunk__12631_12635 = null;var count__12632_12636 = 0;var i__12633_12637 = 0;while(true){
if((i__12633_12637 < count__12632_12636))
{var k_12638 = cljs.core._nth.call(null,chunk__12631_12635,i__12633_12637);var obj_12639 = (js_index[k_12638]);var geom_12640 = (obj_12639["geojson"]);var feature_12641 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12639["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12639["compact_name"])], null)], null));var __12642__$1 = (feature_12641["geometry"] = geom_12640);features.push(feature_12641);
{
var G__12643 = seq__12630_12634;
var G__12644 = chunk__12631_12635;
var G__12645 = count__12632_12636;
var G__12646 = (i__12633_12637 + 1);
seq__12630_12634 = G__12643;
chunk__12631_12635 = G__12644;
count__12632_12636 = G__12645;
i__12633_12637 = G__12646;
continue;
}
} else
{var temp__4092__auto___12647 = cljs.core.seq.call(null,seq__12630_12634);if(temp__4092__auto___12647)
{var seq__12630_12648__$1 = temp__4092__auto___12647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12630_12648__$1))
{var c__4148__auto___12649 = cljs.core.chunk_first.call(null,seq__12630_12648__$1);{
var G__12650 = cljs.core.chunk_rest.call(null,seq__12630_12648__$1);
var G__12651 = c__4148__auto___12649;
var G__12652 = cljs.core.count.call(null,c__4148__auto___12649);
var G__12653 = 0;
seq__12630_12634 = G__12650;
chunk__12631_12635 = G__12651;
count__12632_12636 = G__12652;
i__12633_12637 = G__12653;
continue;
}
} else
{var k_12654 = cljs.core.first.call(null,seq__12630_12648__$1);var obj_12655 = (js_index[k_12654]);var geom_12656 = (obj_12655["geojson"]);var feature_12657 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12655["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12655["compact_name"])], null)], null));var __12658__$1 = (feature_12657["geometry"] = geom_12656);features.push(feature_12657);
{
var G__12659 = cljs.core.next.call(null,seq__12630_12648__$1);
var G__12660 = null;
var G__12661 = 0;
var G__12662 = 0;
seq__12630_12634 = G__12659;
chunk__12631_12635 = G__12660;
count__12632_12636 = G__12661;
i__12633_12637 = G__12662;
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