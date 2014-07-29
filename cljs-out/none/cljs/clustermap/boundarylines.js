// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__49361){var vec__49362 = p__49361;var z = cljs.core.nth.call(null,vec__49362,(0),null);var t = cljs.core.nth.call(null,vec__49362,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__49367 = cljs.core.seq.call(null,boundarylines);var chunk__49368 = null;var count__49369 = (0);var i__49370 = (0);while(true){
if((i__49370 < count__49369))
{var bl = cljs.core._nth.call(null,chunk__49368,i__49370);var boundaryline_id_49371 = (bl["id"]);var tolerance_49372 = (bl["tolerance"]);var general_cache_path_49373 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49371,tolerance_49372], null));var collection_cache_path_49374 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49371,tolerance_49372], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_49373,((function (seq__49367,chunk__49368,count__49369,i__49370,boundaryline_id_49371,tolerance_49372,general_cache_path_49373,collection_cache_path_49374,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49367,chunk__49368,count__49369,i__49370,boundaryline_id_49371,tolerance_49372,general_cache_path_49373,collection_cache_path_49374,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_49374))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_49374,((function (seq__49367,chunk__49368,count__49369,i__49370,boundaryline_id_49371,tolerance_49372,general_cache_path_49373,collection_cache_path_49374,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49367,chunk__49368,count__49369,i__49370,boundaryline_id_49371,tolerance_49372,general_cache_path_49373,collection_cache_path_49374,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__49375 = seq__49367;
var G__49376 = chunk__49368;
var G__49377 = count__49369;
var G__49378 = (i__49370 + (1));
seq__49367 = G__49375;
chunk__49368 = G__49376;
count__49369 = G__49377;
i__49370 = G__49378;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49367);if(temp__4126__auto__)
{var seq__49367__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49367__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__49367__$1);{
var G__49379 = cljs.core.chunk_rest.call(null,seq__49367__$1);
var G__49380 = c__4299__auto__;
var G__49381 = cljs.core.count.call(null,c__4299__auto__);
var G__49382 = (0);
seq__49367 = G__49379;
chunk__49368 = G__49380;
count__49369 = G__49381;
i__49370 = G__49382;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__49367__$1);var boundaryline_id_49383 = (bl["id"]);var tolerance_49384 = (bl["tolerance"]);var general_cache_path_49385 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49383,tolerance_49384], null));var collection_cache_path_49386 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49383,tolerance_49384], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_49385,((function (seq__49367,chunk__49368,count__49369,i__49370,boundaryline_id_49383,tolerance_49384,general_cache_path_49385,collection_cache_path_49386,bl,seq__49367__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49367,chunk__49368,count__49369,i__49370,boundaryline_id_49383,tolerance_49384,general_cache_path_49385,collection_cache_path_49386,bl,seq__49367__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_49386))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_49386,((function (seq__49367,chunk__49368,count__49369,i__49370,boundaryline_id_49383,tolerance_49384,general_cache_path_49385,collection_cache_path_49386,bl,seq__49367__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49367,chunk__49368,count__49369,i__49370,boundaryline_id_49383,tolerance_49384,general_cache_path_49385,collection_cache_path_49386,bl,seq__49367__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__49387 = cljs.core.next.call(null,seq__49367__$1);
var G__49388 = null;
var G__49389 = (0);
var G__49390 = (0);
seq__49367 = G__49387;
chunk__49368 = G__49388;
count__49369 = G__49389;
i__49370 = G__49390;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49391){var map__49407 = p__49391;var map__49407__$1 = ((cljs.core.seq_QMARK_.call(null,map__49407))?cljs.core.apply.call(null,cljs.core.hash_map,map__49407):map__49407);var bounds = cljs.core.get.call(null,map__49407__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__49407__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,map__49407,map__49407__$1,bounds,boundaryline_ids){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,map__49407,map__49407__$1,bounds,boundaryline_ids){
return (function (state_49412){var state_val_49413 = (state_49412[(1)]);if((state_val_49413 === (2)))
{var inst_49409 = (state_49412[(2)]);var inst_49410 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_49409);var state_49412__$1 = (function (){var statearr_49414 = state_49412;(statearr_49414[(7)] = inst_49410);
return statearr_49414;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49412__$1,true);
} else
{if((state_val_49413 === (1)))
{var state_49412__$1 = state_49412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49412__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,map__49407,map__49407__$1,bounds,boundaryline_ids))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,map__49407,map__49407__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_49418 = [null,null,null,null,null,null,null,null];(statearr_49418[(0)] = state_machine__5679__auto__);
(statearr_49418[(1)] = (1));
return statearr_49418;
});
var state_machine__5679__auto____1 = (function (state_49412){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49412);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49419){if((e49419 instanceof Object))
{var ex__5682__auto__ = e49419;var statearr_49420_49422 = state_49412;(statearr_49420_49422[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49412);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49423 = state_49412;
state_49412 = G__49423;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49412){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,map__49407,map__49407__$1,bounds,boundaryline_ids))
})();var state__5695__auto__ = (function (){var statearr_49421 = f__5694__auto__.call(null);(statearr_49421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_49421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,map__49407,map__49407__$1,bounds,boundaryline_ids))
);
return c__5693__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__49391 = null;if (arguments.length > 5) {
  p__49391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49391);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__49424){
var app_state = cljs.core.first(arglist__49424);
arglist__49424 = cljs.core.next(arglist__49424);
var boundarylines_path = cljs.core.first(arglist__49424);
arglist__49424 = cljs.core.next(arglist__49424);
var collection_boundarylines_path = cljs.core.first(arglist__49424);
arglist__49424 = cljs.core.next(arglist__49424);
var collection_id = cljs.core.first(arglist__49424);
arglist__49424 = cljs.core.next(arglist__49424);
var tolerance = cljs.core.first(arglist__49424);
var p__49391 = cljs.core.rest(arglist__49424);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49391);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3543__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get.call(null,bl_versions,use_tol);if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
}
});
/**
* gets the best boundaryline versions for a zoom level... where the best are not
* immediately available, fetches it asynchronously and returns the best immediately
* available
* - app-state : atom containing app-state
* - boundarylines-path : path in app-state of boundarylines state
* - collection-id : id of boundaryline collection to retrieve from
* - zoom : zoom level to retrieve for
* - boundaryline-ids : ids of boundarylines required
* - bounds :
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundarylines = (function() { 
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__49425){var map__49430 = p__49425;var map__49430__$1 = ((cljs.core.seq_QMARK_.call(null,map__49430))?cljs.core.apply.call(null,cljs.core.hash_map,map__49430):map__49430);var boundaryline_ids = cljs.core.get.call(null,map__49430__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__49430,map__49430__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__49430,map__49430__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__49430,map__49430__$1,boundaryline_ids){
return (function (p__49431){var vec__49432 = p__49431;var blid = cljs.core.nth.call(null,vec__49432,(0),null);var vec__49433 = cljs.core.nth.call(null,vec__49432,(1),null);var tol = cljs.core.nth.call(null,vec__49433,(0),null);var bl = cljs.core.nth.call(null,vec__49433,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__49430,map__49430__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__49425 = null;if (arguments.length > 5) {
  p__49425 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__49425);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__49434){
var app_state = cljs.core.first(arglist__49434);
arglist__49434 = cljs.core.next(arglist__49434);
var boundarylines_path = cljs.core.first(arglist__49434);
arglist__49434 = cljs.core.next(arglist__49434);
var collection_id = cljs.core.first(arglist__49434);
arglist__49434 = cljs.core.next(arglist__49434);
var bounds = cljs.core.first(arglist__49434);
arglist__49434 = cljs.core.next(arglist__49434);
var zoom = cljs.core.first(arglist__49434);
var p__49425 = cljs.core.rest(arglist__49434);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__49425);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__49439_49443 = cljs.core.seq.call(null,keys);var chunk__49440_49444 = null;var count__49441_49445 = (0);var i__49442_49446 = (0);while(true){
if((i__49442_49446 < count__49441_49445))
{var k_49447 = cljs.core._nth.call(null,chunk__49440_49444,i__49442_49446);var obj_49448 = (js_index[k_49447]);var geom_49449 = (obj_49448["geojson"]);var feature_49450 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_49448["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_49448["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_49448["compact_name"])], null)], null));var __49451__$1 = (feature_49450["geometry"] = geom_49449);var __49452__$2 = ((feature_49450["properties"])["index_object"] = obj_49448);features.push(feature_49450);
{
var G__49453 = seq__49439_49443;
var G__49454 = chunk__49440_49444;
var G__49455 = count__49441_49445;
var G__49456 = (i__49442_49446 + (1));
seq__49439_49443 = G__49453;
chunk__49440_49444 = G__49454;
count__49441_49445 = G__49455;
i__49442_49446 = G__49456;
continue;
}
} else
{var temp__4126__auto___49457 = cljs.core.seq.call(null,seq__49439_49443);if(temp__4126__auto___49457)
{var seq__49439_49458__$1 = temp__4126__auto___49457;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49439_49458__$1))
{var c__4299__auto___49459 = cljs.core.chunk_first.call(null,seq__49439_49458__$1);{
var G__49460 = cljs.core.chunk_rest.call(null,seq__49439_49458__$1);
var G__49461 = c__4299__auto___49459;
var G__49462 = cljs.core.count.call(null,c__4299__auto___49459);
var G__49463 = (0);
seq__49439_49443 = G__49460;
chunk__49440_49444 = G__49461;
count__49441_49445 = G__49462;
i__49442_49446 = G__49463;
continue;
}
} else
{var k_49464 = cljs.core.first.call(null,seq__49439_49458__$1);var obj_49465 = (js_index[k_49464]);var geom_49466 = (obj_49465["geojson"]);var feature_49467 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_49465["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_49465["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_49465["compact_name"])], null)], null));var __49468__$1 = (feature_49467["geometry"] = geom_49466);var __49469__$2 = ((feature_49467["properties"])["index_object"] = obj_49465);features.push(feature_49467);
{
var G__49470 = cljs.core.next.call(null,seq__49439_49458__$1);
var G__49471 = null;
var G__49472 = (0);
var G__49473 = (0);
seq__49439_49443 = G__49470;
chunk__49440_49444 = G__49471;
count__49441_49445 = G__49472;
i__49442_49446 = G__49473;
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
return (function (state_49516){var state_val_49517 = (state_49516[(1)]);if((state_val_49517 === (5)))
{var inst_49514 = (state_49516[(2)]);var state_49516__$1 = state_49516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49516__$1,inst_49514);
} else
{if((state_val_49517 === (4)))
{var state_49516__$1 = state_49516;var statearr_49518_49530 = state_49516__$1;(statearr_49518_49530[(2)] = null);
(statearr_49518_49530[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49517 === (3)))
{var inst_49504 = (state_49516[(7)]);var inst_49511 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_49504);var state_49516__$1 = state_49516;var statearr_49519_49531 = state_49516__$1;(statearr_49519_49531[(2)] = inst_49511);
(statearr_49519_49531[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49517 === (2)))
{var inst_49504 = (state_49516[(7)]);var inst_49504__$1 = (state_49516[(2)]);var inst_49505 = (function (){var bl_coll_index = inst_49504__$1;return ((function (bl_coll_index,inst_49504,inst_49504__$1,state_val_49517,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_49504,inst_49504__$1,state_val_49517,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_49506 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_49505);var inst_49507 = cljs.core.deref.call(null,app_state);var inst_49508 = cljs.core.get_in.call(null,inst_49507,index_path);var inst_49509 = cljs.core._EQ_.call(null,inst_49508,inst_49504__$1);var state_49516__$1 = (function (){var statearr_49520 = state_49516;(statearr_49520[(8)] = inst_49506);
(statearr_49520[(7)] = inst_49504__$1);
return statearr_49520;
})();if(inst_49509)
{var statearr_49521_49532 = state_49516__$1;(statearr_49521_49532[(1)] = (3));
} else
{var statearr_49522_49533 = state_49516__$1;(statearr_49522_49533[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49517 === (1)))
{var inst_49502 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_49516__$1 = state_49516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49516__$1,(2),inst_49502);
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
var state_machine__5679__auto____0 = (function (){var statearr_49526 = [null,null,null,null,null,null,null,null,null];(statearr_49526[(0)] = state_machine__5679__auto__);
(statearr_49526[(1)] = (1));
return statearr_49526;
});
var state_machine__5679__auto____1 = (function (state_49516){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49516);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49527){if((e49527 instanceof Object))
{var ex__5682__auto__ = e49527;var statearr_49528_49534 = state_49516;(statearr_49528_49534[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49535 = state_49516;
state_49516 = G__49535;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49516){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_49529 = f__5694__auto__.call(null);(statearr_49529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_49529;
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