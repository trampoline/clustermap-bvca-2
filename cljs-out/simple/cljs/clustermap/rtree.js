// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree((10)));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__13947_13951 = cljs.core.seq.call(null,keys);var chunk__13948_13952 = null;var count__13949_13953 = (0);var i__13950_13954 = (0);while(true){
if((i__13950_13954 < count__13949_13953))
{var k_13955 = cljs.core._nth.call(null,chunk__13948_13952,i__13950_13954);var obj_13956 = (js_index[k_13955]);var geom_13957 = (obj_13956["geojson"]);var feature_13958 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13956["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13956["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13956["compact_name"])], null)], null));var __13959__$1 = (feature_13958["geometry"] = geom_13957);features.push(feature_13958);
{
var G__13960 = seq__13947_13951;
var G__13961 = chunk__13948_13952;
var G__13962 = count__13949_13953;
var G__13963 = (i__13950_13954 + (1));
seq__13947_13951 = G__13960;
chunk__13948_13952 = G__13961;
count__13949_13953 = G__13962;
i__13950_13954 = G__13963;
continue;
}
} else
{var temp__4126__auto___13964 = cljs.core.seq.call(null,seq__13947_13951);if(temp__4126__auto___13964)
{var seq__13947_13965__$1 = temp__4126__auto___13964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13947_13965__$1))
{var c__4400__auto___13966 = cljs.core.chunk_first.call(null,seq__13947_13965__$1);{
var G__13967 = cljs.core.chunk_rest.call(null,seq__13947_13965__$1);
var G__13968 = c__4400__auto___13966;
var G__13969 = cljs.core.count.call(null,c__4400__auto___13966);
var G__13970 = (0);
seq__13947_13951 = G__13967;
chunk__13948_13952 = G__13968;
count__13949_13953 = G__13969;
i__13950_13954 = G__13970;
continue;
}
} else
{var k_13971 = cljs.core.first.call(null,seq__13947_13965__$1);var obj_13972 = (js_index[k_13971]);var geom_13973 = (obj_13972["geojson"]);var feature_13974 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13972["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13972["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13972["compact_name"])], null)], null));var __13975__$1 = (feature_13974["geometry"] = geom_13973);features.push(feature_13974);
{
var G__13976 = cljs.core.next.call(null,seq__13947_13965__$1);
var G__13977 = null;
var G__13978 = (0);
var G__13979 = (0);
seq__13947_13951 = G__13976;
chunk__13948_13952 = G__13977;
count__13949_13953 = G__13978;
i__13950_13954 = G__13979;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null)));return cljs.core.filter.call(null,((function (hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(hits))
,hits);
});
