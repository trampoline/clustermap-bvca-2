// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__12257){var vec__12258 = p__12257;var z = cljs.core.nth.call(null,vec__12258,(0),null);var t = cljs.core.nth.call(null,vec__12258,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= z);
} else
{return and__3531__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3543__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.call(null,boundaryline_id,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.call(null,use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,use_korks,path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,use_korks,path){
return (function (state_12278){var state_val_12279 = (state_12278[(1)]);if((state_val_12279 === (2)))
{var inst_12274 = (state_12278[(2)]);var inst_12275 = (function (){var bl = inst_12274;return ((function (bl,inst_12274,state_val_12279,c__5693__auto__,comm,use_korks,path){
return (function (old){return bl;
});
;})(bl,inst_12274,state_val_12279,c__5693__auto__,comm,use_korks,path))
})();var inst_12276 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,path,inst_12275);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12278__$1,inst_12276);
} else
{if((state_val_12279 === (1)))
{var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12278__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,use_korks,path))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,use_korks,path){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12283 = [null,null,null,null,null,null,null];(statearr_12283[(0)] = state_machine__5679__auto__);
(statearr_12283[(1)] = (1));
return statearr_12283;
});
var state_machine__5679__auto____1 = (function (state_12278){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12278);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12284){if((e12284 instanceof Object))
{var ex__5682__auto__ = e12284;var statearr_12285_12287 = state_12278;(statearr_12285_12287[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12278);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12288 = state_12278;
state_12278 = G__12288;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12278){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,use_korks,path))
})();var state__5695__auto__ = (function (){var statearr_12286 = f__5694__auto__.call(null);(statearr_12286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_12286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,use_korks,path))
);
return c__5693__auto__;
});
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3531__auto__ = default_bl;if(cljs.core.truth_(and__3531__auto__))
{return default_tol;
} else
{return and__3531__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
/**
* gets the best boundaryline version for a zoom level...
* if the best isn't available, fetches it async and immediately
* returns the next best available
* - default : default value to return if nothing currently available
* - min-zoom : if (<= zoom min-zoom) do nothing and return the default
* returns [tolerance, boundaryline] or default if nothing is available or
* (<= zoom min-zoom)
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundaryline = (function() { 
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,collection_id,boundaryline_id,zoom,p__12289){var map__12291 = p__12289;var map__12291__$1 = ((cljs.core.seq_QMARK_.call(null,map__12291))?cljs.core.apply.call(null,cljs.core.hash_map,map__12291):map__12291);var min_zoom = cljs.core.get.call(null,map__12291__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index.call(null,index,boundaryline_id);
} else
{var boundarylines_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var boundarylines = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),boundarylines_path);var bl_versions = cljs.core.get.call(null,boundarylines,boundaryline_id);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get_in.call(null,boundarylines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,use_tol], null));if(cljs.core.not_EQ_.call(null,i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline.call(null,app_state,boundarylines_path,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,index,boundaryline_id);
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,korks,collection_id,boundaryline_id,zoom,var_args){
var p__12289 = null;if (arguments.length > 5) {
  p__12289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,collection_id,boundaryline_id,zoom,p__12289);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__12292){
var app_state = cljs.core.first(arglist__12292);
arglist__12292 = cljs.core.next(arglist__12292);
var korks = cljs.core.first(arglist__12292);
arglist__12292 = cljs.core.next(arglist__12292);
var collection_id = cljs.core.first(arglist__12292);
arglist__12292 = cljs.core.next(arglist__12292);
var boundaryline_id = cljs.core.first(arglist__12292);
arglist__12292 = cljs.core.next(arglist__12292);
var zoom = cljs.core.first(arglist__12292);
var p__12289 = cljs.core.rest(arglist__12292);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,collection_id,boundaryline_id,zoom,p__12289);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundaryline_collections_path,collection_id){var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rtree_path,((function (all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12297_12301 = cljs.core.seq.call(null,keys);var chunk__12298_12302 = null;var count__12299_12303 = (0);var i__12300_12304 = (0);while(true){
if((i__12300_12304 < count__12299_12303))
{var k_12305 = cljs.core._nth.call(null,chunk__12298_12302,i__12300_12304);var obj_12306 = (js_index[k_12305]);var geom_12307 = (obj_12306["geojson"]);var feature_12308 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12306["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12306["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12306["compact_name"])], null)], null));var __12309__$1 = (feature_12308["geometry"] = geom_12307);var __12310__$2 = ((feature_12308["properties"])["index_object"] = obj_12306);features.push(feature_12308);
{
var G__12311 = seq__12297_12301;
var G__12312 = chunk__12298_12302;
var G__12313 = count__12299_12303;
var G__12314 = (i__12300_12304 + (1));
seq__12297_12301 = G__12311;
chunk__12298_12302 = G__12312;
count__12299_12303 = G__12313;
i__12300_12304 = G__12314;
continue;
}
} else
{var temp__4126__auto___12315 = cljs.core.seq.call(null,seq__12297_12301);if(temp__4126__auto___12315)
{var seq__12297_12316__$1 = temp__4126__auto___12315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12297_12316__$1))
{var c__4299__auto___12317 = cljs.core.chunk_first.call(null,seq__12297_12316__$1);{
var G__12318 = cljs.core.chunk_rest.call(null,seq__12297_12316__$1);
var G__12319 = c__4299__auto___12317;
var G__12320 = cljs.core.count.call(null,c__4299__auto___12317);
var G__12321 = (0);
seq__12297_12301 = G__12318;
chunk__12298_12302 = G__12319;
count__12299_12303 = G__12320;
i__12300_12304 = G__12321;
continue;
}
} else
{var k_12322 = cljs.core.first.call(null,seq__12297_12316__$1);var obj_12323 = (js_index[k_12322]);var geom_12324 = (obj_12323["geojson"]);var feature_12325 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12323["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12323["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12323["compact_name"])], null)], null));var __12326__$1 = (feature_12325["geometry"] = geom_12324);var __12327__$2 = ((feature_12325["properties"])["index_object"] = obj_12323);features.push(feature_12325);
{
var G__12328 = cljs.core.next.call(null,seq__12297_12316__$1);
var G__12329 = null;
var G__12330 = (0);
var G__12331 = (0);
seq__12297_12301 = G__12328;
chunk__12298_12302 = G__12329;
count__12299_12303 = G__12330;
i__12300_12304 = G__12331;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundaryline_collections_path,collection_id){var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree.call(null,app_state,boundaryline_collections_path,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_12374){var state_val_12375 = (state_12374[(1)]);if((state_val_12375 === (5)))
{var inst_12372 = (state_12374[(2)]);var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12374__$1,inst_12372);
} else
{if((state_val_12375 === (4)))
{var state_12374__$1 = state_12374;var statearr_12376_12388 = state_12374__$1;(statearr_12376_12388[(2)] = null);
(statearr_12376_12388[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12375 === (3)))
{var inst_12362 = (state_12374[(7)]);var inst_12369 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_12362);var state_12374__$1 = state_12374;var statearr_12377_12389 = state_12374__$1;(statearr_12377_12389[(2)] = inst_12369);
(statearr_12377_12389[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12375 === (2)))
{var inst_12362 = (state_12374[(7)]);var inst_12362__$1 = (state_12374[(2)]);var inst_12363 = (function (){var bl_coll_index = inst_12362__$1;return ((function (bl_coll_index,inst_12362,inst_12362__$1,state_val_12375,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_12362,inst_12362__$1,state_val_12375,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_12364 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_12363);var inst_12365 = cljs.core.deref.call(null,app_state);var inst_12366 = cljs.core.get_in.call(null,inst_12365,index_path);var inst_12367 = cljs.core._EQ_.call(null,inst_12366,inst_12362__$1);var state_12374__$1 = (function (){var statearr_12378 = state_12374;(statearr_12378[(7)] = inst_12362__$1);
(statearr_12378[(8)] = inst_12364);
return statearr_12378;
})();if(inst_12367)
{var statearr_12379_12390 = state_12374__$1;(statearr_12379_12390[(1)] = (3));
} else
{var statearr_12380_12391 = state_12374__$1;(statearr_12380_12391[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12375 === (1)))
{var inst_12360 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12374__$1,(2),inst_12360);
} else
{return null;
}
}
}
}
}
});})(c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5678__auto__,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_12384 = [null,null,null,null,null,null,null,null,null];(statearr_12384[(0)] = state_machine__5679__auto__);
(statearr_12384[(1)] = (1));
return statearr_12384;
});
var state_machine__5679__auto____1 = (function (state_12374){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_12374);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e12385){if((e12385 instanceof Object))
{var ex__5682__auto__ = e12385;var statearr_12386_12392 = state_12374;(statearr_12386_12392[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12374);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12393 = state_12374;
state_12374 = G__12393;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_12374){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_12374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_12387 = f__5694__auto__.call(null);(statearr_12387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_12387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundaryline_collections_path,collection_id,x,y){var all_collections_path = ((cljs.core.sequential_QMARK_.call(null,boundaryline_collections_path))?boundaryline_collections_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_collections_path], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));var rtree = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null))):null);return cljs.core.map.call(null,((function (all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hit.properties.id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),hit.properties.compact_name], null);
});})(all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.call(null,((function (all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
