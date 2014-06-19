// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__46557_46561 = cljs.core.seq.call(null,keys);var chunk__46558_46562 = null;var count__46559_46563 = 0;var i__46560_46564 = 0;while(true){
if((i__46560_46564 < count__46559_46563))
{var k_46565 = cljs.core._nth.call(null,chunk__46558_46562,i__46560_46564);var obj_46566 = (js_index[k_46565]);var geom_46567 = (obj_46566["geojson"]);var feature_46568 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_46566["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_46566["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_46566["compact_name"])], null)], null));var __46569__$1 = (feature_46568["geometry"] = geom_46567);features.push(feature_46568);
{
var G__46570 = seq__46557_46561;
var G__46571 = chunk__46558_46562;
var G__46572 = count__46559_46563;
var G__46573 = (i__46560_46564 + 1);
seq__46557_46561 = G__46570;
chunk__46558_46562 = G__46571;
count__46559_46563 = G__46572;
i__46560_46564 = G__46573;
continue;
}
} else
{var temp__4126__auto___46574 = cljs.core.seq.call(null,seq__46557_46561);if(temp__4126__auto___46574)
{var seq__46557_46575__$1 = temp__4126__auto___46574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46557_46575__$1))
{var c__4295__auto___46576 = cljs.core.chunk_first.call(null,seq__46557_46575__$1);{
var G__46577 = cljs.core.chunk_rest.call(null,seq__46557_46575__$1);
var G__46578 = c__4295__auto___46576;
var G__46579 = cljs.core.count.call(null,c__4295__auto___46576);
var G__46580 = 0;
seq__46557_46561 = G__46577;
chunk__46558_46562 = G__46578;
count__46559_46563 = G__46579;
i__46560_46564 = G__46580;
continue;
}
} else
{var k_46581 = cljs.core.first.call(null,seq__46557_46575__$1);var obj_46582 = (js_index[k_46581]);var geom_46583 = (obj_46582["geojson"]);var feature_46584 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_46582["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_46582["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_46582["compact_name"])], null)], null));var __46585__$1 = (feature_46584["geometry"] = geom_46583);features.push(feature_46584);
{
var G__46586 = cljs.core.next.call(null,seq__46557_46575__$1);
var G__46587 = null;
var G__46588 = 0;
var G__46589 = 0;
seq__46557_46561 = G__46586;
chunk__46558_46562 = G__46587;
count__46559_46563 = G__46588;
i__46560_46564 = G__46589;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"w","w",1013904361),0,new cljs.core.Keyword(null,"h","h",1013904346),0], null)));return cljs.core.filter.call(null,((function (hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(hits))
,hits);
});
