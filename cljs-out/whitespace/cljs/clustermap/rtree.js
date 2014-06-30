// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__13181_13185 = cljs.core.seq.call(null,keys);var chunk__13182_13186 = null;var count__13183_13187 = 0;var i__13184_13188 = 0;while(true){
if((i__13184_13188 < count__13183_13187))
{var k_13189 = cljs.core._nth.call(null,chunk__13182_13186,i__13184_13188);var obj_13190 = (js_index[k_13189]);var geom_13191 = (obj_13190["geojson"]);var feature_13192 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13190["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_13190["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13190["compact_name"])], null)], null));var __13193__$1 = (feature_13192["geometry"] = geom_13191);features.push(feature_13192);
{
var G__13194 = seq__13181_13185;
var G__13195 = chunk__13182_13186;
var G__13196 = count__13183_13187;
var G__13197 = (i__13184_13188 + 1);
seq__13181_13185 = G__13194;
chunk__13182_13186 = G__13195;
count__13183_13187 = G__13196;
i__13184_13188 = G__13197;
continue;
}
} else
{var temp__4126__auto___13198 = cljs.core.seq.call(null,seq__13181_13185);if(temp__4126__auto___13198)
{var seq__13181_13199__$1 = temp__4126__auto___13198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13181_13199__$1))
{var c__4297__auto___13200 = cljs.core.chunk_first.call(null,seq__13181_13199__$1);{
var G__13201 = cljs.core.chunk_rest.call(null,seq__13181_13199__$1);
var G__13202 = c__4297__auto___13200;
var G__13203 = cljs.core.count.call(null,c__4297__auto___13200);
var G__13204 = 0;
seq__13181_13185 = G__13201;
chunk__13182_13186 = G__13202;
count__13183_13187 = G__13203;
i__13184_13188 = G__13204;
continue;
}
} else
{var k_13205 = cljs.core.first.call(null,seq__13181_13199__$1);var obj_13206 = (js_index[k_13205]);var geom_13207 = (obj_13206["geojson"]);var feature_13208 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13206["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_13206["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13206["compact_name"])], null)], null));var __13209__$1 = (feature_13208["geometry"] = geom_13207);features.push(feature_13208);
{
var G__13210 = cljs.core.next.call(null,seq__13181_13199__$1);
var G__13211 = null;
var G__13212 = 0;
var G__13213 = 0;
seq__13181_13185 = G__13210;
chunk__13182_13186 = G__13211;
count__13183_13187 = G__13212;
i__13184_13188 = G__13213;
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
