// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__26176){var vec__26177 = p__26176;var z = cljs.core.nth.call(null,vec__26177,(0),null);var t = cljs.core.nth.call(null,vec__26177,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__26182 = cljs.core.seq.call(null,boundarylines);var chunk__26183 = null;var count__26184 = (0);var i__26185 = (0);while(true){
if((i__26185 < count__26184))
{var bl = cljs.core._nth.call(null,chunk__26183,i__26185);var boundaryline_id_26186 = (bl["id"]);var tolerance_26187 = (bl["tolerance"]);var general_cache_path_26188 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_26186,tolerance_26187], null));var collection_cache_path_26189 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_26186,tolerance_26187], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_26188,((function (seq__26182,chunk__26183,count__26184,i__26185,boundaryline_id_26186,tolerance_26187,general_cache_path_26188,collection_cache_path_26189,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__26182,chunk__26183,count__26184,i__26185,boundaryline_id_26186,tolerance_26187,general_cache_path_26188,collection_cache_path_26189,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_26189))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_26189,((function (seq__26182,chunk__26183,count__26184,i__26185,boundaryline_id_26186,tolerance_26187,general_cache_path_26188,collection_cache_path_26189,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__26182,chunk__26183,count__26184,i__26185,boundaryline_id_26186,tolerance_26187,general_cache_path_26188,collection_cache_path_26189,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__26190 = seq__26182;
var G__26191 = chunk__26183;
var G__26192 = count__26184;
var G__26193 = (i__26185 + (1));
seq__26182 = G__26190;
chunk__26183 = G__26191;
count__26184 = G__26192;
i__26185 = G__26193;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26182);if(temp__4126__auto__)
{var seq__26182__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26182__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__26182__$1);{
var G__26194 = cljs.core.chunk_rest.call(null,seq__26182__$1);
var G__26195 = c__4314__auto__;
var G__26196 = cljs.core.count.call(null,c__4314__auto__);
var G__26197 = (0);
seq__26182 = G__26194;
chunk__26183 = G__26195;
count__26184 = G__26196;
i__26185 = G__26197;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__26182__$1);var boundaryline_id_26198 = (bl["id"]);var tolerance_26199 = (bl["tolerance"]);var general_cache_path_26200 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_26198,tolerance_26199], null));var collection_cache_path_26201 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_26198,tolerance_26199], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_26200,((function (seq__26182,chunk__26183,count__26184,i__26185,boundaryline_id_26198,tolerance_26199,general_cache_path_26200,collection_cache_path_26201,bl,seq__26182__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__26182,chunk__26183,count__26184,i__26185,boundaryline_id_26198,tolerance_26199,general_cache_path_26200,collection_cache_path_26201,bl,seq__26182__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_26201))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_26201,((function (seq__26182,chunk__26183,count__26184,i__26185,boundaryline_id_26198,tolerance_26199,general_cache_path_26200,collection_cache_path_26201,bl,seq__26182__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__26182,chunk__26183,count__26184,i__26185,boundaryline_id_26198,tolerance_26199,general_cache_path_26200,collection_cache_path_26201,bl,seq__26182__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__26202 = cljs.core.next.call(null,seq__26182__$1);
var G__26203 = null;
var G__26204 = (0);
var G__26205 = (0);
seq__26182 = G__26202;
chunk__26183 = G__26203;
count__26184 = G__26204;
i__26185 = G__26205;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__26206){var map__26222 = p__26206;var map__26222__$1 = ((cljs.core.seq_QMARK_.call(null,map__26222))?cljs.core.apply.call(null,cljs.core.hash_map,map__26222):map__26222);var bounds = cljs.core.get.call(null,map__26222__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__26222__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__26222,map__26222__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__26222,map__26222__$1,bounds,boundaryline_ids){
return (function (state_26227){var state_val_26228 = (state_26227[(1)]);if((state_val_26228 === (2)))
{var inst_26224 = (state_26227[(2)]);var inst_26225 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_26224);var state_26227__$1 = (function (){var statearr_26229 = state_26227;(statearr_26229[(7)] = inst_26225);
return statearr_26229;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26227__$1,true);
} else
{if((state_val_26228 === (1)))
{var state_26227__$1 = state_26227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__26222,map__26222__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__26222,map__26222__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_26233 = [null,null,null,null,null,null,null,null];(statearr_26233[(0)] = state_machine__5694__auto__);
(statearr_26233[(1)] = (1));
return statearr_26233;
});
var state_machine__5694__auto____1 = (function (state_26227){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26227);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26234){if((e26234 instanceof Object))
{var ex__5697__auto__ = e26234;var statearr_26235_26237 = state_26227;(statearr_26235_26237[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26227);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26234;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26238 = state_26227;
state_26227 = G__26238;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26227){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__26222,map__26222__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_26236 = f__5709__auto__.call(null);(statearr_26236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_26236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__26222,map__26222__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__26206 = null;if (arguments.length > 5) {
  p__26206 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__26206);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__26239){
var app_state = cljs.core.first(arglist__26239);
arglist__26239 = cljs.core.next(arglist__26239);
var boundarylines_path = cljs.core.first(arglist__26239);
arglist__26239 = cljs.core.next(arglist__26239);
var collection_boundarylines_path = cljs.core.first(arglist__26239);
arglist__26239 = cljs.core.next(arglist__26239);
var collection_id = cljs.core.first(arglist__26239);
arglist__26239 = cljs.core.next(arglist__26239);
var tolerance = cljs.core.first(arglist__26239);
var p__26206 = cljs.core.rest(arglist__26239);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__26206);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__26240){var map__26245 = p__26240;var map__26245__$1 = ((cljs.core.seq_QMARK_.call(null,map__26245))?cljs.core.apply.call(null,cljs.core.hash_map,map__26245):map__26245);var boundaryline_ids = cljs.core.get.call(null,map__26245__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__26245,map__26245__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__26245,map__26245__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__26245,map__26245__$1,boundaryline_ids){
return (function (p__26246){var vec__26247 = p__26246;var blid = cljs.core.nth.call(null,vec__26247,(0),null);var vec__26248 = cljs.core.nth.call(null,vec__26247,(1),null);var tol = cljs.core.nth.call(null,vec__26248,(0),null);var bl = cljs.core.nth.call(null,vec__26248,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__26245,map__26245__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__26240 = null;if (arguments.length > 5) {
  p__26240 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__26240);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__26249){
var app_state = cljs.core.first(arglist__26249);
arglist__26249 = cljs.core.next(arglist__26249);
var boundarylines_path = cljs.core.first(arglist__26249);
arglist__26249 = cljs.core.next(arglist__26249);
var collection_id = cljs.core.first(arglist__26249);
arglist__26249 = cljs.core.next(arglist__26249);
var bounds = cljs.core.first(arglist__26249);
arglist__26249 = cljs.core.next(arglist__26249);
var zoom = cljs.core.first(arglist__26249);
var p__26240 = cljs.core.rest(arglist__26249);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__26240);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__26254_26258 = cljs.core.seq.call(null,keys);var chunk__26255_26259 = null;var count__26256_26260 = (0);var i__26257_26261 = (0);while(true){
if((i__26257_26261 < count__26256_26260))
{var k_26262 = cljs.core._nth.call(null,chunk__26255_26259,i__26257_26261);var obj_26263 = (js_index[k_26262]);var geom_26264 = (obj_26263["geojson"]);var feature_26265 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_26263["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_26263["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_26263["compact_name"])], null)], null));var __26266__$1 = (feature_26265["geometry"] = geom_26264);var __26267__$2 = ((feature_26265["properties"])["index_object"] = obj_26263);features.push(feature_26265);
{
var G__26268 = seq__26254_26258;
var G__26269 = chunk__26255_26259;
var G__26270 = count__26256_26260;
var G__26271 = (i__26257_26261 + (1));
seq__26254_26258 = G__26268;
chunk__26255_26259 = G__26269;
count__26256_26260 = G__26270;
i__26257_26261 = G__26271;
continue;
}
} else
{var temp__4126__auto___26272 = cljs.core.seq.call(null,seq__26254_26258);if(temp__4126__auto___26272)
{var seq__26254_26273__$1 = temp__4126__auto___26272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26254_26273__$1))
{var c__4314__auto___26274 = cljs.core.chunk_first.call(null,seq__26254_26273__$1);{
var G__26275 = cljs.core.chunk_rest.call(null,seq__26254_26273__$1);
var G__26276 = c__4314__auto___26274;
var G__26277 = cljs.core.count.call(null,c__4314__auto___26274);
var G__26278 = (0);
seq__26254_26258 = G__26275;
chunk__26255_26259 = G__26276;
count__26256_26260 = G__26277;
i__26257_26261 = G__26278;
continue;
}
} else
{var k_26279 = cljs.core.first.call(null,seq__26254_26273__$1);var obj_26280 = (js_index[k_26279]);var geom_26281 = (obj_26280["geojson"]);var feature_26282 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_26280["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_26280["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_26280["compact_name"])], null)], null));var __26283__$1 = (feature_26282["geometry"] = geom_26281);var __26284__$2 = ((feature_26282["properties"])["index_object"] = obj_26280);features.push(feature_26282);
{
var G__26285 = cljs.core.next.call(null,seq__26254_26273__$1);
var G__26286 = null;
var G__26287 = (0);
var G__26288 = (0);
seq__26254_26258 = G__26285;
chunk__26255_26259 = G__26286;
count__26256_26260 = G__26287;
i__26257_26261 = G__26288;
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
return (function (state_26331){var state_val_26332 = (state_26331[(1)]);if((state_val_26332 === (5)))
{var inst_26329 = (state_26331[(2)]);var state_26331__$1 = state_26331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26331__$1,inst_26329);
} else
{if((state_val_26332 === (4)))
{var state_26331__$1 = state_26331;var statearr_26333_26345 = state_26331__$1;(statearr_26333_26345[(2)] = null);
(statearr_26333_26345[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (3)))
{var inst_26319 = (state_26331[(7)]);var inst_26326 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_26319);var state_26331__$1 = state_26331;var statearr_26334_26346 = state_26331__$1;(statearr_26334_26346[(2)] = inst_26326);
(statearr_26334_26346[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (2)))
{var inst_26319 = (state_26331[(7)]);var inst_26319__$1 = (state_26331[(2)]);var inst_26320 = (function (){var bl_coll_index = inst_26319__$1;return ((function (bl_coll_index,inst_26319,inst_26319__$1,state_val_26332,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_26319,inst_26319__$1,state_val_26332,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_26321 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_26320);var inst_26322 = cljs.core.deref.call(null,app_state);var inst_26323 = cljs.core.get_in.call(null,inst_26322,index_path);var inst_26324 = cljs.core._EQ_.call(null,inst_26323,inst_26319__$1);var state_26331__$1 = (function (){var statearr_26335 = state_26331;(statearr_26335[(7)] = inst_26319__$1);
(statearr_26335[(8)] = inst_26321);
return statearr_26335;
})();if(inst_26324)
{var statearr_26336_26347 = state_26331__$1;(statearr_26336_26347[(1)] = (3));
} else
{var statearr_26337_26348 = state_26331__$1;(statearr_26337_26348[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26332 === (1)))
{var inst_26317 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_26331__$1 = state_26331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26331__$1,(2),inst_26317);
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
var state_machine__5694__auto____0 = (function (){var statearr_26341 = [null,null,null,null,null,null,null,null,null];(statearr_26341[(0)] = state_machine__5694__auto__);
(statearr_26341[(1)] = (1));
return statearr_26341;
});
var state_machine__5694__auto____1 = (function (state_26331){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_26331);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e26342){if((e26342 instanceof Object))
{var ex__5697__auto__ = e26342;var statearr_26343_26349 = state_26331;(statearr_26343_26349[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26331);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26342;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26350 = state_26331;
state_26331 = G__26350;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_26331){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_26331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_26344 = f__5709__auto__.call(null);(statearr_26344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_26344;
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
