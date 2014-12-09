// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree((10)));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__13949_13953 = cljs.core.seq.call(null,keys);var chunk__13950_13954 = null;var count__13951_13955 = (0);var i__13952_13956 = (0);while(true){
if((i__13952_13956 < count__13951_13955))
{var k_13957 = cljs.core._nth.call(null,chunk__13950_13954,i__13952_13956);var obj_13958 = (js_index[k_13957]);var geom_13959 = (obj_13958["geojson"]);var feature_13960 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13958["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13958["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13958["compact_name"])], null)], null));var __13961__$1 = (feature_13960["geometry"] = geom_13959);features.push(feature_13960);
{
var G__13962 = seq__13949_13953;
var G__13963 = chunk__13950_13954;
var G__13964 = count__13951_13955;
var G__13965 = (i__13952_13956 + (1));
seq__13949_13953 = G__13962;
chunk__13950_13954 = G__13963;
count__13951_13955 = G__13964;
i__13952_13956 = G__13965;
continue;
}
} else
{var temp__4126__auto___13966 = cljs.core.seq.call(null,seq__13949_13953);if(temp__4126__auto___13966)
{var seq__13949_13967__$1 = temp__4126__auto___13966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13949_13967__$1))
{var c__4408__auto___13968 = cljs.core.chunk_first.call(null,seq__13949_13967__$1);{
var G__13969 = cljs.core.chunk_rest.call(null,seq__13949_13967__$1);
var G__13970 = c__4408__auto___13968;
var G__13971 = cljs.core.count.call(null,c__4408__auto___13968);
var G__13972 = (0);
seq__13949_13953 = G__13969;
chunk__13950_13954 = G__13970;
count__13951_13955 = G__13971;
i__13952_13956 = G__13972;
continue;
}
} else
{var k_13973 = cljs.core.first.call(null,seq__13949_13967__$1);var obj_13974 = (js_index[k_13973]);var geom_13975 = (obj_13974["geojson"]);var feature_13976 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_13974["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_13974["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_13974["compact_name"])], null)], null));var __13977__$1 = (feature_13976["geometry"] = geom_13975);features.push(feature_13976);
{
var G__13978 = cljs.core.next.call(null,seq__13949_13967__$1);
var G__13979 = null;
var G__13980 = (0);
var G__13981 = (0);
seq__13949_13953 = G__13978;
chunk__13950_13954 = G__13979;
count__13951_13955 = G__13980;
i__13952_13956 = G__13981;
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
