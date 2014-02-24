// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__33788_33792 = cljs.core.seq.call(null,keys);var chunk__33789_33793 = null;var count__33790_33794 = 0;var i__33791_33795 = 0;while(true){
if((i__33791_33795 < count__33790_33794))
{var k_33796 = cljs.core._nth.call(null,chunk__33789_33793,i__33791_33795);var obj_33797 = (js_index[k_33796]);var geom_33798 = (obj_33797["geojson"]);var feature_33799 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33797["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33797["compact_name"])], null)], null));var __33800__$1 = (feature_33799["geometry"] = geom_33798);features.push(feature_33799);
{
var G__33801 = seq__33788_33792;
var G__33802 = chunk__33789_33793;
var G__33803 = count__33790_33794;
var G__33804 = (i__33791_33795 + 1);
seq__33788_33792 = G__33801;
chunk__33789_33793 = G__33802;
count__33790_33794 = G__33803;
i__33791_33795 = G__33804;
continue;
}
} else
{var temp__4092__auto___33805 = cljs.core.seq.call(null,seq__33788_33792);if(temp__4092__auto___33805)
{var seq__33788_33806__$1 = temp__4092__auto___33805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33788_33806__$1))
{var c__4148__auto___33807 = cljs.core.chunk_first.call(null,seq__33788_33806__$1);{
var G__33808 = cljs.core.chunk_rest.call(null,seq__33788_33806__$1);
var G__33809 = c__4148__auto___33807;
var G__33810 = cljs.core.count.call(null,c__4148__auto___33807);
var G__33811 = 0;
seq__33788_33792 = G__33808;
chunk__33789_33793 = G__33809;
count__33790_33794 = G__33810;
i__33791_33795 = G__33811;
continue;
}
} else
{var k_33812 = cljs.core.first.call(null,seq__33788_33806__$1);var obj_33813 = (js_index[k_33812]);var geom_33814 = (obj_33813["geojson"]);var feature_33815 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_33813["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_33813["compact_name"])], null)], null));var __33816__$1 = (feature_33815["geometry"] = geom_33814);features.push(feature_33815);
{
var G__33817 = cljs.core.next.call(null,seq__33788_33806__$1);
var G__33818 = null;
var G__33819 = 0;
var G__33820 = 0;
seq__33788_33792 = G__33817;
chunk__33789_33793 = G__33818;
count__33790_33794 = G__33819;
i__33791_33795 = G__33820;
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
