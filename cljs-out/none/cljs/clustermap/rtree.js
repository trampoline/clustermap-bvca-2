// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12609_12613 = cljs.core.seq.call(null,keys);var chunk__12610_12614 = null;var count__12611_12615 = 0;var i__12612_12616 = 0;while(true){
if((i__12612_12616 < count__12611_12615))
{var k_12617 = cljs.core._nth.call(null,chunk__12610_12614,i__12612_12616);var obj_12618 = (js_index[k_12617]);var geom_12619 = (obj_12618["geojson"]);var feature_12620 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12618["id"])], null)], null));var __12621__$1 = (feature_12620["geometry"] = geom_12619);features.push(feature_12620);
{
var G__12622 = seq__12609_12613;
var G__12623 = chunk__12610_12614;
var G__12624 = count__12611_12615;
var G__12625 = (i__12612_12616 + 1);
seq__12609_12613 = G__12622;
chunk__12610_12614 = G__12623;
count__12611_12615 = G__12624;
i__12612_12616 = G__12625;
continue;
}
} else
{var temp__4092__auto___12626 = cljs.core.seq.call(null,seq__12609_12613);if(temp__4092__auto___12626)
{var seq__12609_12627__$1 = temp__4092__auto___12626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12609_12627__$1))
{var c__4148__auto___12628 = cljs.core.chunk_first.call(null,seq__12609_12627__$1);{
var G__12629 = cljs.core.chunk_rest.call(null,seq__12609_12627__$1);
var G__12630 = c__4148__auto___12628;
var G__12631 = cljs.core.count.call(null,c__4148__auto___12628);
var G__12632 = 0;
seq__12609_12613 = G__12629;
chunk__12610_12614 = G__12630;
count__12611_12615 = G__12631;
i__12612_12616 = G__12632;
continue;
}
} else
{var k_12633 = cljs.core.first.call(null,seq__12609_12627__$1);var obj_12634 = (js_index[k_12633]);var geom_12635 = (obj_12634["geojson"]);var feature_12636 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12634["id"])], null)], null));var __12637__$1 = (feature_12636["geometry"] = geom_12635);features.push(feature_12636);
{
var G__12638 = cljs.core.next.call(null,seq__12609_12627__$1);
var G__12639 = null;
var G__12640 = 0;
var G__12641 = 0;
seq__12609_12613 = G__12638;
chunk__12610_12614 = G__12639;
count__12611_12615 = G__12640;
i__12612_12616 = G__12641;
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