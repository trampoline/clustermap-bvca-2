// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__45605_45609 = cljs.core.seq.call(null,keys);var chunk__45606_45610 = null;var count__45607_45611 = 0;var i__45608_45612 = 0;while(true){
if((i__45608_45612 < count__45607_45611))
{var k_45613 = cljs.core._nth.call(null,chunk__45606_45610,i__45608_45612);var obj_45614 = (js_index[k_45613]);var geom_45615 = (obj_45614["geojson"]);var feature_45616 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45614["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45614["compact_name"])], null)], null));var __45617__$1 = (feature_45616["geometry"] = geom_45615);features.push(feature_45616);
{
var G__45618 = seq__45605_45609;
var G__45619 = chunk__45606_45610;
var G__45620 = count__45607_45611;
var G__45621 = (i__45608_45612 + 1);
seq__45605_45609 = G__45618;
chunk__45606_45610 = G__45619;
count__45607_45611 = G__45620;
i__45608_45612 = G__45621;
continue;
}
} else
{var temp__4092__auto___45622 = cljs.core.seq.call(null,seq__45605_45609);if(temp__4092__auto___45622)
{var seq__45605_45623__$1 = temp__4092__auto___45622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45605_45623__$1))
{var c__4189__auto___45624 = cljs.core.chunk_first.call(null,seq__45605_45623__$1);{
var G__45625 = cljs.core.chunk_rest.call(null,seq__45605_45623__$1);
var G__45626 = c__4189__auto___45624;
var G__45627 = cljs.core.count.call(null,c__4189__auto___45624);
var G__45628 = 0;
seq__45605_45609 = G__45625;
chunk__45606_45610 = G__45626;
count__45607_45611 = G__45627;
i__45608_45612 = G__45628;
continue;
}
} else
{var k_45629 = cljs.core.first.call(null,seq__45605_45623__$1);var obj_45630 = (js_index[k_45629]);var geom_45631 = (obj_45630["geojson"]);var feature_45632 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45630["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45630["compact_name"])], null)], null));var __45633__$1 = (feature_45632["geometry"] = geom_45631);features.push(feature_45632);
{
var G__45634 = cljs.core.next.call(null,seq__45605_45623__$1);
var G__45635 = null;
var G__45636 = 0;
var G__45637 = 0;
seq__45605_45609 = G__45634;
chunk__45606_45610 = G__45635;
count__45607_45611 = G__45636;
i__45608_45612 = G__45637;
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
