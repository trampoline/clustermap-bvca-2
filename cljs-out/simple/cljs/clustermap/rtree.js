// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12970_12974 = cljs.core.seq.call(null,keys);var chunk__12971_12975 = null;var count__12972_12976 = 0;var i__12973_12977 = 0;while(true){
if((i__12973_12977 < count__12972_12976))
{var k_12978 = cljs.core._nth.call(null,chunk__12971_12975,i__12973_12977);var obj_12979 = (js_index[k_12978]);var geom_12980 = (obj_12979["geojson"]);var feature_12981 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12979["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12979["compact_name"])], null)], null));var __12982__$1 = (feature_12981["geometry"] = geom_12980);features.push(feature_12981);
{
var G__12983 = seq__12970_12974;
var G__12984 = chunk__12971_12975;
var G__12985 = count__12972_12976;
var G__12986 = (i__12973_12977 + 1);
seq__12970_12974 = G__12983;
chunk__12971_12975 = G__12984;
count__12972_12976 = G__12985;
i__12973_12977 = G__12986;
continue;
}
} else
{var temp__4092__auto___12987 = cljs.core.seq.call(null,seq__12970_12974);if(temp__4092__auto___12987)
{var seq__12970_12988__$1 = temp__4092__auto___12987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12970_12988__$1))
{var c__4189__auto___12989 = cljs.core.chunk_first.call(null,seq__12970_12988__$1);{
var G__12990 = cljs.core.chunk_rest.call(null,seq__12970_12988__$1);
var G__12991 = c__4189__auto___12989;
var G__12992 = cljs.core.count.call(null,c__4189__auto___12989);
var G__12993 = 0;
seq__12970_12974 = G__12990;
chunk__12971_12975 = G__12991;
count__12972_12976 = G__12992;
i__12973_12977 = G__12993;
continue;
}
} else
{var k_12994 = cljs.core.first.call(null,seq__12970_12988__$1);var obj_12995 = (js_index[k_12994]);var geom_12996 = (obj_12995["geojson"]);var feature_12997 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12995["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12995["compact_name"])], null)], null));var __12998__$1 = (feature_12997["geometry"] = geom_12996);features.push(feature_12997);
{
var G__12999 = cljs.core.next.call(null,seq__12970_12988__$1);
var G__13000 = null;
var G__13001 = 0;
var G__13002 = 0;
seq__12970_12974 = G__12999;
chunk__12971_12975 = G__13000;
count__12972_12976 = G__13001;
i__12973_12977 = G__13002;
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
