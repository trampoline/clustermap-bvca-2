// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12628_12632 = cljs.core.seq.call(null,keys);var chunk__12629_12633 = null;var count__12630_12634 = 0;var i__12631_12635 = 0;while(true){
if((i__12631_12635 < count__12630_12634))
{var k_12636 = cljs.core._nth.call(null,chunk__12629_12633,i__12631_12635);var obj_12637 = (js_index[k_12636]);var geom_12638 = (obj_12637["geojson"]);var feature_12639 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12637["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12637["compact_name"])], null)], null));var __12640__$1 = (feature_12639["geometry"] = geom_12638);features.push(feature_12639);
{
var G__12641 = seq__12628_12632;
var G__12642 = chunk__12629_12633;
var G__12643 = count__12630_12634;
var G__12644 = (i__12631_12635 + 1);
seq__12628_12632 = G__12641;
chunk__12629_12633 = G__12642;
count__12630_12634 = G__12643;
i__12631_12635 = G__12644;
continue;
}
} else
{var temp__4092__auto___12645 = cljs.core.seq.call(null,seq__12628_12632);if(temp__4092__auto___12645)
{var seq__12628_12646__$1 = temp__4092__auto___12645;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12628_12646__$1))
{var c__4148__auto___12647 = cljs.core.chunk_first.call(null,seq__12628_12646__$1);{
var G__12648 = cljs.core.chunk_rest.call(null,seq__12628_12646__$1);
var G__12649 = c__4148__auto___12647;
var G__12650 = cljs.core.count.call(null,c__4148__auto___12647);
var G__12651 = 0;
seq__12628_12632 = G__12648;
chunk__12629_12633 = G__12649;
count__12630_12634 = G__12650;
i__12631_12635 = G__12651;
continue;
}
} else
{var k_12652 = cljs.core.first.call(null,seq__12628_12646__$1);var obj_12653 = (js_index[k_12652]);var geom_12654 = (obj_12653["geojson"]);var feature_12655 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12653["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12653["compact_name"])], null)], null));var __12656__$1 = (feature_12655["geometry"] = geom_12654);features.push(feature_12655);
{
var G__12657 = cljs.core.next.call(null,seq__12628_12646__$1);
var G__12658 = null;
var G__12659 = 0;
var G__12660 = 0;
seq__12628_12632 = G__12657;
chunk__12629_12633 = G__12658;
count__12630_12634 = G__12659;
i__12631_12635 = G__12660;
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