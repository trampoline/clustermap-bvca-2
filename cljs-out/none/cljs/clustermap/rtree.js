// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23803_23807 = cljs.core.seq.call(null,keys);var chunk__23804_23808 = null;var count__23805_23809 = 0;var i__23806_23810 = 0;while(true){
if((i__23806_23810 < count__23805_23809))
{var k_23811 = cljs.core._nth.call(null,chunk__23804_23808,i__23806_23810);var obj_23812 = (js_index[k_23811]);var geom_23813 = (obj_23812["geojson"]);var feature_23814 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23812["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23812["compact_name"])], null)], null));var __23815__$1 = (feature_23814["geometry"] = geom_23813);features.push(feature_23814);
{
var G__23816 = seq__23803_23807;
var G__23817 = chunk__23804_23808;
var G__23818 = count__23805_23809;
var G__23819 = (i__23806_23810 + 1);
seq__23803_23807 = G__23816;
chunk__23804_23808 = G__23817;
count__23805_23809 = G__23818;
i__23806_23810 = G__23819;
continue;
}
} else
{var temp__4092__auto___23820 = cljs.core.seq.call(null,seq__23803_23807);if(temp__4092__auto___23820)
{var seq__23803_23821__$1 = temp__4092__auto___23820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23803_23821__$1))
{var c__4189__auto___23822 = cljs.core.chunk_first.call(null,seq__23803_23821__$1);{
var G__23823 = cljs.core.chunk_rest.call(null,seq__23803_23821__$1);
var G__23824 = c__4189__auto___23822;
var G__23825 = cljs.core.count.call(null,c__4189__auto___23822);
var G__23826 = 0;
seq__23803_23807 = G__23823;
chunk__23804_23808 = G__23824;
count__23805_23809 = G__23825;
i__23806_23810 = G__23826;
continue;
}
} else
{var k_23827 = cljs.core.first.call(null,seq__23803_23821__$1);var obj_23828 = (js_index[k_23827]);var geom_23829 = (obj_23828["geojson"]);var feature_23830 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23828["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23828["compact_name"])], null)], null));var __23831__$1 = (feature_23830["geometry"] = geom_23829);features.push(feature_23830);
{
var G__23832 = cljs.core.next.call(null,seq__23803_23821__$1);
var G__23833 = null;
var G__23834 = 0;
var G__23835 = 0;
seq__23803_23807 = G__23832;
chunk__23804_23808 = G__23833;
count__23805_23809 = G__23834;
i__23806_23810 = G__23835;
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