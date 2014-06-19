// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$612,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__35455_35459 = cljs.core.seq(keys);var chunk__35456_35460 = null;var count__35457_35461 = 0;var i__35458_35462 = 0;while(true){
if((i__35458_35462 < count__35457_35461))
{var k_35463 = chunk__35456_35460.cljs$core$IIndexed$_nth$arity$2(null,i__35458_35462);var obj_35464 = (js_index[k_35463]);var geom_35465 = (obj_35464["geojson"]);var feature_35466 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$612,"Feature",cljs.core.constant$keyword$613,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$614,(obj_35464["id"]),cljs.core.constant$keyword$615,(obj_35464["id"]),cljs.core.constant$keyword$616,(obj_35464["compact_name"])], null)], null));var __35467__$1 = (feature_35466["geometry"] = geom_35465);features.push(feature_35466);
{
var G__35468 = seq__35455_35459;
var G__35469 = chunk__35456_35460;
var G__35470 = count__35457_35461;
var G__35471 = (i__35458_35462 + 1);
seq__35455_35459 = G__35468;
chunk__35456_35460 = G__35469;
count__35457_35461 = G__35470;
i__35458_35462 = G__35471;
continue;
}
} else
{var temp__4126__auto___35472 = cljs.core.seq(seq__35455_35459);if(temp__4126__auto___35472)
{var seq__35455_35473__$1 = temp__4126__auto___35472;if(cljs.core.chunked_seq_QMARK_(seq__35455_35473__$1))
{var c__4295__auto___35474 = cljs.core.chunk_first(seq__35455_35473__$1);{
var G__35475 = cljs.core.chunk_rest(seq__35455_35473__$1);
var G__35476 = c__4295__auto___35474;
var G__35477 = cljs.core.count(c__4295__auto___35474);
var G__35478 = 0;
seq__35455_35459 = G__35475;
chunk__35456_35460 = G__35476;
count__35457_35461 = G__35477;
i__35458_35462 = G__35478;
continue;
}
} else
{var k_35479 = cljs.core.first(seq__35455_35473__$1);var obj_35480 = (js_index[k_35479]);var geom_35481 = (obj_35480["geojson"]);var feature_35482 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$612,"Feature",cljs.core.constant$keyword$613,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$614,(obj_35480["id"]),cljs.core.constant$keyword$615,(obj_35480["id"]),cljs.core.constant$keyword$616,(obj_35480["compact_name"])], null)], null));var __35483__$1 = (feature_35482["geometry"] = geom_35481);features.push(feature_35482);
{
var G__35484 = cljs.core.next(seq__35455_35473__$1);
var G__35485 = null;
var G__35486 = 0;
var G__35487 = 0;
seq__35455_35459 = G__35484;
chunk__35456_35460 = G__35485;
count__35457_35461 = G__35486;
i__35458_35462 = G__35487;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$617,x,cljs.core.constant$keyword$618,y,cljs.core.constant$keyword$619,0,cljs.core.constant$keyword$620,0], null)));return cljs.core.filter(((function (hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$612,"Point",cljs.core.constant$keyword$621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(hits))
,hits);
});
