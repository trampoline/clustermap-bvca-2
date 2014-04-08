// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12910_12914 = cljs.core.seq.call(null,keys);var chunk__12911_12915 = null;var count__12912_12916 = 0;var i__12913_12917 = 0;while(true){
if((i__12913_12917 < count__12912_12916))
{var k_12918 = cljs.core._nth.call(null,chunk__12911_12915,i__12913_12917);var obj_12919 = (js_index[k_12918]);var geom_12920 = (obj_12919["geojson"]);var feature_12921 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12919["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_12919["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12919["compact_name"])], null)], null));var __12922__$1 = (feature_12921["geometry"] = geom_12920);features.push(feature_12921);
{
var G__12923 = seq__12910_12914;
var G__12924 = chunk__12911_12915;
var G__12925 = count__12912_12916;
var G__12926 = (i__12913_12917 + 1);
seq__12910_12914 = G__12923;
chunk__12911_12915 = G__12924;
count__12912_12916 = G__12925;
i__12913_12917 = G__12926;
continue;
}
} else
{var temp__4092__auto___12927 = cljs.core.seq.call(null,seq__12910_12914);if(temp__4092__auto___12927)
{var seq__12910_12928__$1 = temp__4092__auto___12927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12910_12928__$1))
{var c__4189__auto___12929 = cljs.core.chunk_first.call(null,seq__12910_12928__$1);{
var G__12930 = cljs.core.chunk_rest.call(null,seq__12910_12928__$1);
var G__12931 = c__4189__auto___12929;
var G__12932 = cljs.core.count.call(null,c__4189__auto___12929);
var G__12933 = 0;
seq__12910_12914 = G__12930;
chunk__12911_12915 = G__12931;
count__12912_12916 = G__12932;
i__12913_12917 = G__12933;
continue;
}
} else
{var k_12934 = cljs.core.first.call(null,seq__12910_12928__$1);var obj_12935 = (js_index[k_12934]);var geom_12936 = (obj_12935["geojson"]);var feature_12937 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_12935["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),(obj_12935["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_12935["compact_name"])], null)], null));var __12938__$1 = (feature_12937["geometry"] = geom_12936);features.push(feature_12937);
{
var G__12939 = cljs.core.next.call(null,seq__12910_12928__$1);
var G__12940 = null;
var G__12941 = 0;
var G__12942 = 0;
seq__12910_12914 = G__12939;
chunk__12911_12915 = G__12940;
count__12912_12916 = G__12941;
i__12913_12917 = G__12942;
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
