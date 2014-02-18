// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__33776_33780 = cljs.core.seq.call(null,keys);var chunk__33777_33781 = null;var count__33778_33782 = 0;var i__33779_33783 = 0;while(true){
if((i__33779_33783 < count__33778_33782))
{var k_33784 = cljs.core._nth.call(null,chunk__33777_33781,i__33779_33783);var obj_33785 = (js_index[k_33784]);var geom_33786 = (obj_33785["geojson"]);var feature_33787 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33785["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33785["compact_name"])], null)], null));var __33788__$1 = (feature_33787["geometry"] = geom_33786);features.push(feature_33787);
{
var G__33789 = seq__33776_33780;
var G__33790 = chunk__33777_33781;
var G__33791 = count__33778_33782;
var G__33792 = (i__33779_33783 + 1);
seq__33776_33780 = G__33789;
chunk__33777_33781 = G__33790;
count__33778_33782 = G__33791;
i__33779_33783 = G__33792;
continue;
}
} else
{var temp__4092__auto___33793 = cljs.core.seq.call(null,seq__33776_33780);if(temp__4092__auto___33793)
{var seq__33776_33794__$1 = temp__4092__auto___33793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33776_33794__$1))
{var c__4148__auto___33795 = cljs.core.chunk_first.call(null,seq__33776_33794__$1);{
var G__33796 = cljs.core.chunk_rest.call(null,seq__33776_33794__$1);
var G__33797 = c__4148__auto___33795;
var G__33798 = cljs.core.count.call(null,c__4148__auto___33795);
var G__33799 = 0;
seq__33776_33780 = G__33796;
chunk__33777_33781 = G__33797;
count__33778_33782 = G__33798;
i__33779_33783 = G__33799;
continue;
}
} else
{var k_33800 = cljs.core.first.call(null,seq__33776_33794__$1);var obj_33801 = (js_index[k_33800]);var geom_33802 = (obj_33801["geojson"]);var feature_33803 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33801["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33801["compact_name"])], null)], null));var __33804__$1 = (feature_33803["geometry"] = geom_33802);features.push(feature_33803);
{
var G__33805 = cljs.core.next.call(null,seq__33776_33794__$1);
var G__33806 = null;
var G__33807 = 0;
var G__33808 = 0;
seq__33776_33780 = G__33805;
chunk__33777_33781 = G__33806;
count__33778_33782 = G__33807;
i__33779_33783 = G__33808;
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
