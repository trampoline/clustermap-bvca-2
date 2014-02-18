// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__33770_33774 = cljs.core.seq.call(null,keys);var chunk__33771_33775 = null;var count__33772_33776 = 0;var i__33773_33777 = 0;while(true){
if((i__33773_33777 < count__33772_33776))
{var k_33778 = cljs.core._nth.call(null,chunk__33771_33775,i__33773_33777);var obj_33779 = (js_index[k_33778]);var geom_33780 = (obj_33779["geojson"]);var feature_33781 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33779["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33779["compact_name"])], null)], null));var __33782__$1 = (feature_33781["geometry"] = geom_33780);features.push(feature_33781);
{
var G__33783 = seq__33770_33774;
var G__33784 = chunk__33771_33775;
var G__33785 = count__33772_33776;
var G__33786 = (i__33773_33777 + 1);
seq__33770_33774 = G__33783;
chunk__33771_33775 = G__33784;
count__33772_33776 = G__33785;
i__33773_33777 = G__33786;
continue;
}
} else
{var temp__4092__auto___33787 = cljs.core.seq.call(null,seq__33770_33774);if(temp__4092__auto___33787)
{var seq__33770_33788__$1 = temp__4092__auto___33787;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33770_33788__$1))
{var c__4148__auto___33789 = cljs.core.chunk_first.call(null,seq__33770_33788__$1);{
var G__33790 = cljs.core.chunk_rest.call(null,seq__33770_33788__$1);
var G__33791 = c__4148__auto___33789;
var G__33792 = cljs.core.count.call(null,c__4148__auto___33789);
var G__33793 = 0;
seq__33770_33774 = G__33790;
chunk__33771_33775 = G__33791;
count__33772_33776 = G__33792;
i__33773_33777 = G__33793;
continue;
}
} else
{var k_33794 = cljs.core.first.call(null,seq__33770_33788__$1);var obj_33795 = (js_index[k_33794]);var geom_33796 = (obj_33795["geojson"]);var feature_33797 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33795["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33795["compact_name"])], null)], null));var __33798__$1 = (feature_33797["geometry"] = geom_33796);features.push(feature_33797);
{
var G__33799 = cljs.core.next.call(null,seq__33770_33788__$1);
var G__33800 = null;
var G__33801 = 0;
var G__33802 = 0;
seq__33770_33774 = G__33799;
chunk__33771_33775 = G__33800;
count__33772_33776 = G__33801;
i__33773_33777 = G__33802;
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
