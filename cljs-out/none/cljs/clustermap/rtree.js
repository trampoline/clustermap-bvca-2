// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12624_12628 = cljs.core.seq.call(null,keys);var chunk__12625_12629 = null;var count__12626_12630 = 0;var i__12627_12631 = 0;while(true){
if((i__12627_12631 < count__12626_12630))
{var k_12632 = cljs.core._nth.call(null,chunk__12625_12629,i__12627_12631);var obj_12633 = (js_index[k_12632]);var geom_12634 = (obj_12633["geojson"]);var feature_12635 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12633["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12633["compact_name"])], null)], null));var __12636__$1 = (feature_12635["geometry"] = geom_12634);features.push(feature_12635);
{
var G__12637 = seq__12624_12628;
var G__12638 = chunk__12625_12629;
var G__12639 = count__12626_12630;
var G__12640 = (i__12627_12631 + 1);
seq__12624_12628 = G__12637;
chunk__12625_12629 = G__12638;
count__12626_12630 = G__12639;
i__12627_12631 = G__12640;
continue;
}
} else
{var temp__4092__auto___12641 = cljs.core.seq.call(null,seq__12624_12628);if(temp__4092__auto___12641)
{var seq__12624_12642__$1 = temp__4092__auto___12641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12624_12642__$1))
{var c__4148__auto___12643 = cljs.core.chunk_first.call(null,seq__12624_12642__$1);{
var G__12644 = cljs.core.chunk_rest.call(null,seq__12624_12642__$1);
var G__12645 = c__4148__auto___12643;
var G__12646 = cljs.core.count.call(null,c__4148__auto___12643);
var G__12647 = 0;
seq__12624_12628 = G__12644;
chunk__12625_12629 = G__12645;
count__12626_12630 = G__12646;
i__12627_12631 = G__12647;
continue;
}
} else
{var k_12648 = cljs.core.first.call(null,seq__12624_12642__$1);var obj_12649 = (js_index[k_12648]);var geom_12650 = (obj_12649["geojson"]);var feature_12651 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12649["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12649["compact_name"])], null)], null));var __12652__$1 = (feature_12651["geometry"] = geom_12650);features.push(feature_12651);
{
var G__12653 = cljs.core.next.call(null,seq__12624_12642__$1);
var G__12654 = null;
var G__12655 = 0;
var G__12656 = 0;
seq__12624_12628 = G__12653;
chunk__12625_12629 = G__12654;
count__12626_12630 = G__12655;
i__12627_12631 = G__12656;
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