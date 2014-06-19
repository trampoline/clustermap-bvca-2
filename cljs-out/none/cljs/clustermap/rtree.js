// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24305_24309 = cljs.core.seq.call(null,keys);var chunk__24306_24310 = null;var count__24307_24311 = 0;var i__24308_24312 = 0;while(true){
if((i__24308_24312 < count__24307_24311))
{var k_24313 = cljs.core._nth.call(null,chunk__24306_24310,i__24308_24312);var obj_24314 = (js_index[k_24313]);var geom_24315 = (obj_24314["geojson"]);var feature_24316 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_24314["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_24314["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_24314["compact_name"])], null)], null));var __24317__$1 = (feature_24316["geometry"] = geom_24315);features.push(feature_24316);
{
var G__24318 = seq__24305_24309;
var G__24319 = chunk__24306_24310;
var G__24320 = count__24307_24311;
var G__24321 = (i__24308_24312 + 1);
seq__24305_24309 = G__24318;
chunk__24306_24310 = G__24319;
count__24307_24311 = G__24320;
i__24308_24312 = G__24321;
continue;
}
} else
{var temp__4126__auto___24322 = cljs.core.seq.call(null,seq__24305_24309);if(temp__4126__auto___24322)
{var seq__24305_24323__$1 = temp__4126__auto___24322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24305_24323__$1))
{var c__4295__auto___24324 = cljs.core.chunk_first.call(null,seq__24305_24323__$1);{
var G__24325 = cljs.core.chunk_rest.call(null,seq__24305_24323__$1);
var G__24326 = c__4295__auto___24324;
var G__24327 = cljs.core.count.call(null,c__4295__auto___24324);
var G__24328 = 0;
seq__24305_24309 = G__24325;
chunk__24306_24310 = G__24326;
count__24307_24311 = G__24327;
i__24308_24312 = G__24328;
continue;
}
} else
{var k_24329 = cljs.core.first.call(null,seq__24305_24323__$1);var obj_24330 = (js_index[k_24329]);var geom_24331 = (obj_24330["geojson"]);var feature_24332 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_24330["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_24330["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_24330["compact_name"])], null)], null));var __24333__$1 = (feature_24332["geometry"] = geom_24331);features.push(feature_24332);
{
var G__24334 = cljs.core.next.call(null,seq__24305_24323__$1);
var G__24335 = null;
var G__24336 = 0;
var G__24337 = 0;
seq__24305_24309 = G__24334;
chunk__24306_24310 = G__24335;
count__24307_24311 = G__24336;
i__24308_24312 = G__24337;
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