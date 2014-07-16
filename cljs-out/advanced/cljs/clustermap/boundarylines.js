// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__36205){var vec__36206 = p__36205;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36206,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36206,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.some(avail_set,coarser);
}
}
});
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_(x))
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
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,boundarylines_path,collection_boundarylines_path,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.cljs$core$IFn$_invoke$arity$variadic(boundaryline_id,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$781,true], 0));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var collection_cache_path = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null)):null);var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (state_36243){var state_val_36244 = (state_36243[(1)]);if((state_val_36244 === (5)))
{var inst_36241 = (state_36243[(2)]);var state_36243__$1 = state_36243;return cljs.core.async.impl.ioc_helpers.return_chan(state_36243__$1,inst_36241);
} else
{if((state_val_36244 === (4)))
{var state_36243__$1 = state_36243;var statearr_36245_36257 = state_36243__$1;(statearr_36245_36257[(2)] = null);
(statearr_36245_36257[(1)] = (5));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36244 === (3)))
{var inst_36233 = (state_36243[(7)]);var inst_36237 = (function (){var bl = inst_36233;return ((function (bl,inst_36233,state_val_36244,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_36233,state_val_36244,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_36238 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path,inst_36237);var state_36243__$1 = state_36243;var statearr_36246_36258 = state_36243__$1;(statearr_36246_36258[(2)] = inst_36238);
(statearr_36246_36258[(1)] = (5));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36244 === (2)))
{var inst_36233 = (state_36243[(7)]);var inst_36233__$1 = (state_36243[(2)]);var inst_36234 = (function (){var bl = inst_36233__$1;return ((function (bl,inst_36233,inst_36233__$1,state_val_36244,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_36233,inst_36233__$1,state_val_36244,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_36235 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path,inst_36234);var state_36243__$1 = (function (){var statearr_36247 = state_36243;(statearr_36247[(7)] = inst_36233__$1);
(statearr_36247[(8)] = inst_36235);
return statearr_36247;
})();if(cljs.core.truth_(collection_cache_path))
{var statearr_36248_36259 = state_36243__$1;(statearr_36248_36259[(1)] = (3));
} else
{var statearr_36249_36260 = state_36243__$1;(statearr_36249_36260[(1)] = (4));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_36244 === (1)))
{var state_36243__$1 = state_36243;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36243__$1,(2),comm);
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
var state_machine__5679__auto____0 = (function (){var statearr_36253 = [null,null,null,null,null,null,null,null,null];(statearr_36253[(0)] = state_machine__5679__auto__);
(statearr_36253[(1)] = (1));
return statearr_36253;
});
var state_machine__5679__auto____1 = (function (state_36243){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36243);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36254){if((e36254 instanceof Object))
{var ex__5682__auto__ = e36254;var statearr_36255_36261 = state_36243;(statearr_36255_36261[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36243);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e36254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__36262 = state_36243;
state_36243 = G__36262;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36243){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var state__5695__auto__ = (function (){var statearr_36256 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
);
return c__5693__auto__;
});
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name(boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3531__auto__ = default_bl;if(cljs.core.truth_(and__3531__auto__))
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36263){var map__36265 = p__36263;var map__36265__$1 = ((cljs.core.seq_QMARK_(map__36265))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36265):map__36265);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36265__$1,cljs.core.constant$keyword$790);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
} else
{var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var use_tol = clustermap.boundarylines.best_available_tolerance(zoom,cljs.core.keys(bl_versions));var use_bl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bl_versions,use_tol);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline(app_state,general_cache_path,collection_cache_path,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,var_args){
var p__36263 = null;if (arguments.length > 5) {
  p__36263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36263);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__36266){
var app_state = cljs.core.first(arglist__36266);
arglist__36266 = cljs.core.next(arglist__36266);
var boundarylines_path = cljs.core.first(arglist__36266);
arglist__36266 = cljs.core.next(arglist__36266);
var collection_id = cljs.core.first(arglist__36266);
arglist__36266 = cljs.core.next(arglist__36266);
var boundaryline_id = cljs.core.first(arglist__36266);
arglist__36266 = cljs.core.next(arglist__36266);
var zoom = cljs.core.first(arglist__36266);
var p__36263 = cljs.core.rest(arglist__36266);
return get_or_fetch_best_boundaryline__delegate(app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36263);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$795,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__36271_36275 = cljs.core.seq(keys);var chunk__36272_36276 = null;var count__36273_36277 = (0);var i__36274_36278 = (0);while(true){
if((i__36274_36278 < count__36273_36277))
{var k_36279 = chunk__36272_36276.cljs$core$IIndexed$_nth$arity$2(null,i__36274_36278);var obj_36280 = (js_index[k_36279]);var geom_36281 = (obj_36280["geojson"]);var feature_36282 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$795,"Feature",cljs.core.constant$keyword$796,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$797,(obj_36280["id"]),cljs.core.constant$keyword$798,(obj_36280["id"]),cljs.core.constant$keyword$799,(obj_36280["compact_name"])], null)], null));var __36283__$1 = (feature_36282["geometry"] = geom_36281);var __36284__$2 = ((feature_36282["properties"])["index_object"] = obj_36280);features.push(feature_36282);
{
var G__36285 = seq__36271_36275;
var G__36286 = chunk__36272_36276;
var G__36287 = count__36273_36277;
var G__36288 = (i__36274_36278 + (1));
seq__36271_36275 = G__36285;
chunk__36272_36276 = G__36286;
count__36273_36277 = G__36287;
i__36274_36278 = G__36288;
continue;
}
} else
{var temp__4126__auto___36289 = cljs.core.seq(seq__36271_36275);if(temp__4126__auto___36289)
{var seq__36271_36290__$1 = temp__4126__auto___36289;if(cljs.core.chunked_seq_QMARK_(seq__36271_36290__$1))
{var c__4299__auto___36291 = cljs.core.chunk_first(seq__36271_36290__$1);{
var G__36292 = cljs.core.chunk_rest(seq__36271_36290__$1);
var G__36293 = c__4299__auto___36291;
var G__36294 = cljs.core.count(c__4299__auto___36291);
var G__36295 = (0);
seq__36271_36275 = G__36292;
chunk__36272_36276 = G__36293;
count__36273_36277 = G__36294;
i__36274_36278 = G__36295;
continue;
}
} else
{var k_36296 = cljs.core.first(seq__36271_36290__$1);var obj_36297 = (js_index[k_36296]);var geom_36298 = (obj_36297["geojson"]);var feature_36299 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$795,"Feature",cljs.core.constant$keyword$796,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$797,(obj_36297["id"]),cljs.core.constant$keyword$798,(obj_36297["id"]),cljs.core.constant$keyword$799,(obj_36297["compact_name"])], null)], null));var __36300__$1 = (feature_36299["geometry"] = geom_36298);var __36301__$2 = ((feature_36299["properties"])["index_object"] = obj_36297);features.push(feature_36299);
{
var G__36302 = cljs.core.next(seq__36271_36290__$1);
var G__36303 = null;
var G__36304 = (0);
var G__36305 = (0);
seq__36271_36275 = G__36302;
chunk__36272_36276 = G__36303;
count__36273_36277 = G__36304;
i__36274_36278 = G__36305;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$792], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_36348){var state_val_36349 = (state_36348[(1)]);if((state_val_36349 === (5)))
{var inst_36346 = (state_36348[(2)]);var state_36348__$1 = state_36348;return cljs.core.async.impl.ioc_helpers.return_chan(state_36348__$1,inst_36346);
} else
{if((state_val_36349 === (4)))
{var state_36348__$1 = state_36348;var statearr_36350_36362 = state_36348__$1;(statearr_36350_36362[(2)] = null);
(statearr_36350_36362[(1)] = (5));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36349 === (3)))
{var inst_36336 = (state_36348[(7)]);var inst_36343 = clustermap.boundarylines.rtree_index(rtree,inst_36336);var state_36348__$1 = state_36348;var statearr_36351_36363 = state_36348__$1;(statearr_36351_36363[(2)] = inst_36343);
(statearr_36351_36363[(1)] = (5));
return cljs.core.constant$keyword$765;
} else
{if((state_val_36349 === (2)))
{var inst_36336 = (state_36348[(7)]);var inst_36336__$1 = (state_36348[(2)]);var inst_36337 = (function (){var bl_coll_index = inst_36336__$1;return ((function (bl_coll_index,inst_36336,inst_36336__$1,state_val_36349,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_36336,inst_36336__$1,state_val_36349,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_36338 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_36337);var inst_36339 = cljs.core.deref(app_state);var inst_36340 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_36339,index_path);var inst_36341 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36340,inst_36336__$1);var state_36348__$1 = (function (){var statearr_36352 = state_36348;(statearr_36352[(7)] = inst_36336__$1);
(statearr_36352[(8)] = inst_36338);
return statearr_36352;
})();if(inst_36341)
{var statearr_36353_36364 = state_36348__$1;(statearr_36353_36364[(1)] = (3));
} else
{var statearr_36354_36365 = state_36348__$1;(statearr_36354_36365[(1)] = (4));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_36349 === (1)))
{var inst_36334 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$781,true], 0));var state_36348__$1 = state_36348;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36348__$1,(2),inst_36334);
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
var state_machine__5679__auto____0 = (function (){var statearr_36358 = [null,null,null,null,null,null,null,null,null];(statearr_36358[(0)] = state_machine__5679__auto__);
(statearr_36358[(1)] = (1));
return statearr_36358;
});
var state_machine__5679__auto____1 = (function (state_36348){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36348);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36359){if((e36359 instanceof Object))
{var ex__5682__auto__ = e36359;var statearr_36360_36366 = state_36348;(statearr_36360_36366[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36348);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e36359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__36367 = state_36348;
state_36348 = G__36367;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36348){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_36361 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5693__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$791], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$800,x,cljs.core.constant$keyword$801,y,cljs.core.constant$keyword$802,(0),cljs.core.constant$keyword$803,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,hit.properties.id,cljs.core.constant$keyword$799,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$795,"Point",cljs.core.constant$keyword$804,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
