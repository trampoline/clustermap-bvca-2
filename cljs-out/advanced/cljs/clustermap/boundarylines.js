// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3637__auto__ = cljs.core.some((function (p__53516){var vec__53517 = p__53516;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53517,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53517,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = z;if(cljs.core.truth_(and__3625__auto__))
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
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3637__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__53522 = cljs.core.seq(boundarylines);var chunk__53523 = null;var count__53524 = (0);var i__53525 = (0);while(true){
if((i__53525 < count__53524))
{var bl = chunk__53523.cljs$core$IIndexed$_nth$arity$2(null,i__53525);var boundaryline_id_53526 = (bl["id"]);var tolerance_53527 = (bl["tolerance"]);var general_cache_path_53528 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_53526,tolerance_53527], null));var collection_cache_path_53529 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_53526,tolerance_53527], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_53528,((function (seq__53522,chunk__53523,count__53524,i__53525,boundaryline_id_53526,tolerance_53527,general_cache_path_53528,collection_cache_path_53529,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__53522,chunk__53523,count__53524,i__53525,boundaryline_id_53526,tolerance_53527,general_cache_path_53528,collection_cache_path_53529,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_53529))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_53529,((function (seq__53522,chunk__53523,count__53524,i__53525,boundaryline_id_53526,tolerance_53527,general_cache_path_53528,collection_cache_path_53529,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__53522,chunk__53523,count__53524,i__53525,boundaryline_id_53526,tolerance_53527,general_cache_path_53528,collection_cache_path_53529,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__53530 = seq__53522;
var G__53531 = chunk__53523;
var G__53532 = count__53524;
var G__53533 = (i__53525 + (1));
seq__53522 = G__53530;
chunk__53523 = G__53531;
count__53524 = G__53532;
i__53525 = G__53533;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__53522);if(temp__4126__auto__)
{var seq__53522__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__53522__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__53522__$1);{
var G__53534 = cljs.core.chunk_rest(seq__53522__$1);
var G__53535 = c__4406__auto__;
var G__53536 = cljs.core.count(c__4406__auto__);
var G__53537 = (0);
seq__53522 = G__53534;
chunk__53523 = G__53535;
count__53524 = G__53536;
i__53525 = G__53537;
continue;
}
} else
{var bl = cljs.core.first(seq__53522__$1);var boundaryline_id_53538 = (bl["id"]);var tolerance_53539 = (bl["tolerance"]);var general_cache_path_53540 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_53538,tolerance_53539], null));var collection_cache_path_53541 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_53538,tolerance_53539], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_53540,((function (seq__53522,chunk__53523,count__53524,i__53525,boundaryline_id_53538,tolerance_53539,general_cache_path_53540,collection_cache_path_53541,bl,seq__53522__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__53522,chunk__53523,count__53524,i__53525,boundaryline_id_53538,tolerance_53539,general_cache_path_53540,collection_cache_path_53541,bl,seq__53522__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_53541))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_53541,((function (seq__53522,chunk__53523,count__53524,i__53525,boundaryline_id_53538,tolerance_53539,general_cache_path_53540,collection_cache_path_53541,bl,seq__53522__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__53522,chunk__53523,count__53524,i__53525,boundaryline_id_53538,tolerance_53539,general_cache_path_53540,collection_cache_path_53541,bl,seq__53522__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__53542 = cljs.core.next(seq__53522__$1);
var G__53543 = null;
var G__53544 = (0);
var G__53545 = (0);
seq__53522 = G__53542;
chunk__53523 = G__53543;
count__53524 = G__53544;
i__53525 = G__53545;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__53546){var map__53562 = p__53546;var map__53562__$1 = ((cljs.core.seq_QMARK_(map__53562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53562):map__53562);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53562__$1,cljs.core.constant$keyword$1142);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53562__$1,cljs.core.constant$keyword$1141);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$1141,boundaryline_ids,cljs.core.constant$keyword$1138,true], 0));var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,comm,map__53562,map__53562__$1,bounds,boundaryline_ids){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,comm,map__53562,map__53562__$1,bounds,boundaryline_ids){
return (function (state_53567){var state_val_53568 = (state_53567[(1)]);if((state_val_53568 === (2)))
{var inst_53564 = (state_53567[(2)]);var inst_53565 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_53564);var state_53567__$1 = (function (){var statearr_53569 = state_53567;(statearr_53569[(7)] = inst_53565);
return statearr_53569;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_53567__$1,true);
} else
{if((state_val_53568 === (1)))
{var state_53567__$1 = state_53567;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53567__$1,(2),comm);
} else
{return null;
}
}
});})(c__5819__auto__,comm,map__53562,map__53562__$1,bounds,boundaryline_ids))
;return ((function (switch__5804__auto__,c__5819__auto__,comm,map__53562,map__53562__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_53573 = [null,null,null,null,null,null,null,null];(statearr_53573[(0)] = state_machine__5805__auto__);
(statearr_53573[(1)] = (1));
return statearr_53573;
});
var state_machine__5805__auto____1 = (function (state_53567){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_53567);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e53574){if((e53574 instanceof Object))
{var ex__5808__auto__ = e53574;var statearr_53575_53577 = state_53567;(statearr_53575_53577[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53567);
return cljs.core.constant$keyword$1120;
} else
{throw e53574;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__53578 = state_53567;
state_53567 = G__53578;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_53567){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_53567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,comm,map__53562,map__53562__$1,bounds,boundaryline_ids))
})();var state__5821__auto__ = (function (){var statearr_53576 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_53576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_53576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,comm,map__53562,map__53562__$1,bounds,boundaryline_ids))
);
return c__5819__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__53546 = null;if (arguments.length > 5) {
  p__53546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__53546);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__53579){
var app_state = cljs.core.first(arglist__53579);
arglist__53579 = cljs.core.next(arglist__53579);
var boundarylines_path = cljs.core.first(arglist__53579);
arglist__53579 = cljs.core.next(arglist__53579);
var collection_boundarylines_path = cljs.core.first(arglist__53579);
arglist__53579 = cljs.core.next(arglist__53579);
var collection_id = cljs.core.first(arglist__53579);
arglist__53579 = cljs.core.next(arglist__53579);
var tolerance = cljs.core.first(arglist__53579);
var p__53546 = cljs.core.rest(arglist__53579);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__53546);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name(boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3625__auto__ = default_bl;if(cljs.core.truth_(and__3625__auto__))
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
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3637__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collection_cache,boundaryline_id);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__53580){var map__53588 = p__53580;var map__53588__$1 = ((cljs.core.seq_QMARK_(map__53588))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53588):map__53588);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,cljs.core.constant$keyword$1141);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1156], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1157], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__53589 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53589) : cljs.core.deref.call(null,G__53589));
})(),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1158], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__53590 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53590) : cljs.core.deref.call(null,G__53590));
})(),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1157], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__53591 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53591) : cljs.core.deref.call(null,G__53591));
})(),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__53588,map__53588__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__53588,map__53588__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__53588,map__53588__$1,boundaryline_ids){
return (function (p__53592){var vec__53593 = p__53592;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53593,(0),null);var vec__53594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53593,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53594,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53594,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__53588,map__53588__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$1141,required,cljs.core.constant$keyword$1142,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__53580 = null;if (arguments.length > 5) {
  p__53580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__53580);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__53595){
var app_state = cljs.core.first(arglist__53595);
arglist__53595 = cljs.core.next(arglist__53595);
var boundarylines_path = cljs.core.first(arglist__53595);
arglist__53595 = cljs.core.next(arglist__53595);
var collection_id = cljs.core.first(arglist__53595);
arglist__53595 = cljs.core.next(arglist__53595);
var bounds = cljs.core.first(arglist__53595);
arglist__53595 = cljs.core.next(arglist__53595);
var zoom = cljs.core.first(arglist__53595);
var p__53580 = cljs.core.rest(arglist__53595);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__53580);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1156], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1159], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__53597 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53597) : cljs.core.deref.call(null,G__53597));
})(),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = (function (){var G__53603 = js_index;return Object.keys(G__53603);
})();var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1160,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__53604_53608 = cljs.core.seq(keys);var chunk__53605_53609 = null;var count__53606_53610 = (0);var i__53607_53611 = (0);while(true){
if((i__53607_53611 < count__53606_53610))
{var k_53612 = chunk__53605_53609.cljs$core$IIndexed$_nth$arity$2(null,i__53607_53611);var obj_53613 = (js_index[k_53612]);var geom_53614 = (obj_53613["geojson"]);var feature_53615 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"Feature",cljs.core.constant$keyword$1161,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1162,(obj_53613["id"]),cljs.core.constant$keyword$1163,(obj_53613["id"]),cljs.core.constant$keyword$1164,(obj_53613["compact_name"])], null)], null));var __53616__$1 = (feature_53615["geometry"] = geom_53614);var __53617__$2 = ((feature_53615["properties"])["index_object"] = obj_53613);features.push(feature_53615);
{
var G__53618 = seq__53604_53608;
var G__53619 = chunk__53605_53609;
var G__53620 = count__53606_53610;
var G__53621 = (i__53607_53611 + (1));
seq__53604_53608 = G__53618;
chunk__53605_53609 = G__53619;
count__53606_53610 = G__53620;
i__53607_53611 = G__53621;
continue;
}
} else
{var temp__4126__auto___53622 = cljs.core.seq(seq__53604_53608);if(temp__4126__auto___53622)
{var seq__53604_53623__$1 = temp__4126__auto___53622;if(cljs.core.chunked_seq_QMARK_(seq__53604_53623__$1))
{var c__4406__auto___53624 = cljs.core.chunk_first(seq__53604_53623__$1);{
var G__53625 = cljs.core.chunk_rest(seq__53604_53623__$1);
var G__53626 = c__4406__auto___53624;
var G__53627 = cljs.core.count(c__4406__auto___53624);
var G__53628 = (0);
seq__53604_53608 = G__53625;
chunk__53605_53609 = G__53626;
count__53606_53610 = G__53627;
i__53607_53611 = G__53628;
continue;
}
} else
{var k_53629 = cljs.core.first(seq__53604_53623__$1);var obj_53630 = (js_index[k_53629]);var geom_53631 = (obj_53630["geojson"]);var feature_53632 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"Feature",cljs.core.constant$keyword$1161,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1162,(obj_53630["id"]),cljs.core.constant$keyword$1163,(obj_53630["id"]),cljs.core.constant$keyword$1164,(obj_53630["compact_name"])], null)], null));var __53633__$1 = (feature_53632["geometry"] = geom_53631);var __53634__$2 = ((feature_53632["properties"])["index_object"] = obj_53630);features.push(feature_53632);
{
var G__53635 = cljs.core.next(seq__53604_53623__$1);
var G__53636 = null;
var G__53637 = (0);
var G__53638 = (0);
seq__53604_53608 = G__53635;
chunk__53605_53609 = G__53636;
count__53606_53610 = G__53637;
i__53607_53611 = G__53638;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1156], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1158], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__53669 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53669) : cljs.core.deref.call(null,G__53669));
})(),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5819__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_53684){var state_val_53685 = (state_53684[(1)]);if((state_val_53685 === (5)))
{var inst_53682 = (state_53684[(2)]);var state_53684__$1 = state_53684;return cljs.core.async.impl.ioc_helpers.return_chan(state_53684__$1,inst_53682);
} else
{if((state_val_53685 === (4)))
{var state_53684__$1 = state_53684;var statearr_53686_53699 = state_53684__$1;(statearr_53686_53699[(2)] = null);
(statearr_53686_53699[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53685 === (3)))
{var inst_53672 = (state_53684[(7)]);var inst_53679 = clustermap.boundarylines.rtree_index(rtree,inst_53672);var state_53684__$1 = state_53684;var statearr_53687_53700 = state_53684__$1;(statearr_53687_53700[(2)] = inst_53679);
(statearr_53687_53700[(1)] = (5));
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53685 === (2)))
{var inst_53672 = (state_53684[(7)]);var inst_53672__$1 = (state_53684[(2)]);var inst_53673 = (function (){var bl_coll_index = inst_53672__$1;return ((function (bl_coll_index,inst_53672,inst_53672__$1,state_val_53685,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_53672,inst_53672__$1,state_val_53685,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_53674 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_53673);var inst_53675 = (function (){var G__53688 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53688) : cljs.core.deref.call(null,G__53688));
})();var inst_53676 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_53675,index_path);var inst_53677 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53676,inst_53672__$1);var state_53684__$1 = (function (){var statearr_53689 = state_53684;(statearr_53689[(8)] = inst_53674);
(statearr_53689[(7)] = inst_53672__$1);
return statearr_53689;
})();if(inst_53677)
{var statearr_53690_53701 = state_53684__$1;(statearr_53690_53701[(1)] = (3));
} else
{var statearr_53691_53702 = state_53684__$1;(statearr_53691_53702[(1)] = (4));
}
return cljs.core.constant$keyword$1120;
} else
{if((state_val_53685 === (1)))
{var inst_53670 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$1138,true], 0));var state_53684__$1 = state_53684;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53684__$1,(2),inst_53670);
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
var state_machine__5805__auto____0 = (function (){var statearr_53695 = [null,null,null,null,null,null,null,null,null];(statearr_53695[(0)] = state_machine__5805__auto__);
(statearr_53695[(1)] = (1));
return statearr_53695;
});
var state_machine__5805__auto____1 = (function (state_53684){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__(state_53684);if(cljs.core.keyword_identical_QMARK_(result__5807__auto__,cljs.core.constant$keyword$1120))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e53696){if((e53696 instanceof Object))
{var ex__5808__auto__ = e53696;var statearr_53697_53703 = state_53684;(statearr_53697_53703[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53684);
return cljs.core.constant$keyword$1120;
} else
{throw e53696;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5806__auto__,cljs.core.constant$keyword$1120))
{{
var G__53704 = state_53684;
state_53684 = G__53704;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_53684){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_53684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5821__auto__ = (function (){var statearr_53698 = (function (){return (f__5820__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5820__auto__.cljs$core$IFn$_invoke$arity$0() : f__5820__auto__.call(null));
})();(statearr_53698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_53698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5821__auto__);
});})(c__5819__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__5819__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1156], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1159], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__53708 = app_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__53708) : cljs.core.deref.call(null,G__53708));
})(),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1165,x,cljs.core.constant$keyword$1166,y,cljs.core.constant$keyword$1167,(0),cljs.core.constant$keyword$1168,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1162,hit.properties.id,cljs.core.constant$keyword$1164,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){var G__53709 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1160,"Point",cljs.core.constant$keyword$1169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));var G__53710 = hit.geometry;return gju.pointInPolygon(G__53709,G__53710);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3637__auto__ = hits;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
