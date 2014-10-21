// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3637__auto__ = cljs.core.some.call(null,(function (p__30336){var vec__30337 = p__30336;var z = cljs.core.nth.call(null,vec__30337,(0),null);var t = cljs.core.nth.call(null,vec__30337,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = z;if(cljs.core.truth_(and__3625__auto__))
{return (zoom <= z);
} else
{return and__3625__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3637__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
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
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__30342 = cljs.core.seq.call(null,boundarylines);var chunk__30343 = null;var count__30344 = (0);var i__30345 = (0);while(true){
if((i__30345 < count__30344))
{var bl = cljs.core._nth.call(null,chunk__30343,i__30345);var boundaryline_id_30346 = (bl["id"]);var tolerance_30347 = (bl["tolerance"]);var general_cache_path_30348 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_30346,tolerance_30347], null));var collection_cache_path_30349 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_30346,tolerance_30347], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_30348,((function (seq__30342,chunk__30343,count__30344,i__30345,boundaryline_id_30346,tolerance_30347,general_cache_path_30348,collection_cache_path_30349,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__30342,chunk__30343,count__30344,i__30345,boundaryline_id_30346,tolerance_30347,general_cache_path_30348,collection_cache_path_30349,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_30349))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_30349,((function (seq__30342,chunk__30343,count__30344,i__30345,boundaryline_id_30346,tolerance_30347,general_cache_path_30348,collection_cache_path_30349,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__30342,chunk__30343,count__30344,i__30345,boundaryline_id_30346,tolerance_30347,general_cache_path_30348,collection_cache_path_30349,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__30350 = seq__30342;
var G__30351 = chunk__30343;
var G__30352 = count__30344;
var G__30353 = (i__30345 + (1));
seq__30342 = G__30350;
chunk__30343 = G__30351;
count__30344 = G__30352;
i__30345 = G__30353;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30342);if(temp__4126__auto__)
{var seq__30342__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30342__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__30342__$1);{
var G__30354 = cljs.core.chunk_rest.call(null,seq__30342__$1);
var G__30355 = c__4406__auto__;
var G__30356 = cljs.core.count.call(null,c__4406__auto__);
var G__30357 = (0);
seq__30342 = G__30354;
chunk__30343 = G__30355;
count__30344 = G__30356;
i__30345 = G__30357;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__30342__$1);var boundaryline_id_30358 = (bl["id"]);var tolerance_30359 = (bl["tolerance"]);var general_cache_path_30360 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_30358,tolerance_30359], null));var collection_cache_path_30361 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_30358,tolerance_30359], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_30360,((function (seq__30342,chunk__30343,count__30344,i__30345,boundaryline_id_30358,tolerance_30359,general_cache_path_30360,collection_cache_path_30361,bl,seq__30342__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__30342,chunk__30343,count__30344,i__30345,boundaryline_id_30358,tolerance_30359,general_cache_path_30360,collection_cache_path_30361,bl,seq__30342__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_30361))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_30361,((function (seq__30342,chunk__30343,count__30344,i__30345,boundaryline_id_30358,tolerance_30359,general_cache_path_30360,collection_cache_path_30361,bl,seq__30342__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__30342,chunk__30343,count__30344,i__30345,boundaryline_id_30358,tolerance_30359,general_cache_path_30360,collection_cache_path_30361,bl,seq__30342__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__30362 = cljs.core.next.call(null,seq__30342__$1);
var G__30363 = null;
var G__30364 = (0);
var G__30365 = (0);
seq__30342 = G__30362;
chunk__30343 = G__30363;
count__30344 = G__30364;
i__30345 = G__30365;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__30366){var map__30382 = p__30366;var map__30382__$1 = ((cljs.core.seq_QMARK_.call(null,map__30382))?cljs.core.apply.call(null,cljs.core.hash_map,map__30382):map__30382);var bounds = cljs.core.get.call(null,map__30382__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__30382__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,comm,map__30382,map__30382__$1,bounds,boundaryline_ids){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,comm,map__30382,map__30382__$1,bounds,boundaryline_ids){
return (function (state_30387){var state_val_30388 = (state_30387[(1)]);if((state_val_30388 === (2)))
{var inst_30384 = (state_30387[(2)]);var inst_30385 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_30384);var state_30387__$1 = (function (){var statearr_30389 = state_30387;(statearr_30389[(7)] = inst_30385);
return statearr_30389;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30387__$1,true);
} else
{if((state_val_30388 === (1)))
{var state_30387__$1 = state_30387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30387__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto__,comm,map__30382,map__30382__$1,bounds,boundaryline_ids))
;return ((function (switch__5804__auto__,c__5819__auto__,comm,map__30382,map__30382__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_30393 = [null,null,null,null,null,null,null,null];(statearr_30393[(0)] = state_machine__5805__auto__);
(statearr_30393[(1)] = (1));
return statearr_30393;
});
var state_machine__5805__auto____1 = (function (state_30387){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_30387);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e30394){if((e30394 instanceof Object))
{var ex__5808__auto__ = e30394;var statearr_30395_30397 = state_30387;(statearr_30395_30397[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30394;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30398 = state_30387;
state_30387 = G__30398;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_30387){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_30387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,comm,map__30382,map__30382__$1,bounds,boundaryline_ids))
})();var state__5821__auto__ = (function (){var statearr_30396 = f__5820__auto__.call(null);(statearr_30396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_30396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,comm,map__30382,map__30382__$1,bounds,boundaryline_ids))
);
return c__5819__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__30366 = null;if (arguments.length > 5) {
  p__30366 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__30366);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__30399){
var app_state = cljs.core.first(arglist__30399);
arglist__30399 = cljs.core.next(arglist__30399);
var boundarylines_path = cljs.core.first(arglist__30399);
arglist__30399 = cljs.core.next(arglist__30399);
var collection_boundarylines_path = cljs.core.first(arglist__30399);
arglist__30399 = cljs.core.next(arglist__30399);
var collection_id = cljs.core.first(arglist__30399);
arglist__30399 = cljs.core.next(arglist__30399);
var tolerance = cljs.core.first(arglist__30399);
var p__30366 = cljs.core.rest(arglist__30399);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__30366);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3625__auto__ = default_bl;if(cljs.core.truth_(and__3625__auto__))
{return default_tol;
} else
{return and__3625__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3637__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__30400){var map__30405 = p__30400;var map__30405__$1 = ((cljs.core.seq_QMARK_.call(null,map__30405))?cljs.core.apply.call(null,cljs.core.hash_map,map__30405):map__30405);var boundaryline_ids = cljs.core.get.call(null,map__30405__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__30405,map__30405__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__30405,map__30405__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__30405,map__30405__$1,boundaryline_ids){
return (function (p__30406){var vec__30407 = p__30406;var blid = cljs.core.nth.call(null,vec__30407,(0),null);var vec__30408 = cljs.core.nth.call(null,vec__30407,(1),null);var tol = cljs.core.nth.call(null,vec__30408,(0),null);var bl = cljs.core.nth.call(null,vec__30408,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__30405,map__30405__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__30400 = null;if (arguments.length > 5) {
  p__30400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__30400);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__30409){
var app_state = cljs.core.first(arglist__30409);
arglist__30409 = cljs.core.next(arglist__30409);
var boundarylines_path = cljs.core.first(arglist__30409);
arglist__30409 = cljs.core.next(arglist__30409);
var collection_id = cljs.core.first(arglist__30409);
arglist__30409 = cljs.core.next(arglist__30409);
var bounds = cljs.core.first(arglist__30409);
arglist__30409 = cljs.core.next(arglist__30409);
var zoom = cljs.core.first(arglist__30409);
var p__30400 = cljs.core.rest(arglist__30409);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__30400);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__30414_30418 = cljs.core.seq.call(null,keys);var chunk__30415_30419 = null;var count__30416_30420 = (0);var i__30417_30421 = (0);while(true){
if((i__30417_30421 < count__30416_30420))
{var k_30422 = cljs.core._nth.call(null,chunk__30415_30419,i__30417_30421);var obj_30423 = (js_index[k_30422]);var geom_30424 = (obj_30423["geojson"]);var feature_30425 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_30423["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_30423["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_30423["compact_name"])], null)], null));var __30426__$1 = (feature_30425["geometry"] = geom_30424);var __30427__$2 = ((feature_30425["properties"])["index_object"] = obj_30423);features.push(feature_30425);
{
var G__30428 = seq__30414_30418;
var G__30429 = chunk__30415_30419;
var G__30430 = count__30416_30420;
var G__30431 = (i__30417_30421 + (1));
seq__30414_30418 = G__30428;
chunk__30415_30419 = G__30429;
count__30416_30420 = G__30430;
i__30417_30421 = G__30431;
continue;
}
} else
{var temp__4126__auto___30432 = cljs.core.seq.call(null,seq__30414_30418);if(temp__4126__auto___30432)
{var seq__30414_30433__$1 = temp__4126__auto___30432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30414_30433__$1))
{var c__4406__auto___30434 = cljs.core.chunk_first.call(null,seq__30414_30433__$1);{
var G__30435 = cljs.core.chunk_rest.call(null,seq__30414_30433__$1);
var G__30436 = c__4406__auto___30434;
var G__30437 = cljs.core.count.call(null,c__4406__auto___30434);
var G__30438 = (0);
seq__30414_30418 = G__30435;
chunk__30415_30419 = G__30436;
count__30416_30420 = G__30437;
i__30417_30421 = G__30438;
continue;
}
} else
{var k_30439 = cljs.core.first.call(null,seq__30414_30433__$1);var obj_30440 = (js_index[k_30439]);var geom_30441 = (obj_30440["geojson"]);var feature_30442 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_30440["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_30440["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_30440["compact_name"])], null)], null));var __30443__$1 = (feature_30442["geometry"] = geom_30441);var __30444__$2 = ((feature_30442["properties"])["index_object"] = obj_30440);features.push(feature_30442);
{
var G__30445 = cljs.core.next.call(null,seq__30414_30433__$1);
var G__30446 = null;
var G__30447 = (0);
var G__30448 = (0);
seq__30414_30418 = G__30445;
chunk__30415_30419 = G__30446;
count__30416_30420 = G__30447;
i__30417_30421 = G__30448;
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
{var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_30491){var state_val_30492 = (state_30491[(1)]);if((state_val_30492 === (5)))
{var inst_30489 = (state_30491[(2)]);var state_30491__$1 = state_30491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30491__$1,inst_30489);
} else
{if((state_val_30492 === (4)))
{var state_30491__$1 = state_30491;var statearr_30493_30505 = state_30491__$1;(statearr_30493_30505[(2)] = null);
(statearr_30493_30505[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30492 === (3)))
{var inst_30479 = (state_30491[(7)]);var inst_30486 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_30479);var state_30491__$1 = state_30491;var statearr_30494_30506 = state_30491__$1;(statearr_30494_30506[(2)] = inst_30486);
(statearr_30494_30506[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30492 === (2)))
{var inst_30479 = (state_30491[(7)]);var inst_30479__$1 = (state_30491[(2)]);var inst_30480 = (function (){var bl_coll_index = inst_30479__$1;return ((function (bl_coll_index,inst_30479,inst_30479__$1,state_val_30492,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_30479,inst_30479__$1,state_val_30492,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_30481 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_30480);var inst_30482 = cljs.core.deref.call(null,app_state);var inst_30483 = cljs.core.get_in.call(null,inst_30482,index_path);var inst_30484 = cljs.core._EQ_.call(null,inst_30483,inst_30479__$1);var state_30491__$1 = (function (){var statearr_30495 = state_30491;(statearr_30495[(7)] = inst_30479__$1);
(statearr_30495[(8)] = inst_30481);
return statearr_30495;
})();if(inst_30484)
{var statearr_30496_30507 = state_30491__$1;(statearr_30496_30507[(1)] = (3));
} else
{var statearr_30497_30508 = state_30491__$1;(statearr_30497_30508[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30492 === (1)))
{var inst_30477 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_30491__$1 = state_30491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(2),inst_30477);
} else
{return null;
}
}
}
}
}
});})(c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_30501 = [null,null,null,null,null,null,null,null,null];(statearr_30501[(0)] = state_machine__5805__auto__);
(statearr_30501[(1)] = (1));
return statearr_30501;
});
var state_machine__5805__auto____1 = (function (state_30491){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_30491);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e30502){if((e30502 instanceof Object))
{var ex__5808__auto__ = e30502;var statearr_30503_30509 = state_30491;(statearr_30503_30509[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30491);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30502;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30510 = state_30491;
state_30491 = G__30510;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_30491){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_30491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5821__auto__ = (function (){var statearr_30504 = f__5820__auto__.call(null);(statearr_30504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_30504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5819__auto__;
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
,(function (){var or__3637__auto__ = hits;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
