// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some((function (p__42303){var vec__42304 = p__42303;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42304,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42304,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3558__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.some(avail_set,coarser);
}
}
});
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_(x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__42309 = cljs.core.seq(boundarylines);var chunk__42310 = null;var count__42311 = (0);var i__42312 = (0);while(true){
if((i__42312 < count__42311))
{var bl = chunk__42310.cljs$core$IIndexed$_nth$arity$2(null,i__42312);var boundaryline_id_42313 = (bl["id"]);var tolerance_42314 = (bl["tolerance"]);var general_cache_path_42315 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_42313,tolerance_42314], null));var collection_cache_path_42316 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_42313,tolerance_42314], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_42315,((function (seq__42309,chunk__42310,count__42311,i__42312,boundaryline_id_42313,tolerance_42314,general_cache_path_42315,collection_cache_path_42316,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__42309,chunk__42310,count__42311,i__42312,boundaryline_id_42313,tolerance_42314,general_cache_path_42315,collection_cache_path_42316,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_42316))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_42316,((function (seq__42309,chunk__42310,count__42311,i__42312,boundaryline_id_42313,tolerance_42314,general_cache_path_42315,collection_cache_path_42316,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__42309,chunk__42310,count__42311,i__42312,boundaryline_id_42313,tolerance_42314,general_cache_path_42315,collection_cache_path_42316,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__42317 = seq__42309;
var G__42318 = chunk__42310;
var G__42319 = count__42311;
var G__42320 = (i__42312 + (1));
seq__42309 = G__42317;
chunk__42310 = G__42318;
count__42311 = G__42319;
i__42312 = G__42320;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42309);if(temp__4126__auto__)
{var seq__42309__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42309__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__42309__$1);{
var G__42321 = cljs.core.chunk_rest(seq__42309__$1);
var G__42322 = c__4314__auto__;
var G__42323 = cljs.core.count(c__4314__auto__);
var G__42324 = (0);
seq__42309 = G__42321;
chunk__42310 = G__42322;
count__42311 = G__42323;
i__42312 = G__42324;
continue;
}
} else
{var bl = cljs.core.first(seq__42309__$1);var boundaryline_id_42325 = (bl["id"]);var tolerance_42326 = (bl["tolerance"]);var general_cache_path_42327 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_42325,tolerance_42326], null));var collection_cache_path_42328 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_42325,tolerance_42326], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_42327,((function (seq__42309,chunk__42310,count__42311,i__42312,boundaryline_id_42325,tolerance_42326,general_cache_path_42327,collection_cache_path_42328,bl,seq__42309__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__42309,chunk__42310,count__42311,i__42312,boundaryline_id_42325,tolerance_42326,general_cache_path_42327,collection_cache_path_42328,bl,seq__42309__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_42328))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_42328,((function (seq__42309,chunk__42310,count__42311,i__42312,boundaryline_id_42325,tolerance_42326,general_cache_path_42327,collection_cache_path_42328,bl,seq__42309__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__42309,chunk__42310,count__42311,i__42312,boundaryline_id_42325,tolerance_42326,general_cache_path_42327,collection_cache_path_42328,bl,seq__42309__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__42329 = cljs.core.next(seq__42309__$1);
var G__42330 = null;
var G__42331 = (0);
var G__42332 = (0);
seq__42309 = G__42329;
chunk__42310 = G__42330;
count__42311 = G__42331;
i__42312 = G__42332;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__42333){var map__42349 = p__42333;var map__42349__$1 = ((cljs.core.seq_QMARK_(map__42349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42349):map__42349);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42349__$1,cljs.core.constant$keyword$1120);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42349__$1,cljs.core.constant$keyword$1119);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$1119,boundaryline_ids,cljs.core.constant$keyword$1116,true], 0));var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,map__42349,map__42349__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__42349,map__42349__$1,bounds,boundaryline_ids){
return (function (state_42354){var state_val_42355 = (state_42354[(1)]);if((state_val_42355 === (2)))
{var inst_42351 = (state_42354[(2)]);var inst_42352 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_42351);var state_42354__$1 = (function (){var statearr_42356 = state_42354;(statearr_42356[(7)] = inst_42352);
return statearr_42356;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42354__$1,true);
} else
{if((state_val_42355 === (1)))
{var state_42354__$1 = state_42354;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42354__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__42349,map__42349__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__42349,map__42349__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_42360 = [null,null,null,null,null,null,null,null];(statearr_42360[(0)] = state_machine__5694__auto__);
(statearr_42360[(1)] = (1));
return statearr_42360;
});
var state_machine__5694__auto____1 = (function (state_42354){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42354);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42361){if((e42361 instanceof Object))
{var ex__5697__auto__ = e42361;var statearr_42362_42364 = state_42354;(statearr_42362_42364[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42354);
return cljs.core.constant$keyword$1100;
} else
{throw e42361;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__42365 = state_42354;
state_42354 = G__42365;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42354){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__42349,map__42349__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_42363 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,map__42349,map__42349__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__42333 = null;if (arguments.length > 5) {
  p__42333 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__42333);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__42366){
var app_state = cljs.core.first(arglist__42366);
arglist__42366 = cljs.core.next(arglist__42366);
var boundarylines_path = cljs.core.first(arglist__42366);
arglist__42366 = cljs.core.next(arglist__42366);
var collection_boundarylines_path = cljs.core.first(arglist__42366);
arglist__42366 = cljs.core.next(arglist__42366);
var collection_id = cljs.core.first(arglist__42366);
arglist__42366 = cljs.core.next(arglist__42366);
var tolerance = cljs.core.first(arglist__42366);
var p__42333 = cljs.core.rest(arglist__42366);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__42333);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name(boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3546__auto__ = default_bl;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3558__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var use_tol = clustermap.boundarylines.best_available_tolerance(zoom,cljs.core.keys(bl_versions));var use_bl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bl_versions,use_tol);if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index(collection_index,boundaryline_id);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__42367){var map__42372 = p__42367;var map__42372__$1 = ((cljs.core.seq_QMARK_(map__42372))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42372):map__42372);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42372__$1,cljs.core.constant$keyword$1119);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1134], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1135], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1136], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1135], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__42372,map__42372__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__42372,map__42372__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__42372,map__42372__$1,boundaryline_ids){
return (function (p__42373){var vec__42374 = p__42373;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42374,(0),null);var vec__42375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42374,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42375,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42375,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__42372,map__42372__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$1119,required,cljs.core.constant$keyword$1120,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__42367 = null;if (arguments.length > 5) {
  p__42367 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__42367);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__42376){
var app_state = cljs.core.first(arglist__42376);
arglist__42376 = cljs.core.next(arglist__42376);
var boundarylines_path = cljs.core.first(arglist__42376);
arglist__42376 = cljs.core.next(arglist__42376);
var collection_id = cljs.core.first(arglist__42376);
arglist__42376 = cljs.core.next(arglist__42376);
var bounds = cljs.core.first(arglist__42376);
arglist__42376 = cljs.core.next(arglist__42376);
var zoom = cljs.core.first(arglist__42376);
var p__42367 = cljs.core.rest(arglist__42376);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__42367);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1134], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1137], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1138,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__42381_42385 = cljs.core.seq(keys);var chunk__42382_42386 = null;var count__42383_42387 = (0);var i__42384_42388 = (0);while(true){
if((i__42384_42388 < count__42383_42387))
{var k_42389 = chunk__42382_42386.cljs$core$IIndexed$_nth$arity$2(null,i__42384_42388);var obj_42390 = (js_index[k_42389]);var geom_42391 = (obj_42390["geojson"]);var feature_42392 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1138,"Feature",cljs.core.constant$keyword$1139,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1140,(obj_42390["id"]),cljs.core.constant$keyword$1141,(obj_42390["id"]),cljs.core.constant$keyword$1142,(obj_42390["compact_name"])], null)], null));var __42393__$1 = (feature_42392["geometry"] = geom_42391);var __42394__$2 = ((feature_42392["properties"])["index_object"] = obj_42390);features.push(feature_42392);
{
var G__42395 = seq__42381_42385;
var G__42396 = chunk__42382_42386;
var G__42397 = count__42383_42387;
var G__42398 = (i__42384_42388 + (1));
seq__42381_42385 = G__42395;
chunk__42382_42386 = G__42396;
count__42383_42387 = G__42397;
i__42384_42388 = G__42398;
continue;
}
} else
{var temp__4126__auto___42399 = cljs.core.seq(seq__42381_42385);if(temp__4126__auto___42399)
{var seq__42381_42400__$1 = temp__4126__auto___42399;if(cljs.core.chunked_seq_QMARK_(seq__42381_42400__$1))
{var c__4314__auto___42401 = cljs.core.chunk_first(seq__42381_42400__$1);{
var G__42402 = cljs.core.chunk_rest(seq__42381_42400__$1);
var G__42403 = c__4314__auto___42401;
var G__42404 = cljs.core.count(c__4314__auto___42401);
var G__42405 = (0);
seq__42381_42385 = G__42402;
chunk__42382_42386 = G__42403;
count__42383_42387 = G__42404;
i__42384_42388 = G__42405;
continue;
}
} else
{var k_42406 = cljs.core.first(seq__42381_42400__$1);var obj_42407 = (js_index[k_42406]);var geom_42408 = (obj_42407["geojson"]);var feature_42409 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1138,"Feature",cljs.core.constant$keyword$1139,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1140,(obj_42407["id"]),cljs.core.constant$keyword$1141,(obj_42407["id"]),cljs.core.constant$keyword$1142,(obj_42407["compact_name"])], null)], null));var __42410__$1 = (feature_42409["geometry"] = geom_42408);var __42411__$2 = ((feature_42409["properties"])["index_object"] = obj_42407);features.push(feature_42409);
{
var G__42412 = cljs.core.next(seq__42381_42400__$1);
var G__42413 = null;
var G__42414 = (0);
var G__42415 = (0);
seq__42381_42385 = G__42412;
chunk__42382_42386 = G__42413;
count__42383_42387 = G__42414;
i__42384_42388 = G__42415;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1134], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1136], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_42458){var state_val_42459 = (state_42458[(1)]);if((state_val_42459 === (5)))
{var inst_42456 = (state_42458[(2)]);var state_42458__$1 = state_42458;return cljs.core.async.impl.ioc_helpers.return_chan(state_42458__$1,inst_42456);
} else
{if((state_val_42459 === (4)))
{var state_42458__$1 = state_42458;var statearr_42460_42472 = state_42458__$1;(statearr_42460_42472[(2)] = null);
(statearr_42460_42472[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42459 === (3)))
{var inst_42446 = (state_42458[(7)]);var inst_42453 = clustermap.boundarylines.rtree_index(rtree,inst_42446);var state_42458__$1 = state_42458;var statearr_42461_42473 = state_42458__$1;(statearr_42461_42473[(2)] = inst_42453);
(statearr_42461_42473[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42459 === (2)))
{var inst_42446 = (state_42458[(7)]);var inst_42446__$1 = (state_42458[(2)]);var inst_42447 = (function (){var bl_coll_index = inst_42446__$1;return ((function (bl_coll_index,inst_42446,inst_42446__$1,state_val_42459,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_42446,inst_42446__$1,state_val_42459,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_42448 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_42447);var inst_42449 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));var inst_42450 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_42449,index_path);var inst_42451 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42450,inst_42446__$1);var state_42458__$1 = (function (){var statearr_42462 = state_42458;(statearr_42462[(7)] = inst_42446__$1);
(statearr_42462[(8)] = inst_42448);
return statearr_42462;
})();if(inst_42451)
{var statearr_42463_42474 = state_42458__$1;(statearr_42463_42474[(1)] = (3));
} else
{var statearr_42464_42475 = state_42458__$1;(statearr_42464_42475[(1)] = (4));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_42459 === (1)))
{var inst_42444 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$1116,true], 0));var state_42458__$1 = state_42458;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42458__$1,(2),inst_42444);
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
var state_machine__5694__auto____0 = (function (){var statearr_42468 = [null,null,null,null,null,null,null,null,null];(statearr_42468[(0)] = state_machine__5694__auto__);
(statearr_42468[(1)] = (1));
return statearr_42468;
});
var state_machine__5694__auto____1 = (function (state_42458){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_42458);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e42469){if((e42469 instanceof Object))
{var ex__5697__auto__ = e42469;var statearr_42470_42476 = state_42458;(statearr_42470_42476[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42458);
return cljs.core.constant$keyword$1100;
} else
{throw e42469;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__42477 = state_42458;
state_42458 = G__42477;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_42458){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_42458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_42471 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_42471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_42471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5708__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1134], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1137], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1143,x,cljs.core.constant$keyword$1144,y,cljs.core.constant$keyword$1145,(0),cljs.core.constant$keyword$1146,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1140,hit.properties.id,cljs.core.constant$keyword$1142,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1138,"Point",cljs.core.constant$keyword$1147,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
