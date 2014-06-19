// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__46589_46593 = cljs.core.seq.call(null,keys);var chunk__46590_46594 = null;var count__46591_46595 = 0;var i__46592_46596 = 0;while(true){
if((i__46592_46596 < count__46591_46595))
{var k_46597 = cljs.core._nth.call(null,chunk__46590_46594,i__46592_46596);var obj_46598 = (js_index[k_46597]);var geom_46599 = (obj_46598["geojson"]);var feature_46600 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_46598["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_46598["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_46598["compact_name"])], null)], null));var __46601__$1 = (feature_46600["geometry"] = geom_46599);features.push(feature_46600);
{
var G__46602 = seq__46589_46593;
var G__46603 = chunk__46590_46594;
var G__46604 = count__46591_46595;
var G__46605 = (i__46592_46596 + 1);
seq__46589_46593 = G__46602;
chunk__46590_46594 = G__46603;
count__46591_46595 = G__46604;
i__46592_46596 = G__46605;
continue;
}
} else
{var temp__4126__auto___46606 = cljs.core.seq.call(null,seq__46589_46593);if(temp__4126__auto___46606)
{var seq__46589_46607__$1 = temp__4126__auto___46606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46589_46607__$1))
{var c__4295__auto___46608 = cljs.core.chunk_first.call(null,seq__46589_46607__$1);{
var G__46609 = cljs.core.chunk_rest.call(null,seq__46589_46607__$1);
var G__46610 = c__4295__auto___46608;
var G__46611 = cljs.core.count.call(null,c__4295__auto___46608);
var G__46612 = 0;
seq__46589_46593 = G__46609;
chunk__46590_46594 = G__46610;
count__46591_46595 = G__46611;
i__46592_46596 = G__46612;
continue;
}
} else
{var k_46613 = cljs.core.first.call(null,seq__46589_46607__$1);var obj_46614 = (js_index[k_46613]);var geom_46615 = (obj_46614["geojson"]);var feature_46616 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_46614["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_46614["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_46614["compact_name"])], null)], null));var __46617__$1 = (feature_46616["geometry"] = geom_46615);features.push(feature_46616);
{
var G__46618 = cljs.core.next.call(null,seq__46589_46607__$1);
var G__46619 = null;
var G__46620 = 0;
var G__46621 = 0;
seq__46589_46593 = G__46618;
chunk__46590_46594 = G__46619;
count__46591_46595 = G__46620;
i__46592_46596 = G__46621;
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
