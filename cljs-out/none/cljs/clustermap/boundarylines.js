// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__60265){var vec__60266 = p__60265;var z = cljs.core.nth.call(null,vec__60266,(0),null);var t = cljs.core.nth.call(null,vec__60266,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__60271 = cljs.core.seq.call(null,boundarylines);var chunk__60272 = null;var count__60273 = (0);var i__60274 = (0);while(true){
if((i__60274 < count__60273))
{var bl = cljs.core._nth.call(null,chunk__60272,i__60274);var boundaryline_id_60275 = (bl["id"]);var tolerance_60276 = (bl["tolerance"]);var general_cache_path_60277 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_60275,tolerance_60276], null));var collection_cache_path_60278 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_60275,tolerance_60276], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_60277,((function (seq__60271,chunk__60272,count__60273,i__60274,boundaryline_id_60275,tolerance_60276,general_cache_path_60277,collection_cache_path_60278,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__60271,chunk__60272,count__60273,i__60274,boundaryline_id_60275,tolerance_60276,general_cache_path_60277,collection_cache_path_60278,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_60278))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_60278,((function (seq__60271,chunk__60272,count__60273,i__60274,boundaryline_id_60275,tolerance_60276,general_cache_path_60277,collection_cache_path_60278,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__60271,chunk__60272,count__60273,i__60274,boundaryline_id_60275,tolerance_60276,general_cache_path_60277,collection_cache_path_60278,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__60279 = seq__60271;
var G__60280 = chunk__60272;
var G__60281 = count__60273;
var G__60282 = (i__60274 + (1));
seq__60271 = G__60279;
chunk__60272 = G__60280;
count__60273 = G__60281;
i__60274 = G__60282;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__60271);if(temp__4126__auto__)
{var seq__60271__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__60271__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__60271__$1);{
var G__60283 = cljs.core.chunk_rest.call(null,seq__60271__$1);
var G__60284 = c__4314__auto__;
var G__60285 = cljs.core.count.call(null,c__4314__auto__);
var G__60286 = (0);
seq__60271 = G__60283;
chunk__60272 = G__60284;
count__60273 = G__60285;
i__60274 = G__60286;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__60271__$1);var boundaryline_id_60287 = (bl["id"]);var tolerance_60288 = (bl["tolerance"]);var general_cache_path_60289 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_60287,tolerance_60288], null));var collection_cache_path_60290 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_60287,tolerance_60288], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_60289,((function (seq__60271,chunk__60272,count__60273,i__60274,boundaryline_id_60287,tolerance_60288,general_cache_path_60289,collection_cache_path_60290,bl,seq__60271__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__60271,chunk__60272,count__60273,i__60274,boundaryline_id_60287,tolerance_60288,general_cache_path_60289,collection_cache_path_60290,bl,seq__60271__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_60290))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_60290,((function (seq__60271,chunk__60272,count__60273,i__60274,boundaryline_id_60287,tolerance_60288,general_cache_path_60289,collection_cache_path_60290,bl,seq__60271__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__60271,chunk__60272,count__60273,i__60274,boundaryline_id_60287,tolerance_60288,general_cache_path_60289,collection_cache_path_60290,bl,seq__60271__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__60291 = cljs.core.next.call(null,seq__60271__$1);
var G__60292 = null;
var G__60293 = (0);
var G__60294 = (0);
seq__60271 = G__60291;
chunk__60272 = G__60292;
count__60273 = G__60293;
i__60274 = G__60294;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__60295){var map__60311 = p__60295;var map__60311__$1 = ((cljs.core.seq_QMARK_.call(null,map__60311))?cljs.core.apply.call(null,cljs.core.hash_map,map__60311):map__60311);var bounds = cljs.core.get.call(null,map__60311__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__60311__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__60311,map__60311__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__60311,map__60311__$1,bounds,boundaryline_ids){
return (function (state_60316){var state_val_60317 = (state_60316[(1)]);if((state_val_60317 === (2)))
{var inst_60313 = (state_60316[(2)]);var inst_60314 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_60313);var state_60316__$1 = (function (){var statearr_60318 = state_60316;(statearr_60318[(7)] = inst_60314);
return statearr_60318;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60316__$1,true);
} else
{if((state_val_60317 === (1)))
{var state_60316__$1 = state_60316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60316__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__60311,map__60311__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__60311,map__60311__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_60322 = [null,null,null,null,null,null,null,null];(statearr_60322[(0)] = state_machine__5694__auto__);
(statearr_60322[(1)] = (1));
return statearr_60322;
});
var state_machine__5694__auto____1 = (function (state_60316){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_60316);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e60323){if((e60323 instanceof Object))
{var ex__5697__auto__ = e60323;var statearr_60324_60326 = state_60316;(statearr_60324_60326[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e60323;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__60327 = state_60316;
state_60316 = G__60327;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_60316){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_60316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__60311,map__60311__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_60325 = f__5709__auto__.call(null);(statearr_60325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_60325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__60311,map__60311__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__60295 = null;if (arguments.length > 5) {
  p__60295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__60295);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__60328){
var app_state = cljs.core.first(arglist__60328);
arglist__60328 = cljs.core.next(arglist__60328);
var boundarylines_path = cljs.core.first(arglist__60328);
arglist__60328 = cljs.core.next(arglist__60328);
var collection_boundarylines_path = cljs.core.first(arglist__60328);
arglist__60328 = cljs.core.next(arglist__60328);
var collection_id = cljs.core.first(arglist__60328);
arglist__60328 = cljs.core.next(arglist__60328);
var tolerance = cljs.core.first(arglist__60328);
var p__60295 = cljs.core.rest(arglist__60328);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__60295);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__60329){var map__60334 = p__60329;var map__60334__$1 = ((cljs.core.seq_QMARK_.call(null,map__60334))?cljs.core.apply.call(null,cljs.core.hash_map,map__60334):map__60334);var boundaryline_ids = cljs.core.get.call(null,map__60334__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__60334,map__60334__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__60334,map__60334__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__60334,map__60334__$1,boundaryline_ids){
return (function (p__60335){var vec__60336 = p__60335;var blid = cljs.core.nth.call(null,vec__60336,(0),null);var vec__60337 = cljs.core.nth.call(null,vec__60336,(1),null);var tol = cljs.core.nth.call(null,vec__60337,(0),null);var bl = cljs.core.nth.call(null,vec__60337,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__60334,map__60334__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__60329 = null;if (arguments.length > 5) {
  p__60329 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__60329);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__60338){
var app_state = cljs.core.first(arglist__60338);
arglist__60338 = cljs.core.next(arglist__60338);
var boundarylines_path = cljs.core.first(arglist__60338);
arglist__60338 = cljs.core.next(arglist__60338);
var collection_id = cljs.core.first(arglist__60338);
arglist__60338 = cljs.core.next(arglist__60338);
var bounds = cljs.core.first(arglist__60338);
arglist__60338 = cljs.core.next(arglist__60338);
var zoom = cljs.core.first(arglist__60338);
var p__60329 = cljs.core.rest(arglist__60338);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__60329);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__60343_60347 = cljs.core.seq.call(null,keys);var chunk__60344_60348 = null;var count__60345_60349 = (0);var i__60346_60350 = (0);while(true){
if((i__60346_60350 < count__60345_60349))
{var k_60351 = cljs.core._nth.call(null,chunk__60344_60348,i__60346_60350);var obj_60352 = (js_index[k_60351]);var geom_60353 = (obj_60352["geojson"]);var feature_60354 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_60352["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_60352["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_60352["compact_name"])], null)], null));var __60355__$1 = (feature_60354["geometry"] = geom_60353);var __60356__$2 = ((feature_60354["properties"])["index_object"] = obj_60352);features.push(feature_60354);
{
var G__60357 = seq__60343_60347;
var G__60358 = chunk__60344_60348;
var G__60359 = count__60345_60349;
var G__60360 = (i__60346_60350 + (1));
seq__60343_60347 = G__60357;
chunk__60344_60348 = G__60358;
count__60345_60349 = G__60359;
i__60346_60350 = G__60360;
continue;
}
} else
{var temp__4126__auto___60361 = cljs.core.seq.call(null,seq__60343_60347);if(temp__4126__auto___60361)
{var seq__60343_60362__$1 = temp__4126__auto___60361;if(cljs.core.chunked_seq_QMARK_.call(null,seq__60343_60362__$1))
{var c__4314__auto___60363 = cljs.core.chunk_first.call(null,seq__60343_60362__$1);{
var G__60364 = cljs.core.chunk_rest.call(null,seq__60343_60362__$1);
var G__60365 = c__4314__auto___60363;
var G__60366 = cljs.core.count.call(null,c__4314__auto___60363);
var G__60367 = (0);
seq__60343_60347 = G__60364;
chunk__60344_60348 = G__60365;
count__60345_60349 = G__60366;
i__60346_60350 = G__60367;
continue;
}
} else
{var k_60368 = cljs.core.first.call(null,seq__60343_60362__$1);var obj_60369 = (js_index[k_60368]);var geom_60370 = (obj_60369["geojson"]);var feature_60371 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_60369["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_60369["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_60369["compact_name"])], null)], null));var __60372__$1 = (feature_60371["geometry"] = geom_60370);var __60373__$2 = ((feature_60371["properties"])["index_object"] = obj_60369);features.push(feature_60371);
{
var G__60374 = cljs.core.next.call(null,seq__60343_60362__$1);
var G__60375 = null;
var G__60376 = (0);
var G__60377 = (0);
seq__60343_60347 = G__60374;
chunk__60344_60348 = G__60375;
count__60345_60349 = G__60376;
i__60346_60350 = G__60377;
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
return (function (state_60420){var state_val_60421 = (state_60420[(1)]);if((state_val_60421 === (5)))
{var inst_60418 = (state_60420[(2)]);var state_60420__$1 = state_60420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60420__$1,inst_60418);
} else
{if((state_val_60421 === (4)))
{var state_60420__$1 = state_60420;var statearr_60422_60434 = state_60420__$1;(statearr_60422_60434[(2)] = null);
(statearr_60422_60434[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60421 === (3)))
{var inst_60408 = (state_60420[(7)]);var inst_60415 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_60408);var state_60420__$1 = state_60420;var statearr_60423_60435 = state_60420__$1;(statearr_60423_60435[(2)] = inst_60415);
(statearr_60423_60435[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60421 === (2)))
{var inst_60408 = (state_60420[(7)]);var inst_60408__$1 = (state_60420[(2)]);var inst_60409 = (function (){var bl_coll_index = inst_60408__$1;return ((function (bl_coll_index,inst_60408,inst_60408__$1,state_val_60421,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_60408,inst_60408__$1,state_val_60421,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_60410 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_60409);var inst_60411 = cljs.core.deref.call(null,app_state);var inst_60412 = cljs.core.get_in.call(null,inst_60411,index_path);var inst_60413 = cljs.core._EQ_.call(null,inst_60412,inst_60408__$1);var state_60420__$1 = (function (){var statearr_60424 = state_60420;(statearr_60424[(8)] = inst_60410);
(statearr_60424[(7)] = inst_60408__$1);
return statearr_60424;
})();if(inst_60413)
{var statearr_60425_60436 = state_60420__$1;(statearr_60425_60436[(1)] = (3));
} else
{var statearr_60426_60437 = state_60420__$1;(statearr_60426_60437[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60421 === (1)))
{var inst_60406 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_60420__$1 = state_60420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60420__$1,(2),inst_60406);
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
var state_machine__5694__auto____0 = (function (){var statearr_60430 = [null,null,null,null,null,null,null,null,null];(statearr_60430[(0)] = state_machine__5694__auto__);
(statearr_60430[(1)] = (1));
return statearr_60430;
});
var state_machine__5694__auto____1 = (function (state_60420){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_60420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e60431){if((e60431 instanceof Object))
{var ex__5697__auto__ = e60431;var statearr_60432_60438 = state_60420;(statearr_60432_60438[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e60431;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__60439 = state_60420;
state_60420 = G__60439;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_60420){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_60420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_60433 = f__5709__auto__.call(null);(statearr_60433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_60433;
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