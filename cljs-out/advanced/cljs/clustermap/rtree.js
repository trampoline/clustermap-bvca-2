// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$614,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__35431_35435 = cljs.core.seq(keys);var chunk__35432_35436 = null;var count__35433_35437 = 0;var i__35434_35438 = 0;while(true){
if((i__35434_35438 < count__35433_35437))
{var k_35439 = chunk__35432_35436.cljs$core$IIndexed$_nth$arity$2(null,i__35434_35438);var obj_35440 = (js_index[k_35439]);var geom_35441 = (obj_35440["geojson"]);var feature_35442 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,"Feature",cljs.core.constant$keyword$615,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$616,(obj_35440["id"]),cljs.core.constant$keyword$617,(obj_35440["id"]),cljs.core.constant$keyword$618,(obj_35440["compact_name"])], null)], null));var __35443__$1 = (feature_35442["geometry"] = geom_35441);features.push(feature_35442);
{
var G__35444 = seq__35431_35435;
var G__35445 = chunk__35432_35436;
var G__35446 = count__35433_35437;
var G__35447 = (i__35434_35438 + 1);
seq__35431_35435 = G__35444;
chunk__35432_35436 = G__35445;
count__35433_35437 = G__35446;
i__35434_35438 = G__35447;
continue;
}
} else
{var temp__4126__auto___35448 = cljs.core.seq(seq__35431_35435);if(temp__4126__auto___35448)
{var seq__35431_35449__$1 = temp__4126__auto___35448;if(cljs.core.chunked_seq_QMARK_(seq__35431_35449__$1))
{var c__4295__auto___35450 = cljs.core.chunk_first(seq__35431_35449__$1);{
var G__35451 = cljs.core.chunk_rest(seq__35431_35449__$1);
var G__35452 = c__4295__auto___35450;
var G__35453 = cljs.core.count(c__4295__auto___35450);
var G__35454 = 0;
seq__35431_35435 = G__35451;
chunk__35432_35436 = G__35452;
count__35433_35437 = G__35453;
i__35434_35438 = G__35454;
continue;
}
} else
{var k_35455 = cljs.core.first(seq__35431_35449__$1);var obj_35456 = (js_index[k_35455]);var geom_35457 = (obj_35456["geojson"]);var feature_35458 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$614,"Feature",cljs.core.constant$keyword$615,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$616,(obj_35456["id"]),cljs.core.constant$keyword$617,(obj_35456["id"]),cljs.core.constant$keyword$618,(obj_35456["compact_name"])], null)], null));var __35459__$1 = (feature_35458["geometry"] = geom_35457);features.push(feature_35458);
{
var G__35460 = cljs.core.next(seq__35431_35449__$1);
var G__35461 = null;
var G__35462 = 0;
var G__35463 = 0;
seq__35431_35435 = G__35460;
chunk__35432_35436 = G__35461;
count__35433_35437 = G__35462;
i__35434_35438 = G__35463;
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
