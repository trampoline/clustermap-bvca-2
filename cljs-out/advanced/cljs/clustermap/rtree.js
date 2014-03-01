// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$305,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23757_23761 = cljs.core.seq(keys);var chunk__23758_23762 = null;var count__23759_23763 = 0;var i__23760_23764 = 0;while(true){
if((i__23760_23764 < count__23759_23763))
{var k_23765 = chunk__23758_23762.cljs$core$IIndexed$_nth$arity$2(null,i__23760_23764);var obj_23766 = (js_index[k_23765]);var geom_23767 = (obj_23766["geojson"]);var feature_23768 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,"Feature",cljs.core.constant$keyword$448,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$301,(obj_23766["id"]),cljs.core.constant$keyword$366,(obj_23766["compact_name"])], null)], null));var __23769__$1 = (feature_23768["geometry"] = geom_23767);features.push(feature_23768);
{
var G__23770 = seq__23757_23761;
var G__23771 = chunk__23758_23762;
var G__23772 = count__23759_23763;
var G__23773 = (i__23760_23764 + 1);
seq__23757_23761 = G__23770;
chunk__23758_23762 = G__23771;
count__23759_23763 = G__23772;
i__23760_23764 = G__23773;
continue;
}
} else
{var temp__4092__auto___23774 = cljs.core.seq(seq__23757_23761);if(temp__4092__auto___23774)
{var seq__23757_23775__$1 = temp__4092__auto___23774;if(cljs.core.chunked_seq_QMARK_(seq__23757_23775__$1))
{var c__4148__auto___23776 = cljs.core.chunk_first(seq__23757_23775__$1);{
var G__23777 = cljs.core.chunk_rest(seq__23757_23775__$1);
var G__23778 = c__4148__auto___23776;
var G__23779 = cljs.core.count(c__4148__auto___23776);
var G__23780 = 0;
seq__23757_23761 = G__23777;
chunk__23758_23762 = G__23778;
count__23759_23763 = G__23779;
i__23760_23764 = G__23780;
continue;
}
} else
{var k_23781 = cljs.core.first(seq__23757_23775__$1);var obj_23782 = (js_index[k_23781]);var geom_23783 = (obj_23782["geojson"]);var feature_23784 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,"Feature",cljs.core.constant$keyword$448,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$301,(obj_23782["id"]),cljs.core.constant$keyword$366,(obj_23782["compact_name"])], null)], null));var __23785__$1 = (feature_23784["geometry"] = geom_23783);features.push(feature_23784);
{
var G__23786 = cljs.core.next(seq__23757_23775__$1);
var G__23787 = null;
var G__23788 = 0;
var G__23789 = 0;
seq__23757_23761 = G__23786;
chunk__23758_23762 = G__23787;
count__23759_23763 = G__23788;
i__23760_23764 = G__23789;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$449,x,cljs.core.constant$keyword$450,y,cljs.core.constant$keyword$451,0,cljs.core.constant$keyword$452,0], null)));return cljs.core.filter((function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,"Point",cljs.core.constant$keyword$453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
