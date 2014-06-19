// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24321_24325 = cljs.core.seq.call(null,keys);var chunk__24322_24326 = null;var count__24323_24327 = 0;var i__24324_24328 = 0;while(true){
if((i__24324_24328 < count__24323_24327))
{var k_24329 = cljs.core._nth.call(null,chunk__24322_24326,i__24324_24328);var obj_24330 = (js_index[k_24329]);var geom_24331 = (obj_24330["geojson"]);var feature_24332 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_24330["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_24330["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_24330["compact_name"])], null)], null));var __24333__$1 = (feature_24332["geometry"] = geom_24331);features.push(feature_24332);
{
var G__24334 = seq__24321_24325;
var G__24335 = chunk__24322_24326;
var G__24336 = count__24323_24327;
var G__24337 = (i__24324_24328 + 1);
seq__24321_24325 = G__24334;
chunk__24322_24326 = G__24335;
count__24323_24327 = G__24336;
i__24324_24328 = G__24337;
continue;
}
} else
{var temp__4126__auto___24338 = cljs.core.seq.call(null,seq__24321_24325);if(temp__4126__auto___24338)
{var seq__24321_24339__$1 = temp__4126__auto___24338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24321_24339__$1))
{var c__4295__auto___24340 = cljs.core.chunk_first.call(null,seq__24321_24339__$1);{
var G__24341 = cljs.core.chunk_rest.call(null,seq__24321_24339__$1);
var G__24342 = c__4295__auto___24340;
var G__24343 = cljs.core.count.call(null,c__4295__auto___24340);
var G__24344 = 0;
seq__24321_24325 = G__24341;
chunk__24322_24326 = G__24342;
count__24323_24327 = G__24343;
i__24324_24328 = G__24344;
continue;
}
} else
{var k_24345 = cljs.core.first.call(null,seq__24321_24339__$1);var obj_24346 = (js_index[k_24345]);var geom_24347 = (obj_24346["geojson"]);var feature_24348 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_24346["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_24346["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_24346["compact_name"])], null)], null));var __24349__$1 = (feature_24348["geometry"] = geom_24347);features.push(feature_24348);
{
var G__24350 = cljs.core.next.call(null,seq__24321_24339__$1);
var G__24351 = null;
var G__24352 = 0;
var G__24353 = 0;
seq__24321_24325 = G__24350;
chunk__24322_24326 = G__24351;
count__24323_24327 = G__24352;
i__24324_24328 = G__24353;
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