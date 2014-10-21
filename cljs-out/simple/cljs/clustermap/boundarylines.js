// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3637__auto__ = cljs.core.some.call(null,(function (p__31207){var vec__31208 = p__31207;var z = cljs.core.nth.call(null,vec__31208,(0),null);var t = cljs.core.nth.call(null,vec__31208,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = z;if(cljs.core.truth_(and__3625__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__31213 = cljs.core.seq.call(null,boundarylines);var chunk__31214 = null;var count__31215 = (0);var i__31216 = (0);while(true){
if((i__31216 < count__31215))
{var bl = cljs.core._nth.call(null,chunk__31214,i__31216);var boundaryline_id_31217 = (bl["id"]);var tolerance_31218 = (bl["tolerance"]);var general_cache_path_31219 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_31217,tolerance_31218], null));var collection_cache_path_31220 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_31217,tolerance_31218], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_31219,((function (seq__31213,chunk__31214,count__31215,i__31216,boundaryline_id_31217,tolerance_31218,general_cache_path_31219,collection_cache_path_31220,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__31213,chunk__31214,count__31215,i__31216,boundaryline_id_31217,tolerance_31218,general_cache_path_31219,collection_cache_path_31220,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_31220))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_31220,((function (seq__31213,chunk__31214,count__31215,i__31216,boundaryline_id_31217,tolerance_31218,general_cache_path_31219,collection_cache_path_31220,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__31213,chunk__31214,count__31215,i__31216,boundaryline_id_31217,tolerance_31218,general_cache_path_31219,collection_cache_path_31220,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__31221 = seq__31213;
var G__31222 = chunk__31214;
var G__31223 = count__31215;
var G__31224 = (i__31216 + (1));
seq__31213 = G__31221;
chunk__31214 = G__31222;
count__31215 = G__31223;
i__31216 = G__31224;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31213);if(temp__4126__auto__)
{var seq__31213__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31213__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__31213__$1);{
var G__31225 = cljs.core.chunk_rest.call(null,seq__31213__$1);
var G__31226 = c__4406__auto__;
var G__31227 = cljs.core.count.call(null,c__4406__auto__);
var G__31228 = (0);
seq__31213 = G__31225;
chunk__31214 = G__31226;
count__31215 = G__31227;
i__31216 = G__31228;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__31213__$1);var boundaryline_id_31229 = (bl["id"]);var tolerance_31230 = (bl["tolerance"]);var general_cache_path_31231 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_31229,tolerance_31230], null));var collection_cache_path_31232 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_31229,tolerance_31230], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_31231,((function (seq__31213,chunk__31214,count__31215,i__31216,boundaryline_id_31229,tolerance_31230,general_cache_path_31231,collection_cache_path_31232,bl,seq__31213__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__31213,chunk__31214,count__31215,i__31216,boundaryline_id_31229,tolerance_31230,general_cache_path_31231,collection_cache_path_31232,bl,seq__31213__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_31232))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_31232,((function (seq__31213,chunk__31214,count__31215,i__31216,boundaryline_id_31229,tolerance_31230,general_cache_path_31231,collection_cache_path_31232,bl,seq__31213__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__31213,chunk__31214,count__31215,i__31216,boundaryline_id_31229,tolerance_31230,general_cache_path_31231,collection_cache_path_31232,bl,seq__31213__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__31233 = cljs.core.next.call(null,seq__31213__$1);
var G__31234 = null;
var G__31235 = (0);
var G__31236 = (0);
seq__31213 = G__31233;
chunk__31214 = G__31234;
count__31215 = G__31235;
i__31216 = G__31236;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__31237){var map__31253 = p__31237;var map__31253__$1 = ((cljs.core.seq_QMARK_.call(null,map__31253))?cljs.core.apply.call(null,cljs.core.hash_map,map__31253):map__31253);var bounds = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,comm,map__31253,map__31253__$1,bounds,boundaryline_ids){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,comm,map__31253,map__31253__$1,bounds,boundaryline_ids){
return (function (state_31258){var state_val_31259 = (state_31258[(1)]);if((state_val_31259 === (2)))
{var inst_31255 = (state_31258[(2)]);var inst_31256 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_31255);var state_31258__$1 = (function (){var statearr_31260 = state_31258;(statearr_31260[(7)] = inst_31256);
return statearr_31260;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31258__$1,true);
} else
{if((state_val_31259 === (1)))
{var state_31258__$1 = state_31258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31258__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto__,comm,map__31253,map__31253__$1,bounds,boundaryline_ids))
;return ((function (switch__5804__auto__,c__5819__auto__,comm,map__31253,map__31253__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_31264 = [null,null,null,null,null,null,null,null];(statearr_31264[(0)] = state_machine__5805__auto__);
(statearr_31264[(1)] = (1));
return statearr_31264;
});
var state_machine__5805__auto____1 = (function (state_31258){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_31258);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e31265){if((e31265 instanceof Object))
{var ex__5808__auto__ = e31265;var statearr_31266_31268 = state_31258;(statearr_31266_31268[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31265;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31269 = state_31258;
state_31258 = G__31269;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_31258){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_31258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,comm,map__31253,map__31253__$1,bounds,boundaryline_ids))
})();var state__5821__auto__ = (function (){var statearr_31267 = f__5820__auto__.call(null);(statearr_31267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_31267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,comm,map__31253,map__31253__$1,bounds,boundaryline_ids))
);
return c__5819__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__31237 = null;if (arguments.length > 5) {
  p__31237 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__31237);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__31270){
var app_state = cljs.core.first(arglist__31270);
arglist__31270 = cljs.core.next(arglist__31270);
var boundarylines_path = cljs.core.first(arglist__31270);
arglist__31270 = cljs.core.next(arglist__31270);
var collection_boundarylines_path = cljs.core.first(arglist__31270);
arglist__31270 = cljs.core.next(arglist__31270);
var collection_id = cljs.core.first(arglist__31270);
arglist__31270 = cljs.core.next(arglist__31270);
var tolerance = cljs.core.first(arglist__31270);
var p__31237 = cljs.core.rest(arglist__31270);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__31237);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__31271){var map__31276 = p__31271;var map__31276__$1 = ((cljs.core.seq_QMARK_.call(null,map__31276))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);var boundaryline_ids = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__31276,map__31276__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__31276,map__31276__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__31276,map__31276__$1,boundaryline_ids){
return (function (p__31277){var vec__31278 = p__31277;var blid = cljs.core.nth.call(null,vec__31278,(0),null);var vec__31279 = cljs.core.nth.call(null,vec__31278,(1),null);var tol = cljs.core.nth.call(null,vec__31279,(0),null);var bl = cljs.core.nth.call(null,vec__31279,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__31276,map__31276__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__31271 = null;if (arguments.length > 5) {
  p__31271 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__31271);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__31280){
var app_state = cljs.core.first(arglist__31280);
arglist__31280 = cljs.core.next(arglist__31280);
var boundarylines_path = cljs.core.first(arglist__31280);
arglist__31280 = cljs.core.next(arglist__31280);
var collection_id = cljs.core.first(arglist__31280);
arglist__31280 = cljs.core.next(arglist__31280);
var bounds = cljs.core.first(arglist__31280);
arglist__31280 = cljs.core.next(arglist__31280);
var zoom = cljs.core.first(arglist__31280);
var p__31271 = cljs.core.rest(arglist__31280);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__31271);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__31285_31289 = cljs.core.seq.call(null,keys);var chunk__31286_31290 = null;var count__31287_31291 = (0);var i__31288_31292 = (0);while(true){
if((i__31288_31292 < count__31287_31291))
{var k_31293 = cljs.core._nth.call(null,chunk__31286_31290,i__31288_31292);var obj_31294 = (js_index[k_31293]);var geom_31295 = (obj_31294["geojson"]);var feature_31296 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_31294["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_31294["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_31294["compact_name"])], null)], null));var __31297__$1 = (feature_31296["geometry"] = geom_31295);var __31298__$2 = ((feature_31296["properties"])["index_object"] = obj_31294);features.push(feature_31296);
{
var G__31299 = seq__31285_31289;
var G__31300 = chunk__31286_31290;
var G__31301 = count__31287_31291;
var G__31302 = (i__31288_31292 + (1));
seq__31285_31289 = G__31299;
chunk__31286_31290 = G__31300;
count__31287_31291 = G__31301;
i__31288_31292 = G__31302;
continue;
}
} else
{var temp__4126__auto___31303 = cljs.core.seq.call(null,seq__31285_31289);if(temp__4126__auto___31303)
{var seq__31285_31304__$1 = temp__4126__auto___31303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31285_31304__$1))
{var c__4406__auto___31305 = cljs.core.chunk_first.call(null,seq__31285_31304__$1);{
var G__31306 = cljs.core.chunk_rest.call(null,seq__31285_31304__$1);
var G__31307 = c__4406__auto___31305;
var G__31308 = cljs.core.count.call(null,c__4406__auto___31305);
var G__31309 = (0);
seq__31285_31289 = G__31306;
chunk__31286_31290 = G__31307;
count__31287_31291 = G__31308;
i__31288_31292 = G__31309;
continue;
}
} else
{var k_31310 = cljs.core.first.call(null,seq__31285_31304__$1);var obj_31311 = (js_index[k_31310]);var geom_31312 = (obj_31311["geojson"]);var feature_31313 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_31311["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_31311["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_31311["compact_name"])], null)], null));var __31314__$1 = (feature_31313["geometry"] = geom_31312);var __31315__$2 = ((feature_31313["properties"])["index_object"] = obj_31311);features.push(feature_31313);
{
var G__31316 = cljs.core.next.call(null,seq__31285_31304__$1);
var G__31317 = null;
var G__31318 = (0);
var G__31319 = (0);
seq__31285_31289 = G__31316;
chunk__31286_31290 = G__31317;
count__31287_31291 = G__31318;
i__31288_31292 = G__31319;
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
return (function (state_31362){var state_val_31363 = (state_31362[(1)]);if((state_val_31363 === (5)))
{var inst_31360 = (state_31362[(2)]);var state_31362__$1 = state_31362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31362__$1,inst_31360);
} else
{if((state_val_31363 === (4)))
{var state_31362__$1 = state_31362;var statearr_31364_31376 = state_31362__$1;(statearr_31364_31376[(2)] = null);
(statearr_31364_31376[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31363 === (3)))
{var inst_31350 = (state_31362[(7)]);var inst_31357 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_31350);var state_31362__$1 = state_31362;var statearr_31365_31377 = state_31362__$1;(statearr_31365_31377[(2)] = inst_31357);
(statearr_31365_31377[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31363 === (2)))
{var inst_31350 = (state_31362[(7)]);var inst_31350__$1 = (state_31362[(2)]);var inst_31351 = (function (){var bl_coll_index = inst_31350__$1;return ((function (bl_coll_index,inst_31350,inst_31350__$1,state_val_31363,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_31350,inst_31350__$1,state_val_31363,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_31352 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_31351);var inst_31353 = cljs.core.deref.call(null,app_state);var inst_31354 = cljs.core.get_in.call(null,inst_31353,index_path);var inst_31355 = cljs.core._EQ_.call(null,inst_31354,inst_31350__$1);var state_31362__$1 = (function (){var statearr_31366 = state_31362;(statearr_31366[(8)] = inst_31352);
(statearr_31366[(7)] = inst_31350__$1);
return statearr_31366;
})();if(inst_31355)
{var statearr_31367_31378 = state_31362__$1;(statearr_31367_31378[(1)] = (3));
} else
{var statearr_31368_31379 = state_31362__$1;(statearr_31368_31379[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31363 === (1)))
{var inst_31348 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_31362__$1 = state_31362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31362__$1,(2),inst_31348);
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
var state_machine__5805__auto____0 = (function (){var statearr_31372 = [null,null,null,null,null,null,null,null,null];(statearr_31372[(0)] = state_machine__5805__auto__);
(statearr_31372[(1)] = (1));
return statearr_31372;
});
var state_machine__5805__auto____1 = (function (state_31362){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_31362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e31373){if((e31373 instanceof Object))
{var ex__5808__auto__ = e31373;var statearr_31374_31380 = state_31362;(statearr_31374_31380[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31373;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31381 = state_31362;
state_31362 = G__31381;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_31362){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_31362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5821__auto__ = (function (){var statearr_31375 = f__5820__auto__.call(null);(statearr_31375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_31375;
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
