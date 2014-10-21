// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__28238){var vec__28239 = p__28238;var z = cljs.core.nth.call(null,vec__28239,(0),null);var t = cljs.core.nth.call(null,vec__28239,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__28244 = cljs.core.seq.call(null,boundarylines);var chunk__28245 = null;var count__28246 = (0);var i__28247 = (0);while(true){
if((i__28247 < count__28246))
{var bl = cljs.core._nth.call(null,chunk__28245,i__28247);var boundaryline_id_28248 = (bl["id"]);var tolerance_28249 = (bl["tolerance"]);var general_cache_path_28250 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_28248,tolerance_28249], null));var collection_cache_path_28251 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_28248,tolerance_28249], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_28250,((function (seq__28244,chunk__28245,count__28246,i__28247,boundaryline_id_28248,tolerance_28249,general_cache_path_28250,collection_cache_path_28251,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__28244,chunk__28245,count__28246,i__28247,boundaryline_id_28248,tolerance_28249,general_cache_path_28250,collection_cache_path_28251,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_28251))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_28251,((function (seq__28244,chunk__28245,count__28246,i__28247,boundaryline_id_28248,tolerance_28249,general_cache_path_28250,collection_cache_path_28251,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__28244,chunk__28245,count__28246,i__28247,boundaryline_id_28248,tolerance_28249,general_cache_path_28250,collection_cache_path_28251,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__28252 = seq__28244;
var G__28253 = chunk__28245;
var G__28254 = count__28246;
var G__28255 = (i__28247 + (1));
seq__28244 = G__28252;
chunk__28245 = G__28253;
count__28246 = G__28254;
i__28247 = G__28255;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28244);if(temp__4126__auto__)
{var seq__28244__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28244__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__28244__$1);{
var G__28256 = cljs.core.chunk_rest.call(null,seq__28244__$1);
var G__28257 = c__4314__auto__;
var G__28258 = cljs.core.count.call(null,c__4314__auto__);
var G__28259 = (0);
seq__28244 = G__28256;
chunk__28245 = G__28257;
count__28246 = G__28258;
i__28247 = G__28259;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__28244__$1);var boundaryline_id_28260 = (bl["id"]);var tolerance_28261 = (bl["tolerance"]);var general_cache_path_28262 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_28260,tolerance_28261], null));var collection_cache_path_28263 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_28260,tolerance_28261], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_28262,((function (seq__28244,chunk__28245,count__28246,i__28247,boundaryline_id_28260,tolerance_28261,general_cache_path_28262,collection_cache_path_28263,bl,seq__28244__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__28244,chunk__28245,count__28246,i__28247,boundaryline_id_28260,tolerance_28261,general_cache_path_28262,collection_cache_path_28263,bl,seq__28244__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_28263))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_28263,((function (seq__28244,chunk__28245,count__28246,i__28247,boundaryline_id_28260,tolerance_28261,general_cache_path_28262,collection_cache_path_28263,bl,seq__28244__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__28244,chunk__28245,count__28246,i__28247,boundaryline_id_28260,tolerance_28261,general_cache_path_28262,collection_cache_path_28263,bl,seq__28244__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__28264 = cljs.core.next.call(null,seq__28244__$1);
var G__28265 = null;
var G__28266 = (0);
var G__28267 = (0);
seq__28244 = G__28264;
chunk__28245 = G__28265;
count__28246 = G__28266;
i__28247 = G__28267;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__28268){var map__28284 = p__28268;var map__28284__$1 = ((cljs.core.seq_QMARK_.call(null,map__28284))?cljs.core.apply.call(null,cljs.core.hash_map,map__28284):map__28284);var bounds = cljs.core.get.call(null,map__28284__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28284__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__28284,map__28284__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__28284,map__28284__$1,bounds,boundaryline_ids){
return (function (state_28289){var state_val_28290 = (state_28289[(1)]);if((state_val_28290 === (2)))
{var inst_28286 = (state_28289[(2)]);var inst_28287 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_28286);var state_28289__$1 = (function (){var statearr_28291 = state_28289;(statearr_28291[(7)] = inst_28287);
return statearr_28291;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28289__$1,true);
} else
{if((state_val_28290 === (1)))
{var state_28289__$1 = state_28289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28289__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__28284,map__28284__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__28284,map__28284__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_28295 = [null,null,null,null,null,null,null,null];(statearr_28295[(0)] = state_machine__5694__auto__);
(statearr_28295[(1)] = (1));
return statearr_28295;
});
var state_machine__5694__auto____1 = (function (state_28289){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28289);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28296){if((e28296 instanceof Object))
{var ex__5697__auto__ = e28296;var statearr_28297_28299 = state_28289;(statearr_28297_28299[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28296;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28300 = state_28289;
state_28289 = G__28300;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28289){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__28284,map__28284__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_28298 = f__5709__auto__.call(null);(statearr_28298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__28284,map__28284__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__28268 = null;if (arguments.length > 5) {
  p__28268 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__28268);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__28301){
var app_state = cljs.core.first(arglist__28301);
arglist__28301 = cljs.core.next(arglist__28301);
var boundarylines_path = cljs.core.first(arglist__28301);
arglist__28301 = cljs.core.next(arglist__28301);
var collection_boundarylines_path = cljs.core.first(arglist__28301);
arglist__28301 = cljs.core.next(arglist__28301);
var collection_id = cljs.core.first(arglist__28301);
arglist__28301 = cljs.core.next(arglist__28301);
var tolerance = cljs.core.first(arglist__28301);
var p__28268 = cljs.core.rest(arglist__28301);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__28268);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__28302){var map__28307 = p__28302;var map__28307__$1 = ((cljs.core.seq_QMARK_.call(null,map__28307))?cljs.core.apply.call(null,cljs.core.hash_map,map__28307):map__28307);var boundaryline_ids = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28307,map__28307__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28307,map__28307__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28307,map__28307__$1,boundaryline_ids){
return (function (p__28308){var vec__28309 = p__28308;var blid = cljs.core.nth.call(null,vec__28309,(0),null);var vec__28310 = cljs.core.nth.call(null,vec__28309,(1),null);var tol = cljs.core.nth.call(null,vec__28310,(0),null);var bl = cljs.core.nth.call(null,vec__28310,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28307,map__28307__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__28302 = null;if (arguments.length > 5) {
  p__28302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__28302);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__28311){
var app_state = cljs.core.first(arglist__28311);
arglist__28311 = cljs.core.next(arglist__28311);
var boundarylines_path = cljs.core.first(arglist__28311);
arglist__28311 = cljs.core.next(arglist__28311);
var collection_id = cljs.core.first(arglist__28311);
arglist__28311 = cljs.core.next(arglist__28311);
var bounds = cljs.core.first(arglist__28311);
arglist__28311 = cljs.core.next(arglist__28311);
var zoom = cljs.core.first(arglist__28311);
var p__28302 = cljs.core.rest(arglist__28311);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__28302);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__28316_28320 = cljs.core.seq.call(null,keys);var chunk__28317_28321 = null;var count__28318_28322 = (0);var i__28319_28323 = (0);while(true){
if((i__28319_28323 < count__28318_28322))
{var k_28324 = cljs.core._nth.call(null,chunk__28317_28321,i__28319_28323);var obj_28325 = (js_index[k_28324]);var geom_28326 = (obj_28325["geojson"]);var feature_28327 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28325["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28325["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28325["compact_name"])], null)], null));var __28328__$1 = (feature_28327["geometry"] = geom_28326);var __28329__$2 = ((feature_28327["properties"])["index_object"] = obj_28325);features.push(feature_28327);
{
var G__28330 = seq__28316_28320;
var G__28331 = chunk__28317_28321;
var G__28332 = count__28318_28322;
var G__28333 = (i__28319_28323 + (1));
seq__28316_28320 = G__28330;
chunk__28317_28321 = G__28331;
count__28318_28322 = G__28332;
i__28319_28323 = G__28333;
continue;
}
} else
{var temp__4126__auto___28334 = cljs.core.seq.call(null,seq__28316_28320);if(temp__4126__auto___28334)
{var seq__28316_28335__$1 = temp__4126__auto___28334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28316_28335__$1))
{var c__4314__auto___28336 = cljs.core.chunk_first.call(null,seq__28316_28335__$1);{
var G__28337 = cljs.core.chunk_rest.call(null,seq__28316_28335__$1);
var G__28338 = c__4314__auto___28336;
var G__28339 = cljs.core.count.call(null,c__4314__auto___28336);
var G__28340 = (0);
seq__28316_28320 = G__28337;
chunk__28317_28321 = G__28338;
count__28318_28322 = G__28339;
i__28319_28323 = G__28340;
continue;
}
} else
{var k_28341 = cljs.core.first.call(null,seq__28316_28335__$1);var obj_28342 = (js_index[k_28341]);var geom_28343 = (obj_28342["geojson"]);var feature_28344 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28342["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28342["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28342["compact_name"])], null)], null));var __28345__$1 = (feature_28344["geometry"] = geom_28343);var __28346__$2 = ((feature_28344["properties"])["index_object"] = obj_28342);features.push(feature_28344);
{
var G__28347 = cljs.core.next.call(null,seq__28316_28335__$1);
var G__28348 = null;
var G__28349 = (0);
var G__28350 = (0);
seq__28316_28320 = G__28347;
chunk__28317_28321 = G__28348;
count__28318_28322 = G__28349;
i__28319_28323 = G__28350;
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
return (function (state_28393){var state_val_28394 = (state_28393[(1)]);if((state_val_28394 === (5)))
{var inst_28391 = (state_28393[(2)]);var state_28393__$1 = state_28393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28393__$1,inst_28391);
} else
{if((state_val_28394 === (4)))
{var state_28393__$1 = state_28393;var statearr_28395_28407 = state_28393__$1;(statearr_28395_28407[(2)] = null);
(statearr_28395_28407[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28394 === (3)))
{var inst_28381 = (state_28393[(7)]);var inst_28388 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_28381);var state_28393__$1 = state_28393;var statearr_28396_28408 = state_28393__$1;(statearr_28396_28408[(2)] = inst_28388);
(statearr_28396_28408[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28394 === (2)))
{var inst_28381 = (state_28393[(7)]);var inst_28381__$1 = (state_28393[(2)]);var inst_28382 = (function (){var bl_coll_index = inst_28381__$1;return ((function (bl_coll_index,inst_28381,inst_28381__$1,state_val_28394,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_28381,inst_28381__$1,state_val_28394,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_28383 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_28382);var inst_28384 = cljs.core.deref.call(null,app_state);var inst_28385 = cljs.core.get_in.call(null,inst_28384,index_path);var inst_28386 = cljs.core._EQ_.call(null,inst_28385,inst_28381__$1);var state_28393__$1 = (function (){var statearr_28397 = state_28393;(statearr_28397[(7)] = inst_28381__$1);
(statearr_28397[(8)] = inst_28383);
return statearr_28397;
})();if(inst_28386)
{var statearr_28398_28409 = state_28393__$1;(statearr_28398_28409[(1)] = (3));
} else
{var statearr_28399_28410 = state_28393__$1;(statearr_28399_28410[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28394 === (1)))
{var inst_28379 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_28393__$1 = state_28393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28393__$1,(2),inst_28379);
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
var state_machine__5694__auto____0 = (function (){var statearr_28403 = [null,null,null,null,null,null,null,null,null];(statearr_28403[(0)] = state_machine__5694__auto__);
(statearr_28403[(1)] = (1));
return statearr_28403;
});
var state_machine__5694__auto____1 = (function (state_28393){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28393);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e28404){if((e28404 instanceof Object))
{var ex__5697__auto__ = e28404;var statearr_28405_28411 = state_28393;(statearr_28405_28411[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28404;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28412 = state_28393;
state_28393 = G__28412;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28393){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_28406 = f__5709__auto__.call(null);(statearr_28406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_28406;
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
