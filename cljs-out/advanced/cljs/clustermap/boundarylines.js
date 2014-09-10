// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3541__auto__ = cljs.core.some((function (p__37384){var vec__37385 = p__37384;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37385,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37385,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = z;if(cljs.core.truth_(and__3529__auto__))
{return (zoom <= z);
} else
{return and__3529__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3541__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3541__auto____$1))
{return or__3541__auto____$1;
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__37390 = cljs.core.seq(boundarylines);var chunk__37391 = null;var count__37392 = (0);var i__37393 = (0);while(true){
if((i__37393 < count__37392))
{var bl = chunk__37391.cljs$core$IIndexed$_nth$arity$2(null,i__37393);var boundaryline_id_37394 = (bl["id"]);var tolerance_37395 = (bl["tolerance"]);var general_cache_path_37396 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37394,tolerance_37395], null));var collection_cache_path_37397 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37394,tolerance_37395], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37396,((function (seq__37390,chunk__37391,count__37392,i__37393,boundaryline_id_37394,tolerance_37395,general_cache_path_37396,collection_cache_path_37397,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37390,chunk__37391,count__37392,i__37393,boundaryline_id_37394,tolerance_37395,general_cache_path_37396,collection_cache_path_37397,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37397))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37397,((function (seq__37390,chunk__37391,count__37392,i__37393,boundaryline_id_37394,tolerance_37395,general_cache_path_37396,collection_cache_path_37397,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37390,chunk__37391,count__37392,i__37393,boundaryline_id_37394,tolerance_37395,general_cache_path_37396,collection_cache_path_37397,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37398 = seq__37390;
var G__37399 = chunk__37391;
var G__37400 = count__37392;
var G__37401 = (i__37393 + (1));
seq__37390 = G__37398;
chunk__37391 = G__37399;
count__37392 = G__37400;
i__37393 = G__37401;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37390);if(temp__4126__auto__)
{var seq__37390__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37390__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__37390__$1);{
var G__37402 = cljs.core.chunk_rest(seq__37390__$1);
var G__37403 = c__4297__auto__;
var G__37404 = cljs.core.count(c__4297__auto__);
var G__37405 = (0);
seq__37390 = G__37402;
chunk__37391 = G__37403;
count__37392 = G__37404;
i__37393 = G__37405;
continue;
}
} else
{var bl = cljs.core.first(seq__37390__$1);var boundaryline_id_37406 = (bl["id"]);var tolerance_37407 = (bl["tolerance"]);var general_cache_path_37408 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37406,tolerance_37407], null));var collection_cache_path_37409 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37406,tolerance_37407], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37408,((function (seq__37390,chunk__37391,count__37392,i__37393,boundaryline_id_37406,tolerance_37407,general_cache_path_37408,collection_cache_path_37409,bl,seq__37390__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37390,chunk__37391,count__37392,i__37393,boundaryline_id_37406,tolerance_37407,general_cache_path_37408,collection_cache_path_37409,bl,seq__37390__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37409))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37409,((function (seq__37390,chunk__37391,count__37392,i__37393,boundaryline_id_37406,tolerance_37407,general_cache_path_37408,collection_cache_path_37409,bl,seq__37390__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37390,chunk__37391,count__37392,i__37393,boundaryline_id_37406,tolerance_37407,general_cache_path_37408,collection_cache_path_37409,bl,seq__37390__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37410 = cljs.core.next(seq__37390__$1);
var G__37411 = null;
var G__37412 = (0);
var G__37413 = (0);
seq__37390 = G__37410;
chunk__37391 = G__37411;
count__37392 = G__37412;
i__37393 = G__37413;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37414){var map__37430 = p__37414;var map__37430__$1 = ((cljs.core.seq_QMARK_(map__37430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37430):map__37430);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.constant$keyword$807);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.constant$keyword$806);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$806,boundaryline_ids,cljs.core.constant$keyword$803,true], 0));var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__,comm,map__37430,map__37430__$1,bounds,boundaryline_ids){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,comm,map__37430,map__37430__$1,bounds,boundaryline_ids){
return (function (state_37435){var state_val_37436 = (state_37435[(1)]);if((state_val_37436 === (2)))
{var inst_37432 = (state_37435[(2)]);var inst_37433 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_37432);var state_37435__$1 = (function (){var statearr_37437 = state_37435;(statearr_37437[(7)] = inst_37433);
return statearr_37437;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37435__$1,true);
} else
{if((state_val_37436 === (1)))
{var state_37435__$1 = state_37435;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37435__$1,(2),comm);
} else
{return null;
}
}
});})(c__5691__auto__,comm,map__37430,map__37430__$1,bounds,boundaryline_ids))
;return ((function (switch__5676__auto__,c__5691__auto__,comm,map__37430,map__37430__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37441 = [null,null,null,null,null,null,null,null];(statearr_37441[(0)] = state_machine__5677__auto__);
(statearr_37441[(1)] = (1));
return statearr_37441;
});
var state_machine__5677__auto____1 = (function (state_37435){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37435);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37442){if((e37442 instanceof Object))
{var ex__5680__auto__ = e37442;var statearr_37443_37445 = state_37435;(statearr_37443_37445[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37435);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e37442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__37446 = state_37435;
state_37435 = G__37446;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37435){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,comm,map__37430,map__37430__$1,bounds,boundaryline_ids))
})();var state__5693__auto__ = (function (){var statearr_37444 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_37444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__,comm,map__37430,map__37430__$1,bounds,boundaryline_ids))
);
return c__5691__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__37414 = null;if (arguments.length > 5) {
  p__37414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37414);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__37447){
var app_state = cljs.core.first(arglist__37447);
arglist__37447 = cljs.core.next(arglist__37447);
var boundarylines_path = cljs.core.first(arglist__37447);
arglist__37447 = cljs.core.next(arglist__37447);
var collection_boundarylines_path = cljs.core.first(arglist__37447);
arglist__37447 = cljs.core.next(arglist__37447);
var collection_id = cljs.core.first(arglist__37447);
arglist__37447 = cljs.core.next(arglist__37447);
var tolerance = cljs.core.first(arglist__37447);
var p__37414 = cljs.core.rest(arglist__37447);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37414);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name(boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3529__auto__ = default_bl;if(cljs.core.truth_(and__3529__auto__))
{return default_tol;
} else
{return and__3529__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3541__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__37448){var map__37453 = p__37448;var map__37453__$1 = ((cljs.core.seq_QMARK_(map__37453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37453):map__37453);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37453__$1,cljs.core.constant$keyword$806);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$818], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$819], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$819], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37453,map__37453__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37453,map__37453__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37453,map__37453__$1,boundaryline_ids){
return (function (p__37454){var vec__37455 = p__37454;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37455,(0),null);var vec__37456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37455,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37456,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37456,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37453,map__37453__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$806,required,cljs.core.constant$keyword$807,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__37448 = null;if (arguments.length > 5) {
  p__37448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__37448);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__37457){
var app_state = cljs.core.first(arglist__37457);
arglist__37457 = cljs.core.next(arglist__37457);
var boundarylines_path = cljs.core.first(arglist__37457);
arglist__37457 = cljs.core.next(arglist__37457);
var collection_id = cljs.core.first(arglist__37457);
arglist__37457 = cljs.core.next(arglist__37457);
var bounds = cljs.core.first(arglist__37457);
arglist__37457 = cljs.core.next(arglist__37457);
var zoom = cljs.core.first(arglist__37457);
var p__37448 = cljs.core.rest(arglist__37457);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__37448);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$818], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$821], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$822,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__37462_37466 = cljs.core.seq(keys);var chunk__37463_37467 = null;var count__37464_37468 = (0);var i__37465_37469 = (0);while(true){
if((i__37465_37469 < count__37464_37468))
{var k_37470 = chunk__37463_37467.cljs$core$IIndexed$_nth$arity$2(null,i__37465_37469);var obj_37471 = (js_index[k_37470]);var geom_37472 = (obj_37471["geojson"]);var feature_37473 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$822,"Feature",cljs.core.constant$keyword$823,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$824,(obj_37471["id"]),cljs.core.constant$keyword$825,(obj_37471["id"]),cljs.core.constant$keyword$826,(obj_37471["compact_name"])], null)], null));var __37474__$1 = (feature_37473["geometry"] = geom_37472);var __37475__$2 = ((feature_37473["properties"])["index_object"] = obj_37471);features.push(feature_37473);
{
var G__37476 = seq__37462_37466;
var G__37477 = chunk__37463_37467;
var G__37478 = count__37464_37468;
var G__37479 = (i__37465_37469 + (1));
seq__37462_37466 = G__37476;
chunk__37463_37467 = G__37477;
count__37464_37468 = G__37478;
i__37465_37469 = G__37479;
continue;
}
} else
{var temp__4126__auto___37480 = cljs.core.seq(seq__37462_37466);if(temp__4126__auto___37480)
{var seq__37462_37481__$1 = temp__4126__auto___37480;if(cljs.core.chunked_seq_QMARK_(seq__37462_37481__$1))
{var c__4297__auto___37482 = cljs.core.chunk_first(seq__37462_37481__$1);{
var G__37483 = cljs.core.chunk_rest(seq__37462_37481__$1);
var G__37484 = c__4297__auto___37482;
var G__37485 = cljs.core.count(c__4297__auto___37482);
var G__37486 = (0);
seq__37462_37466 = G__37483;
chunk__37463_37467 = G__37484;
count__37464_37468 = G__37485;
i__37465_37469 = G__37486;
continue;
}
} else
{var k_37487 = cljs.core.first(seq__37462_37481__$1);var obj_37488 = (js_index[k_37487]);var geom_37489 = (obj_37488["geojson"]);var feature_37490 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$822,"Feature",cljs.core.constant$keyword$823,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$824,(obj_37488["id"]),cljs.core.constant$keyword$825,(obj_37488["id"]),cljs.core.constant$keyword$826,(obj_37488["compact_name"])], null)], null));var __37491__$1 = (feature_37490["geometry"] = geom_37489);var __37492__$2 = ((feature_37490["properties"])["index_object"] = obj_37488);features.push(feature_37490);
{
var G__37493 = cljs.core.next(seq__37462_37481__$1);
var G__37494 = null;
var G__37495 = (0);
var G__37496 = (0);
seq__37462_37466 = G__37493;
chunk__37463_37467 = G__37494;
count__37464_37468 = G__37495;
i__37465_37469 = G__37496;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$818], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$820], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_37539){var state_val_37540 = (state_37539[(1)]);if((state_val_37540 === (5)))
{var inst_37537 = (state_37539[(2)]);var state_37539__$1 = state_37539;return cljs.core.async.impl.ioc_helpers.return_chan(state_37539__$1,inst_37537);
} else
{if((state_val_37540 === (4)))
{var state_37539__$1 = state_37539;var statearr_37541_37553 = state_37539__$1;(statearr_37541_37553[(2)] = null);
(statearr_37541_37553[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37540 === (3)))
{var inst_37527 = (state_37539[(7)]);var inst_37534 = clustermap.boundarylines.rtree_index(rtree,inst_37527);var state_37539__$1 = state_37539;var statearr_37542_37554 = state_37539__$1;(statearr_37542_37554[(2)] = inst_37534);
(statearr_37542_37554[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_37540 === (2)))
{var inst_37527 = (state_37539[(7)]);var inst_37527__$1 = (state_37539[(2)]);var inst_37528 = (function (){var bl_coll_index = inst_37527__$1;return ((function (bl_coll_index,inst_37527,inst_37527__$1,state_val_37540,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_37527,inst_37527__$1,state_val_37540,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_37529 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_37528);var inst_37530 = cljs.core.deref(app_state);var inst_37531 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37530,index_path);var inst_37532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37531,inst_37527__$1);var state_37539__$1 = (function (){var statearr_37543 = state_37539;(statearr_37543[(7)] = inst_37527__$1);
(statearr_37543[(8)] = inst_37529);
return statearr_37543;
})();if(inst_37532)
{var statearr_37544_37555 = state_37539__$1;(statearr_37544_37555[(1)] = (3));
} else
{var statearr_37545_37556 = state_37539__$1;(statearr_37545_37556[(1)] = (4));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_37540 === (1)))
{var inst_37525 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$803,true], 0));var state_37539__$1 = state_37539;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37539__$1,(2),inst_37525);
} else
{return null;
}
}
}
}
}
});})(c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__5676__auto__,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_37549 = [null,null,null,null,null,null,null,null,null];(statearr_37549[(0)] = state_machine__5677__auto__);
(statearr_37549[(1)] = (1));
return statearr_37549;
});
var state_machine__5677__auto____1 = (function (state_37539){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_37539);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e37550){if((e37550 instanceof Object))
{var ex__5680__auto__ = e37550;var statearr_37551_37557 = state_37539;(statearr_37551_37557[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37539);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e37550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__37558 = state_37539;
state_37539 = G__37558;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_37539){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_37539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5693__auto__ = (function (){var statearr_37552 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_37552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_37552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5691__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$818], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$821], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$827,x,cljs.core.constant$keyword$828,y,cljs.core.constant$keyword$829,(0),cljs.core.constant$keyword$830,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$824,hit.properties.id,cljs.core.constant$keyword$826,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$822,"Point",cljs.core.constant$keyword$831,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3541__auto__ = hits;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
