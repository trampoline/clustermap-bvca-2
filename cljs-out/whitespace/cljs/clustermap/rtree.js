// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__33812_33816 = cljs.core.seq.call(null,keys);var chunk__33813_33817 = null;var count__33814_33818 = 0;var i__33815_33819 = 0;while(true){
if((i__33815_33819 < count__33814_33818))
{var k_33820 = cljs.core._nth.call(null,chunk__33813_33817,i__33815_33819);var obj_33821 = (js_index[k_33820]);var geom_33822 = (obj_33821["geojson"]);var feature_33823 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33821["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33821["compact_name"])], null)], null));var __33824__$1 = (feature_33823["geometry"] = geom_33822);features.push(feature_33823);
{
var G__33825 = seq__33812_33816;
var G__33826 = chunk__33813_33817;
var G__33827 = count__33814_33818;
var G__33828 = (i__33815_33819 + 1);
seq__33812_33816 = G__33825;
chunk__33813_33817 = G__33826;
count__33814_33818 = G__33827;
i__33815_33819 = G__33828;
continue;
}
} else
{var temp__4092__auto___33829 = cljs.core.seq.call(null,seq__33812_33816);if(temp__4092__auto___33829)
{var seq__33812_33830__$1 = temp__4092__auto___33829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33812_33830__$1))
{var c__4148__auto___33831 = cljs.core.chunk_first.call(null,seq__33812_33830__$1);{
var G__33832 = cljs.core.chunk_rest.call(null,seq__33812_33830__$1);
var G__33833 = c__4148__auto___33831;
var G__33834 = cljs.core.count.call(null,c__4148__auto___33831);
var G__33835 = 0;
seq__33812_33816 = G__33832;
chunk__33813_33817 = G__33833;
count__33814_33818 = G__33834;
i__33815_33819 = G__33835;
continue;
}
} else
{var k_33836 = cljs.core.first.call(null,seq__33812_33830__$1);var obj_33837 = (js_index[k_33836]);var geom_33838 = (obj_33837["geojson"]);var feature_33839 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33837["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33837["compact_name"])], null)], null));var __33840__$1 = (feature_33839["geometry"] = geom_33838);features.push(feature_33839);
{
var G__33841 = cljs.core.next.call(null,seq__33812_33830__$1);
var G__33842 = null;
var G__33843 = 0;
var G__33844 = 0;
seq__33812_33816 = G__33841;
chunk__33813_33817 = G__33842;
count__33814_33818 = G__33843;
i__33815_33819 = G__33844;
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
