// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24307_24311 = cljs.core.seq.call(null,keys);var chunk__24308_24312 = null;var count__24309_24313 = 0;var i__24310_24314 = 0;while(true){
if((i__24310_24314 < count__24309_24313))
{var k_24315 = cljs.core._nth.call(null,chunk__24308_24312,i__24310_24314);var obj_24316 = (js_index[k_24315]);var geom_24317 = (obj_24316["geojson"]);var feature_24318 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_24316["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_24316["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_24316["compact_name"])], null)], null));var __24319__$1 = (feature_24318["geometry"] = geom_24317);features.push(feature_24318);
{
var G__24320 = seq__24307_24311;
var G__24321 = chunk__24308_24312;
var G__24322 = count__24309_24313;
var G__24323 = (i__24310_24314 + 1);
seq__24307_24311 = G__24320;
chunk__24308_24312 = G__24321;
count__24309_24313 = G__24322;
i__24310_24314 = G__24323;
continue;
}
} else
{var temp__4126__auto___24324 = cljs.core.seq.call(null,seq__24307_24311);if(temp__4126__auto___24324)
{var seq__24307_24325__$1 = temp__4126__auto___24324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24307_24325__$1))
{var c__4297__auto___24326 = cljs.core.chunk_first.call(null,seq__24307_24325__$1);{
var G__24327 = cljs.core.chunk_rest.call(null,seq__24307_24325__$1);
var G__24328 = c__4297__auto___24326;
var G__24329 = cljs.core.count.call(null,c__4297__auto___24326);
var G__24330 = 0;
seq__24307_24311 = G__24327;
chunk__24308_24312 = G__24328;
count__24309_24313 = G__24329;
i__24310_24314 = G__24330;
continue;
}
} else
{var k_24331 = cljs.core.first.call(null,seq__24307_24325__$1);var obj_24332 = (js_index[k_24331]);var geom_24333 = (obj_24332["geojson"]);var feature_24334 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_24332["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_24332["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_24332["compact_name"])], null)], null));var __24335__$1 = (feature_24334["geometry"] = geom_24333);features.push(feature_24334);
{
var G__24336 = cljs.core.next.call(null,seq__24307_24325__$1);
var G__24337 = null;
var G__24338 = 0;
var G__24339 = 0;
seq__24307_24311 = G__24336;
chunk__24308_24312 = G__24337;
count__24309_24313 = G__24338;
i__24310_24314 = G__24339;
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
