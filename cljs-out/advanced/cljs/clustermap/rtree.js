// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$588,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__34704_34708 = cljs.core.seq(keys);var chunk__34705_34709 = null;var count__34706_34710 = 0;var i__34707_34711 = 0;while(true){
if((i__34707_34711 < count__34706_34710))
{var k_34712 = chunk__34705_34709.cljs$core$IIndexed$_nth$arity$2(null,i__34707_34711);var obj_34713 = (js_index[k_34712]);var geom_34714 = (obj_34713["geojson"]);var feature_34715 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"Feature",cljs.core.constant$keyword$742,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,(obj_34713["id"]),cljs.core.constant$keyword$660,(obj_34713["compact_name"])], null)], null));var __34716__$1 = (feature_34715["geometry"] = geom_34714);features.push(feature_34715);
{
var G__34717 = seq__34704_34708;
var G__34718 = chunk__34705_34709;
var G__34719 = count__34706_34710;
var G__34720 = (i__34707_34711 + 1);
seq__34704_34708 = G__34717;
chunk__34705_34709 = G__34718;
count__34706_34710 = G__34719;
i__34707_34711 = G__34720;
continue;
}
} else
{var temp__4092__auto___34721 = cljs.core.seq(seq__34704_34708);if(temp__4092__auto___34721)
{var seq__34704_34722__$1 = temp__4092__auto___34721;if(cljs.core.chunked_seq_QMARK_(seq__34704_34722__$1))
{var c__4189__auto___34723 = cljs.core.chunk_first(seq__34704_34722__$1);{
var G__34724 = cljs.core.chunk_rest(seq__34704_34722__$1);
var G__34725 = c__4189__auto___34723;
var G__34726 = cljs.core.count(c__4189__auto___34723);
var G__34727 = 0;
seq__34704_34708 = G__34724;
chunk__34705_34709 = G__34725;
count__34706_34710 = G__34726;
i__34707_34711 = G__34727;
continue;
}
} else
{var k_34728 = cljs.core.first(seq__34704_34722__$1);var obj_34729 = (js_index[k_34728]);var geom_34730 = (obj_34729["geojson"]);var feature_34731 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"Feature",cljs.core.constant$keyword$742,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,(obj_34729["id"]),cljs.core.constant$keyword$660,(obj_34729["compact_name"])], null)], null));var __34732__$1 = (feature_34731["geometry"] = geom_34730);features.push(feature_34731);
{
var G__34733 = cljs.core.next(seq__34704_34722__$1);
var G__34734 = null;
var G__34735 = 0;
var G__34736 = 0;
seq__34704_34708 = G__34733;
chunk__34705_34709 = G__34734;
count__34706_34710 = G__34735;
i__34707_34711 = G__34736;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$743,x,cljs.core.constant$keyword$744,y,cljs.core.constant$keyword$745,0,cljs.core.constant$keyword$746,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"Point",cljs.core.constant$keyword$747,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
