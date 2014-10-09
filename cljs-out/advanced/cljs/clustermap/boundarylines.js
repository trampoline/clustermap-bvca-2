// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some((function (p__39389){var vec__39390 = p__39389;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39390,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39390,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__39395 = cljs.core.seq(boundarylines);var chunk__39396 = null;var count__39397 = (0);var i__39398 = (0);while(true){
if((i__39398 < count__39397))
{var bl = chunk__39396.cljs$core$IIndexed$_nth$arity$2(null,i__39398);var boundaryline_id_39399 = (bl["id"]);var tolerance_39400 = (bl["tolerance"]);var general_cache_path_39401 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_39399,tolerance_39400], null));var collection_cache_path_39402 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_39399,tolerance_39400], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_39401,((function (seq__39395,chunk__39396,count__39397,i__39398,boundaryline_id_39399,tolerance_39400,general_cache_path_39401,collection_cache_path_39402,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__39395,chunk__39396,count__39397,i__39398,boundaryline_id_39399,tolerance_39400,general_cache_path_39401,collection_cache_path_39402,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_39402))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_39402,((function (seq__39395,chunk__39396,count__39397,i__39398,boundaryline_id_39399,tolerance_39400,general_cache_path_39401,collection_cache_path_39402,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__39395,chunk__39396,count__39397,i__39398,boundaryline_id_39399,tolerance_39400,general_cache_path_39401,collection_cache_path_39402,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__39403 = seq__39395;
var G__39404 = chunk__39396;
var G__39405 = count__39397;
var G__39406 = (i__39398 + (1));
seq__39395 = G__39403;
chunk__39396 = G__39404;
count__39397 = G__39405;
i__39398 = G__39406;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39395);if(temp__4126__auto__)
{var seq__39395__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39395__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__39395__$1);{
var G__39407 = cljs.core.chunk_rest(seq__39395__$1);
var G__39408 = c__4314__auto__;
var G__39409 = cljs.core.count(c__4314__auto__);
var G__39410 = (0);
seq__39395 = G__39407;
chunk__39396 = G__39408;
count__39397 = G__39409;
i__39398 = G__39410;
continue;
}
} else
{var bl = cljs.core.first(seq__39395__$1);var boundaryline_id_39411 = (bl["id"]);var tolerance_39412 = (bl["tolerance"]);var general_cache_path_39413 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_39411,tolerance_39412], null));var collection_cache_path_39414 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_39411,tolerance_39412], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_39413,((function (seq__39395,chunk__39396,count__39397,i__39398,boundaryline_id_39411,tolerance_39412,general_cache_path_39413,collection_cache_path_39414,bl,seq__39395__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__39395,chunk__39396,count__39397,i__39398,boundaryline_id_39411,tolerance_39412,general_cache_path_39413,collection_cache_path_39414,bl,seq__39395__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_39414))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_39414,((function (seq__39395,chunk__39396,count__39397,i__39398,boundaryline_id_39411,tolerance_39412,general_cache_path_39413,collection_cache_path_39414,bl,seq__39395__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__39395,chunk__39396,count__39397,i__39398,boundaryline_id_39411,tolerance_39412,general_cache_path_39413,collection_cache_path_39414,bl,seq__39395__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__39415 = cljs.core.next(seq__39395__$1);
var G__39416 = null;
var G__39417 = (0);
var G__39418 = (0);
seq__39395 = G__39415;
chunk__39396 = G__39416;
count__39397 = G__39417;
i__39398 = G__39418;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__39419){var map__39435 = p__39419;var map__39435__$1 = ((cljs.core.seq_QMARK_(map__39435))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39435):map__39435);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39435__$1,cljs.core.constant$keyword$892);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39435__$1,cljs.core.constant$keyword$891);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$891,boundaryline_ids,cljs.core.constant$keyword$888,true], 0));var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,map__39435,map__39435__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__39435,map__39435__$1,bounds,boundaryline_ids){
return (function (state_39440){var state_val_39441 = (state_39440[(1)]);if((state_val_39441 === (2)))
{var inst_39437 = (state_39440[(2)]);var inst_39438 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_39437);var state_39440__$1 = (function (){var statearr_39442 = state_39440;(statearr_39442[(7)] = inst_39438);
return statearr_39442;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39440__$1,true);
} else
{if((state_val_39441 === (1)))
{var state_39440__$1 = state_39440;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39440__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__39435,map__39435__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__39435,map__39435__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_39446 = [null,null,null,null,null,null,null,null];(statearr_39446[(0)] = state_machine__5694__auto__);
(statearr_39446[(1)] = (1));
return statearr_39446;
});
var state_machine__5694__auto____1 = (function (state_39440){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39440);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39447){if((e39447 instanceof Object))
{var ex__5697__auto__ = e39447;var statearr_39448_39450 = state_39440;(statearr_39448_39450[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39440);
return cljs.core.constant$keyword$872;
} else
{throw e39447;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__39451 = state_39440;
state_39440 = G__39451;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39440){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__39435,map__39435__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_39449 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39449;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,map__39435,map__39435__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__39419 = null;if (arguments.length > 5) {
  p__39419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__39419);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__39452){
var app_state = cljs.core.first(arglist__39452);
arglist__39452 = cljs.core.next(arglist__39452);
var boundarylines_path = cljs.core.first(arglist__39452);
arglist__39452 = cljs.core.next(arglist__39452);
var collection_boundarylines_path = cljs.core.first(arglist__39452);
arglist__39452 = cljs.core.next(arglist__39452);
var collection_id = cljs.core.first(arglist__39452);
arglist__39452 = cljs.core.next(arglist__39452);
var tolerance = cljs.core.first(arglist__39452);
var p__39419 = cljs.core.rest(arglist__39452);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__39419);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__39453){var map__39458 = p__39453;var map__39458__$1 = ((cljs.core.seq_QMARK_(map__39458))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39458):map__39458);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458__$1,cljs.core.constant$keyword$891);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$900], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$901], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$902], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$901], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__39458,map__39458__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__39458,map__39458__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__39458,map__39458__$1,boundaryline_ids){
return (function (p__39459){var vec__39460 = p__39459;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39460,(0),null);var vec__39461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39460,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39461,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39461,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__39458,map__39458__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$891,required,cljs.core.constant$keyword$892,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__39453 = null;if (arguments.length > 5) {
  p__39453 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__39453);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__39462){
var app_state = cljs.core.first(arglist__39462);
arglist__39462 = cljs.core.next(arglist__39462);
var boundarylines_path = cljs.core.first(arglist__39462);
arglist__39462 = cljs.core.next(arglist__39462);
var collection_id = cljs.core.first(arglist__39462);
arglist__39462 = cljs.core.next(arglist__39462);
var bounds = cljs.core.first(arglist__39462);
arglist__39462 = cljs.core.next(arglist__39462);
var zoom = cljs.core.first(arglist__39462);
var p__39453 = cljs.core.rest(arglist__39462);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__39453);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$900], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$903], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$904,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__39467_39471 = cljs.core.seq(keys);var chunk__39468_39472 = null;var count__39469_39473 = (0);var i__39470_39474 = (0);while(true){
if((i__39470_39474 < count__39469_39473))
{var k_39475 = chunk__39468_39472.cljs$core$IIndexed$_nth$arity$2(null,i__39470_39474);var obj_39476 = (js_index[k_39475]);var geom_39477 = (obj_39476["geojson"]);var feature_39478 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,"Feature",cljs.core.constant$keyword$905,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$906,(obj_39476["id"]),cljs.core.constant$keyword$907,(obj_39476["id"]),cljs.core.constant$keyword$908,(obj_39476["compact_name"])], null)], null));var __39479__$1 = (feature_39478["geometry"] = geom_39477);var __39480__$2 = ((feature_39478["properties"])["index_object"] = obj_39476);features.push(feature_39478);
{
var G__39481 = seq__39467_39471;
var G__39482 = chunk__39468_39472;
var G__39483 = count__39469_39473;
var G__39484 = (i__39470_39474 + (1));
seq__39467_39471 = G__39481;
chunk__39468_39472 = G__39482;
count__39469_39473 = G__39483;
i__39470_39474 = G__39484;
continue;
}
} else
{var temp__4126__auto___39485 = cljs.core.seq(seq__39467_39471);if(temp__4126__auto___39485)
{var seq__39467_39486__$1 = temp__4126__auto___39485;if(cljs.core.chunked_seq_QMARK_(seq__39467_39486__$1))
{var c__4314__auto___39487 = cljs.core.chunk_first(seq__39467_39486__$1);{
var G__39488 = cljs.core.chunk_rest(seq__39467_39486__$1);
var G__39489 = c__4314__auto___39487;
var G__39490 = cljs.core.count(c__4314__auto___39487);
var G__39491 = (0);
seq__39467_39471 = G__39488;
chunk__39468_39472 = G__39489;
count__39469_39473 = G__39490;
i__39470_39474 = G__39491;
continue;
}
} else
{var k_39492 = cljs.core.first(seq__39467_39486__$1);var obj_39493 = (js_index[k_39492]);var geom_39494 = (obj_39493["geojson"]);var feature_39495 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,"Feature",cljs.core.constant$keyword$905,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$906,(obj_39493["id"]),cljs.core.constant$keyword$907,(obj_39493["id"]),cljs.core.constant$keyword$908,(obj_39493["compact_name"])], null)], null));var __39496__$1 = (feature_39495["geometry"] = geom_39494);var __39497__$2 = ((feature_39495["properties"])["index_object"] = obj_39493);features.push(feature_39495);
{
var G__39498 = cljs.core.next(seq__39467_39486__$1);
var G__39499 = null;
var G__39500 = (0);
var G__39501 = (0);
seq__39467_39471 = G__39498;
chunk__39468_39472 = G__39499;
count__39469_39473 = G__39500;
i__39470_39474 = G__39501;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$900], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$902], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_39544){var state_val_39545 = (state_39544[(1)]);if((state_val_39545 === (5)))
{var inst_39542 = (state_39544[(2)]);var state_39544__$1 = state_39544;return cljs.core.async.impl.ioc_helpers.return_chan(state_39544__$1,inst_39542);
} else
{if((state_val_39545 === (4)))
{var state_39544__$1 = state_39544;var statearr_39546_39558 = state_39544__$1;(statearr_39546_39558[(2)] = null);
(statearr_39546_39558[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39545 === (3)))
{var inst_39532 = (state_39544[(7)]);var inst_39539 = clustermap.boundarylines.rtree_index(rtree,inst_39532);var state_39544__$1 = state_39544;var statearr_39547_39559 = state_39544__$1;(statearr_39547_39559[(2)] = inst_39539);
(statearr_39547_39559[(1)] = (5));
return cljs.core.constant$keyword$872;
} else
{if((state_val_39545 === (2)))
{var inst_39532 = (state_39544[(7)]);var inst_39532__$1 = (state_39544[(2)]);var inst_39533 = (function (){var bl_coll_index = inst_39532__$1;return ((function (bl_coll_index,inst_39532,inst_39532__$1,state_val_39545,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_39532,inst_39532__$1,state_val_39545,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_39534 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_39533);var inst_39535 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));var inst_39536 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_39535,index_path);var inst_39537 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39536,inst_39532__$1);var state_39544__$1 = (function (){var statearr_39548 = state_39544;(statearr_39548[(8)] = inst_39534);
(statearr_39548[(7)] = inst_39532__$1);
return statearr_39548;
})();if(inst_39537)
{var statearr_39549_39560 = state_39544__$1;(statearr_39549_39560[(1)] = (3));
} else
{var statearr_39550_39561 = state_39544__$1;(statearr_39550_39561[(1)] = (4));
}
return cljs.core.constant$keyword$872;
} else
{if((state_val_39545 === (1)))
{var inst_39530 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$888,true], 0));var state_39544__$1 = state_39544;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39544__$1,(2),inst_39530);
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
var state_machine__5694__auto____0 = (function (){var statearr_39554 = [null,null,null,null,null,null,null,null,null];(statearr_39554[(0)] = state_machine__5694__auto__);
(statearr_39554[(1)] = (1));
return statearr_39554;
});
var state_machine__5694__auto____1 = (function (state_39544){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_39544);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$872))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e39555){if((e39555 instanceof Object))
{var ex__5697__auto__ = e39555;var statearr_39556_39562 = state_39544;(statearr_39556_39562[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39544);
return cljs.core.constant$keyword$872;
} else
{throw e39555;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$872))
{{
var G__39563 = state_39544;
state_39544 = G__39563;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_39544){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_39544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_39557 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_39557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_39557;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$900], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$903], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$909,x,cljs.core.constant$keyword$910,y,cljs.core.constant$keyword$911,(0),cljs.core.constant$keyword$912,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$906,hit.properties.id,cljs.core.constant$keyword$908,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,"Point",cljs.core.constant$keyword$913,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
