// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23987_23991 = cljs.core.seq.call(null,keys);var chunk__23988_23992 = null;var count__23989_23993 = 0;var i__23990_23994 = 0;while(true){
if((i__23990_23994 < count__23989_23993))
{var k_23995 = cljs.core._nth.call(null,chunk__23988_23992,i__23990_23994);var obj_23996 = (js_index[k_23995]);var geom_23997 = (obj_23996["geojson"]);var feature_23998 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23996["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23996["compact_name"])], null)], null));var __23999__$1 = (feature_23998["geometry"] = geom_23997);features.push(feature_23998);
{
var G__24000 = seq__23987_23991;
var G__24001 = chunk__23988_23992;
var G__24002 = count__23989_23993;
var G__24003 = (i__23990_23994 + 1);
seq__23987_23991 = G__24000;
chunk__23988_23992 = G__24001;
count__23989_23993 = G__24002;
i__23990_23994 = G__24003;
continue;
}
} else
{var temp__4092__auto___24004 = cljs.core.seq.call(null,seq__23987_23991);if(temp__4092__auto___24004)
{var seq__23987_24005__$1 = temp__4092__auto___24004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23987_24005__$1))
{var c__4189__auto___24006 = cljs.core.chunk_first.call(null,seq__23987_24005__$1);{
var G__24007 = cljs.core.chunk_rest.call(null,seq__23987_24005__$1);
var G__24008 = c__4189__auto___24006;
var G__24009 = cljs.core.count.call(null,c__4189__auto___24006);
var G__24010 = 0;
seq__23987_23991 = G__24007;
chunk__23988_23992 = G__24008;
count__23989_23993 = G__24009;
i__23990_23994 = G__24010;
continue;
}
} else
{var k_24011 = cljs.core.first.call(null,seq__23987_24005__$1);var obj_24012 = (js_index[k_24011]);var geom_24013 = (obj_24012["geojson"]);var feature_24014 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_24012["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_24012["compact_name"])], null)], null));var __24015__$1 = (feature_24014["geometry"] = geom_24013);features.push(feature_24014);
{
var G__24016 = cljs.core.next.call(null,seq__23987_24005__$1);
var G__24017 = null;
var G__24018 = 0;
var G__24019 = 0;
seq__23987_23991 = G__24016;
chunk__23988_23992 = G__24017;
count__23989_23993 = G__24018;
i__23990_23994 = G__24019;
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