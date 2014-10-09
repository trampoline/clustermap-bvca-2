// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some((function (p__45576){var vec__45577 = p__45576;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__45582 = cljs.core.seq(boundarylines);var chunk__45583 = null;var count__45584 = (0);var i__45585 = (0);while(true){
if((i__45585 < count__45584))
{var bl = chunk__45583.cljs$core$IIndexed$_nth$arity$2(null,i__45585);var boundaryline_id_45586 = (bl["id"]);var tolerance_45587 = (bl["tolerance"]);var general_cache_path_45588 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_45586,tolerance_45587], null));var collection_cache_path_45589 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_45586,tolerance_45587], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_45588,((function (seq__45582,chunk__45583,count__45584,i__45585,boundaryline_id_45586,tolerance_45587,general_cache_path_45588,collection_cache_path_45589,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__45582,chunk__45583,count__45584,i__45585,boundaryline_id_45586,tolerance_45587,general_cache_path_45588,collection_cache_path_45589,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_45589))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_45589,((function (seq__45582,chunk__45583,count__45584,i__45585,boundaryline_id_45586,tolerance_45587,general_cache_path_45588,collection_cache_path_45589,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__45582,chunk__45583,count__45584,i__45585,boundaryline_id_45586,tolerance_45587,general_cache_path_45588,collection_cache_path_45589,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__45590 = seq__45582;
var G__45591 = chunk__45583;
var G__45592 = count__45584;
var G__45593 = (i__45585 + (1));
seq__45582 = G__45590;
chunk__45583 = G__45591;
count__45584 = G__45592;
i__45585 = G__45593;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45582);if(temp__4126__auto__)
{var seq__45582__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45582__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45582__$1);{
var G__45594 = cljs.core.chunk_rest(seq__45582__$1);
var G__45595 = c__4314__auto__;
var G__45596 = cljs.core.count(c__4314__auto__);
var G__45597 = (0);
seq__45582 = G__45594;
chunk__45583 = G__45595;
count__45584 = G__45596;
i__45585 = G__45597;
continue;
}
} else
{var bl = cljs.core.first(seq__45582__$1);var boundaryline_id_45598 = (bl["id"]);var tolerance_45599 = (bl["tolerance"]);var general_cache_path_45600 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_45598,tolerance_45599], null));var collection_cache_path_45601 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_45598,tolerance_45599], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_45600,((function (seq__45582,chunk__45583,count__45584,i__45585,boundaryline_id_45598,tolerance_45599,general_cache_path_45600,collection_cache_path_45601,bl,seq__45582__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__45582,chunk__45583,count__45584,i__45585,boundaryline_id_45598,tolerance_45599,general_cache_path_45600,collection_cache_path_45601,bl,seq__45582__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_45601))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_45601,((function (seq__45582,chunk__45583,count__45584,i__45585,boundaryline_id_45598,tolerance_45599,general_cache_path_45600,collection_cache_path_45601,bl,seq__45582__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__45582,chunk__45583,count__45584,i__45585,boundaryline_id_45598,tolerance_45599,general_cache_path_45600,collection_cache_path_45601,bl,seq__45582__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__45602 = cljs.core.next(seq__45582__$1);
var G__45603 = null;
var G__45604 = (0);
var G__45605 = (0);
seq__45582 = G__45602;
chunk__45583 = G__45603;
count__45584 = G__45604;
i__45585 = G__45605;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__45606){var map__45622 = p__45606;var map__45622__$1 = ((cljs.core.seq_QMARK_(map__45622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45622):map__45622);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45622__$1,cljs.core.constant$keyword$956);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45622__$1,cljs.core.constant$keyword$955);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$955,boundaryline_ids,cljs.core.constant$keyword$952,true], 0));var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,map__45622,map__45622__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__45622,map__45622__$1,bounds,boundaryline_ids){
return (function (state_45627){var state_val_45628 = (state_45627[(1)]);if((state_val_45628 === (2)))
{var inst_45624 = (state_45627[(2)]);var inst_45625 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_45624);var state_45627__$1 = (function (){var statearr_45629 = state_45627;(statearr_45629[(7)] = inst_45625);
return statearr_45629;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_45627__$1,true);
} else
{if((state_val_45628 === (1)))
{var state_45627__$1 = state_45627;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45627__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__45622,map__45622__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__45622,map__45622__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45633 = [null,null,null,null,null,null,null,null];(statearr_45633[(0)] = state_machine__5694__auto__);
(statearr_45633[(1)] = (1));
return statearr_45633;
});
var state_machine__5694__auto____1 = (function (state_45627){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45627);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45634){if((e45634 instanceof Object))
{var ex__5697__auto__ = e45634;var statearr_45635_45637 = state_45627;(statearr_45635_45637[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45627);
return cljs.core.constant$keyword$936;
} else
{throw e45634;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__45638 = state_45627;
state_45627 = G__45638;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45627){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__45622,map__45622__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_45636 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,map__45622,map__45622__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__45606 = null;if (arguments.length > 5) {
  p__45606 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__45606);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__45639){
var app_state = cljs.core.first(arglist__45639);
arglist__45639 = cljs.core.next(arglist__45639);
var boundarylines_path = cljs.core.first(arglist__45639);
arglist__45639 = cljs.core.next(arglist__45639);
var collection_boundarylines_path = cljs.core.first(arglist__45639);
arglist__45639 = cljs.core.next(arglist__45639);
var collection_id = cljs.core.first(arglist__45639);
arglist__45639 = cljs.core.next(arglist__45639);
var tolerance = cljs.core.first(arglist__45639);
var p__45606 = cljs.core.rest(arglist__45639);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__45606);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__45640){var map__45645 = p__45640;var map__45645__$1 = ((cljs.core.seq_QMARK_(map__45645))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45645):map__45645);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45645__$1,cljs.core.constant$keyword$955);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$970], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$971], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$972], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$971], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__45645,map__45645__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__45645,map__45645__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__45645,map__45645__$1,boundaryline_ids){
return (function (p__45646){var vec__45647 = p__45646;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45647,(0),null);var vec__45648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45647,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45648,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45648,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__45645,map__45645__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$955,required,cljs.core.constant$keyword$956,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__45640 = null;if (arguments.length > 5) {
  p__45640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__45640);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__45649){
var app_state = cljs.core.first(arglist__45649);
arglist__45649 = cljs.core.next(arglist__45649);
var boundarylines_path = cljs.core.first(arglist__45649);
arglist__45649 = cljs.core.next(arglist__45649);
var collection_id = cljs.core.first(arglist__45649);
arglist__45649 = cljs.core.next(arglist__45649);
var bounds = cljs.core.first(arglist__45649);
arglist__45649 = cljs.core.next(arglist__45649);
var zoom = cljs.core.first(arglist__45649);
var p__45640 = cljs.core.rest(arglist__45649);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__45640);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$970], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$973], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$974,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__45654_45658 = cljs.core.seq(keys);var chunk__45655_45659 = null;var count__45656_45660 = (0);var i__45657_45661 = (0);while(true){
if((i__45657_45661 < count__45656_45660))
{var k_45662 = chunk__45655_45659.cljs$core$IIndexed$_nth$arity$2(null,i__45657_45661);var obj_45663 = (js_index[k_45662]);var geom_45664 = (obj_45663["geojson"]);var feature_45665 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,"Feature",cljs.core.constant$keyword$975,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$976,(obj_45663["id"]),cljs.core.constant$keyword$977,(obj_45663["id"]),cljs.core.constant$keyword$978,(obj_45663["compact_name"])], null)], null));var __45666__$1 = (feature_45665["geometry"] = geom_45664);var __45667__$2 = ((feature_45665["properties"])["index_object"] = obj_45663);features.push(feature_45665);
{
var G__45668 = seq__45654_45658;
var G__45669 = chunk__45655_45659;
var G__45670 = count__45656_45660;
var G__45671 = (i__45657_45661 + (1));
seq__45654_45658 = G__45668;
chunk__45655_45659 = G__45669;
count__45656_45660 = G__45670;
i__45657_45661 = G__45671;
continue;
}
} else
{var temp__4126__auto___45672 = cljs.core.seq(seq__45654_45658);if(temp__4126__auto___45672)
{var seq__45654_45673__$1 = temp__4126__auto___45672;if(cljs.core.chunked_seq_QMARK_(seq__45654_45673__$1))
{var c__4314__auto___45674 = cljs.core.chunk_first(seq__45654_45673__$1);{
var G__45675 = cljs.core.chunk_rest(seq__45654_45673__$1);
var G__45676 = c__4314__auto___45674;
var G__45677 = cljs.core.count(c__4314__auto___45674);
var G__45678 = (0);
seq__45654_45658 = G__45675;
chunk__45655_45659 = G__45676;
count__45656_45660 = G__45677;
i__45657_45661 = G__45678;
continue;
}
} else
{var k_45679 = cljs.core.first(seq__45654_45673__$1);var obj_45680 = (js_index[k_45679]);var geom_45681 = (obj_45680["geojson"]);var feature_45682 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,"Feature",cljs.core.constant$keyword$975,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$976,(obj_45680["id"]),cljs.core.constant$keyword$977,(obj_45680["id"]),cljs.core.constant$keyword$978,(obj_45680["compact_name"])], null)], null));var __45683__$1 = (feature_45682["geometry"] = geom_45681);var __45684__$2 = ((feature_45682["properties"])["index_object"] = obj_45680);features.push(feature_45682);
{
var G__45685 = cljs.core.next(seq__45654_45673__$1);
var G__45686 = null;
var G__45687 = (0);
var G__45688 = (0);
seq__45654_45658 = G__45685;
chunk__45655_45659 = G__45686;
count__45656_45660 = G__45687;
i__45657_45661 = G__45688;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$970], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$972], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_45731){var state_val_45732 = (state_45731[(1)]);if((state_val_45732 === (5)))
{var inst_45729 = (state_45731[(2)]);var state_45731__$1 = state_45731;return cljs.core.async.impl.ioc_helpers.return_chan(state_45731__$1,inst_45729);
} else
{if((state_val_45732 === (4)))
{var state_45731__$1 = state_45731;var statearr_45733_45745 = state_45731__$1;(statearr_45733_45745[(2)] = null);
(statearr_45733_45745[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45732 === (3)))
{var inst_45719 = (state_45731[(7)]);var inst_45726 = clustermap.boundarylines.rtree_index(rtree,inst_45719);var state_45731__$1 = state_45731;var statearr_45734_45746 = state_45731__$1;(statearr_45734_45746[(2)] = inst_45726);
(statearr_45734_45746[(1)] = (5));
return cljs.core.constant$keyword$936;
} else
{if((state_val_45732 === (2)))
{var inst_45719 = (state_45731[(7)]);var inst_45719__$1 = (state_45731[(2)]);var inst_45720 = (function (){var bl_coll_index = inst_45719__$1;return ((function (bl_coll_index,inst_45719,inst_45719__$1,state_val_45732,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_45719,inst_45719__$1,state_val_45732,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_45721 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_45720);var inst_45722 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));var inst_45723 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_45722,index_path);var inst_45724 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45723,inst_45719__$1);var state_45731__$1 = (function (){var statearr_45735 = state_45731;(statearr_45735[(7)] = inst_45719__$1);
(statearr_45735[(8)] = inst_45721);
return statearr_45735;
})();if(inst_45724)
{var statearr_45736_45747 = state_45731__$1;(statearr_45736_45747[(1)] = (3));
} else
{var statearr_45737_45748 = state_45731__$1;(statearr_45737_45748[(1)] = (4));
}
return cljs.core.constant$keyword$936;
} else
{if((state_val_45732 === (1)))
{var inst_45717 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$952,true], 0));var state_45731__$1 = state_45731;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45731__$1,(2),inst_45717);
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
var state_machine__5694__auto____0 = (function (){var statearr_45741 = [null,null,null,null,null,null,null,null,null];(statearr_45741[(0)] = state_machine__5694__auto__);
(statearr_45741[(1)] = (1));
return statearr_45741;
});
var state_machine__5694__auto____1 = (function (state_45731){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45731);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$936))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45742){if((e45742 instanceof Object))
{var ex__5697__auto__ = e45742;var statearr_45743_45749 = state_45731;(statearr_45743_45749[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45731);
return cljs.core.constant$keyword$936;
} else
{throw e45742;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$936))
{{
var G__45750 = state_45731;
state_45731 = G__45750;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45731){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_45744 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45744;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$970], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$973], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$979,x,cljs.core.constant$keyword$980,y,cljs.core.constant$keyword$981,(0),cljs.core.constant$keyword$982,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$976,hit.properties.id,cljs.core.constant$keyword$978,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$974,"Point",cljs.core.constant$keyword$983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
