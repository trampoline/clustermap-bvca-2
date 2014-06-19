// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__13187_13191 = cljs.core.seq.call(null,keys);var chunk__13188_13192 = null;var count__13189_13193 = 0;var i__13190_13194 = 0;while(true){
if((i__13190_13194 < count__13189_13193))
{var k_13195 = cljs.core._nth.call(null,chunk__13188_13192,i__13190_13194);var obj_13196 = (js_index[k_13195]);var geom_13197 = (obj_13196["geojson"]);var feature_13198 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13196["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_13196["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13196["compact_name"])], null)], null));var __13199__$1 = (feature_13198["geometry"] = geom_13197);features.push(feature_13198);
{
var G__13200 = seq__13187_13191;
var G__13201 = chunk__13188_13192;
var G__13202 = count__13189_13193;
var G__13203 = (i__13190_13194 + 1);
seq__13187_13191 = G__13200;
chunk__13188_13192 = G__13201;
count__13189_13193 = G__13202;
i__13190_13194 = G__13203;
continue;
}
} else
{var temp__4126__auto___13204 = cljs.core.seq.call(null,seq__13187_13191);if(temp__4126__auto___13204)
{var seq__13187_13205__$1 = temp__4126__auto___13204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13187_13205__$1))
{var c__4295__auto___13206 = cljs.core.chunk_first.call(null,seq__13187_13205__$1);{
var G__13207 = cljs.core.chunk_rest.call(null,seq__13187_13205__$1);
var G__13208 = c__4295__auto___13206;
var G__13209 = cljs.core.count.call(null,c__4295__auto___13206);
var G__13210 = 0;
seq__13187_13191 = G__13207;
chunk__13188_13192 = G__13208;
count__13189_13193 = G__13209;
i__13190_13194 = G__13210;
continue;
}
} else
{var k_13211 = cljs.core.first.call(null,seq__13187_13205__$1);var obj_13212 = (js_index[k_13211]);var geom_13213 = (obj_13212["geojson"]);var feature_13214 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_13212["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_13212["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_13212["compact_name"])], null)], null));var __13215__$1 = (feature_13214["geometry"] = geom_13213);features.push(feature_13214);
{
var G__13216 = cljs.core.next.call(null,seq__13187_13205__$1);
var G__13217 = null;
var G__13218 = 0;
var G__13219 = 0;
seq__13187_13191 = G__13216;
chunk__13188_13192 = G__13217;
count__13189_13193 = G__13218;
i__13190_13194 = G__13219;
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
