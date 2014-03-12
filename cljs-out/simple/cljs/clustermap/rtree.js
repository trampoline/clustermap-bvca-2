// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12966_12970 = cljs.core.seq.call(null,keys);var chunk__12967_12971 = null;var count__12968_12972 = 0;var i__12969_12973 = 0;while(true){
if((i__12969_12973 < count__12968_12972))
{var k_12974 = cljs.core._nth.call(null,chunk__12967_12971,i__12969_12973);var obj_12975 = (js_index[k_12974]);var geom_12976 = (obj_12975["geojson"]);var feature_12977 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12975["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12975["compact_name"])], null)], null));var __12978__$1 = (feature_12977["geometry"] = geom_12976);features.push(feature_12977);
{
var G__12979 = seq__12966_12970;
var G__12980 = chunk__12967_12971;
var G__12981 = count__12968_12972;
var G__12982 = (i__12969_12973 + 1);
seq__12966_12970 = G__12979;
chunk__12967_12971 = G__12980;
count__12968_12972 = G__12981;
i__12969_12973 = G__12982;
continue;
}
} else
{var temp__4092__auto___12983 = cljs.core.seq.call(null,seq__12966_12970);if(temp__4092__auto___12983)
{var seq__12966_12984__$1 = temp__4092__auto___12983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12966_12984__$1))
{var c__4189__auto___12985 = cljs.core.chunk_first.call(null,seq__12966_12984__$1);{
var G__12986 = cljs.core.chunk_rest.call(null,seq__12966_12984__$1);
var G__12987 = c__4189__auto___12985;
var G__12988 = cljs.core.count.call(null,c__4189__auto___12985);
var G__12989 = 0;
seq__12966_12970 = G__12986;
chunk__12967_12971 = G__12987;
count__12968_12972 = G__12988;
i__12969_12973 = G__12989;
continue;
}
} else
{var k_12990 = cljs.core.first.call(null,seq__12966_12984__$1);var obj_12991 = (js_index[k_12990]);var geom_12992 = (obj_12991["geojson"]);var feature_12993 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12991["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12991["compact_name"])], null)], null));var __12994__$1 = (feature_12993["geometry"] = geom_12992);features.push(feature_12993);
{
var G__12995 = cljs.core.next.call(null,seq__12966_12984__$1);
var G__12996 = null;
var G__12997 = 0;
var G__12998 = 0;
seq__12966_12970 = G__12995;
chunk__12967_12971 = G__12996;
count__12968_12972 = G__12997;
i__12969_12973 = G__12998;
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
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"w","w",1013904361),0,new cljs.core.Keyword(null,"h","h",1013904346),0], null)));return cljs.core.filter.call(null,(function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
