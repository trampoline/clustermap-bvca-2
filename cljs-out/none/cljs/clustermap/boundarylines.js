// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3543__auto__ = cljs.core.some.call(null,(function (p__49225){var vec__49226 = p__49225;var z = cljs.core.nth.call(null,vec__49226,(0),null);var t = cljs.core.nth.call(null,vec__49226,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = z;if(cljs.core.truth_(and__3531__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__49231 = cljs.core.seq.call(null,boundarylines);var chunk__49232 = null;var count__49233 = (0);var i__49234 = (0);while(true){
if((i__49234 < count__49233))
{var bl = cljs.core._nth.call(null,chunk__49232,i__49234);var boundaryline_id_49235 = (bl["id"]);var tolerance_49236 = (bl["tolerance"]);var general_cache_path_49237 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49235,tolerance_49236], null));var collection_cache_path_49238 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49235,tolerance_49236], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_49237,((function (seq__49231,chunk__49232,count__49233,i__49234,boundaryline_id_49235,tolerance_49236,general_cache_path_49237,collection_cache_path_49238,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49231,chunk__49232,count__49233,i__49234,boundaryline_id_49235,tolerance_49236,general_cache_path_49237,collection_cache_path_49238,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_49238))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_49238,((function (seq__49231,chunk__49232,count__49233,i__49234,boundaryline_id_49235,tolerance_49236,general_cache_path_49237,collection_cache_path_49238,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49231,chunk__49232,count__49233,i__49234,boundaryline_id_49235,tolerance_49236,general_cache_path_49237,collection_cache_path_49238,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__49239 = seq__49231;
var G__49240 = chunk__49232;
var G__49241 = count__49233;
var G__49242 = (i__49234 + (1));
seq__49231 = G__49239;
chunk__49232 = G__49240;
count__49233 = G__49241;
i__49234 = G__49242;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49231);if(temp__4126__auto__)
{var seq__49231__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49231__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__49231__$1);{
var G__49243 = cljs.core.chunk_rest.call(null,seq__49231__$1);
var G__49244 = c__4299__auto__;
var G__49245 = cljs.core.count.call(null,c__4299__auto__);
var G__49246 = (0);
seq__49231 = G__49243;
chunk__49232 = G__49244;
count__49233 = G__49245;
i__49234 = G__49246;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__49231__$1);var boundaryline_id_49247 = (bl["id"]);var tolerance_49248 = (bl["tolerance"]);var general_cache_path_49249 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49247,tolerance_49248], null));var collection_cache_path_49250 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_49247,tolerance_49248], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_49249,((function (seq__49231,chunk__49232,count__49233,i__49234,boundaryline_id_49247,tolerance_49248,general_cache_path_49249,collection_cache_path_49250,bl,seq__49231__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49231,chunk__49232,count__49233,i__49234,boundaryline_id_49247,tolerance_49248,general_cache_path_49249,collection_cache_path_49250,bl,seq__49231__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_49250))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_49250,((function (seq__49231,chunk__49232,count__49233,i__49234,boundaryline_id_49247,tolerance_49248,general_cache_path_49249,collection_cache_path_49250,bl,seq__49231__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__49231,chunk__49232,count__49233,i__49234,boundaryline_id_49247,tolerance_49248,general_cache_path_49249,collection_cache_path_49250,bl,seq__49231__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__49251 = cljs.core.next.call(null,seq__49231__$1);
var G__49252 = null;
var G__49253 = (0);
var G__49254 = (0);
seq__49231 = G__49251;
chunk__49232 = G__49252;
count__49233 = G__49253;
i__49234 = G__49254;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49255){var map__49271 = p__49255;var map__49271__$1 = ((cljs.core.seq_QMARK_.call(null,map__49271))?cljs.core.apply.call(null,cljs.core.hash_map,map__49271):map__49271);var bounds = cljs.core.get.call(null,map__49271__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__49271__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,comm,map__49271,map__49271__$1,bounds,boundaryline_ids){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,comm,map__49271,map__49271__$1,bounds,boundaryline_ids){
return (function (state_49276){var state_val_49277 = (state_49276[(1)]);if((state_val_49277 === (2)))
{var inst_49273 = (state_49276[(2)]);var inst_49274 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_49273);var state_49276__$1 = (function (){var statearr_49278 = state_49276;(statearr_49278[(7)] = inst_49274);
return statearr_49278;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49276__$1,true);
} else
{if((state_val_49277 === (1)))
{var state_49276__$1 = state_49276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49276__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto__,comm,map__49271,map__49271__$1,bounds,boundaryline_ids))
;return ((function (switch__5678__auto__,c__5693__auto__,comm,map__49271,map__49271__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_49282 = [null,null,null,null,null,null,null,null];(statearr_49282[(0)] = state_machine__5679__auto__);
(statearr_49282[(1)] = (1));
return statearr_49282;
});
var state_machine__5679__auto____1 = (function (state_49276){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49276);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49283){if((e49283 instanceof Object))
{var ex__5682__auto__ = e49283;var statearr_49284_49286 = state_49276;(statearr_49284_49286[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49276);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49287 = state_49276;
state_49276 = G__49287;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49276){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,comm,map__49271,map__49271__$1,bounds,boundaryline_ids))
})();var state__5695__auto__ = (function (){var statearr_49285 = f__5694__auto__.call(null);(statearr_49285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_49285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,comm,map__49271,map__49271__$1,bounds,boundaryline_ids))
);
return c__5693__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__49255 = null;if (arguments.length > 5) {
  p__49255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49255);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__49288){
var app_state = cljs.core.first(arglist__49288);
arglist__49288 = cljs.core.next(arglist__49288);
var boundarylines_path = cljs.core.first(arglist__49288);
arglist__49288 = cljs.core.next(arglist__49288);
var collection_boundarylines_path = cljs.core.first(arglist__49288);
arglist__49288 = cljs.core.next(arglist__49288);
var collection_id = cljs.core.first(arglist__49288);
arglist__49288 = cljs.core.next(arglist__49288);
var tolerance = cljs.core.first(arglist__49288);
var p__49255 = cljs.core.rest(arglist__49288);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__49255);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__49289){var map__49294 = p__49289;var map__49294__$1 = ((cljs.core.seq_QMARK_.call(null,map__49294))?cljs.core.apply.call(null,cljs.core.hash_map,map__49294):map__49294);var boundaryline_ids = cljs.core.get.call(null,map__49294__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__49294,map__49294__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__49294,map__49294__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__49294,map__49294__$1,boundaryline_ids){
return (function (p__49295){var vec__49296 = p__49295;var blid = cljs.core.nth.call(null,vec__49296,(0),null);var vec__49297 = cljs.core.nth.call(null,vec__49296,(1),null);var tol = cljs.core.nth.call(null,vec__49297,(0),null);var bl = cljs.core.nth.call(null,vec__49297,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__49294,map__49294__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__49289 = null;if (arguments.length > 5) {
  p__49289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__49289);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__49298){
var app_state = cljs.core.first(arglist__49298);
arglist__49298 = cljs.core.next(arglist__49298);
var boundarylines_path = cljs.core.first(arglist__49298);
arglist__49298 = cljs.core.next(arglist__49298);
var collection_id = cljs.core.first(arglist__49298);
arglist__49298 = cljs.core.next(arglist__49298);
var bounds = cljs.core.first(arglist__49298);
arglist__49298 = cljs.core.next(arglist__49298);
var zoom = cljs.core.first(arglist__49298);
var p__49289 = cljs.core.rest(arglist__49298);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__49289);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__49303_49307 = cljs.core.seq.call(null,keys);var chunk__49304_49308 = null;var count__49305_49309 = (0);var i__49306_49310 = (0);while(true){
if((i__49306_49310 < count__49305_49309))
{var k_49311 = cljs.core._nth.call(null,chunk__49304_49308,i__49306_49310);var obj_49312 = (js_index[k_49311]);var geom_49313 = (obj_49312["geojson"]);var feature_49314 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_49312["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_49312["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_49312["compact_name"])], null)], null));var __49315__$1 = (feature_49314["geometry"] = geom_49313);var __49316__$2 = ((feature_49314["properties"])["index_object"] = obj_49312);features.push(feature_49314);
{
var G__49317 = seq__49303_49307;
var G__49318 = chunk__49304_49308;
var G__49319 = count__49305_49309;
var G__49320 = (i__49306_49310 + (1));
seq__49303_49307 = G__49317;
chunk__49304_49308 = G__49318;
count__49305_49309 = G__49319;
i__49306_49310 = G__49320;
continue;
}
} else
{var temp__4126__auto___49321 = cljs.core.seq.call(null,seq__49303_49307);if(temp__4126__auto___49321)
{var seq__49303_49322__$1 = temp__4126__auto___49321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49303_49322__$1))
{var c__4299__auto___49323 = cljs.core.chunk_first.call(null,seq__49303_49322__$1);{
var G__49324 = cljs.core.chunk_rest.call(null,seq__49303_49322__$1);
var G__49325 = c__4299__auto___49323;
var G__49326 = cljs.core.count.call(null,c__4299__auto___49323);
var G__49327 = (0);
seq__49303_49307 = G__49324;
chunk__49304_49308 = G__49325;
count__49305_49309 = G__49326;
i__49306_49310 = G__49327;
continue;
}
} else
{var k_49328 = cljs.core.first.call(null,seq__49303_49322__$1);var obj_49329 = (js_index[k_49328]);var geom_49330 = (obj_49329["geojson"]);var feature_49331 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_49329["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_49329["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_49329["compact_name"])], null)], null));var __49332__$1 = (feature_49331["geometry"] = geom_49330);var __49333__$2 = ((feature_49331["properties"])["index_object"] = obj_49329);features.push(feature_49331);
{
var G__49334 = cljs.core.next.call(null,seq__49303_49322__$1);
var G__49335 = null;
var G__49336 = (0);
var G__49337 = (0);
seq__49303_49307 = G__49334;
chunk__49304_49308 = G__49335;
count__49305_49309 = G__49336;
i__49306_49310 = G__49337;
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
return (function (state_49380){var state_val_49381 = (state_49380[(1)]);if((state_val_49381 === (5)))
{var inst_49378 = (state_49380[(2)]);var state_49380__$1 = state_49380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49380__$1,inst_49378);
} else
{if((state_val_49381 === (4)))
{var state_49380__$1 = state_49380;var statearr_49382_49394 = state_49380__$1;(statearr_49382_49394[(2)] = null);
(statearr_49382_49394[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49381 === (3)))
{var inst_49368 = (state_49380[(7)]);var inst_49375 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_49368);var state_49380__$1 = state_49380;var statearr_49383_49395 = state_49380__$1;(statearr_49383_49395[(2)] = inst_49375);
(statearr_49383_49395[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49381 === (2)))
{var inst_49368 = (state_49380[(7)]);var inst_49368__$1 = (state_49380[(2)]);var inst_49369 = (function (){var bl_coll_index = inst_49368__$1;return ((function (bl_coll_index,inst_49368,inst_49368__$1,state_val_49381,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_49368,inst_49368__$1,state_val_49381,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_49370 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_49369);var inst_49371 = cljs.core.deref.call(null,app_state);var inst_49372 = cljs.core.get_in.call(null,inst_49371,index_path);var inst_49373 = cljs.core._EQ_.call(null,inst_49372,inst_49368__$1);var state_49380__$1 = (function (){var statearr_49384 = state_49380;(statearr_49384[(8)] = inst_49370);
(statearr_49384[(7)] = inst_49368__$1);
return statearr_49384;
})();if(inst_49373)
{var statearr_49385_49396 = state_49380__$1;(statearr_49385_49396[(1)] = (3));
} else
{var statearr_49386_49397 = state_49380__$1;(statearr_49386_49397[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49381 === (1)))
{var inst_49366 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_49380__$1 = state_49380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49380__$1,(2),inst_49366);
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
var state_machine__5679__auto____0 = (function (){var statearr_49390 = [null,null,null,null,null,null,null,null,null];(statearr_49390[(0)] = state_machine__5679__auto__);
(statearr_49390[(1)] = (1));
return statearr_49390;
});
var state_machine__5679__auto____1 = (function (state_49380){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49380);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49391){if((e49391 instanceof Object))
{var ex__5682__auto__ = e49391;var statearr_49392_49398 = state_49380;(statearr_49392_49398[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49399 = state_49380;
state_49380 = G__49399;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49380){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5695__auto__ = (function (){var statearr_49393 = f__5694__auto__.call(null);(statearr_49393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_49393;
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