// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__7900__auto__ = cljs.core.some.call(null,(function (p__20304){var vec__20305 = p__20304;var z = cljs.core.nth.call(null,vec__20305,(0),null);var t = cljs.core.nth.call(null,vec__20305,(1),null);if(cljs.core.truth_((function (){var and__7888__auto__ = z;if(cljs.core.truth_(and__7888__auto__))
{return (zoom <= z);
} else
{return and__7888__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
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
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__7900__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__7900__auto____$1))
{return or__7900__auto____$1;
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__20310 = cljs.core.seq.call(null,boundarylines);var chunk__20311 = null;var count__20312 = (0);var i__20313 = (0);while(true){
if((i__20313 < count__20312))
{var bl = cljs.core._nth.call(null,chunk__20311,i__20313);var boundaryline_id_20314 = (bl["id"]);var tolerance_20315 = (bl["tolerance"]);var general_cache_path_20316 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_20314,tolerance_20315], null));var collection_cache_path_20317 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_20314,tolerance_20315], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_20316,((function (seq__20310,chunk__20311,count__20312,i__20313,boundaryline_id_20314,tolerance_20315,general_cache_path_20316,collection_cache_path_20317,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__20310,chunk__20311,count__20312,i__20313,boundaryline_id_20314,tolerance_20315,general_cache_path_20316,collection_cache_path_20317,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_20317))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_20317,((function (seq__20310,chunk__20311,count__20312,i__20313,boundaryline_id_20314,tolerance_20315,general_cache_path_20316,collection_cache_path_20317,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__20310,chunk__20311,count__20312,i__20313,boundaryline_id_20314,tolerance_20315,general_cache_path_20316,collection_cache_path_20317,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__20318 = seq__20310;
var G__20319 = chunk__20311;
var G__20320 = count__20312;
var G__20321 = (i__20313 + (1));
seq__20310 = G__20318;
chunk__20311 = G__20319;
count__20312 = G__20320;
i__20313 = G__20321;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20310);if(temp__4126__auto__)
{var seq__20310__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20310__$1))
{var c__8656__auto__ = cljs.core.chunk_first.call(null,seq__20310__$1);{
var G__20322 = cljs.core.chunk_rest.call(null,seq__20310__$1);
var G__20323 = c__8656__auto__;
var G__20324 = cljs.core.count.call(null,c__8656__auto__);
var G__20325 = (0);
seq__20310 = G__20322;
chunk__20311 = G__20323;
count__20312 = G__20324;
i__20313 = G__20325;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__20310__$1);var boundaryline_id_20326 = (bl["id"]);var tolerance_20327 = (bl["tolerance"]);var general_cache_path_20328 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_20326,tolerance_20327], null));var collection_cache_path_20329 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_20326,tolerance_20327], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_20328,((function (seq__20310,chunk__20311,count__20312,i__20313,boundaryline_id_20326,tolerance_20327,general_cache_path_20328,collection_cache_path_20329,bl,seq__20310__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__20310,chunk__20311,count__20312,i__20313,boundaryline_id_20326,tolerance_20327,general_cache_path_20328,collection_cache_path_20329,bl,seq__20310__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_20329))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_20329,((function (seq__20310,chunk__20311,count__20312,i__20313,boundaryline_id_20326,tolerance_20327,general_cache_path_20328,collection_cache_path_20329,bl,seq__20310__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__20310,chunk__20311,count__20312,i__20313,boundaryline_id_20326,tolerance_20327,general_cache_path_20328,collection_cache_path_20329,bl,seq__20310__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__20330 = cljs.core.next.call(null,seq__20310__$1);
var G__20331 = null;
var G__20332 = (0);
var G__20333 = (0);
seq__20310 = G__20330;
chunk__20311 = G__20331;
count__20312 = G__20332;
i__20313 = G__20333;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__20334){var map__20350 = p__20334;var map__20350__$1 = ((cljs.core.seq_QMARK_.call(null,map__20350))?cljs.core.apply.call(null,cljs.core.hash_map,map__20350):map__20350);var bounds = cljs.core.get.call(null,map__20350__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__20350__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__,comm,map__20350,map__20350__$1,bounds,boundaryline_ids){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__,comm,map__20350,map__20350__$1,bounds,boundaryline_ids){
return (function (state_20355){var state_val_20356 = (state_20355[(1)]);if((state_val_20356 === (2)))
{var inst_20352 = (state_20355[(2)]);var inst_20353 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_20352);var state_20355__$1 = (function (){var statearr_20357 = state_20355;(statearr_20357[(7)] = inst_20353);
return statearr_20357;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20355__$1,true);
} else
{if((state_val_20356 === (1)))
{var state_20355__$1 = state_20355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20355__$1,(2),comm);
} else
{return null;
}
}
});})(c__9759__auto__,comm,map__20350,map__20350__$1,bounds,boundaryline_ids))
;return ((function (switch__9744__auto__,c__9759__auto__,comm,map__20350,map__20350__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_20361 = [null,null,null,null,null,null,null,null];(statearr_20361[(0)] = state_machine__9745__auto__);
(statearr_20361[(1)] = (1));
return statearr_20361;
});
var state_machine__9745__auto____1 = (function (state_20355){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_20355);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e20362){if((e20362 instanceof Object))
{var ex__9748__auto__ = e20362;var statearr_20363_20365 = state_20355;(statearr_20363_20365[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20362;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20366 = state_20355;
state_20355 = G__20366;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_20355){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_20355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__,comm,map__20350,map__20350__$1,bounds,boundaryline_ids))
})();var state__9761__auto__ = (function (){var statearr_20364 = f__9760__auto__.call(null);(statearr_20364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_20364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__,comm,map__20350,map__20350__$1,bounds,boundaryline_ids))
);
return c__9759__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__20334 = null;if (arguments.length > 5) {
  p__20334 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__20334);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__20367){
var app_state = cljs.core.first(arglist__20367);
arglist__20367 = cljs.core.next(arglist__20367);
var boundarylines_path = cljs.core.first(arglist__20367);
arglist__20367 = cljs.core.next(arglist__20367);
var collection_boundarylines_path = cljs.core.first(arglist__20367);
arglist__20367 = cljs.core.next(arglist__20367);
var collection_id = cljs.core.first(arglist__20367);
arglist__20367 = cljs.core.next(arglist__20367);
var tolerance = cljs.core.first(arglist__20367);
var p__20334 = cljs.core.rest(arglist__20367);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__20334);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__7888__auto__ = default_bl;if(cljs.core.truth_(and__7888__auto__))
{return default_tol;
} else
{return and__7888__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__7900__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__20368){var map__20373 = p__20368;var map__20373__$1 = ((cljs.core.seq_QMARK_.call(null,map__20373))?cljs.core.apply.call(null,cljs.core.hash_map,map__20373):map__20373);var boundaryline_ids = cljs.core.get.call(null,map__20373__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__20373,map__20373__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__20373,map__20373__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__20373,map__20373__$1,boundaryline_ids){
return (function (p__20374){var vec__20375 = p__20374;var blid = cljs.core.nth.call(null,vec__20375,(0),null);var vec__20376 = cljs.core.nth.call(null,vec__20375,(1),null);var tol = cljs.core.nth.call(null,vec__20376,(0),null);var bl = cljs.core.nth.call(null,vec__20376,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__20373,map__20373__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__20368 = null;if (arguments.length > 5) {
  p__20368 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__20368);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__20377){
var app_state = cljs.core.first(arglist__20377);
arglist__20377 = cljs.core.next(arglist__20377);
var boundarylines_path = cljs.core.first(arglist__20377);
arglist__20377 = cljs.core.next(arglist__20377);
var collection_id = cljs.core.first(arglist__20377);
arglist__20377 = cljs.core.next(arglist__20377);
var bounds = cljs.core.first(arglist__20377);
arglist__20377 = cljs.core.next(arglist__20377);
var zoom = cljs.core.first(arglist__20377);
var p__20368 = cljs.core.rest(arglist__20377);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__20368);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__20382_20386 = cljs.core.seq.call(null,keys);var chunk__20383_20387 = null;var count__20384_20388 = (0);var i__20385_20389 = (0);while(true){
if((i__20385_20389 < count__20384_20388))
{var k_20390 = cljs.core._nth.call(null,chunk__20383_20387,i__20385_20389);var obj_20391 = (js_index[k_20390]);var geom_20392 = (obj_20391["geojson"]);var feature_20393 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_20391["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_20391["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_20391["compact_name"])], null)], null));var __20394__$1 = (feature_20393["geometry"] = geom_20392);var __20395__$2 = ((feature_20393["properties"])["index_object"] = obj_20391);features.push(feature_20393);
{
var G__20396 = seq__20382_20386;
var G__20397 = chunk__20383_20387;
var G__20398 = count__20384_20388;
var G__20399 = (i__20385_20389 + (1));
seq__20382_20386 = G__20396;
chunk__20383_20387 = G__20397;
count__20384_20388 = G__20398;
i__20385_20389 = G__20399;
continue;
}
} else
{var temp__4126__auto___20400 = cljs.core.seq.call(null,seq__20382_20386);if(temp__4126__auto___20400)
{var seq__20382_20401__$1 = temp__4126__auto___20400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20382_20401__$1))
{var c__8656__auto___20402 = cljs.core.chunk_first.call(null,seq__20382_20401__$1);{
var G__20403 = cljs.core.chunk_rest.call(null,seq__20382_20401__$1);
var G__20404 = c__8656__auto___20402;
var G__20405 = cljs.core.count.call(null,c__8656__auto___20402);
var G__20406 = (0);
seq__20382_20386 = G__20403;
chunk__20383_20387 = G__20404;
count__20384_20388 = G__20405;
i__20385_20389 = G__20406;
continue;
}
} else
{var k_20407 = cljs.core.first.call(null,seq__20382_20401__$1);var obj_20408 = (js_index[k_20407]);var geom_20409 = (obj_20408["geojson"]);var feature_20410 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_20408["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_20408["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_20408["compact_name"])], null)], null));var __20411__$1 = (feature_20410["geometry"] = geom_20409);var __20412__$2 = ((feature_20410["properties"])["index_object"] = obj_20408);features.push(feature_20410);
{
var G__20413 = cljs.core.next.call(null,seq__20382_20401__$1);
var G__20414 = null;
var G__20415 = (0);
var G__20416 = (0);
seq__20382_20386 = G__20413;
chunk__20383_20387 = G__20414;
count__20384_20388 = G__20415;
i__20385_20389 = G__20416;
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
{var c__9759__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9759__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__9760__auto__ = (function (){var switch__9744__auto__ = ((function (c__9759__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_20459){var state_val_20460 = (state_20459[(1)]);if((state_val_20460 === (5)))
{var inst_20457 = (state_20459[(2)]);var state_20459__$1 = state_20459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20459__$1,inst_20457);
} else
{if((state_val_20460 === (4)))
{var state_20459__$1 = state_20459;var statearr_20461_20473 = state_20459__$1;(statearr_20461_20473[(2)] = null);
(statearr_20461_20473[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20460 === (3)))
{var inst_20447 = (state_20459[(7)]);var inst_20454 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_20447);var state_20459__$1 = state_20459;var statearr_20462_20474 = state_20459__$1;(statearr_20462_20474[(2)] = inst_20454);
(statearr_20462_20474[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20460 === (2)))
{var inst_20447 = (state_20459[(7)]);var inst_20447__$1 = (state_20459[(2)]);var inst_20448 = (function (){var bl_coll_index = inst_20447__$1;return ((function (bl_coll_index,inst_20447,inst_20447__$1,state_val_20460,c__9759__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_20447,inst_20447__$1,state_val_20460,c__9759__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_20449 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_20448);var inst_20450 = cljs.core.deref.call(null,app_state);var inst_20451 = cljs.core.get_in.call(null,inst_20450,index_path);var inst_20452 = cljs.core._EQ_.call(null,inst_20451,inst_20447__$1);var state_20459__$1 = (function (){var statearr_20463 = state_20459;(statearr_20463[(7)] = inst_20447__$1);
(statearr_20463[(8)] = inst_20449);
return statearr_20463;
})();if(inst_20452)
{var statearr_20464_20475 = state_20459__$1;(statearr_20464_20475[(1)] = (3));
} else
{var statearr_20465_20476 = state_20459__$1;(statearr_20465_20476[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20460 === (1)))
{var inst_20445 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_20459__$1 = state_20459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20459__$1,(2),inst_20445);
} else
{return null;
}
}
}
}
}
});})(c__9759__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__9744__auto__,c__9759__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__9745__auto__ = null;
var state_machine__9745__auto____0 = (function (){var statearr_20469 = [null,null,null,null,null,null,null,null,null];(statearr_20469[(0)] = state_machine__9745__auto__);
(statearr_20469[(1)] = (1));
return statearr_20469;
});
var state_machine__9745__auto____1 = (function (state_20459){while(true){
var ret_value__9746__auto__ = (function (){try{while(true){
var result__9747__auto__ = switch__9744__auto__.call(null,state_20459);if(cljs.core.keyword_identical_QMARK_.call(null,result__9747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9747__auto__;
}
break;
}
}catch (e20470){if((e20470 instanceof Object))
{var ex__9748__auto__ = e20470;var statearr_20471_20477 = state_20459;(statearr_20471_20477[(5)] = ex__9748__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20459);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20470;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20478 = state_20459;
state_20459 = G__20478;
continue;
}
} else
{return ret_value__9746__auto__;
}
break;
}
});
state_machine__9745__auto__ = function(state_20459){
switch(arguments.length){
case 0:
return state_machine__9745__auto____0.call(this);
case 1:
return state_machine__9745__auto____1.call(this,state_20459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9745__auto____0;
state_machine__9745__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9745__auto____1;
return state_machine__9745__auto__;
})()
;})(switch__9744__auto__,c__9759__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__9761__auto__ = (function (){var statearr_20472 = f__9760__auto__.call(null);(statearr_20472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9759__auto__);
return statearr_20472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9761__auto__);
});})(c__9759__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__9759__auto__;
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
,(function (){var or__7900__auto__ = hits;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});

//# sourceMappingURL=boundarylines.js.map