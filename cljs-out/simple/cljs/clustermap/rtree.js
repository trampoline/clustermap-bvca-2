// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12994_12998 = cljs.core.seq.call(null,keys);var chunk__12995_12999 = null;var count__12996_13000 = 0;var i__12997_13001 = 0;while(true){
if((i__12997_13001 < count__12996_13000))
{var k_13002 = cljs.core._nth.call(null,chunk__12995_12999,i__12997_13001);var obj_13003 = (js_index[k_13002]);var geom_13004 = (obj_13003["geojson"]);var feature_13005 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13003["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13003["compact_name"])], null)], null));var __13006__$1 = (feature_13005["geometry"] = geom_13004);features.push(feature_13005);
{
var G__13007 = seq__12994_12998;
var G__13008 = chunk__12995_12999;
var G__13009 = count__12996_13000;
var G__13010 = (i__12997_13001 + 1);
seq__12994_12998 = G__13007;
chunk__12995_12999 = G__13008;
count__12996_13000 = G__13009;
i__12997_13001 = G__13010;
continue;
}
} else
{var temp__4092__auto___13011 = cljs.core.seq.call(null,seq__12994_12998);if(temp__4092__auto___13011)
{var seq__12994_13012__$1 = temp__4092__auto___13011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12994_13012__$1))
{var c__4189__auto___13013 = cljs.core.chunk_first.call(null,seq__12994_13012__$1);{
var G__13014 = cljs.core.chunk_rest.call(null,seq__12994_13012__$1);
var G__13015 = c__4189__auto___13013;
var G__13016 = cljs.core.count.call(null,c__4189__auto___13013);
var G__13017 = 0;
seq__12994_12998 = G__13014;
chunk__12995_12999 = G__13015;
count__12996_13000 = G__13016;
i__12997_13001 = G__13017;
continue;
}
} else
{var k_13018 = cljs.core.first.call(null,seq__12994_13012__$1);var obj_13019 = (js_index[k_13018]);var geom_13020 = (obj_13019["geojson"]);var feature_13021 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13019["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13019["compact_name"])], null)], null));var __13022__$1 = (feature_13021["geometry"] = geom_13020);features.push(feature_13021);
{
var G__13023 = cljs.core.next.call(null,seq__12994_13012__$1);
var G__13024 = null;
var G__13025 = 0;
var G__13026 = 0;
seq__12994_12998 = G__13023;
chunk__12995_12999 = G__13024;
count__12996_13000 = G__13025;
i__12997_13001 = G__13026;
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
