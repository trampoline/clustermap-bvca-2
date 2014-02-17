// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__17956_17960 = cljs.core.seq.call(null,keys);var chunk__17957_17961 = null;var count__17958_17962 = 0;var i__17959_17963 = 0;while(true){
if((i__17959_17963 < count__17958_17962))
{var k_17964 = cljs.core._nth.call(null,chunk__17957_17961,i__17959_17963);var obj_17965 = (js_index[k_17964]);var geom_17966 = (obj_17965["geojson"]);var feature_17967 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_17965["id"])], null)], null));var __17968__$1 = (feature_17967["geometry"] = geom_17966);features.push(feature_17967);
{
var G__17969 = seq__17956_17960;
var G__17970 = chunk__17957_17961;
var G__17971 = count__17958_17962;
var G__17972 = (i__17959_17963 + 1);
seq__17956_17960 = G__17969;
chunk__17957_17961 = G__17970;
count__17958_17962 = G__17971;
i__17959_17963 = G__17972;
continue;
}
} else
{var temp__4092__auto___17973 = cljs.core.seq.call(null,seq__17956_17960);if(temp__4092__auto___17973)
{var seq__17956_17974__$1 = temp__4092__auto___17973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17956_17974__$1))
{var c__4148__auto___17975 = cljs.core.chunk_first.call(null,seq__17956_17974__$1);{
var G__17976 = cljs.core.chunk_rest.call(null,seq__17956_17974__$1);
var G__17977 = c__4148__auto___17975;
var G__17978 = cljs.core.count.call(null,c__4148__auto___17975);
var G__17979 = 0;
seq__17956_17960 = G__17976;
chunk__17957_17961 = G__17977;
count__17958_17962 = G__17978;
i__17959_17963 = G__17979;
continue;
}
} else
{var k_17980 = cljs.core.first.call(null,seq__17956_17974__$1);var obj_17981 = (js_index[k_17980]);var geom_17982 = (obj_17981["geojson"]);var feature_17983 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_17981["id"])], null)], null));var __17984__$1 = (feature_17983["geometry"] = geom_17982);features.push(feature_17983);
{
var G__17985 = cljs.core.next.call(null,seq__17956_17974__$1);
var G__17986 = null;
var G__17987 = 0;
var G__17988 = 0;
seq__17956_17960 = G__17985;
chunk__17957_17961 = G__17986;
count__17958_17962 = G__17987;
i__17959_17963 = G__17988;
continue;
}
}
} else
{}
}
break;
}
console.log(js_feature_coll);
rtree.geoJSON(js_feature_coll);
return rtree;
});

//# sourceMappingURL=rtree.js.map