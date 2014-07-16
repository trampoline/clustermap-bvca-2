// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some((function (p__36352){var vec__36353 = p__36352;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36353,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36353,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,boundarylines_path,collection_boundarylines_path,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.cljs$core$IFn$_invoke$arity$variadic(boundaryline_id,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$783,true], 0));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var collection_cache_path = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null)):null);var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (state_36390){var state_val_36391 = (state_36390[(1)]);if((state_val_36391 === (5)))
{var inst_36388 = (state_36390[(2)]);var state_36390__$1 = state_36390;return cljs.core.async.impl.ioc_helpers.return_chan(state_36390__$1,inst_36388);
} else
{if((state_val_36391 === (4)))
{var state_36390__$1 = state_36390;var statearr_36392_36404 = state_36390__$1;(statearr_36392_36404[(2)] = null);
(statearr_36392_36404[(1)] = (5));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36391 === (3)))
{var inst_36380 = (state_36390[(7)]);var inst_36384 = (function (){var bl = inst_36380;return ((function (bl,inst_36380,state_val_36391,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_36380,state_val_36391,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_36385 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path,inst_36384);var state_36390__$1 = state_36390;var statearr_36393_36405 = state_36390__$1;(statearr_36393_36405[(2)] = inst_36385);
(statearr_36393_36405[(1)] = (5));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36391 === (2)))
{var inst_36380 = (state_36390[(7)]);var inst_36380__$1 = (state_36390[(2)]);var inst_36381 = (function (){var bl = inst_36380__$1;return ((function (bl,inst_36380,inst_36380__$1,state_val_36391,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path){
return (function (old){return bl;
});
;})(bl,inst_36380,inst_36380__$1,state_val_36391,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var inst_36382 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path,inst_36381);var state_36390__$1 = (function (){var statearr_36394 = state_36390;(statearr_36394[(8)] = inst_36382);
(statearr_36394[(7)] = inst_36380__$1);
return statearr_36394;
})();if(cljs.core.truth_(collection_cache_path))
{var statearr_36395_36406 = state_36390__$1;(statearr_36395_36406[(1)] = (3));
} else
{var statearr_36396_36407 = state_36390__$1;(statearr_36396_36407[(1)] = (4));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_36391 === (1)))
{var state_36390__$1 = state_36390;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36390__$1,(2),comm);
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
var state_machine__5679__auto____0 = (function (){var statearr_36400 = [null,null,null,null,null,null,null,null,null];(statearr_36400[(0)] = state_machine__5679__auto__);
(statearr_36400[(1)] = (1));
return statearr_36400;
});
var state_machine__5679__auto____1 = (function (state_36390){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36390);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36401){if((e36401 instanceof Object))
{var ex__5682__auto__ = e36401;var statearr_36402_36408 = state_36390;(statearr_36402_36408[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36390);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e36401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__36409 = state_36390;
state_36390 = G__36409;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36390){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,boundarylines_path__$1,collection_boundarylines_path__$1,general_cache_path,collection_cache_path))
})();var state__5695__auto__ = (function (){var statearr_36403 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36403;
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36410){var map__36412 = p__36410;var map__36412__$1 = ((cljs.core.seq_QMARK_(map__36412))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36412):map__36412);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36412__$1,cljs.core.constant$keyword$792);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793], null));var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);if(cljs.core.truth_((function (){var and__3531__auto__ = min_zoom;if(cljs.core.truth_(and__3531__auto__))
{return (zoom <= min_zoom);
} else
{return and__3531__auto__;
}
})()))
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
} else
{var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$795], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
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
var p__36410 = null;if (arguments.length > 5) {
  p__36410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36410);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__36413){
var app_state = cljs.core.first(arglist__36413);
arglist__36413 = cljs.core.next(arglist__36413);
var boundarylines_path = cljs.core.first(arglist__36413);
arglist__36413 = cljs.core.next(arglist__36413);
var collection_id = cljs.core.first(arglist__36413);
arglist__36413 = cljs.core.next(arglist__36413);
var boundaryline_id = cljs.core.first(arglist__36413);
arglist__36413 = cljs.core.next(arglist__36413);
var zoom = cljs.core.first(arglist__36413);
var p__36410 = cljs.core.rest(arglist__36413);
return get_or_fetch_best_boundaryline__delegate(app_state,boundarylines_path,collection_id,boundaryline_id,zoom,p__36410);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$796], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$797,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__36418_36422 = cljs.core.seq(keys);var chunk__36419_36423 = null;var count__36420_36424 = (0);var i__36421_36425 = (0);while(true){
if((i__36421_36425 < count__36420_36424))
{var k_36426 = chunk__36419_36423.cljs$core$IIndexed$_nth$arity$2(null,i__36421_36425);var obj_36427 = (js_index[k_36426]);var geom_36428 = (obj_36427["geojson"]);var feature_36429 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,"Feature",cljs.core.constant$keyword$798,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$799,(obj_36427["id"]),cljs.core.constant$keyword$800,(obj_36427["id"]),cljs.core.constant$keyword$801,(obj_36427["compact_name"])], null)], null));var __36430__$1 = (feature_36429["geometry"] = geom_36428);var __36431__$2 = ((feature_36429["properties"])["index_object"] = obj_36427);features.push(feature_36429);
{
var G__36432 = seq__36418_36422;
var G__36433 = chunk__36419_36423;
var G__36434 = count__36420_36424;
var G__36435 = (i__36421_36425 + (1));
seq__36418_36422 = G__36432;
chunk__36419_36423 = G__36433;
count__36420_36424 = G__36434;
i__36421_36425 = G__36435;
continue;
}
} else
{var temp__4126__auto___36436 = cljs.core.seq(seq__36418_36422);if(temp__4126__auto___36436)
{var seq__36418_36437__$1 = temp__4126__auto___36436;if(cljs.core.chunked_seq_QMARK_(seq__36418_36437__$1))
{var c__4299__auto___36438 = cljs.core.chunk_first(seq__36418_36437__$1);{
var G__36439 = cljs.core.chunk_rest(seq__36418_36437__$1);
var G__36440 = c__4299__auto___36438;
var G__36441 = cljs.core.count(c__4299__auto___36438);
var G__36442 = (0);
seq__36418_36422 = G__36439;
chunk__36419_36423 = G__36440;
count__36420_36424 = G__36441;
i__36421_36425 = G__36442;
continue;
}
} else
{var k_36443 = cljs.core.first(seq__36418_36437__$1);var obj_36444 = (js_index[k_36443]);var geom_36445 = (obj_36444["geojson"]);var feature_36446 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,"Feature",cljs.core.constant$keyword$798,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$799,(obj_36444["id"]),cljs.core.constant$keyword$800,(obj_36444["id"]),cljs.core.constant$keyword$801,(obj_36444["compact_name"])], null)], null));var __36447__$1 = (feature_36446["geometry"] = geom_36445);var __36448__$2 = ((feature_36446["properties"])["index_object"] = obj_36444);features.push(feature_36446);
{
var G__36449 = cljs.core.next(seq__36418_36437__$1);
var G__36450 = null;
var G__36451 = (0);
var G__36452 = (0);
seq__36418_36422 = G__36449;
chunk__36419_36423 = G__36450;
count__36420_36424 = G__36451;
i__36421_36425 = G__36452;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$794], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_36495){var state_val_36496 = (state_36495[(1)]);if((state_val_36496 === (5)))
{var inst_36493 = (state_36495[(2)]);var state_36495__$1 = state_36495;return cljs.core.async.impl.ioc_helpers.return_chan(state_36495__$1,inst_36493);
} else
{if((state_val_36496 === (4)))
{var state_36495__$1 = state_36495;var statearr_36497_36509 = state_36495__$1;(statearr_36497_36509[(2)] = null);
(statearr_36497_36509[(1)] = (5));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36496 === (3)))
{var inst_36483 = (state_36495[(7)]);var inst_36490 = clustermap.boundarylines.rtree_index(rtree,inst_36483);var state_36495__$1 = state_36495;var statearr_36498_36510 = state_36495__$1;(statearr_36498_36510[(2)] = inst_36490);
(statearr_36498_36510[(1)] = (5));
return cljs.core.constant$keyword$767;
} else
{if((state_val_36496 === (2)))
{var inst_36483 = (state_36495[(7)]);var inst_36483__$1 = (state_36495[(2)]);var inst_36484 = (function (){var bl_coll_index = inst_36483__$1;return ((function (bl_coll_index,inst_36483,inst_36483__$1,state_val_36496,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_36483,inst_36483__$1,state_val_36496,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_36485 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_36484);var inst_36486 = cljs.core.deref(app_state);var inst_36487 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_36486,index_path);var inst_36488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36487,inst_36483__$1);var state_36495__$1 = (function (){var statearr_36499 = state_36495;(statearr_36499[(8)] = inst_36485);
(statearr_36499[(7)] = inst_36483__$1);
return statearr_36499;
})();if(inst_36488)
{var statearr_36500_36511 = state_36495__$1;(statearr_36500_36511[(1)] = (3));
} else
{var statearr_36501_36512 = state_36495__$1;(statearr_36501_36512[(1)] = (4));
}
return cljs.core.constant$keyword$767;
} else
{if((state_val_36496 === (1)))
{var inst_36481 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$783,true], 0));var state_36495__$1 = state_36495;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36495__$1,(2),inst_36481);
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
var state_machine__5679__auto____0 = (function (){var statearr_36505 = [null,null,null,null,null,null,null,null,null];(statearr_36505[(0)] = state_machine__5679__auto__);
(statearr_36505[(1)] = (1));
return statearr_36505;
});
var state_machine__5679__auto____1 = (function (state_36495){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_36495);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$767))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e36506){if((e36506 instanceof Object))
{var ex__5682__auto__ = e36506;var statearr_36507_36513 = state_36495;(statearr_36507_36513[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_36495);
return cljs.core.constant$keyword$767;
} else
{if(cljs.core.constant$keyword$758)
{throw e36506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$767))
{{
var G__36514 = state_36495;
state_36495 = G__36514;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_36495){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_36495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_36508 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_36508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_36508;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$796], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$802,x,cljs.core.constant$keyword$803,y,cljs.core.constant$keyword$804,(0),cljs.core.constant$keyword$805,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$799,hit.properties.id,cljs.core.constant$keyword$801,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,"Point",cljs.core.constant$keyword$806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3543__auto__ = hits;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
