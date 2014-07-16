// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__48242){var vec__48243 = p__48242;var z = cljs.core.nth.call(null,vec__48243,(0),null);var t = cljs.core.nth.call(null,vec__48243,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{if(true)
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{return null;
}
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the collection-specific cache
* and the general cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,boundarylines_path,collection_boundarylines_path,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.call(null,boundaryline_id,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var collection_cache_path = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null)):null);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (state_48280){var state_val_48281 = (state_48280[(1)]);if((state_val_48281 === (5)))
{var inst_48278 = (state_48280[(2)]);var state_48280__$1 = state_48280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48280__$1,inst_48278);
} else
{if((state_val_48281 === (4)))
{var state_48280__$1 = state_48280;var statearr_48282_48294 = state_48280__$1;(statearr_48282_48294[(2)] = null);
(statearr_48282_48294[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48281 === (3)))
{var inst_48270 = (state_48280[(7)]);var inst_48274 = (function (){var bl = inst_48270;return ((function (bl,inst_48270,state_val_48281,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_48270,state_val_48281,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_48275 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path,inst_48274);var state_48280__$1 = state_48280;var statearr_48283_48295 = state_48280__$1;(statearr_48283_48295[(2)] = inst_48275);
(statearr_48283_48295[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48281 === (2)))
{var inst_48270 = (state_48280[(7)]);var inst_48270__$1 = (state_48280[(2)]);var inst_48271 = (function (){var bl = inst_48270__$1;return ((function (bl,inst_48270,inst_48270__$1,state_val_48281,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_48270,inst_48270__$1,state_val_48281,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_48272 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path,inst_48271);var state_48280__$1 = (function (){var statearr_48284 = state_48280;(statearr_48284[(7)] = inst_48270__$1);
(statearr_48284[(8)] = inst_48272);
return statearr_48284;
})();if(cljs.core.truth_(collection_cache_path))
{var statearr_48285_48296 = state_48280__$1;(statearr_48285_48296[(1)] = (3));
} else
{var statearr_48286_48297 = state_48280__$1;(statearr_48286_48297[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48281 === (1)))
{var state_48280__$1 = state_48280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48280__$1,(2),comm);
} else
{return null;
}
}
}
}
}
});})(c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48290 = [null,null,null,null,null,null,null,null,null];(statearr_48290[(0)] = state_machine__5679__auto__);
(statearr_48290[(1)] = (1));
return statearr_48290;
});
var state_machine__5679__auto____1 = (function (state_48280){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48280);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48291){if((e48291 instanceof Object))
{var ex__5682__auto__ = e48291;var statearr_48292_48298 = state_48280;(statearr_48292_48298[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48299 = state_48280;
state_48280 = G__48299;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48280){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var state__5695__auto__ = (function (){var statearr_48293 = f__5694__auto__.call(null);(statearr_48293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__48300){var map__48302 = p__48300;var map__48302__$1 = ((cljs.core.seq_QMARK_.call(null,map__48302))?cljs.core.apply.call(null,cljs.core.hash_map,map__48302):map__48302);var min_zoom = cljs.core.get.call(null,map__48302__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
} else
{var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get.call(null,bl_versions,use_tol);if(cljs.core.not_EQ_.call(null,i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline.call(null,app_state,general_cache_path,collection_cache_path,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,var_args){
var p__48300 = null;if (arguments.length > 5) {
  p__48300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__48300);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__48303){
var app_state = cljs.core.first(arglist__48303);
arglist__48303 = cljs.core.next(arglist__48303);
var boundarylines_path = cljs.core.first(arglist__48303);
arglist__48303 = cljs.core.next(arglist__48303);
var collection_id = cljs.core.first(arglist__48303);
arglist__48303 = cljs.core.next(arglist__48303);
var boundaryline_id = cljs.core.first(arglist__48303);
arglist__48303 = cljs.core.next(arglist__48303);
var zoom = cljs.core.first(arglist__48303);
var p__48300 = cljs.core.rest(arglist__48303);
return get_or_fetch_best_boundaryline__delegate(app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__48300);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__48308_48312 = cljs.core.seq.call(null,keys);var chunk__48309_48313 = null;var count__48310_48314 = (0);var i__48311_48315 = (0);while(true){
if((i__48311_48315 < count__48310_48314))
{var k_48316 = cljs.core._nth.call(null,chunk__48309_48313,i__48311_48315);var obj_48317 = (js_index[k_48316]);var geom_48318 = (obj_48317["geojson"]);var feature_48319 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_48317["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_48317["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_48317["compact_name"])], null)], null));var __48320__$1 = (feature_48319["geometry"] = geom_48318);var __48321__$2 = ((feature_48319["properties"])["index_object"] = obj_48317);features.push(feature_48319);
{
var G__48322 = seq__48308_48312;
var G__48323 = chunk__48309_48313;
var G__48324 = count__48310_48314;
var G__48325 = (i__48311_48315 + (1));
seq__48308_48312 = G__48322;
chunk__48309_48313 = G__48323;
count__48310_48314 = G__48324;
i__48311_48315 = G__48325;
continue;
}
} else
{var temp__4126__auto___48326 = cljs.core.seq.call(null,seq__48308_48312);if(temp__4126__auto___48326)
{var seq__48308_48327__$1 = temp__4126__auto___48326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48308_48327__$1))
{var c__4299__auto___48328 = cljs.core.chunk_first.call(null,seq__48308_48327__$1);{
var G__48329 = cljs.core.chunk_rest.call(null,seq__48308_48327__$1);
var G__48330 = c__4299__auto___48328;
var G__48331 = cljs.core.count.call(null,c__4299__auto___48328);
var G__48332 = (0);
seq__48308_48312 = G__48329;
chunk__48309_48313 = G__48330;
count__48310_48314 = G__48331;
i__48311_48315 = G__48332;
continue;
}
} else
{var k_48333 = cljs.core.first.call(null,seq__48308_48327__$1);var obj_48334 = (js_index[k_48333]);var geom_48335 = (obj_48334["geojson"]);var feature_48336 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_48334["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_48334["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_48334["compact_name"])], null)], null));var __48337__$1 = (feature_48336["geometry"] = geom_48335);var __48338__$2 = ((feature_48336["properties"])["index_object"] = obj_48334);features.push(feature_48336);
{
var G__48339 = cljs.core.next.call(null,seq__48308_48327__$1);
var G__48340 = null;
var G__48341 = (0);
var G__48342 = (0);
seq__48308_48312 = G__48339;
chunk__48309_48313 = G__48340;
count__48310_48314 = G__48341;
i__48311_48315 = G__48342;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree.call(null,app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_48385){var state_val_48386 = (state_48385[(1)]);if((state_val_48386 === (5)))
{var inst_48383 = (state_48385[(2)]);var state_48385__$1 = state_48385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48385__$1,inst_48383);
} else
{if((state_val_48386 === (4)))
{var state_48385__$1 = state_48385;var statearr_48387_48399 = state_48385__$1;(statearr_48387_48399[(2)] = null);
(statearr_48387_48399[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48386 === (3)))
{var inst_48373 = (state_48385[(7)]);var inst_48380 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_48373);var state_48385__$1 = state_48385;var statearr_48388_48400 = state_48385__$1;(statearr_48388_48400[(2)] = inst_48380);
(statearr_48388_48400[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48386 === (2)))
{var inst_48373 = (state_48385[(7)]);var inst_48373__$1 = (state_48385[(2)]);var inst_48374 = (function (){var bl_coll_index = inst_48373__$1;return ((function (bl_coll_index,inst_48373,inst_48373__$1,state_val_48386,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_48373,inst_48373__$1,state_val_48386,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_48375 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_48374);var inst_48376 = cljs.core.deref.call(null,app_state);var inst_48377 = cljs.core.get_in.call(null,inst_48376,index_path);var inst_48378 = cljs.core._EQ_.call(null,inst_48377,inst_48373__$1);var state_48385__$1 = (function (){var statearr_48389 = state_48385;(statearr_48389[(7)] = inst_48373__$1);
(statearr_48389[(8)] = inst_48375);
return statearr_48389;
})();if(inst_48378)
{var statearr_48390_48401 = state_48385__$1;(statearr_48390_48401[(1)] = (3));
} else
{var statearr_48391_48402 = state_48385__$1;(statearr_48391_48402[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48386 === (1)))
{var inst_48371 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_48385__$1 = state_48385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48385__$1,(2),inst_48371);
} else
{return null;
}
}
}
}
}
});})(c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48395 = [null,null,null,null,null,null,null,null,null];(statearr_48395[(0)] = state_machine__5679__auto__);
(statearr_48395[(1)] = (1));
return statearr_48395;
});
var state_machine__5679__auto____1 = (function (state_48385){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48385);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48396){if((e48396 instanceof Object))
{var ex__5682__auto__ = e48396;var statearr_48397_48403 = state_48385;(statearr_48397_48403[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48404 = state_48385;
state_48385 = G__48404;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48385){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_48398 = f__5694__auto__.call(null);(statearr_48398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));var rtree = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null))):null);return cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hit.properties.id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});

//# sourceMappingURL=boundarylines.js.map