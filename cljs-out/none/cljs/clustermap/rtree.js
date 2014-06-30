// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__46559_46563 = cljs.core.seq.call(null,keys);var chunk__46560_46564 = null;var count__46561_46565 = 0;var i__46562_46566 = 0;while(true){
if((i__46562_46566 < count__46561_46565))
{var k_46567 = cljs.core._nth.call(null,chunk__46560_46564,i__46562_46566);var obj_46568 = (js_index[k_46567]);var geom_46569 = (obj_46568["geojson"]);var feature_46570 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_46568["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_46568["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_46568["compact_name"])], null)], null));var __46571__$1 = (feature_46570["geometry"] = geom_46569);features.push(feature_46570);
{
var G__46572 = seq__46559_46563;
var G__46573 = chunk__46560_46564;
var G__46574 = count__46561_46565;
var G__46575 = (i__46562_46566 + 1);
seq__46559_46563 = G__46572;
chunk__46560_46564 = G__46573;
count__46561_46565 = G__46574;
i__46562_46566 = G__46575;
continue;
}
} else
{var temp__4126__auto___46576 = cljs.core.seq.call(null,seq__46559_46563);if(temp__4126__auto___46576)
{var seq__46559_46577__$1 = temp__4126__auto___46576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46559_46577__$1))
{var c__4297__auto___46578 = cljs.core.chunk_first.call(null,seq__46559_46577__$1);{
var G__46579 = cljs.core.chunk_rest.call(null,seq__46559_46577__$1);
var G__46580 = c__4297__auto___46578;
var G__46581 = cljs.core.count.call(null,c__4297__auto___46578);
var G__46582 = 0;
seq__46559_46563 = G__46579;
chunk__46560_46564 = G__46580;
count__46561_46565 = G__46581;
i__46562_46566 = G__46582;
continue;
}
} else
{var k_46583 = cljs.core.first.call(null,seq__46559_46577__$1);var obj_46584 = (js_index[k_46583]);var geom_46585 = (obj_46584["geojson"]);var feature_46586 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_46584["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_46584["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_46584["compact_name"])], null)], null));var __46587__$1 = (feature_46586["geometry"] = geom_46585);features.push(feature_46586);
{
var G__46588 = cljs.core.next.call(null,seq__46559_46577__$1);
var G__46589 = null;
var G__46590 = 0;
var G__46591 = 0;
seq__46559_46563 = G__46588;
chunk__46560_46564 = G__46589;
count__46561_46565 = G__46590;
i__46562_46566 = G__46591;
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

//# sourceMappingURL=rtree.js.map