// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23979_23983 = cljs.core.seq.call(null,keys);var chunk__23980_23984 = null;var count__23981_23985 = 0;var i__23982_23986 = 0;while(true){
if((i__23982_23986 < count__23981_23985))
{var k_23987 = cljs.core._nth.call(null,chunk__23980_23984,i__23982_23986);var obj_23988 = (js_index[k_23987]);var geom_23989 = (obj_23988["geojson"]);var feature_23990 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_23988["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_23988["compact_name"])], null)], null));var __23991__$1 = (feature_23990["geometry"] = geom_23989);features.push(feature_23990);
{
var G__23992 = seq__23979_23983;
var G__23993 = chunk__23980_23984;
var G__23994 = count__23981_23985;
var G__23995 = (i__23982_23986 + 1);
seq__23979_23983 = G__23992;
chunk__23980_23984 = G__23993;
count__23981_23985 = G__23994;
i__23982_23986 = G__23995;
continue;
}
} else
{var temp__4092__auto___23996 = cljs.core.seq.call(null,seq__23979_23983);if(temp__4092__auto___23996)
{var seq__23979_23997__$1 = temp__4092__auto___23996;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23979_23997__$1))
{var c__4189__auto___23998 = cljs.core.chunk_first.call(null,seq__23979_23997__$1);{
var G__23999 = cljs.core.chunk_rest.call(null,seq__23979_23997__$1);
var G__24000 = c__4189__auto___23998;
var G__24001 = cljs.core.count.call(null,c__4189__auto___23998);
var G__24002 = 0;
seq__23979_23983 = G__23999;
chunk__23980_23984 = G__24000;
count__23981_23985 = G__24001;
i__23982_23986 = G__24002;
continue;
}
} else
{var k_24003 = cljs.core.first.call(null,seq__23979_23997__$1);var obj_24004 = (js_index[k_24003]);var geom_24005 = (obj_24004["geojson"]);var feature_24006 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_24004["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_24004["compact_name"])], null)], null));var __24007__$1 = (feature_24006["geometry"] = geom_24005);features.push(feature_24006);
{
var G__24008 = cljs.core.next.call(null,seq__23979_23997__$1);
var G__24009 = null;
var G__24010 = 0;
var G__24011 = 0;
seq__23979_23983 = G__24008;
chunk__23980_23984 = G__24009;
count__23981_23985 = G__24010;
i__23982_23986 = G__24011;
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