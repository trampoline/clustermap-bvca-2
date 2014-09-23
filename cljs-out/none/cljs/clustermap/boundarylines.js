// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__50327){var vec__50328 = p__50327;var z = cljs.core.nth.call(null,vec__50328,(0),null);var t = cljs.core.nth.call(null,vec__50328,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
{return (zoom <= z);
} else
{return and__3546__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3558__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__50333 = cljs.core.seq.call(null,boundarylines);var chunk__50334 = null;var count__50335 = (0);var i__50336 = (0);while(true){
if((i__50336 < count__50335))
{var bl = cljs.core._nth.call(null,chunk__50334,i__50336);var boundaryline_id_50337 = (bl["id"]);var tolerance_50338 = (bl["tolerance"]);var general_cache_path_50339 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_50337,tolerance_50338], null));var collection_cache_path_50340 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_50337,tolerance_50338], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_50339,((function (seq__50333,chunk__50334,count__50335,i__50336,boundaryline_id_50337,tolerance_50338,general_cache_path_50339,collection_cache_path_50340,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__50333,chunk__50334,count__50335,i__50336,boundaryline_id_50337,tolerance_50338,general_cache_path_50339,collection_cache_path_50340,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_50340))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_50340,((function (seq__50333,chunk__50334,count__50335,i__50336,boundaryline_id_50337,tolerance_50338,general_cache_path_50339,collection_cache_path_50340,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__50333,chunk__50334,count__50335,i__50336,boundaryline_id_50337,tolerance_50338,general_cache_path_50339,collection_cache_path_50340,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__50341 = seq__50333;
var G__50342 = chunk__50334;
var G__50343 = count__50335;
var G__50344 = (i__50336 + (1));
seq__50333 = G__50341;
chunk__50334 = G__50342;
count__50335 = G__50343;
i__50336 = G__50344;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50333);if(temp__4126__auto__)
{var seq__50333__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50333__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__50333__$1);{
var G__50345 = cljs.core.chunk_rest.call(null,seq__50333__$1);
var G__50346 = c__4314__auto__;
var G__50347 = cljs.core.count.call(null,c__4314__auto__);
var G__50348 = (0);
seq__50333 = G__50345;
chunk__50334 = G__50346;
count__50335 = G__50347;
i__50336 = G__50348;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__50333__$1);var boundaryline_id_50349 = (bl["id"]);var tolerance_50350 = (bl["tolerance"]);var general_cache_path_50351 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_50349,tolerance_50350], null));var collection_cache_path_50352 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_50349,tolerance_50350], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_50351,((function (seq__50333,chunk__50334,count__50335,i__50336,boundaryline_id_50349,tolerance_50350,general_cache_path_50351,collection_cache_path_50352,bl,seq__50333__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__50333,chunk__50334,count__50335,i__50336,boundaryline_id_50349,tolerance_50350,general_cache_path_50351,collection_cache_path_50352,bl,seq__50333__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_50352))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_50352,((function (seq__50333,chunk__50334,count__50335,i__50336,boundaryline_id_50349,tolerance_50350,general_cache_path_50351,collection_cache_path_50352,bl,seq__50333__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__50333,chunk__50334,count__50335,i__50336,boundaryline_id_50349,tolerance_50350,general_cache_path_50351,collection_cache_path_50352,bl,seq__50333__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__50353 = cljs.core.next.call(null,seq__50333__$1);
var G__50354 = null;
var G__50355 = (0);
var G__50356 = (0);
seq__50333 = G__50353;
chunk__50334 = G__50354;
count__50335 = G__50355;
i__50336 = G__50356;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__50357){var map__50373 = p__50357;var map__50373__$1 = ((cljs.core.seq_QMARK_.call(null,map__50373))?cljs.core.apply.call(null,cljs.core.hash_map,map__50373):map__50373);var bounds = cljs.core.get.call(null,map__50373__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__50373__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__50373,map__50373__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__50373,map__50373__$1,bounds,boundaryline_ids){
return (function (state_50378){var state_val_50379 = (state_50378[(1)]);if((state_val_50379 === (2)))
{var inst_50375 = (state_50378[(2)]);var inst_50376 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_50375);var state_50378__$1 = (function (){var statearr_50380 = state_50378;(statearr_50380[(7)] = inst_50376);
return statearr_50380;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50378__$1,true);
} else
{if((state_val_50379 === (1)))
{var state_50378__$1 = state_50378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50378__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__50373,map__50373__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__50373,map__50373__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50384 = [null,null,null,null,null,null,null,null];(statearr_50384[(0)] = state_machine__5694__auto__);
(statearr_50384[(1)] = (1));
return statearr_50384;
});
var state_machine__5694__auto____1 = (function (state_50378){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_50378);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50385){if((e50385 instanceof Object))
{var ex__5697__auto__ = e50385;var statearr_50386_50388 = state_50378;(statearr_50386_50388[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50378);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50385;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50389 = state_50378;
state_50378 = G__50389;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50378){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__50373,map__50373__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_50387 = f__5709__auto__.call(null);(statearr_50387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_50387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__50373,map__50373__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__50357 = null;if (arguments.length > 5) {
  p__50357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__50357);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__50390){
var app_state = cljs.core.first(arglist__50390);
arglist__50390 = cljs.core.next(arglist__50390);
var boundarylines_path = cljs.core.first(arglist__50390);
arglist__50390 = cljs.core.next(arglist__50390);
var collection_boundarylines_path = cljs.core.first(arglist__50390);
arglist__50390 = cljs.core.next(arglist__50390);
var collection_id = cljs.core.first(arglist__50390);
arglist__50390 = cljs.core.next(arglist__50390);
var tolerance = cljs.core.first(arglist__50390);
var p__50357 = cljs.core.rest(arglist__50390);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__50357);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3546__auto__ = default_bl;if(cljs.core.truth_(and__3546__auto__))
{return default_tol;
} else
{return and__3546__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3558__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__50391){var map__50396 = p__50391;var map__50396__$1 = ((cljs.core.seq_QMARK_.call(null,map__50396))?cljs.core.apply.call(null,cljs.core.hash_map,map__50396):map__50396);var boundaryline_ids = cljs.core.get.call(null,map__50396__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__50396,map__50396__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__50396,map__50396__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__50396,map__50396__$1,boundaryline_ids){
return (function (p__50397){var vec__50398 = p__50397;var blid = cljs.core.nth.call(null,vec__50398,(0),null);var vec__50399 = cljs.core.nth.call(null,vec__50398,(1),null);var tol = cljs.core.nth.call(null,vec__50399,(0),null);var bl = cljs.core.nth.call(null,vec__50399,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__50396,map__50396__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__50391 = null;if (arguments.length > 5) {
  p__50391 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__50391);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__50400){
var app_state = cljs.core.first(arglist__50400);
arglist__50400 = cljs.core.next(arglist__50400);
var boundarylines_path = cljs.core.first(arglist__50400);
arglist__50400 = cljs.core.next(arglist__50400);
var collection_id = cljs.core.first(arglist__50400);
arglist__50400 = cljs.core.next(arglist__50400);
var bounds = cljs.core.first(arglist__50400);
arglist__50400 = cljs.core.next(arglist__50400);
var zoom = cljs.core.first(arglist__50400);
var p__50391 = cljs.core.rest(arglist__50400);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__50391);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__50405_50409 = cljs.core.seq.call(null,keys);var chunk__50406_50410 = null;var count__50407_50411 = (0);var i__50408_50412 = (0);while(true){
if((i__50408_50412 < count__50407_50411))
{var k_50413 = cljs.core._nth.call(null,chunk__50406_50410,i__50408_50412);var obj_50414 = (js_index[k_50413]);var geom_50415 = (obj_50414["geojson"]);var feature_50416 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_50414["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_50414["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_50414["compact_name"])], null)], null));var __50417__$1 = (feature_50416["geometry"] = geom_50415);var __50418__$2 = ((feature_50416["properties"])["index_object"] = obj_50414);features.push(feature_50416);
{
var G__50419 = seq__50405_50409;
var G__50420 = chunk__50406_50410;
var G__50421 = count__50407_50411;
var G__50422 = (i__50408_50412 + (1));
seq__50405_50409 = G__50419;
chunk__50406_50410 = G__50420;
count__50407_50411 = G__50421;
i__50408_50412 = G__50422;
continue;
}
} else
{var temp__4126__auto___50423 = cljs.core.seq.call(null,seq__50405_50409);if(temp__4126__auto___50423)
{var seq__50405_50424__$1 = temp__4126__auto___50423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50405_50424__$1))
{var c__4314__auto___50425 = cljs.core.chunk_first.call(null,seq__50405_50424__$1);{
var G__50426 = cljs.core.chunk_rest.call(null,seq__50405_50424__$1);
var G__50427 = c__4314__auto___50425;
var G__50428 = cljs.core.count.call(null,c__4314__auto___50425);
var G__50429 = (0);
seq__50405_50409 = G__50426;
chunk__50406_50410 = G__50427;
count__50407_50411 = G__50428;
i__50408_50412 = G__50429;
continue;
}
} else
{var k_50430 = cljs.core.first.call(null,seq__50405_50424__$1);var obj_50431 = (js_index[k_50430]);var geom_50432 = (obj_50431["geojson"]);var feature_50433 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_50431["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_50431["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_50431["compact_name"])], null)], null));var __50434__$1 = (feature_50433["geometry"] = geom_50432);var __50435__$2 = ((feature_50433["properties"])["index_object"] = obj_50431);features.push(feature_50433);
{
var G__50436 = cljs.core.next.call(null,seq__50405_50424__$1);
var G__50437 = null;
var G__50438 = (0);
var G__50439 = (0);
seq__50405_50409 = G__50436;
chunk__50406_50410 = G__50437;
count__50407_50411 = G__50438;
i__50408_50412 = G__50439;
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
{var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_50482){var state_val_50483 = (state_50482[(1)]);if((state_val_50483 === (5)))
{var inst_50480 = (state_50482[(2)]);var state_50482__$1 = state_50482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50482__$1,inst_50480);
} else
{if((state_val_50483 === (4)))
{var state_50482__$1 = state_50482;var statearr_50484_50496 = state_50482__$1;(statearr_50484_50496[(2)] = null);
(statearr_50484_50496[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50483 === (3)))
{var inst_50470 = (state_50482[(7)]);var inst_50477 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_50470);var state_50482__$1 = state_50482;var statearr_50485_50497 = state_50482__$1;(statearr_50485_50497[(2)] = inst_50477);
(statearr_50485_50497[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50483 === (2)))
{var inst_50470 = (state_50482[(7)]);var inst_50470__$1 = (state_50482[(2)]);var inst_50471 = (function (){var bl_coll_index = inst_50470__$1;return ((function (bl_coll_index,inst_50470,inst_50470__$1,state_val_50483,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_50470,inst_50470__$1,state_val_50483,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_50472 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_50471);var inst_50473 = cljs.core.deref.call(null,app_state);var inst_50474 = cljs.core.get_in.call(null,inst_50473,index_path);var inst_50475 = cljs.core._EQ_.call(null,inst_50474,inst_50470__$1);var state_50482__$1 = (function (){var statearr_50486 = state_50482;(statearr_50486[(8)] = inst_50472);
(statearr_50486[(7)] = inst_50470__$1);
return statearr_50486;
})();if(inst_50475)
{var statearr_50487_50498 = state_50482__$1;(statearr_50487_50498[(1)] = (3));
} else
{var statearr_50488_50499 = state_50482__$1;(statearr_50488_50499[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50483 === (1)))
{var inst_50468 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_50482__$1 = state_50482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50482__$1,(2),inst_50468);
} else
{return null;
}
}
}
}
}
});})(c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_50492 = [null,null,null,null,null,null,null,null,null];(statearr_50492[(0)] = state_machine__5694__auto__);
(statearr_50492[(1)] = (1));
return statearr_50492;
});
var state_machine__5694__auto____1 = (function (state_50482){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_50482);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e50493){if((e50493 instanceof Object))
{var ex__5697__auto__ = e50493;var statearr_50494_50500 = state_50482;(statearr_50494_50500[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e50493;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50501 = state_50482;
state_50482 = G__50501;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_50482){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_50482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_50495 = f__5709__auto__.call(null);(statearr_50495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_50495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5708__auto__;
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
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});

//# sourceMappingURL=boundarylines.js.map