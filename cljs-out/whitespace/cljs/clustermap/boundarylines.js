// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3637__auto__ = cljs.core.some.call(null,(function (p__12020){var vec__12021 = p__12020;var z = cljs.core.nth.call(null,vec__12021,(0),null);var t = cljs.core.nth.call(null,vec__12021,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = z;if(cljs.core.truth_(and__3625__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__12026 = cljs.core.seq.call(null,boundarylines);var chunk__12027 = null;var count__12028 = (0);var i__12029 = (0);while(true){
if((i__12029 < count__12028))
{var bl = cljs.core._nth.call(null,chunk__12027,i__12029);var boundaryline_id_12030 = (bl["id"]);var tolerance_12031 = (bl["tolerance"]);var general_cache_path_12032 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12030,tolerance_12031], null));var collection_cache_path_12033 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12030,tolerance_12031], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12032,((function (seq__12026,chunk__12027,count__12028,i__12029,boundaryline_id_12030,tolerance_12031,general_cache_path_12032,collection_cache_path_12033,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12026,chunk__12027,count__12028,i__12029,boundaryline_id_12030,tolerance_12031,general_cache_path_12032,collection_cache_path_12033,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12033))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12033,((function (seq__12026,chunk__12027,count__12028,i__12029,boundaryline_id_12030,tolerance_12031,general_cache_path_12032,collection_cache_path_12033,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12026,chunk__12027,count__12028,i__12029,boundaryline_id_12030,tolerance_12031,general_cache_path_12032,collection_cache_path_12033,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12034 = seq__12026;
var G__12035 = chunk__12027;
var G__12036 = count__12028;
var G__12037 = (i__12029 + (1));
seq__12026 = G__12034;
chunk__12027 = G__12035;
count__12028 = G__12036;
i__12029 = G__12037;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12026);if(temp__4126__auto__)
{var seq__12026__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12026__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__12026__$1);{
var G__12038 = cljs.core.chunk_rest.call(null,seq__12026__$1);
var G__12039 = c__4406__auto__;
var G__12040 = cljs.core.count.call(null,c__4406__auto__);
var G__12041 = (0);
seq__12026 = G__12038;
chunk__12027 = G__12039;
count__12028 = G__12040;
i__12029 = G__12041;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__12026__$1);var boundaryline_id_12042 = (bl["id"]);var tolerance_12043 = (bl["tolerance"]);var general_cache_path_12044 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12042,tolerance_12043], null));var collection_cache_path_12045 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_12042,tolerance_12043], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_12044,((function (seq__12026,chunk__12027,count__12028,i__12029,boundaryline_id_12042,tolerance_12043,general_cache_path_12044,collection_cache_path_12045,bl,seq__12026__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12026,chunk__12027,count__12028,i__12029,boundaryline_id_12042,tolerance_12043,general_cache_path_12044,collection_cache_path_12045,bl,seq__12026__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_12045))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_12045,((function (seq__12026,chunk__12027,count__12028,i__12029,boundaryline_id_12042,tolerance_12043,general_cache_path_12044,collection_cache_path_12045,bl,seq__12026__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__12026,chunk__12027,count__12028,i__12029,boundaryline_id_12042,tolerance_12043,general_cache_path_12044,collection_cache_path_12045,bl,seq__12026__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__12046 = cljs.core.next.call(null,seq__12026__$1);
var G__12047 = null;
var G__12048 = (0);
var G__12049 = (0);
seq__12026 = G__12046;
chunk__12027 = G__12047;
count__12028 = G__12048;
i__12029 = G__12049;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12050){var map__12066 = p__12050;var map__12066__$1 = ((cljs.core.seq_QMARK_.call(null,map__12066))?cljs.core.apply.call(null,cljs.core.hash_map,map__12066):map__12066);var bounds = cljs.core.get.call(null,map__12066__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__12066__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,comm,map__12066,map__12066__$1,bounds,boundaryline_ids){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,comm,map__12066,map__12066__$1,bounds,boundaryline_ids){
return (function (state_12071){var state_val_12072 = (state_12071[(1)]);if((state_val_12072 === (2)))
{var inst_12068 = (state_12071[(2)]);var inst_12069 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_12068);var state_12071__$1 = (function (){var statearr_12073 = state_12071;(statearr_12073[(7)] = inst_12069);
return statearr_12073;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12071__$1,true);
} else
{if((state_val_12072 === (1)))
{var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12071__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto__,comm,map__12066,map__12066__$1,bounds,boundaryline_ids))
;return ((function (switch__5804__auto__,c__5819__auto__,comm,map__12066,map__12066__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_12077 = [null,null,null,null,null,null,null,null];(statearr_12077[(0)] = state_machine__5805__auto__);
(statearr_12077[(1)] = (1));
return statearr_12077;
});
var state_machine__5805__auto____1 = (function (state_12071){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_12071);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e12078){if((e12078 instanceof Object))
{var ex__5808__auto__ = e12078;var statearr_12079_12081 = state_12071;(statearr_12079_12081[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12078;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12082 = state_12071;
state_12071 = G__12082;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_12071){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_12071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,comm,map__12066,map__12066__$1,bounds,boundaryline_ids))
})();var state__5821__auto__ = (function (){var statearr_12080 = f__5820__auto__.call(null);(statearr_12080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_12080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,comm,map__12066,map__12066__$1,bounds,boundaryline_ids))
);
return c__5819__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__12050 = null;if (arguments.length > 5) {
  p__12050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12050);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__12083){
var app_state = cljs.core.first(arglist__12083);
arglist__12083 = cljs.core.next(arglist__12083);
var boundarylines_path = cljs.core.first(arglist__12083);
arglist__12083 = cljs.core.next(arglist__12083);
var collection_boundarylines_path = cljs.core.first(arglist__12083);
arglist__12083 = cljs.core.next(arglist__12083);
var collection_id = cljs.core.first(arglist__12083);
arglist__12083 = cljs.core.next(arglist__12083);
var tolerance = cljs.core.first(arglist__12083);
var p__12050 = cljs.core.rest(arglist__12083);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__12050);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__12084){var map__12089 = p__12084;var map__12089__$1 = ((cljs.core.seq_QMARK_.call(null,map__12089))?cljs.core.apply.call(null,cljs.core.hash_map,map__12089):map__12089);var boundaryline_ids = cljs.core.get.call(null,map__12089__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12089,map__12089__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__12089,map__12089__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12089,map__12089__$1,boundaryline_ids){
return (function (p__12090){var vec__12091 = p__12090;var blid = cljs.core.nth.call(null,vec__12091,(0),null);var vec__12092 = cljs.core.nth.call(null,vec__12091,(1),null);var tol = cljs.core.nth.call(null,vec__12092,(0),null);var bl = cljs.core.nth.call(null,vec__12092,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__12089,map__12089__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__12084 = null;if (arguments.length > 5) {
  p__12084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__12084);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__12093){
var app_state = cljs.core.first(arglist__12093);
arglist__12093 = cljs.core.next(arglist__12093);
var boundarylines_path = cljs.core.first(arglist__12093);
arglist__12093 = cljs.core.next(arglist__12093);
var collection_id = cljs.core.first(arglist__12093);
arglist__12093 = cljs.core.next(arglist__12093);
var bounds = cljs.core.first(arglist__12093);
arglist__12093 = cljs.core.next(arglist__12093);
var zoom = cljs.core.first(arglist__12093);
var p__12084 = cljs.core.rest(arglist__12093);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__12084);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__12098_12102 = cljs.core.seq.call(null,keys);var chunk__12099_12103 = null;var count__12100_12104 = (0);var i__12101_12105 = (0);while(true){
if((i__12101_12105 < count__12100_12104))
{var k_12106 = cljs.core._nth.call(null,chunk__12099_12103,i__12101_12105);var obj_12107 = (js_index[k_12106]);var geom_12108 = (obj_12107["geojson"]);var feature_12109 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12107["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12107["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12107["compact_name"])], null)], null));var __12110__$1 = (feature_12109["geometry"] = geom_12108);var __12111__$2 = ((feature_12109["properties"])["index_object"] = obj_12107);features.push(feature_12109);
{
var G__12112 = seq__12098_12102;
var G__12113 = chunk__12099_12103;
var G__12114 = count__12100_12104;
var G__12115 = (i__12101_12105 + (1));
seq__12098_12102 = G__12112;
chunk__12099_12103 = G__12113;
count__12100_12104 = G__12114;
i__12101_12105 = G__12115;
continue;
}
} else
{var temp__4126__auto___12116 = cljs.core.seq.call(null,seq__12098_12102);if(temp__4126__auto___12116)
{var seq__12098_12117__$1 = temp__4126__auto___12116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12098_12117__$1))
{var c__4406__auto___12118 = cljs.core.chunk_first.call(null,seq__12098_12117__$1);{
var G__12119 = cljs.core.chunk_rest.call(null,seq__12098_12117__$1);
var G__12120 = c__4406__auto___12118;
var G__12121 = cljs.core.count.call(null,c__4406__auto___12118);
var G__12122 = (0);
seq__12098_12102 = G__12119;
chunk__12099_12103 = G__12120;
count__12100_12104 = G__12121;
i__12101_12105 = G__12122;
continue;
}
} else
{var k_12123 = cljs.core.first.call(null,seq__12098_12117__$1);var obj_12124 = (js_index[k_12123]);var geom_12125 = (obj_12124["geojson"]);var feature_12126 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_12124["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_12124["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_12124["compact_name"])], null)], null));var __12127__$1 = (feature_12126["geometry"] = geom_12125);var __12128__$2 = ((feature_12126["properties"])["index_object"] = obj_12124);features.push(feature_12126);
{
var G__12129 = cljs.core.next.call(null,seq__12098_12117__$1);
var G__12130 = null;
var G__12131 = (0);
var G__12132 = (0);
seq__12098_12102 = G__12129;
chunk__12099_12103 = G__12130;
count__12100_12104 = G__12131;
i__12101_12105 = G__12132;
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
return (function (state_12175){var state_val_12176 = (state_12175[(1)]);if((state_val_12176 === (5)))
{var inst_12173 = (state_12175[(2)]);var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12175__$1,inst_12173);
} else
{if((state_val_12176 === (4)))
{var state_12175__$1 = state_12175;var statearr_12177_12189 = state_12175__$1;(statearr_12177_12189[(2)] = null);
(statearr_12177_12189[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (3)))
{var inst_12163 = (state_12175[(7)]);var inst_12170 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_12163);var state_12175__$1 = state_12175;var statearr_12178_12190 = state_12175__$1;(statearr_12178_12190[(2)] = inst_12170);
(statearr_12178_12190[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (2)))
{var inst_12163 = (state_12175[(7)]);var inst_12163__$1 = (state_12175[(2)]);var inst_12164 = (function (){var bl_coll_index = inst_12163__$1;return ((function (bl_coll_index,inst_12163,inst_12163__$1,state_val_12176,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_12163,inst_12163__$1,state_val_12176,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_12165 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_12164);var inst_12166 = cljs.core.deref.call(null,app_state);var inst_12167 = cljs.core.get_in.call(null,inst_12166,index_path);var inst_12168 = cljs.core._EQ_.call(null,inst_12167,inst_12163__$1);var state_12175__$1 = (function (){var statearr_12179 = state_12175;(statearr_12179[(7)] = inst_12163__$1);
(statearr_12179[(8)] = inst_12165);
return statearr_12179;
})();if(inst_12168)
{var statearr_12180_12191 = state_12175__$1;(statearr_12180_12191[(1)] = (3));
} else
{var statearr_12181_12192 = state_12175__$1;(statearr_12181_12192[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (1)))
{var inst_12161 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12175__$1,(2),inst_12161);
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
var state_machine__5805__auto____0 = (function (){var statearr_12185 = [null,null,null,null,null,null,null,null,null];(statearr_12185[(0)] = state_machine__5805__auto__);
(statearr_12185[(1)] = (1));
return statearr_12185;
});
var state_machine__5805__auto____1 = (function (state_12175){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_12175);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e12186){if((e12186 instanceof Object))
{var ex__5808__auto__ = e12186;var statearr_12187_12193 = state_12175;(statearr_12187_12193[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12194 = state_12175;
state_12175 = G__12194;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_12175){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_12175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5821__auto__ = (function (){var statearr_12188 = f__5820__auto__.call(null);(statearr_12188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_12188;
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
