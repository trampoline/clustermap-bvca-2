// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__56369){var vec__56370 = p__56369;var z = cljs.core.nth.call(null,vec__56370,(0),null);var t = cljs.core.nth.call(null,vec__56370,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__56375 = cljs.core.seq.call(null,boundarylines);var chunk__56376 = null;var count__56377 = (0);var i__56378 = (0);while(true){
if((i__56378 < count__56377))
{var bl = cljs.core._nth.call(null,chunk__56376,i__56378);var boundaryline_id_56379 = (bl["id"]);var tolerance_56380 = (bl["tolerance"]);var general_cache_path_56381 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_56379,tolerance_56380], null));var collection_cache_path_56382 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_56379,tolerance_56380], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_56381,((function (seq__56375,chunk__56376,count__56377,i__56378,boundaryline_id_56379,tolerance_56380,general_cache_path_56381,collection_cache_path_56382,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__56375,chunk__56376,count__56377,i__56378,boundaryline_id_56379,tolerance_56380,general_cache_path_56381,collection_cache_path_56382,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_56382))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_56382,((function (seq__56375,chunk__56376,count__56377,i__56378,boundaryline_id_56379,tolerance_56380,general_cache_path_56381,collection_cache_path_56382,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__56375,chunk__56376,count__56377,i__56378,boundaryline_id_56379,tolerance_56380,general_cache_path_56381,collection_cache_path_56382,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__56383 = seq__56375;
var G__56384 = chunk__56376;
var G__56385 = count__56377;
var G__56386 = (i__56378 + (1));
seq__56375 = G__56383;
chunk__56376 = G__56384;
count__56377 = G__56385;
i__56378 = G__56386;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__56375);if(temp__4126__auto__)
{var seq__56375__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56375__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__56375__$1);{
var G__56387 = cljs.core.chunk_rest.call(null,seq__56375__$1);
var G__56388 = c__4314__auto__;
var G__56389 = cljs.core.count.call(null,c__4314__auto__);
var G__56390 = (0);
seq__56375 = G__56387;
chunk__56376 = G__56388;
count__56377 = G__56389;
i__56378 = G__56390;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__56375__$1);var boundaryline_id_56391 = (bl["id"]);var tolerance_56392 = (bl["tolerance"]);var general_cache_path_56393 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_56391,tolerance_56392], null));var collection_cache_path_56394 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_56391,tolerance_56392], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_56393,((function (seq__56375,chunk__56376,count__56377,i__56378,boundaryline_id_56391,tolerance_56392,general_cache_path_56393,collection_cache_path_56394,bl,seq__56375__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__56375,chunk__56376,count__56377,i__56378,boundaryline_id_56391,tolerance_56392,general_cache_path_56393,collection_cache_path_56394,bl,seq__56375__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_56394))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_56394,((function (seq__56375,chunk__56376,count__56377,i__56378,boundaryline_id_56391,tolerance_56392,general_cache_path_56393,collection_cache_path_56394,bl,seq__56375__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__56375,chunk__56376,count__56377,i__56378,boundaryline_id_56391,tolerance_56392,general_cache_path_56393,collection_cache_path_56394,bl,seq__56375__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__56395 = cljs.core.next.call(null,seq__56375__$1);
var G__56396 = null;
var G__56397 = (0);
var G__56398 = (0);
seq__56375 = G__56395;
chunk__56376 = G__56396;
count__56377 = G__56397;
i__56378 = G__56398;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__56399){var map__56415 = p__56399;var map__56415__$1 = ((cljs.core.seq_QMARK_.call(null,map__56415))?cljs.core.apply.call(null,cljs.core.hash_map,map__56415):map__56415);var bounds = cljs.core.get.call(null,map__56415__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__56415__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__56415,map__56415__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__56415,map__56415__$1,bounds,boundaryline_ids){
return (function (state_56420){var state_val_56421 = (state_56420[(1)]);if((state_val_56421 === (2)))
{var inst_56417 = (state_56420[(2)]);var inst_56418 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_56417);var state_56420__$1 = (function (){var statearr_56422 = state_56420;(statearr_56422[(7)] = inst_56418);
return statearr_56422;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56420__$1,true);
} else
{if((state_val_56421 === (1)))
{var state_56420__$1 = state_56420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56420__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__56415,map__56415__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__56415,map__56415__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_56426 = [null,null,null,null,null,null,null,null];(statearr_56426[(0)] = state_machine__5694__auto__);
(statearr_56426[(1)] = (1));
return statearr_56426;
});
var state_machine__5694__auto____1 = (function (state_56420){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56427){if((e56427 instanceof Object))
{var ex__5697__auto__ = e56427;var statearr_56428_56430 = state_56420;(statearr_56428_56430[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56427;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56431 = state_56420;
state_56420 = G__56431;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56420){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__56415,map__56415__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_56429 = f__5709__auto__.call(null);(statearr_56429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__56415,map__56415__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__56399 = null;if (arguments.length > 5) {
  p__56399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__56399);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__56432){
var app_state = cljs.core.first(arglist__56432);
arglist__56432 = cljs.core.next(arglist__56432);
var boundarylines_path = cljs.core.first(arglist__56432);
arglist__56432 = cljs.core.next(arglist__56432);
var collection_boundarylines_path = cljs.core.first(arglist__56432);
arglist__56432 = cljs.core.next(arglist__56432);
var collection_id = cljs.core.first(arglist__56432);
arglist__56432 = cljs.core.next(arglist__56432);
var tolerance = cljs.core.first(arglist__56432);
var p__56399 = cljs.core.rest(arglist__56432);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__56399);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__56433){var map__56438 = p__56433;var map__56438__$1 = ((cljs.core.seq_QMARK_.call(null,map__56438))?cljs.core.apply.call(null,cljs.core.hash_map,map__56438):map__56438);var boundaryline_ids = cljs.core.get.call(null,map__56438__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__56438,map__56438__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__56438,map__56438__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__56438,map__56438__$1,boundaryline_ids){
return (function (p__56439){var vec__56440 = p__56439;var blid = cljs.core.nth.call(null,vec__56440,(0),null);var vec__56441 = cljs.core.nth.call(null,vec__56440,(1),null);var tol = cljs.core.nth.call(null,vec__56441,(0),null);var bl = cljs.core.nth.call(null,vec__56441,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__56438,map__56438__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__56433 = null;if (arguments.length > 5) {
  p__56433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__56433);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__56442){
var app_state = cljs.core.first(arglist__56442);
arglist__56442 = cljs.core.next(arglist__56442);
var boundarylines_path = cljs.core.first(arglist__56442);
arglist__56442 = cljs.core.next(arglist__56442);
var collection_id = cljs.core.first(arglist__56442);
arglist__56442 = cljs.core.next(arglist__56442);
var bounds = cljs.core.first(arglist__56442);
arglist__56442 = cljs.core.next(arglist__56442);
var zoom = cljs.core.first(arglist__56442);
var p__56433 = cljs.core.rest(arglist__56442);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__56433);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__56447_56451 = cljs.core.seq.call(null,keys);var chunk__56448_56452 = null;var count__56449_56453 = (0);var i__56450_56454 = (0);while(true){
if((i__56450_56454 < count__56449_56453))
{var k_56455 = cljs.core._nth.call(null,chunk__56448_56452,i__56450_56454);var obj_56456 = (js_index[k_56455]);var geom_56457 = (obj_56456["geojson"]);var feature_56458 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_56456["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_56456["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_56456["compact_name"])], null)], null));var __56459__$1 = (feature_56458["geometry"] = geom_56457);var __56460__$2 = ((feature_56458["properties"])["index_object"] = obj_56456);features.push(feature_56458);
{
var G__56461 = seq__56447_56451;
var G__56462 = chunk__56448_56452;
var G__56463 = count__56449_56453;
var G__56464 = (i__56450_56454 + (1));
seq__56447_56451 = G__56461;
chunk__56448_56452 = G__56462;
count__56449_56453 = G__56463;
i__56450_56454 = G__56464;
continue;
}
} else
{var temp__4126__auto___56465 = cljs.core.seq.call(null,seq__56447_56451);if(temp__4126__auto___56465)
{var seq__56447_56466__$1 = temp__4126__auto___56465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56447_56466__$1))
{var c__4314__auto___56467 = cljs.core.chunk_first.call(null,seq__56447_56466__$1);{
var G__56468 = cljs.core.chunk_rest.call(null,seq__56447_56466__$1);
var G__56469 = c__4314__auto___56467;
var G__56470 = cljs.core.count.call(null,c__4314__auto___56467);
var G__56471 = (0);
seq__56447_56451 = G__56468;
chunk__56448_56452 = G__56469;
count__56449_56453 = G__56470;
i__56450_56454 = G__56471;
continue;
}
} else
{var k_56472 = cljs.core.first.call(null,seq__56447_56466__$1);var obj_56473 = (js_index[k_56472]);var geom_56474 = (obj_56473["geojson"]);var feature_56475 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_56473["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_56473["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_56473["compact_name"])], null)], null));var __56476__$1 = (feature_56475["geometry"] = geom_56474);var __56477__$2 = ((feature_56475["properties"])["index_object"] = obj_56473);features.push(feature_56475);
{
var G__56478 = cljs.core.next.call(null,seq__56447_56466__$1);
var G__56479 = null;
var G__56480 = (0);
var G__56481 = (0);
seq__56447_56451 = G__56478;
chunk__56448_56452 = G__56479;
count__56449_56453 = G__56480;
i__56450_56454 = G__56481;
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
return (function (state_56524){var state_val_56525 = (state_56524[(1)]);if((state_val_56525 === (5)))
{var inst_56522 = (state_56524[(2)]);var state_56524__$1 = state_56524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56524__$1,inst_56522);
} else
{if((state_val_56525 === (4)))
{var state_56524__$1 = state_56524;var statearr_56526_56538 = state_56524__$1;(statearr_56526_56538[(2)] = null);
(statearr_56526_56538[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56525 === (3)))
{var inst_56512 = (state_56524[(7)]);var inst_56519 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_56512);var state_56524__$1 = state_56524;var statearr_56527_56539 = state_56524__$1;(statearr_56527_56539[(2)] = inst_56519);
(statearr_56527_56539[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56525 === (2)))
{var inst_56512 = (state_56524[(7)]);var inst_56512__$1 = (state_56524[(2)]);var inst_56513 = (function (){var bl_coll_index = inst_56512__$1;return ((function (bl_coll_index,inst_56512,inst_56512__$1,state_val_56525,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_56512,inst_56512__$1,state_val_56525,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_56514 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_56513);var inst_56515 = cljs.core.deref.call(null,app_state);var inst_56516 = cljs.core.get_in.call(null,inst_56515,index_path);var inst_56517 = cljs.core._EQ_.call(null,inst_56516,inst_56512__$1);var state_56524__$1 = (function (){var statearr_56528 = state_56524;(statearr_56528[(8)] = inst_56514);
(statearr_56528[(7)] = inst_56512__$1);
return statearr_56528;
})();if(inst_56517)
{var statearr_56529_56540 = state_56524__$1;(statearr_56529_56540[(1)] = (3));
} else
{var statearr_56530_56541 = state_56524__$1;(statearr_56530_56541[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_56525 === (1)))
{var inst_56510 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_56524__$1 = state_56524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56524__$1,(2),inst_56510);
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
var state_machine__5694__auto____0 = (function (){var statearr_56534 = [null,null,null,null,null,null,null,null,null];(statearr_56534[(0)] = state_machine__5694__auto__);
(statearr_56534[(1)] = (1));
return statearr_56534;
});
var state_machine__5694__auto____1 = (function (state_56524){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_56524);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e56535){if((e56535 instanceof Object))
{var ex__5697__auto__ = e56535;var statearr_56536_56542 = state_56524;(statearr_56536_56542[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56524);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e56535;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__56543 = state_56524;
state_56524 = G__56543;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_56524){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_56524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_56537 = f__5709__auto__.call(null);(statearr_56537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_56537;
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