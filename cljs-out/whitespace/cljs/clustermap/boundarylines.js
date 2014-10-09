// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some.call(null,(function (p__16282){var vec__16283 = p__16282;var z = cljs.core.nth.call(null,vec__16283,(0),null);var t = cljs.core.nth.call(null,vec__16283,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,collection_boundarylines_path);var seq__16288 = cljs.core.seq.call(null,boundarylines);var chunk__16289 = null;var count__16290 = (0);var i__16291 = (0);while(true){
if((i__16291 < count__16290))
{var bl = cljs.core._nth.call(null,chunk__16289,i__16291);var boundaryline_id_16292 = (bl["id"]);var tolerance_16293 = (bl["tolerance"]);var general_cache_path_16294 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_16292,tolerance_16293], null));var collection_cache_path_16295 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_16292,tolerance_16293], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_16294,((function (seq__16288,chunk__16289,count__16290,i__16291,boundaryline_id_16292,tolerance_16293,general_cache_path_16294,collection_cache_path_16295,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__16288,chunk__16289,count__16290,i__16291,boundaryline_id_16292,tolerance_16293,general_cache_path_16294,collection_cache_path_16295,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_16295))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_16295,((function (seq__16288,chunk__16289,count__16290,i__16291,boundaryline_id_16292,tolerance_16293,general_cache_path_16294,collection_cache_path_16295,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__16288,chunk__16289,count__16290,i__16291,boundaryline_id_16292,tolerance_16293,general_cache_path_16294,collection_cache_path_16295,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__16296 = seq__16288;
var G__16297 = chunk__16289;
var G__16298 = count__16290;
var G__16299 = (i__16291 + (1));
seq__16288 = G__16296;
chunk__16289 = G__16297;
count__16290 = G__16298;
i__16291 = G__16299;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16288);if(temp__4126__auto__)
{var seq__16288__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16288__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__16288__$1);{
var G__16300 = cljs.core.chunk_rest.call(null,seq__16288__$1);
var G__16301 = c__4314__auto__;
var G__16302 = cljs.core.count.call(null,c__4314__auto__);
var G__16303 = (0);
seq__16288 = G__16300;
chunk__16289 = G__16301;
count__16290 = G__16302;
i__16291 = G__16303;
continue;
}
} else
{var bl = cljs.core.first.call(null,seq__16288__$1);var boundaryline_id_16304 = (bl["id"]);var tolerance_16305 = (bl["tolerance"]);var general_cache_path_16306 = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_16304,tolerance_16305], null));var collection_cache_path_16307 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.call(null,collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_16304,tolerance_16305], null)):null);cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,general_cache_path_16306,((function (seq__16288,chunk__16289,count__16290,i__16291,boundaryline_id_16304,tolerance_16305,general_cache_path_16306,collection_cache_path_16307,bl,seq__16288__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__16288,chunk__16289,count__16290,i__16291,boundaryline_id_16304,tolerance_16305,general_cache_path_16306,collection_cache_path_16307,bl,seq__16288__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_16307))
{cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,collection_cache_path_16307,((function (seq__16288,chunk__16289,count__16290,i__16291,boundaryline_id_16304,tolerance_16305,general_cache_path_16306,collection_cache_path_16307,bl,seq__16288__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__16288,chunk__16289,count__16290,i__16291,boundaryline_id_16304,tolerance_16305,general_cache_path_16306,collection_cache_path_16307,bl,seq__16288__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__16308 = cljs.core.next.call(null,seq__16288__$1);
var G__16309 = null;
var G__16310 = (0);
var G__16311 = (0);
seq__16288 = G__16308;
chunk__16289 = G__16309;
count__16290 = G__16310;
i__16291 = G__16311;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__16312){var map__16328 = p__16312;var map__16328__$1 = ((cljs.core.seq_QMARK_.call(null,map__16328))?cljs.core.apply.call(null,cljs.core.hash_map,map__16328):map__16328);var bounds = cljs.core.get.call(null,map__16328__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__16328__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,comm,map__16328,map__16328__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__16328,map__16328__$1,bounds,boundaryline_ids){
return (function (state_16333){var state_val_16334 = (state_16333[(1)]);if((state_val_16334 === (2)))
{var inst_16330 = (state_16333[(2)]);var inst_16331 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,collection_boundarylines_path,inst_16330);var state_16333__$1 = (function (){var statearr_16335 = state_16333;(statearr_16335[(7)] = inst_16331);
return statearr_16335;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16333__$1,true);
} else
{if((state_val_16334 === (1)))
{var state_16333__$1 = state_16333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16333__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__16328,map__16328__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__16328,map__16328__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16339 = [null,null,null,null,null,null,null,null];(statearr_16339[(0)] = state_machine__5694__auto__);
(statearr_16339[(1)] = (1));
return statearr_16339;
});
var state_machine__5694__auto____1 = (function (state_16333){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16333);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16340){if((e16340 instanceof Object))
{var ex__5697__auto__ = e16340;var statearr_16341_16343 = state_16333;(statearr_16341_16343[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16333);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16340;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16344 = state_16333;
state_16333 = G__16344;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16333){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__16328,map__16328__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_16342 = f__5709__auto__.call(null);(statearr_16342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,comm,map__16328,map__16328__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__16312 = null;if (arguments.length > 5) {
  p__16312 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__16312);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__16345){
var app_state = cljs.core.first(arglist__16345);
arglist__16345 = cljs.core.next(arglist__16345);
var boundarylines_path = cljs.core.first(arglist__16345);
arglist__16345 = cljs.core.next(arglist__16345);
var collection_boundarylines_path = cljs.core.first(arglist__16345);
arglist__16345 = cljs.core.next(arglist__16345);
var collection_id = cljs.core.first(arglist__16345);
arglist__16345 = cljs.core.next(arglist__16345);
var tolerance = cljs.core.first(arglist__16345);
var p__16312 = cljs.core.rest(arglist__16345);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__16312);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__16346){var map__16351 = p__16346;var map__16351__$1 = ((cljs.core.seq_QMARK_.call(null,map__16351))?cljs.core.apply.call(null,cljs.core.hash_map,map__16351):map__16351);var boundaryline_ids = cljs.core.get.call(null,map__16351__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__16351,map__16351__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__16351,map__16351__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__16351,map__16351__$1,boundaryline_ids){
return (function (p__16352){var vec__16353 = p__16352;var blid = cljs.core.nth.call(null,vec__16353,(0),null);var vec__16354 = cljs.core.nth.call(null,vec__16353,(1),null);var tol = cljs.core.nth.call(null,vec__16354,(0),null);var bl = cljs.core.nth.call(null,vec__16354,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__16351,map__16351__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,general_cache_path,collection_cache_path,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__16346 = null;if (arguments.length > 5) {
  p__16346 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__16346);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__16355){
var app_state = cljs.core.first(arglist__16355);
arglist__16355 = cljs.core.next(arglist__16355);
var boundarylines_path = cljs.core.first(arglist__16355);
arglist__16355 = cljs.core.next(arglist__16355);
var collection_id = cljs.core.first(arglist__16355);
arglist__16355 = cljs.core.next(arglist__16355);
var bounds = cljs.core.first(arglist__16355);
arglist__16355 = cljs.core.next(arglist__16355);
var zoom = cljs.core.first(arglist__16355);
var p__16346 = cljs.core.rest(arglist__16355);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__16346);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__16360_16364 = cljs.core.seq.call(null,keys);var chunk__16361_16365 = null;var count__16362_16366 = (0);var i__16363_16367 = (0);while(true){
if((i__16363_16367 < count__16362_16366))
{var k_16368 = cljs.core._nth.call(null,chunk__16361_16365,i__16363_16367);var obj_16369 = (js_index[k_16368]);var geom_16370 = (obj_16369["geojson"]);var feature_16371 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_16369["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_16369["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_16369["compact_name"])], null)], null));var __16372__$1 = (feature_16371["geometry"] = geom_16370);var __16373__$2 = ((feature_16371["properties"])["index_object"] = obj_16369);features.push(feature_16371);
{
var G__16374 = seq__16360_16364;
var G__16375 = chunk__16361_16365;
var G__16376 = count__16362_16366;
var G__16377 = (i__16363_16367 + (1));
seq__16360_16364 = G__16374;
chunk__16361_16365 = G__16375;
count__16362_16366 = G__16376;
i__16363_16367 = G__16377;
continue;
}
} else
{var temp__4126__auto___16378 = cljs.core.seq.call(null,seq__16360_16364);if(temp__4126__auto___16378)
{var seq__16360_16379__$1 = temp__4126__auto___16378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16360_16379__$1))
{var c__4314__auto___16380 = cljs.core.chunk_first.call(null,seq__16360_16379__$1);{
var G__16381 = cljs.core.chunk_rest.call(null,seq__16360_16379__$1);
var G__16382 = c__4314__auto___16380;
var G__16383 = cljs.core.count.call(null,c__4314__auto___16380);
var G__16384 = (0);
seq__16360_16364 = G__16381;
chunk__16361_16365 = G__16382;
count__16362_16366 = G__16383;
i__16363_16367 = G__16384;
continue;
}
} else
{var k_16385 = cljs.core.first.call(null,seq__16360_16379__$1);var obj_16386 = (js_index[k_16385]);var geom_16387 = (obj_16386["geojson"]);var feature_16388 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_16386["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_16386["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_16386["compact_name"])], null)], null));var __16389__$1 = (feature_16388["geometry"] = geom_16387);var __16390__$2 = ((feature_16388["properties"])["index_object"] = obj_16386);features.push(feature_16388);
{
var G__16391 = cljs.core.next.call(null,seq__16360_16379__$1);
var G__16392 = null;
var G__16393 = (0);
var G__16394 = (0);
seq__16360_16364 = G__16391;
chunk__16361_16365 = G__16392;
count__16362_16366 = G__16393;
i__16363_16367 = G__16394;
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
return (function (state_16437){var state_val_16438 = (state_16437[(1)]);if((state_val_16438 === (5)))
{var inst_16435 = (state_16437[(2)]);var state_16437__$1 = state_16437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16437__$1,inst_16435);
} else
{if((state_val_16438 === (4)))
{var state_16437__$1 = state_16437;var statearr_16439_16451 = state_16437__$1;(statearr_16439_16451[(2)] = null);
(statearr_16439_16451[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16438 === (3)))
{var inst_16425 = (state_16437[(7)]);var inst_16432 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_16425);var state_16437__$1 = state_16437;var statearr_16440_16452 = state_16437__$1;(statearr_16440_16452[(2)] = inst_16432);
(statearr_16440_16452[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16438 === (2)))
{var inst_16425 = (state_16437[(7)]);var inst_16425__$1 = (state_16437[(2)]);var inst_16426 = (function (){var bl_coll_index = inst_16425__$1;return ((function (bl_coll_index,inst_16425,inst_16425__$1,state_val_16438,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_16425,inst_16425__$1,state_val_16438,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_16427 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_16426);var inst_16428 = cljs.core.deref.call(null,app_state);var inst_16429 = cljs.core.get_in.call(null,inst_16428,index_path);var inst_16430 = cljs.core._EQ_.call(null,inst_16429,inst_16425__$1);var state_16437__$1 = (function (){var statearr_16441 = state_16437;(statearr_16441[(8)] = inst_16427);
(statearr_16441[(7)] = inst_16425__$1);
return statearr_16441;
})();if(inst_16430)
{var statearr_16442_16453 = state_16437__$1;(statearr_16442_16453[(1)] = (3));
} else
{var statearr_16443_16454 = state_16437__$1;(statearr_16443_16454[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16438 === (1)))
{var inst_16423 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_16437__$1 = state_16437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16437__$1,(2),inst_16423);
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
var state_machine__5694__auto____0 = (function (){var statearr_16447 = [null,null,null,null,null,null,null,null,null];(statearr_16447[(0)] = state_machine__5694__auto__);
(statearr_16447[(1)] = (1));
return statearr_16447;
});
var state_machine__5694__auto____1 = (function (state_16437){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16437);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16448){if((e16448 instanceof Object))
{var ex__5697__auto__ = e16448;var statearr_16449_16455 = state_16437;(statearr_16449_16455[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16437);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16448;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16456 = state_16437;
state_16437 = G__16456;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16437){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_16450 = f__5709__auto__.call(null);(statearr_16450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16450;
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
