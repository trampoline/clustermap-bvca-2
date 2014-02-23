// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__33848_33852 = cljs.core.seq.call(null,keys);var chunk__33849_33853 = null;var count__33850_33854 = 0;var i__33851_33855 = 0;while(true){
if((i__33851_33855 < count__33850_33854))
{var k_33856 = cljs.core._nth.call(null,chunk__33849_33853,i__33851_33855);var obj_33857 = (js_index[k_33856]);var geom_33858 = (obj_33857["geojson"]);var feature_33859 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33857["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33857["compact_name"])], null)], null));var __33860__$1 = (feature_33859["geometry"] = geom_33858);features.push(feature_33859);
{
var G__33861 = seq__33848_33852;
var G__33862 = chunk__33849_33853;
var G__33863 = count__33850_33854;
var G__33864 = (i__33851_33855 + 1);
seq__33848_33852 = G__33861;
chunk__33849_33853 = G__33862;
count__33850_33854 = G__33863;
i__33851_33855 = G__33864;
continue;
}
} else
{var temp__4092__auto___33865 = cljs.core.seq.call(null,seq__33848_33852);if(temp__4092__auto___33865)
{var seq__33848_33866__$1 = temp__4092__auto___33865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33848_33866__$1))
{var c__4148__auto___33867 = cljs.core.chunk_first.call(null,seq__33848_33866__$1);{
var G__33868 = cljs.core.chunk_rest.call(null,seq__33848_33866__$1);
var G__33869 = c__4148__auto___33867;
var G__33870 = cljs.core.count.call(null,c__4148__auto___33867);
var G__33871 = 0;
seq__33848_33852 = G__33868;
chunk__33849_33853 = G__33869;
count__33850_33854 = G__33870;
i__33851_33855 = G__33871;
continue;
}
} else
{var k_33872 = cljs.core.first.call(null,seq__33848_33866__$1);var obj_33873 = (js_index[k_33872]);var geom_33874 = (obj_33873["geojson"]);var feature_33875 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33873["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33873["compact_name"])], null)], null));var __33876__$1 = (feature_33875["geometry"] = geom_33874);features.push(feature_33875);
{
var G__33877 = cljs.core.next.call(null,seq__33848_33866__$1);
var G__33878 = null;
var G__33879 = 0;
var G__33880 = 0;
seq__33848_33852 = G__33877;
chunk__33849_33853 = G__33878;
count__33850_33854 = G__33879;
i__33851_33855 = G__33880;
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
