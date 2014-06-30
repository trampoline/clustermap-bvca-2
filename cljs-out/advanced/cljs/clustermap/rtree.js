// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$614,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__35433_35437 = cljs.core.seq(keys);var chunk__35434_35438 = null;var count__35435_35439 = 0;var i__35436_35440 = 0;while(true){
if((i__35436_35440 < count__35435_35439))
{var k_35441 = chunk__35434_35438.cljs$core$IIndexed$_nth$arity$2(null,i__35436_35440);var obj_35442 = (js_index[k_35441]);var geom_35443 = (obj_35442["geojson"]);var feature_35444 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,"Feature",cljs.core.constant$keyword$615,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$616,(obj_35442["id"]),cljs.core.constant$keyword$617,(obj_35442["id"]),cljs.core.constant$keyword$618,(obj_35442["compact_name"])], null)], null));var __35445__$1 = (feature_35444["geometry"] = geom_35443);features.push(feature_35444);
{
var G__35446 = seq__35433_35437;
var G__35447 = chunk__35434_35438;
var G__35448 = count__35435_35439;
var G__35449 = (i__35436_35440 + 1);
seq__35433_35437 = G__35446;
chunk__35434_35438 = G__35447;
count__35435_35439 = G__35448;
i__35436_35440 = G__35449;
continue;
}
} else
{var temp__4126__auto___35450 = cljs.core.seq(seq__35433_35437);if(temp__4126__auto___35450)
{var seq__35433_35451__$1 = temp__4126__auto___35450;if(cljs.core.chunked_seq_QMARK_(seq__35433_35451__$1))
{var c__4297__auto___35452 = cljs.core.chunk_first(seq__35433_35451__$1);{
var G__35453 = cljs.core.chunk_rest(seq__35433_35451__$1);
var G__35454 = c__4297__auto___35452;
var G__35455 = cljs.core.count(c__4297__auto___35452);
var G__35456 = 0;
seq__35433_35437 = G__35453;
chunk__35434_35438 = G__35454;
count__35435_35439 = G__35455;
i__35436_35440 = G__35456;
continue;
}
} else
{var k_35457 = cljs.core.first(seq__35433_35451__$1);var obj_35458 = (js_index[k_35457]);var geom_35459 = (obj_35458["geojson"]);var feature_35460 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,"Feature",cljs.core.constant$keyword$615,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$616,(obj_35458["id"]),cljs.core.constant$keyword$617,(obj_35458["id"]),cljs.core.constant$keyword$618,(obj_35458["compact_name"])], null)], null));var __35461__$1 = (feature_35460["geometry"] = geom_35459);features.push(feature_35460);
{
var G__35462 = cljs.core.next(seq__35433_35451__$1);
var G__35463 = null;
var G__35464 = 0;
var G__35465 = 0;
seq__35433_35437 = G__35462;
chunk__35434_35438 = G__35463;
count__35435_35439 = G__35464;
i__35436_35440 = G__35465;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$619,x,cljs.core.constant$keyword$620,y,cljs.core.constant$keyword$621,0,cljs.core.constant$keyword$622,0], null)));return cljs.core.filter(((function (hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,"Point",cljs.core.constant$keyword$623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(hits))
,hits);
});
