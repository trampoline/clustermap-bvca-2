// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3558__auto__ = cljs.core.some((function (p__37760){var vec__37761 = p__37760;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761,(0),null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = z;if(cljs.core.truth_(and__3546__auto__))
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
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var collection_boundarylines_path__$1 = clustermap.boundarylines.make_sequential(collection_boundarylines_path);var seq__37766 = cljs.core.seq(boundarylines);var chunk__37767 = null;var count__37768 = (0);var i__37769 = (0);while(true){
if((i__37769 < count__37768))
{var bl = chunk__37767.cljs$core$IIndexed$_nth$arity$2(null,i__37769);var boundaryline_id_37770 = (bl["id"]);var tolerance_37771 = (bl["tolerance"]);var general_cache_path_37772 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37770,tolerance_37771], null));var collection_cache_path_37773 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37770,tolerance_37771], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37772,((function (seq__37766,chunk__37767,count__37768,i__37769,boundaryline_id_37770,tolerance_37771,general_cache_path_37772,collection_cache_path_37773,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37766,chunk__37767,count__37768,i__37769,boundaryline_id_37770,tolerance_37771,general_cache_path_37772,collection_cache_path_37773,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37773))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37773,((function (seq__37766,chunk__37767,count__37768,i__37769,boundaryline_id_37770,tolerance_37771,general_cache_path_37772,collection_cache_path_37773,bl,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37766,chunk__37767,count__37768,i__37769,boundaryline_id_37770,tolerance_37771,general_cache_path_37772,collection_cache_path_37773,bl,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37774 = seq__37766;
var G__37775 = chunk__37767;
var G__37776 = count__37768;
var G__37777 = (i__37769 + (1));
seq__37766 = G__37774;
chunk__37767 = G__37775;
count__37768 = G__37776;
i__37769 = G__37777;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37766);if(temp__4126__auto__)
{var seq__37766__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37766__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__37766__$1);{
var G__37778 = cljs.core.chunk_rest(seq__37766__$1);
var G__37779 = c__4314__auto__;
var G__37780 = cljs.core.count(c__4314__auto__);
var G__37781 = (0);
seq__37766 = G__37778;
chunk__37767 = G__37779;
count__37768 = G__37780;
i__37769 = G__37781;
continue;
}
} else
{var bl = cljs.core.first(seq__37766__$1);var boundaryline_id_37782 = (bl["id"]);var tolerance_37783 = (bl["tolerance"]);var general_cache_path_37784 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37782,tolerance_37783], null));var collection_cache_path_37785 = (cljs.core.truth_(collection_boundarylines_path__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_boundarylines_path__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id_37782,tolerance_37783], null)):null);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,general_cache_path_37784,((function (seq__37766,chunk__37767,count__37768,i__37769,boundaryline_id_37782,tolerance_37783,general_cache_path_37784,collection_cache_path_37785,bl,seq__37766__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37766,chunk__37767,count__37768,i__37769,boundaryline_id_37782,tolerance_37783,general_cache_path_37784,collection_cache_path_37785,bl,seq__37766__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
if(cljs.core.truth_(collection_cache_path_37785))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,collection_cache_path_37785,((function (seq__37766,chunk__37767,count__37768,i__37769,boundaryline_id_37782,tolerance_37783,general_cache_path_37784,collection_cache_path_37785,bl,seq__37766__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1){
return (function (old){return bl;
});})(seq__37766,chunk__37767,count__37768,i__37769,boundaryline_id_37782,tolerance_37783,general_cache_path_37784,collection_cache_path_37785,bl,seq__37766__$1,temp__4126__auto__,boundarylines_path__$1,collection_boundarylines_path__$1))
);
} else
{}
{
var G__37786 = cljs.core.next(seq__37766__$1);
var G__37787 = null;
var G__37788 = (0);
var G__37789 = (0);
seq__37766 = G__37786;
chunk__37767 = G__37787;
count__37768 = G__37788;
i__37769 = G__37789;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37790){var map__37806 = p__37790;var map__37806__$1 = ((cljs.core.seq_QMARK_(map__37806))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37806):map__37806);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37806__$1,cljs.core.constant$keyword$856);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37806__$1,cljs.core.constant$keyword$855);var comm = clustermap.api.boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic(collection_id,tolerance,bounds,cljs.core.array_seq([cljs.core.constant$keyword$855,boundaryline_ids,cljs.core.constant$keyword$852,true], 0));var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,comm,map__37806,map__37806__$1,bounds,boundaryline_ids){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,comm,map__37806,map__37806__$1,bounds,boundaryline_ids){
return (function (state_37811){var state_val_37812 = (state_37811[(1)]);if((state_val_37812 === (2)))
{var inst_37808 = (state_37811[(2)]);var inst_37809 = clustermap.boundarylines.cache_boundarylines(app_state,boundarylines_path,collection_boundarylines_path,inst_37808);var state_37811__$1 = (function (){var statearr_37813 = state_37811;(statearr_37813[(7)] = inst_37809);
return statearr_37813;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_37811__$1,true);
} else
{if((state_val_37812 === (1)))
{var state_37811__$1 = state_37811;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37811__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto__,comm,map__37806,map__37806__$1,bounds,boundaryline_ids))
;return ((function (switch__5693__auto__,c__5708__auto__,comm,map__37806,map__37806__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_37817 = [null,null,null,null,null,null,null,null];(statearr_37817[(0)] = state_machine__5694__auto__);
(statearr_37817[(1)] = (1));
return statearr_37817;
});
var state_machine__5694__auto____1 = (function (state_37811){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37811);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37818){if((e37818 instanceof Object))
{var ex__5697__auto__ = e37818;var statearr_37819_37821 = state_37811;(statearr_37819_37821[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37811);
return cljs.core.constant$keyword$836;
} else
{throw e37818;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__37822 = state_37811;
state_37811 = G__37822;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37811){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,comm,map__37806,map__37806__$1,bounds,boundaryline_ids))
})();var state__5710__auto__ = (function (){var statearr_37820 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,comm,map__37806,map__37806__$1,bounds,boundaryline_ids))
);
return c__5708__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,var_args){
var p__37790 = null;if (arguments.length > 5) {
  p__37790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37790);};
fetch_boundarylines.cljs$lang$maxFixedArity = 5;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__37823){
var app_state = cljs.core.first(arglist__37823);
arglist__37823 = cljs.core.next(arglist__37823);
var boundarylines_path = cljs.core.first(arglist__37823);
arglist__37823 = cljs.core.next(arglist__37823);
var collection_boundarylines_path = cljs.core.first(arglist__37823);
arglist__37823 = cljs.core.next(arglist__37823);
var collection_id = cljs.core.first(arglist__37823);
arglist__37823 = cljs.core.next(arglist__37823);
var tolerance = cljs.core.first(arglist__37823);
var p__37790 = cljs.core.rest(arglist__37823);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_boundarylines_path,collection_id,tolerance,p__37790);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__37824){var map__37829 = p__37824;var map__37829__$1 = ((cljs.core.seq_QMARK_(map__37829))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37829):map__37829);var boundaryline_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37829__$1,cljs.core.constant$keyword$855);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$867], null));var general_cache_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$868], null));var general_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$869], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$868], null)):null);var collection_cache = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var best_versions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37829,map__37829__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version(collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__37829,map__37829__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37829,map__37829__$1,boundaryline_ids){
return (function (p__37830){var vec__37831 = p__37830;var blid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37831,(0),null);var vec__37832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37831,(1),null);var tol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37832,(0),null);var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37832,(1),null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__37829,map__37829__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty(required))?clustermap.boundarylines.fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic(app_state,general_cache_path,collection_cache_path,collection_id,i_tol,cljs.core.array_seq([cljs.core.constant$keyword$855,required,cljs.core.constant$keyword$856,bounds], 0)):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__37824 = null;if (arguments.length > 5) {
  p__37824 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__37824);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__37833){
var app_state = cljs.core.first(arglist__37833);
arglist__37833 = cljs.core.next(arglist__37833);
var boundarylines_path = cljs.core.first(arglist__37833);
arglist__37833 = cljs.core.next(arglist__37833);
var collection_id = cljs.core.first(arglist__37833);
arglist__37833 = cljs.core.next(arglist__37833);
var bounds = cljs.core.first(arglist__37833);
arglist__37833 = cljs.core.next(arglist__37833);
var zoom = cljs.core.first(arglist__37833);
var p__37824 = cljs.core.rest(arglist__37833);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__37824);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$867], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$870], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$871,"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__37838_37842 = cljs.core.seq(keys);var chunk__37839_37843 = null;var count__37840_37844 = (0);var i__37841_37845 = (0);while(true){
if((i__37841_37845 < count__37840_37844))
{var k_37846 = chunk__37839_37843.cljs$core$IIndexed$_nth$arity$2(null,i__37841_37845);var obj_37847 = (js_index[k_37846]);var geom_37848 = (obj_37847["geojson"]);var feature_37849 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$871,"Feature",cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$873,(obj_37847["id"]),cljs.core.constant$keyword$874,(obj_37847["id"]),cljs.core.constant$keyword$875,(obj_37847["compact_name"])], null)], null));var __37850__$1 = (feature_37849["geometry"] = geom_37848);var __37851__$2 = ((feature_37849["properties"])["index_object"] = obj_37847);features.push(feature_37849);
{
var G__37852 = seq__37838_37842;
var G__37853 = chunk__37839_37843;
var G__37854 = count__37840_37844;
var G__37855 = (i__37841_37845 + (1));
seq__37838_37842 = G__37852;
chunk__37839_37843 = G__37853;
count__37840_37844 = G__37854;
i__37841_37845 = G__37855;
continue;
}
} else
{var temp__4126__auto___37856 = cljs.core.seq(seq__37838_37842);if(temp__4126__auto___37856)
{var seq__37838_37857__$1 = temp__4126__auto___37856;if(cljs.core.chunked_seq_QMARK_(seq__37838_37857__$1))
{var c__4314__auto___37858 = cljs.core.chunk_first(seq__37838_37857__$1);{
var G__37859 = cljs.core.chunk_rest(seq__37838_37857__$1);
var G__37860 = c__4314__auto___37858;
var G__37861 = cljs.core.count(c__4314__auto___37858);
var G__37862 = (0);
seq__37838_37842 = G__37859;
chunk__37839_37843 = G__37860;
count__37840_37844 = G__37861;
i__37841_37845 = G__37862;
continue;
}
} else
{var k_37863 = cljs.core.first(seq__37838_37857__$1);var obj_37864 = (js_index[k_37863]);var geom_37865 = (obj_37864["geojson"]);var feature_37866 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$871,"Feature",cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$873,(obj_37864["id"]),cljs.core.constant$keyword$874,(obj_37864["id"]),cljs.core.constant$keyword$875,(obj_37864["compact_name"])], null)], null));var __37867__$1 = (feature_37866["geometry"] = geom_37865);var __37868__$2 = ((feature_37866["properties"])["index_object"] = obj_37864);features.push(feature_37866);
{
var G__37869 = cljs.core.next(seq__37838_37857__$1);
var G__37870 = null;
var G__37871 = (0);
var G__37872 = (0);
seq__37838_37842 = G__37869;
chunk__37839_37843 = G__37870;
count__37840_37844 = G__37871;
i__37841_37845 = G__37872;
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
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$867], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$869], null));var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree(app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_37915){var state_val_37916 = (state_37915[(1)]);if((state_val_37916 === (5)))
{var inst_37913 = (state_37915[(2)]);var state_37915__$1 = state_37915;return cljs.core.async.impl.ioc_helpers.return_chan(state_37915__$1,inst_37913);
} else
{if((state_val_37916 === (4)))
{var state_37915__$1 = state_37915;var statearr_37917_37929 = state_37915__$1;(statearr_37917_37929[(2)] = null);
(statearr_37917_37929[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37916 === (3)))
{var inst_37903 = (state_37915[(7)]);var inst_37910 = clustermap.boundarylines.rtree_index(rtree,inst_37903);var state_37915__$1 = state_37915;var statearr_37918_37930 = state_37915__$1;(statearr_37918_37930[(2)] = inst_37910);
(statearr_37918_37930[(1)] = (5));
return cljs.core.constant$keyword$836;
} else
{if((state_val_37916 === (2)))
{var inst_37903 = (state_37915[(7)]);var inst_37903__$1 = (state_37915[(2)]);var inst_37904 = (function (){var bl_coll_index = inst_37903__$1;return ((function (bl_coll_index,inst_37903,inst_37903__$1,state_val_37916,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_37903,inst_37903__$1,state_val_37916,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_37905 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,index_path,inst_37904);var inst_37906 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state));var inst_37907 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_37906,index_path);var inst_37908 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37907,inst_37903__$1);var state_37915__$1 = (function (){var statearr_37919 = state_37915;(statearr_37919[(7)] = inst_37903__$1);
(statearr_37919[(8)] = inst_37905);
return statearr_37919;
})();if(inst_37908)
{var statearr_37920_37931 = state_37915__$1;(statearr_37920_37931[(1)] = (3));
} else
{var statearr_37921_37932 = state_37915__$1;(statearr_37921_37932[(1)] = (4));
}
return cljs.core.constant$keyword$836;
} else
{if((state_val_37916 === (1)))
{var inst_37901 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic(collection_id,cljs.core.array_seq([cljs.core.constant$keyword$852,true], 0));var state_37915__$1 = state_37915;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37915__$1,(2),inst_37901);
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
var state_machine__5694__auto____0 = (function (){var statearr_37925 = [null,null,null,null,null,null,null,null,null];(statearr_37925[(0)] = state_machine__5694__auto__);
(statearr_37925[(1)] = (1));
return statearr_37925;
});
var state_machine__5694__auto____1 = (function (state_37915){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_37915);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$836))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e37926){if((e37926 instanceof Object))
{var ex__5697__auto__ = e37926;var statearr_37927_37933 = state_37915;(statearr_37927_37933[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37915);
return cljs.core.constant$keyword$836;
} else
{throw e37926;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$836))
{{
var G__37934 = state_37915;
state_37915 = G__37934;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_37915){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_37915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__5710__auto__ = (function (){var statearr_37928 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_37928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_37928;
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
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential(boundarylines_path);var all_collections_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$867], null));var collection_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$870], null));var rtree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_state) : cljs.core.deref.call(null,app_state)),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$876,x,cljs.core.constant$keyword$877,y,cljs.core.constant$keyword$878,(0),cljs.core.constant$keyword$879,(0)], null))):null);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,hit.properties.id,cljs.core.constant$keyword$875,hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$871,"Point",cljs.core.constant$keyword$880,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3558__auto__ = hits;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
