// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34610_34614 = cljs.core.seq.call(null,keys);var chunk__34611_34615 = null;var count__34612_34616 = 0;var i__34613_34617 = 0;while(true){
if((i__34613_34617 < count__34612_34616))
{var k_34618 = cljs.core._nth.call(null,chunk__34611_34615,i__34613_34617);var obj_34619 = (js_index[k_34618]);var geom_34620 = (obj_34619["geojson"]);var feature_34621 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_34619["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_34619["compact_name"])], null)], null));var __34622__$1 = (feature_34621["geometry"] = geom_34620);features.push(feature_34621);
{
var G__34623 = seq__34610_34614;
var G__34624 = chunk__34611_34615;
var G__34625 = count__34612_34616;
var G__34626 = (i__34613_34617 + 1);
seq__34610_34614 = G__34623;
chunk__34611_34615 = G__34624;
count__34612_34616 = G__34625;
i__34613_34617 = G__34626;
continue;
}
} else
{var temp__4092__auto___34627 = cljs.core.seq.call(null,seq__34610_34614);if(temp__4092__auto___34627)
{var seq__34610_34628__$1 = temp__4092__auto___34627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34610_34628__$1))
{var c__4148__auto___34629 = cljs.core.chunk_first.call(null,seq__34610_34628__$1);{
var G__34630 = cljs.core.chunk_rest.call(null,seq__34610_34628__$1);
var G__34631 = c__4148__auto___34629;
var G__34632 = cljs.core.count.call(null,c__4148__auto___34629);
var G__34633 = 0;
seq__34610_34614 = G__34630;
chunk__34611_34615 = G__34631;
count__34612_34616 = G__34632;
i__34613_34617 = G__34633;
continue;
}
} else
{var k_34634 = cljs.core.first.call(null,seq__34610_34628__$1);var obj_34635 = (js_index[k_34634]);var geom_34636 = (obj_34635["geojson"]);var feature_34637 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_34635["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_34635["compact_name"])], null)], null));var __34638__$1 = (feature_34637["geometry"] = geom_34636);features.push(feature_34637);
{
var G__34639 = cljs.core.next.call(null,seq__34610_34628__$1);
var G__34640 = null;
var G__34641 = 0;
var G__34642 = 0;
seq__34610_34614 = G__34639;
chunk__34611_34615 = G__34640;
count__34612_34616 = G__34641;
i__34613_34617 = G__34642;
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
