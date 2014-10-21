// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3637__auto__ = cljs.core.some.call(null,(function (p__80965){var vec__80966 = p__80965;var z = cljs.core.nth.call(null,vec__80966,(0),null);var t = cljs.core.nth.call(null,vec__80966,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = z;if(cljs.core.truth_(and__3625__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__80971 = cljs.core.seq.call(null,boundarylines);var chunk__80972 = null;var count__80973 = (0);var i__80974 = (0);while(true){
if((i__80974 < count__80973))
{var bl = cljs.core._nth.call(null,chunk__80972,i__80974);var boundaryline_id_80975 = (bl["id"]);var tolerance_80976 = (bl["tolerance"]);var general_cache_path_80977 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_80975,tolerance_80976], null));var collection_cache_path_80978 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_80975,tolerance_80976], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_80977,((function (seq__80971,chunk__80972,count__80973,i__80974,boundaryline_id_80975,tolerance_80976,general_cache_path_80977,collection_cache_path_80978,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__80971,chunk__80972,count__80973,i__80974,boundaryline_id_80975,tolerance_80976,general_cache_path_80977,collection_cache_path_80978,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_80978))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_80978,((function (seq__80971,chunk__80972,count__80973,i__80974,boundaryline_id_80975,tolerance_80976,general_cache_path_80977,collection_cache_path_80978,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__80971,chunk__80972,count__80973,i__80974,boundaryline_id_80975,tolerance_80976,general_cache_path_80977,collection_cache_path_80978,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__80979 = seq__80971;
var G__80980 = chunk__80972;
var G__80981 = count__80973;
var G__80982 = (i__80974 + (1));
seq__80971 = G__80979;
chunk__80972 = G__80980;
count__80973 = G__80981;
i__80974 = G__80982;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__80971);if(temp__4126__auto__)
{var seq__80971__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80971__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__80971__$1);{
var G__80983 = cljs.core.chunk_rest.call(null,seq__80971__$1);
var G__80984 = c__4406__auto__;
var G__80985 = cljs.core.count.call(null,c__4406__auto__);
var G__80986 = (0);
seq__80971 = G__80983;
chunk__80972 = G__80984;
count__80973 = G__80985;
i__80974 = G__80986;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__80971__$1);var boundaryline_id_80987 = (bl["id"]);var tolerance_80988 = (bl["tolerance"]);var general_cache_path_80989 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_80987,tolerance_80988], null));var collection_cache_path_80990 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_80987,tolerance_80988], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_80989,((function (seq__80971,chunk__80972,count__80973,i__80974,boundaryline_id_80987,tolerance_80988,general_cache_path_80989,collection_cache_path_80990,bl,seq__80971__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__80971,chunk__80972,count__80973,i__80974,boundaryline_id_80987,tolerance_80988,general_cache_path_80989,collection_cache_path_80990,bl,seq__80971__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_80990))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_80990,((function (seq__80971,chunk__80972,count__80973,i__80974,boundaryline_id_80987,tolerance_80988,general_cache_path_80989,collection_cache_path_80990,bl,seq__80971__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__80971,chunk__80972,count__80973,i__80974,boundaryline_id_80987,tolerance_80988,general_cache_path_80989,collection_cache_path_80990,bl,seq__80971__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__80991 = cljs.core.next.call(null,seq__80971__$1);
var G__80992 = null;
var G__80993 = (0);
var G__80994 = (0);
seq__80971 = G__80991;
chunk__80972 = G__80992;
count__80973 = G__80993;
i__80974 = G__80994;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__80995){var map__81011 = p__80995;var map__81011__$1 = ((cljs.core.seq_QMARK_.call(null,map__81011))?cljs.core.apply.call(null,cljs.core.hash_map,map__81011):map__81011);var bounds = cljs.core.get.call(null,map__81011__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__81011__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,comm,map__81011,map__81011__$1,bounds,boundaryline_ids){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,comm,map__81011,map__81011__$1,bounds,boundaryline_ids){
return (function (state_81016){var state_val_81017 = (state_81016[(1)]);if((state_val_81017 === (2)))
{var inst_81013 = (state_81016[(2)]);var inst_81014 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_81013);var state_81016__$1 = (function (){var statearr_81018 = state_81016;(statearr_81018[(7)] = inst_81014);
return statearr_81018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81016__$1,true);
} else
{if((state_val_81017 === (1)))
{var state_81016__$1 = state_81016;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81016__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto__,comm,map__81011,map__81011__$1,bounds,boundaryline_ids))
;return ((function (switch__5804__auto__,c__5819__auto__,comm,map__81011,map__81011__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_81022 = [null,null,null,null,null,null,null,null];(statearr_81022[(0)] = state_machine__5805__auto__);
(statearr_81022[(1)] = (1));
return statearr_81022;
});
var state_machine__5805__auto____1 = (function (state_81016){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81023){if((e81023 instanceof Object))
{var ex__5808__auto__ = e81023;var statearr_81024_81026 = state_81016;(statearr_81024_81026[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81023;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81027 = state_81016;
state_81016 = G__81027;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81016){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,comm,map__81011,map__81011__$1,bounds,boundaryline_ids))
})();var state__5821__auto__ = (function (){var statearr_81025 = f__5820__auto__.call(null);(statearr_81025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_81025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,comm,map__81011,map__81011__$1,bounds,boundaryline_ids))
);
return c__5819__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__80995 = null;if (arguments.length > 5) {
  p__80995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__80995);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__81028){
var app_state = cljs.core.first(arglist__81028);
arglist__81028 = cljs.core.next(arglist__81028);
var boundarylines_path = cljs.core.first(arglist__81028);
arglist__81028 = cljs.core.next(arglist__81028);
var collection_boundarylines_path = cljs.core.first(arglist__81028);
arglist__81028 = cljs.core.next(arglist__81028);
var collection_id = cljs.core.first(arglist__81028);
arglist__81028 = cljs.core.next(arglist__81028);
var tolerance = cljs.core.first(arglist__81028);
var p__80995 = cljs.core.rest(arglist__81028);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__80995);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__81029){var map__81034 = p__81029;var map__81034__$1 = ((cljs.core.seq_QMARK_.call(null,map__81034))?cljs.core.apply.call(null,cljs.core.hash_map,map__81034):map__81034);var boundaryline_ids = cljs.core.get.call(null,map__81034__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__81034,map__81034__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__81034,map__81034__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__81034,map__81034__$1,boundaryline_ids){
return (function (p__81035){var vec__81036 = p__81035;var blid = cljs.core.nth.call(null,vec__81036,(0),null);var vec__81037 = cljs.core.nth.call(null,vec__81036,(1),null);var tol = cljs.core.nth.call(null,vec__81037,(0),null);var bl = cljs.core.nth.call(null,vec__81037,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__81034,map__81034__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__81029 = null;if (arguments.length > 5) {
  p__81029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__81029);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__81038){
var app_state = cljs.core.first(arglist__81038);
arglist__81038 = cljs.core.next(arglist__81038);
var boundarylines_path = cljs.core.first(arglist__81038);
arglist__81038 = cljs.core.next(arglist__81038);
var collection_id = cljs.core.first(arglist__81038);
arglist__81038 = cljs.core.next(arglist__81038);
var bounds = cljs.core.first(arglist__81038);
arglist__81038 = cljs.core.next(arglist__81038);
var zoom = cljs.core.first(arglist__81038);
var p__81029 = cljs.core.rest(arglist__81038);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__81029);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__81043_81047 = cljs.core.seq.call(null,keys);var chunk__81044_81048 = null;var count__81045_81049 = (0);var i__81046_81050 = (0);while(true){
if((i__81046_81050 < count__81045_81049))
{var k_81051 = cljs.core._nth.call(null,chunk__81044_81048,i__81046_81050);var obj_81052 = (js_index[k_81051]);var geom_81053 = (obj_81052["geojson"]);var feature_81054 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_81052["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_81052["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_81052["compact_name"])], null)], null));var __81055__$1 = (feature_81054["geometry"] = geom_81053);var __81056__$2 = ((feature_81054["properties"])["index_object"] = obj_81052);features.push(feature_81054);
{
var G__81057 = seq__81043_81047;
var G__81058 = chunk__81044_81048;
var G__81059 = count__81045_81049;
var G__81060 = (i__81046_81050 + (1));
seq__81043_81047 = G__81057;
chunk__81044_81048 = G__81058;
count__81045_81049 = G__81059;
i__81046_81050 = G__81060;
continue;
}
} else
{var temp__4126__auto___81061 = cljs.core.seq.call(null,seq__81043_81047);if(temp__4126__auto___81061)
{var seq__81043_81062__$1 = temp__4126__auto___81061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81043_81062__$1))
{var c__4406__auto___81063 = cljs.core.chunk_first.call(null,seq__81043_81062__$1);{
var G__81064 = cljs.core.chunk_rest.call(null,seq__81043_81062__$1);
var G__81065 = c__4406__auto___81063;
var G__81066 = cljs.core.count.call(null,c__4406__auto___81063);
var G__81067 = (0);
seq__81043_81047 = G__81064;
chunk__81044_81048 = G__81065;
count__81045_81049 = G__81066;
i__81046_81050 = G__81067;
continue;
}
} else
{var k_81068 = cljs.core.first.call(null,seq__81043_81062__$1);var obj_81069 = (js_index[k_81068]);var geom_81070 = (obj_81069["geojson"]);var feature_81071 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_81069["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_81069["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_81069["compact_name"])], null)], null));var __81072__$1 = (feature_81071["geometry"] = geom_81070);var __81073__$2 = ((feature_81071["properties"])["index_object"] = obj_81069);features.push(feature_81071);
{
var G__81074 = cljs.core.next.call(null,seq__81043_81062__$1);
var G__81075 = null;
var G__81076 = (0);
var G__81077 = (0);
seq__81043_81047 = G__81074;
chunk__81044_81048 = G__81075;
count__81045_81049 = G__81076;
i__81046_81050 = G__81077;
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
return (function (state_81120){var state_val_81121 = (state_81120[(1)]);if((state_val_81121 === (5)))
{var inst_81118 = (state_81120[(2)]);var state_81120__$1 = state_81120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81120__$1,inst_81118);
} else
{if((state_val_81121 === (4)))
{var state_81120__$1 = state_81120;var statearr_81122_81134 = state_81120__$1;(statearr_81122_81134[(2)] = null);
(statearr_81122_81134[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81121 === (3)))
{var inst_81108 = (state_81120[(7)]);var inst_81115 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_81108);var state_81120__$1 = state_81120;var statearr_81123_81135 = state_81120__$1;(statearr_81123_81135[(2)] = inst_81115);
(statearr_81123_81135[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81121 === (2)))
{var inst_81108 = (state_81120[(7)]);var inst_81108__$1 = (state_81120[(2)]);var inst_81109 = (function (){var bl_coll_index = inst_81108__$1;return ((function (bl_coll_index,inst_81108,inst_81108__$1,state_val_81121,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_81108,inst_81108__$1,state_val_81121,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_81110 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_81109);var inst_81111 = cljs.core.deref.call(null,app_state);var inst_81112 = cljs.core.get_in.call(null,inst_81111,index_path);var inst_81113 = cljs.core._EQ_.call(null,inst_81112,inst_81108__$1);var state_81120__$1 = (function (){var statearr_81124 = state_81120;(statearr_81124[(7)] = inst_81108__$1);
(statearr_81124[(8)] = inst_81110);
return statearr_81124;
})();if(inst_81113)
{var statearr_81125_81136 = state_81120__$1;(statearr_81125_81136[(1)] = (3));
} else
{var statearr_81126_81137 = state_81120__$1;(statearr_81126_81137[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81121 === (1)))
{var inst_81106 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_81120__$1 = state_81120;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81120__$1,(2),inst_81106);
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
var state_machine__5805__auto____0 = (function (){var statearr_81130 = [null,null,null,null,null,null,null,null,null];(statearr_81130[(0)] = state_machine__5805__auto__);
(statearr_81130[(1)] = (1));
return statearr_81130;
});
var state_machine__5805__auto____1 = (function (state_81120){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81120);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81131){if((e81131 instanceof Object))
{var ex__5808__auto__ = e81131;var statearr_81132_81138 = state_81120;(statearr_81132_81138[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81120);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81131;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81139 = state_81120;
state_81120 = G__81139;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81120){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5821__auto__ = (function (){var statearr_81133 = f__5820__auto__.call(null);(statearr_81133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_81133;
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

//# sourceMappingURL=boundarylines.js.map