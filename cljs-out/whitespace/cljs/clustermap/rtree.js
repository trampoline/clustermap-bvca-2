// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__45637_45641 = cljs.core.seq.call(null,keys);var chunk__45638_45642 = null;var count__45639_45643 = 0;var i__45640_45644 = 0;while(true){
if((i__45640_45644 < count__45639_45643))
{var k_45645 = cljs.core._nth.call(null,chunk__45638_45642,i__45640_45644);var obj_45646 = (js_index[k_45645]);var geom_45647 = (obj_45646["geojson"]);var feature_45648 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45646["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_45646["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45646["compact_name"])], null)], null));var __45649__$1 = (feature_45648["geometry"] = geom_45647);features.push(feature_45648);
{
var G__45650 = seq__45637_45641;
var G__45651 = chunk__45638_45642;
var G__45652 = count__45639_45643;
var G__45653 = (i__45640_45644 + 1);
seq__45637_45641 = G__45650;
chunk__45638_45642 = G__45651;
count__45639_45643 = G__45652;
i__45640_45644 = G__45653;
continue;
}
} else
{var temp__4092__auto___45654 = cljs.core.seq.call(null,seq__45637_45641);if(temp__4092__auto___45654)
{var seq__45637_45655__$1 = temp__4092__auto___45654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45637_45655__$1))
{var c__4189__auto___45656 = cljs.core.chunk_first.call(null,seq__45637_45655__$1);{
var G__45657 = cljs.core.chunk_rest.call(null,seq__45637_45655__$1);
var G__45658 = c__4189__auto___45656;
var G__45659 = cljs.core.count.call(null,c__4189__auto___45656);
var G__45660 = 0;
seq__45637_45641 = G__45657;
chunk__45638_45642 = G__45658;
count__45639_45643 = G__45659;
i__45640_45644 = G__45660;
continue;
}
} else
{var k_45661 = cljs.core.first.call(null,seq__45637_45655__$1);var obj_45662 = (js_index[k_45661]);var geom_45663 = (obj_45662["geojson"]);var feature_45664 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45662["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_45662["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45662["compact_name"])], null)], null));var __45665__$1 = (feature_45664["geometry"] = geom_45663);features.push(feature_45664);
{
var G__45666 = cljs.core.next.call(null,seq__45637_45655__$1);
var G__45667 = null;
var G__45668 = 0;
var G__45669 = 0;
seq__45637_45641 = G__45666;
chunk__45638_45642 = G__45667;
count__45639_45643 = G__45668;
i__45640_45644 = G__45669;
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
