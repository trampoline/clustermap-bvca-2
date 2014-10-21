// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__11322){var vec__11323 = p__11322;var z = cljs.core.nth.call(null,vec__11323,(0),null);var t = cljs.core.nth.call(null,vec__11323,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__11328 = cljs.core.seq.call(null,boundarylines);var chunk__11329 = null;var count__11330 = (0);var i__11331 = (0);while(true){
if((i__11331 < count__11330))
{var bl = cljs.core._nth.call(null,chunk__11329,i__11331);var boundaryline_id_11332 = (bl["id"]);var tolerance_11333 = (bl["tolerance"]);var general_cache_path_11334 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_11332,tolerance_11333], null));var collection_cache_path_11335 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_11332,tolerance_11333], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_11334,((function (seq__11328,chunk__11329,count__11330,i__11331,boundaryline_id_11332,tolerance_11333,general_cache_path_11334,collection_cache_path_11335,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__11328,chunk__11329,count__11330,i__11331,boundaryline_id_11332,tolerance_11333,general_cache_path_11334,collection_cache_path_11335,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_11335))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_11335,((function (seq__11328,chunk__11329,count__11330,i__11331,boundaryline_id_11332,tolerance_11333,general_cache_path_11334,collection_cache_path_11335,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__11328,chunk__11329,count__11330,i__11331,boundaryline_id_11332,tolerance_11333,general_cache_path_11334,collection_cache_path_11335,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__11336 = seq__11328;
var G__11337 = chunk__11329;
var G__11338 = count__11330;
var G__11339 = (i__11331 + (1));
seq__11328 = G__11336;
chunk__11329 = G__11337;
count__11330 = G__11338;
i__11331 = G__11339;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11328);if(temp__4126__auto__)
{var seq__11328__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11328__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__11328__$1);{
var G__11340 = cljs.core.chunk_rest.call(null,seq__11328__$1);
var G__11341 = c__4314__auto__;
var G__11342 = cljs.core.count.call(null,c__4314__auto__);
var G__11343 = (0);
seq__11328 = G__11340;
chunk__11329 = G__11341;
count__11330 = G__11342;
i__11331 = G__11343;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__11328__$1);var boundaryline_id_11344 = (bl["id"]);var tolerance_11345 = (bl["tolerance"]);var general_cache_path_11346 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_11344,tolerance_11345], null));var collection_cache_path_11347 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_11344,tolerance_11345], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_11346,((function (seq__11328,chunk__11329,count__11330,i__11331,boundaryline_id_11344,tolerance_11345,general_cache_path_11346,collection_cache_path_11347,bl,seq__11328__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__11328,chunk__11329,count__11330,i__11331,boundaryline_id_11344,tolerance_11345,general_cache_path_11346,collection_cache_path_11347,bl,seq__11328__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_11347))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_11347,((function (seq__11328,chunk__11329,count__11330,i__11331,boundaryline_id_11344,tolerance_11345,general_cache_path_11346,collection_cache_path_11347,bl,seq__11328__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__11328,chunk__11329,count__11330,i__11331,boundaryline_id_11344,tolerance_11345,general_cache_path_11346,collection_cache_path_11347,bl,seq__11328__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__11348 = cljs.core.next.call(null,seq__11328__$1);
var G__11349 = null;
var G__11350 = (0);
var G__11351 = (0);
seq__11328 = G__11348;
chunk__11329 = G__11349;
count__11330 = G__11350;
i__11331 = G__11351;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__11352){var map__11368 = p__11352;var map__11368__$1 = ((cljs.core.seq_QMARK_.call(null,map__11368))?cljs.core.apply.call(null,cljs.core.hash_map,map__11368):map__11368);var bounds = cljs.core.get.call(null,map__11368__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__11368__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__11368,map__11368__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__11368,map__11368__$1,bounds,boundaryline_ids){
return (function (state_11373){var state_val_11374 = (state_11373[(1)]);if((state_val_11374 === (2)))
{var inst_11370 = (state_11373[(2)]);var inst_11371 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_11370);var state_11373__$1 = (function (){var statearr_11375 = state_11373;(statearr_11375[(7)] = inst_11371);
return statearr_11375;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11373__$1,true);
} else
{if((state_val_11374 === (1)))
{var state_11373__$1 = state_11373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11373__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__11368,map__11368__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__11368,map__11368__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_11379 = [null,null,null,null,null,null,null,null];(statearr_11379[(0)] = state_machine__5694__auto__);
(statearr_11379[(1)] = (1));
return statearr_11379;
});
var state_machine__5694__auto____1 = (function (state_11373){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_11373);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11380){if((e11380 instanceof Object))
{var ex__5697__auto__ = e11380;var statearr_11381_11383 = state_11373;(statearr_11381_11383[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11373);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11384 = state_11373;
state_11373 = G__11384;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11373){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__11368,map__11368__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_11382 = f__5709__auto__.call(null);(statearr_11382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_11382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__11368,map__11368__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__11352 = null;if (arguments.length > 5) {
  p__11352 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__11352);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__11385){
var app_state = cljs.core.first(arglist__11385);
arglist__11385 = cljs.core.next(arglist__11385);
var boundarylines_path = cljs.core.first(arglist__11385);
arglist__11385 = cljs.core.next(arglist__11385);
var collection_boundarylines_path = cljs.core.first(arglist__11385);
arglist__11385 = cljs.core.next(arglist__11385);
var collection_id = cljs.core.first(arglist__11385);
arglist__11385 = cljs.core.next(arglist__11385);
var tolerance = cljs.core.first(arglist__11385);
var p__11352 = cljs.core.rest(arglist__11385);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__11352);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__11386){var map__11391 = p__11386;var map__11391__$1 = ((cljs.core.seq_QMARK_.call(null,map__11391))?cljs.core.apply.call(null,cljs.core.hash_map,map__11391):map__11391);var boundaryline_ids = cljs.core.get.call(null,map__11391__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__11391,map__11391__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__11391,map__11391__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__11391,map__11391__$1,boundaryline_ids){
return (function (p__11392){var vec__11393 = p__11392;var blid = cljs.core.nth.call(null,vec__11393,(0),null);var vec__11394 = cljs.core.nth.call(null,vec__11393,(1),null);var tol = cljs.core.nth.call(null,vec__11394,(0),null);var bl = cljs.core.nth.call(null,vec__11394,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__11391,map__11391__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__11386 = null;if (arguments.length > 5) {
  p__11386 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__11386);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__11395){
var app_state = cljs.core.first(arglist__11395);
arglist__11395 = cljs.core.next(arglist__11395);
var boundarylines_path = cljs.core.first(arglist__11395);
arglist__11395 = cljs.core.next(arglist__11395);
var collection_id = cljs.core.first(arglist__11395);
arglist__11395 = cljs.core.next(arglist__11395);
var bounds = cljs.core.first(arglist__11395);
arglist__11395 = cljs.core.next(arglist__11395);
var zoom = cljs.core.first(arglist__11395);
var p__11386 = cljs.core.rest(arglist__11395);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__11386);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__11400_11404 = cljs.core.seq.call(null,keys);var chunk__11401_11405 = null;var count__11402_11406 = (0);var i__11403_11407 = (0);while(true){
if((i__11403_11407 < count__11402_11406))
{var k_11408 = cljs.core._nth.call(null,chunk__11401_11405,i__11403_11407);var obj_11409 = (js_index[k_11408]);var geom_11410 = (obj_11409["geojson"]);var feature_11411 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_11409["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_11409["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_11409["compact_name"])], null)], null));var __11412__$1 = (feature_11411["geometry"] = geom_11410);var __11413__$2 = ((feature_11411["properties"])["index_object"] = obj_11409);features.push(feature_11411);
{
var G__11414 = seq__11400_11404;
var G__11415 = chunk__11401_11405;
var G__11416 = count__11402_11406;
var G__11417 = (i__11403_11407 + (1));
seq__11400_11404 = G__11414;
chunk__11401_11405 = G__11415;
count__11402_11406 = G__11416;
i__11403_11407 = G__11417;
continue;
}
} else
{var temp__4126__auto___11418 = cljs.core.seq.call(null,seq__11400_11404);if(temp__4126__auto___11418)
{var seq__11400_11419__$1 = temp__4126__auto___11418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11400_11419__$1))
{var c__4314__auto___11420 = cljs.core.chunk_first.call(null,seq__11400_11419__$1);{
var G__11421 = cljs.core.chunk_rest.call(null,seq__11400_11419__$1);
var G__11422 = c__4314__auto___11420;
var G__11423 = cljs.core.count.call(null,c__4314__auto___11420);
var G__11424 = (0);
seq__11400_11404 = G__11421;
chunk__11401_11405 = G__11422;
count__11402_11406 = G__11423;
i__11403_11407 = G__11424;
continue;
}
} else
{var k_11425 = cljs.core.first.call(null,seq__11400_11419__$1);var obj_11426 = (js_index[k_11425]);var geom_11427 = (obj_11426["geojson"]);var feature_11428 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_11426["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_11426["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_11426["compact_name"])], null)], null));var __11429__$1 = (feature_11428["geometry"] = geom_11427);var __11430__$2 = ((feature_11428["properties"])["index_object"] = obj_11426);features.push(feature_11428);
{
var G__11431 = cljs.core.next.call(null,seq__11400_11419__$1);
var G__11432 = null;
var G__11433 = (0);
var G__11434 = (0);
seq__11400_11404 = G__11431;
chunk__11401_11405 = G__11432;
count__11402_11406 = G__11433;
i__11403_11407 = G__11434;
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
return (function (state_11477){var state_val_11478 = (state_11477[(1)]);if((state_val_11478 === (5)))
{var inst_11475 = (state_11477[(2)]);var state_11477__$1 = state_11477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11477__$1,inst_11475);
} else
{if((state_val_11478 === (4)))
{var state_11477__$1 = state_11477;var statearr_11479_11491 = state_11477__$1;(statearr_11479_11491[(2)] = null);
(statearr_11479_11491[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11478 === (3)))
{var inst_11465 = (state_11477[(7)]);var inst_11472 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_11465);var state_11477__$1 = state_11477;var statearr_11480_11492 = state_11477__$1;(statearr_11480_11492[(2)] = inst_11472);
(statearr_11480_11492[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11478 === (2)))
{var inst_11465 = (state_11477[(7)]);var inst_11465__$1 = (state_11477[(2)]);var inst_11466 = (function (){var bl_coll_index = inst_11465__$1;return ((function (bl_coll_index,inst_11465,inst_11465__$1,state_val_11478,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_11465,inst_11465__$1,state_val_11478,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_11467 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_11466);var inst_11468 = cljs.core.deref.call(null,app_state);var inst_11469 = cljs.core.get_in.call(null,inst_11468,index_path);var inst_11470 = cljs.core._EQ_.call(null,inst_11469,inst_11465__$1);var state_11477__$1 = (function (){var statearr_11481 = state_11477;(statearr_11481[(7)] = inst_11465__$1);
(statearr_11481[(8)] = inst_11467);
return statearr_11481;
})();if(inst_11470)
{var statearr_11482_11493 = state_11477__$1;(statearr_11482_11493[(1)] = (3));
} else
{var statearr_11483_11494 = state_11477__$1;(statearr_11483_11494[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11478 === (1)))
{var inst_11463 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_11477__$1 = state_11477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11477__$1,(2),inst_11463);
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
var state_machine__5694__auto____0 = (function (){var statearr_11487 = [null,null,null,null,null,null,null,null,null];(statearr_11487[(0)] = state_machine__5694__auto__);
(statearr_11487[(1)] = (1));
return statearr_11487;
});
var state_machine__5694__auto____1 = (function (state_11477){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_11477);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e11488){if((e11488 instanceof Object))
{var ex__5697__auto__ = e11488;var statearr_11489_11495 = state_11477;(statearr_11489_11495[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11477);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11488;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11496 = state_11477;
state_11477 = G__11496;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_11477){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_11477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_11490 = f__5709__auto__.call(null);(statearr_11490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_11490;
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
