// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12990_12994 = cljs.core.seq.call(null,keys);var chunk__12991_12995 = null;var count__12992_12996 = 0;var i__12993_12997 = 0;while(true){
if((i__12993_12997 < count__12992_12996))
{var k_12998 = cljs.core._nth.call(null,chunk__12991_12995,i__12993_12997);var obj_12999 = (js_index[k_12998]);var geom_13000 = (obj_12999["geojson"]);var feature_13001 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12999["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12999["compact_name"])], null)], null));var __13002__$1 = (feature_13001["geometry"] = geom_13000);features.push(feature_13001);
{
var G__13003 = seq__12990_12994;
var G__13004 = chunk__12991_12995;
var G__13005 = count__12992_12996;
var G__13006 = (i__12993_12997 + 1);
seq__12990_12994 = G__13003;
chunk__12991_12995 = G__13004;
count__12992_12996 = G__13005;
i__12993_12997 = G__13006;
continue;
}
} else
{var temp__4092__auto___13007 = cljs.core.seq.call(null,seq__12990_12994);if(temp__4092__auto___13007)
{var seq__12990_13008__$1 = temp__4092__auto___13007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12990_13008__$1))
{var c__4189__auto___13009 = cljs.core.chunk_first.call(null,seq__12990_13008__$1);{
var G__13010 = cljs.core.chunk_rest.call(null,seq__12990_13008__$1);
var G__13011 = c__4189__auto___13009;
var G__13012 = cljs.core.count.call(null,c__4189__auto___13009);
var G__13013 = 0;
seq__12990_12994 = G__13010;
chunk__12991_12995 = G__13011;
count__12992_12996 = G__13012;
i__12993_12997 = G__13013;
continue;
}
} else
{var k_13014 = cljs.core.first.call(null,seq__12990_13008__$1);var obj_13015 = (js_index[k_13014]);var geom_13016 = (obj_13015["geojson"]);var feature_13017 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13015["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13015["compact_name"])], null)], null));var __13018__$1 = (feature_13017["geometry"] = geom_13016);features.push(feature_13017);
{
var G__13019 = cljs.core.next.call(null,seq__12990_13008__$1);
var G__13020 = null;
var G__13021 = 0;
var G__13022 = 0;
seq__12990_12994 = G__13019;
chunk__12991_12995 = G__13020;
count__12992_12996 = G__13021;
i__12993_12997 = G__13022;
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
