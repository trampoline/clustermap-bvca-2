// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__13179_13183 = cljs.core.seq.call(null,keys);var chunk__13180_13184 = null;var count__13181_13185 = 0;var i__13182_13186 = 0;while(true){
if((i__13182_13186 < count__13181_13185))
{var k_13187 = cljs.core._nth.call(null,chunk__13180_13184,i__13182_13186);var obj_13188 = (js_index[k_13187]);var geom_13189 = (obj_13188["geojson"]);var feature_13190 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13188["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_13188["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13188["compact_name"])], null)], null));var __13191__$1 = (feature_13190["geometry"] = geom_13189);features.push(feature_13190);
{
var G__13192 = seq__13179_13183;
var G__13193 = chunk__13180_13184;
var G__13194 = count__13181_13185;
var G__13195 = (i__13182_13186 + 1);
seq__13179_13183 = G__13192;
chunk__13180_13184 = G__13193;
count__13181_13185 = G__13194;
i__13182_13186 = G__13195;
continue;
}
} else
{var temp__4126__auto___13196 = cljs.core.seq.call(null,seq__13179_13183);if(temp__4126__auto___13196)
{var seq__13179_13197__$1 = temp__4126__auto___13196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13179_13197__$1))
{var c__4295__auto___13198 = cljs.core.chunk_first.call(null,seq__13179_13197__$1);{
var G__13199 = cljs.core.chunk_rest.call(null,seq__13179_13197__$1);
var G__13200 = c__4295__auto___13198;
var G__13201 = cljs.core.count.call(null,c__4295__auto___13198);
var G__13202 = 0;
seq__13179_13183 = G__13199;
chunk__13180_13184 = G__13200;
count__13181_13185 = G__13201;
i__13182_13186 = G__13202;
continue;
}
} else
{var k_13203 = cljs.core.first.call(null,seq__13179_13197__$1);var obj_13204 = (js_index[k_13203]);var geom_13205 = (obj_13204["geojson"]);var feature_13206 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13204["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_13204["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13204["compact_name"])], null)], null));var __13207__$1 = (feature_13206["geometry"] = geom_13205);features.push(feature_13206);
{
var G__13208 = cljs.core.next.call(null,seq__13179_13197__$1);
var G__13209 = null;
var G__13210 = 0;
var G__13211 = 0;
seq__13179_13183 = G__13208;
chunk__13180_13184 = G__13209;
count__13181_13185 = G__13210;
i__13182_13186 = G__13211;
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
