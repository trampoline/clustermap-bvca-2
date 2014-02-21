// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__33782_33786 = cljs.core.seq.call(null,keys);var chunk__33783_33787 = null;var count__33784_33788 = 0;var i__33785_33789 = 0;while(true){
if((i__33785_33789 < count__33784_33788))
{var k_33790 = cljs.core._nth.call(null,chunk__33783_33787,i__33785_33789);var obj_33791 = (js_index[k_33790]);var geom_33792 = (obj_33791["geojson"]);var feature_33793 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33791["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33791["compact_name"])], null)], null));var __33794__$1 = (feature_33793["geometry"] = geom_33792);features.push(feature_33793);
{
var G__33795 = seq__33782_33786;
var G__33796 = chunk__33783_33787;
var G__33797 = count__33784_33788;
var G__33798 = (i__33785_33789 + 1);
seq__33782_33786 = G__33795;
chunk__33783_33787 = G__33796;
count__33784_33788 = G__33797;
i__33785_33789 = G__33798;
continue;
}
} else
{var temp__4092__auto___33799 = cljs.core.seq.call(null,seq__33782_33786);if(temp__4092__auto___33799)
{var seq__33782_33800__$1 = temp__4092__auto___33799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33782_33800__$1))
{var c__4148__auto___33801 = cljs.core.chunk_first.call(null,seq__33782_33800__$1);{
var G__33802 = cljs.core.chunk_rest.call(null,seq__33782_33800__$1);
var G__33803 = c__4148__auto___33801;
var G__33804 = cljs.core.count.call(null,c__4148__auto___33801);
var G__33805 = 0;
seq__33782_33786 = G__33802;
chunk__33783_33787 = G__33803;
count__33784_33788 = G__33804;
i__33785_33789 = G__33805;
continue;
}
} else
{var k_33806 = cljs.core.first.call(null,seq__33782_33800__$1);var obj_33807 = (js_index[k_33806]);var geom_33808 = (obj_33807["geojson"]);var feature_33809 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33807["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33807["compact_name"])], null)], null));var __33810__$1 = (feature_33809["geometry"] = geom_33808);features.push(feature_33809);
{
var G__33811 = cljs.core.next.call(null,seq__33782_33800__$1);
var G__33812 = null;
var G__33813 = 0;
var G__33814 = 0;
seq__33782_33786 = G__33811;
chunk__33783_33787 = G__33812;
count__33784_33788 = G__33813;
i__33785_33789 = G__33814;
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
