// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12954_12958 = cljs.core.seq.call(null,keys);var chunk__12955_12959 = null;var count__12956_12960 = 0;var i__12957_12961 = 0;while(true){
if((i__12957_12961 < count__12956_12960))
{var k_12962 = cljs.core._nth.call(null,chunk__12955_12959,i__12957_12961);var obj_12963 = (js_index[k_12962]);var geom_12964 = (obj_12963["geojson"]);var feature_12965 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12963["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12963["compact_name"])], null)], null));var __12966__$1 = (feature_12965["geometry"] = geom_12964);features.push(feature_12965);
{
var G__12967 = seq__12954_12958;
var G__12968 = chunk__12955_12959;
var G__12969 = count__12956_12960;
var G__12970 = (i__12957_12961 + 1);
seq__12954_12958 = G__12967;
chunk__12955_12959 = G__12968;
count__12956_12960 = G__12969;
i__12957_12961 = G__12970;
continue;
}
} else
{var temp__4092__auto___12971 = cljs.core.seq.call(null,seq__12954_12958);if(temp__4092__auto___12971)
{var seq__12954_12972__$1 = temp__4092__auto___12971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12954_12972__$1))
{var c__4189__auto___12973 = cljs.core.chunk_first.call(null,seq__12954_12972__$1);{
var G__12974 = cljs.core.chunk_rest.call(null,seq__12954_12972__$1);
var G__12975 = c__4189__auto___12973;
var G__12976 = cljs.core.count.call(null,c__4189__auto___12973);
var G__12977 = 0;
seq__12954_12958 = G__12974;
chunk__12955_12959 = G__12975;
count__12956_12960 = G__12976;
i__12957_12961 = G__12977;
continue;
}
} else
{var k_12978 = cljs.core.first.call(null,seq__12954_12972__$1);var obj_12979 = (js_index[k_12978]);var geom_12980 = (obj_12979["geojson"]);var feature_12981 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12979["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12979["compact_name"])], null)], null));var __12982__$1 = (feature_12981["geometry"] = geom_12980);features.push(feature_12981);
{
var G__12983 = cljs.core.next.call(null,seq__12954_12972__$1);
var G__12984 = null;
var G__12985 = 0;
var G__12986 = 0;
seq__12954_12958 = G__12983;
chunk__12955_12959 = G__12984;
count__12956_12960 = G__12985;
i__12957_12961 = G__12986;
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
